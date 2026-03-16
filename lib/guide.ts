import { GUIDE_PAGES, GUIDE_SECTIONS } from "./data/guide";
import type { GuidePage, GuideSection } from "./data/guide";

export type { GuidePage, GuideSection };

export function getAllGuidePages(): GuidePage[] {
  return GUIDE_PAGES.sort((a, b) => {
    const sa = GUIDE_SECTIONS.find((s) => s.id === a.section)?.order ?? 0;
    const sb = GUIDE_SECTIONS.find((s) => s.id === b.section)?.order ?? 0;
    return sa - sb || a.order - b.order;
  });
}

export function getGuidePageBySlug(slug: string): GuidePage | undefined {
  return GUIDE_PAGES.find((p) => p.slug === slug);
}

export function getAllGuideSections(): GuideSection[] {
  return GUIDE_SECTIONS.sort((a, b) => a.order - b.order);
}

export function getGuidePagesBySection(sectionId: string): GuidePage[] {
  return GUIDE_PAGES
    .filter((p) => p.section === sectionId)
    .sort((a, b) => a.order - b.order);
}

export interface PrevNextPages {
  prev: GuidePage | null;
  next: GuidePage | null;
}

export function getPrevNextPages(slug: string): PrevNextPages {
  const allPages = getAllGuidePages();
  const idx = allPages.findIndex((p) => p.slug === slug);
  return {
    prev: idx > 0 ? allPages[idx - 1] : null,
    next: idx >= 0 && idx < allPages.length - 1 ? allPages[idx + 1] : null,
  };
}

export function getAllGuideSlugs(): string[] {
  return GUIDE_PAGES.map((p) => p.slug);
}
