import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Calendar } from 'lucide-react';
import { motion } from 'motion/react';
import { containerVariants, itemVariants } from '../../lib/motion';
import { newsData } from '../../data';

export default function NewsSection() {
  const sortedNews = [...newsData].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  
  const featured = sortedNews[0];
  const secondary = sortedNews.slice(1, 3);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <section className="py-14 bg-white relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Novedades</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
              Últimas Noticias
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Mantente al día con los comunicados oficiales, nuevas alianzas y actualizaciones importantes de nuestra asociación.
            </p>
          </div>
          <Link to="/noticias" className="group hidden md:inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-full text-slate-700 bg-slate-100 hover:bg-blue-600 hover:text-white transition-all duration-300">
            Ver todas las noticias <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {sortedNews.length > 0 && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6"
          >
            {/* Featured News */}
            {featured && (
              <motion.div variants={itemVariants} className="lg:col-span-12 xl:col-span-7 group">
                <Link to={`/noticias/${featured.id}`} className="block relative aspect-[4/3] sm:aspect-[16/9] w-full bg-slate-200 rounded-2xl overflow-hidden shadow-md">
                  <img
                    src={featured.imageUrl}
                    alt={featured.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  {/* Overlay gradiente más oscuro para imágenes claras */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/60 to-slate-900/20" />

                  <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                        {featured.category}
                      </span>
                      <span className="text-slate-300 text-sm font-medium flex items-center">
                        <Calendar className="w-4 h-4 mr-1.5" /> {formatDate(featured.date)}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-tight group-hover:text-blue-300 transition-colors">
                      {featured.title}
                    </h3>
                    <p className="text-slate-200 text-sm line-clamp-2 mb-4 max-w-2xl">
                      {featured.summary}
                    </p>
                    <div className="inline-flex items-center text-white font-semibold group-hover:text-blue-300 transition-colors">
                      Leer artículo completo
                      <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            )}

            {/* Secondary News List */}
            {secondary.length > 0 && (
              <motion.div variants={itemVariants} className="lg:col-span-12 xl:col-span-5 flex flex-col gap-4">
                {secondary.map((news) => (
                  <Link to={`/noticias/${news.id}`} key={news.id} className="group flex gap-4 bg-white rounded-2xl p-3 sm:p-4 hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100 cursor-pointer">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 aspect-square relative bg-slate-200 rounded-xl overflow-hidden flex-shrink-0 shadow-sm">
                      <img
                        src={news.imageUrl}
                        alt={news.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex flex-col justify-center py-1">
                      <span className="text-[10px] sm:text-xs font-bold text-blue-600 uppercase tracking-wider mb-1.5">{news.category}</span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5 group-hover:text-blue-600 transition-colors leading-snug line-clamp-2">{news.title}</h3>
                      <p className="text-slate-500 text-xs sm:text-sm line-clamp-2 mb-2">
                        {news.summary}
                      </p>
                      <span className="text-slate-400 text-xs font-medium flex items-center mt-auto">
                        <Calendar className="w-3.5 h-3.5 mr-1.5" /> {formatDate(news.date)}
                      </span>
                    </div>
                  </Link>
                ))}
              </motion.div>
            )}
          </motion.div>
        )}

        <div className="mt-6 md:hidden text-center">
          <Link to="/noticias" className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-full text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors w-full">
            Ver todas las noticias <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
