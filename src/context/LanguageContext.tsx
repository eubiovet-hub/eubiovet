'use client';

import { createContext, useContext, useState } from 'react';

type Language = 'en' | 'af';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    'header.title': 'Oryx Life Sciences',
    'header.subtitle': 'Product Information & Regulatory Documentation',
    'tab.label': 'Product Label',
    'tab.info': 'Product Information',
    'tab.general': 'General',
    'label.english': 'English',
    'label.afrikaans': 'Afrikaans',
    'label.title': 'Product Label',
    'label.en.title': 'English Product Label',
    'label.en.placeholder': '[2MB label file will be displayed here]',
    'label.af.title': 'Afrikaans Produk Etiket',
    'label.af.placeholder': '[2MB etiket lêer sal hier vertoon word]',
    'info.title': 'Product Information',
    'info.coming': 'Coming Soon',
    'info.message': 'The Product Information Leaflet (PIL) will be available here once it has been officially signed off.',
    'info.awaiting': 'Awaiting PIL documentation...',
    'general.title': 'General Information',
    'general.about.title': 'About Oryx Life Sciences',
    'general.about.text': 'Oryx Life Sciences is dedicated to providing innovative, high-quality solutions in the veterinary and life sciences industry. We are committed to excellence, regulatory compliance, and customer satisfaction.',
    'general.about.button': 'Visit Oryx Life Sciences →',
    'general.contact.title': 'Contact Details',
    'general.contact.text': 'Have questions or need more information? We\'re here to help.',
    'general.contact.button': 'Send us an Email →',
    'general.legal.title': 'Legal',
    'general.privacy': 'Privacy Policy',
    'general.privacy.text': 'Oryx Life Sciences respects your privacy. We collect and process personal data in accordance with applicable data protection regulations. For detailed information about how we handle your data, please contact us directly.',
    'general.terms': 'Terms & Conditions',
    'general.terms.text': 'By accessing this page, you agree to comply with all applicable laws and regulations. All product information is provided for informational purposes. Oryx Life Sciences reserves the right to update this information at any time.',
  },
  af: {
    'header.title': 'Oryx Life Sciences',
    'header.subtitle': 'Produk Inligting & Regulatoriese Dokumentasie',
    'tab.label': 'Produk Etiket',
    'tab.info': 'Produk Inligting',
    'tab.general': 'Algemeen',
    'label.english': 'English',
    'label.afrikaans': 'Afrikaans',
    'label.title': 'Produk Etiket',
    'label.en.title': 'English Product Label',
    'label.en.placeholder': '[2MB label file will be displayed here]',
    'label.af.title': 'Afrikaans Produk Etiket',
    'label.af.placeholder': '[2MB etiket lêer sal hier vertoon word]',
    'info.title': 'Produk Inligting',
    'info.coming': 'Binnekort',
    'info.message': 'Die Produk Inligtingsblad (PIL) sal hier beskikbaar wees sodra dit amptelik goedgekeur is.',
    'info.awaiting': 'Wag vir PIL dokumentasie...',
    'general.title': 'Algemene Inligting',
    'general.about.title': 'Oor Oryx Life Sciences',
    'general.about.text': 'Oryx Life Sciences is toegewyd aan die verskaffing van innovatiewe, hoë-kwaliteit oplossings in die veterinêre en lewenswetenskappe-industrie. Ons is verbind tot uitnemendheid, regulatoriese naleving en klantetevredenheid.',
    'general.about.button': 'Besoek Oryx Life Sciences →',
    'general.contact.title': 'Kontakbesonderhede',
    'general.contact.text': 'Het vrae of benodig meer inligting? Ons is hier om te help.',
    'general.contact.button': 'Stuur ons \'n E-pos →',
    'general.legal.title': 'Regsgeldig',
    'general.privacy': 'Privaatheidsbeleid',
    'general.privacy.text': 'Oryx Life Sciences respekteer jou privaatheid. Ons versamel en verwerk persoonlike data in ooreenstemming met toepaslike databeskermingregelinge. Vir gedetailleerde inligting oor hoe ons jou data hanteer, kontak ons asseblief direk.',
    'general.terms': 'Terme en Voorwaardes',
    'general.terms.text': 'Deur hierdie bladsy te besoek, stem jy in om alle toepaslike wette en regulasies na te kom. Alle produk inligting word vir inligtingsdoeleindes verskaf. Oryx Life Sciences behou die reg voor om hierdie inligting enige tyd op te dateer.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
