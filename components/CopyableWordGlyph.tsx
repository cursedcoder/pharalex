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
    <div className={`group flex flex-col items-center gap-2 ${className ?? ""}`}>
      <div
        ref={ref}
        className="flex items-center justify-center rounded-xl border overflow-hidden bg-papyrus/50 border-sandstone/20 p-4 min-w-[120px]"
      >
        <WordGlyph mdc={mdc} baseSize={baseSize} />
      </div>
      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <CopyImageButton targetRef={ref} />
      </div>
    </div>
  );
}
