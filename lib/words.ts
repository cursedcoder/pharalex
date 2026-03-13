import type { DictionaryWord } from "@/lib/types";
import wordsJson from "@/lib/data/words.json";

const WORDS = wordsJson as DictionaryWord[];

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

export function getAllWords(): DictionaryWord[] {
  return WORDS;
}

/** All unique transliterations (one per word entry group). */
export function getAllTransliterations(): string[] {
  return [...new Set(WORDS.map((w) => w.transliteration))];
}

/** All entries sharing the same transliteration. */
export function getWordsByTransliteration(
  transliteration: string
): DictionaryWord[] {
  return WORDS.filter((w) => w.transliteration === transliteration);
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
  const seen = new Set<string>(); // deduplicate by transliteration

  for (const w of WORDS) {
    if (results.length >= limit) break;
    if (seen.has(w.transliteration)) continue;
    if (
      w.transliteration.toLowerCase().includes(q) ||
      w.translation.toLowerCase().includes(q)
    ) {
      seen.add(w.transliteration);
      results.push(w);
    }
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
  const seen = new Set<string>();
  const results: DictionaryWord[] = [];
  for (const w of WORDS) {
    if (results.length >= limit) break;
    if (seen.has(w.transliteration)) continue;
    if (w.gardinerCodes.includes(code)) {
      seen.add(w.transliteration);
      results.push(w);
    }
  }
  return results;
}
