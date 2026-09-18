'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { Sun, Moon, Menu, X, ChevronRight } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { useBranchModal } from '@/context/BranchModalContext';
import { OxyLogo } from '@/components/ui/OxyLogo';

export function Navbar() {
  const { colorMode, toggleColorMode, themeAccent } = useTheme();
  const { openBranchModal } = useBranchModal();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const handleCtaClick = () => {
    if (pathname === '/chandni' || pathname === '/bhawanipur' || pathname === '/bhavanipur') {
      const element = document.getElementById('membership');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        openBranchModal();
      }
    } else if (pathname === '/park-street') {
      const element = document.getElementById('notify');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      openBranchModal();
    }
  };

  const ctaText = pathname === '/park-street' ? 'GET NOTIFIED' : 'BUY MEMBERSHIP';

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Chandni', href: '/chandni' },
    { name: 'Bhawanipur', href: '/bhawanipur' },
    { name: 'Park Street', href: '/park-street', badge: 'Soon' },
    { name: 'Our Story', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 pointer-events-none">
      <div
        className={`pointer-events-auto mx-auto rounded-full transition-all duration-500 ease-in-out border flex items-center justify-between ${
          scrolled
            ? 'max-w-7xl my-2 sm:my-2.5 px-4 sm:px-7 py-2 sm:py-2.5 bg-[#0c0c10]/95 backdrop-blur-2xl border-white/15 shadow-[0_12px_40px_rgba(0,0,0,0.9)]'
            : 'max-w-7xl my-3 sm:my-4 px-5 sm:px-8 py-3 sm:py-3.5 bg-black/60 backdrop-blur-md border-white/10 shadow-lg'
        }`}
      >
        {/* Brand Logo */}
        <Link href="/" className="group flex items-center shrink-0">
          <OxyLogo theme={themeAccent} size={scrolled ? 'sm' : 'md'} />
        </Link>

        {/* Desktop Nav Links */}
        <LayoutGroup id="desktopNav">
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href === '/bhawanipur' && pathname === '/bhavanipur');
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-xs font-black uppercase tracking-wider transition-colors hover:text-[var(--accent)] py-1 ${
                    isActive ? 'text-[var(--accent)] font-black' : 'text-[var(--text-primary)]'
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    {link.name}
                    {link.badge && (
                      <span className="px-1.5 py-0.2 rounded-full text-[9px] font-black uppercase bg-amber-500/20 text-amber-400 border border-amber-500/40">
                        {link.badge}
                      </span>
                    )}
                  </span>
                </Link>
              );
            })}
          </nav>
        </LayoutGroup>

        {/* Desktop Action Controls */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={toggleColorMode}
            className="p-2 rounded-full bg-[var(--bg-elevated)] border border-[var(--border-color)] text-[var(--text-primary)] hover:border-[var(--accent)] transition-all hover:scale-105"
            title={`Switch to ${colorMode === 'dark' ? 'Light' : 'Dark'} Mode`}
            aria-label="Toggle theme"
          >
            {colorMode === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-400" />
            )}
          </button>

          <button
            onClick={handleCtaClick}
            className="px-5 py-2.5 rounded-full btn-accent text-xs font-black flex items-center gap-1.5 group shadow-md"
          >
            <span>{ctaText}</span>
            <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Mobile Controls & Hamburger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={toggleColorMode}
            className="p-2 rounded-full bg-[var(--bg-elevated)] text-[var(--text-primary)] border border-[var(--border-color)]"
            aria-label="Toggle theme"
          >
            {colorMode === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-400" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full bg-[var(--bg-elevated)] text-[var(--text-primary)] border border-[var(--border-color)]"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="pointer-events-auto lg:hidden max-w-sm mx-auto mt-2 rounded-2xl bg-[var(--bg-card)]/95 backdrop-blur-2xl border border-[var(--border-color)] p-4 shadow-2xl space-y-2"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-2.5 rounded-xl text-xs font-black uppercase transition-colors ${
                  pathname === link.href
                    ? 'bg-[var(--accent-subtle)] text-[var(--accent)] border border-[var(--border-glow)]'
                    : 'text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{link.name}</span>
                  {link.badge && (
                    <span className="px-2 py-0.5 rounded text-[9px] bg-amber-500/20 text-amber-400">
                      {link.badge}
                    </span>
                  )}
                </div>
              </Link>
            ))}

            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleCtaClick();
                }}
                className="w-full py-3 rounded-xl btn-accent text-xs font-black flex items-center justify-center gap-2"
              >
                <span>{ctaText}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
