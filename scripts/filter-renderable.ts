import * as fs from "fs";
import * as path from "path";

interface Glyph {
  code: string;
  unicode: string;
  category: string;
  categoryName: string;
  description: string;
  meanings: Array<{
    text: string;
    type: string;
    period?: string;
  }>;
  transliteration: string[];
  etymology?: string;
  related: string[];
  source?: string;
}

const BASIC_BLOCK_START = 0x13000;
const BASIC_BLOCK_END = 0x1342f;

function isRenderable(glyph: Glyph): boolean {
  const codepoint = glyph.unicode.codePointAt(0);
  if (!codepoint) return false;
  return codepoint >= BASIC_BLOCK_START && codepoint <= BASIC_BLOCK_END;
}

async function main() {
  const glyphsPath = path.join(__dirname, "../lib/data/glyphs.json");

  console.log("Loading glyphs...");
  const allGlyphs: Glyph[] = JSON.parse(fs.readFileSync(glyphsPath, "utf-8"));
  console.log(`Total glyphs: ${allGlyphs.length}`);

  const renderableGlyphs = allGlyphs.filter(isRenderable);
  console.log(`Renderable glyphs (basic Unicode block): ${renderableGlyphs.length}`);

  console.log("Updating related glyphs...");
  const renderableCodes = new Set(renderableGlyphs.map((g) => g.code));
  for (const glyph of renderableGlyphs) {
    glyph.related = glyph.related.filter((code) => renderableCodes.has(code));
    if (glyph.related.length < 5) {
      const sameCategory = renderableGlyphs.filter(
        (g) => g.category === glyph.category && g.code !== glyph.code
      );
      for (const other of sameCategory) {
        if (!glyph.related.includes(other.code) && glyph.related.length < 5) {
          glyph.related.push(other.code);
        }
      }
    }
  }

  fs.writeFileSync(glyphsPath, JSON.stringify(renderableGlyphs, null, 2));
  console.log(`\nWrote ${renderableGlyphs.length} renderable glyphs`);

  const stats: Record<string, number> = {};
  for (const glyph of renderableGlyphs) {
    stats[glyph.category] = (stats[glyph.category] || 0) + 1;
  }

  console.log("\nBy category:");
  for (const [cat, count] of Object.entries(stats).sort(
    (a, b) => b[1] - a[1]
  )) {
    console.log(`  ${cat}: ${count}`);
  }
}

main().catch(console.error);
