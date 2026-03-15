"use client";

import { useState } from "react";

interface ExpandableListProps {
  items: string[];
  max?: number;
  className?: string;
}

export function ExpandableList({ items, max = 3, className = "" }: ExpandableListProps) {
  const [expanded, setExpanded] = useState(false);
  const shown = expanded ? items : items.slice(0, max);
  const remaining = items.length - max;

  return (
    <div className={className}>
      <ol className="space-y-0.5 list-decimal list-inside text-sm text-brown-light">
        {shown.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ol>
      {!expanded && remaining > 0 && (
        <button
          onClick={() => setExpanded(true)}
          className="mt-1 text-xs text-gold hover:text-gold-dark transition-colors cursor-pointer"
        >
          +{remaining} more →
        </button>
      )}
    </div>
  );
}
