export default function PixelFace({ size }: { size: number }) {
  return (
    <div
      style={{ width: size, height: size }}
      className="relative shrink-0 rounded-[28%] bg-gradient-to-br from-[#6FB4FF] via-primary to-[#1F3B70] shadow-[0_8px_20px_-8px_rgba(61,155,245,0.55)]"
    >
      <div className="absolute inset-[6%] rounded-[22%] bg-gradient-to-br from-white/15 via-transparent to-transparent" />
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
  );
}
