import { describe, it, expect } from "vitest";
import { translitToUnicode, wordSlug, wordHref, lemmaSlug, lemmaHref, parseLemmaSlug } from "@/lib/word-utils";

describe("translitToUnicode", () => {
  it("converts MdC transliteration to Unicode", () => {
    expect(translitToUnicode("nfr")).toBe("nfr");
    expect(translitToUnicode("Hr")).toBe("ḥr");
    expect(translitToUnicode("Ax")).toBe("ꜣḫ");
  });

  it("converts all special characters", () => {
    expect(translitToUnicode("A")).toBe("ꜣ");
    expect(translitToUnicode("a")).toBe("ꜥ");
    expect(translitToUnicode("H")).toBe("ḥ");
    expect(translitToUnicode("x")).toBe("ḫ");
    expect(translitToUnicode("X")).toBe("\u1e96");
    expect(translitToUnicode("S")).toBe("š");
    expect(translitToUnicode("q")).toBe("ḳ");
    expect(translitToUnicode("T")).toBe("ṯ");
    expect(translitToUnicode("D")).toBe("ḏ");
  });

  it("handles mixed text", () => {
    expect(translitToUnicode("nTr")).toBe("nṯr");
  });
});

describe("wordSlug", () => {
  it("creates a URL-safe slug", () => {
    expect(wordSlug("nfr")).toBe("nfr");
    expect(wordSlug("nTr")).toBe("nTr");
  });

  it("replaces slashes with double dashes", () => {
    expect(wordSlug("a/b")).toBe("a--b");
  });

  it("replaces question marks with q", () => {
    expect(wordSlug("a?b")).toBe("aqb");
  });

  it("replaces spaces with dots", () => {
    expect(wordSlug("a b")).toBe("a.b");
  });

  it("strips disallowed characters", () => {
    expect(wordSlug("a=b")).toBe("ab");
  });

  it("trims leading/trailing dots", () => {
    expect(wordSlug(" a ")).toBe("a");
  });
});

describe("wordHref", () => {
  it("returns word path with slug", () => {
    expect(wordHref("nfr")).toBe("/words/nfr");
  });
});

describe("lemmaSlug", () => {
  it("returns bare slug for primary lemma (empty lemmaId)", () => {
    expect(lemmaSlug("xprw", "")).toBe("xprw");
  });

  it("appends underscore + hash for secondary lemma", () => {
    expect(lemmaSlug("xprw", "756f")).toBe("xprw_756f");
  });

  it("handles compound transliterations", () => {
    expect(lemmaSlug("aHa n", "ab12")).toBe("aHa.n_ab12");
  });
});

describe("lemmaHref", () => {
  it("returns correct href for primary lemma", () => {
    expect(lemmaHref("nfr", "")).toBe("/words/nfr");
  });

  it("returns correct href for secondary lemma", () => {
    expect(lemmaHref("xprw", "756f")).toBe("/words/xprw_756f");
  });
});

describe("parseLemmaSlug", () => {
  it("parses bare slug as primary lemma", () => {
    expect(parseLemmaSlug("nfr")).toEqual({ baseSlug: "nfr", lemmaId: "" });
  });

  it("parses slug with hex hash suffix", () => {
    expect(parseLemmaSlug("xprw_756f")).toEqual({ baseSlug: "xprw", lemmaId: "756f" });
  });

  it("does not treat non-hex suffix as lemma hash", () => {
    expect(parseLemmaSlug("some_word")).toEqual({ baseSlug: "some_word", lemmaId: "" });
  });

  it("handles compound slugs with hash", () => {
    expect(parseLemmaSlug("aHa.n_ab12")).toEqual({ baseSlug: "aHa.n", lemmaId: "ab12" });
  });
});
