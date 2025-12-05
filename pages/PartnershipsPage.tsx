import React from 'react';
import { Wrench, Clock, Home, Shield, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Wrench,
    title: "Reactive Repairs",
    description: "Emergency call-outs and urgent repairs handled promptly. We understand tenants need issues resolved quickly to maintain satisfaction and property standards."
  },
  {
    icon: Clock,
    title: "Quick-Turn Refurbishments",
    description: "Rapid turnaround between tenancies. Complete property refreshes delivered on time to minimize void periods and maximize rental income."
  },
  {
    icon: Home,
    title: "Void Property Refreshes",
    description: "Full void-to-ready transformations. From deep cleans and redecoration to minor repairs, we prepare properties for new tenants efficiently."
  },
  {
    icon: Shield,
    title: "Insurance Repair Work",
    description: "Comprehensive insurance claim repairs. Working directly with insurers and loss adjusters to restore properties to pre-incident condition."
  },
  {
    icon: Calendar,
    title: "Ongoing Maintenance",
    description: "Planned maintenance programs and regular inspections. Keep your portfolio in excellent condition with scheduled servicing and proactive care."
  }
];

export const PartnershipsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-32 md:pt-36">
      <div className="bg-gradient-to-br from-brand-darkBlue to-brand-blue text-white py-20 px-6 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold uppercase mb-6 animate-fade-in">
            Partnership Services
          </h1>
          <div className="mx-auto h-1 w-32 bg-white mb-6"></div>
          <p className="text-xl sm:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
            Fast, reliable refurbishment and maintenance solutions for property professionals
          </p>
        </div>
      </div>

      <section className="py-20 px-6 sm:px-12 lg:px-24 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative border-2 border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:border-brand-blue rounded-lg"
                style={{
                  animation: `fade-in-up 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand-grey text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-300 group-hover:scale-110">
                  <service.icon size={32} />
                </div>
                <h3 className="mb-4 text-2xl font-bold uppercase text-brand-darkBlue">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 sm:px-12 lg:px-24 bg-slate-50">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-4xl font-bold uppercase text-brand-darkBlue sm:text-5xl">
            Your Trusted Property Partner
          </h2>
          <div className="mx-auto h-1 w-24 bg-brand-blue mb-6"></div>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            We understand the unique demands of managing rental properties and the importance of rapid turnaround times. Our dedicated team delivers professional workmanship, transparent communication, and reliable service scheduling. Whether you manage a single property or an extensive portfolio, we provide the consistency and quality you need to maintain tenant satisfaction and protect your investment.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 sm:px-12 lg:px-24 bg-brand-blue text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold uppercase sm:text-5xl">
            Ready to Partner With Us?
          </h2>
          <p className="mb-8 text-xl leading-relaxed opacity-90">
            Get in touch today to discuss your property portfolio needs and discover how we can support your business with reliable, professional service.
          </p>
          <Link
            to="/contact"
            className="inline-block rounded-full px-10 py-4 text-lg font-bold uppercase transition-all bg-white text-brand-darkBlue hover:bg-brand-darkBlue hover:text-white shadow-lg hover:shadow-2xl"
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
