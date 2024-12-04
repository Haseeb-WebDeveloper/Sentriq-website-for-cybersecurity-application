'use client';

import React from 'react';
import PricingHero from '@/components/layout/pricing/hero';
import Pricing from '@/components/layout/pricing/pricing';
import CommonFeatures from '@/components/layout/pricing/common-features';
import FAQPreview from '@/components/layout/pricing/faq-preview';
import PricingCTA from '@/components/layout/pricing/cta';

function PricingPage() {
  return (
    <main className="pt-20">
      <PricingHero />
      <Pricing />
      <CommonFeatures />
      <FAQPreview />
      <PricingCTA />
    </main>
  );
}

export default PricingPage;