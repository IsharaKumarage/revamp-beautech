import { Globe, Clock, TrendingUp, Star } from 'lucide-react';
import { motion } from 'motion/react';

const benefits = [
  {
    icon: Globe,
    title: 'Promote your business',
    description:
      'Get discovered by new clients searching for beauty services near them. Your business profile appears across search engines and the BeauTech marketplace.',
  },
  {
    icon: TrendingUp,
    title: 'Increase online visibility',
    description:
      'Reach thousands of potential clients in your area. Optimised profiles and service listings make it easy for clients to find and choose you.',
  },
  {
    icon: Clock,
    title: '24/7 self-booking',
    description:
      'Clients can book anytime — 3am or 3pm. Your calendar fills up even while you sleep, without a single phone call.',
  },
  {
    icon: Star,
    title: 'Build social proof',
    description:
      'Automatically collect and display Google and Facebook reviews. More 5-star ratings mean more bookings, more trust, more growth.',
  },
];

export default function MarketplaceGrowth() {
  return (
    <section className="bg-[#0B0F19] text-white py-20 lg:py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start lg:items-end">
          <div>
            {/* Pill Badge */}
            <span className="inline-block px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#EAA692] border border-[#EAA692]/30 rounded-full mb-6">
              Marketplace & Growth
            </span>
            {/* Heading */}
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Reach Hundreds <br className="hidden md:inline" /> of new clients
            </h2>
          </div>
          <div>
            {/* Description Text */}
            <p className="text-[#C5C8D4] text-base lg:text-lg leading-relaxed font-normal max-w-xl">
              Beautech puts your business in front of clients actively searching for beauty services — online and in the BeauTech marketplace. More visibility means more bookings, automatically.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 lg:p-8 flex flex-col gap-6 bg-[#161C2E]/50 border border-[#FFFFFF]/5 rounded-3xl group hover:-translate-y-1 transition-all duration-300"
            >
              <div className="p-3 w-fit rounded-xl bg-white/[0.03] text-[#EAA692]">
                <b.icon size={24} />
              </div>
              <div>
                <h3 className="text-lg lg:text-xl font-semibold text-white mb-3">
                  {b.title}
                </h3>
                <p className="text-[#A1A5B7] text-sm lg:text-[15px] font-normal leading-relaxed">
                  {b.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section Footer */}
        <div className="text-center mt-16 text-sm lg:text-base text-slate-400 font-normal">
          Over <span className="font-semibold text-white">500 Sri Lankan businesses</span> already growing with BeauTech
        </div>
      </div>
    </section>
  );
}
