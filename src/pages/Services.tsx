import { Link } from 'react-router-dom';
import { servicesData } from '../data';
import { ArrowRight, Sparkles, FileText } from 'lucide-react';
import { motion } from 'motion/react';
import { containerVariants, itemVariants } from '../lib/motion';
import { serviceIconMap, defaultServiceIcon } from '../lib/icons';
import DecorativeBackground from '../components/ui/DecorativeBackground';

export default function Services() {
  return (
    <div className="bg-slate-50 min-h-screen py-10 lg:py-16 relative overflow-hidden">
      <DecorativeBackground variant="services" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Portafolio</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Servicios Financieros</h1>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed">
            Conoce las opciones de ahorro, préstamos y ayudas económicas diseñadas exclusivamente para el bienestar de nuestros socios.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {servicesData.map((service) => {
            const IconComponent = serviceIconMap[service.icon] || defaultServiceIcon;

            return (
              <motion.div key={service.id} variants={itemVariants}>
                <Link
                  to={`/servicios/${service.id}`}
                  className="group relative bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-blue-100 flex flex-col h-full block hover:-translate-y-1"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="flex items-start mb-4 relative z-10">
                    <div className="flex items-center justify-center bg-white rounded-2xl w-14 h-14 border border-slate-100 group-hover:bg-blue-600 group-hover:border-blue-600 transition-colors duration-300 shadow-sm">
                      <IconComponent className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                  </div>

                  <div className="relative z-10 flex-grow">
                    <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{service.title}</h2>
                    <p className="text-slate-600 leading-relaxed text-sm mb-4">
                      {service.shortDescription}
                    </p>
                  </div>

                  <div className="relative z-10 mt-auto pt-4 border-t border-slate-50 flex items-center text-blue-600 font-semibold text-sm">
                    Ver detalles completos
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Certificados Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 relative rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-slate-900" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 mix-blend-overlay" />

          <div className="relative p-6 md:p-10 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold text-white mb-3">Solicitud de Certificados</h2>
              <p className="text-slate-300 text-base leading-relaxed mb-4 max-w-2xl">
                ¿Necesitas un certificado de afiliación, de no adeudar o de ahorros? Puedes solicitarlo directamente a través de nuestro correo institucional de manera rápida y sencilla.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Afiliación', 'No adeudar', 'Ahorros','Licitud de fondos'].map((cert) => (
                  <span key={cert} className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white text-sm font-medium backdrop-blur-sm border border-white/20">
                    <FileText className="w-4 h-4 mr-2" /> {cert}
                  </span>
                ))}
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center md:justify-end w-full">
              <a
                href="mailto:adaups@ups.edu.ec"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-full text-slate-900 bg-white hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-lg w-full md:w-auto"
              >
                Solicitar por correo
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
