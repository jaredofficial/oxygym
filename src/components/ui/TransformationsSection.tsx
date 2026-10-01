'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import { useBranchModal } from '@/context/BranchModalContext';

export interface TransformationItem {
  id: string;
  clientName: string;
  duration: string;
  weightResult: string;
  branch: 'Bhawanipur Branch' | 'Chandni Branch';
  image: string;
  beforeImage?: string;
  afterImage?: string;
  resultImage?: string;
  description?: string;
}

export const TRANSFORMATIONS_LIST: TransformationItem[] = [
  {
    id: 'tr-ch-safa-rahman',
    clientName: 'Safa Rahman Client',
    duration: '2 Months',
    weightResult: '8 KG Lost',
    branch: 'Chandni Branch',
    image: '/media/transformations/chandni_safa_after.png',
    beforeImage: '/media/transformations/chandni_safa_before.png',
    afterImage: '/media/transformations/chandni_safa_after.png',
    description: '8 KG weight loss achieved in only 2 months with Trainer Safa Rahman at Oxy Gym Chandni.',
  },
  {
    id: 'tr-ch-burhanuddin',
    clientName: 'Burhanuddin',
    duration: '90 Days',
    weightResult: '7 KG Lost',
    branch: 'Chandni Branch',
    image: '/media/transformations/chandni_burhanuddin_7kg_down.jpg',
    resultImage: '/media/transformations/chandni_burhanuddin_journey.png',
    description: 'More than weight loss — a health transformation with personalized coaching & progress tracking at Oxy Gym Chandni.',
  },
  {
    id: 'tr-bh-1',
    clientName: 'Skinny to Strong Athlete',
    duration: '3 Months',
    weightResult: '8 KG Gained',
    branch: 'Bhawanipur Branch',
    image: '/media/transformations/bhawanipur_8kg_gain.jpg',
    resultImage: '/media/transformations/bhawanipur_8kg_result.jpg',
    description: 'Built with consistency, coaching & discipline at Oxy Gym Bhawanipur.',
  },
  {
    id: 'tr-bh-2',
    clientName: 'Coach Sarfraz Client',
    duration: '4 Months',
    weightResult: 'Lean Muscle Gain',
    branch: 'Bhawanipur Branch',
    image: '/media/transformations/bhawanipur_sarfraz_transform.jpg',
    resultImage: '/media/transformations/bhawanipur_sarfraz_result.jpg',
    description: '1-on-1 trainer guided transformation focused on lean muscle mass, strength, and confidence.',
  },
  {
    id: 'tr-ch-1',
    clientName: 'Chandni Member',
    duration: '5 Months',
    weightResult: '14 KG Lost',
    branch: 'Chandni Branch',
    image: '/media/transformations/chandni_female_toning.jpg',
    description: 'Total body toning and fat loss transformation at Oxy Gym Chandni.',
  },
];

interface TransformationsSectionProps {
  branchFilter?: string;
}

export function TransformationsSection({ branchFilter }: TransformationsSectionProps) {
  const [selectedItem, setSelectedItem] = useState<TransformationItem | null>(null);
  const { openBranchModal } = useBranchModal();

  const filteredItems = branchFilter
    ? TRANSFORMATIONS_LIST.filter((t) => t.branch.toLowerCase().includes(branchFilter.toLowerCase()))
    : TRANSFORMATIONS_LIST;

  return (
    <div className="space-y-10">
      {/* Section Header */}
      <div className="text-center space-y-3">
        <h2 className="text-4xl sm:text-6xl font-display font-black uppercase leading-tight">
          MEMBER <span className="text-[var(--accent)]">TRANSFORMATIONS</span>
        </h2>
        <p className="text-sm text-[var(--text-secondary)] max-w-xl mx-auto">
          Real results achieved by active members across Oxy Gym branches.
        </p>
      </div>

      {/* Clean Grid of Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <motion.div
            whileHover={{ y: -4 }}
            key={item.id}
            onClick={() => setSelectedItem(item)}
            className="group relative rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent)] transition-all duration-300 shadow-xl overflow-hidden cursor-pointer"
          >
            {/* Image Preview Container */}
            <div className="relative h-72 sm:h-80 overflow-hidden bg-black">
              {item.beforeImage && item.afterImage ? (
                <div className="grid grid-cols-2 h-full w-full gap-0.5 bg-zinc-800">
                  <div className="relative h-full overflow-hidden">
                    <img
                      src={item.beforeImage}
                      alt="Before"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded text-[9px] font-black uppercase bg-black/80 text-white">
                      BEFORE
                    </span>
                  </div>
                  <div className="relative h-full overflow-hidden">
                    <img
                      src={item.afterImage}
                      alt="After"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded text-[9px] font-black uppercase bg-[var(--accent)] text-white">
                      AFTER
                    </span>
                  </div>
                </div>
              ) : (
                <img
                  src={item.image}
                  alt={`${item.clientName} - ${item.weightResult}`}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

              {/* Branch Tag */}
              <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-black/70 text-white border border-white/20 backdrop-blur-md z-10">
                {item.branch}
              </span>
            </div>

            {/* Clean Info: Name, Duration & Weight Result */}
            <div className="p-5 space-y-1 bg-[var(--bg-card)]">
              <div className="text-xs font-black uppercase text-[var(--accent)] tracking-wider">
                {item.clientName}
              </div>
              <div className="flex items-center justify-between text-[11px] font-bold text-[var(--text-secondary)] uppercase">
                <span>DURATION: {item.duration}</span>
                <span className="text-[var(--text-primary)] font-black">{item.weightResult}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Clean Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-md"
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] p-6 sm:p-8 shadow-2xl z-10 space-y-6"
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-white transition-all z-20"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-4 text-center">
                {/* Poster / Comparison Display */}
                <div className="rounded-2xl overflow-hidden border border-[var(--border-color)] bg-black shadow-lg">
                  {selectedItem.beforeImage && selectedItem.afterImage ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-2 bg-black">
                      <div className="space-y-2">
                        <div className="relative rounded-xl overflow-hidden max-h-[450px]">
                          <img
                            src={selectedItem.beforeImage}
                            alt="Before"
                            className="w-full h-full object-contain mx-auto"
                          />
                        </div>
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-black uppercase bg-black text-white border border-white/20">
                          BEFORE
                        </span>
                      </div>
                      <div className="space-y-2">
                        <div className="relative rounded-xl overflow-hidden max-h-[450px]">
                          <img
                            src={selectedItem.afterImage}
                            alt="After"
                            className="w-full h-full object-contain mx-auto"
                          />
                        </div>
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-black uppercase bg-[var(--accent)] text-white">
                          AFTER ({selectedItem.weightResult})
                        </span>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={selectedItem.resultImage || selectedItem.image}
                      alt={selectedItem.clientName}
                      className="w-full h-auto max-h-[550px] object-contain mx-auto"
                    />
                  )}
                </div>

                {/* Details */}
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-bold uppercase text-[var(--accent)]">
                    {selectedItem.branch} • DURATION: {selectedItem.duration}
                  </span>
                  <h3 className="text-2xl font-display font-black uppercase text-[var(--text-primary)]">
                    {selectedItem.clientName} — {selectedItem.weightResult}
                  </h3>
                  {selectedItem.description && (
                    <p className="text-xs text-[var(--text-secondary)] max-w-md mx-auto">
                      {selectedItem.description}
                    </p>
                  )}
                </div>

                {/* CTA */}
                <div className="pt-3">
                  <button
                    onClick={() => {
                      setSelectedItem(null);
                      openBranchModal();
                    }}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-full btn-accent text-xs font-black uppercase inline-flex items-center justify-center gap-2 shadow-xl"
                  >
                    <span>START YOUR TRANSFORMATION</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
