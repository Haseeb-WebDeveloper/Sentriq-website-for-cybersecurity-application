'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const clients = [
  { name: 'Company 1', logo: '/comapny-1.png' },
  { name: 'Company 2', logo: '/comapny-2.png' },
  { name: 'Company 3', logo: '/comapny-3.png' },
  { name: 'Company 4', logo: '/comapny-4.png' },
  { name: 'Company 5', logo: '/comapny-5.png' },
  { name: 'Company 6', logo: '/comapny-6.png' },
  { name: 'Company 7', logo: '/comapny-7.png' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

function OurClients() {
  return (
    <section className="py-16 overflow-hidden bg-background/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground"
          >
            Trusted by leading companies worldwide
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Gradient Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background/50 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background/50 to-transparent z-10" />

          {/* Scrolling Container */}
          <div className="overflow-hidden -mx-4">
            <div className="flex justify-center items-center gap-12 px-4 min-w-full flex-nowrap">
              {clients.map((client, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative flex-shrink-0 w-32 h-16 group"
                >
                  <div className="absolute inset-0 rounded-xl bg-foreground/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="w-full h-full flex items-center justify-center">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={120}
                      height={60}
                      className="object-contain p-2 transition-all duration-300 
                        grayscale hover:grayscale-0 opacity-70 group-hover:opacity-100
                        group-hover:scale-110"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Optional: Add subtle divider */}
        <div className="mt-16 border-t border-border/40 mx-auto max-w-2xl" />
      </div>
    </section>
  );
}

export default OurClients;
