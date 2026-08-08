'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Phone, 
  Globe, 
  Mail, 
  Sparkles, 
  Camera, 
  Share2, 
  Send, 
  MessageCircle 
} from 'lucide-react';
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
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Outer Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl bg-[#0d0d0d] text-white rounded-[32px] overflow-hidden shadow-2xl z-10 border border-stone-800 p-4 sm:p-6"
        >
          {/* Top Header Navigation */}
          <div className="flex items-center justify-between pb-3 px-2 border-b border-stone-800/60 mb-4">
            <div className="flex-1 text-center font-mono text-xs tracking-[0.3em] uppercase text-stone-300 font-medium">
              FLIGHTS &nbsp;•&nbsp; COMPARE &nbsp;•&nbsp; HOTELS
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Top Image Banner */}
          <div className="relative h-64 sm:h-80 w-full rounded-t-[28px] overflow-hidden">
            <Image
              src={pass.image}
              alt={pass.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Main White Content Card */}
          <div className="bg-[#f2f2f2] text-stone-900 rounded-b-[28px] rounded-tl-[40px] p-6 sm:p-8 -mt-2 relative z-10 flex flex-col justify-between">
            <div className="grid grid-cols-12 gap-6">
              
              {/* Left Column: Details */}
              <div className="col-span-8 flex flex-col justify-between space-y-6">
                <div>
                  <h1 className="text-5xl sm:text-6xl font-black tracking-tight text-black mb-3">
                    {pass.name}
                  </h1>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-medium">
                    {pass.itinerarySummary || "Discover the perfect blend of tradition and innovation in a land like no other."}
                  </p>
                </div>

                <hr className="border-stone-300" />

                <div>
                  <h3 className="font-extrabold text-sm uppercase tracking-wider text-black mb-1">
                    VISIT {pass.name.toUpperCase()}
                  </h3>
                  <p className="text-xs font-bold text-stone-800 mb-2">
                    Timeless. Unforgettable. Yours to explore.
                  </p>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    From ancient temples to modern skyscrapers, discover the beauty, culture, and flavors that make {pass.name} unforgettable.
                  </p>
                </div>
              </div>

              {/* Right Column: Vertical Typography Accent */}
              <div className="col-span-4 border-l border-stone-300 pl-4 flex flex-col items-center justify-between">
                {/* Sparkle Icon */}
                <Sparkles className="w-6 h-6 text-black fill-black" />

                {/* Vertical Japanese/Category Text */}
                <div className="flex items-center gap-4 my-auto py-4">
                  <span className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black [writing-mode:vertical-rl] rotate-180">
                    City Tour
                  </span>
                  <span className="text-xs font-bold text-stone-500 [writing-mode:vertical-rl] rotate-180 tracking-widest">
                    市内ツアー
                  </span>
                  <div className="flex flex-col gap-1 items-center">
                    <span className="w-1.5 h-1.5 bg-black rounded-full" />
                    <span className="w-1.5 h-1.5 bg-black rounded-full" />
                    <span className="w-1.5 h-1.5 bg-black rounded-full" />
                  </div>
                  <span className="text-xs text-stone-400 [writing-mode:vertical-rl] rotate-180 tracking-wider">
                    日本を訪問
                  </span>
                </div>

                {/* Social Icons */}
                <div className="flex items-center gap-2 text-stone-800">
                  <Camera className="w-4 h-4 cursor-pointer hover:opacity-75 transition-opacity" />
                  <Share2 className="w-4 h-4 cursor-pointer hover:opacity-75 transition-opacity" />
                  <Send className="w-4 h-4 cursor-pointer hover:opacity-75 transition-opacity" />
                  <MessageCircle className="w-4 h-4 cursor-pointer hover:opacity-75 transition-opacity" />
                </div>
              </div>
            </div>

            {/* Inner Card Footer */}
            <div className="mt-8 pt-4 border-t border-stone-300 flex items-center justify-between text-xs font-semibold text-stone-800">
              <span className="font-bold text-stone-900">2026</span>
              <button 
                onClick={() => {
                  onClose();
                  onPlanTrip(pass.name);
                }}
                className="hover:underline tracking-wide font-bold"
              >
                Let's Go. Explore {pass.name}.
              </button>
              <span className="text-stone-500 font-mono">travoaid.com</span>
            </div>
          </div>

          {/* Modal Bottom Footer Bar */}
          <div className="mt-4 pt-2 flex flex-wrap items-center justify-center gap-6 text-[11px] text-stone-400 font-mono">
            <div className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5" />
              <span>+1 (844) 551-9200</span>
            </div>
            <div className="hidden sm:block text-stone-700">|</div>
            <div className="flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5" />
              <span>travoaid.com</span>
            </div>
            <div className="hidden sm:block text-stone-700">|</div>
            <div className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5" />
              <span>travoaid@gmail.com</span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}