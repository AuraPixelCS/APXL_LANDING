import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[60] transition-all duration-300 ${
        scrolled ? "bg-black/40 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex w-full max-w-[100rem] items-center px-6 py-5 lg:px-12 lg:py-6">
        <Link
          href="#home"
          aria-label="Aura Pixel home"
          className="relative z-[2] inline-block"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/aurapixel-tight.png"
            alt="Aura Pixel"
            className="h-auto w-[44px] sm:w-[52px] lg:w-[60px]"
          />
        </Link>
      </nav>
    </header>
  );
}
