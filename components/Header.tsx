import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

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
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }

        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
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
        }

        .nav-link.active::after {
          animation: underlineSlide 0.4s ease-out forwards, shimmer 1s ease-in-out 0.4s 1;
          transform: scaleX(1);
        }
      `}</style>

      <header
        className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md"
        style={{
          boxShadow: '0 4px 20px rgba(0, 149, 255, 0.6), 0 2px 8px rgba(0, 149, 255, 0.8)'
        }}
      >
        <div className="flex items-center justify-between px-4 md:px-8 lg:px-16 py-0">
          <Link to="/" className="flex items-center flex-shrink-0 -ml-2 md:-ml-4 -my-4 md:-my-5">
            <img
              src={logo}
              alt="M E Stewart Contractors"
              className="h-40 md:h-48 w-auto object-contain leading-none"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8" onMouseLeave={() => setActiveLink(null)}>
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
              className="rounded-full px-6 py-2 text-sm font-bold uppercase transition-all duration-300 bg-brand-blue text-white hover:bg-brand-darkBlue hover:shadow-lg"
            >
              Get Quote
            </Link>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="text-brand-darkBlue w-6 h-6" />
            ) : (
              <Menu className="text-brand-darkBlue w-6 h-6" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-xl md:hidden">
            <nav className="flex flex-col items-center py-8 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-bold uppercase text-brand-darkBlue hover:text-brand-blue transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 px-8 py-3 bg-brand-blue text-white font-bold uppercase rounded-full hover:bg-brand-darkBlue transition-colors"
              >
                Get Quote
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
