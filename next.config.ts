import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project (multiple lockfiles exist above it).
  turbopack: {
    root: __dirname,
  },
  // Hide the Next.js dev indicator badge (bottom corner) during development.
  devIndicators: false,
};

export default nextConfig;
