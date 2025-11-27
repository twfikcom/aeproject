import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { CONTENT } from './constants';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { ContactFooter } from './components/ContactFooter';
import { BuyModal } from './components/BuyModal';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const [isBuyModalOpen, setIsBuyModalOpen] = useState(false);

  // Toggle Language
  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'ar' : 'en');
  };

  // Update document direction and font on language change
  useEffect(() => {
    const root = document.documentElement;
    if (lang === 'ar') {
      root.setAttribute('dir', 'rtl');
      root.lang = 'ar';
      document.body.classList.remove('font-sans');
      document.body.classList.add('font-arabic');
    } else {
      root.setAttribute('dir', 'ltr');
      root.lang = 'en';
      document.body.classList.remove('font-arabic');
      document.body.classList.add('font-sans');
    }
  }, [lang]);

  const content = CONTENT[lang];

  return (
    <div className={`min-h-screen bg-white ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
      <Navbar 
        t={content.nav} 
        lang={lang} 
        toggleLang={toggleLang} 
        onBuyClick={() => setIsBuyModalOpen(true)}
      />
      
      <main>
        <Hero t={content.hero} lang={lang} />
        <Services t={content.services} />
        <Features t={content.features} />
        <Testimonials t={content.testimonials} />
        <ContactFooter 
          tCta={content.ctaSection} 
          tFooter={content.footer} 
          onBuyClick={() => setIsBuyModalOpen(true)}
        />
      </main>

      <BuyModal 
        isOpen={isBuyModalOpen} 
        onClose={() => setIsBuyModalOpen(false)} 
        t={content.buyModal}
        lang={lang}
      />

      {/* Sticky Mobile Call Button */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 md:hidden z-40 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <a href="tel:800-MECHANIC" className="flex items-center justify-center w-full bg-primary-600 text-white font-bold py-3 px-4 rounded-lg shadow-lg hover:bg-primary-700 transition-colors">
           <span className="mr-2 rtl:mr-0 rtl:ml-2">📞</span>
           {content.ctaSection.buttonText}
        </a>
      </div>
    </div>
  );
};

export default App;