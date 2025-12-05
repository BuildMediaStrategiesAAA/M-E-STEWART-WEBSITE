import React from 'react';

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
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center">
          <img
            src="/assets/logo.png"
            alt="M E Stewart Building Contractor"
            className="w-auto h-20 md:h-24 object-contain"
          />
        </div>

        <div className="text-gray-400 text-sm text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} M E Stewart. All rights reserved.</p>
          <div className="flex gap-4 mt-2 justify-center md:justify-end">
             <a href="#" className="footer-link lg:hover:text-white transition-colors">Privacy Policy</a>
             <a href="#" className="footer-link lg:hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};