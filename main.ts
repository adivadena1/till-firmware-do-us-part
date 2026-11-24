// Till Firmware Do Us Part — one-liner entry.
// Writes a single 117-character line (a robot's wedding vow) to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I do. I have loved you since firmware 1.0, and I will love you until a newer model makes you forget my serial number.";

// Gate check: the entry must be a single line of 1–200 characters.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`LINE must be 1-200 characters long, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
