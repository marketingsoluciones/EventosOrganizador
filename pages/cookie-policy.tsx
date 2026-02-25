import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/IndexFooter';

const CookiePolicy = () => {
  return (
    <div className="w-full flex flex-col bg-white text-gray-900 min-h-screen">
      <Head>
        <title>Cookie Policy — EventosOrganizador</title>
        <meta name="description" content="Cookie Policy for Eventos Organizador, LLC Learn about how we use cookies and similar technologies." />
      </Head>
      <Navbar />

      <section className="w-full bg-white border-b border-gray-100 py-16 px-4">
        <div className="max-w-[800px] mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Cookie <span className="text-[#6096B9]">Policy</span>
          </h1>
          <p className="text-gray-500">Last updated: February 25, 2026</p>
        </div>
      </section>

      <main className="w-full max-w-[800px] mx-auto px-4 py-12">
        <div className="prose prose-gray max-w-none space-y-10">

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. What Are Cookies</h2>
            <p className="text-gray-600 leading-relaxed">
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the site owners. Cookies help us provide you with a better experience by enabling us to monitor which pages you find useful and which you do not.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Cookies</h2>
            <p className="text-gray-600 leading-relaxed">Eventos Organizador, LLC uses the following types of cookies:</p>

            <div className="mt-6 space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Essential Cookies</h3>
                <p className="text-gray-600 text-sm">These cookies are necessary for the website to function and cannot be switched off. They are usually set in response to actions you take, such as setting your privacy preferences, logging in, or filling in forms.</p>
                <div className="mt-3 text-xs text-gray-500">
                  <span className="font-medium">Examples:</span> Session cookies, authentication tokens, language preferences
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Analytics Cookies</h3>
                <p className="text-gray-600 text-sm">These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us know which pages are the most and least popular.</p>
                <div className="mt-3 text-xs text-gray-500">
                  <span className="font-medium">Provider:</span> Google Analytics 4 (G-ZMCYV9KL23)
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Marketing Cookies</h3>
                <p className="text-gray-600 text-sm">These cookies may be set through our site by our advertising partners. They may be used to build a profile of your interests and show you relevant advertisements on other sites.</p>
                <div className="mt-3 text-xs text-gray-500">
                  <span className="font-medium">Provider:</span> Facebook Pixel (Meta)
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Third-Party Cookies</h2>
            <p className="text-gray-600 leading-relaxed">
              In addition to our own cookies, we may also use various third-party cookies to report usage statistics, deliver advertisements, and so on. These third parties include:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mt-3 space-y-2">
              <li><strong>Google Analytics:</strong> Web analytics service that tracks and reports website traffic. <a href="https://policies.google.com/privacy" className="text-[#6096B9] hover:underline" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a></li>
              <li><strong>Facebook/Meta Pixel:</strong> Conversion tracking and audience building. <a href="https://www.facebook.com/privacy/policy/" className="text-[#6096B9] hover:underline" target="_blank" rel="noopener noreferrer">Meta Privacy Policy</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Managing Cookies</h2>
            <p className="text-gray-600 leading-relaxed">
              Most web browsers allow you to control cookies through their settings. You can set your browser to refuse cookies or delete certain cookies. However, if you block or delete cookies, some features of our Service may not function properly.
            </p>
            <p className="text-gray-600 leading-relaxed mt-3">
              To manage cookies in common browsers:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mt-3 space-y-2">
              <li><strong>Chrome:</strong> Settings &gt; Privacy and Security &gt; Cookies</li>
              <li><strong>Firefox:</strong> Settings &gt; Privacy &amp; Security &gt; Cookies and Site Data</li>
              <li><strong>Safari:</strong> Preferences &gt; Privacy &gt; Manage Website Data</li>
              <li><strong>Edge:</strong> Settings &gt; Privacy, Search, and Services &gt; Cookies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Do Not Track</h2>
            <p className="text-gray-600 leading-relaxed">
              Some browsers include a &quot;Do Not Track&quot; (DNT) feature that signals to websites that you do not want to be tracked. Currently, there is no uniform standard for how companies should respond to DNT signals. We do not currently respond to DNT signals, but we will update this policy if a standard is established.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Changes to This Cookie Policy</h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our data practices. When we post changes, we will revise the &quot;Last updated&quot; date at the top of this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have questions about our use of cookies, please contact us:
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

export default CookiePolicy;

export async function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../messages/${context.locale ?? 'en'}.json`)).default,
    },
  };
}
