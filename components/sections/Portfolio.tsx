import Image from "next/image";
import SectionMarquee from "@/components/SectionMarquee";

const projects = [
  {
    name: "Brand Launch Campaign",
    category: "Digital Marketing",
    description: "Multi-channel launch that tripled brand awareness in 30 days.",
    image: "/portfolio/01.jpg",
  },
  {
    name: "Influencer Activation",
    category: "Influencer Marketing",
    description:
      "Twelve-creator campaign engineered around an authentic story arc.",
    image: "/portfolio/02.jpg",
  },
  {
    name: "Flagship Podcast Series",
    category: "Podcast Studio",
    description: "Studio-built series, weekly drops, full distribution stack.",
    image: "/portfolio/03.jpg",
  },
  {
    name: "Catalog Digitalization",
    category: "Content Digitalization",
    description: "Print archive transformed into an interactive digital lookbook.",
    image: "/portfolio/04.jpg",
  },
  {
    name: "Product Launch Event",
    category: "Events",
    description: "Hybrid launch with live stream and on-site activations.",
    image: "/portfolio/05.jpg",
  },
  {
    name: "Always-On Social Strategy",
    category: "Digital Marketing",
    description: "Daily content engine across IG, TikTok, and LinkedIn.",
    image: "/portfolio/06.jpg",
  },
  {
    name: "Brand Identity Refresh",
    category: "Digital Marketing",
    description: "Complete visual rebuild and rollout across every touchpoint.",
    image: "/portfolio/07.jpg",
  },
  {
    name: "Creator Collab Series",
    category: "Influencer Marketing",
    description: "Long-form creator series shot across three regional markets.",
    image: "/portfolio/08.jpg",
  },
  {
    name: "Brand Anthem Spot",
    category: "Events",
    description: "Cinematic 90-second hero film with venue activations.",
    image: "/portfolio/09.jpg",
  },
  {
    name: "Annual Report Reimagined",
    category: "Content Digitalization",
    description:
      "Static annual transformed into an immersive scrollytelling experience.",
    image: "/portfolio/10.jpg",
  },
  {
    name: "Tastemaker Podcast",
    category: "Podcast Studio",
    description: "Interview-driven series produced end-to-end and distributed.",
    image: "/portfolio/11.jpg",
  },
  {
    name: "Festival Brand Activation",
    category: "Events",
    description: "Headline-sponsor brand activation across a three-day run.",
    image: "/portfolio/12.jpg",
  },
];

export default function Portfolio() {
  return (
    <section id="work" className="relative py-24 lg:py-32">
      <SectionMarquee text="Our Work" />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
        {projects.map((p) => (
          <article
            key={p.name}
            tabIndex={0}
            className="group relative aspect-square overflow-hidden bg-black outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary"
          >
            <Image
              src={p.image}
              alt={p.name}
              fill
              sizes="(min-width:1024px) 25vw, (min-width:640px) 33vw, 50vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 flex flex-col justify-end gap-2 bg-black/70 p-6 opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100 group-active:opacity-100 lg:p-8">
              <p className="text-[10px] uppercase tracking-[0.2em] text-primary">
                {p.category}
              </p>
              <h3 className="text-xl font-bold leading-tight text-white lg:text-2xl">
                {p.name}
              </h3>
              <p className="text-sm leading-relaxed text-white/80">
                {p.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
