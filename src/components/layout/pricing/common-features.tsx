'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { fadeIn } from '@/lib/animations';

const commonFeatures = [
  "Real-time threat monitoring",
  "AI-powered security analysis",
  "24/7 automated scanning",
  "Security health dashboard",
  "Email notifications",
  "Regular security reports"
];

function CommonFeatures() {
  return (
    <section className="py-20 bg-foreground/[0.02]">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Included in All Plans
            </h2>
            <p className="text-muted-foreground">
              Every SentrIQ plan comes with these essential security features
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {commonFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-lg border border-border/50 bg-background hover:border-primary/20 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CommonFeatures; 