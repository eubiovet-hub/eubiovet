'use client';

import { useState } from 'react';
import ProductLabel from './tabs/ProductLabel.tsx';
import ProductInformation from './tabs/ProductInformation.tsx';
import General from './tabs/General.tsx';

type TabType = 'label' | 'information' | 'general';

export default function Tabs() {
  const [activeTab, setActiveTab] = useState<TabType>('label');

  const tabs: { id: TabType; label: string }[] = [
    { id: 'label', label: 'Product Label' },
    { id: 'information', label: 'Product Information' },
    { id: 'general', label: 'General' },
  ];

  return (
    <div className="w-full">
      <div className="border-b border-gray-200">
        <div className="flex gap-8 px-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-4 px-2 font-medium text-sm transition-colors ${
                activeTab === tab.id
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="p-6">
        {activeTab === 'label' && <ProductLabel />}
        {activeTab === 'information' && <ProductInformation />}
        {activeTab === 'general' && <General />}
      </div>
    </div>
  );
}
