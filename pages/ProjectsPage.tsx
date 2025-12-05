import React from 'react';

const projects = [
  {
    title: "Modern Family Extension",
    location: "Deal, Kent",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1470&auto=format&fit=crop",
    description: "Contemporary single-story extension with bi-fold doors and vaulted ceilings, creating a seamless indoor-outdoor living space."
  },
  {
    title: "Victorian Property Restoration",
    location: "Dover, Kent",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1453&auto=format&fit=crop",
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
    img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1470&auto=format&fit=crop",
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
    img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1374&auto=format&fit=crop",
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
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-auto object-cover rounded-lg"
                  />
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
      `}</style>
    </div>
  );
};
