import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center">
<img 
  src="/images/logo.jpeg" 
  alt="ShieldX360" 
  className="h-16 w-auto"
  style={{
    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
  }}
/>
        </div>

        <div className="hidden md:flex items-center space-x-10">
          <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">Features</a>
          <a href="#protection" className="text-gray-700 hover:text-blue-600 transition-colors">Protection</a>
          <a href="#platforms" className="text-gray-700 hover:text-blue-600 transition-colors">Platforms</a>
          <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors">Pricing</a>
        </div>

        <div>
          <a 
            href="#download" 
            className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full 
                      font-medium hover:shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all"
          >
            Download Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
