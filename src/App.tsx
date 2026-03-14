import { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const Benefits = lazy(() => import('./pages/Benefits'));
const BenefitDetail = lazy(() => import('./pages/BenefitDetail'));
const Transparency = lazy(() => import('./pages/Transparency'));
const News = lazy(() => import('./pages/News'));
const NewsDetail = lazy(() => import('./pages/NewsDetail'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="sobre-adaups" element={<About />} />
          
          <Route path="servicios">
            <Route index element={<Services />} />
            <Route path=":serviceId" element={<ServiceDetail />} />
          </Route>
          
          <Route path="beneficios">
            <Route index element={<Benefits />} />
            <Route path=":benefitId" element={<BenefitDetail />} />
          </Route>
          
          <Route path="transparencia" element={<Transparency />} />
          <Route path="noticias">
            <Route index element={<News />} />
            <Route path=":newsId" element={<NewsDetail />} />
          </Route>
          <Route path="contacto" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
