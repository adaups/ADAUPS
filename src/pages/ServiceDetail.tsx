import { useParams, Link, Navigate } from 'react-router-dom';
import { servicesData } from '../data';
import { ArrowLeft, CheckCircle2, FileText, ExternalLink, HelpCircle, Phone } from 'lucide-react';
import { serviceIconMap, defaultServiceIcon } from '../lib/icons';
import AnimateOnScroll from '../components/ui/AnimateOnScroll';
import Seo from '../components/Seo';
import JsonLd from '../components/JsonLd';
import { breadcrumbJsonLd, serviceJsonLd } from '../lib/seo';

export default function ServiceDetail() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = servicesData.find(s => s.id === serviceId);

  if (!service) {
    return <Navigate to="/servicios" replace />;
  }

  const IconComponent = serviceIconMap[service.icon] || defaultServiceIcon;

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <Seo title={service.title} description={service.shortDescription} path={`/servicios/${service.id}`} />
      <JsonLd
        data={[
          serviceJsonLd(service),
          breadcrumbJsonLd([
            { name: 'Inicio', path: '/' },
            { name: 'Servicios', path: '/servicios' },
            { name: service.title, path: `/servicios/${service.id}` },
          ]),
        ]}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Back Link */}
        <AnimateOnScroll>
          <Link to="/servicios" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-blue-600 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver a Servicios
          </Link>
        </AnimateOnScroll>

        <AnimateOnScroll>
          {/* Header */}
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-slate-200 mb-8">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mr-6">
              <IconComponent className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-900">{service.title}</h1>
            </div>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            {service.description}
          </p>

          {service.link && (
            <div className="mt-8">
              <a
                href={service.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-colors"
              >
                Acceder a {service.title}
                <ExternalLink className="ml-2 -mr-1 w-5 h-5" />
              </a>
            </div>
          )}
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-3 gap-8">

          {/* Main Content Column */}
          <div className="md:col-span-2 space-y-8">

            {/* Beneficios */}
            {service.benefits && service.benefits.length > 0 && (
              <section className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
                <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                  <CheckCircle2 className="w-6 h-6 mr-3 text-emerald-500" />
                  Beneficios
                </h2>
                <ul className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 mr-3"></div>
                      <span className="text-slate-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Requisitos */}
            {service.requirements && service.requirements.length > 0 && (
              <section className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
                <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                  <FileText className="w-6 h-6 mr-3 text-blue-500" />
                  Requisitos
                </h2>
                <ul className="space-y-4">
                  {service.requirements.map((req, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3"></div>
                      <span className="text-slate-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* FAQs */}
            {service.faqs && service.faqs.length > 0 && (
              <section className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
                <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                  <HelpCircle className="w-6 h-6 mr-3 text-purple-500" />
                  Preguntas Frecuentes
                </h2>
                <div className="space-y-6">
                  {service.faqs.map((faq, index) => (
                    <div key={index}>
                      <h3 className="text-base font-semibold text-slate-900 mb-2">{faq.question}</h3>
                      <p className="text-slate-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-slate-900 rounded-2xl p-6 shadow-sm text-white">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-3">
                ¿Quién puede aplicar?
              </h3>
              <p className="text-slate-200 text-sm leading-relaxed">
                {service.eligibility}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-3">
                Cómo solicitar
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                {service.howToApply}
              </p>
            </div>

            {service.documents && service.documents.length > 0 && (
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4">
                  Documentos
                </h3>
                <ul className="space-y-3">
                  {service.documents.map((doc, index) => (
                    <li key={index}>
                      <a
                        href={doc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start text-sm text-blue-600 hover:text-blue-800 transition-colors group"
                      >
                        <FileText className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5 text-blue-400 group-hover:text-blue-600" />
                        <span className="underline-offset-2 hover:underline">{doc.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="bg-blue-50 rounded-2xl p-6 shadow-sm border border-blue-100">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-800 mb-3 flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                Contacto
              </h3>
              <p className="text-blue-900 text-sm leading-relaxed">
                {service.contact}
              </p>
            </div>

            </div>
          </div>
        </AnimateOnScroll>

      </div>
    </div>
  );
}
