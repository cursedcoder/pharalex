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
    <div className={`relative group ${className ?? ""}`}>
      <div ref={ref} className="inline-block">
        <WordGlyph mdc={mdc} baseSize={baseSize} />
      </div>
      <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <CopyImageButton targetRef={ref} />
      </div>
    </div>
  );
}
