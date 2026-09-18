'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryItem {
  src: string;
  title: string;
  category?: string;
}

const CHANDNI_GALLERY: GalleryItem[] = [
  { src: '/media/chandni/images/612240f744a250350ca899a0f3398205.jpg', title: 'Being Strong Powerlifting Rack' },
  { src: '/media/chandni/images/89fc5be6c54433d0622e57d5fc0de2c6.jpg', title: 'Olympic Deadlift & Barbell Platform' },
  { src: '/media/chandni/images/IMG_8875.jpg', title: 'Dumbbell Zone up to 60kg' },
  { src: '/media/chandni/images/IMG_9208.jpg', title: 'Protein & Coffee Station' },
  { src: '/media/chandni/images/IMG_0179.jpg', title: 'Interactive AI Workout Kiosk' },
  { src: '/media/chandni/images/DSC_0006.JPG', title: 'Steam Bath & Rejuvenation Suite' },
  { src: '/media/chandni/images/IMG_0065.jpg', title: 'Heavy Duty Strength Machines' },
  { src: '/media/chandni/images/IMG_0141.jpg', title: 'High Performance Training Floor' },
  { src: '/media/chandni/images/IMG_7370.jpg', title: 'Powerlifting Training Arena' },
  { src: '/media/chandni/images/IMG_8396.jpg', title: 'Customized Lever Arm Stations' },
  { src: '/media/chandni/images/IMG_9534.jpg', title: 'Full Floor Ergonomic Layout' },
  { src: '/media/chandni/images/ig.jpg', title: 'Community Transformation Zone' },
];

const BHAWANIPUR_GALLERY: GalleryItem[] = [
  { src: '/media/bhawanipur/images/DSC_0065.JPG', title: 'Battle Rope & Agility Indoor Turf' },
  { src: '/media/bhawanipur/images/DSC_0068.JPG', title: 'Cardio Deck & Endurance Station' },
  { src: '/media/bhawanipur/images/DSC_0080.JPG', title: 'Yoga, Pilates & Group Studio' },
  { src: '/media/bhawanipur/images/DSC_0081.JPG', title: 'Group Fitness Mobility Arena' },
  { src: '/media/bhawanipur/images/DSC_0106.JPG', title: 'Biomechanics Strength Decks' },
  { src: '/media/bhawanipur/images/DSC_0107.JPG', title: 'Free Weights & Dumbbells Zone' },
  { src: '/media/bhawanipur/images/DSC_0113.JPG', title: 'Locker & Shower Suites' },
  { src: '/media/bhawanipur/images/DSC_0687.JPG', title: 'South Kolkata Powerhouse Floor' },
  { src: '/media/bhawanipur/images/DSC_0698.JPG', title: 'Jerai Biomechanics Machines' },
  { src: '/media/bhawanipur/images/DSC_0780.JPG', title: 'High-Energy Dance Studio' },
  { src: '/media/bhawanipur/images/DSC_0794.JPG', title: 'Functional Muscle Conditioning' },
  { src: '/media/bhawanipur/images/dec2025/DSC_0066.JPG', title: 'Modern Clean Training Floor' },
];

const PARK_STREET_GALLERY: GalleryItem[] = [
  { src: '/media/being strong logo.png', title: 'Being Strong Crown Series Official Partner' },
  { src: '/media/park street logo.png', title: 'Park Street Luxury Flagship Concept' },
  { src: '/media/chandni/images/IMG_8875.jpg', title: 'Ultra-Luxury Gold Edition Racks' },
  { src: '/media/bhawanipur/images/DSC_0065.JPG', title: 'Official HYROX Training Arena' },
  { src: '/media/chandni/images/612240f744a250350ca899a0f3398205.jpg', title: 'Infrared & Cryo Recovery Suites' },
  { src: '/media/chandni/images/IMG_9208.jpg', title: 'Executive Work Pods & Cafeteria' },
];

interface BranchGalleryProps {
  branch: 'chandni' | 'bhawanipur' | 'park-street';
}

export function BranchGallery({ branch }: BranchGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const images =
    branch === 'chandni'
      ? CHANDNI_GALLERY
      : branch === 'bhawanipur'
      ? BHAWANIPUR_GALLERY
      : PARK_STREET_GALLERY;

  const branchName =
    branch === 'chandni'
      ? 'CHANDNI'
      : branch === 'bhawanipur'
      ? 'BHAWANIPUR'
      : 'PARK STREET';

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % images.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-3xl sm:text-5xl font-display font-black uppercase">
          {branchName} <span className="text-[var(--accent)]">PHOTO GALLERY</span>
        </h2>
        <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-lg mx-auto">
          Explore authentic facility photos of equipment, steam bath suites, and training floors.
        </p>
      </div>

      {/* Grid Display */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.04, y: -4 }}
            transition={{ duration: 0.25 }}
            onClick={() => setLightboxIndex(idx)}
            className="group relative cursor-pointer overflow-hidden rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent)] transition-all shadow-lg aspect-4/3"
          >
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <span className="text-xs font-bold text-white line-clamp-1">{img.title}</span>
              <span className="text-[10px] font-semibold text-[var(--accent)] flex items-center gap-1 mt-0.5">
                <Maximize2 className="w-3 h-3" /> Click to enlarge
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxIndex(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-md"
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full max-h-[85vh] rounded-3xl overflow-hidden bg-black border border-white/20 shadow-2xl z-10 flex flex-col items-center justify-center"
            >
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-black/70 text-white hover:bg-[var(--accent)] transition-all z-20"
                aria-label="Close image preview"
              >
                <X className="w-6 h-6" />
              </button>

              <button
                onClick={handlePrev}
                className="absolute left-4 p-3 rounded-full bg-black/70 text-white hover:bg-[var(--accent)] transition-all z-20"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 p-3 rounded-full bg-black/70 text-white hover:bg-[var(--accent)] transition-all z-20"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <img
                src={images[lightboxIndex].src}
                alt={images[lightboxIndex].title}
                className="w-full max-h-[75vh] object-contain"
              />

              <div className="w-full bg-black/80 py-3 px-6 text-center border-t border-white/10">
                <p className="text-sm font-bold text-white">{images[lightboxIndex].title}</p>
                <p className="text-[10px] text-zinc-400">
                  Image {lightboxIndex + 1} of {images.length}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
