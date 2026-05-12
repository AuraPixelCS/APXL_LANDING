"use client";
import { motion } from "motion/react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Aura Pixel completely transformed how our brand shows up online. The results were beyond anything we expected.",
    author: "Brand Partner",
    location: "Kuala Lumpur",
  },
  {
    quote:
      "The podcast they produced for us was world-class. Professional, creative, and delivered on time every single time.",
    author: "Podcast Client",
    location: "",
  },
  {
    quote:
      "Our product launch event was the talk of the city. Aura Pixel owned every detail.",
    author: "Event Client",
    location: "",
  },
  {
    quote:
      "From strategy deck to launch night, every detail was handled. We just showed up and stole the show.",
    author: "Lifestyle Brand",
    location: "Petaling Jaya",
  },
  {
    quote:
      "They get culture. Every campaign feels like it was made by people who actually live in this market.",
    author: "F&B Founder",
    location: "Kuala Lumpur",
  },
  {
    quote:
      "Our digital catalog used to be a PDF nobody opened. Now it's an experience clients spend ten minutes inside.",
    author: "Retail Director",
    location: "Penang",
  },
  {
    quote:
      "Six months in and we've doubled our follower count without buying a single follower. That's the work.",
    author: "Beauty Brand",
    location: "",
  },
  {
    quote:
      "Working with Aura Pixel feels less like hiring an agency and more like adopting a creative co-founder.",
    author: "Tech Startup CEO",
    location: "Cyberjaya",
  },
];

export default function Testimonials() {
  const loop = [...testimonials, ...testimonials];

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto mb-12 max-w-7xl px-6 lg:mb-16 lg:px-16">
        <div className="max-w-3xl">
          <p className="mb-3 text-xs uppercase tracking-[0.24em] text-primary">
            Testimonials
          </p>
          <h2 className="text-3xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-5xl">
            What Our Clients Say.
          </h2>
        </div>
      </div>

      {/* Horizontal marquee — full-bleed, two duplicated runs for seamless loop */}
      <div className="overflow-hidden">
        <div
          className="flex w-max animate-marquee"
          style={{ animationDuration: "60s" }}
        >
          {loop.map((t, i) => (
            <div
              key={i}
              className="w-[300px] shrink-0 pr-4 sm:w-[340px] sm:pr-5 lg:w-[400px] lg:pr-6"
              aria-hidden={i >= testimonials.length}
            >
              <motion.div
                whileHover={{
                  y: -6,
                  scale: 1.02,
                  transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
                }}
                className="flex h-full flex-col gap-5 rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm transition-colors duration-300 hover:border-primary/30 hover:bg-white/[0.06] lg:p-8"
              >
                <Quote className="h-7 w-7 text-primary" strokeWidth={1.5} />
                <p className="text-base leading-relaxed text-white">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-auto border-t border-white/10 pt-5">
                  <p className="text-sm font-semibold text-white">
                    {t.author}
                  </p>
                  {t.location && (
                    <p className="text-xs uppercase tracking-[0.16em] text-white/55">
                      {t.location}
                    </p>
                  )}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
