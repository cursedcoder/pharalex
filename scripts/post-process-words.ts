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
import { stripLeakedMdC, buildTranslitSet } from "./strip-leaked-mdc";

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

// ── 3. Strip leaked MdC prefixes from translations ────────────────────────
const knownTranslits = buildTranslitSet(words);
let mdcStripped = 0;
for (const w of words) {
  const { cleaned, stripped } = stripLeakedMdC(w.translation, knownTranslits);
  if (stripped !== null) {
    w.translation = cleaned;
    mdcStripped++;
  }
}
console.log(`  Stripped leaked MdC prefixes: ${mdcStripped}`);

// ── 4. Move English words from transliteration to translation ────────────────
// Some compound entries have English words leaked into the transliteration field:
//   transliteration: "smsw hAyt Elder"  translation: "of the Portal"
//   → should be: "smsw hAyt" / "Elder of the Portal"
let englishMoved = 0;
for (const w of words) {
  const parts = w.transliteration.split(/\s+/);
  if (parts.length < 2) continue;

  // Find trailing English words (capitalized, >2 chars, contain vowels)
  let splitIdx = parts.length;
  for (let i = parts.length - 1; i >= 1; i--) {
    const p = parts[i];
    const isEnglish = /^[A-Z][a-z]{2,}$/.test(p) && /[aeiouy]/i.test(p);
    const isBracketed = /^\[/.test(p);
    if (isEnglish || isBracketed) {
      splitIdx = i;
    } else {
      break;
    }
  }

  if (splitIdx < parts.length) {
    const mdcPart = parts.slice(0, splitIdx).join(" ");
    const englishPart = parts.slice(splitIdx).join(" ");
    w.transliteration = mdcPart;
    w.translation = englishPart + " " + w.translation;
    englishMoved++;
  }
}
if (englishMoved > 0) console.log(`  Moved English from transliteration: ${englishMoved}`);

// ── 5. Strip leading dot-prefix leaked suffixes (e.g. ".i I have proved") ──
let dotStripped = 0;
for (const w of words) {
  if (w.translation.startsWith(".")) {
    // Strip leading ".X " pattern (leaked grammatical suffix)
    const fixed = w.translation.replace(/^\.[a-zA-Z]+ /, "");
    if (fixed !== w.translation) {
      w.translation = fixed;
      dotStripped++;
    }
  }
}
if (dotStripped > 0) console.log(`  Stripped dot-prefix suffixes: ${dotStripped}`);

// ── 5. Remove entries with translation "?" (unknown/empty) ─────────────────
const beforeLen = words.length;
for (let i = words.length - 1; i >= 0; i--) {
  if (words[i].translation.trim() === "?" || words[i].translation.trim() === "") {
    words.splice(i, 1);
  }
}
const removed = beforeLen - words.length;
if (removed > 0) console.log(`  Removed empty/unknown entries: ${removed}`);

// ── 7. Fix punctuation issues ────────────────────────────────────────────────
let punctFixed = 0;
for (const w of words) {
  let t = w.translation;
  // Double closing parens: )) → )
  t = t.replace(/\)\)/g, ")");
  // Stray closing paren at start/end with no opener
  if (t.endsWith(")") && !t.includes("(")) {
    t = t.slice(0, -1);
  }
  // Mismatched {...)
  t = t.replace(/\{([^}]*)\)/g, "($1)");
  if (t !== w.translation) {
    w.translation = t;
    punctFixed++;
  }
}
if (punctFixed > 0) console.log(`  Fixed punctuation: ${punctFixed}`);

// ── 8. Trim whitespace ──────────────────────────────────────────────────────
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
