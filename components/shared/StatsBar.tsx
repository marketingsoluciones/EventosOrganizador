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

const StatsBar: FC<StatsBarProps> = ({ stats, variant = 'gradient', color = '#6096B9' }) => {
  const bg = {
    light: 'bg-gray-50 border border-gray-200',
    dark: 'bg-gray-900',
    gradient: '',
  }[variant];

  const textColor = variant === 'light' ? 'text-gray-900' : 'text-white';
  const subColor = variant === 'light' ? 'text-gray-500' : 'text-white/70';

  return (
    <div
      className={`w-full rounded-2xl p-8 md:p-12 ${bg}`}
      style={variant === 'gradient' ? { background: `linear-gradient(135deg, ${color}, ${color}bb)` } : undefined}
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s, idx) => (
          <div key={idx}>
            <p className={`text-3xl md:text-4xl lg:text-5xl font-bold ${textColor} mb-2`}>{s.value}</p>
            <p className={`text-sm ${subColor}`}>{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsBar;
