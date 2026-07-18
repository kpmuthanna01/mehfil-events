// =============================================================================
// SURPRISE GIFTS
// Book a surprise gift for any celebration. Two ways: choose from our curated
// range, or send us your own item and we present it as a surprise.
// =============================================================================

export interface GiftWay {
  icon: "shopping" | "send";
  title: string;
  detail: string;
}

export const GIFT_WAYS: GiftWay[] = [
  {
    icon: "shopping",
    title: "Choose From Our Gifts",
    detail:
      "Pick from our curated range, Coorg coffee and spice hampers, fresh flowers, cakes, chocolates, personalised keepsakes and luxury gift boxes. We source it, wrap it and present it beautifully.",
  },
  {
    icon: "send",
    title: "Send Us Your Own Gift",
    detail:
      "Already have something special? Ship it to us or drop it off. We keep it safe, wrap it to match the theme, and reveal it as a surprise at just the right moment.",
  },
];

export interface GiftStep {
  icon: "message" | "gift" | "wand" | "camera";
  title: string;
  detail: string;
}

export const GIFT_STEPS: GiftStep[] = [
  {
    icon: "message",
    title: "Tell Us the Plan",
    detail:
      "Share the occasion, the recipient and the vibe you want, romantic, fun, elegant or grand.",
  },
  {
    icon: "gift",
    title: "Choose or Send the Gift",
    detail:
      "Pick a gift from our range or send your own item across, we take it from there.",
  },
  {
    icon: "wand",
    title: "We Set the Surprise",
    detail:
      "We wrap, time and stage the reveal, with balloons, flowers or a special presentation.",
  },
  {
    icon: "camera",
    title: "Delivered & Captured",
    detail:
      "We hand it over at the perfect moment and can capture the reaction on camera for you.",
  },
];

export interface GiftCategory {
  icon:
    | "coffee"
    | "flower"
    | "cake"
    | "keepsake"
    | "chocolate"
    | "balloon"
    | "hamper"
    | "note"
    | "jewellery"
    | "gourmet"
    | "plant"
    | "voucher";
  title: string;
  detail: string;
}

export const GIFT_CATEGORIES: GiftCategory[] = [
  { icon: "coffee", title: "Coorg Coffee & Spice Hampers", detail: "Fresh estate coffee, pepper, cardamom and honey, a true taste of Coorg." },
  { icon: "flower", title: "Fresh Flowers & Bouquets", detail: "Hand-tied bouquets and floral arrangements for every mood and theme." },
  { icon: "cake", title: "Custom Cakes & Desserts", detail: "Theme cakes, cupcakes and dessert boxes, eggless options available." },
  { icon: "keepsake", title: "Personalised Keepsakes", detail: "Photo frames, engraved items, mugs and custom name gifts." },
  { icon: "chocolate", title: "Chocolate & Sweet Boxes", detail: "Premium chocolates and traditional sweets, beautifully packed." },
  { icon: "balloon", title: "Balloon & Room Surprise", detail: "Balloon decor, fairy lights and a decorated space for the big reveal." },
  { icon: "hamper", title: "Luxury Gift Hampers", detail: "Curated premium hampers mixing treats, keepsakes and little luxuries." },
  { icon: "jewellery", title: "Jewellery & Accessories", detail: "Elegant pieces and accessories, gift-wrapped and ready to dazzle." },
  { icon: "gourmet", title: "Dry Fruit & Gourmet Baskets", detail: "Premium dry fruits, nuts and gourmet treats in a handsome basket." },
  { icon: "plant", title: "Plants & Green Gifts", detail: "Potted plants and succulents, a gift that keeps on growing." },
  { icon: "voucher", title: "Gift Vouchers & Experiences", detail: "Let them pick, gift cards and experience vouchers for any budget." },
  { icon: "note", title: "Handwritten Notes & Add-ons", detail: "Personal messages, greeting cards and thoughtful little extras." },
];

// Unique, memorable surprises, our speciality.
export interface UniqueGift {
  icon: "candle" | "picnic" | "bonfire" | "video" | "song" | "camera";
  title: string;
  detail: string;
}

export const UNIQUE_GIFTS: UniqueGift[] = [
  {
    icon: "picnic",
    title: "Coffee-Estate Picnic Surprise",
    detail:
      "A private picnic set up amid the coffee plantations, misty views, fresh brew and a spread laid out just for them.",
  },
  {
    icon: "candle",
    title: "Candlelight Dinner Setup",
    detail:
      "A romantic candlelit table with flowers, fairy lights and their favourite food, arranged and revealed by us.",
  },
  {
    icon: "bonfire",
    title: "Bonfire & Stargazing Night",
    detail:
      "A cosy bonfire under the Coorg sky, blankets, music and a starlit evening to remember.",
  },
  {
    icon: "video",
    title: "Personalised Video Montage",
    detail:
      "Collect messages and photos from family and friends, we craft a heartfelt video to play at the moment.",
  },
  {
    icon: "song",
    title: "Custom Song / Dedication",
    detail:
      "A dedicated song or a live acoustic dedication to make the surprise truly one of a kind.",
  },
  {
    icon: "camera",
    title: "Reaction Photo & Video",
    detail:
      "We quietly capture the reveal, so you keep the priceless reaction forever.",
  },
];

export const GIFT_OCCASIONS: string[] = [
  "Weddings",
  "Birthdays",
  "Anniversaries",
  "Naming Ceremonies",
  "Housewarmings",
  "Proposals",
  "Farewells",
  "Just Because",
];

// Pre-filled WhatsApp message for a specific gift idea.
export const giftItemEnquiry = (name: string) =>
  `Hi Mehfil Coorg, I'm interested in a surprise gift: ${name}. Please share options and pricing.`;

// Pre-filled WhatsApp message for gift bookings.
export const GIFT_ENQUIRY =
  "Hi Mehfil Coorg, I'd like to book a surprise gift. " +
  "Occasion: ____ | Recipient: ____ | " +
  "I'll choose from your gifts / I'll send my own item. " +
  "Please share options and pricing.";
