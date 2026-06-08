import { useParams, Link, Navigate } from 'react-router-dom';
import { newsData } from '../data';
import { ArrowLeft, Calendar, Tag, ChevronRight, X, ChevronLeft as ChevLeft, Images } from 'lucide-react';
import { useScrollToTop } from '../hooks/useScrollToTop';
import AnimateOnScroll from '../components/ui/AnimateOnScroll';
import { useState } from 'react';
import { createPortal } from 'react-dom';

export default function NewsDetail() {
  useScrollToTop();
  const { newsId } = useParams<{ newsId: string }>();
  const news = newsData.find(n => n.id === newsId);

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (!news) {
    return <Navigate to="/noticias" replace />;
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      timeZone: 'UTC',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const relatedNews = [...newsData]
    .filter(n => n.id !== newsId)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 2);

  const gallery = news.gallery ?? [];
  const hasGallery = gallery.length > 0;

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prevPhoto = () =>
    setLightboxIndex(i => (i !== null ? (i - 1 + gallery.length) % gallery.length : null));
  const nextPhoto = () =>
    setLightboxIndex(i => (i !== null ? (i + 1) % gallery.length : null));

  return (
    <div className="bg-white min-h-screen pt-16 pb-16">

      {/* 1. Typography-driven Header Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <AnimateOnScroll>
          <Link
            to="/noticias"
            className="inline-flex items-center text-sm font-semibold text-slate-400 hover:text-blue-600 mb-10 transition-colors group"
          >
            <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center mr-3 group-hover:bg-blue-50 transition-colors">
              <ArrowLeft className="w-4 h-4" />
            </div>
            Volver a Noticias
          </Link>

          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-black text-blue-600 uppercase tracking-widest bg-blue-50/50 px-3 py-1 rounded-full border border-blue-100">
              <Tag className="w-3 h-3" />
              {news.category}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-200"></span>
            <span className="text-slate-500 text-sm font-medium flex items-center">
              <Calendar className="w-4 h-4 mr-2 text-slate-400" />
              {formatDate(news.date)}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            {news.title}
          </h1>

          <p className="text-lg sm:text-xl text-slate-500 font-medium leading-relaxed max-w-3xl mb-8">
            {news.summary}
          </p>
        </AnimateOnScroll>
      </div>

      {/* 2. Cover Image */}
      <AnimateOnScroll variant="scale" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="relative aspect-video lg:aspect-[21/8] rounded-[1.5rem] overflow-hidden shadow-xl bg-slate-100 ring-1 ring-slate-900/5">
          <img
            src={news.imageUrl}
            alt={news.title}
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </AnimateOnScroll>

      {/* 3. Article Body */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="space-y-6">
          {news.content.map((paragraph, index) => {
            if (paragraph.startsWith('IMAGE:')) {
              const imageUrl = paragraph.replace('IMAGE:', '').trim();
              return (
                <div key={index} className="my-10 rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-slate-50">
                  <img src={imageUrl} alt={`Contenido ${index}`} className="w-full h-auto object-cover" />
                </div>
              );
            }

            const firstTextIndex = news.content.findIndex(p => !p.startsWith('IMAGE:'));

            return (
              <p
                key={index}
                className={`text-base lg:text-lg text-slate-700 leading-relaxed ${
                  index === firstTextIndex
                    ? 'first-letter:text-5xl first-letter:font-black first-letter:text-blue-600 first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-none'
                    : ''
                }`}
              >
                {paragraph}
              </p>
            );
          })}
        </AnimateOnScroll>

        {/* 4. Photo Gallery */}
        {hasGallery && (
          <AnimateOnScroll className="mt-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-blue-50">
                <Images className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-slate-900 leading-none">Galería de fotos</h2>
                <p className="text-xs text-slate-400 font-medium mt-0.5">
                  {gallery.length} imágenes · Toca para ampliar
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {gallery.map((src, i) => (
                <button
                  key={i}
                  onClick={() => openLightbox(i)}
                  className="group relative aspect-square rounded-2xl overflow-hidden bg-slate-100 shadow-sm ring-1 ring-slate-900/5 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  aria-label={`Ver foto ${i + 1}`}
                >
                  <img
                    src={src}
                    alt={`Foto ${i + 1}`}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 rounded-2xl" />
                  <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-white/20 backdrop-blur-sm border border-white/30 text-white text-[11px] font-black px-3 py-1.5 rounded-full tracking-wide">
                      Ver foto
                    </span>
                  </span>
                </button>
              ))}
            </div>
          </AnimateOnScroll>
        )}

        {/* Author block */}
        <AnimateOnScroll variant="fade" className="flex items-center gap-4 mt-12 py-6 border-y border-slate-100">
          <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
            <span className="font-bold text-slate-400">AD</span>
          </div>
          <div>
            <p className="text-sm font-bold text-slate-900">Equipo Editorial ADAUPS</p>
            <p className="text-xs text-slate-500">Comunicación oficial</p>
          </div>
        </AnimateOnScroll>

        {/* 5. Related News Section */}
        {relatedNews.length > 0 && (
          <AnimateOnScroll className="mt-20">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Sigue leyendo</h2>
              <Link to="/noticias" className="hidden sm:flex items-center text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors">
                Ver todas <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {relatedNews.map((related) => (
                <div key={related.id}>
                  <Link to={`/noticias/${related.id}`} className="group block">
                    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-slate-100 mb-5 shadow-sm">
                      <img
                        src={related.imageUrl}
                        alt={related.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-2 block">
                        {related.category}
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">
                        {related.title}
                      </h3>
                      <span className="text-slate-500 text-xs font-medium">{formatDate(related.date)}</span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center sm:hidden">
              <Link to="/noticias" className="inline-flex items-center text-sm font-bold text-slate-600 hover:text-blue-600 bg-slate-50 px-6 py-3 rounded-xl transition-colors">
                Ver todas las noticias <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </AnimateOnScroll>
        )}
      </div>

      {/* 6. Gallery Lightbox via Portal */}
      {lightboxIndex !== null && hasGallery &&
        createPortal(
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
            onClick={closeLightbox}
          >
            <div
              className="relative max-w-2xl w-full flex flex-col items-center"
              onClick={e => e.stopPropagation()}
            >
              {/* Contador */}
              <span className="absolute -top-9 left-0 text-white/50 text-xs font-bold select-none">
                {lightboxIndex + 1} / {gallery.length}
              </span>

              <img
                src={gallery[lightboxIndex]}
                alt={`Foto ${lightboxIndex + 1}`}
                className="w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
              />

              {/* Cerrar */}
              <button
                onClick={closeLightbox}
                className="absolute -top-3.5 -right-3.5 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-xl hover:bg-slate-100 hover:scale-105 transition-all cursor-pointer"
                aria-label="Cerrar"
              >
                <X className="w-4 h-4 text-slate-700" />
              </button>

              {/* Anterior */}
              {gallery.length > 1 && (
                <button
                  onClick={prevPhoto}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/25 rounded-full flex items-center justify-center text-white transition-all cursor-pointer backdrop-blur-sm"
                  aria-label="Foto anterior"
                >
                  <ChevLeft className="w-5 h-5" />
                </button>
              )}

              {/* Siguiente */}
              {gallery.length > 1 && (
                <button
                  onClick={nextPhoto}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/25 rounded-full flex items-center justify-center text-white transition-all cursor-pointer backdrop-blur-sm"
                  aria-label="Foto siguiente"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              )}

              <p className="text-white/40 text-xs mt-4 font-medium select-none">Toca fuera para cerrar</p>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
