'use client';

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const DirectionAwareHover = ({
  imageUrl,
  children,
  childrenClassName,
  imageClassName,
  className,
}: {
  imageUrl: string;
  children?: React.ReactNode | string;
  childrenClassName?: string;
  imageClassName?: string;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const [direction, setDirection] = useState<
    "top" | "bottom" | "left" | "right" | string
  >("left");

  const handleMouseEnter = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (!ref.current) return;

    const direction = getDirection(event, ref.current);
    switch (direction) {
      case 0:
        setDirection("top");
        break;
      case 1:
        setDirection("right");
        break;
      case 2:
        setDirection("bottom");
        break;
      case 3:
        setDirection("left");
        break;
      default:
        setDirection("left");
        break;
    }
  };

  const getDirection = (
    ev: React.MouseEvent<HTMLDivElement, MouseEvent>,
    obj: HTMLElement
  ) => {
    const { width: w, height: h, left: l, top: t } = obj.getBoundingClientRect();
    const x = ev.clientX - l - (w / 2) * (w > h ? h / w : 1);
    const y = ev.clientY - t - (h / 2) * (h > w ? w / h : 1);
    const d = Math.round(Math.atan2(y, x) / (Math.PI / 2) + 5) % 4;
    return d;
  };

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      ref={ref}
      className={cn(
        "md:h-96 w-full h-80 bg-[#121316] rounded-3xl overflow-hidden group/card relative border border-stone-200 shadow-lg",
        className
      )}
    >
      <AnimatePresence mode="wait">
        <motion.div
          className="relative h-full w-full"
          initial="initial"
          whileHover={direction}
          exit="exit"
        >
          <motion.div className="group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500" />
          <motion.div
            variants={variants}
            className="h-full w-full relative bg-stone-900"
            transition={{
              duration: 0.35,
              ease: "easeOut",
            }}
          >
            <Image
              alt="image"
              className={cn(
                "h-full w-full object-cover scale-105 group-hover/card:scale-110 transition-transform duration-700",
                imageClassName
              )}
              width="1000"
              height="1000"
              src={imageUrl}
            />
          </motion.div>
          <motion.div
            variants={textVariants}
            transition={{
              duration: 0.35,
              ease: "easeOut",
            }}
            className={cn(
              "text-[#FAF9F6] absolute bottom-6 left-6 z-40 font-mono-code",
              childrenClassName
            )}
          >
            {children}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

const variants = {
  initial: {
    x: 0,
    y: 0,
  },
  top: {
    y: -8,
  },
  bottom: {
    y: 8,
  },
  left: {
    x: -8,
  },
  right: {
    x: 8,
  },
};

const textVariants = {
  initial: {
    y: 0,
    opacity: 0.85,
  },
  top: {
    y: -10,
    opacity: 1,
  },
  bottom: {
    y: 10,
    opacity: 1,
  },
  left: {
    x: -10,
    opacity: 1,
  },
  right: {
    x: 10,
    opacity: 1,
  },
};
