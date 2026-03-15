import * as fs from "fs";
import * as path from "path";
import type { DictionaryWord } from "@/lib/types";
import { loadWords } from "./data-loader";
import { wordSlug } from "./word-utils";

export { translitToUnicode, wordSlug, wordHref } from "./word-utils";

// ─── Word relations (build-time only, lazy loaded) ───────────────────────────

export interface WordRelation {
  translit: string;
  translation: string;
  grammar: string | null;
  gardinerCodes: string[];
  mdc: string;
  score: number;
}

let _relationsCache: Record<string, WordRelation[]> | null = null;

function loadRelations(): Record<string, WordRelation[]> {
  if (_relationsCache) return _relationsCache;
  const relPath = path.join(process.cwd(), "public/data/word-relations.json");
  try {
    _relationsCache = JSON.parse(fs.readFileSync(relPath, "utf-8"));
  } catch {
    _relationsCache = {};
  }
  return _relationsCache!;
}

/** Get related words for a transliteration. Only used at build time (force-static pages). */
export function getWordRelations(transliteration: string): WordRelation[] {
  return loadRelations()[transliteration] ?? [];
}

// ─── Accessors ────────────────────────────────────────────────────────────────

let _wordGroupsP: Promise<Map<string, DictionaryWord[]>> | null = null;

function wordGroups(): Promise<Map<string, DictionaryWord[]>> {
  if (_wordGroupsP && process.env.NODE_ENV === "production") return _wordGroupsP;
  const p = loadWords().then((words) => {
    const groups = new Map<string, DictionaryWord[]>();
    for (const w of words) {
      const g = groups.get(w.transliteration);
      if (g) g.push(w);
      else groups.set(w.transliteration, [w]);
    }
    return groups;
  }).catch((err) => { _wordGroupsP = null; throw err; });
  _wordGroupsP = p;
  return p;
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

/** Returns all word senses grouped by transliteration for a given Gardiner code. */
export async function getDictionaryByGardinerCode(
  code: string,
  limit = 20
): Promise<Map<string, DictionaryWord[]>> {
  const result = new Map<string, DictionaryWord[]>();
  let count = 0;
  for (const [translit, entries] of await wordGroups()) {
    if (count >= limit) break;
    if (entries.some((w) => w.gardinerCodes.includes(code))) {
      result.set(translit, entries);
      count++;
    }
  }
  return result;
}
