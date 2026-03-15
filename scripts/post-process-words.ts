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
    // Must contain unambiguous English vowels (e, o, u) — not just 'a'/'i'/'y'
    // which are also MdC semivowels. "Elder" has 'e', "Tbti" does not.
    // Exception: known English words that only have a/i vowels.
    // Also match hyphenated English compounds like "four-sided", "lion-headed".
    const KNOWN_ENGLISH_AI = new Set([
      "Day", "Dill", "Half", "District", "High", "Main", "King", "Clan", "Standard",
      "Tamarisk", "Sandal", "Syrian", "Acacia", "Strain", "Scribal", "Asiatic",
      "Attack", "Daily", "Thighs", "Hand",
    ]);
    const isShortEnglish = new Set(["He", "She", "His"]);
    const isPlainEnglish = (/^[A-Z][a-z]{2,}$/.test(p) && (/[eou]/i.test(p) || KNOWN_ENGLISH_AI.has(p))) || isShortEnglish.has(p);
    const isHyphenated = /^[a-z]+-[a-z]+$/i.test(p) && /[eou]/i.test(p);
    const isEnglish = isPlainEnglish || isHyphenated;
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

// ── 4b. Move incorrectly placed MdC tokens back from translation to translit ─
// Words like "Tbti" (ṯbtj) were incorrectly moved to translation because they
// contain 'i' (ambiguous vowel). Move them back if they look like MdC.
let mdcMovedBack = 0;
for (const w of words) {
  const parts = w.translation.split(" ");
  if (parts.length < 2) continue;
  const first = parts[0];
  // MdC token: starts with MdC-special uppercase, short, no e/o/u
  if (first.length < 2 || first.length > 8) continue;
  if (!/^[A-Z][a-z]*$/.test(first)) continue;
  if (/[eou]/i.test(first)) continue;
  if (!"AHSTDX".includes(first[0])) continue;
  // Skip known English words that only have a/i vowels
  const KNOWN_ENG = new Set([
    "Day", "Dill", "Half", "District", "High", "Main", "King", "Clan", "Standard",
    "His", "Tamarisk", "Sandal", "Syrian", "Acacia", "Strain", "Scribal",
    "Asiatic", "Attack", "Daily", "Thighs", "Hand",
  ]);
  if (KNOWN_ENG.has(first)) continue;
  // Next word should look like English (not another MdC token)
  const second = parts[1];
  if (!second) continue;
  // Move back
  w.transliteration = w.transliteration + " " + first;
  w.translation = parts.slice(1).join(" ");
  mdcMovedBack++;
}
if (mdcMovedBack > 0) console.log(`  Moved MdC back to transliteration: ${mdcMovedBack}`);

// ── 5. Move quoted English glosses and possessives from transliteration ──────
// Entries like: translit "bik 'falcon'" translation "ship (of the king)"
//   → should be: "bik" / "'falcon' ship (of the king)"
// Also: "it nTr God's" / "Father" → "it nTr" / "God's Father"
let quotedMoved = 0;
for (const w of words) {
  const tr = w.transliteration;
  // Handle trailing possessive English (e.g. "God's")
  const possMatch = tr.match(/^(.+?)\s+((?:[A-Z][a-z]*'s))$/);
  if (possMatch) {
    w.transliteration = possMatch[1];
    w.translation = possMatch[2] + " " + w.translation;
    quotedMoved++;
    continue;
  }
  // Handle trailing single-quoted gloss (e.g. "'falcon'")
  const quoteMatch = tr.match(/^(.+?)\s+'([^']+)'?$/);
  if (quoteMatch) {
    w.transliteration = quoteMatch[1].trim();
    w.translation = "'" + quoteMatch[2] + "' " + w.translation;
    quotedMoved++;
  }
}
if (quotedMoved > 0) console.log(`  Moved quoted/possessive from transliteration: ${quotedMoved}`);

// ── 6. Strip leading dot-prefix leaked suffixes (e.g. ".i I have proved") ──
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
  // Mismatched {...)  and  [...}
  t = t.replace(/\{([^}]*)\)/g, "($1)");
  t = t.replace(/\[([^\]]*)\}/g, "[$1]");
  t = t.replace(/\{([^}]*)\]/g, "[$1]");
  // Strip editorial notes in curly braces {V11 should be 'mirrored'}
  t = t.replace(/\s*\{[^}]*\}/g, "");
  // Also strip unclosed editorial notes {... at end of string
  t = t.replace(/\s*\{[^}]*$/g, "");
  // Trailing comma
  t = t.replace(/,\s*$/, "");
  // Missing space after comma (but not in scientific names like "nycticorax,nycticorax")
  t = t.replace(/,([a-zA-Z])/g, ", $1");
  // Space before comma
  t = t.replace(/ ,/g, ",");
  // Double commas
  t = t.replace(/,,/g, ",");
  // Excessive dots (PDF parsing artifacts) → ellipsis
  t = t.replace(/\.{3,}/g, "…");
  // "badly of" at end → "badly off" (word-boundary aware)
  t = t.replace(/badly of$/g, "badly off");
  if (t !== w.translation) {
    w.translation = t;
    punctFixed++;
  }
}
if (punctFixed > 0) console.log(`  Fixed punctuation: ${punctFixed}`);

// ── 8. Clean transliteration oddities ─────────────────────────────────────────
let translitCleaned = 0;
for (const w of words) {
  let tr = w.transliteration;
  // Remove trailing commas/punctuation
  tr = tr.replace(/[,;]+$/, "").trim();
  // Remove trailing "I" that leaked from English
  tr = tr.replace(/ I$/, "");
  // Clean excessive dots in transliteration
  tr = tr.replace(/\.{3,}/g, "…");
  if (tr !== w.transliteration) {
    w.transliteration = tr;
    translitCleaned++;
  }
}
if (translitCleaned > 0) console.log(`  Cleaned transliterations: ${translitCleaned}`);

// ── 9. Remove entries with garbage translations ──────────────────────────────
const beforeGarbage = words.length;
for (let i = words.length - 1; i >= 0; i--) {
  const t = words[i].translation;
  const tr = words[i].transliteration;
  // Remove entries that are mostly dots (parsing garbage)
  if (/^[a-zA-Z. ]*…+[a-zA-Z. ]*$/.test(t) && t.replace(/[….\s]/g, "").length < 5) {
    words.splice(i, 1);
  }
  // Remove entries with excessive dots in transliteration
  if (/…/.test(tr) || /\.{3,}/.test(tr)) {
    words.splice(i, 1);
  }
}
const garbageRemoved = beforeGarbage - words.length;
if (garbageRemoved > 0) console.log(`  Removed garbage entries: ${garbageRemoved}`);

// ── 10. Trim whitespace ──────────────────────────────────────────────────────
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
