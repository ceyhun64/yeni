import React from 'react';
import { Check, X } from 'lucide-react'; // Iconları kullanmak için lucide-react paketi yüklü olmalı

const PricingPlan = ({ title, description, price, users, includedFeatures, excludedFeatures, isRecommended = false }) => (
  <div className={`flex flex-col rounded-lg border p-6 ${isRecommended ? 'border-gray-900 bg-gray-900 text-white' : 'border-gray-200'}`}>
    <div className="mb-4">
      {/* Burada fiyatlandırma planına uygun bir SVG veya icon kullanabilirsiniz */}
      {isRecommended ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white mb-2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-900 mb-2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
      )}
      <h3 className={`text-xl font-semibold ${isRecommended ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
      <p className={`text-sm ${isRecommended ? 'text-gray-300' : 'text-gray-500'}`}>{description}</p>
    </div>
    <div className="mb-6">
      <span className={`text-4xl font-bold ${isRecommended ? 'text-white' : 'text-gray-900'}`}>{price}</span>
      <span className={`text-sm ${isRecommended ? 'text-gray-300' : 'text-gray-500'}`}> / monthly</span>
    </div>
    <button className={`w-full rounded-md px-4 py-2 text-sm font-medium ${isRecommended ? 'bg-white text-gray-900 hover:bg-gray-100' : 'bg-gray-900 text-white hover:bg-gray-800'}`}>
      Get started for free
    </button>

    <div className="mt-6 pt-6 border-t border-gray-700">
      <h4 className={`text-sm font-semibold mb-2 ${isRecommended ? 'text-white' : 'text-gray-900'}`}>OVERVIEW</h4>
      <ul className="space-y-2">
        <li className="flex items-center text-sm">
          <Check className={`w-4 h-4 mr-2 ${isRecommended ? 'text-green-400' : 'text-green-600'}`} />
          <span className={`${isRecommended ? 'text-gray-300' : 'text-gray-700'}`}>{users} users</span>
        </li>
      </ul>
    </div>
    <div className="mt-4 pt-4 border-t border-gray-700">
      <h4 className={`text-sm font-semibold mb-2 ${isRecommended ? 'text-white' : 'text-gray-900'}`}>HIGHLIGHTS</h4>
      <ul className="space-y-2">
        {includedFeatures.map((feature, index) => (
          <li key={index} className="flex items-center text-sm">
            <Check className={`w-4 h-4 mr-2 ${isRecommended ? 'text-green-400' : 'text-green-600'}`} />
            <span className={`${isRecommended ? 'text-gray-300' : 'text-gray-700'}`}>{feature}</span>
          </li>
        ))}
        {excludedFeatures.map((feature, index) => (
          <li key={index} className="flex items-center text-sm line-through opacity-70">
            <X className={`w-4 h-4 mr-2 ${isRecommended ? 'text-red-400' : 'text-red-600'}`} />
            <span className={`${isRecommended ? 'text-gray-400' : 'text-gray-500'}`}>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const PricingPlans = () => {
  return (
    <div className="font-sans bg-white min-h-screen p-8">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Pricing Plans</h1>
        <p className="mt-2 text-lg text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </header>

      <div className="flex items-center mb-8">
        <span className="mr-3 text-sm font-medium text-gray-700">Annual billing</span>
        <label htmlFor="toggle" className="flex items-center cursor-pointer">
          <div className="relative">
            <input type="checkbox" id="toggle" className="sr-only" />
            <div className="block bg-gray-200 w-10 h-6 rounded-full"></div>
            <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition"></div>
          </div>
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <PricingPlan
          title="Free"
          description="For open source projects"
          price="$9"
          users="3"
          includedFeatures={["Included feature"]}
          excludedFeatures={["Not included feature"]}
        />
        <PricingPlan
          title="Basic"
          description="For open source projects"
          price="$50"
          users="10"
          includedFeatures={["Included feature"]}
          excludedFeatures={["Not included feature"]}
        />
        <PricingPlan
          title="Team"
          description="For open source projects"
          price="$100"
          users="50"
          includedFeatures={["Included feature"]}
          excludedFeatures={["Not included feature"]}
          isRecommended={true}
        />
        <PricingPlan
          title="Enterprise"
          description="For open source projects"
          price="$200"
          users="Unlimited"
          includedFeatures={["Included feature"]}
          excludedFeatures={["Not included feature"]}
        />
      </div>
    </div>
  );
};

export default PricingPlans;