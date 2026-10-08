import type { NextConfig } from "next";

const RSVP_ORIGIN = "https://apxl-rsvp.vercel.app";

// The Growth Story MY — standalone project in ../growth-story, deployed on its
// own Vercel project. It sets basePath "/thegrowthstorymy", so the prefix is
// preserved on both sides of the rewrite and its /_next/* assets resolve.
const GROWTH_ORIGIN = "https://apxl-growth-story.vercel.app";

// PXL Chat — full SaaS app (auth, API routes, embeddable widget) living on its
// own origin. Proxied in under /pxlchat, same as The Growth Story: the app sets
// basePath "/pxlchat", so the prefix is preserved on both sides of the rewrite
// and its /_next/* assets resolve.
//
// Note the embed snippet still points customers at pxlchat.vercel.app/pxlchat
// directly — widget traffic (including the SSE chat stream) skips this proxy.
const PXLCHAT_ORIGIN = "https://pxlchat.vercel.app";

// AuraPixel Ops — internal operations panel (../ap-ops), Vercel project
// apxl-ops. Sets basePath "/ops", so the prefix is preserved on both sides.
const OPS_ORIGIN = "https://apxl-ops.vercel.app";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      { source: "/pxlchat", destination: `${PXLCHAT_ORIGIN}/pxlchat` },
      { source: "/pxlchat/:path*", destination: `${PXLCHAT_ORIGIN}/pxlchat/:path*` },
      { source: "/ops", destination: `${OPS_ORIGIN}/ops` },
      { source: "/ops/:path*", destination: `${OPS_ORIGIN}/ops/:path*` },
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
