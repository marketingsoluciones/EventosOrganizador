import React, { FC } from 'react';

interface PainPoint {
  emoji: string;
  title: string;
  description: string;
}

interface PainPointsSectionProps {
  painPoints: PainPoint[];
  title?: string;
  subtitle?: string;
  color?: string;
}

const PainPointsSection: FC<PainPointsSectionProps> = ({
  painPoints,
  title = '¿Te suena familiar?',
  subtitle,
  color = '#6096B9',
}) => {
  return (
    <section className="w-full py-20 px-4 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          {subtitle && <p className="text-lg text-gray-500 max-w-2xl mx-auto">{subtitle}</p>}
        </div>

        <div className={`grid gap-5 ${painPoints.length <= 3 ? 'md:grid-cols-3' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
          {painPoints.map((p, idx) => (
            <div key={idx} className="p-6 rounded-lg border border-gray-100">
              <span className="text-2xl mb-3 block">{p.emoji}</span>
              <h3 className="text-base font-semibold text-gray-900 mb-1.5">{p.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-base text-gray-500">
            Si dijiste <span className="font-semibold" style={{ color }}>&ldquo;sí&rdquo;</span> a alguno, estás en el lugar correcto.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
