'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { InstagramIcon, FacebookIcon, YoutubeIcon } from '@/components/ui/SocialIcons';
import { BRANCHES_DATA } from '@/data/gymData';
import { BranchLocationCard } from '@/components/ui/BranchLocationCard';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    branch: 'Chandni Branch',
    inquiryType: 'General Inquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-24 pt-28 pb-16 overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h1 className="text-5xl sm:text-7xl font-display font-black uppercase text-[var(--text-primary)]">
          CONTACT <span className="text-[var(--accent)]">OXY GYM</span>
        </h1>

        <p className="text-base sm:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
          Have questions about student discounts, happy hours, personal coaching, or Jerai equipment? Drop us a message or call your branch.
        </p>
      </section>

      {/* 2. CONTACT FORM & DIRECT HELPLINES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Direct Helplines */}
          <div className="p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] space-y-6 flex flex-col justify-between shadow-xl">
            <div className="space-y-6">
              <h3 className="text-2xl font-display font-bold uppercase text-[var(--text-primary)]">
                DIRECT HELPLINES
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Reach out directly to your local OXY GYM branch manager or sales consultant.
              </p>

              <div className="space-y-4 pt-4 border-t border-[var(--border-color)] text-xs">
                <div>
                  <p className="font-bold text-[var(--accent)]">CHANDNI HELPLINE</p>
                  <p className="text-[var(--text-primary)] font-mono text-sm">+91 98313 63981</p>
                  <p className="text-[var(--text-muted)]">oxygymchandni@gmail.com</p>
                </div>

                <div>
                  <p className="font-bold text-[var(--accent)]">BHAWANIPUR HELPLINE</p>
                  <p className="text-[var(--text-primary)] font-mono text-sm">+91 91477 09674</p>
                  <p className="text-[var(--text-muted)]">oxygym6@gmail.com</p>
                </div>

                <div>
                  <p className="font-bold text-amber-400">PARK STREET VIP LINE</p>
                  <p className="text-[var(--text-primary)] font-mono text-sm">+91 98313 63981 / +91 91477 09674</p>
                  <p className="text-[var(--text-muted)]">oxygymgoldparkstreet@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[var(--border-color)]">
              <p className="text-xs font-bold text-[var(--text-secondary)] mb-3">FOLLOW OUR INSTAGRAMS</p>
              <div className="flex flex-col gap-2 text-xs">
                <a
                  href="https://www.instagram.com/oxygym.chandni/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                >
                  <InstagramIcon className="w-4 h-4 text-[var(--accent)]" /> @oxygym.chandni
                </a>
                <a
                  href="https://www.instagram.com/oxygym.bhawanipur/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                >
                  <InstagramIcon className="w-4 h-4 text-[var(--accent)]" /> @oxygym.bhawanipur
                </a>
                <a
                  href="https://www.instagram.com/oxygym.gold.parkstreet/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-amber-400 transition-colors"
                >
                  <InstagramIcon className="w-4 h-4 text-amber-400" /> @oxygym.gold.parkstreet
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Interactive Form */}
          <div className="lg:col-span-2 p-8 sm:p-10 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-xl">
            {submitted ? (
              <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-12 space-y-4">
                <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto animate-bounce" />
                <h3 className="text-3xl font-display font-bold">MESSAGE RECEIVED!</h3>
                <p className="text-sm text-[var(--text-secondary)] max-w-md mx-auto">
                  Thank you, <span className="font-bold text-[var(--accent)]">{formData.name}</span>. Our team at <span className="font-bold text-[var(--text-primary)]">{formData.branch}</span> will call or email you back within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full btn-accent text-xs font-bold uppercase"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-1">
                  <h3 className="text-2xl font-display font-bold uppercase text-[var(--text-primary)]">
                    SEND US A MESSAGE
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)]">
                    Fill out the form below and specify your target OXY GYM branch location.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-[var(--text-secondary)] mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikram Sen"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-color)] text-sm focus:outline-none focus:border-[var(--accent)] transition-colors"
                    />
                  </div>

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
                      className="w-full px-4 py-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-color)] text-sm focus:outline-none focus:border-[var(--accent)] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-[var(--text-secondary)] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="vikram@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-color)] text-sm focus:outline-none focus:border-[var(--accent)] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-[var(--text-secondary)] mb-1">
                      Target Branch *
                    </label>
                    <select
                      value={formData.branch}
                      onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-color)] text-sm focus:outline-none focus:border-[var(--accent)] transition-colors text-[var(--text-primary)]"
                    >
                      <option value="Chandni Branch">Chandni Branch</option>
                      <option value="Bhawanipur Branch">Bhawanipur Branch</option>
                      <option value="Park Street Branch">Park Street (Pre-launch VIP)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-[var(--text-secondary)] mb-1">
                    Message / Special Requests
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Ask about student discounts, doctor offers, or free general training..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-color)] text-sm focus:outline-none focus:border-[var(--accent)] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full btn-accent text-sm font-black flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" /> SEND INQUIRY MESSAGE
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 3. BRANCH MAP CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-4xl sm:text-6xl font-display font-black uppercase">
            BRANCH <span className="text-[var(--accent)]">LOCATIONS & MAPS</span>
          </h2>
        </div>

        <div className="space-y-12">
          <BranchLocationCard branch={BRANCHES_DATA.chandni} />
          <BranchLocationCard branch={BRANCHES_DATA.bhawanipur} />
          <BranchLocationCard branch={BRANCHES_DATA['park-street']} />
        </div>
      </section>
    </div>
  );
}
