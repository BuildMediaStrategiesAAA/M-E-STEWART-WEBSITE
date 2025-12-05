import React from 'react';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const areas = [
  {
    name: "Deal",
    description: "Historic seaside town with period properties and modern developments"
  },
  {
    name: "Walmer",
    description: "Coastal village with Victorian and Edwardian architecture"
  },
  {
    name: "Dover",
    description: "Major port town featuring commercial and residential projects"
  },
  {
    name: "Sandwich",
    description: "Medieval town with conservation areas and listed buildings"
  },
  {
    name: "Canterbury",
    description: "Cathedral city with heritage properties and new builds"
  },
  {
    name: "Folkestone",
    description: "Creative quarter and coastal regeneration projects"
  }
];

export const AreasPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-32 md:pt-36">
      <div className="bg-gradient-to-br from-brand-darkBlue to-brand-blue text-white py-20 px-6 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold uppercase mb-6 animate-fade-in">
            Areas We Cover
          </h1>
          <div className="mx-auto h-1 w-32 bg-white mb-6"></div>
          <p className="text-xl sm:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
            Reliable building and refurbishment services across East Kent
          </p>
        </div>
      </div>

      <section className="py-20 px-6 sm:px-12 lg:px-24 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {areas.map((area, index) => (
              <div
                key={index}
                className="group relative border-2 border-gray-200 bg-white p-8 transition-all duration-300 lg:hover:-translate-y-3 lg:hover:shadow-2xl lg:hover:border-brand-blue rounded-lg"
                style={{
                  animation: `fade-in-up 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand-grey text-brand-blue lg:group-hover:bg-brand-blue lg:group-hover:text-white transition-all duration-300 lg:group-hover:scale-110">
                  <MapPin size={32} />
                </div>
                <h3 className="mb-4 text-2xl font-bold uppercase text-brand-darkBlue">
                  {area.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 sm:px-12 lg:px-24 bg-slate-50">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-4xl font-bold uppercase text-brand-darkBlue sm:text-5xl">
            Full Building Services Across East Kent
          </h2>
          <div className="mx-auto h-1 w-24 bg-brand-blue mb-6"></div>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            M E Stewart Building Contractors provides comprehensive construction and refurbishment services to homeowners throughout East Kent. Whether you're planning a home extension, renovation, new build, or commercial project, our experienced team delivers quality workmanship with local expertise.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 sm:px-12 lg:px-24 bg-brand-blue text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold uppercase sm:text-5xl">
            Ready to Discuss Your Project?
          </h2>
          <p className="mb-8 text-xl leading-relaxed opacity-90">
            Contact us today for a free consultation. We serve all areas across East Kent with the same commitment to excellence.
          </p>
          <Link
            to="/contact"
            className="inline-block rounded-full px-10 py-4 text-lg font-bold uppercase transition-all bg-white text-brand-darkBlue lg:hover:bg-brand-darkBlue lg:hover:text-white shadow-lg lg:hover:shadow-2xl"
          >
            Get In Touch
          </Link>
        </div>
      </section>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};
