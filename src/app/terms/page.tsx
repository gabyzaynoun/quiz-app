import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Find By Type - Terms and conditions for using our website and services",
};

export default function TermsPage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
      
      <div className="prose prose-slate dark:prose-invert max-w-none space-y-6">
        <section>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Effective Date: {new Date().toLocaleDateString("en-AU", { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-6 mb-3">1. Agreement to Terms</h2>
          <p>
            By accessing or using Find By Type (findbytype.com.au), you agree to be bound by these 
            Terms of Service. If you disagree with any part of these terms, you may not access our service.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-6 mb-3">2. Use of Service</h2>
          <p>Our service provides personality and productivity quizzes with personalised recommendations. You agree to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use the service for lawful purposes only</li>
            <li>Not attempt to disrupt or compromise the service</li>
            <li>Not scrape, reproduce, or redistribute our content without permission</li>
            <li>Provide accurate information if choosing to contact us or subscribe</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-6 mb-3">3. Intellectual Property</h2>
          <p>
            All content on Find By Type, including text, graphics, logos, and quiz content, 
            is our property or licensed to us and protected by Australian and international 
            copyright laws. You may not reproduce, distribute, or create derivative works 
            without our express written permission.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-6 mb-3">4. Product Recommendations & Affiliate Links</h2>
          <p>
            Our quizzes provide personalised product recommendations. These may include affiliate 
            links to third-party retailers (primarily Amazon Australia). We earn commissions 
            from qualifying purchases at no extra cost to you. We only recommend products we 
            believe provide value, but you should conduct your own research before purchasing.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-6 mb-3">5. Disclaimer of Warranties</h2>
          <p>
            Our service is provided "as is" without any warranties, express or implied. We do not warrant that:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The service will be uninterrupted or error-free</li>
            <li>Quiz results will be 100% accurate or suitable for your specific needs</li>
            <li>Product recommendations will meet all your requirements</li>
            <li>Any errors or defects will be corrected</li>
          </ul>
          <p className="mt-3">
            Quiz results and recommendations are for general informational purposes only and 
            should not be considered professional advice.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-6 mb-3">6. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by Australian law, Find By Type shall not be liable for:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Any indirect, incidental, special, or consequential damages</li>
            <li>Loss of profits, data, or business opportunities</li>
            <li>Damages arising from your use or inability to use our service</li>
            <li>Damages from products purchased through affiliate links</li>
          </ul>
          <p className="mt-3">
            Our total liability shall not exceed AUD $100 in any 12-month period.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-6 mb-3">7. Refunds & Digital Products</h2>
          <p>
            <strong>Digital Products:</strong> If we offer premium digital products (guides, courses, etc.), 
            we provide a 30-day money-back guarantee. To request a refund, email us at 
            support@findbytype.com.au with your order details.
          </p>
          <p className="mt-3">
            <strong>Physical Products:</strong> We do not sell physical products directly. 
            Products purchased through affiliate links are subject to the respective retailer's 
            return policy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-6 mb-3">8. Privacy</h2>
          <p>
            Your use of our service is also governed by our Privacy Policy. Please review our 
            <a href="/privacy" className="text-indigo-500 hover:underline ml-1">Privacy Policy</a> 
            to understand our practices.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-6 mb-3">9. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless Find By Type from any claims, losses, 
            liabilities, and expenses (including legal fees) arising from your use of the 
            service or violation of these Terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-6 mb-3">10. Governing Law</h2>
          <p>
            These Terms are governed by the laws of New South Wales, Australia. Any disputes 
            shall be resolved in the courts of New South Wales.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-6 mb-3">11. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. Changes will be effective 
            immediately upon posting. Your continued use of the service constitutes acceptance 
            of the updated Terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-6 mb-3">12. Contact Information</h2>
          <p>For questions about these Terms, please contact us at:</p>
          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg mt-3">
            <p>Email: <a href="mailto:support@findbytype.com.au" className="text-indigo-500 hover:underline">support@findbytype.com.au</a></p>
            <p>Website: findbytype.com.au</p>
          </div>
        </section>
      </div>
    </main>
  );
}