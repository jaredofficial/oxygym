'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, ChevronRight, ArrowRight } from 'lucide-react';
import { BRANCHES_DATA, TRAINERS_DATA } from '@/data/gymData';
import { EquipmentGrid } from '@/components/ui/EquipmentGrid';
import { PricingTable } from '@/components/ui/PricingTable';
import { TestimonialCarousel } from '@/components/ui/TestimonialCarousel';
import { BranchLocationCard } from '@/components/ui/BranchLocationCard';
import { TransformationsSection } from '@/components/ui/TransformationsSection';
import { BranchGallery } from '@/components/ui/BranchGallery';

export default function BhawanipurPage() {
  const branch = BRANCHES_DATA.bhawanipur;

  const handleJoinClick = () => {
    const el = document.getElementById('membership');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const bhawanipurTrainers = TRAINERS_DATA.filter((t) => t.branch.includes('Bhawanipur'));

  return (
    <div className="space-y-24 pb-16 overflow-hidden">
      {/* 1. HERO SECTION WITH SMOOTH BLEND */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/65 z-10" />
        <img
          src={branch.heroImage}
          alt="OXY GYM Bhawanipur"
          className="absolute inset-0 w-full h-full object-cover filter brightness-75 scale-105"
        />

        {/* Smooth Blend Gradient Mask */}
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/80 to-transparent z-20 pointer-events-none" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 mt-6">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-black uppercase text-white tracking-tight leading-none drop-shadow-2xl">
            OXY GYM <span className="text-[var(--accent)]">BHAWANIPUR</span>
          </h1>

          <p className="text-base sm:text-xl text-zinc-300 max-w-2xl mx-auto font-medium">
            {branch.tagline}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-300 font-semibold pt-2">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[var(--accent)]" /> 2nd Floor, 82 Harish Mukherjee Rd, Patuapara
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[var(--accent)]" /> {branch.hours}
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="w-4 h-4 text-[var(--accent)]" /> {branch.phone}
            </span>
          </div>

          <div className="pt-4">
            <button
              onClick={handleJoinClick}
              className="px-8 py-4 rounded-full btn-accent text-sm font-black inline-flex items-center gap-2 shadow-2xl"
            >
              <span>JOIN BHAWANIPUR BRANCH</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. TRANSFORMATIONS AT BHAWANIPUR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TransformationsSection branchFilter="Bhawanipur" />
      </section>

      {/* 3. EQUIPMENT AT BHAWANIPUR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3">
          <h2 className="text-4xl sm:text-6xl font-display font-black uppercase">
            EQUIPMENT AT <span className="text-[var(--accent)]">BHAWANIPUR</span>
          </h2>
          <p className="text-sm text-[var(--text-secondary)] max-w-lg mx-auto">
            Technogym curved treadmills, functional battle rope tracks, yoga/pilates studio, and AI workout guidance kiosks.
          </p>
        </div>

        <EquipmentGrid branchFilter="bhawanipur" />
      </section>

      {/* 4. HIGHLIGHTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3">
          <h2 className="text-4xl sm:text-6xl font-display font-black uppercase">
            WHY TRAIN AT <span className="text-[var(--accent)]">BHAWANIPUR</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {branch.highlights.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent)] transition-all shadow-lg space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-[var(--accent-subtle)] text-[var(--accent)] flex items-center justify-center font-bold">
                0{idx + 1}
              </div>
              <h3 className="text-base font-display font-bold text-[var(--text-primary)]">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* 5. TRAINERS AT BHAWANIPUR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3">
          <h2 className="text-4xl sm:text-6xl font-display font-black uppercase">
            BHAWANIPUR <span className="text-[var(--accent)]">TRAINERS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bhawanipurTrainers.map((tr) => (
            <div
              key={tr.id}
              className="rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] overflow-hidden shadow-xl"
            >
              <img src={tr.image} alt={tr.name} className="w-full h-64 object-cover" />
              <div className="p-6 space-y-2">
                <h3 className="text-xl font-display font-bold text-[var(--text-primary)]">
                  {tr.name}
                </h3>
                <p className="text-xs font-bold text-[var(--accent)]">{tr.role}</p>
                <p className="text-xs text-[var(--text-secondary)]">{tr.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. PRICING & MEMBERSHIP (#membership) */}
      <section className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3">
          <h2 className="text-4xl sm:text-6xl font-display font-black uppercase">
            BHAWANIPUR <span className="text-[var(--accent)]">PRICING & PASSES</span>
          </h2>
        </div>

        <PricingTable branch="bhawanipur" />
      </section>

      {/* 7. GALLERY SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BranchGallery branch="bhawanipur" />
      </section>

      {/* 8. TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3">
          <h2 className="text-4xl sm:text-6xl font-display font-black uppercase">
            BHAWANIPUR <span className="text-[var(--accent)]">REVIEWS</span>
          </h2>
        </div>

        <TestimonialCarousel branchFilter="Bhawanipur" />
      </section>

      {/* 8. LOCATION / HOURS / MAP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BranchLocationCard branch={branch} />
      </section>

      {/* 9. FINAL CTA BAND */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[var(--bg-card)] border border-[var(--accent)] p-8 sm:p-12 text-center space-y-6 shadow-2xl">
          <h2 className="text-4xl sm:text-6xl font-display font-black uppercase">
            BUY MEMBERSHIP AT <span className="text-[var(--accent)]">BHAWANIPUR</span>
          </h2>
          <p className="text-sm text-[var(--text-secondary)] max-w-md mx-auto">
            Ready to train at South Kolkata’s elite fitness facility? Choose your plan today.
          </p>
          <button
            onClick={handleJoinClick}
            className="px-8 py-4 rounded-full btn-accent text-sm font-black inline-flex items-center gap-2"
          >
            SELECT YOUR PLAN <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
