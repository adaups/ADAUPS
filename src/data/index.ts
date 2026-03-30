import type { Service, Benefit, TransparencyDocument, NewsItem, Event } from '../types/types';

export const servicesData: Service[] = [
  {
    id: 'finanzas',
    title: 'Finanzas en línea',
    shortDescription: 'Accede a tu portal financiero para revisar ahorros, estados de cuenta y solicitar préstamos.',
    description: 'El portal de Finanzas en Línea permite a los socios gestionar sus recursos de manera ágil y segura. Podrás revisar tus ahorros, generar estados de cuenta, utilizar el simulador de préstamos y descargar documentos de solicitud.',
    eligibility: 'Todos los socios activos de ADAUPS.',
    benefits: [
      'Consulta de ahorros en tiempo real.',
      'Generación de estados de cuenta.',
      'Simulador de préstamos.',
      'Descarga de documentos de solicitud y cartas de compromiso.'
    ],
    requirements: [
      'Ser socio activo de ADAUPS.',
      'Tener credenciales de acceso (solicitar a soporte si no las tienes).'
    ],
    howToApply: 'Ingresa al portal con tu usuario y contraseña.',
    documents: [],
    faqs: [
      {
        question: '¿Qué hago si olvidé mi contraseña?',
        answer: 'Debes contactar a soporte a través de los canales oficiales para el reseteo de tu clave.'
      }
    ],
    contact: 'Soporte Finanzas: ext 2154 (Girón) / 2353 (Sur)',
    icon: 'Building2',
    link: 'https://finanzas.adaups.org'
  },
  {
    id: 'prestamo-ordinario',
    title: 'Préstamo Ordinario',
    shortDescription: 'Préstamos de hasta $12,000 con plazos de hasta 72 meses.',
    description: 'Crédito destinado a cubrir diversas necesidades de los socios, con condiciones preferenciales basadas en el ahorro acumulado y tiempo de aportación.',
    eligibility: 'Socios con al menos 12 aportaciones para montos minimos y 84 aportaciones para montos maximos.',
    benefits: [
      'Monto desde $100 hasta $12,000.',
      'Plazo desde 12 meses hasta 72 meses.',
      'Tasas de interés competitivas.'
    ],
    requirements: [
      'Llenar la solicitud de préstamo.',
      'Copia de cédula y papeleta de votación.',
      'Rol de pagos del último mes.',
      'Letra de cambio firmada',
      'Carta compromiso',
      'Garante (dependiendo del monto y ahorro).'
    ],
    howToApply: 'Descarga el formulario, llénalo y entrégalo en las oficinas de ADAUPS junto con los requisitos.',
    documents: [
      { name: 'Solicitud de credito ordinario', url: '/documents/SOLICITUD-CREDITO-ORDINARIO.pdf' },
      { name: 'Carta compromiso deudor', url: '/documents/CARTA-COMPROMISO-DEUDOR.pdf' },
      { name: 'Carta compromiso codeudor', url: '/documents/CARTA-COMPROMISO-CODEUDOR.pdf' }


    ],
    faqs: [
      {
        question: '¿Puedo renovar mi préstamo?',
        answer: 'Sí, una vez cancelado el 80% del préstamo actual puedes solicitar una renovación.'
      }
    ],
    contact: 'Oficinas ADAUPS',
    icon: 'Banknote'
  },
  {
    id: 'prestamo-emergente',
    title: 'Préstamo Emergente',
    shortDescription: 'Para urgencias o calamidades. Montos desde 1 SBU hasta 8 SBU.',
    description: 'Crédito rápido destinado a cubrir urgencias médicas, hospitalización, defunción, accidentes, robos o estudios.',
    eligibility: 'Socios activos de ADAUPS que presenten la justificación de la emergencia.',
    benefits: [
      'Aprobación rápida.',
      'Monto desde 1 SBU hasta el 90% del ahorro (máximo 8 SBU).',
      'Plazo de hasta 24 meses.'
    ],
    requirements: [
      'Solicitud de préstamo emergente.',
      '24 meses de aportes activos',
      'Rol de pagos',
      'Copia de la cedula',
      'Documentos que justifiquen la emergencia (certificados médicos, facturas, denuncias, etc.).'
    ],
    howToApply: 'Presentar la solicitud y justificativos en las oficinas de ADAUPS lo antes posible.',
    documents: [
      { name: 'Solicitud de credito emergente', url: '/documents/SOLICITUD-PRESTAMO-EMERGENTE.pdf' }
    ],
    faqs: [
      {
        question: '¿Qué se considera una emergencia?',
        answer: 'Defunción del socio, hospitalización, accidentes graves, robos comprobados o pagos urgentes de estudios.'
      }
    ],
    contact: 'Oficinas ADAUPS',
    icon: 'AlertCircle'
  },
  {
    id: 'ayudas-economicas',
    title: 'Ayudas Económicas',
    shortDescription: 'Apoyo económico no reembolsable en casos de calamidad doméstica.',
    description: 'Fondo de solidaridad destinado a entregar una ayuda económica a los socios que atraviesan por situaciones de calamidad doméstica comprobada.',
    eligibility: 'Socios activos que sufran una calamidad doméstica.',
    benefits: [
      'Ayuda del 40% de un SBU para casos generales de calamidad.',
      'Ayuda del 70% de un SBU en caso de fallecimiento de familiares directos.'
    ],
    requirements: [
      'Solicitud por escrito dirigida a la directiva.',
      'Documentos de respaldo (certificados de defunción, médicos, etc.).'
    ],
    howToApply: 'Entregar la solicitud y respaldos en la oficina de ADAUPS en un plazo máximo establecido en el reglamento tras el suceso.',
    documents: [
      { name: 'Reglamento de Ayudas por Calamidad', url: 'https://www.adaups.org/wp-content/uploads/2024/05/REGLAMENTO-DE-AYUDAS-POR-CALAMIDA-DOMESTICA-2023.pdf' }
    ],
    faqs: [],
    contact: 'Oficinas ADAUPS',
    icon: 'HeartHandshake'
  },
  {
    id: 'ahorro-programado',
    title: 'Ahorro Programado',
    shortDescription: 'Ahorro voluntario mensual que genera intereses trimestrales.',
    description: 'Es el fondo principal que permite a la asociación otorgar préstamos. Consiste en un aporte mensual que genera rendimientos.',
    eligibility: 'Todos los socios de ADAUPS.',
    benefits: [
      'Genera intereses que se capitalizan trimestralmente.',
      'Sirve como base y garantía para la solicitud de préstamos.',
      'Retiro total en caso de desvinculación de la universidad.'
    ],
    requirements: [
      'Descuento automático por rol de pagos (actualmente $20 mensuales).'
    ],
    howToApply: 'Se activa automáticamente al afiliarse a ADAUPS.',
    documents: [],
    faqs: [],
    contact: 'Oficinas ADAUPS',
    icon: 'PiggyBank'
  },
  {
    id: 'ahorro-voluntario',
    title: 'Ahorro Voluntario',
    shortDescription: 'Ahorro adicional disponible a la vista.',
    description: 'Un débito adicional al ahorro programado que el socio decide realizar de forma voluntaria. Este fondo está disponible "a la vista" para cuando el socio lo requiera.',
    eligibility: 'Todos los socios de ADAUPS.',
    benefits: [
      'Fomenta la cultura del ahorro.',
      'Disponibilidad inmediata de los fondos.',
      'Genera rendimientos adicionales.'
    ],
    requirements: [
      'Llenar el formulario de autorización de descuento por rol de pagos para ahorro voluntario.'
    ],
    howToApply: 'Entregar el formulario de autorización en las oficinas de ADAUPS.',
    documents: [],
    faqs: [],
    contact: 'Oficinas ADAUPS',
    icon: 'Wallet'
  }
];

export const benefitsData: Benefit[] = [
  /*
  {
    id: 'seguro-vehicular',
    title: 'Seguro de Vehículos',
    category: 'Seguros',
    shortDescription: 'Seguro vehicular con Zurich y broker LR. Tasa preferencial del 2.6%.',
    description: 'ADAUPS mantiene un convenio para el seguro de vehículos de los socios con la aseguradora Zurich a través del broker LR, ofreciendo una tasa preferencial y facilidades de pago.',
    conditions: [
      'Tasa preferencial del 2.6%.',
      'Descuento por rol de pagos.'
    ],
    howToUse: 'Contactar al broker para la cotización y emitir la orden de descuento a través de ADAUPS.',
    locations: 'A nivel nacional.',
    contact: 'Broker LR / Oficinas ADAUPS',
    images: [
      'https://www.adaups.org/wp-content/uploads/2024/11/Z2-1024x351.png'
    ],
    documents: [
      { name: 'Condiciones Renovación AIG', url: 'https://www.adaups.org/wp-content/uploads/2024/12/AIG.pdf' }
    ]
  },
  
  {
    id: 'farmacias-gpf',
    title: 'Corporación GPF (Fybeca / Sana Sana)',
    category: 'Salud',
    shortDescription: 'Tarjeta corporativa con cupo mensual para compras en farmacias.',
    description: 'Convenio con Corporación GPF que permite a los socios realizar compras en farmacias Fybeca, Sana Sana y tiendas Oki Doki mediante una tarjeta corporativa con descuento por rol de pagos.',
    conditions: [
      'Cupo mensual asignado según capacidad de pago.',
      'Descuento directo al rol de pagos al mes siguiente del consumo.'
    ],
    howToUse: 'Presentar la tarjeta corporativa y la cédula de identidad al momento de la compra.',
    locations: 'Locales Fybeca, Sana Sana y Oki Doki a nivel nacional.',
    contact: 'Oficinas ADAUPS para solicitar la tarjeta.',
    images: [
      'https://www.adaups.org/wp-content/uploads/2024/05/unnamed.jpg'
    ],
    documents: []
  },
  {
    id: 'farmacias-difare',
    title: 'Farmacias DIFARE',
    category: 'Salud',
    shortDescription: 'Cupo para compras en la red de farmacias DIFARE.',
    description: 'Convenio para la adquisición de medicinas y artículos de farmacia en la red DIFARE (Cruz Azul, Pharmacy\'s), con cargo al rol de pagos.',
    conditions: [
      'Cupo mensual asignado.',
      'Descuento por rol de pagos.'
    ],
    howToUse: 'Presentar cédula de identidad en las farmacias afiliadas indicando el convenio con ADAUPS.',
    locations: 'Red de farmacias DIFARE.',
    contact: 'Oficinas ADAUPS',
    images: [
      'https://www.adaups.org/wp-content/uploads/2024/05/Cr.png',
      'https://www.adaups.org/wp-content/uploads/2024/05/Par.png'
    ],
    documents: []
  },
  {
    id: 'tecnomega',
    title: 'Tecnomega',
    category: 'Tecnología',
    shortDescription: 'Compras de tecnología con cupo de hasta $2,400.',
    description: 'Convenio para la adquisición de equipos tecnológicos, computadoras y accesorios en Tecnomega con facilidades de financiamiento.',
    conditions: [
      'Cupo de consumo de hasta $2,400.',
      'Plazos de financiamiento preferenciales.'
    ],
    howToUse: 'Solicitar la cotización en Tecnomega y tramitar la orden de compra en ADAUPS.',
    locations: 'Locales Tecnomega.',
    contact: 'Oficinas ADAUPS',
    images: [
      'https://www.adaups.org/wp-content/uploads/2024/05/beneficioTECNOMEGA-1024x444.png',
      'https://www.adaups.org/wp-content/uploads/2024/05/Requisitos.jpg'
    ],
    documents: []
  },
  {
    id: 'dilipa',
    title: 'Dilipa',
    category: 'Papelería',
    shortDescription: 'Compras de papelería y útiles con cupo de hasta $300.',
    description: 'Convenio para la compra de útiles escolares, suministros de oficina y papelería en general en locales Dilipa.',
    conditions: [
      'Cupo máximo de hasta $300.',
      'Compras diferidas según el monto.'
    ],
    howToUse: 'Solicitar la orden de compra en ADAUPS antes de acercarse al local.',
    locations: 'Locales Dilipa.',
    contact: 'Oficinas ADAUPS',
    images: [],
    documents: []
  }
  */
];

export const transparencyData: TransparencyDocument[] = [
  /*
  {
    id: '1',
    title: 'Estado de Resultados 2023',
    category: 'Informes Financieros',
    date: '2024-03-15',
    url: '#'
  },
  {
    id: '2',
    title: 'Balance General 2023',
    category: 'Informes Financieros',
    date: '2024-03-15',
    url: '#'
  },
  {
    id: '3',
    title: 'Informe de Gestión Directiva 2023',
    category: 'Informes de Gestión',
    date: '2024-03-20',
    url: '#'
  },
  {
    id: '4',
    title: 'Auditoría Externa 2022',
    category: 'Auditorías',
    date: '2023-05-10',
    url: '#'
  },
  {
    id: '5',
    title: 'Resultados Asamblea General Ordinaria 2024',
    category: 'Asambleas',
    date: '2024-04-05',
    url: '#'
  }
    */
];



/* events */
export const eventsData: Event[] = [
  {
    month: 'ABR',
    day: '01',
    tag: 'Institucional',
    colorClass: 'bg-emerald-50 text-emerald-600',
    title: 'Asamblea General Ordinaria',
    description: 'Presentación de informes semestrales y resoluciones importantes para la asociación.',
    time: '14:00 PM',
    location: 'Coliseo del Campus el Giron, Bloque B',
  },
];

/* news  */
export const newsData: NewsItem[] = [
  {
    id: 'n1',
    title: 'Lanzamiento del Nuevo Portal ADAUPS',
    category: 'Institucional',
    date: '2026-03-10',
    summary: 'Bienvenidos al nuevo portal web de la Asociación de Docentes y Administrativos. Un espacio moderno diseñado para servirte mejor.',
    imageUrl: '/images/news/new_web.webp',
    content: [
      'Nos enorgullece presentar el nuevo portal web de ADAUPS, una plataforma completamente rediseñada para ofrecer a nuestros socios una experiencia ágil, moderna y accesible desde cualquier dispositivo.',
      'Este nuevo espacio digital ha sido concebido para centralizar toda la información de interés: desde nuestros servicios y beneficios exclusivos, hasta los convenios médicos y comerciales vigentes. Ahora es más fácil que nunca mantenerse al tanto de las últimas novedades.',
      'Entre las principales mejoras, destacamos una navegación más intuitiva, un diseño enfocado en la usabilidad y nuevas secciones orientadas a la transparencia institucional.',
      'Invitamos a toda la comunidad de docentes y administrativos a explorar el portal, aprovechar los recursos disponibles y compartir sus comentarios para seguir mejorando de forma continua.'
    ]
  },

];
