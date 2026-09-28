'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, ShieldCheck, Flame, ChevronRight, Dumbbell, Award, ArrowRight } from 'lucide-react';
import { BRANCHES_DATA, TRAINERS_DATA } from '@/data/gymData';
import { EquipmentGrid } from '@/components/ui/EquipmentGrid';
import { PricingTable } from '@/components/ui/PricingTable';
import { TestimonialCarousel } from '@/components/ui/TestimonialCarousel';
import { BranchLocationCard } from '@/components/ui/BranchLocationCard';
import { TransformationsSection } from '@/components/ui/TransformationsSection';
import { BranchGallery } from '@/components/ui/BranchGallery';
import { useBranchModal } from '@/context/BranchModalContext';

export default function ChandniPage() {
  const branch = BRANCHES_DATA.chandni;
  const { openBranchModal } = useBranchModal();

  const handleJoinClick = () => {
    const el = document.getElementById('membership');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const chandniTrainers = TRAINERS_DATA.filter((t) => t.branch.includes('Chandni'));

  return (
    <div className="space-y-24 pb-16 overflow-hidden">
      {/* 1. HERO SECTION WITH SMOOTH BLEND */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/65 z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-105 filter brightness-75"
        >
          <source src={branch.heroVideo} type="video/mp4" />
        </video>

        {/* Smooth Blend Gradient Mask */}
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/80 to-transparent z-20 pointer-events-none" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 mt-6">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-black uppercase text-white tracking-tight leading-none drop-shadow-2xl">
            OXY GYM <span className="text-[var(--accent)]">CHANDNI</span>
          </h1>

          <p className="text-base sm:text-xl text-zinc-300 max-w-2xl mx-auto font-medium">
            {branch.tagline}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-300 font-semibold pt-2">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[var(--accent)]" /> 4th Floor, Chandni Arcade, 25B Chandni Chowk, Kolkata - 700072
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
              <span>JOIN CHANDNI BRANCH</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. TRANSFORMATIONS AT CHANDNI */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TransformationsSection branchFilter="Chandni" />
      </section>

      {/* 3. EQUIPMENT AT CHANDNI */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3">
          <h2 className="text-4xl sm:text-6xl font-display font-black uppercase">
            EQUIPMENT AT <span className="text-[var(--accent)]">CHANDNI</span>
          </h2>
          <p className="text-sm text-[var(--text-secondary)] max-w-lg mx-auto">
            Jerai heavy-duty powerlifting racks, Olympic barbells, dumbbells up to 60kg, and battle rope agility tracks.
          </p>
        </div>

        <EquipmentGrid branchFilter="chandni" />
      </section>

      {/* 4. HIGHLIGHTS & FACILITIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3">
          <h2 className="text-4xl sm:text-6xl font-display font-black uppercase">
            WHY TRAIN AT <span className="text-[var(--accent)]">CHANDNI</span>
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

      {/* 5. TRAINERS AT CHANDNI */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3">
          <h2 className="text-4xl sm:text-6xl font-display font-black uppercase">
            CHANDNI <span className="text-[var(--accent)]">SENIOR TRAINERS</span>
          </h2>
          <p className="text-sm text-[var(--text-secondary)] max-w-md mx-auto">
            Meet Chandni's dedicated senior trainers, driving elite athletic transformations and biomechanical strength.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {chandniTrainers.map((tr) => (
            <div
              key={tr.id}
              className="group relative rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent)] transition-all duration-300 overflow-hidden shadow-2xl hover:-translate-y-1"
            >
              <div className="relative h-96 w-full overflow-hidden bg-black">
                {/* Layer 1: Dark Blurred Gym Background */}
                <img
                  src="/media/facilities/hyrox_dark_gym.png"
                  alt="Gym Background"
                  className="absolute inset-0 w-full h-full object-cover filter blur-lg scale-110 opacity-50 group-hover:scale-125 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-transparent to-black/40 z-10" />
                
                {/* Layer 2: High-Resolution Composited Trainer Image */}
                <img
                  src={tr.image}
                  alt={tr.name}
                  className="relative z-20 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 space-y-2 relative z-20">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-display font-bold text-[var(--text-primary)]">
                    {tr.name}
                  </h3>
                  <span className="text-xs font-black uppercase px-3 py-1 rounded-full bg-[var(--accent-subtle)] text-[var(--accent)] border border-[var(--accent)]/30">
                    {tr.role}
                  </span>
                </div>
                <p className="text-xs font-bold text-[var(--accent)]">{tr.experience}</p>
                <p className="text-sm text-[var(--text-secondary)]">{tr.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. PRICING & MEMBERSHIP (#membership) */}
      <section className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3">
          <h2 className="text-4xl sm:text-6xl font-display font-black uppercase">
            CHANDNI <span className="text-[var(--accent)]">PRICING & PASSES</span>
          </h2>
        </div>

        <PricingTable branch="chandni" />
      </section>

      {/* 7. GALLERY SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BranchGallery branch="chandni" />
      </section>

      {/* 8. TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3">
          <h2 className="text-4xl sm:text-6xl font-display font-black uppercase">
            CHANDNI <span className="text-[var(--accent)]">REVIEWS</span>
          </h2>
        </div>

        <TestimonialCarousel branchFilter="Chandni" />
      </section>

      {/* 8. LOCATION / HOURS / MAP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BranchLocationCard branch={branch} />
      </section>

      {/* 9. FINAL CTA BAND */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[var(--bg-card)] border border-[var(--accent)] p-8 sm:p-12 text-center space-y-6 shadow-2xl">
          <h2 className="text-4xl sm:text-6xl font-display font-black uppercase">
            BUY MEMBERSHIP AT <span className="text-[var(--accent)]">CHANDNI</span>
          </h2>
          <p className="text-sm text-[var(--text-secondary)] max-w-md mx-auto">
            Ready to train at Central Kolkata’s most intense Jerai-powered gym? Claim your pass today.
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
