"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Preloader from "@/components/Preloader";
import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorytellerBio";
import TourShowcase from "@/components/TourShowcase";
import TheReel from "@/components/TheReel";
import EnquiryModal from "@/components/LeadMagnetModal";
import Footer from "@/components/Footer";
import { useLenis } from "@/hooks/useLenis";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  useLenis();

  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalDest, setModalDest] = useState("Japan");

  const openModal = (dest = "Japan") => {
    setModalDest(dest);
    setModalOpen(true);
  };

  return (
    <main>
      <AnimatePresence>
        {loading && <Preloader key="preloader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      <Navigation onBook={() => openModal()} />
      <HeroSection onBook={() => openModal()} />
      <StorySection />
      <TourShowcase onBook={(d) => openModal(d)} />
      <TheReel />
      <Footer onBook={() => openModal()} />
      <EnquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} destination={modalDest} />
    </main>
  );
}
