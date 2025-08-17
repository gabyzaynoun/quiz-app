"use client";
import { track } from "@vercel/analytics";

export function trackAffiliateClick(p: { id: string; vendor: string; title: string }) {
  try { track("affiliate_click", p); } catch {}
}
