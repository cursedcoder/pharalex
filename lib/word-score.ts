import type { SearchWord } from "./search-types";

/**
 * Score a word against a search query for ranking.
 * Lower score = better match.
 *
 * @param word  - the dictionary entry
 * @param qRaw - the original query (preserving MdC case)
 * @param qLower - the lowercased query
 */
export function wordScore(word: SearchWord, qRaw: string, qLower: string): number {
  const tl = word.transliteration;
  const tlLow = tl.toLowerCase();
  const tr = word.translation.toLowerCase();
  // Case-sensitive exact match ranks highest (dSrt matches dšrt before ḏsrt)
  if (tl === qRaw) return 0;
  // Case-insensitive exact transliteration match
  if (tlLow === qLower) return 0.02;
  if (tl.startsWith(qRaw)) return 0.04;
  if (tlLow.startsWith(qLower)) return 0.05;
  if (tr === qLower) return 0.08;
  if (tr.startsWith(qLower)) return 0.12;
  if (tlLow.includes(qLower)) return 0.2;
  if (tr.includes(qLower)) return 0.25;
  return 0.35;
}
