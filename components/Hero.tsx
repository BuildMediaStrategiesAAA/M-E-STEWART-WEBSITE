import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, MapPin } from 'lucide-react';

export const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (buttonRef.current) {
      observer.observe(buttonRef.current);
    }

    return () => {
      if (buttonRef.current) {
        observer.unobserve(buttonRef.current);
      }
    };
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <style>{`
        @media (max-width: 1023px) {
          .mobile-active-bg-white {
            background-color: white !important;
            color: #1e3a5f !important;
          }
          .mobile-active-bg-white svg {
            transform: translateX(4px);
          }
          .mobile-active-border-white {
            background-color: white !important;
            color: #1e3a5f !important;
          }
        }
      `}</style>
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop')` }}
      >
        <div className="absolute inset-0 bg-brand-darkBlue/60 mix-blend-multiply"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-center px-6 pt-24 sm:px-12 sm:pt-0 lg:px-24">
        <div className="max-w-4xl">
          <div className="mb-6 flex flex-wrap items-center gap-4">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-brand-blue bg-white rounded-full px-4 py-1 w-fit shadow-md">
              Established Excellence
            </p>
            <p className="flex items-center gap-1 text-xs sm:text-sm font-bold uppercase tracking-widest text-white/90 bg-black/30 px-4 py-1 rounded-full backdrop-blur-sm">
              <MapPin size={14} /> Serving Deal, Kent & Surrounds
            </p>
          </div>

          <h1 className="mb-6 text-4xl font-bold uppercase leading-tight text-white sm:text-5xl md:text-7xl drop-shadow-lg">
            Constructing <br />
            <span className="text-blue-400">Your Vision</span> <br />
            Built to Last.
          </h1>

          <div className="mb-10 max-w-xl rounded-2xl bg-black/60 p-6 backdrop-blur-md border border-white/10 shadow-2xl">
            <p className="text-lg text-white font-light leading-relaxed sm:text-xl">
              Master craftsmanship for projects in Deal and Kent. Building with precision, integrity, and bold design.
            </p>
          </div>

          <div ref={buttonRef} className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className={`group flex items-center justify-center gap-2 bg-brand-blue px-8 py-4 text-lg font-bold uppercase tracking-wide text-white transition-all lg:hover:bg-white lg:hover:text-brand-blue rounded-full shadow-lg lg:hover:shadow-xl ${isVisible ? 'mobile-active-bg-white' : ''}`}
            >
              Get a Quote
              <ChevronRight className="h-5 w-5 transition-transform lg:group-hover:translate-x-1" />
            </Link>
            <Link
              to="/projects"
              className={`flex items-center justify-center gap-2 border-2 border-white px-8 py-4 text-lg font-bold uppercase tracking-wide text-white transition-all lg:hover:bg-white lg:hover:text-brand-darkBlue rounded-full lg:hover:shadow-lg ${isVisible ? 'mobile-active-border-white' : ''}`}
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};