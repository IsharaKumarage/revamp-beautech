import { Star } from 'lucide-react';

export default function StatsStrip() {
  const ratings = [
    { name: 'Capterra', score: '4.8' },
    { name: 'GetApp', score: '4.8' },
    { name: 'Trustpilot', score: '4.7' },
    { name: 'Software Advice', score: '4.8' }
  ];

  const stats = [
    { number: '500+', label: 'Partner businesses in SL' },
    { number: '2,000+', label: 'Professionals' },
    { number: '100,000+', label: 'Appointments booked' },
    { number: '9', label: 'Provinces' }
  ];

  return (
    <section
      className="px-8 py-20 text-white"
      style={{ background: 'linear-gradient(135deg, #111827 0%, #1A1A2E 60%, #2d1a26 100%)' }}
    >
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">

        {/* Ratings */}
        <div className="flex flex-wrap items-center justify-center gap-8 mb-16">
          {ratings.map((rating, i) => (
            <div key={i} className="flex items-center gap-2">
              <span style={{ fontSize: '15px', fontWeight: 600 }}>{rating.name}</span>
              <div className="flex items-center gap-1">
                <span style={{ fontSize: '14px', fontWeight: 500, color: '#FACC15' }}>{rating.score}</span>
                {[...Array(5)].map((_, s) => (
                  <Star key={s} className="w-3.5 h-3.5 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full max-w-[800px] h-px bg-white/10 mb-16" />

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 w-full max-w-[1100px]">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div
                style={{
                  fontSize: '52px',
                  fontWeight: 700,
                  letterSpacing: '-0.03em',
                  lineHeight: 1,
                  marginBottom: '10px',
                  color: 'white'
                }}
              >
                {stat.number}
              </div>
              <div
                style={{
                  fontSize: '15px',
                  color: 'rgba(255,255,255,0.65)',
                  fontWeight: 500
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
