import SectionMarquee from "@/components/SectionMarquee";

export default function About() {
  return (
    <section id="about" className="relative">
      <SectionMarquee text="Who We Are" />

      <div className="mx-auto w-full max-w-7xl px-6 pb-24 text-center lg:px-16 lg:pb-32">
        <p className="text-xs uppercase tracking-[0.32em] text-primary">
          Our Story
        </p>

        <h2 className="mx-auto mt-6 max-w-4xl text-3xl font-bold leading-[1.15] text-white sm:text-4xl lg:text-5xl">
          &ldquo;It started with a dream, a camera, and an obsession with
          stories that matter.&rdquo;
        </h2>

        <div className="mx-auto mt-10 max-w-3xl space-y-5 text-left lg:mt-12">
          <p className="text-base leading-relaxed text-white/70 lg:text-lg">
            Aura Pixel didn&rsquo;t start in a boardroom. We&rsquo;re a
            creative and marketing studio built to help brands connect with
            real people, leave lasting impressions, and turn culture into
            currency.
          </p>
          <p className="text-base leading-relaxed text-white/70 lg:text-lg">
            We believe great marketing is never accidental. It&rsquo;s the
            result of bold ideas, relentless craft, and a deep understanding
            of culture, community, and technology. That&rsquo;s the Aura
            Pixel way.
          </p>
        </div>
      </div>
    </section>
  );
}
