"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { getBookmarks, removeBookmark } from "@/lib/bookmarks";
import type { Bookmark, BookmarkType } from "@/lib/bookmarks";
import { glyphSvgSrc } from "@/lib/glyph-utils";
import { Badge } from "@/components/ui/Badge";

const TYPE_CONFIG: Record<BookmarkType, { title: string; icon: string; emptyText: string }> = {
  glyph: {
    title: "Glyphs",
    icon: "\u{130DB}",
    emptyText: "No saved glyphs yet. Browse the glyph library and bookmark signs you want to study.",
  },
  word: {
    title: "Words",
    icon: "\u{1309B}",
    emptyText: "No saved words yet. Search the dictionary and bookmark entries to review later.",
  },
  pharaoh: {
    title: "Pharaohs",
    icon: "\u{13191}",
    emptyText: "No saved pharaohs yet. Explore the pharaohs section and bookmark rulers of interest.",
  },
};

const SECTION_ORDER: BookmarkType[] = ["glyph", "word", "pharaoh"];

function hrefForBookmark(b: Bookmark): string {
  switch (b.type) {
    case "glyph":
      return `/glyph/${encodeURIComponent(b.id)}`;
    case "word":
      return `/words/${encodeURIComponent(b.id)}`;
    case "pharaoh":
      return `/pharaohs/${encodeURIComponent(b.id)}`;
  }
}

export function BookmarksClient() {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [loaded, setLoaded] = useState(false);

  const reload = useCallback(() => {
    setBookmarks(getBookmarks());
  }, []);

  useEffect(() => {
    reload();
    setLoaded(true);
    window.addEventListener("pharalex-bookmarks-changed", reload);
    return () => window.removeEventListener("pharalex-bookmarks-changed", reload);
  }, [reload]);

  const handleRemove = useCallback((type: BookmarkType, id: string) => {
    removeBookmark(type, id);
    setBookmarks(getBookmarks());
    window.dispatchEvent(new CustomEvent("pharalex-bookmarks-changed"));
  }, []);

  const totalCount = bookmarks.length;

  return (
    <>
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-sandstone mb-8">
        <Link href="/" className="hover:text-gold transition-colors">
          Home
        </Link>
        <span>/</span>
        <span className="text-brown">Bookmarks</span>
      </nav>

      {/* Hero */}
      <div className="mb-10">
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-brown mb-3">
          Bookmarks
        </h1>
        <p className="text-brown-light leading-relaxed">
          {loaded && totalCount > 0
            ? `You have ${totalCount} saved item${totalCount !== 1 ? "s" : ""}. Your bookmarks are stored locally in this browser.`
            : "Save glyphs, words, and pharaohs as you explore. Bookmarks are stored locally in your browser."
          }
        </p>
      </div>

      {/* Sections */}
      <div className="space-y-10">
        {SECTION_ORDER.map((type) => {
          const config = TYPE_CONFIG[type];
          const items = bookmarks
            .filter((b) => b.type === type)
            .sort((a, b) => b.addedAt - a.addedAt);

          return (
            <section key={type}>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-hieroglyph text-xl opacity-60">{config.icon}</span>
                <h2 className="font-display text-xl font-semibold text-brown">
                  {config.title}
                </h2>
                {items.length > 0 && (
                  <Badge variant="gold" size="sm">{items.length}</Badge>
                )}
              </div>

              {!loaded ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-24 rounded-xl bg-sandstone/8 animate-pulse" />
                  ))}
                </div>
              ) : items.length === 0 ? (
                <p className="text-sm text-sandstone py-4 px-5 bg-ivory-dark/50 border border-sandstone/15 rounded-xl">
                  {config.emptyText}
                </p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {items.map((item) => (
                    <BookmarkCard
                      key={`${item.type}-${item.id}`}
                      bookmark={item}
                      onRemove={handleRemove}
                    />
                  ))}
                </div>
              )}
            </section>
          );
        })}
      </div>
    </>
  );
}

function BookmarkCard({
  bookmark,
  onRemove,
}: {
  bookmark: Bookmark;
  onRemove: (type: BookmarkType, id: string) => void;
}) {
  const href = hrefForBookmark(bookmark);

  return (
    <div className="relative group bg-ivory-dark/50 border border-sandstone/20 rounded-xl overflow-hidden hover:border-gold/40 hover:shadow-sm transition-all">
      <Link href={href} className="flex items-center gap-3 p-4">
        {bookmark.type === "glyph" && (
          <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-lg bg-papyrus/60 border border-sandstone/20 p-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={glyphSvgSrc(bookmark.id)}
              alt={bookmark.id}
              className="w-10 h-10 object-contain"
            />
          </div>
        )}
        {bookmark.type !== "glyph" && (
          <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-lg bg-papyrus/60 border border-sandstone/20">
            <span className="font-hieroglyph text-lg opacity-60">
              {TYPE_CONFIG[bookmark.type].icon}
            </span>
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="font-medium text-sm text-brown group-hover:text-gold transition-colors truncate">
            {bookmark.label}
          </div>
          <div className="text-xs text-sandstone mt-0.5">
            {bookmark.type === "glyph" ? bookmark.id : bookmark.type}
          </div>
        </div>
      </Link>

      {/* Remove button */}
      <button
        onClick={(e) => {
          e.preventDefault();
          onRemove(bookmark.type, bookmark.id);
        }}
        className="
          absolute top-2 right-2 w-7 h-7 flex items-center justify-center
          rounded-md text-sandstone/40 hover:text-red-500 hover:bg-red-50
          dark:hover:bg-red-900/20 transition-all opacity-0 group-hover:opacity-100
        "
        aria-label={`Remove ${bookmark.label} from bookmarks`}
      >
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}
