import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Calendar } from 'lucide-react';
import AnimateOnScroll from '../ui/AnimateOnScroll';
import { newsData } from '../../data';

export default function NewsSection() {
  const sortedNews = [...newsData].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  
  const displayNews = sortedNews.slice(0, 3);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES', { 
      timeZone: 'UTC',
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Header */}
        <AnimateOnScroll className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold mb-3 uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-blue-500" />
              Actualidad
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-2">
              Últimas Noticias
            </h2>
            <p className="text-sm md:text-base text-slate-500">
              Mantente informado con los comunicados oficiales y actualizaciones importantes.
            </p>
          </div>
          <Link to="/noticias" className="group hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold rounded-full text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all">
            Ver todas <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </AnimateOnScroll>

        {/* Hover Accordion Layout */}
        {displayNews.length > 0 && (
          <AnimateOnScroll>
            <div className="flex flex-col lg:flex-row w-full h-[600px] lg:h-[420px] gap-2 sm:gap-3 group/accordion">
              {displayNews.map((news, idx) => {
                // Determine the base and hover flex classes
                // The first item is expanded by default. If the accordion is hovered, it shrinks UNLESS it is the one being hovered.
                const isFirst = idx === 0;
                const flexClasses = isFirst 
                  ? 'flex-[3] lg:group-hover/accordion:flex-1 lg:hover:!flex-[3]' 
                  : 'flex-[1] lg:hover:!flex-[3]';

                return (
                  <Link 
                    key={news.id}
                    to={`/noticias/${news.id}`} 
                    className={`
                      relative overflow-hidden rounded-2xl sm:rounded-3xl transition-[flex-grow] duration-700 ease-out flex group/card bg-slate-900
                      ${flexClasses}
                    `}
                  >
                    {/* Background Image */}
                    <img
                      src={news.imageUrl}
                      alt={news.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover/card:opacity-100 transition-opacity duration-700"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Gradient Overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                    {/* Content Container */}
                    <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6 lg:p-8">
                      {/* We use a min-width to prevent text wrapping weirdly when the card is squeezed */}
                      <div className="w-full lg:w-[400px] flex flex-col justify-end h-full">
                        
                        {/* Category & Date - Always visible, but adapts */}
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <span className="bg-blue-600 text-white text-[10px] sm:text-xs font-black px-2.5 py-1 rounded uppercase tracking-wider shadow-sm">
                            {news.category}
                          </span>
                          <span className="text-slate-300 text-[10px] sm:text-xs font-medium flex items-center bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded">
                            <Calendar className="w-3 h-3 mr-1.5 opacity-80" /> {formatDate(news.date)}
                          </span>
                        </div>
                        
                        {/* Title - Line clamped to prevent overflow when squeezed */}
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-tight line-clamp-2 group-hover/card:text-blue-200 transition-colors">
                          {news.title}
                        </h3>
                        
                        {/* Summary - Hidden by default on small cards, revealed on hover/expanded */}
                        <div className={`
                          overflow-hidden transition-all duration-700 ease-in-out
                          ${isFirst 
                            ? 'max-h-24 opacity-100 lg:group-hover/accordion:max-h-0 lg:group-hover/accordion:opacity-0 lg:group-hover/card:!max-h-24 lg:group-hover/card:!opacity-100' 
                            : 'max-h-0 opacity-0 lg:group-hover/card:max-h-24 lg:group-hover/card:opacity-100'
                          }
                        `}>
                          <p className="text-slate-300 text-sm line-clamp-2 mb-4 mt-1">
                            {news.summary}
                          </p>
                          <div className="inline-flex items-center text-blue-400 font-bold text-xs uppercase tracking-widest">
                            Leer artículo <ArrowRight className="ml-1.5 w-3.5 h-3.5 transform group-hover/card:translate-x-1 transition-transform" />
                          </div>
                        </div>

                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </AnimateOnScroll>
        )}

        <div className="mt-8 md:hidden text-center">
          <Link to="/noticias" className="inline-flex items-center justify-center px-8 py-3 text-sm font-bold rounded-full text-slate-700 bg-slate-100 w-full transition-colors">
            Ver todas las noticias <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
