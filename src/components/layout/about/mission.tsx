'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/animations';
import Image from 'next/image';
import { Shield, Target, Users, Zap } from 'lucide-react';

const missionPoints = [
  {
    icon: Shield,
    title: "Security Excellence",
    description: "Delivering enterprise-grade security solutions that are accessible to businesses of all sizes."
  },
  {
    icon: Target,
    title: "Innovation Focus",
    description: "Continuously advancing our AI capabilities to stay ahead of emerging cyber threats."
  },
  {
    icon: Users,
    title: "User Empowerment",
    description: "Making complex security concepts simple and manageable for every user."
  },
  {
    icon: Zap,
    title: "Proactive Protection",
    description: "Anticipating and preventing security threats before they become problems."
  }
];

function Mission() {
  return (
    <section className="py-20 bg-foreground/[0.02]">
      <div className="container mx-auto px-4">
        {/* Mission Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-muted-foreground">
            At SentrIQ, we believe that robust cybersecurity shouldn't be a luxury. 
            Our mission is to democratize access to enterprise-grade security through 
            innovative AI technology.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              {/* Background Decorations */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/10 blur-3xl rounded-[2rem]" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/5 rounded-2xl" />
              
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
                <Image
                  src="/software.png"
                  alt="Our Mission"
                  width={600}
                  height={400}
                  className="w-full object-cover"
                />
              </div>

              {/* Stats Badge */}
              <div className="absolute -bottom-6 -right-6 bg-background/95 backdrop-blur-sm p-4 rounded-xl border border-border shadow-lg">
                <div className="text-2xl font-bold text-primary mb-1">10K+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="order-1 lg:order-2"
          >
            <div className="space-y-8">
              {/* Mission Points */}
              {missionPoints.map((point, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="flex gap-4 group"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <point.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{point.title}</h3>
                    <p className="text-muted-foreground">{point.description}</p>
                  </div>
                </motion.div>
              ))}

              {/* Additional Content */}
              <div className="pt-6 mt-6 border-t border-border">
                <p className="text-muted-foreground">
                  We're committed to staying ahead of emerging threats, continuously evolving 
                  our AI capabilities, and providing our users with the tools they need to 
                  protect their digital assets effectively.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Mission; 