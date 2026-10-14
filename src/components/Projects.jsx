import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useDirectionalReveal } from '../hooks/useDirectionalReveal';

const ease = [0.16, 1, 0.3, 1];

const ProjectCard = ({ number, title, problem, result, tags, projectLink, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: '-40px' }}
      transition={{ duration: 0.7, ease, delay }}
      className="project-card-inner group border flex flex-col justify-between"
      style={{
        borderColor: 'var(--rule)',
        backgroundColor: 'var(--card-bg)',
        borderRadius: '0',
      }}
    >
      <div className="p-8 flex flex-col h-full">
        {/* Index */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--ink-3)]">
            Index: {number}
          </span>
          <div className="w-8 h-[1px] bg-[var(--rule)]" />
        </div>

        {/* Title */}
        <div className="mb-6">
          <Link to={projectLink}>
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '30px',
                color: 'var(--ink)',
                lineHeight: 1.15,
              }}
            >
              {title}
            </h3>
          </Link>
        </div>

        {/* Problem */}
        <div className="mb-4">
          <div className="font-mono text-[10px] uppercase tracking-wider text-[var(--ink-3)] mb-1">
            Problem
          </div>
          <p
            style={{
              fontSize: '15px',
              color: 'var(--ink-2)',
              lineHeight: 1.6,
            }}
          >
            {problem}
          </p>
        </div>

        {/* Result */}
        <div className="mb-6">
          <div className="font-mono text-[10px] uppercase tracking-wider text-[var(--ink-3)] mb-1">
            Result
          </div>
          <p
            style={{
              fontSize: '15px',
              color: 'var(--ink-2)',
              lineHeight: 1.6,
            }}
          >
            {result}
          </p>
        </div>

        {/* Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-8 mt-auto">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="font-mono text-[10px] px-2 py-1 border border-[var(--rule)] text-[var(--ink-3)] uppercase tracking-tighter cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Case Study Link */}
        <div className="pt-6 border-t border-[var(--rule)] flex items-center justify-between">
          <Link
            to={projectLink}
            className="group/btn inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-widest text-[var(--ink)] font-medium"
          >
            <span>Case study</span>
            <span className="transition-transform duration-200 group-hover/btn:translate-x-1">&rarr;</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const sectionRef = useDirectionalReveal();

  return (
    <section id="projects" className="py-24 text-left" ref={sectionRef}>
      <div className="w-full max-w-[1100px] mx-auto px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[var(--rule)]">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: '-40px' }}
              transition={{ duration: 0.7, ease }}
              className="section-reveal section-label mb-4"
            >
              Selected Work
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-40px' }}
              transition={{ duration: 0.7, ease, delay: 0.08 }}
              className="section-reveal"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '48px',
                color: 'var(--ink)',
                lineHeight: 1.1,
              }}
            >
              Projects
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, margin: '-40px' }}
            transition={{ duration: 0.7, ease, delay: 0.15 }}
            className="section-reveal mt-6 md:mt-0"
          >
            <span className="font-mono text-[12px] text-[var(--ink-3)] tracking-tighter">
              [ 03_TOTAL_PROJECTS ]
            </span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            number="001"
            title="CVInsights"
            problem="Most resumes fail automated ATS screening due to poor structural formatting, missing keywords, and lack of actionable evaluation."
            result="Cloud-deployed AI resume analyzer with REST APIs, ATS scoring, resume parsing, JSON validation, and OpenRouter routing."
            tags={['FastAPI', 'Python', 'OpenRouter', 'Pydantic']}
            projectLink="/projects/cvinsights"
            delay={0}
          />

          <ProjectCard
            number="002"
            title="CJ Assist"
            problem="Evaluating response latency, token consumption, and cost across disparate LLM providers requires switching between fragmented tools and keys."
            result="Multi-provider AI workspace for 5+ LLMs with BYOK routing and a real-time monitoring dashboard for latency, tokens, and cost."
            tags={['React', 'Axios', 'REST API', 'Recharts']}
            projectLink="/projects/cj-assist"
            delay={0.1}
          />

          <ProjectCard
            number="003"
            title="CAG Multi-Dataset Research Analyzer"
            problem="Repeatedly sending full datasets in iterative analytical queries creates redundant token transfers, high API expenses, and latency."
            result="Deployed a Streamlit app to analyze CSV, JSON, and TXT datasets with Gemini 2.5 Flash, with token-reuse tracking."
            tags={['Python', 'Streamlit', 'Pandas', 'Google GenAI SDK']}
            projectLink="/projects/cag"
            delay={0.2}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
