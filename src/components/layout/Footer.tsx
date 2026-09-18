'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Send, ShieldCheck, Heart, MessageCircle } from 'lucide-react';
import { InstagramIcon, FacebookIcon, YoutubeIcon } from '@/components/ui/SocialIcons';
import { OxyLogo } from '@/components/ui/OxyLogo';
import { useTheme } from '@/context/ThemeContext';

export function Footer() {
  const { themeAccent } = useTheme();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 3000);
  };

  return (
    <footer className="relative bg-[var(--bg-secondary)] border-t border-[var(--border-color)] text-[var(--text-primary)] pt-16 pb-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[var(--border-color)]">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/">
              <OxyLogo theme={themeAccent} size="lg" />
            </Link>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed max-w-sm">
              OXY GYM is Kolkata’s premier high-performance fitness brand powered by Jerai & Being Strong equipment, steam bath suites, free general training for all members, and AI workout kiosks across Chandni, Bhawanipur, and soon Park Street.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/oxygym.chandni/"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all hover:scale-110"
                title="OXY GYM Chandni Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/oxygym.bhawanipur/"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all hover:scale-110"
                title="OXY GYM Bhawanipur Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/oxygym.gold.parkstreet/"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-amber-400 hover:border-amber-400 transition-all hover:scale-110"
                title="OXY GYM Park Street Instagram"
              >
                <InstagramIcon className="w-4 h-4 text-amber-400" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-[var(--accent)]">
              NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-[var(--text-secondary)]">
              <li>
                <Link href="/" className="hover:text-[var(--accent)] transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link href="/chandni" className="hover:text-[var(--accent)] transition-colors">
                  Chandni Branch
                </Link>
              </li>
              <li>
                <Link href="/bhawanipur" className="hover:text-[var(--accent)] transition-colors">
                  Bhawanipur Branch
                </Link>
              </li>
              <li>
                <Link href="/park-street" className="hover:text-[var(--accent)] transition-colors">
                  Park Street (Opening Puja 2026)
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[var(--accent)] transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[var(--accent)] transition-colors">
                  Contact & Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Branch Details */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-[var(--accent)]">
              BRANCH LOCATIONS
            </h4>
            <div className="space-y-3 text-xs text-[var(--text-secondary)]">
              <div>
                <a href="https://maps.app.goo.gl/WQFAV7urcLNgZrpx7" target="_blank" rel="noreferrer" className="font-bold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors block">
                  CHANDNI BRANCH 📍
                </a>
                <p>4th & 5th Floor, Archade Building, 25 B, Chandni Chowk St, Esplanade, Bowbazar, Kolkata 700072</p>
                <p className="text-[var(--accent)] font-mono mt-0.5">📞 +91 98313 63981 | oxygymchandni@gmail.com</p>
              </div>
              <div>
                <a href="https://maps.app.goo.gl/CFEGydie6bQGZh9Q7" target="_blank" rel="noreferrer" className="font-bold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors block">
                  BHAWANIPUR BRANCH 📍
                </a>
                <p>2nd Floor, 82, Harish Mukherjee Rd, Patuapara, Bhowanipore, Kolkata 700025</p>
                <p className="text-[var(--accent)] font-mono mt-0.5">📞 +91 91477 09674 | oxygym6@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Direct WhatsApp CTAs */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-[var(--accent)]">
              WHATSAPP ENQUIRIES
            </h4>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Connect directly with our branch managers for instant assistance:
            </p>
            <div className="space-y-2.5 pt-1">
              <a
                href="https://wa.me/919831363981?text=Hey%20I'm%20interested%20in%20the%20Chandni%20Oxy%20Gym%20branch,%20can%20you%20tell%20me%20more?"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 text-white hover:bg-[#25D366] transition-all text-xs font-bold flex items-center justify-between group shadow-sm hover:scale-[1.02]"
              >
                <span className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-[#25D366] group-hover:text-white shrink-0" />
                  <span>Chandni Branch</span>
                </span>
                <span className="text-[10px] font-bold text-zinc-400 group-hover:text-white">Chat Now →</span>
              </a>

              <a
                href="https://wa.me/919147709674?text=Hey%20I'm%20interested%20in%20the%20Bhawanipur%20Oxy%20Gym%20branch,%20can%20you%20tell%20me%20more?"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 text-white hover:bg-[#25D366] transition-all text-xs font-bold flex items-center justify-between group shadow-sm hover:scale-[1.02]"
              >
                <span className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-[#25D366] group-hover:text-white shrink-0" />
                  <span>Bhawanipur Branch</span>
                </span>
                <span className="text-[10px] font-bold text-zinc-400 group-hover:text-white">Chat Now →</span>
              </a>

              <a
                href="https://wa.me/919831363981?text=Hey%20I'm%20interested%20in%20the%20Park%20Street%20Oxy%20Gym%20branch,%20can%20you%20tell%20me%20more?"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-3.5 py-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-white hover:bg-amber-500 hover:text-black transition-all text-xs font-bold flex items-center justify-between group shadow-sm hover:scale-[1.02]"
              >
                <span className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-amber-400 group-hover:text-black shrink-0" />
                  <span>Park Street Flagship</span>
                </span>
                <span className="text-[10px] font-bold text-zinc-400 group-hover:text-black">Pre-Launch →</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[var(--text-muted)] gap-4 border-t border-white/5">
          <p>© 2021 - 2026 OXY GYM. All rights reserved.</p>
          <p className="text-[var(--text-secondary)]">
            Developed and powered by <span className="font-extrabold text-[var(--text-primary)] tracking-wider">AIONLEADS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
