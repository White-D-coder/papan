'use client';

import React from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, ChevronDown, Play, MapPin, ArrowUpRight, Compass } from 'lucide-react';

export const HeroParallax = ({
  products,
  onOpenInquiry,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
    location?: string;
  }[];
  onOpenInquiry?: () => void;
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);

  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  // Smooth & responsive physics spring tuning
  const springConfig = { stiffness: 120, damping: 20, mass: 0.6 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 850]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -850]),
    springConfig
  );

  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.25], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.7, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.25], [8, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.25], [-550, 80]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-[290vh] py-12 overflow-hidden bg-[#FAF9F6] text-[#121316] antialiased relative flex flex-col [perspective:1200px] [transform-style:preserve-3d]"
    >
      <Header onOpenInquiry={onOpenInquiry} />

      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="will-change-transform transform-gpu"
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-12 sm:space-x-16 mb-12 sm:mb-16">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>

        <motion.div className="flex flex-row space-x-12 sm:space-x-16 mb-12 sm:mb-16">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>

        <motion.div className="flex flex-row-reverse space-x-reverse space-x-12 sm:space-x-16">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = ({ onOpenInquiry }: { onOpenInquiry?: () => void }) => {
  return (
    <div className="max-w-7xl relative mx-auto pt-16 md:pt-28 pb-12 px-4 w-full z-20 flex flex-col items-center text-center">
      
      {/* Background Watermark Kanji */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.03] text-[18rem] sm:text-[26rem] font-serif font-black text-stone-900 leading-none">
        旅行
      </div>

      {/* Floating Badge */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#121316] text-white text-xs font-sans font-semibold tracking-wider mb-6 shadow-xl border border-stone-800"
      >
        <Sparkles className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
        <span>AUTHENTIC TRAVEL FILMS &amp; GUIDES</span>
      </motion.div>

      {/* Main Title Block */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <h1 className="font-sans text-6xl sm:text-8xl md:text-9xl font-black tracking-tighter text-[#121316] leading-none">
          Ryoko
        </h1>
        <p className="font-serif italic text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-amber-700 mt-2">
          Travel, Solved.
        </p>
      </motion.div>

      {/* Subtitle & Value Proposition */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="font-sans text-xs sm:text-sm font-bold tracking-[0.2em] text-stone-600 uppercase mt-6 max-w-xl"
      >
        Real Itineraries • Honest Budgets • 4K Cinematic Films
      </motion.p>

      {/* Action Buttons */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="flex items-center gap-4 mt-8"
      >
        <a
          href="#destinations"
          className="group relative px-7 py-3.5 rounded-full bg-[#121316] text-[#FAF9F6] font-bold text-xs uppercase tracking-widest transition-all shadow-xl hover:bg-stone-800 hover:shadow-2xl hover:scale-105 active:scale-95 flex items-center gap-2"
        >
          <Compass className="w-4 h-4 text-amber-400 group-hover:rotate-45 transition-transform duration-300" />
          <span>Explore Journeys</span>
        </a>
        <button
          onClick={onOpenInquiry}
          className="px-7 py-3.5 rounded-full bg-white/80 backdrop-blur-md text-[#121316] font-bold text-xs uppercase tracking-widest border border-stone-300 hover:border-stone-800 hover:bg-white transition-all shadow-md hover:shadow-xl hover:scale-105 active:scale-95"
        >
          Plan Trip
        </button>
      </motion.div>

      {/* Quick Stats Strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-12 pt-6 border-t border-stone-300/60 flex items-center gap-6 sm:gap-10 text-[10px] sm:text-xs font-mono font-bold text-stone-500 uppercase tracking-widest"
      >
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
          <span>100% Independent</span>
        </div>
        <span className="text-stone-300">•</span>
        <div>4K Visual Journals</div>
        <span className="text-stone-300">•</span>
        <div>Bespoke Cost Guides</div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div 
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="mt-10 text-stone-400 hover:text-stone-800 transition-colors"
      >
        <a href="#destinations" aria-label="Scroll Down">
          <ChevronDown className="w-6 h-6" />
        </a>
      </motion.div>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
    location?: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -18,
        scale: 1.02,
      }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      key={product.title}
      className="group/product h-80 sm:h-96 w-[22rem] sm:w-[28rem] relative shrink-0 rounded-[28px] overflow-hidden shadow-xl hover:shadow-2xl bg-stone-900 border border-stone-300/80 will-change-transform transform-gpu cursor-pointer"
    >
      <Link href={product.link} className="block h-full w-full">
        {/* Thumbnail Image */}
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-center absolute h-full w-full inset-0 group-hover/product:scale-108 transition-transform duration-700 ease-out"
          alt={product.title}
          priority={false}
        />

        {/* Permanent Subtle Gradient for Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/10 transition-opacity duration-300 group-hover/product:from-black/90 group-hover/product:via-black/40" />

        {/* Top Badges Header */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          {product.location ? (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[10px] font-mono font-bold tracking-widest uppercase">
              <MapPin className="w-3 h-3 text-amber-400" />
              <span>{product.location}</span>
            </div>
          ) : <div />}

          <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white opacity-80 group-hover/product:opacity-100 group-hover/product:scale-110 group-hover/product:bg-amber-500 group-hover/product:text-stone-950 transition-all duration-300">
            <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
          </div>
        </div>

        {/* Bottom Card Info */}
        <div className="absolute bottom-5 left-5 right-5 z-10 text-white flex items-end justify-between">
          <div>
            <span className="text-[9px] font-mono font-extrabold tracking-widest text-amber-300 uppercase block mb-1 opacity-90 group-hover/product:opacity-100">
              RYOKO JOURNAL
            </span>
            <h2 className="font-serif italic text-2xl sm:text-3xl font-normal leading-tight text-white group-hover/product:text-amber-100 transition-colors">
              {product.title}
            </h2>
          </div>

          <div className="p-2 rounded-full bg-white/10 backdrop-blur-md opacity-0 group-hover/product:opacity-100 transition-opacity duration-300">
            <ArrowUpRight className="w-4 h-4 text-white" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};