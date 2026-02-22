import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ["@happyphysicsclub/r3f-director"],
  experimental: {
    externalDir: true,
  },
};

export default nextConfig;
