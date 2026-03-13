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

export function glyphSvgSrc(code: string): string {
  return `/glyphs/${encodeURIComponent(code)}.svg`;
}
