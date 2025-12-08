import React from 'react';
import { Hammer, Home, Ruler, HardHat, Building, PaintBucket, CheckCircle, Clock, Award, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Home,
    title: "General Building",
    description: "Comprehensive building services for all types of construction projects with expert craftsmanship and attention to detail."
  },
  {
    icon: Hammer,
    title: "Fire and Flood Renovation",
    description: "Specialist restoration services to repair and restore properties damaged by fire or flood, returning them to their former glory."
  },
  {
    icon: Building,
    title: "Loft Conversions",
    description: "Unlock the potential of your attic. Creating master suites, offices, and additional bedrooms with expert design."
  },
  {
    icon: HardHat,
    title: "Project Management",
    description: "Complete project oversight from planning to completion, ensuring your build stays on time, on budget, and to specification."
  },
  {
    icon: Home,
    title: "Sustainable Construction",
    description: "Eco-friendly building solutions using sustainable materials and energy-efficient designs for a greener future."
  },
  {
    icon: Building,
    title: "Workshop Design / Construction",
    description: "Custom-built workshops tailored to your specific needs, from hobbyist spaces to professional working environments."
  },
  {
    icon: HardHat,
    title: "Foundations",
    description: "Expert foundation work ensuring solid, stable bases for all construction projects with proper groundwork and drainage."
  },
  {
    icon: Shield,
    title: "Insurance Claim Specialist",
    description: "Experienced in handling insurance-related repairs and renovations, working directly with insurers for seamless claims."
  },
  {
    icon: Ruler,
    title: "Structural Design",
    description: "Professional structural engineering and design services to ensure safety, compliance, and optimal building performance."
  },
  {
    icon: Hammer,
    title: "Demolition",
    description: "Safe and efficient demolition services for full or partial building removal, including site clearance and waste disposal."
  },
  {
    icon: Home,
    title: "New Builds",
    description: "Complete project management from foundation to finish. We build dream homes with uncompromising quality and craftsmanship."
  },
  {
    icon: Ruler,
    title: "Extensions / Conversions",
    description: "Expand your living space seamlessly with single-story, double-story, and garage conversions that blend perfectly with existing structures."
  },
  {
    icon: Building,
    title: "Period Property Restoration",
    description: "Specialist restoration of period and heritage properties, preserving character while integrating modern comforts."
  },
  {
    icon: PaintBucket,
    title: "Refurbishments",
    description: "Complete property refurbishment services, modernizing interiors and exteriors while maintaining structural integrity."
  },
  {
    icon: Hammer,
    title: "Property Maintenance / Repair",
    description: "Ongoing maintenance and repair services to keep your property in excellent condition year-round."
  },
  {
    icon: Building,
    title: "Garage Conversions",
    description: "Transform unused garage space into functional living areas, home offices, gyms, or additional bedrooms."
  },
  {
    icon: Award,
    title: "Heritage Property Specialist",
    description: "Expert conservation and restoration of listed and heritage buildings, respecting historical significance and regulations."
  },
  {
    icon: HardHat,
    title: "Structural Steels",
    description: "Installation of structural steel beams and supports for load-bearing alterations, extensions, and new builds."
  },
  {
    icon: Home,
    title: "Garden Studios",
    description: "Beautiful garden studio constructions for home offices, art studios, gyms, or guest accommodations."
  },
  {
    icon: Clock,
    title: "Emergency Builder Service",
    description: "24/7 emergency building services for urgent repairs, storm damage, and structural issues requiring immediate attention."
  }
];

const whyChooseUs = [
  {
    icon: Award,
    title: "Excellence",
    description: "Award-winning craftsmanship with attention to every detail"
  },
  {
    icon: Clock,
    title: "On Time",
    description: "Projects delivered within agreed timelines and milestones"
  },
  {
    icon: Shield,
    title: "Guaranteed",
    description: "Comprehensive warranties and insurance-backed guarantees"
  },
  {
    icon: CheckCircle,
    title: "Quality",
    description: "Premium materials and skilled tradespeople on every project"
  }
];

export const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-32 md:pt-36">
      <div className="bg-gradient-to-br from-brand-darkBlue to-brand-blue text-white py-24 px-6 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold uppercase mb-6 animate-fade-in">
            Our Services
          </h1>
          <div className="mx-auto h-1 w-32 bg-white mb-8"></div>
          <p className="text-xl sm:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
            From groundbreaking to final touches, we deliver exceptional construction services across Kent and surrounding areas.
          </p>
        </div>
      </div>

      {services.map((service, index) => (
        <section
          key={index}
          className={`py-16 px-6 sm:px-12 lg:px-24 ${
            index % 2 === 0 ? 'bg-white' : 'bg-slate-50'
          }`}
        >
          <div className="mx-auto max-w-7xl">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
              index % 2 === 0 ? '' : 'lg:flex-row-reverse'
            }`}>
              <div className={index % 2 === 0 ? '' : 'lg:order-2'}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-brand-blue text-white">
                    <service.icon size={28} />
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold uppercase text-brand-darkBlue">
                    {service.title}
                  </h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="w-full aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg"></div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-20 px-6 sm:px-12 lg:px-24 bg-white border-t border-gray-200">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold uppercase text-brand-darkBlue sm:text-5xl">
              Why Choose M E Stewart
            </h2>
            <div className="mx-auto h-1 w-24 bg-brand-blue"></div>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-blue text-white">
                    <item.icon size={36} />
                  </div>
                </div>
                <h3 className="mb-3 text-xl font-bold uppercase text-brand-darkBlue">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 sm:px-12 lg:px-24 bg-brand-darkBlue text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold uppercase sm:text-5xl">
            Ready to Start Your Project?
          </h2>
          <p className="mb-8 text-xl leading-relaxed opacity-90">
            Get in touch today for a free consultation and quote. Let's bring your vision to life.
          </p>
          <Link
            to="/contact"
            className="inline-block rounded-full px-10 py-4 text-lg font-bold uppercase transition-all bg-brand-blue text-white lg:hover:bg-white lg:hover:text-brand-darkBlue shadow-lg lg:hover:shadow-2xl"
          >
            Get A Free Quote
          </Link>
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
