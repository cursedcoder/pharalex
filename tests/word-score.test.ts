import { describe, it, expect } from "vitest";
import { wordScore } from "@/lib/word-score";
import type { SearchWord } from "@/lib/search-types";

function makeWord(transliteration: string, translation = "", mdc = ""): SearchWord {
  return { transliteration, translation, grammar: null, mdc, gardinerCodes: [] };
}

describe("wordScore", () => {
  describe("case-sensitive MdC ranking", () => {
    it("ranks case-sensitive exact match above case-insensitive", () => {
      const dSrt = makeWord("dSrt", "the Red Land, desert");
      const Dsrt = makeWord("Dsrt", "sacred area");

      // Query is "dSrt" — dSrt is an exact case match, Dsrt is only case-insensitive
      const scoreDSrt = wordScore(dSrt, "dSrt", "dsrt");
      const scoreDsrt = wordScore(Dsrt, "dSrt", "dsrt");

      expect(scoreDSrt).toBe(0);
      expect(scoreDsrt).toBe(0.02);
      expect(scoreDSrt).toBeLessThan(scoreDsrt);
    });

    it("ranks case-sensitive exact match above case-insensitive (uppercase query)", () => {
      const Dsrt = makeWord("Dsrt", "sacred area");
      const dSrt = makeWord("dSrt", "the Red Land");

      const scoreDsrt = wordScore(Dsrt, "Dsrt", "dsrt");
      const scoreDSrt = wordScore(dSrt, "Dsrt", "dsrt");

      expect(scoreDsrt).toBe(0);
      expect(scoreDSrt).toBe(0.02);
      expect(scoreDsrt).toBeLessThan(scoreDSrt);
    });

    it("distinguishes d (hand) from D (snake/ḏ) in scoring", () => {
      const djed = makeWord("Dd", "stability"); // D = ḏ
      const dd = makeWord("dd", "something");   // d = d

      // Query "dd" should prefer "dd" over "Dd"
      expect(wordScore(dd, "dd", "dd")).toBeLessThan(wordScore(djed, "dd", "dd"));
    });

    it("distinguishes S (š/pool) from s (folded cloth) in scoring", () => {
      const shrt = makeWord("Srt", "thorn");  // S = š
      const srt = makeWord("srt", "something"); // s = s

      expect(wordScore(srt, "srt", "srt")).toBeLessThan(wordScore(shrt, "srt", "srt"));
    });
  });

  describe("transliteration scoring tiers", () => {
    it("exact transliteration < prefix < substring", () => {
      const exact = wordScore(makeWord("nfr"), "nfr", "nfr");
      const prefix = wordScore(makeWord("nfrt"), "nfr", "nfr");
      const substring = wordScore(makeWord("xnfr"), "nfr", "nfr");

      expect(exact).toBeLessThan(prefix);
      expect(prefix).toBeLessThan(substring);
    });

    it("case-sensitive prefix < case-insensitive prefix", () => {
      const csPrefix = wordScore(makeWord("dSrti"), "dSrt", "dsrt");
      const ciPrefix = wordScore(makeWord("Dsrti"), "dSrt", "dsrt");

      expect(csPrefix).toBe(0.04);
      expect(ciPrefix).toBe(0.05);
      expect(csPrefix).toBeLessThan(ciPrefix);
    });
  });

  describe("translation scoring", () => {
    it("exact translation < translation prefix < translation substring", () => {
      const exact = wordScore(makeWord("xyz", "desert"), "desert", "desert");
      const prefix = wordScore(makeWord("xyz", "deserted land"), "desert", "desert");
      const substring = wordScore(makeWord("xyz", "the desert"), "desert", "desert");

      expect(exact).toBeLessThan(prefix);
      expect(prefix).toBeLessThan(substring);
    });

    it("transliteration matches rank above translation matches", () => {
      const tlExact = wordScore(makeWord("nfr", "something"), "nfr", "nfr");
      const trExact = wordScore(makeWord("xyz", "nfr"), "nfr", "nfr");

      expect(tlExact).toBeLessThan(trExact);
    });
  });

  describe("fallback score", () => {
    it("returns 0.35 when nothing matches", () => {
      expect(wordScore(makeWord("abc", "def"), "xyz", "xyz")).toBe(0.35);
    });
  });
});
