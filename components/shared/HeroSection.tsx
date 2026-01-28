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
    <section className="w-full relative overflow-hidden" style={{ background: `linear-gradient(to bottom, ${color}08, white)` }}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(96,150,185,0.08),transparent_70%)]" />

      <div className="max-w-[1200px] mx-auto px-6 py-20 md:py-28 relative z-10">
        {/* Breadcrumb */}
        {breadcrumb && (
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            {breadcrumb.map((item, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && <span>›</span>}
                <a href={item.href} className="hover:text-gray-700 transition-colors">{item.label}</a>
              </React.Fragment>
            ))}
          </nav>
        )}

        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          {badge && (
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8 text-sm font-semibold"
              style={{ backgroundColor: `${color}10`, borderColor: `${color}20`, color }}
            >
              {badge}
            </div>
          )}

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold text-gray-900 leading-[1.1] mb-6 max-w-5xl">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mb-8">
            {subtitle}
          </p>

          {/* Benefits */}
          {benefits && benefits.length > 0 && (
            <div className="flex flex-wrap justify-center gap-x-4 md:gap-x-6 gap-y-2 mb-8">
              {benefits.map((b, idx) => (
                <span key={idx} className="flex items-center gap-1.5 text-sm text-gray-600">
                  <svg className="w-4 h-4 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {b}
                </span>
              ))}
            </div>
          )}

          {/* CTAs */}
          {(primaryCTA || secondaryCTA) && (
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              {primaryCTA && (
                <a
                  href={primaryCTA.href}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white rounded-xl font-medium text-[16px] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    background: primaryCTA.variant === 'green'
                      ? '#16a34a'
                      : `linear-gradient(to right, ${color}, ${color}cc)`,
                  }}
                >
                  {primaryCTA.label}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              )}
              {secondaryCTA && (
                <a
                  href={secondaryCTA.href}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-800 rounded-xl font-medium text-[16px] border border-gray-300 hover:border-gray-400 transition-all duration-300"
                >
                  {secondaryCTA.label}
                </a>
              )}
            </div>
          )}

          {/* Note */}
          {note && (
            <p className="text-sm text-gray-400 mb-8">{note}</p>
          )}

          {/* Stats inline */}
          {stats && stats.length > 0 && (
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-8">
              {stats.map((s, idx) => (
                <div key={idx} className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-gray-900">{s.value}</p>
                  <p className="text-sm text-gray-500">{s.label}</p>
                </div>
              ))}
            </div>
          )}

          {/* Custom children (preview, images, etc.) */}
          {children}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
