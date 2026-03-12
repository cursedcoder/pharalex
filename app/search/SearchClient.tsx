"use client";

import { useState, useEffect, useMemo, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Container } from "@/components/ui/Container";
import { GlyphCard } from "@/components/GlyphCard";
import { Badge } from "@/components/ui/Badge";
import { fuzzySearch, type SearchResult } from "@/lib/search";

function SearchContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialQuery = searchParams.get("q") || "";

  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    const q = searchParams.get("q") || "";
    setQuery(q);
    if (q.trim()) {
      const searchResults = fuzzySearch(q, 100);
      setResults(searchResults);
    } else {
      setResults([]);
    }
  }, [searchParams]);

  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
    if (newQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(newQuery)}`, {
        scroll: false,
      });
    } else {
      router.push("/search", { scroll: false });
    }
  };

  const groupedResults = useMemo(() => {
    const groups: Record<string, SearchResult[]> = {};
    for (const result of results) {
      const cat = result.glyph.category;
      if (!groups[cat]) groups[cat] = [];
      groups[cat].push(result);
    }
    return groups;
  }, [results]);

  return (
    <div className="min-h-screen">
      <Header />

      <main className="py-8 sm:py-12">
        <Container>
          <div className="mb-8">
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-brown mb-4">
              Search Hieroglyphs
            </h1>
            <p className="text-brown-light mb-6">
              Search by meaning, Gardiner code, transliteration, or category.
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
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>

              {!query && (
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-sm text-sandstone">
                    Try searching for:
                  </span>
                  {["sun", "water", "bird", "man", "A1", "N5", "G1"].map(
                    (term) => (
                      <button
                        key={term}
                        onClick={() => handleSearch(term)}
                        className="
                          px-3 py-1 text-sm
                          bg-gold/10 text-gold-dark rounded-full
                          hover:bg-gold/20 transition-colors
                        "
                      >
                        {term}
                      </button>
                    )
                  )}
                </div>
              )}
            </div>
          </div>

          {query && (
            <div className="mb-6 flex items-center gap-4">
              <p className="text-sandstone">
                {results.length} result{results.length !== 1 ? "s" : ""} for{" "}
                <span className="text-brown font-medium">
                  &ldquo;{query}&rdquo;
                </span>
              </p>
              {results.length > 0 && (
                <div className="flex gap-2">
                  {Object.entries(groupedResults)
                    .slice(0, 5)
                    .map(([cat, items]) => (
                      <Badge key={cat} variant="outline">
                        {cat}: {items.length}
                      </Badge>
                    ))}
                </div>
              )}
            </div>
          )}

          {results.length > 0 ? (
            <div className="space-y-8">
              {Object.entries(groupedResults).map(([category, categoryResults]) => (
                <div key={category}>
                  <div className="flex items-center gap-2 mb-4">
                    <Link
                      href={`/categories/${category}`}
                      className="
                        px-3 py-1 rounded-lg
                        bg-gold/10 text-gold-dark font-medium
                        hover:bg-gold/20 transition-colors
                      "
                    >
                      Category {category}
                    </Link>
                    <span className="text-sm text-sandstone">
                      {categoryResults.length} match
                      {categoryResults.length !== 1 ? "es" : ""}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {categoryResults.map((result) => (
                      <div key={result.glyph.code} className="relative">
                        <GlyphCard glyph={result.glyph} />
                        {result.score < 0.3 && (
                          <div className="absolute top-2 right-2">
                            <Badge variant="gold" size="sm">
                              Best match
                            </Badge>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : query ? (
            <div className="text-center py-12">
              <div className="font-hieroglyph text-6xl text-sandstone/30 mb-4">
                𓂝
              </div>
              <p className="text-sandstone mb-4">
                No hieroglyphs found matching &ldquo;{query}&rdquo;
              </p>
              <p className="text-sm text-sandstone/70">
                Try searching for a different term, Gardiner code (like
                &ldquo;A1&rdquo;), or meaning.
              </p>
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="font-hieroglyph text-6xl text-sandstone/30 mb-4">
                𓁹
              </div>
              <p className="text-sandstone">
                Enter a search term to find hieroglyphs
              </p>
            </div>
          )}
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
