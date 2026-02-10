'use client';

import { useState } from 'react';

export default function ProductLabel() {
  const [language, setLanguage] = useState<'en' | 'af'>('en');

  return (
    <div className="max-w-2xl">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Product Label</h2>

      <div className="flex gap-4 mb-8">
        <button
          onClick={() => setLanguage('en')}
          className={`px-6 py-2 rounded-lg font-medium transition-colors ${
            language === 'en'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          English
        </button>
        <button
          onClick={() => setLanguage('af')}
          className={`px-6 py-2 rounded-lg font-medium transition-colors ${
            language === 'af'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Afrikaans
        </button>
      </div>

      <div className="bg-white p-8 rounded-lg border border-gray-200">
        {language === 'en' ? (
          <div className="space-y-4 text-gray-700">
            <p className="font-semibold text-lg">Product Label - English</p>
            <p>Product label content will be displayed here.</p>
            <p className="text-sm text-gray-500">
              [Placeholder for English product label - 2MB file]
            </p>
          </div>
        ) : (
          <div className="space-y-4 text-gray-700">
            <p className="font-semibold text-lg">Produk Etiket - Afrikaans</p>
            <p>Produk etiket inhoud sal hier vertoon word.</p>
            <p className="text-sm text-gray-500">
              [Plaasvervanger vir Afrikaanse produk etiket]
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
