export const AMAZON_TAG = "quizappau-22";

export function withAffiliateTag(url: string, tag: string = AMAZON_TAG): string {
  try {
    const u = new URL(url);
    if (u.hostname.endsWith("amazon.com.au") && !u.searchParams.get("tag")) {
      u.searchParams.set("tag", tag);
    }
    return u.toString();
  } catch {
    return url;
  }
}

// Optional: build a clean DP link when you know the ASIN
export function amazonDp(asin: string, tag: string = AMAZON_TAG): string {
  return `https://www.amazon.com.au/dp/${asin}?tag=${tag}`;
}
