import Link from "next/link";
import { MapPin, Mail } from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
} from "@/components/icons/SocialIcons";
import FooterAurora from "@/components/FooterAurora";
import packageJson from "../package.json";

const socials = [
  {
    Icon: InstagramIcon,
    label: "Instagram",
    href: "https://www.instagram.com/byaurapixel/",
  },
  {
    Icon: FacebookIcon,
    label: "Facebook",
    href: "https://www.facebook.com/byaurapixel",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const version = `v${packageJson.version.split(".").slice(0, 2).join(".")}`;

  return (
    <footer className="relative isolate overflow-hidden border-t border-white/10 bg-black">
      <FooterAurora />
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-16 lg:py-20">
        <div className="mb-12 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Link href="#home" aria-label="Aura Pixel home" className="inline-block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/ap-logo.png"
                alt="Aura Pixel"
                width={2744}
                height={2744}
                className="block h-auto w-[200px]"
              />
            </Link>
            {/* [HOLD] Open decision #4 — tagline. Three are in circulation;
                spec recommends "Bold ideas, built to perform." Pending Arvino.
                Once confirmed, use the same line in the meta title / OG tags
                and nowhere use the other two. */}
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/70">
              Bold ideas, built to perform.
            </p>
          </div>

          <div className="lg:col-span-5">
            <p className="mb-4 text-xs uppercase tracking-[0.24em] text-white/55">
              Reach Us
            </p>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                  strokeWidth={1.75}
                />
                <span className="text-white">
                  Midvalley Boulevard Office, Kuala Lumpur
                </span>
              </li>
              <li className="flex gap-3">
                <Mail
                  className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                  strokeWidth={1.75}
                />
                <a
                  href="mailto:info@aurapixel.live"
                  className="text-white transition hover:text-primary"
                >
                  info@aurapixel.live
                </a>
              </li>
            </ul>

            <div className="mt-6 flex items-center gap-4">
              {socials.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  data-cursor="medium"
                  className="text-white/65 transition-colors hover:text-primary"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-8 text-xs text-white/55 sm:flex-row sm:items-center">
          <p>© {year} Aura Pixel Studio. All Rights Reserved.</p>
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <Link href="/rsvp" className="transition hover:text-white">
              RSVP
            </Link>
            <span className="text-white/30">·</span>
            <Link href="#" className="transition hover:text-white">
              Privacy Policy
            </Link>
            <span className="text-white/30">·</span>
            <Link href="#" className="transition hover:text-white">
              Terms of Service
            </Link>
            <span className="text-white/30">·</span>
            <span className="text-white/40">{version}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
