import { describe, it, expect } from "vitest";
import { translitToUnicode, wordSlug, wordHref } from "@/lib/word-utils";

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
