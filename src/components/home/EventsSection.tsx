import { Clock, MapPin, ChevronLeft, ChevronRight, X, Eye, ArrowUpRight, Ticket, Mail, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import AnimateOnScroll from '../ui/AnimateOnScroll';
import SectionHeading from '../ui/SectionHeading';
import { eventsData } from '../../data';
import type { Event } from '../../types/types';

const CARDS_PER_PAGE = 3;

/** Genera URL de Outlook Web compose (office.com) con asunto + cuerpo pre-rellenados. */
function buildRegisterMailto(event: Event): string {
  const subject = `Inscripción: ${event.title}`;
  const body = [
    'Estimados ADAUPS,',
    '',
    `Por medio de la presente, deseo confirmar mi participación en el taller "${event.title}".`,
    '',
    'Mis datos son:',
    '',
    'Nombres: ',
    'Cédula: ',
    'Área: ',
    '',
    'Agradezco su atención y quedo atento a su respuesta.',
    '',
    'Cordialmente.',
  ].join('\n');
  return `https://outlook.office.com/mail/deeplink/compose?to=${encodeURIComponent(event.registerEmail ?? '')}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function DateChip({ month, day, className }: { month: string; day: string; className: string }) {
  return (
    <div className={`rounded-xl px-2.5 py-2 text-center min-w-[2.8rem] ${className}`}>
      <span className="block text-[10px] font-black uppercase">{month}</span>
      <span className="block text-xl font-black leading-none">{day}</span>
    </div>
  );
}

function EventCard({ event, delay = 0 }: { event: Event; delay?: number }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [registering, setRegistering] = useState(false);
  const displayTitle = event.shortTitle ?? event.title;
  const isClickable = !!event.imageUrl;

  function handleRegister() {
    setRegistering(true);
    window.open(buildRegisterMailto(event), '_blank', 'noopener,noreferrer');
    setTimeout(() => setRegistering(false), 3000);
  }

  return (
    <div className="relative h-full group">

      {/* ── Efecto "foto guardada": tarjeta rotada detrás ── */}
      {event.imageUrl && (
        <div
          className="absolute inset-x-2 inset-y-1 rounded-2xl bg-amber-50 border border-amber-200/60 rotate-[1.5deg] transition-transform duration-500 ease-out group-hover:rotate-[2.5deg]"
          aria-hidden="true"
        />
      )}

      {/* ── Sticker flotante "Cupos limitados" ── */}
      {event.spotsLabel && (
        <div className="absolute -top-3 -right-2 z-30 rotate-3 group-hover:rotate-6 transition-transform duration-300">
          <span className="relative inline-flex items-center gap-1.5 bg-gradient-to-br from-amber-500 to-amber-600 text-white text-[11px] font-black px-3 py-1.5 rounded-full shadow-lg shadow-amber-600/30 uppercase tracking-wide">
            {/* Anillo pulsante */}
            <span className="absolute inset-0 rounded-full bg-amber-400 animate-ping opacity-30" aria-hidden="true" />
            <Ticket className="w-3 h-3 relative" />
            <span className="relative">{event.spotsLabel}</span>
          </span>
        </div>
      )}

      <AnimateOnScroll
        delay={delay}
        className="relative z-10 bg-white rounded-2xl shadow-sm border border-slate-200 group-hover:shadow-xl transition-all duration-300 h-full flex flex-col"
      >
        <div
          className={`flex flex-col h-full ${isClickable ? 'cursor-pointer' : ''}`}
          onClick={() => isClickable && setLightboxOpen(true)}
          role={isClickable ? 'button' : undefined}
          tabIndex={isClickable ? 0 : undefined}
          aria-label={isClickable ? `Ver invitación: ${displayTitle}` : undefined}
          onKeyDown={isClickable ? (e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), setLightboxOpen(true)) : undefined}
        >
          {/* ── Visual Header ── */}
          <div className={`relative aspect-[25/16] overflow-hidden flex-shrink-0 rounded-t-2xl ${!event.imageUrl ? event.colorClass : 'bg-slate-900'}`}>
            {event.imageUrl ? (
              <>
                <img
                  src={event.imageUrl}
                  alt={event.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent pointer-events-none" />

                {/* Date chip (rango si hay dayEnd) */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <DateChip month={event.month} day={event.day} className={`${event.colorClass} shadow-lg`} />
                  {event.dayEnd && (
                    <>
                      <span className="text-white font-black text-lg drop-shadow-md">–</span>
                      <DateChip month={event.monthEnd ?? event.month} day={event.dayEnd} className={`${event.colorClass} shadow-lg`} />
                    </>
                  )}
                </div>

                {/* Barra de affordance PERSISTENTE (visible en móvil y desktop) */}
                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-1.5 py-2 bg-black/45 backdrop-blur-sm group-hover:bg-amber-500/95 transition-colors duration-300">
                  <Eye className="w-3.5 h-3.5 text-white" />
                  <span className="text-white text-[11px] font-black tracking-wide">
                    {event.registerEmail ? 'Ver invitación' : 'Ver imagen del evento'}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-300" />
                </div>
              </>
            ) : (
              <>
                <span className="absolute right-3 -bottom-4 text-[6rem] font-black opacity-[0.07] leading-none select-none pointer-events-none">
                  {event.day}
                </span>
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5">
                  <DateChip month={event.month} day={event.day} className="bg-white shadow-sm" />
                  {event.dayEnd && (
                    <>
                      <span className="font-black text-lg">–</span>
                      <DateChip month={event.monthEnd ?? event.month} day={event.dayEnd} className="bg-white shadow-sm" />
                    </>
                  )}
                </div>
              </>
            )}
          </div>

          {/* ── Content ── */}
          <div className="p-5 flex flex-col flex-grow">
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-slate-100 text-slate-600 text-xs font-bold px-3 py-1 rounded-full">
                {event.tag}
              </span>
            </div>

            <h3 className="text-base font-black text-slate-900 mb-1.5 leading-snug">{displayTitle}</h3>
            <p className="text-slate-600 text-sm mb-3 line-clamp-2 flex-grow">{event.description}</p>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500 mt-auto pt-2 border-t border-slate-100">
              <div className="flex items-center">
                <Clock className="w-3.5 h-3.5 mr-1.5 text-blue-500 flex-shrink-0" />
                <span className="truncate">{event.time}</span>
              </div>
              <div className="flex items-center flex-1 min-w-0">
                <MapPin className="w-3.5 h-3.5 mr-1.5 text-blue-500 flex-shrink-0" />
                <span className="truncate">{event.location}</span>
              </div>
            </div>
          </div>
        </div>
      </AnimateOnScroll>

      {/* ── Lightbox via Portal ── */}
      {lightboxOpen && event.imageUrl && createPortal(
        <div
          className="animate-overlay-fade fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="animate-modal-pop relative w-full max-w-md sm:max-w-lg flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={event.imageUrl}
              alt={event.title}
              className="w-full object-contain rounded-2xl shadow-2xl max-h-[72vh]"
            />

            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute -top-3.5 -right-3.5 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-xl hover:bg-slate-100 hover:scale-105 transition-all cursor-pointer"
              aria-label="Cerrar"
            >
              <X className="w-4 h-4 text-slate-700" />
            </button>

            {/* Botón de registro → abre Outlook Web */}
            {event.registerEmail && (
              <button
                onClick={handleRegister}
                disabled={registering}
                className="mt-4 inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-amber-500 hover:bg-amber-400 disabled:bg-amber-400 text-white font-black rounded-xl shadow-lg shadow-amber-500/30 hover:-translate-y-0.5 disabled:translate-y-0 transition-all duration-300 cursor-pointer disabled:cursor-wait"
              >
                {registering ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Abriendo Outlook…
                  </>
                ) : (
                  <>
                    <Mail className="w-4 h-4" />
                    Registrarme al evento
                  </>
                )}
              </button>
            )}

            <p className="text-center text-white/50 text-xs mt-3 font-medium select-none">
              {event.registerEmail ? 'Cupos limitados · Toca fuera para cerrar' : 'Toca fuera para cerrar'}
            </p>
          </div>
        </div>,
        document.body
      )}
    </div>
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
      <button onClick={prev} disabled={page === 0} aria-label="Anterior"
        className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-300 transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button onClick={next} disabled={page === totalPages - 1} aria-label="Siguiente"
        className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-300 transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-3">
        {visible.map((event, i) => (
          <EventCard key={event.title} event={event} delay={i * 0.08} />
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button key={i} onClick={() => setPage(i)} aria-label={`Página ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${i === page ? 'bg-blue-600 w-6' : 'bg-slate-300 hover:bg-slate-400 w-2.5'}`}
          />
        ))}
      </div>
    </div>
  );
}

function GridView() {
  const count = eventsData.length;
  const gridClass =
    count === 1 ? 'flex justify-center'
    : count === 2 ? 'grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto'
    : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6';
  const cardWrapper = count === 1 ? 'w-full max-w-md h-full' : 'h-full';

  return (
    <div className={`${gridClass} pt-3`}>
      {eventsData.map((event, i) => (
        <div key={event.title} className={cardWrapper}>
          <EventCard event={event} delay={i * 0.1} />
        </div>
      ))}
    </div>
  );
}

export default function EventsSection() {
  const useCarousel = eventsData.length > CARDS_PER_PAGE;
  return (
    <section className="py-12 md:py-16 relative overflow-hidden bg-slate-50">
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, #94a3b8 1.5px, transparent 0)', backgroundSize: '40px 40px' }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="Próximos Eventos"
          subtitle="Agéndate y participa en las actividades, asambleas y talleres de nuestra asociación."
        />
        {useCarousel ? <CarouselView /> : <GridView />}
      </div>
    </section>
  );
}
