import React, { useEffect, useRef, useState } from 'react';
import { Hammer, Home, Ruler, HardHat, Building, PaintBucket } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: "New Builds",
    description: "Complete project management from foundation to finish. We build dream homes with uncompromising quality."
  },
  {
    icon: Hammer,
    title: "Renovations",
    description: "Breathing new life into existing structures. Modern updates, structural repairs, and complete overhauls."
  },
  {
    icon: Ruler,
    title: "Extensions",
    description: "Expand your living space seamlessly. Single-story, double-story, and wrap-around extensions."
  },
  {
    icon: HardHat,
    title: "Commercial",
    description: "Industrial and retail fit-outs. Durable construction designed for business needs and safety standards."
  },
  {
    icon: Building,
    title: "Loft Conversions",
    description: "Unlock the potential of your attic. Creating master suites, offices, and additional bedrooms."
  },
  {
    icon: PaintBucket,
    title: "Design & Plan",
    description: "Collaborative architectural planning and design services to ensure your vision is viable."
  }
];

export const Services: React.FC = () => {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    cardRefs.current.forEach((card, idx) => {
      if (!card) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleCards((prev) => new Set(prev).add(idx));
            } else {
              setVisibleCards((prev) => {
                const newSet = new Set(prev);
                newSet.delete(idx);
                return newSet;
              });
            }
          });
        },
        { threshold: 0.3 }
      );

      observer.observe(card);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section id="services" className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-12 lg:px-24">
      <style>{`
        @media (max-width: 1023px) {
          .mobile-card-active {
            transform: translateY(-8px);
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
            border-color: #0095ff;
          }
          .mobile-card-active .mobile-icon-bg {
            background-color: #0095ff;
            color: white;
          }
        }
      `}</style>
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 sm:mb-12 lg:mb-16 text-center">
          <h2 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-brand-darkBlue">
            Our <span className="inline-block relative">Expertise<div className="h-1 bg-brand-blue mt-2 absolute left-0 right-0"></div></span>
          </h2>
          <p className="mt-6 sm:mt-8 text-base sm:text-lg text-brand-slate max-w-2xl mx-auto px-4">
            We specialize in a wide range of construction services, delivering superior results on time and within budget.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`group relative border border-gray-200 bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl transition-all lg:hover:-translate-y-2 lg:hover:shadow-xl lg:hover:border-brand-blue ${
                visibleCards.has(index) ? 'mobile-card-active' : ''
              }`}
              aria-label={`${service.title} service`}
            >
              <div className="mobile-icon-bg mb-4 sm:mb-6 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-brand-grey text-brand-blue lg:group-hover:bg-brand-blue lg:group-hover:text-white transition-colors" aria-hidden="true">
                <service.icon size={24} className="sm:w-7 sm:h-7" />
              </div>
              <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl lg:text-2xl font-bold uppercase text-brand-darkBlue">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};