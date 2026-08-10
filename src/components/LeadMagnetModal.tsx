"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  destination?: string;
}

const FIELDS = [
  { id: "name", label: "Full name", type: "text", placeholder: "Your name", required: true },
  { id: "email", label: "Email", type: "email", placeholder: "you@email.com", required: true },
];

export default function EnquiryModal({ isOpen, onClose, destination = "Japan" }: ModalProps) {
  const [dest, setDest] = useState(destination);
  const [form, setForm] = useState({ name: "", email: "", notes: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    confetti({ particleCount: 80, spread: 60, origin: { y: 0.65 }, colors: ["#1A1714", "#B8963E", "#F5F2ED"] });
  };

  const reset = () => { setSent(false); onClose(); };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{ position: "fixed", inset: 0, zIndex: 200, background: "rgba(26,23,20,0.88)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}
      >
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 24, opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
          onClick={(e) => e.stopPropagation()}
          style={{ background: "#F5F2ED", borderRadius: 4, padding: "56px 52px 48px", maxWidth: 520, width: "100%", position: "relative" }}
        >
          {!sent ? (
            <>
              {/* Header */}
              <div style={{ marginBottom: 40 }}>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: "#B8963E", marginBottom: 14 }}>Enquire</p>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 300, lineHeight: 1.05, color: "#1A1714", margin: 0 }}>
                  Tell us about your journey.
                </h2>
              </div>

              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {/* Destination toggle */}
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <label style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(26,23,20,0.45)" }}>Destination</label>
                  <div style={{ display: "flex", gap: 8 }}>
                    {["Japan", "Switzerland", "Both"].map((d) => (
                      <button
                        key={d}
                        type="button"
                        onClick={() => setDest(d)}
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: 10,
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          padding: "9px 18px",
                          borderRadius: 2,
                          border: "1px solid",
                          borderColor: dest === d ? "#1A1714" : "rgba(26,23,20,0.15)",
                          background: dest === d ? "#1A1714" : "transparent",
                          color: dest === d ? "#F5F2ED" : "rgba(26,23,20,0.5)",
                          cursor: "pointer",
                          transition: "all 0.2s",
                        }}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Email */}
                {FIELDS.map((f) => (
                  <div key={f.id} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <label htmlFor={f.id} style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(26,23,20,0.45)" }}>{f.label}</label>
                    <input
                      id={f.id}
                      type={f.type}
                      required={f.required}
                      placeholder={f.placeholder}
                      value={form[f.id as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [f.id]: e.target.value })}
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: 15,
                        fontWeight: 300,
                        color: "#1A1714",
                        background: "transparent",
                        border: "none",
                        borderBottom: "1px solid rgba(26,23,20,0.2)",
                        padding: "10px 0",
                        outline: "none",
                        width: "100%",
                        transition: "border-color 0.2s",
                      }}
                      onFocus={(e) => (e.target.style.borderBottomColor = "#1A1714")}
                      onBlur={(e) => (e.target.style.borderBottomColor = "rgba(26,23,20,0.2)")}
                    />
                  </div>
                ))}

                {/* Notes */}
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <label style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(26,23,20,0.45)" }}>Any context</label>
                  <textarea
                    placeholder="Travel dates, group size, special interests..."
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    rows={2}
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 15,
                      fontWeight: 300,
                      color: "#1A1714",
                      background: "transparent",
                      border: "none",
                      borderBottom: "1px solid rgba(26,23,20,0.2)",
                      padding: "10px 0",
                      outline: "none",
                      resize: "none",
                      width: "100%",
                    }}
                  />
                </div>

                {/* Submit */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 8 }}>
                  <button
                    type="button"
                    onClick={onClose}
                    style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(26,23,20,0.35)", background: "none", border: "none", cursor: "pointer", padding: 0 }}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 11,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "#F5F2ED",
                      background: "#1A1714",
                      border: "none",
                      borderRadius: 2,
                      padding: "13px 28px",
                      cursor: "pointer",
                      transition: "background 0.25s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#B8963E")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "#1A1714")}
                  >
                    Send enquiry
                  </button>
                </div>
              </form>
            </>
          ) : (
            /* Success */
            <div style={{ display: "flex", flexDirection: "column", gap: 24, textAlign: "center", alignItems: "center", paddingTop: 8 }}>
              <div style={{ width: 48, height: 48, borderRadius: "50%", border: "1px solid rgba(26,23,20,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: 20 }}>✓</span>
              </div>
              <div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 300, margin: 0, marginBottom: 12 }}>Received.</h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 300, color: "rgba(26,23,20,0.6)", margin: 0, lineHeight: 1.75 }}>
                  Purva reviews every enquiry personally.<br />Expect a reply within 24 hours.
                </p>
              </div>
              <button onClick={reset} style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(26,23,20,0.4)", background: "none", border: "none", cursor: "pointer", marginTop: 8 }}>
                Back to site
              </button>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
