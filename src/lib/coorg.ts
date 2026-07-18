// =============================================================================
// COORG (KODAGU) TRAVEL GUIDE CONTENT
// Well-known, general information. Distances and timings are approximate,
// confirm current road/rail/flight details before travel.
// =============================================================================

// A short, readable history of Kodagu.
export const HISTORY: string[] = [
  "Tucked high in the Western Ghats, Kodagu was an independent hill kingdom for more than two centuries, ruled from its capital Madikeri until it came under British rule in 1834. After India's independence it was briefly a small state of its own before merging into Karnataka in 1956, yet it has always held on to a strong, unmistakable identity.",
  "In the 1800s, planters introduced coffee to these misty slopes and the crop reshaped the land into the emerald estates that define Coorg today. Wrapped in rivers, rainforest and rolling hills, the region became renowned for its natural beauty, its coffee and spices, and the warmth and courage of its people.",
];

export interface FamousFor {
  icon: "coffee" | "mountain" | "sword" | "droplets" | "trophy" | "shield";
  title: string;
  detail: string;
}

export const FAMOUS_FOR: FamousFor[] = [
  {
    icon: "coffee",
    title: "Coffee Capital of India",
    detail:
      "Coorg grows a huge share of India's coffee, shade-grown Arabica and Robusta, alongside pepper and cardamom.",
  },
  {
    icon: "mountain",
    title: "The Scotland of India",
    detail:
      "Rolling, mist-wrapped hills, cool weather and endless green earned Coorg its famous nickname.",
  },
  {
    icon: "sword",
    title: "Warrior Spirit & Hospitality",
    detail:
      "Coorg is famed for the courage of its people and a warm, big-hearted welcome, alongside a cuisine found nowhere else.",
  },
  {
    icon: "droplets",
    title: "Birthplace of the Cauvery",
    detail:
      "The great river Cauvery begins its journey at Talakaveri, high in the Brahmagiri hills, a lifeline for all of South India.",
  },
  {
    icon: "trophy",
    title: "Land of Hockey",
    detail:
      "Home of one of the world's largest hockey tournaments and countless national players.",
  },
  {
    icon: "shield",
    title: "Cradle of Generals",
    detail:
      "Birthplace of legends like Field Marshal K.M. Cariappa and General K.S. Thimayya, an outsized military legacy.",
  },
];

export interface Season {
  icon: "sun" | "rain" | "leaf";
  title: string;
  months: string;
  temp: string;
  detail: string;
  best?: boolean;
}

export const SEASONS: Season[] = [
  {
    icon: "leaf",
    title: "Peak Season",
    months: "October – March",
    temp: "≈ 15–28°C",
    detail:
      "The best time to visit. Cool, pleasant days, lush post-monsoon greenery and clear skies, ideal for sightseeing, treks and weddings.",
    best: true,
  },
  {
    icon: "rain",
    title: "Monsoon",
    months: "June – September",
    temp: "≈ 18–24°C",
    detail:
      "Misty hills and waterfalls in full flow, at their most beautiful, but expect heavy rain, leeches on trails and some treks closed.",
  },
  {
    icon: "sun",
    title: "Summer",
    months: "March – May",
    temp: "≈ 20–32°C",
    detail:
      "Warm but far cooler than the plains. Coffee blossoms in April fill the estates with fragrance. Good for plantation stays.",
  },
];

export interface ReachMode {
  icon: "plane" | "train" | "car";
  title: string;
  lines: string[];
}

export const REACH: ReachMode[] = [
  {
    icon: "plane",
    title: "By Air",
    lines: [
      "Mangaluru Airport: approx 135–160 km (~3.5 hrs)",
      "Mysuru Airport: approx 120 km (~3 hrs)",
      "Bengaluru Intl (KIA): approx 260 km (~6 hrs)",
      "Kannur (Kerala): approx 90–130 km to south Kodagu",
    ],
  },
  {
    icon: "train",
    title: "By Rail",
    lines: [
      "No railway station in Coorg itself",
      "Nearest railhead: Mysuru: approx 120 km (~3 hrs)",
      "Alternative railhead: Hassan: approx 115 km",
      "Cabs & buses available from both stations",
    ],
  },
  {
    icon: "car",
    title: "By Road",
    lines: [
      "From Bengaluru: approx 250–265 km (~5.5–6 hrs) via Mysuru",
      "From Mysuru: approx 120 km (~3 hrs)",
      "From Mangaluru: approx 135 km (~3.5 hrs)",
      "KSRTC & private buses run to Madikeri; self-drive is popular",
    ],
  },
];

// End-to-end driving spans across the district.
export const SPANS: { label: string; detail: string }[] = [
  {
    label: "East ↔ West",
    detail:
      "Bylakuppe Golden Temple (east) to Talakaveri (west) is ≈ 78 km, about 2.5 hrs on winding ghat roads.",
  },
  {
    label: "North ↔ South",
    detail:
      "Mallalli Falls (north) to the Nagarhole / Kutta safari gate (south) is ≈ 110 km, about 3.5 hrs.",
  },
];

// -- Places, grouped into three geographic clusters ----------------------------
export type Cluster = "central" | "eastern" | "western";

export interface ClusterInfo {
  id: Cluster;
  name: string;
  blurb: string;
}

export const CLUSTERS: ClusterInfo[] = [
  { id: "central", name: "Central Coorg", blurb: "In & around Madikeri town" },
  {
    id: "eastern",
    name: "Eastern Coorg",
    blurb: "Kushalnagar & Somwarpet, the Bengaluru / Mysuru entry side",
  },
  {
    id: "western",
    name: "Western & Southern Coorg",
    blurb: "Bhagamandala, Virajpet & Kutta, the rugged, high-altitude core",
  },
];

export type PlaceKind =
  | "viewpoint"
  | "waterfall"
  | "wildlife"
  | "spiritual"
  | "nature"
  | "heritage";

export interface Place {
  name: string;
  kind: PlaceKind;
  cluster: Cluster;
  location: string;
  distance: string; // approx from Madikeri
  detail: string;
}

export const PLACES: Place[] = [
  // ---- Central ----
  {
    name: "Raja's Seat",
    kind: "viewpoint",
    cluster: "central",
    location: "Madikeri town",
    distance: "Town centre · 0 km",
    detail:
      "A scenic garden offering panoramic views over the misty valleys, Coorg's favourite sunset spot, with a musical fountain and a small toy train.",
  },
  {
    name: "Madikeri Fort",
    kind: "heritage",
    cluster: "central",
    location: "Centre of Madikeri town",
    distance: "0 km",
    detail:
      "A 17th-century fort housing a museum and colonial-era architecture, right in the heart of town.",
  },
  {
    name: "Omkareshwara Temple",
    kind: "spiritual",
    cluster: "central",
    location: "Stuart Hill, Madikeri",
    distance: "1 km from the bus stand",
    detail:
      "A historic landmark built in a striking Indo-Saracenic style that blends Gothic and Islamic architectural touches.",
  },
  {
    name: "Gaddige (Raja's Tombs)",
    kind: "heritage",
    cluster: "central",
    location: "Mahadevpet, Madikeri",
    distance: "2 km north",
    detail:
      "Elegant Indo-Saracenic domed tombs of the former Coorg royalty, set on a quiet, breezy hill.",
  },
  {
    name: "Abbey (Abbi) Falls",
    kind: "waterfall",
    cluster: "central",
    location: "Hebbettageri, Madikeri",
    distance: "7–8 km",
    detail:
      "A striking ~70-ft waterfall framed perfectly by private coffee and spice plantations.",
  },
  {
    name: "Mandalpatti Viewpoint",
    kind: "viewpoint",
    cluster: "central",
    location: "Pushpagiri forest range",
    distance: "25 km · 4x4 jeep for the last stretch",
    detail:
      "A breathtaking ridge of clouds and endless Western Ghats panoramas, reached by a thrilling jeep track.",
  },

  // ---- Eastern ----
  {
    name: "Bylakuppe Golden Temple (Namdroling Monastery)",
    kind: "spiritual",
    cluster: "eastern",
    location: "Bylakuppe, near Kushalnagar",
    distance: "34 km east",
    detail:
      "One of India's largest Tibetan settlements, famed for its huge golden statues and vibrant temple artwork.",
  },
  {
    name: "Cauvery Nisargadhama",
    kind: "nature",
    cluster: "eastern",
    location: "Near Kushalnagar",
    distance: "28 km east",
    detail:
      "A river-delta island reached by a hanging rope bridge, with a deer park and cool bamboo groves.",
  },
  {
    name: "Dubare Elephant Camp",
    kind: "wildlife",
    cluster: "eastern",
    location: "Dubare Forest, on the River Cauvery",
    distance: "29 km via Kushalnagar road",
    detail:
      "A riverside government camp where you can watch, feed and see trained Asiatic elephants being bathed.",
  },
  {
    name: "Chiklihole Reservoir",
    kind: "nature",
    cluster: "eastern",
    location: "Nanjarayapattana",
    distance: "15 km",
    detail:
      "A secluded, semi-circular dam off the tourist grid, wrapped in thick, quiet woods.",
  },
  {
    name: "Mallalli Falls",
    kind: "waterfall",
    cluster: "eastern",
    location: "Somwarpet taluk (North Coorg)",
    distance: "42 km north-east",
    detail:
      "A thunderous, dramatic white waterfall tumbling down the Kumaradhara river basin.",
  },

  // ---- Western & Southern ----
  {
    name: "Bhagamandala (Triveni Sangama)",
    kind: "spiritual",
    cluster: "western",
    location: "Bhagamandala town",
    distance: "36 km west",
    detail:
      "The scenic confluence of three rivers, a peaceful riverside spot ringed by forested hills.",
  },
  {
    name: "Talakaveri",
    kind: "spiritual",
    cluster: "western",
    location: "Near Bhagamandala",
    distance: "44 km west",
    detail:
      "The geographic origin of the River Cauvery, high on the slopes of the Brahmagiri mountain range.",
  },
  {
    name: "Tadiandamol Peak",
    kind: "viewpoint",
    cluster: "western",
    location: "Near Kakkabe",
    distance: "37 km south-west",
    detail:
      "The highest peak in Coorg (1,748 m) and an exceptional, highly rewarding day-trek.",
  },
  {
    name: "Nalknad Palace",
    kind: "heritage",
    cluster: "western",
    location: "Foothills of Tadiandamol, Kakkabe",
    distance: "35 km south-west",
    detail:
      "A historic 18th-century double-storied palace with ancient wall paintings and hidden chambers.",
  },
  {
    name: "Chelavara Falls",
    kind: "waterfall",
    cluster: "western",
    location: "Cheyyandane village, near Kakkabe",
    distance: "40 km south-west",
    detail:
      "A tortoise-shaped natural waterfall hidden inside private orange and coffee plantations.",
  },
  {
    name: "Iruppu Falls (Lakshmana Tirtha)",
    kind: "waterfall",
    cluster: "western",
    location: "Srimangala / Kutta region",
    distance: "75 km south",
    detail:
      "A gorgeous freshwater cascade originating in the Brahmagiri peaks, deep in south Coorg.",
  },
  {
    name: "Nagarhole National Park",
    kind: "wildlife",
    cluster: "western",
    location: "Kutta / Hunsur border",
    distance: "80–90 km south",
    detail:
      "A major tiger reserve with wild Asiatic elephants, gaur, deer and big cats, explored on a jeep safari.",
  },
];

// -- Waterfalls (incl. hidden & offbeat) ---------------------------------------
export interface Waterfall {
  name: string;
  distance: string;
  reach: string;
  detail: string;
}

export const WATERFALLS: Waterfall[] = [
  {
    name: "Abbey (Abbi) Falls",
    distance: "7–8 km (Hebbettageri)",
    reach: "15-min drive from town, then a 5-min walk to the viewing bridge.",
    detail:
      "Coorg's best-known ~70-ft cascade in a coffee & spice estate; fullest right after the monsoon.",
  },
  {
    name: "Iruppu Falls (Lakshmana Tirtha)",
    distance: "75 km south (Srimangala / Kutta)",
    reach: "≈ 2.5-hr drive south, then a short paved walk from the car park.",
    detail:
      "A gorgeous freshwater cascade from the Brahmagiri peaks and the gateway to the Brahmagiri trek.",
  },
  {
    name: "Chelavara Falls",
    distance: "40 km south-west (Cheyyandane)",
    reach: "Drive to Cheyyandane, then a short rocky walk to the base.",
    detail:
      "A tortoise-shaped falls hidden in private orange and coffee plantations; slippery near the top.",
  },
  {
    name: "Mallalli Falls",
    distance: "42 km north-east (Somwarpet)",
    reach: "Drive, then a flight of steps / short trek down to the viewpoints.",
    detail:
      "A thunderous two-tier falls on the Kumaradhara river, spectacular in the rains.",
  },
  {
    name: "Hallery Falls",
    distance: "15 km (towards Somwarpet)",
    reach: "Drive, then a short walk into a private estate.",
    detail:
      "A quiet, uncrowded waterfall tucked deep in an estate, perfect for sitting on the rocks in peace.",
  },
  {
    name: "Devaragundi Falls (God's Pool)",
    distance: "≈ 80 km (near Thodikana)",
    reach: "Drive, then a short forest hike to the pool.",
    detail:
      "A magical, untouched stream spilling forcefully into a deep green natural rock basin in dense forest.",
  },
  {
    name: "Chingara Falls",
    distance: "Between Madikeri & Virajpet",
    reach: "Drive, then a short trek through tropical jungle paths.",
    detail:
      "A powerful, perennial cascade that flows year-round, hidden in the forest belt.",
  },
  {
    name: "Kote Abbi Falls",
    distance: "Near Somwarpet / Kote Betta",
    reach: "Drive to the Kote Betta area, then a short walk to the tiers.",
    detail:
      "A gentle, multi-tiered cascade over flat black rocks into shallow natural wading pools (not the main Abbey Falls).",
  },
];

// -- Treks & trails (ranked-ish by difficulty) ---------------------------------
export type Difficulty = "Easy" | "Moderate" | "Hard";

export interface Trek {
  name: string;
  difficulty: Difficulty;
  distance: string; // where it starts
  duration: string;
  reach: string; // how to travel / access
  detail: string;
}

export const TREKS: Trek[] = [
  {
    name: "Kumara Parvatha (Pushpagiri)",
    difficulty: "Hard",
    distance: "Somwarpet side / via Kukke Subramanya",
    duration: "13–14 km one way · 8–10 hrs",
    reach:
      "Drive to the Somwarpet-side base and start pre-dawn; a forest permit is required for the Pushpagiri sanctuary.",
    detail:
      "Widely regarded as one of the toughest treks in South India, dense forest, open rock faces and sheer grasslands.",
  },
  {
    name: "Tadiandamol",
    difficulty: "Moderate",
    distance: "≈ 37 km SW (base: Kakkabe / Nalknad)",
    duration: "5–6 hrs · ~7 km one way",
    reach:
      "Drive to Kakkabe, continue to the Nalknad Palace trailhead, then climb through shola forest and grassland.",
    detail:
      "Coorg's highest peak (1,748 m), rewarded with ridge-top views floating above the clouds.",
  },
  {
    name: "Nishani Motte",
    difficulty: "Moderate",
    distance: "Starts near the Talakaveri wildlife range",
    duration: "~15 km round · 4–5 hrs",
    reach:
      "A mandatory forest-department guide leads you from the Talakaveri range side; carry water and rain gear.",
    detail:
      "A spectacular ridge walk along the Karnataka–Kerala border, shola forest opening into alpine grassland.",
  },
  {
    name: "Kote Betta (Fort Hill)",
    difficulty: "Moderate",
    distance: "Madapur (between Madikeri & Somwarpet)",
    duration: "10–12 km · ~5 hrs",
    reach:
      "Drive to Madapur; the trail climbs from flat coffee plantations into forest slopes up to the rocky summit.",
    detail:
      "Coorg's third-highest peak, with a beautiful transition from estates to lush green ridges.",
  },
  {
    name: "Kabbe Hills",
    difficulty: "Easy",
    distance: "≈ 30 km (near Kakkabe / Yavakapadi)",
    duration: "~2–3 hrs",
    reach:
      "Drive to the Kabbe base for a gentle 30-min ridge walk; pair it with nearby Chelavara Falls.",
    detail:
      "Rolling grassland with 360° views of mist rising from the Kerala valleys, ideal for beginners.",
  },
  {
    name: "Kopatty Hills",
    difficulty: "Easy",
    distance: "Near Bhagamandala",
    duration: "~6 km · ~3 hrs",
    reach:
      "Drive toward Bhagamandala; an easy trail weaves through coffee estates, meadows and quiet streams.",
    detail:
      "A highly underrated ridge walk with lovely views and no extreme physical exhaustion.",
  },
  {
    name: "Brahmagiri Peak",
    difficulty: "Moderate",
    distance: "Trailhead at Iruppu Falls",
    duration: "5–6 hrs",
    reach:
      "Drive to Iruppu Falls, collect the forest permit at the check-post, then trek via the falls into the sanctuary.",
    detail:
      "A rich-wildlife trek on the Kodagu–Kerala border; go with a guide and pair it with Iruppu Falls.",
  },
];

// -- Itineraries ----------------------------------------------------------------
export interface Itinerary {
  id: string;
  label: string;
  title: string;
  stops: string[];
}

export const ITINERARIES: Itinerary[] = [
  {
    id: "1day",
    label: "1 Day",
    title: "Madikeri Highlights",
    stops: [
      "Morning: Raja's Seat for the valley views",
      "Madikeri Fort & Omkareshwara landmark",
      "Abbey Falls amid the plantations",
      "Lunch: an authentic Kodava thali (Pandi curry & kadambuttu)",
      "Sunset back at Raja's Seat, then the local market",
    ],
  },
  {
    id: "2day",
    label: "2 Days",
    title: "Town + Nature",
    stops: [
      "Day 1: Raja's Seat, Madikeri Fort, Abbey Falls, town food trail",
      "Day 2 morning: Dubare Elephant Camp on the Cauvery",
      "Day 2: Bylakuppe Golden Temple",
      "Day 2 evening: Cauvery Nisargadhama bamboo island",
      "Overnight: coffee-estate homestay",
    ],
  },
  {
    id: "3day",
    label: "3 Days",
    title: "The Complete Coorg",
    stops: [
      "Day 1: Madikeri sights + Abbey Falls",
      "Day 2: Dubare, Golden Temple, Nisargadhama",
      "Day 3 morning: Mandalpatti jeep sunrise / Talakaveri",
      "Day 3: coffee-estate plantation tour & tasting",
      "Optional: Iruppu Falls or a Nagarhole safari",
    ],
  },
];

export const FOODS: string[] = [
  "Pandi Curry (Coorg pork)",
  "Kadambuttu (rice dumplings)",
  "Noolputtu (string hoppers)",
  "Akki Roti",
  "Koli Curry (chicken)",
  "Baimbale Curry (bamboo shoot)",
  "Kumm Curry (wild mushroom)",
  "Coorg Filter Coffee",
  "Kaimada & Payasa",
];

// -- Local guide services -------------------------------------------------------
export interface GuideService {
  icon: "guide" | "bike" | "route";
  title: string;
  price: string;
  detail: string;
}

export const GUIDE_SERVICES: GuideService[] = [
  {
    icon: "guide",
    title: "Personal Local Guide",
    price: "Paid",
    detail:
      "A friendly local who knows every ridge, waterfall and shortcut. They plan your route, sort out permits and take you to the spots most visitors never find.",
  },
  {
    icon: "bike",
    title: "Solo Guide + Two-Wheeler",
    price: "Paid",
    detail:
      "Travelling alone? Ride along with a local guide on a two-wheeler, nimble on the hill roads, flexible with your time and great company for a solo trip.",
  },
  {
    icon: "route",
    title: "Custom Itinerary Planning",
    price: "On request",
    detail:
      "Share your dates and interests and we craft a day-by-day plan across falls, treks, coffee estates and the best Kodava food.",
  },
];

// Pre-filled WhatsApp message for guide bookings.
export const GUIDE_ENQUIRY =
  "Hi Mehfil Coorg, I'd like to arrange a local travel guide in Coorg. " +
  "Travel dates: ____ | Number of people: ____ | " +
  "Interested in: guide / solo guide with two-wheeler / custom plan.";

// -- Unique experiences ---------------------------------------------------------
export interface Experience {
  icon: "mountain" | "coffee" | "waves" | "binoculars" | "camera" | "tent";
  title: string;
  detail: string;
}

export const EXPERIENCES: Experience[] = [
  {
    icon: "tent",
    title: "Heritage Kodava Homestay",
    detail:
      "Skip the hotels: stay on a working plantation, tour coffee and pepper estates, sip fresh local brew and try Kodava classics like Pandi Curry and Kadambuttu.",
  },
  {
    icon: "coffee",
    title: "Coffee Estate Tour",
    detail:
      "Guided plantation walks through shade-grown Arabica and Robusta, pepper and cardamom, usually ending with a freshly brewed cup.",
  },
  {
    icon: "waves",
    title: "White-Water Rafting",
    detail:
      "The Barapole river in south Coorg serves up Class II–IV rapids; best from July to October, during and just after the monsoon.",
  },
  {
    icon: "camera",
    title: "Honnamana Kere Lake",
    detail:
      "Coorg's largest natural lake, ringed by cliffs and coffee near Somwarpet (~6 km), wonderfully calm and photogenic.",
  },
  {
    icon: "binoculars",
    title: "Wildlife Safari",
    detail:
      "Jeep safaris at Nagarhole and Dubare for wild elephants, gaur, deer and, if you're lucky, big cats.",
  },
  {
    icon: "mountain",
    title: "Kabbe & Chelavara Combo",
    detail:
      "An easy 30-minute Kabbe Hills ridge walk with 360° valley views, paired with the nearby Chelavara Falls.",
  },
];
