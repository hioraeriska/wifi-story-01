// Tell a Whole Story in 32 Characters — make.fun entry
// Writes a single Wi-Fi network name (<=32 chars) to /output/entry.txt.
// The name: "MyExTookTheRouter" — 17 chars. A breakup in one network name:
// the ex is the character, the router is what happened, and every
// passer-by can fill in the rest of the story.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const NAME = "MyExTookTheRouter";

// Gate: the bounty seals /output/entry.txt to UTF-8 text of 1 to 32
// characters, not only white space. Refuse to write anything invalid.
function validateName(name: string): void {
  if (name.length < 1 || name.length > 32) {
    throw new Error(`Wi-Fi name must be 1-32 characters, got ${name.length}`);
  }
  if (name.trim().length === 0) {
    throw new Error("Wi-Fi name must not be only white space");
  }
}

validateName(NAME);

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), NAME, "utf8");
