'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 250);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-50 group flex items-center justify-center w-20 h-20 rounded-full bg-black/90 backdrop-blur-2xl border border-[var(--accent)]/60 shadow-[0_12px_40px_rgba(0,0,0,0.9)] hover:scale-105 hover:border-[var(--accent)] transition-all duration-300"
        >
          {/* Rotating Text Circle SVG */}
          <div className="absolute inset-0 w-full h-full animate-[spin_12s_linear_infinite] pointer-events-none p-1 flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path
                id="circlePath"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                fill="none"
              />
              <text fill="#ffffff" className="text-[9.5px] font-black uppercase tracking-[0.22em] drop-shadow-md">
                <textPath href="#circlePath" startOffset="0%">
                  SCROLL TO TOP • SCROLL TO TOP • 
                </textPath>
              </text>
            </svg>
          </div>

          {/* Center Red Arrow Circle */}
          <div className="relative z-10 w-10 h-10 rounded-full bg-[var(--accent)] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <ArrowUp className="w-5 h-5 stroke-[3]" />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
