'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plane, Compass, ArrowUpRight, Sparkles } from 'lucide-react';
import Image from 'next/image';
import BoardingPassModal, { DestinationPass } from './BoardingPassModal';

const destinationsData: DestinationPass[] = [
  {
    id: 'jp-2026',
    name: 'Japan Autumn & Cherry Blossom',
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
      'Complete 12-day breakdown from Osaka street food to Tokyo neon lights. Includes exact train routing, hotel budget picks under $100/night, and daily meal cost averages.',
  },
  {
    id: 'ch-2026',
    name: 'Swiss Alps & Panoramic Express',
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
      'How to travel Switzerland without breaking the bank. Master the Swiss Rail Pass, find budget grocery meals, and hike free scenic trails in Jungfrau region.',
  },
  {
    id: 'kr-2026',
    name: 'South Korea & Jeju Island',
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
      'Immerse in K-culture, street food paradises, and coastal wonders. Includes local subway tricks and cafes you won’t find in mainstream guidebooks.',
  },
  {
    id: 'at-2026',
    name: 'Austria & Bavaria Germany',
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
      'Hallstatt Lakeside Chalets & Salt Mine',
      'Salzburg Sound of Music Historic Old Town',
      'Neuschwanstein Fairytale Castle Bavaria',
      'Vienna Imperial Palaces & Coffee Culture',
      'European Rail Pass Country Hopper Guide',
    ],
    itinerarySummary:
      'Explore postcard-perfect alpine villages, historic palaces, and cozy Christmas markets along the Austrian-Bavarian border.',
  },
];

interface DestinationsProps {
  onPlanTrip: (destinationName?: string) => void;
}

export default function Destinations({ onPlanTrip }: DestinationsProps) {
  const [filter, setFilter] = useState<'all' | 'filmed' | 'boarding' | 'scheduled'>('all');
  const [selectedPass, setSelectedPass] = useState<DestinationPass | null>(null);

  const filteredData = destinationsData.filter((item) => {
    if (filter === 'all') return true;
    return item.status === filter;
  });

  return (
    <section id="destinations" className="relative w-full py-28 px-4 bg-[#F5F3EF] text-[#121316]">
      {/* Background Subtle Grid Texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#121316_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 text-amber-800 text-xs font-mono-code font-bold uppercase tracking-widest mb-3">
              <Compass className="w-3.5 h-3.5" /> BOARDING PASSES &amp; FILMS
            </div>
            <h2 className="font-serif-editorial italic text-4xl sm:text-6xl font-normal tracking-tight text-stone-900 leading-tight">
              Where Are We Flying Next?
            </h2>
            <p className="text-stone-600 text-sm sm:text-base max-w-xl mt-2">
              Select a travel pass to unlock full day-by-day itineraries, exact hotel budgets, secret photography spots, and video guides.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full text-xs font-bold font-mono-code uppercase tracking-wider transition-all whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-stone-900 text-white shadow-md'
                  : 'bg-white text-stone-600 hover:bg-stone-200 border border-stone-300'
              }`}
            >
              All Passes
            </button>
            <button
              onClick={() => setFilter('filmed')}
              className={`px-4 py-2 rounded-full text-xs font-bold font-mono-code uppercase tracking-wider transition-all whitespace-nowrap flex items-center gap-1.5 ${
                filter === 'filmed'
                  ? 'bg-emerald-700 text-white shadow-md'
                  : 'bg-white text-emerald-800 hover:bg-emerald-50 border border-emerald-300/80'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Filmed
            </button>
            <button
              onClick={() => setFilter('boarding')}
              className={`px-4 py-2 rounded-full text-xs font-bold font-mono-code uppercase tracking-wider transition-all whitespace-nowrap flex items-center gap-1.5 ${
                filter === 'boarding'
                  ? 'bg-amber-600 text-white shadow-md'
                  : 'bg-white text-amber-800 hover:bg-amber-50 border border-amber-300/80'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              Boarding Soon
            </button>
          </div>
        </div>

        {/* Boarding Passes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredData.map((pass) => (
              <motion.div
                key={pass.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedPass(pass)}
                className="group relative cursor-pointer flex flex-col bg-white rounded-3xl overflow-hidden shadow-lg border border-stone-200/90 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                {/* Photo Top Section */}
                <div className="relative h-56 w-full overflow-hidden bg-stone-900">
                  <Image
                    src={pass.image}
                    alt={pass.name}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:filter-none filter grayscale-[40%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Date Tag */}
                  <span className="absolute top-3.5 left-4 font-mono-code text-[10px] font-semibold text-white/90 tracking-widest bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                    {pass.date}
                  </span>

                  {/* Status Pill */}
                  <div className="absolute top-3.5 right-4">
                    {pass.status === 'filmed' && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-600/90 text-white font-mono-code text-[10px] font-bold tracking-wider backdrop-blur-md shadow-sm border border-emerald-400/40">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-ping" />
                        FILMED
                      </span>
                    )}
                    {pass.status === 'boarding' && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/90 text-stone-950 font-mono-code text-[10px] font-bold tracking-wider backdrop-blur-md shadow-sm border border-amber-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-950 animate-ping" />
                        BOARDING
                      </span>
                    )}
                    {pass.status === 'scheduled' && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-800/80 text-stone-200 font-mono-code text-[10px] font-bold tracking-wider backdrop-blur-md border border-stone-600">
                        SCHEDULED
                      </span>
                    )}
                  </div>

                  {/* Route Display */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                    <div className="flex items-center gap-3">
                      <div className="flex flex-col">
                        <span className="font-bold text-2xl tracking-tight leading-none font-mono-code">
                          {pass.routeFrom.code}
                        </span>
                        <span className="font-mono-code text-[9px] text-stone-300 tracking-widest uppercase">
                          {pass.routeFrom.city}
                        </span>
                      </div>
                      <div className="flex flex-col items-center">
                        <Plane className="w-4 h-4 text-amber-400 transform rotate-90" />
                        <span className="w-12 h-[1px] bg-white/40 border-t border-dashed border-white/60 my-1" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-2xl tracking-tight leading-none font-mono-code">
                          {pass.routeTo.code}
                        </span>
                        <span className="font-mono-code text-[9px] text-stone-300 tracking-widest uppercase">
                          {pass.routeTo.city}
                        </span>
                      </div>
                    </div>

                    <div className="p-2 rounded-full bg-white/20 backdrop-blur-md group-hover:bg-white group-hover:text-stone-900 transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Main Pass Info */}
                <div className="p-5 flex flex-col gap-3 flex-1 justify-between">
                  <div>
                    <span className="font-mono-code text-[10px] text-stone-400 font-semibold tracking-widest uppercase">
                      {pass.region}
                    </span>
                    <h3 className="font-serif-editorial italic text-2xl font-normal text-stone-900 leading-tight group-hover:text-amber-800 transition-colors">
                      {pass.name}
                    </h3>
                  </div>

                  {/* Micro Info Table */}
                  <div className="grid grid-cols-2 gap-2 pt-3 border-t border-stone-100 font-mono-code text-xs">
                    <div>
                      <span className="text-[9px] text-stone-400 uppercase tracking-wider block">Duration</span>
                      <span className="font-bold text-stone-800">{pass.duration}</span>
                    </div>
                    <div>
                      <span className="text-[9px] text-stone-400 uppercase tracking-wider block">Est. Cost</span>
                      <span className="font-bold text-emerald-700">{pass.estimatedBudget}</span>
                    </div>
                  </div>
                </div>

                {/* Perforated Stub Notch & Barcode */}
                <div className="relative border-t-2 border-dashed border-stone-200 bg-stone-50 p-4 flex items-center justify-between ticket-stub">
                  <div className="flex flex-col">
                    <span className="font-mono-code text-[8px] text-stone-400 uppercase tracking-widest">
                      GATE / SEAT
                    </span>
                    <span className="font-mono-code text-xs font-bold text-stone-800">
                      {pass.gate} • {pass.seat}
                    </span>
                  </div>

                  {/* Fake Barcode Graphic */}
                  <div className="flex flex-col items-end">
                    <div className="w-24 h-6 bg-[repeating-linear-gradient(90deg,#121316_0_2px,transparent_2px_4px,#121316_4px_6px)]" />
                    <span className="font-mono-code text-[8px] text-stone-400 tracking-widest mt-0.5">
                      PASS-{pass.id.toUpperCase()}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Callout Card below */}
        <div className="mt-16 p-8 rounded-3xl bg-white shadow-xl border border-stone-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-amber-100 text-amber-900 shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif-editorial italic text-2xl font-normal text-stone-900">
                Need a Custom Itinerary Designed?
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm mt-0.5">
                We craft custom day-by-day routes tailored to your budget, travel style, and duration.
              </p>
            </div>
          </div>

          <button
            onClick={() => onPlanTrip()}
            className="px-6 py-3 rounded-full bg-[#121316] text-[#FAF9F6] font-bold text-xs uppercase tracking-widest hover:bg-stone-800 transition-all shadow-lg hover:scale-105 active:scale-95 shrink-0"
          >
            Create Custom Route
          </button>
        </div>
      </div>

      {/* Detail Boarding Pass Modal */}
      <BoardingPassModal
        pass={selectedPass}
        onClose={() => setSelectedPass(null)}
        onPlanTrip={(dest) => onPlanTrip(dest)}
      />
    </section>
  );
}
