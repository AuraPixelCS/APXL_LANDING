"use client";
import { Star, ArrowRight, MessageCircle } from "lucide-react";
import { RippleButton } from "@/components/ui/ripple-button";

// Homepage Spec §7 — redesigned per `pricing-redesign-reference.html` (20 Jul 2026).
// Key change: all RM figures removed (header prices AND add-on prices — people
// reverse-engineer rates from add-ons). Each tier now carries "Custom pricing",
// a positioning line and its own quote CTA. Heading moved off "What it costs."
// because a price-free section under that title reads as bait-and-switch.
//
// This also closes Open decision #2 (commitment length): the row now says
// "Flexible — discussed on your call" instead of a figure, so no HOLD remains.

const WHATSAPP_HREF =
  "https://wa.me/60102841290?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20your%20marketing%20plans.";

const PLANS = [
  {
    name: "Digital Marketing",
    note: "For brands building a consistent presence",
    popular: false,
  },
  {
    name: "DM + Podcast",
    note: "For brands ready to own their voice",
    popular: true,
  },
  {
    name: "Brand Authority",
    note: "For brands scaling aggressively",
    popular: false,
  },
];

const PRICE_LABEL = "Custom pricing";

const ROWS: { label: string; values: string[] }[] = [
  { label: "Social posts", values: ["12–16/mo", "12/mo", "Daily"] },
  { label: "Reels", values: ["8/mo", "12/mo", "24–30/mo"] },
  { label: "Podcast episodes", values: ["—", "4/mo", "8/mo"] },
  {
    label: "Paid ads",
    values: ["Managed + optimised", "Managed + optimised", "Aggressive scaling"],
  },
  { label: "Reporting", values: ["Monthly report", "Monthly report", "Full dashboard"] },
  {
    label: "Commitment",
    values: [
      "Flexible — discussed on your call",
      "Flexible — discussed on your call",
      "Flexible — discussed on your call",
    ],
  },
];

const ADDONS =
  "Meta Ads Management · Branding · Website Development · Extra podcast episodes — all quoted based on scope.";

function PopularBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-black">
      <Star className="h-3 w-3 fill-current" strokeWidth={0} />
      Most popular
    </span>
  );
}

function QuoteButton({ popular }: { popular: boolean }) {
  return (
    <RippleButton
      href="#lead-form"
      className={
        popular
          ? "inline-flex w-full items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-primary/85"
          : "inline-flex w-full items-center justify-center rounded-xl border border-white/15 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-primary hover:text-primary"
      }
    >
      Get a Quote
    </RippleButton>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 lg:py-32">
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold leading-[1.06] tracking-tight text-white sm:text-4xl lg:text-5xl">
          Built around your business.
        </h2>
        <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-white/60">
          Every business is at a different stage — so we don&rsquo;t do
          one-size-fits-all pricing. Tell us where you are and what you&rsquo;re
          aiming for, and we&rsquo;ll put together the right scope with a{" "}
          <strong className="font-semibold text-white">
            clear, no-obligation quote within 24 hours
          </strong>
          .
        </p>

        {/* Mobile / tablet — stacked cards. Popular tier leads. */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:hidden">
          {PLANS.map((plan, col) => (
            <div
              key={plan.name}
              className={`rounded-2xl border bg-white/[0.02] p-6 backdrop-blur-sm ${
                plan.popular ? "order-first border-primary/40" : "border-white/10"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-bold text-white">{plan.name}</h3>
                {plan.popular && <PopularBadge />}
              </div>
              <p className="mt-2 text-2xl font-extrabold text-primary">
                {PRICE_LABEL}
              </p>
              <p className="mt-1 text-[13px] text-white/45">{plan.note}</p>
              <div className="mt-5">
                <QuoteButton popular={plan.popular} />
              </div>
              <dl className="mt-5 space-y-2.5 text-sm">
                {ROWS.map((row) => (
                  <div
                    key={row.label}
                    className="flex justify-between gap-6 border-t border-white/5 pt-2.5"
                  >
                    <dt className="text-white/55">{row.label}</dt>
                    <dd className="text-right font-medium text-white">
                      {row.values[col]}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>

        {/* Desktop — comparison table */}
        <div className="mt-12 hidden overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm lg:block">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-white/10">
                <th className="w-[22%] p-5" />
                {PLANS.map((plan) => (
                  <th
                    key={plan.name}
                    className={`p-6 align-bottom ${
                      plan.popular ? "bg-primary/[0.06]" : ""
                    }`}
                  >
                    {plan.popular && (
                      <div className="mb-3">
                        <PopularBadge />
                      </div>
                    )}
                    <div className="text-base font-bold text-white">
                      {plan.name}
                    </div>
                    <div className="mt-1 text-xl font-extrabold text-primary">
                      {PRICE_LABEL}
                    </div>
                    <div className="mt-1 text-[13px] font-normal text-white/45">
                      {plan.note}
                    </div>
                    <div className="mt-4">
                      <QuoteButton popular={plan.popular} />
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr key={row.label} className="border-b border-white/10 last:border-0">
                  <td className="p-5 text-sm font-medium text-white/55">
                    {row.label}
                  </td>
                  {PLANS.map((plan, col) => (
                    <td
                      key={plan.name}
                      className={`p-5 text-sm text-white ${
                        plan.popular ? "bg-primary/[0.04]" : ""
                      }`}
                    >
                      {row.values[col]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom CTA strip — WhatsApp + form fallback */}
        <div className="mt-7 flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-white/10 bg-white/[0.02] px-7 py-7 backdrop-blur-sm">
          <div>
            <h3 className="text-lg font-bold text-white">
              Not sure which fits? Just ask.
            </h3>
            <p className="mt-1.5 text-sm text-white/55">
              Message us on WhatsApp — we usually reply within the hour. No
              pressure, no hard sell.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#25d366] px-5 py-2.5 text-sm font-bold text-[#04120a] transition hover:bg-[#3be07c]"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={2.25} />
              WhatsApp Us
            </a>
            <RippleButton
              href="#lead-form"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-primary hover:text-primary"
            >
              Or send an enquiry
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </RippleButton>
          </div>
        </div>

        <p className="mt-6 text-sm leading-relaxed text-white/50">
          <span className="font-medium text-white/70">Add-ons available: </span>
          {ADDONS}
        </p>
      </div>
    </section>
  );
}
