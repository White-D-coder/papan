"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Sparkles, ArrowUpRight, Compass } from "lucide-react";
import { cn } from "@/lib/utils";
import { EncryptedText } from "@/components/ui/encrypted-text";


interface VortexPhoto {
  id: string;
  dest: string;
  sub?: string;
  src: string;
  tag: string;
  angle: number;       // Base radial angle in degrees
  distance: number;    // Final outward radius %
  rotation: number;    // End tilt
  delay: number;       // Stagger delay
  aspect: "portrait" | "landscape" | "square";
}

const vortexPhotos: VortexPhoto[] = [
  { id: "1", dest: "JAPAN", src: "/images/japan-nara.jpg", tag: "Nara Deer Trail", angle: 25, distance: 36, rotation: -8, delay: 0, aspect: "portrait" },
  { id: "2", dest: "SWISS ALPS", src: "/images/switzerland.jpg", tag: "Glacier Express", angle: 140, distance: 42, rotation: 10, delay: 1.1, aspect: "landscape" },
  { id: "3", dest: "SOUTH KOREA", src: "/images/south-korea.jpg", tag: "Volcanic Coast", angle: 215, distance: 38, rotation: -12, delay: 2.2, aspect: "portrait" },
  { id: "4", dest: "AUSTRIA", src: "/images/austria.jpg", tag: "Hallstatt Lake", angle: 305, distance: 40, rotation: 12, delay: 3.3, aspect: "square" },
  { id: "5", dest: "TOKYO", src: "/images/couple-portrait.jpg", tag: "Shibuya Neon", angle: 80, distance: 32, rotation: -6, delay: 4.4, aspect: "portrait" },
  { id: "6", dest: "KYOTO", src: "/images/japan-nara.jpg", tag: "Arashiyama Walk", angle: 185, distance: 44, rotation: 8, delay: 5.5, aspect: "landscape" },
  { id: "7", dest: "ZERMATT", src: "/images/switzerland.jpg", tag: "Matterhorn Peak", angle: 265, distance: 34, rotation: -9, delay: 1.8, aspect: "portrait" },
  { id: "8", dest: "VIENNA", src: "/images/austria.jpg", tag: "Baroque Palaces", angle: 355, distance: 45, rotation: 7, delay: 3.9, aspect: "square" },
];

export const BackgroundLines = ({ className }: { className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeItem, setActiveItem] = useState<VortexPhoto>(vortexPhotos[0]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const portalScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.2, 1.45]);
  const portalOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.5, 1, 1, 0.5]);
  const textScale = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [0.9, 1.15, 0.98]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full h-screen min-h-[750px] bg-[#FAF9F6] text-[#121316] flex items-center justify-center overflow-hidden [perspective:1200px]",
        className
      )}
    >
      {/* Light Theme Porcelain Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.06)_0%,transparent_70%)]" />
      
      {/* Subtle Porcelain Grid Dots */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#121316 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Pure Forward-Only 3D Vortex Swirl Layer */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none [transform-style:preserve-3d]">
        {vortexPhotos.map((photo) => {
          const rad = (photo.angle * Math.PI) / 180;
          const endX = Math.cos(rad) * photo.distance;
          const endY = Math.sin(rad) * photo.distance;

          const aspectClasses = {
            portrait: "w-44 h-60 sm:w-56 sm:h-76",
            landscape: "w-60 h-40 sm:w-72 sm:h-48",
            square: "w-48 h-48 sm:w-56 sm:h-56",
          }[photo.aspect];

          return (
            <motion.div
              key={photo.id}
              initial={{
                opacity: 0,
                scale: 0.1,
                z: -1200,
                x: "0vw",
                y: "0vh",
                rotate: 0,
              }}
              animate={{
                // STRICTLY FORWARD RUSHING MOTION (0 -> 100%, NO REVERSE)
                opacity: [0, 0.4, 1, 1, 0],
                scale: [0.1, 0.4, 0.95, 1.6, 2.2],
                z: [-1200, -700, 0, 400, 750],
                x: ["0vw", `${endX * 0.3}vw`, `${endX * 0.7}vw`, `${endX}vw`, `${endX * 1.3}vw`],
                y: ["0vh", `${endY * 0.3}vh`, `${endY * 0.7}vh`, `${endY}vh`, `${endY * 1.3}vh`],
                rotate: [0, photo.rotation * 0.5, photo.rotation, photo.rotation * 1.3, photo.rotation * 1.6],
              }}
              transition={{
                duration: 8.5,
                repeat: Infinity,
                repeatType: "loop", // Strictly continuous forward loop (NO REVERSE)
                ease: [0.16, 1, 0.3, 1], // Smooth acceleration forward
                delay: photo.delay,
              }}
              onMouseEnter={() => setActiveItem(photo)}
              className={`absolute ${aspectClasses} rounded-2xl overflow-hidden bg-white border border-stone-200/90 shadow-[0_20px_45px_rgba(0,0,0,0.12)] pointer-events-auto cursor-pointer group transition-all duration-500 hover:scale-105 hover:border-amber-500 hover:shadow-2xl hover:z-50`}
            >
              <Image
                src={photo.src}
                alt={photo.dest}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 240px, 320px"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
              
              <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-end justify-between text-white z-10">
                <div>
                  <span className="text-xs font-black tracking-widest uppercase block text-white">
                    {photo.dest}
                  </span>
                  <span className="text-[10px] text-stone-300 font-medium">
                    {photo.tag}
                  </span>
                </div>
                <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-amber-500 group-hover:text-stone-950 transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Center Fixed Typography Layer (Light Theme Porcelain) */}
      <motion.div 
        style={{ scale: portalScale, opacity: portalOpacity }}
        className="relative z-10 max-w-4xl text-center px-4 pointer-events-none flex flex-col items-center"
      >

        <motion.h1 
          key={activeItem.dest}
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 14 }}
          style={{ scale: textScale }}
          className="text-6xl sm:text-8xl md:text-9xl font-bold tracking-tighter uppercase leading-[0.9] text-[#F4F1EA] drop-shadow-[0_10px_25px_rgba(225,29,72,0.6)] select-none"
        >
          <EncryptedText
            text={activeItem.dest}
            encryptedClassName="text-[#e22222]/60"
            revealedClassName="text-[#F4F1EA]"
            revealDelayMs={40}
          />
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="text-s sm:text-sm font-bold tracking-[0.3em] uppercase text-[#e22222] mt-5"
        >
          {activeItem.tag} • Real Itineraries &amp; 4K Journals
        </motion.p>
      </motion.div>
    </div>
  );
};

export default BackgroundLines;