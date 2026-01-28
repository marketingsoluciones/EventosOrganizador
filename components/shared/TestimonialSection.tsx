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
    <section className="w-full py-20 px-4 bg-gray-50">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          {subtitle && <p className="text-lg text-gray-500 max-w-2xl mx-auto">{subtitle}</p>}
        </div>

        <div className={`grid gap-6 ${testimonials.length === 1 ? 'max-w-xl mx-auto' : testimonials.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white rounded-lg p-6 border border-gray-100 flex flex-col">
              <p className="text-gray-600 leading-relaxed mb-5 flex-1 text-[15px]">&ldquo;{t.quote}&rdquo;</p>

              {t.metrics && t.metrics.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-5">
                  {t.metrics.map((m, mIdx) => (
                    <span
                      key={mIdx}
                      className="text-xs font-medium px-2.5 py-1 rounded border"
                      style={{ color, borderColor: `${color}25` }}
                    >
                      {m}
                    </span>
                  ))}
                </div>
              )}

              <div className="border-t border-gray-100 pt-4">
                <p className="font-medium text-gray-900 text-sm">{t.name}</p>
                <p className="text-gray-400 text-sm">{t.role}, {t.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
