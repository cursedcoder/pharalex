export function GlyphCardSkeleton() {
  return (
    <div className="bg-ivory-dark/50 border border-sandstone/20 rounded-lg p-4 animate-pulse">
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 bg-sandstone/20 rounded-lg" />
        <div className="flex-1 space-y-2">
          <div className="h-5 bg-sandstone/20 rounded w-16" />
          <div className="h-4 bg-sandstone/10 rounded w-32" />
          <div className="h-4 bg-sandstone/10 rounded w-full" />
        </div>
      </div>
    </div>
  );
}

export function GlyphGridSkeleton({ count = 12 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <GlyphCardSkeleton key={i} />
      ))}
    </div>
  );
}

export function GlyphTileSkeleton({ count = 24 }: { count?: number }) {
  return (
    <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 gap-2">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="aspect-square bg-sandstone/20 rounded-lg animate-pulse"
        />
      ))}
    </div>
  );
}
