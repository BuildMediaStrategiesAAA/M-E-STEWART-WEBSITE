import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const faqs = [
  {
    question: "What areas do you cover?",
    answer: "We primarily serve Deal, Dover, Sandwich, and surrounding areas across Kent."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary depending on scope. Small renovations take 2-4 weeks, while larger builds can take 3-6 months."
  },
  {
    question: "Do you provide free quotes?",
    answer: "Yes, we offer free, no-obligation quotes for all projects. Contact us to schedule a consultation."
  }
];

export const FAQPreview: React.FC = () => {
  return (
    <section className="py-16 px-6 sm:px-12 lg:px-24 bg-slate-50">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold uppercase text-brand-darkBlue sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <div className="h-1 w-24 bg-brand-blue mt-4 mx-auto"></div>
        </div>

        <div className="space-y-6 mb-10">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-6 shadow-md lg:hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-lg font-bold text-brand-darkBlue mb-2">
                {faq.question}
              </h3>
              <p className="text-brand-slate">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/faqs"
            className="inline-flex items-center text-white bg-brand-blue lg:hover:bg-brand-darkBlue px-8 py-3 rounded-full font-bold uppercase tracking-wide transition-colors shadow-md"
          >
            View All FAQs
            <ChevronRight size={20} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};
