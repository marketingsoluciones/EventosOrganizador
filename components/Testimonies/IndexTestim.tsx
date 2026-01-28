import React, { FC } from 'react';

const testimonials = [
  {
    quote: 'Desde que utilizo Eventos Organizador, planificar eventos se ha vuelto mucho más sencillo. La interfaz es intuitiva y me permite gestionar todas las tareas en un solo lugar.',
    name: 'María López',
    role: 'Organizadora de eventos corporativos',
  },
  {
    quote: 'Necesitaba una herramienta que me permitiera crear itinerarios personalizados. Me ha sorprendido con la cantidad de opciones de personalización que ofrece.',
    name: 'Pedro García',
    role: 'Wedding Planner',
  },
  {
    quote: 'He logrado aumentar las ventas de mis eventos en un 30%. La herramienta de venta de entradas me permite llegar a un público más amplio.',
    name: 'Ana Fernández',
    role: 'Organizadora de festivales musicales',
  },
];

const Testimonies: FC = () => {
  return (
    <section className="w-full bg-[#f6f9fc] py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-[#6096B9] uppercase tracking-wide mb-3">Testimonios</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Lo que dicen nuestros clientes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white rounded-lg border border-gray-200 p-8 flex flex-col">
              <p className="text-[15px] text-gray-600 leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="border-t border-gray-100 pt-5">
                <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                <p className="text-sm text-gray-400">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonies;
