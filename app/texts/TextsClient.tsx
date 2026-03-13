"use client";

import { glyphSvgSrc } from "@/lib/glyph-utils";
import { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import type { EgyptianText, PeriodId, PeriodInfo } from "@/lib/types";
import { mdcToCodes } from "@/lib/mdc";

const PERIOD_LABELS: Record<PeriodId, string> = {
  predynastic: "Predynastic",
  "early-dynastic": "Early Dynastic",
  "old-kingdom": "Old Kingdom",
  "first-intermediate": "1st Intermediate",
  "middle-kingdom": "Middle Kingdom",
  "second-intermediate": "2nd Intermediate",
  "new-kingdom": "New Kingdom",
  "third-intermediate": "3rd Intermediate",
  "late-period": "Late Period",
  ptolemaic: "Ptolemaic",
  roman: "Roman",
};

type EnrichedText = EgyptianText & { pharaohName?: string };

interface TextsClientProps {
  texts: EnrichedText[];
  availablePeriods: PeriodInfo[];
}

export default function TextsClient({ texts, availablePeriods }: TextsClientProps) {
  const [selectedPeriod, setSelectedPeriod] = useState<PeriodId | "">("");

  const filtered = selectedPeriod
    ? texts.filter((t) => t.period === selectedPeriod)
    : texts;

  return (
    <div className="space-y-8">
      {/* Page header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-sandstone text-sm">
          <Link href="/" className="hover:text-gold transition-colors">
            PharaLex
          </Link>
          <span>/</span>
          <span>Texts</span>
        </div>
        <h1 className="text-4xl font-display text-brown">Hieroglyphic Texts</h1>
        <p className="text-sandstone max-w-2xl leading-relaxed">
          Read ancient Egyptian inscriptions sign by sign. Hover over individual
          hieroglyphs for Gardiner details, click words for transliteration and
          translation. Choose between hieroglyphs-only, interlinear, or parallel
          display modes.
        </p>
      </div>

      {/* Period filter */}
      <div className="flex flex-wrap gap-2 items-center">
        <span className="text-sm text-sandstone font-medium">Filter:</span>
        <button
          onClick={() => setSelectedPeriod("")}
          className={`
            px-3 py-1 rounded-full text-sm font-medium transition-all duration-150
            ${!selectedPeriod
              ? "bg-gold text-brown"
              : "bg-papyrus/60 text-sandstone hover:bg-papyrus hover:text-brown"
            }
          `}
        >
          All periods
        </button>
        {availablePeriods.map((p) => (
          <button
            key={p.id}
            onClick={() => setSelectedPeriod(p.id)}
            className={`
              px-3 py-1 rounded-full text-sm font-medium transition-all duration-150
              ${selectedPeriod === p.id
                ? "bg-gold text-brown"
                : "bg-papyrus/60 text-sandstone hover:bg-papyrus hover:text-brown"
              }
            `}
          >
            {PERIOD_LABELS[p.id]}
          </button>
        ))}
      </div>

      {/* Text count */}
      <p className="text-sm text-sandstone">
        {filtered.length} {filtered.length === 1 ? "text" : "texts"}
        {selectedPeriod && ` in ${PERIOD_LABELS[selectedPeriod]}`}
      </p>

      {/* Text cards */}
      <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
        {filtered.map((text) => {
          const firstLine = text.lines[0];
          const previewCodes = firstLine?.tokens
            .slice(0, 6)
            .flatMap((t) => mdcToCodes(t.mdc))
            .slice(0, 10);

          return (
            <Link
              key={text.slug}
              href={`/texts/${text.slug}`}
              className="group block bg-papyrus/30 border border-gold/20 rounded-2xl p-6 hover:border-gold/50 hover:bg-papyrus/50 transition-all duration-200"
            >
              {/* Glyph preview row */}
              {previewCodes && previewCodes.length > 0 && (
                <div className="flex items-center gap-1 mb-4 opacity-70 group-hover:opacity-100 transition-opacity">
                  {previewCodes.map((code, i) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      key={`${code}-${i}`}
                      src={glyphSvgSrc(code)}
                      alt={code}
                      className="w-6 h-6 object-contain"
                    />
                  ))}
                  <span className="text-sandstone/50 text-sm ml-1">…</span>
                </div>
              )}

              <div className="space-y-2">
                <div className="flex flex-wrap gap-2 items-center">
                  <Badge variant="gold" size="sm">
                    {PERIOD_LABELS[text.period]}
                  </Badge>
                  {text.pharaohName && (
                    <Badge variant="outline" size="sm">
                      {text.pharaohName}
                    </Badge>
                  )}
                </div>

                <h2 className="text-lg font-display text-brown group-hover:text-gold-dark transition-colors">
                  {text.title}
                </h2>

                <p className="text-sm text-sandstone">{text.date}</p>

                {text.object && (
                  <p className="text-xs text-sandstone/70 italic">{text.object}</p>
                )}

                <p className="text-sm text-brown-light leading-relaxed line-clamp-3 mt-1">
                  {text.description}
                </p>

                <div className="flex items-center gap-4 pt-2 text-xs text-sandstone">
                  <span>{text.lines.length} lines</span>
                  <span>
                    {text.lines.reduce((n, l) => n + l.tokens.length, 0)} words
                  </span>
                  <span className="ml-auto text-gold-dark group-hover:translate-x-0.5 transition-transform">
                    Read text →
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-sandstone">
          <p className="text-4xl mb-3">𓀀</p>
          <p className="font-display text-xl mb-1">No texts found</p>
          <p className="text-sm">
            Try a different period filter or{" "}
            <button
              onClick={() => setSelectedPeriod("")}
              className="text-gold hover:underline"
            >
              view all texts
            </button>
            .
          </p>
        </div>
      )}
    </div>
  );
}
