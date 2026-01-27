import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/IndexFooter';

const Politica: React.FC = () => {
  return (
    <div className="w-full flex flex-col bg-white text-black items-center justify-items-center min-h-screen pt-8">
      <Navbar />

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-gray-50 to-white py-16 px-4">
        <div className="max-w-[1200px] mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2d3748] mb-6">
            Política de <span className="text-[#6096B9]">Privacidad</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-[800px] mx-auto">
            En EventosOrganizador.com, la privacidad de nuestros usuarios es de suma importancia. Esta política de privacidad describe cómo recopilamos, utilizamos y protegemos tu información personal cuando utilizas nuestra aplicación.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <main className="w-full flex flex-col items-start justify-center max-w-[1200px] px-4 py-12 gap-12">

        {/* Información que recopilamos */}
        <div className="w-full">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2d3748] mb-4">
            Información que recopilamos
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Cuando te registras en EventosOrganizador.com, recopilamos cierta información personal, como tu nombre, dirección de correo electrónico y contraseña. También podemos recopilar información sobre los eventos que creas o en los que participas, así como cualquier otra información que decidas compartir con nosotros.
          </p>
        </div>

        {/* Cómo utilizamos tu información */}
        <div className="w-full">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2d3748] mb-4">
            Cómo utilizamos tu información
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Utilizamos tu información personal para los siguientes fines:
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <div className="text-[#6096B9] text-2xl flex-shrink-0">•</div>
              <div>
                <strong className="text-gray-800">Brindarte nuestros servicios:</strong>
                <p className="text-gray-600 mt-1">Utilizamos tu información para crear y gestionar tu cuenta, permitirte crear y gestionar eventos, comunicarte con otros usuarios y brindarte soporte técnico.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <div className="text-[#6096B9] text-2xl flex-shrink-0">•</div>
              <div>
                <strong className="text-gray-800">Mejorar nuestros servicios:</strong>
                <p className="text-gray-600 mt-1">Utilizamos tu información para analizar cómo utilizas nuestra aplicación y realizar mejoras para ofrecerte una mejor experiencia.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <div className="text-[#6096B9] text-2xl flex-shrink-0">•</div>
              <div>
                <strong className="text-gray-800">Comunicarnos contigo:</strong>
                <p className="text-gray-600 mt-1">Podemos utilizar tu información para enviarte notificaciones sobre eventos, actualizaciones de la aplicación o información promocional sobre nuestros servicios. Siempre podrás optar por no recibir este tipo de comunicaciones.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Cómo protegemos tu información */}
        <div className="w-full">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2d3748] mb-4">
            Cómo protegemos tu información
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Tomamos medidas de seguridad razonables para proteger tu información personal contra accesos no autorizados, uso indebido o divulgación. Sin embargo, ninguna transmisión de datos por Internet o almacenamiento electrónico es 100% seguro.
          </p>
        </div>

        {/* Compartimos tu información */}
        <div className="w-full">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2d3748] mb-4">
            Compartimos tu información
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            No compartimos tu información personal con terceros, excepto en los siguientes casos:
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <div className="text-[#6096B9] text-2xl flex-shrink-0">•</div>
              <div>
                <strong className="text-gray-800">Proveedores de servicios:</strong>
                <p className="text-gray-600 mt-1">Podemos compartir tu información con proveedores de servicios que nos ayudan a brindarte nuestros servicios (por ejemplo, proveedores de alojamiento web o de correo electrónico). Estos proveedores están obligados a proteger tu información y no pueden utilizarla para otros fines.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <div className="text-[#6096B9] text-2xl flex-shrink-0">•</div>
              <div>
                <strong className="text-gray-800">Cumplimiento legal:</strong>
                <p className="text-gray-600 mt-1">Podemos divulgar tu información si así lo exige la ley o si creemos de buena fe que dicha divulgación es necesaria para cumplir con un proceso legal.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tus derechos */}
        <div className="w-full">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2d3748] mb-4">
            Tus derechos
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Tienes derecho a acceder, rectificar o eliminar tu información personal. Si deseas ejercer alguno de estos derechos, contáctanos a través de nuestra página de contacto.
          </p>
        </div>

        {/* Cambios a esta política */}
        <div className="w-full">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2d3748] mb-4">
            Cambios a esta política de privacidad
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Podemos actualizar esta política de privacidad de vez en cuando. Te notificaremos sobre cualquier cambio importante publicando la nueva política en nuestra aplicación.
          </p>
        </div>

        {/* Contacto */}
        <div className="w-full">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2d3748] mb-4">
            Contacto
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Si tienes alguna pregunta sobre esta política de privacidad, contáctanos a través de nuestra página de contacto.
          </p>
        </div>

        {/* Aceptación */}
        <div className="w-full p-6 bg-gradient-to-r from-[#6096B9]/10 to-[#4b7591]/10 rounded-xl border-l-4 border-[#6096B9]">
          <h2 className="text-xl font-bold text-[#2d3748] mb-2">
            Aceptación de esta política
          </h2>
          <p className="text-gray-700">
            Al utilizar EventosOrganizador.com, aceptas los términos de esta política de privacidad.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Politica;
