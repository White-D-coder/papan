import { useEffect, useRef, useState } from "react";
import { ArrowRight, Camera, ChevronDown, Compass, Heart, MapPin, ShieldCheck } from "lucide-react";

interface TabData {
  id: string;
  code: string;
  label: string;
  title: string;
  subtitle: string;
  bg: string;
  accent: string;
  ink: string;
  stat: string;
  description: string;
}

interface MosaicImage {
  seed: string;
  title: string;
}

const tabsData: TabData[] = [
  {
    id: "story",
    code: "RY-01",
    label: "Purva's Story",
    title: "Purva actually travels it.",
    subtitle: "No agency scripts, no sponsored fluff. Real travel experiences made with total authenticity.",
    bg: "#FAF9F6",
    accent: "#B45309",
    ink: "#121316",
    stat: "4 COUNTRIES FILMED",
    description:
      "Purva started Ryoko to solve the overwhelming noise in travel planning. From navigating Japan's bullet train passes to finding secret Swiss valley view points, Purva documents every step with total honesty so you can travel stress-free.",
  },
  {
    id: "how",
    code: "RY-02",
    label: "How Purva Travels",
    title: "Helping you get started.",
    subtitle: "Tested day-by-day itineraries, exact cost breakdowns, and step-by-step video guides.",
    bg: "#F5F3EF",
    accent: "#2563EB",
    ink: "#121316",
    stat: "100% REAL BUDGETS",
    description:
      "Every guide includes itemized expenditure: hotel choices, train passes, food costs, and hidden fees. Purva gives you the exact blueprint to experience incredible destinations within budget.",
  },
  {
    id: "promise",
    code: "RY-03",
    label: "Our Promise",
    title: "Supporting you from A to Z.",
    subtitle: "Zero sponsored bias, direct travel tips, and responsive community help.",
    bg: "#F9F8F6",
    accent: "#059669",
    ink: "#121316",
    stat: "0% SPONSORED FLUFF",
    description:
      "If a tourist trap is overrated, Purva tells you to skip it. If a hidden shrine requires an early morning wake-up, we tell you how to beat the crowds. Our commitment is strictly to your unforgettable journey.",
  },
];

const mosaicLoopImages: MosaicImage[] = [
  { seed: "ryoko-nara-deer", title: "Japan Autumn & Nara Deer Trail" },
  { seed: "ryoko-swiss-alps", title: "Swiss Alps & Panoramic Express" },
  { seed: "ryoko-jeju-seoul", title: "Jeju Volcanic Coast & Seoul" },
  { seed: "ryoko-hallstatt", title: "Austria & Hallstatt Lakes" },
  { seed: "ryoko-tokyo-kyoto", title: "Tokyo Neon & Kyoto Shrines" },
];

function imgUrl(seed: string, w: number, h: number): string {
  return `https://picsum.photos/seed/${seed}/${w}/${h}`;
}

export default function RyokoAboutRedesign() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [frontImg, setFrontImg] = useState<number>(0);
  const [reduceMotion, setReduceMotion] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    if (mq.addEventListener) mq.addEventListener("change", onChange);
    else mq.addListener(onChange);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", onChange);
      else mq.removeListener(onChange);
    };
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    const t = setInterval(() => {
      setFrontImg((p) => (p + 1) % mosaicLoopImages.length);
    }, 4500);
    return () => clearInterval(t);
  }, [reduceMotion]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const tab = tabsData[activeIndex];

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,340..900;1,9..144,340..900&family=Space+Mono:wght@400;700&family=Inter:wght@400;500;600;700&display=swap"
      />
      <style>{`
        @keyframes ryokoStamp {
          0% { opacity: 0; transform: scale(1.9) rotate(-24deg); }
          55% { opacity: 1; transform: scale(0.92) rotate(6deg); }
          100% { opacity: 1; transform: scale(1) rotate(-6deg); }
        }
        @keyframes ryokoRise {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .ryoko-root * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
        }
      `}</style>

      <div
        ref={sectionRef}
        className="ryoko-root relative w-full overflow-hidden"
        style={{
          backgroundColor: tab.bg,
          transition: "background-color 700ms ease",
          fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#121316 1px, transparent 1px)",
            backgroundSize: "22px 22px",
            opacity: 0.035,
          }}
        />

        <div
          aria-hidden="true"
          className="absolute pointer-events-none select-none"
          style={{
            right: "-4%",
            bottom: "-6%",
            fontFamily: "'Space Mono', monospace",
            fontWeight: 700,
            fontSize: "clamp(6rem, 19vw, 15rem)",
            letterSpacing: "-0.02em",
            color: "transparent",
            WebkitTextStroke: "1.5px rgba(18,19,22,0.07)",
            transform: "rotate(-7deg)",
            lineHeight: 1,
            whiteSpace: "nowrap",
          }}
        >
          RYOKO
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-5 py-16 sm:px-8 sm:py-24">
          <div
            className="max-w-2xl"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(14px)",
              transition: "opacity 700ms ease, transform 700ms ease",
            }}
          >
            <span
              className="inline-flex items-center gap-2 font-bold text-xs uppercase mb-4"
              style={{ color: tab.accent, fontFamily: "'Space Mono', monospace", letterSpacing: "0.25em", transition: "color 500ms ease" }}
            >
              <Compass className="w-4 h-4" /> About Ryoko
            </span>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight"
              style={{ color: tab.ink, fontFamily: "'Fraunces', serif", lineHeight: 1.15 }}
            >
              Real itineraries, built for{' '}
              <span className="relative inline-block px-3 py-1 my-1 rounded-md shadow-md border border-amber-900/40 overflow-hidden transform -rotate-1">
                {/* Crushed Brown Kraft Paper Texture Overlay */}
                <span
                  className="absolute inset-0 bg-[#C89B67] pointer-events-none"
                  style={{
                    backgroundImage: `
                      radial-gradient(rgba(140, 90, 43, 0.4) 1px, transparent 1px),
                      linear-gradient(135deg, #B88652 0%, #D4A373 35%, #9C6B3B 70%, #C4925E 100%)
                    `,
                    boxShadow: 'inset 0 0 10px rgba(0,0,0,0.35)',
                  }}
                />
                <span className="relative z-10 text-[#2C1802] font-black drop-shadow-xs">
                  real travelers.
                </span>
              </span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-stone-600 font-medium max-w-lg">
              Purva documents authentic travel experiences, giving you clear budgets and step-by-step itineraries.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* left: boarding-pass accordion */}
            <div className="flex flex-col gap-3">
              {tabsData.map((t, idx) => {
                const active = idx === activeIndex;
                return (
                  <div
                    key={t.id}
                    className="rounded-2xl overflow-hidden transition-all duration-300"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.72)",
                      boxShadow: active ? "0 12px 30px -14px rgba(18,19,22,0.25)" : "0 1px 0 rgba(18,19,22,0.06)",
                      border: `1px solid ${active ? `${t.accent}55` : "rgba(18,19,22,0.08)"}`,
                    }}
                  >
                    <button
                      onClick={() => setActiveIndex(idx)}
                      aria-expanded={active}
                      className="w-full flex items-center gap-4 text-left p-4 sm:p-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 focus-visible:ring-offset-2"
                    >
                      <span
                        key={active ? `${t.id}-on` : `${t.id}-off`}
                        className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold"
                        style={{
                          border: `2px dashed ${active ? t.accent : "rgba(18,19,22,0.25)"}`,
                          color: active ? "#ffffff" : "rgba(18,19,22,0.4)",
                          backgroundColor: active ? t.accent : "transparent",
                          fontFamily: "'Space Mono', monospace",
                          animation: active && !reduceMotion ? "ryokoStamp 550ms cubic-bezier(.22,1,.36,1)" : "none",
                        }}
                      >
                        {idx + 1}
                      </span>

                      <span className="flex-1 min-w-0">
                        <span className="block font-bold text-sm sm:text-base tracking-tight" style={{ color: active ? tab.ink : "#4b4d54" }}>
                          {t.label}
                        </span>
                        <span className="block text-xs text-stone-500 font-medium mt-0.5 truncate">{t.subtitle}</span>
                      </span>

                      <ChevronDown
                        className="w-4 h-4 shrink-0 transition-transform duration-300"
                        style={{ color: active ? t.accent : "#9a9da5", transform: active ? "rotate(180deg)" : "rotate(0deg)" }}
                      />
                    </button>

                    {active && (
                      <div className="px-4 sm:px-5 pb-5 sm:pb-6" style={{ animation: reduceMotion ? "none" : "ryokoRise 450ms ease" }}>
                        <div
                          className="flex items-center gap-1.5 font-bold text-xs uppercase mb-3"
                          style={{ color: t.accent, fontFamily: "'Space Mono', monospace", letterSpacing: "0.1em" }}
                        >
                          <Camera className="w-3.5 h-3.5" />
                          <span>{t.code} · Boarding</span>
                        </div>

                        <h3 className="text-xl sm:text-2xl font-semibold mb-2" style={{ color: tab.ink, fontFamily: "'Fraunces', serif", lineHeight: 1.15 }}>
                          {t.title}
                        </h3>

                        <p className="text-sm text-stone-600 leading-relaxed font-medium mb-4">{t.description}</p>

                        <div className="flex flex-wrap items-center gap-3">
                          <span
                            className="inline-flex items-center rounded-full px-3 py-1 text-xs font-bold"
                            style={{
                              backgroundColor: `${t.accent}14`,
                              color: t.accent,
                              fontFamily: "'Space Mono', monospace",
                              border: `1px solid ${t.accent}33`,
                              letterSpacing: "0.03em",
                            }}
                          >
                            {t.stat}
                          </span>

                          <a
                            href="#destinations"
                            className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider text-white transition-opacity hover:opacity-90"
                            style={{ backgroundColor: tab.ink }}
                          >
                            View Itineraries <ArrowRight className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* right: shuffling polaroid deck */}
            <div className="flex flex-col items-center">
              <div className="relative w-full" style={{ maxWidth: "360px", aspectRatio: "4 / 5" }}>
                {mosaicLoopImages.map((img, i) => {
                  const len = mosaicLoopImages.length;
                  const pos = (i - frontImg + len) % len;
                  const isFront = pos === 0;
                  const isVisible = pos <= 2;
                  const rotate = pos === 0 ? -2 : pos === 1 ? 5 : pos === 2 ? -7 : 0;
                  const translateX = pos === 0 ? 0 : pos === 1 ? 22 : pos === 2 ? -18 : 0;
                  const translateY = pos === 0 ? 0 : pos * 6;
                  const scale = pos === 0 ? 1 : pos === 1 ? 0.94 : pos === 2 ? 0.89 : 0.8;

                  return (
                    <div
                      key={img.seed}
                      className="absolute inset-0 rounded-2xl p-2.5 sm:p-3"
                      style={{
                        backgroundColor: "#ffffff",
                        boxShadow: isFront ? "0 25px 50px -18px rgba(18,19,22,0.35)" : "0 10px 24px -14px rgba(18,19,22,0.2)",
                        border: "1px solid rgba(18,19,22,0.08)",
                        zIndex: 10 - pos,
                        opacity: isVisible ? 1 : 0,
                        transform: `translate(${translateX}px, ${translateY}px) rotate(${rotate}deg) scale(${scale})`,
                        transition: "transform 700ms cubic-bezier(.22,1,.36,1), opacity 500ms ease, box-shadow 500ms ease",
                      }}
                    >
                      <div className="relative w-full h-full rounded-lg overflow-hidden" style={{ backgroundColor: "#e7e5e4" }}>
                        <img src={imgUrl(img.seed, 640, 760)} alt={img.title} className="w-full h-full object-cover" draggable={false} />
                        {isFront && (
                          <div
                            className="absolute bottom-2 left-2 right-2 flex items-center gap-1.5 rounded-lg px-2.5 py-1.5"
                            style={{ backgroundColor: "rgba(255,255,255,0.92)", backdropFilter: "blur(4px)" }}
                          >
                            <MapPin className="w-3 h-3 shrink-0" style={{ color: tab.accent }} />
                            <span className="text-xs font-semibold text-stone-800 truncate">{img.title}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center gap-2 mt-5">
                {mosaicLoopImages.map((img, i) => (
                  <button
                    key={img.seed}
                    onClick={() => setFrontImg(i)}
                    aria-label={`Show ${img.title}`}
                    className="rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 focus-visible:ring-offset-2"
                    style={{
                      width: i === frontImg ? "20px" : "6px",
                      height: "6px",
                      backgroundColor: i === frontImg ? tab.accent : "rgba(18,19,22,0.18)",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 pt-6 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left" style={{ borderTop: "1px dashed rgba(18,19,22,0.18)" }}>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "#ffffff", boxShadow: "0 4px 12px -6px rgba(18,19,22,0.25)" }}>
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
              </div>
              <div className="text-left">
                <h4 className="font-bold text-xs" style={{ color: tab.ink }}>100% Tested In-Person</h4>
                <p className="text-xs text-stone-500" style={{ maxWidth: "220px" }}>Every train, route, and hotel in our guides was personally visited by Purva.</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "#ffffff", boxShadow: "0 4px 12px -6px rgba(18,19,22,0.25)" }}>
                <Heart className="w-4 h-4 text-rose-500" />
              </div>
              <div className="text-left">
                <h4 className="font-bold text-xs" style={{ color: tab.ink }}>Direct Travel Support</h4>
                <p className="text-xs text-stone-500" style={{ maxWidth: "220px" }}>Reach out directly to Purva for personalized itinerary advice.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}