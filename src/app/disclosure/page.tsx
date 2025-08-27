
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Disclosure | Find By Type",
  description: "Transparency about our affiliate relationships. Learn how we make recommendations and earn commissions from qualifying purchases at no extra cost to you.",
  alternates: {
    canonical: "https://findbytype.com.au/disclosure"
  },
  openGraph: {
    title: "Affiliate Disclosure | Find By Type",
    description: "Transparency about our affiliate relationships and product recommendations",
    url: "https://findbytype.com.au/disclosure",
    type: 'website',
  }
};

export default function DisclosurePage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold mb-8">Affiliate Disclosure</h1>
      
      <div className="prose prose-slate dark:prose-invert max-w-none space-y-6">
        <section className="bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800 rounded-lg p-6">
          <p className="text-lg font-medium text-indigo-900 dark:text-indigo-100">
            Find By Type is a participant in the Amazon Services LLC Associates Program, 
            an affiliate advertising program designed to provide a means for sites to earn 
            advertising fees by advertising and linking to Amazon.com.au.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-6 mb-3">What This Means For You</h2>
          <p>
            When you click on certain links on our website and make a purchase, we may receive 
            a small commission at <strong>no additional cost to you</strong>. The price you pay 
            remains exactly the same whether you use our affiliate link or go directly to the vendor&apos;s website.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-6 mb-3">Our Commitment to Honest Recommendations</h2>
          <p>
            We are committed to providing honest, helpful recommendations based on your quiz results. 
            Here&apos;s our promise to you:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>We only recommend products we genuinely believe will benefit you</li>
            <li>Our quiz results and recommendations are not influenced by commission rates</li>
            <li>We research and evaluate products based on quality, user reviews, and value</li>
            <li>We clearly mark affiliate links and sponsored content</li>
            <li>Your trust is more important to us than any commission</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-6 mb-3">How We Select Products</h2>
          <p>Our product recommendation process includes:</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>Research:</strong> We analyze user reviews, expert opinions, and product specifications</li>
            <li><strong>Testing:</strong> When possible, we personally test or evaluate products</li>
            <li><strong>Matching:</strong> We align products with specific personality types and work styles from our quizzes</li>
            <li><strong>Updates:</strong> We regularly review and update our recommendations based on new products and feedback</li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-6 mb-3">Affiliate Partners</h2>
          <p>We currently have affiliate relationships with:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Amazon Australia:</strong> For office furniture, tech accessories, and productivity tools</li>
            <li>Additional partners may be added to better serve your needs</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-6 mb-3">Your Choice</h2>
          <p>
            You are never obligated to purchase anything through our affiliate links. We encourage you to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Do your own research before making any purchase</li>
            <li>Compare prices across different retailers</li>
            <li>Read multiple reviews from various sources</li>
            <li>Consider your specific needs and budget</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-6 mb-3">Supporting Our Work</h2>
          <p>
            The small commissions we earn help us:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Keep our quizzes free for everyone</li>
            <li>Maintain and improve our website</li>
            <li>Research and develop new quizzes and content</li>
            <li>Continue providing personalised recommendations</li>
          </ul>
          <p className="mt-3">
            If you find value in our quizzes and recommendations, using our affiliate links is 
            a simple way to support our work at no extra cost to you. Thank you for your support!
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-6 mb-3">Questions or Concerns?</h2>
          <p>
            If you have any questions about our affiliate relationships or feel a recommendation 
            doesn&apos;t meet our standards, please let us know:
          </p>
          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg mt-3">
            <p>Email: <a href="mailto:support@findbytype.com.au" className="text-indigo-500 hover:underline">support@findbytype.com.au</a></p>
          </div>
        </section>

        <section className="text-sm text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-700 pt-6">
          <p>
            <strong>FTC Compliance:</strong> In accordance with the FTC guidelines, 
            please assume that any and all links on this website are affiliate links, 
            and we may receive compensation if you make a purchase.
          </p>
          <p className="mt-2">
            <strong>Last Updated:</strong> {new Date().toLocaleDateString("en-AU", { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </section>
      </div>
    </main>
  );
}