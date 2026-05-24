import { motion } from 'motion/react';

export default function Certifications() {
  const certifications = [
    {
      name: 'Capterra Shortlist 2024',
      badge: 'SHORTLIST',
      year: '2024',
      color: '#E56036',
      bg: '#14314A'
    },
    {
      name: 'Capterra Best Value 2024',
      badge: 'BEST VALUE',
      year: '2024',
      color: '#3498DB',
      bg: '#14314A'
    },
    {
      name: 'G2 Easiest To Use Summer 2024',
      type: 'g2'
    },
    {
      name: 'HIPAA Compliant',
      type: 'hipaa'
    },
    {
      name: 'ISO 9001',
      type: 'iso'
    },
    {
      name: 'HITRUST CSF Certified',
      type: 'hitrust'
    }
  ];

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-80 hover:opacity-100 transition-opacity">
          
          {/* Capterra Shortlist */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center w-24"
          >
            <div className="relative w-16 h-20 bg-[#14314A] rounded-b-full flex flex-col items-center pt-2 overflow-hidden shadow-sm">
              <div className="text-white text-[8px] font-bold tracking-wider mb-1 flex items-center gap-1">
                <span className="text-blue-400">◤</span> Capterra
              </div>
              <div className="bg-[#E56036] w-[120%] py-1 text-center -rotate-3 mb-1">
                <span className="text-white text-[7px] font-bold tracking-wider">SHORTLIST</span>
              </div>
              <span className="text-white text-[10px] font-bold">2024</span>
            </div>
          </motion.div>

          {/* Capterra Best Value */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center justify-center w-24"
          >
            <div className="relative w-16 h-20 bg-[#14314A] rounded-b-full flex flex-col items-center pt-2 overflow-hidden shadow-sm">
              <div className="text-white text-[8px] font-bold tracking-wider mb-1 flex items-center gap-1">
                <span className="text-blue-400">◤</span> Capterra
              </div>
              <div className="bg-[#3498DB] w-[120%] py-1 text-center rotate-3 mb-1">
                <span className="text-white text-[7px] font-bold tracking-wider">BEST VALUE</span>
              </div>
              <span className="text-white text-[10px] font-bold">2024</span>
            </div>
          </motion.div>

          {/* G2 Easiest to Use */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center justify-center w-24"
          >
            <div className="relative w-16 h-20 bg-white border border-gray-200 shadow-sm flex flex-col items-center pt-2 pb-2">
              <div className="text-[#FF492C] text-[12px] font-bold mb-1 border-b border-gray-100 w-full text-center pb-1">G</div>
              <span className="text-[#1A1A2E] text-[8px] font-bold leading-tight text-center px-1 mb-1">Easiest<br/>To Use</span>
              <div className="bg-[#FFC000] w-full py-[2px] text-center mb-1">
                <span className="text-white text-[6px] font-bold">SUMMER</span>
              </div>
              <span className="text-gray-500 text-[8px] font-bold">2024</span>
            </div>
          </motion.div>

          {/* HIPAA */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-3 w-32"
          >
            <svg viewBox="0 0 24 24" className="w-10 h-10 text-gray-800" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v4h4v2h-4v4h-2v-4H7V9h4V7z"/>
            </svg>
            <div className="flex flex-col">
              <span className="text-[#1A1A2E] text-[14px] font-bold leading-none tracking-tight">HIPAA</span>
              <span className="text-gray-500 text-[10px] leading-tight">Compliant</span>
            </div>
          </motion.div>

          {/* ISO 9001 */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center justify-center w-24"
          >
            <div className="w-16 h-16 rounded-full bg-[#2E3138] flex flex-col items-center justify-center border-[3px] border-double border-gray-100 relative">
              <div className="absolute inset-1 rounded-full border border-gray-400"></div>
              <span className="text-white text-[6px] tracking-widest uppercase mt-1">Certified</span>
              <span className="text-white text-[12px] font-bold">ISO 9001</span>
              <div className="flex gap-[2px] mt-1">
                <span className="w-1 h-1 rounded-full bg-white"></span>
                <span className="w-1 h-1 rounded-full bg-white"></span>
                <span className="w-1 h-1 rounded-full bg-white"></span>
              </div>
            </div>
          </motion.div>

          {/* HITRUST */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-3 w-40"
          >
            <div className="w-10 h-10 bg-[#2E3138] rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-[#1A1A2E] text-[16px] font-bold leading-none tracking-tight">HITRUST</span>
              <span className="text-gray-500 text-[10px] leading-tight">CSF Certified</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}