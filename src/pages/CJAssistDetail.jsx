import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const SectionLabel = ({ children }) => (
  <div 
    className="font-mono uppercase mb-3 tracking-widest"
    style={{ fontSize: '10px', color: 'var(--ink-3)' }}
  >
    {children}
  </div>
);

const CJAssistDetail = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0 }}
      viewport={{ once: false }}
      className="w-full max-w-[800px] mx-auto py-16 px-8 text-left"
    >
      {/* Top Back Link */}
      <Link 
        to="/" 
        className="inline-block mb-12 font-mono hover:opacity-70 transition-opacity"
        style={{ fontSize: '12px', color: 'var(--ink-3)' }}
      >
        &larr; Back to Portfolio
      </Link>

      {/* Header */}
      <header className="mb-8">
        <div 
          className="font-mono uppercase mb-4 tracking-widest"
          style={{ fontSize: '10px', color: 'var(--ink-3)' }}
        >
          02 &mdash; AI &middot; Full-Stack
        </div>
        <h1 
          className="mb-4"
          style={{ fontFamily: 'var(--font-heading)', fontSize: '48px', color: 'var(--ink)', lineHeight: 1.1 }}
        >
          CJ Assist
        </h1>
        <p 
          className="italic mb-8"
          style={{ fontSize: '18px', color: 'var(--ink-2)' }}
        >
          Multi-provider AI comparison platform with real-time cost and latency tracking
        </p>

        {/* Links */}
        <div className="flex flex-wrap gap-4">
          <a 
            href="https://github.com/knjsricharan/cj-assist" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 font-medium transition-transform hover:-translate-y-0.5"
            style={{ 
              backgroundColor: 'transparent', 
              color: 'var(--ink)',
              fontSize: '13px',
              border: '1px solid var(--ink)'
            }}
          >
            GitHub &rarr;
          </a>
          <a 
            href="#" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 font-medium transition-transform hover:-translate-y-0.5"
            style={{ 
              backgroundColor: 'var(--ink)', 
              color: 'var(--bg)',
              fontSize: '13px',
              border: '1px solid var(--ink)'
            }}
          >
            Live Demo &rarr;
          </a>
        </div>
      </header>

      {/* Divider */}
      <hr className="my-8" style={{ borderTop: '1px solid var(--rule)' }} />

      {/* Main Content */}
      <div className="flex flex-col gap-12" style={{ color: 'var(--ink)' }}>
        
        {/* Problem */}
        <section>
          <SectionLabel>Problem</SectionLabel>
          <p style={{ fontSize: '16px', lineHeight: 1.6 }}>
            Users have no unified interface to compare multiple AI models on response quality, speed, and cost &mdash; making informed model selection difficult.
          </p>
        </section>

        {/* Solution */}
        <section>
          <SectionLabel>Solution</SectionLabel>
          <p style={{ fontSize: '16px', lineHeight: 1.6 }}>
            CJ Assist fans a single prompt to multiple providers simultaneously, returning side-by-side outputs with per-response cost, latency, and token metadata.
          </p>
        </section>

        {/* Key Features */}
        <section>
          <SectionLabel>Key Features</SectionLabel>
          <ul className="list-disc list-inside space-y-2" style={{ fontSize: '15px' }}>
            <li>Bring-your-own API key (6 providers: OpenAI, Gemini, Anthropic, Groq, OpenRouter, HuggingFace)</li>
            <li>Auto-detects provider from API key format</li>
            <li>Compare Mode: parallel responses side by side</li>
            <li>Per-response latency (ms), token count, cost ($)</li>
            <li>Privacy-first: keys stored in localStorage only</li>
            <li>Graceful error handling and rate limit recovery</li>
          </ul>
        </section>

        {/* Technical Design */}
        <section>
          <SectionLabel>Technical Design</SectionLabel>
          <p style={{ fontSize: '16px', lineHeight: 1.6 }}>
            Pure frontend architecture &mdash; no backend required. All API calls made client-side. Provider abstraction layer normalizes requests across different API formats. Cost computed from provider token pricing tables.
          </p>
        </section>

        {/* Tech Stack */}
        <section>
          <SectionLabel>Tech Stack</SectionLabel>
          <div className="overflow-x-auto">
            <table className="w-full text-left" style={{ fontSize: '15px' }}>
              <tbody>
                <tr className="border-b" style={{ borderColor: 'var(--rule)' }}>
                  <th className="py-3 font-normal" style={{ color: 'var(--ink-2)' }}>Frontend</th>
                  <td className="py-3">React (Vite), Custom CSS</td>
                </tr>
                <tr className="border-b" style={{ borderColor: 'var(--rule)' }}>
                  <th className="py-3 font-normal" style={{ color: 'var(--ink-2)' }}>HTTP Client</th>
                  <td className="py-3">Axios</td>
                </tr>
                <tr className="border-b" style={{ borderColor: 'var(--rule)' }}>
                  <th className="py-3 font-normal" style={{ color: 'var(--ink-2)' }}>Charts</th>
                  <td className="py-3">Recharts</td>
                </tr>
                <tr className="border-b" style={{ borderColor: 'var(--rule)' }}>
                  <th className="py-3 font-normal" style={{ color: 'var(--ink-2)' }}>AI Routing</th>
                  <td className="py-3">OpenRouter + direct provider APIs</td>
                </tr>
                <tr className="border-b" style={{ borderColor: 'var(--rule)' }}>
                  <th className="py-3 font-normal" style={{ color: 'var(--ink-2)' }}>State</th>
                  <td className="py-3">localStorage</td>
                </tr>
                <tr>
                  <th className="py-3 font-normal" style={{ color: 'var(--ink-2)' }}>Deployment</th>
                  <td className="py-3">Vercel</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Image Placeholder */}
        <section>
          <div 
            className="w-full h-[400px] flex flex-col items-center justify-center border"
            style={{ 
              backgroundColor: 'var(--bg)', 
              borderColor: 'var(--rule)'
            }}
          >
            <div className="font-mono uppercase tracking-widest" style={{ fontSize: '12px', color: 'var(--ink-3)' }}>
              Project Screenshot &mdash; Coming Soon
            </div>
          </div>
        </section>

      </div>

      {/* Footer Back Link */}
      <div className="mt-16 pt-8 border-t" style={{ borderColor: 'var(--rule)' }}>
        <Link 
          to="/" 
          className="inline-block font-mono hover:opacity-70 transition-opacity"
          style={{ fontSize: '12px', color: 'var(--ink-3)' }}
        >
          &larr; Back to Portfolio
        </Link>
      </div>

    </motion.div>
  );
};

export default CJAssistDetail;
