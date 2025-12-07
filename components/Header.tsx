import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Partnerships', href: '/partnerships' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <style>{`
        @keyframes underlineSlide {
          0% {
            transform: scaleX(0);
          }
          100% {
            transform: scaleX(1);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }

        .nav-link {
          position: relative;
          display: inline-block;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, #0095ff, #00d4ff, #0095ff);
          background-size: 200% 100%;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }

        @media (min-width: 1024px) {
          .nav-link.active::after {
            animation: underlineSlide 0.4s ease-out forwards, shimmer 1s ease-in-out 0.4s 1;
            transform: scaleX(1);
          }
        }

        .logo-img {
          image-rendering: high-quality;
          image-rendering: -webkit-optimize-contrast;
          backface-visibility: hidden;
          transform: translateZ(0);
          -webkit-font-smoothing: subpixel-antialiased;
        }
      `}</style>
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md"
        style={{
          boxShadow: '0 4px 20px rgba(0, 149, 255, 0.6), 0 2px 8px rgba(0, 149, 255, 0.8)',
          height: '105px'
        }}
      >
      <div className="flex items-center justify-between px-3 sm:px-4 md:px-8 lg:px-16 h-full">
        {/* Logo */}
        <Link to="/" className="flex items-center" style={{ marginTop: '5px', marginBottom: '-15px', marginLeft: '-10px' }}>
          <img
            src="/assets/chatgpt_image_dec_7,_2025,_07_24_14_pm.png"
            alt="M E Stewart Contractors"
            className="logo-img w-auto h-24 sm:h-28 md:h-36 lg:h-40 object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8" onMouseLeave={() => setActiveLink(null)}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onMouseEnter={() => setActiveLink(link.name)}
              className={`nav-link text-sm font-bold uppercase tracking-wide transition-colors text-brand-slate hover:text-brand-blue ${
                activeLink === link.name ? 'active' : ''
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="rounded-full px-6 py-2 text-sm font-bold uppercase transition-colors bg-brand-blue text-white hover:bg-brand-darkBlue"
          >
            Get Quote
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="text-brand-darkBlue w-5 h-5 sm:w-6 sm:h-6" />
          ) : (
            <Menu className="text-brand-darkBlue w-5 h-5 sm:w-6 sm:h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl md:hidden flex flex-col items-center py-8 gap-6 animate-fade-in-down">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="nav-link text-lg font-bold uppercase text-brand-darkBlue hover:text-brand-blue"
            >
              {link.name}
            </Link>
          ))}
          <Link
             to="/contact"
             onClick={() => setMobileMenuOpen(false)}
             className="mt-4 px-8 py-3 bg-brand-blue text-white font-bold uppercase rounded-full"
           >
             Get Quote
           </Link>
        </div>
      )}
    </header>
    </>
  );
};