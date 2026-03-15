"use client";

import { useState } from "react";
import { ExpandableList } from "./ExpandableList";

interface Entry {
  word: string;
  pos: string;
  glosses: string[];
}

export function DictionaryEntries({ entries }: { entries: Entry[] }) {
  return (
    <div className="space-y-3">
      {entries.map((entry, ei) => (
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
