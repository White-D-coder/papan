'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Compass, Sparkles } from 'lucide-react';

interface HeaderProps {
  onOpenInquiry: () => void;
}

export default function Header({ onOpenInquiry }: HeaderProps) {
  const [isDocked, setIsDocked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsDocked(true);
      } else {
        setIsDocked(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 transition-all duration-500 pointer-events-none">
      <motion.div
        animate={{
          maxWidth: isDocked ? "680px" : "1280px",
          paddingLeft: isDocked ? "16px" : "28px",
          paddingRight: isDocked ? "12px" : "28px",
          paddingTop: isDocked ? "10px" : "18px",
          paddingBottom: isDocked ? "10px" : "18px",
          borderRadius: isDocked ? "999px" : "24px",
          backgroundColor: isDocked ? "rgba(255, 255, 255, 0.88)" : "rgba(250, 249, 246, 0.4)",
          boxShadow: isDocked
            ? "0 20px 50px -10px rgba(0, 0, 0, 0.08), 0 0 1px 1px rgba(255,255,255,0.9) inset"
            : "none",
          backdropFilter: isDocked ? "blur(20px)" : "blur(4px)",
          borderWidth: "1px",
          borderColor: isDocked ? "rgba(18, 19, 22, 0.08)" : "transparent",
        }}
        transition={{ duration: 0.5, ease: [0.32, 0.72, 0.28, 1] }}
        className="w-full flex items-center justify-between gap-4 pointer-events-auto"
      >
        {/* Brand Logo */}
        <a href="#first-frame" className="flex items-center gap-3 group text-decoration-none">
          <div className="relative w-9 h-9 rounded-xl bg-[#121316] overflow-hidden flex items-center justify-center shadow-md transition-transform group-hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400 via-emerald-500 to-blue-600 opacity-80 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10 font-black text-sm text-[#FAF9F6] tracking-tighter">
              SO
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-xs tracking-[0.25em] text-[#121316] uppercase">
              SOSUNIDHI
            </span>
            <span className="font-mono-code text-[9px] tracking-widest text-stone-500 uppercase -mt-0.5">
              TRAVEL, SOLVED
            </span>
          </div>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          <a
            href="#first-frame"
            className="text-xs font-semibold uppercase tracking-wider text-stone-600 hover:text-stone-950 transition-colors"
          >
            Home
          </a>
          <a
            href="#about-us"
            className="text-xs font-semibold uppercase tracking-wider text-stone-600 hover:text-stone-950 transition-colors"
          >
            About Us
          </a>
          <a
            href="#destinations"
            className="text-xs font-semibold uppercase tracking-wider text-stone-600 hover:text-stone-950 transition-colors"
          >
            Destinations
          </a>
          <a
            href="#the-reel"
            className="text-xs font-semibold uppercase tracking-wider text-stone-600 hover:text-stone-950 transition-colors"
          >
            Film Reel
          </a>
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenInquiry}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#121316] text-[#FAF9F6] text-xs font-bold tracking-wide hover:bg-stone-800 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span>Plan Itinerary</span>
          </button>
        </div>
      </motion.div>
    </header>
  );
}
