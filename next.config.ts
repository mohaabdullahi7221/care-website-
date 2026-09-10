import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/nagu-saabsan", destination: "/" },
      { source: "/waxbarashada", destination: "/" },
      { source: "/macallimiinta", destination: "/" },
      { source: "/dhacdooyinka", destination: "/" },
      { source: "/gallery", destination: "/" },
      { source: "/wararka", destination: "/" },
      { source: "/xiriir", destination: "/" },
    ];
  },
};

export default nextConfig;
