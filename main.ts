import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The funniest honest error a washing machine could show: the classic
// disappearing-sock fault, reported in the machine's own flat, put-upon
// voice. One line, 89 characters (limit 200).
const line =
  "ERROR 404: Sock not found. I checked twice. I am a washing machine, not a miracle worker.";

// Self-check: the gate refuses anything over 200 characters.
if ([...line].length > 200 || line.trim().length === 0) {
  throw new Error("entry must be 1-200 characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
