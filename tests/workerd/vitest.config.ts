import { defineWorkersConfig } from "@cloudflare/vitest-pool-workers/config";
import path from "path";

export default defineWorkersConfig({
  test: {
    include: ["tests/workerd/**/*.test.ts"],
    poolOptions: {
      workers: {
        wrangler: {
          configPath: "./wrangler.test.toml",
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../.."),
    },
  },
});
