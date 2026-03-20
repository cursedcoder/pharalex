"use client";

import { useState, useMemo, useCallback, useRef, useEffect } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { formatReign } from "@/lib/pharaoh-utils";
import { glyphSvgSrc } from "@/lib/glyph-utils";
import type { Pharaoh, Dynasty, PeriodInfo, PeriodId } from "@/lib/types";

/** Highlights matching substring in text. Returns plain text if no query. */
function HighlightMatch({ text, query }: { text: string; query: string }) {
  if (!query.trim()) return <>{text}</>;
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, idx)}
      <mark className="bg-gold/20 text-inherit rounded-sm px-0.5">{text.slice(idx, idx + query.length)}</mark>
      {text.slice(idx + query.length)}
    </>
  );
}

const PERIOD_LABELS: Record<PeriodId, string> = {
  predynastic:          "Predynastic",
  "early-dynastic":     "Early Dynastic",
  "old-kingdom":        "Old Kingdom",
  "first-intermediate": "1st Intermediate",
  "middle-kingdom":     "Middle Kingdom",
  "second-intermediate":"2nd Intermediate",
  "new-kingdom":        "New Kingdom",
  "third-intermediate": "3rd Intermediate",
  "late-period":        "Late Period",
  ptolemaic:            "Ptolemaic",
  roman:                "Roman",
};

interface PharaohsClientProps {
  allPharaohs: Pharaoh[];
  dynasties: Dynasty[];
  periods: PeriodInfo[];
  stats: { total: number; notable: number; dynasties: number; periods: number; withDates: number };
  dynastyMap: Record<string, Dynasty>;
}

export default function PharaohsClient({
  allPharaohs,
  dynasties,
  periods,
  stats,
  dynastyMap,
}: PharaohsClientProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const initialPeriod = (searchParams.get("period") ?? "") as PeriodId | "";
  const [search,          setSearch]          = useState("");
  const [selectedPeriod,  setSelectedPeriod]  = useState<PeriodId | "">(initialPeriod);
  const [notableOnly,     setNotableOnly]     = useState(false);
  const [viewMode, setViewModeState] = useState<"timeline" | "list">("timeline");

  const searchRef = useRef<HTMLInputElement>(null);

  // Restore view mode from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("pharaohs-view-mode");
    if (saved === "timeline" || saved === "list") {
      setViewModeState(saved);
    }
  }, []);

  const setViewMode = useCallback((mode: "timeline" | "list") => {
    setViewModeState(mode);
    try { localStorage.setItem("pharaohs-view-mode", mode); } catch {}
  }, []);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && document.activeElement === searchRef.current) {
        searchRef.current?.blur();
        return;
      }
      if (e.key === "/" && !e.metaKey && !e.ctrlKey && !e.altKey) {
        const tag = (e.target as HTMLElement)?.tagName;
        if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
        e.preventDefault();
        searchRef.current?.focus();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const updatePeriod = useCallback((period: PeriodId | "") => {
    setSelectedPeriod(period);
    const params = new URLSearchParams(searchParams.toString());
    if (period) {
      params.set("period", period);
    } else {
      params.delete("period");
    }
    const qs = params.toString();
    router.replace(`${pathname}${qs ? `?${qs}` : ""}`, { scroll: false });
  }, [searchParams, router, pathname]);

  const filtered = useMemo(() => {
    let result = allPharaohs;
    if (selectedPeriod) {
      const dynIds = dynasties.filter((d) => d.period === selectedPeriod).map((d) => d.id);
      result = result.filter((p) => dynIds.includes(p.dynastyId));
    }
    if (notableOnly) result = result.filter((p) => p.notable);
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.alternateNames.some((n) => n.toLowerCase().includes(q)) ||
          p.summary?.toLowerCase().includes(q) ||
          dynastyMap[p.dynastyId]?.name.toLowerCase().includes(q)
      );
    }
    return result;
  }, [allPharaohs, dynasties, dynastyMap, search, selectedPeriod, notableOnly]);

  // Group by dynastyId for timeline view
  const groupedByDynasty = useMemo(() => {
    const map = new Map<string, Pharaoh[]>();
    for (const p of filtered) {
      const arr = map.get(p.dynastyId) ?? [];
      arr.push(p);
      map.set(p.dynastyId, arr);
    }
    // Preserve dynasty order
    const ordered: { dynasty: Dynasty; pharaohs: Pharaoh[] }[] = [];
    for (const d of dynasties) {
      if (map.has(d.id)) {
        ordered.push({ dynasty: d, pharaohs: map.get(d.id)! });
      }
    }
    return ordered;
  }, [filtered, dynasties]);

  // Compute time span of filtered results
  const timeSpan = useMemo(() => {
    const starts = filtered.map((p) => p.reignStart).filter((v): v is number => v !== null);
    const ends = filtered.map((p) => p.reignEnd).filter((v): v is number => v !== null);
    if (starts.length === 0 && ends.length === 0) return null;
    const earliest = Math.min(...starts, ...ends);
    const latest = Math.max(...starts, ...ends);
    const fmt = (y: number) => y < 0 ? `${Math.abs(y)} BC` : y === 0 ? "1 BC" : `${y} CE`;
    return `${fmt(earliest)} – ${fmt(latest)}`;
  }, [filtered]);

  return (
    <div className="min-h-screen">
      <Header />

      <main id="main-content" className="py-8 sm:py-12">
        <Container>
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="text-sm text-sandstone mb-6 flex items-center gap-2">
            <Link href="/" className="hover:text-gold transition-colors rounded focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-gold">PharaLex</Link>
            <span aria-hidden="true">/</span>
            <span className="text-brown" aria-current="page">Pharaohs</span>
          </nav>

          {/* Page header */}
          <div className="mb-8">
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-brown mb-2">
              Pharaohs of Ancient Egypt
            </h1>
            <p className="text-brown-light max-w-2xl">
              From the first unification under Narmer to the Roman emperors who
              inscribed their names in hieroglyphs — {stats.total} rulers across{" "}
              {stats.dynasties} dynasties spanning nearly four millennia.
            </p>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            {[
              { label: "Pharaohs", value: stats.total },
              { label: "Dynasties", value: stats.dynasties },
              { label: "Eras",      value: stats.periods },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-papyrus/50 border border-sandstone/20 rounded-lg px-4 py-3 text-center"
              >
                <div className="font-display text-2xl font-bold text-gold-dark">{s.value}</div>
                <div className="text-xs text-sandstone mt-0.5">{s.label}</div>
              </div>
            ))}
            <button
              onClick={() => setNotableOnly((v) => !v)}
              className={`rounded-lg px-4 py-3 text-center transition-colors border ${
                notableOnly
                  ? "bg-gold/15 border-gold/30"
                  : "bg-papyrus/50 border-sandstone/20 hover:border-gold/30"
              }`}
            >
              <div className="font-display text-2xl font-bold text-gold-dark">{stats.notable}</div>
              <div className="text-xs text-sandstone mt-0.5">
                Notable {notableOnly ? "(active)" : ""}
              </div>
            </button>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-3 mb-6 pb-5 border-b border-sandstone/20">
            <div className="relative flex-1 min-w-48">
              <input
                ref={searchRef}
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search pharaohs…"
                className="
                  w-full px-3 py-2 pr-8 text-sm rounded-lg
                  bg-ivory-dark border border-sandstone/30
                  placeholder:text-sandstone focus:outline-none focus:ring-2 focus:ring-gold/50
                "
              />
              {search ? (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-sandstone hover:text-brown transition-colors"
                  aria-label="Clear search"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              ) : (
                <kbd className="absolute right-2 top-1/2 -translate-y-1/2 hidden sm:inline-flex items-center justify-center w-5 h-5 text-[10px] font-mono text-sandstone/50 border border-sandstone/20 rounded" aria-hidden="true">/</kbd>
              )}
            </div>

            <select
              value={selectedPeriod}
              onChange={(e) => updatePeriod(e.target.value as PeriodId | "")}
              className="
                px-3 py-2 text-sm rounded-lg
                bg-ivory-dark border border-sandstone/30
                focus:outline-none focus:ring-2 focus:ring-gold/50
              "
            >
              <option value="">All Periods</option>
              {periods.map((p) => (
                <option key={p.id} value={p.id}>
                  {PERIOD_LABELS[p.id]}
                </option>
              ))}
            </select>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={notableOnly}
                onChange={(e) => setNotableOnly(e.target.checked)}
                className="w-4 h-4 rounded border-sandstone/30 text-gold focus:ring-gold/50"
              />
              <span className="text-sm text-sandstone">Notable only</span>
            </label>

            <div className="flex-1 sm:flex-none" />

            <span className="text-sm text-sandstone tabular-nums">
              {filtered.length} pharaohs
              {timeSpan && <span className="hidden sm:inline text-sandstone/60 ml-1">· {timeSpan}</span>}
            </span>

            {/* View toggle */}
            <div className="flex border border-sandstone/30 rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode("timeline")}
                title="Timeline view"
                aria-pressed={viewMode === "timeline"}
                className={`px-3 py-2 text-sm transition-colors ${
                  viewMode === "timeline" ? "bg-gold/20 text-gold-dark" : "bg-ivory-dark text-sandstone hover:bg-gold/10"
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h10M4 18h6" />
                </svg>
              </button>
              <button
                onClick={() => setViewMode("list")}
                title="List view"
                aria-pressed={viewMode === "list"}
                className={`px-3 py-2 text-sm transition-colors ${
                  viewMode === "list" ? "bg-gold/20 text-gold-dark" : "bg-ivory-dark text-sandstone hover:bg-gold/10"
                }`}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>

          {/* Active filter chips */}
          {(selectedPeriod || notableOnly || search) && (
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="text-xs text-sandstone">Filtering:</span>
              {selectedPeriod && (
                <button
                  onClick={() => updatePeriod("")}
                  className="inline-flex items-center gap-1 px-2 py-0.5 text-xs rounded-full bg-gold/10 text-gold-dark border border-gold/20 hover:bg-gold/20 transition-colors"
                >
                  {PERIOD_LABELS[selectedPeriod]}
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
              {notableOnly && (
                <button
                  onClick={() => setNotableOnly(false)}
                  className="inline-flex items-center gap-1 px-2 py-0.5 text-xs rounded-full bg-gold/10 text-gold-dark border border-gold/20 hover:bg-gold/20 transition-colors"
                >
                  Notable only
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="inline-flex items-center gap-1 px-2 py-0.5 text-xs rounded-full bg-gold/10 text-gold-dark border border-gold/20 hover:bg-gold/20 transition-colors"
                >
                  &ldquo;{search}&rdquo;
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          )}

          {/* Results */}
          {filtered.length === 0 ? (
            <div className="text-center py-16 text-sandstone">
              <div className="font-hieroglyph text-5xl mb-3">𓁹</div>
              <p className="mb-2">No pharaohs match your search.</p>
              <button
                onClick={() => { setSearch(""); updatePeriod(""); setNotableOnly(false); }}
                className="text-gold hover:text-gold-dark text-sm"
              >
                Clear filters
              </button>
              <div className="mt-8 text-left max-w-md mx-auto">
                <p className="text-xs text-sandstone uppercase tracking-wide mb-3">Try a notable pharaoh</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {allPharaohs.filter((p) => p.notable).slice(0, 6).map((p) => (
                    <Link
                      key={p.slug}
                      href={`/pharaohs/${p.slug}`}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-full border border-sandstone/20 text-brown hover:text-gold-dark hover:border-gold/40 transition-colors"
                    >
                      {(() => {
                        const code = p.royalNames?.nomen?.codes?.[0] ?? p.royalNames?.prenomen?.codes?.[0];
                        return code ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={glyphSvgSrc(code)} alt="" className="w-3.5 h-3.5 object-contain" />
                        ) : null;
                      })()}
                      {p.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ) : viewMode === "timeline" ? (
            <TimelineView groups={groupedByDynasty} periods={periods} searchQuery={search} />
          ) : (
            <ListView pharaohs={filtered} dynastyMap={dynastyMap} searchQuery={search} />
          )}
        </Container>
      </main>

      <footer className="py-5 border-t border-sandstone/20">
        <Container>
          <p className="text-xs text-sandstone text-center">
            Data sourced from{" "}
            <a href="https://pharaoh.se" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-dark">
              pharaoh.se
            </a>{" "}
            · Dates are approximate and subject to scholarly revision.
          </p>
        </Container>
      </footer>
    </div>
  );
}

// ── Timeline View ─────────────────────────────────────────────────────────────

function TimelineView({
  groups,
  periods,
  searchQuery = "",
}: {
  groups: { dynasty: Dynasty; pharaohs: Pharaoh[] }[];
  periods: PeriodInfo[];
  searchQuery?: string;
}) {
  // Group dynasties under their period for visual hierarchy
  const periodGroups: { period: PeriodInfo; dynastyGroups: { dynasty: Dynasty; pharaohs: Pharaoh[] }[] }[] = [];
  const periodMap = new Map(periods.map((p) => [p.id, p]));

  let currentPeriodId: string | null = null;
  for (const group of groups) {
    if (group.dynasty.period !== currentPeriodId) {
      currentPeriodId = group.dynasty.period;
      const period = periodMap.get(group.dynasty.period);
      if (period) {
        periodGroups.push({ period, dynastyGroups: [group] });
      }
    } else {
      periodGroups[periodGroups.length - 1]?.dynastyGroups.push(group);
    }
  }

  return (
    <div className="space-y-12">
      {/* Period quick-jump nav */}
      {periodGroups.length > 1 && (
        <nav aria-label="Jump to period" className="flex flex-wrap gap-1.5">
          {periodGroups.map(({ period, dynastyGroups }) => {
            const count = dynastyGroups.reduce((sum, g) => sum + g.pharaohs.length, 0);
            return (
              <a
                key={period.id}
                href={`#period-${period.id}`}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-full border border-sandstone/20 text-sandstone hover:text-gold-dark hover:border-gold/40 transition-colors"
              >
                {PERIOD_LABELS[period.id]}
                <span className="text-sandstone/60 tabular-nums">{count}</span>
              </a>
            );
          })}
        </nav>
      )}

      {periodGroups.map(({ period, dynastyGroups }) => (
        <div key={period.id} id={`period-${period.id}`} className="scroll-mt-24">
          {/* Period header */}
          <div className="mb-6 flex items-baseline gap-3">
            <h2 className="font-display text-xl font-bold text-brown">
              {period.name}
            </h2>
            <span className="text-xs text-sandstone tabular-nums">
              c. {Math.abs(period.approxStart)}–
              {period.approxEnd < 0 ? `${Math.abs(period.approxEnd)} BC` : `${period.approxEnd} CE`}
            </span>
          </div>

          <div className="space-y-8">
            {dynastyGroups.map(({ dynasty, pharaohs }) => {
              if (!dynasty) return null;
              return (
                <section key={dynasty.id}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-px flex-1 bg-sandstone/20" />
                    <h3 className="font-display text-lg font-semibold text-brown whitespace-nowrap px-1">
                      {dynasty.name}
                    </h3>
                    <div className="h-px flex-1 bg-sandstone/20" />
                    <Badge variant="sandstone">{pharaohs.length}</Badge>
                  </div>
                  {dynasty.note && (
                    <p className="text-xs text-sandstone italic mb-3 text-center">{dynasty.note}</p>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                    {pharaohs.map((p) => (
                      <PharaohCard key={p.slug} pharaoh={p} searchQuery={searchQuery} />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

// ── List View ─────────────────────────────────────────────────────────────────

type SortKey = "name" | "reign" | "dynasty";
type SortDir = "asc" | "desc";

function ListView({ pharaohs, dynastyMap, searchQuery = "" }: { pharaohs: Pharaoh[]; dynastyMap: Record<string, Dynasty>; searchQuery?: string }) {
  const [sortKey, setSortKey] = useState<SortKey>("reign");
  const [sortDir, setSortDir] = useState<SortDir>("asc");

  const toggleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  };

  const sorted = useMemo(() => {
    const arr = [...pharaohs];
    const dir = sortDir === "asc" ? 1 : -1;
    arr.sort((a, b) => {
      switch (sortKey) {
        case "name":
          return dir * a.name.localeCompare(b.name);
        case "dynasty":
          return dir * (dynastyMap[a.dynastyId]?.name ?? "").localeCompare(dynastyMap[b.dynastyId]?.name ?? "");
        case "reign": {
          const aStart = a.reignStart ?? 9999;
          const bStart = b.reignStart ?? 9999;
          return dir * (aStart - bStart);
        }
        default:
          return 0;
      }
    });
    return arr;
  }, [pharaohs, dynastyMap, sortKey, sortDir]);

  const SortHeader = ({ label, sortBy, className }: { label: string; sortBy: SortKey; className?: string }) => (
    <th className={`px-4 py-3 font-medium text-sandstone ${className ?? ""}`}>
      <button
        onClick={() => toggleSort(sortBy)}
        className="inline-flex items-center gap-1 hover:text-gold-dark transition-colors"
      >
        {label}
        <span className="text-[10px]" aria-hidden="true">
          {sortKey === sortBy ? (sortDir === "asc" ? "▲" : "▼") : "⇅"}
        </span>
      </button>
    </th>
  );

  return (
    <div className="overflow-x-auto rounded-xl border border-sandstone/20">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-papyrus/50 border-b border-sandstone/20 text-left">
            <SortHeader label="Name" sortBy="name" />
            <th className="px-4 py-3 font-medium text-sandstone hidden sm:table-cell">Also known as</th>
            <SortHeader label="Dynasty" sortBy="dynasty" className="hidden md:table-cell" />
            <SortHeader label="Reign" sortBy="reign" />
          </tr>
        </thead>
        <tbody>
          {sorted.map((p, i) => {
            const dynasty = dynastyMap[p.dynastyId];
            return (
              <tr
                key={p.slug}
                className={`
                  border-b border-sandstone/10 hover:bg-gold/5 transition-colors
                  ${i % 2 === 0 ? "" : "bg-ivory-dark/30"}
                `}
              >
                <td className="px-4 py-3">
                  <Link
                    href={`/pharaohs/${p.slug}`}
                    className="inline-flex items-center gap-2 font-medium text-brown hover:text-gold transition-colors"
                  >
                    {(() => {
                      const code = p.royalNames?.nomen?.codes?.[0] ?? p.royalNames?.prenomen?.codes?.[0];
                      return code ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={glyphSvgSrc(code)} alt="" className="w-5 h-5 object-contain shrink-0" />
                      ) : null;
                    })()}
                    <HighlightMatch text={p.name} query={searchQuery} />
                    {p.notable && (
                      <span className="ml-0.5 text-gold-dark">★</span>
                    )}
                  </Link>
                </td>
                <td className="px-4 py-3 text-sandstone hidden sm:table-cell">
                  {p.alternateNames.slice(0, 2).map((n, i) => (
                    <span key={n}>{i > 0 && ", "}<HighlightMatch text={n} query={searchQuery} /></span>
                  ))}
                  {p.alternateNames.length === 0 && "—"}
                </td>
                <td className="px-4 py-3 hidden md:table-cell">
                  {dynasty ? (
                    <Link
                      href={`/pharaohs?period=${dynasty.period}`}
                      className="text-brown-light hover:text-gold transition-colors"
                    >
                      {dynasty.name}
                    </Link>
                  ) : (
                    <span className="text-brown-light">—</span>
                  )}
                </td>
                <td className="px-4 py-3 text-sandstone tabular-nums">
                  {formatReign(p)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

// ── Pharaoh Card ──────────────────────────────────────────────────────────────

function PharaohCard({ pharaoh, searchQuery = "" }: { pharaoh: Pharaoh; searchQuery?: string }) {
  const firstGlyphCode =
    pharaoh.royalNames?.nomen?.codes?.[0] ??
    pharaoh.royalNames?.prenomen?.codes?.[0];

  return (
    <Link
      href={`/pharaohs/${pharaoh.slug}`}
      title={pharaoh.summary ?? undefined}
      className="
        group flex items-start gap-3 p-3
        bg-ivory-dark/50 border border-sandstone/20 rounded-lg
        hover:border-gold/40 hover:shadow-sm transition-all
      "
    >
      <div
        className="
          w-9 h-9 shrink-0 rounded-md
          bg-gold/10 group-hover:bg-gold/20
          flex items-center justify-center
          overflow-hidden p-1
          transition-colors
        "
      >
        {firstGlyphCode ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={glyphSvgSrc(firstGlyphCode)}
            alt=""
            className="w-full h-full object-contain"
          />
        ) : (
          <span className="font-hieroglyph text-xl text-gold-dark" aria-hidden="true">𓀭</span>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="font-medium text-brown text-sm"><HighlightMatch text={pharaoh.name} query={searchQuery} /></span>
          {pharaoh.notable && (
            <span className="text-gold-dark text-xs" title="Notable pharaoh">★</span>
          )}
        </div>
        {pharaoh.alternateNames.length > 0 && (
          <p className="text-xs text-sandstone truncate">
            {pharaoh.alternateNames.slice(0, 2).join(", ")}
          </p>
        )}
        <p className="text-xs text-sandstone/80 mt-0.5 tabular-nums">
          {formatReign(pharaoh)}
        </p>
      </div>
    </Link>
  );
}
