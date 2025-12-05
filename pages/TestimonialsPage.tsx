import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "M E Stewart transformed our outdated Victorian property into a stunning modern home while preserving all the original character. Their attention to detail was exceptional, and they kept us informed every step of the way.",
    client: "Sarah & David Thompson",
    location: "Dover, Kent",
    rating: 5
  },
  {
    quote: "We couldn't be happier with our new extension. The team was professional, respectful of our property, and completed the work on time and within budget. The quality of workmanship is outstanding.",
    client: "Michael Richardson",
    location: "Deal, Kent",
    rating: 5
  },
  {
    quote: "From initial consultation to final handover, M E Stewart exceeded our expectations. They managed the entire project seamlessly, and their tradespeople were skilled, friendly, and always cleaned up at the end of each day.",
    client: "Jennifer Clarke",
    location: "Walmer, Kent",
    rating: 5
  },
  {
    quote: "As a business owner, I needed a contractor I could trust completely. M E Stewart delivered our commercial fit-out to an incredibly high standard. The project management was superb, minimizing disruption to our operations.",
    client: "Robert Hayes",
    location: "Sandwich, Kent",
    rating: 5
  },
  {
    quote: "The team handled our loft conversion with such care and professionalism. They anticipated potential issues before they arose and provided solutions that were both practical and cost-effective. We now have a beautiful master suite.",
    client: "Emma & James Foster",
    location: "Canterbury, Kent",
    rating: 5
  },
  {
    quote: "M E Stewart came highly recommended, and they lived up to every word. Their transparent pricing, reliable service, and exceptional craftsmanship make them stand out. We've already recommended them to friends and family.",
    client: "Catherine Williams",
    location: "Ramsgate, Kent",
    rating: 5
  }
];

const beforeAfterProjects = [
  {
    title: "Kitchen Renovation",
    before: "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1468&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1470&auto=format&fit=crop",
    location: "Deal, Kent"
  },
  {
    title: "Living Room Extension",
    before: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1374&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1470&auto=format&fit=crop",
    location: "Walmer, Kent"
  },
  {
    title: "Period Property Restoration",
    before: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=1470&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1453&auto=format&fit=crop",
    location: "Dover, Kent"
  }
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={18}
          className={i < rating ? "fill-brand-blue text-brand-blue" : "text-gray-300"}
        />
      ))}
    </div>
  );
};

export const TestimonialsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-32 md:pt-36">
      <div className="bg-gradient-to-br from-brand-darkBlue to-brand-blue text-white py-20 px-6 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold uppercase mb-6 animate-fade-in">
            What Customers Say
          </h1>
          <div className="mx-auto h-1 w-32 bg-white mb-6"></div>
          <p className="text-xl sm:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
            Honest feedback from homeowners across East Kent
          </p>
        </div>
      </div>

      <section className="py-20 px-6 sm:px-12 lg:px-24 bg-white">
        <div className="mx-auto max-w-5xl">
          <div className="space-y-20">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="relative"
                style={{
                  animation: `fade-in-up 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <Quote size={48} className="text-brand-blue/20 mb-6" />
                <blockquote className="text-2xl md:text-3xl text-gray-800 leading-relaxed font-light mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <p className="font-bold text-brand-darkBlue text-lg">
                      {testimonial.client}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {testimonial.location}
                    </p>
                  </div>
                  <StarRating rating={testimonial.rating} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 sm:px-12 lg:px-24 bg-slate-50">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold uppercase text-brand-darkBlue sm:text-5xl mb-4">
              Before & After
            </h2>
            <div className="mx-auto h-1 w-24 bg-brand-blue mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See more before and after examples in our <a href="/projects" className="text-brand-blue font-bold lg:hover:underline">Projects page</a>
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {beforeAfterProjects.map((project, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden shadow-lg lg:hover:shadow-2xl transition-all duration-300 lg:hover:-translate-y-2"
                style={{
                  animation: `fade-in-up 0.5s ease-out ${idx * 0.1}s both`
                }}
              >
                <div className="relative">
                  <div className="grid grid-cols-2">
                    <div className="relative h-48">
                      <img
                        src={project.before}
                        alt={`${project.title} - Before`}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute bottom-2 left-2 bg-gray-800/80 text-white px-3 py-1 rounded text-xs font-bold uppercase">
                        Before
                      </div>
                    </div>
                    <div className="relative h-48">
                      <img
                        src={project.after}
                        alt={`${project.title} - After`}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute bottom-2 right-2 bg-brand-blue text-white px-3 py-1 rounded text-xs font-bold uppercase">
                        After
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold uppercase text-brand-darkBlue mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{project.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 sm:px-12 lg:px-24 bg-brand-blue text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold uppercase sm:text-5xl">
            Ready to Work With Us?
          </h2>
          <p className="mb-8 text-xl leading-relaxed opacity-90">
            Let's discuss your project. Contact us today for a free consultation and discover how we can help bring your vision to life.
          </p>
          <a
            href="/contact"
            className="inline-block rounded-full px-10 py-4 text-lg font-bold uppercase transition-all bg-white text-brand-darkBlue lg:hover:bg-brand-darkBlue lg:hover:text-white shadow-lg lg:hover:shadow-2xl"
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

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};
