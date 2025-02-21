import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/IndexFooter';

const Politica: React.FC = () => {
  return (
    <div className="w-full flex flex-col bg-white text-black items-center justify-items-center min-h-screen pt-8 gap-4">
      <Navbar />
      <main className="w-full flex flex-col items-center justify-center overflow-auto max-w-[1200px] px-4 py-6">
        <h1 className="text-2xl font-bold mb-4 text-center text-[#6096B9]">Política de Privacidad</h1>
        <p className="mb-4 text-justify">
          En EventosOrganizador.com, la privacidad de nuestros usuarios es de suma importancia. Esta política de privacidad describe cómo recopilamos, utilizamos y protegemos tu información personal cuando utilizas nuestra aplicación.
        </p>
        <h2 className="text-xl font-semibold mb-2 text-[#6096B9]">Información que recopilamos</h2>
        <p className="mb-4 text-justify">
          Cuando te registras en EventosOrganizador.com, recopilamos cierta información personal, como tu nombre, dirección de correo electrónico y contraseña. También podemos recopilar información sobre los eventos que creas o en los que participas, así como cualquier otra información que decidas compartir con nosotros.
        </p>
        <h2 className="text-xl font-semibold mb-2 text-[#6096B9]">Cómo utilizamos tu información</h2>
        <p className="mb-4 text-justify">
          Utilizamos tu información personal para los siguientes fines:
        </p>
        <ul className="list-disc list-inside mb-4 text-justify">
          <li><strong className="text-[#6096B9]">Brindarte nuestros servicios:</strong> Utilizamos tu información para crear y gestionar tu cuenta, permitirte crear y gestionar eventos, comunicarte con otros usuarios y brindarte soporte técnico.</li>
          <li><strong className="text-[#6096B9]">Mejorar nuestros servicios:</strong> Utilizamos tu información para analizar cómo utilizas nuestra aplicación y realizar mejoras para ofrecerte una mejor experiencia.</li>
          <li><strong className="text-[#6096B9]">Comunicarnos contigo:</strong> Podemos utilizar tu información para enviarte notificaciones sobre eventos, actualizaciones de la aplicación o información promocional sobre nuestros servicios. Siempre podrás optar por no recibir este tipo de comunicaciones.</li>
        </ul>
        <h2 className="text-xl font-semibold mb-2 text-[#6096B9]">Cómo protegemos tu información</h2>
        <p className="mb-4 text-justify">
          Tomamos medidas de seguridad razonables para proteger tu información personal contra accesos no autorizados, uso indebido o divulgación. Sin embargo, ninguna transmisión de datos por Internet o almacenamiento electrónico es 100% seguro.
        </p>
        <h2 className="text-xl font-semibold mb-2 text-[#6096B9]">Compartimos tu información</h2>
        <p className="mb-4 text-justify">
          No compartimos tu información personal con terceros, excepto en los siguientes casos:
        </p>
        <ul className="list-disc list-inside mb-4 text-justify">
          <li><strong className="text-[#6096B9]">Proveedores de servicios:</strong> Podemos compartir tu información con proveedores de servicios que nos ayudan a brindarte nuestros servicios (por ejemplo, proveedores de alojamiento web o de correo electrónico). Estos proveedores están obligados a proteger tu información y no pueden utilizarla para otros fines.</li>
          <li><strong className="text-[#6096B9]">Cumplimiento legal:</strong> Podemos divulgar tu información si así lo exige la ley o si creemos de buena fe que dicha divulgación es necesaria para cumplir con un proceso legal.</li>
        </ul>
        <h2 className="text-xl font-semibold mb-2 text-[#6096B9]">Tus derechos</h2>
        <p className="mb-4 text-justify">
          Tienes derecho a acceder, rectificar o eliminar tu información personal. Si deseas ejercer alguno de estos derechos, contáctanos a través de nuestra página de contacto.
        </p>
        <h2 className="text-xl font-semibold mb-2 text-[#6096B9]">Cambios a esta política de privacidad</h2>
        <p className="mb-4 text-justify">
          Podemos actualizar esta política de privacidad de vez en cuando. Te notificaremos sobre cualquier cambio importante publicando la nueva política en nuestra aplicación.
        </p>
        <h2 className="text-xl font-semibold mb-2 text-[#6096B9]">Contacto</h2>
        <p className="mb-4 text-justify">
          Si tienes alguna pregunta sobre esta política de privacidad, contáctanos a través de nuestra página de contacto.
        </p>
        <h2 className="text-xl font-semibold mb-2 text-[#6096B9]">Aceptación de esta política</h2>
        <p className="mb-4 text-justify">
          Al utilizar EventosOrganizador.com, aceptas los términos de esta política de privacidad.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Politica;