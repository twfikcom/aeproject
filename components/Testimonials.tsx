import React from 'react';
import { Translations } from '../types';
import { DynamicIcon } from './Icons';

interface TestimonialsProps {
  t: Translations['testimonials'];
}

export const Testimonials: React.FC<TestimonialsProps> = ({ t }) => {
  return (
    <section id="testimonials" className="py-20 bg-secondary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold">{t.heading}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.items.map((item) => (
            <div key={item.id} className="bg-secondary-800 p-8 rounded-2xl border border-secondary-700 relative">
              <div className="absolute top-8 right-8 rtl:left-8 rtl:right-auto text-secondary-600 opacity-20">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                   <path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H9C9.00001 15 9.00001 12 11 11C10.6667 11 10.3333 11 10 11V8C10 8 13.0833 8 13.0833 8C15.0833 8 16 10 16 13V17C16 17 14.017 17 14.017 21ZM5 21C5 21 3 21 3 17V13C3 10 4 8 6 8C6 8 9.08333 8 9.08333 8V11C8.75 11 8.41667 11 8 11C6 12 6 15 6 16H9C10.1046 16 11 16.8954 11 18V21L5 21Z" />
                </svg>
              </div>
              <div className="flex mb-4 text-yellow-400">
                {[...Array(item.rating)].map((_, i) => (
                  <DynamicIcon key={i} name="Star" size={20} className="fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed italic">"{item.text}"</p>
              <div className="flex items-center">
                 <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center font-bold text-white text-lg">
                    {item.name.charAt(0)}
                 </div>
                 <div className="ml-4 rtl:ml-0 rtl:mr-4">
                   <div className="font-bold text-white">{item.name}</div>
                   <div className="text-sm text-secondary-300">{item.location}</div>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};