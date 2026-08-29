import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/ponuda/temerinska-141",
        destination: "/ponuda/temerinska-143",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
