import React, { useEffect, useState } from 'react';
import { Shield, Lock, CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <section className="pt-20 md:pt-28 pb-20 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
      <div className="container mx-auto px-6 relative">
        {/* Background Elements */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-100 rounded-full opacity-20 blur-3xl" />
        <div className="absolute top-40 -left-20 w-72 h-72 bg-purple-100 rounded-full opacity-30 blur-3xl" />
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className={`${animate ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} 
                          transition-all duration-1000 delay-300`}>
            <h5 className="font-medium text-blue-600 mb-3">Complete Protection</h5>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Protect Your Digital Life with{' '}
              <span className="bg-gradient-to-r from-orange-500 via-purple-500 to-blue-600 bg-clip-text text-transparent">
                Zero Compromise
              </span>
            </h1>
            
            <p className="text-gray-600 text-lg mb-8 max-w-lg">
              ShieldX360 provides real-time protection against all threats with advanced AI technology
              that keeps you safe without slowing down your devices.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a 
                href="#pricing" 
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 
                          text-white rounded-full font-medium text-center transition-all hover:shadow-lg"
              >
                Get Protected Now
              </a>
              <a 
                href="#features" 
                className="px-8 py-3 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50
                          rounded-full font-medium text-center transition-all"
              >
                See Features
              </a>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-5 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <CheckCircle size={16} className="text-green-500" />
                <span>30-Day Free Trial</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle size={16} className="text-green-500" />
                <span>24/7 Protection</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle size={16} className="text-green-500" />
                <span>5M+ Users</span>
              </div>
            </div>
          </div>
          
          {/* Hero Graphic */}
          <div className={`${animate ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} 
                          transition-all duration-1000 delay-700 relative`}>
            <div className="relative mx-auto max-w-md">
              <div className="relative z-10 bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Shield className="w-5 h-5 text-green-500" />
                      <span className="font-medium text-green-500">Protected</span>
                    </div>
                    <h3 className="text-lg font-semibold">System Status</h3>
                  </div>
                  <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    Active
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Lock className="text-blue-500" />
                      <div>
                        <h4 className="font-medium">Malware Shield</h4>
                        <p className="text-sm text-gray-500">Real-time protection</p>
                      </div>
                    </div>
                    <div className="h-4 w-4 rounded-full bg-green-500"></div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Lock className="text-purple-500" />
                      <div>
                        <h4 className="font-medium">Web Protection</h4>
                        <p className="text-sm text-gray-500">Browsing shield</p>
                      </div>
                    </div>
                    <div className="h-4 w-4 rounded-full bg-green-500"></div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Lock className="text-orange-500" />
                      <div>
                        <h4 className="font-medium">Ransomware Protection</h4>
                        <p className="text-sm text-gray-500">File monitoring</p>
                      </div>
                    </div>
                    <div className="h-4 w-4 rounded-full bg-green-500"></div>
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">Last Scan</h4>
                    <span className="text-sm text-gray-500">Today, 9:45 AM</span>
                  </div>
                  <p className="text-green-600 text-sm font-medium">No threats detected</p>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-1/2 -right-6 transform -translate-y-1/2 w-12 h-24 
                              bg-gradient-to-b from-blue-500 to-purple-500 rounded-r-full blur-[1px] opacity-70"></div>
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-3/4 h-12 
                              bg-black/10 rounded-full blur-xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;