"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import PixelFace from "@/components/pixel/PixelFace";
import { usePixelChat } from "@/components/pixel/PixelChatProvider";

const TOOLTIP_KEY = "pixel-tooltip-dismissed";

export default function FloatingPixelBubble() {
  const { open, isOpen } = usePixelChat();
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const dismissed = window.sessionStorage.getItem(TOOLTIP_KEY);
    if (dismissed) return;
    const t = window.setTimeout(() => setShowTooltip(true), 2800);
    return () => window.clearTimeout(t);
  }, []);

  const dismissTooltip = () => {
    setShowTooltip(false);
    if (typeof window !== "undefined") {
      window.sessionStorage.setItem(TOOLTIP_KEY, "1");
    }
  };

  const handleOpen = () => {
    dismissTooltip();
    open();
  };

  if (isOpen) return null;

  return (
    <div className="pointer-events-none fixed bottom-6 right-6 z-[60] hidden md:block">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto absolute bottom-[88px] right-0 w-[260px] rounded-2xl border border-white/10 bg-[#0a0a0a]/95 px-4 py-3 pr-9 text-sm leading-relaxed text-white shadow-[0_20px_40px_-20px_rgba(61,155,245,0.45)] backdrop-blur-xl"
          >
            Hey <span aria-hidden>👋</span> Need a hand with your next campaign?
            <button
              type="button"
              onClick={dismissTooltip}
              aria-label="Dismiss"
              className="absolute right-1.5 top-1.5 rounded-full p-1 text-white/55 transition hover:bg-white/5 hover:text-white"
            >
              <X className="h-3.5 w-3.5" />
            </button>
            <span
              aria-hidden
              className="absolute -bottom-1.5 right-7 h-3 w-3 rotate-45 border-b border-r border-white/10 bg-[#0a0a0a]/95"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        data-cursor="big"
        onClick={handleOpen}
        aria-label="Open Pixel chat"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-auto relative outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-black"
      >
        <span
          aria-hidden
          className="absolute inset-0 -z-10 rounded-[28%] bg-primary/40 blur-2xl"
        />
        <span
          aria-hidden
          className="absolute inset-0 -z-10 animate-ping rounded-[28%] bg-primary/25"
          style={{ animationDuration: "2.6s" }}
        />
        <PixelFace size={64} />
      </motion.button>
    </div>
  );
}
