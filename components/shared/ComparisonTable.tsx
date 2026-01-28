import React, { FC } from 'react';

interface ComparisonRow {
  feature: string;
  us: string | boolean;
  competitors: Record<string, string | boolean>;
}

interface ComparisonTableProps {
  rows: ComparisonRow[];
  title?: string;
  subtitle?: string;
  ourName?: string;
  color?: string;
}

const Cell: FC<{ value: string | boolean; highlight?: boolean; color?: string }> = ({ value, highlight, color }) => {
  if (typeof value === 'boolean') {
    return value ? (
      <svg className="w-5 h-5 mx-auto" fill={highlight ? color : '#22c55e'} viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
    ) : (
      <svg className="w-5 h-5 mx-auto text-gray-300" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    );
  }
  return <span className={`text-sm ${highlight ? 'font-semibold' : 'text-gray-600'}`}>{value}</span>;
};

const ComparisonTable: FC<ComparisonTableProps> = ({
  rows,
  title = 'Comparativa',
  subtitle,
  ourName = 'EventosOrganizador',
  color = '#6096B9',
}) => {
  const competitorNames = rows.length > 0 ? Object.keys(rows[0].competitors) : [];

  return (
    <section className="w-full py-20 px-4 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          {subtitle && <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
        </div>

        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="py-3 px-3 md:py-4 md:px-6 text-sm font-semibold text-gray-500 bg-gray-50">Funcionalidad</th>
                <th
                  className="py-3 px-3 md:py-4 md:px-6 text-sm font-bold text-center text-white"
                  style={{ backgroundColor: color }}
                >
                  {ourName}
                </th>
                {competitorNames.map((name) => (
                  <th key={name} className="py-3 px-3 md:py-4 md:px-6 text-sm font-semibold text-gray-500 text-center bg-gray-50">
                    {name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                  <td className="py-3 px-3 md:py-4 md:px-6 text-sm font-medium text-gray-900">{row.feature}</td>
                  <td className="py-3 px-3 md:py-4 md:px-6 text-center" style={{ backgroundColor: `${color}08` }}>
                    <Cell value={row.us} highlight color={color} />
                  </td>
                  {competitorNames.map((name) => (
                    <td key={name} className="py-3 px-3 md:py-4 md:px-6 text-center">
                      <Cell value={row.competitors[name]} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
