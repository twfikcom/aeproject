import { LucideIcon } from 'lucide-react';

export type Language = 'en' | 'ar';

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string; // Mapping to Lucide icon in component
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
}

export interface Translations {
  nav: {
    home: string;
    services: string;
    about: string;
    contact: string;
    bookNow: string;
    buyWebsite: string;
  };
  hero: {
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    emergencyBadge: string;
  };
  services: {
    heading: string;
    subheading: string;
    items: ServiceItem[];
  };
  features: {
    heading: string;
    subheading: string;
    items: FeatureItem[];
  };
  ctaSection: {
    heading: string;
    subheading: string;
    buttonText: string;
  };
  testimonials: {
    heading: string;
    items: TestimonialItem[];
  };
  footer: {
    companyDesc: string;
    rights: string;
    quickLinks: string;
    contactUs: string;
    buyWebsite: string;
  };
  buyModal: {
    title: string;
    subtitle: string;
    whatsappBtn: string;
    orLabel: string;
    nameLabel: string;
    phoneLabel: string;
    emailLabel: string;
    messageLabel: string;
    submitBtn: string;
    successMessage: string;
    errorMessage: string;
    closeBtn: string;
  };
}