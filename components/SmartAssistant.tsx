import React, { useState } from 'react';
import { Bot, Send, Loader2, Sparkles } from 'lucide-react';
import { getProjectAdvice } from '../services/geminiService';
import ReactMarkdown from 'react-markdown';

export const SmartAssistant: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setResponse(null);
    const result = await getProjectAdvice(query);
    setResponse(result);
    setLoading(false);
  };

  return (
    <section className="bg-white py-20 px-6 sm:px-12 lg:px-24">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl border border-gray-100 flex flex-col md:flex-row">
        
        {/* Left Side: Info */}
        <div className="bg-brand-darkBlue p-10 md:w-1/3 text-white flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="text-blue-400" size={32} />
              <h3 className="text-2xl font-bold uppercase">AI Project Planner</h3>
            </div>
            <p className="mb-6 text-blue-100">
              Not sure where to start? Ask our smart assistant about your project idea. Get a quick roadmap on permits, phases, and feasibility before you even pick up the phone.
            </p>
            <ul className="space-y-3 text-sm text-blue-200">
              <li className="flex gap-2"><span className="text-blue-400">✓</span> Instant initial advice</li>
              <li className="flex gap-2"><span className="text-blue-400">✓</span> Understand the process</li>
              <li className="flex gap-2"><span className="text-blue-400">✓</span> Prepare for your quote</li>
            </ul>
          </div>
          <div className="mt-8 opacity-50 text-xs">
            Powered by Google Gemini
          </div>
        </div>

        {/* Right Side: Interaction */}
        <div className="p-10 md:w-2/3 bg-brand-grey">
          {!response ? (
            <div className="h-full flex flex-col justify-center">
              <h4 className="mb-6 text-2xl font-bold text-brand-slate uppercase">Describe your project</h4>
              <form onSubmit={handleAsk} className="relative">
                <textarea
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="e.g., I want to add a 20sqm deck to the back of my house, or Convert my garage into an office..."
                  className="w-full h-40 rounded-2xl border-2 border-white p-4 text-lg focus:border-brand-blue focus:outline-none resize-none bg-white shadow-sm"
                />
                <button
                  type="submit"
                  disabled={loading || !query.trim()}
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-brand-blue py-3 font-bold uppercase text-white transition-colors lg:hover:bg-brand-darkBlue disabled:opacity-50 shadow-md"
                >
                  {loading ? <Loader2 className="animate-spin" /> : <Send size={20} />}
                  {loading ? "Analyzing Project..." : "Get Insight"}
                </button>
              </form>
            </div>
          ) : (
            <div className="h-full flex flex-col">
               <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-bold text-brand-darkBlue uppercase flex items-center gap-2">
                    <Bot size={24} className="text-brand-blue"/> AI Insight
                  </h4>
                  <button 
                    onClick={() => { setResponse(null); setQuery(''); }}
                    className="text-sm font-bold text-gray-400 lg:hover:text-brand-blue uppercase"
                  >
                    Start Over
                  </button>
               </div>
               <div className="flex-grow overflow-y-auto pr-2 custom-scrollbar">
                 <div className="prose prose-blue text-brand-slate prose-headings:font-heading prose-headings:uppercase prose-p:font-body">
                   <ReactMarkdown>{response}</ReactMarkdown>
                 </div>
               </div>
               <div className="mt-6 border-t border-gray-200 pt-4">
                 <p className="text-sm text-gray-500 italic mb-3">
                   *This is an AI-generated estimate. For accurate pricing and timelines, please contact us directly.
                 </p>
                 <a href="#contact" className="block w-full text-center rounded-full border-2 border-brand-blue py-2 font-bold uppercase text-brand-blue lg:hover:bg-brand-blue lg:hover:text-white transition-colors">
                   Book Official Site Visit
                 </a>
               </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};