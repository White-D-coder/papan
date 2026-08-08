import React, { useState, useEffect } from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface HeroProps {
  onSearch: (filters: { season: string; duration: string; departureMonth: string }) => void;
}

const HERO_SLIDES = [
  {
    image: 'images/pexels-afhamhmsyri-34021102.jpg',
    title: 'Hakone Torii Gate & Mt. Fuji',
    number: '01',
  },
  {
    image: 'images/pexels-beigh-yabaar-865585625-32584961.jpg',
    title: 'Kyoto Arashiyama & Shrines',
    number: '02',
  },
  {
    image: '/images/pexels-sarmat-batagov-776392502-35139475.jpg',
    title: 'Tokyo Neon & Ginza Lights',
    number: '03',
  },
];

const DEPARTURE_MONTHS_BY_SEASON: Record<string, { label: string; value: string }[]> = {
  'Spring/Sakura': [
    { label: 'All Spring Months', value: 'All Spring' },
    { label: 'March 2026', value: 'March 2026' },
    { label: 'April 2026', value: 'April 2026' },
    { label: 'May 2026', value: 'May 2026' },
    { label: 'March 2027 (Peak Sakura)', value: 'March 2027' },
    { label: 'April 2027 (Peak Sakura)', value: 'April 2027' },
    { label: 'May 2027', value: 'May 2027' },
  ],
  'Autumn Foliage': [
    { label: 'All Autumn Months', value: 'All Autumn' },
    { label: 'September 2026', value: 'September 2026' },
    { label: 'October 2026', value: 'October 2026' },
    { label: 'November 2026 (Peak Foliage)', value: 'November 2026' },
    { label: 'September 2027', value: 'September 2027' },
    { label: 'October 2027', value: 'October 2027' },
    { label: 'November 2027', value: 'November 2027' },
  ],
  'Winter Snow': [
    { label: 'All Winter Months', value: 'All Winter' },
    { label: 'December 2026', value: 'December 2026' },
    { label: 'January 2027 (Peak Snow)', value: 'January 2027' },
    { label: 'February 2027 (Snow Festival)', value: 'February 2027' },
    { label: 'December 2027', value: 'December 2027' },
  ],
  'Summer Festivals': [
    { label: 'All Summer Months', value: 'All Summer' },
    { label: 'June 2026', value: 'June 2026' },
    { label: 'July 2026 (Gion Matsuri)', value: 'July 2026' },
    { label: 'August 2026 (Nebuta Festival)', value: 'August 2026' },
    { label: 'June 2027', value: 'June 2027' },
    { label: 'July 2027', value: 'July 2027' },
    { label: 'August 2027', value: 'August 2027' },
  ],
  'All Seasons': [
    { label: 'All Departure Months', value: 'All Months' },
    { label: 'August 2026', value: 'August 2026' },
    { label: 'September 2026', value: 'September 2026' },
    { label: 'October 2026', value: 'October 2026' },
    { label: 'November 2026', value: 'November 2026' },
    { label: 'December 2026', value: 'December 2026' },
    { label: 'January 2027', value: 'January 2027' },
    { label: 'February 2027', value: 'February 2027' },
    { label: 'March 2027', value: 'March 2027' },
    { label: 'April 2027', value: 'April 2027' },
    { label: 'May 2027', value: 'May 2027' },
    { label: 'June 2027', value: 'June 2027' },
    { label: 'July 2027', value: 'July 2027' },
    { label: 'August 2027', value: 'August 2027' },
  ],
};

export const HeroParallax: React.FC<HeroProps> = ({ onSearch }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedSeason, setSelectedSeason] = useState('Spring/Sakura');
  const [selectedDuration, setSelectedDuration] = useState('All Durations');
  const [selectedDepartureMonth, setSelectedDepartureMonth] = useState('All Spring');

  // Automatic Hero Carousel Image Rotation (Every 5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleSeasonChange = (season: string) => {
    setSelectedSeason(season);
    const months = DEPARTURE_MONTHS_BY_SEASON[season] || DEPARTURE_MONTHS_BY_SEASON['Spring/Sakura'];
    setSelectedDepartureMonth(months[0].value);
  };

  const handleFinderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({
      season: selectedSeason,
      duration: selectedDuration,
      departureMonth: selectedDepartureMonth,
    });

    const packagesSection = document.getElementById('packages-section');
    if (packagesSection) {
      packagesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const activeDepartureMonths =
    DEPARTURE_MONTHS_BY_SEASON[selectedSeason] || DEPARTURE_MONTHS_BY_SEASON['Spring/Sakura'];

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-between overflow-hidden pt-28 pb-24">
      {/* Background Image with Crossfade & Atmospheric Vignette */}
      <div className="absolute inset-0 z-0">
        {HERO_SLIDES.map((slide, idx) => (
          <img
            key={idx}
            src={slide.image}
            alt={slide.title}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${
              activeSlide === idx ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/60" />
      </div>

      {/* Floating Petal HTML5 Canvas */}


      {/* Main Content Area: Left Upper-Center Position with Justify Between */}
      <div className="relative z-20 max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14 w-full flex-1 flex flex-col justify-center pt-4 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Giant Title */}
          <div className="lg:col-span-10 text-left">
            <h1 className="font-outfit font-black text-6xl sm:text-8xl md:text-[9rem] lg:text-[11rem] tracking-tight uppercase leading-[0.82] text-white drop-shadow-2xl select-none">
              VISIT <br />
              JAPAN
            </h1>
            <p className="font-jakarta text-xs sm:text-sm font-medium tracking-wider text-slate-300 mt-4 max-w-md">
              Welcome to Japan National Tourism • Bespoke Expeditions
            </p>
          </div>

          {/* Right Column: Slide Counter */}
          <div className="lg:col-span-2 flex justify-end pr-2 sm:pr-4">
            <div className="flex flex-col items-end gap-3 text-xs font-mono font-bold tracking-widest text-white/60 select-none translate-x-4 sm:translate-x-6">
              {HERO_SLIDES.map((slide, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSlide(idx)}
                  className={`flex items-center gap-2 transition-all cursor-pointer ${
                    activeSlide === idx
                      ? 'text-white text-base font-extrabold font-outfit'
                      : 'hover:text-white opacity-60'
                  }`}
                >
                  <span>{slide.number}</span>
                  {activeSlide === idx && <span className="w-5 h-[2px] bg-white inline-block" />}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Floating Search Bar */}
</section>
  );
};
