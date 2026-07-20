"use client";
import { useRef, type ReactNode } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

interface PixelRevealProps {
  children: ReactNode;
  className?: string;
  cols?: number;
  rows?: number;
}

// One-shot "pixel dissolve" — on-brand for AuraPixel. A grid of black tiles
// covers the content, then clears diagonally when scrolled into view, so the
// panel resolves block-by-block like a loading pixel image. Deterministic delay
// (index-based, no Math.random) to stay hydration-safe. Under reduced motion the
// overlay never renders, so the content is simply visible.
export function PixelReveal({
  children,
  className = "",
  cols = 14,
  rows = 4,
}: PixelRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-70px" });
  const reduced = useReducedMotion();
  const cells = Array.from({ length: cols * rows });

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {children}
      {!reduced && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 grid"
          style={{
            gridTemplateColumns: `repeat(${cols}, 1fr)`,
            gridTemplateRows: `repeat(${rows}, 1fr)`,
          }}
        >
          {cells.map((_, i) => {
            const col = i % cols;
            const row = Math.floor(i / cols);
            return (
              <motion.span
                key={i}
                className="bg-black"
                initial={{ opacity: 1 }}
                animate={inView ? { opacity: 0 } : { opacity: 1 }}
                transition={{
                  duration: 0.32,
                  delay: (col + row) * 0.025,
                  ease: "easeOut",
                }}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
