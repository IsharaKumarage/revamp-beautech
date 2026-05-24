import { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const stories = [
  { id: 'book', label: 'Book more' },
  { id: 'pay', label: 'Get paid faster' },
  { id: 'run', label: 'Run smarter' },
];

const allFeatures = [
  {
    story: 'book',
    tag: 'Online Booking',
    headline: 'Let clients book 24/7, without lifting a finger',
    description:
      'Your branded booking page works around the clock, letting clients book, reschedule, or cancel from any device — no phone calls needed.',
    bullets: [
      'Instant SMS & WhatsApp booking confirmations',
      'Clients reschedule or cancel with one tap',
      'Real-time availability always up to date',
      'Embed your booking widget on any website',
    ],
    image:
      'https://images.unsplash.com/photo-1655298801080-0bfffe5d8db3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    alt: 'Salon booking calendar app interface',
    imageRight: true,
    bg: '#ffffff',
  },
  {
    story: 'book',
    tag: 'Marketing',
    headline: 'Grow your client base on autopilot',
    description:
      'Keep clients coming back with smart, automated campaigns. Reach them in Sinhala, Tamil, or English — right on their phone.',
    bullets: [
      'Automated reminders cut no-shows by up to 40%',
      'Birthday & loyalty campaigns that feel personal',
      'SMS & WhatsApp in Sinhala, Tamil, or English',
      'Google & Instagram review collection built in',
    ],
    image:
      'https://images.unsplash.com/photo-1539842494110-cc5e1c11c1b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    alt: 'Beauty salon marketing on social media',
    imageRight: false,
    bg: '#F5F0E8',
  },
  {
    story: 'pay',
    tag: 'Payments & POS',
    headline: 'Get paid faster, every way your clients prefer',
    description:
      'Accept payments in-person or online. From Visa to FriMi, PayHere, and Genie — every local and international payment method is covered.',
    bullets: [
      'Tap-to-pay with NFC card readers',
      'Local gateways: Genie, FriMi, PayHere',
      'No-show protection with online deposits',
      'Automated digital invoices sent instantly',
    ],
    image:
      'https://images.unsplash.com/photo-1750263160611-46a82aea9621?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    alt: 'Payment terminal at a beauty salon',
    imageRight: true,
    bg: '#ffffff',
  },
  {
    story: 'pay',
    tag: 'Packages & Memberships',
    headline: 'Sell more with packages, vouchers, and memberships',
    description:
      'Increase upfront revenue and lock in loyal clients with pre-paid service bundles, gift vouchers, and recurring membership plans.',
    bullets: [
      'Pre-paid service package bundles',
      'Gift vouchers for any amount',
      'Monthly recurring membership billing',
      'Loyalty points redeemable on any service',
    ],
    image:
      'https://images.unsplash.com/photo-1582582450303-48cc2cfa2c43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    alt: 'Salon membership and packages',
    imageRight: false,
    bg: '#F5F0E8',
  },
  {
    story: 'run',
    tag: 'Staff Management',
    headline: 'Your team, perfectly organised and motivated',
    description:
      'Build rosters, track performance, and pay your team accurately — all from one dashboard. Works great for solo stylists and large multi-location teams alike.',
    bullets: [
      'Drag-and-drop shift scheduling',
      'Automatic commission tracking per service',
      'Role-based permissions and access levels',
      'Performance reports for every team member',
    ],
    image:
      'https://images.unsplash.com/photo-1604398094586-8f858275ba4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    alt: 'Salon staff scheduling management',
    imageRight: true,
    bg: '#ffffff',
  },
  {
    story: 'run',
    tag: 'Analytics & Reports',
    headline: 'Know exactly how your business is performing',
    description:
      'Real-time dashboards give you a clear view of revenue, bookings, team performance, and client retention — so you can make smarter decisions faster.',
    bullets: [
      'Revenue by service, staff, and period',
      'Client retention & rebooking rate metrics',
      'Inventory usage and product sell-through',
      'Export reports for your accountant',
    ],
    image:
      'https://images.unsplash.com/photo-1593762886180-55dc58d5adbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    alt: 'Analytics dashboard for beauty business',
    imageRight: false,
    bg: '#F5F0E8',
  },
];

function TextBlock({ feature }: { feature: typeof allFeatures[0] }) {
  return (
    <div>
      <div
        className="inline-block px-4 py-2 mb-6"
        style={{
          backgroundColor: 'rgba(200,162,162,0.12)',
          color: '#C8A2A2',
          borderRadius: '50px',
          fontSize: '13px',
          fontWeight: 600,
          letterSpacing: '0.02em',
        }}
      >
        {feature.tag}
      </div>
      <h3
        style={{
          fontSize: 'clamp(28px, 3.5vw, 44px)',
          fontWeight: 700,
          color: '#1A1A2E',
          letterSpacing: '-0.03em',
          lineHeight: 1.15,
          marginBottom: '16px',
        }}
      >
        {feature.headline}
      </h3>
      <p style={{ fontSize: '17px', color: '#6B6B8A', lineHeight: 1.75, marginBottom: '28px' }}>
        {feature.description}
      </p>
      <div className="space-y-4 mb-8">
        {feature.bullets.map((bullet, i) => (
          <div key={i} className="flex items-start gap-3">
            <div
              className="flex items-center justify-center flex-shrink-0"
              style={{
                width: '22px',
                height: '22px',
                backgroundColor: 'rgba(200,162,162,0.15)',
                borderRadius: '50%',
                marginTop: '2px',
              }}
            >
              <Check size={12} style={{ color: '#C8A2A2', strokeWidth: 3 }} />
            </div>
            <span style={{ fontSize: '15px', color: '#4B5563', lineHeight: 1.6 }}>{bullet}</span>
          </div>
        ))}
      </div>
      <a
        href="#"
        className="inline-flex items-center gap-2 group"
        style={{ color: '#C8A2A2', fontSize: '15px', fontWeight: 600, textDecoration: 'none' }}
      >
        Learn more
        <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
      </a>
    </div>
  );
}

function ImageBlock({ feature }: { feature: typeof allFeatures[0] }) {
  return (
    <div
      className="overflow-hidden"
      style={{ borderRadius: '24px', boxShadow: '0 20px 60px rgba(26,26,46,0.12)' }}
    >
      <ImageWithFallback
        src={feature.image}
        alt={feature.alt}
        className="w-full h-auto object-cover"
        style={{ aspectRatio: '4/3', display: 'block' }}
      />
    </div>
  );
}

export default function Features() {
  const [activeStory, setActiveStory] = useState('book');
  const visible = allFeatures.filter((f) => f.story === activeStory);

  return (
    <section id="features">
      {/* Section header + story tabs */}
      <div className="px-8 py-20 bg-white text-center border-b" style={{ borderColor: 'rgba(0,0,0,0.05)' }}>
        <div
          className="inline-block px-5 py-2.5 mb-6"
          style={{
            backgroundColor: 'rgba(200,162,162,0.12)',
            color: '#9E8080',
            borderRadius: '50px',
            fontSize: '14px',
            fontWeight: 500,
          }}
        >
          Everything you need
        </div>
        <h2
          style={{
            fontSize: 'clamp(36px, 5vw, 60px)',
            fontWeight: 700,
            color: '#1A1A2E',
            marginBottom: '16px',
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
          }}
        >
          One platform, every tool
        </h2>
        <p
          style={{
            fontSize: '18px',
            color: '#6B6B8A',
            maxWidth: '520px',
            margin: '0 auto 36px',
            lineHeight: 1.7,
          }}
        >
          All the features you need to run a successful salon or spa, built specifically for Sri Lanka
        </p>

        {/* Story tabs */}
        <div className="inline-flex gap-1 p-1.5" style={{ backgroundColor: '#F5F0E8', borderRadius: '50px' }}>
          {stories.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveStory(s.id)}
              className="px-6 py-2.5 transition-all duration-200"
              style={{
                borderRadius: '50px',
                fontSize: '15px',
                fontWeight: 500,
                border: 'none',
                cursor: 'pointer',
                backgroundColor: activeStory === s.id ? '#1A1A2E' : 'transparent',
                color: activeStory === s.id ? 'white' : '#6B6B8A',
              }}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* Alternating feature sections */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {visible.map((feature, index) => (
            <motion.div
              key={`${activeStory}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="px-8 py-20"
              style={{ backgroundColor: feature.bg }}
            >
              <div className="max-w-[1280px] mx-auto">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                  {feature.imageRight ? (
                    <>
                      <TextBlock feature={feature} />
                      <ImageBlock feature={feature} />
                    </>
                  ) : (
                    <>
                      <ImageBlock feature={feature} />
                      <TextBlock feature={feature} />
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
