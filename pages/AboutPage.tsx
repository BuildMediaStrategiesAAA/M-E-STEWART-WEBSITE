import React from 'react';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-32 md:pt-36">
      <div className="bg-gradient-to-br from-brand-darkBlue to-brand-blue text-white py-20 px-6 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold uppercase mb-6 animate-fade-in">
            About M E Stewart
          </h1>
          <div className="mx-auto h-1 w-32 bg-white mb-6"></div>
          <p className="text-xl sm:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
            Building Contractors in Kent
          </p>
        </div>
      </div>

      <section className="py-20 px-6 sm:px-12 lg:px-24 bg-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold uppercase text-brand-darkBlue mb-6">
            Company Overview
          </h2>
          <div className="h-1 w-24 bg-brand-blue mb-8"></div>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              M E Stewart Building Contractors Ltd has 28 years of experience in the building trade.
            </p>
            <p>
              The business delivers residential and commercial building work across the south-east corner of Kent.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 sm:px-12 lg:px-24 bg-slate-50">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold uppercase text-brand-darkBlue mb-6">
            Areas Covered
          </h2>
          <div className="h-1 w-24 bg-brand-blue mb-8"></div>
          <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
            <p>
              M E Stewart Building Contractors Ltd operates across the following areas:
            </p>
            <ul className="space-y-2 ml-6">
              <li>Deal</li>
              <li>Canterbury</li>
              <li>St Margaret's</li>
              <li>Dover</li>
              <li>Margate</li>
              <li>Ramsgate</li>
              <li>Folkestone</li>
              <li>Sandgate</li>
            </ul>
            <p>
              The company also covers the wider south-east Kent area.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 sm:px-12 lg:px-24 bg-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold uppercase text-brand-darkBlue mb-6">
            Team and Trades
          </h2>
          <div className="h-1 w-24 bg-brand-blue mb-8"></div>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              Work is carried out with a team of trusted tradesmen.
            </p>
            <p>
              All trades are covered depending on the project requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 sm:px-12 lg:px-24 bg-slate-50">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold uppercase text-brand-darkBlue mb-6">
            Experience and Ongoing Work
          </h2>
          <div className="h-1 w-24 bg-brand-blue mb-8"></div>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              M E Stewart Building Contractors Ltd carries out maintenance and building work for estate agents including Martins & Co and Jenkinson's Estate Agents and Lettings.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 sm:px-12 lg:px-24 bg-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold uppercase text-brand-darkBlue mb-6">
            Types of Work Undertaken
          </h2>
          <div className="h-1 w-24 bg-brand-blue mb-8"></div>
          <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
            <p>
              The company undertakes the following types of work:
            </p>
            <ul className="space-y-2 ml-6">
              <li>Extensions and conversions</li>
              <li>Kitchen and bathroom refurbishments</li>
              <li>General building works</li>
              <li>Residential and commercial projects</li>
              <li>Architectural design services where required</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 sm:px-12 lg:px-24 bg-slate-50">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold uppercase text-brand-darkBlue mb-6">
            Working Approach
          </h2>
          <div className="h-1 w-24 bg-brand-blue mb-8"></div>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              Projects are managed from start to finish.
            </p>
            <p>
              Coordination of trades is handled internally.
            </p>
            <p>
              Clear communication is maintained throughout the build.
            </p>
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
            className="inline-block rounded-full px-10 py-4 text-lg font-bold uppercase transition-all bg-white text-brand-darkBlue hover:bg-brand-darkBlue hover:text-white shadow-lg hover:shadow-2xl"
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

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};
