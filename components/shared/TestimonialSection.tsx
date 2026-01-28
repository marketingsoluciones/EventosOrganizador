import React, { FC } from 'react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  metrics?: string[];
}

interface TestimonialSectionProps {
  testimonials: Testimonial[];
  title?: string;
  subtitle?: string;
  color?: string;
}

const TestimonialSection: FC<TestimonialSectionProps> = ({
  testimonials,
  title = 'Lo que dicen nuestros clientes',
  subtitle,
  color = '#6096B9',
}) => {
  return (
    <section className="w-full py-20 px-4 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          {subtitle && <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
        </div>

        <div className={`grid gap-8 ${testimonials.length === 1 ? 'max-w-2xl mx-auto' : testimonials.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <svg className="w-8 h-8 mb-4 opacity-20" fill="currentColor" viewBox="0 0 24 24" style={{ color }}>
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
              </svg>

              <p className="text-gray-700 leading-relaxed mb-6 flex-1">&ldquo;{t.quote}&rdquo;</p>

              {t.metrics && t.metrics.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {t.metrics.map((m, mIdx) => (
                    <span
                      key={mIdx}
                      className="text-xs font-semibold px-3 py-1 rounded-full"
                      style={{ backgroundColor: `${color}15`, color }}
                    >
                      {m}
                    </span>
                  ))}
                </div>
              )}

              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                <p className="text-gray-500 text-sm">{t.role}, {t.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
