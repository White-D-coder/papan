export interface TourPackage {
  id: string;
  title: string;
  subtitle: string;
  destination: "Japan" | "Switzerland" | "Grand Alpine & Asia";
  duration: string;
  dates: string;
  groupCap: number;
  slotsLeft: number;
  price: string;
  heroImage: string;
  badgeText: string;
  highlights: string[];
  itinerarySummary: { day: string; title: string; desc: string }[];
}

export const CURATED_TOURS: TourPackage[] = [
  {
    id: "japan-autumn-luxury-2026",
    title: "Japan: Wabi-Sabi & Modern Elegance",
    subtitle: "Tokyo, Kyoto, Hakone & Secret Alpine Villages",
    destination: "Japan",
    duration: "10 Days / 9 Nights",
    dates: "October 18 - October 28, 2026",
    groupCap: 8,
    slotsLeft: 3,
    price: "$7,850 USD",
    heroImage: "/images/pexels-dudubangbang-29028514.jpg",
    badgeText: "Only 3 Slots Left",
    highlights: [
      "Private Michelin Tsukiji Omakase Session",
      "Kyoto 300-Year-Old Sunset Tea Ceremony",
      "Private Onsen Ryokan Stay in Hakone with Mt. Fuji Views",
      "Exclusive VIP Access to Doraemon & Ghibli Curation",
    ],
    itinerarySummary: [
      { day: "Day 1-3", title: "Tokyo Neon & Hidden Speakeasies", desc: "Arrival in Shinjuku, vinyl jazz bars, Tsukiji private dining, and futuristic art installations." },
      { day: "Day 4-6", title: "Hakone Mountain Springs", desc: "Private bullet train, luxury Ryokan stay, open-air geothermal baths, and kaiseki dining." },
      { day: "Day 7-9", title: "Kyoto Bamboo & Geisha Districts", desc: "Private morning temple entrance, tea ceremony, hidden craft workshops, and Arashiyama." },
      { day: "Day 10", title: "Sayonara Tokyo Gala", desc: "Farewell rooftop dinner overlooking Tokyo Tower and personalized souvenir gifts." },
    ],
  },
  {
    id: "switzerland-alpine-chalet-2026",
    title: "Switzerland: Alpine Glaciers & Luxury Chalets",
    subtitle: "Zurich, Zermatt, St. Moritz & Glacier Express",
    destination: "Switzerland",
    duration: "8 Days / 7 Nights",
    dates: "December 05 - December 13, 2026",
    groupCap: 6,
    slotsLeft: 2,
    price: "$9,200 USD",
    heroImage: "/images/switzerland.jpg",
    badgeText: "Currently Traveling / 2 Slots Left",
    highlights: [
      "First-Class Excellence Class Glacier Express Scenic Train",
      "Helicopter Flight over Matterhorn & Glacier Snowfall",
      "Private Alpine Chalet Chef & Fondue Pairing in Zermatt",
      "Luxury Spa & Hydrotherapy in St. Moritz Thermal Baths",
    ],
    itinerarySummary: [
      { day: "Day 1-2", title: "Zurich Lake Elegance", desc: "Private limousine transfer, lakeside grand hotel check-in, and Swiss chocolate workshop." },
      { day: "Day 3-5", title: "Zermatt Matterhorn Magic", desc: "Glacier Express panorama rail journey, ski-in/ski-out chalet, and helicopter flyover." },
      { day: "Day 6-7", title: "St. Moritz High Alpine Spa", desc: "Thermal spring rejuvenation, starlight mountain dining, and private boutique shopping." },
      { day: "Day 8", title: "Zurich Farewell", desc: "Private shopping concierge and airport VIP lounge escort." },
    ],
  },
];
