import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ hostname: "raw.githubusercontent.com" }]
  },
  experimental: {
    dynamicIO: true,
  },
};

export default nextConfig;
