import type { Glyph, Category } from "./types";
import glyphsData from "./data/glyphs.json";
import categoriesData from "./data/categories.json";

const glyphs: Glyph[] = glyphsData as Glyph[];
const categoryMap: Record<string, string> = categoriesData;

export function getAllGlyphs(): Glyph[] {
  return glyphs;
}

export function getGlyphByCode(code: string): Glyph | undefined {
  return glyphs.find(
    (g) => g.code.toLowerCase() === code.toLowerCase()
  );
}

export function getGlyphsByCategory(categoryId: string): Glyph[] {
  return glyphs.filter(
    (g) => g.category.toLowerCase() === categoryId.toLowerCase()
  );
}

export function getAllCategories(): Category[] {
  const categoryCounts: Record<string, number> = {};

  for (const glyph of glyphs) {
    categoryCounts[glyph.category] = (categoryCounts[glyph.category] || 0) + 1;
  }

  return Object.entries(categoryMap)
    .filter(([id]) => categoryCounts[id] > 0)
    .map(([id, name]) => ({
      id,
      name,
      glyphCount: categoryCounts[id] || 0,
    }));
}

export function getCategoryById(id: string): Category | undefined {
  const name = categoryMap[id];
  if (!name) return undefined;

  const count = glyphs.filter((g) => g.category === id).length;
  return { id, name, glyphCount: count };
}

export function searchGlyphs(query: string): Glyph[] {
  const lowerQuery = query.toLowerCase().trim();
  if (!lowerQuery) return [];

  return glyphs.filter((glyph) => {
    if (glyph.code.toLowerCase().includes(lowerQuery)) return true;
    if (glyph.unicode === query) return true;
    for (const meaning of glyph.meanings) {
      if (meaning.text.toLowerCase().includes(lowerQuery)) return true;
    }
    for (const trans of glyph.transliteration) {
      if (trans.toLowerCase().includes(lowerQuery)) return true;
    }
    if (glyph.categoryName.toLowerCase().includes(lowerQuery)) return true;

    return false;
  });
}

export function getRelatedGlyphs(code: string): Glyph[] {
  const glyph = getGlyphByCode(code);
  if (!glyph) return [];

  return glyph.related
    .map((relatedCode) => getGlyphByCode(relatedCode))
    .filter((g): g is Glyph => g !== undefined);
}

export function getGlyphStats() {
  const stats = {
    totalGlyphs: glyphs.length,
    totalCategories: getAllCategories().length,
    byType: {
      logogram: 0,
      phonogram: 0,
      determinative: 0,
      other: 0,
    },
  };

  for (const glyph of glyphs) {
    for (const meaning of glyph.meanings) {
      stats.byType[meaning.type]++;
    }
  }

  return stats;
}
