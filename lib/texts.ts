import type { EgyptianText } from "@/lib/types";
import { TEXTS } from "@/lib/data/texts";

export function getAllTexts(): EgyptianText[] {
  return TEXTS;
}

export function getTextBySlug(slug: string): EgyptianText | undefined {
  return TEXTS.find((t) => t.slug === slug);
}

export function getTextsByPharaoh(pharaohSlug: string): EgyptianText[] {
  return TEXTS.filter((t) => t.pharaohSlug === pharaohSlug);
}
