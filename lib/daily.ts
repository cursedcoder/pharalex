/**
 * Returns an integer that increments once per day (UTC).
 * Used as a seed so featured content changes daily, not on every reload.
 */
export function getDailySeed(): number {
  return Math.floor(Date.now() / 86_400_000);
}

/**
 * Seeded pseudo-random number generator (mulberry32).
 * Returns a function that yields numbers in [0, 1).
 */
function seededRng(seed: number): () => number {
  let s = seed >>> 0;
  return () => {
    s += 0x6d2b79f5;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t ^= t + Math.imul(t ^ (t >>> 7), 61 | t);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Pick `n` distinct items from `arr` using a deterministic daily seed.
 * The selection changes once per UTC day.
 */
export function pickDaily<T>(arr: T[], n: number, seedOffset = 0): T[] {
  if (arr.length <= n) return [...arr];
  const rng = seededRng(getDailySeed() + seedOffset);
  // Fisher-Yates on a copy, take first n
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, n);
}
