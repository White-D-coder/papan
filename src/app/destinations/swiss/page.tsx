"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function SwissPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#F5F2ED", color: "#1B2A49" }}>
      {/* Hero Section */}
      <div style={{ height: "70vh", position: "relative", overflow: "hidden" }}>
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="/images/switzerland.jpg"
          alt="Switzerland"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.7))" }} />
        
        {/* Navbar / Back button */}
        <div style={{ position: "absolute", top: 40, left: 40, zIndex: 10 }}>
          <Link href="/#destinations" style={{ display: "inline-flex", alignItems: "center", color: "#F5F2ED", textDecoration: "none", fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.1em" }}>
            <span style={{ marginRight: 8 }}>←</span> BACK
          </Link>
        </div>

        {/* Hero Content */}
        <div style={{ position: "absolute", bottom: 80, left: "8%", right: "8%", zIndex: 10 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.25em", color: "#B24C35", marginBottom: 16 }}>LUCERNE & BEYOND</p>
            <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(4rem, 8vw, 8rem)", color: "#F5F2ED", margin: 0, lineHeight: 1, letterSpacing: "-0.03em" }}>
              Switzerland
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Details Section */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "100px 8%" }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80 }}>
          
          {/* Left Sidebar */}
          <div>
            <div style={{ marginBottom: 48 }}>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "#6C7788", letterSpacing: "0.15em", marginBottom: 8 }}>STATUS</p>
              <p style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 600 }}>DEC '26</p>
            </div>
            <div>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "#6C7788", letterSpacing: "0.15em", marginBottom: 8 }}>EPISODES</p>
              <p style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 600 }}>-</p>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: 40, fontWeight: 600, marginBottom: 32, letterSpacing: "-0.02em" }}>About this Journey</h2>
            <p style={{ fontSize: 20, lineHeight: 1.8, color: "#4A5568", fontFamily: "Georgia, serif" }}>
              Alpine air, luxury chalets, and the iconic Glacier Express crossing the heart of the Swiss Alps. Experience the pinnacle of winter luxury nestled amongst snow-capped peaks.
            </p>
            
            <div style={{ marginTop: 80, padding: 40, background: "#fff", borderRadius: 16, border: "1px solid rgba(0,0,0,0.05)" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 24, marginBottom: 16 }}>Ready to go?</h3>
              <p style={{ color: "#6C7788", marginBottom: 32 }}>Full itinerary, pricing, and booking details will be revealed soon.</p>
              <button style={{ background: "#1B2A49", color: "#F5F2ED", border: "none", padding: "18px 36px", fontSize: 14, fontFamily: "var(--font-mono)", letterSpacing: "0.1em", cursor: "pointer", transition: "background 0.3s", borderRadius: 8 }}>
                NOTIFY ME
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
