interface SectionGlowProps {
  // Tailwind positioning/size classes for the blob, so each section can place
  // its light source differently and the page doesn't read as a template.
  glowClassName?: string;
  className?: string;
}

// Static ambient light source. Chosen over the WebGL Aurora on purpose: the
// "refined" direction calls for no looping ambient motion, and stacking 4 more
// shader canvases down the page would cost far more than a single blurred div.
// A soft --primary aura gives the black a light source without ever animating.
export function SectionGlow({
  glowClassName = "left-1/2 top-0 h-[440px] w-[760px] -translate-x-1/2 -translate-y-1/3",
  className = "",
}: SectionGlowProps) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <div
        className={`absolute rounded-full opacity-[0.12] blur-[130px] ${glowClassName}`}
        style={{
          background: "radial-gradient(circle, var(--primary), transparent 70%)",
        }}
      />
    </div>
  );
}
