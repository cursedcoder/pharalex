"use client";

import { useRef, useEffect, useState } from "react";

/**
 * Renders a Unicode hieroglyph character, hiding it if the font
 * can't render it (tofu detection via canvas measurement).
 */
export function UnicodeChar({ char, className = "" }: { char: string; className?: string }) {
  const [visible, setVisible] = useState(true);
  const measured = useRef(false);

  useEffect(() => {
    if (measured.current || !char) return;
    measured.current = true;

    // Compare the character width against a known-missing codepoint.
    // If they render at the same width, the font doesn't have this glyph.
    try {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const font = '48px "NewGardiner", "Noto Sans Egyptian Hieroglyphs", sans-serif';
      ctx.font = font;

      const charWidth = ctx.measureText(char).width;
      // U+FFFF is a guaranteed non-character — always renders as tofu
      const tofuWidth = ctx.measureText("\uFFFF").width;

      // If same width as tofu, the glyph is missing
      if (charWidth === tofuWidth || charWidth === 0) {
        setVisible(false);
      }
    } catch {
      // Canvas not available, keep visible
    }
  }, [char]);

  if (!visible || !char) return null;

  return <span className={`font-hieroglyph ${className}`}>{char}</span>;
}
