import type { Fetcher } from "@cloudflare/workers-types";

declare module "cloudflare:test" {
  interface ProvidedEnv {
    ASSETS: Fetcher;
  }
}
