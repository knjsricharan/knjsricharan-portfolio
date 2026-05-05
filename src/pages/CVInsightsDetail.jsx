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

const CVInsightsDetail = () => {
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
          01 &mdash; AI / ML &middot; Backend
        </div>
        <h1 
          className="mb-4"
          style={{ fontFamily: 'var(--font-heading)', fontSize: '48px', color: 'var(--ink)', lineHeight: 1.1 }}
        >
          CVInsights
        </h1>
        <p 
          className="italic mb-8"
          style={{ fontSize: '18px', color: 'var(--ink-2)' }}
        >
          AI-powered resume analyzer with deterministic scoring and ATS evaluation
        </p>

        {/* Links */}
        <div className="flex flex-wrap gap-4">
          <a 
            href="https://github.com/knjsricharan/cvinsights" 
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
            Most resumes fail ATS screening due to poor structure, missing keywords, and lack of role alignment. Candidates receive no structured, actionable feedback to improve.
          </p>
        </section>

        {/* Solution */}
        <section>
          <SectionLabel>Solution</SectionLabel>
          <p style={{ fontSize: '16px', lineHeight: 1.6 }}>
            CVInsights processes resumes through a four-stage pipeline &mdash; extraction, segmentation, LLM analysis, and deterministic scoring &mdash; to produce consistent, explainable evaluations.
          </p>
        </section>

        {/* Architecture */}
        <section>
          <SectionLabel>Architecture</SectionLabel>
          <div 
            className="p-4 rounded border font-mono overflow-x-auto whitespace-nowrap"
            style={{ 
              backgroundColor: 'rgba(211, 209, 199, 0.3)', // light var(--rule) 
              borderColor: 'var(--rule)',
              fontSize: '13px',
              color: 'var(--ink)'
            }}
          >
            File Upload &rarr; Extractor &rarr; Segmenter &rarr; LLM Analysis &rarr; Deterministic Scorer &rarr; Structured JSON Output
          </div>
        </section>

        {/* Key Features */}
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

        {/* Technical Design */}
        <section>
          <SectionLabel>Technical Design</SectionLabel>
          <p style={{ fontSize: '16px', lineHeight: 1.6 }}>
            FastAPI stateless backend. All user state persisted client-side via localStorage. OpenRouter handles multi-model routing with automatic fallback to gpt-4o-mini on errors.
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

export default CVInsightsDetail;
