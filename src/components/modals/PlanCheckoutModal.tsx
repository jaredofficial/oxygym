'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { useBranchModal } from '@/context/BranchModalContext';

export function PlanCheckoutModal() {
  const { isPlanModalOpen, selectedPlan, closePlanModal } = useBranchModal();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    preferredBranch: 'Chandni Branch',
    isStudent: false,
  });

  if (!isPlanModalOpen || !selectedPlan) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      closePlanModal();
    }, 3000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closePlanModal}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] p-6 sm:p-8 shadow-2xl z-10"
        >
          <button
            onClick={closePlanModal}
            className="absolute top-4 right-4 p-2 rounded-full bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {submitted ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-8 space-y-4"
            >
              <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto animate-bounce" />
              <h3 className="text-2xl font-display font-bold text-[var(--text-primary)]">
                MEMBERSHIP RESERVED!
              </h3>
              <p className="text-sm text-[var(--text-secondary)] max-w-sm mx-auto">
                Thank you, <span className="font-bold text-[var(--accent)]">{formData.fullName || 'Athlete'}</span>!
                Our manager will call you at <span className="font-mono text-[var(--text-primary)]">{formData.phone}</span> to finalize your pass.
              </p>
              <div className="p-3 bg-[var(--accent-subtle)] rounded-xl text-xs font-semibold text-[var(--accent)] border border-[var(--border-glow)]">
                ✨ Exclusive Perk Unlocked: Free Steam Bath Pass & Free General Training Support!
              </div>
            </motion.div>
          ) : (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase bg-[var(--accent-subtle)] text-[var(--accent)] border border-[var(--border-glow)]">
                  {selectedPlan.perksBadge || 'Selected Plan'}
                </span>
              </div>
              <h2 className="text-3xl font-display font-bold uppercase">
                {selectedPlan.name} <span className="text-[var(--accent)]">PASS</span>
              </h2>
              <p className="text-xs text-[var(--text-secondary)] mt-1 mb-6">
                Complete your details below to reserve your spot & unlock instant member perks.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-[var(--text-secondary)] mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-color)] text-sm focus:outline-none focus:border-[var(--accent)] transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-[var(--text-secondary)] mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98313 00000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-color)] text-sm focus:outline-none focus:border-[var(--accent)] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-[var(--text-secondary)] mb-1">
                      Target Branch
                    </label>
                    <select
                      value={formData.preferredBranch}
                      onChange={(e) => setFormData({ ...formData, preferredBranch: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-color)] text-sm focus:outline-none focus:border-[var(--accent)] transition-colors text-[var(--text-primary)]"
                    >
                      <option value="Chandni Branch">Chandni Branch</option>
                      <option value="Bhawanipur Branch">Bhawanipur Branch</option>
                      <option value="Park Street Pre-launch">Park Street (Pre-launch VIP)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-[var(--text-secondary)] mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="rahul@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-color)] text-sm focus:outline-none focus:border-[var(--accent)] transition-colors"
                  />
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="studentCheck"
                    checked={formData.isStudent}
                    onChange={(e) => setFormData({ ...formData, isStudent: e.target.checked })}
                    className="w-4 h-4 accent-[var(--accent)] rounded cursor-pointer"
                  />
                  <label htmlFor="studentCheck" className="text-xs font-semibold text-[var(--text-secondary)] cursor-pointer">
                    Apply Student Discount (Valid ID required at gym counter)
                  </label>
                </div>

                <div className="pt-2">
                  <button type="submit" className="w-full py-3.5 rounded-xl btn-accent text-xs font-black flex items-center justify-center gap-2">
                    <ShieldCheck className="w-4 h-4" /> CONFIRM & UNLOCK MEMBERSHIP
                  </button>
                </div>
                <p className="text-[10px] text-center text-[var(--text-muted)]">
                  🔒 Zero spam. Your details are safe with OXY GYM Kolkata.
                </p>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
