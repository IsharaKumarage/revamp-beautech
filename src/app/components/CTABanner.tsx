import { motion } from 'motion/react';

export default function CTABanner() {
  return (
    <section className="px-8 py-24 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-[1280px] mx-auto px-16 py-20 text-center relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #1A1A2E 0%, #2D2D4E 100%)',
          borderRadius: '32px',
          boxShadow: '0 20px 60px rgba(26, 26, 46, 0.3)'
        }}
      >
        {/* Decorative elements */}
        <div
          className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(circle, #C8A2A2 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, #D4B8B8 0%, transparent 70%)' }}
        />

        <div className="relative z-10">
          <div
            className="inline-block px-5 py-2.5 mb-6"
            style={{
              backgroundColor: 'rgba(200, 162, 162, 0.2)',
              color: '#D4B8B8',
              borderRadius: '50px',
              fontSize: '14px',
              fontWeight: 500,
              border: '1px solid rgba(200, 162, 162, 0.3)'
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
              backgroundColor: '#C8A2A2',
              color: 'white',
              border: 'none',
              borderRadius: '50px',
              fontSize: '16px',
              fontWeight: 600,
              cursor: 'pointer',
              boxShadow: '0 8px 24px rgba(200, 162, 162, 0.35)'
            }}
          >
            Get started for free →
          </button>
        </div>
      </motion.div>
    </section>
  );
}
