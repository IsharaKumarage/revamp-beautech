import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import logo from '../../imports/Beautech_Logo-01.svg';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [showBusinessTypes, setShowBusinessTypes] = useState(false);
  const [showResources, setShowResources] = useState(false);

  const businessTypes = [
    'Salon', 'Barber', 'Nails', 'Spa & sauna', 'Medspa', 'Massage',
    'Fitness & recovery', 'Physical therapy', 'Health practices',
    'Tattooing & piercing', 'Pet grooming', 'Tanning studio'
  ];

  const resourceLinks = [
    { label: 'Blog', page: 'blog', desc: 'Stories & tips for beauty businesses' },
    { label: 'Help Center', page: 'help', desc: 'Guides, FAQs and video tutorials' },
    { label: 'Webinars', page: 'webinars', desc: 'Live training sessions in Sinhala & Tamil' },
    { label: "What's New", page: 'whats-new', desc: 'Latest features and product updates' },
  ];

  const baseLinkStyle: React.CSSProperties = {
    fontSize: '15px',
    fontWeight: 500,
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    textDecoration: 'none',
    color: '#111827'
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b" style={{ borderColor: '#E5E7EB' }}>
      <div className="max-w-[1400px] mx-auto px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-10">
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
          >
            <img src={logo} alt="BeauTech" style={{ height: '30px' }} />
          </button>

          <div className="flex items-center gap-8">
            {/* Business types dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShowBusinessTypes(true)}
              onMouseLeave={() => setShowBusinessTypes(false)}
            >
              <button style={baseLinkStyle}>
                Business types
                <ChevronDown
                  size={14}
                  style={{
                    opacity: 0.55,
                    transform: showBusinessTypes ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s'
                  }}
                />
              </button>

              {showBusinessTypes && (
                <div
                  className="absolute top-full left-0 bg-white rounded-2xl shadow-xl z-50 p-6"
                  style={{ marginTop: '12px', width: '580px', border: '1px solid #E5E7EB' }}
                >
                  <div className="grid grid-cols-3 gap-x-4 gap-y-1">
                    {businessTypes.map((type, i) => (
                      <a
                        key={i}
                        href="#"
                        className="block px-3 py-2.5 rounded-lg transition-colors hover:bg-[#F5F0E8]"
                        style={{ fontSize: '14px', color: '#374151', fontWeight: 500, textDecoration: 'none' }}
                      >
                        {type}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a
              href={currentPage === 'home' ? '#features' : '#'}
              onClick={() => currentPage !== 'home' && onNavigate('home')}
              style={baseLinkStyle}
            >
              Features
            </a>

            <a
              href={currentPage === 'home' ? '#pricing' : '#'}
              onClick={() => currentPage !== 'home' && onNavigate('home')}
              style={baseLinkStyle}
            >
              Pricing
            </a>

            {/* Resources dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShowResources(true)}
              onMouseLeave={() => setShowResources(false)}
            >
              <button style={baseLinkStyle}>
                Resources
                <ChevronDown
                  size={14}
                  style={{
                    opacity: 0.55,
                    transform: showResources ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s'
                  }}
                />
              </button>

              {showResources && (
                <div
                  className="absolute top-full left-0 bg-white rounded-2xl shadow-xl z-50 p-4"
                  style={{ marginTop: '12px', width: '280px', border: '1px solid #E5E7EB' }}
                >
                  {resourceLinks.map((link, i) => (
                    <button
                      key={i}
                      onClick={() => { onNavigate(link.page); setShowResources(false); }}
                      className="w-full text-left px-4 py-3 rounded-xl transition-colors hover:bg-[#F5F0E8] flex flex-col gap-0.5"
                      style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                    >
                      <span style={{ fontSize: '14px', fontWeight: 600, color: '#111827' }}>{link.label}</span>
                      <span style={{ fontSize: '12px', color: '#9CA3AF' }}>{link.desc}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Blog direct link */}
            <button
              onClick={() => onNavigate('blog')}
              style={{
                ...baseLinkStyle,
                color: currentPage === 'blog' ? '#C8A2A2' : '#111827',
                fontWeight: currentPage === 'blog' ? 600 : 500
              }}
            >
              Blog
            </button>
          </div>
        </div>

        {/* Auth buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('login')}
            style={{ ...baseLinkStyle, padding: '10px 16px' }}
          >
            Log in
          </button>
          <button
            className="transition-all duration-200 hover:opacity-90"
            style={{
              backgroundColor: '#C8A2A2',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '15px',
              fontWeight: 600,
              padding: '10px 20px',
              cursor: 'pointer'
            }}
          >
            Get started
          </button>
        </div>
      </div>
    </nav>
  );
}
