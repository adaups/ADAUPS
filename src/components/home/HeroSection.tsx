import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { containerVariants, itemVariants } from '../../lib/motion';
import { useAnimatedCounter } from '../../hooks/useAnimatedCounter';

const backgroundImages = [
  '/images/event1.webp',
  '/images/event2.webp'
];

function AnimatedCounter({ end, duration = 2 }: { end: number; duration?: number }) {
  const { count, ref } = useAnimatedCounter(end, duration);
  return <span ref={ref}>{count}</span>;
}

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000); // ⏱️ Intervalo del carrusel: cambiar este valor para acelerar/desacelerar (ms)
    return () => clearInterval(timer);
  }, []);

  return (
  
    <div className="relative z-20">

      {/* ═══════════════════════════════════════════════════════════════
          SECCIÓN HERO (Portada)
          • Altura (min-h): Para que la imagen no se vea tan "zomeada"
            o recortada, usamos min-h-[70vh]. Al no ser tan alta,
            la imagen requiere menos recorte a los lados para llenar el espacio.
          • El contenido extra forzaba mucha altura, lo redujimos.
          ═══════════════════════════════════════════════════════════════ */}
      <section className="relative bg-slate-900 text-white min-h-[90vh] flex flex-col overflow-hidden">

        {/* Imagen de fondo con carrusel automático */}
        <div className="absolute inset-0">
          <AnimatePresence mode="popLayout">
            <motion.img
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 1.05 }}
              // 🎨 OPACIDAD de la imagen: ajustar el primer valor (0 = invisible, 1 = totalmente visible)
              // Valor actual: 0.9 → la imagen se ve casi en su totalidad
              animate={{ opacity: 0.7, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              src={backgroundImages[currentImageIndex]}
              alt="ADAUPS Background"
              // 📐 object-cover: llena todo el espacio recortando lo necesario.
              // object-position: controla qué parte de la imagen se prioriza.
              // Opciones: object-top, object-center, object-bottom
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </AnimatePresence>

          {/* 🌑 Overlay oscuro para legibilidad del texto.
              MÁS OPACIDAD en el hero: from-slate-900/60 → oscurece ligeramente 
              MENOS OPACIDAD: from-slate-900/10 → la foto se ve más limpia pero el texto puede perderse. */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/40 to-slate-900/80 pointer-events-none" />
        </div>

        {/* Contenido principal (texto + botones)
            📏 MÁRGENES: Menos padding superior significa que el texto sube, 
               haciendo que el hero no requiera ser gigantesco. El flex-grow lo centra. */}
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32 flex-grow flex flex-col justify-center z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-3xl"
          >
            <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-lg">
              Bienvenido a <span className="text-blue-400">ADAUPS</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl leading-relaxed drop-shadow-md">
              Asociación de Docentes, Administrativos y Servicios de la Universidad Politécnica Salesiana - Sede Quito. Brindamos servicios financieros, convenios y apoyo solidario a nuestros socios.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://finanzas.adaups.org"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex justify-center items-center px-8 py-4 text-base font-semibold rounded-full text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300"
              >
                Acceso a Finanzas en línea
                <ArrowRight className="ml-2 -mr-1 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                to="/sobre-adaups"
                className="inline-flex justify-center items-center px-8 py-4 border border-white/30 text-base font-medium rounded-full text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
              >
                Conoce más sobre nosotros
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          MÉTRICAS FLOTANTES
          • Al ser 'absolute bottom-0 translate-y-1/2', su mitad queda 
            en la portada y la mitad sobre el borde. 
          • Esto ELIMINA totalmente "el margen inferior extra de la portada".
          ═══════════════════════════════════════════════════════════════ */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-full max-w-5xl mx-auto px-2 sm:px-6 lg:px-8 z-30">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="bg-white rounded-2xl md:rounded-3xl shadow-2xl p-4 md:p-8 grid grid-cols-3 gap-2 md:gap-8 text-center divide-x divide-slate-100 border border-slate-100"
        >
          <motion.div variants={itemVariants} className="flex flex-col items-center justify-center">
            <span className="text-2xl md:text-5xl font-black text-slate-900 mb-1 md:mb-2">
              <AnimatedCounter end={800} />
            </span>
            <span className="text-[10px] md:text-sm font-bold text-slate-500 uppercase tracking-wider">Socios</span>
          </motion.div>
          <motion.div variants={itemVariants} className="flex flex-col items-center justify-center">
            <span className="text-2xl md:text-5xl font-black text-slate-900 mb-1 md:mb-2">
              <AnimatedCounter end={6} />
            </span>
            <span className="text-[10px] md:text-sm font-bold text-slate-500 uppercase tracking-wider">Servicios</span>
          </motion.div>
          <motion.div variants={itemVariants} className="flex flex-col items-center justify-center">
            <span className="text-2xl md:text-5xl font-black text-slate-900 mb-1 md:mb-2">
              <AnimatedCounter end={10} />
            </span>
            <span className="text-[10px] md:text-sm font-bold text-slate-500 uppercase tracking-wider">Convenios</span>
          </motion.div>
        </motion.div>
      </div>

    </div>
  );
}
