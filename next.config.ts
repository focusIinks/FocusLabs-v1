import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/FocusLabs-v1',
  assetPrefix: '/FocusLabs-v1/',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
