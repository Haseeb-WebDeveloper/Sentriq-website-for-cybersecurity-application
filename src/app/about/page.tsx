'use client';

import React from 'react';
import AboutHero from '@/components/layout/about/hero';
import AboutUs from '@/components/layout/about/about_us';
import Values from '@/components/layout/about/values';
import Stats from '@/components/layout/about/stats';

function AboutPage() {
  return (
    <main className="pt-20">
      <AboutHero />
      <AboutUs />
      <Values />
      <Stats />
    </main>
  );
}

export default AboutPage;
