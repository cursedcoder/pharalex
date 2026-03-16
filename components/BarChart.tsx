import type { DistributionEntry } from "@/lib/stats";

interface BarChartProps {
  data: DistributionEntry[];
  maxBars?: number;
  color?: "gold" | "sandstone";
}

export function BarChart({ data, maxBars, color = "gold" }: BarChartProps) {
  const items = maxBars ? data.slice(0, maxBars) : data;
  const max = Math.max(...items.map((d) => d.value), 1);

  const barColor = color === "gold"
    ? "bg-gold/70 dark:bg-gold/50"
    : "bg-sandstone/50 dark:bg-sandstone/40";

  return (
    <div className="space-y-1.5">
      {items.map((entry) => (
        <div key={entry.label} className="group">
          <div className="flex items-center justify-between text-xs mb-0.5">
            <span className="text-brown-light truncate mr-2">{entry.label}</span>
            <span className="text-sandstone tabular-nums shrink-0">
              {entry.value.toLocaleString()}
            </span>
          </div>
          <div className="h-2 rounded-full bg-sandstone/10 overflow-hidden">
            <div
              className={`h-full rounded-full ${barColor} transition-all duration-500`}
              style={{ width: `${(entry.value / max) * 100}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
