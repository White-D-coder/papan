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
import { Sparkles, ChevronDown } from 'lucide-react';

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

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );

  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [18, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.8, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [10, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-600, 100]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-[300vh] py-20 overflow-hidden bg-[#FAF9F6] text-[#121316] antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header onOpenInquiry={onOpenInquiry} />

      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-16">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>

        <motion.div className="flex flex-row space-x-20 mb-16">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>

        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
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
    <div className="max-w-7xl relative mx-auto py-20 md:py-32 px-4 w-full left-0 top-0 z-20 flex flex-col items-center text-center">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-900 text-amber-300 text-xs font-mono-code font-bold tracking-wider mb-6 shadow-xl border border-stone-800">
        <Sparkles className="w-3.5 h-3.5" />
        <span>AUTHENTIC TRAVEL FILM &amp; ITINERARIES</span>
      </div>

      <h1 className="font-serif-editorial italic text-6xl sm:text-8xl md:text-9xl font-normal tracking-tight text-[#121316] leading-[0.9]">
        SoSunidhi
      </h1>
      <h2 className="font-serif-editorial italic text-4xl sm:text-6xl md:text-7xl font-normal text-amber-700 -mt-2 sm:-mt-4">
        Travel, Solved.
      </h2>

      <p className="font-mono-code text-xs sm:text-sm font-semibold tracking-[0.3em] text-stone-700 uppercase mt-6 max-w-xl">
        Real Itineraries • Honest Budgets • Cinematic Films
      </p>

      <div className="flex items-center gap-4 mt-8">
        <a
          href="#destinations"
          className="px-6 py-3 rounded-full bg-[#121316] text-[#FAF9F6] font-bold text-xs uppercase tracking-widest hover:bg-stone-800 transition-all shadow-lg hover:scale-105 active:scale-95"
        >
          Explore Destinations
        </a>
        <button
          onClick={onOpenInquiry}
          className="px-6 py-3 rounded-full bg-white/90 backdrop-blur-md text-[#121316] font-bold text-xs uppercase tracking-widest border border-stone-300 hover:bg-stone-100 transition-all shadow-md hover:scale-105 active:scale-95"
        >
          Plan Trip
        </button>
      </div>
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
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative shrink-0 rounded-3xl overflow-hidden shadow-2xl bg-stone-900 border border-stone-200"
    >
      <Link
        href={product.link}
        className="block group-hover/product:shadow-2xl "
      >
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0 group-hover/product:scale-105 transition-transform duration-500"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-[#121316] pointer-events-none transition-opacity duration-300" />
      <div className="absolute bottom-6 left-6 opacity-0 group-hover/product:opacity-100 text-white transition-opacity duration-300">
        {product.location && (
          <span className="font-mono-code text-[10px] text-amber-300 tracking-widest uppercase block mb-1">
            {product.location}
          </span>
        )}
        <h2 className="font-serif-editorial italic text-3xl font-normal">
          {product.title}
        </h2>
      </div>
    </motion.div>
  );
};
