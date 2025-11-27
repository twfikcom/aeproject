import { Translations } from './types';

export const CONTENT: Record<'en' | 'ar', Translations> = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      about: "Why Us",
      contact: "Contact",
      bookNow: "Book Now",
      buyWebsite: "Buy this Website",
    },
    hero: {
      titleLine1: "Expert Car Repair",
      titleLine2: "At Your Doorstep",
      subtitle: "Stuck on the road or at home? Our certified mobile mechanics come to you anywhere in the UAE. Fast, reliable, and transparent pricing.",
      ctaPrimary: "Request Mechanic Now",
      ctaSecondary: "View Services",
      emergencyBadge: "24/7 Emergency Service Available",
    },
    services: {
      heading: "Our Premium Services",
      subheading: "We handle everything from simple maintenance to complex repairs right where you are.",
      items: [
        {
          id: 'battery',
          title: "Battery Replacement",
          description: "Dead battery? We deliver and install premium batteries on the spot.",
          iconName: 'Battery',
        },
        {
          id: 'oil',
          title: "Oil Change & Service",
          description: "Full synthetic oil changes including filter replacement at your home or office.",
          iconName: 'Droplet',
        },
        {
          id: 'tires',
          title: "Tire Services",
          description: "Puncture repair, tire rotation, and new tire installation.",
          iconName: 'Disc', // Closest to a wheel/tire
        },
        {
          id: 'diagnostics',
          title: "Computer Diagnostics",
          description: "Advanced scanning tools to identify check engine lights and electrical issues.",
          iconName: 'Laptop',
        },
        {
          id: 'brakes',
          title: "Brake Pads & Rotors",
          description: "Squeaky brakes? We replace pads and rotors safely and efficiently.",
          iconName: 'Activity',
        },
        {
          id: 'ac',
          title: "AC Repair & Gas",
          description: "Keep cool in the UAE heat. AC recharge and leak detection.",
          iconName: 'Wind',
        },
      ],
    },
    features: {
      heading: "Why Choose MobileMechanic.ae?",
      subheading: "We are changing the way car maintenance works.",
      items: [
        { id: '1', title: "We Come To You", description: "Save time and towing fees. We fix your car at your home, office, or roadside." },
        { id: '2', title: "Certified Mechanics", description: "Our team consists of highly trained and vetted automotive experts." },
        { id: '3', title: "Transparent Pricing", description: "Get a quote upfront. No hidden fees or surprise charges." },
        { id: '4', title: "Genuine Parts", description: "We use only high-quality OEM or equivalent parts for all repairs." },
      ],
    },
    ctaSection: {
      heading: "Ready to get back on the road?",
      subheading: "Don't let car trouble ruin your day. Call us now for immediate assistance.",
      buttonText: "Call 800-MECHANIC",
    },
    testimonials: {
      heading: "Trusted by Drivers Across UAE",
      items: [
        { id: '1', name: "Ahmed Al-Farsi", location: "Dubai Marina", text: "Saved me a towing trip! The mechanic arrived in 30 minutes and fixed my battery issue instantly.", rating: 5 },
        { id: '2', name: "Sarah Johnson", location: "Abu Dhabi", text: "Super convenient. I had my oil changed while I was working at my office. Highly recommended!", rating: 5 },
        { id: '3', name: "Mohammed Rashid", location: "Sharjah", text: "Honest pricing and professional service. They explained everything clearly.", rating: 5 },
      ],
    },
    footer: {
      companyDesc: "The leading on-demand mobile mechanic service in the UAE.",
      rights: "© 2024 MobileMechanic.ae. All rights reserved.",
      quickLinks: "Quick Links",
      contactUs: "Contact Us",
      buyWebsite: "Buy this Website",
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
      successMessage: "Thank you! We have received your inquiry and will contact you shortly.",
      errorMessage: "Something went wrong. Please try again or use WhatsApp.",
      closeBtn: "Close",
    }
  },
  ar: {
    nav: {
      home: "الرئيسية",
      services: "خدماتنا",
      about: "لماذا نحن",
      contact: "اتصل بنا",
      bookNow: "احجز الآن",
      buyWebsite: "شراء هذا الموقع",
    },
    hero: {
      titleLine1: "إصلاح السيارات",
      titleLine2: "عند باب منزلك",
      subtitle: "سيارتك متعطلة؟ نحن نأتي إليك في أي مكان في الإمارات. خدمة سريعة، موثوقة، وأسعار شفافة.",
      ctaPrimary: "اطلب ميكانيكي الآن",
      ctaSecondary: "عرض الخدمات",
      emergencyBadge: "خدمة طوارئ ٢٤/٧ متوفرة",
    },
    services: {
      heading: "خدماتنا المتميزة",
      subheading: "نغطي كل شيء من الصيانة الدورية إلى الإصلاحات المعقدة في موقعك.",
      items: [
        {
          id: 'battery',
          title: "استبدال البطارية",
          description: "بطارية فارغة؟ نقوم بتوصيل وتركيب بطاريات ممتازة في الموقع.",
          iconName: 'Battery',
        },
        {
          id: 'oil',
          title: "تغيير الزيت والصيانة",
          description: "تغيير زيت تخليقي كامل مع استبدال الفلتر في منزلك أو مكتبك.",
          iconName: 'Droplet',
        },
        {
          id: 'tires',
          title: "خدمات الإطارات",
          description: "إصلاح الثقوب، تدوير الإطارات، وتركيب إطارات جديدة.",
          iconName: 'Disc',
        },
        {
          id: 'diagnostics',
          title: "فحص الكمبيوتر",
          description: "أجهزة فحص متطورة لتحديد أعطال المحرك والمشاكل الكهربائية.",
          iconName: 'Laptop',
        },
        {
          id: 'brakes',
          title: "الفرامل والمكابح",
          description: "صوت صفير في الفرامل؟ نستبدل الفحمات والهوبات بأمان وكفاءة.",
          iconName: 'Activity',
        },
        {
          id: 'ac',
          title: "تكييف الهواء والغاز",
          description: "حافظ على برودة سيارتك. إعادة تعبئة الغاز وكشف التسريبات.",
          iconName: 'Wind',
        },
      ],
    },
    features: {
      heading: "لماذا تختار MobileMechanic.ae؟",
      subheading: "نحن نغير مفهوم صيانة السيارات.",
      items: [
        { id: '1', title: "نأتي إليك", description: "وفر وقتك ورسوم السحب. نصلح سيارتك في منزلك، مكتبك، أو على الطريق." },
        { id: '2', title: "ميكانيكيون معتمدون", description: "فريقنا يتكون من خبراء سيارات مدربين وموثوقين." },
        { id: '3', title: "أسعار شفافة", description: "احصل على عرض سعر مسبق. لا رسوم خفية أو مفاجآت." },
        { id: '4', title: "قطع غيار أصلية", description: "نستخدم فقط قطع غيار أصلية أو معادلة لها في الجودة." },
      ],
    },
    ctaSection: {
      heading: "مستعد للعودة إلى الطريق؟",
      subheading: "لا تدع مشاكل السيارة تفسد يومك. اتصل بنا الآن للحصول على مساعدة فورية.",
      buttonText: "اتصل بـ 800-MECHANIC",
    },
    testimonials: {
      heading: "يثق بنا السائقون في الإمارات",
      items: [
        { id: '1', name: "أحمد الفارسي", location: "دبي مارينا", text: "وفروا علي رحلة السحب! وصل الميكانيكي في 30 دقيقة وأصلح البطارية فوراً.", rating: 5 },
        { id: '2', name: "سارة جونسون", location: "أبو ظبي", text: "مريح جداً. تم تغيير الزيت وأنا أعمل في مكتبي. أنصح بهم بشدة!", rating: 5 },
        { id: '3', name: "محمد راشد", location: "الشارقة", text: "أسعار أمينة وخدمة محترفة. شرحوا لي كل شيء بوضوح.", rating: 5 },
      ],
    },
    footer: {
      companyDesc: "خدمة الميكانيكي المتنقل الرائدة عند الطلب في الإمارات العربية المتحدة.",
      rights: "© 2024 MobileMechanic.ae. جميع الحقوق محفوظة.",
      quickLinks: "روابط سريعة",
      contactUs: "اتصل بنا",
      buyWebsite: "شراء هذا الموقع",
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
      successMessage: "شكراً لك! لقد تلقينا استفسارك وسنتواصل معك قريباً.",
      errorMessage: "حدث خطأ ما. يرجى المحاولة مرة أخرى أو استخدام واتساب.",
      closeBtn: "إغلاق",
    }
  },
};