"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Container } from "@/components/ui/Container";
import { SmartGlyph, GlyphChar } from "@/components/SmartGlyph";
import { getAllGlyphs, getAllCategories } from "@/lib/glyphs";
import type { Glyph, MeaningType } from "@/lib/types";

export default function BrowsePage() {
  const allGlyphs = getAllGlyphs();
  const categories = getAllCategories();

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<MeaningType | null>(null);
  const [renderableOnly, setRenderableOnly] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "compact">("grid");

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

    if (renderableOnly) {
      result = result.filter((g) => g.renderable !== false);
    }

    return result;
  }, [allGlyphs, selectedCategory, selectedType, renderableOnly]);

  const renderableCount = allGlyphs.filter((g) => g.renderable !== false).length;

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
                checked={renderableOnly}
                onChange={(e) => setRenderableOnly(e.target.checked)}
                className="w-4 h-4 rounded border-sandstone/30 text-gold focus:ring-gold/50"
              />
              <span className="text-sm text-sandstone">
                Renderable only ({renderableCount})
              </span>
            </label>

            <div className="flex-1" />

            <div className="flex items-center gap-2">
              <span className="text-sm text-sandstone">
                {filteredGlyphs.length} glyphs
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

          {viewMode === "grid" ? (
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 gap-2">
              {filteredGlyphs.map((glyph) => (
                <GlyphTile key={glyph.code} glyph={glyph} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {filteredGlyphs.map((glyph) => (
                <GlyphRow key={glyph.code} glyph={glyph} />
              ))}
            </div>
          )}

          {filteredGlyphs.length === 0 && (
            <div className="text-center py-12 text-sandstone">
              <p>No hieroglyphs match your filters.</p>
              <button
                onClick={() => {
                  setSelectedCategory(null);
                  setSelectedType(null);
                }}
                className="mt-2 text-gold hover:text-gold-dark"
              >
                Clear filters
              </button>
            </div>
          )}
        </Container>
      </main>
    </div>
  );
}

function GlyphTile({ glyph }: { glyph: Glyph }) {
  const hasSvg = !glyph.code.startsWith("U+");
  const isRenderable = glyph.renderable !== false;
  const canDisplay = hasSvg || isRenderable;

  return (
    <Link
      href={`/glyph/${glyph.code}`}
      className={`
        group relative aspect-square
        rounded-lg
        hover:shadow-md
        flex items-center justify-center
        transition-all
        ${
          canDisplay
            ? "bg-papyrus/50 border border-sandstone/20 hover:border-gold/40"
            : "bg-gradient-to-br from-sandstone/5 to-sandstone/15 border border-dashed border-sandstone/30 hover:border-gold/50"
        }
      `}
      title={`${glyph.code}: ${glyph.meanings[0]?.text || ""}`}
    >
      {hasSvg ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`/glyphs/${glyph.code}.svg`}
          alt={glyph.code}
          className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
        />
      ) : isRenderable ? (
        <span className="font-hieroglyph text-3xl sm:text-4xl">
          {glyph.unicode}
        </span>
      ) : (
        <span className="font-display font-bold text-[10px] sm:text-xs text-sandstone">
          {glyph.code.replace("U+", "").slice(0, 5)}
        </span>
      )}
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
    </Link>
  );
}

function GlyphRow({ glyph }: { glyph: Glyph }) {
  return (
    <Link
      href={`/glyph/${glyph.code}`}
      className="
        flex items-center gap-3 p-3
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
          {glyph.renderable === false && (
            <span className="text-[10px] px-1.5 py-0.5 bg-sandstone/10 rounded text-sandstone">
              Unicode 16
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
