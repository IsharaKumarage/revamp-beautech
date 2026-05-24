import { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import StatsStrip from './components/StatsStrip';
import TrustedSalons from './components/TrustedSalons';
import Certifications from './components/Certifications';
import BusinessTypes from './components/BusinessTypes';
import Features from './components/Features';
import AllInOneAd from './components/AllInOneAd';
import MarketplaceGrowth from './components/MarketplaceGrowth';
import HowItWorks from './components/HowItWorks';
import GrowthStats from './components/GrowthStats';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import CustomerSuccess from './components/CustomerSuccess';
import FAQ from './components/FAQ';
import DualApps from './components/DualApps';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';
import Blog from './components/Blog';
import Login from './components/Login';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {currentPage !== 'login' && <Navigation currentPage={currentPage} onNavigate={handleNavigate} />}

      {currentPage === 'home' && (
        <>
          {/* 1. Hero — headline + CTAs */}
          <Hero />
          {/* 2. Trust signals — ratings, stats, partner logos */}
          <StatsStrip />
          <TrustedSalons />
          <Certifications />
          {/* 3. Business type solution cards — tabbed verticals */}
          <BusinessTypes />
          {/* 4. All-in-one ad — software overview block */}
          <AllInOneAd />
          {/* 5. Core features — Book more / Get paid faster / Run smarter */}
          <Features />
          {/* 6. Marketplace & growth — reach, visibility, 24/7 booking */}
          <MarketplaceGrowth />
          {/* 7. How it works — simple 4-step setup */}
          <HowItWorks />
          {/* 8. Growth stats — real results from BeauTech businesses */}
          <GrowthStats />
          {/* 9. Pricing */}
          <Pricing />
          {/* 10. Social proof — testimonials */}
          <Testimonials />
          {/* 11. Customer success & support */}
          <CustomerSuccess />
          {/* 12. FAQ */}
          <FAQ />
          {/* 13. Final CTA */}
          <CTABanner />
          {/* 14. Mobile apps — business app download */}
          <DualApps />
        </>
      )}

      {currentPage === 'blog' && <Blog />}

      {currentPage === 'login' && <Login onNavigate={handleNavigate} />}

      {/* Placeholder pages */}
      {!['home', 'blog', 'login'].includes(currentPage) && (
        <div className="min-h-[60vh] flex flex-col items-center justify-center px-8">
          <div
            style={{
              fontSize: '14px',
              fontWeight: 500,
              color: '#9CA3AF',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '16px',
            }}
          >
            Coming soon
          </div>
          <h1
            style={{
              fontSize: 'clamp(32px, 5vw, 56px)',
              fontWeight: 700,
              color: '#1A1A2E',
              letterSpacing: '-0.03em',
              marginBottom: '16px',
              textAlign: 'center',
            }}
          >
            {currentPage.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
          </h1>
          <p style={{ fontSize: '17px', color: '#6B6B8A', marginBottom: '32px', textAlign: 'center' }}>
            This page is under construction. Check back soon.
          </p>
          <button
            onClick={() => handleNavigate('home')}
            style={{
              backgroundColor: '#1A1A2E',
              color: 'white',
              border: 'none',
              borderRadius: '30px',
              fontSize: '15px',
              fontWeight: 600,
              padding: '13px 28px',
              cursor: 'pointer',
            }}
          >
            Back to home
          </button>
        </div>
      )}

      {currentPage !== 'login' && <Footer />}
    </div>
  );
}
