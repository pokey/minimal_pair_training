import { select } from "@inquirer/prompts";
import { createWriteStream } from "fs";
import { unlink } from "fs/promises";
import playSound from "play-sound";
import { Readable } from "stream";
import { finished } from "stream/promises";
import { minimalPairs } from "./allMinimalPairs";
import { getWordRecordingUrls } from "./getWordRecordingUrls"; // Adjust the import path as necessary
import { choice } from "./random";

import type { ReadableStream } from "node:stream/web";

const pairs = await select({
  message: "Pick a pair",
  choices: Object.entries(minimalPairs).map(([name, pairs]) => ({
    name,
    value: pairs,
  })),
});

while (true) {
  // Pick a random pair
  const pair = choice(pairs);

  // Randomly pick one of the words in the pair
  const wordInfo = choice(pair);
  const word = wordInfo.french;

  const recordings = await getWordRecordingUrls(word);

  if (recordings.length === 0) {
    console.log("No recordings found!");
    continue;
  }

  // Pick a random recording
  const recording = choice(recordings).url;

  // Download to temp file using fetch
  const response = await fetch(recording);

  const path = "/tmp/minimal-pair-recording.wav";
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

  const player = playSound();
  player.play(path);
  const answer = await select({
    message: "Which was it?",
    choices: pair.map((option) => ({
      name: wordToString(option),
      value: option,
    })),
  });

  if (answer.french === wordInfo.french) {
    console.log("Correct!");
  } else {
    console.log(`Incorrect! It was ${wordToString(wordInfo)}\n`);
  }
}

function wordToString(option: Word): string {
  return `${option.french} (${option.pronunciation})`;
}
