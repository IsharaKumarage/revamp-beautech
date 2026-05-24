import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight, Clock } from 'lucide-react';

const categories = ['All', 'New Feature', 'Customers', 'Tips & Tricks', 'Business Types', 'Updates'];

const articles = [
  {
    id: 1,
    category: 'Customers',
    title: 'How Kandy Beauty Hub doubled their bookings in 3 months with BeauTech',
    excerpt: 'Discover how one of Kandy\'s top salons transformed their client management and saw a 2x increase in repeat bookings after switching to BeauTech.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80',
    readTime: '5 min read',
    date: 'May 15, 2026',
    featured: true
  },
  {
    id: 2,
    category: 'New Feature',
    title: 'Introducing multi-language booking pages — now in Sinhala and Tamil',
    excerpt: 'Your clients can now book appointments in their preferred language. BeauTech supports English, Sinhala, and Tamil.',
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80',
    readTime: '3 min read',
    date: 'May 12, 2026',
    featured: false
  },
  {
    id: 3,
    category: 'Tips & Tricks',
    title: '7 ways to reduce no-shows at your salon with automated SMS reminders',
    excerpt: 'No-shows can cost your business thousands of rupees per month. Here\'s how our automated reminder system helps.',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=80',
    readTime: '4 min read',
    date: 'May 8, 2026',
    featured: false
  },
  {
    id: 4,
    category: 'New Feature',
    title: 'Online payments now available via Genie and FriMi wallets',
    excerpt: 'BeauTech now integrates with Sri Lanka\'s most popular mobile wallets so your clients can pay before they arrive.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
    readTime: '3 min read',
    date: 'May 3, 2026',
    featured: false
  },
  {
    id: 5,
    category: 'Business Types',
    title: 'BeauTech for Spas: Everything you need to manage treatments and packages',
    excerpt: 'From package bundles to therapist scheduling, see how spa owners across Sri Lanka use BeauTech differently.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80',
    readTime: '6 min read',
    date: 'Apr 28, 2026',
    featured: false
  },
  {
    id: 6,
    category: 'Tips & Tricks',
    title: 'How to price your services for the Sri Lankan market in 2026',
    excerpt: 'Competitive pricing strategies for salons and spas, with data-driven insights from BeauTech\'s 500+ partner businesses.',
    image: 'https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=600&q=80',
    readTime: '7 min read',
    date: 'Apr 22, 2026',
    featured: false
  },
  {
    id: 7,
    category: 'Customers',
    title: "Growing a new salon in Galle: Chamari\'s story with BeauTech",
    excerpt: 'From a one-chair setup to a four-staff team in under a year — we sat down with Chamari to hear how she did it.',
    image: 'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=600&q=80',
    readTime: '5 min read',
    date: 'Apr 17, 2026',
    featured: false
  },
  {
    id: 8,
    category: 'Updates',
    title: 'BeauTech product update: April 2026 — offline mode, payroll, and more',
    excerpt: 'A roundup of everything we shipped last month including our new offline booking mode for low-connectivity areas.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
    readTime: '4 min read',
    date: 'Apr 10, 2026',
    featured: false
  },
  {
    id: 9,
    category: 'Tips & Tricks',
    title: 'Using loyalty programs to keep clients coming back to your salon',
    excerpt: 'BeauTech\'s loyalty point system is built for Sri Lankan salons. Here\'s how to set it up in under 10 minutes.',
    image: 'https://images.unsplash.com/photo-1571624436279-b272aff752b5?w=600&q=80',
    readTime: '5 min read',
    date: 'Apr 5, 2026',
    featured: false
  }
];

const categoryColors: Record<string, { bg: string; color: string }> = {
  'New Feature': { bg: '#E8F5E9', color: '#2E7D32' },
  'Customers': { bg: '#FFF3E0', color: '#E65100' },
  'Tips & Tricks': { bg: '#E3F2FD', color: '#1565C0' },
  'Business Types': { bg: '#F3E5F5', color: '#6A1B9A' },
  'Updates': { bg: '#FCEEF3', color: '#B54D71' },
};

function CategoryBadge({ category }: { category: string }) {
  const style = categoryColors[category] || { bg: '#F5F0E8', color: '#1A1A2E' };
  return (
    <span
      style={{
        backgroundColor: style.bg,
        color: style.color,
        fontSize: '12px',
        fontWeight: 600,
        padding: '4px 10px',
        borderRadius: '50px',
        display: 'inline-block'
      }}
    >
      {category}
    </span>
  );
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? articles
    : articles.filter(a => a.category === activeCategory);

  const featured = filtered.find(a => a.featured) || filtered[0];
  const rest = filtered.filter(a => a.id !== featured?.id);

  return (
    <div className="min-h-screen bg-white">
      {/* Page header */}
      <div className="bg-[#F5F0E8] px-8 pt-16 pb-12">
        <div className="max-w-[1200px] mx-auto">
          <h1
            style={{
              fontSize: 'clamp(36px, 5vw, 60px)',
              fontWeight: 700,
              color: '#1A1A2E',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              marginBottom: '12px'
            }}
          >
            Latest news from BeauTech
          </h1>
          <p style={{ fontSize: '17px', color: '#1A1A2E', opacity: 0.65, marginBottom: '32px' }}>
            Stories, tips, and updates for beauty businesses in Sri Lanka.
          </p>

          {/* Category filter pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '8px 18px',
                  borderRadius: '50px',
                  fontSize: '14px',
                  fontWeight: 500,
                  border: '1px solid',
                  cursor: 'pointer',
                  transition: 'all 0.15s',
                  backgroundColor: activeCategory === cat ? '#1A1A2E' : 'white',
                  color: activeCategory === cat ? 'white' : '#1A1A2E',
                  borderColor: activeCategory === cat ? '#1A1A2E' : 'rgba(26,26,46,0.15)'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="px-8 py-16">
        <div className="max-w-[1200px] mx-auto">

          {/* Featured article */}
          {featured && (
            <div
              className="grid md:grid-cols-2 gap-0 mb-16 overflow-hidden cursor-pointer group"
              style={{ borderRadius: '20px', border: '1px solid rgba(26,26,46,0.08)', boxShadow: '0 4px 24px rgba(0,0,0,0.05)' }}
            >
              <div className="overflow-hidden" style={{ maxHeight: '420px' }}>
                <ImageWithFallback
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ minHeight: '320px' }}
                />
              </div>
              <div className="p-10 flex flex-col justify-center bg-white">
                <CategoryBadge category={featured.category} />
                <h2
                  style={{
                    fontSize: '28px',
                    fontWeight: 700,
                    color: '#1A1A2E',
                    lineHeight: 1.3,
                    letterSpacing: '-0.02em',
                    margin: '16px 0 12px'
                  }}
                >
                  {featured.title}
                </h2>
                <p style={{ fontSize: '15px', color: '#6B6B8A', lineHeight: 1.7, marginBottom: '24px' }}>
                  {featured.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3" style={{ fontSize: '13px', color: '#9CA3AF' }}>
                    <Clock size={14} />
                    <span>{featured.readTime}</span>
                    <span>·</span>
                    <span>{featured.date}</span>
                  </div>
                  <span
                    className="flex items-center gap-1 transition-colors group-hover:text-[#C8A2A2]"
                    style={{ fontSize: '14px', fontWeight: 600, color: '#1A1A2E' }}
                  >
                    Read more <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Articles grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {rest.map(article => (
              <div
                key={article.id}
                className="cursor-pointer group overflow-hidden"
                style={{
                  borderRadius: '16px',
                  border: '1px solid rgba(26,26,46,0.07)',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                  transition: 'box-shadow 0.2s, transform 0.2s'
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(0,0,0,0.10)';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 12px rgba(0,0,0,0.04)';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                }}
              >
                <div className="overflow-hidden" style={{ height: '200px' }}>
                  <ImageWithFallback
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 bg-white">
                  <CategoryBadge category={article.category} />
                  <h3
                    style={{
                      fontSize: '17px',
                      fontWeight: 700,
                      color: '#1A1A2E',
                      lineHeight: 1.4,
                      letterSpacing: '-0.01em',
                      margin: '12px 0 8px'
                    }}
                  >
                    {article.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: '#6B6B8A', lineHeight: 1.65, marginBottom: '16px' }}>
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-2" style={{ fontSize: '12px', color: '#9CA3AF' }}>
                    <Clock size={12} />
                    <span>{article.readTime}</span>
                    <span>·</span>
                    <span>{article.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load more */}
          <div className="text-center mt-12">
            <button
              style={{
                padding: '12px 32px',
                borderRadius: '30px',
                border: '1px solid rgba(26,26,46,0.15)',
                backgroundColor: 'white',
                color: '#1A1A2E',
                fontSize: '15px',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              Load more articles
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
