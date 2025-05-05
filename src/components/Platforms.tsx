import React, { useEffect, useState } from 'react';
import { Laptop, Smartphone, CheckCircle, Server } from 'lucide-react';

const Platforms: React.FC = () => {
  const [animate, setAnimate] = useState(false);
  const [activeDevice, setActiveDevice] = useState('desktop');
  
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
    
    observer.observe(document.getElementById('platforms') as Element);
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="platforms" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h5 className="text-blue-600 font-medium mb-3">Cross-Platform Protection</h5>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Protect All Your Devices
          </h2>
          <p className="text-gray-600">
            ShieldX360 provides comprehensive protection across all your devices and operating systems,
            keeping your digital life secure no matter where you are.
          </p>
        </div>

        {/* Platform Selection */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <button
            onClick={() => setActiveDevice('desktop')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all 
                      ${activeDevice === 'desktop'
                        ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
          >
            <Laptop size={20} />
            Desktop
          </button>
          <button
            onClick={() => setActiveDevice('mobile')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all 
                      ${activeDevice === 'mobile'
                        ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
          >
            <Smartphone size={20} />
            Mobile
          </button>
          <button
            onClick={() => setActiveDevice('server')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all 
                      ${activeDevice === 'server'
                        ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
          >
            <Server size={20} />
            Server
          </button>
        </div>

        {/* Display Based on Active Device */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Device Preview */}
          <div className={`order-2 md:order-1 ${animate ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} 
                          transition-all duration-1000`}>
            <div className="relative mx-auto max-w-md">
              {activeDevice === 'desktop' && (
                <div className="relative bg-gray-800 rounded-t-xl p-3 shadow-xl">
                  <div className="bg-white rounded-sm overflow-hidden">
                    <div className="h-6 bg-gray-100 flex items-center px-3">
                      <div className="flex space-x-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                      </div>
                    </div>
                    <div className="p-4 h-60 bg-gradient-to-br from-gray-50 to-blue-50">
                      <div className="bg-white rounded-lg shadow-sm p-3 mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <Laptop size={18} className="text-blue-500" />
                          </div>
                          <div>
                            <h4 className="font-medium text-sm">ShieldX360 PC Protection</h4>
                            <p className="text-xs text-green-500">Active</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white rounded-lg shadow-sm p-3">
                        <div className="h-2 w-full bg-gray-100 rounded-full mb-2">
                          <div className="h-2 w-3/4 bg-green-500 rounded-full"></div>
                        </div>
                        <div className="text-xs text-gray-500">System protected</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-700 h-3 rounded-b-lg mx-auto w-1/3"></div>
                  <div className="bg-gray-900 h-1 w-2/3 mx-auto"></div>
                </div>
              )}
              
              {activeDevice === 'mobile' && (
                <div className="relative mx-auto w-48 h-96 bg-gray-800 rounded-3xl p-2 shadow-xl">
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-20 h-3 bg-black rounded-full"></div>
                  <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                    <div className="h-full bg-gradient-to-br from-gray-50 to-purple-50 p-4">
                      <div className="text-center mb-6 mt-6">
                        <h4 className="font-bold text-sm">ShieldX360</h4>
                        <p className="text-xs text-gray-500">Mobile Protection</p>
                      </div>
                      
                      <div className="bg-white rounded-xl shadow-sm p-3 mb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                            <Shield size={16} className="text-purple-500" />
                          </div>
                          <div className="text-xs">
                            <p className="font-medium">Device Secured</p>
                            <p className="text-green-500 text-[10px]">No threats detected</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="bg-white rounded-xl shadow-sm p-3">
                          <p className="text-xs font-medium mb-1">App Protection</p>
                          <div className="h-1.5 w-full bg-gray-100 rounded-full">
                            <div className="h-1.5 w-full bg-green-500 rounded-full"></div>
                          </div>
                        </div>
                        
                        <div className="bg-white rounded-xl shadow-sm p-3">
                          <p className="text-xs font-medium mb-1">Web Protection</p>
                          <div className="h-1.5 w-full bg-gray-100 rounded-full">
                            <div className="h-1.5 w-full bg-green-500 rounded-full"></div>
                          </div>
                        </div>
                        
                        <div className="bg-white rounded-xl shadow-sm p-3">
                          <p className="text-xs font-medium mb-1">Privacy Protection</p>
                          <div className="h-1.5 w-full bg-gray-100 rounded-full">
                            <div className="h-1.5 w-full bg-green-500 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {activeDevice === 'server' && (
                <div className="relative mx-auto w-72 h-72 bg-gray-900 rounded-md p-4 shadow-xl flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-white text-sm font-medium">ShieldX360 Server</div>
                    <div className="text-green-400 text-xs px-2 py-0.5 bg-green-900 rounded">ONLINE</div>
                  </div>
                  
                  <div className="flex-1 grid grid-cols-2 gap-3">
                    <div className="bg-gray-800 rounded p-2">
                      <div className="text-xs text-gray-400 mb-1">Firewall Status</div>
                      <div className="text-green-400 text-sm font-medium">Active</div>
                      <div className="h-1 w-full bg-gray-700 rounded-full mt-2">
                        <div className="h-1 w-full bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-800 rounded p-2">
                      <div className="text-xs text-gray-400 mb-1">Intrusion Detection</div>
                      <div className="text-green-400 text-sm font-medium">Monitoring</div>
                      <div className="h-1 w-full bg-gray-700 rounded-full mt-2">
                        <div className="h-1 w-full bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-800 rounded p-2">
                      <div className="text-xs text-gray-400 mb-1">Updates</div>
                      <div className="text-green-400 text-sm font-medium">Current</div>
                      <div className="h-1 w-full bg-gray-700 rounded-full mt-2">
                        <div className="h-1 w-full bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-800 rounded p-2">
                      <div className="text-xs text-gray-400 mb-1">Vulnerabilities</div>
                      <div className="text-green-400 text-sm font-medium">None detected</div>
                      <div className="h-1 w-full bg-gray-700 rounded-full mt-2">
                        <div className="h-1 w-full bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800 rounded p-2 mt-3">
                    <div className="text-xs text-gray-400 mb-1">System Status</div>
                    <div className="text-white text-xs flex justify-between mb-1">
                      <span>CPU: 12%</span>
                      <span>Memory: 34%</span>
                      <span>Disk: 47%</span>
                    </div>
                    <div className="h-1 w-full bg-gray-700 rounded-full">
                      <div className="h-1 w-1/3 bg-blue-500 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-5 gap-1 mt-3">
                    {[...Array(10)].map((_, i) => (
                      <div key={i} className="h-1.5 w-full bg-green-500 rounded-full"></div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Decorative Element */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-3/4 h-12 
                              bg-black/10 rounded-full blur-xl -z-10"></div>
            </div>
          </div>
          
          {/* Features List */}
          <div className={`order-1 md:order-2 ${animate ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} 
                          transition-all duration-1000 delay-300`}>
            <h3 className="text-2xl font-bold mb-6">
              {activeDevice === 'desktop' 
                ? 'Complete PC & Mac Protection' 
                : activeDevice === 'mobile'
                  ? 'Mobile Security for iOS & Android'
                  : 'Enterprise Server Protection'}
            </h3>
            
            <div className="space-y-5">
              {activeDevice === 'desktop' && (
                <>
                  <div className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Windows & macOS Compatible</h4>
                      <p className="text-gray-600">Full protection for both Windows and macOS operating systems.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Minimal Performance Impact</h4>
                      <p className="text-gray-600">Optimized to provide maximum protection with minimal system impact.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Web Browser Integration</h4>
                      <p className="text-gray-600">Secures your browsing experience across all popular browsers.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Cloud-Based Protection</h4>
                      <p className="text-gray-600">Leverages cloud intelligence for real-time threat detection.</p>
                    </div>
                  </div>
                </>
              )}
              
              {activeDevice === 'mobile' && (
                <>
                  <div className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">App Security Scanning</h4>
                      <p className="text-gray-600">Scans all apps for malicious behavior and privacy concerns.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Anti-Theft Protection</h4>
                      <p className="text-gray-600">Locate, lock, or wipe your device remotely if it's lost or stolen.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Safe Web Browsing</h4>
                      <p className="text-gray-600">Blocks dangerous websites and phishing attempts on mobile browsers.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">WiFi Security</h4>
                      <p className="text-gray-600">Checks if your WiFi connection is secure and encrypted properly.</p>
                    </div>
                  </div>
                </>
              )}
              
              {activeDevice === 'server' && (
                <>
                  <div className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Advanced Firewall Protection</h4>
                      <p className="text-gray-600">Enterprise-grade firewall with custom rule configuration.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Intrusion Detection System</h4>
                      <p className="text-gray-600">Monitors network traffic for suspicious activities and blocks attacks.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Vulnerability Assessment</h4>
                      <p className="text-gray-600">Regular scanning for security vulnerabilities and patch management.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Log Management & Monitoring</h4>
                      <p className="text-gray-600">Comprehensive logging and real-time monitoring of security events.</p>
                    </div>
                  </div>
                </>
              )}
            </div>
            
            <div className="mt-8">
              <a 
                href="#download" 
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full 
                          font-medium hover:shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all inline-block"
              >
                Get Protected Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platforms;