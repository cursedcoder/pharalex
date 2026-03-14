"use client";

import { useState, useEffect, useMemo, useRef, useCallback, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { GlyphCard } from "@/components/GlyphCard";
import dynamic from "next/dynamic";

const Quadrat = dynamic(
  () => import("@/components/Quadrat").then((m) => m.Quadrat),
  { ssr: false },
);
import type { SearchApiResult } from "@/app/api/search/route";

const GRAMMAR_LABELS: Record<string, string> = {
  NOUN: "Noun", VERB: "Verb", ADJ: "Adjective", ADV: "Adverb",
  PREP: "Preposition", PRON: "Pronoun", PART: "Particle",
  CONJ: "Conjunction", INTJ: "Interjection", INTG: "Interrogative",
  IMPR: "Imperative", NUM: "Numeral", OTHER: "Other",
};

const GRAMMAR_BADGE_VARIANTS: Record<string, "gold" | "sandstone" | "outline" | "default"> = {
  NOUN: "gold", VERB: "default", ADJ: "sandstone", ADV: "sandstone",
  PREP: "outline", PRON: "outline",
};

function WordCard({ result }: { result: Extract<SearchApiResult, { kind: "word" }> }) {
  return (
    <Link href={result.href} className="block group">
      <div className="bg-ivory-dark/50 dark:bg-ivory-dark border border-sandstone/20 rounded-lg p-4 h-full hover:shadow-md hover:border-gold/40 transition-all duration-200">
        <div className="w-full rounded-lg bg-papyrus/50 border border-sandstone/20 flex items-center justify-center py-3 mb-4 overflow-hidden group-hover:scale-[1.02] transition-transform">
          <Quadrat mdc={result.mdc} baseSize={36} disableLinks />
        </div>
        <div className="flex items-center gap-2 mb-1">
          <h3 className="font-display text-lg font-semibold text-brown">
            {result.transliterationUnicode}
          </h3>
          {result.grammar && (
            <Badge variant={GRAMMAR_BADGE_VARIANTS[result.grammar] ?? "outline"}>
              {GRAMMAR_LABELS[result.grammar] ?? result.grammar}
            </Badge>
          )}
        </div>
        <p className="text-sm text-sandstone mb-2">Middle Egyptian word</p>
        <p className="text-sm text-brown-light line-clamp-2">{result.translation}</p>
      </div>
    </Link>
  );
}

function SearchContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialQuery = searchParams.get("q") || "";
  const initialShow = searchParams.get("show");
  const initialFilter = initialShow === "words" ? "words" : initialShow === "glyphs" ? "glyphs" : "all";

  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState<SearchApiResult[]>([]);
  const [isSearching, setIsSearching] = useState(!!initialQuery);
  const [filter, setFilter] = useState<"all" | "glyphs" | "words">(initialFilter);

  // Sync ?show= param on mount (useSearchParams may be empty on first render)
  useEffect(() => {
    const show = searchParams.get("show");
    if (show === "words" || show === "glyphs") {
      setFilter(show);
    }
  }, [searchParams]);

  const abortRef = useRef<AbortController | null>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pushTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const runSearch = useCallback(async (q: string) => {
    if (abortRef.current) abortRef.current.abort();
    if (!q.trim() || q.trim().length < 2) {
      setResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const res = await fetch(`/api/search?q=${encodeURIComponent(q.trim())}`, {
        signal: controller.signal,
      });
      const data = await res.json();
      setResults(data.results ?? []);
    } catch (e) {
      if ((e as Error).name !== "AbortError") {
        setResults([]);
      }
    } finally {
      setIsSearching(false);
    }
  }, []);

  // Run search on initial query from URL
  useEffect(() => {
    const q = searchParams.get("q") || "";
    setQuery(q);
    runSearch(q);
  }, [searchParams, runSearch]);

  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);

    // Debounce the actual search
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => runSearch(newQuery), 150);

    // Debounce URL update (longer, just for shareability)
    if (pushTimer.current) clearTimeout(pushTimer.current);
    pushTimer.current = setTimeout(() => {
      if (newQuery.trim()) {
        router.replace(`/search?q=${encodeURIComponent(newQuery)}`, { scroll: false });
      } else {
        router.replace("/search", { scroll: false });
      }
    }, 500);
  };

  const glyphCount = useMemo(() => results.filter((r) => r.kind === "glyph").length, [results]);
  const wordCount = useMemo(() => results.filter((r) => r.kind === "word").length, [results]);
  const visible = useMemo(() => {
    if (filter === "glyphs") return results.filter((r) => r.kind === "glyph");
    if (filter === "words") return results.filter((r) => r.kind === "word");
    return results;
  }, [results, filter]);

  return (
    <div className="min-h-screen">
      <Header />

      <main className="py-8 sm:py-12">
        <Container>
          <div className="mb-8">
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-brown mb-4">Search</h1>
            <p className="text-brown-light mb-6">
              Search hieroglyphs and Middle Egyptian words by meaning, Gardiner code, or transliteration.
            </p>

            <div className="max-w-2xl">
              <div className="relative">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => handleSearch(e.target.value)}
                  placeholder="Enter search term..."
                  autoFocus
                  className="
                    w-full py-4 px-6 text-lg
                    bg-ivory dark:bg-ivory-dark
                    border border-sandstone/30 rounded-xl
                    placeholder-sandstone/60
                    focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold
                  "
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-sandstone/50">
                  {isSearching ? (
                    <svg className="w-6 h-6 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  )}
                </div>
              </div>

              {!query && (
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-sm text-sandstone">Try searching for:</span>
                  {["sun", "water", "bird", "nfr", "A1", "N5", "beautiful"].map((term) => (
                    <button
                      key={term}
                      onClick={() => handleSearch(term)}
                      className="px-3 py-1 text-sm bg-gold/10 text-gold-dark rounded-full hover:bg-gold/20 transition-colors"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {query && !isSearching && results.length > 0 && (
            <div className="mb-5 flex items-center gap-3 flex-wrap">
              <p className="text-sandstone text-sm">
                {results.length} result{results.length !== 1 ? "s" : ""} for{" "}
                <span className="text-brown font-medium">&ldquo;{query}&rdquo;</span>
              </p>
              <button
                onClick={() => setFilter("all")}
                className={`px-3 py-1 text-sm rounded-full border transition-colors ${
                  filter === "all"
                    ? "bg-brown text-ivory border-brown"
                    : "border-sandstone/30 text-sandstone hover:border-brown/40 hover:text-brown"
                }`}
              >
                All
              </button>
              {glyphCount > 0 && (
                <button
                  onClick={() => setFilter(filter === "glyphs" ? "all" : "glyphs")}
                  className={`px-3 py-1 text-sm rounded-full border transition-colors ${
                    filter === "glyphs"
                      ? "bg-brown text-ivory border-brown"
                      : "border-sandstone/30 text-sandstone hover:border-brown/40 hover:text-brown"
                  }`}
                >
                  {glyphCount} hieroglyph{glyphCount !== 1 ? "s" : ""}
                </button>
              )}
              {wordCount > 0 && (
                <button
                  onClick={() => setFilter(filter === "words" ? "all" : "words")}
                  className={`px-3 py-1 text-sm rounded-full border transition-colors ${
                    filter === "words"
                      ? "bg-gold text-ivory border-gold"
                      : "border-gold/30 text-gold-dark hover:border-gold/60 hover:text-gold-dark"
                  }`}
                >
                  {wordCount} word{wordCount !== 1 ? "s" : ""}
                </button>
              )}
            </div>
          )}

          {isSearching ? (
            <div className="flex flex-col items-center justify-center py-20 select-none">
              <div className="relative flex items-center justify-center mb-6">
                <span className="font-hieroglyph text-6xl text-gold/80 animate-[hierospin_1.8s_ease-in-out_infinite]">𓂀</span>
                <span className="font-hieroglyph text-4xl text-sandstone/50 absolute -left-12 animate-[hierofade_1.8s_ease-in-out_infinite]" style={{ animationDelay: "0.3s" }}>𓃭</span>
                <span className="font-hieroglyph text-4xl text-sandstone/50 absolute -right-12 animate-[hierofade_1.8s_ease-in-out_infinite]" style={{ animationDelay: "0.6s" }}>𓆣</span>
              </div>
              <p className="text-sandstone text-sm tracking-widest uppercase">Consulting the scrolls…</p>
            </div>
          ) : results.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {visible.map((r, i) =>
                r.kind === "glyph" ? (
                  <GlyphCard
                    key={`g-${r.code}`}
                    glyph={{
                      code: r.code,
                      unicode: r.unicode,
                      category: r.category,
                      categoryName: r.categoryName,
                      description: r.description,
                      transliteration: r.transliteration,
                      meanings: r.meanings.map((m) => ({
                        text: m.text,
                        type: m.type as "logogram" | "phonogram" | "determinative" | "other",
                      })),
                      related: r.related,
                      source: r.source as "wiktionary" | "unicode" | "both" | undefined,
                    }}
                  />
                ) : (
                  <WordCard key={`w-${r.transliteration}-${i}`} result={r} />
                )
              )}
            </div>
          ) : query && !isSearching ? (
            <div className="text-center py-12">
              <div className="font-hieroglyph text-6xl text-sandstone/30 mb-4">𓂝</div>
              <p className="text-sandstone mb-4">No results found for &ldquo;{query}&rdquo;</p>
              <p className="text-sm text-sandstone/70">Try a different term, Gardiner code (like &ldquo;A1&rdquo;), or English meaning.</p>
            </div>
          ) : !query ? (
            <div className="text-center py-12">
              <div className="font-hieroglyph text-6xl text-sandstone/30 mb-4">𓁹</div>
              <p className="text-sandstone">Enter a search term to find hieroglyphs and words</p>
            </div>
          ) : null}
        </Container>
      </main>
    </div>
  );
}

export default function SearchClient() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen">
          <Header />
          <main className="py-8 sm:py-12">
            <Container>
              <div className="animate-pulse">
                <div className="h-10 bg-sandstone/20 rounded-lg w-64 mb-4" />
                <div className="h-14 bg-sandstone/20 rounded-xl max-w-2xl" />
              </div>
            </Container>
          </main>
        </div>
      }
    >
      <SearchContent />
    </Suspense>
  );
}
