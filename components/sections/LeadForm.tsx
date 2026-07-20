"use client";
import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, ChevronDown, Loader2 } from "lucide-react";
import { RippleButton } from "@/components/ui/ripple-button";

// Homepage Spec §8 — the primary conversion. Six fields, no more.
const NEED_OPTIONS = ["Leads", "Podcast", "Website", "Event", "Not sure"];
const BUDGET_OPTIONS = ["Under RM 5k", "RM 5–10k", "RM 10–15k", "RM 15k+"];

type Status = "idle" | "submitting" | "success" | "error";

const fieldClass =
  "w-full rounded-xl border border-white/15 bg-white/[0.03] px-4 py-3 text-[15px] text-white placeholder-white/40 outline-none transition focus:border-primary focus:ring-1 focus:ring-primary";
const labelClass =
  "mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-white/60";

export default function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: data.get("name"),
      company: data.get("company"),
      email: data.get("email"),
      phone: data.get("phone"),
      need: data.get("need"),
      budget: data.get("budget"),
      company_url: data.get("company_url"), // honeypot
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };
      if (!res.ok || !json.ok) {
        throw new Error(json.error || "Something went wrong. Please try again.");
      }
      // Conversion event — GA4 / GTM. No-op if no analytics is loaded.
      const w = window as unknown as {
        dataLayer?: Array<Record<string, unknown>>;
      };
      w.dataLayer = w.dataLayer || [];
      w.dataLayer.push({ event: "lead_submit", form: "homepage_lead" });
      setStatus("success");
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  return (
    <section
      id="lead-form"
      className="relative scroll-mt-24 py-24 lg:scroll-mt-28 lg:py-32"
    >
      <div className="mx-auto w-full max-w-3xl px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl">
            Tell us what you&rsquo;re working with.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/70">
            We&rsquo;ll come back within one working day with a straight answer
            on whether we can help.
          </p>
        </div>

        {status === "success" ? (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-xl rounded-2xl border border-primary/30 bg-primary/[0.06] p-8 text-center sm:p-10"
          >
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 text-primary ring-1 ring-inset ring-primary/30">
              <CheckCircle2 className="h-6 w-6" strokeWidth={1.75} />
            </div>
            <h3 className="mt-5 text-2xl font-bold text-white">
              Thanks — we&rsquo;ve got it.
            </h3>
            <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-white/70">
              We&rsquo;ll come back within one working day. If it&rsquo;s urgent,
              email{" "}
              <a
                href="mailto:info@aurapixel.live"
                className="text-primary hover:underline"
              >
                info@aurapixel.live
              </a>{" "}
              or WhatsApp +6010-284 1290.
            </p>
          </motion.div>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm sm:p-8"
          >
            {/* Honeypot — hidden from users and AT; bots fill it. */}
            <div
              aria-hidden
              className="pointer-events-none absolute left-[-9999px] top-[-9999px] h-0 w-0 overflow-hidden"
            >
              <label>
                Company URL
                <input
                  type="text"
                  name="company_url"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </label>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="lf-name" className={labelClass}>
                  Name
                </label>
                <input
                  id="lf-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Your name"
                  className={fieldClass}
                />
              </div>
              <div>
                <label htmlFor="lf-company" className={labelClass}>
                  Company
                </label>
                <input
                  id="lf-company"
                  name="company"
                  type="text"
                  required
                  autoComplete="organization"
                  placeholder="Company name"
                  className={fieldClass}
                />
              </div>
              <div>
                <label htmlFor="lf-email" className={labelClass}>
                  Work email
                </label>
                <input
                  id="lf-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  inputMode="email"
                  placeholder="you@company.com"
                  className={fieldClass}
                />
              </div>
              <div>
                <label htmlFor="lf-phone" className={labelClass}>
                  Phone / WhatsApp
                </label>
                <input
                  id="lf-phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  inputMode="tel"
                  placeholder="+60…"
                  className={fieldClass}
                />
              </div>
              <div>
                <label htmlFor="lf-need" className={labelClass}>
                  What do you need?
                </label>
                <div className="relative">
                  <select
                    id="lf-need"
                    name="need"
                    required
                    defaultValue=""
                    className={`${fieldClass} appearance-none pr-10`}
                  >
                    <option value="" disabled>
                      Select one
                    </option>
                    {NEED_OPTIONS.map((o) => (
                      <option key={o} value={o} className="bg-[#0a0a0a]">
                        {o}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    aria-hidden
                    className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="lf-budget" className={labelClass}>
                  Monthly budget
                </label>
                <div className="relative">
                  <select
                    id="lf-budget"
                    name="budget"
                    required
                    defaultValue=""
                    className={`${fieldClass} appearance-none pr-10`}
                  >
                    <option value="" disabled>
                      Select one
                    </option>
                    {BUDGET_OPTIONS.map((o) => (
                      <option key={o} value={o} className="bg-[#0a0a0a]">
                        {o}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    aria-hidden
                    className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40"
                  />
                </div>
              </div>
            </div>

            {status === "error" && (
              <p
                role="alert"
                className="mt-5 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300"
              >
                {error}
              </p>
            )}

            <div className="mt-7 flex flex-col items-center gap-4">
              <RippleButton
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-black transition hover:bg-primary/85 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" strokeWidth={2} />
                    Sending…
                  </>
                ) : (
                  <>
                    Send
                    <ArrowRight className="h-4 w-4" strokeWidth={2} />
                  </>
                )}
              </RippleButton>
              <p className="text-center text-xs text-white/45">
                No pitch deck spam. If we&rsquo;re not a fit, we&rsquo;ll say so.
              </p>
            </div>

            {/* PDPA notice — collecting names, emails and phone numbers. */}
            <p className="mt-6 text-center text-[11px] leading-relaxed text-white/40">
              By submitting, you agree that AuraPixel may contact you about your
              enquiry. We store your details only to respond to you, never sell
              or share them, and you can ask us to delete them at any time. See
              our{" "}
              <a href="#" className="underline hover:text-white/70">
                Privacy Policy
              </a>
              .
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
