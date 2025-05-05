import React, { useState } from 'react';
import { CheckCircle, X } from 'lucide-react';

const Pricing: React.FC = () => {
  const [annual, setAnnual] = useState(true);
  
  const plans = [
    {
      name: "Basic",
      monthlyPrice: 3.99,
      annualPrice: 39.99,
      color: "from-blue-500 to-blue-600",
      popular: false,
      features: [
        "Real-time Malware Protection",
        "Web Protection",
        "Email Security",
        "1 Device License",
        "24/7 Support",
      ],
      notIncluded: [
        "Ransomware Shield",
        "Firewall Protection",
        "Password Manager",
        "VPN Service",
      ]
    },
    {
      name: "Premium",
      monthlyPrice: 5.99,
      annualPrice: 59.99,
      color: "from-purple-500 to-purple-700",
      popular: true,
      features: [
        "Everything in Basic",
        "Ransomware Shield",
        "Firewall Protection", 
        "Password Manager",
        "3 Device License",
        "Priority Support",
      ],
      notIncluded: [
        "VPN Service",
        "Identity Theft Protection",
      ]
    },
    {
      name: "Ultimate",
      monthlyPrice: 9.99,
      annualPrice: 99.99,
      color: "from-orange-500 to-red-600",
      popular: false,
      features: [
        "Everything in Premium",
        "VPN Service",
        "Identity Theft Protection",
        "Secure File Encryption",
        "5 Device License",
        "Premium Support",
      ],
      notIncluded: []
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h5 className="text-blue-600 font-medium mb-3">Pricing Plans</h5>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose Your Protection Level
          </h2>
          <p className="text-gray-600 mb-8">
            Select the plan that fits your needs. All plans include our core protection technology.
          </p>
          
          {/* Payment Toggle */}
          <div className="flex items-center justify-center">
            <span className={`mr-3 ${annual ? 'text-gray-400' : 'text-gray-800 font-medium'}`}>Monthly</span>
            <button 
              onClick={() => setAnnual(!annual)}
              className="relative inline-flex h-6 w-12 items-center rounded-full bg-gray-200 transition-colors focus:outline-none"
              aria-pressed={annual}
            >
              <span 
                className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-md transition-transform ${
                  annual ? 'translate-x-6' : 'translate-x-1'
                }`} 
              />
              <span 
                className={`absolute inset-0 rounded-full ${
                  annual ? 'bg-gradient-to-r from-blue-500 to-purple-600' : 'bg-gray-200'
                }`} 
              />
            </button>
            <span className={`ml-3 ${annual ? 'text-gray-800 font-medium' : 'text-gray-400'}`}>
              Annual <span className="text-green-500 text-xs font-medium">Save 20%</span>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`bg-white rounded-2xl shadow-md overflow-hidden transition-transform hover:scale-105 
                        ${plan.popular ? 'ring-2 ring-purple-500 transform scale-105 md:scale-110' : ''}`}
            >
              {plan.popular && (
                <div className="bg-gradient-to-r from-purple-500 to-purple-700 text-white text-center py-1 text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">${annual ? plan.annualPrice : plan.monthlyPrice}</span>
                  <span className="text-gray-500">/{annual ? 'year' : 'month'}</span>
                </div>
                
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                  
                  {plan.notIncluded.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2 text-gray-400">
                      <X className="h-5 w-5 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <a
                  href="#download"
                  className={`block text-center py-3 rounded-lg font-medium w-full transition-all
                            ${plan.popular
                              ? `bg-gradient-to-r ${plan.color} text-white shadow-md hover:shadow-lg` 
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                >
                  Get Started
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 text-sm text-gray-600 max-w-2xl mx-auto">
          <p>
            All plans include a 30-day money-back guarantee. Prices are in USD.  
            By purchasing, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;