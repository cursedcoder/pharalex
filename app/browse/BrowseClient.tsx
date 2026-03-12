"use client";

import { useState, useMemo, useRef, useCallback, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { useWindowVirtualizer } from "@tanstack/react-virtual";
import { Header } from "@/components/Header";
import { Container } from "@/components/ui/Container";
import { SmartGlyph } from "@/components/SmartGlyph";
import { getAllGlyphs, getAllCategories, getBaseCode, glyphHref } from "@/lib/glyphs";
import type { Glyph, MeaningType } from "@/lib/types";

// Grid columns at each breakpoint (mirrors tailwind grid-cols-*)
const GRID_COLS_BY_WIDTH = [
  [1536, 12],
  [1280, 10],
  [1024, 8],
  [768, 6],
  [0, 4],
] as const;

// Tile is square: width = (containerWidth - gaps) / cols
// We keep a fixed tile size for the virtualizer estimate
const GRID_TILE_SIZE = 88; // px — square tile side length
const GRID_GAP = 8; // px
const LIST_ROW_HEIGHT = 64; // px
const LIST_GAP = 8; // px

function useContainerWidth(ref: React.RefObject<HTMLDivElement | null>) {
  const [width, setWidth] = useState(1024);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new ResizeObserver(([entry]) => setWidth(entry.contentRect.width));
    obs.observe(ref.current);
    setWidth(ref.current.offsetWidth);
    return () => obs.disconnect();
  }, [ref]);
  return width;
}

function getColCount(width: number) {
  for (const [breakpoint, cols] of GRID_COLS_BY_WIDTH) {
    if (width >= breakpoint) return cols;
  }
  return 4;
}

// --- Virtual Grid (window scroll) ---
function VirtualGrid({
  glyphs,
  variantCounts,
}: {
  glyphs: Glyph[];
  variantCounts: Record<string, number>;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollMargin, setScrollMargin] = useState(0);
  const width = useContainerWidth(containerRef);
  const cols = getColCount(width);
  const tileSize = width > 0 ? Math.floor((width - GRID_GAP * (cols - 1)) / cols) : GRID_TILE_SIZE;
  const rowHeight = tileSize + GRID_GAP;

  useEffect(() => {
    if (containerRef.current) {
      setScrollMargin(containerRef.current.offsetTop);
    }
  });

  const rows = useMemo(() => {
    const result: Glyph[][] = [];
    for (let i = 0; i < glyphs.length; i += cols) {
      result.push(glyphs.slice(i, i + cols));
    }
    return result;
  }, [glyphs, cols]);

  const virtualizer = useWindowVirtualizer({
    count: rows.length,
    estimateSize: () => rowHeight,
    overscan: 5,
    scrollMargin,
  });

  return (
    <div ref={containerRef}>
      <div
        style={{
          height: virtualizer.getTotalSize(),
          position: "relative",
        }}
      >
        {virtualizer.getVirtualItems().map((virtualRow) => {
          const row = rows[virtualRow.index];
          return (
            <div
              key={virtualRow.key}
              data-index={virtualRow.index}
              ref={virtualizer.measureElement}
              style={{
                position: "absolute",
                top: virtualRow.start - virtualizer.options.scrollMargin,
                left: 0,
                right: 0,
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: `repeat(${cols}, ${tileSize}px)`,
                  gap: GRID_GAP,
                  marginBottom: GRID_GAP,
                }}
              >
                {row.map((glyph) => (
                  <GlyphTile
                    key={glyph.code}
                    glyph={glyph}
                    variantCount={variantCounts[glyph.code] || 0}
                    size={tileSize}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// --- Virtual List (window scroll) ---
function VirtualList({
  glyphs,
  variantCounts,
}: {
  glyphs: Glyph[];
  variantCounts: Record<string, number>;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollMargin, setScrollMargin] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setScrollMargin(containerRef.current.offsetTop);
    }
  });

  const virtualizer = useWindowVirtualizer({
    count: glyphs.length,
    estimateSize: () => LIST_ROW_HEIGHT + LIST_GAP,
    overscan: 8,
    scrollMargin,
  });

  return (
    <div ref={containerRef}>
      <div style={{ height: virtualizer.getTotalSize(), position: "relative" }}>
        {virtualizer.getVirtualItems().map((virtualRow) => {
          const glyph = glyphs[virtualRow.index];
          return (
            <div
              key={virtualRow.key}
              data-index={virtualRow.index}
              ref={virtualizer.measureElement}
              style={{
                position: "absolute",
                top: virtualRow.start - virtualizer.options.scrollMargin,
                left: 0,
                right: 0,
                paddingBottom: LIST_GAP,
              }}
            >
              <GlyphRow
                glyph={glyph}
                variantCount={variantCounts[glyph.code] || 0}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

// --- Page ---
function BrowsePageInner() {
  const allGlyphs = getAllGlyphs();
  const categories = getAllCategories();
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialTag = searchParams.get("tag") ?? null;

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<MeaningType | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(initialTag);
  const [viewMode, setViewMode] = useState<"grid" | "compact">("grid");
  const [groupVariants, setGroupVariants] = useState(true);

  const filteredGlyphs = useMemo(() => {
    let result = allGlyphs;

    if (selectedCategory) {
      result = result.filter((g) => g.category === selectedCategory);
    }

    if (selectedType) {
      result = result.filter((g) =>
        g.meanings.some((m) => m.type === selectedType)
      );
    }

    if (selectedTag) {
      result = result.filter((g) => g.tags?.includes(selectedTag));
    }

    return result;
  }, [allGlyphs, selectedCategory, selectedType, selectedTag]);

  const displayGlyphs = useMemo(() => {
    if (!groupVariants) return filteredGlyphs;
    const inResult = new Set(filteredGlyphs.map((g) => g.code));
    return filteredGlyphs.filter((g) => {
      const base = getBaseCode(g.code);
      return !base || !inResult.has(base);
    });
  }, [filteredGlyphs, groupVariants]);

  const variantCounts = useMemo(() => {
    if (!groupVariants) return {};
    const counts: Record<string, number> = {};
    for (const g of filteredGlyphs) {
      const base = getBaseCode(g.code);
      if (base) counts[base] = (counts[base] || 0) + 1;
    }
    return counts;
  }, [filteredGlyphs, groupVariants]);

  const clearFilters = useCallback(() => {
    setSelectedCategory(null);
    setSelectedType(null);
    setSelectedTag(null);
    router.replace("/browse");
  }, [router]);

  const meaningTypes: { value: MeaningType; label: string }[] = [
    { value: "logogram", label: "Logograms" },
    { value: "phonogram", label: "Phonograms" },
    { value: "determinative", label: "Determinatives" },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <main className="py-8 sm:py-12">
        <Container>
          <div className="mb-8">
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-brown mb-4">
              Browse Hieroglyphs
            </h1>
            <p className="text-brown-light">
              Explore all {allGlyphs.length} hieroglyphs in the collection.
              Filter by category or type.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 mb-8 pb-6 border-b border-sandstone/20">
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium text-sandstone">
                Category:
              </label>
              <select
                value={selectedCategory || ""}
                onChange={(e) =>
                  setSelectedCategory(e.target.value || null)
                }
                className="
                  px-3 py-2 text-sm rounded-lg
                  bg-ivory-dark border border-sandstone/30
                  focus:outline-none focus:ring-2 focus:ring-gold/50
                "
              >
                <option value="">All Categories</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.id}: {cat.name} ({cat.glyphCount})
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-2">
              <label className="text-sm font-medium text-sandstone">
                Type:
              </label>
              <select
                value={selectedType || ""}
                onChange={(e) =>
                  setSelectedType((e.target.value as MeaningType) || null)
                }
                className="
                  px-3 py-2 text-sm rounded-lg
                  bg-ivory-dark border border-sandstone/30
                  focus:outline-none focus:ring-2 focus:ring-gold/50
                "
              >
                <option value="">All Types</option>
                {meaningTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={groupVariants}
                onChange={(e) => setGroupVariants(e.target.checked)}
                className="w-4 h-4 rounded border-sandstone/30 text-gold focus:ring-gold/50"
              />
              <span className="text-sm text-sandstone">Group variants</span>
            </label>

            {selectedTag && (
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-gold/15 border border-gold/30">
                <span className="text-xs font-medium text-gold-dark">Tag: {selectedTag}</span>
                <button
                  onClick={() => {
                    setSelectedTag(null);
                    router.replace("/browse");
                  }}
                  className="text-gold-dark hover:text-brown transition-colors ml-0.5"
                  aria-label="Remove tag filter"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            )}

            <div className="flex-1" />

            <div className="flex items-center gap-2">
              <span className="text-sm text-sandstone">
                {displayGlyphs.length} glyphs{groupVariants && filteredGlyphs.length !== displayGlyphs.length ? ` (${filteredGlyphs.length} total)` : ""}
              </span>
              <div className="flex border border-sandstone/30 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`px-3 py-2 text-sm ${
                    viewMode === "grid"
                      ? "bg-gold/20 text-gold-dark"
                      : "bg-ivory-dark text-sandstone hover:bg-gold/10"
                  }`}
                  title="Grid view"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode("compact")}
                  className={`px-3 py-2 text-sm ${
                    viewMode === "compact"
                      ? "bg-gold/20 text-gold-dark"
                      : "bg-ivory-dark text-sandstone hover:bg-gold/10"
                  }`}
                  title="Compact view"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {displayGlyphs.length === 0 ? (
            <div className="text-center py-12 text-sandstone">
              <p>No hieroglyphs match your filters.</p>
              <button
                onClick={clearFilters}
                className="mt-2 text-gold hover:text-gold-dark"
              >
                Clear filters
              </button>
            </div>
          ) : viewMode === "grid" ? (
            <VirtualGrid glyphs={displayGlyphs} variantCounts={variantCounts} />
          ) : (
            <VirtualList glyphs={displayGlyphs} variantCounts={variantCounts} />
          )}
        </Container>
      </main>
    </div>
  );
}

export default function BrowseClient() {
  return (
    <Suspense>
      <BrowsePageInner />
    </Suspense>
  );
}

function GlyphTile({ glyph, variantCount = 0, size }: { glyph: Glyph; variantCount?: number; size?: number }) {
  return (
    <Link
      href={glyphHref(glyph.code)}
      className="
        group relative
        rounded-lg
        hover:shadow-md
        flex items-center justify-center
        transition-all overflow-hidden
        bg-papyrus/50 border border-sandstone/20 hover:border-gold/40
      "
      style={size ? { width: size, height: size } : undefined}
      title={`${glyph.code}: ${glyph.meanings[0]?.text || ""}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/glyphs/${encodeURIComponent(glyph.code)}.svg`}
        alt={glyph.code}
        className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
      />
      <span
        className="
          absolute bottom-0 left-0 right-0
          text-[10px] text-center text-sandstone
          bg-ivory/80 dark:bg-ivory-dark/80
          py-0.5 rounded-b-lg
          opacity-0 group-hover:opacity-100
          transition-opacity
        "
      >
        {glyph.code}
      </span>
      {variantCount > 0 && (
        <span className="absolute top-0.5 right-0.5 text-[9px] leading-none px-1 py-0.5 rounded bg-gold/20 text-gold-dark font-medium">
          +{variantCount}
        </span>
      )}
    </Link>
  );
}

function GlyphRow({ glyph, variantCount = 0 }: { glyph: Glyph; variantCount?: number }) {
  return (
    <Link
      href={glyphHref(glyph.code)}
      className="
        flex items-center gap-3 p-3 h-full
        bg-ivory-dark/50 border border-sandstone/20 rounded-lg
        hover:border-gold/40 hover:shadow-md
        transition-all
      "
    >
      <SmartGlyph glyph={glyph} size="sm" />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="font-medium text-brown">{glyph.code}</span>
          <span className="text-xs text-sandstone">{glyph.category}</span>
          {variantCount > 0 && (
            <span className="text-[10px] px-1.5 py-0.5 bg-gold/10 rounded text-gold-dark font-medium">
              +{variantCount} variants
            </span>
          )}
        </div>
        <p className="text-sm text-brown-light truncate">
          {glyph.meanings[0]?.text || ""}
        </p>
      </div>
    </Link>
  );
}
