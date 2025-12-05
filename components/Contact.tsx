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
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold uppercase text-lg">Call Us</h4>
                  <p className="text-blue-200">01304 555 789</p>
                  <p className="text-xs text-blue-300">Mon-Fri, 8am - 6pm</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 p-3 rounded-full">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold uppercase text-lg">Email Us</h4>
                  <p className="text-blue-200">info@mestewartbuilds.co.uk</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-600 p-3 rounded-full">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold uppercase text-lg">Visit Us</h4>
                  <p className="text-blue-200">
                    High Street<br/>
                    Deal, Kent<br/>
                    CT14 6BB
                  </p>
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
                  <label className="block text-sm font-bold uppercase text-gray-500 mb-2">First Name</label>
                  <input type="text" className="w-full rounded-lg border-2 border-transparent bg-white px-4 py-3 focus:border-brand-blue focus:outline-none transition-colors shadow-sm" />
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase text-gray-500 mb-2">Last Name</label>
                  <input type="text" className="w-full rounded-lg border-2 border-transparent bg-white px-4 py-3 focus:border-brand-blue focus:outline-none transition-colors shadow-sm" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold uppercase text-gray-500 mb-2">Email Address</label>
                <input type="email" className="w-full rounded-lg border-2 border-transparent bg-white px-4 py-3 focus:border-brand-blue focus:outline-none transition-colors shadow-sm" />
              </div>

              <div>
                <label className="block text-sm font-bold uppercase text-gray-500 mb-2">Project Type</label>
                <select className="w-full rounded-lg border-2 border-transparent bg-white px-4 py-3 focus:border-brand-blue focus:outline-none transition-colors shadow-sm">
                   <option>New Build</option>
                   <option>Renovation</option>
                   <option>Extension</option>
                   <option>Commercial</option>
                   <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold uppercase text-gray-500 mb-2">Message</label>
                <textarea rows={4} className="w-full rounded-lg border-2 border-transparent bg-white px-4 py-3 focus:border-brand-blue focus:outline-none transition-colors resize-none shadow-sm"></textarea>
              </div>

              <button type="button" className="w-full bg-brand-blue text-white font-bold uppercase py-4 rounded-full lg:hover:bg-brand-darkBlue transition-colors tracking-widest shadow-lg">
                Submit Inquiry
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};