'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function InitialLoader() {
  const [loading, setLoading] = useState(true);
  const [fillProgress, setFillProgress] = useState(0);

  useEffect(() => {
    // Fill progress animation timer
    const interval = setInterval(() => {
      setFillProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 45);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] bg-[#08080c] flex flex-col items-center justify-center p-6 select-none overflow-hidden"
        >
          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[var(--accent)]/20 rounded-full blur-[120px] pointer-events-none" />

          {/* Logo Fill Animation Container */}
          <div className="relative w-56 sm:w-72 h-24 sm:h-32 flex items-center justify-center mb-6">
            {/* Background Logo Outline (Dim / Darkened) */}
            <img
              src="/media/oxy gym logo.png"
              alt="Oxy Gym Logo Background"
              className="absolute inset-0 w-full h-full object-contain filter grayscale opacity-25"
            />

            {/* Foreground Logo Filling Up with Color */}
            <div
              className="absolute inset-0 overflow-hidden transition-all duration-75 ease-linear"
              style={{ clipPath: `inset(${100 - fillProgress}% 0 0 0)` }}
            >
              <img
                src="/media/oxy gym logo.png"
                alt="Oxy Gym Logo Filled"
                className="w-full h-full object-contain filter brightness-110 drop-shadow-[0_0_20px_rgba(255,30,39,0.8)]"
              />
            </div>
          </div>

          {/* Title & Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center space-y-2 relative z-10"
          >
            <h2 className="text-xl sm:text-2xl font-display font-black uppercase tracking-widest text-white">
              OXY GYM <span className="text-[var(--accent)]">KOLKATA</span>
            </h2>
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-zinc-400">
              LUXURY MADE AFFORDABLE
            </p>

            {/* Progress Bar Line */}
            <div className="w-48 sm:w-64 h-1 bg-zinc-800 rounded-full mx-auto mt-4 overflow-hidden border border-white/5">
              <motion.div
                className="h-full bg-gradient-to-r from-[var(--accent)] via-red-500 to-amber-500 rounded-full shadow-[0_0_10px_var(--accent)]"
                style={{ width: `${fillProgress}%` }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
