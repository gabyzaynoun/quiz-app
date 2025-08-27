// src/components/ui/theme-toggle.tsx
'use client';

import { useTheme } from '@/context/theme-context';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a placeholder with the same dimensions to prevent layout shift
    return (
      <div className="w-[100px] h-[40px] rounded-lg bg-slate-200 dark:bg-slate-800 animate-pulse" />
    );
  }

  const handleThemeChange = () => {
    const themes: ('light' | 'dark' | 'system')[] = ['light', 'dark', 'system'];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  return (
    <button
      onClick={handleThemeChange}
      className="group relative flex items-center justify-center px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-200 min-w-[100px]"
      aria-label={`Current theme: ${theme}. Click to change theme`}
    >
      <div className="flex items-center gap-2">
        {/* Icon Container */}
        <div className="relative w-5 h-5">
          {/* Sun icon for light mode */}
          <svg
            className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${
              resolvedTheme === 'light' 
                ? 'rotate-0 scale-100 opacity-100' 
                : 'rotate-90 scale-0 opacity-0'
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
          
          {/* Moon icon for dark mode */}
          <svg
            className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${
              resolvedTheme === 'dark' 
                ? 'rotate-0 scale-100 opacity-100' 
                : '-rotate-90 scale-0 opacity-0'
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
          
          {/* System icon when in system mode */}
          {theme === 'system' && (
            <svg
              className="absolute inset-0 w-5 h-5 transition-all duration-300 rotate-0 scale-100 opacity-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          )}
        </div>
        
        {/* Theme Label - Hidden on mobile */}
        <span className="hidden sm:inline text-xs font-medium capitalize">
          {theme}
        </span>
      </div>
      
      {/* Tooltip for mobile */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-900 dark:bg-slate-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap sm:hidden">
        {theme} mode
      </div>
    </button>
  );
}