import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import testimonialImg from '../../imports/testimonial image.png';

const smallTestimonials = [
  {
    quote: "BeauTech has completely transformed how we run our salon. Online bookings have increased by 40% and our clients love the automated reminders.",
    author: 'Dilani Perera',
    role: 'Owner, Luxe Beauty Bar, Colombo',
    initials: 'DP'
  },
  {
    quote: "The payment processing is seamless and the analytics help us make better business decisions. Best investment we've made for our spa.",
    author: 'Nimal Rajapaksa',
    role: 'Manager, Serenity Spa, Kandy',
    initials: 'NR'
  },
  {
    quote: "We switched from three different tools to just BeauTech. It's saved us hours every week and our staff actually enjoys using it.",
    author: 'Chamari Silva',
    role: 'Founder, Bloom Salon, Galle',
    initials: 'CS'
  }
];

export default function Testimonials() {
  return (
    <section className="px-8 py-24 bg-white">
      <div className="max-w-[1280px] mx-auto">

        {/* Section header */}
        <div className="mb-14">
          <div
            className="inline-block px-5 py-2.5 mb-6"
            style={{
              backgroundColor: '#FCEEF3',
              color: '#B54D71',
              borderRadius: '50px',
              fontSize: '14px',
              fontWeight: 500
            }}
          >
            Testimonials
          </div>
          <h2
            style={{
              fontSize: 'clamp(32px, 4vw, 52px)',
              fontWeight: 700,
              color: '#1A1A2E',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              maxWidth: '600px'
            }}
          >
            Top-rated by Sri Lankan beauty businesses
          </h2>
          <p style={{ fontSize: '17px', color: '#6B6B8A', marginTop: '16px', lineHeight: 1.7, maxWidth: '520px' }}>
            Our dedication to building the best-in-class booking software means our customers keep coming back. See why they love BeauTech.
          </p>
        </div>

        {/* Featured testimonial — large split card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 overflow-hidden mb-8"
          style={{
            borderRadius: '24px',
            border: '1px solid rgba(26,26,46,0.08)',
            boxShadow: '0 8px 40px rgba(0,0,0,0.07)'
          }}
        >
          {/* Left — quote */}
          <div
            className="p-12 flex flex-col justify-between"
            style={{ backgroundColor: '#F5F0E8' }}
          >
            <div>
              <Quote
                size={40}
                style={{ color: '#C8A2A2', marginBottom: '24px', opacity: 0.8 }}
                fill="#C8A2A2"
              />
              <p
                style={{
                  fontSize: 'clamp(18px, 2.2vw, 26px)',
                  color: '#1A1A2E',
                  lineHeight: 1.55,
                  fontWeight: 500,
                  letterSpacing: '-0.01em',
                  marginBottom: '32px'
                }}
              >
                "BeauTech gave us everything we needed to run our beauty lounge professionally — from online bookings in Sinhala to real-time payment tracking. Our team loves it, and so do our clients."
              </p>
            </div>

            <div>
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#C8A2A2" style={{ color: '#C8A2A2' }} />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: '52px',
                    height: '52px',
                    backgroundColor: '#C8A2A2',
                    borderRadius: '50%',
                    fontSize: '16px',
                    fontWeight: 700,
                    color: 'white',
                    flexShrink: 0
                  }}
                >
                  QBL
                </div>
                <div>
                  <div style={{ fontSize: '16px', fontWeight: 700, color: '#1A1A2E' }}>
                    Quintessential Beauty Lounge
                  </div>
                  <div style={{ fontSize: '14px', color: '#6B6B8A', marginTop: '2px' }}>
                    Colombo, Sri Lanka · BeauTech customer since 2024
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — photo */}
          <div className="relative overflow-hidden" style={{ minHeight: '440px' }}>
            <ImageWithFallback
              src={testimonialImg}
              alt="Quintessential Beauty Lounge — BeauTech customer"
              className="w-full h-full object-cover object-center"
              style={{ position: 'absolute', inset: 0 }}
            />
          </div>
        </motion.div>

        {/* Smaller testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {smallTestimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-7 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{
                border: '1px solid rgba(26,26,46,0.08)',
                borderRadius: '20px'
              }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#C8A2A2" style={{ color: '#C8A2A2' }} />
                ))}
              </div>

              <p style={{ fontSize: '15px', color: '#4B5563', lineHeight: 1.75, marginBottom: '20px' }}>
                "{t.quote}"
              </p>

              <div className="flex items-center gap-3">
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: '42px',
                    height: '42px',
                    backgroundColor: '#FCEEF3',
                    borderRadius: '50%',
                    fontSize: '13px',
                    fontWeight: 700,
                    color: '#B54D71',
                    flexShrink: 0
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: '#1A1A2E' }}>
                    {t.author}
                  </div>
                  <div style={{ fontSize: '13px', color: '#9CA3AF', marginTop: '1px' }}>
                    {t.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
