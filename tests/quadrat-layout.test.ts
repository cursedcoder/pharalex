import { describe, it, expect } from "vitest";
import { parseMdc } from "@/lib/mdc";
import { naturalSize, cadratWidth } from "@/components/Quadrat";

/**
 * Layout compactness tests.
 *
 * Each sign in a seq should use at least 40% of its allocated width —
 * otherwise there are visible gaps (the "flex space-between" problem).
 */

function checkUtilization(mdc: string, baseSize: number, minUtilization = 0.4) {
  const node = parseMdc(mdc);
  if (node.type !== "seq") return [];

  const problems: string[] = [];
  for (const child of node.children) {
    const nat = naturalSize(child);
    const allocatedW = cadratWidth(child, baseSize);
    const scale = baseSize / (nat.h || 1);
    const visualW = nat.w * scale;
    const utilization = visualW / allocatedW;

    if (utilization < minUtilization) {
      const code = child.type === "sign" ? child.code : child.type;
      problems.push(
        `${code}: ${Math.round(utilization * 100)}% utilization (${Math.round(visualW)}px visual in ${allocatedW}px slot)`
      );
    }
  }
  return problems;
}

describe("Quadrat seq layout — R15-D58-Z7-X1-A53-Y1V-Z3 (ꜣbwt ivory)", () => {
  const mdc = "R15-D58-Z7-X1-A53-Y1V-Z3";
  const baseSize = 40;

  it("parses into a seq with 7 children", () => {
    const node = parseMdc(mdc);
    expect(node.type).toBe("seq");
    if (node.type === "seq") {
      expect(node.children).toHaveLength(7);
    }
  });

  it("narrow signs should not waste more than 60% of their cadrat width", () => {
    const problems = checkUtilization(mdc, baseSize);
    expect(problems).toEqual([]);
  });

  it("total rendered width should not exceed 2x the natural content width", () => {
    const node = parseMdc(mdc);
    if (node.type !== "seq") throw new Error("expected seq");

    const totalRendered = node.children
      .map((c) => cadratWidth(c, baseSize))
      .reduce((s, w) => s + w, 0);

    let totalNatural = 0;
    for (const child of node.children) {
      const nat = naturalSize(child);
      totalNatural += nat.w * (baseSize / (nat.h || 1));
    }

    expect(totalRendered / totalNatural).toBeLessThan(2);
  });
});

describe("Quadrat seq layout — compact rendering invariants", () => {
  const cases = [
    { name: "ꜣbwt (ivory)", mdc: "R15-D58-Z7-X1-A53-Y1V-Z3" },
    { name: "mnmn (earthquake)", mdc: "Y5-N35-Y5-N35-N35-D54-N16-Z1-N21" },
    { name: "nfr (good)", mdc: "F35-D21-Z1" },
  ];

  for (const { name, mdc } of cases) {
    it(`${name}: no sign should use less than 40% of its allocated width`, () => {
      const problems = checkUtilization(mdc, 40);
      expect(problems).toEqual([]);
    });
  }
});
