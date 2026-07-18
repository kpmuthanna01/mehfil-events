# Mehfil Coorg, Events & Escapes

All-in-one event management and a complete Coorg travel guide, built with
**Next.js 16 (App Router) · React 19 · Tailwind v4 · shadcn/ui**.

## Features

- **Home**, hero, live cost estimator, menu preview, services, "explore more"
  teasers, WhatsApp enquiry form and CTAs.
- **Interactive cost estimator**, event type, guest slider (50–2000), catering
  style, decoration tier and add-ons, with a live animated total.
- **Menus** (`/menu`), catering styles plus full regional spreads
  (Karnataka, Coorg, Kerala), veg and non-veg.
- **Coorg Guide** (`/coorg`), history, best time, how to reach, places by
  cluster, waterfalls, treks, itineraries, food, unique experiences and a paid
  local-guide booking, each card opens a detail view.
- **Surprise Gifts** (`/gifts`), choose a gift or send your own, plus unique
  signature surprises, every idea taps to WhatsApp.
- **About / Packages / FAQ** content pages.
- **WhatsApp everywhere**, enquiries, bookings and gift ideas open a pre-filled
  chat; a floating chat button handles general questions.

## Configure before going live

Set your business WhatsApp number in [`src/lib/site.ts`](src/lib/site.ts):

```ts
// International format, digits only (country code + number)
export const WHATSAPP_NUMBER = "918217610195";
```

Set the public URL for correct SEO metadata / sitemap (Vercel env var):

```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Run

```bash
bun install
bun run dev       # http://localhost:3000
bun run build     # production build
```

## Notes

- **Pricing** is centralized in [`src/lib/pricing.ts`](src/lib/pricing.ts), the
  single source of truth shared by the UI and the estimate logic.
- **SEO**: `robots.ts`, `sitemap.ts`, a dynamic Open Graph image
  (`opengraph-image.tsx`) and JSON-LD (LocalBusiness + FAQ) are built in.
- **Analytics**: Vercel Analytics is enabled and reports automatically when
  deployed on Vercel.
- The booking dialog composes a WhatsApp message with a reference; there is no
  server-side persistence yet (swap in a database when needed).

The brief is in [`info.md`](info.md); an early static prototype is at
[`docs/landing-prototype.html`](docs/landing-prototype.html).
