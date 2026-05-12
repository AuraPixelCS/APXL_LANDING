import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { RippleButton } from "@/components/ui/ripple-button";

const LINKS = [
  { num: "01", label: "Home", href: "#home" },
  { num: "02", label: "About", href: "#about" },
  { num: "03", label: "Portfolio", href: "#portfolio" },
  { num: "04", label: "Services", href: "#services" },
  { num: "05", label: "Testimonials", href: "#testimonials" },
  { num: "06", label: "Contact", href: "#contact" },
];

const SOCIALS = [
  { label: "Instagram", href: "https://www.instagram.com/byaurapixel/" },
  { label: "Facebook", href: "https://www.facebook.com/byaurapixel" },
];

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];
const EASE_IN: [number, number, number, number] = [0.7, 0, 0.84, 0];

export default function Navbar() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    document.body.classList.add("nav-open");
    window.addEventListener("keydown", onKey);
    const firstLink =
      drawerRef.current?.querySelector<HTMLAnchorElement>("a[href^='#']");
    firstLink?.focus({ preventScroll: true });
    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("nav-open");
      window.removeEventListener("keydown", onKey);
      triggerRef.current?.focus({ preventScroll: true });
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[60] transition-all duration-300 ${
          open
            ? "pointer-events-none -translate-y-2 opacity-0"
            : "opacity-100"
        } ${
          scrolled && !open
            ? "bg-black/40 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex w-full max-w-[100rem] items-center justify-between px-6 py-5 lg:px-12 lg:py-6">
          <Link
            href="#home"
            aria-label="Aura Pixel home"
            className="relative z-[2] inline-block"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/ap-logo.png"
              alt="Aura Pixel"
              className="h-auto w-[88px] origin-bottom-left scale-[1.7] sm:w-[104px] sm:scale-[1.9] lg:scale-[2.2] [filter:brightness(0)_invert(1)]"
            />
          </Link>

          <button
            ref={triggerRef}
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="aura-offcanvas-nav"
            className={`group relative z-[2] inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 transition-all duration-300 hover:border-primary md:h-14 md:w-14 ${
              open
                ? "pointer-events-none scale-90 opacity-0"
                : "opacity-100"
            }`}
          >
            <span className="block h-2.5 w-2.5 rounded-full bg-white/55 transition-colors duration-300 group-hover:bg-primary" />
            <span className="sr-only">Open menu</span>
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="aura-offcanvas-nav"
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            initial={
              reduce
                ? { opacity: 0 }
                : { y: "-100%", opacity: 0, scale: 0.985 }
            }
            animate={
              reduce
                ? { opacity: 1, transition: { duration: 0 } }
                : {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    transition: {
                      type: "spring",
                      damping: 30,
                      stiffness: 220,
                      mass: 0.85,
                    },
                  }
            }
            exit={
              reduce
                ? { opacity: 0, transition: { duration: 0 } }
                : {
                    y: "-100%",
                    opacity: 0,
                    scale: 0.985,
                    transition: { duration: 0.45, ease: EASE_IN },
                  }
            }
            className="fixed inset-0 z-[55] h-[100svh] w-full overflow-hidden bg-black [transform-origin:50%_0]"
          >
            {/* Background watermark */}
            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-0 flex items-center justify-end overflow-hidden pr-[5vw]"
              initial={{ opacity: 0 }}
              animate={{ opacity: reduce ? 0.05 : 0.06 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: EASE_OUT }}
            >
              <span className="select-none text-[clamp(7rem,13vw,14rem)] font-black uppercase leading-none tracking-tight text-white">
                Aurapixel
              </span>
            </motion.div>

            {/* Hairlines (lg+) */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 z-0 hidden lg:flex"
            >
              {[0, 1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="flex-1 border-r border-white/[0.03] last:border-r-0"
                />
              ))}
            </div>

            <div className="relative z-10 mx-auto flex h-full w-full max-w-[100rem] flex-col px-6 py-5 lg:px-12 lg:py-6">
              {/* Drawer top bar */}
              <div className="flex shrink-0 items-center justify-between">
                <Link
                  href="#home"
                  aria-label="Aura Pixel home"
                  onClick={close}
                  className="inline-block"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/ap-logo.png"
                    alt="Aura Pixel"
                    className="h-auto w-[88px] sm:w-[104px] [filter:brightness(0)_invert(1)]"
                  />
                </Link>
                <button
                  type="button"
                  onClick={close}
                  aria-label="Close menu"
                  data-cursor="big"
                  className="group relative inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 transition-colors duration-300 hover:border-primary md:h-14 md:w-14"
                >
                  <span className="block h-px w-4 rotate-45 bg-white transition-colors group-hover:bg-primary" />
                  <span className="absolute block h-px w-4 -rotate-45 bg-white transition-colors group-hover:bg-primary" />
                </button>
              </div>

              {/* Menu items — flex-1 so they fill space between header & footer; overflow scrolls only if truly oversized */}
              <ul className="mt-6 flex min-h-0 flex-1 flex-col justify-center gap-0.5 overflow-y-auto md:mt-8">
                {LINKS.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={
                      reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }
                    }
                    animate={{ opacity: 1, y: 0 }}
                    exit={
                      reduce
                        ? { opacity: 0 }
                        : { opacity: 0, y: 12, transition: { duration: 0.2, ease: EASE_IN } }
                    }
                    transition={{
                      duration: 0.5,
                      delay: 0.32 + i * 0.06,
                      ease: EASE_OUT,
                    }}
                    className="group border-b border-white/10"
                  >
                    <Link
                      href={l.href}
                      onClick={close}
                      className="flex items-center gap-5 py-2.5 transition-colors md:gap-8 md:py-3"
                    >
                      <span
                        data-cursor="big"
                        className="font-mono text-[10px] text-primary md:text-xs"
                      >
                        {l.num}
                      </span>
                      <span
                        data-cursor="big"
                        className="font-sans text-[clamp(1.35rem,3.6vw,2.5rem)] font-black uppercase leading-none tracking-tight text-white transition-colors group-hover:text-primary"
                      >
                        {l.label}
                      </span>
                      <span
                        aria-hidden
                        className="ml-auto h-px w-0 bg-primary transition-all duration-500 group-hover:w-10 md:group-hover:w-16"
                      />
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* Footer block */}
              <motion.div
                initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={
                  reduce
                    ? { opacity: 0 }
                    : { opacity: 0, y: 12, transition: { duration: 0.2, ease: EASE_IN } }
                }
                transition={{
                  duration: 0.5,
                  delay: 0.32 + LINKS.length * 0.06,
                  ease: EASE_OUT,
                }}
                className="mt-6 flex shrink-0 flex-col gap-5 pb-1 md:mt-8 md:flex-row md:items-end md:justify-between md:gap-8"
              >
                <span data-cursor="big" className="inline-flex self-start">
                  <RippleButton
                    href="#contact"
                    onClick={close}
                    className="group inline-flex items-center gap-3 self-start rounded-full bg-primary px-7 py-3.5 text-sm font-bold uppercase tracking-[0.14em] text-black transition-colors hover:bg-primary/85"
                  >
                    Let&rsquo;s Talk
                    <span aria-hidden className="text-base transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </RippleButton>
                </span>

                <div className="flex flex-col gap-3 text-sm">
                  <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/40">
                    Follow
                  </span>
                  <div className="flex flex-wrap gap-x-6 gap-y-2">
                    {SOCIALS.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        data-cursor="big"
                        className="text-[13px] font-medium uppercase tracking-[0.14em] text-white/65 transition-colors hover:text-primary"
                      >
                        {s.label}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
