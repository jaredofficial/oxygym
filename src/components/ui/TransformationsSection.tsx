'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Trophy, Award, CheckCircle2 } from 'lucide-react';

export interface TransformationItem {
  id: string;
  name: string;
  branch: string;
  achievement: string;
  duration: string;
  description: string;
  image: string;
  category: string;
}

export const TRANSFORMATIONS_LIST: TransformationItem[] = [
  {
    id: 'tr-1',
    name: 'Dummy Member',
    branch: 'Chandni Branch',
    achievement: 'Gained 12kg Lean Muscle Mass',
    duration: '6 Months',
    description: 'Transformed physique using Jerai powerlifting platforms and customized high-protein nutrition guidance.',
    image: '/media/chandni/images/612240f744a250350ca899a0f3398205.jpg',
    category: 'Hypertrophy & Powerlifting',
  },
  {
    id: 'tr-2',
    name: 'Dummy Member',
    branch: 'Bhawanipur Branch',
    achievement: 'Lost 18kg Fat & Toned Core',
    duration: '5 Months',
    description: 'Combined HIIT cardio theater sessions, functional battle ropes, and free general training support.',
    image: '/media/bhawanipur/images/DSC_0080.JPG',
    category: 'Weight Loss & Conditioning',
  },
  {
    id: 'tr-3',
    name: 'Dummy Member',
    branch: 'Chandni Branch',
    achievement: 'Reduced Body Fat from 22% to 9%',
    duration: '4 Months',
    description: 'Trained with 60kg dumbbells and AI workout tracking kiosk for strict macro calibration.',
    image: '/media/chandni/images/89fc5be6c54433d0622e57d5fc0de2c6.jpg',
    category: 'Body Recomposition',
  },
  {
    id: 'tr-4',
    name: 'Dummy Member',
    branch: 'Bhawanipur Branch',
    achievement: 'Bench 140kg & Squat 200kg',
    duration: '8 Months',
    description: 'Hybrid strength athlete program with Olympic barbells and custom Jerai leverage machines.',
    image: '/media/bhawanipur/images/DSC_0065.JPG',
    category: 'Strength & Powerlifting',
  },
];

interface TransformationsSectionProps {
  branchFilter?: string;
}

export function TransformationsSection({ branchFilter }: TransformationsSectionProps) {
  const filtered = branchFilter
    ? TRANSFORMATIONS_LIST.filter((t) => t.branch.toLowerCase().includes(branchFilter.toLowerCase()))
    : TRANSFORMATIONS_LIST;

  return (
    <div className="space-y-10">
      <div className="text-center space-y-3">
        <h2 className="text-4xl sm:text-6xl font-display font-black uppercase">
          REAL MEMBER <span className="text-[var(--accent)]">TRANSFORMATIONS</span>
        </h2>
        <p className="text-sm text-[var(--text-secondary)] max-w-xl mx-auto">
          Over 100+ documented athletic transformations completed using Oxy Gym’s Jerai gear, steam recovery, and free general training provided to all members.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filtered.map((item) => (
          <motion.div
            whileHover={{ y: -6 }}
            key={item.id}
            className="group rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] overflow-hidden hover:border-[var(--accent)] transition-all duration-300 shadow-xl flex flex-col justify-between"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-transparent to-transparent" />
              
              <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-[var(--accent)] text-white shadow-md flex items-center gap-1">
                <Trophy className="w-3 h-3" /> {item.duration}
              </span>
            </div>

            <div className="p-6 space-y-3 flex-grow">
              <span className="text-[10px] font-extrabold uppercase text-[var(--accent)] tracking-wider">
                {item.branch}
              </span>

              <h3 className="text-xl font-display font-bold text-[var(--text-primary)]">
                {item.name}
              </h3>

              <div className="p-2.5 rounded-xl bg-[var(--accent-subtle)] border border-[var(--border-glow)] text-xs font-black text-[var(--accent)] flex items-center gap-2">
                <Award className="w-4 h-4 shrink-0" />
                <span>{item.achievement}</span>
              </div>

              <p className="text-xs text-[var(--text-secondary)] leading-relaxed pt-1">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
