'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface StatCounterProps {
  value: number;
  suffix?: string;
  label: string;
  icon?: string;
}

export function StatCounter({ value, suffix = '', label }: StatCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000; // ms
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent)] transition-all duration-300 shadow-lg">
      <div className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-[var(--accent)] tracking-tight">
        {count.toLocaleString()}
        <span>{suffix}</span>
      </div>
      <p className="mt-2 text-xs sm:text-sm font-black uppercase tracking-wider text-[var(--text-secondary)]">
        {label}
      </p>
    </div>
  );
}
