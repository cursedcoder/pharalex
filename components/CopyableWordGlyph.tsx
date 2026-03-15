"use client";

import { useRef } from "react";
import { WordGlyph } from "@/components/WordGlyph";
import { CopyImageButton } from "@/components/CopyImageButton";

interface CopyableWordGlyphProps {
  mdc: string;
  baseSize?: number;
  className?: string;
}

export function CopyableWordGlyph({ mdc, baseSize = 40, className }: CopyableWordGlyphProps) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div className={`group flex items-start gap-3 ${className ?? ""}`}>
      <div ref={ref} className="inline-block">
        <WordGlyph mdc={mdc} baseSize={baseSize} />
      </div>
      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 pt-1">
        <CopyImageButton targetRef={ref} />
      </div>
    </div>
  );
}
