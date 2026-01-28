import React, { FC } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
  title?: string;
  subtitle?: string;
}

const FAQSection: FC<FAQSectionProps> = ({
  faqs,
  title = 'Preguntas Frecuentes',
  subtitle,
}) => {
  return (
    <section className="w-full bg-white py-20 px-4">
      <div className="max-w-[700px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          {subtitle && <p className="text-lg text-gray-500">{subtitle}</p>}
        </div>

        <div className="divide-y divide-gray-100">
          {faqs.map((faq, idx) => (
            <details key={idx} className="group">
              <summary className="py-5 font-medium text-gray-900 cursor-pointer list-none flex items-center justify-between text-[15px]">
                {faq.question}
                <svg className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform shrink-0 ml-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="pb-5 text-gray-500 text-sm leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
