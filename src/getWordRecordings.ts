import { select } from "@inquirer/prompts";
import { createWriteStream } from "fs";
import { unlink } from "fs/promises";
import playSound from "play-sound";
import { Readable } from "stream";
import { finished } from "stream/promises";
import { MinimalPair, Word, minimalPairs } from "./allMinimalPairs";
import { getWordRecordingUrls } from "./getWordRecordingUrls"; // Adjust the import path as necessary
import { choice } from "./random";

import type { ReadableStream } from "node:stream/web";
import prompt from "inquirer-interactive-list-prompt";
import chalk from "chalk";
import binomialTest from "@stdlib/stats-binomial-test";

const player = playSound();
const keys = ["j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v"];

while (true) {
  const pairs: MinimalPair[] | "quit" = await prompt({
    message: "Pick a pair",
    choices: [
      ...Object.entries(minimalPairs).map(([name, pairs], i) => ({
        name,
        value: pairs,
        key: keys[i],
      })),
      {
        name: "Quit",
        value: "quit",
        key: "q",
      },
    ],
  });

  if (pairs === "quit") {
    process.exit(0);
  }

  class NoRecordingsError extends Error {}

  let successes = 0;
  let total = 0;

  while (true) {
    // Pick a random pair
    const pair = choice(pairs);

    const wordsWithRecordings = pair.map((word, index) => ({
      word,
      path: `/tmp/minimal-pair-recording-${index}.wav`,
    }));

    try {
      await Promise.all(
        wordsWithRecordings.map(({ word, path }) =>
          downloadRandomWordRecording(word.french, path)
        )
      );
    } catch (e) {
      if (e instanceof NoRecordingsError) {
        continue;
      }
      throw e;
    }

    // Randomly pick one of the words in the pair
    const correctWord = choice(wordsWithRecordings);

    player.play(correctWord.path);

    const chosenWord: WordWithRecording | "done" = await prompt({
      message: "Which was it?",
      choices: [
        ...wordsWithRecordings.map((option, i) => ({
          name: wordToString(option.word),
          value: option,
          key: keys[i],
        })),
        {
          name: "Replay",
          value: "replay",
          key: "l",
          fn() {
            player.play(correctWord.path);
          },
        },
        {
          name: "Done",
          value: "done",
          key: "d",
        },
      ],
    });

    if (chosenWord === "done") {
      break;
    }

    total += 1;

    const success = chosenWord === correctWord;

    if (success) {
      successes += 1;
      console.log(`\n${chalk.green.bold("Correct!")}\n`);
    } else {
      console.log(
        `\n${chalk.red.bold("Wrong!")} It was ${chalk.cyan.bold(
          wordToString(correctWord.word)
        )}\n`
      );
      player.play(chosenWord.path);
    }

    const { pValue } = binomialTest(successes, total);

    console.log(
      `Success rate: ${successes}/${total} (${(
        (successes / total) *
        100
      ).toFixed(2)}%, p-value: ${pValue.toFixed(3)})\n`
    );

    if (!success) {
      await prompt({
        message: "Replay?",
        default: chosenWord,
        choices: [
          ...wordsWithRecordings.map((option, i) => ({
            name: wordToString(option.word),
            key: keys[i],
            fn() {
              player.play(option.path);
            },
            value: option,
          })),
          {
            name: "Continue",
            value: "done",
            key: "l",
          },
        ],
      });

      console.log("\n");
    }
  }
}

interface WordWithRecording {
  word: Word;
  path: string;
}

function wordToString(option: Word): string {
  return `${option.french} (${option.pronunciation})`;
}

async function downloadRandomWordRecording(word: string, path: string) {
  const recordings = await getWordRecordingUrls(word);

  if (recordings.length === 0) {
    throw new NoRecordingsError("No recordings found");
  }

  // Pick a random recording
  const recording = choice(recordings).url;

  // Download to temp file using fetch
  const response = await fetch(recording);

  // Remove the file if it already exists
  try {
    await unlink(path);
  } catch (e) {
    if (e.code !== "ENOENT") {
      throw e;
    }
  }
  const fileStream = createWriteStream(path, { flags: "wx" });
  await finished(
    Readable.fromWeb(response.body as ReadableStream<Uint8Array>).pipe(
      fileStream
    )
  );
}
