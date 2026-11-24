import type { NextConfig } from "next";

// A static portfolio: every page is prerendered at build time.
const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
