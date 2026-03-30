/**
 * Integrates TLA (Thesaurus Linguae Aegyptiae) lemmata CSV into words.json.
 *
 * Source: TLA-lemmata-Wikidata-2024.csv (CC BY-SA 4.0)
 *   https://thesaurus-linguae-aegyptiae.de
 *
 * For each TLA lemma we:
 *   1. Convert Unicode transliteration → MdC ASCII
 *   2. Map Unicode hieroglyphs → Gardiner codes via glyphs.json
 *   3. Match against existing words.json by transliteration
 *   4. Matched entries: enrich with gender, tlaId, wikidataId
 *   5. Matched entries: add TLA senses as new entries when meaning is novel
 *   6. New entries (with hieroglyphs): add as new word entries
 *
 * Usage: npx tsx scripts/integrate-tla.ts [path-to-csv]
 */

import * as fs from "fs";
import * as path from "path";
import { unicodeToMdc } from "./translit-utils";

// ── Paths ───────────────────────────────────────────────────────────────────

const CSV_PATH =
  process.argv[2] ??
  path.join(
    process.env.HOME ?? "",
    "Downloads/TLA-lemmata-Wikidata-2024.csv"
  );
const WORDS_PATH = path.join(process.cwd(), "public/data/words.json");
const GLYPHS_PATH = path.join(process.cwd(), "public/data/glyphs.json");

// ── TLA grammar → our normalised POS tags ───────────────────────────────────

const TLA_GRAMMAR_MAP: Record<string, string> = {
  noun: "NOUN",
  verb: "VERB",
  adjective: "ADJ",
  adverb: "ADV",
  preposition: "PREP",
  pronoun: "PRON",
  "grammatical particle": "PART",
  numeral: "NUM",
  interjection: "INTJ",
  "proper noun": "NOUN", // we tag proper nouns as NOUN with a note
};

const TLA_GENDER_MAP: Record<string, string> = {
  masculine: "m",
  feminine: "f",
};

// ── Unicode hieroglyph → Gardiner code lookup ───────────────────────────────

interface GlyphEntry {
  code: string;
  unicode: string;
  [key: string]: unknown;
}

function buildUnicodeToGardiner(glyphsPath: string): Map<string, string> {
  const glyphs: GlyphEntry[] = JSON.parse(fs.readFileSync(glyphsPath, "utf-8"));
  const map = new Map<string, string>();
  for (const g of glyphs) {
    if (g.unicode && g.code) {
      map.set(g.unicode, g.code);
    }
  }
  return map;
}

// ── CSV parsing (simple — fields are double-quoted, no embedded newlines) ───

function parseCSVLine(line: string): string[] {
  const fields: string[] = [];
  let i = 0;
  while (i < line.length) {
    if (line[i] === '"') {
      // Quoted field
      i++; // skip opening quote
      let field = "";
      while (i < line.length) {
        if (line[i] === '"') {
          if (i + 1 < line.length && line[i + 1] === '"') {
            field += '"';
            i += 2;
          } else {
            i++; // skip closing quote
            break;
          }
        } else {
          field += line[i];
          i++;
        }
      }
      fields.push(field);
      if (i < line.length && line[i] === ",") i++; // skip comma
    } else {
      // Unquoted field
      const next = line.indexOf(",", i);
      if (next === -1) {
        fields.push(line.slice(i));
        break;
      }
      fields.push(line.slice(i, next));
      i = next + 1;
    }
  }
  return fields;
}

// ── TLA Unicode transliteration → MdC ───────────────────────────────────────

/**
 * Convert TLA-style Unicode transliteration to MdC ASCII.
 * TLA uses slightly different conventions from our standard Unicode:
 *   - ꞽ (U+A7BD) for yod (we use plain 'i')
 *   - Dots for morpheme boundaries (we use spaces)
 *   - = prefix for suffix pronouns (we strip it)
 */
function tlaTranslitToMdc(s: string): string {
  let r = s;
  // Strip leading = (suffix pronoun marker)
  r = r.replace(/^=/, "");
  // TLA yod ꞽ (U+A7BD) → i
  r = r.replace(/\u{A7BD}/gu, "i");
  // TLA sometimes uses ï for dual/variant yod
  r = r.replace(/ï/g, "i");
  // Convert Unicode Egyptological → MdC ASCII
  r = unicodeToMdc(r);
  // Convert dots to spaces (morpheme boundaries → word separators)
  r = r.replace(/\./g, " ").replace(/\s{2,}/g, " ").trim();
  return r;
}

// ── Unicode hieroglyphs string → Gardiner codes ─────────────────────────────

function hieroglyphsToGardiner(
  hieroglyphs: string,
  lookup: Map<string, string>
): string[] | null {
  if (!hieroglyphs) return null;

  const codes: string[] = [];
  // Iterate over Unicode code points (hieroglyphs are in supplementary plane)
  for (const ch of hieroglyphs) {
    const cp = ch.codePointAt(0)!;
    // Egyptian Hieroglyphs: U+13000–U+1342F
    // Egyptian Hieroglyph Format Controls: U+13430–U+1345F
    if (cp >= 0x13000 && cp <= 0x1342f) {
      const code = lookup.get(ch);
      if (code) {
        codes.push(code);
      } else {
        // Unknown hieroglyph — skip this entry
        return null;
      }
    }
    // Skip format controls (joiners, inserters) and other chars (plurals marker 𓏪 etc.)
    // Actually 𓏪 is in the range, so it should be looked up
  }

  return codes.length > 0 ? codes : null;
}

// ── Main ────────────────────────────────────────────────────────────────────

console.log("Integrating TLA lemmata...");
console.log(`  CSV: ${CSV_PATH}`);

// Load existing data, strip TLA artefacts so integration is idempotent
const rawWords = JSON.parse(fs.readFileSync(WORDS_PATH, "utf-8"));
console.log(`  Loaded ${rawWords.length} existing words`);

// Remove previously-added TLA entries (source: "tla") — they'll be re-added
const words = rawWords.filter((w: Record<string, unknown>) => w.source !== "tla");
const tlaRemoved = rawWords.length - words.length;
console.log(`  Stripped ${tlaRemoved} previous TLA entries`);

// Clear TLA-enriched fields from Vygus entries so they can be re-matched correctly
let fieldsCleared = 0;
for (const w of words) {
  if (w.tlaId || w.wikidataId) {
    delete w.tlaId;
    delete w.wikidataId;
    delete w.gender;
    fieldsCleared++;
  }
}
console.log(`  Cleared TLA fields from ${fieldsCleared} Vygus entries`);

const unicodeToGardiner = buildUnicodeToGardiner(GLYPHS_PATH);
console.log(`  Built Unicode→Gardiner map: ${unicodeToGardiner.size} glyphs`);

// Build lookup: transliteration → indices in words array
const translitIndex = new Map<string, number[]>();
for (let i = 0; i < words.length; i++) {
  const key = words[i].transliteration.toLowerCase();
  const arr = translitIndex.get(key) ?? [];
  arr.push(i);
  translitIndex.set(key, arr);
}

// Parse CSV
const csv = fs.readFileSync(CSV_PATH, "utf-8");
const lines = csv.split("\n").filter((l) => l.trim());
const header = parseCSVLine(lines[0]);
console.log(`  CSV columns: ${header.join(", ")}`);
console.log(`  CSV rows: ${lines.length - 1}`);

// Column indices
const COL = {
  tlaID: header.indexOf("tlaID"),
  wikidataID: header.indexOf("wikidataID"),
  transliteration: header.indexOf("transliterationLUT"),
  hieroglyphs: header.indexOf("hieroglyphs"),
  lexicalCategory: header.indexOf("lexicalCategory"),
  additionalLexicalCategory: header.indexOf("additionalLexicalCategory"),
  gender: header.indexOf("gender"),
  referentType: header.indexOf("referentType"),
  senses: header.indexOf("senses"),
  sensesLanguage: header.indexOf("sensesLanguage"),
};

let enriched = 0;
let genderAdded = 0;
let newAdded = 0;
let sensesAdded = 0;
let skippedGerman = 0;
let skippedNoHiero = 0;
let skippedNoTranslation = 0;
let skippedDupSense = 0;

/** Normalise a translation string for duplicate detection. */
function normSense(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9 ]/g, "").replace(/\s+/g, " ").trim();
}

/** Check if a TLA sense is already covered by existing entries. */
function isSenseCovered(existingEntries: number[], tlaSense: string): boolean {
  const normTla = normSense(tlaSense);
  // Split TLA sense into keywords (TLA often uses semicolons)
  const tlaKeywords = new Set(normTla.split(/[;,]/).map((s) => s.trim()).filter(Boolean));

  for (const idx of existingEntries) {
    const existingNorm = normSense(words[idx].translation);
    // Exact or near-exact match
    if (existingNorm === normTla) return true;
    // Check if existing translation contains the core TLA meaning
    // (e.g. existing "good, beautiful, kind, fair" covers TLA "good; beautiful; perfect")
    const existingKeywords = new Set(existingNorm.split(/[;,]/).map((s) => s.trim()).filter(Boolean));
    let overlap = 0;
    for (const kw of tlaKeywords) {
      if (existingKeywords.has(kw)) overlap++;
    }
    // If most TLA keywords are already present, it's covered
    if (tlaKeywords.size > 0 && overlap / tlaKeywords.size >= 0.5) return true;
  }
  return false;
}

/** Stopwords excluded from word-level overlap checks. */
const STOP_WORDS = new Set([
  "a", "an", "the", "of", "to", "in", "for", "on", "at", "by", "or", "and",
  "be", "is", "it", "do", "so", "up", "out", "etc", "something", "someone",
]);

/**
 * Looser overlap check for enrichment: returns true if any meaningful word
 * from the TLA sense appears in the existing entry's translation.
 * More permissive than isSenseCovered — used for tlaId/wikidataId tagging
 * where false negatives (missing links) are worse than false positives.
 */
function hasMeaningOverlap(entryIdx: number, tlaSense: string): boolean {
  const entryNorm = normSense(words[entryIdx].translation);
  const tlaNorm = normSense(tlaSense);
  if (entryNorm === tlaNorm) return true;

  const entryWords = new Set(entryNorm.split(/\s+/).filter((w) => !STOP_WORDS.has(w) && w.length > 2));
  const tlaWords = tlaNorm.split(/\s+/).filter((w) => !STOP_WORDS.has(w) && w.length > 2);
  if (tlaWords.length === 0) return false;

  return tlaWords.some((w) => entryWords.has(w));
}

/** Build a TLA word entry. */
function buildTlaEntry(
  mdc: string,
  gardinerCodes: string[],
  mdcStr: string,
  translation: string,
  lexCat: string,
  addLexCat: string,
  genderTag: string | undefined,
  tlaId: string,
  wikidataId: string,
) {
  // Clean translation: strip bracket notation [xxx] that TLA uses for unclear senses
  let cleanTranslation = translation.trim();
  if (cleanTranslation.startsWith("[") && cleanTranslation.endsWith("]")) {
    cleanTranslation = cleanTranslation.slice(1, -1);
  }

  const grammar = TLA_GRAMMAR_MAP[lexCat] ?? "OTHER";
  const grammarRaw = addLexCat || lexCat || null;

  const notes: string[] = [];
  if (lexCat === "proper noun") {
    notes.push("proper noun");
    if (addLexCat) notes.push(addLexCat);
  } else if (addLexCat) {
    notes.push(addLexCat);
  }

  return {
    transliteration: mdc,
    translation: cleanTranslation,
    grammar,
    grammarRaw,
    gardinerCodes,
    mdc: mdcStr,
    source: "tla",
    notes,
    ...(genderTag ? { gender: genderTag } : {}),
    ...(tlaId ? { tlaId } : {}),
    ...(wikidataId ? { wikidataId } : {}),
  };
}

for (let i = 1; i < lines.length; i++) {
  const fields = parseCSVLine(lines[i]);
  if (fields.length < 13) continue;

  const tlaId = fields[COL.tlaID];
  const wikidataId = fields[COL.wikidataID];
  const tlaTranslit = fields[COL.transliteration];
  const hieroglyphs = fields[COL.hieroglyphs];
  const lexCat = fields[COL.lexicalCategory];
  const addLexCat = fields[COL.additionalLexicalCategory];
  const gender = fields[COL.gender];
  const senses = fields[COL.senses];
  const sensesLang = fields[COL.sensesLanguage];

  // Skip German-only entries
  if (sensesLang === "DE") {
    skippedGerman++;
    continue;
  }

  // Skip entries without translations
  if (!senses || senses.trim() === "") {
    skippedNoTranslation++;
    continue;
  }

  // Convert TLA transliteration to MdC
  const mdc = tlaTranslitToMdc(tlaTranslit);
  if (!mdc) continue;

  const mdcLower = mdc.toLowerCase();
  const genderTag = TLA_GENDER_MAP[gender] ?? undefined;

  // Try to match existing entries
  const existing = translitIndex.get(mdcLower);

  if (existing && existing.length > 0) {
    // Enrich existing entries with metadata — only when meaning overlaps,
    // since different words can share a transliteration (homographs).
    for (const idx of existing) {
      const w = words[idx];
      const overlaps = hasMeaningOverlap(idx, senses);
      let changed = false;

      if (genderTag && !w.gender && overlaps) {
        w.gender = genderTag;
        genderAdded++;
        changed = true;
      }
      if (tlaId && !w.tlaId && overlaps) {
        w.tlaId = tlaId;
        changed = true;
      }
      if (wikidataId && !w.wikidataId && overlaps) {
        w.wikidataId = wikidataId;
        changed = true;
      }
      if (changed) enriched++;
    }

    // Check if TLA sense is novel (not covered by existing meanings)
    if (!isSenseCovered(existing, senses)) {
      // Need Gardiner codes — try from existing entries first, then from TLA hieroglyphs
      let gardinerCodes = words[existing[0]].gardinerCodes;
      let mdcStr = words[existing[0]].mdc;

      if ((!gardinerCodes || gardinerCodes.length === 0) && hieroglyphs) {
        const mapped = hieroglyphsToGardiner(hieroglyphs, unicodeToGardiner);
        if (mapped) {
          gardinerCodes = mapped;
          mdcStr = mapped.join("-");
        }
      }

      if (gardinerCodes && gardinerCodes.length > 0) {
        const newEntry = buildTlaEntry(
          mdc, gardinerCodes, mdcStr, senses, lexCat, addLexCat,
          genderTag, tlaId, wikidataId,
        );
        words.push(newEntry);
        sensesAdded++;

        const arr = translitIndex.get(mdcLower) ?? [];
        arr.push(words.length - 1);
        translitIndex.set(mdcLower, arr);
      }
    } else {
      skippedDupSense++;
    }
  } else {
    // Completely new transliteration — need hieroglyphs for Gardiner codes
    if (!hieroglyphs || hieroglyphs.trim() === "") {
      skippedNoHiero++;
      continue;
    }

    const gardinerCodes = hieroglyphsToGardiner(hieroglyphs, unicodeToGardiner);
    if (!gardinerCodes) {
      skippedNoHiero++;
      continue;
    }

    const mdcStr = gardinerCodes.join("-");
    const newEntry = buildTlaEntry(
      mdc, gardinerCodes, mdcStr, senses, lexCat, addLexCat,
      genderTag, tlaId, wikidataId,
    );

    words.push(newEntry);
    newAdded++;

    const arr = translitIndex.get(mdcLower) ?? [];
    arr.push(words.length - 1);
    translitIndex.set(mdcLower, arr);
  }
}

console.log(`\nResults:`);
console.log(`  Existing entries enriched: ${enriched}`);
console.log(`  Gender tags added: ${genderAdded}`);
console.log(`  New senses added (matched words): ${sensesAdded}`);
console.log(`  New entries added (new words): ${newAdded}`);
console.log(`  Skipped (duplicate sense): ${skippedDupSense}`);
console.log(`  Skipped (German): ${skippedGerman}`);
console.log(`  Skipped (no hieroglyphs): ${skippedNoHiero}`);
console.log(`  Skipped (no translation): ${skippedNoTranslation}`);
console.log(`  Total words: ${words.length}`);

// Write updated words.json
fs.writeFileSync(WORDS_PATH, JSON.stringify(words));
console.log(`\nWrote ${words.length} words to ${WORDS_PATH}`);
