'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ProductLabelTab() {
  const [language, setLanguage] = useState<'en' | 'af'>('en');
  const [isFullscreen, setIsFullscreen] = useState(false);

  const englishContent = {
    title: 'EUBIOVET',
    subtitle: 'FULVIC ACID 22.4% w/v and HUMIC ACID 22.8% w/v',
    description: 'SOLID EXTRACT SUSPENSION FOR ORAL',
    sections: [
      {
        heading: 'COMPOSITION',
        content: 'Each 1 ml contains:\n\nOrganic components:\n• Humic acid 22.8% w/v\n• Fulvic acid 22.4% w/v\n\nMinerals:\nPotassium, sodium, calcium, magnesium, iron, silicium, phosphate, zinc, manganese, fluorine, chlorine, copper, boron, selenium, chrome, molybdenum and iodine\n\nSugars:\n• Molasses'
      },
      {
        heading: 'INDICATIONS',
        content: '• Supports animal health and well-being\n• Promotes the immune system\n• Nourishes and protects skin and fur\n• Promotes the absorption of nutrients\n• Promotes gut/intestinal health\n• Improves feed conversion\n• Improves feed efficiency\n• May lessen intestinal infections\n• May support animal stress management'
      },
      {
        heading: 'DOSAGE AND DIRECTIONS FOR USE',
        content: 'Use in cattle of all ages as either a preventative, supportive or interventive measure.\n\nRoute of administration: Oral\n\nPreparation of in-use mix:\nMix the concentrate and water in a ratio of 1 unit of concentrate to 10 units of water.\n\nAdministration:\nAdminister 10 g (≈ 44 ml) product per 100 kg body weight orally once daily; for example, for a 500 kg cow give about 50 g (≈ 220 ml) per day.'
      },
      {
        heading: 'WARNINGS',
        content: '• For animal use only'
      },
      {
        heading: 'STORAGE INSTRUCTIONS',
        content: '• Store at or below 25°C in the original container\n• Protect against light\n• Use mix within one day of preparation'
      },
      {
        heading: 'MANUFACTURER',
        content: 'ORYX LIFE SCIENCES (Pty) Ltd\nCompany Reg. No.: 2020/677933/07\nSAHPRA Lic. No.: 00001452.-.1.\nDL02-ca8cf9 (SAHPRA_FA)\nproduct_safety@oryxls.co.za'
      },
      {
        heading: 'SCHEDULING',
        content: 'Not scheduled - CATEGORY D: Veterinary complementary medicine D 29.12 Multiple substance formulation'
      },
      {
        heading: 'DISCLAIMER',
        content: 'This unregistered medicine has not been evaluated by the SAHPRA for its quality, safety or intended use.'
      }
    ]
  };

  const afrikaansContent = {
    title: 'EUBIOVET',
    subtitle: 'FULVIENSUUR 22.4% m/v en HUMUSSUUR 22.8% m/v',
    description: 'SOLIEDE EKSTRAK SUSPENSIE VIR ORAAL',
    sections: [
      {
        heading: 'SAMESTELLING',
        content: 'Elke 1 ml bevat:\n\nOrganiese komponente:\n• Humussuur 22.8% m/v\n• Fulviensuur 22.4% m/v\n\nMinerale:\nKalium, natrium, kalsium, magnesium, yster, silisium, fosfaat, sink, mangaan, fluoor, chloried, koper, boron, selenium, chroom, molybdeem en jodium\n\nSuikers:\n• Melassa'
      },
      {
        heading: 'INDIKASIES',
        content: '• Ondersteun dieregesondheid en - welstand\n• Ondersteun die immuunsisteem\n• Voed en beskerm die vel en pels\n• Bevorder die absorpsie van voedingstowwe\n• Bevorder ingewande / dermgesondheid\n• Verbeter voeromskakeling\n• Verbeter voerdoeltreffendheid\n• Mag intestinale infeksies verminder\n• Mag stresbestuur van diere ondersteun'
      },
      {
        heading: 'DOSERING EN AANWYSINGS VIR GEBRUIK',
        content: 'Gebruik in beeste van alle ouderdomme as \'n voorkomende-, ondersteunende-, of intervensiemiddel.\n\nToedieningsroete: Oraal\n\nVoorbereiding van gebruiksmengsel:\nMeng die konsentraat en water in \'n verhouding van 1 eenheid konsentraat tot 10 eenhede water.\n\nToediening:\nDien 10 g (≈ 44 ml) produk per 100 kg liggaamsmassa oraal eenmaal daagliks toe; byvoorbeeld, vir \'n 500 kg koei gee ongeveer 50 g (≈ 220 ml) per dag.'
      },
      {
        heading: 'WAARSKUWINGS',
        content: '• Alleenlik vir dierlike gebruik'
      },
      {
        heading: 'BERGINGSINSTRUKSIES',
        content: '• Berg teen of benede 25°C in die oorspronklike houer\n• Beskerm teen lig\n• Gebruik die mengsel binne een dag nadat dit gemeng is'
      },
      {
        heading: 'VERVAARDIGDER',
        content: 'ORYX LIFE SCIENCES (Pty) Ltd\nMaatskappyreg. Nr.: 2020/677933/07\nSAHPRA Lic. Nr.: 00001452.-.1.\nDL02-ca8cf9 (SAHPRA_FA)\nproduct_safety@oryxls.co.za'
      },
      {
        heading: 'SKEDULE',
        content: 'Nie geskeduleer nie - KATEGORIE D: Veterinêre aanvullende medisyne D 29.12 Veelvoudige stofformulering'
      },
      {
        heading: 'VRYWARING',
        content: 'Hierdie ongeregistreerde medisyne is nie deur SAHPRA geevalueer vir sy kwaliteit, veiligheid of voorgestelde gebruik nie.'
      }
    ]
  };

  const content = language === 'en' ? englishContent : afrikaansContent;

  const LabelContent = () => (
    <>
      {/* Header */}
      <div className="border-b-2 border-primary pb-4 mb-6">
        <h3 className="text-3xl font-bold text-primary mb-2">{content.title}</h3>
        <p className="text-sm font-semibold text-gray-700 mb-1">{content.subtitle}</p>
        <p className="text-xs text-gray-600">{content.description}</p>
      </div>

      {/* Sections */}
      <div className="space-y-6">
        {content.sections.map((section, index) => (
          <div key={index} className="border-l-4 border-primary pl-4">
            <h4 className="text-lg font-bold text-gray-900 mb-3">{section.heading}</h4>
            <p className="text-sm text-gray-700 whitespace-pre-line leading-relaxed">
              {section.content}
            </p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="border-t-2 border-gray-200 pt-4 mt-6">
        <p className="text-xs text-gray-500 text-center">
          BOVINE 1 kg | 2602A008
        </p>
      </div>
    </>
  );

  return (
    <div className="transition-all duration-300">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Product Label</h2>
        <button
          onClick={() => setIsFullscreen(true)}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          title="Fullscreen"
        >
          <Image
            src="/new-tab.png"
            alt="Fullscreen"
            width={24}
            height={24}
            className="w-6 h-6"
          />
        </button>
      </div>

      {/* Language Toggle */}
      <div className="flex gap-3 mb-8">
        {['en', 'af'].map((lang) => (
          <button
            key={lang}
            onClick={() => setLanguage(lang as 'en' | 'af')}
            className={`px-6 py-3 rounded-lg font-medium transition-all hover:scale-105 active:scale-95 ${
              language === lang
                ? 'bg-primary text-white shadow-lg'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {lang === 'en' ? 'English' : 'Afrikaans'}
          </button>
        ))}
      </div>

      {/* Product Label Content */}
      <div key={language} className="bg-white rounded-lg border border-gray-200 p-6 max-h-64 sm:max-h-80 md:max-h-96 lg:max-h-[450px] overflow-y-auto transition-all duration-300" data-scrollable>
        <LabelContent />
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <>
          {/* Overlay */}
          <div className="fixed inset-0 z-[9998] bg-black bg-opacity-50" onClick={() => setIsFullscreen(false)} />
          
          {/* Modal */}
          <div className="fixed inset-0 z-[9999] bg-black bg-opacity-50 flex items-center justify-center p-4 pt-20 md:pt-4">
            <div className="bg-white rounded-lg w-full h-full max-w-4xl max-h-[90vh] flex flex-col">
              {/* Fullscreen Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 flex-shrink-0">
                <h3 className="text-2xl font-bold text-gray-900">Product Label</h3>
                <button
                  onClick={() => setIsFullscreen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  title="Close"
                >
                  <svg
                    className="w-6 h-6 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Fullscreen Content */}
              <div className="flex-1 overflow-y-auto p-6" data-scrollable>
                <LabelContent />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
