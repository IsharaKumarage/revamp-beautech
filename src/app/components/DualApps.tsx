export default function DualApps() {
  return (
    <section className="px-8 py-24 bg-[#F5F0E8]">
      <div className="max-w-[960px] mx-auto">
        {/* Business app for professionals */}
        <div
          className="bg-white p-12 pb-12 transition-all duration-300 hover:shadow-xl relative overflow-hidden flex flex-col justify-center min-h-[400px]"
          style={{
            borderRadius: '32px',
            border: '1px solid rgba(26,26,46,0.06)'
          }}
        >
          <div className="relative z-10 max-w-[50%]">
            {/* Icon with solid color */}
            <div
              className="inline-flex items-center justify-center mb-6"
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '16px',
                backgroundColor: '#B89292',
                boxShadow: '0 4px 12px rgba(184,146,146,0.25)'
              }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
              </svg>
            </div>

            <h3
              style={{
                fontSize: 'clamp(28px, 3.5vw, 40px)',
                fontWeight: 700,
                color: '#1A1A2E',
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
                marginBottom: '16px'
              }}
            >
              Business app for professionals
            </h3>

            <p
              style={{
                fontSize: '16px',
                color: '#6B6B8A',
                lineHeight: 1.7,
                marginBottom: '32px'
              }}
            >
              Simple, flexible and powerful software to run your business on the go
            </p>

            {/* App store buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-3 px-5 py-2.5 transition-transform duration-200 hover:scale-105"
                style={{
                  backgroundColor: '#1A1A2E',
                  borderRadius: '12px',
                  textDecoration: 'none'
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div style={{ fontSize: '9px', color: 'rgba(255,255,255,0.7)' }}>Download on the</div>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: 'white', lineHeight: 1 }}>App Store</div>
                </div>
              </a>

              <a
                href="#"
                className="inline-flex items-center gap-3 px-5 py-2.5 transition-transform duration-200 hover:scale-105"
                style={{
                  backgroundColor: '#1A1A2E',
                  borderRadius: '12px',
                  textDecoration: 'none'
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left">
                  <div style={{ fontSize: '9px', color: 'rgba(255,255,255,0.7)' }}>GET IT ON</div>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: 'white', lineHeight: 1 }}>Google Play</div>
                </div>
              </a>
            </div>
          </div>
          
          <div className="absolute right-6 top-6 bottom-6 w-[45%] rounded-[24px] overflow-hidden">
            <img 
              src="/src/imports/IMG2.png" 
              alt="Salon Professional" 
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
