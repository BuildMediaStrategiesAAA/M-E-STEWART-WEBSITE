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
              We have 28 years of experience in the building trade.
            </p>
            <p>
              We deliver residential and commercial building work across the south-east corner of Kent.
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
              We operate across the following areas:
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
              We also cover the wider south-east Kent area.
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
              We work with a team of trusted tradesmen.
            </p>
            <p>
              We cover all trades depending on the project requirements.
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
              We carry out maintenance and building work for estate agents including Martins & Co and Jenkinson's Estate Agents and Lettings.
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
              We undertake the following types of work:
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
              We manage projects from start to finish.
            </p>
            <p>
              We coordinate all trades internally.
            </p>
            <p>
              We maintain clear communication throughout the build.
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
