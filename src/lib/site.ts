// Central site configuration.
//
// Set WHATSAPP_NUMBER to the business number in international format:
// country code + number, digits only (no "+", spaces or dashes).
// Example (India): "919812345678"
export const WHATSAPP_NUMBER = "918217610195";

// Public site URL (used for metadata, sitemap, robots, JSON-LD).
// Override with NEXT_PUBLIC_SITE_URL in Vercel once the domain is set.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://mehfil-events.vercel.app";

export const SITE = {
  name: "Mehfil Coorg",
  // Single-letter logo mark.
  mark: "M",
  tagline: "Events & Escapes in Coorg",
  // Message pre-filled by the floating chat button.
  generalInquiry:
    "Hi, I have a quick question about your event management services.",
};

/** Build a wa.me deep link with a URL-encoded message. */
export function whatsappLink(message: string, number = WHATSAPP_NUMBER): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
