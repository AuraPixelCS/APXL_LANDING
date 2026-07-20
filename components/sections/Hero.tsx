import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { ArrowRight } from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
} from "@/components/icons/SocialIcons";
import Aurora from "@/components/Aurora";
import { RippleButton } from "@/components/ui/ripple-button";

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

// filled = white Bungee · stroked = blue Bungee-outline (alternating lines)
const HEADLINE = [
  { kind: "filled", text: "Your new brand has a" },
  { kind: "stroked", text: "launch date" },
  { kind: "filled", text: "Who’s building the" },
  { kind: "stroked", text: "marketing?" },
] as const;

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
        className="pointer-events-none absolute right-[5%] top-1/2 z-[1] hidden -translate-y-1/2 xl:block"
        style={{ y: thumbY, scale: thumbScale, opacity: thumbOpacity }}
        initial={reduce ? { scale: 1 } : { scale: 0.94 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, delay: 0.1, ease: EASE_OUT }}
      >
        <div className="relative z-[3] h-[500px] w-[500px] overflow-hidden rounded-full bg-black shadow-[0_30px_90px_-30px_rgba(0,0,0,0.9)] 2xl:h-[560px] 2xl:w-[560px]">
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
        <motion.h1
          initial={lineFrom}
          animate={lineTo}
          transition={{ duration: 0.8, delay: 0.15, ease: EASE_OUT }}
          className="max-w-xl font-bungee text-[clamp(1.85rem,6.2vw,3.25rem)] uppercase leading-[1.04] tracking-tight text-white xl:max-w-[640px]"
        >
          {HEADLINE.map((line, i) => (
            <span
              key={i}
              className={
                line.kind === "stroked"
                  ? "block font-bungee-outline text-primary"
                  : "block"
              }
            >
              {line.text}
            </span>
          ))}
        </motion.h1>

        <motion.div
          initial={lineFrom}
          animate={lineTo}
          transition={{ duration: 0.8, delay: 0.4, ease: EASE_OUT }}
          className="mt-9 flex flex-col items-start gap-4"
        >
          <RippleButton
            href="#lead-form"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-primary/85"
          >
            Get a launch plan
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </RippleButton>
          {/* Supporting line — not a heading. Unattributed by design (§1). */}
          <p className="max-w-md text-xs leading-relaxed text-white/45">
            Our last brand launch: live in 30 days, 90+ leads in month one,
            around RM 25 each.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
