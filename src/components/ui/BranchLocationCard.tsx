'use client';

import React from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink, Navigation } from 'lucide-react';
import { BranchInfo } from '@/data/gymData';

interface BranchLocationCardProps {
  branch: BranchInfo;
}

export function BranchLocationCard({ branch }: BranchLocationCardProps) {
  const isParkStreet = branch.id === 'park-street';

  return (
    <div className="rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-2">
      {/* Contact Details Side */}
      <div className="p-8 sm:p-10 space-y-6 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider ${
              isParkStreet
                ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                : 'bg-[var(--accent-subtle)] text-[var(--accent)] border border-[var(--border-glow)]'
            }`}>
              {branch.subtitle}
            </span>
          </div>
          <h3 className="text-3xl font-display font-bold uppercase text-[var(--text-primary)]">
            {branch.name}
          </h3>
          <p className="text-xs text-[var(--text-secondary)] mt-1 leading-relaxed">
            {branch.tagline}
          </p>

          <div className="space-y-4 mt-6 pt-6 border-t border-[var(--border-color)] text-xs">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[var(--accent)] shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-[var(--text-primary)]">ADDRESS</p>
                <p className="text-[var(--text-secondary)]">{branch.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-[var(--accent)] shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-[var(--text-primary)]">OPERATING HOURS</p>
                <p className="text-[var(--text-secondary)]">{branch.hours}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-[var(--accent)] shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-[var(--text-primary)]">PHONE & INQUIRIES</p>
                <p className="text-[var(--text-secondary)]">{branch.phone}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-[var(--accent)] shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-[var(--text-primary)]">EMAIL</p>
                <p className="text-[var(--text-secondary)]">{branch.email}</p>
              </div>
            </div>
          </div>
        </div>

        {!isParkStreet && (
          <div className="pt-6">
            <a
              href={(branch as any).mapUrl || `https://maps.google.com/?q=${encodeURIComponent(branch.address)}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl btn-accent text-xs font-black uppercase tracking-wider"
            >
              <Navigation className="w-4 h-4" /> GET DIRECTIONS ON GOOGLE MAPS
            </a>
          </div>
        )}
      </div>

      {/* Embedded Map Side */}
      <div className="relative min-h-[320px] bg-[var(--bg-elevated)] overflow-hidden">
        {isParkStreet ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-amber-950/40 via-black to-zinc-950">
            <MapPin className="w-12 h-12 text-amber-400 mb-3 animate-pulse" />
            <h4 className="text-xl font-display font-bold text-amber-300 uppercase">
              EXACT LOCATION ANNOUNCEMENT SOON
            </h4>
            <p className="text-xs text-zinc-400 max-w-xs mt-2">
              Park Street Flagship address details will be unveiled during our exclusive VIP launch event.
            </p>
          </div>
        ) : (
          <iframe
            title={`${branch.name} Google Map`}
            src={branch.mapEmbedUrl}
            className="w-full h-full min-h-[350px] border-0 filter grayscale hover:grayscale-0 transition-all duration-500"
            loading="lazy"
          />
        )}
      </div>
    </div>
  );
}
