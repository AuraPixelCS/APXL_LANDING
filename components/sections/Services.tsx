import Image from "next/image";
import { useEffect, useRef, type MouseEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { RippleButton } from "@/components/ui/ripple-button";

const services = [
  { title: "Digital Marketing Solution", image: "/digitalmarketing.jpg" },
  { title: "Podcast Content Creator", image: "/podcaststudio.jpeg" },
  { title: "Content Digitalization", image: "/contentdigitalization.jpeg" },
  { title: "Event Management", image: "/eventmanagement.jpeg" },
];

type Service = (typeof services)[number];

function ServiceRow({ service, index }: { service: Service; index: number }) {
  const rowRef = useRef<HTMLLIElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  const stopTick = () => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  };

  const startTick = () => {
    if (rafRef.current !== null) return;
    const tick = () => {
      current.current.x += (target.current.x - current.current.x) * 0.18;
      current.current.y += (target.current.y - current.current.y) * 0.18;
      if (thumbRef.current) {
        thumbRef.current.style.transform = `translate(${current.current.x}px, ${current.current.y}px) translate(-50%, -50%) rotate(-4deg)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
  };

  useEffect(() => stopTick, []);

  const handleEnter = (e: MouseEvent<HTMLLIElement>) => {
    const row = rowRef.current;
    if (!row) return;
    const rect = row.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.current = { x, y };
    current.current = { x, y };
    if (thumbRef.current) {
      thumbRef.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%) rotate(-4deg)`;
    }
    startTick();
  };

  const handleMove = (e: MouseEvent<HTMLLIElement>) => {
    const row = rowRef.current;
    if (!row) return;
    const rect = row.getBoundingClientRect();
    target.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const handleLeave = () => stopTick();

  return (
    <li
      ref={rowRef}
      onMouseEnter={handleEnter}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="group relative isolate border-b border-white/10 first:border-t first:border-white/10"
    >
      <a
        href="#contact"
        className="relative z-10 flex items-center gap-5 py-7 lg:gap-8 lg:py-9"
      >
        <span className="inline-flex shrink-0 items-center rounded-full border border-white/20 px-3 py-1.5 font-mono text-[11px] text-white/55 transition group-hover:border-primary group-hover:text-primary">
          0{index + 1}
        </span>
        <h3 className="flex-1 text-3xl font-extrabold uppercase leading-[1.05] tracking-tight text-white/15 transition-colors duration-300 group-hover:text-primary lg:text-[2.6rem] xl:text-5xl">
          {service.title}
        </h3>
      </a>

      {/* Cursor-following thumb — sits behind the title, follows the pointer */}
      <div
        ref={thumbRef}
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 z-0 hidden h-36 w-56 overflow-hidden rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100 lg:block xl:h-44 xl:w-72"
        style={{ willChange: "transform" }}
      >
        <Image
          src={service.image}
          alt=""
          fill
          sizes="200px"
          className="object-cover"
        />
      </div>
    </li>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      data-cursor="default"
      className="relative py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left — section intro */}
          <div>
            <h2 className="text-4xl font-extrabold uppercase leading-[1.04] tracking-tight text-white sm:text-5xl lg:text-6xl">
              What We Do Best.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/70">
              Four specialisms. One unstoppable studio. Whether you need to
              dominate social media, launch a podcast, digitalize content, or
              throw a brand-defining event — Aura Pixel has you covered.
              End-to-end. No excuses.
            </p>
            <RippleButton
              href="#contact"
              className="mt-10 inline-flex items-center gap-3 rounded-full border border-white/20 px-7 py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-white transition hover:border-primary hover:text-primary"
            >
              Get a Free Consultation
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
            </RippleButton>
          </div>

          {/* Right — numbered service list with cursor-tracked thumbs */}
          <ul className="relative flex flex-col self-start">
            {services.map((s, i) => (
              <ServiceRow key={s.title} service={s} index={i} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
