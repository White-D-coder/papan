"use client";

interface FooterProps {
  onBook: () => void;
}

export default function Footer({ onBook }: FooterProps) {
  return (
    <footer style={{ background: "#F5F2ED", padding: "100px 32px 52px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", flexDirection: "column", gap: 80 }}>

        {/* CTA block */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 40 }}>
          <div>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(27,42,73,0.4)", marginBottom: 20 }}>
              Let's plan your next trip
            </p>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(2.75rem, 6vw, 6rem)", lineHeight: 0.92, letterSpacing: "-0.02em", color: "#1B2A49", margin: 0 }}>
              Your seat<br /><em style={{ fontStyle: "italic", fontWeight: 400 }}>awaits.</em>
            </h2>
          </div>
          <button
            onClick={onBook}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#F5F2ED",
              background: "#1B2A49",
              border: "none",
              borderRadius: 2,
              padding: "14px 30px",
              cursor: "pointer",
              transition: "background 0.25s, color 0.25s",
              alignSelf: "flex-end",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#2B4C6F"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "#1B2A49"; }}
          >
            Enquire now
          </button>
        </div>

        <div style={{ height: 1, background: "rgba(27,42,73,0.1)" }} />

        {/* Bottom row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 24 }}>
          <span style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 700, letterSpacing: "0.08em", color: "#1B2A49" }}>SoSunidhi</span>

          <nav style={{ display: "flex", gap: 36 }}>
            {[
              { label: "First Frame", href: "#hero" },
              { label: "About Us", href: "#about" },
              { label: "Destinations", href: "#destinations" },
              { label: "The Reel", href: "#reel" },
            ].map((l) => (
              <a key={l.href} href={l.href} style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(27,42,73,0.5)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#1B2A49")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(27,42,73,0.5)")}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.12em", color: "rgba(27,42,73,0.3)" }}>
            © 2026
          </span>
        </div>
      </div>
    </footer>
  );
}
