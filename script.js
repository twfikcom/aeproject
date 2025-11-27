// Content Dictionary
const CONTENT = {
  en: {
    nav: {
      services: "Services",
      about: "Why Us",
      contact: "Contact",
      bookNow: "Book Now",
      buyWebsite: "Buy this Website",
      langBtn: "العربية"
    },
    hero: {
      title1: "Expert Car Repair",
      title2: "At Your Doorstep",
      subtitle: "Stuck on the road or at home? Our certified mobile mechanics come to you anywhere in the UAE. Fast, reliable, and transparent pricing.",
      cta1: "Request Mechanic Now",
      cta2: "View Services",
      ctaBuy: "Buy This Website",
      badge: "24/7 Emergency Service Available",
      stats: [
        { val: "30m", label: "Avg. Arrival" },
        { val: "500+", label: "Repairs Done" },
        { val: "4.9/5", label: "Customer Rating" },
        { val: "24/7", label: "Availability" }
      ]
    },
    services: {
      heading: "Our Premium Services",
      subheading: "We handle everything from simple maintenance to complex repairs right where you are.",
      items: [
        { title: "Battery Replacement", desc: "Dead battery? We deliver and install premium batteries on the spot.", icon: "battery" },
        { title: "Oil Change & Service", desc: "Full synthetic oil changes including filter replacement at your home or office.", icon: "droplet" },
        { title: "Tire Services", desc: "Puncture repair, tire rotation, and new tire installation.", icon: "disc" },
        { title: "Computer Diagnostics", desc: "Advanced scanning tools to identify check engine lights and electrical issues.", icon: "laptop" },
        { title: "Brake Pads & Rotors", desc: "Squeaky brakes? We replace pads and rotors safely and efficiently.", icon: "activity" },
        { title: "AC Repair & Gas", desc: "Keep cool in the UAE heat. AC recharge and leak detection.", icon: "wind" }
      ]
    },
    features: {
      heading: "Why Choose Mobile Mechanic UAE?",
      subheading: "We are changing the way car maintenance works.",
      items: [
        { id: "1", title: "We Come To You", desc: "Save time and towing fees. We fix your car at your home, office, or roadside." },
        { id: "2", title: "Certified Mechanics", desc: "Our team consists of highly trained and vetted automotive experts." },
        { id: "3", title: "Transparent Pricing", desc: "Get a quote upfront. No hidden fees or surprise charges." },
        { id: "4", title: "Genuine Parts", desc: "We use only high-quality OEM or equivalent parts for all repairs." }
      ]
    },
    testimonials: {
      heading: "Trusted by Drivers Across UAE",
      items: [
        { name: "Ahmed Al-Farsi", loc: "Dubai Marina", text: "Saved me a towing trip! The mechanic arrived in 30 minutes and fixed my battery issue instantly.", rating: 5 },
        { name: "Sarah Johnson", loc: "Abu Dhabi", text: "Super convenient. I had my oil changed while I was working at my office. Highly recommended!", rating: 5 },
        { name: "Mohammed Rashid", loc: "Sharjah", text: "Honest pricing and professional service. They explained everything clearly.", rating: 5 }
      ]
    },
    cta: {
      heading: "Ready to get back on the road?",
      subheading: "Don't let car trouble ruin your day. Call us now for immediate assistance.",
      btn: "Call +201010373331",
      stickyBtn: "Call Now",
      stickyBuy: "Buy Website"
    },
    footer: {
      desc: "The leading on-demand mobile mechanic service in the UAE.",
      rights: "© 2024 Mobile Mechanic UAE. All rights reserved.",
      quick: "Quick Links",
      contact: "Contact Us",
      buy: "Buy this Website"
    },
    buyModal: {
      title: "Buy This Website",
      subtitle: "Interested in owning this high-converting domain name with its website design? Contact us directly.",
      whatsappBtn: "Chat on WhatsApp",
      orLabel: "OR Send an Email",
      nameLabel: "Your Name",
      phoneLabel: "Phone Number (Required)",
      emailLabel: "Email Address",
      messageLabel: "Message",
      submitBtn: "Send Inquiry",
      whatsappMsg: "Hi, I am interested in buying the Mobile Mechanic UAE website template and domain."
    }
  },
  ar: {
    nav: {
      services: "خدماتنا",
      about: "لماذا نحن",
      contact: "اتصل بنا",
      bookNow: "احجز الآن",
      buyWebsite: "شراء هذا الموقع",
      langBtn: "English"
    },
    hero: {
      title1: "إصلاح السيارات",
      title2: "عند باب منزلك",
      subtitle: "سيارتك متعطلة؟ نحن نأتي إليك في أي مكان في الإمارات. خدمة سريعة، موثوقة، وأسعار شفافة.",
      cta1: "اطلب ميكانيكي الآن",
      cta2: "عرض الخدمات",
      ctaBuy: "شراء هذا الموقع",
      badge: "خدمة طوارئ ٢٤/٧ متوفرة",
      stats: [
        { val: "٣٠د", label: "متوسط الوصول" },
        { val: "٥٠٠+", label: "إصلاحات ناجحة" },
        { val: "٤.٩/٥", label: "تقييم العملاء" },
        { val: "٢٤/٧", label: "متوفرون" }
      ]
    },
    services: {
      heading: "خدماتنا المتميزة",
      subheading: "نغطي كل شيء من الصيانة الدورية إلى الإصلاحات المعقدة في موقعك.",
      items: [
        { title: "استبدال البطارية", desc: "بطارية فارغة؟ نقوم بتوصيل وتركيب بطاريات ممتازة في الموقع.", icon: "battery" },
        { title: "تغيير الزيت والصيانة", desc: "تغيير زيت تخليقي كامل مع استبدال الفلتر في منزلك أو مكتبك.", icon: "droplet" },
        { title: "خدمات الإطارات", desc: "إصلاح الثقوب، تدوير الإطارات، وتركيب إطارات جديدة.", icon: "disc" },
        { title: "فحص الكمبيوتر", desc: "أجهزة فحص متطورة لتحديد أعطال المحرك والمشاكل الكهربائية.", icon: "laptop" },
        { title: "الفرامل والمكابح", desc: "صوت صفير في الفرامل؟ نستبدل الفحمات والهوبات بأمان وكفاءة.", icon: "activity" },
        { title: "تكييف الهواء والغاز", desc: "حافظ على برودة سيارتك. إعادة تعبئة الغاز وكشف التسريبات.", icon: "wind" }
      ]
    },
    features: {
      heading: "لماذا تختار Mobile Mechanic UAE؟",
      subheading: "نحن نغير مفهوم صيانة السيارات.",
      items: [
        { id: "١", title: "نأتي إليك", desc: "وفر وقتك ورسوم السحب. نصلح سيارتك في منزلك، مكتبك، أو على الطريق." },
        { id: "٢", title: "ميكانيكيون معتمدون", desc: "فريقنا يتكون من خبراء سيارات مدربين وموثوقين." },
        { id: "٣", title: "أسعار شفافة", desc: "احصل على عرض سعر مسبق. لا رسوم خفية أو مفاجآت." },
        { id: "٤", title: "قطع غيار أصلية", desc: "نستخدم فقط قطع غيار أصلية أو معادلة لها في الجودة." }
      ]
    },
    testimonials: {
      heading: "يثق بنا السائقون في الإمارات",
      items: [
        { name: "أحمد الفارسي", loc: "دبي مارينا", text: "وفروا علي رحلة السحب! وصل الميكانيكي في 30 دقيقة وأصلح البطارية فوراً.", rating: 5 },
        { name: "سارة جونسون", loc: "أبو ظبي", text: "مريح جداً. تم تغيير الزيت وأنا أعمل في مكتبي. أنصح بهم بشدة!", rating: 5 },
        { name: "محمد راشد", loc: "الشارقة", text: "أسعار أمينة وخدمة محترفة. شرحوا لي كل شيء بوضوح.", rating: 5 }
      ]
    },
    cta: {
      heading: "مستعد للعودة إلى الطريق؟",
      subheading: "لا تدع مشاكل السيارة تفسد يومك. اتصل بنا الآن للحصول على مساعدة فورية.",
      btn: "اتصل بـ 201010373331+",
      stickyBtn: "اتصل الآن",
      stickyBuy: "شراء الموقع"
    },
    footer: {
      desc: "خدمة الميكانيكي المتنقل الرائدة عند الطلب في الإمارات العربية المتحدة.",
      rights: "© 2024 Mobile Mechanic UAE. جميع الحقوق محفوظة.",
      quick: "روابط سريعة",
      contact: "اتصل بنا",
      buy: "شراء هذا الموقع"
    },
    buyModal: {
      title: "شراء هذا الموقع",
      subtitle: "هل أنت مهتم بامتلاك اسم النطاق هذا مع تصميم الموقع؟ تواصل معنا مباشرة.",
      whatsappBtn: "تواصل عبر واتساب",
      orLabel: "أو أرسل بريداً إلكترونياً",
      nameLabel: "الاسم الكريم",
      phoneLabel: "رقم الهاتف (مطلوب)",
      emailLabel: "البريد الإلكتروني",
      messageLabel: "الرسالة",
      submitBtn: "إرسال الاستفسار",
      whatsappMsg: "مرحباً، أنا مهتم بشراء قالب موقع Mobile Mechanic UAE واسم النطاق."
    }
  }
};

// SVG Icons (Simplified)
const ICONS = {
  battery: '<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="1" y="6" width="18" height="12" rx="2" ry="2"></rect><line x1="23" y1="13" x2="23" y2="11"></line></svg>',
  droplet: '<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>',
  disc: '<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle></svg>',
  laptop: '<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="2" y1="20" x2="22" y2="20"></line></svg>',
  activity: '<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>',
  wind: '<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path></svg>'
};

// Global State
let currentLang = 'en';

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    updateContent();
});

// Explicitly attach functions to window to allow HTML onclick access
window.toggleLanguage = function() {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    updateContent();
}

window.toggleMobileMenu = function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

window.scrollToSection = function(id) {
    const el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
    }
}

window.openBuyModal = function() {
    document.getElementById('buy-modal').classList.remove('hidden');
}

window.closeBuyModal = function() {
    document.getElementById('buy-modal').classList.add('hidden');
}

// Update DOM elements
function updateContent() {
    const t = CONTENT[currentLang];
    const isAr = currentLang === 'ar';
    
    // HTML Attributes
    document.documentElement.lang = currentLang;
    document.documentElement.dir = isAr ? 'rtl' : 'ltr';
    document.body.className = isAr ? 'font-arabic text-gray-800 bg-white' : 'font-sans text-gray-800 bg-white';

    // Text Updates by ID
    setText('nav-services', t.nav.services);
    setText('mobile-nav-services', t.nav.services);
    setText('nav-about', t.nav.about);
    setText('mobile-nav-about', t.nav.about);
    setText('nav-contact', t.nav.contact);
    setText('mobile-nav-contact', t.nav.contact);
    setText('nav-book', t.nav.bookNow);
    setText('mobile-nav-book', t.nav.bookNow);
    setText('nav-buy', t.nav.buyWebsite);
    setText('mobile-nav-buy', t.nav.buyWebsite);
    setText('nav-lang', t.nav.langBtn);
    setText('nav-lang-mobile', isAr ? 'EN' : 'AR');

    setText('hero-badge', t.hero.badge);
    setText('hero-title-1', t.hero.title1);
    setText('hero-title-2', t.hero.title2);
    setText('hero-subtitle', t.hero.subtitle);
    setText('hero-cta-1', t.hero.cta1);
    setText('hero-cta-2', t.hero.cta2);
    setText('hero-cta-buy', t.hero.ctaBuy);

    setText('services-heading', t.services.heading);
    setText('services-subheading', t.services.subheading);
    
    setText('features-heading', t.features.heading);
    setText('features-subheading', t.features.subheading);
    
    setText('testimonials-heading', t.testimonials.heading);

    setText('cta-heading', t.cta.heading);
    setText('cta-subheading', t.cta.subheading);
    setText('cta-button', t.cta.btn);
    setText('mobile-sticky-btn', t.cta.stickyBtn);
    setText('mobile-sticky-buy', t.cta.stickyBuy);

    setText('footer-desc', t.footer.desc);
    setText('footer-quick', t.footer.quick);
    setText('footer-contact', t.footer.contact);
    setText('footer-buy', t.footer.buy);
    setText('footer-rights', t.footer.rights);

    // Modal
    setText('modal-title', t.buyModal.title);
    setText('modal-subtitle', t.buyModal.subtitle);
    setText('modal-whatsapp-btn', t.buyModal.whatsappBtn);
    setText('modal-or', t.buyModal.orLabel);
    setText('label-name', t.buyModal.nameLabel);
    setText('label-phone', t.buyModal.phoneLabel);
    setText('label-email', t.buyModal.emailLabel);
    setText('label-message', t.buyModal.messageLabel);
    setText('modal-submit', t.buyModal.submitBtn);
    
    // Update WhatsApp Links with Message
    const whatsappNum = "201010373331";
    const msg = encodeURIComponent(t.buyModal.whatsappMsg);
    const link = document.getElementById('modal-whatsapp-link');
    if (link) {
      link.href = `https://wa.me/${whatsappNum}?text=${msg}`;
    }

    // Render Lists
    renderStats(t.hero.stats);
    renderServices(t.services.items);
    renderFeatures(t.features.items);
    renderTestimonials(t.testimonials.items);
}

// Helpers
function setText(id, text) {
    const el = document.getElementById(id);
    if (el) el.innerText = text;
}

// Render Stats
function renderStats(stats) {
    const container = document.getElementById('stats-container');
    if (!container) return;
    container.innerHTML = stats.map(stat => `
        <div class="text-center">
            <div class="text-3xl font-bold text-white mb-1">${stat.val}</div>
            <div class="text-sm text-gray-400 uppercase tracking-wide">${stat.label}</div>
        </div>
    `).join('');
}

// Render Services
function renderServices(items) {
    const container = document.getElementById('services-grid');
    if (!container) return;
    container.innerHTML = items.map(item => `
        <div class="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 group">
            <div class="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                ${ICONS[item.icon] || ICONS.battery}
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">${item.title}</h3>
            <p class="text-gray-600 leading-relaxed">${item.desc}</p>
        </div>
    `).join('');
}

// Render Features
function renderFeatures(items) {
    const container = document.getElementById('features-list');
    if (!container) return;
    container.innerHTML = items.map(item => `
        <div class="flex gap-4">
            <div class="flex-shrink-0">
                <div class="w-10 h-10 rounded-full bg-secondary-100 flex items-center justify-center text-secondary-700 font-bold">
                    ${item.id}
                </div>
            </div>
            <div>
                <h4 class="text-xl font-bold text-gray-900 mb-2">${item.title}</h4>
                <p class="text-gray-600">${item.desc}</p>
            </div>
        </div>
    `).join('');
}

// Render Testimonials
function renderTestimonials(items) {
    const container = document.getElementById('testimonials-grid');
    if (!container) return;
    container.innerHTML = items.map(item => `
        <div class="bg-secondary-800 p-8 rounded-2xl border border-secondary-700 relative">
            <div class="absolute top-8 right-8 rtl:left-8 rtl:right-auto text-secondary-600 opacity-20">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H9C9.00001 15 9.00001 12 11 11C10.6667 11 10.3333 11 10 11V8C10 8 13.0833 8 13.0833 8C15.0833 8 16 10 16 13V17C16 17 14.017 17 14.017 21ZM5 21C5 21 3 21 3 17V13C3 10 4 8 6 8C6 8 9.08333 8 9.08333 8V11C8.75 11 8.41667 11 8 11C6 12 6 15 6 16H9C10.1046 16 11 16.8954 11 18V21L5 21Z" />
                </svg>
            </div>
            <div class="flex mb-4 text-yellow-400">
                ${Array(item.rating).fill('<svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>').join('')}
            </div>
            <p class="text-gray-300 mb-6 leading-relaxed italic">"${item.text}"</p>
            <div class="flex items-center">
                <div class="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center font-bold text-white text-lg">
                    ${item.name.charAt(0)}
                </div>
                <div class="ml-4 rtl:ml-0 rtl:mr-4">
                    <div class="font-bold text-white">${item.name}</div>
                    <div class="text-sm text-secondary-300">${item.loc}</div>
                </div>
            </div>
        </div>
    `).join('');
}