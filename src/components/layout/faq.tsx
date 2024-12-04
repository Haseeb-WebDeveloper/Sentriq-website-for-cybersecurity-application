'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from 'next/link';

const faqs = [
  {
    question: "How can SentrIQ help my business with cybersecurity?",
    answer: "SentrIQ acts as your AI-powered cybersecurity consultant, providing tailored guidance and recommendations based on best practices for small and medium-sized businesses. It helps you proactively address risks and improve your security posture without needing in-house expertise."
  },
  {
    question: "Does SentrIQ help with compliance requirements?",
    answer: "Yes, SentrIQ assists SMBs in meeting industry compliance standards like HIPAA, SOC 2, and NIST. It provides tools and insights to keep you audit-ready and aligned with regulatory requirements, making compliance a seamless part of your cybersecurity strategy."
  },
  {
    question: "What type of cybersecurity guidance can I expect from SentrIQ?",
    answer: "SentrIQ offers practical, step-by-step advice on implementing essential cybersecurity measures, such as multi-factor authentication, data encryption, and secure access policies. It simplifies complex concepts, so even teams without technical backgrounds can strengthen their security."
  },
  {
    question: "How will I know if my cybersecurity posture is improving?",
    answer: "SentrIQ provides regular insights and updates on your cybersecurity health, helping you track your progress over time. It identifies areas of strength and where improvements are needed, so you always have a clear view of your business's security standing."
  },
  {
    question: "Can I get help from a human consultant if needed?",
    answer: "Absolutely! SentriQ offers escalation options to connect you with cybersecurity experts for more complex issues or questions. This ensures that you have direct access to experienced consultants when your business needs extra support."
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

function FAQ() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-foreground/[0.02]" />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-primary/[0.02] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Everything you need to know about SentrIQ and how it can help secure your business
            </p>
          </motion.div>

          {/* FAQ Items */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                >
                  <AccordionItem 
                    value={`item-${index}`} 
                    className="border border-border/50 rounded-lg mb-4 bg-background/50 overflow-hidden"
                  >
                    <AccordionTrigger className="px-6 hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6">
                      <div className="text-muted-foreground">
                        {faq.answer}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>

          {/* Contact Support */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-muted-foreground">
              Still have questions?{' '}
              <Link href="/contact" className="text-primary hover:underline font-medium cursor-pointer">
                Contact our support team
              </Link>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
