import { Brain, Smile, Users, TrendingUp } from "lucide-react";
import ScanLine from "@/components/ScanLine";

type Feature = {
  Icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  body: string;
};

const FEATURES: Feature[] = [
  {
    Icon: Brain,
    title: "Deep Audience Intelligence",
    body: "AI analysis of audience behavior and preferences across digital touchpoints.",
  },
  {
    Icon: Smile,
    title: "Sentiment Analysis",
    body: "Real-time emotion tracking and brand perception monitoring via NLP.",
  },
  {
    Icon: Users,
    title: "Demographic Clusters",
    body: "Advanced segmentation and profiling based on behavioral and psychographic data.",
  },
  {
    Icon: TrendingUp,
    title: "Engagement Patterns",
    body: "Content resonance analysis identifying high-performing formats and optimal timing.",
  },
];

export default function AIAnalytics() {
  return (
    <section id="ai-analytics" className="relative overflow-hidden py-24 lg:py-32">
      <ScanLine className="top-0" />

      <div className="mx-auto w-full max-w-7xl px-6 lg:px-16">
        <div className="mb-12 max-w-3xl lg:mb-16">
          <p className="text-xs uppercase tracking-[0.24em] text-primary">
            AI Analytics
          </p>
          <h2 className="mt-3 text-3xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-5xl">
            Every Dollar Spent. Every Result Earned.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white sm:text-lg">
            We don&rsquo;t believe in guesswork. We believe in growth you can
            measure.
          </p>
          <p className="mt-4 text-base leading-relaxed text-white/70">
            At Aura Pixel, every campaign runs on AI analytics — built to decode
            your audience, sharpen your strategy, and prove your ROI. From
            behavior patterns to brand sentiment, we turn raw data into real
            decisions. So every dollar you invest doesn&rsquo;t just get spent
            — it gets to work.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4 xl:gap-6">
          {FEATURES.map(({ Icon, title, body }) => (
            <div
              key={title}
              data-cursor="medium"
              className="group flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-white/[0.05]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary ring-1 ring-inset ring-primary/30">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <h3 className="text-base font-semibold leading-tight text-white">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-white/65">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
