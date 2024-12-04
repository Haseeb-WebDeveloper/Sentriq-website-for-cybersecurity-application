'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/animations';

function PricingHero() {
  return (
    <section className=" relative overflow-hidden ">
      <div className=" py-16 container mx-auto px-4 bg-foreground rounded-lg ">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-background">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-background">
            Choose the perfect plan for your security needs. All plans include our core features to keep your business protected.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default PricingHero; 