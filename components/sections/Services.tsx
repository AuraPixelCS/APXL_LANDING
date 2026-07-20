"use client";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { RippleButton } from "@/components/ui/ripple-button";
import { SpotlightTile } from "@/components/ui/spotlight-tile";
import { SectionGlow } from "@/components/ui/section-glow";

// Homepage Spec §4.
// Website Development dropped — not a service we offer. Spec/deck listed it
// as #03; Event Management renumbered up and the heading count adjusted.
// Rows → SpotlightTile cards: cursor-follow blue glow, the reactbits signature.
const SERVICES = [
  {
    n: "01",
    title: "Digital Marketing",
    body: "Social content, paid ads, growth strategy. The part that actually generates leads.",
  },
  {
    n: "02",
    title: "Podcast & Content",
    body: "Full podcast production — recording, editing, clips, distribution across Spotify, YouTube and Apple. Our own studio, not a subcontractor’s.",
  },
  {
    n: "03",
    title: "Event Management",
    body: "Full-service production, promotion and live engagement. Concerts to corporate milestones.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32">
      <SectionGlow glowClassName="right-0 top-1/4 h-[460px] w-[620px] translate-x-1/3" />
      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-16">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-extrabold leading-[1.06] tracking-tight text-white sm:text-4xl lg:text-5xl">
            Three things. One studio.{" "}
            <span className="text-primary">All in-house.</span>
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3 lg:mt-16">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <SpotlightTile className="h-full">
                <div className="flex h-full flex-col p-7 lg:p-8">
                  <span className="font-mono text-sm text-primary">{s.n}</span>
                  <h3 className="mt-6 text-2xl font-extrabold uppercase leading-tight tracking-tight text-white transition-colors group-hover:text-primary lg:text-[1.75rem]">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/65">
                    {s.body}
                  </p>
                </div>
              </SpotlightTile>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center lg:mt-14">
          <RippleButton
            href="#lead-form"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-primary/85"
          >
            Get a launch plan
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </RippleButton>
        </div>
      </div>
    </section>
  );
}
