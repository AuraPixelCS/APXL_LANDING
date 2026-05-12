import type { NextConfig } from "next";

const RSVP_ORIGIN = "https://aurapixel-rsvp.vercel.app";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      { source: "/rsvp", destination: `${RSVP_ORIGIN}/rsvp` },
      { source: "/rsvp/:path*", destination: `${RSVP_ORIGIN}/rsvp/:path*` },
    ];
  },
};

export default nextConfig;
