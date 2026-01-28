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
      <div className="max-w-[600px] mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
        {description && (
          <p className="text-lg text-gray-500 mb-8">{description}</p>
        )}

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
          <a
            href={primaryHref}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-white rounded-lg font-medium text-[15px] transition-all duration-200 hover:opacity-90"
            style={{ backgroundColor: color }}
          >
            {primaryLabel}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
          {secondaryLabel && secondaryHref && (
            <a
              href={secondaryHref}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-gray-700 rounded-lg font-medium text-[15px] border border-gray-200 hover:border-gray-300 hover:bg-white transition-all duration-200"
            >
              {secondaryLabel}
            </a>
          )}
        </div>

        {guarantees && guarantees.length > 0 && (
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {guarantees.map((g, idx) => (
              <span key={idx} className="flex items-center gap-1.5 text-sm text-gray-400">
                <svg className="w-3.5 h-3.5" style={{ color }} fill="currentColor" viewBox="0 0 20 20">
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
