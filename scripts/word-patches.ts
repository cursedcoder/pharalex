/**
 * Known corrections for Vygus dictionary entries.
 *
 * Each patch targets a specific (transliteration, translation_prefix) pair
 * and applies a fix. This avoids hand-editing words.json directly.
 *
 * Run as part of the word post-processing pipeline.
 */

export interface WordPatch {
  /** MdC transliteration to match */
  transliteration: string;
  /** Substring match on translation to identify the specific sense */
  translationMatch: string;
  /** Replacement translation (null = delete this sense entirely) */
  newTranslation?: string | null;
  /** Override grammar if set */
  grammar?: string;
  /** Override MdC string (fix quadrat grouping) */
  mdc?: string;
  /** Match on existing MdC to target a specific spelling */
  mdcMatch?: string;
}

export const WORD_PATCHES: WordPatch[] = [
  // nfr: "id youngster" and "idw beautiful young man" are fragments
  // from nfr.id compound that leaked into nfr's senses
  {
    transliteration: "nfr",
    translationMatch: "id youngster",
    newTranslation: "youngster, beautiful boy",
  },
  {
    transliteration: "nfr",
    translationMatch: "idw beautiful young man",
    newTranslation: "beautiful young man",
  },
  // nfr: "snb .k farewell" is a different word entirely
  {
    transliteration: "nfr",
    translationMatch: "snb .k farewell",
    newTranslation: null, // delete
  },
  // kA: "mwt .f bull of his mother" — strip leaked word
  {
    transliteration: "kA",
    translationMatch: "mwt .f bull of his mother",
    newTranslation: "bull of his mother (an epithet)",
  },
  // kA: "nsw king's grace" — strip leaked word
  {
    transliteration: "kA",
    translationMatch: "nsw king's grace",
    newTranslation: "king's grace",
  },
  // rpat: "pat Noble" / "pat Crown Prince" / "pat female Noble" — strip leaked pꜥt
  {
    transliteration: "rpat",
    translationMatch: "pat Noble, Heir",
    newTranslation: "Noble, Heir",
  },
  {
    transliteration: "rpat",
    translationMatch: "pat Crown Prince",
    newTranslation: "Crown Prince",
  },
  {
    transliteration: "rpat",
    translationMatch: "pat female Noble",
    newTranslation: "female Noble, Heiress",
  },
  // iry: "at Hallkeeper" — strip leaked ꜥt (hall)
  {
    transliteration: "iry",
    translationMatch: "at Hallkeeper, Keeper of the Storeroom",
    newTranslation: "Hallkeeper, Keeper of the Storeroom",
  },
  {
    transliteration: "iry",
    translationMatch: "at female Hallkeeper",
    newTranslation: "female Hallkeeper, Keeper of the Storeroom",
  },
  // sApty: "xnwy Decan" — strip leaked ḫnwy
  {
    transliteration: "sApty",
    translationMatch: "xnwy Decan",
    newTranslation: "Decan",
  },
];

/**
 * Blocked quad pairs — prevents auto-quad from pairing signs that
 * pair-frequency incorrectly groups together.
 * Format: [transliteration, "A,B", mdcMustContain?]
 *   - A,B should NOT be stacked
 *   - optional 3rd element: only apply if flat MdC contains this sign
 */
export const BLOCKED_QUAD_PAIRS: [string, string, string?][] = [
  // mk: G17 (owl) should NOT stack with D36 (forearm)
  ["mk", "G17,D36"],
  // mk: G20 and V31 are separate in Vygus
  ["mk", "G20,V31"],
  // mk with J15: all three signs (J15, D36, V31) are separate in Vygus
  ["mk", "D36,V31", "J15"],
];

/**
 * Apply patches to a words array. Returns count of patches applied.
 */
export function applyWordPatches(
  words: Array<{ transliteration: string; translation: string; grammar: string | null; mdc: string }>,
): number {
  let applied = 0;
  for (let i = words.length - 1; i >= 0; i--) {
    const w = words[i];
    for (const patch of WORD_PATCHES) {
      if (w.transliteration !== patch.transliteration) continue;
      if (!w.translation.includes(patch.translationMatch)) continue;
      if (patch.mdcMatch && !w.mdc.includes(patch.mdcMatch)) continue;

      if (patch.newTranslation === null) {
        // Delete this entry
        words.splice(i, 1);
      } else if (patch.newTranslation !== undefined) {
        w.translation = patch.newTranslation;
      }
      if (patch.grammar !== undefined) {
        w.grammar = patch.grammar;
      }
      if (patch.mdc !== undefined) {
        w.mdc = patch.mdc;
      }
      applied++;
      break;
    }
  }
  return applied;
}
