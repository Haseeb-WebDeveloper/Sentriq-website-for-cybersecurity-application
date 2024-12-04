'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const comparisonData = [
  {
    feature: "AI-powered, expert-driven cybersecurity",
    description: "Tailored security solutions for your specific business needs",
    sentriq: true,
    others: false
  },
  {
    feature: "Proactive compliance support",
    description: "Stay audit-ready with continuous compliance monitoring",
    sentriq: true,
    others: false
  },
  {
    feature: "Affordable cyber consultants",
    description: "Expert support for complex security challenges",
    sentriq: true,
    others: false
  },
  {
    feature: "User-friendly design",
    description: "No IT team required - simple enough for everyone",
    sentriq: true,
    others: false
  },
  {
    feature: "Data-driven insights",
    description: "Track and improve your security health over time",
    sentriq: true,
    others: false
  },
  {
    feature: "Customized security advice",
    description: "Personalized recommendations, not one-size-fits-all solutions",
    sentriq: true,
    others: false
  }
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

function Comparison() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 " />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-primary/[0.02] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why Choose SentrIQ?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See how SentrIQ stands out from traditional cybersecurity solutions
            </p>
          </motion.div>

          {/* Comparison Table */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Table Header */}
            <div className="grid grid-cols-12 gap-4 mb-8 text-sm font-medium">
              <div className="col-span-7">Features</div>
              <div className="col-span-2 text-center">SentrIQ</div>
              <div className="col-span-3 text-center">Others</div>
            </div>

            {/* Table Body */}
            <div className="space-y-4">
              {comparisonData.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="grid grid-cols-12 gap-4 p-4 rounded-lg border border-border/50 bg-background/50 hover:border-primary/20 transition-colors"
                >
                  <div className="col-span-7">
                    <h3 className="font-medium mb-1">{item.feature}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                  <div className="col-span-2 flex justify-center items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div className="col-span-3 flex justify-center items-center">
                    <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                      <X className="w-5 h-5 text-destructive" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom CTA */}
            {/* <motion.div
              variants={fadeIn}
              className="mt-12 text-center"
            >
              <p className="text-muted-foreground mb-6">
                Experience the SentrIQ difference for yourself
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Start Free Trial
              </motion.button>
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Comparison;
