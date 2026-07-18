import "server-only";
import { calculateCost } from "./pricing";
import type { Booking, BookingStatus, CreateBookingInput } from "./types";

// =============================================================================
// IN-MEMORY BOOKING STORE
// A lightweight prototype store. Data lives in module memory and resets when the
// server restarts. We stash it on `globalThis` so Next.js dev hot-reloads don't
// wipe it between edits. Swap this file for a real DB (Prisma) later - the API
// surface (create/list/get/updateStatus) stays the same.
// =============================================================================

interface StoreShape {
  bookings: Booking[];
}

const globalForStore = globalThis as unknown as {
  __utsavaStore?: StoreShape;
};

function seed(): Booking[] {
  const mk = (
    id: string,
    daysAgo: number,
    status: BookingStatus,
    b: Omit<Booking, "id" | "createdAt" | "status" | "estimatedTotal">,
  ): Booking => {
    const created = new Date(Date.now() - daysAgo * 86_400_000).toISOString();
    return {
      id,
      createdAt: created,
      status,
      estimatedTotal: calculateCost(b.selection).total,
      ...b,
    };
  };

  return [
    mk("UTS-7QK2M", 6, "confirmed", {
      name: "Aparna Kariappa",
      phone: "919812345670",
      email: "aparna@example.com",
      eventDate: "2026-08-22",
      notes: "Outdoor mandap preferred.",
      selection: {
        eventType: "marriage",
        guests: 600,
        catering: "kodava-nonveg",
        decor: "royal",
        addons: ["photography", "sound-dj", "dancers"],
      },
    }),
    mk("UTS-3RB9Z", 2, "pending", {
      name: "Nikhil Rao",
      phone: "919812345671",
      eventDate: "2026-09-05",
      selection: {
        eventType: "housewarming",
        guests: 120,
        catering: "premium-veg",
        decor: "floral",
        addons: ["photography"],
      },
    }),
  ];
}

function getStore(): StoreShape {
  if (!globalForStore.__utsavaStore) {
    globalForStore.__utsavaStore = { bookings: seed() };
  }
  return globalForStore.__utsavaStore;
}

// --- Reference id generation -------------------------------------------------
const REF_ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // no ambiguous chars

function generateRef(): string {
  let ref = "";
  for (let i = 0; i < 5; i++) {
    ref += REF_ALPHABET[Math.floor(Math.random() * REF_ALPHABET.length)];
  }
  const candidate = `UTS-${ref}`;
  // Extremely unlikely collision, but keep it correct.
  return getStore().bookings.some((x) => x.id === candidate)
    ? generateRef()
    : candidate;
}

// --- Public API --------------------------------------------------------------

export function listBookings(): Booking[] {
  return [...getStore().bookings].sort((a, b) =>
    a.createdAt < b.createdAt ? 1 : -1,
  );
}

export function getBooking(id: string): Booking | undefined {
  const needle = id.trim().toUpperCase();
  return getStore().bookings.find((x) => x.id.toUpperCase() === needle);
}

export function createBooking(input: CreateBookingInput): Booking {
  const booking: Booking = {
    id: generateRef(),
    createdAt: new Date().toISOString(),
    status: "pending",
    name: input.name.trim(),
    phone: input.phone.trim(),
    email: input.email?.trim() || undefined,
    eventDate: input.eventDate || undefined,
    notes: input.notes?.trim() || undefined,
    selection: input.selection,
    estimatedTotal: calculateCost(input.selection).total,
  };
  getStore().bookings.push(booking);
  return booking;
}

export function updateStatus(
  id: string,
  status: BookingStatus,
): Booking | undefined {
  const booking = getBooking(id);
  if (booking) booking.status = status;
  return booking;
}
