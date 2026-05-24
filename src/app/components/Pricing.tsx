import { Check } from 'lucide-react';
import { motion } from 'motion/react';

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    period: 'forever',
    description: 'Everything to get started:',
    features: [
      'Up to 50 bookings / month',
      'Basic online booking page',
      'Email notifications',
      'Mobile app access',
      'Client records',
    ],
    buttonText: 'Get started',
    featured: false,
    badge: null,
  },
  {
    name: 'Growth',
    price: 'LKR 5,000',
    period: 'per month',
    description: 'Everything in Starter, plus:',
    features: [
      'Unlimited bookings',
      'Payment processing',
      'SMS & WhatsApp reminders',
      'Marketing tools',
      'Staff management',
    ],
    buttonText: 'Start free trial',
    featured: true,
    badge: 'Most popular',
  },
  {
    name: 'Pro',
    price: 'LKR 12,900',
    period: 'per month',
    description: 'Everything in Growth, plus:',
    features: [
      'Multi-location support',
      'Advanced analytics',
      'API access',
      'Priority support',
      'Custom branding',
    ],
    buttonText: 'Contact sales',
    featured: false,
    badge: null,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="px-8 py-24 bg-[#F5F0E8]">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-block px-5 py-2.5 mb-6"
            style={{
              backgroundColor: 'white',
              color: '#1A1A2E',
              borderRadius: '50px',
              fontSize: '14px',
              fontWeight: 600,
            }}
          >
            Pricing
          </div>
          <h2
            style={{
              fontSize: 'clamp(32px, 4.5vw, 52px)',
              fontWeight: 700,
              color: '#1A1A2E',
              marginBottom: '16px',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
            }}
          >
            Software that grows<br />with your business
          </h2>
          <p
            style={{
              fontSize: '18px',
              color: '#1A1A2E',
              maxWidth: '520px',
              margin: '0 auto',
              lineHeight: 1.7,
              opacity: 0.65,
            }}
          >
            No setup fees. No long-term commitments.
          </p>
        </div>

        {/* Plan cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white flex flex-col relative"
              style={{
                borderRadius: '24px',
                padding: '40px',
                border: plan.featured
                  ? '2px solid #C8A2A2'
                  : '1px solid rgba(26,26,46,0.07)',
                boxShadow: plan.featured
                  ? '0 24px 48px rgba(200,162,162,0.18)'
                  : '0 4px 16px rgba(0,0,0,0.04)',
              }}
            >
              {/* Badge */}
              {plan.badge && (
                <div
                  className="absolute -top-3 left-1/2"
                  style={{ transform: 'translateX(-50%)' }}
                >
                  <span
                    style={{
                      backgroundColor: '#C8A2A2',
                      color: 'white',
                      fontSize: '12px',
                      fontWeight: 600,
                      padding: '4px 16px',
                      borderRadius: '50px',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan name */}
              <div
                style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#9E8080',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  marginBottom: '12px',
                }}
              >
                {plan.name}
              </div>

              {/* Price */}
              <div className="mb-2">
                <span
                  style={{
                    fontSize: plan.price === 'Free' ? '48px' : '40px',
                    fontWeight: 800,
                    color: '#1A1A2E',
                    letterSpacing: '-0.03em',
                    lineHeight: 1,
                  }}
                >
                  {plan.price}
                </span>
              </div>
              <div
                style={{
                  fontSize: '14px',
                  color: '#1A1A2E',
                  opacity: 0.5,
                  marginBottom: '32px',
                }}
              >
                {plan.period}
              </div>

              {/* Divider */}
              <div
                className="mb-6"
                style={{ height: '1px', backgroundColor: 'rgba(26,26,46,0.07)' }}
              />

              {/* Features */}
              <p
                style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  color: '#1A1A2E',
                  opacity: 0.5,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  marginBottom: '16px',
                }}
              >
                {plan.description}
              </p>
              <div className="space-y-3 flex-grow mb-10">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div
                      className="flex items-center justify-center flex-shrink-0"
                      style={{
                        width: '18px',
                        height: '18px',
                        backgroundColor: plan.featured
                          ? 'rgba(200,162,162,0.15)'
                          : 'rgba(26,26,46,0.07)',
                        borderRadius: '50%',
                        marginTop: '2px',
                      }}
                    >
                      <Check
                        size={10}
                        style={{
                          color: plan.featured ? '#C8A2A2' : '#1A1A2E',
                          strokeWidth: 3,
                        }}
                      />
                    </div>
                    <span
                      style={{
                        fontSize: '15px',
                        color: '#1A1A2E',
                        lineHeight: 1.5,
                        opacity: 0.8,
                      }}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button
                className="w-full py-4 transition-all duration-200 hover:opacity-90"
                style={{
                  backgroundColor: plan.featured ? '#C8A2A2' : '#1A1A2E',
                  color: 'white',
                  border: 'none',
                  borderRadius: '30px',
                  fontSize: '15px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  marginTop: 'auto',
                }}
              >
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center mt-10" style={{ fontSize: '13px', color: '#9CA3AF' }}>
          All prices in LKR. VAT may apply. Cancel anytime.
        </p>
      </div>
    </section>
  );
}
