import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import VisionMission from "@/components/sections/VisionMission";
import WhyUs from "@/components/sections/WhyUs";
// import Portfolio from "@/components/sections/Portfolio";
import SectionMarquee from "@/components/SectionMarquee";
import Services from "@/components/sections/Services";
import AIAnalytics from "@/components/sections/AIAnalytics";
import Testimonials from "@/components/sections/Testimonials";
import MeetPixel from "@/components/sections/MeetPixel";
import ClosingCTA from "@/components/sections/ClosingCTA";

export default function Home() {
  return (
    <>
      <Head>
        <title>Aura Pixel — Born from Passion. Built for Impact.</title>
        <meta
          name="description"
          content="Aura Pixel — A next-generation creative and marketing studio in Kuala Lumpur, helping brands cut through the noise and stay there."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />
      <main
        className="text-white"
        style={{
          backgroundColor: "#000",
          backgroundImage:
            "linear-gradient(to right, rgba(61,155,245,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(61,155,245,0.06) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      >
        <Hero />
        <About />
        <VisionMission />
        <WhyUs />
        {/* <Portfolio /> */}
        <div className="-mb-20 lg:-mb-28">
          <SectionMarquee text="What We Offer" />
        </div>
        <Services />
        <AIAnalytics />
        <div className="-mt-24 lg:-mt-32">
          <Testimonials />
        </div>
        <MeetPixel />
        <ClosingCTA />
      </main>
      <Footer />
    </>
  );
}
