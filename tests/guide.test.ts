import { describe, it, expect } from "vitest";
import {
  getAllGuidePages,
  getGuidePageBySlug,
  getAllGuideSections,
  getGuidePagesBySection,
  getPrevNextPages,
  getAllGuideSlugs,
} from "@/lib/guide";

describe("guide", () => {
  it("getAllGuidePages returns pages sorted by section then order", () => {
    const pages = getAllGuidePages();
    expect(pages.length).toBeGreaterThanOrEqual(6);

    // First page should be from the first section (basics)
    expect(pages[0].section).toBe("basics");
    // Last page should be from the last section
    expect(pages[pages.length - 1].section).toBe("using-pharalex");
  });

  it("getGuidePageBySlug returns the correct page", () => {
    const page = getGuidePageBySlug("introduction");
    expect(page).toBeDefined();
    expect(page!.title).toBe("Introduction to Hieroglyphs");
    expect(page!.content).toContain("Egyptian hieroglyphs");
  });

  it("getGuidePageBySlug returns undefined for unknown slug", () => {
    expect(getGuidePageBySlug("nonexistent")).toBeUndefined();
  });

  it("getAllGuideSections returns sections in order", () => {
    const sections = getAllGuideSections();
    expect(sections.length).toBe(3);
    expect(sections[0].id).toBe("basics");
    expect(sections[1].id).toBe("signs");
    expect(sections[2].id).toBe("using-pharalex");
  });

  it("getGuidePagesBySection returns only pages for that section", () => {
    const basics = getGuidePagesBySection("basics");
    expect(basics.length).toBe(2);
    expect(basics.every((p) => p.section === "basics")).toBe(true);
    // Should be sorted by order
    expect(basics[0].order).toBeLessThan(basics[1].order);
  });

  it("getPrevNextPages returns correct navigation", () => {
    const pages = getAllGuidePages();
    const firstSlug = pages[0].slug;
    const secondSlug = pages[1].slug;
    const lastSlug = pages[pages.length - 1].slug;

    // First page has no prev
    const first = getPrevNextPages(firstSlug);
    expect(first.prev).toBeNull();
    expect(first.next).not.toBeNull();
    expect(first.next!.slug).toBe(secondSlug);

    // Last page has no next
    const last = getPrevNextPages(lastSlug);
    expect(last.prev).not.toBeNull();
    expect(last.next).toBeNull();

    // Middle page has both
    const middle = getPrevNextPages(secondSlug);
    expect(middle.prev).not.toBeNull();
    expect(middle.next).not.toBeNull();
  });

  it("getPrevNextPages handles unknown slug", () => {
    const result = getPrevNextPages("unknown");
    expect(result.prev).toBeNull();
    expect(result.next).toBeNull();
  });

  it("getAllGuideSlugs returns all slugs", () => {
    const slugs = getAllGuideSlugs();
    expect(slugs.length).toBeGreaterThanOrEqual(6);
    expect(slugs).toContain("introduction");
    expect(slugs).toContain("transliteration");
    expect(slugs).toContain("gardiner-sign-list");
  });

  it("all pages have non-empty content", () => {
    const pages = getAllGuidePages();
    for (const page of pages) {
      expect(page.content.length).toBeGreaterThan(100);
      expect(page.title.length).toBeGreaterThan(0);
      expect(page.description.length).toBeGreaterThan(0);
    }
  });

  it("all page slugs are unique", () => {
    const slugs = getAllGuideSlugs();
    const unique = new Set(slugs);
    expect(unique.size).toBe(slugs.length);
  });
});
