import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  // Handle images properly
  images: {
    unoptimized: false,
  },
  // Enable compression
  compress: true,
};

export default nextConfig;
