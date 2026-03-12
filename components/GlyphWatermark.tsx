"use client";

import { useState, useEffect } from "react";
import type { Glyph } from "@/lib/types";

export function GlyphWatermark({ glyphs }: { glyphs: Glyph[] }) {
  const [chars, setChars] = useState("");

  useEffect(() => {
    const pool = [...glyphs];
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    setChars(pool.slice(0, 16).map((g) => g.unicode).join(""));
  }, [glyphs]);

  if (!chars) return null;

  return (
    <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] select-none pointer-events-none">
      <div className="font-hieroglyph text-[18rem] text-brown whitespace-nowrap">
        {chars}
      </div>
    </div>
  );
}
