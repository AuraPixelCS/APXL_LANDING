import TiltedCard from "@/components/TiltedCard";
import ScanLine from "@/components/ScanLine";

export default function VisionMission() {
  return (
    <section
      id="direction"
      className="relative overflow-hidden py-24 lg:py-32"
    >
      <ScanLine className="top-0" />

      <div className="mx-auto w-full max-w-7xl px-6 lg:px-16">
        <div className="mb-12 max-w-3xl lg:mb-16">
          <p className="text-xs uppercase tracking-[0.24em] text-primary">
            Our Direction
          </p>
          <h2 className="mt-3 text-3xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-5xl">
            Where We&rsquo;re Going. Why We&rsquo;re Here.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          <TiltedCard
            imageSrc="/mission.jpg"
            altText="Our Mission"
            containerHeight="480px"
            containerWidth="100%"
            imageHeight="480px"
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
                  Powerful storytelling that drives real impact.
                </h3>
                <p className="text-sm leading-relaxed text-white/80">
                  To empower brands, creators, and communities through powerful
                  storytelling — blending culture, creativity, and technology
                  into work that drives real impact.
                </p>
              </div>
            }
          />

          <TiltedCard
            imageSrc="/vision.jpg"
            altText="Our Vision"
            containerHeight="480px"
            containerWidth="100%"
            imageHeight="480px"
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
                  Southeast Asia&rsquo;s most trusted creative studio.
                </h3>
                <p className="text-sm leading-relaxed text-white/80">
                  The partner brands turn to when they want to be seen, heard,
                  and remembered.
                </p>
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
}
