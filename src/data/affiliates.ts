// Amazon AU affiliate tag
export const AMAZON_TAG = "quizappau-22";

export function withAffiliateTag(url: string, tag: string = AMAZON_TAG): string {
  try {
    const u = new URL(url);
    // Handle Amazon AU links
    if (u.hostname.includes("amazon.com.au")) {
      if (!u.searchParams.has("tag")) {
        u.searchParams.set("tag", tag);
      }
    }
    return u.toString();
  } catch {
    return url;
  }
}

// Build clean Amazon product links
export function amazonDp(asin: string, tag: string = AMAZON_TAG): string {
  return `https://www.amazon.com.au/dp/${asin}?tag=${tag}`;
}

// Build Amazon search links
export function amazonSearch(query: string, tag: string = AMAZON_TAG): string {
  return `https://www.amazon.com.au/s?k=${encodeURIComponent(query)}&tag=${tag}`;
}