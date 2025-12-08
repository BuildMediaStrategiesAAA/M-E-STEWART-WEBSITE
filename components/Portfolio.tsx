import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: "Kitchen Renovation",
    category: "Kent",
    img: "/assets/image copy.png",
    alt: "Modern kitchen renovation completed in Kent home"
  },
  {
    title: "Staircase Renovation",
    category: "Kent",
    img: "/assets/mark_stewart_conversion_stairs_after.webp",
    alt: "Staircase conversion project in Kent property"
  },
  {
    title: "Bathroom Refurbishment",
    category: "Deal, Kent",
    img: "/assets/mark_stewart_bathroom_refurb_.jpeg",
    alt: "Bathroom refurbishment completed in Deal home"
  },
  {
    title: "Full House Renovation",
    category: "Canterbury, Kent",
    img: "/assets/mark_steward_conversion_after.webp",
    alt: "House renovation project completed in Canterbury"
  }
];

export const Portfolio: React.FC = () => {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    cardRefs.current.forEach((card, idx) => {
      if (!card) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            setVisibleCards((prev) => {
              const newSet = new Set(prev);
              if (entry.isIntersecting) {
                newSet.add(idx);
              } else {
                newSet.delete(idx);
              }
              return newSet;
            });
          });
        },
        {
          threshold: 0.3,
          rootMargin: '-50px 0px -50px 0px'
        }
      );

      observer.observe(card);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section id="projects" className="py-20 px-6 sm:px-12 lg:px-24 bg-white">
      <style>{`
        @media (max-width: 1023px) {
          .portfolio-card .mobile-scale {
            transform: scale(1);
            transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .portfolio-card.card-visible .mobile-scale {
            transform: scale(1.1);
          }

          .portfolio-card .mobile-overlay {
            opacity: 0;
            transition: opacity 0.3s ease-in-out;
          }

          .portfolio-card.card-visible .mobile-overlay {
            opacity: 1;
          }
        }
      `}</style>
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
             <h2 className="text-4xl font-bold uppercase text-brand-darkBlue sm:text-5xl">
              Featured Projects
            </h2>
            <div className="h-1 w-24 bg-brand-blue mt-4"></div>
            <p className="mt-4 text-brand-slate">Delivering excellence across Kent.</p>
          </div>
          <Link
            to="/projects"
            className="text-white bg-brand-blue hover:bg-brand-darkBlue px-6 py-3 rounded-full font-bold uppercase tracking-wide transition-colors shadow-md"
          >
            View All Projects &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              ref={(el) => (cardRefs.current[idx] = el)}
              className={`portfolio-card group relative h-80 w-full overflow-hidden rounded-3xl cursor-pointer shadow-lg ${
                visibleCards.has(idx) ? 'card-visible' : ''
              }`}
            >
              <img
                src={project.img}
                alt={project.alt}
                loading="eager"
                className="mobile-scale h-full w-full object-cover transition-transform duration-500 lg:group-hover:scale-110"
              />
              <div className="mobile-overlay absolute inset-0 bg-gradient-to-t from-brand-darkBlue/90 to-transparent opacity-0 transition-opacity duration-300 lg:group-hover:opacity-100 flex flex-col justify-end p-8">
                <span className="text-blue-400 font-bold uppercase text-sm mb-2">{project.category}</span>
                <h3 className="text-white text-3xl font-bold uppercase">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};