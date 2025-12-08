import React from 'react';
import { Building, MapPin, Users, Briefcase, Hammer, Target } from 'lucide-react';

const infoCards = [
  {
    icon: Building,
    title: "Company Overview",
    content: [
      "We have 28 years of experience in the building trade.",
      "We deliver residential and commercial building work across the south-east corner of Kent."
    ]
  },
  {
    icon: Users,
    title: "Team and Trades",
    content: [
      "We work with a team of trusted tradesmen.",
      "We cover all trades depending on the project requirements."
    ]
  },
  {
    icon: Briefcase,
    title: "Experience and Ongoing Work",
    content: [
      "We carry out maintenance and building work for estate agents including Martins & Co and Jenkinson's Estate Agents and Lettings."
    ]
  },
  {
    icon: Target,
    title: "Working Approach",
    content: [
      "We manage projects from start to finish.",
      "We coordinate all trades internally.",
      "We maintain clear communication throughout the build."
    ]
  }
];

const areas = [
  "Deal",
  "Canterbury",
  "St Margaret's",
  "Dover",
  "Margate",
  "Ramsgate",
  "Folkestone",
  "Sandgate"
];

const workTypes = [
  "Extensions and conversions",
  "Kitchen and bathroom refurbishments",
  "General building works",
  "Residential and commercial projects",
  "Architectural design services where required"
];

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-24">
      <div className="bg-gradient-to-br from-brand-darkBlue to-brand-blue text-white py-20 px-6 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold uppercase mb-6 animate-fade-in">
            About M E Stewart
          </h1>
          <div className="mx-auto h-1 w-32 bg-white mb-6"></div>
          <p className="text-xl sm:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
            Building Contractors Based in Deal, Serving Dover & Kent
          </p>
        </div>
      </div>

      <section className="py-20 px-6 sm:px-12 lg:px-24 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {infoCards.map((card, index) => (
              <div
                key={index}
                className="group p-8 bg-slate-50 rounded-lg border-2 border-gray-200 hover:border-brand-blue hover:shadow-xl transition-all duration-300"
                style={{
                  animation: `fade-in-up 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand-blue text-white group-hover:scale-110 transition-transform duration-300">
                  <card.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold uppercase text-brand-darkBlue mb-4">
                  {card.title}
                </h3>
                <div className="space-y-3">
                  {card.content.map((text, idx) => (
                    <p key={idx} className="text-gray-700 leading-relaxed text-lg">
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 sm:px-12 lg:px-24 bg-slate-50">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold uppercase text-brand-darkBlue mb-4 sm:text-5xl">
              Areas Covered
            </h2>
            <div className="mx-auto h-1 w-24 bg-brand-blue mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We operate across the following areas and the wider south-east Kent region:
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-6">
            {areas.map((area, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-2 border-gray-200 hover:border-brand-blue"
                style={{
                  animation: `fade-in-up 0.5s ease-out ${index * 0.05}s both`
                }}
              >
                <MapPin className="text-brand-blue flex-shrink-0" size={24} />
                <span className="text-lg font-semibold text-brand-darkBlue">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 sm:px-12 lg:px-24 bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold uppercase text-brand-darkBlue mb-4 sm:text-5xl">
              Types of Work Undertaken
            </h2>
            <div className="mx-auto h-1 w-24 bg-brand-blue mb-6"></div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {workTypes.map((work, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-slate-50 rounded-lg border-2 border-gray-200 hover:border-brand-blue hover:shadow-lg transition-all duration-300"
                style={{
                  animation: `fade-in-up 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <div className="flex-shrink-0 mt-1">
                  <Hammer className="text-brand-blue" size={24} />
                </div>
                <p className="text-lg text-gray-700 leading-relaxed font-medium">
                  {work}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 sm:px-12 lg:px-24 bg-brand-blue text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold uppercase sm:text-5xl">
            Get In Touch
          </h2>
          <p className="mb-8 text-xl leading-relaxed opacity-90">
            Contact us to discuss your project requirements.
          </p>
          <a
            href="/contact"
            className="inline-block rounded-full px-10 py-4 text-lg font-bold uppercase transition-all bg-white text-brand-darkBlue hover:bg-brand-darkBlue hover:text-white shadow-lg hover:shadow-2xl border-2 border-white"
          >
            Contact Us
          </a>
        </div>
      </section>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

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

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};
