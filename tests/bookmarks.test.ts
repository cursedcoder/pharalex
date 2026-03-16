import { describe, it, expect, beforeEach, vi } from "vitest";

// Set up window + localStorage before importing the module
const storage: Record<string, string> = {};
const localStorageMock = {
  getItem: vi.fn((key: string) => storage[key] ?? null),
  setItem: vi.fn((key: string, value: string) => { storage[key] = value; }),
  removeItem: vi.fn((key: string) => { delete storage[key]; }),
  clear: vi.fn(() => { for (const k of Object.keys(storage)) delete storage[k]; }),
};
Object.defineProperty(globalThis, "window", { value: globalThis, writable: true });
Object.defineProperty(globalThis, "localStorage", { value: localStorageMock });

import {
  getBookmarks,
  getBookmarksByType,
  isBookmarked,
  addBookmark,
  removeBookmark,
  toggleBookmark,
  clearBookmarks,
} from "@/lib/bookmarks";

beforeEach(() => {
  localStorageMock.clear();
  vi.clearAllMocks();
});

describe("bookmarks", () => {
  it("getBookmarks returns empty array when no bookmarks", () => {
    expect(getBookmarks()).toEqual([]);
  });

  it("addBookmark adds a bookmark and persists it", () => {
    const result = addBookmark("glyph", "A1", "A1 – seated man");
    expect(result).toHaveLength(1);
    expect(result[0]).toMatchObject({
      type: "glyph",
      id: "A1",
      label: "A1 – seated man",
    });
    expect(result[0].addedAt).toBeGreaterThan(0);

    // Verify it persisted
    const stored = getBookmarks();
    expect(stored).toHaveLength(1);
    expect(stored[0].id).toBe("A1");
  });

  it("addBookmark does not add duplicates", () => {
    addBookmark("glyph", "A1", "A1 – seated man");
    const result = addBookmark("glyph", "A1", "A1 – seated man");
    expect(result).toHaveLength(1);
  });

  it("addBookmark allows same id with different types", () => {
    addBookmark("glyph", "A1", "Glyph A1");
    const result = addBookmark("word", "A1", "Word A1");
    expect(result).toHaveLength(2);
  });

  it("removeBookmark removes the correct bookmark", () => {
    addBookmark("glyph", "A1", "A1");
    addBookmark("glyph", "G17", "G17");
    const result = removeBookmark("glyph", "A1");
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe("G17");
  });

  it("removeBookmark is safe on non-existent bookmark", () => {
    addBookmark("glyph", "A1", "A1");
    const result = removeBookmark("glyph", "Z99");
    expect(result).toHaveLength(1);
  });

  it("isBookmarked returns correct state", () => {
    addBookmark("glyph", "A1", "A1");
    expect(isBookmarked("glyph", "A1")).toBe(true);
    expect(isBookmarked("glyph", "G17")).toBe(false);
    expect(isBookmarked("word", "A1")).toBe(false);
  });

  it("getBookmarksByType filters correctly", () => {
    addBookmark("glyph", "A1", "A1");
    addBookmark("word", "nfr", "nfr");
    addBookmark("pharaoh", "khufu", "Khufu");
    addBookmark("glyph", "G17", "G17");

    expect(getBookmarksByType("glyph")).toHaveLength(2);
    expect(getBookmarksByType("word")).toHaveLength(1);
    expect(getBookmarksByType("pharaoh")).toHaveLength(1);
  });

  it("toggleBookmark adds when not present", () => {
    const { bookmarks, added } = toggleBookmark("glyph", "A1", "A1");
    expect(added).toBe(true);
    expect(bookmarks).toHaveLength(1);
  });

  it("toggleBookmark removes when present", () => {
    addBookmark("glyph", "A1", "A1");
    const { bookmarks, added } = toggleBookmark("glyph", "A1", "A1");
    expect(added).toBe(false);
    expect(bookmarks).toHaveLength(0);
  });

  it("clearBookmarks removes all bookmarks", () => {
    addBookmark("glyph", "A1", "A1");
    addBookmark("word", "nfr", "nfr");
    clearBookmarks();
    expect(getBookmarks()).toEqual([]);
  });

  it("handles corrupted localStorage gracefully", () => {
    storage["pharalex-bookmarks"] = "not valid json{{{";
    expect(getBookmarks()).toEqual([]);
  });
});
