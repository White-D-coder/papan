'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Plane, Calendar, DollarSign, MapPin, Film, CheckCircle2, Clock } from 'lucide-react';
import Image from 'next/image';

export interface DestinationPass {
  id: string;
  name: string;
  region: string;
  status: 'filmed' | 'boarding' | 'scheduled';
  statusLabel: string;
  routeFrom: { code: string; city: string };
  routeTo: { code: string; city: string };
  date: string;
  gate: string;
  seat: string;
  classType: string;
  duration: string;
  estimatedBudget: string;
  image: string;
  highlights: string[];
  itinerarySummary: string;
}

interface BoardingPassModalProps {
  pass: DestinationPass | null;
  onClose: () => void;
  onPlanTrip: (destinationName: string) => void;
}

export default function BoardingPassModal({ pass, onClose, onPlanTrip }: BoardingPassModalProps) {
  if (!pass) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-stone-900/60 backdrop-blur-md"
        />

        {/* Modal Ticket Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl bg-[#FAF9F6] rounded-3xl overflow-hidden shadow-2xl z-10 border border-stone-200"
        >
          {/* Header Image Banner */}
          <div className="relative h-64 sm:h-72 w-full overflow-hidden">
            <Image
              src={pass.image}
              alt={pass.name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/30 to-transparent" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white backdrop-blur-md hover:bg-black/70 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Floating Title & Route */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
              <div>
                <span className="font-mono-code text-xs tracking-widest text-amber-300 font-semibold uppercase">
                  {pass.region} • BOARDING PASS #{pass.id.toUpperCase()}
                </span>
                <h2 className="font-serif-editorial italic text-4xl sm:text-5xl font-normal leading-tight">
                  {pass.name}
                </h2>
              </div>

              {/* Route Badge */}
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/20">
                <div className="text-center">
                  <div className="font-mono-code font-bold text-lg">{pass.routeFrom.code}</div>
                  <div className="text-[9px] font-mono-code text-stone-300">{pass.routeFrom.city}</div>
                </div>
                <Plane className="w-4 h-4 text-amber-400 rotate-90 sm:rotate-0" />
                <div className="text-center">
                  <div className="font-mono-code font-bold text-lg">{pass.routeTo.code}</div>
                  <div className="text-[9px] font-mono-code text-stone-300">{pass.routeTo.city}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Ticket Details Body */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-stone-100 border border-stone-200/80">
              <div>
                <span className="font-mono-code text-[10px] uppercase text-stone-500 font-semibold flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-stone-700" /> Travel Date
                </span>
                <p className="font-mono-code text-sm font-bold text-stone-900 mt-1">{pass.date}</p>
              </div>

              <div>
                <span className="font-mono-code text-[10px] uppercase text-stone-500 font-semibold flex items-center gap-1">
                  <Clock className="w-3 h-3 text-stone-700" /> Duration
                </span>
                <p className="font-mono-code text-sm font-bold text-stone-900 mt-1">{pass.duration}</p>
              </div>

              <div>
                <span className="font-mono-code text-[10px] uppercase text-stone-500 font-semibold flex items-center gap-1">
                  <DollarSign className="w-3 h-3 text-stone-700" /> Est. Budget
                </span>
                <p className="font-mono-code text-sm font-bold text-emerald-700 mt-1">{pass.estimatedBudget}</p>
              </div>

              <div>
                <span className="font-mono-code text-[10px] uppercase text-stone-500 font-semibold flex items-center gap-1">
                  Gate &amp; Seat
                </span>
                <p className="font-mono-code text-sm font-bold text-stone-900 mt-1">
                  GATE {pass.gate} / {pass.seat}
                </p>
              </div>
            </div>

            {/* Overview & Highlights */}
            <div>
              <h3 className="font-bold text-base text-stone-900 mb-2">Itinerary Overview</h3>
              <p className="text-stone-600 text-sm leading-relaxed">{pass.itinerarySummary}</p>
            </div>

            {/* Key Highlights list */}
            <div>
              <h3 className="font-bold text-base text-stone-900 mb-3">Featured Highlights</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {pass.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-stone-200 text-stone-800 text-xs font-semibold"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-stone-500 font-mono-code text-xs">
                <Film className="w-4 h-4 text-stone-700" />
                <span>Film Guide Available in 4K UHD</span>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-full border border-stone-300 text-stone-700 font-bold text-xs uppercase tracking-wider hover:bg-stone-100 transition-colors w-1/2 sm:w-auto"
                >
                  Close
                </button>

                <button
                  onClick={() => {
                    onClose();
                    onPlanTrip(pass.name);
                  }}
                  className="px-6 py-2.5 rounded-full bg-[#121316] text-[#FAF9F6] font-bold text-xs uppercase tracking-widest hover:bg-stone-800 transition-all shadow-md hover:scale-105 active:scale-95 w-1/2 sm:w-auto"
                >
                  Get Full Itinerary
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
