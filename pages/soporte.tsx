import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/IndexFooter';

const Soporte: React.FC = () => {
  return (
    <div className="w-full flex flex-col bg-white text-black items-center justify-items-center min-h-screen pt-8 gap-4">
      <Navbar />
      <main className="w-full flex flex-col items-center justify-center overflow-auto max-w-[1200px] px-4 py-6">
        <h1 className="text-2xl font-bold mb-4 text-center text-[#6096B9]">¿Necesitas ayuda? Estamos aquí para ti las 24 horas del día, los 7 días de la semana</h1>
        <p className="mb-4 text-justify">
          En <strong className="text-[#6096B9]">EventosOrganizador.com</strong>, sabemos que la organización de eventos puede ser un desafío, y que a veces surgen preguntas o problemas inesperados.
        </p>
        <p className="mb-4 text-justify">
          Por eso, te ofrecemos <strong className="text-[#6096B9]">soporte técnico 24 horas al día, 7 días a la semana</strong>. ¡Estamos aquí para ayudarte en cualquier momento que lo necesites!
        </p>

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

export default Soporte;