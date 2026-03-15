/**
 * Build a word-relations index.
 *
 * For each unique transliteration, finds the most related words using:
 *   1. Root overlap (transliteration prefix/substring match)
 *   2. Shared Gardiner codes across spellings
 *   3. Shared translation keywords
 *
 * Output: public/data/word-relations.json
 *   { [translit: string]: { translit: string; translation: string; score: number }[] }
 *
 * Usage: npx tsx scripts/build-word-relations.ts
 */

import * as fs from "fs";
import * as path from "path";

interface Word {
  transliteration: string;
  translation: string;
  grammar: string | null;
  gardinerCodes: string[];
  mdc: string;
}

const STOP_WORDS = new Set([
  "a", "an", "the", "of", "in", "to", "for", "and", "or", "is", "be",
  "with", "by", "on", "at", "from", "as", "it", "its", "that", "this",
  "not", "no", "but", "do", "does", "did", "was", "were", "been", "being",
  "have", "has", "had", "having", "will", "shall", "would", "should",
  "may", "might", "can", "could", "etc", "also", "very", "much", "more",
  "most", "all", "any", "some", "many", "few", "other", "another",
  "one", "two", "three", "four", "who", "what", "which", "where", "when",
  "how", "why", "up", "out", "into", "over", "under", "about", "between",
]);

function translationKeywords(translation: string): Set<string> {
  const words = translation
    .toLowerCase()
    .replace(/[^a-z\s]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 2 && !STOP_WORDS.has(w));
  return new Set(words);
}

/** Normalize transliteration for comparison: strip y/j→i, lowercase */
function normTranslit(t: string): string {
  return t.toLowerCase().replace(/[yj]/g, "i");
}

const WORDS_PATH = path.join(process.cwd(), "public/data/words.json");
const OUT_PATH = path.join(process.cwd(), "public/data/word-relations.json");

console.log("Building word relations index...");
const allWords: Word[] = JSON.parse(fs.readFileSync(WORDS_PATH, "utf-8"));

// ── Step 1: Group words by transliteration ──────────────────────────────────
// For each unique transliteration, merge translations and Gardiner codes
interface WordGroup {
  translit: string;
  translations: string[];
  gardinerCodes: Set<string>;
  grammar: string | null;
  mdc: string;
  keywords: Set<string>;
}

const groupMap = new Map<string, WordGroup>();
for (const w of allWords) {
  const key = w.transliteration;
  const existing = groupMap.get(key);
  if (existing) {
    if (!existing.translations.includes(w.translation)) {
      existing.translations.push(w.translation);
    }
    for (const c of w.gardinerCodes) existing.gardinerCodes.add(c);
    for (const kw of translationKeywords(w.translation)) existing.keywords.add(kw);
  } else {
    groupMap.set(key, {
      translit: key,
      translations: [w.translation],
      gardinerCodes: new Set(w.gardinerCodes),
      grammar: w.grammar,
      mdc: w.mdc,
      keywords: translationKeywords(w.translation),
    });
  }
}

const groups = [...groupMap.values()];
console.log(`  ${groups.length} unique transliterations`);

// ── Step 2: Build inverted indices for candidate finding ────────────────────

// By transliteration prefix (first 2 and 3 chars)
const byPrefix2 = new Map<string, WordGroup[]>();
const byPrefix3 = new Map<string, WordGroup[]>();
for (const g of groups) {
  const norm = normTranslit(g.translit);
  if (norm.length >= 2) {
    const p2 = norm.slice(0, 2);
    if (!byPrefix2.has(p2)) byPrefix2.set(p2, []);
    byPrefix2.get(p2)!.push(g);
  }
  if (norm.length >= 3) {
    const p3 = norm.slice(0, 3);
    if (!byPrefix3.has(p3)) byPrefix3.set(p3, []);
    byPrefix3.get(p3)!.push(g);
  }
}

// By Gardiner code (for shared-sign lookup)
const byCode = new Map<string, WordGroup[]>();
for (const g of groups) {
  for (const c of g.gardinerCodes) {
    if (!byCode.has(c)) byCode.set(c, []);
    byCode.get(c)!.push(g);
  }
}

// By translation keyword
const byKeyword = new Map<string, WordGroup[]>();
for (const g of groups) {
  for (const kw of g.keywords) {
    if (!byKeyword.has(kw)) byKeyword.set(kw, []);
    byKeyword.get(kw)!.push(g);
  }
}

// ── Step 3: Score relationships ─────────────────────────────────────────────

const MAX_RELATED = 8;
const MAX_CANDIDATES = 200; // cap candidates per word to keep it fast

function scoreRelation(a: WordGroup, b: WordGroup): number {
  let score = 0;
  const normA = normTranslit(a.translit);
  const normB = normTranslit(b.translit);

  // Root overlap (strongest signal)
  if (normA !== normB) {
    if (normB.startsWith(normA)) {
      // b is a longer form of a (e.g., ii → iit)
      score += 10 * (normA.length / normB.length);
    } else if (normA.startsWith(normB)) {
      // a is a longer form of b
      score += 10 * (normB.length / normA.length);
    } else if (normA.length >= 3 && normB.length >= 3) {
      // Shared prefix of at least 3 chars
      let shared = 0;
      for (let i = 0; i < Math.min(normA.length, normB.length); i++) {
        if (normA[i] === normB[i]) shared++;
        else break;
      }
      if (shared >= 3) {
        score += 5 * (shared / Math.max(normA.length, normB.length));
      }
    }
  }

  // Shared Gardiner codes (Jaccard similarity)
  const codesA = a.gardinerCodes;
  const codesB = b.gardinerCodes;
  let intersection = 0;
  for (const c of codesA) {
    if (codesB.has(c)) intersection++;
  }
  if (intersection > 0) {
    const union = codesA.size + codesB.size - intersection;
    score += 3 * (intersection / union);
  }

  // Shared translation keywords
  let kwIntersection = 0;
  for (const kw of a.keywords) {
    if (b.keywords.has(kw)) kwIntersection++;
  }
  if (kwIntersection > 0) {
    const kwUnion = a.keywords.size + b.keywords.size - kwIntersection;
    score += 4 * (kwIntersection / kwUnion);
  }

  return score;
}

console.log("  Scoring relations...");
const relations: Record<string, { translit: string; translation: string; grammar: string | null; gardinerCodes: string[]; mdc: string; score: number }[]> = {};
let processed = 0;

for (const group of groups) {
  const norm = normTranslit(group.translit);

  // Gather candidates from all indices
  const candidateSet = new Set<WordGroup>();

  // From prefix indices
  if (norm.length >= 2) {
    const p2 = norm.slice(0, 2);
    for (const c of byPrefix2.get(p2) ?? []) {
      if (c !== group) candidateSet.add(c);
    }
  }
  if (norm.length >= 3) {
    const p3 = norm.slice(0, 3);
    for (const c of byPrefix3.get(p3) ?? []) {
      if (c !== group) candidateSet.add(c);
    }
  }

  // From Gardiner codes (limit to codes that aren't too common)
  for (const code of group.gardinerCodes) {
    const codeGroup = byCode.get(code);
    if (codeGroup && codeGroup.length < 500) {
      for (const c of codeGroup) {
        if (c !== group) candidateSet.add(c);
      }
    }
  }

  // From translation keywords (limit to keywords that aren't too common)
  for (const kw of group.keywords) {
    const kwGroup = byKeyword.get(kw);
    if (kwGroup && kwGroup.length < 200) {
      for (const c of kwGroup) {
        if (c !== group) candidateSet.add(c);
      }
    }
  }

  // Cap candidates
  let candidates = [...candidateSet];
  if (candidates.length > MAX_CANDIDATES) {
    // Prioritize prefix matches
    candidates.sort((a, b) => {
      const normA = normTranslit(a.translit);
      const normB = normTranslit(b.translit);
      const prefixA = normA.startsWith(norm) || norm.startsWith(normA) ? 1 : 0;
      const prefixB = normB.startsWith(norm) || norm.startsWith(normB) ? 1 : 0;
      return prefixB - prefixA;
    });
    candidates = candidates.slice(0, MAX_CANDIDATES);
  }

  // Score and rank
  const scored = candidates
    .map((c) => ({
      translit: c.translit,
      translation: c.translations[0],
      grammar: c.grammar,
      gardinerCodes: [...c.gardinerCodes].slice(0, 8),
      mdc: c.mdc,
      score: scoreRelation(group, c),
    }))
    .filter((r) => r.score > 1) // minimum threshold
    .sort((a, b) => b.score - a.score)
    .slice(0, MAX_RELATED);

  if (scored.length > 0) {
    relations[group.translit] = scored;
  }

  processed++;
  if (processed % 5000 === 0) {
    console.log(`  ...${processed}/${groups.length}`);
  }
}

const wordsWithRelations = Object.keys(relations).length;
const totalRelations = Object.values(relations).reduce((s, r) => s + r.length, 0);
console.log(`  ${wordsWithRelations} words with relations (${totalRelations} total links)`);

fs.writeFileSync(OUT_PATH, JSON.stringify(relations));
console.log(`\nWrote ${OUT_PATH}`);
