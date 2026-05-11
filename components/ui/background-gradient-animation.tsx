import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type Props = {
  gradientBackgroundStart?: string;
  gradientBackgroundEnd?: string;
  firstColor?: string;
  secondColor?: string;
  thirdColor?: string;
  fourthColor?: string;
  fifthColor?: string;
  pointerColor?: string;
  size?: string;
  blendingValue?: string;
  interactive?: boolean;
  containerClassName?: string;
  className?: string;
  children?: ReactNode;
};

export function BackgroundGradientAnimation({
  gradientBackgroundStart = "rgb(24, 35, 60)",
  gradientBackgroundEnd = "rgb(0, 0, 0)",
  firstColor = "61, 155, 245",
  secondColor = "42, 71, 134",
  thirdColor = "100, 180, 255",
  fourthColor = "30, 60, 130",
  fifthColor = "120, 200, 255",
  pointerColor = "61, 155, 245",
  size = "80%",
  blendingValue = "hard-light",
  interactive = true,
  containerClassName,
  className,
  children,
}: Props) {
  const interactiveRef = useRef<HTMLDivElement | null>(null);
  const [supportsBlur, setSupportsBlur] = useState(true);

  const targetX = useRef(0);
  const targetY = useRef(0);
  const currentX = useRef(0);
  const currentY = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    setSupportsBlur(!isSafari);
  }, []);

  useEffect(() => {
    if (!interactive) return;
    let frame = 0;
    const tick = () => {
      currentX.current += (targetX.current - currentX.current) / 20;
      currentY.current += (targetY.current - currentY.current) / 20;
      if (interactiveRef.current) {
        interactiveRef.current.style.transform = `translate(${Math.round(
          currentX.current
        )}px, ${Math.round(currentY.current)}px)`;
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [interactive]);

  const handlePointerMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive || !interactiveRef.current) return;
    const rect = interactiveRef.current.getBoundingClientRect();
    targetX.current = e.clientX - rect.left - rect.width / 2;
    targetY.current = e.clientY - rect.top - rect.height / 2;
  };

  const cssVars = {
    "--gradient-bg-start": gradientBackgroundStart,
    "--gradient-bg-end": gradientBackgroundEnd,
    "--first-color": firstColor,
    "--second-color": secondColor,
    "--third-color": thirdColor,
    "--fourth-color": fourthColor,
    "--fifth-color": fifthColor,
    "--pointer-color": pointerColor,
    "--size": size,
    "--blending-value": blendingValue,
  } as CSSProperties;

  const blobBase = "absolute mix-blend-[var(--blending-value)] opacity-100";

  return (
    <div
      onMouseMove={handlePointerMove}
      className={[
        "relative h-full w-full overflow-hidden",
        "bg-[linear-gradient(40deg,var(--gradient-bg-start),var(--gradient-bg-end))]",
        containerClassName ?? "",
      ].join(" ")}
      style={cssVars}
    >
      <svg className="hidden">
        <defs>
          <filter id="aura-goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      <div
        className={[
          "pointer-events-none absolute inset-0 h-full w-full",
          supportsBlur ? "[filter:url(#aura-goo)_blur(40px)]" : "blur-2xl",
        ].join(" ")}
      >
        <div
          className={blobBase}
          style={{
            background:
              "radial-gradient(circle at center, rgba(var(--first-color), 0.8) 0, rgba(var(--first-color), 0) 50%) no-repeat",
            mixBlendMode: blendingValue as CSSProperties["mixBlendMode"],
            width: "var(--size)",
            height: "var(--size)",
            top: "calc(50% - var(--size) / 2)",
            left: "calc(50% - var(--size) / 2)",
            transformOrigin: "center center",
            animation: "var(--animate-first)",
            opacity: 1,
          }}
        />
        <div
          className={blobBase}
          style={{
            background:
              "radial-gradient(circle at center, rgba(var(--second-color), 0.8) 0, rgba(var(--second-color), 0) 50%) no-repeat",
            mixBlendMode: blendingValue as CSSProperties["mixBlendMode"],
            width: "var(--size)",
            height: "var(--size)",
            top: "calc(50% - var(--size) / 2)",
            left: "calc(50% - var(--size) / 2)",
            transformOrigin: "calc(50% - 400px)",
            animation: "var(--animate-second)",
            opacity: 1,
          }}
        />
        <div
          className={blobBase}
          style={{
            background:
              "radial-gradient(circle at center, rgba(var(--third-color), 0.8) 0, rgba(var(--third-color), 0) 50%) no-repeat",
            mixBlendMode: blendingValue as CSSProperties["mixBlendMode"],
            width: "var(--size)",
            height: "var(--size)",
            top: "calc(50% - var(--size) / 2 + 200px)",
            left: "calc(50% - var(--size) / 2 - 500px)",
            transformOrigin: "calc(50% + 400px)",
            animation: "var(--animate-third)",
            opacity: 1,
          }}
        />
        <div
          className={blobBase}
          style={{
            background:
              "radial-gradient(circle at center, rgba(var(--fourth-color), 0.8) 0, rgba(var(--fourth-color), 0) 50%) no-repeat",
            mixBlendMode: blendingValue as CSSProperties["mixBlendMode"],
            width: "var(--size)",
            height: "var(--size)",
            top: "calc(50% - var(--size) / 2)",
            left: "calc(50% - var(--size) / 2)",
            transformOrigin: "calc(50% - 200px)",
            animation: "var(--animate-fourth)",
            opacity: 0.7,
          }}
        />
        <div
          className={blobBase}
          style={{
            background:
              "radial-gradient(circle at center, rgba(var(--fifth-color), 0.8) 0, rgba(var(--fifth-color), 0) 50%) no-repeat",
            mixBlendMode: blendingValue as CSSProperties["mixBlendMode"],
            width: "calc(var(--size) * 2)",
            height: "calc(var(--size) * 2)",
            top: "calc(50% - var(--size))",
            left: "calc(50% - var(--size))",
            transformOrigin: "calc(50% - 800px) calc(50% + 200px)",
            animation: "var(--animate-fifth)",
            opacity: 1,
          }}
        />

        {interactive ? (
          <div
            ref={interactiveRef}
            className="absolute"
            style={{
              background:
                "radial-gradient(circle at center, rgba(var(--pointer-color), 0.8) 0, rgba(var(--pointer-color), 0) 50%) no-repeat",
              mixBlendMode: blendingValue as CSSProperties["mixBlendMode"],
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
              opacity: 0.7,
            }}
          />
        ) : null}
      </div>

      {children ? (
        <div className={["relative z-10", className ?? ""].join(" ")}>{children}</div>
      ) : null}
    </div>
  );
}
