import type { NextConfig } from "next";
import path from "node:path";

// outputFileTracingRoot points at the parent repo so /api/build can include
// sibling `dojo/**` at build time. This only affects `next build` tracing —
// Turbopack's dev watcher uses its own auto-detected root (dojo-builder/),
// which keeps the filesystem-watch scope small.
const PUBLIC_REPO_ROOT = path.resolve(__dirname, "..");

const nextConfig: NextConfig = {
  outputFileTracingRoot: PUBLIC_REPO_ROOT,
  outputFileTracingIncludes: {
    "/api/build": ["dojo/**/*", "dojo-builder/templates/**/*"],
  },
};

export default nextConfig;
