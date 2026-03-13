import { describe, it, expect } from "vitest";
import { env } from "cloudflare:test";

describe("CF ASSETS binding (workerd runtime)", () => {
  it("has ASSETS binding available", () => {
    expect(env.ASSETS).toBeDefined();
    expect(typeof env.ASSETS.fetch).toBe("function");
  });

  it("fetches glyphs.json from ASSETS", async () => {
    const res = await env.ASSETS.fetch(
      new Request("http://assets.local/data/glyphs.json")
    );
    expect(res.ok).toBe(true);
    expect(res.headers.get("content-type")).toContain("application/json");

    const glyphs = (await res.json()) as { code: string }[];
    expect(Array.isArray(glyphs)).toBe(true);
    expect(glyphs.length).toBeGreaterThan(1000);
    // Spot-check a known glyph
    expect(glyphs.some((g) => g.code === "A1")).toBe(true);
  });

  it("fetches words.json from ASSETS", async () => {
    const res = await env.ASSETS.fetch(
      new Request("http://assets.local/data/words.json")
    );
    expect(res.ok).toBe(true);

    const words = (await res.json()) as { transliteration: string }[];
    expect(Array.isArray(words)).toBe(true);
    expect(words.length).toBeGreaterThan(100);
  });

  it("fetches categories.json from ASSETS", async () => {
    const res = await env.ASSETS.fetch(
      new Request("http://assets.local/data/categories.json")
    );
    expect(res.ok).toBe(true);

    const cats = (await res.json()) as Record<string, string>;
    expect(typeof cats).toBe("object");
    expect(cats["A"]).toBeDefined();
  });

  it("returns 404 for non-existent asset", async () => {
    const res = await env.ASSETS.fetch(
      new Request("http://assets.local/data/nonexistent.json")
    );
    expect(res.ok).toBe(false);
  });

  it("serves SVG glyph files", async () => {
    const res = await env.ASSETS.fetch(
      new Request("http://assets.local/glyphs/A1.svg")
    );
    expect(res.ok).toBe(true);
    const text = await res.text();
    expect(text).toContain("<svg");
  });
});
