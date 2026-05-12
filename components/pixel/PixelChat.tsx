"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Send, X } from "lucide-react";
import PixelFace from "./PixelFace";

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

export default function PixelChat({
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
