"use client";

import { Quadrat } from "@/components/Quadrat";

interface WordGlyphProps {
  mdc: string;
  baseSize?: number;
  className?: string;
  disableLinks?: boolean;
}

export function WordGlyph({ mdc, baseSize = 40, className, disableLinks = false }: WordGlyphProps) {
  return (
    <div className={className}>
      <Quadrat mdc={mdc} baseSize={baseSize} disableLinks={disableLinks} />
    </div>
  );
}
