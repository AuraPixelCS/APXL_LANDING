"use client";
import { motion } from "motion/react";
import { CountUp } from "@/components/ui/count-up";
import { SectionGlow } from "@/components/ui/section-glow";

// Homepage Spec §2 — three stats directly beneath the hero. Carries the
// credibility load the removed testimonials were meant to. UNATTRIBUTED:
// no client named, no consent required. Do not attach a client name here.
// Numbers animate up (CountUp) on scroll-in; ambient glow adds depth.
const STATS = [
  { to: 30, suffix: " days", label: "from nothing to a live brand generating leads" },
  { to: 90, suffix: "+", label: "leads in the first month" },
  { to: 25, prefix: "RM ", label: "average cost per B2B lead" },
];

export default function ProofBar() {
  return (
    <section id="proof-bar" className="relative py-12 lg:py-16">
      <SectionGlow glowClassName="left-1/2 top-1/2 h-[300px] w-[820px] -translate-x-1/2 -translate-y-1/2" />
      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-16">
        <div className="grid grid-cols-1 divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-primary/40 before:to-transparent sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="px-6 py-8 text-center sm:px-8 sm:py-10 sm:text-left"
            >
              <p className="text-4xl font-extrabold tracking-tight text-primary lg:text-5xl">
                <CountUp to={s.to} prefix={s.prefix} suffix={s.suffix} />
              </p>
              <p className="mx-auto mt-3 max-w-[15rem] text-sm leading-relaxed text-white/65 sm:mx-0">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
