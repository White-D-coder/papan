export interface DayItinerary {
  day: string;
  title: string;
  location: string;
  description: string;
  activities: string[];
}

export interface BudgetBreakdown {
  category: string;
  amount: string;
  notes: string;
}

export interface DestinationDetail {
  id: string;
  slug: string;
  name: string;
  countryTitle: string;
  categoryTitle: string;
  nativeTitle: string;
  nativeAction: string;
  region: string;
  status: 'filmed' | 'boarding' | 'scheduled';
  statusLabel: string;
  routeFrom: { code: string; city: string };
  routeTo: { code: string; city: string };
  date: string;
  gate: string;
  seat: string;
  classType: string;
  duration: string;
  estimatedBudget: string;
  image: string;
  heroVideoUrl?: string;
  highlights: string[];
  itinerarySummary: string;
  description: string;
  days: DayItinerary[];
  budgetItems: BudgetBreakdown[];
  bestTimeToVisit: string;
  transportTip: string;
}

export const destinationsData: DestinationDetail[] = [
  {
    id: 'jp-2026',
    slug: 'japan',
    name: 'Japan Autumn & Cherry Blossom',
    countryTitle: 'Japan',
    categoryTitle: 'City Tour',
    nativeTitle: '市内ツアー',
    nativeAction: '日本を訪問',
    region: 'East Asia',
    status: 'filmed',
    statusLabel: 'FILMED & RELEASED',
    routeFrom: { code: 'KIX', city: 'OSAKA' },
    routeTo: { code: 'HND', city: 'TOKYO' },
    date: 'OCT 2025 - MAR 2026',
    gate: 'A04',
    seat: '12A',
    classType: 'FIRST CLASS ITINERARY',
    duration: '12 DAYS / 11 NIGHTS',
    estimatedBudget: '$1,850 / PERSON',
    image: '/images/japan-nara.jpg',
    heroVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    highlights: [
      'Nara Deer Park & Todai-ji Temple',
      'Kyoto Secret Bamboo & Higashiyama Walk',
      'Hakone Mount Fuji Onsen Stay',
      'Tokyo Shibuya Crossing & TeamLab Borderless',
      'Bullet Train JR Pass Hack Guide',
    ],
    itinerarySummary:
      'Discover the perfect blend of tradition and innovation in a land like no other. Complete 12-day breakdown from Osaka street food to Tokyo neon lights.',
    description:
      'Japan is a realm where ancient wooden shrines stand in the shadow of neon sky-scrapers. This 12-day guide covers the ultimate golden route: starting in vibrant Osaka, moving through historic Kyoto and serene Fuji Onsen towns, and finishing in futuristic Tokyo.',
    bestTimeToVisit: 'October – November (Autumn Leaves) & March – April (Cherry Blossom)',
    transportTip: 'Opt for the 7-day Kansai-Hiroshima Area Pass or IC Card (Suica/Pasmo) for local transit.',
    days: [
      {
        day: 'Day 1–3',
        title: 'Osaka Food Crawl & Nara Ancient Park',
        location: 'Osaka & Nara',
        description: 'Land at Kansai Airport (KIX). Dive straight into Dotonbori street eats (Takoyaki & Okonomiyaki) and take a day trip to feed friendly bowing deer in Nara Park.',
        activities: ['Dotonbori Neon Street Food', 'Nara Deer Park & Kasuga Taisha', 'Shinsekai Kushikatsu Crawl'],
      },
      {
        day: 'Day 4–7',
        title: 'Kyoto Bamboo Groves & Gion Geisha District',
        location: 'Kyoto',
        description: 'Explore early morning Fushimi Inari torii gates before crowds arrive. Wander preserved wooden tea houses in Higashiyama and catch sunset over Kiyomizu-dera.',
        activities: ['Fushimi Inari 10,000 Gates', 'Arashiyama Bamboo Grove', 'Gion Evening Lantern Walk'],
      },
      {
        day: 'Day 8–9',
        title: 'Mount Fuji Views & Hakone Thermal Springs',
        location: 'Hakone & Lake Kawaguchiko',
        description: 'Relax in a traditional Japanese Ryokan with outdoor volcanic hot springs overlooking Mount Fuji. Ride the Hakone Ropeway and Lake Ashi pirate boat.',
        activities: ['Ryokan Onsen Experience', 'Lake Ashi Cable Car & Fuji Views', 'Owaku-dani Black Egg Valley'],
      },
      {
        day: 'Day 10–12',
        title: 'Tokyo Neon Metropolis & Digital Art',
        location: 'Tokyo',
        description: 'Experience Shibuya Scramble crossing, immerse in teamLab Planets immersive digital art, explore Akihabara tech district, and enjoy Michelin ramen under $12.',
        activities: ['teamLab Planets Digital Art', 'Shibuya Sky Observatory', 'Shinjuku Oidoyokocho Alleyways'],
      },
    ],
    budgetItems: [
      { category: 'Flights (Round-trip)', amount: '$650', notes: 'Booked 4 months in advance on Zipair / ANA' },
      { category: 'Accommodation (11 Nights)', amount: '$660', notes: 'Boutique hotels & Ryokan (~$60/night avg)' },
      { category: 'Local Transport & Bullet Trains', amount: '$240', notes: 'JR Regional Pass + Suica IC Card' },
      { category: 'Food & Dining (12 Days)', amount: '$300', notes: 'Combine 7-Eleven snacks & local Izakayas' },
    ],
  },
  {
    id: 'ch-2026',
    slug: 'switzerland',
    name: 'Swiss Alps & Panoramic Express',
    countryTitle: 'Switzerland',
    categoryTitle: 'Alps Express',
    nativeTitle: 'アルプスツアー',
    nativeAction: 'スイスを訪問',
    region: 'Central Europe',
    status: 'boarding',
    statusLabel: 'BOARDING SOON',
    routeFrom: { code: 'ZRH', city: 'ZURICH' },
    routeTo: { code: 'GVA', city: 'GENEVA' },
    date: 'SUMMER 2026',
    gate: 'B12',
    seat: '04F',
    classType: 'PANORAMIC TICKET',
    duration: '9 DAYS / 8 NIGHTS',
    estimatedBudget: '$2,400 / PERSON',
    image: '/images/switzerland.jpg',
    highlights: [
      'Glacier Express Panoramic Rail Journey',
      'Zermatt & Matterhorn Viewpoints',
      'Grindelwald First Cliff Walk & Cableway',
      'Lake Brienz Crystal Turquoise Kayaking',
      'Swiss Half Fare Pass Optimization',
    ],
    itinerarySummary:
      'Experience majestic alpine peaks, turquoise glacial lakes, and legendary mountain railways on a journey through Europe’s roof.',
    description:
      'Switzerland is the pinnacle of alpine beauty. This 9-day itinerary takes you across snow-capped peaks, crystal clear lakes, and through dramatic mountain passes aboard world-renowned scenic trains.',
    bestTimeToVisit: 'June – September (Alpine Hiking) & December – March (Skiing)',
    transportTip: 'Get the Swiss Half Fare Card combined with SBB app for 50% off all train & cable car rides.',
    days: [
      {
        day: 'Day 1–2',
        title: 'Zurich Old Town & Lake Lucerne',
        location: 'Zurich & Lucerne',
        description: 'Stroll along Bahnhofstrasse, take a scenic boat trip on Lake Lucerne, and cross the historical Chapel Bridge.',
        activities: ['Chapel Bridge Walk', 'Lake Lucerne Steamboat Cruise', 'Mount Pilatus Cogwheel Train'],
      },
      {
        day: 'Day 3–5',
        title: 'Jungfrau Region & Lauterbrunnen Waterfalls',
        location: 'Lauterbrunnen & Grindelwald',
        description: 'Stay in the valley of 72 waterfalls. Hike to Bachalpsee Lake, ride Grindelwald First Tissot Cliff Walk, and visit Jungfraujoch Top of Europe.',
        activities: ['Grindelwald First Cliff Walk', 'Lauterbrunnen Valley Trail', 'Jungfraujoch Railway Pass'],
      },
      {
        day: 'Day 6–7',
        title: 'Zermatt & Matterhorn Sunrise Views',
        location: 'Zermatt',
        description: 'Car-free mountain resort with unmatched views of the iconic Matterhorn. Ride the Gornergrat Bahn cog railway for panoramic glacier vistas.',
        activities: ['Gornergrat Railway', 'Five Lakes Trail Hike', 'Matterhorn Glacier Paradise'],
      },
      {
        day: 'Day 8–9',
        title: 'Glacier Express to Geneva',
        location: 'Zermatt to Geneva',
        description: 'Board the slow express train with floor-to-ceiling glass windows across 291 bridges and 91 tunnels ending at Lake Geneva.',
        activities: ['Glacier Express Scenic Rail', 'Jet d’Eau Fountain Walk', 'Old Town Geneva Tour'],
      },
    ],
    budgetItems: [
      { category: 'Flights (Round-trip)', amount: '$750', notes: 'Zurich in / Geneva out open-jaw ticket' },
      { category: 'Accommodation (8 Nights)', amount: '$880', notes: 'Cozy Swiss chalets (~$110/night avg)' },
      { category: 'Swiss Half Fare Rail Pass', amount: '$320', notes: 'Covers all trains, boats & cable cars' },
      { category: 'Food & Dining (9 Days)', amount: '$450', notes: 'Coop supermarket meals + fondue nights' },
    ],
  },
  {
    id: 'kr-2026',
    slug: 'south-korea',
    name: 'South Korea & Jeju Island',
    countryTitle: 'South Korea',
    categoryTitle: 'Coastal Trail',
    nativeTitle: '済州島ツアー',
    nativeAction: '韓国を訪問',
    region: 'East Asia',
    status: 'boarding',
    statusLabel: 'BOARDING SOON',
    routeFrom: { code: 'ICN', city: 'SEOUL' },
    routeTo: { code: 'CJU', city: 'JEJU' },
    date: 'AUTUMN 2026',
    gate: 'C09',
    seat: '18C',
    classType: 'DISCOVERY CLASS',
    duration: '8 DAYS / 7 NIGHTS',
    estimatedBudget: '$1,400 / PERSON',
    image: '/images/south-korea.jpg',
    highlights: [
      'Seoul Hanok Village & Palace Hanbok Experience',
      'Hongdae Night Market & K-BBQ Crawl',
      'Jeju Volcanic Coastline & O’sulloc Tea Fields',
      'Seongsan Ilchulbong Sunrise Hike',
      'T-Money Pass & Naver Map Survival Guide',
    ],
    itinerarySummary:
      'Immerse in K-culture, ancient hanok villages, street food paradises, and Jeju’s dramatic volcanic ocean cliffs.',
    description:
      'From Seoul’s pulsing night markets to Jeju Island’s emerald volcanic shores, South Korea blends tradition with cutting-edge pop culture.',
    bestTimeToVisit: 'September – November (Fall Foliage) & April – May (Spring)',
    transportTip: 'Buy a T-Money card at 7-Eleven for instant subway, bus, and taxi payment nationwide.',
    days: [
      {
        day: 'Day 1–3',
        title: 'Seoul Palaces, Hanok & K-BBQ Crawl',
        location: 'Seoul',
        description: 'Rent a traditional Hanbok to enter Gyeongbokgung Palace free. Explore Bukchon Hanok Village and feast on K-BBQ in Myeongdong.',
        activities: ['Gyeongbokgung Palace', 'Bukchon Hanok Village', 'Hongdae Indie & K-BBQ Street'],
      },
      {
        day: 'Day 4–5',
        title: 'Busan Coastal Rail & Gamcheon Cultural Village',
        location: 'Busan',
        description: 'Ride the KTX high-speed train to Busan. Ride the colorful Haeundae Blue Line Sky Capsule along the ocean cliffside.',
        activities: ['Haeundae Sky Capsule Rail', 'Gamcheon Culture Village', 'Jagalchi Fish Market'],
      },
      {
        day: 'Day 6–8',
        title: 'Jeju Volcanic Island & Sunset Coast',
        location: 'Jeju Island',
        description: 'Short 50-minute flight to Jeju. Hike Seongsan Ilchulbong Tuff Cone, walk Hyeopjae Beach, and explore O’sulloc Green Tea Fields.',
        activities: ['Seongsan Sunrise Peak', 'Hyeopjae White Sand Beach', 'O’sulloc Green Tea Plantation'],
      },
    ],
    budgetItems: [
      { category: 'Flights (Round-trip + Domestic)', amount: '$580', notes: 'Seoul international + Jeju Air hop' },
      { category: 'Accommodation (7 Nights)', amount: '$420', notes: 'Modern boutique stays (~$60/night)' },
      { category: 'KTX & Subway Transit', amount: '$150', notes: 'T-Money card + Busan KTX Express' },
      { category: 'Food & Street Eats', amount: '$250', notes: 'Night market food stalls & K-BBQ' },
    ],
  },
  {
    id: 'at-2026',
    slug: 'austria',
    name: 'Austria & Bavaria Germany',
    countryTitle: 'Austria',
    categoryTitle: 'Lakeside Tour',
    nativeTitle: '湖畔ツアー',
    nativeAction: 'オーストリア訪問',
    region: 'Central Europe',
    status: 'scheduled',
    statusLabel: 'SCHEDULED FLIGHT',
    routeFrom: { code: 'MUC', city: 'MUNICH' },
    routeTo: { code: 'VIE', city: 'VIENNA' },
    date: 'WINTER 2026',
    gate: 'D02',
    seat: '22D',
    classType: 'FAIRYTALE ROUTE',
    duration: '10 DAYS / 9 NIGHTS',
    estimatedBudget: '$1,950 / PERSON',
    image: '/images/austria.jpg',
    highlights: [
      'Hallstatt Lakeside UNESCO Village Walk',
      'Salzburg Sound of Music & Fortress Hill',
      'Vienna Imperial Palaces & Coffeehouse Culture',
      'Bavarian Neuschwanstein Castle Day Trip',
      'Austrian Alpine Railway Scenic Passes',
    ],
    itinerarySummary:
      'Step into a real-life fairytale wanderland of snow-dusted alpine villages, Baroque concert halls, and pristine lakes.',
    description:
      'Austria is a symphony of grand imperial architecture and fairytale lake towns. Journey through Vienna’s coffeehouses, Mozart’s Salzburg, and the picturesque Hallstatt village.',
    bestTimeToVisit: 'May – September (Lakes) & November – December (Christmas Markets)',
    transportTip: 'Use ÖBB Railjet trains for rapid, comfortable rail connections between Munich, Salzburg, and Vienna.',
    days: [
      {
        day: 'Day 1–3',
        title: 'Vienna Imperial Palaces & Classical Culture',
        location: 'Vienna',
        description: 'Tour Schönbrunn Palace, enjoy Sachertorte at Cafe Central, and listen to Mozart concert inside St. Charles Church.',
        activities: ['Schönbrunn Palace Gardens', 'Cafe Central Sachertorte', 'St. Stephen’s Cathedral'],
      },
      {
        day: 'Day 4–6',
        title: 'Hallstatt UNESCO Village & Salzkammergut Lakes',
        location: 'Hallstatt & Salzkammergut',
        description: 'Stay overnight in Hallstatt to enjoy peaceful misty morning lake walks before tour buses arrive. Ride Skywalk view platform.',
        activities: ['Hallstatt World Heritage Viewpoint', 'Hallstatt Salt Mine Cable Car', 'Lake Gosau Reflection Walk'],
      },
      {
        day: 'Day 7–10',
        title: 'Salzburg Fortress & Bavarian Neuschwanstein',
        location: 'Salzburg & Munich',
        description: 'Explore Hohensalzburg Fortress and take a day trip to Bavaria’s magical Neuschwanstein Castle nestled in alpine forests.',
        activities: ['Hohensalzburg Fortress', 'Mozart Birthplace Walk', 'Neuschwanstein Castle Tour'],
      },
    ],
    budgetItems: [
      { category: 'Flights (Round-trip)', amount: '$680', notes: 'Munich in / Vienna out multi-city' },
      { category: 'Accommodation (9 Nights)', amount: '$630', notes: 'Boutique heritage inns (~$70/night avg)' },
      { category: 'ÖBB Railjet Train Pass', amount: '$180', notes: 'Austria scenic rail travel' },
      { category: 'Food & Dining (10 Days)', amount: '$460', notes: 'Traditional Schnitzel & Bakery cafes' },
    ],
  },
];

export function getDestinationBySlug(slug: string): DestinationDetail | undefined {
  return destinationsData.find((d) => d.slug === slug);
}
