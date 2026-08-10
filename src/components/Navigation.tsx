"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NavProps {
  onBook: () => void;
}

export default function Navigation({ onBook }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { label: "First Frame", href: "#hero" },
    { label: "About Us", href: "#about" },
    { label: "Destinations", href: "#destinations" },
    { label: "The Reel", href: "#reel" },
  ];

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: "all 0.5s ease",
          borderBottom: scrolled ? "1px solid rgba(26,23,20,0.08)" : "1px solid transparent",
          backgroundColor: scrolled ? "rgba(254, 254, 254, 0.98)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
          {/* Wordmark */}
          <a href="#" style={{ textDecoration: "none" }}>
            <span style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 300, letterSpacing: "0.12em", color: scrolled ? "#1A1714" : "#F5F2ED", transition: "color 0.4s ease" }}>PURVA</span>
          </a>

          {/* Desktop nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: 40 }}>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: scrolled ? "#1A1714" : "#F5F2ED",
                  textDecoration: "none",
                  opacity: 0.65,
                  transition: "opacity 0.2s, color 0.4s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.65")}
                className="hidden md:block"
              >
                {l.label}
              </a>
            ))}

            <button
              onClick={onBook}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: scrolled ? "#F5F2ED" : "#F5F2ED",
                background: scrolled ? "#1A1714" : "rgba(245,242,237,0.15)",
                border: scrolled ? "1px solid #1A1714" : "1px solid rgba(245,242,237,0.5)",
                borderRadius: 2,
                padding: "10px 22px",
                cursor: "pointer",
                transition: "background 0.4s, border-color 0.4s, color 0.25s",
                backdropFilter: scrolled ? "none" : "blur(8px)",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#B8963E"; e.currentTarget.style.borderColor = "#B8963E"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = scrolled ? "#1A1714" : "rgba(245,242,237,0.15)"; e.currentTarget.style.borderColor = scrolled ? "#1A1714" : "rgba(245,242,237,0.5)"; }}
            >
              Enquire
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 99,
              background: "#F5F2ED",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 36,
            }}
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 40,
                  fontWeight: 300,
                  color: "#1A1714",
                  textDecoration: "none",
                }}
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
