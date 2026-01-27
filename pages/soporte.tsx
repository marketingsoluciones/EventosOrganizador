import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/IndexFooter';

const Soporte: React.FC = () => {
  return (
    <div className="w-full flex flex-col bg-white text-black items-center justify-items-center min-h-screen pt-8">
      <Navbar />

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-gray-50 to-white py-16 px-4">
        <div className="max-w-[1200px] mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2d3748] mb-6">
            Soporte <span className="text-[#6096B9]">24/7</span>
          </h1>
          <p className="text-lg text-gray-600 mb-4 max-w-[800px] mx-auto">
            En <strong className="text-[#6096B9]">EventosOrganizador.com</strong>, sabemos que la organización de eventos puede ser un desafío, y que a veces surgen preguntas o problemas inesperados.
          </p>
          <p className="text-lg text-gray-600 max-w-[800px] mx-auto">
            Por eso, te ofrecemos <strong className="text-[#6096B9]">soporte técnico 24 horas al día, 7 días a la semana</strong>. ¡Estamos aquí para ayudarte en cualquier momento que lo necesites!
          </p>
        </div>
      </section>

      {/* Form Section */}
      <main className="w-full flex flex-col items-center justify-center max-w-[1200px] px-4 py-8">
        <iframe
          width="100%"
          height="100%"
          src="https://c40f2a1d.sibforms.com/serve/MUIFAKFfT8LhTQ3JutCDpkTR4WrRu60fjThdDQUyh9Ih4oMcOgBajpwKdJtmpqBKFcIYIXHeHxf2cS4kCp1rGOpa2T3J6QF42NLyR6NeBlj5J6eoOmg-eRCHJ-qcF3ztnMCipG4kI4hIddk8t9CRv5hl6cUCw9ofeQZip_KisV0YFF8KM-Dy18Zo-rqavbMFmFdzr-eQQIsPeAhc"
          frameBorder="0"
          scrolling="auto"
          allowFullScreen
          style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', maxWidth: '100%', height: 'calc(100vh - 200px)' }}
        ></iframe>
      </main>

      <Footer />
    </div>
  );
};

export default Soporte;