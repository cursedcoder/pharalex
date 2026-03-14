/**
 * Manuel de Codage (MdC) ASCII → Unicode Egyptological transliteration.
 *
 * MdC uses uppercase ASCII letters for special consonants:
 *   A → ꜣ  (aleph)    a → ꜥ  (ayin)
 *   H → ḥ  (emphatic h)
 *   x → ḫ  (voiceless velar)   X → ẖ  (voiced velar)
 *   S → š  (shin)
 *   T → ṯ  (emphatic t)
 *   D → ḏ  (emphatic d)
 *
 * This module provides helpers used by every processing script to ensure
 * transliterations are stored exclusively in Unicode form and duplicates
 * caused by notation mixing are eliminated.
 */

const MDC_TO_UNICODE: Record<string, string> = {
  A: "ꜣ",
  a: "ꜥ",
  H: "ḥ",
  x: "ḫ",
  X: "ẖ",
  S: "š",
  T: "ṯ",
  D: "ḏ",
};

/** Characters that are MdC special consonants (case-sensitive). */
const MDC_SPECIALS = new Set(Object.keys(MDC_TO_UNICODE));

/**
 * Returns true when the string contains at least one MdC special letter
 * that has NOT already been converted to its Unicode equivalent.
 * Plain lowercase letters that happen to coincide (like 'a' in 'jmn')
 * are only treated as MdC if the string also lacks any Unicode
 * Egyptological characters — i.e. it looks like a pure-ASCII MdC string.
 */
function looksLikeMdC(s: string): boolean {
  // If it already contains Unicode Egyptological characters, it's not MdC
  if (/[ꜣꜥḥḫẖšṯḏ]/.test(s)) return false;
  // Check for uppercase MdC specials (unambiguous: A, H, S, T, D, X)
  return /[AHSTDX]/.test(s);
}

/**
 * Convert an MdC ASCII transliteration to Unicode Egyptological form.
 * If the input already uses Unicode characters it is returned as-is.
 */
export function mdcToUnicode(s: string): string {
  if (!looksLikeMdC(s)) return s;
  let result = "";
  for (const ch of s) {
    result += MDC_TO_UNICODE[ch] ?? ch;
  }
  return result;
}

/**
 * Normalise a transliteration to a canonical comparison key.
 * Converts MdC to Unicode and lowercases for comparison.
 */
export function translitKey(s: string): string {
  return mdcToUnicode(s).toLowerCase();
}

/**
 * Deduplicate a transliteration array, keeping only Unicode forms.
 * When an MdC duplicate exists alongside its Unicode equivalent,
 * the Unicode form is kept and the ASCII one is dropped.
 */
export function deduplicateTransliterations(arr: string[]): string[] {
  const seen = new Set<string>();
  const result: string[] = [];

  for (const raw of arr) {
    const unicode = mdcToUnicode(raw);
    const key = unicode.toLowerCase();
    if (!seen.has(key)) {
      seen.add(key);
      result.push(unicode); // always store the Unicode form
    }
  }

  return result;
}

/**
 * Check if a transliteration already exists in an array (MdC-aware).
 */
export function hasTransliteration(arr: string[], value: string): boolean {
  const key = translitKey(value);
  return arr.some((t) => translitKey(t) === key);
}
