import { Users, HeadphonesIcon, ArrowUpCircle, Lightbulb } from 'lucide-react';
import { motion } from 'motion/react';

const cards = [
  {
    icon: Users,
    title: 'Dedicated account manager',
    description:
      'Every BeauTech business gets a named account manager who knows your business. They help you set up, onboard your team, and maximise the platform.',
    link: 'Meet your team →',
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 customer support',
    description:
      'Our local Sri Lankan support team is available around the clock via live chat, phone, or WhatsApp. In Sinhala, Tamil, or English.',
    link: 'Go to help centre →',
  },
  {
    icon: ArrowUpCircle,
    title: 'Free migration support',
    description:
      'Switching from another system? We handle the entire migration — client records, appointment history, and service data — completely free of charge.',
    link: 'Learn about migration →',
  },
  {
    icon: Lightbulb,
    title: 'Expert consultation',
    description:
      'Book a free strategy session with our beauty business experts. Get tailored advice on pricing, marketing, and growing your client base in Sri Lanka.',
    link: 'Book a consultation →',
  },
];

export default function CustomerSuccess() {
  return (
    <section className="px-8 py-24 bg-[#F5F0E8]">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="mb-14">
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
            Customer success
          </div>
          <div className="grid lg:grid-cols-2 gap-10 items-end">
            <h2
              style={{
                fontSize: 'clamp(32px, 4.5vw, 52px)',
                fontWeight: 700,
                color: '#1A1A2E',
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
              }}
            >
              You are never alone, award-winning support 24/7
            </h2>
            <p style={{ fontSize: '17px', color: '#6B6B8A', lineHeight: 1.75 }}>
              We don't just give you software and disappear. BeauTech wraps every subscription with real human support — in your language, on your schedule.
            </p>
          </div>
        </div>

        {/* Support cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white p-8 flex flex-col group hover:shadow-lg transition-all duration-300"
              style={{
                borderRadius: '24px',
                border: '1px solid rgba(26,26,46,0.06)',
              }}
            >
              <div
                className="mb-6 flex items-center justify-center"
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  backgroundColor: 'rgba(200,162,162,0.12)',
                }}
              >
                <card.icon size={24} style={{ color: '#C8A2A2' }} />
              </div>
              <h3
                style={{
                  fontSize: '17px',
                  fontWeight: 700,
                  color: '#1A1A2E',
                  marginBottom: '10px',
                  lineHeight: 1.3,
                }}
              >
                {card.title}
              </h3>
              <p style={{ fontSize: '14px', color: '#6B6B8A', lineHeight: 1.7, flex: 1 }}>
                {card.description}
              </p>
              <a
                href="#"
                className="mt-6 inline-flex items-center transition-colors duration-200"
                style={{ fontSize: '14px', fontWeight: 600, color: '#C8A2A2', textDecoration: 'none' }}
              >
                {card.link}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
