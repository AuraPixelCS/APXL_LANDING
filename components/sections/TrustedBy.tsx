import Image from "next/image";

const partners = [
  {
    src: "/po.png",
    alt: "Po",
    width: 7321,
    height: 4224,
    sizeClass: "h-24 lg:h-36",
  },
  {
    src: "/px.png",
    alt: "Px",
    width: 928,
    height: 271,
    sizeClass: "h-16 lg:h-20",
  },
  {
    src: "/people.png",
    alt: "People",
    width: 3615,
    height: 959,
    sizeClass: "h-16 lg:h-20",
  },
];

export default function TrustedBy() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 lg:gap-16 lg:px-16">
        <p className="flex items-center gap-4 text-[11px] uppercase tracking-[0.32em] text-white/55">
          <span aria-hidden className="h-px w-12 bg-white/15" />
          Trusted By
          <span aria-hidden className="h-px w-12 bg-white/15" />
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-12 lg:gap-x-24 xl:gap-x-32">
          {partners.map((p) => (
            <Image
              key={p.src}
              src={p.src}
              alt={p.alt}
              width={p.width}
              height={p.height}
              className={`w-auto transition-transform duration-300 hover:scale-[1.04] ${p.sizeClass}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
