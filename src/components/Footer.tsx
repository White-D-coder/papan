'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MapPin, Mail, ShieldCheck, ArrowRight, Camera, Video, Share2, Heart } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert('Thank you for subscribing!');
      setEmail('');
    }
  };

  return (
    <footer
      id="site-footer"
      className="relative z-40 bg-[#FAF9F6] text-[#121316] border-t border-stone-300/80 rounded-t-[48px] overflow-hidden pt-14 pb-8 px-6 sm:px-12 font-sans mt-12 shadow-2xl"
    >
      {/* Background Louvre Glass Pyramid Photo with Horizontal 0% to 60% Gradient Mask */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/footer-louvre.jpg"
          alt="Louvre Glass Pyramid Scenic"
          fill
          className="object-cover object-right"
          priority
        />
        {/* Gradient Mask: Left side 0% to 60% solid porcelain glass background, right side 60% to 100% clear Louvre pyramid image */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF9F6] via-[#FAF9F6]/90 via-55% to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto flex flex-col gap-12">
        {/* TOP BAR: Logo & Newsletter */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-10 border-b border-stone-300/70">
          {/* Brand Logo & Title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#121316] flex items-center justify-center text-white font-extrabold text-xs shadow-md">
              RK
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-black text-xl tracking-widest text-stone-900 uppercase">
                  RYOKO
                </span>
                <span className="text-xs font-serif text-stone-500 tracking-wider">
                  旅行
                </span>
              </div>
              <p className="text-xs text-stone-600 font-bold tracking-tight mt-0.5">
                Authentic Travel Films &amp; Verifiable Itineraries
              </p>
            </div>
          </div>

          {/* Newsletter Input */}
          <form onSubmit={handleSubscribe} className="flex items-center w-full lg:w-auto">
            <div className="relative flex items-center w-full lg:w-[480px] bg-white/90 backdrop-blur-md rounded-full border border-stone-300 shadow-md focus-within:border-stone-800 transition-colors p-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email for 2026 Travel Guide PDF"
                className="w-full px-5 py-2.5 text-xs text-stone-800 bg-transparent placeholder:text-stone-400 outline-none font-medium"
                required
              />
              <button 
                type="submit"
                className="bg-[#121316] text-white px-6 py-2.5 rounded-full text-[11px] font-extrabold tracking-widest uppercase flex items-center gap-2 hover:bg-stone-800 transition-colors whitespace-nowrap cursor-pointer shadow-sm"
              >
                <span>FREE GUIDE</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        </div>

        {/* MIDDLE GRID: 4 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-xs">
          {/* Column 1: NAVIGATION */}
          <div className="flex flex-col gap-3">
            <h4 className="font-black text-[11px] tracking-widest text-stone-900 uppercase">
              NAVIGATION
            </h4>
            <ul className="flex flex-col gap-2 font-bold text-stone-600">
              <li>
                <a href="#first-frame" className="hover:text-stone-900 transition-colors">
                  First Frame
                </a>
              </li>
              <li>
                <a href="#about-us" className="hover:text-stone-900 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#destinations" className="hover:text-stone-900 transition-colors">
                  Destinations &amp; Regions
                </a>
              </li>
              <li>
                <a href="#the-reel" className="hover:text-stone-900 transition-colors">
                  Film Reel Portal
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: DESTINATIONS */}
          <div className="flex flex-col gap-3">
            <h4 className="font-black text-[11px] tracking-widest text-stone-900 uppercase">
              POPULAR GUIDES
            </h4>
            <ul className="flex flex-col gap-2 font-bold text-stone-600">
              <li>
                <a href="/destinations/japan" className="hover:text-stone-900 transition-colors">
                  Japan Autumn &amp; Cherry Blossom
                </a>
              </li>
              <li>
                <a href="/destinations/switzerland" className="hover:text-stone-900 transition-colors">
                  Swiss Alps &amp; Glacier Express
                </a>
              </li>
              <li>
                <a href="/destinations/south-korea" className="hover:text-stone-900 transition-colors">
                  South Korea &amp; Jeju Island
                </a>
              </li>
              <li>
                <a href="/destinations/austria" className="hover:text-stone-900 transition-colors">
                  Austria &amp; Bavaria Germany
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: CONNECT SOCIALS */}
          <div className="flex flex-col gap-3">
            <h4 className="font-black text-[11px] tracking-widest text-stone-900 uppercase">
              CONNECT WITH PURVA
            </h4>
            <div className="flex items-center gap-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                className="p-2.5 rounded-full bg-white/90 border border-stone-300 text-stone-800 hover:bg-[#121316] hover:text-white transition-all shadow-sm flex items-center justify-center"
              >
                <Camera className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                title="YouTube"
                className="p-2.5 rounded-full bg-white/90 border border-stone-300 text-stone-800 hover:bg-[#121316] hover:text-white transition-all shadow-sm flex items-center justify-center"
              >
                <Video className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Share"
                className="p-2.5 rounded-full bg-white/90 border border-stone-300 text-stone-800 hover:bg-[#121316] hover:text-white transition-all shadow-sm flex items-center justify-center"
              >
                <Share2 className="w-4 h-4" />
              </a>
            </div>
            <p className="text-[11px] text-stone-500 font-medium mt-1">
              Watch authentic 4K travel films &amp; daily stories on Instagram.
            </p>
          </div>

          {/* Column 4: CONTACT & CONCIERGE (Styled with White Text & High Contrast Drop Shadow) */}
          <div className="flex flex-col gap-3">
            <h4 className="font-black text-[11px] tracking-widest text-[#121316] uppercase">
              DIRECT CONCIERGE
            </h4>
            <ul className="flex flex-col gap-2.5 font-extrabold text-[#121316]">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" />
                <span className="text-white font-extrabold drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
                  Tokyo &amp; Zurich Offices
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-500 shrink-0 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" />
                <a
                  href="mailto:concierge@ryoko.com"
                  className="text-white font-extrabold drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] hover:underline transition-colors"
                >
                  concierge@ryoko.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" />
                <span className="text-white font-extrabold drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
                  Verified Itineraries
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR: Copyright & Credits (White Text & Shadow for Credits) */}
        <div className="pt-8 border-t border-stone-300/60 flex flex-col sm:flex-row items-center justify-between text-[11px] font-bold text-stone-600 gap-4">
          <p>© 2026 RYOKO. ALL RIGHTS RESERVED. REAL TRAVEL ITINERARIES &amp; FILMS.</p>
          <p className="flex items-center gap-1 font-extrabold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
            <span>CRAFTED WITH</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-current drop-shadow-md" />
            <span>BY PURVA</span>
          </p>
        </div>
      </div>
    </footer>
  );
}