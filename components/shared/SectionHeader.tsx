import React, { FC } from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  color?: string;
  align?: 'center' | 'left';
}

const SectionHeader: FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  description,
  color = '#6096B9',
  align = 'center',
}) => {
  return (
    <div className={`max-w-2xl mb-14 ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-wide mb-3" style={{ color }}>
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-gray-500 text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
