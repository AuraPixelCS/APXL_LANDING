"use client";
import { motion } from "motion/react";

export default function PixelMock({
  reduce,
  onOpen,
  size = "default",
}: {
  reduce: boolean | null;
  onOpen: () => void;
  size?: "default" | "large";
}) {
  const sizeClasses =
    size === "large"
      ? "h-56 w-56 rounded-[2.4rem] sm:h-64 sm:w-64 lg:h-72 lg:w-72"
      : "h-44 w-44 rounded-[2rem] sm:h-52 sm:w-52 lg:h-60 lg:w-60";

  return (
    <motion.button
      type="button"
      onClick={onOpen}
      aria-label="Talk to Pixel"
      animate={reduce ? { y: 0 } : { y: [-6, 6, -6] }}
      transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
      className="relative outline-none transition-transform hover:scale-[1.03] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-transparent"
    >
      <div
        className={`relative bg-gradient-to-br from-[#6FB4FF] via-primary to-[#1F3B70] shadow-[0_30px_60px_-20px_rgba(61,155,245,0.55)] ${sizeClasses}`}
      >
        <div className="absolute inset-2 rounded-[1.6rem] bg-gradient-to-br from-white/15 via-transparent to-transparent" />
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 h-full w-full"
          aria-hidden
        >
          <circle cx="36" cy="44" r="6" fill="#ffffff" />
          <circle cx="64" cy="44" r="6" fill="#ffffff" />
          <circle cx="34" cy="42" r="1.6" fill="rgba(0,0,0,0.7)" />
          <circle cx="62" cy="42" r="1.6" fill="rgba(0,0,0,0.7)" />
          <path
            d="M 38 62 Q 50 73 62 62"
            stroke="#ffffff"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-6 -bottom-4 h-10 rounded-full bg-primary/25 blur-2xl"
      />
    </motion.button>
  );
}
