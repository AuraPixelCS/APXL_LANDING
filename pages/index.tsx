import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
// import Portfolio from "@/components/sections/Portfolio";
import SectionMarquee from "@/components/SectionMarquee";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import TrustedBy from "@/components/sections/TrustedBy";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Aura Pixel — We Don&apos;t Follow Trends. We Build Them.</title>
        <meta
          name="description"
          content="Aura Pixel — Where Creativity Meets Strategy. A next-generation creative and marketing studio in Kuala Lumpur."
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
        {/* <Portfolio /> */}
        <div className="-mb-20 lg:-mb-28">
          <SectionMarquee text="What We Offer" />
        </div>
        <Services />
        <div className="-mt-24 lg:-mt-32">
          <Testimonials />
        </div>
        <TrustedBy />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
