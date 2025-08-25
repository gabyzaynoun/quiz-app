import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Find By Type - How we collect, use, and protect your information",
};

export default function PrivacyPage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      
      <div className="prose prose-slate dark:prose-invert max-w-none space-y-6">
        <section>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Last updated: {new Date().toLocaleDateString("en-AU", { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-6 mb-3">1. Introduction</h2>
          <p>
            Find By Type (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates the website findbytype.com.au. 
            We respect your privacy and are committed to protecting your personal information 
            in accordance with the Australian Privacy Principles (APP) under the Privacy Act 1988 (Cth).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-6 mb-3">2. Information We Collect</h2>
          <p>We collect minimal information necessary to provide our services:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Quiz Responses:</strong> Anonymous answers to personality and preference quizzes (stored locally in your browser)</li>
            <li><strong>Email Address:</strong> Only if you voluntarily subscribe to our newsletter or contact us</li>
            <li><strong>Analytics Data:</strong> Non-identifying usage data through Google Analytics (page views, session duration, general location)</li>
            <li><strong>Cookies:</strong> Essential cookies for site functionality and optional analytics cookies (with your consent)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-6 mb-3">7. Children&apos;s Privacy</h2>
          <p>
            Our services are not directed to individuals under 13 years of age. We do not knowingly 
            collect personal information from children under 13.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-6 mb-3">9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes 
            by posting the new policy on this page and updating the &quot;Last updated&quot; date.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-6 mb-3">10. Contact Us</h2>
          <p>For privacy-related inquiries or to exercise your rights, please contact us at:</p>
          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg mt-3">
            <p>Email: <a href="mailto:support@findbytype.com.au" className="text-indigo-500 hover:underline">support@findbytype.com.au</a></p>
            <p>Website: findbytype.com.au</p>
          </div>
        </section>
      </div>
    </main>
  );
}

