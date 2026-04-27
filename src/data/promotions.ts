import { Promotion } from '../types/types';

export const promotionsData: Promotion[] = [
  {
    id: 'abril-2026',
    title: 'Ofertas de Temporada',
    category: 'Promociones Exclusivas',
    shortDescription: 'Aprovecha nuestros increíbles precios en productos esenciales para el hogar.\n\nDifiere tus compras hasta 2 meses exclusivo para socios.',
    description: 'Descubre la calidad en cada una de nuestras propuestas. Hemos seleccionado los mejores productos de primera necesidad para tu hogar con precios imbatibles y financiamiento disponible exclusivo para socios ADAUPS.',
    images: [
      '/images/promotions/arroz-100.png',
      '/images/promotions/arroz-25.png',
      '/images/promotions/azucar-50.png',
      '/images/promotions/azucar-25.png',
      '/images/promotions/aceite-1.png'
    ],
    validUntil: '2026-04-30',
    featured: true,
    ctaText: 'Ver 5 Ofertas',
    items: [
      {
        id: 'arroz-macareno-100',
        name: 'Arroz Macareño Especial',
        price: '$52.00',
        unit: '100 LB',
        description: 'Arroz de calidad superior, ideal para el consumo diario de toda la familia.',
        icon: 'Wheat'
      },
      {
        id: 'arroz-macareno-25',
        name: 'Arroz Macareño Especial',
        price: '$13.00',
        unit: '25 LB',
        description: 'Presentación práctica de arroz de calidad superior.',
        icon: 'Wheat'
      },
      {
        id: 'aceite-girasol',
        name: 'Aceite de Girasol',
        price: '$2.99',
        unit: '1 LT',
        description: 'Aceite de girasol puro, enriquecido con vitaminas.',
        icon: 'Droplets'
      },
      {
        id: 'azucar-san-carlos',
        name: 'Azúcar Blanca San Carlos',
        price: '$40.00',
        unit: '50 KG',
        description: 'Azúcar blanca refinada, presentación al por mayor.',
        icon: 'Cuboid'
      },
      {
        id: 'azucar-refinada',
        name: 'Azúcar Refinada',
        price: '$10.00',
        unit: '25 LB',
        description: 'Azúcar de alta pureza y calidad para endulzar tus días.',
        icon: 'Cuboid'
      }
    ]
  }
];
