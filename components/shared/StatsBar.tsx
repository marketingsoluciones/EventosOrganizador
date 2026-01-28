import React, { FC } from 'react';

interface Stat {
  value: string;
  label: string;
}

interface StatsBarProps {
  stats: Stat[];
  variant?: 'light' | 'dark' | 'gradient';
  color?: string;
}

const StatsBar: FC<StatsBarProps> = ({ stats, variant = 'light', color = '#6096B9' }) => {
  return (
    <div className="w-full border-y border-gray-100 py-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s, idx) => (
          <div key={idx}>
            <p className="text-3xl md:text-4xl font-bold text-gray-900 mb-1" style={variant === 'gradient' ? { color } : undefined}>
              {s.value}
            </p>
            <p className="text-sm text-gray-400">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsBar;
