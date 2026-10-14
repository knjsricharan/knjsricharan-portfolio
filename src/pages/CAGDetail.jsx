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

const CAGDetail = () => {
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
          03 &mdash; AI &middot; Data Analysis
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.12 }}
          className="mb-4"
          style={{ fontFamily: 'var(--font-heading)', fontSize: '48px', color: 'var(--ink)', lineHeight: 1.1 }}
        >
          CAG Multi-Dataset Research Analyzer
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.16 }}
          className="italic mb-8"
          style={{ fontSize: '18px', color: 'var(--ink-2)' }}
        >
          Deployed a Streamlit app to analyze CSV, JSON, and TXT datasets with Gemini 2.5 Flash, with token-reuse tracking.
        </motion.p>
      </header>

      <hr className="my-8" style={{ borderTop: '1px solid var(--rule)' }} />

      <div className="flex flex-col gap-12" style={{ color: 'var(--ink)' }}>

        {/* 1. Problem */}
        <section>
          <SectionLabel>Problem</SectionLabel>
          <p style={{ fontSize: '16px', lineHeight: 1.6 }}>
            Iteratively analyzing large structured and unstructured datasets across multi-turn user queries repeatedly resends the full dataset payload to the model API, resulting in high latency, excessive prompt token consumption, and escalating API costs.
          </p>
        </section>

        {/* 2. What I built */}
        <section>
          <SectionLabel>What I built</SectionLabel>
          <p className="mb-4" style={{ fontSize: '16px', lineHeight: 1.6 }}>
            Engineered a web application leveraging Cache-Augmented Generation (CAG) to cache dataset context for consecutive analytical queries:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4" style={{ fontSize: '15px' }}>
            <li>Multi-format dataset loaders supporting CSV, JSON, and TXT files using pandas and standard json parsers.</li>
            <li>CAG simulation engine replicating the google-genai SDK Cached Content API behavior, accurately tracking dataset token footprints and rewriting usage metadata to demonstrate Cache Hits.</li>
            <li>Interactive Streamlit chat interface retaining session conversation history with response streaming indicators.</li>
            <li>Real-time telemetry side panel reporting cache status (Active/Expired), prompt tokens, cached tokens reused, output tokens, and estimated token savings.</li>
            <li>Defensive error handling addressing API timeouts, corrupted data formatting, and empty input queries.</li>
          </ul>
        </section>

        {/* 3. Stack */}
        <section>
          <SectionLabel>Stack</SectionLabel>
          <div className="overflow-x-auto">
            <table className="w-full text-left" style={{ fontSize: '15px' }}>
              <tbody>
                <tr className="border-b" style={{ borderColor: 'var(--rule)' }}>
                  <th className="py-3 font-normal" style={{ color: 'var(--ink-2)' }}>Language</th>
                  <td className="py-3">Python 3</td>
                </tr>
                <tr className="border-b" style={{ borderColor: 'var(--rule)' }}>
                  <th className="py-3 font-normal" style={{ color: 'var(--ink-2)' }}>UI Framework</th>
                  <td className="py-3">Streamlit</td>
                </tr>
                <tr className="border-b" style={{ borderColor: 'var(--rule)' }}>
                  <th className="py-3 font-normal" style={{ color: 'var(--ink-2)' }}>Data Processing</th>
                  <td className="py-3">Pandas</td>
                </tr>
                <tr className="border-b" style={{ borderColor: 'var(--rule)' }}>
                  <th className="py-3 font-normal" style={{ color: 'var(--ink-2)' }}>AI / LLM</th>
                  <td className="py-3">Google GenAI SDK (Gemini 2.5 Flash)</td>
                </tr>
                <tr>
                  <th className="py-3 font-normal" style={{ color: 'var(--ink-2)' }}>Deployment</th>
                  <td className="py-3">Streamlit Cloud</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 4. Outcome */}
        <section>
          <SectionLabel>Outcome</SectionLabel>
          <p style={{ fontSize: '16px', lineHeight: 1.6 }}>
            Successfully deployed a functional multi-dataset analytical tool on Streamlit Cloud, enabling multi-turn question answering over uploaded files while transparently demonstrating reduced latency and token reuse via Cache-Augmented Generation.
          </p>
        </section>

        {/* 5. Links */}
        <section>
          <SectionLabel>Links</SectionLabel>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://knjsc-cag.streamlit.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 font-medium inline-block"
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
            <a
              href="https://github.com/knjsricharan/CAG-MultiDatasetAnalysis"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 font-medium inline-block"
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

export default CAGDetail;
