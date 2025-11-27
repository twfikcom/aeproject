import React, { useState } from 'react';
import { Translations } from '../types';
import { Button } from './Button';
import { DynamicIcon } from './Icons';

interface BuyModalProps {
  isOpen: boolean;
  onClose: () => void;
  t: Translations['buyModal'];
  lang: 'en' | 'ar';
}

export const BuyModal: React.FC<BuyModalProps> = ({ isOpen, onClose, t, lang }) => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xblpnbep', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormStatus('success');
        form.reset();
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  const whatsappNumber = "201010373331";
  const whatsappMessage = lang === 'en' 
    ? "Hi, I am interested in buying the MobileMechanic.ae website template."
    : "مرحباً، أنا مهتم بشراء قالب موقع MobileMechanic.ae";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="fixed inset-0 z-[60] overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-gray-900/70 backdrop-blur-sm transition-opacity" onClick={onClose}></div>

      <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
          
          {/* Header */}
          <div className="bg-primary-600 px-4 py-6 sm:px-6 text-white relative">
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 rtl:left-4 rtl:right-auto text-white/80 hover:text-white transition-colors"
            >
              <DynamicIcon name="X" size={24} />
            </button>
            <h3 className="text-2xl font-bold leading-6" id="modal-title">{t.title}</h3>
            <p className="mt-2 text-primary-100">{t.subtitle}</p>
          </div>

          <div className="px-4 py-6 sm:p-6">
            
            {/* WhatsApp Option */}
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 px-4 rounded-lg shadow-md transition-all mb-8 group"
            >
              <svg className="w-6 h-6 mr-2 rtl:mr-0 rtl:ml-2 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.696c1.029.662 1.977 1.216 3.296 1.216.001 0 .001 0 .002 0 3.181 0 5.768-2.586 5.768-5.766.001-3.18-2.587-5.767-5.768-5.766zm.92 10.166c-.63 0-1.15-.176-1.747-.525l-.127-.084-1.62.427.433-1.575-.084-.13c-.413-.715-.697-1.416-.697-2.355 0-2.484 2.02-4.504 4.505-4.504 2.485 0 4.505 2.02 4.505 4.504 0 2.484-2.02 4.504-4.504 4.504zm2.467-3.377c-.135-.068-.801-.395-.925-.44-.124-.045-.214-.068-.305.068-.091.136-.351.441-.43.531-.079.091-.158.102-.293.034-.135-.068-.57-.21-1.085-.668-.4-.356-.67-.796-.749-.931-.079-.136-.008-.209.06-.276.061-.06.136-.158.203-.237.068-.079.09-.136.135-.226.046-.091.023-.17-.011-.237-.034-.068-.305-1.254-.418-1.538-.11-.277-.221-.237-.305-.241-.079-.004-.17-.004-.26-.004-.091 0-.237.034-.362.17-.124.136-.474.463-.474 1.129 0 .666.485 1.31.553 1.401.068.09 1.954 2.983 4.735 4.183 1.838.793 2.556.793 3.038.749.538-.049 1.157-.473 1.321-.929.164-.456.164-.847.115-.929-.049-.082-.18-.131-.315-.199z"/></svg>
              {t.whatsappBtn}
            </a>

            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-2 text-sm text-gray-500 font-medium">{t.orLabel}</span>
              </div>
            </div>

            {/* Form */}
            {formStatus === 'success' ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                 <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 mb-4">
                   <DynamicIcon name="CheckCircle" className="h-6 w-6 text-green-600" />
                 </div>
                 <h3 className="text-lg font-medium text-green-900 mb-2">Message Sent</h3>
                 <p className="text-green-700">{t.successMessage}</p>
                 <Button onClick={onClose} variant="outline" className="mt-6 border-green-600 text-green-700 hover:bg-green-50">
                    {t.closeBtn}
                 </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">{t.nameLabel}</label>
                  <input type="text" name="name" id="name" required className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 border p-2" />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">{t.phoneLabel}</label>
                  <input type="tel" name="phone" id="phone" required className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 border p-2" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">{t.emailLabel}</label>
                  <input type="email" name="email" id="email" className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 border p-2" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">{t.messageLabel}</label>
                  <textarea name="message" id="message" rows={3} className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 border p-2"></textarea>
                </div>

                {formStatus === 'error' && (
                  <div className="text-red-600 text-sm text-center">{t.errorMessage}</div>
                )}

                <div className="pt-2">
                  <Button type="submit" fullWidth disabled={formStatus === 'submitting'}>
                     {formStatus === 'submitting' ? '...' : t.submitBtn}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
