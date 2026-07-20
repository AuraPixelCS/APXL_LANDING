"use client";
import { motion } from "motion/react";
import { PixelReveal } from "@/components/ui/pixel-reveal";
import { SectionGlow } from "@/components/ui/section-glow";

// Homepage Spec §5 — replaces the deleted testimonials. Figures are
// UNATTRIBUTED (no client named) so they publish without consent. Do NOT
// attach a client name to these numbers, and do not reword the figures.
// The money-stat callout is the visual peak of the page: pixel-dissolve reveal
// (on-brand for AuraPixel) + a blue glow border.
export default function Proof() {
  return (
    <section id="proof" className="relative py-24 lg:py-32">
      <SectionGlow glowClassName="left-0 top-1/3 h-[440px] w-[600px] -translate-x-1/3" />
      <div className="relative mx-auto w-full max-w-3xl px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-primary"
        >
          Proof
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl"
        >
          Trusted with the things that matter.
        </motion.h2>

        <div className="mt-8 space-y-5 text-base leading-relaxed text-white/70 lg:text-lg">
          <p>
            A public-listed group’s newest brand. A national artist’s concert. A
            heritage restaurant’s rebrand. A destination wedding covered across
            two countries.
          </p>
          <p>
            Different industries, different problems — one studio, start to
            finish.
          </p>

          <PixelReveal className="rounded-xl">
            <div className="relative overflow-hidden rounded-xl border border-primary/30 bg-primary/[0.05] p-6 text-white shadow-[0_0_60px_-18px_rgba(61,155,245,0.55)] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-primary/60 before:to-transparent">
              Our most recent brand launch went live in{" "}
              <strong className="text-primary">30 days</strong> and produced{" "}
              <strong className="text-primary">90+ leads</strong> in its first
              month, at around <strong className="text-primary">RM 25</strong> per
              lead.
            </div>
          </PixelReveal>

          <p>
            Not impressions. Not reach. Named people at named companies, with
            contact details, in a spreadsheet their sales team works from every
            morning.
          </p>
          <p className="text-lg font-semibold text-white lg:text-xl">
            That last part is what most studios won’t show you: the number.
          </p>
        </div>
      </div>
    </section>
  );
}
