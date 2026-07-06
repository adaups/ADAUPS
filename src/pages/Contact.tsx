import { MapPin, Phone, Mail, Clock, Building, ExternalLink } from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';
import AnimateOnScroll from '../components/ui/AnimateOnScroll';
import Seo from '../components/Seo';

const DESCRIPTION = 'Información de contacto de ADAUPS: correo institucional, horario de atención y oficinas en Campus El Girón y Campus Sur, Quito.';

export default function Contact() {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <Seo title="Contacto y Soporte" description={DESCRIPTION} path="/contacto" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <PageHeader
          title="Contacto y Soporte"
          subtitle="Estamos aquí para ayudarte. Encuentra la información de contacto de nuestras oficinas en los diferentes campus."
        />

        {/* Información General */}
        <AnimateOnScroll
          className="bg-slate-900 rounded-3xl shadow-xl overflow-hidden mb-10 text-white relative"
        >
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-blue-500 rounded-full opacity-10 blur-3xl" />
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-emerald-500 rounded-full opacity-10 blur-3xl" />

          <div className="relative z-10 p-8 lg:p-12">
            <h2 className="text-2xl font-bold mb-6">Información General</h2>
            <p className="text-slate-300 text-base leading-relaxed mb-8 max-w-2xl">
              Para consultas generales, afiliaciones o soporte con el portal de finanzas, puedes contactarnos a través de nuestros canales oficiales.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <a
                href="mailto:adaupsuio@ups.edu.ec"
                className="flex items-center gap-4 bg-white/5 hover:bg-white/10 rounded-2xl p-5 transition-colors group"
              >
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm mb-0.5">Correo Institucional</h3>
                  <p className="text-slate-300 text-sm">adaups@ups.edu.ec</p>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 ml-auto" />
              </a>

              <div className="flex items-center gap-4 bg-white/5 rounded-2xl p-5">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm mb-0.5">Horario de Atención</h3>
                  <p className="text-slate-300 text-sm">
                    Lunes a Viernes: <span className="text-white font-medium">08:00 - 13:00</span> / <span className="text-white font-medium">14:00 - 17:00</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Campus Locations */}
        <AnimateOnScroll>
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Nuestras Oficinas</h2>
          <div className="grid md:grid-cols-2 gap-6">

            {/* Campus El Girón */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 relative overflow-hidden group hover:shadow-xl hover:border-blue-200 transition-all duration-300">
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-blue-50 rounded-full opacity-50 group-hover:scale-[2] transition-transform duration-700 ease-out" />
              <div className="relative z-10">
                <div className="flex items-center mb-5">
                  <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mr-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <Building className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Campus El Girón</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-slate-400 mr-3 mt-0.5 flex-shrink-0 group-hover:text-blue-500 transition-colors" />
                    <span className="text-slate-600 text-sm leading-relaxed">Av. Isabel La Católica N. 23-52 y Madrid.<br/><span className="font-medium text-slate-800">Bloque B, Planta Baja.</span></span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-slate-400 mr-3 flex-shrink-0 group-hover:text-blue-500 transition-colors" />
                    <span className="text-slate-600 text-sm">PBX: <span className="font-medium text-slate-800">3962800 / 3962900</span> - Ext. 2154</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Campus Sur */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 relative overflow-hidden group hover:shadow-xl hover:border-emerald-200 transition-all duration-300">
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-emerald-50 rounded-full opacity-50 group-hover:scale-[2] transition-transform duration-700 ease-out" />
              <div className="relative z-10">
                <div className="flex items-center mb-5">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mr-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                    <Building className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Campus Sur</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-slate-400 mr-3 mt-0.5 flex-shrink-0 group-hover:text-emerald-500 transition-colors" />
                    <span className="text-slate-600 text-sm leading-relaxed">Av. Rumichaca y Moromoro.<br/><span className="font-medium text-slate-800">Bloque A, Planta Baja.</span></span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-slate-400 mr-3 flex-shrink-0 group-hover:text-emerald-500 transition-colors" />
                    <span className="text-slate-600 text-sm">PBX: <span className="font-medium text-slate-800">3962800 / 3962900</span> - Ext. 2353</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </AnimateOnScroll>

      </div>
    </div>
  );
}
