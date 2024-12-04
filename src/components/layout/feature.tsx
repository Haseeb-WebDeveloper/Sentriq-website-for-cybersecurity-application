'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Brain, Zap, Lock, Bell, Fingerprint } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: "Real-time Protection",
    description: "Advanced threat detection and prevention system that works 24/7 to keep your devices secure."
  },
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description: "Smart security analysis using cutting-edge artificial intelligence to predict and prevent threats."
  },
  {
    icon: Zap,
    title: "Instant Response",
    description: "Lightning-fast automated responses to security threats, ensuring immediate protection."
  },
  {
    icon: Lock,
    title: "Privacy First",
    description: "Your data privacy is our priority. End-to-end encryption and secure storage for all your information."
  },
  {
    icon: Bell,
    title: "Smart Alerts",
    description: "Intelligent notification system that alerts you only when something needs your attention."
  },
  {
    icon: Fingerprint,
    title: "Biometric Security",
    description: "Advanced biometric authentication for an extra layer of security and convenience."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

function Feature() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 bg-grid-primary/[0.02] -z-10" />
      <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-primary/[0.02] to-transparent -z-10" />
      <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-primary/[0.02] to-transparent -z-10" />

      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-sm font-medium text-primary mb-2"
          >
            Features
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
          >
            Everything you need to stay secure
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-muted-foreground text-lg"
          >
            Comprehensive security features powered by artificial intelligence
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-background/50 border border-border/50 rounded-xl p-6 hover:border-primary/20 transition-colors"
            >
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
              
              <div className="relative">
                {/* Icon */}
                <div className="mb-4 inline-block">
                  <div className="bg-primary/10 rounded-lg p-3 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Feature;