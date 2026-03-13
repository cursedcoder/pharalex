"use client";

import dynamic from "next/dynamic";

const Quadrat = dynamic(
  () => import("@/components/Quadrat").then((m) => m.Quadrat),
  { ssr: false },
);

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
