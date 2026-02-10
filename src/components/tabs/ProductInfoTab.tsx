import { useLanguage } from '@/context/LanguageContext';

export default function ProductInfoTab() {
  const { t } = useLanguage();

  return (
    <div className="transition-all duration-300">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Product Information</h2>

      <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-500 p-6 rounded-lg transition-all duration-300">
        <p className="text-blue-900 font-semibold mb-2">Coming Soon</p>
        <p className="text-blue-800 text-sm">
          The Product Information Leaflet (PIL) will be available here once it has been officially signed off.
        </p>
      </div>

      <div className="mt-8 p-8 bg-gray-50 rounded-lg border border-gray-200 transition-all duration-300">
        <p className="text-gray-600 text-center font-medium">
          Awaiting PIL documentation...
        </p>
      </div>
    </div>
  );
}
