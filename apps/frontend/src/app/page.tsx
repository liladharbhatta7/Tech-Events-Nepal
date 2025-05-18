'use client';
import React from 'react';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

import Hero from '@/components/hero/Hero';
import Help from '@/components/help/HelpSection';
import Services from '@/components/services/Services';
import WhyUs from '@/components/whyus/WhyUs';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Help />
        {/* Uncomment the following line to include FeaturedEvents */}
        {/* <FeaturedEvents events={[]} /> */}
      </main>
      <Footer />
    </>
  );
}
