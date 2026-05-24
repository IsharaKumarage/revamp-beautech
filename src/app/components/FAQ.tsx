import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      question: 'Is BeauTech suitable for single professionals?',
      answer: 'Absolutely! Our Starter plan is completely free and perfect for independent professionals starting out. You get core booking features, email notifications, and up to 50 bookings a month without any hidden fees.'
    },
    {
      question: 'Can I accept payments in LKR?',
      answer: 'Yes, BeauTech natively supports LKR and integrates with major Sri Lankan payment gateways. You can securely accept deposits or full payments at the time of booking.'
    },
    {
      question: 'How do I migrate my existing client data?',
      answer: 'We offer a free concierge migration service for Growth and Pro users. Just export your current client list as a CSV, and our support team will seamlessly import it into your BeauTech account.'
    },
    {
      question: 'Can I manage multiple salon branches?',
      answer: 'Yes! Our Pro plan is designed for multi-location businesses. You can manage staff, inventory, and analytics across all your branches from a single unified dashboard.'
    },
    {
      question: 'Is there a limit to how many staff members I can add?',
      answer: 'No limits on staff members! On Growth and Pro plans, you can add unlimited team members, assign them specific roles, and manage their individual working hours and commissions.'
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white px-8">
      <div className="max-w-[800px] mx-auto">
        <div className="text-center mb-16">
          <div
            className="inline-block px-5 py-2.5 mb-6"
            style={{
              backgroundColor: '#FCEEF3',
              color: '#B54D71',
              borderRadius: '50px',
              fontSize: '14px',
              fontWeight: 500
            }}
          >
            Got Questions?
          </div>
          <h2 style={{ fontSize: '40px', fontWeight: 500, color: '#1A1A2E', marginBottom: '16px', letterSpacing: '-0.02em' }}>
            Frequently Asked Questions
          </h2>
          <p style={{ fontSize: '18px', color: '#6B6B8A', lineHeight: 1.7 }}>
            Everything you need to know about the product and billing.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-[#E4E4F0] rounded-[24px] overflow-hidden bg-white transition-colors duration-300"
              style={{
                borderColor: openIndex === index ? '#1A1A2E' : '#E4E4F0'
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="text-lg font-medium text-[#1A1A2E]">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="flex-shrink-0 ml-4 text-[#6B6B8A]"
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-6 text-[#6B6B8A] leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center p-8 bg-[#F8F9FA] rounded-[24px]">
          <h3 className="text-xl font-medium text-[#1A1A2E] mb-2">Still have questions?</h3>
          <p className="text-[#6B6B8A] mb-6">Our support team is ready to help you out.</p>
          <button className="px-6 py-3 bg-[#D96B8F] border border-transparent rounded-full text-white font-medium shadow-sm hover:opacity-90 transition-all">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
}
