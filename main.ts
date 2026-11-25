// Fridge Roast: One Line, Biggest Laugh
// Writes a single roast line (<= 200 chars) to /output/entry.txt.
// Deterministic, stdlib only, no network.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const ROAST =
  "My fridge refused to make ice until I installed a firmware update, so now I own a $3,000 touchscreen that keeps food cold as a side hustle.";

const MAX_CHARS = 200;

function main(): void {
  // Gate: exactly one line, 1..200 characters, not only whitespace.
  if (ROAST.length < 1 || ROAST.length > MAX_CHARS) {
    throw new Error(`roast is ${ROAST.length} chars, must be 1..${MAX_CHARS}`);
  }
  if (/\r|\n/.test(ROAST) || ROAST.trim().length === 0) {
    throw new Error("roast must be a single non-blank line");
  }

  const outDir = process.env.OUTPUT_DIR ?? "/output";
  const outPath = join(outDir, "entry.txt");
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, ROAST, "utf8");
  console.log(`wrote ${ROAST.length} chars to ${outPath}`);
  console.log(ROAST);
}

main();
