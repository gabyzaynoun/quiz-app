import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DMCA & Content Report",
  description: "Report copyright infringement or content issues on Find By Type",
};

export default function DMCAPage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold mb-8">DMCA & Content Report</h1>
      
      <div className="prose prose-slate dark:prose-invert max-w-none space-y-6">
        <section>
          <h2 className="text-xl font-semibold mt-6 mb-3">Copyright Infringement Notice</h2>
          <p>
            Find By Type respects the intellectual property rights of others and expects 
            our users to do the same. In accordance with the Digital Millennium Copyright Act 
            (DMCA) and Australian copyright law, we will respond to properly submitted notices 
            of alleged copyright infringement.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-6 mb-3">Filing a DMCA Notice</h2>
          <p>
            If you believe that content on our website infringes your copyright, please provide 
            us with a written notice containing the following information:
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>A physical or electronic signature of the copyright owner or authorised representative</li>
            <li>Identification of the copyrighted work claimed to be infringed</li>
            <li>Identification of the material that is claimed to be infringing, including its location on our website (URL)</li>
            <li>Your contact information (name, address, telephone number, and email address)</li>
            <li>A statement that you have a good faith belief that the disputed use is not authorised by the copyright owner, its agent, or the law</li>
            <li>A statement that the information in the notification is accurate, and under penalty of perjury, that you are authorised to act on behalf of the copyright owner</li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-6 mb-3">Counter-Notice</h2>
          <p>
            If you believe your content was wrongly removed due to a mistake or misidentification, 
            you may submit a counter-notice containing:
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Your physical or electronic signature</li>
            <li>Identification of the material that was removed and its location before removal</li>
            <li>A statement under penalty of perjury that you have a good faith belief the material was removed by mistake or misidentification</li>
            <li>Your name, address, telephone number, and email address</li>
            <li>A statement that you consent to the jurisdiction of the Federal District Court for your judicial district</li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-6 mb-3">Report Other Content Issues</h2>
          <p>
            Beyond copyright concerns, you can also report:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Inaccurate Information:</strong> Factual errors in our quizzes or recommendations</li>
            <li><strong>Broken Links:</strong> Non-functioning affiliate links or website features</li>
            <li><strong>Inappropriate Content:</strong> Content that violates our terms of service</li>
            <li><strong>Privacy Concerns:</strong> Issues related to personal data handling</li>
            <li><strong>Technical Issues:</strong> Bugs or errors affecting user experience</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-6 mb-3">How to Submit a Report</h2>
          <p>
            Send all notices and reports to our designated agent:
          </p>
          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg mt-3">
            <p><strong>Email:</strong> <a href="mailto:support@findbytype.com.au" className="text-indigo-500 hover:underline">support@findbytype.com.au</a></p>
            <p><strong>Subject Line:</strong> "DMCA Notice" or "Content Report"</p>
            <p className="mt-3">
              <strong>Mailing Address:</strong><br/>
              Find By Type<br/>
              Attn: DMCA Agent<br/>
              Sydney, NSW<br/>
              Australia
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-6 mb-3">Response Time</h2>
          <p>
            We aim to respond to all valid notices within 48-72 hours. Upon receipt of a valid 
            DMCA notice, we will:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Remove or disable access to the allegedly infringing content</li>
            <li>Notify the content provider about the removal</li>
            <li>Document the notice and our response</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-6 mb-3">Repeat Infringers</h2>
          <p>
            We maintain a policy of terminating access for users who are repeat infringers 
            of copyright or other intellectual property rights.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-6 mb-3">Good Faith Reporting</h2>
          <p>
            Please ensure all reports are made in good faith. Knowingly making false claims 
            of copyright infringement may result in legal liability under Section 512(f) of 
            the DMCA or equivalent laws.
          </p>
        </section>

        <section className="text-sm text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-700 pt-6">
          <p>
            <strong>Note:</strong> This procedure is exclusively for reporting copyright 
            infringement and content issues. For general inquiries, please use our standard 
            contact email.
          </p>
          <p className="mt-2">
            <strong>Last Updated:</strong> {new Date().toLocaleDateString("en-AU", { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </section>
      </div>
    </main>
  );
}