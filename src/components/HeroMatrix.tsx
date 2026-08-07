'use client';

import React from 'react';
import { HeroParallax } from './ui/hero-parallax';

export const travelProducts = [
  {
    title: 'Nara Deer Park • Autumn',
    link: '#destinations',
    thumbnail: '/images/japan-nara.jpg',
    location: 'JAPAN',
  },
  {
    title: 'Landwasser Viaduct Rail',
    link: '#destinations',
    thumbnail: '/images/switzerland.jpg',
    location: 'SWITZERLAND',
  },
  {
    title: 'Jeju Volcanic Coast',
    link: '#destinations',
    thumbnail: '/images/south-korea.jpg',
    location: 'SOUTH KOREA',
  },
  {
    title: 'Hallstatt Lakeside Chalets',
    link: '#destinations',
    thumbnail: '/images/austria.jpg',
    location: 'AUSTRIA',
  },
  {
    title: 'Kyoto Lookout Sunset',
    link: '#destinations',
    thumbnail: '/images/couple-portrait.jpg',
    location: 'JAPAN',
  },

  {
    title: 'Zermatt Matterhorn Peak',
    link: '#destinations',
    thumbnail: '/images/switzerland.jpg',
    location: 'SWITZERLAND',
  },
  {
    title: 'Seongsan Sunrise Peak',
    link: '#destinations',
    thumbnail: '/images/south-korea.jpg',
    location: 'SOUTH KOREA',
  },
  {
    title: 'Salzburg Sound of Music',
    link: '#destinations',
    thumbnail: '/images/austria.jpg',
    location: 'AUSTRIA',
  },
  {
    title: 'Fuji Hakone Onsen Stay',
    link: '#destinations',
    thumbnail: '/images/japan-nara.jpg',
    location: 'JAPAN',
  },
  {
    title: 'Grindelwald First Cliff Walk',
    link: '#destinations',
    thumbnail: '/images/switzerland.jpg',
    location: 'SWITZERLAND',
  },

  {
    title: 'Seoul Hanok Village',
    link: '#destinations',
    thumbnail: '/images/south-korea.jpg',
    location: 'SOUTH KOREA',
  },
  {
    title: 'Neuschwanstein Bavarian Castle',
    link: '#destinations',
    thumbnail: '/images/austria.jpg',
    location: 'GERMANY',
  },
  {
    title: 'Tokyo Shibuya Neon Nights',
    link: '#destinations',
    thumbnail: '/images/couple-portrait.jpg',
    location: 'JAPAN',
  },
  {
    title: 'Lake Brienz Kayak',
    link: '#destinations',
    thumbnail: '/images/switzerland.jpg',
    location: 'SWITZERLAND',
  },
  {
    title: 'Vienna Imperial Palaces',
    link: '#destinations',
    thumbnail: '/images/austria.jpg',
    location: 'AUSTRIA',
  },
];

interface HeroMatrixProps {
  onOpenInquiry?: () => void;
}

export default function HeroMatrix({ onOpenInquiry }: HeroMatrixProps) {
  return (
    <section id="first-frame" className="relative w-full">
      <HeroParallax products={travelProducts} onOpenInquiry={onOpenInquiry} />
    </section>
  );
}
