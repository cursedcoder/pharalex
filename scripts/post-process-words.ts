/**
 * Post-processing pass on words.json.
 * Applies patches and fixes to the Vygus dictionary data.
 *
 * Usage: npx tsx scripts/post-process-words.ts
 */

import * as fs from "fs";
import * as path from "path";
import { fixTypos } from "./typo-fixes";
import { applyWordPatches } from "./word-patches";

const WORDS_PATH = path.join(process.cwd(), "public/data/words.json");

console.log("Post-processing words.json...");
const words = JSON.parse(fs.readFileSync(WORDS_PATH, "utf-8"));
console.log(`  Loaded ${words.length} words`);

// ── 1. Apply known patches ──────────────────────────────────────────────────
const patched = applyWordPatches(words);
console.log(`  Applied word patches: ${patched}`);

// ── 2. Fix typos in translations ────────────────────────────────────────────
let typosFixed = 0;
for (const w of words) {
  const fixed = fixTypos(w.translation);
  if (fixed !== w.translation) {
    w.translation = fixed;
    typosFixed++;
  }
}
console.log(`  Fixed typos: ${typosFixed}`);

// ── 3. Trim whitespace ──────────────────────────────────────────────────────
let trimmed = 0;
for (const w of words) {
  const t = w.transliteration.trim();
  const tr = w.translation.trim();
  if (t !== w.transliteration || tr !== w.translation) {
    w.transliteration = t;
    w.translation = tr;
    trimmed++;
  }
}
console.log(`  Trimmed whitespace: ${trimmed}`);

// ── Write output ────────────────────────────────────────────────────────────
fs.writeFileSync(WORDS_PATH, JSON.stringify(words));
console.log(`\nWrote ${words.length} words to ${WORDS_PATH}`);
