"use client";
import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  Compass,
  CalendarRange,
  Clapperboard,
  Gauge,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { SectionGlow } from "@/components/ui/section-glow";

// Homepage Spec §6 — scroll-spy spotlight timeline. As you scroll, whichever
// step reaches the centre band of the viewport becomes "active": it lights to
// full while the others dim, and the progress line fills to it. The focus steps
// down the list as you scroll — no clicks, no pin, no layout shift (all content
// stays rendered; only opacity / node state animates).
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

type Step = { n: string; title: string; body: string; Icon: LucideIcon };

const STEPS: Step[] = [
  {
    n: "01",
    title: "Discovery & Strategy",
    body: "We learn your business, your buyer, and what a lead is actually worth to you — before a single asset is made.",
    Icon: Compass,
  },
  {
    n: "02",
    title: "Content Planning",
    body: "Calendar, creative direction, channel plan. A month of content mapped before we shoot.",
    Icon: CalendarRange,
  },
  {
    n: "03",
    title: "Production",
    body: "Shoots, podcasts, content — all in-house. No subcontractors, no briefing four vendors.",
    Icon: Clapperboard,
  },
  {
    n: "04",
    title: "Optimisation",
    body: "We watch what works and kill what doesn’t. Every ringgit is measured against leads, not likes.",
    Icon: Gauge,
  },
  {
    n: "05",
    title: "Growth",
    body: "Scale what’s working. The channels that produce leads get more fuel, month over month.",
    Icon: TrendingUp,
  },
];

export default function HowItWorks() {
  const reduce = useReducedMotion() ?? false;
  const [activeState, setActiveState] = useState(0);
  const active = reduce ? STEPS.length - 1 : activeState;

  return (
    <section id="how-it-works" className="relative py-24 lg:py-32">
      <SectionGlow glowClassName="right-1/4 top-0 h-[420px] w-[640px] -translate-y-1/4" />
      <div className="relative mx-auto w-full max-w-2xl px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-5xl">
          From first call to{" "}
          <span className="text-primary">compounding growth.</span>
        </h2>
        <p className="mt-4 text-sm text-white/45">
          Scroll to step through the process.
        </p>

        <ol className="mt-12 lg:mt-16">
          {STEPS.map((s, i) => {
            const isActive = i === active;
            const lit = i <= active;
            const isLast = i === STEPS.length - 1;
            const Icon = s.Icon;
            return (
              <motion.li
                key={s.n}
                // Centre-band scroll-spy: fires as this step crosses the middle
                // of the viewport, in either scroll direction (not `once`).
                onViewportEnter={() => setActiveState(i)}
                viewport={{ margin: "-45% 0px -45% 0px" }}
                className="flex gap-5 sm:gap-6"
              >
                {/* Node + progress line (shared column keeps them aligned) */}
                <div className="flex flex-col items-center">
                  <motion.span
                    animate={{ scale: isActive && !reduce ? 1.1 : 1 }}
                    transition={{ duration: reduce ? 0 : 0.4, ease: EASE }}
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border bg-white/[0.02] font-mono text-sm backdrop-blur-sm transition-all duration-500 ${
                      lit
                        ? "border-primary text-primary shadow-[0_0_20px_-6px_rgba(61,155,245,0.7)]"
                        : "border-white/15 text-white/40"
                    }`}
                  >
                    {s.n}
                  </motion.span>
                  {!isLast && (
                    <div className="relative my-2 w-px grow overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        className="absolute inset-x-0 top-0 h-full origin-top rounded-full bg-gradient-to-b from-primary to-primary/50"
                        initial={false}
                        animate={{ scaleY: i < active ? 1 : 0 }}
                        transition={{ duration: reduce ? 0 : 0.5, ease: EASE }}
                      />
                    </div>
                  )}
                </div>

                {/* Content — spotlights the active step, dims the rest */}
                <motion.div
                  animate={{ opacity: reduce ? 1 : isActive ? 1 : 0.4 }}
                  transition={{ duration: reduce ? 0 : 0.4, ease: EASE }}
                  className={`min-w-0 flex-1 ${isLast ? "pb-0" : "pb-12"}`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon
                      className={`h-[18px] w-[18px] shrink-0 transition-colors duration-500 ${
                        lit ? "text-primary" : "text-white/40"
                      }`}
                      strokeWidth={2}
                    />
                    <h3 className="text-lg font-bold text-white sm:text-xl">
                      {s.title}
                    </h3>
                  </div>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-white/60 sm:text-[15px]">
                    {s.body}
                  </p>
                </motion.div>
              </motion.li>
            );
          })}
        </ol>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: reduce ? 0 : 0.6, ease: EASE }}
          className="mt-12 max-w-xl text-base leading-relaxed text-white/70 lg:text-lg"
        >
          You’ll get a report every month showing exactly what your money did.
          Not impressions — leads, cost per lead, and what changed since last
          month.
        </motion.p>
      </div>
    </section>
  );
}
