'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/animations';

function AboutHero() {
  return (
    <section className="px-4 relative overflow-hidden">
      <div className="py-16 container mx-auto bg-foreground rounded-lg">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-background">
            Revolutionizing Cybersecurity with AI
          </h1>
          <p className="text-xl text-background">
            We're on a mission to make enterprise-grade security accessible to everyone through 
            the power of artificial intelligence.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutHero; 