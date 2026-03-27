"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { glyphSvgSrc } from "@/lib/glyph-utils";
import { translitToUnicode } from "@/lib/word-utils";
import type { SearchApiResult } from "@/app/api/search/route";

interface QuickLink {
  label: string;
  href: string;
  section: string;
}

const QUICK_LINKS: QuickLink[] = [
  { label: "Browse All Glyphs", href: "/browse", section: "Pages" },
  { label: "Categories", href: "/categories", section: "Pages" },
  { label: "Pharaohs", href: "/pharaohs", section: "Pages" },
  { label: "Ancient Texts", href: "/texts", section: "Pages" },
  { label: "Corpus Statistics", href: "/stats", section: "Pages" },
  { label: "Alphabet", href: "/alphabet", section: "Pages" },
  { label: "Bookmarks", href: "/bookmarks", section: "Pages" },
  { label: "Guide", href: "/guide", section: "Guide" },
  { label: "Introduction to Hieroglyphs", href: "/guide/introduction", section: "Guide" },
  { label: "Understanding Transliteration", href: "/guide/transliteration", section: "Guide" },
  { label: "The Gardiner Sign List", href: "/guide/gardiner-sign-list", section: "Guide" },
];

type ResultItem = {
  kind: "link";
  label: string;
  href: string;
  section: string;
} | (SearchApiResult & { href: string });

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<ResultItem[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const abortRef = useRef<AbortController | null>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const router = useRouter();

  // Compute filtered quick links or search results
  const getQuickLinks = useCallback((q: string): ResultItem[] => {
    if (!q.trim()) return QUICK_LINKS.map((l) => ({ kind: "link" as const, ...l }));
    const ql = q.toLowerCase();
    return QUICK_LINKS
      .filter((l) => l.label.toLowerCase().includes(ql))
      .map((l) => ({ kind: "link" as const, ...l }));
  }, []);

  // Search API
  const doSearch = useCallback((q: string) => {
    if (debounceRef.current) clearTimeout(debounceRef.current);

    if (!q.trim() || q.trim().length < 2) {
      setResults(getQuickLinks(q));
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    // Show filtered quick links immediately while API loads
    setResults(getQuickLinks(q));

    debounceRef.current = setTimeout(async () => {
      if (abortRef.current) abortRef.current.abort();
      const controller = new AbortController();
      abortRef.current = controller;
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(q.trim())}`, {
          signal: controller.signal,
        });
        const data = await res.json();
        const apiResults: ResultItem[] = (data.results ?? []).slice(0, 8).map(
          (r: SearchApiResult) => ({
            ...r,
            href: r.kind === "glyph" ? `/glyph/${encodeURIComponent(r.code)}` : r.href,
          })
        );
        // Merge quick link matches + API results
        const quickMatches = getQuickLinks(q);
        setResults([...quickMatches, ...apiResults]);
        setIsLoading(false);
      } catch {
        if (!controller.signal.aborted) setIsLoading(false);
      }
    }, 200);
  }, [getQuickLinks]);

  // Open/close
  const openPalette = useCallback(() => {
    setOpen(true);
    setQuery("");
    setResults(QUICK_LINKS.map((l) => ({ kind: "link" as const, ...l })));
    setSelectedIndex(0);
    setIsLoading(false);
  }, []);

  const closePalette = useCallback(() => {
    setOpen(false);
    setQuery("");
    setResults([]);
    if (abortRef.current) abortRef.current.abort();
    if (debounceRef.current) clearTimeout(debounceRef.current);
  }, []);

  // Global keyboard listener
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (open) closePalette();
        else openPalette();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, openPalette, closePalette]);

  // Focus input when opened
  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  // Scroll selected item into view
  useEffect(() => {
    if (!listRef.current) return;
    const items = listRef.current.querySelectorAll("[data-palette-item]");
    items[selectedIndex]?.scrollIntoView({ block: "nearest" });
  }, [selectedIndex]);

  const navigate = useCallback((href: string) => {
    closePalette();
    router.push(href);
  }, [closePalette, router]);

  const handleInputKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : 0));
          break;
        case "ArrowUp":
          e.preventDefault();
          setSelectedIndex((prev) => (prev > 0 ? prev - 1 : results.length - 1));
          break;
        case "Enter":
          e.preventDefault();
          if (results[selectedIndex]) {
            navigate(results[selectedIndex].href);
          } else if (query.trim()) {
            navigate(`/search?q=${encodeURIComponent(query)}&exact=true`);
          }
          break;
        case "Escape":
          closePalette();
          break;
      }
    },
    [results, selectedIndex, query, navigate, closePalette],
  );

  const handleQueryChange = useCallback(
    (value: string) => {
      setQuery(value);
      setSelectedIndex(0);
      doSearch(value);
    },
    [doSearch],
  );

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh]"
      onClick={closePalette}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-brown/40 dark:bg-black/60 backdrop-blur-sm" />

      {/* Palette */}
      <div
        className="relative w-full max-w-lg mx-4 bg-ivory dark:bg-ivory-dark border border-sandstone/30 rounded-xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search input */}
        <div className="flex items-center gap-3 px-4 border-b border-sandstone/20">
          <svg className="w-5 h-5 text-sandstone/60 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => handleQueryChange(e.target.value)}
            onKeyDown={handleInputKeyDown}
            placeholder="Search glyphs, words, pages..."
            className="flex-1 py-3.5 bg-transparent text-brown placeholder-sandstone/50 outline-none text-base"
            data-no-focus-ring
          />
          <kbd className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] text-sandstone/60 bg-sandstone/8 border border-sandstone/20 rounded font-mono">
            esc
          </kbd>
        </div>

        {/* Results */}
        <div ref={listRef} className="max-h-80 overflow-y-auto">
          {results.length === 0 && !isLoading && query.trim() && (
            <div className="px-4 py-8 text-center text-sm text-sandstone">
              No results for &ldquo;{query}&rdquo;
            </div>
          )}

          {results.map((item, index) => {
            if (item.kind === "link") {
              return (
                <button
                  key={`link-${item.href}`}
                  data-palette-item
                  onClick={() => navigate(item.href)}
                  className={`
                    w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors
                    ${index === selectedIndex ? "bg-gold/12" : "hover:bg-gold/8"}
                  `}
                >
                  <svg className="w-4 h-4 text-sandstone/50 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  <span className="text-sm text-brown-light">{item.label}</span>
                  <span className="ml-auto text-xs text-sandstone/50">{item.section}</span>
                </button>
              );
            }

            if (item.kind === "glyph") {
              return (
                <button
                  key={`g-${item.code}`}
                  data-palette-item
                  onClick={() => navigate(item.href)}
                  className={`
                    w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors
                    ${index === selectedIndex ? "bg-gold/12" : "hover:bg-gold/8"}
                  `}
                >
                  <div className="w-8 h-8 shrink-0 flex items-center justify-center rounded bg-papyrus/60 border border-sandstone/20 p-0.5">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={glyphSvgSrc(item.code)} alt={item.code} className="w-6 h-6 object-contain" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-sm font-semibold text-brown">{item.code}</span>
                    <span className="text-xs text-sandstone ml-2">{item.meanings[0]?.text || item.description}</span>
                  </div>
                  <span className="text-xs text-sandstone/50 shrink-0">Glyph</span>
                </button>
              );
            }

            // word
            return (
              <button
                key={`w-${item.transliteration}-${item.mdc}`}
                data-palette-item
                onClick={() => navigate(item.href)}
                className={`
                  w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors
                  ${index === selectedIndex ? "bg-gold/12" : "hover:bg-gold/8"}
                `}
              >
                <div className="w-8 h-8 shrink-0 flex items-center justify-center rounded bg-papyrus/60 border border-sandstone/20">
                  <span className="text-xs italic text-brown-light">{translitToUnicode(item.transliteration).slice(0, 4)}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-sm font-medium text-brown italic">
                    {translitToUnicode(item.transliteration)}
                  </span>
                  <span className="text-xs text-sandstone ml-2 truncate">{item.translation}</span>
                </div>
                <span className="text-xs text-sandstone/50 shrink-0">Word</span>
              </button>
            );
          })}

          {isLoading && (
            <div className="flex items-center gap-2 px-4 py-3 border-t border-sandstone/10">
              <svg className="w-4 h-4 text-gold animate-spin" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              <span className="text-xs text-sandstone">Searching...</span>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-4 py-2 border-t border-sandstone/15 bg-ivory-dark/50 dark:bg-ivory-dark/80">
          <div className="flex items-center gap-3 text-[10px] text-sandstone/50">
            <span className="flex items-center gap-1">
              <kbd className="px-1 py-0.5 bg-sandstone/8 border border-sandstone/20 rounded font-mono">↑↓</kbd>
              navigate
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1 py-0.5 bg-sandstone/8 border border-sandstone/20 rounded font-mono">↵</kbd>
              open
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1 py-0.5 bg-sandstone/8 border border-sandstone/20 rounded font-mono">esc</kbd>
              close
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
