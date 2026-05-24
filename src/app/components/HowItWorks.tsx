import { motion } from 'motion/react';

export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Create account',
      description: 'Sign up in 30 seconds with just your email'
    },
    {
      number: '2',
      title: 'Customize setup',
      description: 'Add your services, team, and branding'
    },
    {
      number: '3',
      title: 'Share your link',
      description: 'Send your booking page to clients'
    },
    {
      number: '4',
      title: 'Start booking',
      description: 'Accept appointments and payments instantly'
    }
  ];

  return (
    <section className="px-8 py-24 relative overflow-hidden bg-white">
      <div className="max-w-[1280px] mx-auto relative z-10">
        <div className="text-center mb-16">
          <div
            className="inline-block px-5 py-2.5 mb-6"
            style={{
              backgroundColor: 'rgba(200,162,162,0.12)',
              color: '#9E8080',
              borderRadius: '50px',
              fontSize: '14px',
              fontWeight: 500
            }}
          >
            Simple setup
          </div>
          <h2 style={{ fontSize: '48px', fontWeight: 700, color: '#1A1A2E', marginBottom: '16px', letterSpacing: '-0.03em' }}>
            Up and running in minutes
          </h2>
          <p style={{ fontSize: '18px', color: '#6B6B8A', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>
            Get started quickly with our streamlined onboarding process
          </p>
        </div>

        <div className="grid grid-cols-4 gap-8 relative">
          {/* Connection line */}
          <div
            className="absolute top-8 left-[12.5%] right-[12.5%] h-0.5"
            style={{ zIndex: 0, background: 'linear-gradient(to right, #C8A2A2, #D4B8B8)' }}
          />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center relative z-10"
            >
              <div
                className="mx-auto mb-6 flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{
                  width: '64px',
                  height: '64px',
                  backgroundColor: '#C8A2A2',
                  color: 'white',
                  borderRadius: '50%',
                  fontSize: '24px',
                  fontWeight: 600,
                  boxShadow: '0 8px 24px rgba(200, 162, 162, 0.35)'
                }}
              >
                {step.number}
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#1A1A2E', marginBottom: '8px' }}>
                {step.title}
              </h3>
              <p style={{ fontSize: '15px', color: '#6B6B8A', lineHeight: 1.7 }}>
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
