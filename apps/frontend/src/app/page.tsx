'use client';
import React from 'react';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

import Hero from '@/components/hero/Hero';
import Help from '@/components/help/HelpSection';
import Services from '@/components/services/Services';
import WhyUs from '@/components/whyus/WhyUs';
import FeaturedEvents from '@/components/events/FeaturedEvents';

export default function HomePage() {
  // Temporary mock data
  const mockEvents = [
    {
      id: 1,
      title: 'Hackathon 2025',
      date: '2025-06-10',
      location: 'Kathmandu, Nepal',
      description: '24-hour coding competition focused on sustainability.',
    },
    {
      id: 2,
      title: 'AI Summit',
      date: '2025-07-15',
      location: 'Virtual',
      description: 'Explore the future of AI and machine learning.',
    },
  ];

  return (
    <>
      <Navbar />
      <main>
        <Hero />
                <FeaturedEvents events={mockEvents} />

        <Services />
        <WhyUs />
        <Help />
      </main>
      <Footer />
    </>
  );
}
