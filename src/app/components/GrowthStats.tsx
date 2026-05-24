import { motion } from 'motion/react';

const stats = [
  {
    number: '30%',
    label: 'more clients',
    detail: 'Businesses on BeauTech see an average 30% uplift in new client bookings within the first 3 months.',
  },
  {
    number: '40%',
    label: 'fewer no-shows',
    detail: 'Automated SMS & WhatsApp reminders cut missed appointments dramatically, protecting your revenue.',
  },
  {
    number: '25%',
    label: 'more sales',
    detail: 'Upselling prompts at checkout and loyalty programmes consistently grow average spend per visit.',
  },
  {
    number: '3×',
    label: 'higher retention',
    detail: 'Clients who book through BeauTech return 3× more often than walk-in-only clients.',
  },
  {
    number: '40%',
    label: 'booked out of hours',
    detail: 'Nearly half of all bookings happen outside business hours — your calendar fills while you rest.',
  },
  {
    number: '10×',
    label: 'return on investment',
    detail: 'On average, BeauTech customers earn LKR 10 for every LKR 1 spent on the platform.',
  },
];

export default function GrowthStats() {
  return (
    <section className="px-8 py-24 bg-white">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
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
            Real results
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
            Numbers that speak for themselves
          </h2>
          <p style={{ fontSize: '18px', color: '#6B6B8A', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7 }}>
            Based on aggregated data from BeauTech businesses across Sri Lanka
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-8 group hover:-translate-y-1 transition-all duration-300"
              style={{
                backgroundColor: '#F5F0E8',
                borderRadius: '24px',
                border: '1px solid rgba(26,26,46,0.05)',
              }}
            >
              <div
                style={{
                  fontSize: 'clamp(48px, 5vw, 72px)',
                  fontWeight: 800,
                  color: '#1A1A2E',
                  letterSpacing: '-0.04em',
                  lineHeight: 1,
                  marginBottom: '4px',
                }}
              >
                {stat.number}
              </div>
              <div
                style={{
                  fontSize: '18px',
                  fontWeight: 600,
                  color: '#C8A2A2',
                  marginBottom: '12px',
                }}
              >
                {stat.label}
              </div>
              <p style={{ fontSize: '14px', color: '#6B6B8A', lineHeight: 1.7 }}>
                {stat.detail}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center mt-10" style={{ fontSize: '13px', color: '#9CA3AF' }}>
          * Figures based on aggregated platform data. Individual results may vary.
        </p>
      </div>
    </section>
  );
}
