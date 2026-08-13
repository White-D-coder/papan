"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  Compass, 
  MapPin, 
  Maximize2, 
  X, 
  Volume2, 
  VolumeX,
  ArrowRight,
  BookOpen
} from "lucide-react";

/* =========================================================
   TYPES & DATA
========================================================= */

interface PolaroidItem {
  id: string;
  img: string;
  caption: string;
  rotation: number;
  top?: string | number;
  left?: string | number;
  right?: string | number;
  bottom?: string | number;
}

interface FilmStripItem {
  id: string;
  img: string;
  label: string;
}

interface JournalSpread {
  id: string;
  pageNumber: number;
  destination: string;
  subtitle: string;
  tagline: string;
  season: string;
  duration: string;
  cities: string[];
  bgImageLeft: string;
  bgImageRight: string;
  filmstrip: FilmStripItem[];
  travelTip: {
    badge: string;
    title: string;
    text: string;
  };
  tapedNote: {
    title: string;
    text: string;
    rotation: number;
  };
  handwrittenHeader: string;
  polaroids: PolaroidItem[];
  viewfinderPhoto: {
    img: string;
    caption: string;
    timestamp: string;
  };
}

const JOURNAL_SPREADS: JournalSpread[] = [
  {
    id: "japan",
    pageNumber: 1,
    destination: "JAPAN",
    tagline: "Wabi-sabi & Hidden Omakase",
    subtitle: "Exploring Japan's hidden omakase & bamboo sanctuaries like true adventurers —",
    season: "Autumn 2026",
    duration: "12 Days",
    cities: ["Tokyo", "Kyoto", "Osaka", "Hakone"],
    bgImageLeft: "/images/pexels-dudubangbang-29028514.jpg",
    bgImageRight: "/images/japan/kyoto.jpg",
    filmstrip: [
      { id: "j1", img: "/images/japan/cinema-1.jpg", label: "Kyoto Temple" },
      { id: "j2", img: "/images/japan/ramen.jpg", label: "Street Ramen" },
      { id: "j3", img: "/images/japan/hotel-kyoto.jpg", label: "Ryokan Courtyard" },
      { id: "j4", img: "/images/japan/tokyo.jpg", label: "Neon Alley" },
    ],
    travelTip: {
      badge: "TRAVEL TIP",
      title: "SHINKANSEN SECRET",
      text: "Always check local express trains or risk becoming the victim of your own strict schedule! Mount Fuji is visible from side E seats.",
    },
    tapedNote: {
      title: "EXCEPT ONE TEMPLE WAS MY PICK",
      text: "Cue a 2-hour hike in the blazing sun with my entire group questioning my life choices — only to find out there was a cable car.",
      rotation: -2.5,
    },
    handwrittenHeader: "Exploring Japan's hidden alleys & serene shrines like true adventurers —",
    polaroids: [
      {
        id: "pol-j1",
        img: "/images/japan/cinema-3.jpg",
        caption: "Lantern light in Gion • Kyoto",
        rotation: 4.5,
        top: "8%",
        right: "10%",
      },
      {
        id: "pol-j2",
        img: "/images/japan/osaka.jpg",
        caption: "Midnight bites in Dotonbori",
        rotation: -5.5,
        top: "42%",
        right: "26%",
      },
    ],
    viewfinderPhoto: {
      img: "/images/couple-portrait.jpg",
      caption: "Viewfinder • Arashiyama Bamboo Grove",
      timestamp: "OCT 14 • 17:42 JST",
    },
  },
  {
    id: "switzerland",
    pageNumber: 2,
    destination: "SWITZERLAND",
    tagline: "Matterhorn & Excellence Class",
    subtitle: "Panoramic alpine silence and golden sunset peaks along glacier trails —",
    season: "Winter 2026",
    duration: "10 Days",
    cities: ["Zermatt", "St. Moritz", "Lucerne", "Interlaken"],
    bgImageLeft: "/images/switzerland.jpg",
    bgImageRight: "/images/footer-louvre.jpg",
    filmstrip: [
      { id: "s1", img: "/images/switzerland.jpg", label: "Zermatt Peak" },
      { id: "s2", img: "/images/pexels-masoodaslami-14680969.jpg", label: "Glacier Express" },
      { id: "s3", img: "/images/austria.jpg", label: "Alpine Village" },
      { id: "s4", img: "/images/pexels-afhamhmsyri-34021102.jpg", label: "Snow Trail" },
    ],
    travelTip: {
      badge: "ALPINE TIP",
      title: "GLACIER TRAIN",
      text: "Book Excellence Class 90 days out for 5-course wine pairings with floor-to-ceiling glass views of the Rhine Gorge.",
    },
    tapedNote: {
      title: "THE MATTERHORN DANCE",
      text: "Clouds enveloped the peak for hours. Right at 4:15 PM, the fog split like magic revealing the golden pyramid against deep alpine indigo.",
      rotation: 3,
    },
    handwrittenHeader: "Glacier trains & golden sunset peaks high above the clouds —",
    polaroids: [
      {
        id: "pol-s1",
        img: "/images/switzerland.jpg",
        caption: "Hot chocolate in Zermatt",
        rotation: -4,
        top: "10%",
        right: "12%",
      },
      {
        id: "pol-s2",
        img: "/images/austria.jpg",
        caption: "Gornergrat railway view",
        rotation: 6,
        top: "40%",
        right: "24%",
      },
    ],
    viewfinderPhoto: {
      img: "/images/pexels-masoodaslami-14680969.jpg",
      caption: "Viewfinder • Matterhorn Panorama",
      timestamp: "DEC 08 • 15:10 CET",
    },
  },
  {
    id: "korea",
    pageNumber: 3,
    destination: "SOUTH KOREA",
    tagline: "Hanok Alleys & Cherry Trails",
    subtitle: "Centuries-old courtyards, quiet tea houses, and vibrant night markets —",
    season: "Spring 2027",
    duration: "9 Days",
    cities: ["Seoul", "Jeju Island", "Gyeongju", "Busan"],
    bgImageLeft: "/images/south-korea.jpg",
    bgImageRight: "/images/pexels-o-dodo-2154460908-34088054.jpg",
    filmstrip: [
      { id: "k1", img: "/images/south-korea.jpg", label: "Bukchon Hanok" },
      { id: "k2", img: "/images/pexels-leongsan-35132140.jpg", label: "Street Dining" },
      { id: "k3", img: "/images/pexels-bertellifotografia-13869852.jpg", label: "Traditional Tea" },
      { id: "k4", img: "/images/pexels-julias-torten-und-tortchen-434418-19021559.jpg", label: "Matcha Treats" },
    ],
    travelTip: {
      badge: "SEOUL INSIDER",
      title: "TEA HOUSE ETIQUETTE",
      text: "Walk through Bukchon early in the morning before 9 AM for calm photos without crowd noise in the narrow alleys.",
    },
    tapedNote: {
      title: "CITRON TEA AT DAWN",
      text: "Stumbled into a 300-year-old wooden courtyard in Insadong while avoiding spring rain. The owner brewed fresh jujube tea for us.",
      rotation: -3.5,
    },
    handwrittenHeader: "Hanok courtyard mornings & cherry blossom paths through history —",
    polaroids: [
      {
        id: "pol-k1",
        img: "/images/south-korea.jpg",
        caption: "Morning light in Bukchon",
        rotation: 5,
        top: "9%",
        right: "11%",
      },
      {
        id: "pol-k2",
        img: "/images/pexels-o-dodo-2154460908-34088054.jpg",
        caption: "Jeju coastal cliffs",
        rotation: -4,
        top: "43%",
        right: "22%",
      },
    ],
    viewfinderPhoto: {
      img: "/images/pexels-sristi-saha-661973020-17727740.jpg",
      caption: "Viewfinder • Gyeongbokgung Palace",
      timestamp: "APR 02 • 11:35 KST",
    },
  },
  {
    id: "austria",
    pageNumber: 4,
    destination: "AUSTRIA",
    tagline: "Alpine Lakes & Imperial Silence",
    subtitle: "Mirror-still lakeside mornings, baroque hall acoustics, and imperial gardens —",
    season: "Summer 2027",
    duration: "8 Days",
    cities: ["Vienna", "Salzburg", "Hallstatt", "Innsbruck"],
    bgImageLeft: "/images/austria.jpg",
    bgImageRight: "/images/footer-louvre.jpg",
    filmstrip: [
      { id: "a1", img: "/images/austria.jpg", label: "Hallstatt Lake" },
      { id: "a2", img: "/images/pexels-afhamhmsyri-34021102.jpg", label: "Vienna Palace" },
      { id: "a3", img: "/images/pexels-beigh-yabaar-865585625-32584961.jpg", label: "Alpine Valley" },
      { id: "a4", img: "/images/pexels-nathan-steele-274130124-32730210.jpg", label: "Baroque Hall" },
    ],
    travelTip: {
      badge: "CULTURE TIP",
      title: "HALLSTATT DAWN",
      text: "Take the 7 AM wooden ferry across Lake Hallstatt when the morning fog rises off the water before the day trippers arrive.",
    },
    tapedNote: {
      title: "VIENNA OPERA NIGHT",
      text: "Sitting in the upper balcony as the orchestra tuned up. The sound echoed through 200 years of gilded history — unforgettable.",
      rotation: 2.2,
    },
    handwrittenHeader: "Imperial palaces & mirror lake reflections in the heart of Europe —",
    polaroids: [
      {
        id: "pol-a1",
        img: "/images/austria.jpg",
        caption: "Hallstatt at 7:00 AM mist",
        rotation: -5,
        top: "11%",
        right: "10%",
      },
      {
        id: "pol-a2",
        img: "/images/pexels-afhamhmsyri-34021102.jpg",
        caption: "Schönbrunn Gardens • Vienna",
        rotation: 4.8,
        top: "41%",
        right: "25%",
      },
    ],
    viewfinderPhoto: {
      img: "/images/pexels-beigh-yabaar-865585625-32584961.jpg",
      caption: "Viewfinder • Salzburg Fortress View",
      timestamp: "JUL 19 • 16:15 CEST",
    },
  },
];

interface BookHeroProps {
  onBook: () => void;
}

export default function BookHeroSection({ onBook }: BookHeroProps) {
  const [activeSpreadIndex, setActiveSpreadIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isFlipping, setIsFlipping] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{ img: string; title: string; caption: string } | null>(null);
  const [isAutoplay, setIsAutoplay] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const currentSpread = JOURNAL_SPREADS[activeSpreadIndex];

  // Mouse tilt effect calculation
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  // Turn page action
  const goToSpread = (targetIndex: number) => {
    if (isFlipping || targetIndex === activeSpreadIndex) return;
    setIsFlipping(true);
    setDirection(targetIndex > activeSpreadIndex ? 1 : -1);
    setActiveSpreadIndex(targetIndex);
    setTimeout(() => setIsFlipping(false), 800);
  };

  const prevSpread = () => {
    const nextIdx = (activeSpreadIndex - 1 + JOURNAL_SPREADS.length) % JOURNAL_SPREADS.length;
    goToSpread(nextIdx);
  };

  const nextSpread = () => {
    const nextIdx = (activeSpreadIndex + 1) % JOURNAL_SPREADS.length;
    goToSpread(nextIdx);
  };

  // Autoplay handler
  useEffect(() => {
    if (!isAutoplay) return;
    const timer = setInterval(() => {
      nextSpread();
    }, 6000);
    return () => clearInterval(timer);
  }, [isAutoplay, activeSpreadIndex, isFlipping]);

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full bg-[#4E5E78] text-[#1A1714] overflow-hidden flex flex-col justify-between select-none pt-16 pb-6 px-4 md:px-8"
      style={{
        backgroundImage: "radial-gradient(ellipse at 50% 35%, #596B88 0%, #3B485C 100%)",
      }}
    >
      {/* Ambient Lighting & Backdrop Glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[550px] bg-white/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-100/10 rounded-full blur-[120px]" />
      </div>

      {/* ── TOP HEADER / LIGHT STATUS BAR ── */}
      <header className="relative z-20 flex flex-wrap items-center justify-between gap-4 max-w-7xl mx-auto w-full pt-4 pb-2">
        {/* Left Indicator Badge */}
        <div className="flex items-center gap-3 bg-[#FAF8F5]/90 backdrop-blur-md px-4 py-2 rounded-full border border-white/60 shadow-lg text-[#1A1714]">
          <BookOpen className="w-4 h-4 text-[#B8963E]" />
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#B8963E] font-bold">
            ✦ 10 PAGES JOURNAL
          </span>
          <span className="text-black/20 font-mono">|</span>
          <span className="font-mono text-xs text-[#1A1714]/80 font-medium tracking-wider">
            SPREAD 0{activeSpreadIndex + 1} OF 0{JOURNAL_SPREADS.length}
          </span>
        </div>

        {/* Center Quick Jump Destination Tabs (Light Pills) */}
        <nav className="hidden md:flex items-center gap-1.5 bg-white/20 backdrop-blur-md p-1.5 rounded-full border border-white/30 shadow-lg">
          {JOURNAL_SPREADS.map((sp, idx) => (
            <button
              key={sp.id}
              onClick={() => goToSpread(idx)}
              className={`px-4 py-1.5 rounded-full font-mono text-xs uppercase tracking-widest transition-all duration-300 ${
                activeSpreadIndex === idx
                  ? "bg-[#FAF8F5] text-[#1A1714] font-bold shadow-md"
                  : "text-white/80 hover:text-white hover:bg-white/15"
              }`}
            >
              {sp.destination}
            </button>
          ))}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsAutoplay(!isAutoplay)}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-mono border transition-all backdrop-blur-md shadow-md ${
              isAutoplay
                ? "bg-[#FAF8F5] border-white text-[#1A1714] font-bold"
                : "bg-white/20 border-white/30 text-white hover:bg-white/30"
            }`}
          >
            {isAutoplay ? <Volume2 className="w-3.5 h-3.5 text-[#B8963E] animate-pulse" /> : <VolumeX className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline uppercase tracking-wider">{isAutoplay ? "Auto-Turn ON" : "Auto-Turn OFF"}</span>
          </button>
        </div>
      </header>

      {/* ── 3D MAIN HERO BOOK SHOWCASE ── */}
      <div 
        className="relative z-10 w-full max-w-7xl mx-auto flex-1 flex items-center justify-center my-4"
        style={{ perspective: 1800 }}
      >
        {/* Navigation Arrow Left */}
        <button
          onClick={prevSpread}
          disabled={isFlipping}
          aria-label="Previous Page Spread"
          className="absolute left-0 md:left-2 lg:-left-6 top-1/2 -translate-y-1/2 z-40 p-3.5 rounded-full bg-[#FAF8F5] text-[#1A1714] border border-white shadow-2xl hover:bg-[#B8963E] hover:text-white hover:scale-110 active:scale-95 transition-all duration-300 group disabled:opacity-40"
        >
          <ChevronLeft className="w-6 h-6 transition-transform group-hover:-translate-x-0.5" />
        </button>

        {/* Navigation Arrow Right */}
        <button
          onClick={nextSpread}
          disabled={isFlipping}
          aria-label="Next Page Spread"
          className="absolute right-0 md:right-2 lg:-left-6 lg:right-auto lg:absolute lg:right-[-24px] top-1/2 -translate-y-1/2 z-40 p-3.5 rounded-full bg-[#FAF8F5] text-[#1A1714] border border-white shadow-2xl hover:bg-[#B8963E] hover:text-white hover:scale-110 active:scale-95 transition-all duration-300 group disabled:opacity-40"
        >
          <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-0.5" />
        </button>

        {/* ── THE 3D BOOK CONTAINER WITH MOUSE PARALLAX TILT ── */}
        <motion.div
          animate={{
            rotateY: mousePos.x * 12,
            rotateX: -mousePos.y * 10,
          }}
          transition={{ type: "spring", stiffness: 120, damping: 18, mass: 0.8 }}
          className="relative w-full max-w-[1140px] h-[580px] sm:h-[620px] lg:h-[660px] flex items-center justify-center"
          style={{ transformStyle: "preserve-3d" }}
        >

          {/* ── LEFT SIDE 3D STACKED PAGES (LIGHT PAPER LEAVES) ── */}
          <div 
            onClick={prevSpread}
            className="absolute left-2 sm:left-6 lg:left-12 top-1/2 -translate-y-1/2 h-[92%] w-[44%] cursor-pointer group z-0"
            style={{ transformStyle: "preserve-3d" }}
            title="Click to turn to previous spread"
          >
            {[...Array(5)].map((_, i) => (
              <div
                key={`left-stack-${i}`}
                className="absolute inset-0 rounded-l-2xl border-l border-amber-900/10 bg-gradient-to-r from-[#EBE4D8] via-[#FAF6EE] to-[#F2ECE1] shadow-lg transition-transform duration-500 group-hover:-translate-x-2"
                style={{
                  transform: `translateX(-${(i + 1) * 7}px) translateZ(-${(i + 1) * 16}px) rotateY(${-28 - i * 4}deg)`,
                  opacity: 0.95 - i * 0.1,
                  boxShadow: "-8px 0 20px rgba(0, 0, 0, 0.12)",
                }}
              >
                <div className="absolute right-0 top-0 bottom-0 w-2 bg-amber-900/10 border-r border-black/5" />
              </div>
            ))}
          </div>

          {/* ── RIGHT SIDE 3D STACKED PAGES (LIGHT PAPER LEAVES) ── */}
          <div 
            onClick={nextSpread}
            className="absolute right-2 sm:right-6 lg:right-12 top-1/2 -translate-y-1/2 h-[92%] w-[44%] cursor-pointer group z-0"
            style={{ transformStyle: "preserve-3d" }}
            title="Click to turn to next spread"
          >
            {[...Array(5)].map((_, i) => (
              <div
                key={`right-stack-${i}`}
                className="absolute inset-0 rounded-r-2xl border-r border-amber-900/10 bg-gradient-to-l from-[#EBE4D8] via-[#FAF6EE] to-[#F2ECE1] shadow-lg transition-transform duration-500 group-hover:translate-x-2"
                style={{
                  transform: `translateX(${(i + 1) * 7}px) translateZ(-${(i + 1) * 16}px) rotateY(${28 + i * 4}deg)`,
                  opacity: 0.95 - i * 0.1,
                  boxShadow: "8px 0 20px rgba(0, 0, 0, 0.12)",
                }}
              >
                <div className="absolute left-0 top-0 bottom-0 w-2 bg-amber-900/10 border-l border-black/5" />
              </div>
            ))}
          </div>

          {/* ── CENTER MAIN OPEN DOUBLE-PAGE SPREAD (LIGHT CREAM PAPER) ── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSpread.id}
              initial={{
                rotateY: direction > 0 ? -22 : 22,
                opacity: 0.2,
                scale: 0.95,
              }}
              animate={{
                rotateY: 0,
                opacity: 1,
                scale: 1,
              }}
              exit={{
                rotateY: direction > 0 ? 22 : -22,
                opacity: 0.2,
                scale: 0.95,
              }}
              transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
              className="relative z-10 w-full h-full rounded-2xl flex overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)] border border-white/80 bg-[#FAF8F5] text-[#1A1714]"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Central Spine Fold & Soft Shadow Gradient */}
              <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-12 z-30 pointer-events-none bg-gradient-to-r from-black/10 via-black/20 to-black/10" />
              <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-amber-950/20 z-35 pointer-events-none" />

              {/* ── LEFT PAGE SPREAD ── */}
              <div className="relative flex-1 h-full p-4 sm:p-6 lg:p-8 flex flex-col justify-between overflow-hidden bg-[#F4EFE6] border-r border-amber-900/10">
                {/* Background Scenic Photo with Soft Opacity */}
                <div className="absolute inset-0 z-0 opacity-35 mix-blend-multiply">
                  <img 
                    src={currentSpread.bgImageLeft} 
                    alt={currentSpread.destination} 
                    className="w-full h-full object-cover filter contrast-[1.05] brightness-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#F4EFE6] via-transparent to-[#F4EFE6]/70" />
                </div>

                {/* Scrapbook Decor: White Line Art Overlays */}
                <div className="absolute top-6 right-8 pointer-events-none z-10 opacity-30 text-[#1A1714]">
                  <svg width="90" height="90" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <path d="M50 10 C30 10 20 30 20 50 C20 60 30 70 40 70 C45 70 48 85 50 95 C52 85 55 70 60 70 C70 70 80 60 80 50 C80 30 70 10 50 10 Z" />
                    <path d="M30 45 C35 55 40 75 35 90" strokeDasharray="3 3" />
                    <path d="M65 45 C60 55 55 75 60 90" strokeDasharray="3 3" />
                  </svg>
                </div>

                {/* Left Header Tag */}
                <div className="relative z-20 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs uppercase tracking-widest px-2.5 py-1 rounded bg-[#1A1714] text-[#F5F2ED] font-semibold">
                      PAGE 0{currentSpread.pageNumber * 2 - 1}
                    </span>
                    <span className="font-mono text-xs text-[#8B8580] tracking-wider uppercase font-semibold">
                      {currentSpread.season}
                    </span>
                  </div>
                  <span className="font-script text-2xl text-[#B8963E] font-bold">
                    Purva Journal ✦
                  </span>
                </div>

                {/* Middle Scrapbook Elements: Film Strip & Taped Notes */}
                <div className="relative z-20 flex-1 grid grid-cols-12 gap-3 items-center my-3">
                  
                  {/* Vertical 35mm Film Strip Reel */}
                  <div className="col-span-5 sm:col-span-4 flex flex-col items-center bg-[#151515] p-2 rounded-lg shadow-xl border border-white/20 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                    <div className="w-full flex justify-between px-1 py-0.5 mb-1 opacity-70">
                      {[...Array(6)].map((_, i) => (
                        <div key={`sprocket-top-${i}`} className="w-2.5 h-1.5 bg-white/90 rounded-xs" />
                      ))}
                    </div>
                    
                    <div className="flex flex-col gap-2 w-full">
                      {currentSpread.filmstrip.slice(0, 3).map((item) => (
                        <div 
                          key={item.id}
                          onClick={() => setSelectedImage({ img: item.img, title: item.label, caption: `${currentSpread.destination} Film Strip Reel` })}
                          className="relative aspect-[4/3] w-full overflow-hidden rounded bg-stone-900 group/film cursor-pointer"
                        >
                          <img 
                            src={item.img} 
                            alt={item.label} 
                            className="w-full h-full object-cover group-hover/film:scale-110 transition-transform duration-500" 
                          />
                          <div className="absolute inset-0 bg-black/20 group-hover/film:bg-transparent transition-colors flex items-center justify-center">
                            <Maximize2 className="w-4 h-4 text-white opacity-0 group-hover/film:opacity-100 transition-opacity" />
                          </div>
                          <span className="absolute bottom-0.5 left-1 text-[8px] font-mono text-white/90 bg-black/60 px-1 rounded">
                            {item.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="w-full flex justify-between px-1 py-0.5 mt-1 opacity-70">
                      {[...Array(6)].map((_, i) => (
                        <div key={`sprocket-bot-${i}`} className="w-2.5 h-1.5 bg-white/90 rounded-xs" />
                      ))}
                    </div>
                    <span className="font-mono text-[9px] text-amber-300/90 tracking-widest mt-1 uppercase font-semibold">
                      35MM KODAK • {currentSpread.destination}
                    </span>
                  </div>

                  {/* Right Side of Left Page: Circular Stamp & Taped Ripped Paper Note */}
                  <div className="col-span-7 sm:col-span-8 flex flex-col justify-between h-full py-1">
                    
                    {/* Stamp / Shell Tip Seal */}
                    <div className="relative self-end flex items-center gap-3 bg-[#E8DFC8] border border-[#B8963E]/40 rounded-full px-3 py-1.5 shadow-md transform rotate-3">
                      <div className="w-7 h-7 rounded-full bg-[#B8963E] text-white flex items-center justify-center font-bold text-xs shadow-sm">
                        ✦
                      </div>
                      <div>
                        <p className="font-mono text-[9px] uppercase tracking-wider text-[#B8963E] font-bold">
                          {currentSpread.travelTip.badge}
                        </p>
                        <p className="font-mono text-[10px] text-[#1A1714] font-semibold leading-tight">
                          {currentSpread.travelTip.title}
                        </p>
                      </div>
                    </div>

                    {/* Ripped Light Paper Note */}
                    <div 
                      className="relative bg-[#FAF6EE] p-4 rounded shadow-lg border border-amber-900/15 text-[#1A1714] transform"
                      style={{ transform: `rotate(${currentSpread.tapedNote.rotation}deg)` }}
                    >
                      {/* Translucent Masking Tape Effect */}
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-5 tape-strip rounded-xs transform -rotate-1 pointer-events-none" />
                      
                      <h4 className="font-mono text-xs uppercase tracking-wider font-bold text-[#C84B31] mb-1">
                        {currentSpread.tapedNote.title}
                      </h4>
                      <p className="font-script text-lg sm:text-xl leading-snug text-[#2C2621]">
                        "{currentSpread.tapedNote.text}"
                      </p>
                    </div>

                    {/* Subtle Stamp Overlay */}
                    <div className="font-mono text-[10px] text-[#8B8580] tracking-widest uppercase flex items-center gap-2">
                      <Compass className="w-3.5 h-3.5 text-[#B8963E]" />
                      <span>RECOMMENDED BY PURVA TRAVELERS</span>
                    </div>

                  </div>
                </div>

                {/* Left Page Bottom Footer Bar */}
                <div className="relative z-20 flex items-center justify-between border-t border-amber-900/15 pt-2">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-3.5 h-3.5 text-[#C84B31]" />
                    <span className="font-mono text-xs text-[#1A1714] tracking-wider font-semibold">
                      {currentSpread.cities.join(" • ")}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-[#8B8580] font-semibold">
                    {currentSpread.duration}
                  </span>
                </div>
              </div>

              {/* ── RIGHT PAGE SPREAD ── */}
              <div className="relative flex-1 h-full p-4 sm:p-6 lg:p-8 flex flex-col justify-between overflow-hidden bg-[#FAF8F5]">
                {/* Background Scenic Photo Soft Right */}
                <div className="absolute inset-0 z-0 opacity-30 mix-blend-multiply">
                  <img 
                    src={currentSpread.bgImageRight} 
                    alt={currentSpread.destination} 
                    className="w-full h-full object-cover filter contrast-[1.08]" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-transparent to-[#FAF8F5]/80" />
                </div>

                {/* Right Page Header */}
                <div className="relative z-20 flex items-start justify-between">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-widest text-[#B8963E] font-bold block mb-1">
                      JOURNAL DESTINATION
                    </span>
                    <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-[#1A1714] tracking-tight leading-none">
                      {currentSpread.destination}
                    </h2>
                  </div>
                  <span className="font-mono text-xs uppercase tracking-widest px-2.5 py-1 rounded bg-[#1A1714] text-[#F5F2ED] font-semibold">
                    PAGE 0{currentSpread.pageNumber * 2}
                  </span>
                </div>

                {/* Handwritten Header Caption */}
                <div className="relative z-20 my-2">
                  <p className="font-script text-2xl sm:text-3xl text-[#2B4C6F] font-semibold leading-tight max-w-md">
                    "{currentSpread.handwrittenHeader}"
                  </p>
                </div>

                {/* Polaroid Cards & Camera Viewfinder Section */}
                <div className="relative z-20 flex-1 my-2">
                  
                  {/* Polaroid Card 1 */}
                  {currentSpread.polaroids[0] && (
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: 0, zIndex: 40 }}
                      onClick={() => setSelectedImage({ img: currentSpread.polaroids[0].img, title: currentSpread.destination, caption: currentSpread.polaroids[0].caption })}
                      className="absolute right-4 sm:right-8 top-0 w-44 sm:w-52 bg-white p-2.5 pb-4 rounded shadow-2xl border border-amber-900/10 cursor-pointer transition-all"
                      style={{ transform: `rotate(${currentSpread.polaroids[0].rotation}deg)` }}
                    >
                      <div className="absolute -top-3 left-8 w-14 h-4 tape-strip rounded-xs transform -rotate-6 pointer-events-none" />
                      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xs bg-stone-200">
                        <img 
                          src={currentSpread.polaroids[0].img} 
                          alt={currentSpread.polaroids[0].caption} 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                      <p className="font-script text-base text-[#1A1714] mt-2 font-bold text-center leading-tight">
                        {currentSpread.polaroids[0].caption}
                      </p>
                    </motion.div>
                  )}

                  {/* Camera Viewfinder Box (Bottom Left of Right Page) */}
                  <div className="absolute left-0 bottom-2 w-48 sm:w-56 bg-[#18202c] p-2 rounded-xl shadow-2xl border border-white/30 transform -rotate-2">
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg">
                      <img 
                        src={currentSpread.viewfinderPhoto.img} 
                        alt="Viewfinder" 
                        className="w-full h-full object-cover filter brightness-105" 
                      />
                      {/* Viewfinder Overlay Lines */}
                      <div className="absolute inset-0 pointer-events-none border border-white/40 border-dashed m-1 rounded" />
                      <div className="absolute top-2 left-2 text-[8px] font-mono text-red-400 font-bold bg-black/60 px-1 rounded flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                        REC • {currentSpread.viewfinderPhoto.timestamp}
                      </div>
                    </div>
                    <p className="font-mono text-[9px] text-white/90 mt-1.5 text-center truncate font-medium">
                      {currentSpread.viewfinderPhoto.caption}
                    </p>
                  </div>

                </div>

                {/* Right Page Action CTAs */}
                <div className="relative z-30 flex flex-wrap items-center justify-between gap-3 border-t border-amber-900/15 pt-3 mt-auto">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#B8963E]" />
                    <span className="font-mono text-xs text-[#8B8580] font-semibold">
                      LIMITED SPOTS AVAILABLE
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={onBook}
                      className="flex items-center gap-2 px-5 py-2.5 rounded bg-[#1A1714] text-[#F5F2ED] font-mono text-xs uppercase tracking-widest hover:bg-[#B8963E] hover:text-white active:scale-95 transition-all shadow-md group"
                    >
                      <span>Enquire Tour</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

              </div>

            </motion.div>
          </AnimatePresence>

        </motion.div>
      </div>

      {/* ── BOTTOM PAGINATION & THUMBNAILS BAR ── */}
      <footer className="relative z-20 max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-white/20">
        {/* Left Indicator */}
        <div className="flex items-center gap-3">
          <Sparkles className="w-4 h-4 text-[#B8963E]" />
          <span className="font-mono text-xs text-white/90 font-medium tracking-wider">
            FLIP SPREADS TO EXPLORE ALL JOURNEYS
          </span>
        </div>

        {/* Spread Navigation Dots */}
        <div className="flex items-center gap-2">
          {JOURNAL_SPREADS.map((sp, idx) => (
            <button
              key={sp.id}
              onClick={() => goToSpread(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeSpreadIndex === idx
                  ? "w-8 bg-[#FAF8F5]"
                  : "w-2.5 bg-white/30 hover:bg-white/60"
              }`}
              title={`Jump to ${sp.destination}`}
            />
          ))}
        </div>

        {/* Right CTA */}
        <div className="flex items-center gap-4">
          <button
            onClick={onBook}
            className="font-mono text-xs uppercase tracking-widest text-[#FAF8F5] hover:text-[#B8963E] font-semibold transition-colors"
          >
            Request Custom Itinerary →
          </button>
        </div>
      </footer>

      {/* ── LIGHTBOX PHOTO MODAL ── */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-[#FAF8F5] rounded-2xl p-4 sm:p-6 border border-white/60 shadow-2xl flex flex-col items-center text-[#1A1714]"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/10 hover:bg-black/20 text-[#1A1714] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-black mb-4">
                <img 
                  src={selectedImage.img} 
                  alt={selectedImage.title} 
                  className="w-full h-full object-contain" 
                />
              </div>

              <div className="text-center">
                <h3 className="font-display text-2xl text-[#1A1714] font-light mb-1">
                  {selectedImage.title}
                </h3>
                <p className="font-mono text-xs text-[#B8963E] tracking-wider uppercase font-bold">
                  {selectedImage.caption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
