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
    <div className={`w-full grid grid-cols-1 ${gridCols} gap-5`}>
      {features.map((f, idx) => {
        const color = f.color || '#6096B9';
        const Wrapper = f.href ? 'a' : 'div';
        const linkProps = f.href ? { href: f.href } : {};

        return (
          <Wrapper
            key={idx}
            {...linkProps}
            className="group p-6 rounded-lg border border-gray-100 hover:border-gray-200 transition-colors duration-200"
          >
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 text-xl"
              style={{ backgroundColor: `${color}0a`, color }}
            >
              {f.icon}
            </div>
            <h3 className="text-base font-semibold text-gray-900 mb-1.5">
              {f.title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              {f.description}
            </p>
            {f.metric && (
              <p className="text-xs font-medium mt-3" style={{ color }}>{f.metric}</p>
            )}
            {f.href && (
              <span className="text-sm font-medium inline-flex items-center gap-1 mt-3 transition-colors duration-200 group-hover:gap-1.5" style={{ color }}>
                Explorar
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
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
