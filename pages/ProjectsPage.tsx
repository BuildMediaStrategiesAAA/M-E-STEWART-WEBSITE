import React from 'react';

type Project = {
  title: string;
  location: string;
  description: string;
  img?: string;
  alt?: string;
  isBeforeAfter?: boolean;
  beforeImg?: string;
  afterImg?: string;
  beforeAlt?: string;
  afterAlt?: string;
};

const projects: Project[] = [
  {
    title: "Kitchen Renovation - Before & After",
    location: "Kent",
    beforeImg: "/assets/image.png",
    afterImg: "/assets/image copy.png",
    description: "Complete kitchen transformation featuring modern tile work, custom cabinetry, premium lighting, and high-quality finishes. A stunning example of our attention to detail and craftsmanship.",
    isBeforeAfter: true,
    beforeAlt: "Kitchen renovation before - Kent property",
    afterAlt: "Kitchen extension completed in Kent home"
  },
  {
    title: "Staircase Renovation - Before & After",
    location: "Kent",
    beforeImg: "/assets/mark_stewart_conversion_stairs_before.webp",
    afterImg: "/assets/mark_stewart_conversion_stairs_after.webp",
    description: "Complete staircase transformation from raw construction to elegant finished design. Features custom white painted posts, dark carpeted treads, and modern glass balustrades creating a sophisticated interior space.",
    isBeforeAfter: true,
    beforeAlt: "Staircase conversion before - Kent property",
    afterAlt: "Loft conversion staircase completed in Kent"
  },
  {
    title: "Bathroom Refurbishment",
    location: "Deal, Kent",
    img: "/assets/mark_stewart_bathroom_refurb_.jpeg",
    description: "Complete bathroom transformation featuring modern fixtures, premium tiling, elegant lighting, and high-quality finishes. A sophisticated space that combines style with functionality.",
    alt: "Bathroom refurbishment completed in Deal"
  },
  {
    title: "Bathroom Refurbishment - Before & After",
    location: "Deal, Kent",
    beforeImg: "/assets/mark_stewart_house_refurb_image_before.jpeg",
    afterImg: "/assets/mark_stewart_house_refurb_after.jpeg",
    description: "Complete bathroom refurbishment featuring new fixtures, tiling, and finishes.",
    isBeforeAfter: true,
    beforeAlt: "Bathroom refurbishment before - Deal home",
    afterAlt: "Bathroom renovation completed in Deal property"
  },
  {
    title: "Luxury Kitchen & Living",
    location: "Walmer, Kent",
    img: "/assets/mark_stewart_kitchen_refurb_.jpeg",
    description: "High-end kitchen renovation with bespoke cabinetry, premium appliances, and designer finishes.",
    alt: "Luxury kitchen renovation in Walmer Kent"
  },
  {
    title: "Full House Renovation - Before & After",
    location: "Canterbury, Kent",
    beforeImg: "/assets/mark_stewart_conversion_job_before.webp",
    afterImg: "/assets/mark_steward_conversion_after.webp",
    description: "Complete house renovation featuring updated finishes, fixtures, and interior improvements throughout.",
    isBeforeAfter: true,
    beforeAlt: "House renovation before - Canterbury property",
    afterAlt: "Full house renovation completed in Canterbury"
  }
];

export const ProjectsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-24">
      <div className="bg-gradient-to-br from-brand-darkBlue to-brand-blue text-white py-20 px-6 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold uppercase mb-6 animate-fade-in">
            Our Projects in Deal, Dover & Kent
          </h1>
          <div className="mx-auto h-1 w-32 bg-white mb-6"></div>
          <p className="text-xl sm:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
            Explore our portfolio of completed projects across Deal, Dover, and Kent. Each build reflects our commitment to quality, craftsmanship, and client satisfaction.
          </p>
        </div>
      </div>

      {projects.map((project, index) => {
        const isEven = index % 2 === 0;

        return (
          <section
            key={index}
            className={`py-16 px-6 sm:px-12 lg:px-24 ${
              isEven ? 'bg-white' : 'bg-slate-50'
            }`}
          >
            <div className="mx-auto max-w-7xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'} order-2`}>
                  <div className="space-y-4">
                    <p className="text-sm font-bold uppercase tracking-wide text-brand-blue">
                      {project.location}
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-bold uppercase text-brand-darkBlue">
                      {project.title}
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'} order-1`}>
                  {project.beforeImg && project.afterImg ? (
                    <div className="grid grid-cols-2 gap-4">
                      <div className="project-image-container">
                        <img
                          src={project.beforeImg}
                          alt={project.beforeAlt || `${project.title} - Before`}
                          loading="eager"
                          className="project-image"
                        />
                      </div>
                      <div className="project-image-container">
                        <img
                          src={project.afterImg}
                          alt={project.afterAlt || `${project.title} - After`}
                          loading="eager"
                          className="project-image"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="project-image-container">
                      <img
                        src={project.img}
                        alt={project.alt || project.title}
                        loading="eager"
                        className="project-image"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <section className="py-20 px-6 sm:px-12 lg:px-24 bg-brand-blue text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold uppercase sm:text-5xl">
            Start Your Project Today
          </h2>
          <p className="mb-8 text-xl leading-relaxed opacity-90">
            Every project begins with a conversation. Contact us to discuss how we can bring your vision to life.
          </p>
          <a
            href="/contact"
            className="inline-block rounded-full px-10 py-4 text-lg font-bold uppercase transition-all bg-white text-brand-darkBlue hover:bg-brand-darkBlue hover:text-white shadow-lg hover:shadow-2xl"
          >
            Get In Touch
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

        .project-image-container {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          border-radius: 0.5rem;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }

        .project-image {
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

        .project-image:hover {
          filter: contrast(1.08) brightness(1.03);
          transform: translateZ(0) scale(1.02);
        }

        @media (min-resolution: 2dppx) {
          .project-image {
            image-rendering: -webkit-optimize-contrast;
            image-rendering: high-quality;
          }
        }
      `}</style>
    </div>
  );
};
