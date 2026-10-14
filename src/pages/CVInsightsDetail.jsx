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
          Cloud-deployed AI resume analyzer with REST APIs, ATS scoring, resume parsing, JSON validation, and OpenRouter routing.
        </motion.p>
      </header>

      <hr className="my-8" style={{ borderTop: '1px solid var(--rule)' }} />

      <div className="flex flex-col gap-12" style={{ color: 'var(--ink)' }}>

        {/* 1. Problem */}
        <section>
          <SectionLabel>Problem</SectionLabel>
          <p style={{ fontSize: '16px', lineHeight: 1.6 }}>
            Most resumes fail automated Applicant Tracking System (ATS) screening due to poor structural formatting, missing role-relevant keywords, and a lack of objective evaluation. Candidates rarely receive structured, actionable feedback to align their resumes with job requirements.
          </p>
        </section>

        {/* 2. What I built */}
        <section>
          <SectionLabel>What I built</SectionLabel>
          <p className="mb-4" style={{ fontSize: '16px', lineHeight: 1.6 }}>
            Architected and deployed a multi-stage resume evaluation backend with REST APIs:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4" style={{ fontSize: '15px' }}>
            <li>Multi-format extraction supporting PDF, DOCX, and HTML resumes using pdfplumber, python-docx, and BeautifulSoup.</li>
            <li>Coordinate-based word sorting to accurately reconstruct text flows from multi-column PDF layouts.</li>
            <li>Regex-based section segmentation to isolate Work Experience, Education, Skills, and Projects.</li>
            <li>LLM-based signal extraction via OpenRouter API with automated model fallback and retry logic.</li>
            <li>Deterministic scoring rubric calculating weighted scores across experience quality, skills coverage, keyword density, quantification, and formatting.</li>
            <li>JSON schema validation using Pydantic models for predictable, type-safe API responses.</li>
          </ul>
        </section>

        {/* 3. Stack */}
        <section>
          <SectionLabel>Stack</SectionLabel>
          <div className="overflow-x-auto">
            <table className="w-full text-left" style={{ fontSize: '15px' }}>
              <tbody>
                <tr className="border-b" style={{ borderColor: 'var(--rule)' }}>
                  <th className="py-3 font-normal" style={{ color: 'var(--ink-2)' }}>Backend</th>
                  <td className="py-3">FastAPI, Python, Pydantic, httpx</td>
                </tr>
                <tr className="border-b" style={{ borderColor: 'var(--rule)' }}>
                  <th className="py-3 font-normal" style={{ color: 'var(--ink-2)' }}>AI &amp; Routing</th>
                  <td className="py-3">OpenRouter API</td>
                </tr>
                <tr className="border-b" style={{ borderColor: 'var(--rule)' }}>
                  <th className="py-3 font-normal" style={{ color: 'var(--ink-2)' }}>Parsing</th>
                  <td className="py-3">pdfplumber, python-docx, BeautifulSoup</td>
                </tr>
                <tr className="border-b" style={{ borderColor: 'var(--rule)' }}>
                  <th className="py-3 font-normal" style={{ color: 'var(--ink-2)' }}>Frontend</th>
                  <td className="py-3">React (Vite), TailwindCSS, Axios, Recharts</td>
                </tr>
                <tr>
                  <th className="py-3 font-normal" style={{ color: 'var(--ink-2)' }}>Deployment</th>
                  <td className="py-3">Vercel (frontend), Render (backend)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 4. Outcome */}
        <section>
          <SectionLabel>Outcome</SectionLabel>
          <p style={{ fontSize: '16px', lineHeight: 1.6 }}>
            Successfully deployed a production-grade resume analysis tool providing deterministic scoring, explicit ATS compatibility flags, actionable improvement recommendations, and a context-aware chat assistant grounded in resume content.
          </p>
        </section>

        {/* 5. Links */}
        <section>
          <SectionLabel>Links</SectionLabel>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://cvinsights.vercel.app"
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
              href="https://github.com/knjsricharan/cvinsights"
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

export default CVInsightsDetail;
