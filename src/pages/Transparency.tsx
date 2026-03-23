import { transparencyData } from '../data';
import { FileText, Download, Filter, Search, Calendar } from 'lucide-react';
import { motion } from 'motion/react';
import { containerVariants, itemVariants } from '../lib/motion';
import { useFilteredData } from '../hooks/useFilteredData';
import PageHeader from '../components/ui/PageHeader';
import type { TransparencyDocument } from '../types/types';



export default function Transparency() {
  const {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    categories,
    filteredData,
  } = useFilteredData<TransparencyDocument>({
    data: transparencyData,
    searchField: 'title',
    categoryField: 'category',
  });

  // Group by year
  const groupedData = filteredData.reduce((acc, doc) => {
    const year = new Date(doc.date).getFullYear();
    if (!acc[year]) acc[year] = [];
    acc[year].push(doc);
    return acc;
  }, {} as Record<number, TransparencyDocument[]>);

  const sortedYears = Object.keys(groupedData).map(Number).sort((a, b) => b - a);

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <PageHeader
          title="Transparencia"
          subtitle="Accede a los informes financieros, de gestión y resultados de asambleas de ADAUPS."
        />

        {/* Filters and Search */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={itemVariants}
          className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200 mb-8 flex flex-col md:flex-row gap-4 justify-between items-center"
        >
          <div className="relative w-full md:w-2/3">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-11 pr-4 py-3 border-none bg-slate-50 rounded-xl leading-5 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm transition-all duration-300 font-sans"
              placeholder="Buscar documentos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex items-center w-full md:w-1/3">
            <div className="bg-slate-50 rounded-xl flex items-center px-4 py-1 w-full focus-within:ring-2 focus-within:ring-blue-500 transition-all duration-300">
              <Filter className="h-5 w-5 text-slate-400 mr-2" />
              <select
                className="block w-full py-2 text-base bg-transparent border-none focus:outline-none focus:ring-0 sm:text-sm text-slate-700 font-medium cursor-pointer font-sans"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        {/* Documents List */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={containerVariants}
          className="space-y-8"
        >
          {sortedYears.length > 0 ? (
            sortedYears.map(year => (
              <motion.div key={year} variants={itemVariants}>
                <h2 className="text-xl font-bold text-blue-950 mb-4 flex items-center">
                  <Calendar className="w-6 h-6 mr-3 text-blue-800" />
                  Gestión {year}
                </h2>
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                  <ul className="divide-y divide-slate-100">
                    {groupedData[year].map((doc) => (
                      <motion.li
                        variants={itemVariants}
                        key={doc.id}
                        className="hover:bg-slate-50 transition-colors group"
                      >
                        <div className="px-6 py-5 sm:px-8 flex items-center justify-between">
                          <div className="flex items-center min-w-0 flex-1">
                            <div className="flex-shrink-0 w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                              <FileText className="h-6 w-6" />
                            </div>
                            <div className="min-w-0 flex-1 px-6">
                              <p className="text-lg font-bold text-slate-900 truncate group-hover:text-blue-700 transition-colors mb-1">{doc.title}</p>
                              <div className="flex items-center text-sm text-slate-500 gap-3">
                                <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-semibold text-xs border border-slate-200">
                                  PDF
                                </span>
                                <span className="text-slate-300">•</span>
                                <span>
                                  Publicado: {new Date(doc.date).toLocaleDateString('es-ES', { month: 'long', year: 'numeric' }).replace(/^\w/, c => c.toUpperCase())}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="ml-4 flex-shrink-0">
                            <a
                              href={doc.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center px-4 py-2 border border-slate-200 rounded-lg shadow-sm text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300"
                              title="Descargar PDF"
                            >
                              <Download className="h-4 w-4 mr-2" aria-hidden="true" />
                              Descargar
                            </a>
                          </div>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div variants={itemVariants} className="bg-white rounded-3xl shadow-sm border border-slate-200 px-6 py-10 text-center">
              <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-10 w-10 text-slate-400" />
              </div>
              <p className="text-lg font-medium text-slate-900">No se encontraron documentos</p>
              <p className="text-slate-500 mt-1">Intenta con otros términos de búsqueda o categoría.</p>
            </motion.div>
          )}
        </motion.div>

      </div>
    </div>
  );
}
