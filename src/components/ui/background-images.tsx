'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const bgStreamImages = [
  '/images/japan-nara.jpg',
  '/images/switzerland.jpg',
  '/images/south-korea.jpg',
  '/images/austria.jpg',
  '/images/couple-portrait.jpg',
];

export const BackgroundImages = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        'relative w-full overflow-hidden bg-[#FAF9F6] text-[#121316]',
        className
      )}
    >
      {/* Background Floating Image Streams */}
      <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden flex justify-between gap-6 px-4">
        {[0, 1, 2, 3].map((colIndex) => (
          <motion.div
            key={colIndex}
            animate={{
              y: colIndex % 2 === 0 ? ['0%', '-50%'] : ['-50%', '0%'],
            }}
            transition={{
              duration: 25 + colIndex * 5,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="flex flex-col gap-6 w-1/4 shrink-0"
          >
            {bgStreamImages.concat(bgStreamImages).map((src, i) => (
              <div
                key={i}
                className="relative h-64 w-full rounded-2xl overflow-hidden shadow-sm filter blur-[2px]"
              >
                <Image src={src} alt="bg stream" fill className="object-cover" />
              </div>
            ))}
          </motion.div>
        ))}
      </div>

      {/* Radial scrim overlay to keep text crisp */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FAF9F6]/90 via-[#FAF9F6]/95 to-[#FAF9F6] pointer-events-none" />

      <div className="relative z-10">{children}</div>
    </div>
  );
};
