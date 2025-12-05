import React, { useEffect, useRef, useState } from 'react';
import { Award, Users, Target, TrendingUp, Shield, Heart, Lightbulb, CheckCircle } from 'lucide-react';

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "We pursue perfection in every aspect of our work, from initial design to final inspection."
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Honest communication, transparent pricing, and ethical business practices guide everything we do."
  },
  {
    icon: Heart,
    title: "Commitment",
    description: "Your vision becomes our mission. We're dedicated to exceeding expectations on every project."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Embracing modern techniques and sustainable practices while respecting traditional craftsmanship."
  }
];

const stats = [
  { number: "25+", label: "Years Experience" },
  { number: "500+", label: "Projects Completed" },
  { number: "100%", label: "Client Satisfaction" },
  { number: "50+", label: "Skilled Tradespeople" }
];

const whyChoose = [
  "Fully insured and certified contractors",
  "Comprehensive project management",
  "Transparent pricing with no hidden costs",
  "Quality materials from trusted suppliers",
  "Health and safety compliance",
  "Flexible payment options available",
  "10-year structural guarantee",
  "Dedicated project manager for every build"
];

export const AboutPage: React.FC = () => {
  const [visibleValues, setVisibleValues] = useState<Set<number>>(new Set());
  const [visibleAccreditations, setVisibleAccreditations] = useState<Set<number>>(new Set());
  const [ctaVisible, setCtaVisible] = useState(false);
  const valueRefs = useRef<(HTMLDivElement | null)[]>([]);
  const accreditationRefs = useRef<(HTMLDivElement | null)[]>([]);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    valueRefs.current.forEach((card, idx) => {
      if (!card) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleValues((prev) => new Set(prev).add(idx));
            }
          });
        },
        { threshold: 0.3 }
      );

      observer.observe(card);
      observers.push(observer);
    });

    accreditationRefs.current.forEach((card, idx) => {
      if (!card) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleAccreditations((prev) => new Set(prev).add(idx));
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
            About M E Stewart
          </h1>
          <div className="mx-auto h-1 w-32 bg-white mb-6"></div>
          <p className="text-xl sm:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
            Building excellence in Kent since 1999. Your trusted partner for quality construction and renovation projects.
          </p>
        </div>
      </div>

      <section className="py-20 px-6 sm:px-12 lg:px-24 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold uppercase text-brand-darkBlue mb-6">
                Our Story
              </h2>
              <div className="h-1 w-24 bg-brand-blue mb-6"></div>
              <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                <p>
                  M E Stewart Contractors was established in 1999 with a simple mission: to deliver exceptional construction services that stand the test of time. What began as a small team of dedicated craftspeople has grown into one of Kent's most respected construction companies.
                </p>
                <p>
                  Over the past two decades, we've built our reputation on quality workmanship, honest communication, and an unwavering commitment to client satisfaction. From modest home extensions to large-scale commercial developments, every project receives the same meticulous attention to detail.
                </p>
                <p>
                  Today, we're proud to lead a team of over 50 skilled tradespeople, all sharing our passion for excellence. Our diverse portfolio spans residential new builds, historic property renovations, commercial fit-outs, and everything in between.
                </p>
                <p>
                  Based in Deal, Kent, we serve clients throughout the region, bringing decades of local knowledge and expertise to every project. We understand the unique characteristics of Kent properties and the planning requirements of the area.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1541976590-713941681591?q=80&w=1470&auto=format&fit=crop"
                alt="Construction team"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
              <div className="absolute -bottom-8 -left-8 bg-brand-blue text-white p-8 rounded-xl shadow-xl max-w-xs">
                <p className="text-5xl font-bold mb-2">25+</p>
                <p className="text-lg uppercase font-bold">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 sm:px-12 lg:px-24 bg-slate-50">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold uppercase text-brand-darkBlue sm:text-5xl">
              Our Values
            </h2>
            <div className="mx-auto h-1 w-24 bg-brand-blue"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                ref={(el) => (valueRefs.current[index] = el)}
                className={`mobile-value-card bg-white p-8 rounded-2xl shadow-lg lg:hover:shadow-2xl transition-all duration-300 lg:hover:-translate-y-2 ${
                  visibleValues.has(index) ? 'mobile-value-active' : ''
                }`}
                style={{
                  animation: `fade-in-up 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <div className="mb-6 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-blue text-white">
                    <value.icon size={32} />
                  </div>
                </div>
                <h3 className="mb-4 text-xl font-bold uppercase text-brand-darkBlue text-center">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 sm:px-12 lg:px-24 bg-brand-darkBlue text-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center"
                style={{
                  animation: `fade-in 1s ease-out ${index * 0.2}s both`
                }}
              >
                <div className="text-5xl md:text-6xl font-bold text-brand-blue mb-2">
                  {stat.number}
                </div>
                <div className="text-lg uppercase font-bold opacity-90">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 sm:px-12 lg:px-24 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1470&auto=format&fit=crop"
                alt="Team meeting"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold uppercase text-brand-darkBlue mb-6">
                Why Choose Us
              </h2>
              <div className="h-1 w-24 bg-brand-blue mb-6"></div>
              <p className="text-gray-700 leading-relaxed text-lg mb-8">
                When you choose M E Stewart, you're choosing a partner committed to bringing your vision to life with professionalism, expertise, and care.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {whyChoose.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-brand-blue flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 sm:px-12 lg:px-24 bg-slate-50">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold uppercase text-brand-darkBlue sm:text-5xl">
              Our Accreditations
            </h2>
            <div className="mx-auto h-1 w-24 bg-brand-blue mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We maintain the highest industry standards through professional accreditations and memberships.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Federation of Master Builders', 'NHBC Registered', 'Construction Line Gold', 'Safe Contractor'].map((accreditation, index) => (
              <div
                key={index}
                ref={(el) => (accreditationRefs.current[index] = el)}
                className={`mobile-accreditation-card bg-white p-8 rounded-xl shadow-md lg:hover:shadow-xl transition-shadow duration-300 flex items-center justify-center text-center ${
                  visibleAccreditations.has(index) ? 'mobile-accreditation-active' : ''
                }`}
              >
                <div>
                  <Award size={48} className="text-brand-blue mx-auto mb-4" />
                  <p className="font-bold text-brand-darkBlue text-sm">
                    {accreditation}
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
            ref={ctaRef}
            className={`mobile-cta inline-block rounded-full px-10 py-4 text-lg font-bold uppercase transition-all bg-white text-brand-darkBlue lg:hover:bg-brand-darkBlue lg:hover:text-white shadow-lg lg:hover:shadow-2xl ${
              ctaVisible ? 'mobile-cta-active' : ''
            }`}
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

        @media (max-width: 1023px) {
          .mobile-value-card.mobile-value-active {
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
            transform: translateY(-8px);
          }
          .mobile-accreditation-card.mobile-accreditation-active {
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          }
          .mobile-cta.mobile-cta-active {
            background-color: #1e3a5f;
            color: white;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          }
        }
      `}</style>
    </div>
  );
};
