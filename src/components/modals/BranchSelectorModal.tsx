'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useBranchModal } from '@/context/BranchModalContext';

export function BranchSelectorModal() {
  const { isBranchModalOpen, closeBranchModal } = useBranchModal();
  const router = useRouter();

  if (!isBranchModalOpen) return null;

  const handleSelectBranch = (path: string) => {
    closeBranchModal();
    router.push(path);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeBranchModal}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] p-6 sm:p-8 shadow-2xl z-10"
        >
          <button
            onClick={closeBranchModal}
            className="absolute top-4 right-4 p-2 rounded-full bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-display font-bold uppercase tracking-wide">
              CHOOSE YOUR <span className="text-[var(--accent)]">OXY GYM BRANCH</span>
            </h2>
            <p className="text-sm text-[var(--text-secondary)] max-w-xl mx-auto mt-1">
              Select your location to view pricing plans, Jerai equipment specs, and local workout schedules.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* 1. Chandni Branch */}
            <div
              onClick={() => handleSelectBranch('/chandni#membership')}
              className="group cursor-pointer overflow-hidden rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-color)] p-5 hover:border-[var(--accent)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-extrabold uppercase bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    Open Now
                  </span>
                  <MapPin className="w-4 h-4 text-[var(--accent)]" />
                </div>
                <h3 className="text-xl font-display font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                  CHANDNI BRANCH
                </h3>
                <p className="text-xs text-[var(--text-secondary)] mt-1 line-clamp-2">
                  4th & 5th Floor, Archade Building, Chandni Chowk St, Esplanade
                </p>
                <div className="mt-4 space-y-1.5 text-xs text-[var(--text-muted)]">
                  <p>• Jerai Fitness Powerlifting Racks</p>
                  <p>• Interactive AI Workout Guidance Kiosk</p>
                  <p>• Dumbbells up to 60kg & Steam Bath</p>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-[var(--border-color)] flex items-center justify-between text-xs font-bold text-[var(--accent)]">
                <span>VIEW PRICING & PLANS</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* 2. Bhawanipur Branch */}
            <div
              onClick={() => handleSelectBranch('/bhawanipur#membership')}
              className="group cursor-pointer overflow-hidden rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-color)] p-5 hover:border-[var(--accent)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-extrabold uppercase bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    Open Now
                  </span>
                  <MapPin className="w-4 h-4 text-[var(--accent)]" />
                </div>
                <h3 className="text-xl font-display font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                  BHAWANIPUR BRANCH
                </h3>
                <p className="text-xs text-[var(--text-secondary)] mt-1 line-clamp-2">
                  2nd Floor, 82 Harish Mukherjee Rd, Patuapara, Bhowanipore
                </p>
                <div className="mt-4 space-y-1.5 text-xs text-[var(--text-muted)]">
                  <p>• Yoga, Pilates & Dance Studio</p>
                  <p>• Jerai Biomechanics & Power Racks</p>
                  <p>• Student Discounts & Doctor Offers</p>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-[var(--border-color)] flex items-center justify-between text-xs font-bold text-[var(--accent)]">
                <span>VIEW PRICING & PLANS</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* 3. Park Street Branch */}
            <div
              onClick={() => handleSelectBranch('/park-street#notify')}
              className="group cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-b from-[#14141c] to-[#0a0a0f] border border-amber-500/30 p-5 hover:border-amber-400 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[10px] font-extrabold uppercase bg-amber-500/20 text-amber-400 border border-amber-500/40">
                    <Sparkles className="w-3 h-3" /> COMING SOON
                  </span>
                  <MapPin className="w-4 h-4 text-amber-400" />
                </div>
                <h3 className="text-xl font-display font-bold text-amber-300 group-hover:text-amber-200 transition-colors">
                  PARK STREET FLAGSHIP
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  Park Street (Opening Winter 2026)
                </p>
                <div className="mt-4 space-y-1.5 text-xs text-zinc-400">
                  <p>• Ultra-Exclusive Luxury Concept</p>
                  <p>• Infrared & Cryo Recovery Suite</p>
                  <p>• Gold Edition Jerai Machines</p>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-amber-500/20 flex items-center justify-between text-xs font-bold text-amber-400">
                <span>GET NOTIFIED ON OPENING</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
