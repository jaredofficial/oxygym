'use client';

import React from 'react';

interface OxyLogoProps {
  theme?: 'core' | 'premium';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function OxyLogo({ theme = 'core', className = '', size = 'md' }: OxyLogoProps) {
  const isGold = theme === 'premium';
  const logoSrc = isGold ? '/media/park street logo.png' : '/media/oxy gym logo.png';

  const sizeClasses = {
    sm: 'h-10 sm:h-12',
    md: 'h-12 sm:h-15',
    lg: 'h-16 sm:h-20',
  };

  return (
    <div className={`inline-flex items-center select-none ${sizeClasses[size]} ${className}`}>
      <img
        src={logoSrc}
        alt={isGold ? 'Oxy Gym Park Street Logo' : 'Oxy Gym Logo'}
        className="h-full w-auto object-contain filter drop-shadow-md"
      />
    </div>
  );
}
