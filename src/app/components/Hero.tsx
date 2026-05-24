import { ImageWithFallback } from './figma/ImageWithFallback';
import { Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-[#F5F0E8] pt-20 pb-0 relative overflow-hidden">
      <div className="figma-container text-center flex flex-col items-center">
        {/* Badge pill */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 mb-8"
          style={{
            backgroundColor: 'white',
            borderRadius: '50px',
            border: '1px solid rgba(26,26,46,0.10)',
            fontSize: '13px',
            color: '#1A1A2E',
            fontWeight: 500
          }}
        >
          <span
            style={{
              display: 'inline-block',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#D4A5A5'
            }}
          />
          The #1 platform for Sri Lankan beauty businesses
        </div>

        {/* Headline */}
        <h1
          style={{
            fontSize: 'clamp(42px, 6vw, 80px)',
            fontWeight: 700,
            color: '#1A1A2E',
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            marginBottom: '20px',
            maxWidth: '860px'
          }}
        >
          The #1 software in Sri Lanka for Salons and Spas
        </h1>

        {/* Sub-headline */}
        <p
          style={{
            fontSize: '18px',
            color: '#1A1A2E',
            lineHeight: 1.65,
            marginBottom: '36px',
            maxWidth: '520px',
            opacity: 0.72
          }}
        >
          Simple, flexible and powerful booking software for your business.
        </p>

        {/* CTAs */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <button
            className="transition-all duration-200 hover:opacity-90"
            style={{
              backgroundColor: '#C8A2A2',
              color: 'white',
              border: 'none',
              borderRadius: '30px',
              fontSize: '15px',
              fontWeight: 600,
              padding: '13px 26px',
              cursor: 'pointer'
            }}
          >
            Get started — it's free
          </button>
          <button
            className="transition-colors duration-200 hover:bg-white/80 flex items-center justify-center gap-2"
            style={{
              backgroundColor: 'white',
              color: '#1A1A2E',
              border: '1px solid rgba(26,26,46,0.12)',
              borderRadius: '30px',
              fontSize: '15px',
              fontWeight: 600,
              padding: '13px 26px',
              cursor: 'pointer'
            }}
          >
            <Play size={16} />
            Watch overview
          </button>
        </div>

        {/* Dashboard screenshot — flush bottom, rounded top */}
        <div
          className="w-full max-w-[1100px] mx-auto rounded-t-2xl overflow-hidden"
          style={{
            boxShadow: '0 -4px 40px rgba(26,26,46,0.15)',
            border: '1px solid rgba(0,0,0,0.08)',
            borderBottom: 'none'
          }}
        >
          <ImageWithFallback
            src="/images/hero_laptop_woman.png"
            alt="BeauTech Calendar Dashboard"
            className="w-full h-auto object-cover object-top"
            style={{ maxHeight: '520px' }}
          />
        </div>
      </div>
    </section>
  );
}
