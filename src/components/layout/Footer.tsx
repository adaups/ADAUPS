import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <img className="h-12 w-auto mb-4 bg-white p-2 rounded" src="/images/Logo_ADAUPS.webp" alt="ADAUPS Logo" width={48} height={48} loading="lazy" />
            <p className="text-sm">
              Asociación de Docentes, Administrativos y Servicios de la Universidad Politécnica Salesiana - Sede Quito.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/sobre-adaups" className="hover:text-white transition-colors">Sobre ADAUPS</Link></li>
              <li><Link to="/servicios" className="hover:text-white transition-colors">Servicios</Link></li>
              <li><Link to="/beneficios" className="hover:text-white transition-colors">Beneficios y Convenios</Link></li>
              <li><Link to="/transparencia" className="hover:text-white transition-colors">Transparencia</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Servicios Destacados</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/servicios/prestamo-ordinario" className="hover:text-white transition-colors">Préstamos Ordinarios</Link></li>
              <li><Link to="/servicios/prestamo-emergente" className="hover:text-white transition-colors">Préstamos Emergentes</Link></li>
              <li><Link to="/servicios/ayudas-economicas" className="hover:text-white transition-colors">Ayudas Económicas</Link></li>
              <li><a href="https://finanzas.adaups.org" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Finanzas en línea</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Contacto</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <Phone className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                <span>Campus El Girón<br/>Ext. 2154</span>
              </li>
              <li className="flex items-start mt-2">
                <Phone className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                <span>Campus Sur<br/>Ext. 2353</span>
              </li>
              <li className="mt-4">
                <Link to="/contacto" className="text-blue-400 hover:text-blue-300 transition-colors">Ver todos los contactos &rarr;</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-800 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} ADAUPS. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
