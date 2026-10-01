'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Mail,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  MapPin,
  Clock,
  ExternalLink,
  Wind,
  Flame,
  Sun,
  HeartPulse,
  Award,
  Activity,
  Stethoscope,
  Utensils,
  Coffee,
  Dumbbell,
  Laptop
} from 'lucide-react';
import { InstagramIcon } from '@/components/ui/SocialIcons';
import { FogEffect } from '@/components/ui/FogEffect';
import { BRANCHES_DATA } from '@/data/gymData';
import { BranchLocationCard } from '@/components/ui/BranchLocationCard';
import { FacilitiesCarousel } from '@/components/ui/FacilitiesCarousel';

export default function ParkStreetPage() {
  const branch = BRANCHES_DATA['park-street'];
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleNotifySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    try {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: 'f9145200-8707-4541-abad-a89bdc082026',
          subject: 'Park Street VIP Pre-Launch Invitation Request',
          email,
          branch: 'Park Street Flagship',
        }),
      });
    } catch (err) {
      console.error('VIP form submit error:', err);
    }
    setSubmitted(true);
  };

  const parkStreetFacilities = [
    {
      id: 'bs-crown',
      title: 'Being Strong Crown Series',
      subtitle: 'East India First Exclusive Tier',
      description: 'The topmost luxury line of heavy-duty biomechanics gear powered by Being Strong. Engineered for unmatched resistance and muscle hypertrophy.',
      image: '/media/chandni/images/IMG_8875.webp',
      badge: 'OFFICIAL PARTNER',
      externalUrl: 'https://www.jeraifitness.com/type-of-product/crown',
      icon: Dumbbell,
    },
    {
      id: 'oxy-max',
      title: 'OXY Max Oxygen System',
      subtitle: 'Higher Oxygen Purity Than Outdoor Air',
      description: 'Advanced indoor air enrichment system delivering significantly higher oxygen levels than outdoor air — making workouts healthier, boosting stamina, and reducing fatigue.',
      image: '/media/facilities/oxy_max.png',
      badge: 'HEALTHIER WORKOUTS',
      icon: Wind,
    },
    {
      id: 'infrared-sauna',
      title: 'Full-Spectrum Infrared Sauna',
      subtitle: 'Deep Thermal Muscle Detox',
      description: 'Dedicated cedar wood infrared sauna suite providing deep thermal penetration for rapid muscle recovery, joint relief, and cardiovascular rejuvenation.',
      image: '/media/facilities/infrared_sauna.png',
      badge: 'THERMAL RECOVERY',
      icon: Flame,
    },
    {
      id: 'red-light',
      title: 'Red Light Therapy Chamber',
      subtitle: 'Photobiomodulation Cellular Repair',
      description: 'Clinical red light therapy pod designed to stimulate mitochondrial ATP production, enhance skin collagen, and speed up micro-tear muscle repair.',
      image: '/media/facilities/red_light_therapy.png',
      badge: 'CELLULAR REPAIR',
      icon: Sun,
    },
    {
      id: 'aed-device',
      title: 'AED Emergency Defibrillator',
      subtitle: 'On-Site Emergency Cardiac Response',
      description: 'Equipped with Automated External Defibrillator (AED) safety stations ready to deliver immediate life-saving electric shocks in case of cardiac arrest.',
      image: '/media/facilities/aed_device.png',
      badge: 'CARDIAC SAFETY',
      icon: HeartPulse,
    },
    {
      id: 'bls-coaches',
      title: 'BLS Certified Life Coaches',
      subtitle: 'Medical First-Aid Qualified Floor Staff',
      description: 'Experienced gym floor trainers and life coaches holding official Basic Life Support (BLS) emergency certifications for complete floor safety.',
      image: '/media/facilities/bls_coaches.png',
      badge: 'CERTIFIED SAFETY',
      icon: Award,
    },
    {
      id: 'inbody-scanner',
      title: 'InBody Medical Scanners',
      subtitle: 'Segmental Muscle & Fat Analysis',
      description: 'Clinical-grade InBody composition scanner calculating precise segmental lean mass, body fat percentage, visceral fat level, and metabolic rate.',
      image: '/media/facilities/inbody_scanner.png',
      badge: 'PRECISION METRICS',
      icon: Activity,
    },
    {
      id: 'inhouse-doctor',
      title: 'In-House Medical Doctors',
      subtitle: 'On-Site Physician Consultations',
      description: 'Resident sports physicians and medical consultants conducting health checks, injury assessments, and personalized fitness prescriptions.',
      image: '/media/facilities/inhouse_doctor.png',
      badge: 'MEDICAL CARE',
      icon: Stethoscope,
    },
    {
      id: 'cafeteria',
      title: 'High-Protein Cafeteria & Lounge',
      subtitle: 'Gourmet Macro Meals & Smoothies',
      description: 'Executive nutrition cafeteria serving fresh macro-balanced gourmet meals, whey protein shakes, pre-workout tonics, and clean fuel.',
      image: '/media/facilities/cafeteria.png',
      badge: 'NUTRITION LOUNGE',
      icon: Utensils,
    },
    {
      id: 'vending',
      title: 'Coffee & Tea Vending Station',
      subtitle: 'Automated Hot Beverage Station',
      description: 'Smart touch vending machine station providing fresh espresso, dark coffee, and organic tea for pre-workout caffeine boosts.',
      image: '/media/facilities/vending_machine.png',
      badge: 'HOT BEVERAGES',
      icon: Coffee,
    },
    {
      id: 'hyrox-arena',
      title: 'HYROX Athletic Arena',
      subtitle: 'Official Competition Gear & Sleds',
      description: 'Custom indoor turf arena fitted with official HYROX competition sleds, ski-ergs, wall balls, and assault bikes for competitive athletes.',
      image: '/media/bhawanipur/images/DSC_0065.webp',
      badge: 'ATHLETIC HUB',
      icon: Dumbbell,
    },
    {
      id: 'work-pods',
      title: 'Executive Work Pods',
      subtitle: 'Soundproof High-Speed Workspaces',
      description: 'Quiet soundproof work cabins with high-speed Wi-Fi, power ports, and ergonomic seating so executive members never miss a meeting.',
      image: '/media/chandni/images/IMG_9208.webp',
      badge: 'WORK & TRAIN',
      icon: Laptop,
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#050507] text-[#fbf9f5] overflow-hidden pb-16">
      {/* Canvas Fog Animation Background */}
      <FogEffect />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 pt-36 sm:pt-44 lg:pt-48">
        {/* 1. MOODY LUXURY HERO WITH SMOOTH BLEND */}
        <section className="relative text-center space-y-8 max-w-4xl mx-auto min-h-[60vh] flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/50 text-xs font-black uppercase tracking-widest backdrop-blur-md shadow-2xl animate-pulse"
          >
            <Sparkles className="w-4 h-4 text-amber-400" /> OPENING ON THE 11TH OF OCTOBER
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-7xl lg:text-8xl font-display font-black uppercase tracking-tight text-white leading-none drop-shadow-2xl"
          >
            OXY GYM PARK STREET <br />
            <span className="text-gradient-accent">GRAND LAUNCH</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-xl text-zinc-300 max-w-3xl mx-auto font-medium leading-relaxed"
          >
            Kolkata’s pinnacle ultra-luxury fitness hub & HYROX athletic facility — opening on the <span className="font-bold text-amber-400 underline decoration-amber-500/50">11th of October 2026</span> in the heart of Park Street featuring East India’s first <a href="https://www.jeraifitness.com/type-of-product/crown" target="_blank" rel="noopener noreferrer" className="text-amber-400 font-bold hover:underline inline-flex items-center gap-1">Being Strong Crown Series <ExternalLink className="w-4 h-4" /></a> equipment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-2"
          >
            <a
              href="#notify"
              className="px-8 py-4 rounded-full bg-amber-400 hover:bg-amber-300 text-black text-sm font-black uppercase tracking-wider inline-flex items-center gap-2 shadow-2xl transition-all hover:scale-105"
            >
              <span>RESERVE VIP PASS</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="https://www.jeraifitness.com/type-of-product/crown"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-[#181822] hover:bg-[#20202e] text-amber-300 border border-amber-500/40 text-sm font-bold uppercase tracking-wider inline-flex items-center gap-2 backdrop-blur-md transition-all hover:scale-105"
            >
              <span>EXPLORE BEING STRONG CROWN GEAR</span>
              <ExternalLink className="w-4 h-4 text-amber-400" />
            </a>
          </motion.div>
        </section>

        {/* 3. DUAL-ROW AUTO-SCROLLING FACILITIES CAROUSEL */}
        <section className="space-y-6">
          <div className="text-center flex flex-col items-center gap-3">
            <span className="inline-block px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-widest bg-amber-500/15 text-amber-300 border border-amber-500/30 mb-2">
              WORLD-CLASS AMENITIES
            </span>
            <h2 className="text-4xl sm:text-6xl font-display font-black uppercase text-white leading-tight">
              PARK STREET <span className="text-amber-400">EXCLUSIVE FACILITIES</span>
            </h2>
            <p className="text-sm text-zinc-400 max-w-xl mx-auto pt-1">
              Swipe or hover over any card below to explore our luxury facilities. Click the Being Strong Crown card to visit their official website.
            </p>
          </div>

          <FacilitiesCarousel />
        </section>

        {/* 4. EMAIL CAPTURE FORM (#notify) */}
        <section id="notify" className="max-w-3xl mx-auto scroll-mt-28">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#181822] to-[#0c0c12] border border-amber-500/40 p-8 sm:p-12 shadow-2xl text-center space-y-6">
            <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col items-center gap-3">
              <span className="inline-block px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-widest bg-amber-500/20 text-amber-300 border border-amber-500/40 mb-2">
                GRAND OPENING: 11TH OCTOBER 2026
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-black uppercase text-white leading-tight">
                GET VIP <span className="text-amber-400">PRE-LAUNCH INVITATION</span>
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 max-w-md mx-auto pt-1">
                Sign up to receive founding member passes, preview tour access, and VIP launch tickets for the 11th of October opening.
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
                  We’ve reserved your spot for the 11th October launch. We will email launch details to <span className="font-mono text-white font-bold">{email}</span>.
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
                  🔒 Strictly confidential. VIP launch passes will be sent directly to your inbox.
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

        {/* 5. LOCATION CARD */}
        <section className="max-w-7xl mx-auto">
          <BranchLocationCard branch={branch} />
        </section>
      </div>
    </div>
  );
}
