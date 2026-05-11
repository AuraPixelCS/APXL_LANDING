# Aura Pixel — Landing Page

Single-page marketing site for [AuraPixel](https://aurapixel.com), a Kuala Lumpur creative & marketing studio. Currently being **surgically ported from the Envato "Xpovio" template** (Creative Agency variant) into this clean Next.js app, section by section.

> Reference: [`envato/buyer-file/index.php`](envato/buyer-file/index.php) · live preview: https://ex-coders.com/php-template/xpovio/index.php

---

## Stack

- **Next.js 16** (Pages Router) · **React 19** · **TypeScript 5**
- **Tailwind v4** with `@theme inline` (no `tailwind.config.*` file)
- **shadcn/ui** (`base-nova` style) · **lucide-react** icons
- Display font: **`fullpack.ttf`** (local, registered as `--font-fullpack` in `pages/_app.tsx`)
- Body font: **Inter** (Google, registered as `--font-sans`)

When animation is needed, add **`motion`** (the framer-motion successor — `import { motion } from "motion/react"`). When carousels are needed, add **`embla-carousel-react`**. For video lightboxes, use shadcn `Dialog` + a YouTube iframe. **Do NOT** add jQuery, Bootstrap, Slick, Magnific Popup, or GSAP — Xpovio uses them but we replace them with React-native primitives.

## Brand tokens (frozen)

Defined once in [`styles/globals.css`](styles/globals.css) — never override globally per-section.

| Token | Value |
|-------|-------|
| `--background` | `#000000` |
| `--foreground` | `#ffffff` |
| `--primary` / `--accent` / `--ring` | `#3d9bf5` (AuraPixel blue) |
| `--secondary` | `#2a4786` |
| `--tertiary` / `--muted` | `#18233c` |
| Glass | `--glass`, `--glass-strong`, `--glass-blue` |
| Borders | `--border`, `--border-subtle`, `--border-blue` |

Voice: **"We Don't Follow Trends. We Build Them."** · email `hello@aurapixel.com` · KL, Malaysia.

---

## Xpovio port workflow (one section at a time)

1. **Read source** — open the relevant block in [`envato/buyer-file/index.php`](envato/buyer-file/index.php) and the matching SCSS partial under `envato/buyer-file/assets/css/...`.
2. **Design with `/ui-ux-pro-max`** — feed it the Xpovio reference + AuraPixel brand to spec layout, type scale, motion script, hover states.
3. **Rewrite the React component** (`components/sections/<Section>.tsx`) using Tailwind + shadcn + `motion/react`. Pull copy from [`website_content.docx`](website_content.docx).
4. **Migrate only the assets that section needs** from `envato/buyer-file/assets/images/...` into `public/xpovio/<section>/`. Never copy the whole `assets/` directory.
5. **Wire into [`pages/index.tsx`](pages/index.tsx)** in Xpovio order; remove any superseded section.
6. **Verify in dev** (`npm run dev`) at 375 / 768 / 1024 / 1440 widths against the live preview tab.
7. **`npm run build` must pass clean** before moving to the next section.
8. **No batching.** One section, fully done, then the next.

## Hard rules — do NOT

- ❌ Do **not** import `envato/buyer-file/assets/css/main.css` or `main.min.css`. (155KB CSS bomb. Prior session burned hours on cursor `!important` and color-var conflicts.)
- ❌ Do **not** add jQuery / Bootstrap CSS / Slick / Magnific Popup / GSAP / Vanilla Tilt.
- ❌ Do **not** add cross-section global styles. Each section is self-contained — only add to `globals.css` if truly shared.
- ❌ Do **not** copy the Xpovio `assets/img/` folder wholesale into `public/`. Cherry-pick per section.
- ❌ Do **not** touch the brand tokens in `globals.css` `:root` — they're frozen.
- ❌ Do **not** reintroduce orange `#ff7425` (Xpovio brand) — sweep for it before each commit.

## Section roadmap

| # | Section | Xpovio class | Status |
|---|---------|--------------|--------|
| 1 | Navbar | `.primary-navbar.secondary--navbar` | rebuild pending |
| 2 | **Hero** (`.banner`) | stroked headline, stat blocks, video CTA, side rails | **🔧 in progress (current)** |
| 3 | About | `.section.agency` | rebuild pending |
| 4 | Portfolio | `.section.portfolio` | rebuild pending |
| 5 | Services | `.section.offer` (numbered 01–04) | rebuild pending |
| 6 | Testimonials | `.section.testimonial` | rebuild pending |
| 7 | Blog | `.section.blog` | NEW — to add |
| 8 | Sponsors | `.sponsor` (logo marquee) | NEW — to add |
| 9 | Contact | `next-page` + `contact-us.php` | rebuild pending |
| 10 | Footer | `.footer` | rebuild pending |

Sections being dropped (folded into others per Xpovio anatomy): `ServicesSnapshot`, `WhyUs`, `Stats`, `CTA`.

## Project layout

```
landing-page/
├── pages/
│   ├── _app.tsx              fonts (Inter, fullpack), globals.css
│   ├── _document.tsx         minimal <Html>
│   └── index.tsx             section composition in Xpovio order
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── sections/             one file per section
│   └── ui/                   shadcn primitives
├── styles/globals.css        Tailwind + brand tokens (frozen)
├── public/
│   ├── ap-logo.png
│   ├── fonts/fullpack.ttf
│   └── xpovio/<section>/     section-scoped migrated assets
└── envato/                   purchased template (read-only reference)
    ├── buyer-file/           PHP source
    └── documentation/
```

## Deploy

`vercel --prod` (always production, no preview — per user preference). No `vercel link` dance needed if already linked.
