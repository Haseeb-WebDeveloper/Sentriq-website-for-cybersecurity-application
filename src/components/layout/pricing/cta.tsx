'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { fadeIn } from '@/lib/animations';

function PricingCTA() {
  return (
    <section className="py-20 bg-foreground/[0.02]">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of businesses that trust SentrIQ for their cybersecurity needs.
          </p>
          <div className="inline-block p-[1px] rounded-xl bg-gradient-to-r from-primary/5 to-primary/10">
            <div className="px-8 py-4 rounded-xl backdrop-blur-sm">
              <p className="text-lg text-muted-foreground">
                Questions about enterprise plans?{' '}
                <Link href="/contact" className="text-primary hover:underline font-medium">
                  Contact our sales team
                </Link>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default PricingCTA; 