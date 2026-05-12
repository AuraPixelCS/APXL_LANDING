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
  const [heroPast, setHeroPast] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const hero = document.getElementById("home");
    if (!hero) {
      setHeroPast(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => setHeroPast(!entry.isIntersecting),
      { threshold: 0, rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!heroPast) return;
    const dismissed = window.sessionStorage.getItem(TOOLTIP_KEY);
    if (dismissed) return;
    const t = window.setTimeout(() => setShowTooltip(true), 1200);
    return () => window.clearTimeout(t);
  }, [heroPast]);

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

  const showBubble = heroPast && !isOpen;

  return (
    <div className="pointer-events-none fixed bottom-6 right-6 z-[60] hidden md:block">
      <AnimatePresence>
        {showBubble && showTooltip && (
          <motion.div
            key="tooltip"
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
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

      <AnimatePresence>
        {showBubble && (
          <motion.button
            key="bubble"
            type="button"
            data-cursor="big"
            onClick={handleOpen}
            aria-label="Open Pixel chat"
            initial={{ opacity: 0, scale: 0.4, y: 60, rotate: -12 }}
            animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 30, rotate: 8 }}
            transition={{
              type: "spring",
              stiffness: 220,
              damping: 16,
              mass: 0.9,
            }}
            whileHover={{ scale: 1.08, rotate: -4 }}
            whileTap={{ scale: 0.94 }}
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
        )}
      </AnimatePresence>
    </div>
  );
}
