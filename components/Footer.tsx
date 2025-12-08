import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/chatgpt_image_dec_8,_2025,_06_20_23_pm.png';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <style>{`
        @media (max-width: 1023px) {
          .footer-link {
            color: white;
          }
        }
      `}</style>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center">
            <Link to="/" aria-label="M E Stewart home page">
              <img
                src={logo}
                alt="M E Stewart Building Contractor logo"
                className="w-auto h-20 md:h-24 object-contain"
              />
            </Link>
          </div>

          <div className="text-gray-400 text-sm text-center md:text-right">
            <p className="text-white font-semibold mb-2">Serving Deal, Dover & the wider Kent area</p>
            <p>&copy; {new Date().getFullYear()} M E Stewart. All rights reserved.</p>
            <nav className="flex gap-4 mt-2 justify-center md:justify-end" aria-label="Footer navigation">
               <Link to="/privacy-policy" className="footer-link lg:hover:text-white transition-colors">Privacy Policy</Link>
               <a href="mailto:markstewart21@sky.com" className="footer-link lg:hover:text-white transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};