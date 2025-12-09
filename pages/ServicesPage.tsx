import React from 'react';
import { Hammer, Home, Ruler, HardHat, Building, PaintBucket, CheckCircle, Clock, Award, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Home,
    title: "General Building",
    description: "Comprehensive building services for all types of construction projects with expert craftsmanship and attention to detail.",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
    alt: "Professional construction worker on building site"
  },
  {
    icon: Hammer,
    title: "Fire and Flood Renovation",
    description: "Specialist restoration services to repair and restore properties damaged by fire or flood, returning them to their former glory.",
    img: "/assets/ricardo-gomez-angel-lxfvpmrtine-unsplash.jpg",
    alt: "Fire damaged house requiring restoration"
  },
  {
    icon: Building,
    title: "Loft Conversions",
    description: "Unlock the potential of your attic. Creating master suites, offices, and additional bedrooms with expert design.",
    img: "/assets/stephen-munley-vdahehdmfl0-unsplash.jpg",
    alt: "Converted loft space with wooden beams and bedroom"
  },
  {
    icon: HardHat,
    title: "Project Management",
    description: "Complete project oversight from planning to completion, ensuring your build stays on time, on budget, and to specification.",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
    alt: "Construction project planning and management"
  },
  {
    icon: Home,
    title: "Sustainable Construction",
    description: "Eco-friendly building solutions using sustainable materials and energy-efficient designs for a greener future.",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
    alt: "Eco-friendly sustainable building design"
  },
  {
    icon: Building,
    title: "Workshop Design / Construction",
    description: "Custom-built workshops tailored to your specific needs, from hobbyist spaces to professional working environments.",
    img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1200&auto=format&fit=crop",
    alt: "Custom workshop interior construction"
  },
  {
    icon: HardHat,
    title: "Foundations",
    description: "Expert foundation work ensuring solid, stable bases for all construction projects with proper groundwork and drainage.",
    img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1200&auto=format&fit=crop",
    alt: "Foundation and groundwork construction"
  },
  {
    icon: Shield,
    title: "Insurance Claim Specialist",
    description: "Experienced in handling insurance-related repairs and renovations, working directly with insurers for seamless claims.",
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop",
    alt: "Insurance documentation and property assessment"
  },
  {
    icon: Ruler,
    title: "Structural Design",
    description: "Professional structural engineering and design services to ensure safety, compliance, and optimal building performance.",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
    alt: "Architectural blueprints and structural design"
  },
  {
    icon: Hammer,
    title: "Demolition",
    description: "Safe and efficient demolition services for full or partial building removal, including site clearance and waste disposal.",
    img: "/assets/gene-gallin-e6km98q_d4o-unsplash.jpg",
    alt: "Professional demolition and site clearance"
  },
  {
    icon: Home,
    title: "New Builds",
    description: "Complete project management from foundation to finish. We build dream homes with uncompromising quality and craftsmanship.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    alt: "Modern new build residential construction"
  },
  {
    icon: Ruler,
    title: "Extensions / Conversions",
    description: "Expand your living space seamlessly with single-story, double-story, and garage conversions that blend perfectly with existing structures.",
    img: "/assets/a-rahmat-mn-zheprneyq0w-unsplash.jpg",
    alt: "Home extension and conversion project"
  },
  {
    icon: PaintBucket,
    title: "Refurbishments",
    description: "Complete property refurbishment services, modernizing interiors and exteriors while maintaining structural integrity.",
    img: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=1200&auto=format&fit=crop",
    alt: "Interior property refurbishment and renovation"
  },
  {
    icon: Hammer,
    title: "Property Maintenance / Repair",
    description: "Ongoing maintenance and repair services to keep your property in excellent condition year-round.",
    img: "/assets/callum-hill-oamw52scgi0-unsplash.jpg",
    alt: "Property maintenance and repair work"
  },
  {
    icon: Building,
    title: "Garage Conversions",
    description: "Transform unused garage space into functional living areas, home offices, gyms, or additional bedrooms.",
    img: "/assets/thanos-pal-wfov3bn00mu-unsplash.jpg",
    alt: "Garage conversion to living space"
  },
  {
    icon: Award,
    title: "Heritage Property Specialist",
    description: "Expert conservation and restoration of listed and heritage buildings, respecting historical significance and regulations.",
    img: "/assets/tanya-barrow-jduv5-lpmfc-unsplash.jpg",
    alt: "Historic heritage building restoration"
  },
  {
    icon: HardHat,
    title: "Structural Steels",
    description: "Installation of structural steel beams and supports for load-bearing alterations, extensions, and new builds.",
    img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop",
    alt: "Structural steel beam installation"
  },
  {
    icon: Home,
    title: "Garden Studios",
    description: "Beautiful garden studio constructions for home offices, art studios, gyms, or guest accommodations.",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
    alt: "Modern garden studio office space"
  },
  {
    icon: Clock,
    title: "Emergency Builder Service",
    description: "24/7 emergency building services for urgent repairs, storm damage, and structural issues requiring immediate attention.",
    img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200&auto=format&fit=crop",
    alt: "Emergency building repair service"
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
    <div className="min-h-screen bg-slate-50 pt-24">
      <div className="bg-gradient-to-br from-brand-darkBlue to-brand-blue text-white py-24 px-6 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold uppercase mb-6 animate-fade-in">
            Building Services in Deal & Dover
          </h1>
          <div className="mx-auto h-1 w-32 bg-white mb-8"></div>
          <p className="text-xl sm:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
            From groundbreaking to final touches, we deliver exceptional construction services across Deal, Dover, and the wider Kent area.
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
                <div className="w-full aspect-[4/3] rounded-lg shadow-lg overflow-hidden relative group">
                  <img
                    src={service.img}
                    alt={service.alt}
                    className="w-full h-full object-cover transition-transform duration-500 lg:group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-darkBlue/80 to-transparent opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <h3 className="text-white text-xl font-bold uppercase">{service.title}</h3>
                  </div>
                </div>
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

        @keyframes draw {
          0% {
            stroke-dashoffset: var(--dasharray, 400);
          }
          50% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: var(--dasharray, 400);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes pulse-ring {
          0%, 100% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.2;
          }
        }

        .pulse-ring {
          animation: pulse-ring 2s ease-in-out infinite;
        }

        .pulse-ring-delayed {
          animation: pulse-ring 2s ease-in-out 0.5s infinite;
        }

        @keyframes wave {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .wave-motion {
          animation: wave 3s ease-in-out infinite;
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }

        .pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        @keyframes pulse-fast {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.15);
          }
        }

        .pulse-fast {
          animation: pulse-fast 1.5s ease-in-out infinite;
        }

        .pulse-fast-delayed {
          animation: pulse-fast 1.5s ease-in-out 0.3s infinite;
        }

        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fallDown {
          0%, 100% {
            transform: translateY(0);
            opacity: 0.3;
          }
          50% {
            transform: translateY(10px);
            opacity: 0.5;
          }
        }

        .block-fall {
          animation: fallDown 2s ease-in-out infinite;
        }

        @keyframes buildUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          50%, 100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes expandOut {
          0%, 100% {
            transform: scaleX(0.8);
            opacity: 0.5;
          }
          50% {
            transform: scaleX(1);
            opacity: 1;
          }
        }

        .expand {
          transform-origin: left center;
        }

        @keyframes rotate-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .rotate-slow {
          animation: rotate-slow 8s linear infinite;
          transform-origin: center;
        }

        @keyframes rotate-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        .rotate-reverse {
          animation: rotate-reverse 6s linear infinite;
          transform-origin: center;
        }

        @keyframes fadeOutTransform {
          0% {
            opacity: 0.3;
          }
          50% {
            opacity: 0;
          }
          100% {
            opacity: 0.3;
          }
        }

        @keyframes leaf-grow {
          0%, 100% {
            transform: scale(0.9);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.1);
            opacity: 1;
          }
        }

        .leaf-grow {
          animation: leaf-grow 3s ease-in-out infinite;
          transform-origin: center;
        }

        @keyframes arrow-float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        .arrow-up {
          animation: arrow-float 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};
