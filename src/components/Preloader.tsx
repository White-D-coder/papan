"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [taglineVisible, setTaglineVisible] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setTaglineVisible(true), 1400);
    const t2 = setTimeout(onComplete, 2400);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onComplete]);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 300,
        background: "#0D0C0A",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Cinematic zoom-in wordmark */}
      <div style={{ textAlign: "center", position: "relative" }}>
        <motion.h1
          initial={{ scale: 3.5, opacity: 0, filter: "blur(24px)" }}
          animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 300,
            fontSize: "clamp(4rem, 12vw, 10rem)",
            letterSpacing: "0.28em",
            color: "#F5F2ED",
            margin: 0,
            lineHeight: 1,
            userSelect: "none",
          }}
        >
          PURVA
        </motion.h1>

        {/* Tagline fades in after title settles */}
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: taglineVisible ? 1 : 0, y: taglineVisible ? 0 : 6 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "rgba(245,242,237,0.35)",
            margin: 0,
            marginTop: 20,
          }}
        >
          Boutique Travel Curation
        </motion.p>
      </div>

      {/* Gold scan-line sweep */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0.6 }}
        animate={{ scaleX: 1, opacity: 0 }}
        transition={{ duration: 1.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "absolute",
          left: "10%",
          right: "10%",
          top: "50%",
          height: 1,
          background: "rgba(184,150,62,0.5)",
          transformOrigin: "left center",
        }}
      />
    </motion.div>
  );
}
