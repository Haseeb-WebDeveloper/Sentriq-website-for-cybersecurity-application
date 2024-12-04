'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/animations';

const faqItems = [
  {
    question: "Can I change plans later?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate your billing."
  },
  {
    question: "Is there a free trial?",
    answer: "Yes, all plans come with a 30-day free trial. No credit card required to start."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and offer enterprise billing options for larger organizations."
  }
];

function FAQPreview() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground mb-8">
            Have questions about our pricing? Find quick answers to common questions below.
          </p>
          <div className="space-y-6 text-left">
            {faqItems.map((item, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl border border-border/50 bg-background/50 hover:border-primary/20 transition-colors"
              >
                <h3 className="font-semibold mb-2">{item.question}</h3>
                <p className="text-muted-foreground">{item.answer}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default FAQPreview; 