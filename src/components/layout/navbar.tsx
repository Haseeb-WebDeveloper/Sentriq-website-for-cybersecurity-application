'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ModeToggle } from '@/components/ui/theme-toggle';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 bg-foreground/5 backdrop-blur-xl border-b border-border ${
        isScrolled ? '' : ''
      }`}
    >
      <nav className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2"
          >
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              SentrIQ
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/features" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </Link>
            <Link 
              href="/pricing" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </Link>
            <Link 
              href="/about" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
          </div>

          {/* Right Side - CTA & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <ModeToggle />
            <Button size="sm">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <ModeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground p-2 hover:bg-accent rounded-md"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4"
          >
            <div className="flex flex-col space-y-4">
              <Link 
                href="/features" 
                className="text-muted-foreground hover:text-foreground transition-colors px-2 py-1"
              >
                Features
              </Link>
              <Link 
                href="/pricing" 
                className="text-muted-foreground hover:text-foreground transition-colors px-2 py-1"
              >
                Pricing
              </Link>
              <Link 
                href="/about" 
                className="text-muted-foreground hover:text-foreground transition-colors px-2 py-1"
              >
                About
              </Link>
              <div className="pt-4 space-y-2">
                <Button variant="outline" className="w-full justify-center">
                  Sign In
                </Button>
                <Button className="w-full justify-center">
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}

export default Navbar;