import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Protection from './components/Protection';
import Platforms from './components/Platforms';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Download from './components/Download';
import Footer from './components/Footer';
import MobileNavbar from './components/MobileNavbar';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Desktop Navbar - hidden on mobile */}
      <div className="hidden md:block">
        <Navbar />
      </div>
      
      {/* Mobile Navbar - shown only on mobile */}
      <div className="block md:hidden">
        <MobileNavbar />
      </div>
      
      <main>
        <Hero />
        <Features />
        <Protection />
        <Platforms />
        <Pricing />
        <Testimonials />
        <Download />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;