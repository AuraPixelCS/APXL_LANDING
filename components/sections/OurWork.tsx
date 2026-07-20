"use client";
import { motion } from "motion/react";

/**
 * Homepage Spec §5b — "Our work".
 *
 * [HOLD] Open decision #1 — Arvino must confirm each client is happy to be
 * listed by NAME before this section is published. These are REAL clients from
 * AuraPixel's proposal deck (not placeholder/sample names), gated behind the
 * flag below. §5b carries client names with NO numbers attached; §5 carries
 * numbers with NO client attached. Keeping them separate is what keeps §5
 * publishable without consent — do not merge them.
 *
 * Flip PUBLISH_CLIENT_NAMES to true once Arvino signs off; the section then
 * renders in place. Until then it renders nothing and does not block the page.
 */
const PUBLISH_CLIENT_NAMES = false;

const CLIENTS = [
  { name: "SKILL2U", work: "digital marketing" },
  { name: "PEOPLElogy", work: "25th anniversary, end-to-end event production" },
  { name: "GV Prakash · Celebration of Life", work: "large-scale concert production" },
  { name: "Nasi Kandar Kayu · Irfan’s View", work: "heritage F&B campaign" },
  { name: "VJ Siddhu · Kaara Saaram", work: "celebrity endorsement, Penang activation" },
  { name: "Namma Veetukalyanam", work: "luxury destination wedding, international coverage" },
];

export default function OurWork() {
  if (!PUBLISH_CLIENT_NAMES) return null;

  return (
    <section id="our-work" className="relative pb-24 lg:pb-32">
      <div className="mx-auto w-full max-w-4xl px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold uppercase tracking-tight text-white lg:text-3xl">
          Our work
        </h2>
        {/* Client logos here if available. */}
        <ul className="mt-8 divide-y divide-white/10 border-y border-white/10">
          {CLIENTS.map((c, i) => (
            <motion.li
              key={c.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
            >
              <span className="text-lg font-semibold text-white">{c.name}</span>
              <span className="text-sm text-white/60 sm:text-right">{c.work}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
