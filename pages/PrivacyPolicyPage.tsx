import React from 'react';
import { Shield, Mail, Lock, Eye, Database, UserCheck, Clock, FileText } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-24">
      <div className="bg-gradient-to-br from-brand-darkBlue to-brand-blue text-white py-16 px-6 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="flex justify-center mb-6">
            <Shield size={64} aria-hidden="true" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase mb-4">
            Privacy Policy
          </h1>
          <div className="mx-auto h-1 w-32 bg-white mb-6"></div>
          <p className="text-lg opacity-90">
            Last Updated: December 8, 2024
          </p>
        </div>
      </div>

      <div className="py-16 px-6 sm:px-12 lg:px-24 bg-white">
        <div className="mx-auto max-w-4xl">
          <div className="prose max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-brand-darkBlue mb-4 flex items-center gap-3">
                <FileText size={32} className="text-brand-blue" aria-hidden="true" />
                Introduction
              </h2>
              <p className="text-brand-slate leading-relaxed mb-4">
                M E Stewart Property Services Ltd ("we", "our", "us") is committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p className="text-brand-slate leading-relaxed">
                We are registered in England and Wales and operate in compliance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-brand-darkBlue mb-4 flex items-center gap-3">
                <Database size={32} className="text-brand-blue" aria-hidden="true" />
                What Personal Data We Collect
              </h2>
              <p className="text-brand-slate leading-relaxed mb-4">
                We may collect and process the following types of personal data:
              </p>
              <div className="bg-slate-50 p-6 rounded-lg mb-4">
                <h3 className="text-xl font-bold text-brand-darkBlue mb-3">Contact Information</h3>
                <ul className="list-disc list-inside space-y-2 text-brand-slate">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Postal address</li>
                </ul>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg mb-4">
                <h3 className="text-xl font-bold text-brand-darkBlue mb-3">Project Information</h3>
                <ul className="list-disc list-inside space-y-2 text-brand-slate">
                  <li>Details about your building project or service requirements</li>
                  <li>Property address and specifications</li>
                  <li>Budget and timeline preferences</li>
                  <li>Communication preferences</li>
                </ul>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-brand-darkBlue mb-3">Technical Data</h3>
                <ul className="list-disc list-inside space-y-2 text-brand-slate">
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Device information</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referring website addresses</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-brand-darkBlue mb-4 flex items-center gap-3">
                <Eye size={32} className="text-brand-blue" aria-hidden="true" />
                Why We Collect Your Data
              </h2>
              <p className="text-brand-slate leading-relaxed mb-4">
                We collect and use your personal data for the following purposes:
              </p>
              <div className="space-y-4">
                <div className="border-l-4 border-brand-blue pl-6 py-2">
                  <h3 className="font-bold text-brand-darkBlue mb-2">Service Delivery</h3>
                  <p className="text-brand-slate">To provide quotes, schedule consultations, and deliver building services you have requested.</p>
                </div>
                <div className="border-l-4 border-brand-blue pl-6 py-2">
                  <h3 className="font-bold text-brand-darkBlue mb-2">Communication</h3>
                  <p className="text-brand-slate">To respond to your inquiries, send project updates, and provide customer support.</p>
                </div>
                <div className="border-l-4 border-brand-blue pl-6 py-2">
                  <h3 className="font-bold text-brand-darkBlue mb-2">Legal Obligations</h3>
                  <p className="text-brand-slate">To comply with legal requirements, including building regulations, health and safety, and tax obligations.</p>
                </div>
                <div className="border-l-4 border-brand-blue pl-6 py-2">
                  <h3 className="font-bold text-brand-darkBlue mb-2">Website Improvement</h3>
                  <p className="text-brand-slate">To analyze website usage and improve our online services (only with your consent for analytics cookies).</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-brand-darkBlue mb-4 flex items-center gap-3">
                <UserCheck size={32} className="text-brand-blue" aria-hidden="true" />
                Legal Basis for Processing
              </h2>
              <p className="text-brand-slate leading-relaxed mb-4">
                We process your personal data based on the following legal grounds:
              </p>
              <ul className="list-disc list-inside space-y-3 text-brand-slate">
                <li><strong>Consent:</strong> You have given clear consent for us to process your personal data for a specific purpose (e.g., marketing communications).</li>
                <li><strong>Contract:</strong> Processing is necessary for a contract we have with you or because you have asked us to take specific steps before entering into a contract.</li>
                <li><strong>Legal Obligation:</strong> Processing is necessary for us to comply with the law.</li>
                <li><strong>Legitimate Interests:</strong> Processing is necessary for our legitimate interests or the legitimate interests of a third party, provided those interests are not overridden by your rights.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-brand-darkBlue mb-4 flex items-center gap-3">
                <Lock size={32} className="text-brand-blue" aria-hidden="true" />
                Who We Share Your Data With
              </h2>
              <p className="text-brand-slate leading-relaxed mb-4">
                We do not sell, rent, or trade your personal data. We may share your information with:
              </p>
              <div className="bg-slate-50 p-6 rounded-lg space-y-4">
                <div>
                  <h3 className="font-bold text-brand-darkBlue mb-2">Service Providers</h3>
                  <p className="text-brand-slate text-sm">Trusted third parties who assist in operating our business (e.g., email services, website hosting). These providers are bound by confidentiality agreements.</p>
                </div>
                <div>
                  <h3 className="font-bold text-brand-darkBlue mb-2">Subcontractors & Partners</h3>
                  <p className="text-brand-slate text-sm">When necessary to deliver services you've requested, we may share project information with qualified subcontractors or material suppliers.</p>
                </div>
                <div>
                  <h3 className="font-bold text-brand-darkBlue mb-2">Legal Authorities</h3>
                  <p className="text-brand-slate text-sm">When required by law or to protect our rights, we may disclose information to law enforcement or regulatory bodies.</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-brand-darkBlue mb-4 flex items-center gap-3">
                <Clock size={32} className="text-brand-blue" aria-hidden="true" />
                How Long We Store Your Data
              </h2>
              <p className="text-brand-slate leading-relaxed mb-4">
                We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy:
              </p>
              <ul className="list-disc list-inside space-y-3 text-brand-slate">
                <li><strong>Active Customers:</strong> For the duration of our business relationship and up to 7 years after completion for legal and warranty purposes.</li>
                <li><strong>Inquiry Data:</strong> Up to 2 years if no service contract is established.</li>
                <li><strong>Marketing Data:</strong> Until you withdraw consent or request deletion.</li>
                <li><strong>Financial Records:</strong> Minimum of 6 years as required by UK tax law.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-brand-darkBlue mb-4">Your Rights Under GDPR</h2>
              <p className="text-brand-slate leading-relaxed mb-4">
                Under UK GDPR, you have the following rights:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-brand-blue text-white p-6 rounded-lg">
                  <h3 className="font-bold uppercase mb-2">Right to Access</h3>
                  <p className="text-sm">Request a copy of the personal data we hold about you.</p>
                </div>
                <div className="bg-brand-blue text-white p-6 rounded-lg">
                  <h3 className="font-bold uppercase mb-2">Right to Rectification</h3>
                  <p className="text-sm">Request correction of inaccurate or incomplete data.</p>
                </div>
                <div className="bg-brand-blue text-white p-6 rounded-lg">
                  <h3 className="font-bold uppercase mb-2">Right to Erasure</h3>
                  <p className="text-sm">Request deletion of your personal data (right to be forgotten).</p>
                </div>
                <div className="bg-brand-blue text-white p-6 rounded-lg">
                  <h3 className="font-bold uppercase mb-2">Right to Restrict</h3>
                  <p className="text-sm">Request restriction of processing in certain circumstances.</p>
                </div>
                <div className="bg-brand-blue text-white p-6 rounded-lg">
                  <h3 className="font-bold uppercase mb-2">Right to Portability</h3>
                  <p className="text-sm">Receive your data in a structured, commonly used format.</p>
                </div>
                <div className="bg-brand-blue text-white p-6 rounded-lg">
                  <h3 className="font-bold uppercase mb-2">Right to Object</h3>
                  <p className="text-sm">Object to processing based on legitimate interests or direct marketing.</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-brand-darkBlue mb-4">Cookies</h2>
              <p className="text-brand-slate leading-relaxed mb-4">
                Our website uses cookies to enhance your browsing experience. Cookies are small text files stored on your device. We use:
              </p>
              <ul className="list-disc list-inside space-y-3 text-brand-slate">
                <li><strong>Necessary Cookies:</strong> Essential for the website to function. These cannot be disabled.</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site (requires your consent).</li>
                <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertising (requires your consent).</li>
              </ul>
              <p className="text-brand-slate leading-relaxed mt-4">
                You can manage your cookie preferences at any time using our cookie consent banner or through your browser settings.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-brand-darkBlue mb-4">Data Security</h2>
              <p className="text-brand-slate leading-relaxed mb-4">
                We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-brand-slate">
                <li>Encrypted data transmission (SSL/TLS)</li>
                <li>Secure data storage with access controls</li>
                <li>Regular security assessments</li>
                <li>Staff training on data protection</li>
                <li>Confidentiality agreements with third parties</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-brand-darkBlue mb-4">Third-Party Links</h2>
              <p className="text-brand-slate leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to read the privacy policies of any third-party sites you visit.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-brand-darkBlue mb-4">Changes to This Policy</h2>
              <p className="text-brand-slate leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. The "Last Updated" date at the top of this page indicates when the policy was last revised. We encourage you to review this policy periodically.
              </p>
            </section>

            <section className="bg-brand-darkBlue text-white p-8 rounded-2xl">
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <Mail size={32} aria-hidden="true" />
                Contact Us
              </h2>
              <p className="leading-relaxed mb-6">
                If you have any questions about this Privacy Policy or wish to exercise your data protection rights, please contact us:
              </p>
              <div className="space-y-3">
                <p>
                  <strong>Email:</strong>{' '}
                  <a href="mailto:markstewart21@sky.com" className="underline hover:text-brand-blue transition-colors">
                    markstewart21@sky.com
                  </a>
                </p>
                <p>
                  <strong>Phone:</strong>{' '}
                  <a href="tel:07738520388" className="underline hover:text-brand-blue transition-colors">
                    07738 520388
                  </a>
                </p>
                <p>
                  <strong>Address:</strong> Deal, Kent, United Kingdom
                </p>
              </div>
              <p className="mt-6 text-sm opacity-90">
                You also have the right to lodge a complaint with the Information Commissioner's Office (ICO), the UK's data protection authority, if you believe your data protection rights have been violated.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
