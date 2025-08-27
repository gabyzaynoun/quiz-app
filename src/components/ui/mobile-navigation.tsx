// src/components/ui/mobile-navigation.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function MobileNavigation() {
  const pathname = usePathname();

  const navItems = [
    { href: '/q', label: 'Quizzes', icon: '📝' },
    { href: '/shop', label: 'Shop', icon: '🛍️' },
    { href: '/links', label: 'Links', icon: '🔗' },
    { href: '/disclosure', label: 'About', icon: 'ℹ️' },
  ];

  return (
    <nav className="sm:hidden bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
      <div className="container mx-auto px-2 max-w-7xl">
        <div className="flex items-center justify-around py-1.5">
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.href) || 
                           (item.href === '/disclosure' && pathname === '/about');
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex-1 px-1 py-1 text-xs font-medium transition-all flex flex-col items-center gap-0.5 rounded ${
                  isActive
                    ? 'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20'
                    : 'hover:text-purple-600 dark:hover:text-purple-400 hover:bg-slate-100/50 dark:hover:bg-slate-800/50'
                }`}
              >
                <span className="text-base">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}