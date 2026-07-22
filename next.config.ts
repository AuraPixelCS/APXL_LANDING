import type { NextConfig } from "next";

const RSVP_ORIGIN = "https://apxl-rsvp.vercel.app";

// The Growth Story MY — standalone project in ../growth-story, deployed on its
// own Vercel project. It sets basePath "/thegrowthstorymy", so the prefix is
// preserved on both sides of the rewrite and its /_next/* assets resolve.
const GROWTH_ORIGIN = "https://growth-story-six.vercel.app";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      { source: "/rsvp", destination: `${RSVP_ORIGIN}/rsvp` },
      { source: "/rsvp/:path*", destination: `${RSVP_ORIGIN}/rsvp/:path*` },
      {
        source: "/thegrowthstorymy",
        destination: `${GROWTH_ORIGIN}/thegrowthstorymy`,
      },
      {
        source: "/thegrowthstorymy/:path*",
        destination: `${GROWTH_ORIGIN}/thegrowthstorymy/:path*`,
      },
    ];
  },
};

export default nextConfig;
