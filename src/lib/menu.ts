import type { CateringId } from "./pricing";

// =============================================================================
// DETAILED MENUS
// A representative menu for each catering style. Real spreads are customised
// per event during consultation — these show the breadth on offer.
// =============================================================================

export interface MenuSection {
  title: string;
  items: string[];
  /** Optional veg/non-veg tag, used by the regional menus. */
  kind?: "veg" | "nonveg";
}

export interface Menu {
  /** Diet/belief note shown as a badge. */
  note: string;
  sections: MenuSection[];
}

export type RegionId = "karnataka" | "coorg" | "kerala";

export interface RegionalMenu {
  id: RegionId;
  name: string;
  tagline: string;
  sections: MenuSection[];
}

export const MENUS: Record<CateringId, Menu> = {
  "standard-veg": {
    note: "100% Pure Vegetarian",
    sections: [
      { title: "Welcome Drinks", items: ["Spiced Buttermilk", "Fresh Lime Soda", "Rose Milk"] },
      { title: "Starters", items: ["Gobi Manchurian", "Veg Spring Rolls", "Paneer 65", "Masala Papad"] },
      { title: "Soups", items: ["Sweet Corn Soup", "Tomato Shorba"] },
      { title: "Main Curries", items: ["Paneer Butter Masala", "Mixed Veg Kurma", "Dal Tadka", "Aloo Gobi"] },
      { title: "Rice & Breads", items: ["Jeera Rice", "Veg Pulao", "Phulka", "Butter Naan"] },
      { title: "South Indian Counter", items: ["Steamed Rice", "Sambar", "Rasam", "Curd", "Papad & Pickle"] },
      { title: "Desserts", items: ["Gulab Jamun", "Seasonal Fruit Salad"] },
    ],
  },

  "premium-veg": {
    note: "Pure Veg · Live Counters",
    sections: [
      { title: "Welcome Mocktails", items: ["Virgin Mojito", "Blue Lagoon", "Watermelon Cooler", "Filter Coffee / Masala Chai"] },
      { title: "Live Chaat Counter", items: ["Pani Puri", "Sev Puri", "Dahi Papdi Chaat", "Ragda Pattice"] },
      { title: "Starters", items: ["Paneer Tikka", "Hara Bhara Kabab", "Crispy Corn", "Mushroom Pepper Fry", "Veg Kathi Rolls"] },
      { title: "Soups", items: ["Cream of Broccoli", "Hot & Sour Veg", "Lemon Coriander"] },
      { title: "Main Curries", items: ["Shahi Paneer", "Malai Kofta", "Veg Kolhapuri", "Dal Makhani", "Bhindi Masala"] },
      { title: "Rice & Breads", items: ["Hyderabadi Veg Dum Biryani", "Ghee Rice", "Assorted Naan & Kulcha", "Missi Roti"] },
      { title: "Live Pasta & Dosa", items: ["Penne Alfredo / Arrabbiata", "Assorted Dosa Counter"] },
      { title: "Desserts", items: ["Gajar Ka Halwa", "Rasmalai", "Assorted Ice Creams", "Angoori Rabri"] },
    ],
  },

  "jain-satvik": {
    note: "Pure Veg · No Onion, Garlic or Root Vegetables",
    sections: [
      { title: "Welcome Drinks", items: ["Fresh Coconut Water", "Aam Panna", "Chaas (No Garlic)"] },
      { title: "Starters", items: ["Jain Paneer Tikka", "Raw Banana Cutlet", "Corn Palak Tikki", "Fried Moong Bhajiya"] },
      { title: "Main Curries", items: ["Paneer Kaju Curry", "Jain Veg Kofta", "Sev Tameta nu Shaak", "Dal (No Garlic)"] },
      { title: "Rice & Breads", items: ["Jain Veg Pulao", "Steamed Rice", "Phulka", "Puri", "Bajra Rotla"] },
      { title: "Gujarati / Satvik Thali", items: ["Kadhi", "Undhiyu (Jain)", "Batata Nu Shaak", "Farsan"] },
      { title: "Desserts", items: ["Shrikhand", "Moong Dal Halwa", "Jalebi"] },
    ],
  },

  "kodava-nonveg": {
    note: "Traditional Non-Veg + Veg Accompaniments",
    sections: [
      { title: "Welcome Drinks", items: ["Spiced Buttermilk", "Fresh Lime Soda", "Filter Coffee"] },
      { title: "Non-Veg Starters", items: ["Koli Barthad (Dry Chicken)", "Fish Fry", "Mutton Pepper Fry", "Chilli Chicken"] },
      { title: "Signature Mains", items: ["Pandi Curry (Coorg Pork)", "Koli Curry (Chicken)", "Mutton Curry", "Meen Curry (Fish)"] },
      { title: "Veg Accompaniments", items: ["Kumm Curry (Mushroom)", "Mixed Veg Palya", "Dal"] },
      { title: "Rice & Breads", items: ["Kadambuttu (Rice Dumplings)", "Akki Roti", "Ghee Rice", "Steamed Rice", "Chapati"] },
      { title: "Sides", items: ["Rasam", "Curd", "Papad", "Pickle & Salad"] },
      { title: "Desserts", items: ["Payasa", "Gulab Jamun", "Fruit Salad"] },
    ],
  },

  "halal-nonveg": {
    note: "Certified Halal · Prepared in a Separate Kitchen",
    sections: [
      { title: "Welcome Drinks", items: ["Rooh Afza Sharbat", "Fresh Lime", "Sulaimani Chai"] },
      { title: "Non-Veg Starters", items: ["Chicken Seekh Kebab", "Mutton Shami Kebab", "Fish Tikka", "Tandoori Chicken", "Chicken 65"] },
      { title: "Signature Mains", items: ["Hyderabadi Chicken Dum Biryani", "Mutton Rogan Josh", "Butter Chicken", "Nihari", "Fish Curry"] },
      { title: "Veg Accompaniments", items: ["Dal Fry", "Paneer Masala", "Mixed Raita", "Mirchi Ka Salan"] },
      { title: "Breads & Rice", items: ["Rumali Roti", "Sheermal", "Butter Naan", "Bagara Rice"] },
      { title: "Desserts", items: ["Double Ka Meetha", "Sheer Khurma", "Qubani Ka Meetha", "Kulfi"] },
    ],
  },

  "grand-buffet": {
    note: "Veg + Non-Veg · Multi-Cuisine Grand Spread",
    sections: [
      { title: "Welcome & Beverages", items: ["Signature Mocktail Bar", "Fresh Juices", "Tea / Coffee Station"] },
      { title: "Live Counters", items: ["Chaat Counter", "Pasta Station", "Dosa & Appam", "Tandoor Live Grill", "Pan-Asian Wok"] },
      { title: "Indian — Veg", items: ["Paneer Lababdar", "Dal Makhani", "Veg Biryani", "Assorted Breads"] },
      { title: "Indian — Non-Veg", items: ["Chicken Biryani", "Mutton Curry", "Fish Amritsari", "Butter Chicken"] },
      { title: "Continental", items: ["Grilled Veg / Fish", "Herb Roast Chicken", "Au Gratin", "Garden Salads"] },
      { title: "Pan-Asian", items: ["Thai Green Curry", "Hakka Noodles", "Chilli Garlic Prawns", "Fried Rice"] },
      { title: "Dessert Studio", items: ["Live Jalebi", "Cheesecake & Pastries", "Ice-Cream Bar", "Assorted Indian Sweets"] },
    ],
  },
};

// =============================================================================
// REGIONAL SPECIALITIES
// Full regional spreads (vegetarian and non-vegetarian). Any dish can be added
// to a package or served as a live counter; menus are customised per event.
// =============================================================================

export const REGIONAL_MENUS: RegionalMenu[] = [
  {
    id: "karnataka",
    name: "Karnataka Style",
    tagline:
      "From Udupi tiffins and Mysore classics to North Karnataka rotti and coastal Mangalorean seafood.",
    sections: [
      {
        title: "Tiffin & Breakfast",
        kind: "veg",
        items: [
          "Masala Dosa",
          "Set Dosa",
          "Neer Dosa",
          "Rava Idli",
          "Idli & Medu Vada",
          "Mangalore Buns",
          "Goli Baje (Mangalore Bajji)",
          "Khara Bath",
          "Kesari Bath",
          "Uppittu (Upma)",
        ],
      },
      {
        title: "Snacks & Starters",
        kind: "veg",
        items: [
          "Maddur Vada",
          "Mysore Bonda",
          "Nippattu",
          "Kodubale",
          "Aloo Bonda",
          "Bajji & Bonda Platter",
        ],
      },
      {
        title: "Vegetarian Mains",
        kind: "veg",
        items: [
          "Bisi Bele Bath",
          "Vangi Bath",
          "Ragi Mudde with Saaru",
          "Jolada Rotti with Ennegayi (stuffed brinjal)",
          "Majjige Huli (Mor Kuzhambu)",
          "Mixed Veg Palya",
          "Tovve (dal)",
          "Gojju",
          "Kootu",
        ],
      },
      {
        title: "Non-Vegetarian Mains",
        kind: "nonveg",
        items: [
          "Kori Gassi (Mangalorean Chicken Curry)",
          "Chicken Ghee Roast",
          "Nati Koli Saaru (country chicken)",
          "Mangalorean Fish Curry",
          "Anjal (Kingfish) Tawa Fry",
          "Prawns Sukka",
          "Mutton Saaru",
        ],
      },
      {
        title: "Rice & Breads",
        kind: "veg",
        items: [
          "Steamed Rice",
          "Ghee Rice",
          "Chitranna (lemon rice)",
          "Puliyogare (tamarind rice)",
          "Akki Rotti",
          "Jolada Rotti (jowar)",
          "Chapati",
        ],
      },
      {
        title: "Accompaniments",
        kind: "veg",
        items: [
          "Saaru (rasam)",
          "Kosambari (salad)",
          "Majjige (buttermilk)",
          "Happala (papad)",
          "Uppinakayi (pickle)",
          "Raita",
        ],
      },
      {
        title: "Sweets",
        kind: "veg",
        items: [
          "Mysore Pak",
          "Dharwad Peda",
          "Holige / Obbattu (puran poli)",
          "Chiroti",
          "Rava Ladoo",
          "Payasa",
        ],
      },
    ],
  },
  {
    id: "coorg",
    name: "Coorg (Kodava) Style",
    tagline:
      "The bold, earthy cuisine of Kodagu, kachampuli-soured curries, rice dumplings and hill-country specialities.",
    sections: [
      {
        title: "Starters & Fry",
        kind: "nonveg",
        items: [
          "Koli Barthad (dry chicken)",
          "Pandi (Pork) Barthad",
          "Fish Fry",
          "Yerchi (Mutton) Fry",
          "Baimbale (bamboo shoot) Fry",
        ],
      },
      {
        title: "Signature Non-Veg Curries",
        kind: "nonveg",
        items: [
          "Pandi Curry (pork with kachampuli)",
          "Koli Curry (chicken)",
          "Kodava Mutton Curry",
          "Meen Curry (fish)",
          "Chicken Bartad Curry",
        ],
      },
      {
        title: "Vegetarian Specialities",
        kind: "veg",
        items: [
          "Kumm Curry (wild mushroom)",
          "Baimbale Curry (bamboo shoot)",
          "Chekke Curry (raw jackfruit)",
          "Kaad Manga Curry (wild mango)",
          "Kembu (colocasia) Curry",
          "Chekke Kuru Palya (jackfruit seed)",
        ],
      },
      {
        title: "Rice Dumplings & Breads",
        kind: "veg",
        items: [
          "Kadambuttu (steamed rice dumplings)",
          "Paaputtu (steamed rice cake)",
          "Noolputtu (string hoppers)",
          "Thaliya Puttu",
          "Akki Roti",
          "Ghee Rice",
          "Steamed Rice",
        ],
      },
      {
        title: "Accompaniments",
        kind: "veg",
        items: [
          "Pajji (raita)",
          "Bamboo Shoot Pickle",
          "Wild Mango Pickle",
          "Kachampuli",
          "Papad",
        ],
      },
      {
        title: "Sweets & Beverages",
        kind: "veg",
        items: [
          "Thari (semolina) Pudding",
          "Kaimada",
          "Payasa",
          "Coorg Filter Coffee",
        ],
      },
    ],
  },
  {
    id: "kerala",
    name: "Kerala Style",
    tagline:
      "Coconut-rich Nadan cooking, from a full vegetarian Sadya on a banana leaf to Malabar seafood and biryani.",
    sections: [
      {
        title: "Breakfast & Tiffin",
        kind: "veg",
        items: [
          "Appam",
          "Idiyappam (string hoppers)",
          "Puttu & Kadala",
          "Vellayappam",
          "Kerala Dosa",
          "Idli",
        ],
      },
      {
        title: "Snacks & Starters",
        kind: "nonveg",
        items: [
          "Pazham Pori (banana fritters)",
          "Parippu Vada",
          "Uzhunnu Vada",
          "Kerala Chicken 65",
          "Karimeen (Pearl Spot) Fry",
          "Beef Ularthiyathu (dry beef fry)",
          "Banana Chips",
        ],
      },
      {
        title: "Sadya (Vegetarian Feast)",
        kind: "veg",
        items: [
          "Sambar",
          "Avial",
          "Thoran",
          "Olan",
          "Kaalan",
          "Erissery",
          "Kootu Curry",
          "Pulissery",
          "Pachadi & Kichadi",
          "Parippu with Ghee",
          "Injipuli & Naranga Curry",
          "Rasam",
        ],
      },
      {
        title: "Non-Vegetarian Mains",
        kind: "nonveg",
        items: [
          "Nadan Kozhi (Chicken) Curry",
          "Meen Curry (fish in kudampuli)",
          "Karimeen Pollichathu",
          "Nadan Beef Curry",
          "Nadan Mutton Curry",
          "Prawn Moilee",
          "Fish Molee",
          "Kozhi Varutharacha Curry",
        ],
      },
      {
        title: "Rice, Biryani & Breads",
        kind: "veg",
        items: [
          "Kerala Matta (red) Rice",
          "Ghee Rice / Neychoru",
          "Thalassery (Malabar) Chicken Biryani",
          "Malabar Parotta",
          "Appam",
          "Idiyappam",
        ],
      },
      {
        title: "Accompaniments",
        kind: "veg",
        items: [
          "Pappadam",
          "Sharkara Varatti",
          "Manga & Naranga Pickle",
          "Moru (spiced buttermilk)",
          "Banana",
        ],
      },
      {
        title: "Payasam & Sweets",
        kind: "veg",
        items: [
          "Palada Payasam",
          "Ada Pradhaman",
          "Parippu Payasam",
          "Semiya Payasam",
          "Unniyappam",
          "Boli",
        ],
      },
    ],
  },
];
