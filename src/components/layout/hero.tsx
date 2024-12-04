'use client';

import Image from 'next/image'
import React from 'react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Link from 'next/link'

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
      delayChildren: 0.1,
      staggerChildren: 0.1
    }
  }
};

function Hero() {
  return (
    <section className="bg-background relative overflow-hidden pb-20 pt-40">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className=" mx-auto max-w-7xl px-6 lg:px-8 bg-background"
      >
        {/* Floating badges */}
        <div className="mx-auto max-w-4xl text-center">
          <motion.div 
            variants={fadeIn}
            className="flex justify-center gap-3 animate-fade-in"
          >
            <motion.span 
              variants={fadeIn}
              className="inline-flex items-center py-1.5 px-3 rounded-full text-xs font-medium text-muted-foreground bg-foreground/[0.03]"
            >
              AI-Powered iOS Application for Enhanced Security
            </motion.span>
          </motion.div>

          <motion.h1 
            variants={fadeIn}
            className="mt-8 text-4xl font-bold tracking-normal sm:text-6xl text-foreground max-w-4xl text-center mx-auto"
          >
            <motion.span 
              variants={fadeIn}
              className=""
            >
              Simplify Security with SentrIQ
            </motion.span>
            <motion.p 
              variants={fadeIn}
              className="py-2"
            >
              Your AI Cyber Assistant
            </motion.p>
          </motion.h1>

          <motion.p 
            variants={fadeIn}
            className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto"
          >
            Stay ahead of cyber threats with SentrIQ. Our AI assistant makes cybersecurity simple, affordable, and accessible for everyone.​
          </motion.p>

          <motion.div 
            variants={fadeIn}
            className="mt-10 flex items-center justify-center gap-4"
          >
            <Button 
              asChild 
              size="lg" 
              className="group gap-3 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link href="/auth/signup">
                Get Started
                <motion.span 
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative flex h-2 w-2"
                >
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-foreground opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-foreground"></span>
                </motion.span>
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-primary/20 bg-background hover:bg-accent text-accent-foreground"
            >
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* App Preview */}
        <motion.div 
          variants={fadeIn}
          className="relative mt-20 max-w-6xl mx-auto"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/10 blur-3xl rounded-[2rem]" />
          <div className="w-full relative bg-card/5 backdrop-blur-sm rounded-[1rem] border border-border shadow-2xl overflow-hidden">
            <Image
              src="/software.png"
              alt="SentrIQ App Interface"
              width={800}
              height={450}
              className="rounded-2xl shadow-xl mx-auto w-full bg-white"
            />
          </div>
        </motion.div>

        {/* Background Elements */}
        <div className="absolute top-0 right-0 -z-10 h-full w-full opacity-50">
          <div className="absolute right-0 top-0 -z-10 h-full w-1/2 bg-gradient-to-l from-primary/5 to-transparent" />
          <div className="absolute left-0 top-0 -z-10 h-full w-1/2 bg-gradient-to-r from-primary/5 to-transparent" />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero