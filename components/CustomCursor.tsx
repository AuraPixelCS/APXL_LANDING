import { useEffect, useRef, useState } from "react";

const HOVER_SELECTOR =
  'a, button, [role="button"], input, textarea, select, label[for]';
const BIG_SELECTOR = 'h1, h2, h3, h4, h5, h6, [data-cursor="big"]';

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted) return;
    if (typeof window === "undefined") return;

    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (coarse || reduced) return;

    const wrap = wrapRef.current;
    const outer = outerRef.current;
    const inner = innerRef.current;
    const text = textRef.current;
    if (!wrap || !outer || !inner || !text) return;

    let frame = 0;
    let nextX = window.innerWidth / 2;
    let nextY = window.innerHeight / 2;

    const writeFrame = () => {
      frame = 0;
      const t = `translate3d(${nextX}px, ${nextY}px, 0)`;
      outer.style.transform = t;
      inner.style.transform = t;
    };

    const onMove = (e: MouseEvent) => {
      nextX = e.clientX;
      nextY = e.clientY;
      if (!frame) frame = requestAnimationFrame(writeFrame);
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as Element | null;
      if (!target || typeof target.closest !== "function") return;
      const optOut = target.closest('[data-cursor="default"]');
      const medium = optOut
        ? null
        : target.closest('[data-cursor="medium"]');
      const big = optOut || medium
        ? null
        : (target.closest(BIG_SELECTOR) as HTMLElement | null);
      const hover = target.closest(HOVER_SELECTOR);
      if (big) {
        wrap.dataset.state = "big";
        text.textContent = big.getAttribute("data-cursor-text") ?? "";
      } else if (medium) {
        wrap.dataset.state = "medium";
        text.textContent = "";
      } else if (hover) {
        wrap.dataset.state = "hover";
        text.textContent = "";
      } else {
        wrap.dataset.state = "idle";
        text.textContent = "";
      }
    };

    const onLeave = () => {
      wrap.dataset.state = "out";
    };

    const onEnter = () => {
      wrap.dataset.state = "idle";
    };

    wrap.dataset.state = "idle";
    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, true);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver, true);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div
      ref={wrapRef}
      aria-hidden
      data-state="idle"
      className="cursor-wrap"
      style={{ display: "contents" }}
    >
      <div
        ref={outerRef}
        className="cursor-outer pointer-events-none fixed left-0 top-0 z-[9999] rounded-full border border-primary"
      />
      <div
        ref={innerRef}
        className="cursor-inner pointer-events-none fixed left-0 top-0 z-[9999] flex items-center justify-center rounded-full bg-primary text-[11px] font-semibold uppercase tracking-[0.18em] text-black"
      >
        <span
          ref={textRef}
          className="cursor-text pointer-events-none select-none whitespace-nowrap opacity-0"
        />
      </div>
    </div>
  );
}
