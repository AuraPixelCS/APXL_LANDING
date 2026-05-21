"use client";

import { useEffect } from "react";

const CHATELEON_API_ID = "chl_D1ak2ujjzkr1r4WiCgBSLEknLeJ1bu-Oiof49do32vo";
const CHATELEON_SDK_SRC = "https://cdn.chateleon.com/sdk/sdk.min.v0.0.1.js";

declare global {
  interface Window {
    chateleonObject?: string;
    chateleon?: (config: { apiId?: string; event: string }) => void;
  }
}

export function openChateleon() {
  if (typeof window === "undefined") return;

  if (typeof window.chateleon === "function") {
    try {
      window.chateleon({ apiId: CHATELEON_API_ID, event: "open" });
      return;
    } catch {
      // fall through to DOM click fallback
    }
  }

  const selectors = [
    "[data-chateleon-launcher]",
    '[id^="chateleon-launcher"]',
    '[id*="chateleon"][role="button"]',
    '[class*="chateleon-launcher"]',
    '[class*="chateleon-bubble"]',
    "#chateleon-widget button",
  ];

  for (const sel of selectors) {
    const el = document.querySelector<HTMLElement>(sel);
    if (el) {
      el.click();
      return;
    }
  }

  console.warn("[Chateleon] launcher not found — widget may still be loading");
}

export default function Chateleon() {
  useEffect(() => {
    if (document.getElementById("chateleon-script")) return;

    window.chateleonObject = "chateleon";

    const script = document.createElement("script");
    script.id = "chateleon-script";
    script.async = true;
    script.src = CHATELEON_SDK_SRC;
    script.addEventListener("load", () => {
      window.chateleon?.({
        apiId: CHATELEON_API_ID,
        event: "create",
      });
    });

    document.head.appendChild(script);
  }, []);

  return null;
}
