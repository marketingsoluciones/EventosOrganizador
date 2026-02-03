import { FC, useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';

const localeNames: Record<string, { label: string; flag: string }> = {
  es: { label: 'ES', flag: '🇪🇸' },
  en: { label: 'EN', flag: '🇬🇧' },
  fr: { label: 'FR', flag: '🇫🇷' },
  it: { label: 'IT', flag: '🇮🇹' },
  de: { label: 'DE', flag: '🇩🇪' },
  pt: { label: 'PT', flag: '🇧🇷' },
  zh: { label: '中文', flag: '🇨🇳' },
  ko: { label: '한국어', flag: '🇰🇷' },
  ja: { label: '日本語', flag: '🇯🇵' },
};

const LanguageSelector: FC = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = localeNames[router.locale ?? 'es'];

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const switchLocale = (locale: string) => {
    setOpen(false);
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 text-[13px] text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-full transition-all font-medium"
      >
        <span>{current.flag}</span>
        <span>{current.label}</span>
        <svg className={`w-3 h-3 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute top-full right-0 mt-2 z-50 bg-white rounded-xl border border-gray-200 shadow-xl p-1.5 min-w-[140px]">
          {Object.entries(localeNames).map(([locale, { label, flag }]) => (
            <button
              key={locale}
              onClick={() => switchLocale(locale)}
              className={`flex items-center gap-2.5 w-full px-3 py-2 rounded-lg text-sm transition-colors ${
                router.locale === locale ? 'bg-gray-100 text-gray-900 font-medium' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <span>{flag}</span>
              <span>{label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
