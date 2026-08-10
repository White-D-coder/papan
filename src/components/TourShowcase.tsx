"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const TRIPS = [
  {
    id: "japan",
    dest: "Japan",
    subtitle: "THE FIRST FILM",
    date: "FILMED '23",
    statusBadge: "FILMED",
    statusBadgeColor: "#4A7c59",
    from: "DEL",
    fromCity: "NEW DELHI",
    to: "KIX",
    toCity: "OSAKA",
    flight: "S0-001",
    episodes: "12",
    statusText: "FILMED",
    statusTextColor: "#4A7c59",
    gate: "12",
    seat: "14E",
    img: "/images/pexels-dudubangbang-29028514.jpg",
  },
  {
    id: "swiss",
    dest: "Switzerland",
    subtitle: "LUCERNE & BEYOND",
    date: "DEC '26",
    statusBadge: "NOW BOARDING",
    statusBadgeColor: "#B8860B",
    from: "DEL",
    fromCity: "NEW DELHI",
    to: "ZRH",
    toCity: "ZURICH",
    flight: "S0-021",
    episodes: "-",
    statusText: "BOARDING",
    statusTextColor: "#B8860B",
    gate: "02",
    seat: "14E",
    img: "/images/switzerland.jpg",
  },
  {
    id: "korea",
    dest: "South Korea",
    subtitle: "SEOUL, THIS AUTUMN",
    date: "OCT '26",
    statusBadge: "NOW BOARDING",
    statusBadgeColor: "#B8860B",
    from: "DEL",
    fromCity: "NEW DELHI",
    to: "ICN",
    toCity: "SEOUL",
    flight: "S0-011",
    episodes: "-",
    statusText: "BOARDING",
    statusTextColor: "#B8860B",
    gate: "09",
    seat: "14E",
    img: "/images/south-korea.jpg",
  },
  {
    id: "austria",
    dest: "Austria & Germany",
    subtitle: "ALPINE WINTER",
    date: "MAY '27",
    statusBadge: "SCHEDULED",
    statusBadgeColor: "#718096",
    from: "DEL",
    fromCity: "NEW DELHI",
    to: "VIE",
    toCity: "VIENNA",
    flight: "S0-041",
    episodes: "-",
    statusText: "SCHEDULED",
    statusTextColor: "#718096",
    gate: "07",
    seat: "14E",
    img: "/images/austria.jpg",
  },
];

interface TripsProps {
  onBook: (dest: string) => void;
}

export default function TourShowcase({ onBook }: TripsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const headerY = useTransform(scrollYProgress, [0, 1], ["30px", "-30px"]);

  return (
    <section id="destinations" ref={containerRef} style={{ background: "#F5F2ED", padding: "120px 32px", position: "relative" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
        
        {/* Header */}
        <motion.div
          style={{ y: headerY, display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 80, textAlign: "center" }}
        >
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "#4A5568", marginBottom: 16, fontWeight: 600 }}>
            DESTINATIONS · 04 TRIPS
          </span>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(3rem, 6vw, 4.5rem)", color: "#1B2A49", margin: 0, marginBottom: 16 }}>
            Where to <em style={{ fontStyle: "italic", fontWeight: 400 }}>next?</em>
          </h2>
          <p style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 16, color: "#4A5568", margin: 0, maxWidth: 500 }}>
            One film out, three boarding — every trip becomes a guide you can follow.
          </p>
        </motion.div>

        {/* Tickets Grid */}
        <div 
          className="hide-scrollbar"
          style={{ 
            display: "flex", 
            flexWrap: "nowrap", 
            overflowX: "auto", 
            justifyContent: "center", // This centers the items if they don't fill the container
            gap: 24, 
            width: "100%",
            paddingBottom: 40, 
            paddingTop: 20
          }}
        >
          <style>{`
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          {TRIPS.map((trip, idx) => (
            <Link href={`/destinations/${trip.id}`} key={trip.id} style={{ textDecoration: 'none' }}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.15, type: "spring", stiffness: 70 }}
                whileHover={{ y: -10, boxShadow: "0 30px 60px rgba(0,0,0,0.12)" }}
                style={{
                  width: 300,
                  minWidth: 300,
                  flexShrink: 0,
                  background: "#FFFFFF",
                  borderRadius: 16,
                  overflow: "hidden",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  transition: "box-shadow 0.3s ease",
                }}
              >
              {/* Ticket Top - Image & Route */}
              <div style={{ position: "relative", height: 220 }}>
                <img
                  src={trip.img}
                  alt={trip.dest}
                  style={{ width: "100%", height: "100%", objectFit: "cover", filter: trip.statusBadge === "SCHEDULED" ? "grayscale(1)" : trip.statusBadge === "NOW BOARDING" ? "grayscale(0.5)" : "none" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.2)" }} />
                
                {/* Top badges */}
                <div style={{ position: "absolute", top: 16, left: 16, right: 16, display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.1em", color: "#FFF", fontWeight: 600 }}>
                    {trip.date}
                  </span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.1em", color: "#FFF", background: trip.statusBadgeColor, padding: "4px 8px", borderRadius: 99, fontWeight: 600 }}>
                    {trip.statusBadge}
                  </span>
                </div>

                {/* Route */}
                <div style={{ position: "absolute", bottom: 24, left: 24, right: 24, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 32, color: "#FFF", lineHeight: 1 }}>{trip.from}</span>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 8, letterSpacing: "0.1em", color: "rgba(255,255,255,0.8)" }}>{trip.fromCity}</span>
                  </div>
                  
                  {/* Plane Icon */}
                  <div style={{ color: "#FFF", opacity: 0.8 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.6L3 8l6 4-4 4-2.5-1-1 1 3.5 4 4 3.5 1-1-1-2.5 4-4 4 6l1.2-.7c.4-.2.7-.6.6-1.1z"/>
                    </svg>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                    <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 32, color: "#FFF", lineHeight: 1 }}>{trip.to}</span>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 8, letterSpacing: "0.1em", color: "rgba(255,255,255,0.8)" }}>{trip.toCity}</span>
                  </div>
                </div>
              </div>

              {/* Ticket Middle - Details */}
              <div style={{ padding: "24px", display: "flex", flexDirection: "column", gap: 16 }}>
                <div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontStyle: "italic", fontSize: 28, color: "#1B2A49", margin: 0, lineHeight: 1 }}>
                    {trip.dest}
                  </h3>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.15em", color: "#4A5568", textTransform: "uppercase" }}>
                    {trip.subtitle}
                  </span>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 8, letterSpacing: "0.1em", color: "#718096" }}>FLIGHT</span>
                    <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13, color: "#1B2A49" }}>{trip.flight}</span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 8, letterSpacing: "0.1em", color: "#718096" }}>EPISODES</span>
                    <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13, color: "#1B2A49" }}>{trip.episodes}</span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 8, letterSpacing: "0.1em", color: "#718096" }}>STATUS</span>
                    <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13, color: trip.statusTextColor }}>{trip.statusText}</span>
                  </div>
                </div>
              </div>

              {/* Dotted Line */}
              <div style={{ position: "relative", width: "100%", height: 0, borderTop: "2px dashed rgba(27, 42, 73, 0.15)" }}>
                {/* Left/Right semi-circles to look like a torn ticket */}
                <div style={{ position: "absolute", left: -8, top: -8, width: 16, height: 16, borderRadius: "50%", background: "#F5F2ED" }} />
                <div style={{ position: "absolute", right: -8, top: -8, width: 16, height: 16, borderRadius: "50%", background: "#F5F2ED" }} />
              </div>

              {/* Ticket Bottom - Barcode */}
              <div style={{ padding: "24px", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {/* Fake Barcode using border trick */}
                  <div style={{ display: "flex", gap: 2, height: 32, alignItems: "flex-end" }}>
                    {[2,4,2,1,3,2,1,4,2,3,1,1,2,3,4,1,2,2,1,3].map((w, i) => (
                      <div key={i} style={{ width: w * 1.5, height: i % 3 === 0 ? "100%" : "80%", background: "#1B2A49" }} />
                    ))}
                  </div>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 8, letterSpacing: "0.1em", color: "#718096" }}>SCAN TO WATCH THE FILM</span>
                </div>

                <div style={{ display: "flex", gap: 16 }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 8, letterSpacing: "0.1em", color: "#718096" }}>GATE</span>
                    <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 16, color: "#1B2A49" }}>{trip.gate}</span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 8, letterSpacing: "0.1em", color: "#718096" }}>SEAT</span>
                    <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 16, color: "#1B2A49" }}>{trip.seat}</span>
                  </div>
                </div>
              </div>
            </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
