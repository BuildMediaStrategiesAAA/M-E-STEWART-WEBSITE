import React, { useEffect, useRef, useState } from 'react';
import { Hammer, Home, Ruler, HardHat, Building, PaintBucket, CheckCircle, Clock, Award, Shield } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: "New Builds",
    description: "Complete project management from foundation to finish. We build dream homes with uncompromising quality.",
    features: ["Custom design consultation", "Full project management", "Quality materials sourcing", "Building regulations compliance"]
  },
  {
    icon: Hammer,
    title: "Renovations",
    description: "Breathing new life into existing structures. Modern updates, structural repairs, and complete overhauls.",
    features: ["Period property expertise", "Modern system integration", "Structural assessments", "Interior redesign"]
  },
  {
    icon: Ruler,
    title: "Extensions",
    description: "Expand your living space seamlessly. Single-story, double-story, and wrap-around extensions.",
    features: ["Planning permission support", "Seamless integration", "Kitchen & living extensions", "Multi-story additions"]
  },
  {
    icon: HardHat,
    title: "Commercial",
    description: "Industrial and retail fit-outs. Durable construction designed for business needs and safety standards.",
    features: ["Office fit-outs", "Retail spaces", "Industrial units", "Health & safety compliance"]
  },
  {
    icon: Building,
    title: "Loft Conversions",
    description: "Unlock the potential of your attic. Creating master suites, offices, and additional bedrooms.",
    features: ["Dormer conversions", "Velux installations", "En-suite additions", "Storage solutions"]
  },
  {
    icon: PaintBucket,
    title: "Design & Plan",
    description: "Collaborative architectural planning and design services to ensure your vision is viable.",
    features: ["3D visualization", "Architectural drawings", "Budget planning", "Material selection"]
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
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const [visibleWhyCards, setVisibleWhyCards] = useState<Set<number>>(new Set());
  const [ctaVisible, setCtaVisible] = useState(false);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const whyCardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    cardRefs.current.forEach((card, idx) => {
      if (!card) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleCards((prev) => new Set(prev).add(idx));
            }
          });
        },
        { threshold: 0.3 }
      );

      observer.observe(card);
      observers.push(observer);
    });

    whyCardRefs.current.forEach((card, idx) => {
      if (!card) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleWhyCards((prev) => new Set(prev).add(idx));
            }
          });
        },
        { threshold: 0.3 }
      );

      observer.observe(card);
      observers.push(observer);
    });

    if (ctaRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setCtaVisible(true);
          }
        },
        { threshold: 0.3 }
      );

      observer.observe(ctaRef.current);
      observers.push(observer);
    }

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 pt-32 md:pt-36">
      <div className="bg-gradient-to-br from-brand-darkBlue to-brand-blue text-white py-20 px-6 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold uppercase mb-6 animate-fade-in">
            Our Services
          </h1>
          <div className="mx-auto h-1 w-32 bg-white mb-6"></div>
          <p className="text-xl sm:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
            From groundbreaking to final touches, we deliver exceptional construction services across Kent and surrounding areas.
          </p>
        </div>
      </div>

      <section className="py-20 px-6 sm:px-12 lg:px-24 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`mobile-service-card group relative border-2 border-gray-200 bg-white p-8 transition-all duration-300 lg:hover:-translate-y-3 lg:hover:shadow-2xl lg:hover:border-brand-blue rounded-lg ${
                  visibleCards.has(index) ? 'mobile-card-active' : ''
                }`}
                style={{
                  animation: `fade-in-up 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <div className="mobile-service-icon mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand-grey text-brand-blue lg:group-hover:bg-brand-blue lg:group-hover:text-white transition-all duration-300 lg:group-hover:scale-110">
                  <service.icon size={32} />
                </div>
                <h3 className="mb-4 text-2xl font-bold uppercase text-brand-darkBlue">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <CheckCircle size={16} className="text-brand-blue mr-2 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 sm:px-12 lg:px-24 bg-slate-50">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold uppercase text-brand-darkBlue sm:text-5xl">
              Why Choose M E Stewart
            </h2>
            <div className="mx-auto h-1 w-24 bg-brand-blue"></div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                ref={(el) => (whyCardRefs.current[index] = el)}
                className={`mobile-why-card text-center p-8 bg-white rounded-lg shadow-md lg:hover:shadow-xl transition-shadow duration-300 ${
                  visibleWhyCards.has(index) ? 'mobile-why-active' : ''
                }`}
              >
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
          <a
            href="/contact"
            ref={ctaRef}
            className={`mobile-cta inline-block rounded-full px-10 py-4 text-lg font-bold uppercase transition-all bg-brand-blue text-white lg:hover:bg-white lg:hover:text-brand-darkBlue shadow-lg lg:hover:shadow-2xl ${
              ctaVisible ? 'mobile-cta-active' : ''
            }`}
          >
            Get A Free Quote
          </a>
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

        @media (max-width: 1023px) {
          .mobile-service-card.mobile-card-active {
            transform: translateY(-12px);
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
            border-color: #0095ff;
          }
          .mobile-card-active .mobile-service-icon {
            background-color: #0095ff;
            color: white;
            transform: scale(1.1);
          }
          .mobile-why-card.mobile-why-active {
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          }
          .mobile-cta.mobile-cta-active {
            background-color: white;
            color: #1e3a5f;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          }
        }
      `}</style>
    </div>
  );
};
