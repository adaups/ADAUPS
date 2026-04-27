import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight, ShoppingBag } from 'lucide-react';
import { promotionsData } from '../../data/promotions';
import { useInView } from '../../hooks/useInView';

export default function PromotionsSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const featuredPromotion = promotionsData.find(p => p.featured) || promotionsData[0];
  
  // Carousel logic
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = featuredPromotion?.images || [featuredPromotion?.image];

  useEffect(() => {
    if (images.length <= 1) return;
    
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    
    return () => clearInterval(timer);
  }, [images.length]);

  if (!featuredPromotion) return null;

  return (
    <section className="relative pt-28 md:pt-32 pb-12 md:pb-16 bg-slate-50 overflow-hidden border-b border-slate-200">
      {/* Background Effects matching the elegant flyer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-amber-600/10 rounded-full blur-[100px] -translate-y-1/3 translate-x-1/3 mix-blend-multiply" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-stone-500/10 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4 mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`animate-in ${isInView ? 'is-visible' : ''} bg-white border border-slate-200 rounded-[1.5rem] shadow-xl relative overflow-hidden`}
        >
          {/* subtle pattern */}
          <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />

          <div className="grid lg:grid-cols-12 gap-0 items-stretch relative z-10">
            {/* Content Side */}
            <div className="lg:col-span-5 p-6 md:p-8 lg:p-10 flex flex-col justify-center bg-white/80 backdrop-blur-sm z-20">
              <span className="inline-block text-amber-600 font-bold tracking-widest text-xs uppercase mb-3 border border-amber-200 bg-amber-50 px-3 py-1 rounded-full w-max">
                Exclusivo Socios ADAUPS
              </span>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 leading-tight tracking-tight">
                {featuredPromotion.title}
              </h2>

              <p className="text-lg text-slate-600 mb-6 leading-relaxed whitespace-pre-line">
                {featuredPromotion.shortDescription}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-auto mb-4">
                <a
                  href={`https://wa.me/593995800566?text=${encodeURIComponent(`Hola ADAUPS, me interesa solicitar información sobre: ${featuredPromotion.items?.[currentImageIndex]?.name || 'las Ofertas de Temporada'}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex justify-center items-center px-8 py-3.5 bg-amber-600 text-white rounded-xl font-bold shadow-lg hover:shadow-xl hover:bg-amber-700 hover:-translate-y-0.5 transition-all duration-300 text-sm"
                >
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Solicitar Ahora
                </a>
                <Link
                  to="/beneficios"
                  className="inline-flex justify-center items-center px-8 py-3.5 bg-transparent hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-xl font-bold hover:-translate-y-0.5 transition-all duration-300 text-sm"
                >
                  Ver Convenios
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              
             
            </div>

            {/* Image Side Carousel - Premium Floating Variant */}
            <div className="lg:col-span-7 relative min-h-[400px] lg:min-h-[550px] overflow-hidden bg-gradient-to-br from-stone-100 to-stone-200 flex items-center justify-center p-2 md:p-4">
               <div className="absolute inset-0 bg-white/40 z-10 hidden lg:block backdrop-blur-[2px]" />
              
               {/* Decorative background blob for the image */}
               <div className="absolute w-64 h-64 bg-amber-400/30 rounded-full blur-[80px] z-10 mix-blend-multiply" />

                <div className="relative w-fit h-fit max-w-full max-h-full z-20 rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-black/5 transform transition-transform hover:scale-105 duration-700 bg-gradient-to-b from-white to-slate-50 flex items-center justify-center group">
                
                {/* Images */}
                {images.map((src, idx) => (
                  <img
                    key={`${src}-${idx}`}
                    src={src}
                    alt={`${featuredPromotion.title} - Imagen ${idx + 1}`}
                    className={`w-full h-full max-h-[500px] object-contain object-center drop-shadow-2xl transition-all duration-1000 ease-in-out ${idx === currentImageIndex ? 'relative opacity-100 scale-100' : 'absolute inset-0 opacity-0 scale-95'}`}
                  />
                ))}
               </div>

              {/* Carousel Indicators */}
              <div className="absolute bottom-6 left-0 right-0 z-30 flex justify-center gap-2">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-500 shadow-sm ${idx === currentImageIndex ? 'bg-amber-600 w-6' : 'bg-slate-400 w-2 hover:bg-amber-400'}`}
                    aria-label={`Ir a la imagen ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
