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
 *
 * Uppercase A, H, S, T, D, X are unambiguous MdC specials.
 * Lowercase x (ḫ) is also MdC-only — it never appears in proper
 * Unicode Egyptological transliteration.
 */
function looksLikeMdC(s: string): boolean {
  // If it already contains Unicode Egyptological characters, it's not MdC
  if (/[ꜣꜥḥḫẖšṯḏ]/.test(s)) return false;
  // Check for MdC specials: uppercase A H S T D X, plus lowercase x
  return /[AHSTDXx]/.test(s);
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
 * Strip common Egyptian grammatical suffixes that appear after a dot
 * (morpheme boundary): .t (feminine), .w (plural), .y (nisbe),
 * .ty (dual/agent), .tyw (plural agent).
 * These are word-level morphology, not part of a sign's phonetic value.
 */
function stripGrammaticalSuffix(s: string): string {
  return s.replace(/\.(tyw|ty|t|w|y)$/i, "");
}

/**
 * Normalise a transliteration to a canonical comparison key.
 * Converts MdC to Unicode, strips grammatical suffixes, and lowercases.
 */
export function translitKey(s: string): string {
  return stripGrammaticalSuffix(mdcToUnicode(s)).toLowerCase();
}

/**
 * Deduplicate a transliteration array, keeping only Unicode forms.
 * When an MdC duplicate exists alongside its Unicode equivalent,
 * the Unicode form is kept and the ASCII one is dropped.
 * When a dotted word form (e.g. "sp.t") duplicates a root form ("sp"),
 * the root form is kept.
 */
export function deduplicateTransliterations(arr: string[]): string[] {
  const seen = new Map<string, number>(); // key → index in result
  const result: string[] = [];

  for (const raw of arr) {
    const unicode = mdcToUnicode(raw);
    const key = translitKey(unicode);
    const existingIdx = seen.get(key);
    if (existingIdx === undefined) {
      seen.set(key, result.length);
      result.push(unicode);
    } else {
      // Keep the shorter (root) form over the dotted word form
      if (unicode.length < result[existingIdx].length) {
        result[existingIdx] = unicode;
      }
    }
  }

  return result;
}

/**
 * Check if a transliteration already exists in an array (MdC-aware).
 * If it exists and the new value is a shorter root form, replaces in-place.
 */
export function hasTransliteration(arr: string[], value: string): boolean {
  const key = translitKey(value);
  for (let i = 0; i < arr.length; i++) {
    if (translitKey(arr[i]) === key) {
      // Prefer shorter (root) form over dotted word form
      if (value.length < arr[i].length) {
        arr[i] = value;
      }
      return true;
    }
  }
  return false;
}

const UNICODE_TO_MDC: Record<string, string> = Object.fromEntries(
  Object.entries(MDC_TO_UNICODE).map(([k, v]) => [v, k])
);

/**
 * Convert a Unicode Egyptological transliteration back to MdC ASCII.
 * Returns the original string unchanged if it contains no Unicode specials.
 */
export function unicodeToMdc(s: string): string {
  let result = "";
  for (const ch of s) {
    result += UNICODE_TO_MDC[ch] ?? ch;
  }
  return result;
}

/**
 * Expand a Unicode transliteration array to include MdC ASCII aliases
 * for search purposes. Only adds an MdC form if it differs from the Unicode.
 */
export function expandForSearch(arr: string[]): string[] {
  const result = [...arr];
  for (const t of arr) {
    const mdc = unicodeToMdc(t);
    if (mdc !== t) {
      result.push(mdc);
    }
  }
  return result;
}
