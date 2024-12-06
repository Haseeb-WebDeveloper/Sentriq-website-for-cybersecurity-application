'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/animations';

const stats = [
  { number: '10K+', label: 'Active Users' },
  { number: '99.9%', label: 'Threat Detection' },
  { number: '24/7', label: 'Support' },
  { number: '150+', label: 'Countries' },
];

function Stats() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Stats; 