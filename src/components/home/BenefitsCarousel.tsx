import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimateOnScroll from '../ui/AnimateOnScroll';

type CarouselItem = {
  id: string;
  img?: string;
  /** Ancho real del logo a 40px de alto (evita reflow al cargar: ver nota en el <img>) */
  imgWidth?: number;
  text?: string;
  alt?: string;
  label: string;
};

const carouselItems: CarouselItem[] = [
  { id: 'Farmacias', img: '/images/partners/SANA-SANA.webp',  imgWidth: 40,  alt: 'Sana Sana',      label: 'Farmacias SanaSana' },
  { id: 'credito-empresarial-difare', img: '/images/partners/pharmacys.png', imgWidth: 133, alt: "Pharmacy's", label: "Pharmacy's" },
  { id: 'credito-empresarial-difare', img: '/images/partners/cruzazul.svg', imgWidth: 165, alt: 'Cruz Azul', label: 'Cruz Azul' },
  { id: 'Farmacias', img: '/images/partners/fybeca.webp',     imgWidth: 40,  alt: 'Fybeca',          label: 'Farmacias Fybeca' },
  { id: 'Seguros',   img: '/images/partners/zurich.svg',      imgWidth: 154, alt: 'ZURICH',          label: 'Seguros Zurich' },
  { id: 'Optica',    img: '/images/partners/lenslook.webp',   imgWidth: 40,  alt: 'Lens Look',       label: 'Óptica Lens Look' },
  { id: 'ajamar',    img: '/images/partners/ajamar.webp',     imgWidth: 79,  alt: 'Seafood Ajamar',  label: 'Seafood Ajamar' },
];

// Lista plana duplicada 4x: un set (7 logos) mide ~1344px, insuficiente para
// pantallas anchas (>1344px) con solo 2 copias — el track se quedaba sin
// contenido antes de completar el ciclo, mostrando un hueco antes de reiniciar.
// Con 4 copias el track (~5376px) cubre monitores ultra-anchos sin cortes.
const marqueeItems = [...carouselItems, ...carouselItems, ...carouselItems, ...carouselItems];

export default function BenefitsCarousel() {
  return (
    <section className="py-16 md:py-20 bg-slate-900 border-b border-slate-700 overflow-hidden">

      {/* Heading */}
      <AnimateOnScroll className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <span className="inline-block text-amber-400 font-bold tracking-widest text-xs uppercase mb-3 border border-amber-400/30 bg-amber-400/10 px-3 py-1 rounded-full">
          Red de alianzas
        </span>
        <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-3">
          Convenios Destacados
        </h2>
        <p className="text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Como socio de ADAUPS, tienes acceso a una red de establecimientos con descuentos y facilidades de pago exclusivas.
        </p>
      </AnimateOnScroll>

      {/* Marquee — lista plana, un solo elemento animado, siempre continuo (sin pausa por hover) */}
      <div className="relative flex overflow-x-hidden mb-10">
        <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-slate-900 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-slate-900 to-transparent pointer-events-none" />

        <div
          className="animate-marquee flex whitespace-nowrap"
          style={{ willChange: 'transform' }}
        >
          {marqueeItems.map((item, idx) => (
            <Link
              key={idx}
              to={`/beneficios/${item.id}`}
              className="flex flex-col items-center justify-center w-44 h-36 p-5 bg-white rounded-2xl hover:bg-amber-50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex-shrink-0 cursor-pointer mr-4 group/card"
            >
              {item.img ? (
                <img
                  src={item.img}
                  alt={item.alt}
                  width={item.imgWidth ?? 100}
                  height={40}
                  className="h-10 w-auto object-contain mb-2.5 group-hover/card:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const el = e.currentTarget;
                    el.style.display = 'none';
                    const fallback = el.nextElementSibling as HTMLElement | null;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
              ) : null}
              {/* Fallback de texto — visible si no hay img o si la img falla */}
              <div
                className="h-10 items-center justify-center mb-2.5"
                style={{ display: item.img ? 'none' : 'flex' }}
              >
                <span className="font-black text-xl tracking-tighter text-blue-600 group-hover/card:text-blue-700 transition-colors">
                  {item.text ?? item.alt ?? item.label}
                </span>
              </div>
              <span className="text-xs font-bold text-slate-600 text-center leading-tight">
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA */}
      <AnimateOnScroll variant="fade" className="text-center">
        <Link
          to="/beneficios"
          className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-bold rounded-full text-slate-900 bg-amber-400 hover:bg-amber-300 transition-colors shadow-lg shadow-amber-400/20 cursor-pointer"
        >
          Explorar todos los convenios
          <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </AnimateOnScroll>

    </section>
  );
}
