# Utsava Events — Event Management

All-in-one event management site (food, grocery, traditional cooks, decoration).
Customers estimate their event cost live, submit a booking, and track its status —
built with **Next.js 16 (App Router) · React 19 · Tailwind v4 · shadcn/ui**.

## Features

- **Landing page** — hero, value prop, and services grid.
- **Interactive cost estimator** — event type, guest slider (50–2000), catering
  style, decoration tier, and add-ons, with a live "Your Event Summary" total.
- **Booking flow** — submit contact details, get a reference (`UTS-XXXXX`).
- **Track booking** — look up status + summary by reference (`/track`).
- **WhatsApp checkout** — every summary can be sent as a formatted WhatsApp
  message; a floating chat button handles general inquiries.

## Configure before going live

Set your business WhatsApp number in [`src/lib/site.ts`](src/lib/site.ts):

```ts
// International format, digits only (country code + number)
export const WHATSAPP_NUMBER = "919812345678";
```

## Run

```bash
bun install       # already installed
bun run dev       # http://localhost:3000
bun run build     # production build
```

## Architecture notes

- **Pricing** is centralized in [`src/lib/pricing.ts`](src/lib/pricing.ts) — the
  single source of truth shared by the client UI and the server API, so totals
  can't drift.
- **Bookings** are stored **in memory** ([`src/lib/store.ts`](src/lib/store.ts))
  and reset on server restart (prototype). The store exposes
  `createBooking / getBooking / listBookings / updateStatus`, so swapping in
  Prisma + a database later is a drop-in change — the API routes stay the same.
- **API**: `POST/GET /api/bookings`, `GET /api/bookings/:id`. All input is
  validated in [`src/lib/validate.ts`](src/lib/validate.ts).

The original static prototype is kept at
[`docs/landing-prototype.html`](docs/landing-prototype.html); the brief is in
[`info.md`](info.md).
