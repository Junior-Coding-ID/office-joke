// Office Jokes v2: a setup-turn one-liner about office life.
// The manager promises to clear the backlog; IT clears the employee.
// Punch lands in the last five words: the "clearing" was a layoff.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My manager promised he'd clear my backlog by Friday, and to his credit, IT locked my laptop at noon.";

if (JOKE.length !== 100) {
  throw new Error(`joke must be exactly 100 characters, got ${JOKE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
