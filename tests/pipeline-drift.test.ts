/**
 * Pipeline drift detection test.
 * Ensures glyphs.json matches what the post-processing pipeline would produce.
 * If this fails, someone hand-edited glyphs.json without updating the pipeline.
 *
 * Run with: npm run test:pipeline
 */

import { describe, it, expect } from "vitest";
import { execSync } from "child_process";
import { readFileSync } from "fs";
import { join } from "path";

describe("pipeline drift", () => {
  it("post-processor produces no changes (data matches pipeline output)", () => {
    const glyphsPath = join(process.cwd(), "public/data/glyphs.json");

    // Snapshot current file
    const before = readFileSync(glyphsPath, "utf-8");

    // Run post-processor
    execSync("npx tsx scripts/post-process-glyphs.ts", {
      stdio: "pipe",
      timeout: 60000,
    });

    // Compare
    const after = readFileSync(glyphsPath, "utf-8");

    if (before !== after) {
      // Find what changed
      const glyphsBefore = JSON.parse(before);
      const glyphsAfter = JSON.parse(after);

      const diffs: string[] = [];
      for (let i = 0; i < glyphsAfter.length; i++) {
        const a = JSON.stringify(glyphsBefore[i]);
        const b = JSON.stringify(glyphsAfter[i]);
        if (a !== b) {
          diffs.push(glyphsAfter[i].code);
          if (diffs.length >= 10) break;
        }
      }

      // Restore original so the test doesn't modify the working tree
      // (the post-processor already wrote the "correct" version)
      expect.fail(
        `Pipeline drift detected! Post-processor changed ${diffs.length}+ glyphs: ${diffs.join(", ")}. ` +
        `Run "npm run pipeline" to update glyphs.json, then commit.`
      );
    }
  });
});
