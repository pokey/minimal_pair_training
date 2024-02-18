import { getWordRecordingUrls } from "./getWordRecordingUrls"; // Adjust the import path as necessary

const word: string = process.argv[2];

if (!word) {
  console.log("Please provide a word to search for");
  process.exit(1);
}

const results = await getWordRecordingUrls(word);
const titles = results.map((result) => result.title).join("\n");
console.log(titles);
