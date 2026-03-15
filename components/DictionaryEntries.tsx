"use client";

import { useState } from "react";
import { ExpandableList } from "./ExpandableList";

interface Entry {
  word: string;
  pos: string;
  glosses: string[];
}

const POS_ORDER: Record<string, number> = {
  noun: 0, name: 1, verb: 2, adj: 3, prep: 4, adv: 5,
  particle: 6, intj: 7, num: 8,
};

export function DictionaryEntries({ entries }: { entries: Entry[] }) {
  const sorted = [...entries].sort(
    (a, b) => (POS_ORDER[a.pos] ?? 99) - (POS_ORDER[b.pos] ?? 99)
  );
  return (
    <div className="space-y-3">
      {sorted.map((entry, ei) => (
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
    </div>
  );
}
