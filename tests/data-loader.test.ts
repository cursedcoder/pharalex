import { describe, it, expect, vi, beforeEach } from "vitest";

// Mock @opennextjs/cloudflare before importing the module
vi.mock("@opennextjs/cloudflare", () => ({
  getCloudflareContext: vi.fn(),
}));

// We need to reset module state between tests since data-loader caches at module level
async function freshImport() {
  vi.resetModules();
  return import("@/lib/data-loader");
}

// Mock fs to avoid needing real data files
function mockFs(data: unknown) {
  vi.doMock("node:fs", () => ({
    readFileSync: vi.fn(() => JSON.stringify(data)),
  }));
  vi.doMock("node:path", () => ({
    join: vi.fn((...parts: string[]) => parts.join("/")),
  }));
}

describe("cachedLoad", () => {
  beforeEach(() => {
    vi.resetModules();
    vi.restoreAllMocks();
  });

  it("returns data from filesystem when not in CF context", async () => {
    const { getCloudflareContext } = await import("@opennextjs/cloudflare");
    vi.mocked(getCloudflareContext).mockRejectedValue(new Error("not in CF"));
    mockFs([{ code: "A1" }]);

    const { loadGlyphs } = await freshImport();
    const glyphs = await loadGlyphs();
    expect(glyphs).toEqual([{ code: "A1" }]);
  });

  it("deduplicates concurrent calls (same promise returned)", async () => {
    const { getCloudflareContext } = await import("@opennextjs/cloudflare");
    vi.mocked(getCloudflareContext).mockRejectedValue(new Error("not in CF"));
    const readSpy = vi.fn(() => JSON.stringify([{ code: "A1" }]));
    vi.doMock("node:fs", () => ({ readFileSync: readSpy }));
    vi.doMock("node:path", () => ({ join: vi.fn((...p: string[]) => p.join("/")) }));

    const { loadGlyphs } = await freshImport();
    // Call twice without awaiting
    const p1 = loadGlyphs();
    const p2 = loadGlyphs();

    // Same promise object
    expect(p1).toBe(p2);

    const [r1, r2] = await Promise.all([p1, p2]);
    expect(r1).toEqual(r2);
    // readFileSync should only have been called once
    expect(readSpy).toHaveBeenCalledTimes(1);
  });

  it("clears cache on rejection so next call retries", async () => {
    const { getCloudflareContext } = await import("@opennextjs/cloudflare");
    vi.mocked(getCloudflareContext).mockRejectedValue(new Error("not in CF"));

    // First call: fs throws
    let callCount = 0;
    vi.doMock("node:fs", () => ({
      readFileSync: vi.fn(() => {
        callCount++;
        if (callCount === 1) throw new Error("ENOENT");
        return JSON.stringify([{ code: "B1" }]);
      }),
    }));
    vi.doMock("node:path", () => ({ join: vi.fn((...p: string[]) => p.join("/")) }));

    const { loadGlyphs } = await freshImport();

    // First call fails
    await expect(loadGlyphs()).rejects.toThrow("ENOENT");

    // Second call retries and succeeds
    const result = await loadGlyphs();
    expect(result).toEqual([{ code: "B1" }]);
    expect(callCount).toBe(2);
  });

  it("serves from CF Assets when available", async () => {
    const mockFetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve([{ code: "C1" }]),
    });

    const { getCloudflareContext } = await import("@opennextjs/cloudflare");
    vi.mocked(getCloudflareContext).mockResolvedValue({
      env: { ASSETS: { fetch: mockFetch } },
      ctx: {},
      cf: undefined,
    } as never);

    const { loadGlyphs } = await freshImport();
    const result = await loadGlyphs();

    expect(result).toEqual([{ code: "C1" }]);
    expect(mockFetch).toHaveBeenCalledTimes(1);
    const req = mockFetch.mock.calls[0][0] as Request;
    expect(req.url).toBe("http://assets.local/data/glyphs.json");
  });

  it("throws in production when CF Assets fetch fails", async () => {
    const originalEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = "production";

    const mockFetch = vi.fn().mockResolvedValue({ ok: false, status: 404 });
    const { getCloudflareContext } = await import("@opennextjs/cloudflare");
    vi.mocked(getCloudflareContext).mockResolvedValue({
      env: { ASSETS: { fetch: mockFetch } },
      ctx: {},
      cf: undefined,
    } as never);

    const { loadGlyphs } = await freshImport();
    await expect(loadGlyphs()).rejects.toThrow("CF Assets fetch failed");

    process.env.NODE_ENV = originalEnv;
  });

  it("falls through to filesystem when CF Assets fails in dev", async () => {
    const mockFetch = vi.fn().mockResolvedValue({ ok: false, status: 500 });
    const { getCloudflareContext } = await import("@opennextjs/cloudflare");
    vi.mocked(getCloudflareContext).mockResolvedValue({
      env: { ASSETS: { fetch: mockFetch } },
      ctx: {},
      cf: undefined,
    } as never);

    mockFs([{ code: "D1" }]);

    const { loadGlyphs } = await freshImport();
    const result = await loadGlyphs();
    expect(result).toEqual([{ code: "D1" }]);
  });
});
