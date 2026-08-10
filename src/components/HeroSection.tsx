"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

const SLIDES = [
  {
    index: "01",
    dest: "Japan",
    tag: "Autumn 2026",
    sub: "Wabi-sabi & Hidden Omakase",
    img: "/images/pexels-dudubangbang-29028514.jpg",
  },
  {
    index: "02",
    dest: "Switzerland",
    tag: "Winter 2026",
    sub: "Matterhorn & Excellence Class",
    img: "/images/switzerland.jpg",
  },
  {
    index: "03",
    dest: "South Korea",
    tag: "Spring 2027",
    sub: "Hanok Alleys & Cherry Trails",
    img: "/images/south-korea.jpg",
  },
  {
    index: "04",
    dest: "Austria",
    tag: "Summer 2027",
    sub: "Alpine Lakes & Imperial Silence",
    img: "/images/austria.jpg",
  },
];

interface HeroProps {
  onBook: () => void;
}

export default function HeroSection({ onBook }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Scroll Parallax setup
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const textParallaxY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const imageParallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  // Auto-advance unless user is hovering
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setActive((c) => (c + 1) % SLIDES.length), 4200);
    return () => clearInterval(t);
  }, [paused]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      style={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
        background: "#0D0C0A",
        display: "flex",
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── ACCORDION STRIPS WITH SCROLL PARALLAX ── */}
      <motion.div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          scale: heroScale,
          opacity: heroOpacity,
        }}
      >
        {SLIDES.map((s, i) => {
          const isActive = i === active;
          const isHovered = i === hoveredIdx;

          return (
            <motion.div
              key={s.index}
              onClick={() => setActive(i)}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              animate={{
                flex: isActive ? 5.2 : isHovered ? 1.6 : 1,
              }}
              transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
              style={{
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                flexShrink: 0,
              }}
            >
              {/* Photo with Mouse Tilt + Parallax */}
              <motion.div
                style={{
                  position: "absolute",
                  inset: 0,
                  y: imageParallaxY,
                }}
              >
                <img
                  src={s.img}
                  alt={s.dest}
                  style={{
                    width: "105%",
                    height: "115%",
                    objectFit: "cover",
                    objectPosition: "center",
                    filter: isActive
                      ? "brightness(0.55) contrast(1.08)"
                      : isHovered
                        ? "brightness(0.42) contrast(1.05)"
                        : "brightness(0.28) contrast(1.02) grayscale(0.2)",
                    transition: "filter 0.8s ease, transform 0.6s ease",
                    transform: `scale(${isActive ? 1.05 : isHovered ? 1.08 : 1.02}) translate(${mousePos.x * (isActive ? 12 : 6)}px, ${mousePos.y * (isActive ? 12 : 6)}px)`,
                  }}
                />
              </motion.div>

              {/* Vertical label on Inactive strip */}
              <AnimatePresence>
                {!isActive && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "flex-end",
                      paddingBottom: 36,
                      gap: 12,
                      zIndex: 2,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: 14,
                        fontWeight: 300,
                        color: isHovered ? "#F5F2ED" : "rgba(245,242,237,0.55)",
                        letterSpacing: "0.12em",
                        writingMode: "vertical-rl",
                        textOrientation: "mixed",
                        transform: "rotate(180deg)",
                        transition: "color 0.3s ease",
                      }}
                    >
                      {s.dest}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 9,
                        color: isHovered ? "#B8963E" : "rgba(245,242,237,0.3)",
                        letterSpacing: "0.1em",
                        transition: "color 0.3s ease",
                      }}
                    >
                      {s.index}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Active Panel — Parallax Content Overlay */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      padding: "0 56px 76px 56px",
                      background:
                        "linear-gradient(to top, rgba(13,12,10,0.35) 45%, transparent 75%)",
                      zIndex: 3,
                    }}
                  >
                    <motion.div style={{ y: textParallaxY }}>
                      {/* Meta tag */}
                      <p
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: 10,
                          letterSpacing: "0.22em",
                          textTransform: "uppercase",
                          color: "#B8963E",
                          marginBottom: 14,
                          display: "flex",
                          alignItems: "center",
                          gap: 12,
                        }}
                      >
                        <span>{s.index} / 04</span>
                        <span style={{ width: 24, height: 1, background: "rgba(184,150,62,0.6)" }} />
                        <span>{s.tag}</span>
                      </p>

                      {/* Main Title */}
                      <h1
                        style={{
                          fontFamily: "var(--font-display)",
                          fontWeight: 300,
                          fontSize: "clamp(3.5rem, 6.5vw, 8rem)",
                          lineHeight: 0.88,
                          letterSpacing: "-0.025em",
                          color: "#F5F2ED",
                          margin: 0,
                          marginBottom: 16,
                        }}
                      >
                        {s.dest}
                      </h1>

                      {/* Subtitle */}
                      <p
                        style={{
                          fontFamily: "var(--font-body)",
                          fontWeight: 300,
                          fontSize: 15,
                          lineHeight: 1.6,
                          color: "rgba(245,242,237,0.7)",
                          margin: 0,
                          marginBottom: 36,
                          maxWidth: 420,
                        }}
                      >
                        {s.sub}
                      </p>

                      {/* Action buttons */}
                      <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onBook();
                          }}
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: 11,
                            letterSpacing: "0.14em",
                            textTransform: "uppercase",
                            color: "#1A1714",
                            background: "#F5F2ED",
                            border: "none",
                            borderRadius: 2,
                            padding: "13px 28px",
                            cursor: "pointer",
                            transition: "all 0.3s cubic-bezier(0.25,0.46,0.45,0.94)",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = "#B8963E";
                            e.currentTarget.style.color = "#F5F2ED";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = "#F5F2ED";
                            e.currentTarget.style.color = "#1A1714";
                          }}
                        >
                          Enquire
                        </button>

                        <a
                          href="#story"
                          onClick={(e) => e.stopPropagation()}
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: 11,
                            letterSpacing: "0.14em",
                            textTransform: "uppercase",
                            color: "rgba(245,242,237,0.55)",
                            textDecoration: "none",
                            transition: "color 0.2s",
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = "#F5F2ED")}
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.color = "rgba(245,242,237,0.55)")
                          }
                        >
                          Explore ↓
                        </a>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Accent separator line */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: 1,
                  height: "100%",
                  background: isActive ? "rgba(184,150,62,0.4)" : "rgba(245,242,237,0.06)",
                  transition: "background 0.5s ease",
                }}
              />
            </motion.div>
          );
        })}
      </motion.div>

      {/* Scroll indicator pin */}
      <motion.div
        style={{
          position: "absolute",
          bottom: 28,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
          pointerEvents: "none",
          zIndex: 10,
          opacity: heroOpacity,
        }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, opacity: 0.4 }}
        >
          <div style={{ width: 1, height: 28, background: "#F5F2ED" }} />
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 8, letterSpacing: "0.16em", textTransform: "uppercase", color: "#F5F2ED" }}>
            Scroll
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
