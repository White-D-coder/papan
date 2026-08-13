"use client";

import React, { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

const STEPS = [
  {
    number: "01",
    title: "We actually travel it",
    heading: "We go there before we tell you to go.",
    description:
      "From Japan to Korea, Europe to Southeast Asia — we experience the routes, places and little details ourselves so you don't have to plan blind.",
    location: "JAPAN · NARA",
    image: "/images/pexels-afhamhmsyri-34021102.jpg",
  },
  {
    number: "02",
    title: "We help you get started",
    heading: "Your dream trip shouldn't begin with 37 open tabs.",
    description:
      "We turn everything we've learned on the road into simple routes, practical guides and honest recommendations that make planning feel effortless.",
    location: "SOUTHEAST ASIA",
    image: "/images/pexels-beigh-yabaar-865585625-32584961.jpg",
  },
  {
    number: "03",
    title: "We support you from A to Z",
    heading: "From the first idea to the last sunset.",
    description:
      "Flights, stays, routes, hidden spots and everything between — we help you put the pieces together without taking the adventure away from you.",
    location: "EUROPE · ASIA",
    image: "images/pexels-dudubangbang-29028514.jpg",
  },
];

export default function StorySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  /*
   * Smooth scroll progress for background effects & route line
   */
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: isScrolling ? 115 : 42,
    damping: isScrolling ? 24 : 32,
    mass: isScrolling ? 0.45 : 0.9,
  });

  useMotionValueEvent(scrollYProgress, "change", () => {
    setIsScrolling(true);

    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    scrollTimeoutRef.current = setTimeout(() => {
      setIsScrolling(false);
    }, 140);
  });

  /*
   * =========================================================
   * CLOUD BACKGROUND MOTION
   * =========================================================
   */

  const cloudOneX = useTransform(
    smoothProgress,
    [0, 1],
    isScrolling ? ["-38%", "28%"] : ["-30%", "20%"]
  );

  const cloudOneY = useTransform(
    smoothProgress,
    [0, 1],
    isScrolling ? ["0%", "32%"] : ["0%", "25%"]
  );

  const cloudTwoX = useTransform(
    smoothProgress,
    [0, 1],
    isScrolling ? ["28%", "-38%"] : ["20%", "-30%"]
  );

  const cloudTwoY = useTransform(
    smoothProgress,
    [0, 1],
    isScrolling ? ["18%", "-20%"] : ["15%", "-15%"]
  );

  const cloudThreeX = useTransform(
    smoothProgress,
    [0, 1],
    isScrolling ? ["-28%", "42%"] : ["-20%", "35%"]
  );

  /*
   * =========================================================
   * ROUTE LINE
   * =========================================================
   */

  const routeProgress = useTransform(
    smoothProgress,
    [0, 0.95],
    [0, 1]
  );

  /*
   * =========================================================
   * PAPER ROTATION
   * =========================================================
   */

  const paperRotate = useTransform(
    smoothProgress,
    [0, 1],
    [-1.5, 1.5]
  );

  React.useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={containerRef}
      style={{
        position: "relative",
        background: "#F5F2ED",
        color: "#1B2A49",
        overflow: "hidden",
      }}
    >
      {/* =====================================================
          BACKGROUND & PAPER TEXTURE
      ====================================================== */}

      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        {/* Paper texture */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.035,
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.5'/%3E%3C/svg%3E\")",
          }}
        />

        {/* BACKGROUND CLOUD 01 */}
        <motion.div
          style={{
            position: "absolute",
            width: "750px",
            height: "430px",
            top: "5%",
            left: "-25%",
            x: cloudOneX,
            y: cloudOneY,
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse, rgba(255,255,255,.95) 0%, rgba(255,255,255,.7) 42%, rgba(255,255,255,0) 72%)",
            filter: "blur(25px)",
          }}
        />

        {/* BACKGROUND CLOUD 02 */}
        <motion.div
          style={{
            position: "absolute",
            width: "850px",
            height: "500px",
            top: "35%",
            right: "-30%",
            x: cloudTwoX,
            y: cloudTwoY,
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse, rgba(255,255,255,.95) 0%, rgba(255,255,255,.7) 40%, rgba(255,255,255,0) 72%)",
            filter: "blur(30px)",
          }}
        />

        {/* BACKGROUND CLOUD 03 */}
        <motion.div
          style={{
            position: "absolute",
            width: "600px",
            height: "350px",
            bottom: "10%",
            left: "-20%",
            x: cloudThreeX,
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse, rgba(255,255,255,.9), rgba(255,255,255,0) 70%)",
            filter: "blur(30px)",
          }}
        />

        {/* ROUTE LINE */}
        <svg
          viewBox="0 0 1200 3000"
          preserveAspectRatio="none"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            opacity: 0.65,
          }}
        >
          <motion.path
            d="
              M 170 0
              C 80 280, 430 300, 220 650
              C 30 950, 480 900, 720 760
              C 1000 600, 1090 1000, 850 1250
              C 570 1540, 120 1400, 280 1770
              C 400 2040, 900 1900, 960 2200
              C 1020 2460, 760 2650, 1030 3000
            "
            fill="none"
            stroke="rgba(27,42,73,.18)"
            strokeWidth="1"
            strokeDasharray="5 9"
            style={{
              pathLength: routeProgress,
            }}
          />

          <circle cx="170" cy="0" r="4" fill="#B24C35" />
          <circle cx="720" cy="760" r="4" fill="#B24C35" />
          <circle cx="280" cy="1770" r="4" fill="#B24C35" />
          <circle cx="1030" cy="3000" r="4" fill="#B24C35" />
        </svg>
      </div>

      {/* =====================================================
          HEADER
      ====================================================== */}

      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "140px 32px 80px",
          textAlign: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              letterSpacing: "0.22em",
              color: "#B24C35",
              marginBottom: "30px",
            }}
          >
            THE JOURNEY
          </div>

          <h2
            style={{
              margin: 0,
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "clamp(3.5rem, 7vw, 7rem)",
              lineHeight: 0.92,
              letterSpacing: "-0.05em",
              color: "#1B2A49",
            }}
          >
            We don't just plan
            <br />
            <span
              style={{
                fontFamily: "Georgia, serif",
                fontWeight: 400,
                color: "#6C7788",
              }}
            >
              the trip.
            </span>
            <br />
            We live it first.
          </h2>

          <p
            style={{
              margin: "38px auto 0",
              maxWidth: "500px",
              fontFamily: "var(--font-display)",
              fontWeight: 500,
              fontSize: "17px",
              lineHeight: 1.65,
              color: "#687180",
            }}
          >
            Real places. Real experiences.
            <br />
            Thoughtfully turned into your next adventure.
          </p>
        </motion.div>
      </div>

      {/* =====================================================
          STACKED STEPS (01, 02, 03) - VERTICALLY SCROLLABLE
      ====================================================== */}

      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "40px 32px 100px",
          display: "flex",
          flexDirection: "column",
          gap: "120px",
        }}
      >
        {STEPS.map((step, index) => {
          const isEven = index % 2 === 1;
          return (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "clamp(40px, 7vw, 100px)",
                alignItems: "center",
              }}
            >
              {/* TEXT BLOCK */}
              <div
                style={{
                  order: isEven ? 2 : 1,
                  maxWidth: "480px",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    letterSpacing: "0.18em",
                    color: "#B24C35",
                    marginBottom: "16px",
                  }}
                >
                  {step.number}
                </div>

                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#6C7788",
                    marginBottom: "24px",
                  }}
                >
                  {step.title}
                </div>

                <h3
                  style={{
                    margin: 0,
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "clamp(2.2rem, 4vw, 3.8rem)",
                    lineHeight: 1.05,
                    letterSpacing: "-0.04em",
                    color: "#1B2A49",
                  }}
                >
                  {step.heading}
                </h3>

                <p
                  style={{
                    margin: "24px 0 0",
                    maxWidth: "420px",
                    fontFamily: "var(--font-display)",
                    fontWeight: 500,
                    fontSize: "15px",
                    lineHeight: 1.7,
                    color: "#687180",
                  }}
                >
                  {step.description}
                </p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginTop: "32px",
                    fontFamily: "var(--font-mono)",
                    fontSize: "9px",
                    letterSpacing: "0.15em",
                    color: "#1B2A49",
                  }}
                >
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: "#B24C35",
                    }}
                  />
                  {step.location}
                </div>
              </div>

              {/* IMAGE BLOCK */}
              <div
                style={{
                  order: isEven ? 1 : 2,
                  position: "relative",
                  height: "clamp(340px, 50vh, 520px)",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    overflow: "hidden",
                    borderRadius: "24px",
                    boxShadow: "0 20px 50px rgba(27,42,73,0.12)",
                  }}
                >
                  <img
                    src={step.image}
                    alt={step.location}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      filter: "saturate(.92) contrast(.96)",
                    }}
                  />
                </div>

                {/* Cloud overlay glow bottom */}
                <div
                  style={{
                    position: "absolute",
                    left: "-8%",
                    bottom: "-8%",
                    width: "60%",
                    height: "35%",
                    background:
                      "radial-gradient(ellipse at center, rgba(255,255,255,.95) 0%, rgba(255,255,255,0) 72%)",
                    filter: "blur(18px)",
                    pointerEvents: "none",
                  }}
                />

                {/* Caption overlay */}
                <div
                  style={{
                    position: "absolute",
                    left: "8%",
                    right: "8%",
                    bottom: "8%",
                    display: "flex",
                    justifyContent: "space-between",
                    fontFamily: "var(--font-mono)",
                    fontSize: "9px",
                    letterSpacing: "0.15em",
                    color: "#fff",
                    textShadow: "0 2px 15px rgba(0,0,0,.6)",
                    pointerEvents: "none",
                  }}
                >
                  <span>TRAVEL NOTE</span>
                  <span>{step.number}</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* =====================================================
          PROMISE
      ====================================================== */}

      <motion.div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "900px",
          margin: "80px auto 0",
          padding: "0 32px 150px",
          textAlign: "center",
          rotate: paperRotate,
        }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            marginBottom: "45px",
          }}
        >
          <div
            style={{
              flex: 1,
              height: "1px",
              background: "rgba(27,42,73,.15)",
            }}
          />

          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "9px",
              letterSpacing: "0.2em",
              color: "#1B2A49",
            }}
          >
            THE PROMISE
          </span>

          <div
            style={{
              flex: 1,
              height: "1px",
              background: "rgba(27,42,73,.15)",
            }}
          />
        </div>

        <h4
          style={{
            margin: 0,
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "clamp(3rem, 6vw, 6rem)",
            lineHeight: 0.9,
            letterSpacing: "-0.05em",
            color: "#1B2A49",
          }}
        >
          No fluff.
          <br />
          <span
            style={{
              fontFamily: "Georgia, serif",
              fontWeight: 400,
              color: "#6C7788",
            }}
          >
            No gatekeeping.
          </span>
        </h4>

        <p
          style={{
            margin: "32px auto 0",
            fontFamily: "var(--font-display)",
            fontWeight: 500,
            fontSize: "16px",
            lineHeight: 1.6,
            color: "#687180",
          }}
        >
          Just real experiences, practical tips
          <br />
          and places worth getting lost in.
        </p>
      </motion.div>
    </section>
  );
}