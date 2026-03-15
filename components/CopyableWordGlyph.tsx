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
    <div className={className ?? ""}>
      <div ref={ref} className="inline-block">
        <WordGlyph mdc={mdc} baseSize={baseSize} />
      </div>
      <div className="mt-2">
        <CopyImageButton targetRef={ref} />
      </div>
    </div>
  );
}
