import { useState } from 'react';

const Tabs = ({ tabs, defaultTab = 0, className = '' }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);
  
  return (
    <div className={className}>
      <div className="border-b border-gray-200 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px">
          {tabs.map((tab, index) => (
            <li key={index} className="mr-2">
              <button
                onClick={() => setActiveTab(index)}
                className={`inline-block py-4 px-4 text-sm font-medium text-center rounded-t-lg border-b-2 ${
                  activeTab === index
                    ? 'text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500'
                    : 'text-gray-500 border-transparent hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="py-4">{tabs[activeTab].content}</div>
    </div>
  );
};

export default Tabs;