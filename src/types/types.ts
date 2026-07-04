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
  gallery?: string[]; // Comunicados/afiches oficiales (se muestran en una galería con lightbox)
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
  monthEnd?: string;       // Si el evento dura varios días: mes de cierre (ej. "JUL")
  dayEnd?: string;         // Si el evento dura varios días: día de cierre (ej. "08")
  tag: string;
  colorClass: string;
  title: string;
  shortTitle?: string;
  description: string;
  time: string;
  location: string;
  imageUrl?: string;
  spotsLabel?: string;     // Ej: "Cupos limitados" — sticker de escasez
  registerEmail?: string;  // Habilita el botón "Registrarse" (mailto)
}

export interface NewsItem {
  id: string;
  title: string;
  category: string;
  date: string;
  summary: string;
  imageUrl: string;
  content: string[];
  gallery?: string[]; // Galería de fotos opcional (se muestra al final del artículo)
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
