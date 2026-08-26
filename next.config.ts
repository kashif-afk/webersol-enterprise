import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true, // writes about/index.html instead of about.html, matching Apache's directory-index lookup on cPanel
  images: {
    unoptimized: true, // Required for static hosting on cPanel
  },
};

export default nextConfig;