import { Link } from 'react-router-dom';
import { benefitsData } from '../data';
import { ArrowRight, Sparkles, MapPin } from 'lucide-react';
import { categoryIconMap, defaultCategoryIcon } from '../lib/icons';
import DecorativeBackground from '../components/ui/DecorativeBackground';
import AnimateOnScroll from '../components/ui/AnimateOnScroll';
import Seo from '../components/Seo';
import JsonLd from '../components/JsonLd';
import { itemListJsonLd } from '../lib/seo';

const DESCRIPTION = 'Descuentos y facilidades exclusivas que ADAUPS ha gestionado para sus socios y su familia en diversos establecimientos.';

export default function Benefits() {
  return (
    <div className="bg-slate-50 min-h-screen py-10 lg:py-16 relative overflow-hidden">
      <Seo title="Beneficios y Convenios" description={DESCRIPTION} path="/beneficios" />
      <JsonLd data={itemListJsonLd('Beneficios y Convenios ADAUPS', benefitsData.map(b => ({ name: b.title, path: `/beneficios/${b.id}` })))} />
      <DecorativeBackground variant="benefits" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <AnimateOnScroll className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Alianzas Estratégicas</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Beneficios y Convenios</h1>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed">
            Aprovecha los descuentos y facilidades exclusivas que ADAUPS ha gestionado para ti y tu familia en diversos establecimientos.
          </p>
        </AnimateOnScroll>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefitsData.map((benefit, i) => {
            const IconComponent = categoryIconMap[benefit.category] || defaultCategoryIcon;

            return (
              <AnimateOnScroll key={benefit.id} delay={i * 0.1}>
                <Link
                  to={`/beneficios/${benefit.id}`}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-emerald-100 group flex flex-col h-full hover:-translate-y-1 block"
                >
                  {benefit.images && benefit.images.length > 0 && (
                    <div className="h-48 bg-slate-50 relative overflow-hidden flex items-center justify-center p-8 border-b border-slate-100">
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-100/50 to-transparent z-0" />
                      <img
                        src={benefit.images[0]}
                        alt={benefit.title}
                        className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500 relative z-10"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  )}

                  <div className="p-6 flex flex-col flex-grow relative">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-emerald-50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div className="flex items-center mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-600 group-hover:bg-emerald-50 group-hover:text-emerald-700 transition-colors">
                        <IconComponent className="w-3.5 h-3.5 mr-1.5" />
                        {benefit.category}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">{benefit.title}</h2>
                    <p className="text-slate-600 mb-6 flex-grow text-sm leading-relaxed">
                      {benefit.shortDescription}
                    </p>

                    <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between">
                      <div className="flex items-center text-xs font-medium text-slate-500">
                        <MapPin className="w-4 h-4 mr-1.5 text-slate-400" />
                        <span className="truncate max-w-[140px]">{benefit.locations}</span>
                      </div>
                      <div className="flex items-center text-emerald-600 font-semibold text-sm">
                        Detalles
                        <ArrowRight className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimateOnScroll>
            );
          })}
        </div>

      </div>
    </div>
  );
}
