import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { containerVariants, itemVariants } from '../lib/motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { newsData } from '../data';
import DecorativeBackground from '../components/ui/DecorativeBackground';

export default function News() {
  // Sort all news by date descending
  const sortedNews = [...newsData].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const featuredNews = sortedNews[0];
  const regularNews = sortedNews.slice(1);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="relative min-h-screen bg-white overflow-hidden pb-20">
      <DecorativeBackground />
      
      {/* Header Area */}
      <div className="relative pt-24 pb-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-8 bg-blue-600"></div>
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">
              Sala de Prensa
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-none mb-4">
            Noticias y <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Actualidad
            </span>
          </h1>
          <p className="text-base text-slate-600 max-w-2xl leading-relaxed">
            Explora los últimos comunicados oficiales, coberturas de eventos y 
            novedades relevantes para la comunidad ADAUPS.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Featured Editorial Article */}
        {featuredNews && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-14 group"
          >
            <Link to={`/noticias/${featuredNews.id}`} className="block cursor-pointer">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
              <div className="lg:col-span-8 order-2 lg:order-1 pr-0 lg:pr-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-widest border-b-2 border-blue-600 pb-1">
                    {featuredNews.category}
                  </span>
                  <span className="text-slate-500 text-xs">
                    {formatDate(featuredNews.date)}
                  </span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 leading-tight mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {featuredNews.title}
                </h2>
                <p className="text-base text-slate-600 leading-relaxed mb-6 max-w-2xl">
                  {featuredNews.summary}
                </p>
                <div className="inline-flex items-center justify-center px-6 py-3 bg-slate-900 text-white rounded-full text-sm font-medium hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-blue-500/30">
                  Leer artículo completo
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
              
              <div className="lg:col-span-4 order-1 lg:order-2">
                <div className="relative aspect-video lg:aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img
                    src={featuredNews.imageUrl}
                    alt={featuredNews.title}
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
            </Link>
          </motion.div>
        )}

        {/* Separator */}
        {regularNews.length > 0 && (
          <div className="w-full h-px bg-slate-200 mb-10" />
        )}

        {/* Secondary Articles List (Formal Horizontal Layout) */}
        {regularNews.length > 0 && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={containerVariants}
            className="grid grid-cols-1 gap-6"
          >
            {regularNews.map((news) => (
              <motion.article 
                key={news.id} 
                variants={itemVariants}
              >
                <Link
                  to={`/noticias/${news.id}`}
                  className="group flex flex-col sm:flex-row gap-5 md:gap-6 items-start cursor-pointer border border-transparent hover:border-slate-100 hover:bg-slate-50 p-4 -ml-4 rounded-2xl transition-all duration-300"
                >
                <div className="w-full sm:w-48 lg:w-56 shrink-0">
                  <div className="relative aspect-[16/10] rounded-lg overflow-hidden shadow-sm">
                    <img
                      src={news.imageUrl}
                      alt={news.title}
                      className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-out"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                
                <div className="w-full sm:w-auto flex flex-col justify-center py-1 flex-grow">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-2 py-0.5 rounded-full">
                      {news.category}
                    </span>
                    <span className="text-slate-400 text-xs">
                      {formatDate(news.date)}
                    </span>
                  </div>
                  
                  <h3 className="text-lg lg:text-xl font-bold text-slate-900 mb-2 leading-snug group-hover:text-blue-600 transition-colors duration-300">
                    {news.title}
                  </h3>
                  
                  <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed mb-4 max-w-3xl">
                    {news.summary}
                  </p>
                  
                  <div className="inline-flex items-center text-sm font-semibold text-slate-700 group-hover:text-blue-600 transition-colors mt-auto">
                    Leer más
                    <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
