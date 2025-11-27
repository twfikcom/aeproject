import React from 'react';
import { Translations } from '../types';
import { Button } from './Button';
import { DynamicIcon } from './Icons';

interface ContactFooterProps {
  tCta: Translations['ctaSection'];
  tFooter: Translations['footer'];
  onBuyClick: () => void;
}

export const ContactFooter: React.FC<ContactFooterProps> = ({ tCta, tFooter, onBuyClick }) => {
  return (
    <>
      {/* Big CTA Section */}
      <section id="contact" className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
            {tCta.heading}
          </h2>
          <p className="text-xl text-primary-100 mb-10">
            {tCta.subheading}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="white" size="xl" className="shadow-2xl">
              <span className="flex items-center gap-3">
                <DynamicIcon name="Phone" className="text-primary-600" />
                {tCta.buttonText}
              </span>
            </Button>
            {/* WhatsApp Button as alternative */}
             <a 
               href="https://wa.me/971500000000" // Placeholder number for Mechanic Service
               target="_blank"
               rel="noreferrer"
               className="inline-flex items-center justify-center rounded-lg font-bold transition-all duration-200 px-8 py-4 text-xl uppercase tracking-wide bg-[#25D366] text-white hover:bg-[#128c7e] shadow-lg"
             >
                <span className="flex items-center gap-2">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.696c1.029.662 1.977 1.216 3.296 1.216.001 0 .001 0 .002 0 3.181 0 5.768-2.586 5.768-5.766.001-3.18-2.587-5.767-5.768-5.766zm.92 10.166c-.63 0-1.15-.176-1.747-.525l-.127-.084-1.62.427.433-1.575-.084-.13c-.413-.715-.697-1.416-.697-2.355 0-2.484 2.02-4.504 4.505-4.504 2.485 0 4.505 2.02 4.505 4.504 0 2.484-2.02 4.504-4.504 4.504zm2.467-3.377c-.135-.068-.801-.395-.925-.44-.124-.045-.214-.068-.305.068-.091.136-.351.441-.43.531-.079.091-.158.102-.293.034-.135-.068-.57-.21-1.085-.668-.4-.356-.67-.796-.749-.931-.079-.136-.008-.209.06-.276.061-.06.136-.158.203-.237.068-.079.09-.136.135-.226.046-.091.023-.17-.011-.237-.034-.068-.305-1.254-.418-1.538-.11-.277-.221-.237-.305-.241-.079-.004-.17-.004-.26-.004-.091 0-.237.034-.362.17-.124.136-.474.463-.474 1.129 0 .666.485 1.31.553 1.401.068.09 1.954 2.983 4.735 4.183 1.838.793 2.556.793 3.038.749.538-.049 1.157-.473 1.321-.929.164-.456.164-.847.115-.929-.049-.082-.18-.131-.315-.199z"/></svg>
                  WhatsApp
                </span>
             </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center text-white text-2xl font-bold mb-4">
                 <DynamicIcon name="Wrench" className="mr-2 rtl:mr-0 rtl:ml-2 text-primary-500" />
                 MobileMechanic.ae
              </div>
              <p className="max-w-xs">{tFooter.companyDesc}</p>
            </div>
            
            <div>
              <h3 className="text-white font-bold mb-4 uppercase tracking-wider">{tFooter.quickLinks}</h3>
              <ul className="space-y-2">
                <li><a href="#services" className="hover:text-primary-500 transition-colors">Services</a></li>
                <li><a href="#features" className="hover:text-primary-500 transition-colors">About Us</a></li>
                <li><a href="#testimonials" className="hover:text-primary-500 transition-colors">Reviews</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4 uppercase tracking-wider">{tFooter.contactUs}</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2"><DynamicIcon name="Phone" size={16}/> 800-MECHANIC</li>
                <li className="flex items-center gap-2"><DynamicIcon name="MapPin" size={16}/> Dubai, UAE</li>
                <li className="flex items-center gap-2">support@mobilemechanic.ae</li>
                <li className="pt-4">
                  <button onClick={onBuyClick} className="text-secondary-400 hover:text-white font-semibold underline decoration-dotted underline-offset-4">
                    {tFooter.buyWebsite}
                  </button>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            {tFooter.rights}
          </div>
        </div>
      </footer>
    </>
  );
};