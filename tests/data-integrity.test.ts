/**
 * Data integrity tests for glyphs.json.
 * Run with: npx vitest run scripts/data-integrity.test.ts
 *
 * These catch regressions from data processing pipeline runs:
 * - No duplicate transliterations (MdC/Unicode mixing)
 * - No English words corrupted by MdC conversion
 * - No XML artifacts in descriptions
 * - No noise words in transliterations
 * - Proper Gardiner code format
 * - Sign names not truncated
 */

import { describe, it, expect } from "vitest";
import glyphs from "../public/data/glyphs.json";

describe("glyphs.json data integrity", () => {
  it("has glyphs", () => {
    expect(glyphs.length).toBeGreaterThan(8000);
  });

  it("every glyph has a code and category", () => {
    for (const g of glyphs) {
      expect(g.code).toBeTruthy();
      expect(g.category).toBeTruthy();
    }
  });

  it("no duplicate Gardiner codes", () => {
    const codes = glyphs.map((g: any) => g.code);
    const dupes = codes.filter((c: string, i: number) => codes.indexOf(c) !== i);
    expect(dupes).toEqual([]);
  });

  it("all codes follow Gardiner format (no U+ or US* codes)", () => {
    const bad = glyphs.filter(
      (g: any) => g.code.startsWith("U+") || g.code.startsWith("US")
    );
    expect(bad.map((g: any) => g.code)).toEqual([]);
  });

  it("no MdC/Unicode duplicate transliterations per glyph", () => {
    const MDC: Record<string, string> = {
      A: "ꜣ", a: "ꜥ", H: "ḥ", x: "ḫ", X: "ẖ", S: "š", T: "ṯ", D: "ḏ",
    };
    function normalize(s: string): string {
      return [...s]
        .map((c) => MDC[c] ?? c)
        .join("")
        .replace(/\./g, "")
        .toLowerCase();
    }

    const dupes: string[] = [];
    for (const g of glyphs) {
      const seen = new Set<string>();
      for (const t of (g as any).transliteration) {
        const key = normalize(t);
        if (seen.has(key)) {
          dupes.push(`${(g as any).code}: "${t}" duplicates another entry`);
        }
        seen.add(key);
      }
    }
    expect(dupes).toEqual([]);
  });

  it("no English noise words in transliterations", () => {
    const NOISE = new Set([
      "logogram", "phonogram", "determinative", "biliteral", "triliteral",
      "uniliteral", "classifier", "ideogram", "abbreviation", "sign",
      "phonetic", "phonemogram",
    ]);
    const bad: string[] = [];
    for (const g of glyphs) {
      for (const t of (g as any).transliteration) {
        if (NOISE.has(t.toLowerCase())) {
          bad.push(`${(g as any).code}: "${t}"`);
        }
      }
    }
    expect(bad).toEqual([]);
  });

  it("no XML artifacts (/>) in descriptions", () => {
    const bad = glyphs.filter((g: any) => g.description.includes("/>"));
    expect(bad.map((g: any) => `${g.code}: ${g.description.slice(0, 40)}`)).toEqual([]);
  });

  it("no Phonemogram noise in meanings", () => {
    const bad: string[] = [];
    for (const g of glyphs) {
      for (const m of (g as any).meanings) {
        if (m.text === "Phonemogram") {
          bad.push((g as any).code);
        }
      }
    }
    expect(bad).toEqual([]);
  });

  it("no whitespace in transliterations", () => {
    const bad: string[] = [];
    for (const g of glyphs) {
      for (const t of (g as any).transliteration) {
        if (t !== t.trim() || t === "") {
          bad.push(`${(g as any).code}: "${t}"`);
        }
      }
    }
    expect(bad).toEqual([]);
  });

  it("no MdC-corrupted English words in Classifier meanings", () => {
    const bad: string[] = [];
    for (const g of glyphs) {
      for (const m of (g as any).meanings) {
        if (m.text.startsWith("Classifier") && /ꜥ|ḥ|ḫ|š|ṯ|ḏ/.test(m.text)) {
          bad.push(`${(g as any).code}: ${m.text.slice(0, 50)}`);
        }
      }
    }
    expect(bad).toEqual([]);
  });

  it("no backslash catalog references in meanings", () => {
    const bad: string[] = [];
    for (const g of glyphs) {
      for (const m of (g as any).meanings) {
        if (m.text.startsWith("\\")) {
          bad.push(`${(g as any).code}: ${m.text}`);
        }
      }
    }
    expect(bad).toEqual([]);
  });

  it("signNames are not truncated at prepositions", () => {
    const bad = glyphs.filter(
      (g: any) => g.signName && /\b(with|on|of|and|from|in)\s*$/.test(g.signName)
    );
    expect(bad.map((g: any) => `${g.code}: "${g.signName}"`)).toEqual([]);
  });

  it("meanings are sorted: phonogram → logogram → determinative → other", () => {
    const ORDER: Record<string, number> = {
      phonogram: 0, logogram: 1, determinative: 2, other: 3,
    };
    const unsorted: string[] = [];
    for (const g of glyphs) {
      const types = (g as any).meanings.map((m: any) => ORDER[m.type] ?? 3);
      for (let i = 1; i < types.length; i++) {
        if (types[i] < types[i - 1]) {
          unsorted.push((g as any).code);
          break;
        }
      }
    }
    expect(unsorted).toEqual([]);
  });

  it("no Gardiner codes leaked into transliteration arrays", () => {
    const GARDINER_RE = /^[A-Z][a-z]?\d+[A-Z]?$/;
    const bad: string[] = [];
    for (const g of glyphs) {
      for (const t of (g as any).transliteration) {
        if (GARDINER_RE.test(t)) {
          bad.push(`${(g as any).code}: "${t}"`);
        }
      }
    }
    expect(bad).toEqual([]);
  });

  it("tag 'olw' typo does not exist (should be 'owl')", () => {
    const bad = glyphs.filter(
      (g: any) => g.tags && g.tags.includes("olw")
    );
    expect(bad.map((g: any) => g.code)).toEqual([]);
  });

  it("every SVG file exists for each glyph code", () => {
    // This test only works in Node.js environment
    const fs = require("fs");
    const path = require("path");
    const svgsDir = path.join(process.cwd(), "public/glyphs");
    const missing: string[] = [];
    for (const g of glyphs) {
      const svgPath = path.join(svgsDir, `${(g as any).code}.svg`);
      if (!fs.existsSync(svgPath)) {
        missing.push((g as any).code);
      }
    }
    expect(missing).toEqual([]);
  });
});
