import type { DictionaryWord } from "@/lib/types";
import wordsJson from "@/lib/data/words.json";

const WORDS = wordsJson as DictionaryWord[];

// ─── Transliteration display ──────────────────────────────────────────────────

/**
 * Converts MdC ASCII transliteration to Egyptological Unicode.
 * Follows the Leyden Unified Transliteration standard as used on the /alphabet page:
 *   i → i͗  (yod/reed M17, i + U+0357 combining right half ring above)
 *   A → ꜣ   (aleph)        a → ꜥ  (ayin)
 *   y stays as y (double reed M17+M17, distinct from single i͗)
 *   H → ḥ   x → ḫ   X → ẖ   S → š   T → ṯ   D → ḏ
 *   q stays as q (plain, per modern convention)
 */
const MdC_TO_UNICODE: [string, string][] = [
  ["A", "ꜣ"],
  ["a", "ꜥ"],
  ["i", "i\u0357"],
  ["H", "ḥ"],
  ["x", "ḫ"],
  ["X", "ẖ"],
  ["S", "š"],
  ["T", "ṯ"],
  ["D", "ḏ"],
];

export function translitToUnicode(translit: string): string {
  let s = translit;
  for (const [from, to] of MdC_TO_UNICODE) {
    s = s.split(from).join(to);
  }
  return s;
}

// ─── Slug ─────────────────────────────────────────────────────────────────────

/**
 * Converts a Vygus transliteration string to a URL-safe, collision-free slug.
 *
 * Rules (preserving case since Egyptian is case-sensitive: H≠h, S≠s etc.):
 *   space  →  .
 *   /      →  --
 *   ?      →  q  (uncertain forms)
 *   [      →  L  (lacunae notation)
 *   ]      →  (removed)
 *   (      →  P  (parenthetical notation)
 *   )      →  (removed)
 *   ~      →  tld
 *   other non-alnum  →  (removed)
 */
export function wordSlug(transliteration: string): string {
  return transliteration
    .trim()
    .replace(/\s*\/\s*/g, "--")
    .replace(/\?/g, "q")
    .replace(/~/g, "tld")
    .replace(/\[/g, "L")
    .replace(/\]/g, "")
    .replace(/\(/g, "P")
    .replace(/\)/g, "")
    .replace(/\s+/g, ".")
    .replace(/[^a-zA-Z0-9\-\.]/g, "")
    .replace(/\.{2,}/g, ".")
    .replace(/^\.|\.$/, "");
}

export function wordHref(transliteration: string): string {
  return `/words/${wordSlug(transliteration)}`;
}

// ─── Accessors ────────────────────────────────────────────────────────────────

/** Groups keyed by transliteration, built once at module load. */
const WORD_GROUPS: Map<string, DictionaryWord[]> = new Map();
for (const w of WORDS) {
  const g = WORD_GROUPS.get(w.transliteration);
  if (g) g.push(w);
  else WORD_GROUPS.set(w.transliteration, [w]);
}

export function getAllWords(): DictionaryWord[] {
  return WORDS;
}

/** All unique transliterations (one per word entry group). */
export function getAllTransliterations(): string[] {
  return [...WORD_GROUPS.keys()];
}

/** All entries sharing the same transliteration. */
export function getWordsByTransliteration(
  transliteration: string
): DictionaryWord[] {
  return WORD_GROUPS.get(transliteration) ?? [];
}

/** Look up by slug — find the transliteration that produces this slug, then return all entries. */
export function getWordsBySlug(slug: string): DictionaryWord[] {
  // Find the transliteration whose slug matches
  const translit = getAllTransliterations().find((t) => wordSlug(t) === slug);
  if (!translit) return [];
  return getWordsByTransliteration(translit);
}

/** Simple substring search over transliteration + translation (for search UI). */
export function searchWords(
  query: string,
  limit = 40
): DictionaryWord[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const results: DictionaryWord[] = [];
  for (const [, entries] of WORD_GROUPS) {
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

export function getWordsByGrammar(grammar: string): DictionaryWord[] {
  return WORDS.filter((w) => w.grammar === grammar);
}

/** All unique transliterations whose words contain this Gardiner code. */
export function getWordsByGardinerCode(
  code: string,
  limit = 20
): DictionaryWord[] {
  const results: DictionaryWord[] = [];
  for (const [, entries] of WORD_GROUPS) {
    if (results.length >= limit) break;
    if (entries.some((w) => w.gardinerCodes.includes(code))) {
      results.push(entries[0]);
    }
  }
  return results;
}
