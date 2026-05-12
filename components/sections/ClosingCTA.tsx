import { ArrowUpRight } from "lucide-react";
import { RippleButton } from "@/components/ui/ripple-button";

export default function ClosingCTA() {
  return (
    <section id="contact" className="relative pb-32 pt-8 lg:pb-40 lg:pt-12">
      <div className="mx-auto w-full max-w-5xl px-6 text-center lg:px-16">
        <h2 className="font-bungee text-[clamp(2.25rem,7vw,5rem)] uppercase leading-[0.95] tracking-[-0.02em] text-white">
          Let&rsquo;s Build Something{" "}
          <span className="font-bungee-outline text-primary">
            Worth Watching.
          </span>
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
          Whether you&rsquo;re launching, scaling, or rebranding — Aura Pixel
          is ready to bring your story to life.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
          <RippleButton
            href="mailto:info@aurapixel.live"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-primary/85"
          >
            Start a Project
            <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
          </RippleButton>
          <a
            href="#about"
            data-cursor="medium"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-primary/40 hover:text-primary"
          >
            See Our Work
          </a>
        </div>

        <p className="mt-12 text-xs uppercase tracking-[0.24em] text-white/45">
          Born from passion. Built for impact. Backed by trust.
        </p>
      </div>
    </section>
  );
}
