import React, { FC } from 'react';

interface CTASectionProps {
  title: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  guarantees?: string[];
  color?: string;
}

const CTASection: FC<CTASectionProps> = ({
  title,
  description,
  primaryLabel = 'Empieza gratis 14 días',
  primaryHref = 'https://app.eventosorganizador.com/login?q=register&d=/',
  secondaryLabel,
  secondaryHref,
  guarantees,
  color = '#6096B9',
}) => {
  return (
    <section className="w-full bg-gray-50 py-20 px-4">
      <div className="max-w-[800px] mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{title}</h2>
        {description && (
          <p className="text-lg text-gray-600 mb-8">{description}</p>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <a
            href={primaryHref}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white rounded-xl font-medium text-[16px] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
            style={{ background: `linear-gradient(to right, ${color}, ${color}cc)` }}
          >
            {primaryLabel}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
          {secondaryLabel && secondaryHref && (
            <a
              href={secondaryHref}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-800 rounded-xl font-medium text-[16px] border border-gray-300 hover:border-gray-400 transition-all duration-300"
            >
              {secondaryLabel}
            </a>
          )}
        </div>

        {guarantees && guarantees.length > 0 && (
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {guarantees.map((g, idx) => (
              <span key={idx} className="flex items-center gap-1.5 text-sm text-gray-500">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {g}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CTASection;
