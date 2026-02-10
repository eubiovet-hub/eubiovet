'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductLabelTab from './tabs/ProductLabelTab';
import ProductInfoTab from './tabs/ProductInfoTab';
import GeneralTab from './tabs/GeneralTab';

export default function TabInterface() {
  const [activeTab, setActiveTab] = useState<'label' | 'info' | 'general'>('label');

  const tabs: { id: 'label' | 'info' | 'general'; label: string }[] = [
    { id: 'label', label: 'Product Label' },
    { id: 'info', label: 'Product Information' },
    { id: 'general', label: 'General' },
  ];

  return (
    <div className="bg-white rounded-lg sm:rounded-xl shadow-lg overflow-hidden transition-all duration-300 w-full h-full flex flex-col">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200 flex bg-gray-50 flex-wrap sm:flex-nowrap flex-shrink-0">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-3 sm:py-4 px-2 sm:px-6 font-medium text-center text-xs sm:text-base transition-all relative ${
              activeTab === tab.id
                ? 'text-primary'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary transition-all duration-300" />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-2 sm:p-3 md:p-4 lg:p-6 overflow-y-auto flex-1 transition-all duration-300" data-scrollable>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {activeTab === 'label' && <ProductLabelTab />}
            {activeTab === 'info' && <ProductInfoTab />}
            {activeTab === 'general' && <GeneralTab />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
