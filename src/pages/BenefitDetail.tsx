import { useParams, Link, Navigate } from 'react-router-dom';
import { benefitsData } from '../data';
import { ArrowLeft, CheckCircle2, MapPin, Phone, Info, Sparkles, Target, Star, ShieldCheck } from 'lucide-react';
import { categoryIconMap, defaultCategoryIcon } from '../lib/icons';
import AnimateOnScroll from '../components/ui/AnimateOnScroll';

export default function BenefitDetail() {
  const { benefitId } = useParams<{ benefitId: string }>();
  const benefit = benefitsData.find(b => b.id === benefitId);

  if (!benefit) {
    return <Navigate to="/beneficios" replace />;
  }

  const IconComponent = categoryIconMap[benefit.category] || defaultCategoryIcon;

  const primaryDoc = benefit.documents && benefit.documents.length > 0 ? benefit.documents[0] : null;

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 selection:bg-emerald-200 overflow-hidden relative pb-20">
      
      {/* --- BACKGROUND FIGURES & PATTERNS --- */}
      {/* Patrón de Puntos Decorativos (Grid) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20" 
           style={{ backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

      {/* Figuras y Gradientes Abstractos (Blobs) */}
      <div className="absolute top-0 inset-x-0 h-[150vh] pointer-events-none overflow-hidden z-0 opacity-60">
        <div className="absolute top-[20%] right-[-5%] w-[35%] h-[50%] rounded-full bg-blue-300/40 blur-[140px] mix-blend-multiply"></div>
        <div className="absolute top-[60%] left-[20%] w-[30%] h-[30%] rounded-[100px] rotate-45 bg-amber-200/30 blur-[100px] mix-blend-multiply"></div>
      </div>

      {/* --- HERO BACKGROUND (Logo Gigante Super Visible) --- */}
      {benefit.images && benefit.images.length > 0 && (
        <div className="absolute top-0 left-0 w-full h-[90vh] pointer-events-none overflow-hidden z-0 flex items-start justify-end opacity-100 select-none">
          <img 
            src={benefit.images[0]} 
            alt="Fondo de marca" 
            className="w-full md:w-[110%] max-w-none transform -translate-y-[5%] translate-x-[5%] -rotate-3 drop-shadow-2xl"
            referrerPolicy="no-referrer"
          />
          {/* Capas de fundido direccional para asegurar legibilidad */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50/20 via-slate-50/80 to-slate-50"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/70 to-transparent"></div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        
        {/* Navbar interno */}
        <AnimateOnScroll>
          <div className="flex items-center justify-between mb-16">
            <Link to="/beneficios" className="inline-flex items-center px-4 py-2 rounded-xl text-sm font-bold text-slate-600 bg-white/80 hover:bg-white hover:text-emerald-700 backdrop-blur-md border border-slate-200 transition-all shadow-md hover:shadow-lg group">
              <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
              Volver a Beneficios
            </Link>
          </div>
        </AnimateOnScroll>

        {/* --- TÍTULO Y PRESENTACIÓN --- */}
        <div className="mb-20">
          <AnimateOnScroll delay={0.1}>
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-sm font-bold mb-6 shadow-sm">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 mr-2 -ml-1">
                <IconComponent className="w-3.5 h-3.5" />
              </span>
              {benefit.category}
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight leading-[1.1]">
              {benefit.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl leading-relaxed font-medium">
              {benefit.shortDescription}
            </p>
          </AnimateOnScroll>
        </div>

        {/* --- BENTO GRID LAYOUT (Tarjetas Multicolores y Contrastes) --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(180px,auto)]">

          {/* CARD 1: Acerca del Convenio (Fondo Blanco Puro) */}
          <AnimateOnScroll delay={0.2} className="md:col-span-8 md:row-span-2">
            <div className="h-full rounded-[2.5rem] bg-white p-8 md:p-12 shadow-2xl shadow-slate-300/60 border border-slate-200 hover:shadow-slate-300/80 transition-all relative overflow-hidden group">
              {/* Ornamento de fondo */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2 group-hover:bg-emerald-50 transition-colors duration-700"></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-10">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-white p-4 flex items-center justify-center shadow-lg shadow-slate-200/60 transform group-hover:-translate-y-2 transition-transform duration-500 border border-slate-100">
                    {benefit.images && benefit.images.length > 0 ? (
                      <img 
                        src={benefit.images[0]} 
                        alt={`Logo ${benefit.title}`} 
                        className="max-w-full max-h-full object-contain"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <Star className="w-12 h-12 text-slate-300" />
                    )}
                  </div>
                  <div className="hidden sm:flex w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 items-center justify-center shadow-inner">
                    <Sparkles className="w-6 h-6" />
                  </div>
                </div>
                
                <h2 className="text-3xl font-black text-slate-900 mb-6">Propuesta de Valor</h2>
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
                  {benefit.description}
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          {/* CARD 2: Contacto Rápido */}
          <AnimateOnScroll delay={0.3} className="md:col-span-4">
            <div className="h-full rounded-[2.5rem] bg-white border border-slate-200 p-8 flex flex-col justify-center shadow-2xl shadow-slate-300/60 hover:-translate-y-1 hover:shadow-slate-300/80 transition-all relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-slate-500 font-bold tracking-widest text-sm uppercase mb-6 flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  Contacto Directo
                </h3>
                <div className="text-3xl lg:text-4xl font-black text-slate-900 mb-2 leading-tight">
                  {benefit.contact.split('-').pop()?.trim() || benefit.contact}
                </div>
                <div className="text-slate-500 font-medium">Línea de atención exclusiva</div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* CARD 3: Cobertura (Azul Suave) */}
          <AnimateOnScroll delay={0.4} className="md:col-span-4">
            <div className="h-full rounded-[2.5rem] bg-blue-50 border border-blue-100 p-8 flex flex-col hover:bg-blue-100/50 transition-colors shadow-lg shadow-blue-100/50 relative overflow-hidden">
              <MapPin className="absolute -bottom-6 -right-6 w-40 h-40 text-blue-200/50 transform -rotate-12" />
              <h3 className="text-blue-600 font-bold tracking-widest text-sm uppercase mb-4 flex items-center relative z-10">
                <Target className="w-4 h-4 mr-2" />
                Ubicaciones
              </h3>
              <p className="text-blue-950 text-xl font-bold leading-relaxed relative z-10 mt-auto">
                {benefit.locations}
              </p>
            </div>
          </AnimateOnScroll>

          {/* CARD 4: Características Clave (ALTO CONTRASTE - OSCURO) */}
          {benefit.conditions && benefit.conditions.length > 0 && (
            <AnimateOnScroll delay={0.5} className="md:col-span-12">
              <div className="rounded-[2.5rem] bg-slate-900 shadow-2xl shadow-slate-900/40 p-8 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjMGYxNzJhIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDBMOCA4Wk04IDBMMCA4WiIgc3Ryb2tlPSIjMWUzYThhIiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD4KPC9zdmc+')] opacity-20"></div>
                <h3 className="text-3xl font-black text-white mb-10 flex items-center relative z-10">
                  <ShieldCheck className="w-8 h-8 mr-4 text-emerald-400" />
                  Garantías y Condiciones
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                  {benefit.conditions.map((condition, index) => (
                    <div key={index} className="flex items-start bg-slate-800/50 rounded-2xl p-5 border border-slate-700 hover:border-emerald-500/50 hover:bg-slate-800 transition-colors">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center mr-4 border border-emerald-500/30">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      </div>
                      <span className="text-slate-300 font-medium leading-relaxed">{condition}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          )}

          {/* CARD 5: Cómo Acceder (Gradiente Cálido) */}
          <AnimateOnScroll delay={0.6} className="md:col-span-12">
            <div className="rounded-[2.5rem] bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-100 shadow-xl shadow-amber-100/50 p-8 md:p-10 flex flex-col md:flex-row items-center gap-8">
              <div className="w-20 h-20 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 border border-amber-200 shadow-inner">
                <Info className="w-10 h-10 text-amber-600" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-amber-950 mb-3">Pasos para acceder al beneficio</h3>
                <p className="text-amber-800 text-xl font-medium leading-relaxed">{benefit.howToUse}</p>
              </div>
            </div>
          </AnimateOnScroll>

        </div>

        {/* --- CATÁLOGO INTERACTIVO (PDF VIEWER) --- */}
        {primaryDoc && (
          <AnimateOnScroll delay={0.7} className="mt-20">
            <div id="catalogo" className="scroll-mt-32">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
                <div>
                  <h2 className="text-4xl font-black text-slate-900 mb-2">Catálogo Interactivo</h2>
                  <p className="text-slate-500 font-medium">Explora los productos y servicios disponibles.</p>
                </div>
              </div>
              
              <div className="rounded-[2.5rem] bg-white border border-slate-200 overflow-hidden shadow-2xl shadow-slate-300/60">
                {/* Header tipo ventana de macOS */}
                <div className="h-14 bg-slate-100 flex items-center px-6 border-b border-slate-200">
                  <div className="flex space-x-2.5">
                    <div className="w-3.5 h-3.5 rounded-full bg-red-400 border border-red-500/20"></div>
                    <div className="w-3.5 h-3.5 rounded-full bg-yellow-400 border border-yellow-500/20"></div>
                    <div className="w-3.5 h-3.5 rounded-full bg-emerald-400 border border-emerald-500/20"></div>
                  </div>
                </div>
                {/* Contenedor del Iframe */}
                <div className="w-full h-[800px] bg-slate-200 relative">
                  <iframe 
                    src={`${primaryDoc.url}#view=FitH`} 
                    className="w-full h-full border-none"
                    title={primaryDoc.name}
                  ></iframe>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        )}

      </div>
    </div>
  );
}
