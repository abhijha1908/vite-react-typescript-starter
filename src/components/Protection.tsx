import React, { useState, useEffect } from 'react';
import { Play, CheckCheck, ArrowRight, Shield } from 'lucide-react';

const Protection: React.FC = () => {
  const [animate, setAnimate] = useState(false);
  const [activeTab, setActiveTab] = useState('malware');
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    observer.observe(document.getElementById('protection') as Element);
    
    return () => observer.disconnect();
  }, []);

  const tabs = [
    { id: 'malware', label: 'Malware Protection', color: 'from-blue-500 to-blue-600' },
    { id: 'ransomware', label: 'Ransomware Shield', color: 'from-purple-500 to-purple-600' },
    { id: 'web', label: 'Web Security', color: 'from-orange-500 to-orange-600' },
  ];

  const tabContent = {
    malware: {
      title: "Advanced Malware Protection",
      description: "ShieldX360's AI-powered malware protection continuously monitors your system for suspicious activity, identifying and neutralizing threats before they can cause damage.",
      points: [
        "Real-time scanning of all files and programs",
        "Behavioral analysis to detect zero-day threats",
        "Automatic quarantine of suspicious files",
        "Cloud-based threat intelligence",
      ]
    },
    ransomware: {
      title: "Ransomware Shield",
      description: "Our specialized ransomware protection prevents unauthorized encryption of your valuable files, keeping your documents, photos, and other personal data safe from extortion attempts.",
      points: [
        "Monitors for suspicious encryption activity",
        "Protects important documents and media files",
        "Creates secure backups of critical data",
        "Blocks ransomware communication channels",
      ]
    },
    web: {
      title: "Complete Web Protection",
      description: "Stay safe while browsing with ShieldX360's advanced web protection, which blocks malicious websites, prevents phishing attacks, and secures your online transactions.",
      points: [
        "Real-time website reputation checking",
        "Anti-phishing technology",
        "Secure browsing for online banking",
        "Protection from malicious downloads",
      ]
    }
  };

  return (
    <section id="protection" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h5 className="text-blue-600 font-medium mb-3">Protection Technology</h5>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How ShieldX360 Keeps You Safe
          </h2>
          <p className="text-gray-600">
            Our multi-layered protection approach ensures complete security against all types of threats.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all 
                        ${activeTab === tab.id
                          ? `bg-gradient-to-r ${tab.color} text-white shadow-md`
                          : 'bg-white text-gray-700 hover:bg-gray-100'
                        }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className={`${animate ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'} 
                          transition-all duration-1000`}>
            <h3 className="text-2xl font-bold mb-4">
              {tabContent[activeTab as keyof typeof tabContent].title}
            </h3>
            <p className="text-gray-600 mb-6">
              {tabContent[activeTab as keyof typeof tabContent].description}
            </p>
            
            <div className="space-y-4 mb-8">
              {tabContent[activeTab as keyof typeof tabContent].points.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="bg-green-100 rounded-full p-1 mt-0.5">
                    <CheckCheck size={16} className="text-green-600" />
                  </div>
                  <p>{point}</p>
                </div>
              ))}
            </div>
            
            <a 
              href="#demo" 
              className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
            >
              See how it works <ArrowRight size={16} className="ml-1" />
            </a>
          </div>
          
          {/* Visual Side */}
          <div className={`${animate ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'} 
                          transition-all duration-1000 delay-300`}>
            <div className="relative mx-auto max-w-md">
              {/* Animation Container */}
              <div className="relative bg-white rounded-2xl shadow-xl p-6 overflow-hidden">
                {/* Protection Animation */}
                <div className="relative mx-auto w-64 h-64 mb-6">
                  {/* Shield Base */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Shield size={180} className="text-gray-200" />
                  </div>
                  
                  {/* Animated Shield Gradient */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div 
                      className="w-[180px] h-[180px] shield-animation"
                      style={{
                        clipPath: "path('M90 0 C60 15 30 15 0 0 V108 C0 152 40 180 90 180 C140 180 180 152 180 108 V0 C150 15 120 15 90 0 Z')",
                        background: `linear-gradient(45deg, 
                                    ${activeTab === 'malware' ? '#3b82f6' : 
                                      activeTab === 'ransomware' ? '#a855f7' : '#f97316'} 0%, 
                                    #e2e8f0 100%)`,
                        opacity: 0.6,
                      }}
                    />
                  </div>
                  
                  {/* Scanning Animation */}
                  <div className="absolute top-0 left-0 right-0 h-2 bg-blue-500 scanning-animation" 
                    style={{
                      animation: "scanning 3s infinite",
                      boxShadow: "0 0 10px 2px #3b82f6"
                    }}
                  />
                  
                  {/* Center Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {activeTab === 'malware' ? (
                      <Shield size={60} className="text-blue-500" />
                    ) : activeTab === 'ransomware' ? (
                      <Shield size={60} className="text-purple-500" />
                    ) : (
                      <Shield size={60} className="text-orange-500" />
                    )}
                  </div>
                </div>
                
                {/* Status Text */}
                <div className="text-center">
                  <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Active Protection
                  </div>
                  <p className="text-gray-500 text-sm">
                    {activeTab === 'malware' 
                      ? 'Scanning system for malware...'
                      : activeTab === 'ransomware'
                        ? 'Monitoring files for unauthorized encryption...'
                        : 'Checking website safety...'
                    }
                  </p>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-3/4 h-12 
                            bg-black/10 rounded-full blur-xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add CSS for animations */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.05); opacity: 0.8; }
        }
        
        @keyframes scanning {
          0% { top: 10%; }
          50% { top: 90%; }
          100% { top: 10%; }
        }
        
        .shield-animation {
          animation: pulse 3s infinite;
        }
        
        .scanning-animation {
          animation: scanning 3s infinite;
        }
      `}</style>
    </section>
  );
};

export default Protection;