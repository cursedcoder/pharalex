import { describe, it, expect, vi, afterEach } from "vitest";
import { getDailySeed, pickDaily } from "@/lib/daily";

describe("getDailySeed", () => {
  afterEach(() => vi.restoreAllMocks());

  it("returns the same seed within a UTC day", () => {
    // 2025-01-15T10:00:00Z and 2025-01-15T22:00:00Z
    const ms1 = Date.UTC(2025, 0, 15, 10, 0, 0);
    const ms2 = Date.UTC(2025, 0, 15, 22, 0, 0);

    vi.spyOn(Date, "now").mockReturnValue(ms1);
    const seed1 = getDailySeed();

    vi.spyOn(Date, "now").mockReturnValue(ms2);
    const seed2 = getDailySeed();

    expect(seed1).toBe(seed2);
  });

  it("returns different seeds on different days", () => {
    const ms1 = Date.UTC(2025, 0, 15, 10, 0, 0);
    const ms2 = Date.UTC(2025, 0, 16, 10, 0, 0);

    vi.spyOn(Date, "now").mockReturnValue(ms1);
    const seed1 = getDailySeed();

    vi.spyOn(Date, "now").mockReturnValue(ms2);
    const seed2 = getDailySeed();

    expect(seed1).not.toBe(seed2);
  });
});

describe("pickDaily", () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  it("returns n items", () => {
    const picked = pickDaily(items, 3);
    expect(picked).toHaveLength(3);
  });

  it("returns all items if n >= array length", () => {
    const picked = pickDaily(items, 20);
    expect(picked).toHaveLength(10);
  });

  it("returns distinct items", () => {
    const picked = pickDaily(items, 5);
    expect(new Set(picked).size).toBe(5);
  });

  it("is deterministic for the same seed", () => {
    const a = pickDaily(items, 4, 42);
    const b = pickDaily(items, 4, 42);
    expect(a).toEqual(b);
  });

  it("produces different results for different seed offsets", () => {
    const a = pickDaily(items, 4, 0);
    const b = pickDaily(items, 4, 1);
    // Extremely unlikely to be equal with different seeds
    expect(a).not.toEqual(b);
  });

  it("does not mutate the input array", () => {
    const copy = [...items];
    pickDaily(items, 3);
    expect(items).toEqual(copy);
  });
});
