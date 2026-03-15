"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { WordGlyph } from "@/components/WordGlyph";
import { CopyImageButton } from "@/components/CopyImageButton";

interface CopyableWordGlyphProps {
  mdc: string;
  baseSize?: number;
  className?: string;
}

export function CopyableWordGlyph({ mdc, baseSize = 40, className }: CopyableWordGlyphProps) {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  const updateScale = useCallback(() => {
    const container = containerRef.current;
    const content = ref.current;
    if (!container || !content) return;
    const containerW = container.clientWidth - 32; // subtract padding
    const contentW = content.scrollWidth;
    setScale(contentW > containerW ? containerW / contentW : 1);
  }, []);

  useEffect(() => {
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, [updateScale, mdc]);

  return (
    <div className={`group ${className ?? ""}`}>
      <div className="flex items-start gap-3">
        <div
          ref={containerRef}
          className="flex items-center rounded-xl border bg-papyrus/50 border-sandstone/20 p-4 overflow-hidden min-w-0"
        >
          <div
            ref={ref}
            style={{
              transform: scale < 1 ? `scale(${scale})` : undefined,
              transformOrigin: "left center",
              height: scale < 1 ? `${baseSize * scale}px` : undefined,
            }}
          >
            <WordGlyph mdc={mdc} baseSize={baseSize} />
          </div>
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 pt-3 shrink-0">
          <CopyImageButton targetRef={ref} />
        </div>
      </div>
    </div>
  );
}
