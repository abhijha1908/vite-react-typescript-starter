import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Shield } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Logo size={32} />
            </div>
            <p className="mb-6">
              Complete protection for your digital life with zero compromise on security or performance.
            </p>
            <div className="flex space-x-4">
              <a href="#facebook" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#twitter" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#instagram" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#youtube" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Products</h3>
            <ul className="space-y-4">
              <li><a href="#antivirus" className="hover:text-white transition-colors">Antivirus</a></li>
              <li><a href="#vpn" className="hover:text-white transition-colors">VPN Service</a></li>
              <li><a href="#password-manager" className="hover:text-white transition-colors">Password Manager</a></li>
              <li><a href="#identity-protection" className="hover:text-white transition-colors">Identity Protection</a></li>
              <li><a href="#business" className="hover:text-white transition-colors">Business Solutions</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-4">
              <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#support" className="hover:text-white transition-colors">Support Center</a></li>
              <li><a href="#threat-lab" className="hover:text-white transition-colors">Threat Research Lab</a></li>
              <li><a href="#whitepapers" className="hover:text-white transition-colors">Whitepapers</a></li>
              <li><a href="#community" className="hover:text-white transition-colors">Community</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#careers" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#press" className="hover:text-white transition-colors">Press</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#partners" className="hover:text-white transition-colors">Partners</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Softwave Technologyx PVT LLC. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-6 text-sm">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#cookies" className="hover:text-white transition-colors">Cookie Policy</a>
            <a href="#licenses" className="hover:text-white transition-colors">Licenses</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
