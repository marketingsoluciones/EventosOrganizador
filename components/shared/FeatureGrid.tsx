import React, { FC, ReactNode } from 'react';

interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
  color?: string;
  href?: string;
  metric?: string;
}

interface FeatureGridProps {
  features: Feature[];
  cols?: 2 | 3 | 4;
}

const FeatureGrid: FC<FeatureGridProps> = ({ features, cols = 3 }) => {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  }[cols];

  return (
    <div className={`w-full grid grid-cols-1 ${gridCols} gap-6`}>
      {features.map((f, idx) => {
        const color = f.color || '#6096B9';
        const Wrapper = f.href ? 'a' : 'div';
        const linkProps = f.href ? { href: f.href } : {};

        return (
          <Wrapper
            key={idx}
            {...linkProps}
            className="group bg-white p-6 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-2xl transition-transform duration-300 group-hover:scale-110"
              style={{ backgroundColor: `${color}12`, color }}
            >
              {f.icon}
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#6096B9] transition-colors">
              {f.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              {f.description}
            </p>
            {f.metric && (
              <p className="text-xs font-semibold" style={{ color }}>{f.metric}</p>
            )}
            {f.href && (
              <span className="text-sm font-medium inline-flex items-center gap-1 transition-all duration-300 group-hover:gap-2" style={{ color }}>
                Explorar
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            )}
          </Wrapper>
        );
      })}
    </div>
  );
};

export default FeatureGrid;
