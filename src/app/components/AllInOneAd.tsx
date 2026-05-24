import { Check, Smartphone } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import image17 from '../../imports/image-17.png';

export default function AllInOneAd() {
  const features = [
    'Advanced insights providing a 360 degree view of each client, including booking history, client preferences, unlimited payment options and notes',
    'Powerful scheduling tools like online bookings, clients, location management, automatic reminders, inventory tracking and more',
    'Crafted to deliver a smooth experience that enhances your business and elevates your brand'
  ];

  return (
    <section className="px-8 py-20 bg-white relative overflow-hidden">
      {/* Decorative "with" text from image-17 */}
      <div
        className="absolute right-[-40px] top-1/2 opacity-5 pointer-events-none select-none"
        style={{ transform: 'translateY(-50%) rotate(90deg)', fontSize: '180px', fontWeight: 900 }}
      >
        <ImageWithFallback src={image17} alt="" className="h-32 w-auto" />
      </div>
      <div className="max-w-[1280px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Content */}
          <div>
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
              All-in-one platform
            </div>

            <h2
              style={{
                fontSize: 'clamp(32px, 4vw, 48px)',
                fontWeight: 700,
                color: '#1A1A2E',
                letterSpacing: '-0.03em',
                lineHeight: 1.15,
                marginBottom: '16px'
              }}
            >
              All-in-one{' '}
              <span style={{ color: '#C8A2A2' }}>software</span>
              {' '}to run your business
            </h2>

            <p
              style={{
                fontSize: '17px',
                color: '#6B6B8A',
                lineHeight: 1.7,
                marginBottom: '32px'
              }}
            >
              Most beauty and wellness businesses need to use multiple salon, spa, and other beauty and wellness business management software tools to manage their business effectively.
            </p>

            {/* Feature checkmarks */}
            <div className="space-y-5 mb-10">
              {features.map((feature, i) => (
                <div key={i} className="flex gap-4">
                  <div
                    className="flex items-center justify-center flex-shrink-0"
                    style={{
                      width: '24px',
                      height: '24px',
                      backgroundColor: 'rgba(200,162,162,0.15)',
                      borderRadius: '50%',
                      marginTop: '2px'
                    }}
                  >
                    <Check size={14} style={{ color: '#C8A2A2', strokeWidth: 3 }} />
                  </div>
                  <p style={{ fontSize: '15px', color: '#4B5563', lineHeight: 1.7, flex: 1 }}>
                    {feature}
                  </p>
                </div>
              ))}
            </div>

            <button
              className="transition-all duration-200 hover:opacity-90 flex items-center gap-2"
              style={{
                backgroundColor: '#C8A2A2',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                fontSize: '15px',
                fontWeight: 600,
                padding: '13px 28px',
                cursor: 'pointer'
              }}
            >
              <Smartphone size={18} />
              Get started free
            </button>
          </div>

          {/* Right — Mobile mockups */}
          <div className="relative flex items-center justify-center gap-6">
            {/* First phone */}
            <div
              className="relative overflow-hidden"
              style={{
                width: '280px',
                height: '560px',
                borderRadius: '40px',
                border: '8px solid #1A1A2E',
                boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
                transform: 'rotate(-6deg) translateY(20px)',
                backgroundColor: 'white'
              }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&q=80"
                alt="BeauTech Mobile App - Client Profile"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Second phone - overlapping */}
            <div
              className="relative overflow-hidden"
              style={{
                width: '280px',
                height: '560px',
                borderRadius: '40px',
                border: '8px solid #1A1A2E',
                boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
                transform: 'rotate(6deg) translateY(-20px)',
                backgroundColor: 'white',
                marginLeft: '-60px'
              }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80"
                alt="BeauTech Mobile App - Calendar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
