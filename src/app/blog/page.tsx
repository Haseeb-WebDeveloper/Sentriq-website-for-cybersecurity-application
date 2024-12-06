'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { fadeIn } from '@/lib/animations';

// Sample blog data - you can move this to a separate data file
const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Cybersecurity: Trends to Watch",
    excerpt: "Explore how artificial intelligence is revolutionizing the cybersecurity landscape and what it means for businesses.",
    image: "/software.png",
    date: "2024-03-15",
    readTime: "5 min read",
    category: "AI & Security"
  },
  {
    id: 2,
    title: "Essential Cybersecurity Practices for Small Businesses",
    excerpt: "Learn the fundamental security measures every small business should implement to protect against cyber threats.",
    image: "/software.png",
    date: "2024-03-10",
    readTime: "4 min read",
    category: "Business Security"
  },
  // Add more blog posts...
];

function BlogPage() {
  return (
    <main className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Security Insights & Updates
          </h1>
          <p className="text-xl text-muted-foreground">
            Stay informed about the latest in cybersecurity, AI technology, and best practices
          </p>
        </motion.div>
      </section>

      {/* Featured Post */}
      <section className="container mx-auto px-4 mb-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="relative rounded-2xl overflow-hidden"
        >
          <Link href="/blog/1" className="group">
            <div className="relative aspect-[21/9] w-full">
              <Image
                src="/software.png"
                alt="Featured blog post"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center gap-4 text-white/80 mb-4">
                <span className="bg-primary/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                  Featured
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  March 20, 2024
                </span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Understanding Zero Trust Security in the Age of AI
              </h2>
              <p className="text-white/80 max-w-2xl">
                Dive deep into the principles of Zero Trust architecture and how AI is enhancing its implementation.
              </p>
            </div>
          </Link>
        </motion.div>
      </section>

      {/* Blog Posts Grid */}
      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="group"
            >
              <Link href={`/blog/${post.id}`}>
                <div className="relative aspect-[16/9] mb-4 rounded-xl overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
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
                  <h2 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-primary">
                    Read More
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default BlogPage;