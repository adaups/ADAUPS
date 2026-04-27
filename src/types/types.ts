import type { LucideIcon } from 'lucide-react';

// --- Sub-types ---

interface FAQ {
  question: string;
  answer: string;
}

interface DocumentLink {
  name: string;
  url: string;
}

// --- Data Models ---

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  eligibility: string;
  benefits: string[];
  requirements: string[];
  howToApply: string;
  documents: DocumentLink[];
  faqs: FAQ[];
  contact: string;
  icon: string;
  link?: string;
}

export interface Benefit {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  description: string;
  conditions: string[];
  howToUse: string;
  locations: string;
  contact: string;
  images: string[];
  documents: DocumentLink[];
}

export interface TransparencyDocument {
  id: string;
  title: string;
  category: string;
  date: string;
  url: string;
}

export interface Event {
  month: string;
  day: string;
  tag: string;
  colorClass: string;
  title: string;
  description: string;
  time: string;
  location: string;
}

export interface NewsItem {
  id: string;
  title: string;
  category: string;
  date: string;
  summary: string;
  imageUrl: string;
  content: string[];
}

export interface ProductItem {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  description?: string;
  unit: string;
  icon?: string;
}

export interface Promotion {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  description: string;
  image?: string;
  images?: string[];
  validUntil: string;
  featured: boolean;
  ctaText: string;
  items?: ProductItem[];
}

// --- Navigation ---

interface NavChild {
  name: string;
  path: string;
}

export interface NavItem {
  name: string;
  path: string;
  icon: LucideIcon;
  children?: NavChild[];
}
