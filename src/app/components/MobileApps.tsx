import { Apple, Play } from 'lucide-react';
import { motion } from 'motion/react';

export default function MobileApps() {
  return (
    <section className="px-8 py-24 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <h2 style={{ fontSize: '48px', fontWeight: 700, color: '#1A1A2E', marginBottom: '16px', letterSpacing: '-0.02em' }}>
            Download our mobile apps
          </h2>
          <p style={{ fontSize: '18px', color: '#1A1A2E', maxWidth: '700px', margin: '0 auto', lineHeight: 1.6, opacity: 0.8 }}>
            Book unforgettable beauty and wellness experiences with our mobile app, or run your business with our award-winning iOS and Android app
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Customers App Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#F9F9F9] rounded-[32px] p-12 pb-0 flex flex-col relative overflow-hidden"
          >
            <div className="mb-8 relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#7C4DFF] to-[#C8A2A2] blur-[8px] opacity-80"></div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#7C4DFF] to-[#C8A2A2] absolute"></div>
              </div>
              <h3 style={{ fontSize: '40px', fontWeight: 700, color: '#1A1A2E', lineHeight: 1.1, marginBottom: '16px', maxWidth: '300px' }}>
                Booking app for customers
              </h3>
              <p style={{ fontSize: '18px', color: '#1A1A2E', opacity: 0.8, marginBottom: '32px', maxWidth: '340px' }}>
                Instantly book beauty and wellness experiences near you
              </p>
              
              <div className="flex flex-wrap gap-3">
                <button className="flex items-center gap-2 bg-[#1A1A2E] text-white px-5 py-3 rounded-[12px] hover:opacity-90 transition-opacity">
                  <Apple size={24} fill="currentColor" />
                  <div className="text-left">
                    <div style={{ fontSize: '10px', opacity: 0.8, lineHeight: 1 }}>Download on the</div>
                    <div style={{ fontSize: '16px', fontWeight: 600, lineHeight: 1.2 }}>App Store</div>
                  </div>
                </button>
                <button className="flex items-center gap-2 bg-[#1A1A2E] text-white px-5 py-3 rounded-[12px] hover:opacity-90 transition-opacity">
                  <Play size={22} fill="currentColor" />
                  <div className="text-left">
                    <div style={{ fontSize: '10px', opacity: 0.8, lineHeight: 1 }}>GET IT ON</div>
                    <div style={{ fontSize: '16px', fontWeight: 600, lineHeight: 1.2 }}>Google Play</div>
                  </div>
                </button>
              </div>
            </div>

            <div className="mt-auto mx-auto w-[280px] h-[340px] bg-white rounded-t-[32px] shadow-lg border border-gray-100 relative overflow-hidden z-0 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gray-100"></div>
                  <div className="h-4 w-24 bg-gray-100 rounded"></div>
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-100"></div>
              </div>
              <div className="p-4">
                <div className="h-32 bg-gray-100 rounded-2xl mb-4 relative overflow-hidden">
                  <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-white shadow flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#1A1A2E]"></div>
                  </div>
                  <div className="absolute bottom-2 left-2 w-6 h-6 rounded-full bg-[#1A1A2E] shadow"></div>
                  <div className="absolute top-1/2 left-1/2 w-6 h-6 rounded-full bg-white shadow border border-gray-200"></div>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <div className="h-4 w-16 bg-gray-100 rounded"></div>
                  <div className="h-4 w-16 bg-gray-100 rounded"></div>
                  <div className="h-4 w-16 bg-gray-100 rounded"></div>
                </div>
                <div className="h-24 bg-gray-200 rounded-2xl mb-4"></div>
              </div>
            </div>
          </motion.div>

          {/* Professionals App Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-[32px] p-12 pb-0 flex flex-col relative overflow-hidden"
          >
            <div className="mb-8 relative z-10">
              <div 
                className="w-16 h-16 rounded-[16px] shadow-sm flex items-center justify-center mb-6"
                style={{ backgroundColor: '#B89292' }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
              <h3 style={{ fontSize: '36px', fontWeight: 700, color: '#1A1A2E', lineHeight: 1.15, marginBottom: '16px', maxWidth: '320px', letterSpacing: '-0.02em' }}>
                Business app for professionals
              </h3>
              <p style={{ fontSize: '17px', color: '#6B6B8A', marginBottom: '32px', maxWidth: '300px', lineHeight: 1.5 }}>
                Simple, flexible and powerful software to run your business on the go
              </p>
              
              <div className="flex flex-wrap gap-3">
                <button className="flex items-center gap-2 bg-[#1A1A2E] text-white px-5 py-3 rounded-[12px] hover:opacity-90 transition-opacity">
                  <Apple size={24} fill="currentColor" />
                  <div className="text-left">
                    <div style={{ fontSize: '10px', opacity: 0.8, lineHeight: 1 }}>Download on the</div>
                    <div style={{ fontSize: '16px', fontWeight: 600, lineHeight: 1.2 }}>App Store</div>
                  </div>
                </button>
                <button className="flex items-center gap-2 bg-[#1A1A2E] text-white px-5 py-3 rounded-[12px] hover:opacity-90 transition-opacity">
                  <Play size={22} fill="currentColor" />
                  <div className="text-left">
                    <div style={{ fontSize: '10px', opacity: 0.8, lineHeight: 1 }}>GET IT ON</div>
                    <div style={{ fontSize: '16px', fontWeight: 600, lineHeight: 1.2 }}>Google Play</div>
                  </div>
                </button>
              </div>
            </div>

            <div className="absolute right-0 top-0 bottom-0 w-[55%] h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10 w-24"></div>
              <img 
                src="/src/imports/salons.jpg" 
                alt="Salon Professional" 
                className="w-full h-full object-cover object-center grayscale opacity-90"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}