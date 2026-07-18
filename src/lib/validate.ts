import {
  ADDON_OPTIONS,
  CATERING_OPTIONS,
  DECOR_OPTIONS,
  EVENT_TYPES,
  GUEST_MAX,
  GUEST_MIN,
  type AddonId,
  type EventSelection,
} from "./pricing";
import type { CreateBookingInput } from "./types";

const eventIds = new Set(EVENT_TYPES.map((o) => o.id));
const cateringIds = new Set(CATERING_OPTIONS.map((o) => o.id));
const decorIds = new Set(DECOR_OPTIONS.map((o) => o.id));
const addonIds = new Set(ADDON_OPTIONS.map((o) => o.id));

export type ValidationResult =
  | { ok: true; value: CreateBookingInput }
  | { ok: false; error: string };

function isObj(v: unknown): v is Record<string, unknown> {
  return typeof v === "object" && v !== null;
}

function validateSelection(raw: unknown): EventSelection | null {
  if (!isObj(raw)) return null;
  const { eventType, guests, catering, decor, addons } = raw;

  if (typeof eventType !== "string" || !eventIds.has(eventType as never)) return null;
  if (typeof catering !== "string" || !cateringIds.has(catering as never)) return null;
  if (typeof decor !== "string" || !decorIds.has(decor as never)) return null;
  if (typeof guests !== "number" || !Number.isFinite(guests)) return null;

  const clampedGuests = Math.min(GUEST_MAX, Math.max(GUEST_MIN, Math.round(guests)));

  if (!Array.isArray(addons)) return null;
  const cleanAddons: AddonId[] = [];
  for (const a of addons) {
    if (typeof a !== "string" || !addonIds.has(a as never)) return null;
    if (!cleanAddons.includes(a as AddonId)) cleanAddons.push(a as AddonId);
  }

  return {
    eventType: eventType as EventSelection["eventType"],
    guests: clampedGuests,
    catering: catering as EventSelection["catering"],
    decor: decor as EventSelection["decor"],
    addons: cleanAddons,
  };
}

export function validateCreateBooking(raw: unknown): ValidationResult {
  if (!isObj(raw)) return { ok: false, error: "Invalid request body." };

  const name = typeof raw.name === "string" ? raw.name.trim() : "";
  if (name.length < 2) return { ok: false, error: "Please enter your name." };

  const phone = typeof raw.phone === "string" ? raw.phone.trim() : "";
  // Accept 8–15 digits (allow leading + which we strip).
  const digits = phone.replace(/[^\d]/g, "");
  if (digits.length < 8 || digits.length > 15) {
    return { ok: false, error: "Please enter a valid phone number." };
  }

  const email = typeof raw.email === "string" ? raw.email.trim() : "";
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }

  const selection = validateSelection(raw.selection);
  if (!selection) return { ok: false, error: "Invalid event selection." };

  const eventDate =
    typeof raw.eventDate === "string" && raw.eventDate.trim()
      ? raw.eventDate.trim()
      : undefined;
  const notes =
    typeof raw.notes === "string" && raw.notes.trim()
      ? raw.notes.trim().slice(0, 1000)
      : undefined;

  return {
    ok: true,
    value: { name, phone: digits, email: email || undefined, eventDate, notes, selection },
  };
}
