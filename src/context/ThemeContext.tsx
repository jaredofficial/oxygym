'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

type ColorMode = 'dark' | 'light';
type ThemeAccent = 'core' | 'premium';

interface ThemeContextType {
  colorMode: ColorMode;
  toggleColorMode: () => void;
  themeAccent: ThemeAccent;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [colorMode, setColorMode] = useState<ColorMode>('dark');
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  // Determine accent theme based on route
  const themeAccent: ThemeAccent = pathname === '/park-street' ? 'premium' : 'core';

  useEffect(() => {
    setMounted(true);
    const savedMode = localStorage.getItem('oxy_color_mode') as ColorMode | null;
    if (savedMode === 'light' || savedMode === 'dark') {
      setColorMode(savedMode);
    } else {
      setColorMode('dark');
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.setAttribute('data-mode', colorMode);
    document.documentElement.setAttribute('data-theme', themeAccent);
    localStorage.setItem('oxy_color_mode', colorMode);
  }, [colorMode, themeAccent, mounted]);

  const toggleColorMode = () => {
    setColorMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ colorMode, toggleColorMode, themeAccent }}>
      <div data-mode={colorMode} data-theme={themeAccent} className="min-h-screen">
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
