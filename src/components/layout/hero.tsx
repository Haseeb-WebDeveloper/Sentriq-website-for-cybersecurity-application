import Image from 'next/image'
import React from 'react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'

type Props = {}

function Hero({}: Props) {
  return (
    <section className="relative overflow-hidden pb-20 pt-40 bg-primary/[0.03]">
      <div className="" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Floating badges */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="flex justify-center gap-3 animate-fade-in">
            <span className="inline-flex items-center py-1.5 px-3 rounded-full text-xs font-medium bg-foreground/5 text-muted-foreground">
              AI-Powered iOS Application for Enhanced Security
            </span>
          </div>

          <h1 className="mt-8 text-4xl font-bold tracking-normal sm:text-6xl text-foreground max-w-4xl text-center mx-auto">
            <span className="">Simplify Security with SentrIQ</span>
            <p className="py-2"> Your AI Cyber Assistant</p>
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
            Stay ahead of cyber threats with SentrIQ. Our AI assistant makes cybersecurity simple, affordable, and accessible for everyone.​
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Button 
              asChild 
              size="lg" 
              className="gap-3 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link href="/auth/signup">
                Get Started
                <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-foreground opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-foreground"></span>
              </span>
                {/* <FiArrowRight className="h-4 w-4" /> */}
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
          </div>
        </div>

        {/* App Preview */}
        <div className="relative mt-20 max-w-6xl mx-auto">
        <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/10 blur-3xl rounded-[2rem]"></div>
          <div className="w-full relative bg-card/5 backdrop-blur-sm rounded-[1rem] border border-border  shadow-2xl">
            <Image
              src="/software.png"
              alt="SentrIQ App Interface"
              width={800}
              height={450}
              className="rounded-2xl shadow-xl mx-auto w-full bg-white"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero