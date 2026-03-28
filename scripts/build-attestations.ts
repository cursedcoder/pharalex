/**
 * Counts word attestations from TLA sentence corpora and writes
 * the count onto each matching entry in words.json.
 *
 * Sources:
 *   - TLA Earlier Egyptian sentences (12,773 sentences)
 *   - TLA Late Egyptian sentences (3,606 sentences)
 *
 * Matching strategy:
 *   1. By TLA lemma ID (most precise — lemmatization field has "id|translit" pairs)
 *   2. By normalised transliteration (fallback for entries without tlaId)
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

console.log(`Processed ${totalSentences} sentences from ${CORPORA.length} corpora`);
console.log(`  Unique lemma IDs: ${lemmaCounts.size}`);
console.log(`  Unique transliterations: ${translitCounts.size}`);

// ── Apply attestation counts to words ───────────────────────────────────────

const words = JSON.parse(fs.readFileSync(WORDS_PATH, "utf-8"));
console.log(`  Loaded ${words.length} words`);

let matchedByLemma = 0;
let matchedByTranslit = 0;

for (const w of words) {
  let count = 0;

  // Try lemma ID first (most precise)
  if (w.tlaId && lemmaCounts.has(w.tlaId)) {
    count = lemmaCounts.get(w.tlaId)!;
    matchedByLemma++;
  }

  // Fallback: transliteration matching
  if (count === 0) {
    const key = w.transliteration.toLowerCase();
    if (translitCounts.has(key)) {
      count = translitCounts.get(key)!;
      matchedByTranslit++;
    }
  }

  if (count > 0) {
    w.attestations = count;
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
