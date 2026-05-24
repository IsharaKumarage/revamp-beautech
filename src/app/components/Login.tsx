import { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, ChevronRight, ArrowLeft } from 'lucide-react';
import logo from '../../imports/Beautech_Logo-01.svg';

interface LoginProps {
  onNavigate?: (page: string) => void;
}

export default function Login({ onNavigate }: LoginProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen bg-[#F5F0E8] flex items-center justify-center px-8 py-12 relative">
      {/* Back button */}
      {onNavigate && (
        <button
          onClick={() => onNavigate('home')}
          className="absolute top-8 left-8 flex items-center gap-2 transition-colors hover:text-[#C8A2A2]"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 500,
            color: '#6B6B8A',
            padding: '8px'
          }}
        >
          <ArrowLeft size={18} />
          Back to home
        </button>
      )}

      <div className="w-full max-w-[480px]">
        {/* Logo */}
        <div className="text-center mb-12">
          <img src={logo} alt="BeauTech" className="mx-auto" style={{ height: '36px', width: 'auto', marginBottom: '24px' }} />
          <h1
            style={{
              fontSize: '32px',
              fontWeight: 700,
              color: '#1A1A2E',
              letterSpacing: '-0.02em',
              marginBottom: '8px'
            }}
          >
            Welcome back
          </h1>
          <p style={{ fontSize: '15px', color: '#6B6B8A' }}>
            Log in to your BeauTech account
          </p>
        </div>

        {/* Login card */}
        <div
          className="bg-white p-10"
          style={{
            borderRadius: '24px',
            border: '1px solid rgba(26,26,46,0.08)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.06)'
          }}
        >
          <form onSubmit={(e) => e.preventDefault()}>
            {/* Email input */}
            <div className="mb-5">
              <label
                htmlFor="email"
                style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#1A1A2E',
                  marginBottom: '8px'
                }}
              >
                Email address
              </label>
              <div className="relative">
                <Mail
                  size={18}
                  style={{
                    position: 'absolute',
                    left: '14px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#9CA3AF'
                  }}
                />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  style={{
                    width: '100%',
                    padding: '13px 14px 13px 44px',
                    fontSize: '15px',
                    border: '1px solid rgba(26,26,46,0.12)',
                    borderRadius: '12px',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                    color: '#1A1A2E'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#C8A2A2'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(26,26,46,0.12)'}
                />
              </div>
            </div>

            {/* Password input */}
            <div className="mb-6">
              <label
                htmlFor="password"
                style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#1A1A2E',
                  marginBottom: '8px'
                }}
              >
                Password
              </label>
              <div className="relative">
                <Lock
                  size={18}
                  style={{
                    position: 'absolute',
                    left: '14px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#9CA3AF'
                  }}
                />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  style={{
                    width: '100%',
                    padding: '13px 44px 13px 44px',
                    fontSize: '15px',
                    border: '1px solid rgba(26,26,46,0.12)',
                    borderRadius: '12px',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                    color: '#1A1A2E'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#C8A2A2'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(26,26,46,0.12)'}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute',
                    right: '14px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: '#9CA3AF',
                    padding: 0,
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Remember me & Forgot password */}
            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 cursor-pointer"
                  style={{ accentColor: '#C8A2A2' }}
                />
                <span style={{ fontSize: '14px', color: '#6B6B8A' }}>Remember me</span>
              </label>
              <a
                href="#"
                style={{
                  fontSize: '14px',
                  color: '#C8A2A2',
                  fontWeight: 600,
                  textDecoration: 'none'
                }}
              >
                Forgot password?
              </a>
            </div>

            {/* Login button */}
            <button
              type="submit"
              className="w-full transition-all duration-200 hover:opacity-90 flex items-center justify-center gap-2"
              style={{
                backgroundColor: '#C8A2A2',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                fontSize: '15px',
                fontWeight: 600,
                padding: '14px',
                cursor: 'pointer',
                marginBottom: '20px'
              }}
            >
              Log in
              <ChevronRight size={18} />
            </button>

            {/* Divider */}
            <div className="relative mb-6">
              <div style={{ borderTop: '1px solid rgba(26,26,46,0.08)' }} />
              <span
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  backgroundColor: 'white',
                  padding: '0 12px',
                  fontSize: '13px',
                  color: '#9CA3AF'
                }}
              >
                or
              </span>
            </div>

            {/* Google login */}
            <button
              type="button"
              className="w-full transition-all duration-200 hover:bg-gray-50 flex items-center justify-center gap-3"
              style={{
                backgroundColor: 'white',
                color: '#1A1A2E',
                border: '1px solid rgba(26,26,46,0.12)',
                borderRadius: '12px',
                fontSize: '15px',
                fontWeight: 600,
                padding: '13px',
                cursor: 'pointer'
              }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M19.8 10.2273C19.8 9.51819 19.7364 8.83637 19.6182 8.18182H10.2V12.05H15.6109C15.3727 13.3 14.6182 14.3591 13.4727 15.0682V17.5773H16.7818C18.7091 15.8364 19.8 13.2727 19.8 10.2273Z" fill="#4285F4"/>
                <path d="M10.2 20C12.9 20 15.1727 19.1045 16.7818 17.5773L13.4727 15.0682C12.5091 15.6682 11.2909 16.0227 10.2 16.0227C7.59091 16.0227 5.37273 14.2636 4.52727 11.9H1.11364V14.4909C2.71364 17.6591 6.20909 20 10.2 20Z" fill="#34A853"/>
                <path d="M4.52727 11.9C4.32727 11.3 4.21364 10.6591 4.21364 10C4.21364 9.34091 4.32727 8.7 4.52727 8.1V5.50909H1.11364C0.427273 6.85909 0 8.38636 0 10C0 11.6136 0.427273 13.1409 1.11364 14.4909L4.52727 11.9Z" fill="#FBBC05"/>
                <path d="M10.2 3.97727C11.4091 3.97727 12.4909 4.38182 13.3545 5.19091L16.2818 2.26364C15.1682 1.23636 12.9045 0 10.2 0C6.20909 0 2.71364 2.34091 1.11364 5.50909L4.52727 8.1C5.37273 5.73636 7.59091 3.97727 10.2 3.97727Z" fill="#EA4335"/>
              </svg>
              Continue with Google
            </button>
          </form>

          {/* Sign up link */}
          <div className="text-center mt-8">
            <span style={{ fontSize: '14px', color: '#6B6B8A' }}>
              Don&apos;t have an account?{' '}
              <button
                onClick={() => onNavigate?.('home')}
                style={{
                  color: '#C8A2A2',
                  fontWeight: 600,
                  textDecoration: 'none',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0
                }}
              >
                Sign up for free
              </button>
            </span>
          </div>
        </div>

        {/* Footer text */}
        <p className="text-center mt-8" style={{ fontSize: '13px', color: '#9CA3AF' }}>
          By logging in, you agree to our{' '}
          <a href="#" style={{ color: '#6B6B8A', textDecoration: 'underline' }}>Terms of Service</a>
          {' '}and{' '}
          <a href="#" style={{ color: '#6B6B8A', textDecoration: 'underline' }}>Privacy Policy</a>
        </p>
      </div>
    </div>
  );
}
