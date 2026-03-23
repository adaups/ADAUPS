import { useState } from 'react';
import { Users, Target, Shield, BookOpen, X } from 'lucide-react';
import { motion } from 'motion/react';
import { containerVariants, itemVariants } from '../lib/motion';
import PageHeader from '../components/ui/PageHeader';

export default function About() {
  const [selectedPhoto, setSelectedPhoto] = useState<{ name: string; image: string } | null>(null);

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <PageHeader
          title="Sobre ADAUPS"
          subtitle="Asociación de Docentes, Administrativos y Servicios de la Universidad Politécnica Salesiana - Sede Quito."
        />

        {/* Historia */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={itemVariants}
          className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden mb-10 hover:shadow-md transition-shadow duration-300"
        >
          <div className="md:flex">
            <div className="md:w-1/3 bg-slate-100/50 p-8 flex flex-col justify-center items-center text-center border-b md:border-b-0 md:border-r border-slate-200">
              <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="w-10 h-10" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Nuestra Historia</h2>
              <p className="text-sm font-medium text-blue-600 mt-2 bg-blue-50 px-4 py-1.5 rounded-full">Fundada el 11 de mayo de 1999</p>
            </div>
            <div className="md:w-2/3 p-8 lg:p-12">
              <div className="prose prose-slate max-w-none">
                <p className="text-slate-700 leading-relaxed text-lg">
                  ADAUPS nació el 11 de mayo de 1999 en el Campus El Girón, impulsada por la motivación de crear una organización laboral sólida, amparada en los principios de la Organización Internacional del Trabajo (OIT) y el Código de Trabajo ecuatoriano.
                </p>
                <p className="text-slate-700 leading-relaxed text-lg mt-6">
                  Desde nuestros inicios, hemos trabajado incansablemente para representar y defender los intereses de los docentes, personal administrativo y de servicios de la Universidad Politécnica Salesiana Sede Quito, promoviendo el bienestar integral de nuestros asociados a través de servicios financieros, convenios y apoyo mutuo.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Misión y Visión */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-6 mb-10"
        >
          <motion.div variants={itemVariants} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-200 hover:shadow-md hover:border-blue-200 transition-all duration-300 group">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
              <Target className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Misión</h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              Representar, defender y promover los derechos e intereses de los docentes, administrativos y personal de servicios de la UPS Sede Quito, fomentando la solidaridad, el bienestar económico y social de sus miembros mediante la gestión transparente de recursos y la creación de beneficios sostenibles.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-200 hover:shadow-md hover:border-emerald-200 transition-all duration-300 group">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
              <Shield className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Visión</h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              Ser la asociación líder y referente dentro de la comunidad universitaria, reconocida por su solidez institucional, transparencia en la gestión y por brindar servicios y beneficios de excelencia que mejoren significativamente la calidad de vida de todos nuestros asociados y sus familias.
            </p>
          </motion.div>
        </motion.div>

        {/* Directiva */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={containerVariants}
          className="mb-20"
        >
          <div className="text-center mb-8">
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-slate-900">Directiva Vigente</motion.h2>
            <motion.p variants={itemVariants} className="text-base text-slate-600 mt-3">Equipo de trabajo comprometido con el bienestar de los socios.</motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { role: 'Presidente', name: 'Lcdo. Darwin Reyes, PhD', image: '/images/directive/darwin-reyes.webp' },
              { role: 'Vicepresidenta', name: 'Ing. Gabriela Yánez, MsC', image: '/images/directive/gabriela-yanez.webp' },
              { role: 'Secretario', name: 'Ing. Esteban Plaza, MsC.', image: '/images/directive/esteban-plaza.webp' },
              { role: 'Tesorera', name: 'Lcda. Lorena Guerrero, PhD', image: '/images/directive/lorena-guerrero.webp' },
              { role: 'Sindicato', name: 'Abg. Lizeth Pérez, MsC.', image: '/images/directive/lizeth-perez.webp' },
              { role: 'Representante principal personal docente', name: 'Ing. Jaime Heredia, MsC.', image: '/images/directive/jaime-heredia.webp' },
              { role: 'Representante principal personal administrativo', name: 'Lcda. Ana Cano', image: '/images/directive/ana-cano.webp' },
              { role: 'Representante principal personal servicio', name: 'Sr. Edison Naranjo', image: '/images/directive/edison-naranjo.webp' },
              { role: 'Representante suplente personal docente', name: 'Psic. Sara Castillo, MsC', image: '/images/directive/sara-castillo.webp' },
              { role: 'Representante suplente personal administrativo', name: 'Sr. Ángel Aguaguiña', image: '/images/directive/angel-aguaguiña.webp' },
              { role: 'Representante suplente personal servicio', name: 'Sra. Susana Macías', image: '/images/directive/susana-macias.webp' },
            ].map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                <div 
                  className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-slate-50 group-hover:border-blue-100 transition-colors duration-300 relative bg-slate-100 cursor-pointer"
                  onClick={() => setSelectedPhoto({ name: member.name, image: member.image })}>
                  <img
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={400}
                    loading="lazy"
                    className="w-full h-full object-cover relative z-10"
                    onError={(e) => {
                      // Fallback si la imagen no existe
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      if (target.nextElementSibling) {
                        (target.nextElementSibling as HTMLElement).style.display = 'flex';
                      }
                    }}
                  />
                  {/* Placeholder que se muestra si la imagen falla */}
                  <div className="absolute inset-0 flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors duration-300" style={{ display: 'none' }}>
                    <Users className="w-10 h-10" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-sm text-blue-600 font-semibold uppercase tracking-wider">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ¿Quién puede ser socio? */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={itemVariants}
          className="bg-slate-900 rounded-3xl shadow-xl overflow-hidden mb-20 text-white relative"
        >
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-emerald-500 rounded-full opacity-10 blur-3xl"></div>

          <div className="p-10 lg:p-16 md:flex items-center justify-between relative z-10">
            <div className="md:w-2/3 mb-8 md:mb-0 md:pr-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <Users className="w-8 h-8 mr-4 text-blue-400" />
                ¿Quién puede ser socio?
              </h2>
              <p className="text-slate-300 leading-relaxed text-lg mb-6">
                Pueden afiliarse a ADAUPS todos los trabajadores con relación de dependencia de la Universidad Politécnica Salesiana - Sede Quito, incluyendo:
              </p>
              <ul className="space-y-3 text-slate-200">
                {['Personal Docente', 'Personal Administrativo', 'Personal de Servicios'].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/3 flex justify-center md:justify-end">
              <a
                href="/contacto"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-xl text-slate-900 bg-white hover:bg-slate-50 hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Contactar para afiliación
              </a>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Modal para ver foto en grande */}
      {selectedPhoto && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative max-w-lg w-full bg-white rounded-3xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-md hover:bg-red-50 transition-colors"
              aria-label="Cerrar"
            >
              <X className="w-5 h-5 text-slate-700" />
            </button>
            <img
              src={selectedPhoto.image}
              alt={selectedPhoto.name}
              className="w-full aspect-square object-cover"
            />
            <div className="p-4 text-center">
              <p className="text-lg font-bold text-slate-900">{selectedPhoto.name}</p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
