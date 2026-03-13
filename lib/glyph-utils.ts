/**
 * Pure utility functions for glyphs — safe for client components.
 * No data dependencies.
 */

export function glyphHref(code: string): string {
  return `/glyph/${code.replace(/\+/g, "%2B")}`;
}

/**
 * Returns the base Gardiner code for a variant, e.g. "G127F" -> "G127".
 * Returns null if the code is already a base or a U+ codepoint.
 */
export function getBaseCode(code: string): string | null {
  if (code.startsWith("U+")) return null;
  const m = code.match(/^([A-Z][a-z]?\d+)[A-Z]/);
  if (!m) return null;
  const base = m[1];
  return base !== code ? base : null;
}

/**
 * 17 glyph codes whose SVG filename differs from the code by case.
 * These are aegyptus-sourced glyphs whose unicode counterpart owns the SVG file.
 * The uppercase code (e.g. P2H) has no SVG — only the lowercase one (P2h) does.
 * We map the uppercase code to the lowercase SVG filename so at least something renders.
 */
const SVG_FILENAME_OVERRIDES: Record<string, string> = {
  A32H: "A32h", A109H: "A109h", A216H: "A216h",
  C9H: "C9h", C22H: "C22h",
  M8H: "M8h", M8I: "M8i",
  N24H: "N24h", N31H: "N31h",
  P2H: "P2h", P5H: "P5h",
  R1H: "R1h",
  T26H: "T26h",
  U24H: "U24h", U39H: "U39h",
  V20H: "V20h", V36H: "V36h",
};

export function glyphSvgSrc(code: string): string {
  const filename = SVG_FILENAME_OVERRIDES[code] ?? code;
  return `/glyphs/${encodeURIComponent(filename)}.svg`;
}
