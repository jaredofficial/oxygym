'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, Award } from 'lucide-react';
import { TESTIMONIALS_DATA, Testimonial } from '@/data/gymData';

interface TestimonialCarouselProps {
  branchFilter?: string;
}

export function TestimonialCarousel({ branchFilter }: TestimonialCarouselProps) {
  const testimonials = branchFilter
    ? TESTIMONIALS_DATA.filter((t) => t.branch.toLowerCase().includes(branchFilter.toLowerCase()))
    : TESTIMONIALS_DATA;

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex] || TESTIMONIALS_DATA[0];

  return (
    <div className="relative max-w-4xl mx-auto rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] p-8 sm:p-12 shadow-2xl">
      {/* Decorative Background Quote Icon */}
      <Quote className="absolute top-6 right-8 w-24 h-24 text-[var(--accent-subtle)] opacity-40 pointer-events-none" />

      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="space-y-6"
        >
          {/* Rating Stars & Achievement */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-1">
              {Array.from({ length: current.rating }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-black uppercase bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              <Award className="w-3.5 h-3.5" /> {current.achievement}
            </span>
          </div>

          {/* Quote Text */}
          <p className="text-lg sm:text-2xl font-subheading italic text-[var(--text-primary)] leading-relaxed">
            "{current.quote}"
          </p>

          {/* Member Profile */}
          <div className="flex items-center gap-4 pt-4 border-t border-[var(--border-color)]">
            <img
              src={current.avatar}
              alt={current.name}
              className="w-14 h-14 rounded-full object-cover border-2 border-[var(--accent)] shadow-md"
            />
            <div>
              <h4 className="text-base font-display font-bold text-[var(--text-primary)]">
                {current.name}
              </h4>
              <p className="text-xs text-[var(--text-secondary)]">{current.role}</p>
              <span className="text-[10px] font-extrabold uppercase text-[var(--accent)] tracking-wider">
                {current.branch}
              </span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      {testimonials.length > 1 && (
        <div className="flex items-center justify-end gap-2 mt-6">
          <button
            onClick={handlePrev}
            className="p-2.5 rounded-full bg-[var(--bg-elevated)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent)] transition-all"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="p-2.5 rounded-full bg-[var(--bg-elevated)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent)] transition-all"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
}
