// src/components/ui/CookieConsent.tsx
'use client';

import { useState, useEffect } from 'react';

// Define proper gtag type
type GtagFunction = (
  command: 'consent',
  action: 'update',
  parameters: { analytics_storage: 'granted' | 'denied' }
) => void;

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const hasConsent = localStorage.getItem('cookieConsent');
    if (!hasConsent) {
      // Small delay to prevent layout shift on load
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setShowBanner(false);
    
    // Initialize analytics if accepted
    if (typeof window !== 'undefined') {
      const win = window as Window & { gtag?: GtagFunction };
      if (win.gtag) {
        win.gtag('consent', 'update', {
          'analytics_storage': 'granted'
        });
      }
    }
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setShowBanner(false);
    
    // Disable analytics if declined
    if (typeof window !== 'undefined') {
      const win = window as Window & { gtag?: GtagFunction };
      if (win.gtag) {
        win.gtag('consent', 'update', {
          'analytics_storage': 'denied'
        });
      }
    }
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 shadow-lg">
      <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-slate-600 dark:text-slate-400">
          <p>
            We use cookies to enhance your experience and analyze site usage. 
            By continuing, you agree to our use of cookies.{' '}
            <a href="/privacy" className="text-indigo-500 hover:underline">
              Learn more
            </a>
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={declineCookies}
            className="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
          >
            Decline
          </button>
          <button
            onClick={acceptCookies}
            className="px-4 py-2 text-sm font-medium bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}