import type { Glyph, Category } from "./types";
import { loadGlyphs, loadCategories } from "./data-loader";
import { getBaseCode } from "./glyph-utils";

export type GlyphDetail = {
  transliteration?: string;
  meaning?: string;
};
export type GlyphDetailsMap = Record<string, GlyphDetail>;

export { glyphHref, getBaseCode } from "./glyph-utils";

let _glyphIndex: Map<string, Glyph> | null = null;

async function glyphIndex(): Promise<Map<string, Glyph>> {
  if (!_glyphIndex) {
    _glyphIndex = new Map();
    for (const g of await loadGlyphs()) {
      _glyphIndex.set(g.code.toLowerCase(), g);
    }
  }
  return _glyphIndex;
}

export async function getAllGlyphs(): Promise<Glyph[]> {
  return loadGlyphs();
}

export async function getGlyphByCode(
  code: string
): Promise<Glyph | undefined> {
  const normalized = decodeURIComponent(code).replace(/ /g, "+").toLowerCase();
  return (await glyphIndex()).get(normalized);
}

export async function getGlyphsByCategory(
  categoryId: string
): Promise<Glyph[]> {
  return (await loadGlyphs()).filter(
    (g) => g.category.toLowerCase() === categoryId.toLowerCase()
  );
}

export async function getAllCategories(): Promise<Category[]> {
  const [allGlyphs, catMap] = await Promise.all([
    loadGlyphs(),
    loadCategories(),
  ]);

  const categoryCounts: Record<string, number> = {};
  for (const glyph of allGlyphs) {
    categoryCounts[glyph.category] =
      (categoryCounts[glyph.category] || 0) + 1;
  }

  return Object.entries(catMap)
    .filter(([id]) => categoryCounts[id] > 0)
    .map(([id, name]) => ({
      id,
      name,
      glyphCount: categoryCounts[id] || 0,
    }));
}

export async function getCategoryById(
  id: string
): Promise<Category | undefined> {
  const [allGlyphs, catMap] = await Promise.all([
    loadGlyphs(),
    loadCategories(),
  ]);

  const normalizedId = Object.keys(catMap).find(
    (k) => k.toLowerCase() === id.toLowerCase()
  );
  if (!normalizedId) return undefined;
  const name = catMap[normalizedId];
  id = normalizedId;

  const count = allGlyphs.filter((g) => g.category === id).length;
  return { id, name, glyphCount: count };
}

export async function searchGlyphs(query: string): Promise<Glyph[]> {
  const lowerQuery = query.toLowerCase().trim();
  if (!lowerQuery) return [];

  return (await loadGlyphs()).filter((glyph) => {
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

export async function getGlyphVariants(code: string): Promise<Glyph[]> {
  if (code.startsWith("U+")) return [];
  const re = new RegExp(`^${code}[A-Z]`);
  return (await loadGlyphs()).filter((g) => re.test(g.code));
}

export async function getVariantSiblings(
  code: string
): Promise<{ siblings: Glyph[]; currentIndex: number } | null> {
  const baseCode = getBaseCode(code);
  if (!baseCode) return null;
  const parent = await getGlyphByCode(baseCode);
  if (!parent) return null;
  const variants = await getGlyphVariants(baseCode);
  const siblings = [parent, ...variants];
  const currentIndex = siblings.findIndex((g) => g.code === code);
  if (currentIndex === -1) return null;
  return { siblings, currentIndex };
}

export async function getRelatedGlyphs(code: string): Promise<Glyph[]> {
  const glyph = await getGlyphByCode(code);
  if (!glyph) return [];

  const related = await Promise.all(
    glyph.related.map((relatedCode) => getGlyphByCode(relatedCode))
  );
  return related.filter((g): g is Glyph => g !== undefined);
}

export async function buildGlyphDetailsMap(
  codes: string[]
): Promise<GlyphDetailsMap> {
  const map: GlyphDetailsMap = {};
  for (const code of codes) {
    const g = await getGlyphByCode(code);
    if (g) {
      map[code.toLowerCase()] = {
        transliteration: g.transliteration[0],
        meaning: g.meanings[0]?.text ?? g.description,
      };
    }
  }
  return map;
}

export async function getGlyphStats() {
  const [allGlyphs, categories] = await Promise.all([
    loadGlyphs(),
    getAllCategories(),
  ]);

  const stats = {
    totalGlyphs: allGlyphs.length,
    totalCategories: categories.length,
    byType: {
      logogram: 0,
      phonogram: 0,
      determinative: 0,
      other: 0,
    },
  };

  for (const glyph of allGlyphs) {
    for (const meaning of glyph.meanings) {
      stats.byType[meaning.type]++;
    }
  }

  return stats;
}
