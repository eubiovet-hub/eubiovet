'use client';

interface SideNavigatorProps {
  currentSection: number;
  setCurrentSection: (section: number) => void;
}

export default function SideNavigator({ currentSection, setCurrentSection }: SideNavigatorProps) {
  const sections = [
    { id: 0, label: 'Who we are' },
    { id: 1, label: 'Content' },
  ];

  return (
    <>
      {/* Mobile Top Navigation */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 flex justify-stretch gap-0 bg-white border-b border-gray-200 p-0">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => setCurrentSection(section.id)}
            className={`flex-1 px-4 py-3 font-medium text-sm transition-all duration-300 border-b-2 ${
              currentSection === section.id
                ? 'bg-primary text-white border-primary'
                : 'bg-gray-50 text-gray-700 border-transparent hover:bg-gray-100'
            }`}
          >
            {section.label}
          </button>
        ))}
      </nav>

      {/* Desktop Side Navigation */}
      <nav className="hidden md:flex fixed left-0 top-0 h-screen w-16 sm:w-20 md:w-24 z-50 flex-col items-center justify-center gap-8 sm:gap-12 bg-gradient-to-r from-gray-100 to-transparent border-r border-gray-200">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => setCurrentSection(section.id)}
            className="flex flex-col items-center gap-3 sm:gap-4 transition-all duration-300 py-6 sm:py-8"
            title={section.label}
          >
            {/* Vertical Line */}
            <div
              className={`w-0.5 sm:w-1 rounded-full transition-all duration-300 ${
                currentSection === section.id
                  ? 'bg-primary h-12 sm:h-16'
                  : 'bg-gray-400 h-8 sm:h-12'
              }`}
            />
            {/* Label */}
            <span
              className={`text-xs font-medium transition-all duration-300 ${
                currentSection === section.id
                  ? 'text-primary'
                  : 'text-gray-700'
              }`}
            >
              {section.label}
            </span>
          </button>
        ))}
      </nav>
    </>
  );
}
