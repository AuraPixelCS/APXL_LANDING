import Link from "next/link";
import {
  useCallback,
  useState,
  type MouseEvent,
  type ReactNode,
} from "react";

type Ripple = { id: number; x: number; y: number; size: number };

type Props = {
  children: ReactNode;
  className?: string;
  rippleColor?: string;
  rippleDuration?: number;
  href?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  target?: string;
  rel?: string;
  "aria-label"?: string;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
};

export function RippleButton({
  children,
  className = "",
  rippleColor = "rgba(255, 255, 255, 0.45)",
  rippleDuration = 600,
  href,
  type = "button",
  disabled,
  target,
  rel,
  onClick,
  ...rest
}: Props) {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const spawn = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height) * 2;
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      const id = Date.now() + Math.random();
      setRipples((prev) => [...prev, { id, x, y, size }]);
      window.setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
      }, rippleDuration);
    },
    [rippleDuration]
  );

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    if (!disabled) spawn(e);
    onClick?.(e);
  };

  const overlay = (
    <span
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ borderRadius: "inherit" }}
    >
      {ripples.map((r) => (
        <span
          key={r.id}
          className="absolute rounded-full"
          style={{
            left: r.x,
            top: r.y,
            width: r.size,
            height: r.size,
            background: rippleColor,
            animation: `ripple ${rippleDuration}ms ease-out forwards`,
          }}
        />
      ))}
    </span>
  );

  const merged = `relative overflow-hidden ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        target={target}
        rel={rel}
        aria-label={rest["aria-label"]}
        onClick={handleClick}
        className={merged}
      >
        {children}
        {overlay}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      aria-label={rest["aria-label"]}
      onClick={handleClick}
      className={merged}
    >
      {children}
      {overlay}
    </button>
  );
}
