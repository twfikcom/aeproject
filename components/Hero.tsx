import React from 'react';
import { Translations, Language } from '../types';
import { Button } from './Button';
import { DynamicIcon } from './Icons';

interface HeroProps {
  t: Translations['hero'];
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ t, lang }) => {
  const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  const scrollToServices = () => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="relative pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-secondary-900">
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Mechanic working on car"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary-900/90 via-secondary-900/70 to-secondary-900/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Emergency Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/20 border border-red-500/50 backdrop-blur-sm mb-8 animate-pulse">
           <div className="w-2 h-2 rounded-full bg-red-500" />
           <span className="text-red-100 font-semibold text-sm uppercase tracking-wider">{t.emergencyBadge}</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
          <span className="block">{t.titleLine1}</span>
          <span className="block text-primary-500 mt-2">{t.titleLine2}</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
          {t.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Button onClick={scrollToContact} variant="primary" size="xl" className="w-full sm:w-auto shadow-orange-500/25">
            <span className="flex items-center gap-2">
              <DynamicIcon name="Phone" size={24} />
              {t.ctaPrimary}
            </span>
          </Button>
          
          <Button onClick={scrollToServices} variant="outline" size="xl" className="w-full sm:w-auto">
             {t.ctaSecondary}
          </Button>
        </div>

        {/* Quick Stats / Trust Signals */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-8">
           <div className="text-center">
             <div className="text-3xl font-bold text-white mb-1">30m</div>
             <div className="text-sm text-gray-400 uppercase tracking-wide">{lang === 'en' ? 'Avg. Arrival' : 'متوسط الوصول'}</div>
           </div>
           <div className="text-center">
             <div className="text-3xl font-bold text-white mb-1">500+</div>
             <div className="text-sm text-gray-400 uppercase tracking-wide">{lang === 'en' ? 'Repairs Done' : 'إصلاحات ناجحة'}</div>
           </div>
           <div className="text-center">
             <div className="text-3xl font-bold text-white mb-1">4.9/5</div>
             <div className="text-sm text-gray-400 uppercase tracking-wide">{lang === 'en' ? 'Customer Rating' : 'تقييم العملاء'}</div>
           </div>
           <div className="text-center">
             <div className="text-3xl font-bold text-white mb-1">24/7</div>
             <div className="text-sm text-gray-400 uppercase tracking-wide">{lang === 'en' ? 'Availability' : 'متوفرون'}</div>
           </div>
        </div>

      </div>
    </section>
  );
};