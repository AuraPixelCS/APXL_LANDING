import { ArrowDownRight } from "lucide-react";

function Row({ text }: { text: string }) {
  return (
    <div className="flex shrink-0 items-center gap-8 pr-8 md:gap-12 md:pr-12">
      <span className="font-bungee text-white">{text}</span>
      <ArrowDownRight
        strokeWidth={1.5}
        className="h-[0.6em] w-[0.6em] shrink-0 text-white/85"
      />
      <span className="font-bungee-outline text-primary">{text}</span>
      <ArrowDownRight
        strokeWidth={1.5}
        className="h-[0.6em] w-[0.6em] shrink-0 text-primary"
      />
      <span className="font-bungee text-white">{text}</span>
      <ArrowDownRight
        strokeWidth={1.5}
        className="h-[0.6em] w-[0.6em] shrink-0 text-white/85"
      />
      <span className="font-bungee-outline text-primary">{text}</span>
      <ArrowDownRight
        strokeWidth={1.5}
        className="h-[0.6em] w-[0.6em] shrink-0 text-primary"
      />
    </div>
  );
}

export default function SectionMarquee({ text }: { text: string }) {
  return (
    <div
      data-cursor="big"
      className="relative mb-20 shrink-0 overflow-hidden bg-black lg:mb-28"
    >
      <div className="flex w-max whitespace-nowrap text-[clamp(3rem,10vw,8rem)] uppercase leading-[0.95] animate-marquee">
        <Row text={text} />
        <Row text={text} />
      </div>
    </div>
  );
}
