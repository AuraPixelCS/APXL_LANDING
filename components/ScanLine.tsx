export default function ScanLine({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-x-0 h-px overflow-hidden ${className}`}
    >
      <span
        className="absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-primary/70 to-transparent"
        style={{ animation: "scan-line 6s linear infinite" }}
      />
    </div>
  );
}
