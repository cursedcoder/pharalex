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
    <div className={`group ${className ?? ""}`}>
      <div className="flex items-start gap-3">
        <div
          ref={ref}
          className="flex items-center rounded-xl border overflow-x-auto bg-papyrus/50 border-sandstone/20 p-4"
        >
          <WordGlyph mdc={mdc} baseSize={baseSize} />
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 pt-3 shrink-0">
          <CopyImageButton targetRef={ref} />
        </div>
      </div>
    </div>
  );
}
