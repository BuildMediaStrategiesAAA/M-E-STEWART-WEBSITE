import React, { useState } from 'react';
import { MapPin, Calendar, Ruler } from 'lucide-react';

const categories = ['All', 'Residential', 'Commercial', 'Renovations', 'Extensions'];

const projects = [
  {
    title: "Modern Family Extension",
    category: "Extensions",
    location: "Deal, Kent",
    date: "2024",
    size: "45m²",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1470&auto=format&fit=crop",
    description: "Contemporary single-story extension with bi-fold doors and vaulted ceilings, creating a seamless indoor-outdoor living space."
  },
  {
    title: "Victorian Property Restoration",
    category: "Renovations",
    location: "Dover, Kent",
    date: "2024",
    size: "180m²",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1453&auto=format&fit=crop",
    description: "Full restoration of a Victorian townhouse, preserving period features while modernizing systems and amenities."
  },
  {
    title: "Commercial Office Hub",
    category: "Commercial",
    location: "Sandwich, Kent",
    date: "2023",
    size: "320m²",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1470&auto=format&fit=crop",
    description: "Modern commercial space with open-plan offices, meeting rooms, and collaborative work areas."
  },
  {
    title: "Luxury Kitchen & Living",
    category: "Renovations",
    location: "Walmer, Kent",
    date: "2024",
    size: "55m²",
    img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1470&auto=format&fit=crop",
    description: "High-end kitchen renovation with bespoke cabinetry, premium appliances, and designer finishes."
  },
  {
    title: "Coastal New Build",
    category: "Residential",
    location: "Kingsdown, Kent",
    date: "2023",
    size: "240m²",
    img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1470&auto=format&fit=crop",
    description: "Contemporary four-bedroom home with sea views, featuring sustainable materials and smart home technology."
  },
  {
    title: "Loft Conversion Suite",
    category: "Extensions",
    location: "Canterbury, Kent",
    date: "2024",
    size: "38m²",
    img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1374&auto=format&fit=crop",
    description: "Master bedroom suite with en-suite bathroom and walk-in wardrobe, maximizing attic space."
  },
  {
    title: "Retail Store Fit-Out",
    category: "Commercial",
    location: "Deal, Kent",
    date: "2023",
    size: "95m²",
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1470&auto=format&fit=crop",
    description: "Contemporary retail space with custom display fixtures, modern lighting, and efficient layout."
  },
  {
    title: "Georgian Townhouse Renovation",
    category: "Renovations",
    location: "Ramsgate, Kent",
    date: "2024",
    size: "210m²",
    img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1470&auto=format&fit=crop",
    description: "Sympathetic renovation respecting Georgian architecture while incorporating modern comfort and efficiency."
  },
  {
    title: "Contemporary New Build",
    category: "Residential",
    location: "Whitstable, Kent",
    date: "2023",
    size: "195m²",
    img: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1484&auto=format&fit=crop",
    description: "Modern three-bedroom house with clean lines, open-plan living, and energy-efficient design."
  }
];

export const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

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

      <section className="py-12 px-6 sm:px-12 lg:px-24 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-bold uppercase text-sm transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-brand-blue text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-brand-slate hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 px-6 sm:px-12 lg:px-24 bg-slate-50">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <div
                key={idx}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                style={{
                  animation: `fade-in-up 0.5s ease-out ${idx * 0.1}s both`
                }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-darkBlue/90 via-brand-darkBlue/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 bg-brand-blue text-white px-4 py-2 rounded-full text-xs font-bold uppercase">
                    {project.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold uppercase text-brand-darkBlue mb-3 group-hover:text-brand-blue transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-2 text-sm text-gray-500 mb-6">
                    <div className="flex items-center">
                      <MapPin size={16} className="text-brand-blue mr-2" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar size={16} className="text-brand-blue mr-2" />
                      <span>{project.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Ruler size={16} className="text-brand-blue mr-2" />
                      <span>{project.size}</span>
                    </div>
                  </div>

                  <a
                    href="/testimonials"
                    className="inline-block w-full text-center bg-brand-blue text-white px-6 py-3 rounded-full font-bold uppercase text-sm transition-all duration-300 hover:bg-brand-darkBlue hover:shadow-lg"
                  >
                    View Testimonials
                  </a>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-500">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 px-6 sm:px-12 lg:px-24 bg-brand-darkBlue text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold uppercase sm:text-5xl">
            Start Your Project Today
          </h2>
          <p className="mb-8 text-xl leading-relaxed opacity-90">
            Every project begins with a conversation. Contact us to discuss how we can bring your vision to life.
          </p>
          <a
            href="/contact"
            className="inline-block rounded-full px-10 py-4 text-lg font-bold uppercase transition-all bg-brand-blue text-white hover:bg-white hover:text-brand-darkBlue shadow-lg hover:shadow-2xl"
          >
            Get In Touch
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
      `}</style>
    </div>
  );
};
