/**
 * Pure utility functions for pharaohs — safe for client components.
 * No data dependencies.
 */

import type { Pharaoh } from "./types";

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
