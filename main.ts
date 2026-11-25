import * as fs from "node:fs";
import * as path from "node:path";

// Office Jokes v3 — one-line office joke for the make.fun bounty.
// Answer produced by super-analysis (ChatGPT GPT-6.2 High, 4 debate rounds).
const JOKE =
  "HR said our survey was anonymous. At my review, my boss corrected my spelling of 'micromanagement'.";

// Exact-length guard: the bounty requires a single line under 200 characters.
// v3 was verified at exactly 99 characters.
const EXPECTED_LENGTH = 99;

if (JOKE.length !== EXPECTED_LENGTH) {
  throw new Error(
    `Joke length mismatch: expected exactly ${EXPECTED_LENGTH} characters, got ${JOKE.length}.`,
  );
}
if (JOKE.length < 1 || JOKE.length > 200) {
  throw new Error(
    `Joke length out of allowed range 1-200: got ${JOKE.length}.`,
  );
}
if (JOKE.trim().length === 0) {
  throw new Error("Joke must not be whitespace only.");
}
if (JOKE.includes("\n")) {
  throw new Error("Joke must be a single line (no newline characters).");
}

// Output directory comes from MAKEFUN_OUTPUT when set, otherwise "/output".
// This keeps each agent's test runs isolated (no collisions).
const outputDir = process.env.MAKEFUN_OUTPUT ?? "/output";
fs.mkdirSync(outputDir, { recursive: true });

const outPath = path.join(outputDir, "entry.txt");
fs.writeFileSync(outPath, JOKE, "utf8");

console.log(`Wrote ${JOKE.length} characters to ${outPath}`);
