import { ArrowRight } from "lucide-react";
import { RippleButton } from "@/components/ui/ripple-button";

// Homepage Spec §9 — closing CTA. Points to the one lead form (§8).
export default function ClosingCTA() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 pb-28 pt-8 lg:scroll-mt-28 lg:pb-36 lg:pt-12"
    >
      <div className="mx-auto w-full max-w-4xl px-6 text-center lg:px-8">
        <h2 className="font-bungee text-[clamp(2rem,6vw,4.5rem)] uppercase leading-[0.95] tracking-[-0.02em] text-white">
          Launching{" "}
          <span className="font-bungee-outline text-primary">something?</span>
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
          Tell us what it is and when it goes live. We will tell you straight
          whether we can get you there.
        </p>

        <div className="mt-10 flex justify-center">
          <RippleButton
            href="#lead-form"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-primary/85"
          >
            Get a launch plan
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </RippleButton>
        </div>

        <div className="mt-10 space-y-1 text-sm text-white/60">
          <p>
            Or just email{" "}
            <a
              href="mailto:info@aurapixel.live"
              className="text-white transition hover:text-primary"
            >
              info@aurapixel.live
            </a>{" "}
            ·{" "}
            <a
              href="tel:+60102841290"
              className="text-white transition hover:text-primary"
            >
              +6010-284 1290
            </a>
          </p>
          <p className="text-white/45">Midvalley Boulevard, Kuala Lumpur</p>
        </div>
      </div>
    </section>
  );
}
