import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useDirectionalReveal } from '../hooks/useDirectionalReveal';

const ease = [0.16, 1, 0.3, 1];

const ProjectCard = ({ number, title, descriptor, oneliner, tags, githubLink, liveDemoLink, projectLink, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: '-40px' }}
      transition={{ duration: 0.7, ease, delay }}
      className="project-card-inner group bg-white border flex flex-col relative overflow-hidden"
      style={{
        borderColor: 'var(--rule)',
        borderRadius: '0',
      }}
    >
      <div className="p-8 flex flex-col h-full">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--ink-3)]">
              Index: {number}
            </span>
            <div className="w-8 h-[1px] bg-[var(--rule)]" />
          </div>
          <div className="flex gap-2">
            {liveDemoLink && (
              <a
                href={liveDemoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-40 hover:opacity-100"
                style={{ transition: 'opacity 200ms ease' }}
                title="Live Demo"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
              </a>
            )}
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-40 hover:opacity-100"
                style={{ transition: 'opacity 200ms ease' }}
                title="GitHub Repository"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
              </a>
            )}
          </div>
        </div>

        <div className="mb-6">
          <Link to={projectLink || '#'}>
            <h3
              className="mb-2"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '32px',
                color: 'var(--ink)',
                lineHeight: 1.1,
                transition: 'color 200ms ease'
              }}
            >
              {title}
            </h3>
          </Link>
          <div className="font-mono text-[11px] text-[var(--ink-3)] tracking-wider uppercase">
            {descriptor}
          </div>
        </div>

        <p
          className="mb-8 flex-1 max-w-[90%]"
          style={{
            fontSize: '15px',
            color: 'var(--ink-2)',
            lineHeight: 1.7,
            letterSpacing: '-0.01em'
          }}
        >
          {oneliner}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="font-mono text-[10px] px-2 py-1 border border-[var(--rule)] text-[var(--ink-3)] uppercase tracking-tighter cursor-default"
              style={{
                transition: 'border-color 200ms ease, color 200ms ease'
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="pt-6 border-t border-[var(--rule)] flex items-center justify-between">
          <Link
            to={projectLink || '#'}
            className="group/btn inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-widest text-[var(--ink)] font-medium"
          >
            <span>View Analysis</span>
            <div className="relative w-4 h-4 overflow-hidden">
              <svg
                className="absolute transition-transform duration-300 group-hover/btn:translate-x-full"
                width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
              <svg
                className="absolute -translate-x-full transition-transform duration-300 group-hover/btn:translate-x-0"
                width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
          </Link>

          <div className="flex gap-4">
            {liveDemoLink && (
              <a
                href={liveDemoLink}
                className="font-mono text-[10px] text-[var(--ink-3)] hover:text-[var(--ink)] uppercase tracking-widest underline-offset-4 hover:underline"
                style={{ transition: 'color 200ms ease' }}
              >
                Live Demo
              </a>
            )}
            {githubLink && (
              <a
                href={githubLink}
                className="font-mono text-[10px] text-[var(--ink-3)] hover:text-[var(--ink)] uppercase tracking-widest underline-offset-4 hover:underline"
                style={{ transition: 'color 200ms ease' }}
              >
                GitHub
              </a>
            )}
          </div>
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
              Selected Artifacts
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
                lineHeight: 1.1
              }}
            >
              Project Documentation
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
              [ 02_TOTAL_RECORDS ]
            </span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          <ProjectCard
            number="001"
            title="CVInsights"
            descriptor="Intelligent Document Analysis"
            oneliner="A specialized ATS evaluation engine built to parse complex resume structures and provide deterministic scoring based on multi-dimensional job alignment."
            tags={["FastAPI", "LLM Pipelines", "Pydantic", "OCR"]}
            liveDemoLink="https://cvinsights.vercel.app"
            projectLink="/projects/cvinsights"
            githubLink="https://github.com/knjsricharan/cvinsights"
            delay={0}
          />

          <ProjectCard
            number="002"
            title="CJ Assist"
            descriptor="Model Performance Benchmarking"
            oneliner="Technical dashboard for real-time comparison of LLM providers across latency, token efficiency, and output quality metrics using structured datasets."
            tags={["React", "Real-time Metrics", "REST API", "Tailwind"]}
            liveDemoLink="https://cj-assist.vercel.app"
            projectLink="/projects/cj-assist"
            githubLink="https://github.com/knjsricharan/cj-assist"
            delay={0.1}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
