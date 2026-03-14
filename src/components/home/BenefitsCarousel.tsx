import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import SectionHeading from '../ui/SectionHeading';

type CarouselItem = {
  id: string;
  img?: string;
  text?: string;
  alt?: string;
  label: string;
};

const carouselItems: CarouselItem[] = [
  { id: 'farmacias', img: '/images/SANA-SANA.webp', alt: 'Sana Sana', label: 'Farmacias SanaSana' },
  { id: 'farmacias', img: 'https://scalashopping.com/wp-content/uploads/2021/09/logopharmacys.png', alt: 'pharmacys', label: 'Farmacias Pharmacy' },
  { id: 'farmacias', img: 'https://cruzazul.vtexassets.com/arquivos/logo_cruz.svg', alt: 'cruzazul', label: 'Farmacias Cruz Azul' },
  { id: 'farmacias', img: '/images/economicas.png', alt: 'economicas', label: 'Farmacias economicas' },
  { id: 'farmacias', img: 'https://muchomejorecuador.org.ec/wp-content/uploads/2019/08/FYBECA-LOGO-01.jpg',  alt: 'fybeca', label: 'Farmacias Fybeca' },


  { id: 'Tecnología',img: 'https://tecnomega.com.ec/images/TM.svg', alt: 'tecnomega', label: 'Tecnología' },
  { id: 'Seguro',img: 'https://edge.sitecorecloud.io/zurichinsurf8c0-zwpshared-prod-d824/media/project/zurich-headless/shared/corporate/zurich-logo-blue.svg?iar=0', alt: 'ZURICH', label: 'Seguro Zurich' },
  { id: 'Papelería',img:'https://dilipa.com.ec/img/dilipa-logo-1682548012.jpg', alt: 'DILIPA', label: 'Papelería' },
  { id: 'Optica',img:'https://scontent.fuio11-2.fna.fbcdn.net/v/t39.30808-6/329026014_491004343246248_7956105596676637663_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=UnOdJmvekPsQ7kNvwGyomqL&_nc_oc=Admj1ZfPn7oFZoG_odbIif9OwOrTSlif0Z40SZ2ozAQ1rVU3K3w3gS7Ptu4W0quaIAs&_nc_zt=23&_nc_ht=scontent.fuio11-2.fna&_nc_gid=PXYfTUw29Z3GQ3YwRG-4kQ&_nc_ss=8&oh=00_Afw0vjyAgvoLzdw5_l0rRJlhovwQej3GU5A_rGGufikwKw&oe=69BA2755', alt: 'Lens Look', label: 'Optica Lens Look' },

];

export default function BenefitsCarousel() {
  return (
    <section className="py-14 bg-white border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <SectionHeading
          title="Convenios Destacados"
          subtitle="Como socio de ADAUPS, tienes acceso a una red de establecimientos con descuentos y facilidades de pago exclusivas."
        />
      </div>

      {/* Infinite Carousel */}
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee flex whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-6 pr-6">
              {carouselItems.map((item) => (
                <Link
                  key={item.id}
                  to={`/beneficios/${item.id}`}
                  className="flex flex-col items-center justify-center w-56 h-40 p-6 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-100 flex-shrink-0"
                >
                  {item.img ? (
                    <img src={item.img} alt={item.alt} width="120" height="48" className="h-12 w-auto object-contain mb-3" referrerPolicy="no-referrer" />
                  ) : (
                    <div className="h-12 flex items-center justify-center mb-3 text-blue-600">
                      <span className="font-black text-2xl tracking-tighter">{item.text}</span>
                    </div>
                  )}
                  <span className="text-sm font-bold text-slate-600 text-center">{item.label}</span>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        className="mt-8 text-center"
      >
        <Link to="/beneficios" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full text-blue-600 bg-blue-50 hover:bg-blue-100 transition-colors">
          Explorar todos los convenios <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </motion.div>
    </section>
  );
}
