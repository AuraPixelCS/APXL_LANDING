export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 lg:py-32"
    >
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.24em] text-white/55">
              Our Story
            </p>
            <h3 className="mt-3 text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
              &ldquo;It started with a dream, a camera, and an obsession with
              stories that matter.&rdquo;
            </h3>
          </div>
          <div className="lg:col-span-7">
            <p className="text-base leading-relaxed text-white/70">
              Aura Pixel didn&rsquo;t start in a boardroom. We&rsquo;re a
              creative and marketing studio built to help brands connect with
              real people, leave lasting impressions, and turn culture into
              currency.
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              We believe great marketing is never accidental. It&rsquo;s the
              result of bold ideas, relentless craft, and a deep understanding
              of culture, community, and technology. That&rsquo;s the Aura
              Pixel way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
