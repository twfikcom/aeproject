import React from 'react';
import { Translations } from '../types';
import { DynamicIcon } from './Icons';

interface FeaturesProps {
  t: Translations['features'];
}

export const Features: React.FC<FeaturesProps> = ({ t }) => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-5 mb-12 lg:mb-0 relative">
             <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80" 
                  alt="Mechanic fixing car" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/60 to-transparent"></div>
             </div>
             {/* Floating Badge */}
             <div className="absolute -bottom-6 -right-6 rtl:-left-6 rtl:right-auto bg-white p-6 rounded-2xl shadow-xl max-w-xs hidden md:block border border-gray-100">
               <div className="flex items-center gap-4">
                 <div className="bg-green-100 p-3 rounded-full text-green-600">
                   <DynamicIcon name="CheckCircle" size={24} />
                 </div>
                 <div>
                   <div className="font-bold text-gray-900">100% Satisfaction</div>
                   <div className="text-sm text-gray-500">Guaranteed Service</div>
                 </div>
               </div>
             </div>
          </div>

          <div className="lg:col-span-7">
            <h2 className="text-base font-bold text-primary-600 uppercase tracking-wide mb-2">{t.heading}</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-secondary-900 mb-6">{t.subheading}</h3>
            
            <div className="space-y-8">
              {t.items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-secondary-100 flex items-center justify-center text-secondary-700 font-bold">
                      {item.id}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};