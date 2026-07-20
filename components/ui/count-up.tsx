"use client";
import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";

interface CountUpProps {
  to: number;
  from?: number;
  duration?: number; // seconds
  prefix?: string;
  suffix?: string;
  className?: string;
}

// Refined odometer: counts up once when scrolled into view, easing toward the
// final value (same bezier as the rest of the page) so it settles rather than
// spins. Driven by motion's animate() — updates come via onUpdate, never a
// synchronous setState in the effect. Reduced motion → duration 0, so it lands
// on the final value instantly.
export function CountUp({
  to,
  from = 0,
  duration = 1.4,
  prefix = "",
  suffix = "",
  className = "",
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduced = useReducedMotion();
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(from, to, {
      duration: reduced ? 0 : duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(v),
    });
    return () => controls.stop();
  }, [inView, reduced, from, to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {Math.round(value)}
      {suffix}
    </span>
  );
}
