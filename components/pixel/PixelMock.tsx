"use client";
import { useEffect, useRef } from "react";
import { motion } from "motion/react";

const EYE_WHITE_RADIUS = 6;
const PUPIL_RADIUS = 1.6;
const MAX_PUPIL_OFFSET = EYE_WHITE_RADIUS - PUPIL_RADIUS - 0.2; // keep pupil inside white
const SATURATE_DISTANCE = 220; // px — beyond this the pupils are fully deflected

export default function PixelMock({
  reduce,
  onOpen,
  size = "default",
  eyesFollowCursor = false,
}: {
  reduce: boolean | null;
  onOpen: () => void;
  size?: "default" | "large";
  eyesFollowCursor?: boolean;
}) {
  const sizeClasses =
    size === "large"
      ? "h-56 w-56 rounded-[2.4rem] sm:h-64 sm:w-64 lg:h-72 lg:w-72"
      : "h-44 w-44 rounded-[2rem] sm:h-52 sm:w-52 lg:h-60 lg:w-60";

  const faceRef = useRef<HTMLDivElement>(null);
  const leftPupilRef = useRef<SVGCircleElement>(null);
  const rightPupilRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    if (!eyesFollowCursor) return;
    if (typeof window === "undefined") return;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (coarse) return;

    const aim = (e: PointerEvent) => {
      const container = faceRef.current;
      const lp = leftPupilRef.current;
      const rp = rightPupilRef.current;
      if (!container || !lp || !rp) return;

      const rect = container.getBoundingClientRect();
      const sx = rect.width / 100;
      const sy = rect.height / 100;

      const aimEye = (
        pupil: SVGCircleElement,
        eyeX: number,
        eyeY: number
      ) => {
        const cxScreen = rect.left + eyeX * sx;
        const cyScreen = rect.top + eyeY * sy;
        const dx = e.clientX - cxScreen;
        const dy = e.clientY - cyScreen;
        const dist = Math.hypot(dx, dy);
        const scale = Math.min(dist / SATURATE_DISTANCE, 1);
        const ux = dist > 0 ? dx / dist : 0;
        const uy = dist > 0 ? dy / dist : 0;
        const ox = ux * MAX_PUPIL_OFFSET * scale;
        const oy = uy * MAX_PUPIL_OFFSET * scale;
        pupil.setAttribute("cx", String(eyeX + ox));
        pupil.setAttribute("cy", String(eyeY + oy));
      };

      aimEye(lp, 36, 44);
      aimEye(rp, 64, 44);
    };

    window.addEventListener("pointermove", aim);
    return () => window.removeEventListener("pointermove", aim);
  }, [eyesFollowCursor]);

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
        ref={faceRef}
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
          <circle
            ref={leftPupilRef}
            cx={eyesFollowCursor ? 36 : 34}
            cy={eyesFollowCursor ? 44 : 42}
            r="1.6"
            fill="rgba(0,0,0,0.7)"
          />
          <circle
            ref={rightPupilRef}
            cx={eyesFollowCursor ? 64 : 62}
            cy={eyesFollowCursor ? 44 : 42}
            r="1.6"
            fill="rgba(0,0,0,0.7)"
          />
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
