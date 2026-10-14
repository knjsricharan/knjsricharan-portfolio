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
          Multi-provider AI workspace for 5+ LLMs with BYOK routing and a real-time monitoring dashboard (latency, tokens, cost).
        </motion.p>
      </header>

      <hr className="my-8" style={{ borderTop: '1px solid var(--rule)' }} />

      <div className="flex flex-col gap-12" style={{ color: 'var(--ink)' }}>

        {/* 1. Problem */}
        <section>
          <SectionLabel>Problem</SectionLabel>
          <p style={{ fontSize: '16px', lineHeight: 1.6 }}>
            Evaluating outputs, response latency, token consumption, and cost across multiple Large Language Model (LLM) providers requires navigating disparate developer consoles, disparate SDKs, and fragmented billing structures.
          </p>
        </section>

        {/* 2. What I built */}
        <section>
          <SectionLabel>What I built</SectionLabel>
          <p className="mb-4" style={{ fontSize: '16px', lineHeight: 1.6 }}>
            Developed a multi-provider AI workspace supporting 5+ LLMs with client-side Bring-Your-Own-Key (BYOK) routing:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4" style={{ fontSize: '15px' }}>
            <li>Direct BYOK integration connecting to provider REST APIs without server-side key persistence.</li>
            <li>Multi-model interaction layer allowing prompt execution across distinct AI models.</li>
            <li>Real-time performance instrumentation tracking request latency, token counts, and computed cost per query.</li>
            <li>Visual analytics dashboard built with Recharts displaying comparative performance metrics.</li>
            <li>Client-side state management maintaining query history and API configurations securely in browser storage.</li>
          </ul>
        </section>

        {/* 3. Stack */}
        <section>
          <SectionLabel>Stack</SectionLabel>
          <div className="overflow-x-auto">
            <table className="w-full text-left" style={{ fontSize: '15px' }}>
              <tbody>
                <tr className="border-b" style={{ borderColor: 'var(--rule)' }}>
                  <th className="py-3 font-normal" style={{ color: 'var(--ink-2)' }}>Frontend</th>
                  <td className="py-3">React (Vite), TailwindCSS</td>
                </tr>
                <tr className="border-b" style={{ borderColor: 'var(--rule)' }}>
                  <th className="py-3 font-normal" style={{ color: 'var(--ink-2)' }}>Networking</th>
                  <td className="py-3">Axios, REST APIs</td>
                </tr>
                <tr className="border-b" style={{ borderColor: 'var(--rule)' }}>
                  <th className="py-3 font-normal" style={{ color: 'var(--ink-2)' }}>Data Visualization</th>
                  <td className="py-3">Recharts</td>
                </tr>
                <tr>
                  <th className="py-3 font-normal" style={{ color: 'var(--ink-2)' }}>Deployment</th>
                  <td className="py-3">Vercel</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 4. Outcome */}
        <section>
          <SectionLabel>Outcome</SectionLabel>
          <p style={{ fontSize: '16px', lineHeight: 1.6 }}>
            Provided a unified testing and evaluation workspace where users can switch between 5+ models in real time, compare output quality, observe latency and cost trade-offs, and maintain full custody over their credentials.
          </p>
        </section>

        {/* 5. Links */}
        <section>
          <SectionLabel>Links</SectionLabel>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://cj-assist.vercel.app"
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
              href="https://github.com/knjsricharan/cj-assist"
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

export default CJAssistDetail;
