'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/animations';
import Image from 'next/image';
import { Shield, Rocket, Code, Globe, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const achievements = [
  {
    number: "10K+",
    label: "Active Users",
    description: "Trusted by businesses worldwide"
  },
  {
    number: "99.9%",
    label: "Success Rate",
    description: "In threat detection & prevention"
  },
  {
    number: "24/7",
    label: "Support",
    description: "Round-the-clock assistance"
  }
];

const features = [
  {
    icon: Shield,
    title: "Advanced Protection",
    description: "Enterprise-grade security powered by cutting-edge AI technology"
  },
  {
    icon: Code,
    title: "Smart Integration",
    description: "Seamlessly integrates with your existing security infrastructure"
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description: "Protecting businesses across 150+ countries worldwide"
  }
];

function AboutUs() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full text-primary text-sm font-medium mb-6">
              <Rocket className="w-4 h-4" />
              About SentrIQ
            </div>

            <h2 className="text-4xl font-bold mb-6">
              Pioneering the Future of{' '}
              <span className="text-primary">AI-Powered Security</span>
            </h2>

            <p className="text-muted-foreground mb-8">
              Founded in 2024, SentrIQ emerged from a simple yet powerful idea: 
              making enterprise-grade cybersecurity accessible to businesses of all sizes. 
              Our AI-powered platform represents a paradigm shift in how organizations 
              approach security, combining cutting-edge technology with intuitive design.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="p-4 rounded-xl bg-foreground/[0.02] border border-border/50">
                  <div className="text-2xl font-bold text-primary mb-1">
                    {achievement.number}
                  </div>
                  <div className="font-medium mb-1">{achievement.label}</div>
                  <div className="text-sm text-muted-foreground">
                    {achievement.description}
                  </div>
                </div>
              ))}
            </div>

            <Button size="lg" className="gap-2">
              Learn More
              <Award className="w-4 h-4" />
            </Button>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="relative"
          >
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/10 blur-3xl rounded-[2rem]" />
              
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
                <Image
                  src="/software.png"
                  alt="SentrIQ Platform"
                  width={600}
                  height={400}
                  className="w-full object-cover"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-background/95 backdrop-blur-sm p-4 rounded-xl border border-border shadow-lg">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  <div className="text-sm font-medium">Trusted by 10K+ users</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl border border-border/50 bg-foreground/[0.02] hover:border-primary/20 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mt-20 text-center max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-4">
            Join the Future of Cybersecurity
          </h3>
          <p className="text-muted-foreground mb-8">
            Experience the power of AI-driven security that grows and adapts with your business. 
            Start protecting your digital assets with SentrIQ today.
          </p>
          <div className="inline-block p-[1px] rounded-xl bg-gradient-to-r from-primary/20 to-primary/10">
            <div className="px-8 py-4 rounded-xl bg-background/50 backdrop-blur-sm">
              <p className="text-lg">
                Ready to get started?{' '}
                <span className="text-primary font-medium">
                  Contact our team
                </span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutUs; 