'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Sparkles } from 'lucide-react';

export interface FacilityCardItem {
  id: string;
  name: string;
  subtitle?: string;
  description: string;
  image: string;
  badge?: string;
  externalUrl?: string;
}

export const PARK_STREET_FULL_FACILITIES: FacilityCardItem[] = [
  {
    id: 'f-being-strong',
    name: 'Being Strong Crown Series',
    subtitle: '1st Time in East India',
    description: 'Topmost luxury tier in Being Strong leverage machines and power platforms. Click to view official equipment.',
    image: '/media/facilities/being_strong_crown_machines.png',
    badge: 'CLICKABLE OFFICIAL SITE ↗',
    externalUrl: 'https://www.jeraifitness.com/type-of-product/crown',
  },
  {
    id: 'f-oxymax',
    name: 'OXY Max Oxygen System',
    subtitle: 'Higher Oxygen Purity Than Outdoor Air',
    description: 'Bonphul O2 system delivering pure enriched oxygen across the floor for healthier, high-stamina workouts.',
    image: '/media/facilities/oxy_max_bonphul.png',
    badge: 'HEALTHIER WORKOUTS',
  },
  {
    id: 'f-hyperbaric',
    name: 'Hyperbaric Chamber Therapy',
    subtitle: 'Pressurized O2 Cellular Recovery',
    description: 'Clinical gold hyperbaric chamber accelerating muscle repair, brain focus, and cellular recovery.',
    image: '/media/facilities/hyperbaric_chamber.png',
    badge: 'DEEP RECOVERY',
  },
  {
    id: 'f-hyrox',
    name: 'HYROX Athletic Arena',
    subtitle: 'Dark Luxury Performance Hub',
    description: 'Custom dark turf arena with dark wood pillars, overhead lights, sled tracks, and competition gear.',
    image: '/media/facilities/hyrox_dark_gym.png',
    badge: 'ATHLETIC HUB',
  },
  {
    id: 'f-workpods',
    name: 'Executive Work Pods',
    subtitle: 'Soundproof Workstations',
    description: 'Executive work pods with high-speed Wi-Fi, gold ambient lighting, and charging ports for busy professionals.',
    image: '/media/facilities/work_pods.png',
    badge: 'WORK & TRAIN',
  },
  {
    id: 'f-infrared',
    name: 'Full-Spectrum Infrared Sauna',
    subtitle: 'Deep Thermal Detoxification',
    description: 'Therapeutic cedar wood infrared sauna suite for rapid muscle recovery and cardiovascular health.',
    image: '/media/facilities/infrared_sauna.png',
    badge: 'THERMAL SAUNA',
  },
  {
    id: 'f-redlight',
    name: 'Red Light Therapy Chamber',
    subtitle: 'Photobiomodulation Cell Repair',
    description: 'Clinical red light therapy pod boosting mitochondrial energy, skin collagen, and joint health.',
    image: '/media/facilities/red_light_therapy.png',
    badge: 'CELLULAR REPAIR',
  },
  {
    id: 'f-bls',
    name: 'BLS Certified Life Coaches',
    subtitle: 'Medical First-Aid Floor Staff',
    description: 'Experienced gym floor trainers holding official Basic Life Support (BLS) emergency certifications.',
    image: '/media/facilities/bls_coaches.png',
    badge: 'SAFETY CERTIFIED',
  },
  {
    id: 'f-doctor',
    name: 'In-House Medical Doctors',
    subtitle: 'On-Site Physician Care',
    description: 'Resident sports physicians providing health checkups, injury prevention, and exercise guidance.',
    image: '/media/facilities/inhouse_doctor.png',
    badge: 'MEDICAL CARE',
  },
  {
    id: 'f-cafeteria',
    name: 'High-Protein Cafeteria & Lounge',
    subtitle: 'Gourmet Macro Meal Prep',
    description: 'Executive nutrition lounge serving fresh macro-balanced gourmet meals and artisanal protein shakes.',
    image: '/media/facilities/cafeteria.png',
    badge: 'NUTRITION LOUNGE',
  },
  {
    id: 'f-aed',
    name: 'AED Emergency Defibrillator',
    subtitle: 'Emergency Cardiac Response',
    description: 'Automated External Defibrillator safety station ready for electric shock cardiac emergency response.',
    image: '/media/facilities/aed_device.png',
    badge: 'CARDIAC SAFETY',
  },
  {
    id: 'f-inbody',
    name: 'InBody Medical Scanners',
    subtitle: 'Segmental Muscle Analysis',
    description: 'Clinical-grade segmental muscle, visceral fat, and body composition analyzer kiosk.',
    image: '/media/facilities/inbody_scanner.png',
    badge: 'PRECISION METRICS',
  },
  {
    id: 'f-vending',
    name: 'Coffee & Tea Vending Station',
    subtitle: 'Automated Hot Beverages',
    description: 'Smart touch vending station providing fresh espresso, dark coffee, and organic tea.',
    image: '/media/facilities/vending_machine.png',
    badge: 'HOT BEVERAGES',
  },
];

export function FacilitiesCarousel() {
  // Split into 2 rows for the dual-row auto-scrolling carousel
  const row1 = PARK_STREET_FULL_FACILITIES.slice(0, Math.ceil(PARK_STREET_FULL_FACILITIES.length / 2));
  const row2 = PARK_STREET_FULL_FACILITIES.slice(Math.ceil(PARK_STREET_FULL_FACILITIES.length / 2));

  // Duplicate rows to create a seamless infinite loop
  const duplicatedRow1 = [...row1, ...row1, ...row1];
  const duplicatedRow2 = [...row2, ...row2, ...row2];

  const renderCard = (fac: FacilityCardItem, index: number) => {
    const isClickable = !!fac.externalUrl;

    const CardContent = (
      <div
        className={`group relative overflow-hidden rounded-3xl bg-[#111118]/90 border transition-all duration-300 shadow-2xl h-80 w-80 sm:w-96 shrink-0 flex flex-col justify-between p-6 ${
          fac.id === 'f-being-strong'
            ? 'border-amber-400 ring-2 ring-amber-400/50 hover:border-amber-300 hover:shadow-[0_0_35px_rgba(251,191,36,0.4)] cursor-pointer'
            : 'border-amber-500/20 hover:border-amber-400/80 hover:shadow-[0_0_30px_rgba(245,158,11,0.25)]'
        }`}
      >
        {/* Background Image */}
        <img
          src={fac.image}
          alt={fac.name}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090e] via-[#09090e]/60 to-black/20" />

        {/* Top Badge */}
        <div className="relative z-10 flex items-center justify-between">
          <span className="px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest bg-amber-500/90 text-black shadow-md">
            {fac.badge || 'FACILITY'}
          </span>
          {isClickable && (
            <span className="p-2 rounded-full bg-amber-400 text-black group-hover:scale-110 transition-transform shadow-lg">
              <ExternalLink className="w-3.5 h-3.5" />
            </span>
          )}
        </div>

        {/* Card Content */}
        <div className="relative z-10 space-y-2">
          {fac.subtitle && (
            <p className="text-[10px] font-bold uppercase tracking-wider text-amber-300">
              {fac.subtitle}
            </p>
          )}
          <h3 className="text-xl sm:text-2xl font-display font-black uppercase text-white group-hover:text-amber-300 transition-colors">
            {fac.name}
          </h3>
          <p className="text-xs text-zinc-300 line-clamp-2 leading-relaxed">
            {fac.description}
          </p>
          {isClickable && (
            <p className="text-[10px] font-extrabold uppercase text-amber-400 pt-1 tracking-wider flex items-center gap-1 group-hover:underline">
              <span>EXPLORE ON BEING STRONG SITE</span>
              <ExternalLink className="w-3 h-3" />
            </p>
          )}
        </div>
      </div>
    );

    if (isClickable) {
      return (
        <a
          key={`${fac.id}-${index}`}
          href={fac.externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block shrink-0"
        >
          {CardContent}
        </a>
      );
    }

    return <div key={`${fac.id}-${index}`} className="shrink-0">{CardContent}</div>;
  };

  return (
    <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden py-6 space-y-6">
      {/* Left Ultra-Soft Fade Mask Overlay */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-60 lg:w-96 bg-gradient-to-r from-[#050507] via-[#050507]/90 via-[#050507]/40 to-transparent z-20 pointer-events-none" />

      {/* Right Ultra-Soft Fade Mask Overlay */}
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-60 lg:w-96 bg-gradient-to-l from-[#050507] via-[#050507]/90 via-[#050507]/40 to-transparent z-20 pointer-events-none" />

      {/* ROW 1: Auto-scrolling Left */}
      <div className="flex overflow-hidden relative group [mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.5)_4%,black_16%,black_84%,rgba(0,0,0,0.5)_96%,transparent_100%)]">
        <motion.div
          className="flex gap-6 shrink-0 py-2"
          animate={{ x: ['0%', '-33.333%'] }}
          transition={{
            ease: 'linear',
            duration: 70, // Reduced speed (increased duration from 35s to 70s for a smooth, readable pace)
            repeat: Infinity,
          }}
        >
          {duplicatedRow1.map((fac, idx) => renderCard(fac, idx))}
        </motion.div>
      </div>

      {/* ROW 2: Auto-scrolling Right */}
      <div className="flex overflow-hidden relative group [mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.5)_4%,black_16%,black_84%,rgba(0,0,0,0.5)_96%,transparent_100%)]">
        <motion.div
          className="flex gap-6 shrink-0 py-2"
          animate={{ x: ['-33.333%', '0%'] }}
          transition={{
            ease: 'linear',
            duration: 75, // Reduced speed (increased duration from 40s to 75s for a smooth, readable pace)
            repeat: Infinity,
          }}
        >
          {duplicatedRow2.map((fac, idx) => renderCard(fac, idx))}
        </motion.div>
      </div>
    </div>
  );
}
