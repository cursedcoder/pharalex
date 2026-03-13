import type { DictionaryWord } from "@/lib/types";
import { loadWords } from "./data-loader";
import { wordSlug } from "./word-utils";

export { translitToUnicode, wordSlug, wordHref } from "./word-utils";

// ─── Accessors ────────────────────────────────────────────────────────────────

let _wordGroups: Map<string, DictionaryWord[]> | null = null;

async function wordGroups(): Promise<Map<string, DictionaryWord[]>> {
  if (!_wordGroups) {
    _wordGroups = new Map();
    for (const w of await loadWords()) {
      const g = _wordGroups.get(w.transliteration);
      if (g) g.push(w);
      else _wordGroups.set(w.transliteration, [w]);
    }
  }
  return _wordGroups;
}

export async function getAllWords(): Promise<DictionaryWord[]> {
  return loadWords();
}

export async function getAllTransliterations(): Promise<string[]> {
  return [...(await wordGroups()).keys()];
}

export async function getWordsByTransliteration(
  transliteration: string
): Promise<DictionaryWord[]> {
  return (await wordGroups()).get(transliteration) ?? [];
}

export async function getWordsBySlug(
  slug: string
): Promise<DictionaryWord[]> {
  const groups = await wordGroups();
  for (const [translit, entries] of groups) {
    if (wordSlug(translit) === slug) return entries;
  }
  return [];
}

export async function searchWords(
  query: string,
  limit = 40
): Promise<DictionaryWord[]> {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const results: DictionaryWord[] = [];
  for (const [, entries] of await wordGroups()) {
    if (results.length >= limit) break;
    const matches = entries.some(
      (w) =>
        w.transliteration.toLowerCase().includes(q) ||
        w.translation.toLowerCase().includes(q)
    );
    if (matches) results.push(entries[0]);
  }
  return results;
}

export async function getWordsByGrammar(
  grammar: string
): Promise<DictionaryWord[]> {
  return (await loadWords()).filter((w) => w.grammar === grammar);
}

export async function getWordsByGardinerCode(
  code: string,
  limit = 20
): Promise<DictionaryWord[]> {
  const results: DictionaryWord[] = [];
  for (const [, entries] of await wordGroups()) {
    if (results.length >= limit) break;
    if (entries.some((w) => w.gardinerCodes.includes(code))) {
      results.push(entries[0]);
    }
  }
  return results;
}
