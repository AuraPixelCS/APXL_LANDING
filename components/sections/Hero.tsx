import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import {
  FacebookIcon,
  InstagramIcon,
} from "@/components/icons/SocialIcons";
import Aurora from "@/components/Aurora";

const HEADLINE = [
  { kind: "filled", text: "Born from" },
  { kind: "stroked", text: "passion" },
  { kind: "filled", text: "built for impact" },
] as const;

const LEFT_RAIL = [
  { label: "info@aurapixel.live", href: "mailto:info@aurapixel.live" },
  { label: "Midvalley Boulevard, KL", href: "#contact" },
];

const SOCIALS = [
  {
    Icon: InstagramIcon,
    label: "Instagram",
    href: "https://www.instagram.com/byaurapixel/",
  },
  {
    Icon: FacebookIcon,
    label: "Facebook",
    href: "https://www.facebook.com/byaurapixel",
  },
];

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Hero() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const thumbY = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? [0, 0] : [0, -60]
  );
  const thumbScale = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? [1, 1] : [1, 2.6]
  );
  const thumbOpacity = useTransform(
    scrollYProgress,
    [0, 0.55, 0.9],
    reduce ? [0.55, 0.55, 0.55] : [0.55, 0.22, 0]
  );
  const starY = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? [0, 0] : [0, 50]
  );

  const lineFrom = reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 };
  const lineTo = { opacity: 1, y: 0 };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative isolate flex h-[100svh] w-full flex-col overflow-hidden bg-black"
    >
      {/* Aurora background — react-bits, brand blue */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-70"
      >
        <Aurora
          colorStops={["#1F3B70", "#3D9BF5", "#6FB4FF"]}
          amplitude={0.9}
          blend={0.45}
          speed={0.6}
        />
      </div>

      {/* Vertical hairlines (lg+) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 hidden lg:flex"
      >
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="flex-1 border-r border-white/[0.04] last:border-r-0"
          />
        ))}
      </div>

      {/* Right-aligned round photo — parallax + scroll-driven scale & fade */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-[4%] top-1/2 z-[1] hidden -translate-y-1/2 sm:block lg:right-[6%]"
        style={{ y: thumbY, scale: thumbScale, opacity: thumbOpacity }}
        initial={reduce ? { scale: 1 } : { scale: 0.94 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, delay: 0.1, ease: EASE_OUT }}
      >
        <div className="relative z-[3] h-[300px] w-[300px] overflow-hidden rounded-full bg-black shadow-[0_30px_90px_-30px_rgba(0,0,0,0.9)] md:h-[400px] md:w-[400px] lg:h-[540px] lg:w-[540px] xl:h-[620px] xl:w-[620px]">
          <Image
            src="/xpovio/hero/banner-team.png"
            alt=""
            fill
            sizes="(min-width:1280px) 620px, (min-width:1024px) 540px, (min-width:768px) 400px, 300px"
            className="object-cover [filter:brightness(1)_contrast(1.05)_saturate(1.05)]"
            priority
          />
          {/* Soft brand-blue rim — no inner darkening */}
          <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-primary/25 [box-shadow:inset_0_0_120px_rgba(61,155,245,0.18)]" />
        </div>
      </motion.div>

      {/* Star — top-left decorative */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-6 top-20 z-[2] hidden sm:block lg:left-24 lg:top-28"
        style={{ y: starY }}
        initial={
          reduce ? { opacity: 0.6, rotate: 0 } : { opacity: 0, rotate: -25 }
        }
        animate={{ opacity: 0.6, rotate: 0 }}
        transition={{ duration: 1.2, delay: 0.25, ease: EASE_OUT }}
      >
        <Image
          src="/xpovio/hero/star.png"
          alt=""
          width={88}
          height={88}
          className="opacity-90 [filter:brightness(0)_invert(1)]"
        />
      </motion.div>

      {/* Left rail (md+) */}
      <div className="pointer-events-none absolute bottom-12 left-6 z-[6] hidden flex-col items-center gap-6 md:flex lg:left-10">
        {LEFT_RAIL.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="pointer-events-auto text-[11px] font-medium uppercase tracking-[0.18em] text-white/55 transition-colors hover:text-primary [writing-mode:vertical-rl] [transform:rotate(180deg)]"
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* Right rail (md+) — social icons with medium bloom */}
      <div className="pointer-events-none absolute bottom-12 right-6 z-[6] hidden flex-col items-center gap-5 md:flex lg:right-10">
        {SOCIALS.map(({ Icon, label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            data-cursor="medium"
            className="pointer-events-auto text-white/55 transition-colors hover:text-primary"
          >
            <Icon className="h-5 w-5" />
          </a>
        ))}
      </div>

      {/* Main content (top padding clears the fixed Navbar) */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 pt-24 lg:px-12 lg:pt-28">
        <h1 className="font-bungee uppercase tracking-tight text-white">
          {HEADLINE.map((line, i) => (
            <motion.span
              key={i}
              initial={lineFrom}
              animate={lineTo}
              transition={{
                duration: 0.75,
                delay: 0.15 + i * 0.1,
                ease: EASE_OUT,
              }}
              className="block text-[clamp(2.25rem,8vw,6.25rem)] leading-[0.95] tracking-[-0.03em]"
            >
              {line.kind === "filled" && line.text}
              {line.kind === "stroked" && (
                <span className="font-bungee-outline text-primary">
                  {line.text}
                </span>
              )}
            </motion.span>
          ))}
        </h1>

        <motion.div
          initial={lineFrom}
          animate={lineTo}
          transition={{ duration: 0.75, delay: 0.55, ease: EASE_OUT }}
          className="mt-8 max-w-lg pl-1 md:mt-10 lg:max-w-xl"
        >
          <p className="text-[15px] leading-[1.6] text-white/70 md:text-base lg:text-lg">
            A next-generation creative and marketing studio helping brands cut
            through the noise — and stay there.
          </p>
        </motion.div>
      </div>

    </section>
  );
}
