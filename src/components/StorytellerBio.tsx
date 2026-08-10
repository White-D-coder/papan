"use client";

import React, { useRef, useState } from "react";
import {
  AnimatePresence,
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
  const [activeStep, setActiveStep] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const scrollTimeoutRef =
    useRef<ReturnType<typeof setTimeout> | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  /*
   * Smooth scroll progress
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
   * ACTIVE STORY
   * =========================================================
   */

  useMotionValueEvent(smoothProgress, "change", (latest) => {
    let nextStep = 0;

    if (latest >= 0.66) {
      nextStep = 2;
    } else if (latest >= 0.33) {
      nextStep = 1;
    }

    setActiveStep((previous) => {
      if (previous === nextStep) return previous;
      return nextStep;
    });
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
   * IMAGE PARALLAX
   * =========================================================
   */

  const imageY = useTransform(
    smoothProgress,
    [0, 1],
    ["-8%", "8%"]
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
          SVG MASK DEFINITIONS
      ====================================================== */}

      <svg
        width="0"
        height="0"
        style={{
          position: "absolute",
          pointerEvents: "none",
        }}
        aria-hidden="true"
      >
        <defs>
          {STEPS.map((_, index) => (
            <React.Fragment key={index}>
              {/* Slight organic displacement */}
              <filter
                id={`cloudNoise-${index}`}
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
              >
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.018"
                  numOctaves="3"
                  seed={index + 10}
                  result="noise"
                />

                <feDisplacementMap
                  in="SourceGraphic"
                  in2="noise"
                  scale="28"
                  xChannelSelector="R"
                  yChannelSelector="G"
                />
              </filter>

              {/* Cloud-shaped image mask */}
              <mask
                id={`cloudMask-${index}`}
                maskUnits="objectBoundingBox"
              >
                {/* Main image area */}
                <rect
                  x="5%"
                  y="5%"
                  width="90%"
                  height="90%"
                  rx="8%"
                  fill="white"
                  filter={`url(#cloudNoise-${index})`}
                />

                {/* =================================================
                    CLOUD CUTOUTS
                ================================================= */}

                {/* Top left */}
                <circle
                  cx="5%"
                  cy="10%"
                  r="8%"
                  fill="black"
                />

                <circle
                  cx="12%"
                  cy="4%"
                  r="7%"
                  fill="black"
                />

                {/* Left edge */}
                <circle
                  cx="2%"
                  cy="27%"
                  r="7%"
                  fill="black"
                />

                <circle
                  cx="1%"
                  cy="52%"
                  r="6%"
                  fill="black"
                />

                <circle
                  cx="4%"
                  cy="76%"
                  r="8%"
                  fill="black"
                />

                {/* Bottom left */}
                <circle
                  cx="10%"
                  cy="94%"
                  r="9%"
                  fill="black"
                />

                <circle
                  cx="23%"
                  cy="98%"
                  r="7%"
                  fill="black"
                />

                {/* Bottom */}
                <circle
                  cx="42%"
                  cy="98%"
                  r="7%"
                  fill="black"
                />

                <circle
                  cx="61%"
                  cy="97%"
                  r="8%"
                  fill="black"
                />

                <circle
                  cx="80%"
                  cy="96%"
                  r="9%"
                  fill="black"
                />

                {/* Right bottom */}
                <circle
                  cx="95%"
                  cy="87%"
                  r="8%"
                  fill="black"
                />

                {/* Right */}
                <circle
                  cx="98%"
                  cy="63%"
                  r="7%"
                  fill="black"
                />

                <circle
                  cx="97%"
                  cy="38%"
                  r="8%"
                  fill="black"
                />

                <circle
                  cx="94%"
                  cy="16%"
                  r="7%"
                  fill="black"
                />

                {/* Top right */}
                <circle
                  cx="86%"
                  cy="4%"
                  r="8%"
                  fill="black"
                />

                {/* Extra organic small cuts */}
                <circle
                  cx="16%"
                  cy="92%"
                  r="4%"
                  fill="black"
                />

                <circle
                  cx="89%"
                  cy="91%"
                  r="5%"
                  fill="black"
                />

                <circle
                  cx="6%"
                  cy="62%"
                  r="4%"
                  fill="black"
                />
              </mask>
            </React.Fragment>
          ))}
        </defs>
      </svg>

      {/* =====================================================
          BACKGROUND
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

        {/* =================================================
            BACKGROUND CLOUD 01
        ================================================== */}

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

        {/* =================================================
            BACKGROUND CLOUD 02
        ================================================== */}

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

        {/* =================================================
            BACKGROUND CLOUD 03
        ================================================== */}

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

        {/* =================================================
            ROUTE LINE
        ================================================== */}

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

          <circle
            cx="170"
            cy="0"
            r="4"
            fill="#B24C35"
          />

          <circle
            cx="720"
            cy="760"
            r="4"
            fill="#B24C35"
          />

          <circle
            cx="280"
            cy="1770"
            r="4"
            fill="#B24C35"
          />

          <circle
            cx="1030"
            cy="3000"
            r="4"
            fill="#B24C35"
          />
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
          padding: "170px 32px 100px",
          textAlign: "center",
        }}
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-100px",
          }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
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
          STICKY STORY
      ====================================================== */}

      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 32px",
        }}
      >
        <div
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* =================================================
              PROGRESS
          ================================================== */}

          <div
            style={{
              position: "absolute",
              left: 0,
              top: "50%",
              transform: "translateY(-50%)",
              width: "40px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "1px",
                height: "90px",
                background: "rgba(27,42,73,.15)",
              }}
            >
              <motion.div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "1px",
                  height: "100%",
                  background: "#1B2A49",
                  scaleY: smoothProgress,
                  transformOrigin: "top",
                }}
              />
            </div>

            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "9px",
                letterSpacing: "0.1em",
              }}
            >
              0{activeStep + 1}
            </div>
          </div>

          {/* =================================================
              ACTIVE CONTENT
          ================================================== */}

          <div
            style={{
              width: "100%",
              display: "grid",
              gridTemplateColumns:
                "minmax(280px, .8fr) minmax(420px, 1.2fr)",
              gap: "clamp(50px, 8vw, 130px)",
              alignItems: "center",
            }}
          >
            {/* =================================================
                TEXT
            ================================================== */}

            <AnimatePresence mode="wait">
              <motion.div
                key={STEPS[activeStep].number}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -35,
                }}
                transition={{
                  duration: 0.65,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{
                  maxWidth: "430px",
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
                  {STEPS[activeStep].number}
                </div>

                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#6C7788",
                    marginBottom: "35px",
                  }}
                >
                  {STEPS[activeStep].title}
                </div>

                <h3
                  style={{
                    margin: 0,
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "clamp(2.2rem, 4vw, 4rem)",
                    lineHeight: 1.02,
                    letterSpacing: "-0.04em",
                    color: "#1B2A49",
                  }}
                >
                  {STEPS[activeStep].heading}
                </h3>

                <p
                  style={{
                    margin: "26px 0 0",
                    maxWidth: "390px",
                    fontFamily: "var(--font-display)",
                    fontWeight: 500,
                    fontSize: "15px",
                    lineHeight: 1.7,
                    color: "#687180",
                  }}
                >
                  {STEPS[activeStep].description}
                </p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginTop: "35px",
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

                  {STEPS[activeStep].location}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* =================================================
                CLOUD / WATERCOLOUR IMAGE FRAME
            ================================================== */}

            <AnimatePresence mode="wait">
              <motion.div
                key={STEPS[activeStep].number}
                initial={{
                  opacity: 0,
                  scale: 0.94,
                  y: 50,
                }}
                animate={{
                  opacity: 1,
                  scale: isHovered ? 1.025 : 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 1.02,
                  y: -35,
                }}
                transition={{
                  duration: isHovered ? 0.45 : 0.9,
                  ease: [0.16, 1, 0.3, 1],
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{
                  position: "relative",
                  height: "min(68vh, 650px)",
                  width: "100%",
                }}
              >
                {/* =================================================
                    IMAGE
                ================================================== */}

                <div
                  style={{
                    position: "absolute",
                    inset: "-2%",
                    overflow: "hidden",
                    // WebkitMaskImage: \`url(#cloudMask-\${activeStep})\`,
                    // maskImage: \`url(#cloudMask-\${activeStep})\`,
                    WebkitMaskSize: "100% 100%",
                    maskSize: "100% 100%",
                    WebkitMaskRepeat: "no-repeat",
                    maskRepeat: "no-repeat",
                    borderRadius: "24px" // fallback
                  }}
                >
                  <motion.img
                    src={STEPS[activeStep].image}
                    alt={STEPS[activeStep].location}
                    style={{
                      width: "100%",
                      height: "115%",
                      objectFit: "cover",
                      display: "block",
                      y: imageY,
                      scale: 1.06,

                      filter:
                        "saturate(.92) contrast(.96)",
                    }}
                  />
                </div>

                {/* =================================================
                    WHITE CLOUD — BOTTOM
                ================================================== */}

                <motion.div
                  animate={{
                    x: ["-4%", "5%", "-4%"],
                  }}
                  transition={{
                    duration: isHovered ? 8 : 14,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    position: "absolute",
                    left: "-12%",
                    bottom: "-10%",
                    width: "65%",
                    height: "35%",

                    background:
                      "radial-gradient(ellipse at center, rgba(255,255,255,.98) 0%, rgba(255,255,255,.8) 35%, rgba(255,255,255,0) 72%)",

                    filter: "blur(18px)",

                    pointerEvents: "none",
                  }}
                />

                {/* =================================================
                    WHITE CLOUD — TOP RIGHT
                ================================================== */}

                <motion.div
                  animate={{
                    x: ["5%", "-3%", "5%"],
                  }}
                  transition={{
                    duration: isHovered ? 11 : 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    position: "absolute",
                    right: "-10%",
                    top: "-8%",
                    width: "55%",
                    height: "30%",

                    background:
                      "radial-gradient(ellipse at center, rgba(255,255,255,.9), rgba(255,255,255,0) 70%)",

                    filter: "blur(22px)",

                    pointerEvents: "none",
                  }}
                />

                {/* =================================================
                    FLOATING CLOUD PUFFS
                ================================================== */}

                {[
                  {
                    left: "-3%",
                    top: "28%",
                    size: 110,
                    delay: 0,
                  },
                  {
                    left: "2%",
                    bottom: "18%",
                    size: 140,
                    delay: 1.5,
                  },
                  {
                    right: "-2%",
                    bottom: "28%",
                    size: 120,
                    delay: 2.5,
                  },
                  {
                    right: "4%",
                    top: "16%",
                    size: 90,
                    delay: 1,
                  },
                ].map((cloud, index) => (
                  <motion.div
                    key={index}
                    animate={{
                      y: [-5, 5, -5],
                      x: [-3, 4, -3],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: isHovered
                        ? 4 + index * 0.5
                        : 6 + index,
                      delay: cloud.delay,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    style={{
                      position: "absolute",

                      left: cloud.left,
                      right: cloud.right,
                      top: cloud.top,
                      bottom: cloud.bottom,

                      width: cloud.size,
                      height: cloud.size * 0.7,

                      borderRadius: "50%",

                      background:
                        "radial-gradient(circle, rgba(255,255,255,.92) 0%, rgba(255,255,255,.6) 45%, rgba(255,255,255,0) 75%)",

                      filter: "blur(12px)",

                      pointerEvents: "none",
                    }}
                  />
                ))}

                {/* =================================================
                    IMAGE CAPTION
                ================================================== */}

                <div
                  style={{
                    position: "absolute",
                    left: "12%",
                    right: "12%",
                    bottom: "14%",

                    display: "flex",
                    justifyContent: "space-between",

                    fontFamily: "var(--font-mono)",
                    fontSize: "9px",
                    letterSpacing: "0.15em",

                    color: "#fff",

                    textShadow:
                      "0 2px 15px rgba(0,0,0,.45)",

                    pointerEvents: "none",
                  }}
                >
                  <span>
                    TRAVEL NOTE
                  </span>

                  <span>
                    {STEPS[activeStep].number}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* =================================================
            SCROLL SPACE
        ================================================== */}

        <div
          style={{
            height: "200vh",
            marginTop: "-100vh",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* =====================================================
          STEP INDICATORS
      ====================================================== */}

      <div
        style={{
          position: "relative",
          zIndex: 3,
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "100px 32px 0",

          display: "flex",
          justifyContent: "center",
          gap: "12px",
        }}
      >
        {STEPS.map((step, index) => (
          <button
            key={step.number}
            onClick={() => setActiveStep(index)}
            style={{
              border: "none",
              background: "transparent",
              padding: "10px",
              cursor: "pointer",

              display: "flex",
              alignItems: "center",
              gap: "8px",

              fontFamily: "var(--font-mono)",
              fontSize: "9px",
              letterSpacing: "0.12em",

              color:
                activeStep === index
                  ? "#1B2A49"
                  : "rgba(27,42,73,.35)",

              transition: "color .3s ease",
            }}
          >
            <span
              style={{
                width:
                  activeStep === index
                    ? "24px"
                    : "8px",

                height: "1px",

                background:
                  activeStep === index
                    ? "#1B2A49"
                    : "rgba(27,42,73,.25)",

                transition:
                  "width .5s cubic-bezier(.16,1,.3,1)",
              }}
            />

            {step.number}
          </button>
        ))}
      </div>

      {/* =====================================================
          PROMISE
      ====================================================== */}

      <motion.div
        style={{
          position: "relative",
          zIndex: 2,

          maxWidth: "900px",

          margin: "150px auto 0",
          padding: "0 32px 150px",

          textAlign: "center",

          rotate: paperRotate,
        }}
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          margin: "-100px",
        }}
        transition={{
          duration: 1,
          ease: [0.16, 1, 0.3, 1],
        }}
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

      {/* =====================================================
          MOBILE
      ====================================================== */}

      <style jsx>{`
        @media (max-width: 800px) {
          #about > div:nth-of-type(2) {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }

          #about > div:nth-of-type(2) > div {
            position: relative !important;
            height: auto !important;
            display: block !important;
          }

          #about
            > div:nth-of-type(2)
            > div
            > div:last-child {
            margin-top: 50px;
          }
        }
      `}</style>
    </section>
  );
}