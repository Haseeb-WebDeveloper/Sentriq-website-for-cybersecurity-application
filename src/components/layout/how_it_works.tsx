'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Shield, LineChart, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: "Ask & Receive",
    description: "Simply ask questions about your security challenges and receive instant, tailored guidance from our AI consultant."
  },
  {
    icon: Shield,
    title: "Get Expert Insights",
    description: "Receive AI-powered recommendations validated by certified cybersecurity experts for your specific needs."
  },
  {
    icon: LineChart,
    title: "Track Progress",
    description: "Monitor your security posture and improvements through our intuitive dashboard."
  },
  {
    icon: CheckCircle,
    title: "Stay Compliant",
    description: "Maintain compliance with frameworks like SOC 2 and HIPAA with continuous monitoring and guidance."
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
      staggerChildren: 0.2
    }
  }
};

function HowItWorks() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-foreground/[0.02]" />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-primary/[0.02] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              How SentrIQ Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              SentrIQ is designed to be your always-available cybersecurity consultant. Get clear, actionable guidance tailored to your business needs, all in one convenient platform.
            </p>
          </motion.div>

          {/* Steps */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="relative"
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-[60%] w-[calc(100%-20%)] h-[2px] bg-gradient-to-r from-primary/20 to-transparent -z-10" />
                )}
                
                {/* Step Card */}
                <div className="relative p-6 rounded-2xl border border-border/50 bg-background/50 hover:border-primary/20 transition-all group">
                  {/* Icon */}
                  <div className="mb-6 inline-block">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <step.icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="inline-block p-[1px] rounded-xl bg-gradient-to-r from-primary/5  to-primary/10">
              <div className="px-8 py-4 rounded-xl backdrop-blur-sm">
                <p className="text-lg text-muted-foreground">
                  Ready to strengthen your cybersecurity?{' '}
                  <span className="text-foreground font-medium">
                    Get started with SentrIQ today.
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks; 