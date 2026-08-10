"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

interface SwissProps {
  onBook: () => void;
}

const SWISS_HIGHLIGHTS = [
  {
    num: "01",
    title: "Glacier Express · Excellence Class",
    desc: "Private 8-seat panoramic lounge, 7-course champagne dinner crossing 291 bridges.",
    img: "/images/switzerland.jpg",
  },
  {
    num: "02",
    title: "Heli-skiing · Matterhorn Summit",
    desc: "Private helicopter lift to 4,000m pristine powder bowls with certified Alpine guides.",
    img: "/images/pexels-nathan-steele-274130124-32730210.jpg",
  },
  {
    num: "03",
    title: "Private Chalet · St. Moritz Spa",
    desc: "Exclusive cliffside thermal springs reserved solely for our boutique group after sunset.",
    img: "/images/switzerland.jpg",
  },
];

export default function SwitzerlandPreview({ onBook }: SwissProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeHighlight, setActiveHighlight] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const bgParallaxY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const textParallaxY = useTransform(scrollYProgress, [0, 1], ["30px", "-30px"]);
  const rightPanelY = useTransform(scrollYProgress, [0, 1], ["50px", "-50px"]);

  return (
    <section id="switzerland" ref={containerRef} style={{ background: "#0D0C0A", padding: "0", position: "relative", overflow: "hidden" }}>
      {/* Full-width image strip with Multi-Layer Parallax */}
      <div style={{ position: "relative", minHeight: "95vh", display: "flex", alignItems: "center" }}>
        <motion.div
          style={{
            position: "absolute",
            inset: 0,
            y: bgParallaxY,
          }}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={activeHighlight}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{
                width: "100%",
                height: "125%",
                objectFit: "cover",
                objectPosition: "center",
                filter: "brightness(0.48) contrast(1.06)",
              }}
              src={SWISS_HIGHLIGHTS[activeHighlight].img}
              alt="Switzerland"
            />
          </AnimatePresence>
        </motion.div>

        {/* Ambient Dark Gradient Overlays */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(13,12,10,0.88) 0%, rgba(13,12,10,0.4) 55%, rgba(13,12,10,0.75) 100%)", pointerEvents: "none" }} />

        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            width: "100%",
            padding: "100px 32px",
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: 64,
            alignItems: "center",
            position: "relative",
            zIndex: 3,
          }}
        >
          {/* Left Panel — Headline & CTAs with Scroll Parallax */}
          <motion.div style={{ y: textParallaxY, maxWidth: 540 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
              <div style={{ width: 32, height: 1, background: "#2B4C6F" }} />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(245,242,237,0.55)" }}>
                Live Scouting · Winter 2026
              </span>
            </div>

            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontSize: "clamp(3rem, 5.5vw, 6rem)", lineHeight: 0.92, letterSpacing: "-0.025em", color: "#F5F2ED", margin: 0, marginBottom: 28 }}>
              Switzerland,<br />
              <em style={{ fontStyle: "italic" }}>in December.</em>
            </h2>

            <p style={{ fontFamily: "var(--font-body)", fontSize: 15, fontWeight: 300, lineHeight: 1.8, color: "rgba(245,242,237,0.7)", margin: 0, marginBottom: 40, maxWidth: 440 }}>
              Glacier Express in Excellence Class. Matterhorn by helicopter. Private chalets above Zermatt. Capped strictly at 8 guests per expedition.
            </p>

            <button
              onClick={onBook}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#F5F2ED",
                background: "transparent",
                border: "1px solid rgba(245,242,237,0.35)",
                borderRadius: 2,
                padding: "13px 28px",
                cursor: "pointer",
                transition: "all 0.3s cubic-bezier(0.25,0.46,0.45,0.94)",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#F5F2ED"; e.currentTarget.style.color = "#1A1714"; e.currentTarget.style.borderColor = "#F5F2ED"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#F5F2ED"; e.currentTarget.style.borderColor = "rgba(245,242,237,0.35)"; }}
            >
              Request Itinerary
            </button>
          </motion.div>

          {/* Right Panel — Interactive Feature Pillar Switcher */}
          <motion.div style={{ y: rightPanelY, display: "flex", flexDirection: "column", gap: 16 }}>
            {SWISS_HIGHLIGHTS.map((item, i) => {
              const isActive = i === activeHighlight;
              return (
                <div
                  key={item.num}
                  onMouseEnter={() => setActiveHighlight(i)}
                  onClick={() => setActiveHighlight(i)}
                  style={{
                    borderTop: "1px solid",
                    borderColor: isActive ? "#B8963E" : "rgba(245,242,237,0.12)",
                    padding: "20px 0",
                    cursor: "pointer",
                    transition: "border-color 0.3s ease",
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: isActive ? "#B8963E" : "rgba(245,242,237,0.3)", letterSpacing: "0.14em", transition: "color 0.3s ease" }}>
                        {item.num}
                      </span>
                      <span style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 400, color: isActive ? "#F5F2ED" : "rgba(245,242,237,0.65)", transition: "color 0.3s ease" }}>
                        {item.title}
                      </span>
                    </div>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: isActive ? "#B8963E" : "rgba(245,242,237,0.2)", transition: "all 0.3s ease" }}>
                      {isActive ? "→" : "+"}
                    </span>
                  </div>

                  <AnimatePresence>
                    {isActive && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: 13,
                          fontWeight: 300,
                          color: "rgba(245,242,237,0.6)",
                          lineHeight: 1.6,
                          margin: 0,
                          paddingLeft: 30,
                          overflow: "hidden",
                        }}
                      >
                        {item.desc}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
