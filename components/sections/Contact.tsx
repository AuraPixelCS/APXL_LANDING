"use client";
import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";
import { ArrowUpRight, Send, X } from "lucide-react";
import SectionMarquee from "@/components/SectionMarquee";
import { RippleButton } from "@/components/ui/ripple-button";

type ChatMsg = { id: number; from: "pixel" | "user"; text: string };

const INITIAL_MESSAGES: ChatMsg[] = [
  {
    id: 1,
    from: "pixel",
    text: "Hey there! I'm Pixel — your AI guide at Aura Pixel. 👋",
  },
  {
    id: 2,
    from: "pixel",
    text: "Tell me about your brand, ask what we do, or just say hi.",
  },
];

const CANNED_REPLY =
  "Thanks for the message! I'm still in training — for now, our team will follow up via email at info@aurapixel.live. ✨";

function PixelFace({ size }: { size: number }) {
  return (
    <div
      style={{ width: size, height: size }}
      className="relative shrink-0 rounded-[28%] bg-gradient-to-br from-[#6FB4FF] via-primary to-[#1F3B70] shadow-[0_8px_20px_-8px_rgba(61,155,245,0.55)]"
    >
      <div className="absolute inset-[6%] rounded-[22%] bg-gradient-to-br from-white/15 via-transparent to-transparent" />
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full"
        aria-hidden
      >
        <circle cx="36" cy="44" r="6" fill="#ffffff" />
        <circle cx="64" cy="44" r="6" fill="#ffffff" />
        <circle cx="34" cy="42" r="1.6" fill="rgba(0,0,0,0.7)" />
        <circle cx="62" cy="42" r="1.6" fill="rgba(0,0,0,0.7)" />
        <path
          d="M 38 62 Q 50 73 62 62"
          stroke="#ffffff"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </div>
  );
}

function PixelMock({
  reduce,
  onOpen,
}: {
  reduce: boolean | null;
  onOpen: () => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={onOpen}
      aria-label="Talk to Pixel"
      animate={reduce ? { y: 0 } : { y: [-6, 6, -6] }}
      transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
      className="relative outline-none transition-transform hover:scale-[1.03] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-transparent"
    >
      <div className="relative h-44 w-44 rounded-[2rem] bg-gradient-to-br from-[#6FB4FF] via-primary to-[#1F3B70] shadow-[0_30px_60px_-20px_rgba(61,155,245,0.55)] sm:h-52 sm:w-52 lg:h-60 lg:w-60">
        <div className="absolute inset-2 rounded-[1.6rem] bg-gradient-to-br from-white/15 via-transparent to-transparent" />
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 h-full w-full"
          aria-hidden
        >
          <circle cx="36" cy="44" r="6" fill="#ffffff" />
          <circle cx="64" cy="44" r="6" fill="#ffffff" />
          <circle cx="34" cy="42" r="1.6" fill="rgba(0,0,0,0.7)" />
          <circle cx="62" cy="42" r="1.6" fill="rgba(0,0,0,0.7)" />
          <path
            d="M 38 62 Q 50 73 62 62"
            stroke="#ffffff"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-6 -bottom-4 h-10 rounded-full bg-primary/25 blur-2xl"
      />
    </motion.button>
  );
}

function PixelChat({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [messages, setMessages] = useState<ChatMsg[]>(INITIAL_MESSAGES);
  const [draft, setDraft] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    const t = window.setTimeout(() => inputRef.current?.focus(), 200);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      window.clearTimeout(t);
    };
  }, [open, onClose]);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  const send = (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    const text = draft.trim();
    if (!text) return;
    const userMsg: ChatMsg = { id: Date.now(), from: "user", text };
    setMessages((m) => [...m, userMsg]);
    setDraft("");
    window.setTimeout(() => {
      setMessages((m) => [
        ...m,
        { id: Date.now() + 1, from: "pixel", text: CANNED_REPLY },
      ]);
    }, 700);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="pixel-chat-title"
          data-cursor="default"
          className="fixed inset-0 z-[80] flex items-end justify-center p-4 sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <button
            type="button"
            aria-label="Close chat"
            onClick={onClose}
            className="absolute inset-0 cursor-default bg-black/70 backdrop-blur-md"
          />
          <motion.div
            initial={{ y: 24, opacity: 0, scale: 0.96 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 24, opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex w-full max-w-md flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0a]/95 backdrop-blur-xl shadow-[0_30px_60px_-20px_rgba(61,155,245,0.35)]"
          >
            <header className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4">
              <div className="flex items-center gap-3">
                <PixelFace size={36} />
                <div>
                  <p
                    id="pixel-chat-title"
                    className="text-sm font-semibold text-white"
                  >
                    Pixel
                  </p>
                  <p className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.18em] text-white/55">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Online · beta
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close chat"
                className="rounded-full p-1.5 text-white/55 transition hover:bg-white/5 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </header>

            <div
              ref={scrollRef}
              className="flex max-h-[55vh] min-h-[280px] flex-col gap-3 overflow-y-auto px-5 py-5"
            >
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex items-end gap-2 ${
                    m.from === "user" ? "flex-row-reverse" : ""
                  }`}
                >
                  {m.from === "pixel" && <PixelFace size={28} />}
                  <div
                    className={`max-w-[78%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      m.from === "pixel"
                        ? "rounded-bl-sm bg-white/5 text-white"
                        : "rounded-br-sm bg-primary text-black"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            <form
              onSubmit={send}
              className="flex items-center gap-2 border-t border-white/10 px-4 py-3"
            >
              <input
                ref={inputRef}
                type="text"
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                placeholder="Ask Pixel anything…"
                className="flex-1 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-primary focus:bg-white/[0.06]"
              />
              <button
                type="submit"
                disabled={!draft.trim()}
                aria-label="Send"
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-black transition hover:bg-primary/85 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <Send className="h-4 w-4" strokeWidth={2} />
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Contact() {
  const reduce = useReducedMotion();
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <SectionMarquee text="Get in Touch" />
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        <div className="mb-16 max-w-3xl">
          <h2 className="text-3xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-5xl">
            Let&rsquo;s Build Something Great.
          </h2>
        </div>

        <div
          data-cursor="big"
          className="glass-blue mx-auto max-w-4xl rounded-3xl p-10 lg:p-14"
        >
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-12">
            <div className="flex justify-center md:col-span-5 md:justify-start">
              <PixelMock reduce={reduce} onOpen={() => setChatOpen(true)} />
            </div>
            <div className="md:col-span-7">
              <p className="text-xs uppercase tracking-[0.24em] text-primary">
                Meet Pixel
              </p>
              <h3 className="mt-3 text-3xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-4xl">
                Got a question? Ask Pixel.
              </h3>
              <p className="mt-4 text-base leading-relaxed text-white/70">
                Pixel is our friendly AI agent — built to answer your questions
                about Aura Pixel, talk through your goals, and point you to the
                right next step. No forms, no waiting. Just a conversation.
              </p>
              <RippleButton
                onClick={() => setChatOpen(true)}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-primary/85"
              >
                Talk to Pixel
                <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
              </RippleButton>
              <p className="mt-3 text-[11px] uppercase tracking-[0.18em] text-white/40">
                Pixel is in beta · responses are mocked
              </p>
            </div>
          </div>
        </div>
      </div>

      <PixelChat open={chatOpen} onClose={() => setChatOpen(false)} />
    </section>
  );
}
