"use client";

import { createContext, useContext } from "react";
import type { GlyphDetail, GlyphDetailsMap } from "@/lib/glyphs";

export type { GlyphDetail, GlyphDetailsMap };

const GlyphDetailsContext = createContext<GlyphDetailsMap>({});

export function GlyphDetailsProvider({
  details,
  children,
}: {
  details: GlyphDetailsMap;
  children: React.ReactNode;
}) {
  return (
    <GlyphDetailsContext.Provider value={details}>
      {children}
    </GlyphDetailsContext.Provider>
  );
}

export function useGlyphDetail(code: string): GlyphDetail | undefined {
  const map = useContext(GlyphDetailsContext);
  return map[code.toLowerCase()];
}
