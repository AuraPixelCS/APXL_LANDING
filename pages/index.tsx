import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import ProofBar from "@/components/sections/ProofBar";
import Problem from "@/components/sections/Problem";
import Services from "@/components/sections/Services";
import Proof from "@/components/sections/Proof";
import OurWork from "@/components/sections/OurWork";
import HowItWorks from "@/components/sections/HowItWorks";
import Pricing from "@/components/sections/Pricing";
import LeadForm from "@/components/sections/LeadForm";
import ClosingCTA from "@/components/sections/ClosingCTA";

const TITLE = "AuraPixel — Lead generation for Klang Valley businesses";
const DESCRIPTION =
  "Your group is 25 years old. The new brand is 25 days old — no website, no audience, no pipeline. AuraPixel launches new brands for established Malaysian companies: website, brand and lead-generating campaigns, in weeks.";
const SITE_URL = "https://aurapixel.live";

export default function Home() {
  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={SITE_URL} />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="AuraPixel" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:image" content={`${SITE_URL}/ap-logo.png`} />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content={`${SITE_URL}/ap-logo.png`} />
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
        {/* Page order per Homepage Spec §2:
            Hero → Proof bar → Problem → Services → Proof / Our work →
            How it works → Pricing → Lead form → Closing CTA → Footer.
            Every CTA above the form scrolls to #lead-form. */}
        <Hero />
        <ProofBar />
        <Problem />
        <Services />
        <Proof />
        <OurWork />
        <HowItWorks />
        <Pricing />
        <LeadForm />
        <ClosingCTA />
      </main>
      <Footer />
    </>
  );
}
