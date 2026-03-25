import * as fs from "fs";
import * as path from "path";
import type { DictionaryWord } from "@/lib/types";
import { loadWords } from "./data-loader";
import { wordSlug, lemmaSlug, parseLemmaSlug } from "./word-utils";

export { translitToUnicode, wordSlug, wordHref, lemmaSlug, lemmaHref, parseLemmaSlug } from "./word-utils";

// ─── Word relations (build-time only, lazy loaded) ───────────────────────────

export interface WordRelation {
  translit: string;
  translation: string;
  grammar: string | null;
  gardinerCodes: string[];
  mdc: string;
  score: number;
  lemmaId?: string;
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
export function getWordRelations(transliteration: string, lemmaId = ""): WordRelation[] {
  // Try lemma-specific key first, fall back to transliteration-only key
  const key = lemmaId ? `${transliteration}~${lemmaId}` : transliteration;
  return loadRelations()[key] ?? loadRelations()[transliteration] ?? [];
}

// ─── Lemma groups (transliteration + lemmaId) ────────────────────────────────

/** Key for grouping entries into lemma pages: "translit" or "translit~hash" */
function lemmaKey(w: DictionaryWord): string {
  return w.lemmaId ? `${w.transliteration}~${w.lemmaId}` : w.transliteration;
}

let _lemmaGroupsP: Promise<Map<string, DictionaryWord[]>> | null = null;

function lemmaGroups(): Promise<Map<string, DictionaryWord[]>> {
  if (_lemmaGroupsP && process.env.NODE_ENV === "production") return _lemmaGroupsP;
  const p = loadWords().then((words) => {
    const groups = new Map<string, DictionaryWord[]>();
    for (const w of words) {
      const key = lemmaKey(w);
      const g = groups.get(key);
      if (g) g.push(w);
      else groups.set(key, [w]);
    }
    return groups;
  }).catch((err) => { _lemmaGroupsP = null; throw err; });
  _lemmaGroupsP = p;
  return p;
}

// ─── Legacy: group by transliteration only ───────────────────────────────────

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

// ─── Accessors ────────────────────────────────────────────────────────────────

export async function getAllWords(): Promise<DictionaryWord[]> {
  return loadWords();
}

/** Returns all lemma keys (for static page generation). */
export async function getAllLemmaKeys(): Promise<{ transliteration: string; lemmaId: string }[]> {
  const groups = await lemmaGroups();
  const result: { transliteration: string; lemmaId: string }[] = [];
  for (const [, entries] of groups) {
    result.push({ transliteration: entries[0].transliteration, lemmaId: entries[0].lemmaId });
  }
  return result;
}

/** @deprecated Use getAllLemmaKeys() for lemma-aware routing. */
export async function getAllTransliterations(): Promise<string[]> {
  return [...(await wordGroups()).keys()];
}

export async function getWordsByTransliteration(
  transliteration: string
): Promise<DictionaryWord[]> {
  return (await wordGroups()).get(transliteration) ?? [];
}

/** Get entries for a specific lemma page by its URL slug. */
export async function getWordsByLemmaSlug(
  slug: string
): Promise<DictionaryWord[]> {
  const { baseSlug, lemmaId } = parseLemmaSlug(slug);
  const groups = await lemmaGroups();
  for (const [, entries] of groups) {
    const entry = entries[0];
    if (wordSlug(entry.transliteration) === baseSlug && entry.lemmaId === lemmaId) {
      return entries;
    }
  }
  return [];
}

/** @deprecated Use getWordsByLemmaSlug for lemma-aware pages. */
export async function getWordsBySlug(
  slug: string
): Promise<DictionaryWord[]> {
  const groups = await wordGroups();
  for (const [translit, entries] of groups) {
    if (wordSlug(translit) === slug) return entries;
  }
  return [];
}

/** Get all sibling lemmas for a transliteration (for disambiguation UI). */
export async function getSiblingLemmas(
  transliteration: string
): Promise<{ lemmaId: string; translation: string; grammar: string | null; mdc: string }[]> {
  const groups = await lemmaGroups();
  const siblings: { lemmaId: string; translation: string; grammar: string | null; mdc: string }[] = [];
  for (const [, entries] of groups) {
    if (entries[0].transliteration === transliteration) {
      siblings.push({
        lemmaId: entries[0].lemmaId,
        translation: entries[0].translation,
        grammar: entries[0].grammar,
        mdc: entries[0].mdc,
      });
    }
  }
  return siblings;
}

/** Find words with different transliterations that share an MdC spelling (homographs). */
export async function getHomographs(
  transliteration: string,
  mdcSpellings: string[]
): Promise<{ transliteration: string; lemmaId: string; translation: string; grammar: string | null; mdc: string }[]> {
  const mdcSet = new Set(mdcSpellings);
  const groups = await lemmaGroups();
  const results: { transliteration: string; lemmaId: string; translation: string; grammar: string | null; mdc: string }[] = [];
  const seen = new Set<string>();
  for (const [, entries] of groups) {
    if (entries[0].transliteration === transliteration) continue;
    for (const e of entries) {
      if (mdcSet.has(e.mdc)) {
        const key = `${e.transliteration}~${e.lemmaId}`;
        if (!seen.has(key)) {
          seen.add(key);
          results.push({
            transliteration: e.transliteration,
            lemmaId: e.lemmaId,
            translation: e.translation,
            grammar: e.grammar,
            mdc: e.mdc,
          });
        }
      }
    }
  }
  return results;
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
  for (const [, entries] of await lemmaGroups()) {
    if (results.length >= limit) break;
    const match = entries.find((w) => w.gardinerCodes.includes(code));
    if (match) {
      results.push(match);
    }
  }
  return results;
}

/** Returns all word senses grouped by lemma for a given Gardiner code. */
export async function getDictionaryByGardinerCode(
  code: string,
  limit = 20
): Promise<Map<string, DictionaryWord[]>> {
  const result = new Map<string, DictionaryWord[]>();
  let count = 0;
  for (const [key, entries] of await lemmaGroups()) {
    if (count >= limit) break;
    if (entries.some((w) => w.gardinerCodes.includes(code))) {
      result.set(key, entries);
      count++;
    }
  }
  return result;
}
