'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Lightbulb, Heart } from 'lucide-react';
import { fadeIn } from '@/lib/animations';

const values = [
  {
    icon: Shield,
    title: 'Security First',
    description: 'We prioritize the security and privacy of our users above all else.'
  },
  {
    icon: Users,
    title: 'User-Centric',
    description: 'Everything we build is designed with our user&apos;s needs in mind.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We continuously push the boundaries of what&apos;s possible with AI.'
  },
  {
    icon: Heart,
    title: 'Trust & Integrity',
    description: 'We maintain the highest standards of ethical conduct in all we do.'
  }
];

function Values() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Values</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            These core values guide everything we do at SentrIQ
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="p-6 rounded-xl border border-border/50 bg-background/50 hover:border-primary/20 transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <value.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Values; 