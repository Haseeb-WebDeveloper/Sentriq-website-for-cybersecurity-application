'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Sparkles } from 'lucide-react';
import { formContent } from '@/data/constant';

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

function WaitlistForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10" />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="container mx-auto px-4 max-w-lg text-center"
        >
          <div className="p-8 rounded-2xl border border-border/50">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">Welcome to SentrIQ!</h3>
            <p className="text-muted-foreground mb-6">
              Thank you for joining our waitlist. We'll be in touch soon with your exclusive early access.
            </p>
            <div className="flex justify-center">
              <Button 
                variant="outline"
                onClick={() => setSubmitted(false)}
                className="border-primary/20 hover:bg-primary/10"
              >
                Back to Form
              </Button>
            </div>
          </div>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="mx-auto px-4 flex justify-between">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start max-w-6xl mx-auto justify-items-stretch w-full ">
          {/* Left Column - Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className=""
          >
            <motion.h2 
              variants={fadeIn}
              className="text-3xl font-bold mb-4"
            >
              {formContent.title}
            </motion.h2>
            <motion.p 
              variants={fadeIn}
              className="text-muted-foreground mb-12"
            >
              {formContent.description}
            </motion.p>

            <div className="space-y-8">
              {formContent.benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  variants={fadeIn}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-foreground/5 p-10 w-full rounded-2xl"
          >
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-3">
                Join the Waitlist
              </h2>
              <p className="text-muted-foreground">
                Be among the first to experience AI-powered cybersecurity.
              </p>
            </div>

            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6 rounded-xl"
            >
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Work Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="industry" className="block text-sm font-medium text-foreground mb-2">
                    Industry
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your industry" />
                    </SelectTrigger>
                    <SelectContent>
                      {formContent.industries.map((industry) => (
                        <SelectItem key={industry} value={industry.toLowerCase()}>
                          {industry}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Joining...
                  </span>
                ) : (
                  "Join Waitlist"
                )}
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                By joining, you agree to our{' '}
                <a href="/terms" className="text-primary hover:underline">Terms</a>
                {' '}and{' '}
                <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>
              </p>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default WaitlistForm;
