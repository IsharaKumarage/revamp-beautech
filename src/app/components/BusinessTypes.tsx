import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const types = [
  {
    id: 'salon',
    label: 'Salon',
    headline: 'Run every chair, room, and stylist with confidence',
    description:
      'From booking to checkout, give your hair salon a smarter backbone. Manage multiple stylists, track retail sales, and delight clients with a professional online presence.',
    bullets: [
      'Online booking for every stylist independently',
      'Chair rental tracking & commission splits',
      'Retail product inventory & low-stock alerts',
      'Client history, patch test records & notes',
    ],
    image: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    alt: 'Modern hair salon interior',
  },
  {
    id: 'barber',
    label: 'Barber',
    headline: 'Pack your calendar and keep clients coming back',
    description:
      'Built for barbers who take their craft seriously. Manage walk-ins alongside bookings, track your busiest hours, and never miss a repeat client again.',
    bullets: [
      'Walk-in queue management alongside online slots',
      'Loyalty stamps and repeat client tracking',
      'Service time blocking per barber',
      'WhatsApp & SMS reminder system',
    ],
    image: 'https://images.unsplash.com/photo-1654097801176-cb1795fd0c5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    alt: 'Barber cutting hair at a barbershop',
  },
  {
    id: 'nails',
    label: 'Nails',
    headline: 'More bookings, zero scheduling chaos',
    description:
      'Designed for nail techs who work solo or in a team. Fill gaps in your calendar automatically and collect deposits to protect your time.',
    bullets: [
      'Deposits & cancellation protection built in',
      'Service duration padding between clients',
      'Photo gallery linked to client profiles',
      'Package deals and gift vouchers',
    ],
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    alt: 'Nail salon manicure treatment',
  },
  {
    id: 'spa',
    label: 'Spa & Sauna',
    headline: 'Elevate your guest experience end to end',
    description:
      'From the first booking to the final checkout, give your spa clients a seamless, premium journey. Manage treatment rooms, therapists, and packages with ease.',
    bullets: [
      'Multi-room and resource scheduling',
      'Couples & group booking support',
      'Membership plans and wellness packages',
      'Digital intake forms & consultation notes',
    ],
    image: 'https://images.unsplash.com/photo-1767350510090-137a6ce252c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    alt: 'Luxury spa and wellness centre',
  },
  {
    id: 'fitness',
    label: 'Fitness',
    headline: 'Grow your studio without the admin headache',
    description:
      'Manage class timetables, memberships, and personal training sessions from one dashboard. Get paid on time, every time.',
    bullets: [
      'Class and session timetable management',
      'Recurring membership billing',
      'Attendance tracking per class',
      'Trainer commission & performance reports',
    ],
    image: 'https://images.unsplash.com/photo-1671581081519-321ab53e0dac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    alt: 'Fitness and yoga studio',
  },
  {
    id: 'massage',
    label: 'Massage',
    headline: 'Less admin, more time for what matters',
    description:
      'Let clients book their preferred therapist online 24/7. Collect health intake forms digitally and keep every client record in one safe place.',
    bullets: [
      '24/7 online booking with therapist preference',
      'Digital health & consultation intake forms',
      'No-show deposits and late-cancel fees',
      'Package sessions and pre-pay bundles',
    ],
    image: 'https://images.unsplash.com/photo-1582582450303-48cc2cfa2c43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    alt: 'Massage and wellness therapy',
  },
];

export default function BusinessTypes() {
  const [active, setActive] = useState('salon');
  const current = types.find((t) => t.id === active) || types[0];

  return (
    <section className="px-8 py-24 bg-[#F5F0E8]">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div
            className="inline-block px-5 py-2.5 mb-6"
            style={{
              backgroundColor: 'rgba(200,162,162,0.15)',
              color: '#9E8080',
              borderRadius: '50px',
              fontSize: '14px',
              fontWeight: 500,
            }}
          >
            Built for every beauty business
          </div>
          <h2
            style={{
              fontSize: 'clamp(32px, 4.5vw, 56px)',
              fontWeight: 700,
              color: '#1A1A2E',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              marginBottom: '14px',
            }}
          >
            One platform, every vertical
          </h2>
          <p style={{ fontSize: '17px', color: '#6B6B8A', maxWidth: '500px', margin: '0 auto', lineHeight: 1.7 }}>
            Whether you run a single chair or a multi-location group, BeauTech adapts to your business type.
          </p>
        </div>

        {/* Tab nav */}
        <div
          className="flex flex-wrap justify-center gap-2 mb-12"
          role="tablist"
        >
          {types.map((t) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={active === t.id}
              onClick={() => setActive(t.id)}
              className="px-5 py-2.5 transition-all duration-200"
              style={{
                borderRadius: '50px',
                fontSize: '14px',
                fontWeight: 500,
                border: 'none',
                cursor: 'pointer',
                backgroundColor: active === t.id ? '#1A1A2E' : 'white',
                color: active === t.id ? 'white' : '#4B5563',
                boxShadow: active === t.id ? '0 4px 16px rgba(26,26,46,0.18)' : 'none',
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Content panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="bg-white rounded-[32px] overflow-hidden"
            style={{ boxShadow: '0 8px 40px rgba(26,26,46,0.08)', border: '1px solid rgba(26,26,46,0.06)' }}
          >
            <div className="grid lg:grid-cols-2">
              {/* Text side */}
              <div className="p-12 lg:p-16 flex flex-col justify-center">
                <h3
                  style={{
                    fontSize: 'clamp(24px, 3vw, 36px)',
                    fontWeight: 700,
                    color: '#1A1A2E',
                    letterSpacing: '-0.025em',
                    lineHeight: 1.2,
                    marginBottom: '14px',
                  }}
                >
                  {current.headline}
                </h3>
                <p style={{ fontSize: '16px', color: '#6B6B8A', lineHeight: 1.75, marginBottom: '24px' }}>
                  {current.description}
                </p>
                <ul className="space-y-3 mb-10">
                  {current.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span
                        className="flex-shrink-0 flex items-center justify-center"
                        style={{
                          width: '20px',
                          height: '20px',
                          borderRadius: '50%',
                          backgroundColor: 'rgba(200,162,162,0.15)',
                          marginTop: '2px',
                        }}
                      >
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                          <path d="M1 4L3.5 6.5L9 1" stroke="#C8A2A2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span style={{ fontSize: '15px', color: '#4B5563', lineHeight: 1.6 }}>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  <button
                    className="inline-flex items-center gap-2 transition-all duration-200 hover:opacity-90"
                    style={{
                      backgroundColor: '#C8A2A2',
                      color: 'white',
                      border: 'none',
                      borderRadius: '30px',
                      fontSize: '15px',
                      fontWeight: 600,
                      padding: '12px 24px',
                      cursor: 'pointer',
                    }}
                  >
                    Get started now
                  </button>
                  <button
                    className="inline-flex items-center gap-2 transition-all duration-200 hover:bg-gray-50 group"
                    style={{
                      backgroundColor: 'transparent',
                      color: '#1A1A2E',
                      border: '1px solid rgba(26,26,46,0.15)',
                      borderRadius: '30px',
                      fontSize: '15px',
                      fontWeight: 500,
                      padding: '12px 24px',
                      cursor: 'pointer',
                    }}
                  >
                    Explore features
                    <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                  </button>
                </div>
              </div>

              {/* Image side */}
              <div className="relative min-h-[400px] lg:min-h-0">
                <ImageWithFallback
                  src={current.image}
                  alt={current.alt}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Gradient overlay bottom */}
                <div
                  className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
                  style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.25), transparent)' }}
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
