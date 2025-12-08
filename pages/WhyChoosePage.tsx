import React from 'react';
import { Award, Heart, FileText, ListChecks, Shield } from 'lucide-react';

const benefits = [
  {
    icon: Award,
    title: "Experienced and Skilled Workmanship",
    description: "Over 25 years of expertise delivering exceptional construction across East Kent."
  },
  {
    icon: Heart,
    title: "Clean, Reliable and Respectful Service",
    description: "We treat your property with care and maintain the highest standards of professionalism."
  },
  {
    icon: FileText,
    title: "Full Written Quotes Before Any Work Starts",
    description: "Transparent pricing with detailed breakdowns so you know exactly what to expect."
  },
  {
    icon: ListChecks,
    title: "Project Management Included on Every Job",
    description: "Dedicated oversight from start to finish ensuring seamless delivery and peace of mind."
  },
  {
    icon: Shield,
    title: "Fully Insured, Safety Compliant",
    description: "Complete protection and adherence to all health and safety regulations on every project."
  }
];

export const WhyChoosePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-44 md:pt-52">
      <div className="bg-gradient-to-br from-brand-darkBlue to-brand-blue text-white py-20 px-6 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold uppercase mb-6 animate-fade-in">
            Why Choose Us
          </h1>
          <div className="mx-auto h-1 w-32 bg-white mb-6"></div>
          <p className="text-xl sm:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
            Reliable, experienced and trusted across East Kent
          </p>
        </div>
      </div>

      <section className="py-20 px-6 sm:px-12 lg:px-24 bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="space-y-16">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-6 md:gap-8"
                style={{
                  animation: `fade-in-up 0.6s ease-out ${index * 0.15}s both`
                }}
              >
                <div className="flex-shrink-0">
                  <div className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-brand-blue text-white">
                    <benefit.icon size={32} className="md:w-10 md:h-10" />
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl md:text-3xl font-bold uppercase text-brand-darkBlue mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {benefit.description}
                  </p>
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
            className="inline-block rounded-full px-10 py-4 text-lg font-bold uppercase transition-all bg-white text-brand-darkBlue hover:bg-brand-darkBlue hover:text-white shadow-lg hover:shadow-2xl"
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
