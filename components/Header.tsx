import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        @keyframes shimmer {
          0% {
            transform: scaleX(0);
            opacity: 0.5;
          }
          50% {
            opacity: 1;
            box-shadow: 0 0 10px rgba(0, 149, 255, 0.8);
          }
          100% {
            transform: scaleX(1);
            opacity: 0.8;
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

        .nav-link:hover::after {
          transform: scaleX(1);
          animation: shimmer 1.5s ease-in-out infinite;
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
        className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-0.5 md:py-1"
        style={{
          boxShadow: '0 4px 20px rgba(0, 149, 255, 0.6), 0 2px 8px rgba(0, 149, 255, 0.8)'
        }}
      >
      <div className="flex items-center justify-between px-3 sm:px-4 md:px-8 lg:px-16">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/assets/logo.png"
            alt="M E Stewart Contractors"
            className="logo-img w-auto h-16 sm:h-20 md:h-28 lg:h-32 object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="nav-link text-sm font-bold uppercase tracking-wide transition-colors text-brand-slate hover:text-brand-blue"
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