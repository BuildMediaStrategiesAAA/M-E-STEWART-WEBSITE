import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-white py-20 px-6 sm:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
           <h2 className="text-4xl font-bold uppercase text-brand-darkBlue sm:text-5xl">
            Contact Us
           </h2>
           <div className="mx-auto mt-4 h-1 w-24 bg-brand-blue"></div>
           <p className="mt-4 text-brand-slate max-w-xl mx-auto">
             Based in Deal, serving the entire Kent region.
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Contact Info */}
          <div className="bg-brand-darkBlue text-white p-10 rounded-3xl flex flex-col justify-center h-full">
            <h2 className="text-3xl font-bold uppercase mb-6">Let's Build Together</h2>
            <p className="text-blue-200 mb-12 text-lg font-light">
              Ready to start your next project? Contact M E Stewart today for a consultation. We pride ourselves on transparent communication and reliable service throughout Kent.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 p-3 rounded-full">
                  <Phone size={24} aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-bold uppercase text-lg">Call Us</h4>
                  <a href="tel:07738520388" className="text-blue-200 hover:text-white transition-colors">07738 520388</a>
                  <p className="text-xs text-blue-300">Mon-Fri, 8am - 6pm</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-600 p-3 rounded-full">
                  <Mail size={24} aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-bold uppercase text-lg">Email Us</h4>
                  <a href="mailto:markstewart21@sky.com" className="text-blue-200 hover:text-white transition-colors break-all">markstewart21@sky.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-600 p-3 rounded-full">
                  <MapPin size={24} aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-bold uppercase text-lg">Visit Us</h4>
                  <address className="text-blue-200 not-italic">
                    High Street<br/>
                    Deal, Kent<br/>
                    CT14 6BB
                  </address>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-brand-grey text-brand-slate p-10 rounded-3xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold uppercase text-brand-darkBlue mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="contact-first-name" className="block text-sm font-bold uppercase text-gray-500 mb-2">First Name *</label>
                  <input
                    type="text"
                    id="contact-first-name"
                    name="firstName"
                    required
                    className="w-full rounded-lg border-2 border-transparent bg-white px-4 py-3 focus:border-brand-blue focus:outline-none transition-colors shadow-sm"
                    aria-required="true"
                  />
                </div>
                <div>
                  <label htmlFor="contact-last-name" className="block text-sm font-bold uppercase text-gray-500 mb-2">Last Name *</label>
                  <input
                    type="text"
                    id="contact-last-name"
                    name="lastName"
                    required
                    className="w-full rounded-lg border-2 border-transparent bg-white px-4 py-3 focus:border-brand-blue focus:outline-none transition-colors shadow-sm"
                    aria-required="true"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-sm font-bold uppercase text-gray-500 mb-2">Email Address *</label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  required
                  className="w-full rounded-lg border-2 border-transparent bg-white px-4 py-3 focus:border-brand-blue focus:outline-none transition-colors shadow-sm"
                  aria-required="true"
                />
              </div>

              <div>
                <label htmlFor="contact-project-type" className="block text-sm font-bold uppercase text-gray-500 mb-2">Project Type *</label>
                <select
                  id="contact-project-type"
                  name="projectType"
                  required
                  className="w-full rounded-lg border-2 border-transparent bg-white px-4 py-3 focus:border-brand-blue focus:outline-none transition-colors shadow-sm"
                  aria-required="true"
                >
                   <option value="">Select a project type</option>
                   <option value="new-build">New Build</option>
                   <option value="renovation">Renovation</option>
                   <option value="extension">Extension</option>
                   <option value="commercial">Commercial</option>
                   <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-bold uppercase text-gray-500 mb-2">Message *</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  className="w-full rounded-lg border-2 border-transparent bg-white px-4 py-3 focus:border-brand-blue focus:outline-none transition-colors resize-none shadow-sm"
                  aria-required="true"
                ></textarea>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="contact-privacy-consent"
                  name="privacyConsent"
                  required
                  className="mt-1 w-4 h-4 text-brand-blue border-gray-300 rounded focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 cursor-pointer"
                  aria-required="true"
                />
                <label htmlFor="contact-privacy-consent" className="text-sm text-brand-slate">
                  I agree to the <a href="/privacy-policy" className="text-brand-blue underline hover:text-brand-darkBlue" target="_blank" rel="noopener noreferrer">Privacy Policy</a> and consent to M E Stewart storing and processing my personal data to respond to my inquiry. *
                </label>
              </div>

              <button type="submit" className="w-full bg-brand-blue text-white font-bold uppercase py-4 rounded-full lg:hover:bg-brand-darkBlue transition-colors tracking-widest shadow-lg">
                Submit Inquiry
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};