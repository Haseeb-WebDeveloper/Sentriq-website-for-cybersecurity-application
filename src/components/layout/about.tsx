'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const highlights = [
  "Industry-leading AI technology",
  "24/7 automated threat monitoring",
  "99.9% threat detection rate",
  "Trusted by 10,000+ users"
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5
    }
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

function About() {
  return (
    <section className="py-20 overflow-hidden bg-background relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-primary/[0.02] -z-10" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column - Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="relative z-10"
          >
            <motion.p 
              variants={fadeIn}
              className="text-primary font-medium mb-3"
            >
              About SentrIQ
            </motion.p>
            
            <motion.h2 
              variants={fadeIn}
              className="text-3xl sm:text-4xl font-bold text-foreground mb-6"
            >
              Next-Generation Security Powered by AI
            </motion.h2>
            
            <motion.p 
              variants={fadeIn}
              className="text-muted-foreground text-lg mb-8"
            >
              SentrIQ combines advanced artificial intelligence with robust security protocols 
              to provide unparalleled protection for your digital assets. Our mission is to make 
              enterprise-grade security accessible to everyone.
            </motion.p>

            {/* Highlights */}
            <motion.div
              variants={staggerContainer}
              className="grid sm:grid-cols-2 gap-4 mb-8"
            >
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="flex items-center gap-2"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{highlight}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeIn}>
              <Button className="group" size="lg">
                Learn More 
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Image Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-primary/10 rounded-2xl p-2 h-48">
                  <Image
                    src="/about-1.png"
                    alt="Security Dashboard"
                    width={400}
                    height={300}
                    className="rounded-xl object-cover w-full h-full"
                  />
                </div>
                <div className="bg-primary/10 rounded-2xl p-2 h-64">
                  <Image
                    src="/about-2.png"
                    alt="AI Analysis"
                    width={400}
                    height={400}
                    className="rounded-xl object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-primary/10 rounded-2xl p-2 h-64">
                  <Image
                    src="/about-3.png"
                    alt="Real-time Protection"
                    width={400}
                    height={400}
                    className="rounded-xl object-cover w-full h-full"
                  />
                </div>
                <div className="bg-primary/10 rounded-2xl p-2 h-48">
                  <Image
                    src="/about-4.png"
                    alt="Threat Detection"
                    width={400}
                    height={300}
                    className="rounded-xl object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
