import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqsData = [
  {
    category: "General",
    questions: [
      {
        question: "What areas do you cover?",
        answer: "We primarily serve Deal, Dover, Sandwich, Walmer, and surrounding areas across Kent. We're happy to discuss projects outside these areas on a case-by-case basis."
      },
      {
        question: "How long have you been in business?",
        answer: "M.E. Stewart Builders has been providing quality construction services in Kent for over 20 years, building a reputation for excellence and reliability."
      },
      {
        question: "Do you provide free quotes?",
        answer: "Yes, we offer free, no-obligation quotes for all projects. Contact us to schedule a consultation and site visit."
      },
      {
        question: "Are you fully insured?",
        answer: "Yes, we carry comprehensive liability insurance and all our work is covered under warranty for your peace of mind."
      }
    ]
  },
  {
    category: "Projects & Services",
    questions: [
      {
        question: "What types of projects do you handle?",
        answer: "We handle a wide range of projects including home extensions, renovations, new builds, commercial construction, interior remodeling, and bespoke carpentry work."
      },
      {
        question: "How long does a typical project take?",
        answer: "Project timelines vary depending on scope and complexity. Small renovations take 2-4 weeks, medium-sized extensions 6-12 weeks, and larger builds can take 3-6 months. We'll provide a detailed timeline during the planning phase."
      },
      {
        question: "Can you help with planning permission?",
        answer: "Yes, we can assist with planning applications and work closely with architects and planning consultants to ensure your project meets all regulatory requirements."
      },
      {
        question: "Do you handle both residential and commercial projects?",
        answer: "Absolutely. We have extensive experience in both residential and commercial construction, from single-family homes to retail spaces and offices."
      }
    ]
  },
  {
    category: "Process & Pricing",
    questions: [
      {
        question: "What is your payment structure?",
        answer: "We typically work on a stage-based payment system, with deposits and milestone payments agreed upon before work begins. Full details are outlined in your contract."
      },
      {
        question: "Do you provide warranties?",
        answer: "Yes, all our work comes with comprehensive warranties. Structural work is typically covered for 10 years, and other work for varying periods depending on the nature of the project."
      },
      {
        question: "What happens if there are unexpected issues during construction?",
        answer: "We conduct thorough site assessments to minimize surprises. If unexpected issues arise, we'll communicate immediately and provide transparent pricing for any additional work required."
      },
      {
        question: "Can I make changes during the project?",
        answer: "Yes, changes can be accommodated, though they may affect the timeline and budget. We'll provide updated quotes and timelines for any requested modifications."
      }
    ]
  },
  {
    category: "Materials & Quality",
    questions: [
      {
        question: "Where do you source your materials?",
        answer: "We work with trusted local and national suppliers to source high-quality materials at competitive prices. We can accommodate specific material preferences and budget requirements."
      },
      {
        question: "Can I choose my own materials and fixtures?",
        answer: "Absolutely. We're happy to work with materials and fixtures you've selected, or we can provide recommendations based on your style, budget, and project requirements."
      },
      {
        question: "Do you use sustainable building practices?",
        answer: "Yes, we're committed to sustainable construction. We can incorporate eco-friendly materials, energy-efficient systems, and sustainable building practices into your project."
      }
    ]
  }
];

export const FAQsPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleFAQ = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenIndex(openIndex === key ? null : key);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-gradient-to-br from-brand-darkBlue to-brand-blue text-white pt-32 sm:pt-36 md:pt-40 lg:pt-44 pb-20 px-6 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-5xl font-bold uppercase mb-4 sm:text-6xl">
            Frequently Asked Questions
          </h1>
          <div className="h-1 w-24 bg-white mb-6"></div>
          <p className="text-xl text-blue-100">
            Find answers to common questions about our services, process, and expertise.
          </p>
        </div>
      </div>

      <div className="py-16 px-6 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-4xl space-y-12">
          {faqsData.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h2 className="text-2xl font-bold text-brand-darkBlue mb-6 uppercase">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const key = `${categoryIndex}-${questionIndex}`;
                  const isOpen = openIndex === key;

                  return (
                    <div
                      key={questionIndex}
                      className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
                    >
                      <button
                        onClick={() => toggleFAQ(categoryIndex, questionIndex)}
                        className="w-full flex items-center justify-between p-6 text-left transition-colors hover:bg-slate-50"
                      >
                        <h3 className="text-lg font-bold text-brand-darkBlue pr-4">
                          {faq.question}
                        </h3>
                        {isOpen ? (
                          <ChevronUp className="text-brand-blue flex-shrink-0" size={24} />
                        ) : (
                          <ChevronDown className="text-brand-blue flex-shrink-0" size={24} />
                        )}
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-6">
                          <p className="text-brand-slate leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto max-w-4xl mt-16 text-center bg-white rounded-lg shadow-lg p-10">
          <h2 className="text-2xl font-bold text-brand-darkBlue mb-4">
            Still Have Questions?
          </h2>
          <p className="text-brand-slate mb-6">
            Can't find the answer you're looking for? Get in touch with our team.
          </p>
          <a
            href="/contact"
            className="inline-block text-white bg-brand-blue hover:bg-brand-darkBlue px-8 py-3 rounded-full font-bold uppercase tracking-wide transition-colors shadow-md"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};
