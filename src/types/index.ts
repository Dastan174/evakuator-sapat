export interface BusinessContact {
  primaryPhone: string;
  primaryPhoneFormatted: string;
  whatsappPhone: string;
  whatsappPhoneFormatted: string;
  defaultWhatsAppMessage: string;
  emergencyHotlineNotice: string;
}

export interface BusinessLocation {
  city: string;
  region: string;
  country: string;
  baseAddress: string;
  googleMapsQuery: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface BusinessConfig {
  brandName: string;
  legalEntityNotice: string;
  tagline: string;
  subTagline: string;
  operatingHours: string;
  isAvailable247: boolean;
  paymentMethods: string[];
  vehicleCapacity: string;
  contacts: BusinessContact;
  location: BusinessLocation;
  socials: {
    instagram?: string;
    telegram?: string;
    twoGisLink?: string;
  };
  disclaimerText: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  startingPrice: number | string;
  priceNote: string;
  features: string[];
  isPopular?: boolean;
  isConfirmed: boolean;
}

export interface PricingTier {
  id: string;
  title: string;
  category: string;
  startingPrice: string;
  priceNote: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export interface ServiceArea {
  id: string;
  name: string;
  type: "city_district" | "chuy_suburb" | "intercity";
  etaMinutes: string;
  highlighted?: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface CustomerReview {
  id: string;
  authorName: string;
  vehicle: string;
  date: string;
  rating: number;
  text: string;
  verifiedStatus: string;
}

export interface NavItem {
  title: string;
  href: string;
  badge?: string;
}
