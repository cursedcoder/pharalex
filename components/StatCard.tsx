interface StatCardProps {
  label: string;
  value: string | number;
  icon: string;
}

export function StatCard({ label, value, icon }: StatCardProps) {
  return (
    <div className="bg-papyrus/50 border border-sandstone/20 rounded-xl px-5 py-4 text-center">
      <div className="font-hieroglyph text-2xl mb-1 opacity-60">{icon}</div>
      <div className="font-display text-3xl font-bold text-gold-dark">
        {typeof value === "number" ? value.toLocaleString() : value}
      </div>
      <div className="text-xs text-sandstone mt-1">{label}</div>
    </div>
  );
}
