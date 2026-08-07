'use client';

import { useState } from 'react';
import Preloader from '@/components/Preloader';
import Header from '@/components/Header';
import HeroMatrix from '@/components/HeroMatrix';
import AboutSection from '@/components/AboutSection';
import Destinations from '@/components/Destinations';
import FilmReel from '@/components/FilmReel';
import Footer from '@/components/Footer';
import InquiryModal from '@/components/InquiryModal';

export default function Home() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [inquiryDestination, setInquiryDestination] = useState('Japan');

  const handleOpenInquiry = (destName?: string) => {
    if (destName) {
      setInquiryDestination(destName);
    }
    setIsInquiryOpen(true);
  };

  return (
    <main className="relative min-h-screen bg-[#FAF9F6] text-[#121316] overflow-x-hidden selection:bg-amber-200 selection:text-amber-950">
      {/* Brand Preloader */}
      <Preloader />

      {/* Floating Glass Pill Navigation Bar */}
      <Header onOpenInquiry={() => handleOpenInquiry()} />

      {/* Hero Section ("First Frame") with 3D Photo Matrix */}
      <HeroMatrix />

      {/* About Section with Dynamic Color Shifting & Story Tabs */}
      <AboutSection />

      {/* Destinations Section with Flight Boarding Passes */}
      <Destinations onPlanTrip={(dest) => handleOpenInquiry(dest)} />

      {/* Film Reel Section with 4K Gallery */}
      <FilmReel />

      {/* Site Footer */}
      <Footer />

      {/* Interactive Travel Inquiry Modal */}
      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        defaultDestination={inquiryDestination}
      />
    </main>
  );
}
