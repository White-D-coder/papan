export interface FoodGuideItem {
  id: string;
  title: string;
  category: "Hidden Gastronomy" | "Tea & Zen" | "Nightlife & Izakaya" | "Artisan Craft";
  location: string;
  image: string;
  rating: string;
  highlights: string[];
  description: string;
  exclusiveTip: string;
}

export interface AnimeVaultItem {
  id: string;
  title: string;
  jpTitle: string;
  category: "Ghibli Magic" | "Retro Vinyl & Pop Art" | "Doraemon World" | "Otaku Luxury";
  location: string;
  iconName: string;
  image: string;
  shortDesc: string;
  curatorSecret: string;
  reservationDifficulty: "VIP Access Provided" | "Advance Booking Required" | "Walk-In Hidden Gem";
}

export const JAPAN_FOOD_GUIDES: FoodGuideItem[] = [
  {
    id: "tsukiji-omakase",
    title: "Hidden 6-Seat Tsukiji Omakase",
    category: "Hidden Gastronomy",
    location: "Tsukiji Outer Market, Tokyo",
    image: "/images/pexels-dudubangbang-29028514.jpg",
    rating: "4.95 ★",
    highlights: ["Fatty Tuna Aburi", "Uni Flight", "Hand-crafted Sake Pairings"],
    description: "Tucked behind a nondescript wooden doorway in old Tsukiji, Master Kenji serves ultra-rare seasonal catch sourced directly at 4 AM.",
    exclusiveTip: "Ask for the off-menu smoked wild yellowtail paired with 15-year aged Junmai Daiginjo.",
  },
  {
    id: "kyoto-matcha-zen",
    title: "300-Year-Old Uji Matcha Ceremony",
    category: "Tea & Zen",
    location: "Higashiyama, Kyoto",
    image: "/images/japan-nara.jpg",
    rating: "4.98 ★",
    highlights: ["Stone-ground Matcha", "Seasonal Wagashi", "Private Zen Garden"],
    description: "Escape the crowds in a private 17th-century tea pavilion overlooking a bamboo sanctuary in Kyoto's historical hills.",
    exclusiveTip: "Private sunset tea sessions are exclusively reserved for Purva's group tour guests.",
  },
  {
    id: "golden-gai-jazz",
    title: "Secret Vinyl Jazz Bar",
    category: "Nightlife & Izakaya",
    location: "Golden Gai, Shinjuku",
    image: "/images/pexels-beigh-yabaar-865585625-32584961.jpg",
    rating: "4.92 ★",
    highlights: ["Rare 70s Japanese Jazz Records", "Artisanal Highballs", "5-Guest Capacity"],
    description: "Step into an intimate 3rd-floor attic housing over 3,000 vintage vinyl records and rare Japanese whiskies.",
    exclusiveTip: "Ring the brass bell twice and mention 'Purva's Curator Note' for entry.",
  },
  {
    id: "osaka-street-gourmet",
    title: "Michelin-Rated Street Wagyu",
    category: "Hidden Gastronomy",
    location: "Dotonbori Alleyways, Osaka",
    image: "/images/pexels-afhamhmsyri-34021102.jpg",
    rating: "4.96 ★",
    highlights: ["A5 Miyazaki Ribeye Slices", "Smoked Charcoal Glaze", "Secret Tare Sauce"],
    description: "Experience Osaka's street food culture elevated to Michelin standards with melt-in-your-mouth A5 Wagyu skewers.",
    exclusiveTip: "Go at 9:30 PM after the main dinner rush for the fresh truffle-injected wagyu specials.",
  },
];

export const ANIME_VAULT_ITEMS: AnimeVaultItem[] = [
  {
    id: "doraemon-museum-luxury",
    title: "Doraemon Futuristic Gadget & Pop Art Gallery",
    jpTitle: "ドラえもん 未来ギャラリー",
    category: "Doraemon World",
    location: "Kawasaki & Roppongi Hills, Tokyo",
    iconName: "Sparkles",
    image: "/images/pexels-masoodaslami-14680969.jpg",
    shortDesc: "A sleek, glassmorphic pop-art curation dedicated to Fujiko F. Fujio's iconic Doraemon universe, showcasing vintage first-edition prints and high-fashion collaborations.",
    curatorSecret: "Includes VIP fast-track tickets and access to the private rooftop cafe serving Anywhere Door themed matcha parfaits.",
    reservationDifficulty: "VIP Access Provided",
  },
  {
    id: "ghibli-countryside-sanctuary",
    title: "Studio Ghibli Countryside Architecture Trail",
    jpTitle: "ジブリの森と建築",
    category: "Ghibli Magic",
    location: "Nagano & Mitaka Forest",
    iconName: "Compass",
    image: "/images/japan-nara.jpg",
    shortDesc: "Walk inside real-life inspirations for Spirited Away and Howl's Moving Castle, guided by local historical restoration artisans.",
    curatorSecret: "Stay in an authentic thatched-roof Onsen ryokan that inspired Hayao Miyazaki's bathhouse designs.",
    reservationDifficulty: "Advance Booking Required",
  },
  {
    id: "retro-akihabara-vinyl",
    title: "Akihabara High-End Anime & Vintage Synth Lounge",
    jpTitle: "秋葉原 レトロサウンド",
    category: "Retro Vinyl & Pop Art",
    location: "Akihabara Electric Town, Tokyo",
    iconName: "Headphones",
    image: "/images/pexels-beigh-yabaar-865585625-32584961.jpg",
    shortDesc: "Curated audiophile sanctuary featuring rare 80s anime synth soundtracks on cassette & analog tape, paired with craft Japanese gin cocktails.",
    curatorSecret: "Private listening booths available for Purva's travel guests upon request.",
    reservationDifficulty: "Walk-In Hidden Gem",
  },
];
