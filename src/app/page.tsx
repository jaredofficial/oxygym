'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight, Dumbbell, ShieldCheck, Sparkles, MapPin, Flame, Award, Users, Calendar, ArrowRight } from 'lucide-react';
import { useBranchModal } from '@/context/BranchModalContext';
import { STATS_DATA, USP_TILES, BRANCHES_DATA, FACILITIES_DATA } from '@/data/gymData';
import { StatCounter } from '@/components/ui/StatCounter';
import { EquipmentGrid } from '@/components/ui/EquipmentGrid';
import { TestimonialCarousel } from '@/components/ui/TestimonialCarousel';
import { TransformationsSection } from '@/components/ui/TransformationsSection';

export default function HomePage() {
  const { openBranchModal } = useBranchModal();

  return (
    <div className="space-y-24 pb-16 overflow-hidden">
      {/* 1. HERO SECTION WITH SMOOTH BLEND */}
      <section className="relative min-h-[60vh] sm:min-h-screen flex items-center justify-center pt-20 sm:pt-28 pb-16 sm:pb-20 overflow-hidden">
        {/* Video / Overlay Background */}
        <div className="absolute inset-0 bg-black/65 z-10" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <iframe
            src="https://www.youtube.com/embed/flGux38hJIs?autoplay=1&mute=1&loop=1&playlist=flGux38hJIs&controls=0&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&modestbranding=1&enablejsapi=1&playsinline=1"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320vw] h-[220%] sm:w-[150vw] sm:h-[150vh] min-w-full min-h-full max-w-none pointer-events-none object-cover filter brightness-75 scale-125 sm:scale-110"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            title="OXY GYM Hero Video"
          />
        </div>

        {/* Smooth Blend Gradient Mask to Next Section */}
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/80 to-transparent z-20 pointer-events-none" />

        {/* Hero Content */}
        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-7 mt-2 sm:mt-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-7xl lg:text-8xl font-display font-black uppercase tracking-tight text-white leading-none drop-shadow-2xl text-pretty"
          >
            LUXURY MADE <br />
            <span className="text-[var(--accent)]">
              AFFORDABLE
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="space-y-4 max-w-2xl mx-auto"
          >
            <p className="text-base sm:text-xl text-zinc-300 font-medium leading-relaxed">
              World-class luxury equipment powered by <span className="font-bold text-white tracking-wide">BEING STRONG</span> at unbeatable membership rates across <span className="font-bold text-white">Chandni</span>, <span className="font-bold text-white">Bhawanipur</span> & <span className="font-bold text-[var(--accent)]">Park Street</span>.
            </p>
            <div className="flex items-center justify-center gap-3 pt-1">
              <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-400">OFFICIAL EQUIPMENT PARTNER</span>
              <img
                src="/media/being strong logo.png"
                alt="Being Strong Logo"
                className="h-7 sm:h-9 object-contain filter brightness-110 drop-shadow-md hover:scale-105 transition-transform"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
          >
            <button
              onClick={openBranchModal}
              className="w-full sm:w-auto px-8 py-4 rounded-full btn-accent text-sm font-black flex items-center justify-center gap-3 group shadow-2xl hover:scale-105 transition-transform"
            >
              <span>BUY MEMBERSHIP</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#branches"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-black text-sm uppercase tracking-wider backdrop-blur-md border border-white/20 transition-all text-center hover:scale-105"
            >
              EXPLORE BRANCHES
            </a>
          </motion.div>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS_DATA.map((stat, idx) => (
            <StatCounter
              key={idx}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </section>

      {/* 3. OUR BRANCHES SHOWCASE */}
      <section id="branches" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28 space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-4xl sm:text-6xl font-display font-black uppercase">
            OUR <span className="text-[var(--accent)]">THREE BRANCHES</span>
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-xl mx-auto">
            Engineered with Being Strong power racks, steam baths, free general training for all members, and AI workout terminals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Chandni Card */}
          <div className="group rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] overflow-hidden hover:border-[var(--accent)] transition-all duration-300 shadow-xl flex flex-col justify-between hover:-translate-y-1.5">
            <div className="relative h-56 overflow-hidden">
              <img
                src={BRANCHES_DATA.chandni.heroImage}
                alt="OXY GYM Chandni"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-transparent to-transparent" />
            </div>
            <div className="p-6 space-y-3 flex-grow">
              <h3 className="text-2xl font-display font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                CHANDNI BRANCH
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                4th & 5th floor Archade Building flagship with Being Strong power platforms, AI workout guidance kiosk, 60kg dumbbells & steam baths.
              </p>
              <div className="pt-2 text-xs text-[var(--text-muted)] space-y-1">
                <p>📍 Archade Bldg, 25 B Chandni Chowk St, Esplanade</p>
                <p>⏰ Mon-Sat: 6am-10pm | Sun: 8am-5pm</p>
              </div>
            </div>
            <div className="p-6 pt-0">
              <Link
                href="/chandni"
                className="w-full py-3 rounded-full bg-[var(--bg-elevated)] text-[var(--text-primary)] hover:bg-[var(--accent)] hover:text-white transition-all text-xs font-black uppercase flex items-center justify-center gap-2 group-hover:shadow-lg"
              >
                EXPLORE CHANDNI BRANCH <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Bhawanipur Card */}
          <div className="group rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] overflow-hidden hover:border-[var(--accent)] transition-all duration-300 shadow-xl flex flex-col justify-between hover:-translate-y-1.5">
            <div className="relative h-56 overflow-hidden">
              <img
                src={BRANCHES_DATA.bhawanipur.heroImage}
                alt="OXY GYM Bhawanipur"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-transparent to-transparent" />
            </div>
            <div className="p-6 space-y-3 flex-grow">
              <h3 className="text-2xl font-display font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                BHAWANIPUR BRANCH
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                2nd floor Harish Mukherjee Rd powerhouse with yoga/pilates studio, Jerai strength decks, student discounts & doctor offers.
              </p>
              <div className="pt-2 text-xs text-[var(--text-muted)] space-y-1">
                <p>📍 2nd Floor, 82 Harish Mukherjee Rd, Patuapara</p>
                <p>⏰ Mon-Sat: 6am-10pm | Sun: 9am-6pm</p>
              </div>
            </div>
            <div className="p-6 pt-0">
              <Link
                href="/bhawanipur"
                className="w-full py-3 rounded-full bg-[var(--bg-elevated)] text-[var(--text-primary)] hover:bg-[var(--accent)] hover:text-white transition-all text-xs font-black uppercase flex items-center justify-center gap-2 group-hover:shadow-lg"
              >
                EXPLORE BHAWANIPUR BRANCH <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Park Street Card */}
          <div className="group rounded-3xl bg-gradient-to-b from-[#14141c] to-[#0a0a0f] border border-amber-500/30 overflow-hidden hover:border-amber-400 transition-all duration-300 shadow-xl flex flex-col justify-between hover:-translate-y-1.5">
            <div className="relative h-56 overflow-hidden bg-black">
              <img
                src={BRANCHES_DATA['park-street'].heroImage}
                alt="OXY GYM Park Street"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-40 filter blur-[1px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-black/50 to-transparent" />
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-black uppercase bg-amber-500 text-black shadow-md flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> OPENING PUJA 2026
              </span>
            </div>
            <div className="p-6 space-y-3 flex-grow">
              <h3 className="text-2xl font-display font-bold text-amber-300 group-hover:text-amber-200 transition-colors">
                PARK STREET FLAGSHIP
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Ultra-exclusive HYROX & luxury athletic hub with Being Strong Crown Series, hyperbaric oxygen, infrared sauna & work pods.
              </p>
              <div className="pt-2 text-xs text-zinc-500 space-y-1">
                <p>📍 Heart of Park Street, Kolkata</p>
                <p>✨ Opening Puja 2026</p>
              </div>
            </div>
            <div className="p-6 pt-0">
              <Link
                href="/park-street"
                className="w-full py-3 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 hover:bg-amber-500 hover:text-black transition-all text-xs font-black uppercase flex items-center justify-center gap-2"
              >
                GET VIP PRE-LAUNCH INVITATION <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TRANSFORMATIONS SHOWCASE SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TransformationsSection />
      </section>

      {/* 5. WHY WE'RE THE BEST (USP TILES) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-4xl sm:text-6xl font-display font-black uppercase">
            WHY WE'RE <span className="text-[var(--accent)]">KOLKATA'S BEST</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {USP_TILES.map((tile, idx) => (
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              key={idx}
              className="p-7 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent)] transition-all duration-300 shadow-xl space-y-3 cursor-default"
            >
              <div className="w-12 h-12 rounded-2xl bg-[var(--accent-subtle)] text-[var(--accent)] border border-[var(--border-glow)] flex items-center justify-center">
                <Dumbbell className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display font-bold text-[var(--text-primary)]">
                {tile.title}
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                {tile.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. EQUIPMENT WE USE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3">
          <h2 className="text-4xl sm:text-6xl font-display font-black uppercase">
            EQUIPMENT <span className="text-[var(--accent)]">WE USE</span>
          </h2>
          <p className="text-sm text-[var(--text-secondary)] max-w-lg mx-auto">
            Being Strong heavy-duty leverage arms, Olympic barbells, 60kg dumbbells, battle ropes & commercial motor treadmills.
          </p>
        </div>

        <EquipmentGrid branchFilter="all" />
      </section>

      {/* 7. FACILITIES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-4xl sm:text-6xl font-display font-black uppercase">
            EXPLORE OUR <span className="text-[var(--accent)]">FACILITIES</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FACILITIES_DATA.map((fac) => (
            <div
              key={fac.id}
              className="group relative overflow-hidden rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent)] transition-all duration-300 shadow-xl h-72 flex flex-col justify-end p-6 hover:-translate-y-1"
            >
              <img
                src={fac.image}
                alt={fac.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-black/50 to-transparent" />

              <div className="relative z-10 space-y-2">
                <h3 className="text-2xl font-display font-bold text-white group-hover:text-[var(--accent)] transition-colors">
                  {fac.name}
                </h3>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  {fac.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3">
          <h2 className="text-4xl sm:text-6xl font-display font-black uppercase">
            WHAT OUR <span className="text-[var(--accent)]">MEMBERS SAY</span>
          </h2>
        </div>

        <TestimonialCarousel />
      </section>

      {/* 9. FINAL CTA BAND */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[var(--bg-card)] via-[var(--bg-elevated)] to-[var(--bg-card)] border border-[var(--accent)] p-8 sm:p-14 text-center space-y-6 shadow-2xl">
          <div className="absolute top-0 right-0 transform translate-x-12 -translate-y-12 w-64 h-64 bg-[var(--accent-glow)] rounded-full blur-3xl opacity-30 pointer-events-none" />

          <h2 className="text-4xl sm:text-6xl font-display font-black uppercase max-w-3xl mx-auto leading-tight">
            READY TO TRANSFORM YOUR <span className="text-[var(--accent)]">FITNESS LEVEL?</span>
          </h2>

          <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-xl mx-auto">
            Join OXY GYM today and claim your student discounts, doctor offers, and free general training provided to all members.
          </p>

          <div className="pt-2">
            <button
              onClick={openBranchModal}
              className="px-10 py-4 rounded-full btn-accent text-sm font-black inline-flex items-center gap-3 shadow-2xl hover:scale-105 transition-transform"
            >
              <span>BUY MEMBERSHIP TODAY</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
