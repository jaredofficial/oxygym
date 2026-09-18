'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Sparkles, ShieldCheck, MessageCircle, MapPin, Award, GraduationCap, Stethoscope, Clock } from 'lucide-react';
import { BHAWANIPUR_PRICING, CHANDNI_PRICING, OfferCategory, PlanOption } from '@/data/gymData';
import { useBranchModal } from '@/context/BranchModalContext';

interface PricingTableProps {
  branch?: 'chandni' | 'bhawanipur';
}

export function PricingTable({ branch: initialBranch }: PricingTableProps) {
  const [activeBranch, setActiveBranch] = useState<'bhawanipur' | 'chandni'>(initialBranch || 'chandni');
  const [selectedCategory, setSelectedCategory] = useState<string>('normal');
  const { openPlanModal } = useBranchModal();

  const pricingData = activeBranch === 'bhawanipur' ? BHAWANIPUR_PRICING : CHANDNI_PRICING;
  const currentCategory = pricingData.find((cat) => cat.id === selectedCategory) || pricingData[0];

  const handleBranchSwitch = (b: 'bhawanipur' | 'chandni') => {
    setActiveBranch(b);
    setSelectedCategory('normal');
  };

  const getWhatsAppLink = (plan: PlanOption) => {
    const branchName = activeBranch === 'bhawanipur' ? 'Bhawanipur' : 'Chandni';
    const text = encodeURIComponent(
      `Hey I'm interested in the ${branchName} ${currentCategory.name} (${plan.duration}) plan for ₹${plan.price.toLocaleString()}/-. Can you please share more details?`
    );
    const phone = activeBranch === 'bhawanipur' ? '919147709674' : '919831363981';
    return `https://wa.me/${phone}?text=${text}`;
  };

  const getGridClass = (optionCount: number) => {
    switch (optionCount) {
      case 1:
        return 'grid-cols-1 max-w-md mx-auto';
      case 2:
        return 'grid-cols-1 sm:grid-cols-2 max-w-3xl mx-auto';
      case 3:
        return 'grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto';
      case 4:
        return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4';
      case 5:
      default:
        return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5';
    }
  };

  return (
    <div id="membership" className="space-y-8 scroll-mt-24 w-full">
      {/* 1. Branch Selector (If not locked to single branch) */}
      {!initialBranch && (
        <div className="flex justify-center mb-6">
          <div className="p-1.5 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] inline-flex gap-2 shadow-lg">
            <button
              onClick={() => handleBranchSwitch('chandni')}
              className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all flex items-center gap-2 ${
                activeBranch === 'chandni'
                  ? 'bg-[var(--accent)] text-white shadow-md'
                  : 'text-[var(--text-secondary)] hover:text-white'
              }`}
            >
              <MapPin className="w-3.5 h-3.5" /> Chandni Branch Rates
            </button>
            <button
              onClick={() => handleBranchSwitch('bhawanipur')}
              className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all flex items-center gap-2 ${
                activeBranch === 'bhawanipur'
                  ? 'bg-[var(--accent)] text-white shadow-md'
                  : 'text-[var(--text-secondary)] hover:text-white'
              }`}
            >
              <MapPin className="w-3.5 h-3.5" /> Bhawanipur Branch Rates
            </button>
          </div>
        </div>
      )}

      {/* 2. Offer Category Selector Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        {pricingData.map((cat) => {
          const isActive = cat.id === currentCategory.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-3 rounded-2xl text-xs font-black uppercase tracking-wider transition-all flex items-center gap-2 border ${
                isActive
                  ? 'bg-[var(--accent-subtle)] text-[var(--accent)] border-[var(--accent)] shadow-md ring-1 ring-[var(--accent)]'
                  : 'bg-[var(--bg-card)] border-[var(--border-color)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-white'
              }`}
            >
              {cat.id === 'student' && <GraduationCap className="w-4 h-4 text-amber-400" />}
              {cat.id === 'doctor' && <Stethoscope className="w-4 h-4 text-emerald-400" />}
              {cat.id === 'happy_hours' && <Clock className="w-4 h-4 text-indigo-400" />}
              {cat.id === 'normal' && <Award className="w-4 h-4 text-[var(--accent)]" />}
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>

      {/* Category Description Banner */}
      <div className="text-center max-w-xl mx-auto space-y-1">
        <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-[var(--accent-subtle)] text-[var(--accent)] border border-[var(--border-glow)]">
          {currentCategory.badge || 'OFFICIAL RATE CHART'}
        </span>
        <p className="text-xs text-[var(--text-secondary)] pt-1">
          {currentCategory.description}
        </p>
      </div>

      {/* 3. Pricing Cards Matrix */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${activeBranch}-${currentCategory.id}`}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
          className={`grid gap-4 sm:gap-5 xl:gap-6 items-stretch ${getGridClass(currentCategory.options.length)}`}
        >
          {currentCategory.options.map((option, idx) => (
            <div
              key={idx}
              className={`relative rounded-3xl bg-[var(--bg-card)] p-5 xl:p-6 flex flex-col justify-between border transition-all duration-300 shadow-xl ${
                option.popular
                  ? 'border-[var(--accent)] shadow-[0_0_30px_var(--accent-glow)] ring-2 ring-[var(--accent)]'
                  : 'border-[var(--border-color)] hover:border-[var(--accent)]'
              }`}
            >
              {/* Badge */}
              {option.savingsBadge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[var(--accent)] text-[var(--badge-text)] text-[9px] font-black uppercase tracking-widest flex items-center gap-1 shadow-md whitespace-nowrap z-10">
                  <Sparkles className="w-3 h-3" /> {option.savingsBadge}
                </div>
              )}

              <div className="space-y-4">
                <div className="text-center pt-1">
                  <span className="text-[10px] xl:text-xs font-black uppercase tracking-wider text-[var(--text-muted)]">
                    DURATION
                  </span>
                  <h4 className="text-xl xl:text-2xl font-display font-black uppercase text-[var(--text-primary)]">
                    {option.duration}
                  </h4>
                </div>

                {/* Price Display */}
                <div className="text-center py-3.5 border-y border-[var(--border-color)] space-y-1">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-xs font-bold text-[var(--text-secondary)]">₹</span>
                    <span className="text-3xl xl:text-4xl 2xl:text-5xl font-display font-black text-[var(--accent)] tracking-tight">
                      {option.price.toLocaleString()}
                    </span>
                    <span className="text-xs font-bold text-[var(--text-muted)]">/-</span>
                  </div>
                  <p className="text-[9px] xl:text-[10px] font-semibold text-[var(--text-muted)] uppercase tracking-tight">
                    Flat Net Fee • No Hidden Taxes
                  </p>
                </div>

                {/* Highlight Steam Bath & Gym Bag Perks Only */}
                {option.perkText ? (
                  <div className="py-2">
                    <div
                      className={`py-2 px-3 rounded-2xl text-xs font-bold text-center flex items-center justify-center gap-2 shadow-md ${
                        option.perkText.includes('🎁')
                          ? 'bg-amber-500/15 border border-amber-500/40 text-amber-300 ring-1 ring-amber-500/20'
                          : 'bg-zinc-800/80 border border-zinc-700/60 text-zinc-400'
                      }`}
                    >
                      <span>{option.perkText}</span>
                    </div>
                  </div>
                ) : (
                  <div className="py-2 invisible">
                    <div className="py-2 px-3 text-xs">&nbsp;</div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-4 border-t border-[var(--border-color)] mt-auto">
                <a
                  href={getWhatsAppLink(option)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-2.5 xl:px-3 rounded-xl bg-[#25D366]/15 border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all text-xs font-bold uppercase flex items-center justify-center gap-1.5 shadow-sm whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <span className="truncate">Enquire on WhatsApp</span>
                </a>

                <button
                  onClick={() =>
                    openPlanModal({
                      id: `${activeBranch}-${currentCategory.id}-${option.duration}`,
                      name: `${activeBranch.toUpperCase()} ${currentCategory.name} (${option.duration})`,
                      monthlyPrice: option.price,
                      annualPricePerMonth: option.price,
                      description: `${currentCategory.name} - ${option.duration} Plan for ₹${option.price.toLocaleString()}/-`,
                      perksBadge: currentCategory.badge,
                      features: ['Full Gym Floor Access', 'Steam Bath & Recovery', 'Coaching Orientation'],
                      ctaText: 'BUY MEMBERSHIP',
                    })
                  }
                  className="w-full py-2 px-2 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-white hover:border-[var(--accent)] transition-all text-[10px] xl:text-[11px] font-bold uppercase tracking-wider truncate"
                >
                  Buy Membership Online
                </button>
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
