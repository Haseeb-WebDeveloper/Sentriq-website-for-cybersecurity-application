'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';
import { fadeIn } from '@/lib/animations';
import { Button } from '@/components/ui/button';

function BlogPost({ params }: { params: { id: string } }) {
  // This would normally come from your CMS or API
  const post = {
    title: "Understanding Zero Trust Security in the Age of AI",
    date: "2024-03-20",
    readTime: "8 min read",
    author: {
      name: "Sarah Johnson",
      role: "Security Analyst",
      image: "/software.png"
    },
    content: `
      <p class="mb-6">
        In today's rapidly evolving digital landscape, the traditional perimeter-based security model is no longer sufficient. Zero Trust security, combined with artificial intelligence, offers a more robust approach to protecting your digital assets.
      </p>
      
      <h2 class="text-2xl font-bold mb-4">What is Zero Trust Security?</h2>
      
      <p class="mb-6">
        Zero Trust is a security concept centered on the belief that organizations should not automatically trust anything inside or outside their perimeters. Instead, they must verify anything and everything trying to connect to their systems before granting access.
      </p>

      <div class="bg-foreground/[0.03] border border-border/50 rounded-xl p-6 my-8">
        <h3 class="text-xl font-semibold mb-3">Key Principles of Zero Trust:</h3>
        <ul class="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Verify explicitly</li>
          <li>Use least privilege access</li>
          <li>Assume breach</li>
        </ul>
      </div>

      <h2 class="text-2xl font-bold mb-4">The Role of AI in Zero Trust</h2>
      
      <p class="mb-6">
        Artificial Intelligence enhances Zero Trust security by providing continuous monitoring, anomaly detection, and automated response capabilities. AI algorithms can analyze patterns of behavior and identify potential threats in real-time.
      </p>
    `
  };

  return (
    <main className="pt-24 pb-20">
      {/* Back Button */}
      <div className="container mx-auto px-4 mb-8">
        <Button
          variant="ghost"
          size="sm"
          className="group"
          asChild
        >
          <Link href="/blog">
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Blog
          </Link>
        </Button>
      </div>

      {/* Article Header */}
      <article className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-8"
        >
          <div className="flex items-center gap-4 text-muted-foreground mb-4">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>
          
          <h1 className="text-4xl font-bold mb-6">
            {post.title}
          </h1>

          {/* Author Info */}
          <div className="flex items-center gap-4">
            <Image
              src={post.author.image}
              alt={post.author.name}
              width={48}
              height={48}
              className="rounded-full"
            />
            <div>
              <div className="font-medium">{post.author.name}</div>
              <div className="text-sm text-muted-foreground">{post.author.role}</div>
            </div>
          </div>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="relative aspect-[21/9] mb-12"
        >
          <Image
            src="/blog/featured-post.jpg"
            alt={post.title}
            fill
            className="object-cover rounded-2xl"
          />
        </motion.div>

        {/* Article Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="prose prose-lg dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Share Button */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mt-12 flex justify-center"
        >
          <Button
            variant="outline"
            className="gap-2"
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              // You might want to add a toast notification here
            }}
          >
            <Share2 className="w-4 h-4" />
            Share Article
          </Button>
        </motion.div>
      </article>
    </main>
  );
}

export default BlogPost;
