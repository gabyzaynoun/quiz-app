"use client";

type Allowed = string | number | boolean;
type Props = Record<string, Allowed>;

interface TrackingEvent {
  id: string;
  vendor: string;
  title: string;
  category?: string;
  price?: string;
}

// Remove null/undefined and non-primitive values so it matches @vercel/analytics
function sanitize(data?: Record<string, unknown>): Props | undefined {
  if (!data) return undefined;
  const out: Record<string, Allowed> = {};
  for (const [k, v] of Object.entries(data)) {
    if (typeof v === "string" || typeof v === "number" || typeof v === "boolean") {
      out[k] = v;
    }
  }
  return Object.keys(out).length ? out : undefined;
}

export function trackEvent(eventName: string, data?: Record<string, unknown>) {
  try {
    if (process.env.NODE_ENV === "production") {
      import("@vercel/analytics")
        .then(({ track }) => {
          track(eventName, sanitize(data));
        })
        .catch(() => {
          console.log(`[Track] ${eventName}:`, sanitize(data));
        });
    } else {
      console.log(`[Track Dev] ${eventName}:`, sanitize(data));
    }
  } catch (error) {
    console.error("Tracking error:", error);
  }
}

// Specific tracking functions
export function trackAffiliateClick(product: TrackingEvent) {
  trackEvent("affiliate_click", product as unknown as Record<string, unknown>);
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
