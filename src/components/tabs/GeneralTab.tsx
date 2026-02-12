'use client';

import { useState } from 'react';

export default function GeneralTab() {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  return (
    <div className="transition-all duration-300 h-full flex flex-col">
      <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-2 md:mb-4 flex-shrink-0">General Information</h2>

      <div className="space-y-2 md:space-y-4 overflow-y-auto flex-1" data-scrollable>
        {/* About Section */}
        <div className="border-l-4 border-primary pl-4 md:pl-6 py-2 md:py-3 transition-all duration-300">
          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1 md:mb-2">About Oryx Life Sciences</h3>
          <p className="text-xs md:text-sm text-gray-700 mb-2 md:mb-3">
            Oryx Life Sciences is dedicated to providing innovative, high-quality solutions in the veterinary and life sciences industry. We are committed to excellence, regulatory compliance, and customer satisfaction.
          </p>
          <a
            href="https://oryxlifesciences.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-2 md:px-3 py-1 md:py-2 text-xs md:text-sm bg-primary text-white rounded-lg hover:opacity-90 active:scale-95 transition-all font-medium"
          >
            Visit Oryx Life Sciences →
          </a>
        </div>

        {/* Contact Section */}
        <div className="border-l-4 border-accent pl-4 md:pl-6 py-2 md:py-3 transition-all duration-300">
          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1 md:mb-2">Contact Details</h3>
          <p className="text-xs md:text-sm text-gray-700 mb-2 md:mb-3">
            Have questions or need more information? We&apos;re here to help.
          </p>
          <a
            href="mailto:info@oryxlifesciences.com"
            className="inline-block px-2 md:px-3 py-1 md:py-2 text-xs md:text-sm bg-accent text-white rounded-lg hover:opacity-90 active:scale-95 transition-all font-medium"
          >
            Send us an Email →
          </a>
        </div>

        {/* Legal Section */}
        <div className="border-l-4 border-gray-400 pl-4 md:pl-6 py-2 md:py-3">
          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 md:mb-3">Legal</h3>
          <div className="space-y-1 md:space-y-2">
            <button
              onClick={() => setShowPrivacy(!showPrivacy)}
              className="block w-full text-left px-2 md:px-3 py-1 md:py-2 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium text-xs md:text-sm text-gray-900 transition-all active:scale-95"
            >
              <span className="flex items-center justify-between">
                Privacy Policy
                <span className={`transition-transform duration-300 text-xs ${showPrivacy ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </span>
            </button>
            {showPrivacy && (
              <div className="bg-gray-50 p-2 md:p-3 rounded-lg text-gray-700 text-xs md:text-sm border border-gray-200 animate-in fade-in duration-300">
                <p>
                  Oryx Life Sciences respects your privacy. We collect and process personal data in accordance with applicable data protection regulations. For detailed information about how we handle your data, please contact us directly.
                </p>
              </div>
            )}

            <button
              onClick={() => setShowTerms(!showTerms)}
              className="block w-full text-left px-2 md:px-3 py-1 md:py-2 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium text-xs md:text-sm text-gray-900 transition-all active:scale-95"
            >
              <span className="flex items-center justify-between">
                Terms & Conditions
                <span className={`transition-transform duration-300 text-xs ${showTerms ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </span>
            </button>
            {showTerms && (
              <div className="bg-gray-50 p-2 md:p-3 rounded-lg text-gray-700 text-xs md:text-sm border border-gray-200 animate-in fade-in duration-300">
                <p>
                  By accessing this page, you agree to comply with all applicable laws and regulations. All product information is provided for informational purposes. Oryx Life Sciences reserves the right to update this information at any time.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
