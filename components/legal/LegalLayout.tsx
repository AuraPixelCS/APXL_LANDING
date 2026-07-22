import Head from "next/head";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowLeft, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SITE_URL = "https://aurapixel.live";

/** Same grid wash as the homepage <main> so legal pages sit in the same world. */
const GRID_BG = {
  backgroundColor: "#000",
  backgroundImage:
    "linear-gradient(to right, rgba(61,155,245,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(61,155,245,0.06) 1px, transparent 1px)",
  backgroundSize: "64px 64px",
} as const;

export type LegalSection = { id: string; title: string };

/**
 * Placeholder for a value AuraPixel still has to supply (registration number,
 * registered address). Deliberately loud — these must not reach production
 * unfilled, so they are styled to be impossible to miss on the page.
 */
export function Fill({ children }: { children: ReactNode }) {
  return (
    <mark className="rounded bg-amber-400/20 px-1.5 py-0.5 font-mono text-[0.85em] text-amber-200 ring-1 ring-amber-400/40">
      {children}
    </mark>
  );
}

export function H2({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h2
      id={id}
      className="scroll-mt-28 border-b border-white/10 pb-3 pt-12 text-xl font-bold tracking-tight text-white first:pt-0 sm:text-2xl"
    >
      {children}
    </h2>
  );
}

export function H3({ children }: { children: ReactNode }) {
  return (
    <h3 className="mt-7 text-base font-semibold text-white sm:text-lg">
      {children}
    </h3>
  );
}

export function P({ children }: { children: ReactNode }) {
  return (
    <p className="mt-4 text-base leading-relaxed text-white/70">{children}</p>
  );
}

export function UL({ children }: { children: ReactNode }) {
  return (
    <ul className="mt-4 space-y-2.5 text-base leading-relaxed text-white/70">
      {children}
    </ul>
  );
}

export function LI({ children }: { children: ReactNode }) {
  return (
    <li className="relative pl-5 before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary/70">
      {children}
    </li>
  );
}

/**
 * Reference table — used for purposes, retention and processors.
 *
 * Below `sm` this renders as stacked cards rather than a scrolling table.
 * A horizontally scrolling table on a phone silently hides the second column,
 * which on a legal page means the retention period or the lawful basis simply
 * looks absent — so the table shape is dropped entirely at that width.
 */
export function Table({
  head,
  rows,
}: {
  head: [string, string] | [string, string, string];
  rows: (readonly [ReactNode, ReactNode] | readonly [ReactNode, ReactNode, ReactNode])[];
}) {
  return (
    <>
      {/* Phone: one card per row, every column labelled and fully visible */}
      <div className="mt-5 space-y-3 sm:hidden">
        {rows.map((row, i) => (
          <div
            key={i}
            className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
          >
            <p className="text-base font-medium leading-relaxed text-white/90">
              {row[0]}
            </p>
            {row.slice(1).map((cell, j) => (
              <div key={j} className="mt-3 border-t border-white/10 pt-3">
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/40">
                  {head[j + 1]}
                </p>
                <p className="text-[15px] leading-relaxed text-white/65">
                  {cell}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* sm and up: real table */}
      <div className="mt-5 hidden overflow-x-auto rounded-xl border border-white/10 sm:block">
        <table
          className={`w-full border-collapse text-left text-sm ${
            head.length === 3 ? "min-w-[520px]" : ""
          }`}
        >
          <thead>
            <tr className="bg-white/[0.06]">
              {head.map((h) => (
                <th
                  key={h}
                  className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white/80"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="border-t border-white/10">
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className={`px-4 py-3 align-top leading-relaxed ${
                      j === 0 ? "font-medium text-white/90" : "text-white/65"
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

/** Highlighted aside — used for the statutory notes and the BM notice. */
export function Callout({
  title,
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <div className="mt-6 rounded-2xl border border-primary/25 bg-primary/[0.07] p-5 backdrop-blur-sm">
      {title && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
          {title}
        </p>
      )}
      <div className="text-base leading-relaxed text-white/75">{children}</div>
    </div>
  );
}

export default function LegalLayout({
  title,
  metaTitle,
  description,
  path,
  updated,
  intro,
  sections,
  children,
}: {
  title: string;
  metaTitle: string;
  description: string;
  path: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
  children: ReactNode;
}) {
  const url = `${SITE_URL}${path}`;

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={url} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="AuraPixel" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={`${SITE_URL}/ap-logo.png`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Navbar />

      <main className="relative text-white" style={GRID_BG}>
        {/* Header */}
        <section className="relative overflow-hidden border-b border-white/10">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[120px]"
          />
          <div className="relative mx-auto w-full max-w-4xl px-6 pb-14 pt-32 lg:px-8 lg:pb-20 lg:pt-40">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-white/50 transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-3.5 w-3.5" strokeWidth={2} />
              Back to home
            </Link>
            <h1 className="mt-6 font-bungee text-[clamp(1.9rem,6.4vw,3.25rem)] uppercase leading-[1.06] tracking-tight text-white">
              {title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/60">
              {intro}
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.16em] text-white/40">
              Last updated {updated}
            </p>
          </div>
        </section>

        {/* Body */}
        <div className="mx-auto w-full max-w-6xl px-6 py-14 lg:px-8 lg:py-20">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12">
            {/* Contents rail (desktop) */}
            <aside className="hidden lg:col-span-4 lg:block xl:col-span-3">
              <nav
                aria-label="On this page"
                className="sticky top-28 rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-sm"
              >
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45">
                  On this page
                </p>
                <ol className="space-y-2 text-sm">
                  {sections.map((s, i) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="flex gap-2.5 text-white/55 transition-colors hover:text-primary"
                      >
                        <span className="font-mono text-[11px] leading-5 text-white/30">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="leading-5">{s.title}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </aside>

            {/* Content */}
            <article className="lg:col-span-8 xl:col-span-9">
              {/* Phone/tablet contents — the desktop rail is hidden below lg,
                  and these documents run to a dozen screens on a phone, so
                  without this there is no way to reach a section directly. */}
              <details className="group mb-6 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm lg:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55 [&::-webkit-details-marker]:hidden">
                  On this page
                  <ChevronDown
                    className="h-4 w-4 shrink-0 text-white/40 transition-transform duration-300 group-open:rotate-180"
                    strokeWidth={2}
                  />
                </summary>
                <ol className="space-y-1 px-3 pb-3">
                  {sections.map((s, i) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="flex min-h-11 items-center gap-3 rounded-lg px-2 text-[15px] text-white/60 transition-colors hover:text-primary"
                      >
                        <span className="font-mono text-[11px] text-white/30">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span>{s.title}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </details>

              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm sm:p-9">
                {children}
              </div>

              <p className="mt-8 text-sm text-white/45">
                Questions about this page?{" "}
                <a
                  href="mailto:privacy@aurapixel.live"
                  className="text-primary transition hover:text-primary/80"
                >
                  privacy@aurapixel.live
                </a>
              </p>
            </article>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
