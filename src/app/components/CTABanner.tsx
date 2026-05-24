import { motion } from 'motion/react';

export default function CTABanner() {
  return (
    <section className="px-8 py-24 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-[1280px] mx-auto px-16 py-24 text-center relative overflow-hidden"
        style={{
          background: '#2C2C2C',
          borderRadius: '24px',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)'
        }}
      >
        <div className="relative z-10">
          <div
            className="inline-block px-5 py-2.5 mb-6"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              color: '#D1D1D1',
              borderRadius: '50px',
              fontSize: '13px',
              fontWeight: 400,
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            Join 500+ Sri Lankan salons
          </div>

          <h2
            style={{
              fontSize: '56px',
              fontWeight: 700,
              color: '#FFFFFF',
              maxWidth: '700px',
              margin: '0 auto',
              marginBottom: '20px',
              lineHeight: 1.2,
              letterSpacing: '-0.03em'
            }}
          >
            Ready to grow your salon business?
          </h2>

          <p
            style={{
              fontSize: '18px',
              color: '#B8B8C8',
              maxWidth: '520px',
              margin: '0 auto',
              marginBottom: '40px',
              lineHeight: 1.7
            }}
          >
            Start your free trial today. No credit card required.
          </p>

          <button
            className="px-10 py-4 transition-all duration-200 hover:scale-105"
            style={{
              backgroundColor: '#B89292',
              color: 'white',
              border: 'none',
              borderRadius: '50px',
              fontSize: '16px',
              fontWeight: 600,
              cursor: 'pointer',
              boxShadow: '0 8px 24px rgba(184, 146, 146, 0.35)'
            }}
          >
            Get started for free →
          </button>
        </div>
      </motion.div>
    </section>
  );
}
