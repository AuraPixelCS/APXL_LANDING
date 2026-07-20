import type { NextApiRequest, NextApiResponse } from "next";

/**
 * Lead capture endpoint (Homepage Spec §8).
 *
 * Two channels, run in parallel so a lead is never lost to a single failure:
 *   1. Email notification via Resend  -> LEAD_NOTIFY_EMAIL (default info@aurapixel.live)
 *   2. Durable persistence via webhook -> LEADS_WEBHOOK_URL (Google Apps Script /
 *      Sheet, Zapier, Make, n8n, or any CRM intake). Email alone loses leads.
 *
 * Configure via env (see .env.example). With neither channel configured the
 * route still works in local dev (logs the lead) so the form flow is testable.
 */

type LeadPayload = {
  name?: unknown;
  company?: unknown;
  email?: unknown;
  phone?: unknown;
  need?: unknown;
  budget?: unknown;
  company_url?: unknown; // honeypot — real users never see or fill this
};

const NOTIFY_EMAIL = process.env.LEAD_NOTIFY_EMAIL || "info@aurapixel.live";
const FROM_EMAIL =
  process.env.LEAD_FROM_EMAIL || "AuraPixel Leads <leads@aurapixel.live>";
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const LEADS_WEBHOOK_URL = process.env.LEADS_WEBHOOK_URL;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(v: unknown, max = 500): string {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

function escapeHtml(s: string): string {
  return s.replace(
    /[&<>"']/g,
    (c) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[c] as string
  );
}

async function sendEmail(
  lead: Record<string, string>,
  replyTo: string
): Promise<{ ok: boolean; skipped: boolean }> {
  if (!RESEND_API_KEY) return { ok: false, skipped: true };
  const rows = Object.entries(lead)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:4px 16px 4px 0;color:#666;">${escapeHtml(
          k
        )}</td><td style="padding:4px 0;"><strong>${escapeHtml(
          v
        )}</strong></td></tr>`
    )
    .join("");
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: [NOTIFY_EMAIL],
      reply_to: replyTo,
      subject: `New lead — ${lead["Name"]} · ${lead["Company"]}`,
      html: `<h2 style="font-family:system-ui,sans-serif;">New AuraPixel lead</h2><table style="font-family:system-ui,sans-serif;font-size:14px;border-collapse:collapse;">${rows}</table>`,
    }),
  });
  return { ok: res.ok, skipped: false };
}

async function persist(
  lead: Record<string, string>
): Promise<{ ok: boolean; skipped: boolean }> {
  if (!LEADS_WEBHOOK_URL) return { ok: false, skipped: true };
  const res = await fetch(LEADS_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(lead),
  });
  return { ok: res.ok, skipped: false };
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const body = (req.body ?? {}) as LeadPayload;

  // Honeypot: bots fill hidden fields. Accept silently so they don't retry.
  if (clean(body.company_url)) {
    return res.status(200).json({ ok: true });
  }

  const name = clean(body.name, 120);
  const company = clean(body.company, 160);
  const email = clean(body.email, 160);
  const phone = clean(body.phone, 60);
  const need = clean(body.need, 40);
  const budget = clean(body.budget, 40);

  const missing: string[] = [];
  if (!name) missing.push("name");
  if (!company) missing.push("company");
  if (!email) missing.push("email");
  if (!phone) missing.push("phone");
  if (!need) missing.push("need");
  if (!budget) missing.push("budget");
  if (missing.length) {
    return res
      .status(400)
      .json({ ok: false, error: `Missing required fields: ${missing.join(", ")}` });
  }
  if (!EMAIL_RE.test(email)) {
    return res.status(400).json({ ok: false, error: "Please enter a valid work email." });
  }

  const lead: Record<string, string> = {
    Name: name,
    Company: company,
    "Work email": email,
    "Phone / WhatsApp": phone,
    Needs: need,
    "Monthly budget": budget,
    Received: new Date().toISOString(),
  };

  const [emailResult, persistResult] = await Promise.allSettled([
    sendEmail(lead, email),
    persist(lead),
  ]);

  const emailOk =
    emailResult.status === "fulfilled" && emailResult.value.ok;
  const persistOk =
    persistResult.status === "fulfilled" && persistResult.value.ok;

  // Never silently drop a lead. If both channels are configured-but-failed,
  // or we're in production with nothing captured, fail loudly.
  if (!emailOk && !persistOk) {
    const configured = Boolean(RESEND_API_KEY || LEADS_WEBHOOK_URL);
    if (configured || process.env.NODE_ENV === "production") {
      console.error("[lead] capture failed", { emailResult, persistResult });
      return res.status(502).json({
        ok: false,
        error:
          "We couldn't record your enquiry just now. Please email info@aurapixel.live.",
      });
    }
    // Local dev, nothing configured — log so the flow stays testable.
    console.info("[lead] (dev — no channels configured) captured:", lead);
  }

  return res.status(200).json({ ok: true });
}
