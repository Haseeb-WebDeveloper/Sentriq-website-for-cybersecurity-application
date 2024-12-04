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
//   { name: 'Company 6', logo: '/comapny-6.png' },
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
    <section className="py-12 sm:py-16 overflow-hidden bg-background/50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
            Trusted by leading companies worldwide
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative max-w-7xl mx-auto"
        >
          {/* Gradient Edges - Hidden on Mobile */}
          <div className="hidden sm:block">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
          </div>

          {/* Scrolling Container */}
          <div className="relative">
            {/* Mobile Scroll Indicator */}
            <div className="sm:hidden absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-muted-foreground">
              Scroll to see more →
            </div>
            
            {/* Logos Container */}
            <div className="overflow-x-auto pb-4 sm:pb-0 hide-scrollbar">
              <div className="flex items-center gap-8 sm:gap-12 px-4 min-w-max sm:justify-center">
                {clients.map((client, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="relative flex-shrink-0 group"
                  >
                    <div className="w-24 h-12 sm:w-32 sm:h-16 relative">
                      <div className="absolute inset-0 rounded-xl bg-foreground/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="w-full h-full flex items-center justify-center">
                        <Image
                          src={client.logo}
                          alt={client.name}
                          width={120}
                          height={60}
                          className="object-contain p-2 transition-all duration-300 
                            grayscale hover:grayscale-0 opacity-70 group-hover:opacity-100
                            group-hover:scale-110 max-w-[100px] sm:max-w-[120px]"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Optional Divider - Hidden on Mobile */}
        <div className="hidden sm:block">
          <div className="mt-12 sm:mt-16 border-t border-border/90 mx-auto max-w-2xl" />
        </div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx global>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}

export default OurClients;
