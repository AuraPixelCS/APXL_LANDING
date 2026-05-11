import SectionMarquee from "@/components/SectionMarquee";
import TiltedCard from "@/components/TiltedCard";

export default function About() {
  return (
    <>
      {/* About — viewport-locked: marquee + Story + Mission/Vision */}
      <section
        id="about"
        className="relative flex min-h-[100svh] flex-col"
      >
        <SectionMarquee text="Why Us" />

        <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center gap-10 px-6 pb-10 lg:gap-14 lg:px-16 lg:pb-14">
          {/* Our Story */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <p className="text-xs uppercase tracking-[0.24em] text-white/55">
                Our Story
              </p>
              <h3 className="mt-3 text-2xl font-bold leading-tight text-white sm:text-3xl">
                &ldquo;Born from Passion. Built for Impact.&rdquo;
              </h3>
            </div>
            <div className="lg:col-span-7">
              <p className="text-base leading-relaxed text-white/70">
                Aura Pixel didn&rsquo;t start in a boardroom — it started with a
                dream, a camera, and an obsession with telling stories that
                matter. We&rsquo;re a next-generation creative and marketing
                studio that exists to help brands cut through the noise, connect
                with real people, and leave a lasting impression.
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/70">
                We believe great marketing is never accidental. It&rsquo;s the
                result of bold ideas, relentless craft, and a deep understanding
                of culture, community, and technology. That&rsquo;s the Aura
                Pixel way.
              </p>
            </div>
          </div>

          {/* Mission + Vision — tilted cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            <TiltedCard
              imageSrc="/mission.jpg"
              altText="Our Mission"
              containerHeight="440px"
              containerWidth="100%"
              imageHeight="440px"
              imageWidth="100%"
              rotateAmplitude={10}
              scaleOnHover={1.04}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent
              overlayContent={
                <div className="flex h-full w-full flex-col justify-end gap-3 rounded-[15px] bg-gradient-to-t from-black/95 via-black/55 to-black/20 p-7 ring-1 ring-inset ring-white/10 lg:p-8">
                  <p className="text-xs uppercase tracking-[0.24em] text-primary">
                    Our Mission
                  </p>
                  <p className="text-xs uppercase tracking-[0.18em] text-white/55">
                    What Drives Us
                  </p>
                  <h3 className="text-xl font-bold leading-tight text-white lg:text-2xl">
                    &ldquo;To Amplify Brands. Inspire Audiences. Shape Culture.&rdquo;
                  </h3>
                  <p className="text-sm leading-relaxed text-white/80">
                    Take your brand from invisible to unmissable. Creative
                    excellence with strategic precision — identities that
                    resonate, campaigns that convert.
                  </p>
                </div>
              }
            />

            <TiltedCard
              imageSrc="/vision.jpg"
              altText="Our Vision"
              containerHeight="440px"
              containerWidth="100%"
              imageHeight="440px"
              imageWidth="100%"
              rotateAmplitude={10}
              scaleOnHover={1.04}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent
              overlayContent={
                <div className="flex h-full w-full flex-col justify-end gap-3 rounded-[15px] bg-gradient-to-t from-[#0a1f3d]/95 via-[#0a1f3d]/55 to-transparent p-7 ring-1 ring-inset ring-primary/25 lg:p-8">
                  <p className="text-xs uppercase tracking-[0.24em] text-primary">
                    Our Vision
                  </p>
                  <p className="text-xs uppercase tracking-[0.18em] text-white/55">
                    Where We&rsquo;re Headed
                  </p>
                  <h3 className="text-xl font-bold leading-tight text-white lg:text-2xl">
                    Southeast Asia&rsquo;s most fearless creative studio.
                  </h3>
                  <p className="text-sm leading-relaxed text-white/80">
                    Where every brand we touch becomes a cultural force.
                  </p>
                </div>
              }
            />
          </div>
        </div>
      </section>

    </>
  );
}
