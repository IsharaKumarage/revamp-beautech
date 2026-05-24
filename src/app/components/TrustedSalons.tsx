import { Star } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function TrustedSalons() {
  const salons = [
    { name: 'Naturals Salon Colombo', location: 'Colombo 07', rating: 4.9, image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxzYWxvbnxlbnwxfHx8fDE3NzkzNDQxNDR8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Crown Hair & Beauty', location: 'Mount Lavinia', rating: 4.8, image: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxzYWxvbnxlbnwxfHx8fDE3NzkzNDQxNDR8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Glow Wellness Spa', location: 'Kandy', rating: 4.9, image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxzYWxvbnxlbnwxfHx8fDE3NzkzNDQxNDR8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'The Studio by LK', location: 'Nugegoda', rating: 4.7, image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxzYWxvbnxlbnwxfHx8fDE3NzkzNDQxNDR8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Luxe Beauty Bar', location: 'Galle', rating: 4.8, image: 'https://images.unsplash.com/photo-1595476108010-b4d1f10c1e6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxzYWxvbnxlbnwxfHx8fDE3NzkzNDQxNDR8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  ];

  return (
    <section className="py-24 bg-[#FAFAFA] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-8 mb-16 text-center">
        <h2 style={{ fontSize: '36px', fontWeight: 500, color: '#1A1A2E', marginBottom: '16px', letterSpacing: '-0.02em' }}>
          Trusted by top salons across Sri Lanka
        </h2>
        <p style={{ fontSize: '18px', color: '#6B6B8A', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
          Join hundreds of beauty and wellness professionals scaling their businesses with BeauTech.
        </p>
      </div>

      <div className="relative w-full flex overflow-hidden">
        {/* Gradient Masks for smooth fading on edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10"></div>

        <motion.div
          className="flex gap-6 whitespace-nowrap pl-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        >
          {/* Duplicate list to create a seamless loop */}
          {[...salons, ...salons].map((salon, i) => (
            <div 
              key={i} 
              className="w-[300px] bg-white rounded-[24px] p-4 flex-shrink-0 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-[#E4E4F0]"
            >
              <div className="h-[180px] w-full rounded-[16px] overflow-hidden mb-4 relative">
                <ImageWithFallback 
                  src={salon.image} 
                  alt={salon.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="px-2">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-[#1A1A2E] text-lg">{salon.name}</h3>
                  <div className="flex items-center gap-1 bg-[#FFF9E6] px-2 py-1 rounded-full">
                    <Star className="w-3 h-3 fill-[#F59E0B] text-[#F59E0B]" />
                    <span className="text-sm font-medium text-[#B45309]">{salon.rating}</span>
                  </div>
                </div>
                <p className="text-[#6B6B8A] text-sm flex items-center gap-1">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  {salon.location}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
