'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValueEvent } from 'framer-motion';
import { ArrowRight, Camera, Compass, Heart, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

const tabsData = [
  {
    id: 'story',
    label: 'Purva’s Story',
    title: 'Purva actually travels it.',
    subtitle: 'No agency scripts, no sponsored fluff. Real travel experiences made with total authenticity.',
    bg: '#FAF9F6',
    ghostColor: 'rgba(18, 19, 22, 0.04)',
    accent: '#B45309',
    ink: '#121316',
    photo: '/images/couple-portrait.jpg',
    stat: '4 COUNTRIES FILMED',
    description: 'Purva started Ryoko to solve the overwhelming noise in travel planning. From navigating Japan’s bullet train passes to finding secret Swiss valley view points, Purva documents every step with total honesty so you can travel stress-free.',
  },
  {
    id: 'how',
    label: 'How Purva Travels',
    title: 'Helping you get started.',
    subtitle: 'Tested day-by-day itineraries, exact cost breakdowns, and step-by-step video guides.',
    bg: '#F0F2FA',
    ghostColor: 'rgba(29, 42, 110, 0.05)',
    accent: '#2563EB',
    ink: '#1D2A6E',
    photo: '/images/japan-nara.jpg',
    stat: '100% REAL BUDGETS',
    description: 'Every guide includes itemized expenditure: hotel choices, train passes, food costs, and hidden fees. Purva gives you the exact blueprint to experience incredible destinations within budget.',
  },
  {
    id: 'promise',
    label: 'Our Promise',
    title: 'Supporting you from A to Z.',
    subtitle: 'Zero sponsored bias, direct travel tips, and responsive community help.',
    bg: '#EEF7F3',
    ghostColor: 'rgba(13, 90, 67, 0.05)',
    accent: '#059669',
    ink: '#0D5A43',
    photo: '/images/switzerland.jpg',
    stat: '0% SPONSORED FLUFF',
    description: 'If a tourist trap is overrated, Purva tells you to skip it. If a hidden shrine requires an early morning wake-up, we tell you how to beat the crowds. Our commitment is strictly to your unforgettable journey.',
  },
];

export default function AboutSection() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const currentTab = tabsData[activeTabIndex];
  const targetRef = useRef<HTMLDivElement>(null);

  // Scroll tracking across the 300vh height
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  const animatedHeight = useSpring(useTransform(scrollYProgress, [0, 1], ['0%', '100%']), {
    stiffness: 120,
    damping: 25,
  });

  // Precise threshold switching
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (latest < 0.33) {
      setActiveTabIndex(0);
    } else if (latest >= 0.33 && latest < 0.66) {
      setActiveTabIndex(1);
    } else if (latest >= 0.66) {
      setActiveTabIndex(2);
    }
  });

  return (
    <div
      ref={targetRef}
      id="about-us"
      className="relative w-full h-[300vh]"
    >
      {/* STICKY CONTAINER */}
      <div
        style={{ backgroundColor: currentTab.bg }}
        className="sticky top-0 h-screen w-full flex items-center justify-center overflow-clip transition-colors duration-700 ease-in-out px-4 sm:px-8"
      >
        {/* Subtle Dot Grid Texture */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#121316_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        {/* Soft Ambient Glow Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-50/40 via-transparent to-transparent pointer-events-none" />

        {/* Elegant Large Watermark Text */}
        <div
          style={{ color: currentTab.ghostColor }}
          className="absolute -left-10 bottom-0 pointer-events-none select-none font-black text-[22vw] leading-none tracking-tighter uppercase transition-colors duration-700 font-sans"
        >
          RYOKO
        </div>

        {/* Main Content Container */}
        <div className="max-w-6xl w-full mx-auto relative z-10 flex gap-6 md:gap-10 my-auto py-6">
          
          {/* TRACING BEAM LINE */}
          <div className="hidden sm:block relative w-1 shrink-0 self-stretch rounded-full bg-stone-300/50 overflow-hidden my-2">
            <motion.div
              style={{
                height: animatedHeight,
                backgroundColor: currentTab.accent,
              }}
              className="w-full rounded-full transition-colors duration-500"
            />
          </div>

          <div className="w-full">
            {/* Eyebrow & Main Section Header */}
            <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-8 sm:mb-12">
              <span
                style={{ color: currentTab.accent }}
                className="font-mono-code text-xs tracking-[0.3em] uppercase font-bold mb-2 flex items-center gap-2"
              >
                <Compass className="w-4 h-4" /> ABOUT RYOKO
              </span>
              <h2
                style={{ color: currentTab.ink }}
                className="font-serif-editorial italic text-3xl sm:text-5xl font-normal tracking-tight leading-tight"
              >
                Real Itineraries, Built for Real Travelers.
              </h2>
              <p className="text-stone-600 text-xs sm:text-sm font-medium mt-2">
                Purva documents authentic travel experiences, giving you clear budgets and step-by-step itineraries.
              </p>
            </div>

            {/* 3-Column Tab Bed & Interactive Showcase */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10 items-center">
              
              {/* Left Column: Interactive Navigation Tabs */}
              <div className="md:col-span-5 flex flex-col gap-3">
                {tabsData.map((tab, idx) => {
                  const isActive = idx === activeTabIndex;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTabIndex(idx)}
                      className={`group relative text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 ${
                        isActive
                          ? 'bg-white shadow-xl border border-stone-200/80 scale-[1.02]'
                          : 'hover:bg-white/60 border border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span
                          style={{ color: isActive ? currentTab.ink : '#5A5D67' }}
                          className="font-bold text-base sm:text-lg tracking-tight"
                        >
                          {tab.label}
                        </span>
                        <ArrowRight
                          style={{ color: isActive ? currentTab.accent : '#858997' }}
                          className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ${
                            isActive ? 'translate-x-1' : 'group-hover:translate-x-1'
                          }`}
                        />
                      </div>
                      <p className="text-xs font-medium text-stone-500 mt-1 line-clamp-1">
                        {tab.subtitle}
                      </p>

                      {/* Active Bar Indicator */}
                      {isActive && (
                        <motion.div
                          layoutId="activeTabUnderline"
                          style={{ backgroundColor: currentTab.accent }}
                          className="absolute bottom-0 left-5 right-5 h-1 rounded-full"
                          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Center Column: Morphing Photo Frame */}
              <div className="md:col-span-4 flex justify-center">
                <div className="relative w-full max-w-[280px] sm:max-w-[300px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-stone-100">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentTab.id}
                      initial={{ opacity: 0, scale: 1.08 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src={currentTab.photo}
                        alt={currentTab.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 300px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <span className="font-mono-code text-[10px] tracking-widest uppercase font-semibold bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                          {currentTab.stat}
                        </span>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Right Column: Dynamic Content Chapter */}
              <div className="md:col-span-3 flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentTab.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col gap-3"
                  >
                    <div
                      style={{ color: currentTab.accent }}
                      className="font-mono-code text-xs font-bold uppercase tracking-widest flex items-center gap-1.5"
                    >
                      <Camera className="w-3.5 h-3.5" />
                      <span>CHAPTER 0{activeTabIndex + 1}</span>
                    </div>

                    <h3
                      style={{ color: currentTab.ink }}
                      className="font-serif-editorial italic text-2xl sm:text-3xl font-normal leading-tight"
                    >
                      {currentTab.title}
                    </h3>

                    <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-normal">
                      {currentTab.description}
                    </p>

                    <div className="pt-1">
                      <a
                        href="#destinations"
                        style={{ backgroundColor: currentTab.ink }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity shadow-md"
                      >
                        <span>View Itineraries</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Bottom Guarantee Banner */}
            <div className="mt-8 pt-5 border-t border-stone-300/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-white shadow-md border border-stone-200">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-stone-900">100% Tested In-Person</h4>
                  <p className="text-[11px] text-stone-500">Every train, route, and hotel in our guides was personally visited by Purva.</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-white shadow-md border border-stone-200">
                  <Heart className="w-4 h-4 text-rose-500" />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-stone-900">Direct Travel Support</h4>
                  <p className="text-[11px] text-stone-500">Reach out directly to Purva for personalized itinerary advice.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}