'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex gap-2">
      {['en', 'af'].map((lang) => (
        <button
          key={lang}
          onClick={() => setLanguage(lang as 'en' | 'af')}
          className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
            language === lang
              ? 'bg-primary text-white shadow-lg scale-105'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
