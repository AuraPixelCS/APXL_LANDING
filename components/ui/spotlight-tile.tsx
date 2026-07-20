"use client";
import { useRef, type ReactNode } from "react";

interface SpotlightTileProps {
  children: ReactNode;
  className?: string;
}

// Local-pointer spotlight card (reactbits-style, refined). The glow tracks the
// cursor *within the card* — not the viewport — so a 3-up grid reads as three
// distinct light sources, and there's no `touch-action: none` to trap mobile
// scroll. Blue is pulled from the frozen --primary token via color-mix, and the
// spotlight only fades in on hover, so nothing moves until the user does.
export function SpotlightTile({ children, className = "" }: SpotlightTileProps) {
  const ref = useRef<HTMLDivElement>(null);

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onPointerMove={onPointerMove}
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm transition-colors duration-300 hover:border-primary/30 before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-primary/40 before:to-transparent ${className}`}
    >
      {/* Cursor spotlight — refined: gentle, hover-only. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(340px circle at var(--mx, 50%) var(--my, 50%), color-mix(in oklab, var(--primary) 14%, transparent), transparent 62%)",
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}
