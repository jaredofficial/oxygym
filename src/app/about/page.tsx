'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Dumbbell, Award, Target, Flame, Users, Calendar, ArrowRight } from 'lucide-react';
import { TRAINERS_DATA } from '@/data/gymData';
import { useBranchModal } from '@/context/BranchModalContext';

export default function AboutPage() {
  const { openBranchModal } = useBranchModal();

  const milestones = [
    { year: '2021', title: 'Chandni Flagship Launch', desc: 'OXY GYM brand launched with our flagship center at Archade Building, Chandni Chowk.' },
    { year: '2024', title: 'Bhawanipur Powerhouse', desc: 'Expanded into South Kolkata with a high-intensity powerhouse facility at Harish Mukherjee Rd.' },
    { year: '2026', title: 'Park Street HYROX Launch', desc: 'Unveiling Kolkata’s premier ultra-luxury HYROX & recovery flagship on Park Street in Puja 2026.' },
  ];

  return (
    <div className="space-y-24 pt-28 pb-16 overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h1 className="text-5xl sm:text-7xl font-display font-black uppercase text-[var(--text-primary)]">
          OUR <span className="text-[var(--accent)]">STORY</span>
        </h1>

        <p className="text-base sm:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
          Founded on the principles of Jerai & Being Strong biomechanical excellence, high-energy community, and 100+ documented athletic transformations.
        </p>
      </section>

      {/* 2. BRAND STORY & MISSION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] p-8 sm:p-12 shadow-2xl">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-5xl font-display font-black uppercase">
              REDEFINING <span className="text-[var(--accent)]">KOLKATA'S FIT CULTURE</span>
            </h2>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              At OXY GYM, we believe every individual possesses untapped athletic potential. We equipped our floors with heavy-duty Jerai powerlifting racks, Olympic barbells, dumbbells up to 60kg, and dedicated battle rope agility arenas.
            </p>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              Whether you are preparing for a powerlifting competition, attending yoga/pilates classes, or transforming your body, OXY GYM provides extreme cleanliness, steam bath recovery, AI guidance kiosks, and student discount perks.
            </p>
          </div>

          <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl border border-[var(--border-color)]">
            <img
              src="/media/chandni/images/612240f744a250350ca899a0f3398205.jpg"
              alt="OXY GYM Brand Story"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* 3. CORE VALUES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-4xl sm:text-6xl font-display font-black uppercase">
            OUR <span className="text-[var(--accent)]">CORE VALUES</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent)] transition-all hover:-translate-y-1 space-y-3 shadow-lg">
            <ShieldCheck className="w-8 h-8 text-[var(--accent)]" />
            <h3 className="text-lg font-display font-bold">Jerai & Being Strong</h3>
            <p className="text-xs text-[var(--text-secondary)]">Only authentic Jerai and Being Strong gear calibrated for optimal muscle activation and joint safety.</p>
          </div>
          <div className="p-6 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent)] transition-all hover:-translate-y-1 space-y-3 shadow-lg">
            <Users className="w-8 h-8 text-[var(--accent)]" />
            <h3 className="text-lg font-display font-bold">High-Energy Community</h3>
            <p className="text-xs text-[var(--text-secondary)]">An inclusive atmosphere with optional member skill competitions and transformation tests.</p>
          </div>
          <div className="p-6 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent)] transition-all hover:-translate-y-1 space-y-3 shadow-lg">
            <Award className="w-8 h-8 text-[var(--accent)]" />
            <h3 className="text-lg font-display font-bold">Free General Training</h3>
            <p className="text-xs text-[var(--text-secondary)]">General floor training support is provided for free to all members (1-on-1 coaching charged separately).</p>
          </div>
          <div className="p-6 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent)] transition-all hover:-translate-y-1 space-y-3 shadow-lg">
            <Target className="w-8 h-8 text-[var(--accent)]" />
            <h3 className="text-lg font-display font-bold">Extreme Hygiene & AI</h3>
            <p className="text-xs text-[var(--text-secondary)]">Squeaky clean floor sanitization paired with AI workout kiosks to log exercise data.</p>
          </div>
        </div>
      </section>

      {/* 4. TIMELINE ROADMAP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-4xl sm:text-6xl font-display font-black uppercase">
            OUR <span className="text-[var(--accent)]">TIMELINE</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {milestones.map((m, idx) => (
            <div key={idx} className="relative p-6 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] space-y-3">
              <span className="text-3xl font-display font-black text-[var(--accent)]">{m.year}</span>
              <h3 className="text-lg font-display font-bold">{m.title}</h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. TEAM OVERVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3">
          <h2 className="text-4xl sm:text-6xl font-display font-black uppercase">
            HEAD <span className="text-[var(--accent)]">COACHES</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {TRAINERS_DATA.map((tr) => (
            <div key={tr.id} className="rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] overflow-hidden">
              <img src={tr.image} alt={tr.name} className="w-full h-64 object-cover" />
              <div className="p-6 space-y-1">
                <h3 className="text-xl font-display font-bold">{tr.name}</h3>
                <p className="text-xs font-bold text-[var(--accent)]">{tr.role}</p>
                <p className="text-xs text-[var(--text-secondary)]">{tr.branch}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CTA BAND */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[var(--bg-card)] border border-[var(--accent)] p-8 sm:p-12 text-center space-y-6 shadow-2xl">
          <h2 className="text-4xl sm:text-6xl font-display font-black uppercase">
            BECOME PART OF <span className="text-[var(--accent)]">THE LEGACY</span>
          </h2>
          <p className="text-sm text-[var(--text-secondary)] max-w-md mx-auto">
            Choose your branch and join 1,000+ members achieving their fitness goals at OXY GYM.
          </p>
          <button
            onClick={openBranchModal}
            className="px-8 py-4 rounded-full btn-accent text-sm font-black inline-flex items-center gap-2"
          >
            BUY MEMBERSHIP <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
