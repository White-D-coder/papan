'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Sparkles, CheckCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultDestination?: string;
}

export default function InquiryModal({ isOpen, onClose, defaultDestination = 'Japan' }: InquiryModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [destination, setDestination] = useState(defaultDestination);
  const [budget, setBudget] = useState('Standard ($1,500 - $2,500)');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-stone-900/60 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-xl bg-[#FAF9F6] rounded-3xl p-6 sm:p-8 shadow-2xl z-10 border border-stone-200 text-stone-900 overflow-hidden"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-stone-200/80 text-stone-700 hover:bg-stone-300 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {!isSubmitted ? (
            <div>
              <div className="flex items-center gap-2 text-amber-700 font-mono-code text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4" />
                <span>CUSTOM ITINERARY BUILDER</span>
              </div>
              <h3 className="font-serif-editorial italic text-3xl sm:text-4xl font-normal leading-tight">
                Plan Your Trip with Purva
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm mt-1 mb-6">
                Tell us where you want to travel, and we’ll help design an authentic day-by-day route within your budget.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold font-mono-code text-stone-700 uppercase mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Priya Sharma"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold font-mono-code text-stone-700 uppercase mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. priya@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold font-mono-code text-stone-700 uppercase mb-1">
                      Destination
                    </label>
                    <select
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium"
                    >
                      <option value="Japan">Japan (Tokyo, Kyoto, Osaka)</option>
                      <option value="Switzerland">Switzerland (Alps, Rail)</option>
                      <option value="South Korea">South Korea (Seoul, Jeju)</option>
                      <option value="Austria & Germany">Austria &amp; Germany</option>
                      <option value="Custom Multi-Country">Custom Multi-Country</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold font-mono-code text-stone-700 uppercase mb-1">
                      Budget Per Person
                    </label>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium"
                    >
                      <option value="Backpacker ($1,000 - $1,500)">Backpacker ($1,000 - $1,500)</option>
                      <option value="Standard ($1,500 - $2,500)">Standard ($1,500 - $2,500)</option>
                      <option value="Luxury ($2,500+)">Luxury ($2,500+)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold font-mono-code text-stone-700 uppercase mb-1">
                    Special Requests or Questions
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us your travel dates, group size, or favorite activities..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-[#121316] text-[#FAF9F6] font-bold text-xs uppercase tracking-widest hover:bg-stone-800 transition-all shadow-lg hover:scale-[1.01] active:scale-95 flex items-center justify-center gap-2 mt-2"
                >
                  <Send className="w-4 h-4 text-amber-400" />
                  <span>Send Itinerary Inquiry</span>
                </button>
              </form>
            </div>
          ) : (
            <div className="py-8 text-center flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-lg">
                <CheckCircle className="w-8 h-8" />
              </div>

              <h3 className="font-serif-editorial italic text-4xl font-normal text-stone-900">
                Inquiry Received!
              </h3>

              <p className="text-stone-600 text-sm max-w-sm">
                Thank you <strong className="text-stone-900">{name}</strong>! Purva will review your inquiry for <strong className="text-stone-900">{destination}</strong> and reply back via email within 24 hours.
              </p>

              <button
                onClick={handleReset}
                className="mt-4 px-6 py-2.5 rounded-full bg-stone-900 text-white font-bold text-xs uppercase tracking-wider hover:bg-stone-800 transition-all shadow-md"
              >
                Done
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
