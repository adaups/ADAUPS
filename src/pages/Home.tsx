import HeroSection from '../components/home/HeroSection';
import EventsSection from '../components/home/EventsSection';
import NewsSection from '../components/home/NewsSection';
import ServicesPreview from '../components/home/ServicesPreview';
import BenefitsCarousel from '../components/home/BenefitsCarousel';
import PromotionsSection from '../components/home/PromotionsSection';

export default function Home() {
  return (
    <div className="bg-slate-50 overflow-hidden">
      <HeroSection />
      <PromotionsSection />
      <EventsSection />
      <NewsSection />
      <ServicesPreview />
      <BenefitsCarousel />
    </div>
  );
}
