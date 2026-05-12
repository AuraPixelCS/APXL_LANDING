import { Zap, Lightbulb, CheckCircle2 } from "lucide-react";
import SectionMarquee from "@/components/SectionMarquee";
import { GlowCard } from "@/components/ui/spotlight-card";

type WhyCard = {
  Icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  tag: string;
  headline: string;
  body: string;
};

const CARDS: WhyCard[] = [
  {
    Icon: Zap,
    tag: "Fast",
    headline: "Speed That Moves With Culture",
    body: "Trends don't wait — and neither do we. We deliver campaigns at the pace of the moment, without cutting corners on quality.",
  },
  {
    Icon: Lightbulb,
    tag: "Creative",
    headline: "Ideas That Stop the Scroll",
    body: "We don't chase trends — we set them. Bold thinking, fresh storytelling, and creativity that makes audiences stop, watch, and remember.",
  },
  {
    Icon: CheckCircle2,
    tag: "Reliable",
    headline: "Partners You Can Count On",
    body: "From first brief to final delivery, we show up, communicate clearly, and deliver consistent results — every project, every time.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="relative">
      <SectionMarquee text="Why Us" />

      <div className="mx-auto w-full max-w-7xl px-6 pb-24 lg:px-16 lg:pb-32">
        <div className="mb-12 max-w-3xl lg:mb-16">
          <p className="text-xs uppercase tracking-[0.24em] text-primary">
            Why Us
          </p>
          <h2 className="mt-3 text-3xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-5xl">
            Fast. Creative. Reliable.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70 lg:text-lg">
            Three reasons brands across Southeast Asia choose Aura Pixel.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8">
          {CARDS.map(({ Icon, tag, headline, body }) => (
            <GlowCard
              key={tag}
              glowColor="blue"
              customSize
              className="!h-full !p-7 lg:!p-8"
            >
              <div data-cursor="medium" className="flex h-full flex-col gap-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-inset ring-primary/30">
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </div>
                <p className="text-xs uppercase tracking-[0.24em] text-primary">
                  {tag}
                </p>
                <h3 className="text-xl font-extrabold uppercase leading-tight tracking-tight text-white lg:text-2xl">
                  {headline}
                </h3>
                <p className="text-sm leading-relaxed text-white/70">{body}</p>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
