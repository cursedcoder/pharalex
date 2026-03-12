"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import {
  getAllPharaohs,
  getAllDynasties,
  getAllPeriods,
  getDynastyById,
  formatReign,
  getPharaohStats,
} from "@/lib/pharaohs";
import type { Pharaoh, PeriodId } from "@/lib/types";

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

export default function PharaohsPage() {
  const allPharaohs = getAllPharaohs();
  const dynasties   = getAllDynasties();
  const periods     = getAllPeriods();
  const stats       = getPharaohStats();

  const [search,          setSearch]          = useState("");
  const [selectedPeriod,  setSelectedPeriod]  = useState<PeriodId | "">("");
  const [notableOnly,     setNotableOnly]     = useState(false);
  const [viewMode,        setViewMode]        = useState<"timeline" | "list">("timeline");

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
          p.summary?.toLowerCase().includes(q)
      );
    }
    return result;
  }, [allPharaohs, dynasties, search, selectedPeriod, notableOnly]);

  // Group by dynastyId for timeline view
  const groupedByDynasty = useMemo(() => {
    const map = new Map<string, Pharaoh[]>();
    for (const p of filtered) {
      const arr = map.get(p.dynastyId) ?? [];
      arr.push(p);
      map.set(p.dynastyId, arr);
    }
    // Preserve dynasty order
    const ordered: { dynasty: ReturnType<typeof getDynastyById>; pharaohs: Pharaoh[] }[] = [];
    for (const d of dynasties) {
      if (map.has(d.id)) {
        ordered.push({ dynasty: d, pharaohs: map.get(d.id)! });
      }
    }
    return ordered;
  }, [filtered, dynasties]);

  return (
    <div className="min-h-screen">
      <Header />

      <main className="py-8 sm:py-12">
        <Container>
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
              { label: "Notable",   value: stats.notable },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-papyrus/50 border border-sandstone/20 rounded-lg px-4 py-3 text-center"
              >
                <div className="font-display text-2xl font-bold text-gold-dark">{s.value}</div>
                <div className="text-xs text-sandstone mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-3 mb-6 pb-5 border-b border-sandstone/20">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search pharaohs…"
              className="
                flex-1 min-w-48 px-3 py-2 text-sm rounded-lg
                bg-ivory-dark border border-sandstone/30
                placeholder:text-sandstone focus:outline-none focus:ring-2 focus:ring-gold/50
              "
            />

            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value as PeriodId | "")}
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

            <span className="text-sm text-sandstone">{filtered.length} pharaohs</span>

            {/* View toggle */}
            <div className="flex border border-sandstone/30 rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode("timeline")}
                title="Timeline view"
                className={`px-3 py-2 text-sm transition-colors ${
                  viewMode === "timeline" ? "bg-gold/20 text-gold-dark" : "bg-ivory-dark text-sandstone hover:bg-gold/10"
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h10M4 18h6" />
                </svg>
              </button>
              <button
                onClick={() => setViewMode("list")}
                title="List view"
                className={`px-3 py-2 text-sm transition-colors ${
                  viewMode === "list" ? "bg-gold/20 text-gold-dark" : "bg-ivory-dark text-sandstone hover:bg-gold/10"
                }`}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>

          {/* Results */}
          {filtered.length === 0 ? (
            <div className="text-center py-16 text-sandstone">
              <div className="font-hieroglyph text-5xl mb-3">𓁹</div>
              <p className="mb-2">No pharaohs match your search.</p>
              <button
                onClick={() => { setSearch(""); setSelectedPeriod(""); setNotableOnly(false); }}
                className="text-gold hover:text-gold-dark text-sm"
              >
                Clear filters
              </button>
            </div>
          ) : viewMode === "timeline" ? (
            <TimelineView groups={groupedByDynasty} />
          ) : (
            <ListView pharaohs={filtered} />
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
}: {
  groups: { dynasty: ReturnType<typeof getDynastyById>; pharaohs: Pharaoh[] }[];
}) {
  return (
    <div className="space-y-10">
      {groups.map(({ dynasty, pharaohs }) => {
        if (!dynasty) return null;
        return (
          <section key={dynasty.id}>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px flex-1 bg-sandstone/20" />
              <h2 className="font-display text-lg font-semibold text-brown whitespace-nowrap px-1">
                {dynasty.name}
              </h2>
              <div className="h-px flex-1 bg-sandstone/20" />
              <Badge variant="sandstone">{pharaohs.length}</Badge>
            </div>
            {dynasty.note && (
              <p className="text-xs text-sandstone italic mb-3 text-center">{dynasty.note}</p>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {pharaohs.map((p) => (
                <PharaohCard key={p.slug} pharaoh={p} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}

// ── List View ─────────────────────────────────────────────────────────────────

function ListView({ pharaohs }: { pharaohs: Pharaoh[] }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-sandstone/20">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-papyrus/50 border-b border-sandstone/20 text-left">
            <th className="px-4 py-3 font-medium text-sandstone">Name</th>
            <th className="px-4 py-3 font-medium text-sandstone hidden sm:table-cell">Also known as</th>
            <th className="px-4 py-3 font-medium text-sandstone hidden md:table-cell">Dynasty</th>
            <th className="px-4 py-3 font-medium text-sandstone">Reign</th>
          </tr>
        </thead>
        <tbody>
          {pharaohs.map((p, i) => {
            const dynasty = getDynastyById(p.dynastyId);
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
                    className="font-medium text-brown hover:text-gold transition-colors"
                  >
                    {p.name}
                    {p.notable && (
                      <span className="ml-1.5 text-gold-dark">★</span>
                    )}
                  </Link>
                </td>
                <td className="px-4 py-3 text-sandstone hidden sm:table-cell">
                  {p.alternateNames.slice(0, 2).join(", ") || "—"}
                </td>
                <td className="px-4 py-3 hidden md:table-cell">
                  <span className="text-brown-light">{dynasty?.name ?? "—"}</span>
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

function PharaohCard({ pharaoh }: { pharaoh: Pharaoh }) {
  return (
    <Link
      href={`/pharaohs/${pharaoh.slug}`}
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
          font-hieroglyph text-xl text-gold-dark
          transition-colors
        "
      >
        𓀭
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="font-medium text-brown text-sm">{pharaoh.name}</span>
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
