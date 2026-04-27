import { Clock, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import AnimateOnScroll from '../ui/AnimateOnScroll';
import SectionHeading from '../ui/SectionHeading';
import { eventsData } from '../../data';
import type { Event } from '../../types/types';

const CARDS_PER_PAGE = 3;

function EventCard({ event, delay = 0 }: { event: Event; delay?: number }) {
  return (
    <AnimateOnScroll delay={delay}
      className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 hover:shadow-md transition-shadow h-full"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`${event.colorClass} rounded-xl p-3 text-center min-w-[3.5rem]`}>
            <span className="block text-xs font-bold uppercase">{event.month}</span>
            <span className="block text-xl font-black leading-none">{event.day}</span>
          </div>
          <span className="bg-slate-100 text-slate-600 text-xs font-bold px-3 py-1 rounded-full">
            {event.tag}
          </span>
        </div>
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-1.5 truncate">{event.title}</h3>
      <p className="text-slate-600 text-sm mb-3 line-clamp-2">{event.description}</p>
      
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500 mt-auto pt-2 border-t border-slate-100">
        <div className="flex items-center">
          <Clock className="w-3.5 h-3.5 mr-1.5 text-blue-500" /> 
          <span className="truncate">{event.time}</span>
        </div>
        <div className="flex items-center flex-1 min-w-0">
          <MapPin className="w-3.5 h-3.5 mr-1.5 text-blue-500" /> 
          <span className="truncate">{event.location}</span>
        </div>
      </div>
    </AnimateOnScroll>
  );
}

function CarouselView() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(eventsData.length / CARDS_PER_PAGE);
  const start = page * CARDS_PER_PAGE;
  const visible = eventsData.slice(start, start + CARDS_PER_PAGE);

  const prev = () => setPage((p) => Math.max(0, p - 1));
  const next = () => setPage((p) => Math.min(totalPages - 1, p + 1));

  return (
    <div className="relative">
      <button
        onClick={prev}
        disabled={page === 0}
        aria-label="Anterior"
        className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-300 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={next}
        disabled={page === totalPages - 1}
        aria-label="Siguiente"
        className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-300 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visible.map((event, i) => (
          <EventCard key={event.title} event={event} delay={i * 0.1} />
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i)}
            aria-label={`Página ${i + 1}`}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === page ? 'bg-blue-600 w-6' : 'bg-slate-300 hover:bg-slate-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function GridView() {
  const count = eventsData.length;

  const gridClass =
    count === 1
      ? 'flex justify-center'
      : count === 2
      ? 'grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto'
      : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6';

  const cardWrapper = count === 1 ? 'w-full max-w-sm' : '';

  return (
    <div className={gridClass}>
      {eventsData.map((event, i) => (
        <div key={event.title} className={cardWrapper}>
          <EventCard event={event} delay={i * 0.15} />
        </div>
      ))}
    </div>
  );
}

export default function EventsSection() {
  const useCarousel = eventsData.length > CARDS_PER_PAGE;

  return (
    <section className="pt-12 md:pt-16 pb-10 relative overflow-hidden bg-slate-50">
      
      <div className="absolute inset-0 z-0 opacity-25 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, #94a3b8 2px, transparent 0)', backgroundSize: '48px 48px' }} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="Próximos Eventos"
          subtitle="Agéndate y participa en las actividades, asambleas y celebraciones de nuestra asociación."
        />

        {useCarousel ? <CarouselView /> : <GridView />}
      </div>
    </section>
  );
}
