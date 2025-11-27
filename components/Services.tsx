import React from 'react';
import { Translations } from '../types';
import { DynamicIcon } from './Icons';

interface ServicesProps {
  t: Translations['services'];
}

export const Services: React.FC<ServicesProps> = ({ t }) => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-bold text-primary-600 uppercase tracking-wide mb-2">{t.heading}</h2>
          <p className="text-3xl md:text-4xl font-extrabold text-secondary-900">{t.subheading}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.items.map((service) => (
            <div key={service.id} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 group">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                <DynamicIcon name={service.iconName} size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};