import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'blog.fotto.com.br',
      },
      {
        protocol: 'https',
        hostname: 'static.artguru.ai',
      },
      {
        protocol: 'https',
        hostname: 'photokit.com',
      },
    ],
  },
};

export default nextConfig;
