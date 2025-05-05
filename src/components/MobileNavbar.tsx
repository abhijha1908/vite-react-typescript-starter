import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const MobileNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-3">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Logo size={32} />
            <span className="text-xl font-bold bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              ShieldX360
            </span>
          </div>

          <button 
            onClick={toggleMenu}
            className="focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-20 px-6">
          <div className="flex flex-col space-y-6 text-center text-lg">
            <a 
              href="#features" 
              className="py-3 border-b border-gray-100" 
              onClick={toggleMenu}
            >
              Features
            </a>
            <a 
              href="#protection" 
              className="py-3 border-b border-gray-100" 
              onClick={toggleMenu}
            >
              Protection
            </a>
            <a 
              href="#platforms" 
              className="py-3 border-b border-gray-100" 
              onClick={toggleMenu}
            >
              Platforms
            </a>
            <a 
              href="#pricing" 
              className="py-3 border-b border-gray-100" 
              onClick={toggleMenu}
            >
              Pricing
            </a>
            <a 
              href="#download" 
              className="mt-4 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium"
              onClick={toggleMenu}
            >
              Download Now
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNavbar;