import React, { useState } from 'react';
import { Translations, Language } from '../types';
import { DynamicIcon } from './Icons';
import { Button } from './Button';

interface NavbarProps {
  t: Translations['nav'];
  lang: Language;
  toggleLang: () => void;
  onBuyClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ t, lang, toggleLang, onBuyClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Helper to scroll to section
  const scrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => scrollTo('hero')}>
             <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center text-white mr-2 rtl:mr-0 rtl:ml-2">
                <DynamicIcon name="Wrench" size={24} />
             </div>
             <span className="text-xl md:text-2xl font-black text-secondary-900 tracking-tight">
               Mobile <span className="text-primary-600">Mechanic</span> UAE
             </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
            <button onClick={() => scrollTo('services')} className="text-gray-600 hover:text-primary-600 font-medium transition-colors">{t.services}</button>
            <button onClick={() => scrollTo('features')} className="text-gray-600 hover:text-primary-600 font-medium transition-colors">{t.about}</button>
            <button onClick={() => scrollTo('testimonials')} className="text-gray-600 hover:text-primary-600 font-medium transition-colors">{t.contact}</button>
            
            {/* Lang Toggle */}
            <button 
              onClick={toggleLang}
              className="px-3 py-1 rounded-full border border-gray-300 text-sm font-semibold hover:border-primary-500 hover:text-primary-600 transition-all"
            >
              {lang === 'en' ? 'العربية' : 'English'}
            </button>

            {/* Buy Website Button */}
             <button 
              onClick={onBuyClick}
              className="text-secondary-600 hover:text-secondary-800 font-bold text-sm bg-secondary-50 px-3 py-2 rounded-lg border border-secondary-200 hover:bg-secondary-100 transition-colors"
            >
              {t.buyWebsite}
            </button>

            <Button onClick={() => scrollTo('contact')} variant="primary" size="md">
              {t.bookNow}
            </Button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center space-x-4 rtl:space-x-reverse">
             <button 
              onClick={toggleLang}
              className="px-2 py-1 rounded border border-gray-300 text-xs font-bold"
            >
              {lang === 'en' ? 'AR' : 'EN'}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-secondary-900 p-2">
              <DynamicIcon name={isOpen ? 'X' : 'Menu'} size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 animate-fade-in-down">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <button onClick={() => scrollTo('services')} className="block w-full text-start px-3 py-3 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md">{t.services}</button>
            <button onClick={() => scrollTo('features')} className="block w-full text-start px-3 py-3 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md">{t.about}</button>
            <button onClick={() => scrollTo('testimonials')} className="block w-full text-start px-3 py-3 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md">{t.contact}</button>
            
            <button onClick={() => { setIsOpen(false); onBuyClick(); }} className="block w-full text-start px-3 py-3 text-base font-bold text-secondary-600 bg-secondary-50 hover:bg-secondary-100 rounded-md border border-secondary-100 mt-2">
              {t.buyWebsite}
            </button>

            <div className="pt-4">
              <Button onClick={() => scrollTo('contact')} fullWidth variant="primary" size="lg">
                {t.bookNow}
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};