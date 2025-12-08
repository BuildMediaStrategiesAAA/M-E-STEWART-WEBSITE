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
      <div className="bg-gradient-to-br from-brand-darkBlue to-brand-blue text-white py-24 px-6 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold uppercase mb-6 animate-fade-in">
            Partnership Services
          </h1>
          <div className="mx-auto h-1 w-32 bg-white mb-8"></div>
          <p className="text-xl sm:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
            Fast, reliable refurbishment and maintenance solutions for property professionals
          </p>
        </div>
      </div>

      <section className="py-24 px-6 sm:px-12 lg:px-24 bg-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl sm:text-5xl font-bold uppercase text-brand-darkBlue mb-6">
            Estate Agent Partnerships
          </h2>
          <div className="mx-auto h-1 w-24 bg-brand-blue mb-8"></div>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Ongoing maintenance and building work for estate agents.
            </p>
            <div>
              <p className="font-semibold text-brand-darkBlue mb-3">Current work carried out for:</p>
              <ul className="space-y-2 inline-block text-left">
                <li className="flex items-start">
                  <span className="text-brand-blue mr-3 mt-1">•</span>
                  <span>Martins & Co</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-blue mr-3 mt-1">•</span>
                  <span>Jenkinson's Estate Agents and Lettings</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 sm:px-12 lg:px-24 bg-slate-50">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold uppercase text-brand-darkBlue mb-4">
              Services for Partners
            </h2>
            <div className="mx-auto h-1 w-24 bg-brand-blue"></div>
          </div>
          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-start gap-6 lg:gap-8 py-6 border-b border-gray-200 last:border-b-0"
                style={{
                  animation: `fade-in-up 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <div className="flex-shrink-0">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-blue text-white">
                    <service.icon size={28} />
                  </div>
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-2xl font-bold uppercase text-brand-darkBlue mb-3">
                    {service.title}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 sm:px-12 lg:px-24 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-4">
                <p className="text-sm font-bold uppercase tracking-wide text-brand-blue">
                  Before & After
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold uppercase text-brand-darkBlue">
                  Staircase Transformation
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Complete staircase renovation delivering modern elegance and functionality. Professional craftsmanship ensuring lasting quality for your rental properties.
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="grid grid-cols-2 gap-4">
                <div className="partnership-image-container">
                  <img
                    src="/assets/mark_stewart_conversion_stairs_before.webp"
                    alt="Staircase - Before"
                    className="partnership-image"
                  />
                </div>
                <div className="partnership-image-container">
                  <img
                    src="/assets/mark_stewart_conversion_stairs_after.webp"
                    alt="Staircase - After"
                    className="partnership-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 sm:px-12 lg:px-24 bg-slate-50">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2">
              <div className="space-y-4">
                <p className="text-sm font-bold uppercase tracking-wide text-brand-blue">
                  Before & After
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold uppercase text-brand-darkBlue">
                  Property Refurbishment
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Full property transformation from outdated to move-in ready. Fast turnaround times to minimize void periods and maximize rental returns.
                </p>
              </div>
            </div>

            <div className="order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="partnership-image-container">
                  <img
                    src="/assets/mark_stewart_house_refurb_image_before.jpeg"
                    alt="Property - Before"
                    className="partnership-image"
                  />
                </div>
                <div className="partnership-image-container">
                  <img
                    src="/assets/mark_stewart_house_refurb_after.jpeg"
                    alt="Property - After"
                    className="partnership-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 sm:px-12 lg:px-24 bg-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-4xl font-bold uppercase text-brand-darkBlue sm:text-5xl text-center">
            Your Trusted Property Partner
          </h2>
          <div className="mx-auto h-1 w-24 bg-brand-blue mb-12"></div>
          <p className="text-xl text-gray-700 leading-relaxed text-center">
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
            className="inline-block rounded-full px-10 py-4 text-lg font-bold uppercase transition-all bg-white text-brand-darkBlue lg:hover:bg-brand-darkBlue lg:hover:text-white shadow-lg lg:hover:shadow-2xl border-2 border-white"
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

        .partnership-image-container {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          border-radius: 0.5rem;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }

        .partnership-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          image-rendering: -webkit-optimize-contrast;
          image-rendering: crisp-edges;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          transform: translateZ(0);
          -webkit-transform: translateZ(0);
          filter: contrast(1.05) brightness(1.02);
          transition: all 0.3s ease;
        }

        .partnership-image:hover {
          filter: contrast(1.08) brightness(1.03);
          transform: translateZ(0) scale(1.02);
        }

        @media (min-resolution: 2dppx) {
          .partnership-image {
            image-rendering: -webkit-optimize-contrast;
            image-rendering: high-quality;
          }
        }
      `}</style>
    </div>
  );
};
