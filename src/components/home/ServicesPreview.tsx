import { Link } from 'react-router-dom';
import { CreditCard, FileText, HeartHandshake, ShieldCheck } from 'lucide-react';
import AnimateOnScroll from '../ui/AnimateOnScroll';
import SectionHeading from '../ui/SectionHeading';

const services = [
  {
    title: 'Finanzas en Línea',
    description: 'Gestiona tus cuentas y certificados desde cualquier lugar.',
    icon: CreditCard,
    href: 'https://finanzas.adaups.org',
    external: true,
  },
  {
    title: 'Préstamos',
    description: 'Ordinarios y emergentes con tasas preferenciales.',
    icon: FileText,
    href: '/servicios',
    external: false,
  },
  {
    title: 'Ayudas Económicas',
    description: 'Apoyo solidario para nuestros socios en momentos clave.',
    icon: HeartHandshake,
    href: '/servicios',
    external: false,
  },
  {
    title: 'Ahorros',
    description: 'Programados y voluntarios para tu futuro.',
    icon: ShieldCheck,
    href: '/servicios',
    external: false,
  },
];

export default function ServicesPreview() {
  return (
    <section className="pt-28 md:pt-32 pb-16 bg-slate-50 relative overflow-hidden border-b border-slate-200">
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-60" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-50/50 rounded-full mix-blend-multiply filter blur-3xl opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="Servicios para Socios"
          subtitle="Soluciones financieras y de apoyo diseñadas específicamente para las necesidades de nuestra comunidad docente y administrativa."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const cardClass =
              'group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full hover:-translate-y-1 hover:scale-[1.02] overflow-hidden cursor-pointer';
            const inner = (
              <>
                {/* Número decorativo de fondo */}
                <span className="absolute -bottom-3 -right-2 text-8xl font-black text-slate-100 select-none pointer-events-none leading-none group-hover:text-blue-50 transition-colors duration-300">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div className="flex items-start mb-4 relative z-10">
                  <div className="flex items-center justify-center bg-blue-50 rounded-xl w-12 h-12 group-hover:bg-blue-600 transition-colors duration-300">
                    <service.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                </div>
                <div className="relative z-10 flex-grow">
                  <h3 className="text-lg font-bold text-slate-900 mb-1.5 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{service.description}</p>
                </div>
              </>
            );

            return (
              <AnimateOnScroll key={service.title} delay={i * 0.1}>
                {service.external ? (
                  <a href={service.href} target="_blank" rel="noopener noreferrer" className={cardClass}>
                    {inner}
                  </a>
                ) : (
                  <Link to={service.href} className={cardClass}>
                    {inner}
                  </Link>
                )}
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
