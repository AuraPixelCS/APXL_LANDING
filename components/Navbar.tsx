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
      <nav className="mx-auto flex h-[68px] w-full max-w-[100rem] items-center px-6 lg:h-[88px] lg:px-12">
        <Link
          href="#home"
          aria-label="Aura Pixel home"
          className="relative z-[2] inline-block"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/aurapixel-tight.png"
            alt="Aura Pixel"
            className="h-auto w-[64px] sm:w-[76px] lg:w-[88px]"
          />
        </Link>
      </nav>
    </header>
  );
}
