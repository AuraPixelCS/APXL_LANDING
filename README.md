# Aura Pixel — Landing Page

**v1.0** — Single-page marketing site for [AuraPixel](https://aurapixel.live), a Kuala Lumpur creative & marketing studio.

Built with Next.js 16 (Pages Router) · React 19 · TypeScript 5 · Tailwind v4 · motion/react.

## Versioning

The displayed version in the footer is sourced from `package.json` `version` (shown as `vMAJOR.MINOR`). To bump it, update `package.json` and the footer label updates automatically.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm run start
```

## Deploy

Production deploys to Vercel (project: `apxl-landing`, team: `aurapixelcs`). Pushes to `main` auto-deploy.

## Routes

- `/` — landing page (this app)
- `/rsvp` — proxied to the legacy RSVP event project (see `next.config.ts` rewrites)
