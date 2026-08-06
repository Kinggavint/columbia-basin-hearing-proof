// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Allow tunnelled preview hosts (cloudflared) to reach the dev server so the
  // site can be shared for review without a full deploy.
  vite: {
    // GitHub Pages serves the proof from /columbia-basin-hearing-proof/, so assets
    // must be emitted with that prefix.
    base: process.env.PAGES_BASE || "/",
    server: {
      allowedHosts: [".trycloudflare.com", ".loca.lt", ".ngrok-free.app"],
    },
  },
  // Static proof builds set PAGES_BASE + NITRO_PRESET=node-server; the default
  // build stays on Lovable/Cloudflare.
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
