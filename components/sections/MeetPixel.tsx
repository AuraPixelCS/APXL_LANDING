"use client";
import { useReducedMotion } from "motion/react";
import { ArrowUpRight, BarChart3, MessageCircle, Rocket } from "lucide-react";
import SectionMarquee from "@/components/SectionMarquee";
import { RippleButton } from "@/components/ui/ripple-button";
import PixelMock from "@/components/pixel/PixelMock";
import { usePixelChat } from "@/components/pixel/PixelChatProvider";

type Capability = {
  Icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  body: string;
};

const CAPABILITIES: Capability[] = [
  {
    Icon: MessageCircle,
    title: "Instant Ideas",
    body: "Brainstorm campaigns, captions, and concepts in seconds.",
  },
  {
    Icon: BarChart3,
    title: "Smart Insights",
    body: "Get audience and trend insights powered by our AI analytics.",
  },
  {
    Icon: Rocket,
    title: "Seamless Handoff",
    body: "Like what Pixel suggests? Our human team picks up right where Pixel leaves off.",
  },
];

export default function MeetPixel() {
  const reduce = useReducedMotion();
  const { open } = usePixelChat();

  return (
    <section id="meet-pixel" className="relative">
      <SectionMarquee text="Meet Pixel" />

      <div className="mx-auto w-full max-w-7xl px-6 pb-24 lg:px-16 lg:pb-32">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left — copy + capability bullets */}
          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.24em] text-primary">
              Meet Pixel
            </p>
            <h2 className="mt-3 font-bungee text-4xl uppercase leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Say Hi to Pixel.
            </h2>
            <h3 className="mt-2 font-bungee-outline text-3xl uppercase leading-[0.95] tracking-tight text-primary sm:text-4xl lg:text-5xl">
              Your 24/7 Creative Co-Pilot.
            </h3>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white sm:text-lg">
              Got a question? An idea? A campaign you&rsquo;ve been dreaming up?
              Pixel is ready to help you brainstorm, plan, and bring it to
              life.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70">
              Pixel is more than a chatbot. Trained on the Aura Pixel way,
              it&rsquo;s built to think creatively, respond instantly, and turn
              your ideas into actionable next steps. Whether you need a quick
              brief, a content concept, or a strategy starter — Pixel is on the
              clock, anytime you are.
            </p>

            <p className="mt-10 text-xs uppercase tracking-[0.24em] text-white/55">
              What Pixel Can Do
            </p>
            <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-3">
              {CAPABILITIES.map(({ Icon, title, body }) => (
                <li
                  key={title}
                  className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-primary ring-1 ring-inset ring-primary/30">
                    <Icon className="h-4 w-4" strokeWidth={1.75} />
                  </div>
                  <p className="text-sm font-semibold text-white">{title}</p>
                  <p className="text-sm leading-relaxed text-white/65">
                    {body}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Pixel mock + CTA */}
          <div
            data-cursor="big"
            className="flex flex-col items-center gap-6 lg:col-span-5"
          >
            <PixelMock reduce={reduce} onOpen={open} size="large" />
            <RippleButton
              onClick={open}
              className="mt-2 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-primary/85"
            >
              Talk to Pixel
              <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
            </RippleButton>
            <p className="text-center text-[11px] uppercase tracking-[0.18em] text-white/55">
              Always on. Always learning. Always free to chat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
