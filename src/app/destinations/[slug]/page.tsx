'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  DollarSign, 
  MapPin, 
  Sparkles, 
  Compass, 
  CheckCircle2, 
  Plane, 
  Video, 
  X,
  ChevronRight,
  ShieldCheck,
  Hotel,
  Utensils,
  Lightbulb,
  Briefcase,
  Leaf,
  FileText,
  Calculator
} from 'lucide-react';
import { destinationsData, getDestinationBySlug } from '@/data/destinationsData';
import InquiryModal from '@/components/InquiryModal';

const navTabs = [
  { id: 'top', label: 'TOP' },
  { id: 'cinema', label: 'CINEMA' },
  { id: 'days', label: 'DAYS' },
  { id: 'hotels', label: 'HOTELS' },
  { id: 'food', label: 'FOOD' },
  { id: 'tips', label: 'TIPS' },
  { id: 'pack', label: 'PACK' },
  { id: 'foliage', label: 'FOLIAGE' },
  { id: 'visa', label: 'VISA' },
  { id: 'budget', label: 'BUDGET' },
];

export default function DestinationDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;

  const destination = getDestinationBySlug(slug);
  const [activeNav, setActiveNav] = useState('top');
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;
      for (const tab of navTabs) {
        const el = document.getElementById(`sec-${tab.id}`);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveNav(tab.id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveNav(id);
    const el = document.getElementById(`sec-${id}`);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  if (!destination) {
    return (
      <div className="min-h-screen bg-[#FAF9F6] flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-4xl font-extrabold text-[#121316] mb-4">Destination Not Found</h1>
        <p className="text-stone-600 mb-8 max-w-md">
          The requested destination guide could not be found.
        </p>
        <Link
          href="/#destinations"
          className="px-6 py-3 rounded-full bg-[#121316] text-white font-bold text-xs uppercase tracking-widest hover:bg-stone-800 transition-all shadow-lg"
        >
          Return to Destinations
        </Link>
      </div>
    );
  }

  const currentIndex = destinationsData.findIndex((d) => d.slug === slug);
  const nextDestination = destinationsData[(currentIndex + 1) % destinationsData.length];

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#121316] selection:bg-amber-200 selection:text-amber-950 font-sans">
      
      {/* Floating Sub-Navbar (Matching Attached UI Image) */}
      <header className="fixed top-4 left-4 right-4 z-50 max-w-6xl mx-auto">
        <div className="bg-[#EFECE6]/90 backdrop-blur-xl border border-stone-300/80 px-3 py-2 rounded-full shadow-lg flex items-center gap-2 overflow-x-auto scrollbar-none">
          
          {/* Left Brand Badge "So" */}
          <Link href="/#destinations" className="flex items-center gap-2 shrink-0 pl-1 pr-2 border-r border-stone-300/80">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-600 to-emerald-500 flex items-center justify-center text-white font-extrabold text-xs shadow-sm">
              So
            </div>
          </Link>

          {/* Sub-Nav Tabs: TOP • CINEMA • DAYS • HOTELS • FOOD • TIPS • PACK • FOLIAGE • VISA • BUDGET */}
          <div className="flex items-center gap-1 overflow-x-auto scrollbar-none font-mono text-[11px] font-bold tracking-widest uppercase">
            {navTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => scrollToSection(tab.id)}
                className={`px-3.5 py-1.5 rounded-full transition-all whitespace-nowrap ${
                  activeNav === tab.id
                    ? 'bg-[#121316] text-white shadow-md'
                    : 'text-stone-600 hover:text-black hover:bg-stone-200/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Right Action Button */}
          <button
            onClick={() => setIsInquiryOpen(true)}
            className="ml-auto px-4 py-1.5 rounded-full bg-[#121316] text-white text-[11px] font-bold uppercase tracking-widest hover:bg-stone-800 transition-all shrink-0 flex items-center gap-1.5 shadow-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden sm:inline">PLAN TRIP</span>
          </button>
        </div>
      </header>

      {/* Section 1: TOP (Hero Banner) */}
      <section id="sec-top" className="relative h-[70vh] md:h-[80vh] w-full pt-16">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F6] via-black/40 to-black/60" />

        <div className="absolute bottom-10 left-0 right-0 max-w-6xl mx-auto px-4 md:px-8 text-white z-20">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="px-3.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-xs font-semibold text-white/90 border border-white/20">
              {destination.date}
            </span>
            <span
              className={`px-3.5 py-1 rounded-full text-xs font-bold tracking-wider backdrop-blur-md border ${
                destination.status === 'filmed'
                  ? 'bg-emerald-600/90 text-white border-emerald-400/40'
                  : destination.status === 'boarding'
                  ? 'bg-amber-500/90 text-stone-950 border-amber-300'
                  : 'bg-stone-800/80 text-stone-200 border-stone-600'
              }`}
            >
              ● {destination.statusLabel}
            </span>
            <span className="px-3.5 py-1 rounded-full bg-amber-500 text-stone-950 text-xs font-bold tracking-wider flex items-center gap-1">
              <Plane className="w-3.5 h-3.5" />
              {destination.routeFrom.code} ➔ {destination.routeTo.code}
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-3 drop-shadow-md">
            {destination.name}
          </h1>

          <p className="text-stone-200 text-sm sm:text-base max-w-2xl font-medium leading-relaxed mb-6 drop-shadow-sm">
            {destination.itinerarySummary}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => setIsInquiryOpen(true)}
              className="px-6 py-3 rounded-full bg-white text-[#121316] font-extrabold text-xs uppercase tracking-widest hover:bg-stone-100 transition-all shadow-xl flex items-center gap-2 hover:scale-105"
            >
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>Get Custom Itinerary</span>
            </button>
            <button
              onClick={() => scrollToSection('cinema')}
              className="px-6 py-3 rounded-full bg-black/50 backdrop-blur-md text-white font-bold text-xs uppercase tracking-widest border border-white/30 hover:bg-black/70 transition-all flex items-center gap-2"
            >
              <Video className="w-4 h-4 text-amber-400" />
              <span>Watch 4K Cinema</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Container for Nav Sections */}
      <main className="max-w-6xl mx-auto px-4 md:px-8 py-10 space-y-16">
        
        {/* Quick Specs Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-3xl bg-white border border-stone-200 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-700">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Duration</div>
              <div className="font-extrabold text-sm text-stone-900">{destination.duration}</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-700">
              <DollarSign className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Est. Cost</div>
              <div className="font-extrabold text-sm text-emerald-700">{destination.estimatedBudget}</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-700">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Best Season</div>
              <div className="font-bold text-xs text-stone-900">{destination.bestTimeToVisit}</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-700">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Transit Hack</div>
              <div className="font-bold text-xs text-stone-900">{destination.transportTip}</div>
            </div>
          </div>
        </div>

        {/* Section 2: CINEMA */}
        <section id="sec-cinema" className="pt-4 scroll-mt-28">
          <div className="flex items-center gap-2 mb-4">
            <Video className="w-5 h-5 text-amber-600" />
            <h2 className="text-2xl sm:text-3xl font-black text-stone-900 uppercase tracking-tight">
              4K Travel Cinema Journal
            </h2>
          </div>
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border border-stone-200 bg-black group cursor-pointer" onClick={() => setIsVideoOpen(true)}>
            <Image src={destination.image} alt={destination.name} fill className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-stone-900 shadow-2xl group-hover:scale-110 transition-transform">
                <Video className="w-8 h-8 text-amber-600 ml-1" />
              </div>
            </div>
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white z-10">
              <div>
                <span className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase block">CINEMATIC FILM</span>
                <span className="text-xl font-bold">{destination.name} — Full Journey</span>
              </div>
              <span className="px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold">4K HDR</span>
            </div>
          </div>
        </section>

        {/* Section 3: DAYS (Day-by-Day Itinerary) */}
        <section id="sec-days" className="pt-4 scroll-mt-28">
          <div className="flex items-center gap-2 mb-6">
            <Calendar className="w-5 h-5 text-amber-600" />
            <h2 className="text-2xl sm:text-3xl font-black text-stone-900 uppercase tracking-tight">
              Day-by-Day Itinerary
            </h2>
          </div>
          <div className="space-y-6">
            {destination.days.map((item, idx) => (
              <div key={idx} className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200 shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-3 border-b border-stone-100">
                  <div className="flex items-center gap-3">
                    <span className="px-3.5 py-1 rounded-full bg-amber-500/15 text-amber-900 font-extrabold text-xs tracking-wider font-mono">
                      {item.day}
                    </span>
                    <h3 className="text-xl font-bold text-stone-900">{item.title}</h3>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-stone-500 uppercase tracking-widest">
                    <MapPin className="w-4 h-4 text-amber-600" />
                    <span>{item.location}</span>
                  </div>
                </div>

                <p className="text-sm text-stone-600 leading-relaxed font-medium mb-6">
                  {item.description}
                </p>

                <div className="bg-[#FAF9F6] p-4 rounded-2xl border border-stone-200/70">
                  <div className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-2 font-mono">
                    ACTIVITIES &amp; HIGHLIGHTS
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {item.activities.map((act, aIdx) => (
                      <div key={aIdx} className="flex items-start gap-2 text-xs font-bold text-stone-800">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{act}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: HOTELS */}
        <section id="sec-hotels" className="pt-4 scroll-mt-28">
          <div className="flex items-center gap-2 mb-6">
            <Hotel className="w-5 h-5 text-amber-600" />
            <h2 className="text-2xl sm:text-3xl font-black text-stone-900 uppercase tracking-tight">
              Recommended Stays &amp; Hotels
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-lg">
              <span className="text-[10px] font-mono font-bold text-amber-700 uppercase tracking-widest block mb-2">BUDGET PICK</span>
              <h3 className="text-lg font-bold text-stone-900 mb-1">Boutique City Hostel / Hotel</h3>
              <p className="text-xs text-stone-500 mb-4">$45–$75 / night • Prime central location near train station.</p>
              <ul className="text-xs font-semibold text-stone-700 space-y-1.5">
                <li>• Free High-speed WiFi</li>
                <li>• Private ensuite bathroom</li>
                <li>• Luggage storage before check-in</li>
              </ul>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-amber-400 shadow-xl relative overflow-hidden">
              <span className="absolute top-0 right-0 bg-amber-500 text-stone-950 font-mono text-[9px] font-bold px-3 py-1 rounded-bl-xl">POPULAR</span>
              <span className="text-[10px] font-mono font-bold text-amber-700 uppercase tracking-widest block mb-2">MID-RANGE LUXURY</span>
              <h3 className="text-lg font-bold text-stone-900 mb-1">Heritage Inn &amp; Onsen</h3>
              <p className="text-xs text-stone-500 mb-4">$90–$140 / night • Authentic regional architecture &amp; hot bath.</p>
              <ul className="text-xs font-semibold text-stone-700 space-y-1.5">
                <li>• Traditional breakfast included</li>
                <li>• Scenic mountain/city view</li>
                <li>• Complimentary bath robes</li>
              </ul>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-lg">
              <span className="text-[10px] font-mono font-bold text-amber-700 uppercase tracking-widest block mb-2">PREMIUM RESORT</span>
              <h3 className="text-lg font-bold text-stone-900 mb-1">5-Star Alpine Villa / Suite</h3>
              <p className="text-xs text-stone-500 mb-4">$220+ / night • Panoramic glass balcony &amp; concierge service.</p>
              <ul className="text-xs font-semibold text-stone-700 space-y-1.5">
                <li>• Gourmet dining on site</li>
                <li>• Private spa &amp; infinity pool</li>
                <li>• Private station shuttle</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 5: FOOD */}
        <section id="sec-food" className="pt-4 scroll-mt-28">
          <div className="flex items-center gap-2 mb-6">
            <Utensils className="w-5 h-5 text-amber-600" />
            <h2 className="text-2xl sm:text-3xl font-black text-stone-900 uppercase tracking-tight">
              Food &amp; Dining Guide
            </h2>
          </div>
          <div className="p-8 rounded-3xl bg-white border border-stone-200 shadow-xl grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-extrabold text-stone-900 mb-3">Street Eats &amp; Local Markets</h3>
              <p className="text-sm text-stone-600 leading-relaxed font-medium mb-4">
                Don't miss night food markets and family-run Izakayas / bistros. Average meal costs range between $8 and $18 per dish with complimentary tea.
              </p>
              <div className="space-y-2 font-semibold text-xs text-stone-800">
                <div className="p-3 rounded-xl bg-[#FAF9F6] border border-stone-200">🍜 Michelin Bib Gourmand Ramen / Noodle Bowls under $10</div>
                <div className="p-3 rounded-xl bg-[#FAF9F6] border border-stone-200">🍢 Night Market Skewers &amp; Local Seafood Stalls</div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-extrabold text-stone-900 mb-3">Dining Etiquette Tips</h3>
              <p className="text-sm text-stone-600 leading-relaxed font-medium mb-4">
                No tipping is expected or accepted in traditional restaurants. Always order at ticket machines when available for fast service.
              </p>
              <div className="space-y-2 font-semibold text-xs text-stone-800">
                <div className="p-3 rounded-xl bg-[#FAF9F6] border border-stone-200">🍵 Complimentary green tea or ice water provided automatically</div>
                <div className="p-3 rounded-xl bg-[#FAF9F6] border border-stone-200">💳 Tap-to-pay IC Card accepted at most quick-service spots</div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: TIPS */}
        <section id="sec-tips" className="pt-4 scroll-mt-28">
          <div className="flex items-center gap-2 mb-6">
            <Lightbulb className="w-5 h-5 text-amber-600" />
            <h2 className="text-2xl sm:text-3xl font-black text-stone-900 uppercase tracking-tight">
              Local Transport &amp; Survival Hacks
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-lg">
              <h3 className="text-base font-extrabold text-stone-900 mb-2">🚆 Rail Pass Optimization</h3>
              <p className="text-xs text-stone-600 leading-relaxed font-medium">
                {destination.transportTip} Always book seat reservations early for peak travel hours.
              </p>
            </div>
            <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-lg">
              <h3 className="text-base font-extrabold text-stone-900 mb-2">📲 eSIM &amp; Navigation Maps</h3>
              <p className="text-xs text-stone-600 leading-relaxed font-medium">
                Download Airalo eSIM before departure for unlimited 5G data ($12/10 days). Use Naver Map or Google Maps for live train schedules.
              </p>
            </div>
          </div>
        </section>

        {/* Section 7: PACK */}
        <section id="sec-pack" className="pt-4 scroll-mt-28">
          <div className="flex items-center gap-2 mb-6">
            <Briefcase className="w-5 h-5 text-amber-600" />
            <h2 className="text-2xl sm:text-3xl font-black text-stone-900 uppercase tracking-tight">
              Packing Checklist
            </h2>
          </div>
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200 shadow-xl grid grid-cols-2 sm:grid-cols-4 gap-4 font-bold text-xs text-stone-800">
            <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-stone-200">👟 Comfortable Walking Shoes</div>
            <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-stone-200">🔌 Universal Travel Adapter</div>
            <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-stone-200">🧥 Light Layering Jacket</div>
            <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-stone-200">🔋 10,000mAh Power Bank</div>
          </div>
        </section>

        {/* Section 8: FOLIAGE */}
        <section id="sec-foliage" className="pt-4 scroll-mt-28">
          <div className="flex items-center gap-2 mb-6">
            <Leaf className="w-5 h-5 text-amber-600" />
            <h2 className="text-2xl sm:text-3xl font-black text-stone-900 uppercase tracking-tight">
              Season &amp; Foliage Guide
            </h2>
          </div>
          <div className="p-6 sm:p-8 rounded-3xl bg-amber-500/10 border border-amber-300 text-stone-900">
            <h3 className="text-lg font-bold mb-2">Best Visiting Window</h3>
            <p className="text-sm font-medium leading-relaxed">
              {destination.bestTimeToVisit}. Expect ideal temperatures between 14°C and 22°C with clear mountain visibility and vibrant autumn leaves / spring blooms.
            </p>
          </div>
        </section>

        {/* Section 9: VISA */}
        <section id="sec-visa" className="pt-4 scroll-mt-28">
          <div className="flex items-center gap-2 mb-6">
            <FileText className="w-5 h-5 text-amber-600" />
            <h2 className="text-2xl sm:text-3xl font-black text-stone-900 uppercase tracking-tight">
              Visa &amp; Entry Requirements
            </h2>
          </div>
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200 shadow-xl text-xs font-semibold text-stone-700 space-y-3">
            <p className="text-sm font-bold text-stone-900">Visa-Free Entry for 70+ Passport Holder Nationalities (up to 90 Days).</p>
            <p>• Ensure passport has at least 6 months validity remaining.</p>
            <p>• Fill out digital customs declaration online prior to arrival for express airport clearance.</p>
          </div>
        </section>

        {/* Section 10: BUDGET */}
        <section id="sec-budget" className="pt-4 scroll-mt-28">
          <div className="flex items-center gap-2 mb-6">
            <Calculator className="w-5 h-5 text-amber-600" />
            <h2 className="text-2xl sm:text-3xl font-black text-stone-900 uppercase tracking-tight">
              Honest Budget Breakdown
            </h2>
          </div>
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xl">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-stone-200">
              <div>
                <h3 className="text-2xl font-bold text-stone-900">Itemized Cost Estimate</h3>
                <p className="text-xs text-stone-500 font-medium mt-1">Verified on-location expenses per traveler.</p>
              </div>
              <div className="text-right">
                <div className="text-[10px] font-mono font-bold text-stone-400 uppercase tracking-widest">Total Estimated Budget</div>
                <div className="text-2xl font-black text-emerald-700 font-mono">{destination.estimatedBudget}</div>
              </div>
            </div>

            <div className="divide-y divide-stone-100">
              {destination.budgetItems.map((bItem, idx) => (
                <div key={idx} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <div className="font-extrabold text-sm text-stone-900">{bItem.category}</div>
                    <div className="text-xs text-stone-500 font-medium">{bItem.notes}</div>
                  </div>
                  <div className="font-extrabold text-base text-emerald-700 font-mono shrink-0">{bItem.amount}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Next Destination Footer Navigation */}
        <div className="mt-16 pt-8 border-t border-stone-300 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 rounded-2xl overflow-hidden shadow-md shrink-0">
              <Image src={nextDestination.image} alt={nextDestination.name} fill className="object-cover" />
            </div>
            <div>
              <div className="text-[10px] font-mono font-bold text-stone-400 uppercase tracking-widest">Up Next</div>
              <div className="font-extrabold text-base text-stone-900">{nextDestination.name}</div>
            </div>
          </div>

          <Link
            href={`/destinations/${nextDestination.slug}`}
            className="px-6 py-3 rounded-full bg-[#121316] text-white font-bold text-xs uppercase tracking-widest hover:bg-stone-800 transition-all shadow-md flex items-center gap-2"
          >
            <span>Explore {nextDestination.countryTitle}</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </main>

      {/* Video Lightbox Modal */}
      {isVideoOpen && destination.heroVideoUrl && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="relative w-full max-w-4xl bg-black rounded-3xl overflow-hidden shadow-2xl border border-stone-800 aspect-video">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <iframe
              src={destination.heroVideoUrl}
              title={destination.name}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* Trip Inquiry Modal */}
      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        defaultDestination={destination.countryTitle}
      />
    </div>
  );
}
