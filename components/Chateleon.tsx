"use client";

import { useEffect } from "react";

const CHATELEON_API_ID = "chl_HxVPi1H0TcU3qUuvERgrwbYSNpiWy_hnUemNFrps4iU";
const CHATELEON_SDK_SRC = "https://cdn.chateleon.com/sdk/sdk.min.v0.0.1.js";

declare global {
  interface Window {
    chateleonObject?: string;
    chateleon?: (config: { apiId: string; event: string }) => void;
  }
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
