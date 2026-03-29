/**
 * Counts word attestations from TLA sentence corpora and writes
 * the count onto each matching entry in words.json.
 *
 * Sources:
 *   - TLA Earlier Egyptian sentences (12,773 sentences)
 *   - TLA Late Egyptian sentences (3,606 sentences)
 *   - PhilologEg texts (101 texts by M.-J. Nederhof, ~9,790 transliteration lines)
 *
 * Matching strategy:
 *   1. By TLA lemma ID (most precise — lemmatization field has "id|translit" pairs)
 *   2. By normalised transliteration (fallback, also used for PhilologEg)
 *
 * After counting, entries within each spelling group (same gardinerCodes)
 * are sorted: higher attestation first, then source=vygus before source=tla
 * at equal attestation.
 *
 * Usage: npx tsx scripts/build-attestations.ts
 */

import * as fs from "fs";
import * as path from "path";
import { unicodeToMdc } from "./translit-utils";

const WORDS_PATH = path.join(process.cwd(), "public/data/words.json");
const CORPORA = [
  path.join(process.cwd(), "lib/data/tla-earlier-egyptian.jsonl"),
  path.join(process.cwd(), "lib/data/tla-late-egyptian.jsonl"),
];

// ── Count attestations from corpora ─────────────────────────────────────────

const lemmaCounts = new Map<string, number>();
const translitCounts = new Map<string, number>();

let totalSentences = 0;

for (const corpusPath of CORPORA) {
  const lines = fs.readFileSync(corpusPath, "utf-8").split("\n").filter(Boolean);
  totalSentences += lines.length;

  for (const line of lines) {
    const obj = JSON.parse(line);

    // Count by lemma ID (precise)
    if (obj.lemmatization) {
      for (const tok of (obj.lemmatization as string).split(" ")) {
        const pipeIdx = tok.indexOf("|");
        const id = pipeIdx >= 0 ? tok.slice(0, pipeIdx) : tok;
        if (id) lemmaCounts.set(id, (lemmaCounts.get(id) || 0) + 1);
      }
    }

    // Count by transliteration (fallback)
    if (obj.transliteration) {
      for (let tok of (obj.transliteration as string).split(" ")) {
        // Clean TLA-style markers
        tok = tok.replace(/^[(\[=]+/, "").replace(/[)\]]+$/, "").replace(/\.PL$/i, "");
        if (!tok || tok.length === 0) continue;
        // Convert to MdC for matching
        const mdc = unicodeToMdc(tok)
          .replace(/\u{A7BD}/gu, "i") // TLA yod
          .replace(/ï/g, "i")
          .toLowerCase();
        if (mdc) translitCounts.set(mdc, (translitCounts.get(mdc) || 0) + 1);
      }
    }
  }
}

console.log(`TLA: ${totalSentences} sentences from ${CORPORA.length} corpora`);
console.log(`  Unique lemma IDs: ${lemmaCounts.size}`);
console.log(`  Unique transliterations: ${translitCounts.size}`);

// ── Count attestations from PhilologEg texts ────────────────────────────────

const PHILOLOGEG_DIR = path.join(process.cwd(), "lib/data/philologeg");
let philologLines = 0;
let philologFiles = 0;

if (fs.existsSync(PHILOLOGEG_DIR)) {
  const files = fs.readdirSync(PHILOLOGEG_DIR).filter((f) => f.endsWith(".txt"));
  philologFiles = files.length;

  for (const file of files) {
    const content = fs.readFileSync(path.join(PHILOLOGEG_DIR, file), "utf-8");

    // Split on second ### (first ### = before bibliography, second ### = start of text)
    const parts = content.split("###");
    if (parts.length < 3) continue;

    const textSection = parts[2];
    const lines = textSection.split("\n");

    // Format: transliteration line, then ";", then English translation, then blank
    let prevWasSemicolon = false;

    for (const line of lines) {
      const stripped = line.trim();

      if (!stripped) {
        prevWasSemicolon = false;
        continue;
      }

      if (stripped === ";") {
        prevWasSemicolon = true;
        continue;
      }

      if (prevWasSemicolon) {
        // Translation line — skip
        prevWasSemicolon = false;
        continue;
      }

      // This is a transliteration line
      prevWasSemicolon = false;
      philologLines++;

      // Strip markup: <note>...</note>, <@xxx>, <1>, <al>...</al> etc.
      let clean = stripped.replace(/<note>.*?<\/note>/g, "");
      clean = clean.replace(/<[^>]*>/g, "");
      clean = clean.trim();
      if (!clean) continue;

      for (let tok of clean.split(/\s+/)) {
        // Strip punctuation
        tok = tok.replace(/^[.,;:!?"]+/, "").replace(/[.,;:!?"]+$/, "");
        // Strip clitic = prefix
        tok = tok.replace(/^=/, "");
        if (!tok || /^\d+$/.test(tok)) continue;
        // Skip lacuna markers
        if (tok === "[...]" || tok === "[..]" || tok === "[.]") continue;

        // PhilologEg uses MdC — lowercase for matching
        const key = tok.toLowerCase();
        translitCounts.set(key, (translitCounts.get(key) || 0) + 1);
      }
    }
  }
}

console.log(`PhilologEg: ${philologLines} lines from ${philologFiles} texts`);
console.log(`  Combined unique transliterations: ${translitCounts.size}`);

// ── Apply attestation counts to words ───────────────────────────────────────

const words = JSON.parse(fs.readFileSync(WORDS_PATH, "utf-8"));
console.log(`  Loaded ${words.length} words`);

// Clear any existing attestation data from previous runs
for (const w of words) {
  delete w.attestations;
}

let matchedByLemma = 0;
let matchedByTranslit = 0;

// First pass: assign lemma-based counts to TLA entries (precise per-sense)
const translitHasTlaEntry = new Set<string>();

for (const w of words) {
  if (w.source === "tla" && w.tlaId && lemmaCounts.has(w.tlaId)) {
    w.attestations = lemmaCounts.get(w.tlaId)!;
    matchedByLemma++;
    translitHasTlaEntry.add(w.transliteration.toLowerCase());
  }
}

// Second pass: transliteration-based fallback for non-TLA entries
// Only when no TLA sibling exists with a lemma match (avoids inflating
// Vygus entries that sit alongside individually-counted TLA senses)
for (const w of words) {
  if (w.attestations) continue;
  if (w.source === "tla") continue; // TLA entries without lemma match stay at 0
  const key = w.transliteration.toLowerCase();
  if (translitHasTlaEntry.has(key)) continue; // TLA sibling has per-sense counts
  if (translitCounts.has(key)) {
    w.attestations = translitCounts.get(key)!;
    matchedByTranslit++;
  }
}

console.log(`  Matched by lemma ID: ${matchedByLemma}`);
console.log(`  Matched by transliteration: ${matchedByTranslit}`);
console.log(`  Total with attestations: ${matchedByLemma + matchedByTranslit}`);

// ── Sort entries within each spelling group ─────────────────────────────────

// Group by Gardiner spelling (mdc)
const byMdc = new Map<string, number[]>();
for (let i = 0; i < words.length; i++) {
  const key = words[i].mdc;
  const arr = byMdc.get(key) ?? [];
  arr.push(i);
  byMdc.set(key, arr);
}

// Sort within each group: attestation desc, then vygus before tla at equal attestation
let reordered = 0;
const sorted: typeof words = [];
const processed = new Set<number>();

for (const [, indices] of byMdc) {
  // Sort indices by: attestations desc, source priority (vygus first), grammar weight
  const grammarWeight: Record<string, number> = {
    NOUN: 0, VERB: 1, ADJ: 2, ADV: 3, PREP: 4, PRON: 5,
    PART: 6, CONJ: 7, NUM: 8, INTJ: 9, INTG: 10, IMPR: 11, OTHER: 12,
  };

  indices.sort((a, b) => {
    const wa = words[a];
    const wb = words[b];
    // Attestation count descending
    const attA = wa.attestations ?? 0;
    const attB = wb.attestations ?? 0;
    if (attB !== attA) return attB - attA;
    // Source priority: vygus before tla
    const srcA = wa.source === "tla" ? 1 : 0;
    const srcB = wb.source === "tla" ? 1 : 0;
    if (srcA !== srcB) return srcA - srcB;
    // Grammar weight
    const gA = grammarWeight[wa.grammar ?? "OTHER"] ?? 12;
    const gB = grammarWeight[wb.grammar ?? "OTHER"] ?? 12;
    return gA - gB;
  });

  // Check if order changed
  for (let i = 1; i < indices.length; i++) {
    if (indices[i] < indices[i - 1]) { reordered++; break; }
  }

  for (const idx of indices) {
    sorted.push(words[idx]);
    processed.add(idx);
  }
}

// Add any entries not in a group (shouldn't happen)
for (let i = 0; i < words.length; i++) {
  if (!processed.has(i)) sorted.push(words[i]);
}

console.log(`  Spelling groups reordered: ${reordered}`);

// ── Write output ────────────────────────────────────────────────────────────

fs.writeFileSync(WORDS_PATH, JSON.stringify(sorted));
console.log(`\nWrote ${sorted.length} words to ${WORDS_PATH}`);
