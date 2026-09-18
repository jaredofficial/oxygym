'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Mail, CheckCircle2, ShieldCheck, ArrowRight, MapPin, Clock } from 'lucide-react';
import { InstagramIcon } from '@/components/ui/SocialIcons';
import { FogEffect } from '@/components/ui/FogEffect';
import { BRANCHES_DATA } from '@/data/gymData';
import { BranchLocationCard } from '@/components/ui/BranchLocationCard';

export default function ParkStreetPage() {
  const branch = BRANCHES_DATA['park-street'];
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleNotifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <div className="relative min-h-screen bg-[#050507] text-[#fbf9f5] overflow-hidden pb-16">
      {/* Canvas Fog Animation Background */}
      <FogEffect />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 pt-32">
        {/* 1. MOODY LUXURY HERO WITH SMOOTH BLEND */}
        <section className="relative text-center space-y-8 max-w-4xl mx-auto min-h-[60vh] flex flex-col items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-7xl lg:text-8xl font-display font-black uppercase tracking-tight text-white leading-none drop-shadow-2xl"
          >
            OXY GYM PARK STREET <br />
            <span className="text-gradient-accent">COMING SOON</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-xl text-zinc-300 max-w-3xl mx-auto font-medium leading-relaxed"
          >
            Aimed specifically for HYROX athletes, elite lifters, and high-performance individuals. Situated right in the heart of Park Street with East India’s first Being Strong Crown Series equipment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/40 text-xs font-black uppercase tracking-widest backdrop-blur-md shadow-lg"
          >
            <Sparkles className="w-4 h-4 text-amber-400" /> OPENING PUJA 2026
          </motion.div>
        </section>

        {/* 2. TEASER HIGHLIGHTS */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-7 rounded-3xl bg-[#14141c]/70 border border-amber-500/25 backdrop-blur-md space-y-3 hover:border-amber-400 transition-all hover:-translate-y-1 shadow-xl">
            <span className="text-3xl">👑</span>
            <h3 className="text-xl font-display font-bold text-amber-300 uppercase">
              Being Strong Crown Series
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              The topmost luxury tier in Being Strong equipment — introduced for the first time in East India exclusively at Park Street.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-[#14141c]/70 border border-amber-500/25 backdrop-blur-md space-y-3 hover:border-amber-400 transition-all hover:-translate-y-1 shadow-xl">
            <span className="text-3xl">🔥</span>
            <h3 className="text-xl font-display font-bold text-amber-300 uppercase">
              Infrared Sauna & Red Light Therapy
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Advanced red light cellular stimulation and full-spectrum infrared sauna for maximum muscle repair & joint rejuvenation.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-[#14141c]/70 border border-amber-500/25 backdrop-blur-md space-y-3 hover:border-amber-400 transition-all hover:-translate-y-1 shadow-xl">
            <span className="text-3xl">💨</span>
            <h3 className="text-xl font-display font-bold text-amber-300 uppercase">
              Hyperbaric Oxygen Chamber
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Clinical-grade hyperbaric oxygen therapy chambers accelerating recovery, stamina replenishment, and mental focus.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-[#14141c]/70 border border-amber-500/25 backdrop-blur-md space-y-3 hover:border-amber-400 transition-all hover:-translate-y-1 shadow-xl">
            <span className="text-3xl">⚡</span>
            <h3 className="text-xl font-display font-bold text-amber-300 uppercase">
              HYROX Athlete Training Arena
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Complete official HYROX competition gear, sled tracks, wall balls, ski-ergs, and endurance stations designed for elite competitors.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-[#14141c]/70 border border-amber-500/25 backdrop-blur-md space-y-3 hover:border-amber-400 transition-all hover:-translate-y-1 shadow-xl">
            <span className="text-3xl">💻</span>
            <h3 className="text-xl font-display font-bold text-amber-300 uppercase">
              Private Work Pods
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Soundproof executive work pods with high-speed Wi-Fi, ergonomic seating, and charging ports for busy professionals.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-[#14141c]/70 border border-amber-500/25 backdrop-blur-md space-y-3 hover:border-amber-400 transition-all hover:-translate-y-1 shadow-xl">
            <span className="text-3xl">☕</span>
            <h3 className="text-xl font-display font-bold text-amber-300 uppercase">
              High-Speed Cafeteria & Tonic Bar
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Artisanal protein shakes, cold-pressed juices, organic espresso, and chef-curated macro meals.
            </p>
          </div>
        </section>

        {/* 3. EMAIL CAPTURE FORM (#notify) */}
        <section id="notify" className="max-w-3xl mx-auto scroll-mt-28">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#181822] to-[#0c0c12] border border-amber-500/40 p-8 sm:p-12 shadow-2xl text-center space-y-6">
            <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-2">
              <h2 className="text-3xl sm:text-5xl font-display font-black uppercase text-white">
                GET VIP <span className="text-amber-400">PRE-LAUNCH INVITATION</span>
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 max-w-md mx-auto">
                Sign up to receive early access preview passes, founding member discounts, and VIP opening launch tickets.
              </p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="p-6 rounded-2xl bg-amber-500/20 border border-amber-500/40 text-amber-300 space-y-2"
              >
                <CheckCircle2 className="w-12 h-12 text-amber-400 mx-auto animate-bounce" />
                <h3 className="text-xl font-display font-bold">YOU’RE ON THE VIP LIST!</h3>
                <p className="text-xs text-zinc-300">
                  We’ve reserved your spot. We will email launch details to <span className="font-mono text-white font-bold">{email}</span>.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleNotifySubmit} className="max-w-md mx-auto space-y-3">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-grow px-4 py-3.5 rounded-full bg-[#08080d] border border-amber-500/30 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3.5 rounded-full bg-amber-400 hover:bg-amber-300 text-black font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shrink-0 transition-all hover:scale-105"
                  >
                    <span>NOTIFY ME</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-[10px] text-zinc-500">
                  🔒 Strictly confidential. Founding member benefits will be sent directly to your inbox.
                </p>
              </form>
            )}

            {/* INSTAGRAM LINK */}
            <div className="pt-4 border-t border-amber-500/20 flex items-center justify-center gap-2 text-xs text-zinc-400">
              <span>Follow updates on Instagram:</span>
              <a
                href="https://www.instagram.com/oxygym.gold.parkstreet/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 font-bold text-amber-400 hover:text-amber-300 underline"
              >
                <InstagramIcon className="w-4 h-4" /> @oxygym.gold.parkstreet
              </a>
            </div>
          </div>
        </section>

        {/* 4. LOCATION TEASER */}
        <section className="max-w-7xl mx-auto">
          <BranchLocationCard branch={branch} />
        </section>
      </div>
    </div>
  );
}
