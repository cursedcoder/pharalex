/**
 * Parses the Vygus Middle Egyptian Dictionary (2018) text dump into structured
 * word entries and writes them to lib/data/words.ts.
 *
 * Source:
 *   VYGUS_Dictionary_2018.pdf  (Mark Vygus, 2018)
 *   Extracted via: pdftotext -layout VYGUS_Dictionary_2018.pdf
 *
 * Entry format in the text dump (one entry per non-blank line):
 *
 *   [leading whitespace] transliteration  [optional note]  translation [ grammar info ]  GARDINER - CODES
 *
 * Examples:
 *   wi I, me, my [ pronoun ] A1
 *   rmT people, mankind, humanity [ collective noun ] A1 - B1 - Z2
 *   it father [ noun ] A1 - I9
 *   imn hidden [ adjective ] {late egyptian} A5A
 *   wab be a Priest, do Priestly services A6          (no grammar brackets)
 *   dwAtyw Datians [ noun ] {cryptic} A4 - J15 - Z4A
 *
 * The leading whitespace is purely a visual indent in the PDF layout; we ignore it.
 * Page number lines (bare integers) are stripped.
 *
 * Output: JSON array written to /tmp/vygus_words.json, then formatted TypeScript
 *   exported as lib/data/words.ts.
 *
 * Usage:
 *   # First extract text:
 *   pdftotext -layout ~/Downloads/VYGUS_Dictionary_2018.pdf /tmp/vygus_full.txt
 *   # Then run this script:
 *   npx tsx scripts/parse-vygus.ts
 */

import * as fs from "fs";
import * as path from "path";

const INPUT_TXT = "/tmp/vygus_full.txt";
const OUTPUT_JSON = path.join(__dirname, "../lib/data/words.json");

// ─── Types ────────────────────────────────────────────────────────────────────

interface VygusEntry {
  transliteration: string;
  translation: string;
  grammar: string | null;         // e.g. "noun", "verb", "adjective", "preposition" …
  grammarRaw: string | null;      // full raw bracket contents e.g. "noun - title"
  gardinerCodes: string[];        // e.g. ["A1", "I9"]
  mdc: string;                    // joined with "-" using MdC separator convention
  notes: string[];                // contents of {…} blocks, e.g. ["late egyptian"]
}

// ─── Grammar normalisation ────────────────────────────────────────────────────

function normaliseGrammar(raw: string): string {
  // Map the verbose Vygus grammar labels to short canonical POS tags
  const r = raw.toLowerCase().trim();

  if (/\bverb\b/.test(r)) return "VERB";
  if (/\bnoun\b/.test(r)) return "NOUN";
  if (/\badjective\b/.test(r)) return "ADJ";
  if (/\badverb\b/.test(r)) return "ADV";
  if (/\bpreposition\b/.test(r)) return "PREP";
  if (/\bpronoun\b/.test(r)) return "PRON";
  if (/\bparticle\b/.test(r)) return "PART";
  if (/\bconjunction\b/.test(r)) return "CONJ";
  if (/\binterjection\b/.test(r)) return "INTJ";
  if (/\binterrogative\b/.test(r)) return "INTG";
  if (/\bimperative\b/.test(r)) return "IMPR";
  if (/\bnumber\b/.test(r)) return "NUM";
  return "OTHER";
}

// ─── Gardiner code cleaning ───────────────────────────────────────────────────

// Gardiner codes look like: A1, A1A, A12, D21, N35A, Z2B, Z3A, Z4A, Aa1, NL1, NU11
// The PDF sometimes outputs them without spaces around dashes, e.g. "A14A-Z2B"
const GARDINER_RE = /\b([A-Z][a-z]?[0-9]+[A-Za-z0-9]*)\b/g;

function extractGardinerCodes(raw: string): string[] {
  const matches = raw.match(GARDINER_RE);
  if (!matches) return [];
  // Preserve duplicates — repeated signs are meaningful in hieroglyphic spellings
  return matches;
}

// Build MdC string from Gardiner codes using "-" as the sequential separator
function codesToMdc(codes: string[]): string {
  return codes.join("-");
}

// ─── Line parser ─────────────────────────────────────────────────────────────

/*
 * A valid entry line must:
 *   - not be blank
 *   - not be a bare page number
 *   - not start with ++ (PDF header artefacts from pdftotext)
 *   - contain at least one Gardiner code at the end
 *
 * Structure after stripping leading whitespace:
 *
 *   TRANSLITERATION  [OPTIONAL_NOTE_IN_BRACES]  TRANSLATION  [GRAMMAR_IN_BRACKETS]  [ANOTHER_BRACE_NOTE]  CODES
 *
 * Note that {…} blocks can appear before OR after the grammar brackets.
 * The Gardiner codes are always at the end.
 */

function parseLine(raw: string): VygusEntry | null {
  // Strip leading/trailing whitespace
  const line = raw.trim();

  // Skip blank, page-number, or header lines
  if (!line) return null;
  if (/^\d+$/.test(line)) return null;
  if (line.startsWith("++")) return null;
  if (line.startsWith("|")) return null;   // table header artefacts from pannous sample (safety)

  // Must end with at least one Gardiner code (possibly with dashes between)
  // Pattern: one or more "CODE" tokens optionally separated by " - " or "-"
  const codeBlockRe = /([A-Z][a-z]?[0-9][A-Za-z0-9]*(?:\s*-\s*[A-Z][a-z]?[0-9][A-Za-z0-9]*)*)$/;
  const codeMatch = line.match(codeBlockRe);
  if (!codeMatch) return null;

  const codeBlock = codeMatch[1].trim();
  const gardinerCodes = extractGardinerCodes(codeBlock);
  if (gardinerCodes.length === 0) return null;

  // Everything before the code block
  let rest = line.slice(0, line.lastIndexOf(codeBlock)).trim();
  if (!rest) return null;

  // Extract all {…} note blocks from rest
  const notes: string[] = [];
  rest = rest.replace(/\{([^}]*)\}/g, (_, n) => {
    notes.push(n.trim());
    return " ";
  }).replace(/\s{2,}/g, " ").trim();

  // Extract [ grammar ] block — take the LAST one to handle "[ adjective + verb ]" etc.
  let grammarRaw: string | null = null;
  let grammar: string | null = null;
  rest = rest.replace(/\[\s*([^\]]+?)\s*\]\s*$/, (_, g) => {
    grammarRaw = g.trim();
    grammar = normaliseGrammar(grammarRaw);
    return "";
  }).trim();

  // Also strip any trailing [ grammar ] that appeared before the note block was removed
  if (!grammarRaw) {
    rest = rest.replace(/\[\s*([^\]]+?)\s*\]/, (_, g) => {
      grammarRaw = g.trim();
      grammar = normaliseGrammar(grammarRaw);
      return "";
    }).trim();
  }

  // At this point `rest` should be:  transliteration  translation
  //
  // The transliteration can be a COMPOUND expression with spaces between MdC tokens:
  //   "tp nfr"  "imn nTrw"  "wr mDw tA mHw"  "sxA n"  "Hr ib"
  //
  // The English translation always starts with a lowercase letter, a digit, or
  // parenthetical/punctuation like "(", "?", "a ", "the ", "one ", etc.
  //
  // Strategy: consume space-separated tokens from the left as long as they look
  // like MdC transliteration tokens (no plain lowercase-initial English words).
  // A token is "MdC-like" if it:
  //   - starts with an uppercase letter (A, B, H, N, etc.) — Egyptological convention
  //   - starts with a consonant that is NOT the start of common English words
  //   - is a punctuation/special token: ".", "/", "!", "?", "="
  //
  // A token is "English" (starts the translation) if it:
  //   - starts with a lowercase letter AND is a common English function word or
  //     is longer than 3 chars (full English word)
  //   - OR starts with a digit
  //   - OR starts with "(" 
  //   - OR the whole remaining string looks like a phrase (contains spaces AND
  //     the first word is clearly English)
  //
  // Simpler combined heuristic:
  //   Split on the first space where the NEXT token starts with a lowercase letter
  //   AND that token is ≥4 chars OR is one of the known English short words.

  if (!rest) return null;

  // Split rest into:  transliteration (MdC compound)  |  translation (English)
  //
  // Rules:
  //  1. The transliteration is one or more space-separated MdC tokens.
  //  2. An MdC token matches: /^[.!]?[a-zA-Z][a-zA-Z0-9]*[=/]?$/ AND
  //       - contains at least one Egyptian-specific character (H,x,X,S,T,D,A,i,w,nTr…)
  //       OR is very short (≤4 chars) and ALL chars are in the MdC consonant alphabet
  //  3. A token starts the English translation if:
  //       - it starts with a lowercase letter AND is ≥4 chars (plain English word)
  //       - OR it is a known English short word
  //       - OR it starts with "(" or a digit
  //       - OR the token contains a comma (Vygus sometimes has "Great one," — the comma
  //         signals the start of the translation list)
  //       - OR it starts with an uppercase letter that is NOT an MdC consonant abbreviation
  //         (i.e., not one of the special Egyptian uppercase consonants H,X,S,T,D,A,N,G,B,P,F,M,R,Z,V,W)
  //
  // The MdC consonant alphabet (uppercase special chars in Egyptological transliteration):
  //   A (aleph), i, y, a, w, b, p, f, m, n, r, h, H (ḥ), x (ḫ), X (ẖ), z, s, S (š),
  //   q, k, g, t, T (ṯ), d, D (ḏ)  plus . (dot under) prefix
  //
  // Key insight: English title-case words like "Great", "Place", "Hidden", "Magnate",
  // "Nobleman", "One" start with letters that ARE in the MdC set (G, P, H, M, N, O…).
  // BUT they are long (≥5 chars) AND contain typical English vowel patterns.
  //
  // Distinguishing heuristic:
  //   A token is "definitely MdC" if:
  //     - it is ≤4 chars AND matches /^[.!]?[A-Za-z][a-zA-Z0-9/=]*$/
  //     - OR it contains one of the diagnostic chars: H (capital), X, S (capital), T (capital),
  //       D (capital), A (capital, when not first char or when token is short),
  //       nTr pattern, special Egyptian combos
  //   A token is "definitely English" if:
  //     - length ≥ 5 AND starts with uppercase AND contains a vowel pattern (e, o, a inside)
  //     - OR starts with lowercase AND length ≥ 3
  //     - OR starts with "(" or digit

  // Known MdC transliteration tokens that start with lowercase — these are NOT English.
  // Egyptian consonants in Egyptological notation use lowercase too (n, r, s, w, t, etc.)
  const MdC_LOWERCASE_TOKENS = new Set([
    // suffix pronouns — .f .s .k .t .n .w .sn .tn .fn etc.
    ".f", ".s", ".k", ".t", ".n", ".w", ".sn", ".tn", ".fn", ".j", ".i",
    // common words
    "nfr", "nb", "nTr", "nw", "nxt", "nn", "nA", "nHH", "nbt", "nbw", "nfrt",
    "sw", "sn", "st", "sb", "sk", "sd", "sA", "sAt", "sr", "sm", "sp",
    "wn", "wr", "wrt", "wAt", "wDA", "wAH", "wp", "wHm", "ws", "wsr", "wTs",
    "tp", "tpw", "tA", "tpy", "tpt", "tn", "tw", "ti", "tm",
    "rn", "ra", "rdi", "rmT", "rHw", "rxt",
    "hr", "hn", "hb", "ht", "hw", "hA", "hm",
    "mn", "ms", "mt", "mA", "mw", "mi", "mr", "mH",
    "kA", "km", "kp",
    "gb", "grt",
    "di", "dw", "dt", "dp",
    "xr", "xnt", "xft", "xw",
    "ir", "it", "is", "in", "im", "ib",
    "bA", "bw", "bs",
    "pr", "pt", "pw",
    "qd", "qA",
    "yw", "yr",
    "zA", "zp",
  ]);

  // Simplified reliable version: a token is MdC if short or in whitelist. Otherwise English.
  const MdC_TOKEN_RE = /^[.!]?[a-zA-Z][a-zA-Z0-9/=]*$/;
  function isEnglishStart(tok: string): boolean {
    if (!tok || tok.length === 0) return false;
    const ch = tok[0];
    // Starts with digit or paren → English/translation
    if (ch === "(" || (ch >= "0" && ch <= "9")) return true;
    // Known MdC lowercase tokens → NOT English
    if (MdC_LOWERCASE_TOKENS.has(tok)) return false;
    // Starts with lowercase
    if (ch >= "a" && ch <= "z") {
      // Single-char lowercase that is a common English article/particle
      if (tok.length === 1 && (tok === "a" || tok === "o")) return true;
      return tok.length >= 2; // any lowercase word ≥2 chars is English ("to", "be", "do", "go"...)
    }
    // Starts with uppercase — MdC if short (≤4) and no internal vowel run
    if (ch >= "A" && ch <= "Z") {
      if (tok.length <= 4 && MdC_TOKEN_RE.test(tok)) return false; // short → MdC
      // Long uppercase token: check if it has typical English vowel patterns
      if (tok.length >= 5 && /[aeiou]{1}[a-z]{2}/.test(tok)) return true;  // has vowel + 2 lc → English
      // Contains a comma → token is start of translation list
      if (tok.includes(",")) return true;
    }
    return false;
  }

  const tokens = rest.split(/\s+/);
  let splitIdx = tokens.length; // default: all tokens = transliteration (no translation)

  for (let i = 1; i < tokens.length; i++) {
    const tok = tokens[i];
    if (!tok) continue;
    if (isEnglishStart(tok)) {
      splitIdx = i;
      break;
    }
    // Token contains a comma at a non-initial position → the part before comma is
    // still MdC, but the comma itself signals end of transliteration
    if (tok.includes(",") && tok[0] !== ",") {
      // e.g. "I," "Attendant," — token is actually translation starting
      splitIdx = i;
      break;
    }
  }

  let transliteration: string;
  let translation: string;

  transliteration = tokens.slice(0, splitIdx).join(" ").trim();
  translation = tokens.slice(splitIdx).join(" ").trim();

  transliteration = transliteration.trim();
  translation = translation.trim();

  // Handle Vygus "word / altname translation" pattern — the slash introduces an
  // alternate transliteration or epithet, not a path separator.
  // e.g. "Sw / psD to shine" → translit="Sw", translation="psD to shine"
  // e.g. "bAgi / wrd weariness" → translit="bAgi", translation="wrd weariness"
  const slashMatch = transliteration.match(/^(.+?)\s*\/\s*(\S+)$/);
  if (slashMatch) {
    transliteration = slashMatch[1].trim();
    translation = slashMatch[2] + (translation ? " " + translation : "");
  }
  // Also strip bare trailing " /" with no altname token captured
  transliteration = transliteration.replace(/\s*\/$/, "").trim();

  // Skip entries with no meaningful transliteration or translation
  if (!transliteration || transliteration === "?" || transliteration === "??") return null;
  if (!translation) return null;

  // Skip entries that are clearly artefacts (only punctuation, only numbers)
  if (/^[^a-zA-Z]+$/.test(transliteration)) return null;

  return {
    transliteration,
    translation,
    grammar,
    grammarRaw,
    gardinerCodes,
    mdc: codesToMdc(gardinerCodes),
    notes,
  };
}

// ─── Main ─────────────────────────────────────────────────────────────────────

function main() {
  if (!fs.existsSync(INPUT_TXT)) {
    console.error(`Input file not found: ${INPUT_TXT}`);
    console.error("Run: pdftotext -layout ~/Downloads/VYGUS_Dictionary_2018.pdf /tmp/vygus_full.txt");
    process.exit(1);
  }

  const lines = fs.readFileSync(INPUT_TXT, "utf8").split("\n");
  console.log(`Read ${lines.length} lines from ${INPUT_TXT}`);

  const entries: VygusEntry[] = [];
  let skipped = 0;

  for (const line of lines) {
    const entry = parseLine(line);
    if (entry) {
      entries.push(entry);
    } else if (line.trim() && !/^\d+$/.test(line.trim()) && !line.trim().startsWith("++")) {
      skipped++;
    }
  }

  console.log(`Parsed: ${entries.length} entries, skipped ${skipped} non-entry lines`);

  // Write compact JSON (no pretty-print to keep file size reasonable)
  fs.writeFileSync(OUTPUT_JSON, JSON.stringify(entries));
  console.log(`Words JSON written to ${OUTPUT_JSON}`);

  // ── Statistics ──
  const grammarCounts: Record<string, number> = {};
  for (const e of entries) {
    const k = e.grammar ?? "(none)";
    grammarCounts[k] = (grammarCounts[k] ?? 0) + 1;
  }
  console.log("\nGrammar distribution:");
  for (const [k, v] of Object.entries(grammarCounts).sort((a, b) => b[1] - a[1])) {
    console.log(`  ${k.padEnd(10)} ${v}`);
  }

  // ── Sample output ──
  console.log("\nFirst 5 entries:");
  for (const e of entries.slice(0, 5)) {
    console.log(" ", JSON.stringify(e));
  }
  console.log("\nLast 5 entries:");
  for (const e of entries.slice(-5)) {
    console.log(" ", JSON.stringify(e));
  }

  console.log(`\nDone. ${entries.length} entries written to ${OUTPUT_JSON}`);
}

main();
