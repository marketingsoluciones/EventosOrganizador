import React, { FC, ReactNode } from 'react';

interface CTA {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'green';
}

interface HeroSectionProps {
  badge?: string;
  title: ReactNode;
  subtitle: string;
  primaryCTA?: CTA;
  secondaryCTA?: CTA;
  benefits?: string[];
  color?: string;
  breadcrumb?: { label: string; href?: string }[];
  note?: string;
  stats?: { value: string; label: string }[];
  children?: ReactNode;
}

const HeroSection: FC<HeroSectionProps> = ({
  badge,
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  benefits,
  color = '#6096B9',
  breadcrumb,
  note,
  stats,
  children,
}) => {
  return (
    <section className="w-full bg-white border-b border-gray-100">
      <div className="max-w-[1200px] mx-auto px-6 py-20 md:py-28">
        {breadcrumb && (
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            {breadcrumb.map((item, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && <span>/</span>}
                <a href={item.href} className="hover:text-gray-600 transition-colors">{item.label}</a>
              </React.Fragment>
            ))}
          </nav>
        )}

        <div className="flex flex-col items-center text-center">
          {badge && (
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-medium tracking-wide uppercase mb-6 border"
              style={{ color, borderColor: `${color}30`, backgroundColor: `${color}08` }}
            >
              {badge}
            </span>
          )}

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-[1.1] mb-6 max-w-4xl tracking-tight">
            {title}
          </h1>

          <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl mb-10">
            {subtitle}
          </p>

          {benefits && benefits.length > 0 && (
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-10">
              {benefits.map((b, idx) => (
                <span key={idx} className="flex items-center gap-1.5 text-sm text-gray-500">
                  <svg className="w-3.5 h-3.5 shrink-0" style={{ color }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {b}
                </span>
              ))}
            </div>
          )}

          {(primaryCTA || secondaryCTA) && (
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              {primaryCTA && (
                <a
                  href={primaryCTA.href}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-white rounded-lg font-medium text-[15px] transition-all duration-200 hover:opacity-90"
                  style={{ backgroundColor: primaryCTA.variant === 'green' ? '#16a34a' : color }}
                >
                  {primaryCTA.label}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              )}
              {secondaryCTA && (
                <a
                  href={secondaryCTA.href}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-gray-700 rounded-lg font-medium text-[15px] border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200"
                >
                  {secondaryCTA.label}
                </a>
              )}
            </div>
          )}

          {note && (
            <p className="text-sm text-gray-400 mb-8">{note}</p>
          )}

          {stats && stats.length > 0 && (
            <div className="flex flex-wrap justify-center gap-8 md:gap-14 pt-8 border-t border-gray-100">
              {stats.map((s, idx) => (
                <div key={idx} className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-gray-900">{s.value}</p>
                  <p className="text-xs text-gray-400 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          )}

          {children}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
