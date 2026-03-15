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
  s = s.replace(/ /g, ".").replace(/\.{2,}/g, ".");
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
