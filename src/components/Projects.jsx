import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectCard = ({ number, title, oneliner, tags, githubLink, projectLink, delay }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      viewport={{ once: false }}
      className="bg-white border p-7 flex flex-col text-left h-full"
      style={{ borderColor: 'var(--rule)', borderRadius: '0' }}
    >
      <div className="flex flex-col flex-grow gap-4">
        {/* Header section */}
        <div>
          <div 
            className="font-mono mb-2" 
            style={{ fontSize: '10px', color: 'var(--ink-3)' }}
          >
            {number}
          </div>
          <h3 
            className="mb-2"
            style={{ fontFamily: 'var(--font-heading)', fontSize: '28px', color: 'var(--ink)', lineHeight: 1.2 }}
          >
            {title}
          </h3>
          <p 
            className="truncate"
            style={{ fontSize: '14px', color: 'var(--ink-2)' }}
          >
            {oneliner}
          </p>
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag, idx) => (
            <span 
              key={idx}
              className="font-mono px-3 py-1 border"
              style={{ fontSize: '10px', borderColor: 'var(--rule)', color: 'var(--ink-2)', borderRadius: '0' }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Links */}
      <div 
        className="pt-5 mt-5 border-t flex flex-wrap gap-4"
        style={{ borderColor: 'var(--rule)' }}
      >
        <Link 
          to={projectLink || '#'}
          className="px-5 py-2.5 font-medium transition-transform hover:-translate-y-0.5"
          style={{ 
            backgroundColor: 'var(--ink)', 
            color: 'var(--bg)',
            fontSize: '13px',
            border: '1px solid var(--ink)'
          }}
        >
          View Project &rarr;
        </Link>
        <a 
          href={githubLink || '#'}
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
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 text-left">
      <div className="w-full max-w-[1100px] mx-auto px-8">
        
        {/* Section Label */}
        <div 
          className="font-mono uppercase pb-3 mb-10 border-b tracking-widest"
          style={{ 
            fontSize: '10px', 
            color: 'var(--ink-3)',
            borderColor: 'var(--rule)'
          }}
        >
          Projects
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard 
            number="01"
            title="CVInsights"
            oneliner="Resume analyzer with deterministic scoring and ATS evaluation."
            tags={["FastAPI", "Python", "OpenRouter"]}
            projectLink="/projects/cvinsights"
            githubLink="https://github.com/knjsricharan/cvinsights"
            delay={0}
          />

          <ProjectCard 
            number="02"
            title="CJ Assist"
            oneliner="Compare multiple AI models on quality, cost, and latency."
            tags={["React", "Axios", "OpenRouter"]}
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
