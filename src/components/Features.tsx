import React, { useEffect, useState } from 'react';
import { Shield, Zap, Globe, Lock, FileText, AlertTriangle, Cpu, EyeOff } from 'lucide-react';

const featuresList = [
  {
    icon: <Shield className="h-6 w-6 text-blue-500" />,
    title: "Real-time Protection",
    description: "Continuous monitoring and instant detection of threats as they emerge."
  },
  {
    icon: <Zap className="h-6 w-6 text-orange-500" />,
    title: "Lightning Fast Scans",
    description: "Optimized scanning engine that doesn't slow down your system."
  },
  {
    icon: <Globe className="h-6 w-6 text-purple-500" />,
    title: "Web Protection",
    description: "Block malicious websites and prevent phishing attacks while browsing."
  },
  {
    icon: <Lock className="h-6 w-6 text-green-500" />,
    title: "Firewall Protection",
    description: "Advanced network monitoring to block unauthorized access attempts."
  },
  {
    icon: <FileText className="h-6 w-6 text-red-500" />,
    title: "Ransomware Shield",
    description: "Prevent encryption of your valuable files by ransomware attacks."
  },
  {
    icon: <AlertTriangle className="h-6 w-6 text-yellow-500" />,
    title: "Vulnerability Scanner",
    description: "Identify and patch software vulnerabilities before they can be exploited."
  },
  {
    icon: <Cpu className="h-6 w-6 text-indigo-500" />,
    title: "Low Resource Usage",
    description: "Optimized to use minimal system resources while providing maximum protection."
  },
  {
    icon: <EyeOff className="h-6 w-6 text-gray-500" />,
    title: "Privacy Protection",
    description: "Safeguard your personal information and prevent data tracking."
  }
];

const Features: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.feature-item').forEach(item => {
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h5 className="text-blue-600 font-medium mb-3">Key Features</h5>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Complete Protection for Your Digital Life
          </h2>
          <p className="text-gray-600">
            ShieldX360 provides comprehensive security features designed to protect you from all types of threats,
            from viruses and malware to sophisticated ransomware and zero-day attacks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresList.map((feature, index) => (
            <div 
              key={index}
              data-index={index}
              className={`feature-item bg-white border border-gray-100 rounded-xl p-6 shadow-sm
                        hover:shadow-md transition-all duration-300
                        ${visibleItems.includes(index) 
                          ? 'opacity-100 translate-y-0' 
                          : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;