import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/IndexFooter';

export const CONTACTO_SLUG = '/contacto';

const ContactoC: React.FC = () => {
  return (
    <div className="w-full flex flex-col bg-white text-black items-center justify-items-center min-h-screen pt-8 gap-4">
      <Head>
        <title>Contacto — EventosOrganizador</title>
        <meta name="description" content="Ponte en contacto con EventosOrganizador. Estamos aquí para ayudarte con la gestión de tus eventos." />
      </Head>
      <Navbar />
      <main className="w-full flex items-center justify-center overflow-auto max-w-[1200px]">
        <iframe
          width="100%"
          height="100%"
          src="https://c40f2a1d.sibforms.com/serve/MUIFAKFfT8LhTQ3JutCDpkTR4WrRu60fjThdDQUyh9Ih4oMcOgBajpwKdJtmpqBKFcIYIXHeHxf2cS4kCp1rGOpa2T3J6QF42NLyR6NeBlj5J6eoOmg-eRCHJ-qcF3ztnMCipG4kI4hIddk8t9CRv5hl6cUCw9ofeQZip_KisV0YFF8KM-Dy18Zo-rqavbMFmFdzr-eQQIsPeAhc"
          frameBorder="0"
          scrolling="auto"
          allowFullScreen
          style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', maxWidth: '100%', height: 'calc(100vh - 64px)' }} // 64px is an example height for Navbar and Footer
        ></iframe>
      </main>
      <Footer />
    </div>
  );
};

export default ContactoC;

export async function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../messages/${context.locale ?? 'es'}.json`)).default,
    },
  };
}