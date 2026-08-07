'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Film, Play, X } from 'lucide-react';
import Image from 'next/image';
import { DirectionAwareHover } from './ui/direction-aware-hover';

const reelItems = [
  {
    id: 'reel-1',
    title: 'Autumn Deer Park • Nara',
    location: 'Japan',
    image: '/images/japan-nara.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=sosunidhi-japan',
    tag: '4K CINEMATIC FILM',
  },
  {
    id: 'reel-2',
    title: 'Landwasser Viaduct • Swiss Alps',
    location: 'Switzerland',
    image: '/images/switzerland.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=sosunidhi-swiss',
    tag: 'RAILWAY EXPRESS',
  },
  {
    id: 'reel-3',
    title: 'Jeju Volcanic Coast',
    location: 'South Korea',
    image: '/images/south-korea.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=sosunidhi-korea',
    tag: 'COASTAL EXPLORER',
  },
  {
    id: 'reel-4',
    title: 'Lakeside Fairytale • Hallstatt',
    location: 'Austria',
    image: '/images/austria.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=sosunidhi-austria',
    tag: 'WINTER LANDSCAPE',
  },
  {
    id: 'reel-5',
    title: 'Higashiyama Sunset Lookout',
    location: 'Kyoto, Japan',
    image: '/images/couple-portrait.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=sosunidhi-kyoto',
    tag: 'CREATOR DIARY',
  },
];

export default function FilmReel() {
  const [activeReel, setActiveReel] = useState<typeof reelItems[0] | null>(null);

  return (
    <section id="the-reel" className="relative w-full py-28 px-4 bg-[#FAF9F6] text-[#121316] overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono-code text-xs tracking-[0.3em] font-bold text-amber-700 uppercase mb-3 flex items-center gap-2">
            <Film className="w-4 h-4" /> THE TRAVEL FILM REEL
          </span>
          <h2 className="font-serif-editorial italic text-4xl sm:text-6xl font-normal tracking-tight leading-tight text-stone-900">
            Stories Captured in 4K Motion
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-3">
            Hover and click any film frame to preview our cinematic video journals and honest breakdown videos.
          </p>
        </div>

        {/* Direction-Aware Hover Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {reelItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              onClick={() => setActiveReel(item)}
              className="cursor-pointer"
            >
              <DirectionAwareHover imageUrl={item.image} className="h-96">
                <div className="flex flex-col justify-between h-full p-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono-code text-[9px] font-bold tracking-widest text-amber-300 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                      {item.tag}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-amber-400 text-stone-950 flex items-center justify-center shadow-lg">
                      <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                    </div>
                  </div>

                  <div>
                    <span className="font-mono-code text-[10px] text-stone-300 uppercase tracking-widest block mb-0.5">
                      {item.location}
                    </span>
                    <h3 className="font-serif-editorial italic text-2xl leading-tight font-normal text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </DirectionAwareHover>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Video Modal */}
      <AnimatePresence>
        {activeReel && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveReel(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-4xl bg-stone-900 rounded-3xl overflow-hidden shadow-2xl z-10 border border-stone-800 text-white"
            >
              <div className="relative aspect-video w-full bg-black">
                <Image
                  src={activeReel.image}
                  alt={activeReel.title}
                  fill
                  className="object-cover opacity-80"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 gap-4">
                  <div className="w-16 h-16 rounded-full bg-amber-400 text-stone-950 flex items-center justify-center shadow-2xl animate-pulse cursor-pointer hover:scale-110 transition-transform">
                    <Play className="w-7 h-7 fill-current ml-1" />
                  </div>
                  <span className="font-mono-code text-xs tracking-widest text-amber-300 uppercase font-bold">
                    CLICK TO WATCH FULL FILM IN 4K
                  </span>
                </div>

                <button
                  onClick={() => setActiveReel(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white backdrop-blur-md hover:bg-black transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 flex items-center justify-between">
                <div>
                  <span className="font-mono-code text-xs text-amber-400 font-semibold uppercase">
                    {activeReel.location} • {activeReel.tag}
                  </span>
                  <h3 className="font-serif-editorial italic text-3xl font-normal mt-0.5">
                    {activeReel.title}
                  </h3>
                </div>

                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-amber-400 text-stone-950 text-xs font-bold font-mono-code uppercase tracking-wider hover:bg-amber-300 transition-colors shadow-lg"
                >
                  Watch on YouTube
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
