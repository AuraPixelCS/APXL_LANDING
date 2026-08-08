import Head from "next/head";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/**
 * Custom 404. Pages Router serves this for any unmatched path, so it also
 * catches typos under our proxied sub-apps (/pxlchat, /thegrowthstorymy,
 * /rsvp) whenever the rewrite itself doesn't match — hence the shortcuts out.
 *
 * Statically generated: no getStaticProps/getInitialProps here, or Next drops
 * it from the static optimisation that lets this page render off the CDN.
 */

// Same grid wash as the homepage <main> and the legal pages, so a wrong URL
// still lands the visitor somewhere that reads as our site.
const GRID_BG = {
  backgroundColor: "#000",
  backgroundImage:
    "linear-gradient(to right, rgba(61,155,245,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(61,155,245,0.06) 1px, transparent 1px)",
  backgroundSize: "64px 64px",
} as const;

const DESTINATIONS = [
  { href: "/#services", label: "Services", note: "What we build" },
  { href: "/#work", label: "Our work", note: "Recent projects" },
  { href: "/pxlchat", label: "PXL Chat", note: "Our AI chat platform" },
  { href: "/thegrowthstorymy", label: "The Growth Story MY", note: "The podcast" },
];

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Page not found — AuraPixel</title>
        <meta
          name="description"
          content="That page doesn't exist. Head back to aurapixel.live or jump straight to what you were looking for."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* A 404 must never be indexed, and must not be treated as canonical. */}
        <meta name="robots" content="noindex, follow" />
      </Head>

      <Navbar />

      <main className="relative text-white" style={GRID_BG}>
        <section className="relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-primary/20 blur-[120px]"
          />

          <div className="relative mx-auto w-full max-w-4xl px-6 pb-24 pt-32 lg:px-8 lg:pb-32 lg:pt-40">
            <p className="font-bungee-outline text-[clamp(4.5rem,18vw,11rem)] leading-[0.9] tracking-tight text-primary">
              404
            </p>

            <h1 className="mt-6 font-bungee text-[clamp(1.6rem,5.2vw,2.75rem)] uppercase leading-[1.06] tracking-tight text-white">
              This page doesn&rsquo;t exist
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/60">
              The link may be out of date, or the address might have a typo in
              it. Nothing&rsquo;s broken on your end — let&rsquo;s get you back
              on track.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="/"
                data-cursor="medium"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-primary/85"
              >
                <ArrowLeft className="h-4 w-4" strokeWidth={2} />
                Back to home
              </Link>
              <Link
                href="/#lead-form"
                data-cursor="medium"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-primary hover:text-primary"
              >
                Get in touch
              </Link>
            </div>

            <div className="mt-14 border-t border-white/10 pt-8">
              <p className="mb-5 text-xs uppercase tracking-[0.24em] text-white/55">
                Or try one of these
              </p>
              <ul className="grid gap-3 sm:grid-cols-2">
                {DESTINATIONS.map(({ href, label, note }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      data-cursor="medium"
                      className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4 transition hover:border-primary/40 hover:bg-white/[0.04]"
                    >
                      <span>
                        <span className="block text-sm font-semibold text-white transition-colors group-hover:text-primary">
                          {label}
                        </span>
                        <span className="mt-0.5 block text-xs text-white/50">
                          {note}
                        </span>
                      </span>
                      <ArrowUpRight
                        className="h-4 w-4 shrink-0 text-white/35 transition-colors group-hover:text-primary"
                        strokeWidth={2}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
