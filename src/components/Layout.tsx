import { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { Outlet } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import JsonLd from './JsonLd';
import { useScrollToTop } from '../hooks/useScrollToTop';
import { organizationJsonLd, SITE_NAME, websiteJsonLd } from '../lib/seo';

export default function Layout() {
  useScrollToTop();

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-900">
      <Helmet titleTemplate="%s | ADAUPS" defaultTitle={SITE_NAME} />
      <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
      <Navbar />
      <main className="flex-grow">
        <Suspense fallback={
          <div className="min-h-[70vh] flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
          </div>
        }>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
