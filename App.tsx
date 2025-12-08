import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CookieConsent } from './components/CookieConsent';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ContactPage } from './pages/ContactPage';
import { AboutPage } from './pages/AboutPage';
import { AreasPage } from './pages/AreasPage';
import { PartnershipsPage } from './pages/PartnershipsPage';
import { WhyChoosePage } from './pages/WhyChoosePage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { FAQsPage } from './pages/FAQsPage';
import { DealPage } from './pages/DealPage';
import { DoverPage } from './pages/DoverPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-50 text-brand-slate font-body">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/areas" element={<AreasPage />} />
            <Route path="/partnerships" element={<PartnershipsPage />} />
            <Route path="/why-choose-us" element={<WhyChoosePage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/faqs" element={<FAQsPage />} />
            <Route path="/builders-deal" element={<DealPage />} />
            <Route path="/builders-dover" element={<DoverPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          </Routes>
        </main>
        <Footer />
        <CookieConsent />
      </div>
    </Router>
  );
}

export default App;