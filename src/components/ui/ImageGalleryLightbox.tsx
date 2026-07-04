import { useState } from 'react';
import { createPortal } from 'react-dom';
import { X, ChevronRight, ChevronLeft, Images } from 'lucide-react';

interface ImageGalleryLightboxProps {
  images: string[];
  title?: string;
  subtitle?: string;
}

export default function ImageGalleryLightbox({ images, title = 'Galería de fotos', subtitle }: ImageGalleryLightboxProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (images.length === 0) return null;

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prevPhoto = () =>
    setLightboxIndex(i => (i !== null ? (i - 1 + images.length) % images.length : null));
  const nextPhoto = () =>
    setLightboxIndex(i => (i !== null ? (i + 1) % images.length : null));

  return (
    <>
      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-blue-50">
          <Images className="w-4 h-4 text-blue-600" />
        </div>
        <div>
          <h2 className="text-xl font-extrabold text-slate-900 leading-none">{title}</h2>
          <p className="text-xs text-slate-400 font-medium mt-0.5">
            {subtitle ?? `${images.length} imágenes · Toca para ampliar`}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => openLightbox(i)}
            className="group relative aspect-square rounded-2xl overflow-hidden bg-slate-100 shadow-sm ring-1 ring-slate-900/5 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            aria-label={`Ver imagen ${i + 1}`}
          >
            <img
              src={src}
              alt={`Imagen ${i + 1}`}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 rounded-2xl" />
            <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="bg-white/20 backdrop-blur-sm border border-white/30 text-white text-[11px] font-black px-3 py-1.5 rounded-full tracking-wide">
                Ver imagen
              </span>
            </span>
          </button>
        ))}
      </div>

      {lightboxIndex !== null &&
        createPortal(
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
            onClick={closeLightbox}
          >
            <div
              className="relative max-w-2xl w-full flex flex-col items-center"
              onClick={e => e.stopPropagation()}
            >
              <span className="absolute -top-9 left-0 text-white/50 text-xs font-bold select-none">
                {lightboxIndex + 1} / {images.length}
              </span>

              <img
                src={images[lightboxIndex]}
                alt={`Imagen ${lightboxIndex + 1}`}
                className="w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
              />

              <button
                onClick={closeLightbox}
                className="absolute -top-3.5 -right-3.5 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-xl hover:bg-slate-100 hover:scale-105 transition-all cursor-pointer"
                aria-label="Cerrar"
              >
                <X className="w-4 h-4 text-slate-700" />
              </button>

              {images.length > 1 && (
                <button
                  onClick={prevPhoto}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/25 rounded-full flex items-center justify-center text-white transition-all cursor-pointer backdrop-blur-sm"
                  aria-label="Imagen anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
              )}

              {images.length > 1 && (
                <button
                  onClick={nextPhoto}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/25 rounded-full flex items-center justify-center text-white transition-all cursor-pointer backdrop-blur-sm"
                  aria-label="Imagen siguiente"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              )}

              <p className="text-white/40 text-xs mt-4 font-medium select-none">Toca fuera para cerrar</p>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
