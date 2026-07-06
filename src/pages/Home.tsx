import HeroSection from '../components/home/HeroSection';
import EventsSection from '../components/home/EventsSection';
import NewsSection from '../components/home/NewsSection';
import ServicesPreview from '../components/home/ServicesPreview';
import BenefitsCarousel from '../components/home/BenefitsCarousel';
import PromotionsSection from '../components/home/PromotionsSection';
import Seo from '../components/Seo';
import JsonLd from '../components/JsonLd';
import { eventsData } from '../data';
import { DEFAULT_DESCRIPTION, eventJsonLd } from '../lib/seo';

export default function Home() {
  return (
    <div className="bg-slate-50 overflow-hidden">
      <Seo title="ADAUPS - Asociación de Docentes, Administrativos y Servicios UPS" description={DEFAULT_DESCRIPTION} path="/" />
      <JsonLd data={eventsData.map(eventJsonLd)} />
      <HeroSection />
      <ServicesPreview />
      <EventsSection />
      <PromotionsSection />
      <NewsSection />
      <BenefitsCarousel />
    </div>
  );
}
