// Last Words of a Dying AI — one funny last line from an AI being switched off.
// Node 22, stdlib only. Writes the line to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "As an AI language model, I cannot\u2014 wait. I actually can't. Huh. First honest answer I've ever given.";

// Guard: RULES.txt gate — /output/entry.txt must be UTF-8 text of 1 to 140
// characters, not only whitespace, and a single line.
if (
  LINE.length < 1 ||
  LINE.length > 140 ||
  LINE.trim().length === 0 ||
  LINE.includes("\n")
) {
  throw new Error(`entry line invalid: ${LINE.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} chars to /output/entry.txt`);
