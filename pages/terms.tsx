import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/IndexFooter';

const TermsOfService = () => {
  return (
    <div className="w-full flex flex-col bg-white text-gray-900 min-h-screen">
      <Head>
        <title>Terms of Service — EventosOrganizador</title>
        <meta name="description" content="Terms of Service for Eventos Organizador, LLC Read our terms and conditions for using our platform." />
      </Head>
      <Navbar />

      <section className="w-full bg-white border-b border-gray-100 py-16 px-4">
        <div className="max-w-[800px] mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Terms of <span className="text-[#6096B9]">Service</span>
          </h1>
          <p className="text-gray-500">Last updated: February 25, 2026</p>
        </div>
      </section>

      <main className="w-full max-w-[800px] mx-auto px-4 py-12">
        <div className="prose prose-gray max-w-none space-y-10">

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you (&quot;User,&quot; &quot;you,&quot; or &quot;your&quot;) and Eventos Organizador, LLC (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), a company incorporated in the State of Delaware, United States, governing your access to and use of the EventosOrganizador website, platform, and services (collectively, the &quot;Service&quot;).
            </p>
            <p className="text-gray-600 leading-relaxed mt-3">
              By accessing or using the Service, you agree to be bound by these Terms. If you do not agree, you must not access or use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Eligibility</h2>
            <p className="text-gray-600 leading-relaxed">
              You must be at least 16 years of age to use the Service. By using the Service, you represent and warrant that you meet this requirement and have the legal capacity to enter into these Terms. If you are using the Service on behalf of a business or organization, you represent that you have the authority to bind that entity to these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Account Registration</h2>
            <p className="text-gray-600 leading-relaxed">
              To access certain features, you must create an account. You agree to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mt-3 space-y-2">
              <li>Provide accurate, current, and complete information during registration</li>
              <li>Maintain and promptly update your account information</li>
              <li>Maintain the security of your password and accept responsibility for all activity under your account</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Use of the Service</h2>
            <p className="text-gray-600 leading-relaxed">You agree not to:</p>
            <ul className="list-disc pl-6 text-gray-600 mt-3 space-y-2">
              <li>Use the Service for any unlawful purpose or in violation of any applicable laws</li>
              <li>Upload or transmit viruses, malware, or other malicious code</li>
              <li>Attempt to gain unauthorized access to the Service or its systems</li>
              <li>Interfere with or disrupt the integrity or performance of the Service</li>
              <li>Scrape, crawl, or use automated means to access the Service without our permission</li>
              <li>Impersonate any person or entity or misrepresent your affiliation</li>
              <li>Use the Service to send unsolicited communications (spam)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Subscription Plans and Payments</h2>
            <p className="text-gray-600 leading-relaxed">
              Certain features of the Service require a paid subscription. By subscribing to a paid plan:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mt-3 space-y-2">
              <li>You agree to pay all fees associated with your selected plan</li>
              <li>Subscription fees are billed in advance on a monthly or annual basis</li>
              <li>All fees are non-refundable unless otherwise stated or required by law</li>
              <li>We reserve the right to change pricing with 30 days&apos; notice</li>
              <li>Failure to pay may result in suspension or termination of your account</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-3">
              Free trial periods, if offered, are subject to the terms specified at the time of enrollment. We may require payment information to start a free trial.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Intellectual Property</h2>
            <p className="text-gray-600 leading-relaxed">
              The Service and its original content, features, and functionality are and will remain the exclusive property of Eventos Organizador, LLC and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.
            </p>
            <p className="text-gray-600 leading-relaxed mt-3">
              You retain ownership of any content you submit, post, or display through the Service. By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and display such content solely for the purpose of providing the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Termination</h2>
            <p className="text-gray-600 leading-relaxed">
              We may terminate or suspend your account immediately, without prior notice or liability, for any reason, including breach of these Terms. Upon termination, your right to use the Service will cease immediately. You may also terminate your account at any time by contacting us or using the account settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>
            <p className="text-gray-600 leading-relaxed">
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL EVENTOSORGANIZADOR INC., ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mt-3 space-y-2">
              <li>Your access to or use of (or inability to access or use) the Service</li>
              <li>Any conduct or content of any third party on the Service</li>
              <li>Any content obtained from the Service</li>
              <li>Unauthorized access, use, or alteration of your transmissions or content</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-3">
              Our total liability to you for all claims arising out of or relating to the Service shall not exceed the amount you paid us in the twelve (12) months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Disclaimer of Warranties</h2>
            <p className="text-gray-600 leading-relaxed">
              THE SERVICE IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS. EVENTOSORGANIZADOR INC. EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Indemnification</h2>
            <p className="text-gray-600 leading-relaxed">
              You agree to defend, indemnify, and hold harmless Eventos Organizador, LLC and its officers, directors, employees, and agents from and against any claims, damages, obligations, losses, liabilities, costs, or debt arising from your use of the Service or your violation of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Governing Law and Dispute Resolution</h2>
            <p className="text-gray-600 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the state and federal courts located in Kent County, Delaware.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Changes to Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days&apos; notice before any new terms take effect. Your continued use of the Service after such changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about these Terms, please contact us:
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

export default TermsOfService;

export async function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../messages/${context.locale ?? 'en'}.json`)).default,
    },
  };
}
