'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, MotionValue } from 'framer-motion';
import { Compass, Sparkles, Camera, Share2, Send, MessageCircle, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import BoardingPassModal, { DestinationPass } from './BoardingPassModal';

export interface PosterDestinationPass extends DestinationPass {
  countryTitle: string;
  categoryTitle: string;
  nativeTitle: string;
  nativeAction: string;
}

const destinationsData: PosterDestinationPass[] = [
  {
    id: 'jp-2026',
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
    highlights: [
      'Nara Deer Park & Todai-ji Temple',
      'Kyoto Secret Bamboo & Higashiyama Walk',
      'Hakone Mount Fuji Onsen Stay',
      'Tokyo Shibuya Crossing & TeamLab Borderless',
      'Bullet Train JR Pass Hack Guide',
    ],
    itinerarySummary:
      'Discover the perfect blend of tradition and innovation in a land like no other. Complete 12-day breakdown from Osaka street food to Tokyo neon lights.',
  },
  {
    id: 'ch-2026',
    name: 'Swiss Alps & Glacier Express',
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
  },
  {
    id: 'kr-2026',
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
  },
  {
    id: 'at-2026',
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
  },
];

const getSlug = (countryTitle: string) => {
  const lower = countryTitle.toLowerCase();
  if (lower.includes('japan')) return 'japan';
  if (lower.includes('switzerland')) return 'switzerland';
  if (lower.includes('korea')) return 'south-korea';
  if (lower.includes('austria')) return 'austria';
  return 'japan';
};

interface DestinationsProps {
  onPlanTrip?: (destinationName: string) => void;
}

// Sub-component for High Performance Scroll Animation
function AnimatedCard({
  pass,
  index,
  scrollYProgress,
}: {
  pass: PosterDestinationPass;
  index: number;
  scrollYProgress: MotionValue<number>;
}) {
  const start = index * 0.08;
  const end = start + 0.32;

  const y = useTransform(scrollYProgress, [start, end], [50, 0]);
  const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);
  const scale = useTransform(scrollYProgress, [start, end], [0.95, 1]);

  const slug = getSlug(pass.countryTitle);

  return (
    <motion.div
      layout
      style={{ y, opacity, scale }}
      className="will-change-transform transform-gpu group relative rounded-[28px] overflow-hidden bg-white text-stone-900 border border-stone-200/80 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full"
    >
      <Link href={`/destinations/${slug}`} className="flex flex-col h-full w-full">
        {/* Top Cover Image Container */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-stone-900">
          <Image
            src={pass.image}
            alt={pass.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 25vw"
            priority={index < 2}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

          {/* Top Floating Badges */}
          <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
            <span className="font-sans text-xs font-medium tracking-wider text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.95)]">
              {pass.date}
            </span>
            <span
              className={`px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-bold tracking-wider backdrop-blur-md shadow-sm border ${
                pass.status === 'filmed'
                  ? 'bg-emerald-600/90 text-white border-emerald-400/40'
                  : pass.status === 'boarding'
                  ? 'bg-amber-500/90 text-stone-950 border-amber-300'
                  : 'bg-stone-800/80 text-stone-200 border-stone-600'
              }`}
            >
              ● {pass.status.toUpperCase()}
            </span>
          </div>
        </div>

        {/* Bottom Card Content */}
        <div className="bg-[#f4f4f2] text-stone-900 rounded-b-[28px] rounded-tl-[32px] p-5 sm:p-6 -mt-8 relative z-10 flex-1 flex flex-col justify-between border-t border-stone-200/60">
          <div className="grid grid-cols-12 gap-3">
            {/* Left Column: Title & Info */}
            <div className="col-span-8 flex flex-col justify-between space-y-3">
              <div>
                <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-black mb-1 leading-none">
                  {pass.countryTitle}
                </h1>
                <p className="text-[11px] text-stone-600 leading-relaxed font-medium line-clamp-2">
                  {pass.itinerarySummary}
                </p>
              </div>

              <hr className="border-stone-300/80" />

              <div>
                <h3 className="font-extrabold text-[10px] uppercase tracking-wider text-black mb-0.5">
                  VISIT {pass.countryTitle.toUpperCase()}
                </h3>
                <p className="text-[11px] font-bold text-stone-800 mb-0.5">
                  Timeless. Unforgettable.
                </p>
                <p className="text-[10px] text-stone-500 leading-relaxed line-clamp-2">
                  Discover the beauty and flavors that make {pass.countryTitle} unforgettable.
                </p>
              </div>
            </div>

            {/* Right Column: Vertical Accent Section */}
            <div className="col-span-4 border-l border-stone-300/80 pl-2.5 flex flex-col items-center justify-between">
              <Sparkles className="w-4 h-4 text-black fill-black" />

              <div className="flex items-center gap-2 my-auto py-1">
                <span className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black [writing-mode:vertical-rl] rotate-180">
                  {pass.categoryTitle}
                </span>
                <span className="text-[9px] font-bold text-stone-500 [writing-mode:vertical-rl] rotate-180 tracking-widest">
                  {pass.nativeTitle}
                </span>
                <div className="flex flex-col gap-1 items-center">
                  <span className="w-1 h-1 bg-black rounded-full" />
                  <span className="w-1 h-1 bg-black rounded-full" />
                  <span className="w-1 h-1 bg-black rounded-full" />
                </div>
                <span className="text-[9px] text-stone-400 [writing-mode:vertical-rl] rotate-180 tracking-wider">
                  {pass.nativeAction}
                </span>
              </div>

              <div className="flex items-center gap-1 text-stone-800">
                <Camera className="w-3 h-3 hover:opacity-75 transition-opacity" />
                <Share2 className="w-3 h-3 hover:opacity-75 transition-opacity" />
                <Send className="w-3 h-3 hover:opacity-75 transition-opacity" />
                <MessageCircle className="w-3 h-3 hover:opacity-75 transition-opacity" />
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-stone-300/60 flex items-center justify-between text-xs font-bold text-[#121316]">
            <span className="flex items-center gap-1 text-amber-700 uppercase tracking-widest text-[10px]">
              <span>EXPLORE {pass.countryTitle.toUpperCase()} GUIDE</span>
            </span>
            <div className="w-7 h-7 rounded-full bg-[#121316] text-white flex items-center justify-center group-hover:bg-amber-600 transition-colors">
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Destinations({ onPlanTrip }: DestinationsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  return (
    <section
      ref={containerRef}
      id="destinations"
      className="relative z-20 py-20 sm:py-28 px-4 sm:px-8 bg-[#FAF9F6] text-[#121316] font-sans border-t border-stone-200/80"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121316] text-white text-xs font-mono font-bold tracking-widest uppercase mb-4 shadow-md">
              <Compass className="w-3.5 h-3.5 text-amber-400" />
              <span>BESPOKE EXPEDITIONS</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black tracking-tighter text-[#121316] uppercase leading-none">
              Featured Destinations
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm font-medium mt-3 leading-relaxed">
              Curated itineraries personally filmed and verified by Purva. Click any destination card below to access its complete 10-section landing guide.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-stone-500">
              4 ACTIVE GUIDES RELEASED
            </span>
          </div>
        </div>

        {/* Poster Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {destinationsData.map((pass, index) => (
            <AnimatedCard
              key={pass.id}
              pass={pass}
              index={index}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}