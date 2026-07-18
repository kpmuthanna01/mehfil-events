import {
  addonOption,
  calculateCost,
  cateringOption,
  decorOption,
  eventTypeName,
  formatINR,
  type EventSelection,
} from "./pricing";

/**
 * Build a clean, emoji-rich WhatsApp message from an event selection.
 * `\n` line breaks survive encodeURIComponent and render in WhatsApp;
 * `*text*` renders bold in the WhatsApp client.
 */
export function buildWhatsAppMessage(
  sel: EventSelection,
  contact?: { name?: string; reference?: string; eventDate?: string },
): string {
  const cost = calculateCost(sel);
  const catering = cateringOption(sel.catering);
  const decor = decorOption(sel.decor);

  const addonLines =
    sel.addons.length > 0
      ? sel.addons
          .map((id) => {
            const a = addonOption(id);
            return a ? `   • ${a.name} (${formatINR(a.price)})` : "";
          })
          .filter(Boolean)
          .join("\n")
      : "   • None";

  const header = contact?.reference
    ? `*Booking ${contact.reference} | Mehfil Events*`
    : "*New Event Enquiry | Mehfil Events*";

  const contactLines = [
    contact?.name ? `🙍 *Name:* ${contact.name}` : "",
    contact?.eventDate ? `🗓️ *Preferred Date:* ${contact.eventDate}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  return [
    header,
    contactLines,
    "",
    `📅 *Event Type:* ${eventTypeName(sel.eventType)}`,
    `👥 *Guests:* ${sel.guests}`,
    "",
    `🧩 *Planning & Coordination:* ${formatINR(cost.eventBaseFee)}`,
    "",
    `🍽️ *Catering:* ${catering.name}`,
    `   ${formatINR(catering.perPlate)} × ${sel.guests} plates = ${formatINR(cost.cateringTotal)}`,
    "",
    `🌸 *Decoration:* ${decor.name} (${formatINR(decor.price)})`,
    "",
    "✨ *Add-ons:*",
    addonLines,
    "",
    `💰 *Estimated Total: ${formatINR(cost.total)}*`,
    "",
    "Please share availability and a detailed quote. Thank you!",
  ]
    .filter((line) => line !== null && line !== undefined)
    .join("\n")
    // Collapse any accidental triple blank lines from empty contact block.
    .replace(/\n{3,}/g, "\n\n");
}
