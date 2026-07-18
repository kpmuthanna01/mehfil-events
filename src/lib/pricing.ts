// =============================================================================
// PRICING CONFIG & LOGIC
// Single source of truth for the event cost estimator. Shared by the client
// estimator UI and the server-side booking API so totals can't drift apart.
// All amounts are in Indian Rupees (₹).
// =============================================================================

export type EventTypeId =
  | "marriage"
  | "engagement"
  | "reception"
  | "naming"
  | "baby-shower"
  | "housewarming"
  | "birthday"
  | "anniversary"
  | "corporate"
  | "get-together"
  | "festival"
  | "retirement"
  | "custom";

export type CateringId =
  | "standard-veg"
  | "premium-veg"
  | "jain-satvik"
  | "kodava-nonveg"
  | "halal-nonveg"
  | "grand-buffet";

export type DecorId = "basic" | "floral" | "royal";
export type AddonId =
  | "photography"
  | "sound-dj"
  | "dancers"
  | "valet"
  | "mehndi"
  | "fireworks";

export interface Option<T extends string> {
  id: T;
  name: string;
  /** Short supporting line shown in the UI. */
  blurb?: string;
}

export interface EventTypeOption extends Option<EventTypeId> {
  /** Flat planning, staffing & on-site coordination fee for this event. */
  baseFee: number;
}

export interface CateringOption extends Option<CateringId> {
  /** Per-plate cost, multiplied by guest count. */
  perPlate: number;
  /** Short dietary tag, e.g. "Pure Veg" or "Halal, Non-Veg". */
  diet: string;
}

export interface FlatOption<T extends string> extends Option<T> {
  /** Flat fee added to the total. */
  price: number;
}

// Events / functions / programs we cater to (inclusive across communities).
// Icons are resolved from each option's `id` via <CategoryIcon>.
export const EVENT_TYPES: EventTypeOption[] = [
  { id: "marriage", name: "Wedding / Marriage", baseFee: 75000, blurb: "The full celebration, start to finish" },
  { id: "engagement", name: "Engagement", baseFee: 30000, blurb: "Ring ceremony and get-together" },
  { id: "reception", name: "Wedding Reception", baseFee: 40000, blurb: "The grand evening party" },
  { id: "naming", name: "Naming Ceremony", baseFee: 20000, blurb: "Cradle and naming gatherings" },
  { id: "baby-shower", name: "Baby Shower", baseFee: 20000, blurb: "Blessings for the mother-to-be" },
  { id: "housewarming", name: "Housewarming", baseFee: 25000, blurb: "New-home celebration" },
  { id: "birthday", name: "Birthday Party", baseFee: 15000, blurb: "Themed fun for all ages" },
  { id: "anniversary", name: "Anniversary", baseFee: 20000, blurb: "Marking the milestone years" },
  { id: "corporate", name: "Corporate Event", baseFee: 50000, blurb: "Conferences, launches and offsites" },
  { id: "get-together", name: "Get-Together / Reunion", baseFee: 15000, blurb: "Friends and family meet-ups" },
  { id: "festival", name: "Festival Celebration", baseFee: 35000, blurb: "Community and seasonal festivities" },
  { id: "retirement", name: "Retirement / Farewell", baseFee: 18000, blurb: "An honourable send-off" },
  { id: "custom", name: "Customised Function", baseFee: 30000, blurb: "Design your own event, your way" },
];

// -- Catering styles: something for every diet & belief ----------------------
export const CATERING_OPTIONS: CateringOption[] = [
  { id: "standard-veg", name: "Standard Veg", perPlate: 300, diet: "Pure Veg", blurb: "Classic multi-course veg menu" },
  { id: "premium-veg", name: "Premium Veg", perPlate: 450, diet: "Pure Veg", blurb: "Elevated dishes & live counters" },
  { id: "jain-satvik", name: "Jain / Satvik (No Onion-Garlic)", perPlate: 420, diet: "Pure Veg · Satvik", blurb: "Strictly no onion, garlic or root veg" },
  { id: "kodava-nonveg", name: "Traditional Non-Veg Feast", perPlate: 500, diet: "Non-Veg + Veg", blurb: "Signature regional non-veg spread" },
  { id: "halal-nonveg", name: "Halal Non-Veg Special", perPlate: 520, diet: "Halal · Non-Veg + Veg", blurb: "Certified halal, prepared separately" },
  { id: "grand-buffet", name: "Grand Multi-Cuisine Buffet", perPlate: 700, diet: "Veg + Non-Veg · Global", blurb: "Indian, Continental, Pan-Asian & more" },
];

export const DECOR_OPTIONS: FlatOption<DecorId>[] = [
  { id: "basic", name: "Basic Traditional", price: 25000, blurb: "Tasteful, understated staging" },
  { id: "floral", name: "Elegant Floral", price: 60000, blurb: "Fresh florals across the venue" },
  { id: "royal", name: "Grand Royal Palace", price: 150000, blurb: "Show-stopping, palatial decor" },
];

export const ADDON_OPTIONS: FlatOption<AddonId>[] = [
  { id: "photography", name: "Professional Photography", price: 40000, blurb: "Photo and cinematic video" },
  { id: "sound-dj", name: "Sound System & DJ", price: 30000, blurb: "Pro audio and a live DJ" },
  { id: "dancers", name: "Traditional Dancers", price: 35000, blurb: "Folk troupe performance" },
  { id: "valet", name: "Valet & Guest Parking", price: 18000, blurb: "Managed parking for guests" },
  { id: "mehndi", name: "Mehndi & Makeup Artists", price: 25000, blurb: "Henna and beauty stations" },
  { id: "fireworks", name: "Fireworks & Sparklers", price: 45000, blurb: "A dazzling finale show" },
];

export const GUEST_MIN = 50;
export const GUEST_MAX = 2000;
export const GUEST_DEFAULT = 300;

// --- Selection shape shared across UI and API --------------------------------

export interface EventSelection {
  eventType: EventTypeId;
  guests: number;
  catering: CateringId;
  decor: DecorId;
  addons: AddonId[];
}

export interface CostBreakdown {
  eventBaseFee: number;
  cateringPerPlate: number;
  cateringTotal: number;
  decorTotal: number;
  addonsTotal: number;
  total: number;
}

// --- Lookups -----------------------------------------------------------------

export const eventTypeOption = (id: EventTypeId) =>
  EVENT_TYPES.find((o) => o.id === id) ?? EVENT_TYPES[0];
export const eventTypeName = (id: EventTypeId) => eventTypeOption(id).name;
export const cateringOption = (id: CateringId) =>
  CATERING_OPTIONS.find((o) => o.id === id) ?? CATERING_OPTIONS[0];
export const decorOption = (id: DecorId) =>
  DECOR_OPTIONS.find((o) => o.id === id) ?? DECOR_OPTIONS[0];
export const addonOption = (id: AddonId) =>
  ADDON_OPTIONS.find((o) => o.id === id);

/**
 * Core math:
 *   total = eventBaseFee            (planning, staffing, on-site coordination)
 *         + perPlate × guests       (catering, scales with headcount)
 *         + decorFee                (flat, by tier)
 *         + Σ addonFees             (flat, per add-on)
 */
export function calculateCost(sel: EventSelection): CostBreakdown {
  const event = eventTypeOption(sel.eventType);
  const catering = cateringOption(sel.catering);
  const decor = decorOption(sel.decor);

  const cateringTotal = catering.perPlate * sel.guests;
  const decorTotal = decor.price;
  const addonsTotal = sel.addons.reduce(
    (sum, id) => sum + (addonOption(id)?.price ?? 0),
    0,
  );

  return {
    eventBaseFee: event.baseFee,
    cateringPerPlate: catering.perPlate,
    cateringTotal,
    decorTotal,
    addonsTotal,
    total: event.baseFee + cateringTotal + decorTotal + addonsTotal,
  };
}

/** Format a number as Indian Rupees, e.g. 123456 -> "₹1,23,456". */
export function formatINR(n: number): string {
  return "₹" + Math.round(n).toLocaleString("en-IN");
}
