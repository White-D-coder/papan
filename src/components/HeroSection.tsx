"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useAnimationFrame,
} from "framer-motion";

/* ─────────────────────────────────────────────
   TYPES
   ───────────────────────────────────────────── */

type GalleryImage = {
  src: string;
  location: string;
  country: string;
};

type HeroProps = {
  onBook?: () => void;
};

/* ─────────────────────────────────────────────
   GALLERY DATA — vertical columns
   ───────────────────────────────────────────── */

const COL_1: GalleryImage[] = [
  { src: "/images/japan/tokyo.jpg", location: "Tokyo", country: "Japan" },
  { src: "/images/switzerland.jpg", location: "Lucerne", country: "Switzerland" },
  { src: "/images/japan/spring.jpg", location: "Mount Fuji", country: "Japan" },
  { src: "/images/south-korea.jpg", location: "Seoul", country: "South Korea" },
  { src: "/images/japan/matcha.jpg", location: "Uji", country: "Japan" },
];

const COL_2: GalleryImage[] = [
  { src: "/images/japan/kyoto.jpg", location: "Kyoto", country: "Japan" },
  { src: "/images/pexels-dudubangbang-29028514.jpg", location: "Osaka", country: "Japan" },
  { src: "/images/austria.jpg", location: "Vienna", country: "Austria" },
  { src: "/images/japan/hotel-kyoto.jpg", location: "Hakone", country: "Japan" },
  { src: "/images/pexels-leongsan-35132140.jpg", location: "Zurich", country: "Switzerland" },
];

const COL_3: GalleryImage[] = [
  { src: "/images/pexels-marianne-tang-1019062-4087897.jpg", location: "Kyoto", country: "Japan" },
  { src: "/images/japan/autumn.jpg", location: "Nara", country: "Japan" },
  { src: "/images/pexels-beigh-yabaar-865585625-32584961.jpg", location: "Bali", country: "Southeast Asia" },
  { src: "/images/japan/ramen.jpg", location: "Fukuoka", country: "Japan" },
  { src: "/images/pexels-masoodaslami-14680969.jpg", location: "Alps", country: "Austria" },
];

const COL_4: GalleryImage[] = [
  { src: "/images/japan/osaka.jpg", location: "Osaka", country: "Japan" },
  { src: "/images/pexels-afhamhmsyri-34021102.jpg", location: "Nara", country: "Japan" },
  { src: "/images/pexels-sristi-saha-661973020-17727740.jpg", location: "Seoul", country: "South Korea" },
  { src: "/images/japan/summer.jpg", location: "Kamakura", country: "Japan" },
  { src: "/images/pexels-marianne-tang-1019062-4094519.jpg", location: "Arashiyama", country: "Japan" },
];

const COL_5: GalleryImage[] = [
  { src: "/images/pexels-le-thanh-huyen-1056408622-34420369.jpg", location: "Hanoi", country: "Vietnam" },
  { src: "/images/japan/winter.jpg", location: "Hokkaido", country: "Japan" },
  { src: "/images/pexels-markus-winkler-1430818-19902239.jpg", location: "Berlin", country: "Germany" },
  { src: "/images/japan/sushi.jpg", location: "Tsukiji", country: "Japan" },
  { src: "/images/pexels-o-dodo-2154460908-34088054.jpg", location: "Shirakawa", country: "Japan" },
];

/* ─────────────────────────────────────────────
   EASING
   ───────────────────────────────────────────── */

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

/* ─────────────────────────────────────────────
   CARD DIMENSIONS
   ───────────────────────────────────────────── */

const CARD_W = 260;
const CARD_H = 340;
const GAP = 14;

/* ─────────────────────────────────────────────
   INFINITE VERTICAL MARQUEE COLUMN
   ───────────────────────────────────────────── */

function MarqueeColumn({
  images,
  speed,
  reverse,
  colIndex,
  mounted,
}: {
  images: GalleryImage[];
  speed: number;
  reverse: boolean;
  colIndex: number;
  mounted: boolean;
}) {
  const baseY = useMotionValue(reverse ? -(images.length * (CARD_H + GAP)) : 0);
  const [hovered, setHovered] = useState<number | null>(null);

  const doubled = [...images, ...images];
  const singleSetHeight = images.length * (CARD_H + GAP);

  useAnimationFrame((_, delta) => {
    const dir = reverse ? 1 : -1;
    const px = speed * (delta / 16);
    let next = baseY.get() + dir * px;

    if (!reverse && next <= -singleSetHeight) {
      next += singleSetHeight;
    } else if (reverse && next >= 0) {
      next -= singleSetHeight;
    }

    baseY.set(next);
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: reverse ? -40 : 40 }}
      animate={
        mounted
          ? {
              opacity: 1,
              y: 0,
              transition: {
                duration: 1.1,
                delay: 0.15 + colIndex * 0.12,
                ease: EASE_OUT,
              },
            }
          : {}
      }
      style={{
        display: "flex",
        flexDirection: "column",
        gap: GAP,
        willChange: "transform",
        y: baseY,
      }}
      onMouseEnter={() => setHovered(-1)}
      onMouseLeave={() => setHovered(null)}
    >
      {doubled.map((img, i) => (
        <motion.div
          key={`${img.src}-${i}`}
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(-1)}
          animate={{
            scale: hovered === i ? 1.05 : 1,
            zIndex: hovered === i ? 10 : 1,
          }}
          transition={{ duration: 0.35, ease: EASE_OUT }}
          style={{
            position: "relative",
            flexShrink: 0,
            width: CARD_W,
            height: CARD_H,
            borderRadius: 16,
            overflow: "hidden",
            cursor: "pointer",
            boxShadow:
              "0 6px 28px rgba(26,23,20,0.12), 0 2px 6px rgba(26,23,20,0.06)",
          }}
        >
          <Image
            src={img.src}
            alt={`${img.location}, ${img.country}`}
            fill
            sizes="260px"
            style={{
              objectFit: "cover",
              transition: "transform 0.6s cubic-bezier(0.16,1,0.3,1)",
              transform: hovered === i ? "scale(1.08)" : "scale(1)",
            }}
            draggable={false}
          />

          {/* Gradient overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(13,12,10,0.65) 0%, rgba(13,12,10,0.08) 45%, transparent 100%)",
              opacity: hovered === i ? 1 : 0.25,
              transition: "opacity 0.35s ease",
              pointerEvents: "none",
            }}
          />

          {/* Location label on hover */}
          <div
            style={{
              position: "absolute",
              bottom: 16,
              left: 16,
              right: 16,
              opacity: hovered === i ? 1 : 0,
              transform: hovered === i ? "translateY(0)" : "translateY(8px)",
              transition: "all 0.35s cubic-bezier(0.16,1,0.3,1)",
              pointerEvents: "none",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 8,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(245,242,237,0.5)",
                marginBottom: 4,
              }}
            >
              {img.country}
            </div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 22,
                fontWeight: 300,
                color: "#F5F2ED",
                letterSpacing: "-0.01em",
              }}
            >
              {img.location}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   HERO COMPONENT
   ───────────────────────────────────────────── */

export default function HeroSection({ onBook }: HeroProps) {
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
  });

  const titleY = useTransform(smoothScroll, [0, 1], [0, -90]);
  const titleOpacity = useTransform(smoothScroll, [0, 0.45], [1, 0]);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  const COLUMNS = [
    { images: COL_1, speed: 0.55, reverse: false },
    { images: COL_2, speed: 0.4, reverse: true },
    { images: COL_3, speed: 0.65, reverse: false },
    { images: COL_4, speed: 0.45, reverse: true },
    { images: COL_5, speed: 0.5, reverse: false },
  ];

  return (
    <section
      id="hero"
      ref={sectionRef}
      style={{
        position: "relative",
        width: "100%",
        height: "100svh",
        minHeight: 600,
        overflow: "hidden",
        background: "#F5F2ED",
      }}
    >
      {/* ═══════════════════════════════════════
          SLANTED GALLERY GRID
          ═══════════════════════════════════════ */}

      <div
        style={{
          position: "absolute",
          inset: "-40% -20%",
          zIndex: 1,
          display: "flex",
          flexDirection: "row",
          gap: GAP,
          justifyContent: "center",
          alignItems: "flex-start",
          transform: "rotate(-12deg)",
          transformOrigin: "center center",
        }}
      >
        {COLUMNS.map((col, i) => (
          <MarqueeColumn
            key={i}
            images={col.images}
            speed={col.speed}
            reverse={col.reverse}
            colIndex={i}
            mounted={mounted}
          />
        ))}
      </div>

      {/* ═══════════════════════════════════════
          RADIAL FADE MASKS
          ═══════════════════════════════════════ */}

      {/* Center vignette to make text readable */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 5,
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse 55% 50% at 38% 50%, rgba(245,242,237,0.92) 0%, rgba(245,242,237,0.6) 50%, transparent 100%)",
        }}
      />

      {/* Top edge */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "18%",
          zIndex: 6,
          pointerEvents: "none",
          background:
            "linear-gradient(to bottom, #F5F2ED, transparent)",
        }}
      />

      {/* Bottom edge */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "22%",
          zIndex: 6,
          pointerEvents: "none",
          background:
            "linear-gradient(to top, #F5F2ED, transparent)",
        }}
      />

      {/* Left edge */}
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          width: "14%",
          zIndex: 6,
          pointerEvents: "none",
          background:
            "linear-gradient(to right, #F5F2ED, transparent)",
        }}
      />

      {/* Right edge */}
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          width: "10%",
          zIndex: 6,
          pointerEvents: "none",
          background:
            "linear-gradient(to left, #F5F2ED, transparent)",
        }}
      />

      {/* ═══════════════════════════════════════
          CONTENT OVERLAY
          ═══════════════════════════════════════ */}

      <motion.div
        style={{
          position: "relative",
          zIndex: 10,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 clamp(32px, 6vw, 80px)",
          maxWidth: 680,
          y: titleY,
          opacity: titleOpacity,
        }}
      >
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={
            mounted
              ? {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, delay: 0.3, ease: EASE_OUT },
                }
              : {}
          }
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgba(26,23,20,0.35)",
            marginBottom: 20,
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <span>01</span>
          <span
            style={{
              display: "inline-block",
              width: 28,
              height: 1,
              background: "rgba(26,23,20,0.2)",
            }}
          />
          <span>Travel Archive</span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={
            mounted
              ? {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: { duration: 1.1, delay: 0.15, ease: EASE_OUT },
                }
              : {}
          }
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 300,
            fontSize: "clamp(2.8rem, 6.5vw, 6.5rem)",
            lineHeight: 0.92,
            letterSpacing: "-0.03em",
            color: "#1A1714",
            margin: 0,
            userSelect: "none",
          }}
        >
          Stories
          <br />
          Through{" "}
          <span
            style={{
              fontStyle: "italic",
              color: "#B8963E",
            }}
          >
            Every
          </span>
          <br />
          <span style={{ fontStyle: "italic", color: "#B8963E" }}>
            Lens
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={
            mounted
              ? {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.9, delay: 0.5, ease: EASE_OUT },
                }
              : {}
          }
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(13px, 1.3vw, 17px)",
            fontWeight: 300,
            color: "rgba(26,23,20,0.45)",
            marginTop: 28,
            maxWidth: 400,
            lineHeight: 1.65,
            letterSpacing: "0.01em",
          }}
        >
          Curated journeys across Japan, Switzerland, South Korea &amp; beyond
          — experienced first, shared second.
        </motion.p>

        {/* CTA */}
        {onBook && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={
              mounted
                ? {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.7,
                      delay: 0.7,
                      ease: EASE_OUT,
                    },
                  }
                : {}
            }
            style={{ marginTop: 36 }}
          >
            <motion.button
              onClick={onBook}
              whileHover={{
                scale: 1.04,
                backgroundColor: "#B8963E",
                borderColor: "#B8963E",
                color: "#F5F2ED",
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.25 }}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#F5F2ED",
                background: "#1A1714",
                border: "1px solid #1A1714",
                borderRadius: 3,
                padding: "14px 32px",
                cursor: "pointer",
              }}
            >
              Begin Your Journey
            </motion.button>
          </motion.div>
        )}
      </motion.div>

      {/* ═══════════════════════════════════════
          BOTTOM METADATA
          ═══════════════════════════════════════ */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={
          mounted
            ? {
                opacity: 1,
                transition: { duration: 0.6, delay: 1.2 },
              }
            : {}
        }
        style={{
          position: "absolute",
          bottom: "clamp(20px, 3vh, 36px)",
          left: 0,
          right: 0,
          zIndex: 20,
          padding: "0 clamp(32px, 6vw, 80px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 9,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(26,23,20,0.25)",
          }}
        >
          ↓ &nbsp; Scroll to explore
        </span>

        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            width: 1,
            height: 24,
            background:
              "linear-gradient(to bottom, transparent, rgba(26,23,20,0.2))",
          }}
        />

        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 9,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(26,23,20,0.25)",
          }}
        >
          Moving archive — 2026
        </span>
      </motion.div>

      {/* ═══════════════════════════════════════
          SUBTLE GRAIN
          ═══════════════════════════════════════ */}

      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 7,
          opacity: 0.025,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
          mixBlendMode: "multiply",
          pointerEvents: "none",
        }}
      />
    </section>
  );
}