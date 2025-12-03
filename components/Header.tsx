import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-1">
      <div className="flex items-center justify-between px-4 sm:px-8 lg:px-16">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/assets/ChatGPT Image Dec 3, 2025, 06_34_36 PM.png"
            alt="M E Stewart Contractors"
            className="w-auto h-32 object-contain"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-bold uppercase tracking-wide transition-colors text-brand-slate hover:text-brand-blue"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full px-6 py-2 text-sm font-bold uppercase transition-colors bg-brand-blue text-white hover:bg-brand-darkBlue"
          >
            Get Quote
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="text-brand-darkBlue" />
          ) : (
            <Menu className="text-brand-darkBlue" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl md:hidden flex flex-col items-center py-8 gap-6 animate-fade-in-down">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-bold uppercase text-brand-darkBlue hover:text-brand-blue"
            >
              {link.name}
            </a>
          ))}
          <a
             href="#contact"
             onClick={() => setMobileMenuOpen(false)}
             className="mt-4 px-8 py-3 bg-brand-blue text-white font-bold uppercase rounded-full"
           >
             Get Quote
           </a>
        </div>
      )}
    </header>
  );
};