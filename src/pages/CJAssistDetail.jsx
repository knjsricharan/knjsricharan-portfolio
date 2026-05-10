import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1];

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
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease }}
      className="w-full max-w-[800px] mx-auto py-16 px-8 text-left"
    >
      <Link
        to="/"
        className="inline-block mb-12 font-mono nav-link"
        style={{ fontSize: '12px', color: 'var(--ink-3)' }}
      >
        &larr; Back to Portfolio
      </Link>

      <header className="mb-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.08 }}
          className="font-mono uppercase mb-4 tracking-widest"
          style={{ fontSize: '10px', color: 'var(--ink-3)' }}
        >
          02 &mdash; AI &middot; Full-Stack
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.12 }}
          className="mb-4"
          style={{ fontFamily: 'var(--font-heading)', fontSize: '48px', color: 'var(--ink)', lineHeight: 1.1 }}
        >
          CJ Assist
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.16 }}
          className="italic mb-8"
          style={{ fontSize: '18px', color: 'var(--ink-2)' }}
        >
          Multi-provider AI comparison platform with real-time cost and latency tracking
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.2 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="https://github.com/knjsricharan/cj-assist"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 font-medium"
            style={{
              backgroundColor: 'transparent',
              color: 'var(--ink)',
              fontSize: '13px',
              border: '1px solid var(--ink)',
              transition: 'transform 200ms cubic-bezier(0.16, 1, 0.3, 1)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            GitHub &rarr;
          </a>
          <a
            href="https://cj-assist.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 font-medium"
            style={{
              backgroundColor: 'var(--ink)',
              color: 'var(--bg)',
              fontSize: '13px',
              border: '1px solid var(--ink)',
              transition: 'transform 200ms cubic-bezier(0.16, 1, 0.3, 1)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            Live Demo &rarr;
          </a>
        </motion.div>
      </header>

      <hr className="my-8" style={{ borderTop: '1px solid var(--rule)' }} />

      <div className="flex flex-col gap-12" style={{ color: 'var(--ink)' }}>

        <section>
          <SectionLabel>Problem</SectionLabel>
          <p style={{ fontSize: '16px', lineHeight: 1.6 }}>
            Users have no unified interface to compare multiple AI models on response quality, speed, and cost &mdash; making informed model selection difficult.
          </p>
        </section>

        <section>
          <SectionLabel>Solution</SectionLabel>
          <p style={{ fontSize: '16px', lineHeight: 1.6 }}>
            CJ Assist fans a single prompt to multiple providers simultaneously, returning side-by-side outputs with per-response cost, latency, and token metadata.
          </p>
        </section>

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

        <section>
          <SectionLabel>Technical Design</SectionLabel>
          <p style={{ fontSize: '16px', lineHeight: 1.6 }}>
            Pure frontend architecture &mdash; no backend required. All API calls made client-side. Provider abstraction layer normalizes requests across different API formats. Cost computed from provider token pricing tables.
          </p>
        </section>

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

      <div className="mt-16 pt-8 border-t" style={{ borderColor: 'var(--rule)' }}>
        <Link
          to="/"
          className="inline-block font-mono nav-link"
          style={{ fontSize: '12px', color: 'var(--ink-3)' }}
        >
          &larr; Back to Portfolio
        </Link>
      </div>

    </motion.div>
  );
};

export default CJAssistDetail;
