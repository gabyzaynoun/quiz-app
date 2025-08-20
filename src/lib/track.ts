"use client";

interface TrackingEvent {
  id: string;
  vendor: string;
  title: string;
  category?: string;
  price?: string;
}

// Safe wrapper for Vercel Analytics
export function trackEvent(eventName: string, data?: any) {
  try {
    // Only track in production
    if (process.env.NODE_ENV === "production") {
      // Check if @vercel/analytics is available
      import("@vercel/analytics").then(({ track }) => {
        track(eventName, data);
      }).catch(() => {
        // Fallback to console in dev or if analytics not available
        console.log(`[Track] ${eventName}:`, data);
      });
    } else {
      console.log(`[Track Dev] ${eventName}:`, data);
    }
  } catch (error) {
    console.error("Tracking error:", error);
  }
}

// Specific tracking functions
export function trackAffiliateClick(product: TrackingEvent) {
  trackEvent("affiliate_click", product);
}

export function trackQuizStart(quizSlug: string) {
  trackEvent("quiz_start", { quiz: quizSlug });
}

export function trackQuizComplete(quizSlug: string, result: string) {
  trackEvent("quiz_complete", { quiz: quizSlug, result });
}

export function trackPageView(page: string) {
  trackEvent("page_view", { page });
}