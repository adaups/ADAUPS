import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useInView } from '../../hooks/useInView';
import { useAnimatedCounter } from '../../hooks/useAnimatedCounter';

const backgroundImages = [
  '/images/event1.webp',
  '/images/event2.webp',
  '/images/event3.webp'
];

function AnimatedCounter({ end, duration = 2 }: { end: number; duration?: number }) {
  const { count, ref } = useAnimatedCounter(end, duration);
  return <span ref={ref}>{count}</span>;
}

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [heroReady, setHeroReady] = useState(false);
  const { ref: metricsRef, isInView: metricsVisible } = useInView({ threshold: 0.2 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Double RAF: first frame completes initial paint, second triggers the transition
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = requestAnimationFrame(() => setHeroReady(true));
    });
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
  
    <div className="relative z-20">

      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white min-h-[90vh] flex flex-col overflow-hidden">

        {/* Imagen de fondo con carrusel CSS */}
        <div className="absolute inset-0">
          {backgroundImages.map((src, i) => (
            <img
              key={src}
              src={src}
              alt="ADAUPS Background"
              className={`absolute inset-0 w-full h-full object-cover object-center hero-image ${i === currentImageIndex ? 'is-active' : ''}`}
              fetchPriority={i === 0 ? 'high' : 'auto'}
              loading={i === 0 ? 'eager' : 'lazy'}
            />
          ))}

          {/* Overlay para legibilidad */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/40 to-slate-900/80 pointer-events-none" />
        </div>

        {/* Contenido principal */}
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32 flex-grow flex flex-col justify-center z-10">
          <div className="max-w-3xl">
            <h1 className={`animate-in ${heroReady ? 'is-visible' : ''} text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight drop-shadow-lg`}>
              Bienvenido a <span className="text-amber-300">ADAUPS</span>
            </h1>
            <p className={`animate-in ${heroReady ? 'is-visible' : ''} stagger-1 text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed drop-shadow-md`}>
              Asociación de Docentes, Administrativos y Servicios de la Universidad Politécnica Salesiana - Sede Quito. Brindamos servicios financieros, convenios y apoyo solidario a nuestros socios.
            </p>

            <div className={`animate-in ${heroReady ? 'is-visible' : ''} stagger-2 flex flex-col sm:flex-row gap-4`}>
              <a
                href="https://finanzas.adaups.org"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex justify-center items-center px-8 py-4 text-base font-semibold rounded-full text-white bg-amber-500 hover:bg-amber-400 shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 transition-all duration-300"
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
            </div>
          </div>
        </div>
      </section>

      {/* Métricas flotantes */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-full max-w-5xl mx-auto px-2 sm:px-6 lg:px-8 z-30">
        <div
          ref={metricsRef}
          className={`animate-in ${metricsVisible ? 'is-visible' : ''} bg-white rounded-2xl md:rounded-3xl shadow-2xl p-4 md:p-8 grid grid-cols-3 gap-2 md:gap-8 text-center divide-x divide-slate-100 border border-slate-100`}
        >
          <div className="flex flex-col items-center justify-center">
            <span className="text-2xl md:text-5xl font-black text-slate-900 mb-1 md:mb-2">
              <AnimatedCounter end={800} /><span className="text-blue-500">+</span>
            </span>
            <span className="text-[10px] md:text-sm font-bold text-slate-500 uppercase tracking-wider">Socios</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-2xl md:text-5xl font-black text-slate-900 mb-1 md:mb-2">
              <AnimatedCounter end={6} />
            </span>
            <span className="text-[10px] md:text-sm font-bold text-slate-500 uppercase tracking-wider">Servicios</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-2xl md:text-5xl font-black text-slate-900 mb-1 md:mb-2">
              <AnimatedCounter end={10} /><span className="text-blue-500">+</span>
            </span>
            <span className="text-[10px] md:text-sm font-bold text-slate-500 uppercase tracking-wider">Convenios</span>
          </div>
        </div>
      </div>

    </div>
  );
}
