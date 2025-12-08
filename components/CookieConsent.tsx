import React, { useState, useEffect } from 'react';
import { X, Cookie, Settings } from 'lucide-react';

export const CookieConsent: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    } else {
      const savedPreferences = JSON.parse(consent);
      setPreferences(savedPreferences);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    localStorage.setItem('cookieConsent', JSON.stringify(allAccepted));
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setPreferences(allAccepted);
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    localStorage.setItem('cookieConsent', JSON.stringify(onlyNecessary));
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setPreferences(onlyNecessary);
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setShowBanner(false);
    setShowSettings(false);
  };

  const handlePreferenceChange = (key: keyof typeof preferences) => {
    if (key === 'necessary') return;
    setPreferences({
      ...preferences,
      [key]: !preferences[key],
    });
  };

  if (!showBanner) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity"
        aria-hidden="true"
      ></div>

      <div
        className="fixed bottom-0 left-0 right-0 bg-white shadow-2xl z-50 border-t-4 border-brand-blue"
        role="dialog"
        aria-labelledby="cookie-consent-title"
        aria-describedby="cookie-consent-description"
      >
        <div className="container mx-auto px-6 py-8 max-w-6xl">
          {!showSettings ? (
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
              <div className="flex items-start gap-4 flex-1">
                <div className="flex-shrink-0">
                  <Cookie size={32} className="text-brand-blue" aria-hidden="true" />
                </div>
                <div>
                  <h2 id="cookie-consent-title" className="text-xl font-bold text-brand-darkBlue mb-2">
                    We Value Your Privacy
                  </h2>
                  <p id="cookie-consent-description" className="text-brand-slate text-sm leading-relaxed">
                    We use cookies to enhance your browsing experience, analyze site traffic, and personalize content.
                    By clicking "Accept All", you consent to our use of cookies. You can manage your preferences or learn more in our{' '}
                    <a href="/privacy-policy" className="text-brand-blue underline hover:text-brand-darkBlue">
                      Privacy Policy
                    </a>.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <button
                  onClick={() => setShowSettings(true)}
                  className="px-6 py-3 border-2 border-brand-blue text-brand-blue font-bold uppercase rounded-full hover:bg-brand-blue hover:text-white transition-all flex items-center justify-center gap-2"
                  aria-label="Manage cookie preferences"
                >
                  <Settings size={18} aria-hidden="true" />
                  Manage Preferences
                </button>
                <button
                  onClick={handleRejectAll}
                  className="px-6 py-3 border-2 border-gray-300 text-brand-slate font-bold uppercase rounded-full hover:bg-gray-100 transition-all"
                  aria-label="Reject all cookies except necessary ones"
                >
                  Reject All
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="px-6 py-3 bg-brand-blue text-white font-bold uppercase rounded-full hover:bg-brand-darkBlue transition-all shadow-lg"
                  aria-label="Accept all cookies"
                >
                  Accept All
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-brand-darkBlue mb-2">Cookie Preferences</h2>
                  <p className="text-brand-slate text-sm">
                    Manage your cookie preferences below. Necessary cookies cannot be disabled as they are required for the website to function.
                  </p>
                </div>
                <button
                  onClick={() => setShowSettings(false)}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                  aria-label="Close preferences panel"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h3 className="font-bold text-brand-darkBlue mb-1">Necessary Cookies</h3>
                    <p className="text-sm text-brand-slate">
                      Required for the website to function properly. These cannot be disabled.
                    </p>
                  </div>
                  <div className="ml-4">
                    <input
                      type="checkbox"
                      checked={preferences.necessary}
                      disabled
                      className="w-5 h-5 text-brand-blue cursor-not-allowed"
                      aria-label="Necessary cookies (always enabled)"
                    />
                  </div>
                </div>

                <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h3 className="font-bold text-brand-darkBlue mb-1">Analytics Cookies</h3>
                    <p className="text-sm text-brand-slate">
                      Help us understand how visitors interact with our website by collecting and reporting information anonymously.
                    </p>
                  </div>
                  <div className="ml-4">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={() => handlePreferenceChange('analytics')}
                      className="w-5 h-5 text-brand-blue cursor-pointer focus:ring-2 focus:ring-brand-blue focus:ring-offset-2"
                      aria-label="Toggle analytics cookies"
                    />
                  </div>
                </div>

                <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h3 className="font-bold text-brand-darkBlue mb-1">Marketing Cookies</h3>
                    <p className="text-sm text-brand-slate">
                      Used to track visitors across websites to display relevant ads and marketing campaigns.
                    </p>
                  </div>
                  <div className="ml-4">
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={() => handlePreferenceChange('marketing')}
                      className="w-5 h-5 text-brand-blue cursor-pointer focus:ring-2 focus:ring-brand-blue focus:ring-offset-2"
                      aria-label="Toggle marketing cookies"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-end">
                <button
                  onClick={handleRejectAll}
                  className="px-8 py-3 border-2 border-gray-300 text-brand-slate font-bold uppercase rounded-full hover:bg-gray-100 transition-all"
                  aria-label="Reject all optional cookies"
                >
                  Reject All
                </button>
                <button
                  onClick={handleSavePreferences}
                  className="px-8 py-3 bg-brand-blue text-white font-bold uppercase rounded-full hover:bg-brand-darkBlue transition-all shadow-lg"
                  aria-label="Save cookie preferences"
                >
                  Save Preferences
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
