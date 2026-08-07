'use client';

import { useState, useEffect } from 'react';
import { Clock, Heart, Camera, Video } from 'lucide-react';

export default function Footer() {
  const [tokyoTime, setTokyoTime] = useState('');
  const [zurichTime, setZurichTime] = useState('');

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      setTokyoTime(now.toLocaleTimeString('en-US', { timeZone: 'Asia/Tokyo', hour: '2-digit', minute: '2-digit' }));
      setZurichTime(now.toLocaleTimeString('en-US', { timeZone: 'Europe/Zurich', hour: '2-digit', minute: '2-digit' }));
    };
    updateTimes();
    const interval = setInterval(updateTimes, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer id="site-footer" className="relative z-40 bg-[#121316] text-[#FAF9F6] border-t border-stone-800 py-8 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <a href="#first-frame" className="flex items-center gap-3 group text-decoration-none">
          <div className="relative w-7 h-7 rounded-lg bg-[#FAF9F6] overflow-hidden flex items-center justify-center shadow-md">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400 via-emerald-500 to-blue-600 opacity-90" />
            <span className="relative z-10 font-black text-xs text-[#121316] tracking-tighter">
              SO
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-xs tracking-[0.2em] text-[#FAF9F6] uppercase">
              SOSUNIDHI
            </span>
            <span className="font-mono-code text-[8px] tracking-widest text-stone-400 uppercase">
              TRAVEL, SOLVED
            </span>
          </div>
        </a>

        {/* Links */}
        <nav className="flex items-center gap-6 text-xs font-semibold uppercase tracking-wider text-stone-300">
          <a href="#first-frame" className="hover:text-amber-400 transition-colors">First Frame</a>
          <a href="#about-us" className="hover:text-amber-400 transition-colors">About Us</a>
          <a href="#destinations" className="hover:text-amber-400 transition-colors">Destinations</a>
          <a href="#the-reel" className="hover:text-amber-400 transition-colors">The Reel</a>
        </nav>

        {/* Live Clock & Social */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-xs font-mono-code text-stone-400">
          <div className="flex items-center gap-3 bg-stone-900/90 px-3 py-1.5 rounded-full border border-stone-800">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span>TYO {tokyoTime || '00:00'}</span>
            <span className="text-stone-600">•</span>
            <span>ZRH {zurichTime || '00:00'}</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
              className="p-2 rounded-full bg-stone-800 text-stone-300 hover:text-white hover:bg-stone-700 transition-colors flex items-center justify-center"
            >
              <Camera className="w-4 h-4" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              title="YouTube"
              className="p-2 rounded-full bg-stone-800 text-stone-300 hover:text-white hover:bg-stone-700 transition-colors flex items-center justify-center"
            >
              <Video className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-6 pt-6 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between text-[10px] font-mono-code text-stone-500 gap-2">
        <p>© 2026 SOSUNIDHI. ALL RIGHTS RESERVED. REAL TRAVEL ITINERARIES &amp; FILMS.</p>
        <p className="flex items-center gap-1">
          CRAFTED WITH <Heart className="w-3 h-3 text-rose-500 fill-current" /> BY SUNIDHI &amp; SHUBHAM
        </p>
      </div>
    </footer>
  );
}
