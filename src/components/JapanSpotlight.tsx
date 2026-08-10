"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { use3DTilt } from "@/hooks/use3DTilt";

const SPOTS = [
  {
    id: "tsukiji",
    tag: "Gastronomy",
    title: "6-Seat Tsukiji Omakase",
    location: "Tokyo",
    img: "/images/pexels-dudubangbang-29028514.jpg",
    secret: "Arrive at 4 AM with Chef Kenji for market selection — a ritual unavailable to the public.",
  },
  {
    id: "tea",
    tag: "Ceremony",
    title: "300-Year Tea Garden",
    location: "Kyoto",
    img: "/images/japan-nara.jpg",
    secret: "Private sunset sessions reserved exclusively for group guests. No public access.",
  },
  {
    id: "jazz",
    tag: "Nightlife",
    title: "Secret Vinyl Jazz Bar",
    location: "Shinjuku",
    img: "/images/pexels-beigh-yabaar-865585625-32584961.jpg",
    secret: "Third floor, brass bell twice. 5-guest capacity. 3,000 vinyl records.",
  },
  {
    id: "wagyu",
    tag: "Gastronomy",
    title: "Michelin Street Wagyu",
    location: "Osaka",
    img: "/images/pexels-afhamhmsyri-34021102.jpg",
    secret: "After 9:30 PM — truffle-injected Miyazaki A5 specials, off-menu.",
  },
];

const POP_CULTURE_HIGHLIGHTS = [
  {
    id: "ghibli",
    title: "Ghibli Countryside Trails",
    desc: "Private architectural walks through Nagano's forests that inspired Spirited Away.",
    img: "/images/japan-nara.jpg",
  },
  {
    id: "akiba",
    title: "Akihabara Vinyl & Synth Vault",
    desc: "Access to an invitation-only listening lounge with 1980s Japanese City Pop master tapes.",
    img: "/images/pexels-beigh-yabaar-865585625-32584961.jpg",
  },
  {
    id: "doraemon",
    title: "Doraemon Museum VIP Track",
    desc: "After-hours access to Fujiko F. Fujio's original manuscript archives in Kawasaki.",
    img: "/images/pexels-dudubangbang-29028514.jpg",
  },
];

function SpotCard({ spot, onClick }: { spot: typeof SPOTS[0]; onClick: () => void }) {
  const { tiltStyle, handleMouseMove, handleMouseLeave } = use3DTilt(10, 1.03);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      onClick={onClick}
      onMouseMove={(e) => {
        handleMouseMove(e);
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        handleMouseLeave();
        setIsHovered(false);
      }}
      style={{
        cursor: "pointer",
        position: "relative",
        borderRadius: 4,
        overflow: "hidden",
      }}
    >
      <div style={{ ...tiltStyle, aspectRatio: "3/4", overflow: "hidden", borderRadius: 4, position: "relative" }}>
        <img
          src={spot.img}
          alt={spot.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: isHovered ? "brightness(0.4) contrast(1.08)" : "brightness(0.65) contrast(1.02)",
            transform: isHovered ? "scale(1.08)" : "scale(1)",
            transition: "filter 0.5s ease, transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94)",
          }}
        />

        {/* Hover Secret Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            padding: "24px 20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            background: "linear-gradient(to top, rgba(26,23,20,0.95) 0%, rgba(26,23,20,0.3) 50%, transparent 100%)",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 9,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: isHovered ? "#C84B31" : "rgba(245,242,237,0.5)",
              marginBottom: 6,
              transition: "color 0.3s ease",
            }}
          >
            {spot.tag} · {spot.location}
          </p>

          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 22,
              fontWeight: 400,
              color: "#F5F2ED",
              margin: 0,
              lineHeight: 1.15,
            }}
          >
            {spot.title}
          </p>

          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: isHovered ? 1 : 0, height: isHovered ? "auto" : 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 12,
              fontWeight: 300,
              color: "rgba(245,242,237,0.8)",
              marginTop: 10,
              lineHeight: 1.6,
              overflow: "hidden",
            }}
          >
            {spot.secret}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}

export default function JapanSpotlight() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<string | null>(null);
  const [activeCultureIdx, setActiveCultureIdx] = useState(0);
  const activeSpot = SPOTS.find((s) => s.id === open);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const kanjiY = useTransform(scrollYProgress, [0, 1], ["-40px", "40px"]);

  return (
    <section
      id="japan"
      ref={containerRef}
      style={{
        background: "#F5F2ED",
        padding: "140px 32px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Japanese Kanji Parallax Accent */}
      <motion.span
        style={{
          position: "absolute",
          top: "8%",
          right: "2%",
          fontFamily: "'Shippori Mincho', serif",
          fontSize: "clamp(12rem, 25vw, 30rem)",
          fontWeight: 300,
          color: "rgba(200,75,49,0.03)",
          userSelect: "none",
          pointerEvents: "none",
          lineHeight: 1,
          y: kanjiY,
        }}
      >
        日本
      </motion.span>

      <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", flexDirection: "column", gap: 80, position: "relative", zIndex: 2 }}>
        {/* Section Header */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ width: 32, height: 1, background: "#C84B31" }} />
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#C84B31",
              }}
            >
              Japan Spotlight
            </span>
          </div>

          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 300,
              fontSize: "clamp(2.75rem, 5.5vw, 5.5rem)",
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
              color: "#1A1714",
              margin: 0,
            }}
          >
            Wabi-sabi,<br />
            <em style={{ fontStyle: "italic" }}>rediscovered.</em>
          </h2>
        </div>

        {/* 4-Card Interactive Spotlights Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
          {SPOTS.map((s) => (
            <SpotCard key={s.id} spot={s} onClick={() => setOpen(s.id)} />
          ))}
        </div>

        {/* Interactive Culture Vault Section — Borderless Interactive Switcher */}
        <div
          style={{
            borderTop: "1px solid rgba(26,23,20,0.1)",
            paddingTop: 56,
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr",
            gap: 60,
            alignItems: "center",
          }}
        >
          {/* Left — Interactive Culture Item Selection */}
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(26,23,20,0.4)",
                margin: 0,
              }}
            >
              Pop Culture & Subculture Curation
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {POP_CULTURE_HIGHLIGHTS.map((item, idx) => {
                const isActive = idx === activeCultureIdx;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveCultureIdx(idx)}
                    onMouseEnter={() => setActiveCultureIdx(idx)}
                    style={{
                      background: "none",
                      border: "none",
                      textAlign: "left",
                      cursor: "pointer",
                      padding: "12px 0",
                      borderBottom: "1px solid",
                      borderColor: isActive ? "#C84B31" : "rgba(26,23,20,0.08)",
                      transition: "border-color 0.3s ease",
                      display: "flex",
                      flexDirection: "column",
                      gap: 6,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: 22,
                        fontWeight: 400,
                        color: isActive ? "#1A1714" : "rgba(26,23,20,0.45)",
                        transition: "color 0.3s ease",
                      }}
                    >
                      {item.title}
                    </span>
                    {isActive && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.3 }}
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: 13,
                          fontWeight: 300,
                          color: "rgba(26,23,20,0.65)",
                          margin: 0,
                          lineHeight: 1.6,
                        }}
                      >
                        {item.desc}
                      </motion.p>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right — Dynamic Culture Visual Display */}
          <div
            style={{
              height: 340,
              position: "relative",
              overflow: "hidden",
              borderRadius: 4,
            }}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={activeCultureIdx}
                src={POP_CULTURE_HIGHLIGHTS[activeCultureIdx].img}
                alt={POP_CULTURE_HIGHLIGHTS[activeCultureIdx].title}
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "brightness(0.85) contrast(1.04)",
                }}
              />
            </AnimatePresence>
            <div
              style={{
                position: "absolute",
                bottom: 16,
                right: 16,
                background: "rgba(245,242,237,0.9)",
                backdropFilter: "blur(8px)",
                padding: "6px 14px",
                borderRadius: 2,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 9,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#1A1714",
                }}
              >
                Curated Access · Japan
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Secret Detail Modal */}
      <AnimatePresence>
        {open && activeSpot && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 150,
              background: "rgba(26,23,20,0.88)",
              backdropFilter: "blur(16px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 32,
            }}
          >
            <motion.div
              initial={{ scale: 0.96, y: 16 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 16 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: "#F5F2ED",
                borderRadius: 4,
                overflow: "hidden",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                maxWidth: 820,
                width: "100%",
                maxHeight: "80vh",
              }}
            >
              <img src={activeSpot.img} alt={activeSpot.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{ padding: "48px 40px", display: "flex", flexDirection: "column", gap: 24 }}>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "#C84B31" }}>
                  {activeSpot.tag} · {activeSpot.location}
                </p>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 300, margin: 0, lineHeight: 1.1 }}>{activeSpot.title}</h3>
                <div style={{ width: 32, height: 1, background: "#B8963E" }} />
                <p style={{ fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 300, color: "rgba(26,23,20,0.65)", lineHeight: 1.75, margin: 0 }}>
                  {activeSpot.secret}
                </p>
                <button
                  onClick={() => setOpen(null)}
                  style={{
                    marginTop: "auto",
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "rgba(26,23,20,0.4)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    textAlign: "left",
                  }}
                >
                  Close ×
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
