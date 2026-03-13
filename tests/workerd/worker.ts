// Minimal worker entry point for vitest-pool-workers.
// The pool needs a valid worker — tests run inside this runtime context.
export default {
  async fetch(): Promise<Response> {
    return new Response("test worker");
  },
};
