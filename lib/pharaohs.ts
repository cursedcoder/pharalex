import { PHARAOHS, DYNASTIES, PERIODS, DYNASTY_MAP, PERIOD_MAP } from "@/lib/data/pharaohs";
import { ROYAL_NAMES } from "@/lib/data/royal-names";
import type { Pharaoh, Dynasty, PeriodInfo, PeriodId, RoyalNames } from "@/lib/types";

function enrichWithRoyalNames(pharaoh: Pharaoh): Pharaoh {
  const royalNames = ROYAL_NAMES[pharaoh.slug];
  if (royalNames) {
    return { ...pharaoh, royalNames };
  }
  return pharaoh;
}

export function getAllPharaohs(): Pharaoh[] {
  return PHARAOHS.map(enrichWithRoyalNames);
}

export function getPharaohBySlug(slug: string): Pharaoh | undefined {
  const pharaoh = PHARAOHS.find((p) => p.slug === slug);
  return pharaoh ? enrichWithRoyalNames(pharaoh) : undefined;
}

export function getRoyalNames(slug: string): RoyalNames | undefined {
  return ROYAL_NAMES[slug];
}

export function getPharaohsUsingGlyph(glyphCode: string): Pharaoh[] {
  return PHARAOHS.filter((p) => {
    const names = ROYAL_NAMES[p.slug];
    if (!names) return false;
    const allCodes = [
      ...(names.prenomen?.codes ?? []),
      ...(names.nomen?.codes ?? []),
      ...(names.horus?.codes ?? []),
      ...(names.nebty?.codes ?? []),
      ...(names.golden?.codes ?? []),
    ];
    return allCodes.includes(glyphCode);
  }).map(enrichWithRoyalNames);
}

export function getAllDynasties(): Dynasty[] {
  return DYNASTIES;
}

export function getDynastyById(id: string): Dynasty | undefined {
  return DYNASTY_MAP[id];
}

export function getPharaohsByDynasty(dynastyId: string): Pharaoh[] {
  return PHARAOHS.filter((p) => p.dynastyId === dynastyId);
}

export function getPharaohsByPeriod(periodId: PeriodId): Pharaoh[] {
  const dynastyIds = DYNASTIES.filter((d) => d.period === periodId).map((d) => d.id);
  return PHARAOHS.filter((p) => dynastyIds.includes(p.dynastyId));
}

export function getNotablePharaohs(): Pharaoh[] {
  return PHARAOHS.filter((p) => p.notable);
}

export function getAllPeriods(): PeriodInfo[] {
  return PERIODS;
}

export function getPeriodById(id: PeriodId): PeriodInfo | undefined {
  return PERIOD_MAP[id];
}

export function getDynastiesByPeriod(periodId: PeriodId): Dynasty[] {
  return DYNASTIES.filter((d) => d.period === periodId);
}

export function searchPharaohs(query: string): Pharaoh[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return PHARAOHS.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.alternateNames.some((n) => n.toLowerCase().includes(q)) ||
      p.summary?.toLowerCase().includes(q)
  );
}

export function getPharaohStats() {
  return {
    total: PHARAOHS.length,
    notable: PHARAOHS.filter((p) => p.notable).length,
    dynasties: DYNASTIES.length,
    periods: PERIODS.length,
    withDates: PHARAOHS.filter((p) => p.reignStart !== null || p.reignEnd !== null).length,
  };
}

/** Format a reign year for display, e.g. -1279 → "1279 BC", 14 → "14 CE" */
export function formatYear(year: number | null): string {
  if (year === null) return "?";
  if (year < 0) return `${Math.abs(year)} BC`;
  if (year === 0) return "1 BC";
  return `${year} CE`;
}

export function formatReign(pharaoh: Pharaoh): string {
  if (pharaoh.reignNote) return pharaoh.reignNote;
  const start = pharaoh.reignStart;
  const end = pharaoh.reignEnd;
  if (start === null && end === null) return "Unknown";
  if (start === null) return `?–${formatYear(end)}`;
  if (end === null) return `${formatYear(start)}–?`;
  return `${formatYear(start)}–${formatYear(end)}`;
}
