// src/components/ui/mobile-menu.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const menuItems = [
    { href: '/q', label: 'Quizzes', icon: '📝' },
    { href: '/shop', label: 'Shop', icon: '🛍️' },
    { href: '/links', label: 'Links', icon: '🔗' },
    { href: '/disclosure', label: 'About', icon: 'ℹ️' },
  ];

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 flex flex-col items-center justify-center w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <span className="sr-only">Toggle navigation menu</span>
        <div className="w-5 h-4 flex flex-col justify-between">
          <span
            className={`block h-0.5 w-full bg-slate-700 dark:bg-slate-300 rounded-full transition-all duration-300 ${
              isOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-slate-700 dark:bg-slate-300 rounded-full transition-all duration-300 ${
              isOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-slate-700 dark:bg-slate-300 rounded-full transition-all duration-300 ${
              isOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}
          />
        </div>
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 z-40 w-full max-w-sm h-full bg-white dark:bg-slate-900 shadow-2xl transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-800">
            <h2 className="text-lg font-bold">Navigation</h2>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 overflow-y-auto p-6">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                      pathname.startsWith(item.href)
                        ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
                        : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Additional Links */}
            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
              <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-3 px-4">
                Popular Quizzes
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/q/animal"
                    className="flex items-center gap-3 px-4 py-2 rounded-lg text-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <span>🦊</span>
                    <span>Productivity Animal</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/q/desk"
                    className="flex items-center gap-3 px-4 py-2 rounded-lg text-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <span>🖥️</span>
                    <span>Desk Setup Style</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/q/sleep"
                    className="flex items-center gap-3 px-4 py-2 rounded-lg text-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <span>😴</span>
                    <span>Sleep Optimization</span>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          {/* Menu Footer */}
          <div className="p-6 border-t border-slate-200 dark:border-slate-800">
            <p className="text-xs text-slate-500 dark:text-slate-400 text-center">
              © {new Date().getFullYear()} Find By Type
            </p>
          </div>
        </div>
      </div>
    </>
  );
}