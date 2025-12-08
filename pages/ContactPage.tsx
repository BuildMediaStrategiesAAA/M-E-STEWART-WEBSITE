import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    privacyConsent: false
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? (target as HTMLInputElement).checked : target.value;
    const name = target.name;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', service: '', message: '', privacyConsent: false });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-24">
      <div className="bg-gradient-to-br from-brand-darkBlue to-brand-blue text-white py-20 px-6 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold uppercase mb-6 animate-fade-in">
            Get in Touch with Our Deal Team
          </h1>
          <div className="mx-auto h-1 w-32 bg-white mb-6"></div>
          <p className="text-xl sm:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
            Serving Deal, Dover, and Kent. Get in touch for a free consultation and quote.
          </p>
        </div>
      </div>

      <section className="py-20 px-6 sm:px-12 lg:px-24 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-slate-50 p-8 rounded-2xl shadow-lg">
                <h2 className="text-3xl font-bold uppercase text-brand-darkBlue mb-6">
                  Get A Free Quote
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold uppercase text-brand-slate mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-brand-blue focus:outline-none transition-colors"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold uppercase text-brand-slate mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-brand-blue focus:outline-none transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold uppercase text-brand-slate mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-brand-blue focus:outline-none transition-colors"
                        placeholder="07XXX XXXXXX"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-bold uppercase text-brand-slate mb-2">
                        Service Required *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-brand-blue focus:outline-none transition-colors"
                      >
                        <option value="">Select a service</option>
                        <option value="new-build">New Build</option>
                        <option value="renovation">Renovation</option>
                        <option value="extension">Extension</option>
                        <option value="commercial">Commercial</option>
                        <option value="loft-conversion">Loft Conversion</option>
                        <option value="design">Design & Planning</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold uppercase text-brand-slate mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-brand-blue focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your project..."
                      aria-required="true"
                    ></textarea>
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="privacyConsent"
                      name="privacyConsent"
                      checked={formData.privacyConsent}
                      onChange={handleChange}
                      required
                      className="mt-1 w-4 h-4 text-brand-blue border-gray-300 rounded focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 cursor-pointer"
                      aria-required="true"
                    />
                    <label htmlFor="privacyConsent" className="text-sm text-brand-slate">
                      I agree to the <a href="/privacy-policy" className="text-brand-blue underline hover:text-brand-darkBlue" target="_blank" rel="noopener noreferrer">Privacy Policy</a> and consent to M E Stewart storing and processing my personal data to respond to my inquiry. *
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={submitted}
                    className="w-full md:w-auto px-10 py-4 bg-brand-blue text-white font-bold uppercase rounded-full lg:hover:bg-brand-darkBlue transition-all duration-300 shadow-lg lg:hover:shadow-2xl flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label={submitted ? "Message sent successfully" : "Send message"}
                  >
                    {submitted ? (
                      <>Message Sent!</>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-brand-darkBlue text-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold uppercase mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 h-12 w-12 bg-brand-blue rounded-full flex items-center justify-center">
                      <Phone size={20} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-bold uppercase text-sm mb-1">Phone</p>
                      <a href="tel:07738520388" className="lg:hover:text-brand-blue transition-colors">
                        07738 520388
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 h-12 w-12 bg-brand-blue rounded-full flex items-center justify-center">
                      <Mail size={20} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-bold uppercase text-sm mb-1">Email</p>
                      <a href="mailto:markstewart21@sky.com" className="lg:hover:text-brand-blue transition-colors break-all">
                        markstewart21@sky.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 h-12 w-12 bg-brand-blue rounded-full flex items-center justify-center">
                      <MapPin size={20} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-bold uppercase text-sm mb-1">Address</p>
                      <address className="leading-relaxed not-italic">
                        Deal, Kent<br />
                        United Kingdom
                      </address>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 h-12 w-12 bg-brand-blue rounded-full flex items-center justify-center">
                      <Clock size={20} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-bold uppercase text-sm mb-1">Working Hours</p>
                      <p className="leading-relaxed">
                        Monday - Friday: 8:00 - 18:00<br />
                        Saturday: 9:00 - 14:00<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-brand-blue text-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold uppercase mb-4">Service Areas</h3>
                <p className="leading-relaxed mb-4">
                  We serve clients throughout Kent and surrounding areas, including:
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Deal</li>
                  <li>• Dover</li>
                  <li>• Canterbury</li>
                  <li>• Sandwich</li>
                  <li>• Walmer</li>
                  <li>• Ramsgate</li>
                  <li>• Whitstable</li>
                  <li>• And surrounding areas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 sm:px-12 lg:px-24 bg-slate-50">
        <div className="mx-auto max-w-7xl">
          <div className="bg-white p-4 rounded-2xl shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40233.81487974587!2d1.3795!3d51.2228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d9290f3d4b6d7b%3A0x4e6e6e6e6e6e6e6e!2sDeal%2C%20UK!5e0!3m2!1sen!2suk!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-lg"
            ></iframe>
          </div>
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
