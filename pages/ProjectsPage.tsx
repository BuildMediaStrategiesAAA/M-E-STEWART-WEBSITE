import React from 'react';

type Project = {
  title: string;
  location: string;
  description: string;
  img?: string;
  isBeforeAfter?: boolean;
  beforeImg?: string;
  afterImg?: string;
};

const projects: Project[] = [
  {
    title: "Kitchen Renovation - Before & After",
    location: "Kent",
    img: "/assets/kitchen-before-after.png",
    description: "Complete kitchen transformation featuring modern tile work, custom cabinetry, premium lighting, and high-quality finishes. A stunning example of our attention to detail and craftsmanship.",
    isBeforeAfter: true
  },
  {
    title: "Staircase Renovation - Before & After",
    location: "Kent",
    beforeImg: "/assets/mark_stewart_conversion_job_before.webp",
    afterImg: "/assets/mark_steward_conversion_after.webp",
    description: "Complete staircase transformation from raw construction to elegant finished design. Features custom white painted posts, dark carpeted treads, and modern glass balustrades creating a sophisticated interior space.",
    isBeforeAfter: true
  },
  {
    title: "Bathroom Refurbishment",
    location: "Deal, Kent",
    img: "/assets/mark_stewart_bathroom_refurb_.jpeg",
    description: "Complete bathroom transformation featuring modern fixtures, premium tiling, elegant lighting, and high-quality finishes. A sophisticated space that combines style with functionality."
  },
  {
    title: "Victorian Property Restoration",
    location: "Dover, Kent",
    img: "/assets/mark_stewart_house_refurb_image_before.jpeg",
    description: "Full restoration of a Victorian townhouse, preserving period features while modernizing systems and amenities."
  },
  {
    title: "Commercial Office Hub",
    location: "Sandwich, Kent",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1470&auto=format&fit=crop",
    description: "Modern commercial space with open-plan offices, meeting rooms, and collaborative work areas."
  },
  {
    title: "Luxury Kitchen & Living",
    location: "Walmer, Kent",
    img: "/assets/mark_stewart_kitchen_refurb_.jpeg",
    description: "High-end kitchen renovation with bespoke cabinetry, premium appliances, and designer finishes."
  },
  {
    title: "Coastal New Build",
    location: "Kingsdown, Kent",
    img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1470&auto=format&fit=crop",
    description: "Contemporary four-bedroom home with sea views, featuring sustainable materials and smart home technology."
  },
  {
    title: "Loft Conversion Suite",
    location: "Canterbury, Kent",
    img: "/assets/mark_stewart_conversion_job_before.webp",
    description: "Master bedroom suite with en-suite bathroom and walk-in wardrobe, maximizing attic space."
  },
  {
    title: "Retail Store Fit-Out",
    location: "Deal, Kent",
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1470&auto=format&fit=crop",
    description: "Contemporary retail space with custom display fixtures, modern lighting, and efficient layout."
  },
  {
    title: "Georgian Townhouse Renovation",
    location: "Ramsgate, Kent",
    img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1470&auto=format&fit=crop",
    description: "Sympathetic renovation respecting Georgian architecture while incorporating modern comfort and efficiency."
  },
  {
    title: "Contemporary New Build",
    location: "Whitstable, Kent",
    img: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1484&auto=format&fit=crop",
    description: "Modern three-bedroom house with clean lines, open-plan living, and energy-efficient design."
  }
];

export const ProjectsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-32 md:pt-36">
      <div className="bg-gradient-to-br from-brand-darkBlue to-brand-blue text-white py-20 px-6 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold uppercase mb-6 animate-fade-in">
            Our Projects
          </h1>
          <div className="mx-auto h-1 w-32 bg-white mb-6"></div>
          <p className="text-xl sm:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
            Explore our portfolio of completed projects across Kent. Each build reflects our commitment to quality, craftsmanship, and client satisfaction.
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
                          alt={`${project.title} - Before`}
                          className="project-image"
                        />
                      </div>
                      <div className="project-image-container">
                        <img
                          src={project.afterImg}
                          alt={`${project.title} - After`}
                          className="project-image"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="project-image-container">
                      <img
                        src={project.img}
                        alt={project.title}
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
