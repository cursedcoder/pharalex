/**
 * Pure utility functions for words — safe for client components.
 * No data dependencies.
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
  // Egyptological convention: dots separate morphemes (aHa.n → ꜥḥꜥ.n)
  s = s.replace(/[ -]/g, ".").replace(/\.{2,}/g, ".").replace(/^\.|\.$/g, "");
  return s;
}

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

/** Build a URL slug for a specific lemma. Primary lemma (lemmaId="") uses the bare slug. */
export function lemmaSlug(transliteration: string, lemmaId: string): string {
  const base = wordSlug(transliteration);
  return lemmaId ? `${base}_${lemmaId}` : base;
}

/** Build a URL path for a specific lemma page. */
export function lemmaHref(transliteration: string, lemmaId: string): string {
  return `/words/${lemmaSlug(transliteration, lemmaId)}`;
}

/** Parse a word page slug into { baseSlug, lemmaId }. */
export function parseLemmaSlug(slug: string): { baseSlug: string; lemmaId: string } {
  const idx = slug.lastIndexOf("_");
  // Only treat as lemma suffix if the part after _ looks like a hex hash (4+ chars)
  if (idx >= 0) {
    const suffix = slug.slice(idx + 1);
    if (/^[0-9a-f]{4,}$/.test(suffix)) {
      return { baseSlug: slug.slice(0, idx), lemmaId: suffix };
    }
  }
  return { baseSlug: slug, lemmaId: "" };
}
