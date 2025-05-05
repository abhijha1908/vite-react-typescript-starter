import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Laptop, Smartphone, Server } from 'lucide-react';

const Download: React.FC = () => {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would handle the email submission
    alert(`Thank you! We'll send download instructions to ${email}`);
    setEmail('');
  };
  
  return (
    <section id="download" className="py-20 bg-gradient-to-br from-blue-700 to-purple-800 text-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h5 className="font-medium text-blue-200 mb-3">Get Started Today</h5>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Download ShieldX360 and Secure Your Digital Life
            </h2>
            
            <p className="text-blue-100 mb-8 max-w-lg">
              Try ShieldX360 free for 30 days and experience complete protection with zero compromise.
              No credit card required.
            </p>
            
            <form onSubmit={handleSubmit} className="mb-8">
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email" 
                  className="px-4 py-3 rounded-lg text-gray-800 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  required
                />
                <button 
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg font-medium 
                            hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  Get Started <ArrowRight size={16} />
                </button>
              </div>
            </form>
            
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <ShieldCheck size={20} className="text-green-300" />
                <span>30-Day Free Trial</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={20} className="text-green-300" />
                <span>No Credit Card</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={20} className="text-green-300" />
                <span>Cancel Anytime</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-bold mb-6">Available Platforms</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Laptop size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">Windows & macOS</h4>
                  <div className="flex gap-3 mt-2">
                    <a 
                      href="#download-windows" 
                      className="text-sm bg-white/20 hover:bg-white/30 py-1 px-3 rounded transition-colors"
                    >
                      Windows
                    </a>
                    <a 
                      href="#download-mac" 
                      className="text-sm bg-white/20 hover:bg-white/30 py-1 px-3 rounded transition-colors"
                    >
                      macOS
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                  <Smartphone size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">Mobile Devices</h4>
                  <div className="flex gap-3 mt-2">
                    <a 
                      href="#download-android" 
                      className="text-sm bg-white/20 hover:bg-white/30 py-1 px-3 rounded transition-colors"
                    >
                      Android
                    </a>
                    <a 
                      href="#download-ios" 
                      className="text-sm bg-white/20 hover:bg-white/30 py-1 px-3 rounded transition-colors"
                    >
                      iOS
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                  <Server size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">Enterprise Solutions</h4>
                  <a 
                    href="#contact-sales" 
                    className="inline-block text-sm bg-white/20 hover:bg-white/30 py-1 px-3 rounded mt-2 transition-colors"
                  >
                    Contact Sales
                  </a>
                </div>
              </div>
            </div>
            
            <div className="border-t border-white/20 mt-6 pt-6">
              <p className="text-sm text-blue-100">
                By downloading, you agree to our Terms of Service and Privacy Policy.
                ShieldX360 supports Windows 10/11, macOS 10.15+, Android 8.0+, and iOS 13+.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;