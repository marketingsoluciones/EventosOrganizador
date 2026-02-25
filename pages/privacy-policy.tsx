import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/IndexFooter';

const PrivacyPolicy = () => {
  return (
    <div className="w-full flex flex-col bg-white text-gray-900 min-h-screen">
      <Head>
        <title>Privacy Policy — EventosOrganizador</title>
        <meta name="description" content="Privacy Policy of Eventos Organizador, LLC Learn how we collect, use, and protect your personal information." />
      </Head>
      <Navbar />

      <section className="w-full bg-white border-b border-gray-100 py-16 px-4">
        <div className="max-w-[800px] mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Privacy <span className="text-[#6096B9]">Policy</span>
          </h1>
          <p className="text-gray-500">Last updated: February 25, 2026</p>
        </div>
      </section>

      <main className="w-full max-w-[800px] mx-auto px-4 py-12">
        <div className="prose prose-gray max-w-none space-y-10">

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-600 leading-relaxed">
              Eventos Organizador, LLC (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), a company incorporated in the State of Delaware, United States, with its principal office at 1111B S Governors Ave STE 7392, Dover, DE 19904, operates the website eventosorganizador.com and the EventosOrganizador platform (collectively, the &quot;Service&quot;).
            </p>
            <p className="text-gray-600 leading-relaxed mt-3">
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our Service. Please read this policy carefully. By using the Service, you consent to the data practices described in this policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Personal Data</h3>
            <p className="text-gray-600 leading-relaxed">
              We may collect personally identifiable information that you voluntarily provide, including but not limited to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mt-3 space-y-2">
              <li>Name, email address, phone number</li>
              <li>Billing and payment information</li>
              <li>Company name and job title</li>
              <li>Event details and guest lists you create</li>
              <li>Communications you send to us</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-6">Automatically Collected Data</h3>
            <p className="text-gray-600 leading-relaxed">
              When you access our Service, we automatically collect certain information, including:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mt-3 space-y-2">
              <li>IP address, browser type, operating system</li>
              <li>Pages visited, time spent, referring URLs</li>
              <li>Device identifiers and usage patterns</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-600 leading-relaxed">We use collected information for the following purposes:</p>
            <ul className="list-disc pl-6 text-gray-600 mt-3 space-y-2">
              <li>To provide, operate, and maintain our Service</li>
              <li>To process transactions and send related information</li>
              <li>To send administrative information, updates, and security alerts</li>
              <li>To respond to inquiries and provide customer support</li>
              <li>To personalize and improve your experience</li>
              <li>To analyze usage and develop new features</li>
              <li>To send marketing communications (with your consent)</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Sharing of Information</h2>
            <p className="text-gray-600 leading-relaxed">We may share your information in the following situations:</p>
            <ul className="list-disc pl-6 text-gray-600 mt-3 space-y-2">
              <li><strong>Service providers:</strong> Third-party vendors who assist us in operating our Service (hosting, payment processing, analytics, email delivery).</li>
              <li><strong>Legal requirements:</strong> When required by law, regulation, legal process, or governmental request.</li>
              <li><strong>Business transfers:</strong> In connection with a merger, acquisition, or sale of assets.</li>
              <li><strong>With your consent:</strong> When you have given us explicit permission to share your data.</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-3">
              We do not sell your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cookies and Tracking Technologies</h2>
            <p className="text-gray-600 leading-relaxed">
              We use cookies and similar tracking technologies to track activity on our Service. Cookies are files with a small amount of data that may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. For more details, see our <a href="/cookie-policy" className="text-[#6096B9] hover:underline">Cookie Policy</a>.
            </p>
            <p className="text-gray-600 leading-relaxed mt-3">We use the following types of cookies:</p>
            <ul className="list-disc pl-6 text-gray-600 mt-3 space-y-2">
              <li><strong>Essential cookies:</strong> Required for the Service to function properly.</li>
              <li><strong>Analytics cookies:</strong> Help us understand how visitors interact with our Service (Google Analytics).</li>
              <li><strong>Marketing cookies:</strong> Used to deliver relevant advertisements (Facebook Pixel).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Security</h2>
            <p className="text-gray-600 leading-relaxed">
              We implement commercially reasonable security measures to protect your personal information, including AES-256 encryption, secure HTTPS connections, and regular security audits. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Retention</h2>
            <p className="text-gray-600 leading-relaxed">
              We retain your personal information only for as long as is necessary for the purposes set out in this policy, or as required by law. When your data is no longer needed, we will securely delete or anonymize it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Your Privacy Rights</h2>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">All Users</h3>
            <p className="text-gray-600 leading-relaxed">You have the right to:</p>
            <ul className="list-disc pl-6 text-gray-600 mt-3 space-y-2">
              <li>Access, update, or delete your personal information</li>
              <li>Opt out of marketing communications at any time</li>
              <li>Request a copy of the data we hold about you</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-6">California Residents (CCPA/CPRA)</h3>
            <p className="text-gray-600 leading-relaxed">
              If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA) and the California Privacy Rights Act (CPRA):
            </p>
            <ul className="list-disc pl-6 text-gray-600 mt-3 space-y-2">
              <li><strong>Right to know:</strong> You may request that we disclose what personal information we have collected, used, disclosed, and sold about you.</li>
              <li><strong>Right to delete:</strong> You may request the deletion of your personal information, subject to certain exceptions.</li>
              <li><strong>Right to opt-out of sale:</strong> We do not sell personal information. If this changes, you will have the right to opt-out.</li>
              <li><strong>Right to non-discrimination:</strong> We will not discriminate against you for exercising your CCPA/CPRA rights.</li>
              <li><strong>Right to correct:</strong> You may request correction of inaccurate personal information.</li>
              <li><strong>Right to limit use of sensitive personal information.</strong></li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-6">EEA/UK Residents (GDPR)</h3>
            <p className="text-gray-600 leading-relaxed">
              If you are located in the European Economic Area or the United Kingdom, you have rights under the General Data Protection Regulation (GDPR), including the right to access, rectification, erasure, data portability, restriction of processing, and the right to object to processing. To exercise these rights, contact us at the address below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. International Data Transfers</h2>
            <p className="text-gray-600 leading-relaxed">
              Your information may be transferred to and processed in the United States, where our servers are located. If you are located outside the United States, please be aware that data protection laws in the US may differ from those in your jurisdiction. By using our Service, you consent to the transfer of your data to the United States.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Children&apos;s Privacy</h2>
            <p className="text-gray-600 leading-relaxed">
              Our Service is not directed to individuals under the age of 16. We do not knowingly collect personal information from children under 16. If we become aware that we have collected personal information from a child under 16, we will take steps to delete that information promptly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to This Privacy Policy</h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. You are advised to review this page periodically for any changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have questions about this Privacy Policy or wish to exercise your privacy rights, please contact us:
            </p>
            <div className="bg-gray-50 rounded-xl p-6 mt-4 space-y-2 text-gray-600">
              <p><strong>Eventos Organizador, LLC</strong></p>
              <p>1111B S Governors Ave STE 7392</p>
              <p>Dover, DE 19904, United States</p>
              <p>Email: <a href="mailto:carlos.carrillo@eventosorganizador.com" className="text-[#6096B9] hover:underline">carlos.carrillo@eventosorganizador.com</a></p>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

export async function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../messages/${context.locale ?? 'en'}.json`)).default,
    },
  };
}
