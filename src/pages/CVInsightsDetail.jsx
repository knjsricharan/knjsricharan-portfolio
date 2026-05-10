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

const CVInsightsDetail = () => {
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
          01 &mdash; AI / ML &middot; Backend
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.12 }}
          className="mb-4"
          style={{ fontFamily: 'var(--font-heading)', fontSize: '48px', color: 'var(--ink)', lineHeight: 1.1 }}
        >
          CVInsights
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.16 }}
          className="italic mb-8"
          style={{ fontSize: '18px', color: 'var(--ink-2)' }}
        >
          AI-powered resume analyzer with deterministic scoring and ATS evaluation
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.2 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="https://github.com/knjsricharan/cvinsights"
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
            href="https://cvinsights.vercel.app"
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
            Most resumes fail ATS screening due to poor structure, missing keywords, and lack of role alignment. Candidates receive no structured, actionable feedback to improve.
          </p>
        </section>

        <section>
          <SectionLabel>Solution</SectionLabel>
          <p style={{ fontSize: '16px', lineHeight: 1.6 }}>
            CVInsights processes resumes through a four-stage pipeline &mdash; extraction, segmentation, LLM analysis, and deterministic scoring &mdash; to produce consistent, explainable evaluations.
          </p>
        </section>

        <section>
          <SectionLabel>Architecture</SectionLabel>
          <div
            className="p-4 rounded border font-mono overflow-x-auto whitespace-nowrap"
            style={{
              backgroundColor: 'rgba(211, 209, 199, 0.3)',
              borderColor: 'var(--rule)',
              fontSize: '13px',
              color: 'var(--ink)'
            }}
          >
            File Upload &rarr; Extractor &rarr; Segmenter &rarr; LLM Analysis &rarr; Deterministic Scorer &rarr; Structured JSON Output
          </div>
        </section>

        <section>
          <SectionLabel>Key Features</SectionLabel>
          <ul className="list-disc list-inside space-y-2" style={{ fontSize: '15px' }}>
            <li>Multi-format parsing (PDF, DOCX, HTML)</li>
            <li>Coordinate-based word sorting for multi-column PDFs</li>
            <li>Regex-based section segmentation</li>
            <li>LLM used only for signal extraction, not scoring</li>
            <li>Fallback and retry handling for LLM failures</li>
            <li>
              Weighted scoring rubric:
              <ul className="list-none pl-6 mt-3 space-y-2 font-mono" style={{ fontSize: '13px', color: 'var(--ink-2)' }}>
                <li className="flex justify-between max-w-[300px]">
                  <span>Experience quality</span> <span>30%</span>
                </li>
                <li className="flex justify-between max-w-[300px]">
                  <span>Skills coverage</span> <span>20%</span>
                </li>
                <li className="flex justify-between max-w-[300px]">
                  <span>Keyword density</span> <span>20%</span>
                </li>
                <li className="flex justify-between max-w-[300px]">
                  <span>Quantification</span> <span>15%</span>
                </li>
                <li className="flex justify-between max-w-[300px]">
                  <span>Formatting</span> <span>15%</span>
                </li>
              </ul>
            </li>
            <li className="mt-3">ATS compatibility flags</li>
            <li>Context-aware chat assistant grounded in resume content</li>
          </ul>
        </section>

        <section>
          <SectionLabel>Technical Design</SectionLabel>
          <p style={{ fontSize: '16px', lineHeight: 1.6 }}>
            FastAPI stateless backend. All user state persisted client-side via localStorage. OpenRouter handles multi-model routing with automatic fallback to gpt-4o-mini on errors.
          </p>
        </section>

        <section>
          <SectionLabel>Tech Stack</SectionLabel>
          <div className="overflow-x-auto">
            <table className="w-full text-left" style={{ fontSize: '15px' }}>
              <tbody>
                <tr className="border-b" style={{ borderColor: 'var(--rule)' }}>
                  <th className="py-3 font-normal" style={{ color: 'var(--ink-2)' }}>Frontend</th>
                  <td className="py-3">React (Vite), TailwindCSS, Axios, Recharts</td>
                </tr>
                <tr className="border-b" style={{ borderColor: 'var(--rule)' }}>
                  <th className="py-3 font-normal" style={{ color: 'var(--ink-2)' }}>Backend</th>
                  <td className="py-3">FastAPI, Pydantic, httpx</td>
                </tr>
                <tr className="border-b" style={{ borderColor: 'var(--rule)' }}>
                  <th className="py-3 font-normal" style={{ color: 'var(--ink-2)' }}>AI / LLM</th>
                  <td className="py-3">OpenRouter API</td>
                </tr>
                <tr className="border-b" style={{ borderColor: 'var(--rule)' }}>
                  <th className="py-3 font-normal" style={{ color: 'var(--ink-2)' }}>Parsing</th>
                  <td className="py-3">pdfplumber, python-docx, BeautifulSoup</td>
                </tr>
                <tr>
                  <th className="py-3 font-normal" style={{ color: 'var(--ink-2)' }}>Deployment</th>
                  <td className="py-3">Vercel (frontend), Render (backend)</td>
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

export default CVInsightsDetail;
