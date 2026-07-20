"use client";
import { motion } from "motion/react";
import { CountUp } from "@/components/ui/count-up";
import { SectionGlow } from "@/components/ui/section-glow";

// Homepage Spec §3 — the problem statement. The emotional hook of the page, so
// this is where we let the design be bold: the "25 years vs 25 days" line
// becomes a diverging visual (same number, opposite worlds) instead of a plain
// heading.
const PARAGRAPHS = [
  "You’ve announced it. There’s a date. Maybe there’s a board, or a market, waiting to see it work.",
  "And the new brand has nothing — no website, no audience, no team, no pipeline. Everything your group spent decades building belongs to the old names. The new one starts at zero.",
  "Hiring a marketing team takes three months before anyone ships anything. Briefing four separate vendors takes longer and lands in pieces.",
];

const EASE = [0.16, 1, 0.3, 1] as const;

function DivergeStat({
  value,
  unit,
  caption,
  accent,
  delay,
}: {
  value: number;
  unit: string;
  caption: string;
  accent?: boolean;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: EASE }}
      className="flex-1 text-center sm:text-left"
    >
      <p
        className={`text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl ${
          accent ? "text-primary" : "text-white/85"
        }`}
      >
        <CountUp to={value} />
        <span className="ml-2 text-2xl font-bold sm:text-3xl">{unit}</span>
      </p>
      <p
        className={`mt-3 text-xs font-medium uppercase tracking-[0.22em] ${
          accent ? "text-primary/80" : "text-white/45"
        }`}
      >
        {caption}
      </p>
    </motion.div>
  );
}

export default function Problem() {
  return (
    <section id="problem" className="relative py-24 lg:py-32">
      <SectionGlow glowClassName="left-1/2 top-0 h-[420px] w-[680px] -translate-x-1/2 -translate-y-1/4" />
      <div className="relative mx-auto w-full max-w-3xl px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-6 text-xs font-medium uppercase tracking-[0.24em] text-primary"
        >
          The problem
        </motion.p>

        {/* Diverging visual — same number, two worlds. */}
        <div className="relative flex flex-col items-stretch gap-6 rounded-2xl border border-white/10 bg-white/[0.02] p-7 backdrop-blur-sm sm:flex-row sm:items-center sm:gap-4 sm:p-9">
          <DivergeStat value={25} unit="years" caption="The group" delay={0.05} />

          {/* Divider — the gap between them. */}
          <motion.div
            initial={{ opacity: 0, scaleY: 0.4 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.25, ease: EASE }}
            aria-hidden
            className="mx-auto hidden h-16 w-px origin-center bg-gradient-to-b from-transparent via-primary/50 to-transparent sm:block"
          />

          <DivergeStat
            value={25}
            unit="days"
            caption="The brand"
            accent
            delay={0.15}
          />
        </div>

        <div className="mt-10 space-y-5">
          {PARAGRAPHS.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease: EASE }}
              className="text-base leading-relaxed text-white/70 lg:text-lg"
            >
              {p}
            </motion.p>
          ))}

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.4, ease: EASE }}
            className="border-l-2 border-primary pl-5 text-lg font-semibold leading-relaxed text-white lg:text-xl"
          >
            Your launch doesn’t have three months. That’s the gap we fill.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
