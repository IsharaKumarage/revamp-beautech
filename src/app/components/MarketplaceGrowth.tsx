import { Globe, Clock, TrendingUp, Star } from 'lucide-react';
import { motion } from 'motion/react';

const benefits = [
  {
    icon: Globe,
    title: 'Promote your business',
    description:
      'Get discovered by new clients searching for beauty services near them. Your business profile appears across search engines and the BeauTech marketplace.',
  },
  {
    icon: TrendingUp,
    title: 'Increase online visibility',
    description:
      'Reach thousands of potential clients in your area. Optimised profiles and service listings make it easy for clients to find and choose you.',
  },
  {
    icon: Clock,
    title: '24/7 self-booking',
    description:
      'Clients can book anytime — 3am or 3pm. Your calendar fills up even while you sleep, without a single phone call.',
  },
  {
    icon: Star,
    title: 'Build social proof',
    description:
      'Automatically collect and display Google and Facebook reviews. More 5-star ratings mean more bookings, more trust, more growth.',
  },
];

export default function MarketplaceGrowth() {
  return (
    <section className="px-8 py-24 bg-[#1A1A2E] relative overflow-hidden">
      {/* Decorative blobs */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #C8A2A2 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-8 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #C8A2A2 0%, transparent 70%)' }}
      />

      <div className="max-w-[1280px] mx-auto relative z-10">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-end mb-16">
          <div>
            <div
              className="inline-block px-5 py-2.5 mb-6"
              style={{
                backgroundColor: 'rgba(200,162,162,0.15)',
                color: '#C8A2A2',
                borderRadius: '50px',
                fontSize: '14px',
                fontWeight: 500,
                border: '1px solid rgba(200,162,162,0.2)',
              }}
            >
              Marketplace & Growth
            </div>
            <h2
              style={{
                fontSize: 'clamp(32px, 4.5vw, 56px)',
                fontWeight: 700,
                color: '#FFFFFF',
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
              }}
            >
              Reach millions of new clients
            </h2>
          </div>
          <div>
            <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.75 }}>
              BeauTech puts your business in front of clients actively searching for beauty services — online and in the BeauTech marketplace. More visibility means more bookings, automatically.
            </p>
          </div>
        </div>

        {/* Benefit cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 group hover:-translate-y-1 transition-all duration-300"
              style={{
                backgroundColor: 'rgba(255,255,255,0.06)',
                borderRadius: '20px',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <div
                className="mb-5 flex items-center justify-center"
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  backgroundColor: 'rgba(200,162,162,0.15)',
                }}
              >
                <b.icon size={24} style={{ color: '#C8A2A2' }} />
              </div>
              <h3
                style={{
                  fontSize: '18px',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  marginBottom: '10px',
                  lineHeight: 1.3,
                }}
              >
                {b.title}
              </h3>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}>
                {b.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA row */}
        <div className="flex flex-col sm:flex-row items-center justify-between mt-14 pt-10 gap-6"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
        >
          <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.6)' }}>
            Over <strong style={{ color: '#FFFFFF' }}>500 Sri Lankan businesses</strong> already growing with BeauTech
          </p>
          <div className="flex gap-3">
            <button
              className="transition-all duration-200 hover:opacity-90"
              style={{
                backgroundColor: '#C8A2A2',
                color: 'white',
                border: 'none',
                borderRadius: '30px',
                fontSize: '15px',
                fontWeight: 600,
                padding: '13px 28px',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
            >
              Get started now
            </button>
            <button
              className="transition-all duration-200 hover:bg-white/10"
              style={{
                backgroundColor: 'transparent',
                color: 'rgba(255,255,255,0.75)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '30px',
                fontSize: '15px',
                fontWeight: 500,
                padding: '13px 28px',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
            >
              Book a demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
