"use client";

import { useState } from "react";
import { ExpandableList } from "./ExpandableList";

interface Entry {
  word: string;
  pos: string;
  glosses: string[];
}

export function DictionaryEntries({ entries, max = 4 }: { entries: Entry[]; max?: number }) {
  const [expanded, setExpanded] = useState(false);
  const shown = expanded ? entries : entries.slice(0, max);
  const remaining = entries.length - max;

  return (
    <div className="space-y-3">
      {shown.map((entry, ei) => (
        <div key={ei}>
          <span className="text-xs italic text-sandstone">
            {entry.pos}
          </span>
          <ExpandableList
            items={entry.glosses}
            max={3}
            className="mt-1"
          />
        </div>
      ))}
      {!expanded && remaining > 0 && (
        <button
          onClick={() => setExpanded(true)}
          className="text-xs text-gold hover:text-gold-dark transition-colors cursor-pointer"
        >
          +{remaining} more senses →
        </button>
      )}
    </div>
  );
}
