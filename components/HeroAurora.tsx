export default function HeroAurora() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Bright primary ribbon — sweeps horizontally across the middle (subtle) */}
      <div
        className="absolute"
        style={{
          width: "160%",
          height: "55%",
          top: "22%",
          left: "-30%",
          background:
            "linear-gradient(115deg, transparent 0%, rgba(61,155,245,0.0) 18%, rgba(61,155,245,0.18) 35%, rgba(111,180,255,0.25) 50%, rgba(61,155,245,0.18) 65%, rgba(61,155,245,0.0) 82%, transparent 100%)",
          filter: "blur(90px)",
          mixBlendMode: "screen",
          transform: "rotate(-6deg)",
          animation: "moveHorizontal 38s ease-in-out infinite",
          willChange: "transform",
        }}
      />

      {/* Deep navy underglow */}
      <div
        className="absolute"
        style={{
          width: "140%",
          height: "85%",
          bottom: "-30%",
          left: "-20%",
          background:
            "linear-gradient(80deg, rgba(24,35,60,0.0) 0%, rgba(42,71,134,0.28) 40%, rgba(61,155,245,0.18) 60%, rgba(42,71,134,0.0) 100%)",
          filter: "blur(110px)",
          mixBlendMode: "screen",
          animation: "moveVertical 44s ease-in-out infinite reverse",
          willChange: "transform",
        }}
      />

      {/* Secondary ribbon — counter-drifts above (very faint) */}
      <div
        className="absolute"
        style={{
          width: "120%",
          height: "50%",
          top: "-15%",
          right: "-10%",
          background:
            "linear-gradient(95deg, transparent 0%, rgba(61,155,245,0.14) 30%, rgba(160,210,255,0.2) 55%, rgba(61,155,245,0.12) 80%, transparent 100%)",
          filter: "blur(100px)",
          mixBlendMode: "screen",
          transform: "rotate(8deg)",
          animation: "moveHorizontal 52s ease-in-out infinite reverse",
          willChange: "transform",
        }}
      />

      {/* Vignette — keeps corners dark and grid hairlines reading clean */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 25%, rgba(0,0,0,0.55) 85%)",
        }}
      />
    </div>
  );
}
