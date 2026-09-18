'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dumbbell, Flame, Zap, Shield, Maximize2 } from 'lucide-react';
import { EQUIPMENT_ITEMS, EquipmentItem } from '@/data/gymData';

interface EquipmentGridProps {
  branchFilter?: 'all' | 'chandni' | 'bhawanipur' | 'bhavanipur';
}

export function EquipmentGrid({ branchFilter = 'all' }: EquipmentGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = ['All', 'Strength', 'Free Weights', 'Cardio', 'Functional'];

  const filteredItems = EQUIPMENT_ITEMS.filter((item) => {
    const isBhawanipurTarget = branchFilter === 'bhawanipur' || branchFilter === 'bhavanipur';
    const isBhawanipurItem = item.branch === 'bhawanipur' || item.branch === 'bhavanipur';
    const matchesBranch = branchFilter === 'all' || item.branch === branchFilter || (isBhawanipurTarget && isBhawanipurItem);
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    return matchesBranch && matchesCategory;
  });

  return (
    <div className="space-y-8">
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
              activeCategory === cat
                ? 'bg-[var(--accent)] text-[var(--badge-text)] shadow-lg shadow-[var(--accent-glow)]'
                : 'bg-[var(--bg-card)] text-[var(--text-secondary)] border border-[var(--border-color)] hover:border-[var(--accent)]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid Items */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredItems.map((item) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={item.id}
              className="group relative overflow-hidden rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent)] transition-all duration-300 shadow-xl"
            >
              {/* Image Container with Hover Scale */}
              <div className="relative h-64 overflow-hidden bg-black/40">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-transparent to-black/30" />
                
                {/* Category Badge */}
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded text-[10px] font-extrabold uppercase tracking-wider bg-[var(--bg-primary)]/80 text-[var(--accent)] border border-[var(--border-glow)] backdrop-blur-sm">
                  {item.category}
                </span>

                {/* Lightbox trigger */}
                <button
                  onClick={() => setSelectedImage(item.image)}
                  className="absolute top-3 right-3 p-2 rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:scale-110"
                  aria-label="View full image"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              {/* Card Details */}
              <div className="p-5 space-y-2">
                <h4 className="text-lg font-display font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                  {item.name}
                </h4>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md cursor-pointer"
        >
          <img
            src={selectedImage}
            alt="Equipment Zoom"
            className="max-w-full max-h-[85vh] rounded-2xl object-contain border border-[var(--accent)] shadow-2xl"
          />
        </div>
      )}
    </div>
  );
}
