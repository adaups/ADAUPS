import type { Benefit, Event, NewsItem, Service } from '../types/types';

export const SITE_URL = 'https://adaups.org';
export const SITE_NAME = 'ADAUPS - Asociación de Docentes, Administrativos y Servicios UPS';
export const DEFAULT_DESCRIPTION =
  'Asociación de Docentes, Administrativos y Servicios de la Universidad Politécnica Salesiana - Sede Quito. Servicios financieros, convenios y apoyo solidario.';
export const DEFAULT_IMAGE = `${SITE_URL}/images/Logo_ADAUPS.webp`;
export const ORG_EMAIL = 'adaupsuio@ups.edu.ec';

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path}`;
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    alternateName: 'ADAUPS',
    url: SITE_URL,
    logo: DEFAULT_IMAGE,
    description: DEFAULT_DESCRIPTION,
    email: ORG_EMAIL,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Av. Isabel La Católica N. 23-52 y Madrid, Bloque B',
      addressLocality: 'Quito',
      addressCountry: 'EC',
    },
  };
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'ADAUPS',
    url: SITE_URL,
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function itemListJsonLd(name: string, items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      url: absoluteUrl(item.path),
    })),
  };
}

export function newsArticleJsonLd(news: NewsItem) {
  return {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: news.title,
    description: news.summary,
    image: absoluteUrl(news.imageUrl),
    datePublished: news.date,
    articleSection: news.category,
    url: absoluteUrl(`/noticias/${news.id}`),
    publisher: {
      '@type': 'Organization',
      name: 'ADAUPS',
      logo: { '@type': 'ImageObject', url: DEFAULT_IMAGE },
    },
  };
}

export function serviceJsonLd(service: Service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    url: absoluteUrl(`/servicios/${service.id}`),
    provider: { '@type': 'Organization', name: 'ADAUPS' },
    areaServed: 'Quito, Ecuador',
  };
}

export function offerJsonLd(benefit: Benefit) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Offer',
    name: benefit.title,
    description: benefit.description,
    category: benefit.category,
    url: absoluteUrl(`/beneficios/${benefit.id}`),
    areaServed: benefit.locations,
    seller: { '@type': 'Organization', name: 'ADAUPS' },
  };
}

export function eventJsonLd(event: Event) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.title,
    description: event.description,
    startDate: `${event.day} ${event.month}`,
    location: {
      '@type': 'Place',
      name: event.location,
    },
    image: event.imageUrl ? absoluteUrl(event.imageUrl) : undefined,
    organizer: { '@type': 'Organization', name: 'ADAUPS', url: SITE_URL },
  };
}
