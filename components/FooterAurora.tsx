export default function FooterAurora() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Bright primary ribbon — sweeps horizontally across the middle */}
      <div
        className="absolute"
        style={{
          width: "160%",
          height: "55%",
          top: "22%",
          left: "-30%",
          background:
            "linear-gradient(115deg, transparent 0%, rgba(61,155,245,0.0) 18%, rgba(61,155,245,0.55) 35%, rgba(111,180,255,0.7) 50%, rgba(61,155,245,0.55) 65%, rgba(61,155,245,0.0) 82%, transparent 100%)",
          filter: "blur(72px)",
          mixBlendMode: "screen",
          transform: "rotate(-6deg)",
          animation: "moveHorizontal 26s ease-in-out infinite",
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
            "linear-gradient(80deg, rgba(24,35,60,0.0) 0%, rgba(42,71,134,0.7) 40%, rgba(61,155,245,0.5) 60%, rgba(42,71,134,0.0) 100%)",
          filter: "blur(90px)",
          mixBlendMode: "screen",
          animation: "moveVertical 32s ease-in-out infinite reverse",
          willChange: "transform",
        }}
      />

      {/* Secondary ribbon — counter-drifts above */}
      <div
        className="absolute"
        style={{
          width: "120%",
          height: "50%",
          top: "-15%",
          right: "-10%",
          background:
            "linear-gradient(95deg, transparent 0%, rgba(61,155,245,0.4) 30%, rgba(160,210,255,0.55) 55%, rgba(61,155,245,0.3) 80%, transparent 100%)",
          filter: "blur(80px)",
          mixBlendMode: "screen",
          transform: "rotate(8deg)",
          animation: "moveHorizontal 38s ease-in-out infinite reverse",
          willChange: "transform",
        }}
      />

      {/* Hotspot — soft moving highlight to give the aurora a "core" */}
      <div
        className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(circle at center, rgba(150,200,255,0.45) 0%, rgba(61,155,245,0.25) 30%, transparent 65%)",
          filter: "blur(40px)",
          mixBlendMode: "screen",
          animation: "moveVertical 20s ease-in-out infinite",
          willChange: "transform",
        }}
      />

      {/* Tertiary depth pocket — keeps the corners reading dark */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.45) 90%)",
        }}
      />
    </div>
  );
}
