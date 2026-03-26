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
  ["q", "ḳ"],
  ["T", "ṯ"],
  ["D", "ḏ"],
];

/** Convert Unicode Egyptological transliteration back to ASCII MdC (e.g. ḥ→H, š→S). */
export function unicodeToTranslit(unicode: string): string {
  let s = unicode;
  // Primary mappings (exact Unicode Egyptological chars)
  for (const [ascii, uni] of MdC_TO_UNICODE) {
    s = s.split(uni).join(ascii);
  }
  // Common lookalike variants that keyboards/IMEs produce
  s = s.replace(/\u02BF/g, "a")   // ʿ (modifier letter left half ring) → ꜥ
    .replace(/\u02BE/g, "A")      // ʾ (modifier letter right half ring) → ꜣ
    .replace(/\u0294/g, "A")      // ʔ (glottal stop) → ꜣ
    .replace(/[`'ʻ]/g, "");       // strip stray quotes/backticks
  // Combining-character decomposed forms
  s = s.normalize("NFD")
    .replace(/h\u0323/g, "H")   // ḥ as h + combining dot below
    .replace(/h\u032E/g, "x")   // ḫ as h + combining breve below
    .replace(/s\u030C/g, "S")   // š as s + combining caron
    .replace(/t\u0331/g, "T")   // ṯ as t + combining macron below
    .replace(/d\u0331/g, "D")   // ḏ as d + combining macron below
    .normalize("NFC");
  // Strip non-transliteration symbols (arrows, etc.)
  s = s.replace(/[→←↔]/g, "");
  return s;
}

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

/** Gardiner code sequence as URL slug. Already URL-safe (A-Z, 0-9, -). */
export function spellingSlug(gardinerCodes: string[]): string {
  return gardinerCodes.join("-");
}

/** URL path for a spelling page. */
export function spellingHref(gardinerCodes: string[]): string {
  return `/words/${spellingSlug(gardinerCodes)}`;
}

/** Detect whether a slug looks like a Gardiner sequence (e.g. "L1-D21-X1-Z2") vs a transliteration. */
export function isSpellingSlug(slug: string): boolean {
  return /^[A-Z][a-z]?\d+/.test(slug);
}
