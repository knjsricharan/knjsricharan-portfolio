import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PORTFOLIO_DATA } from '../data/portfolio';

const detailRoutes = {
  cvinsights: '/projects/cvinsights',
  cjassist: '/projects/cj-assist',
  caganalyzer: '/projects/cag-analyzer',
};

export default function Projects() {
  const reduceMotion = useReducedMotion();
  const reveal = reduceMotion ? {} : { initial: { opacity: 0, y: 16 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: false, amount: 0.12 } };

  return (
    <section id="projects" className="content-section section-anchor">
      <motion.div {...reveal} transition={{ duration: 0.5 }} className="section-heading-row">
        <div>
          <p className="eyebrow font-mono">PROJECTS</p>
          <h2 className="section-title">Selected Works</h2>
        </div>
        <p className="section-intro">A selection of software and AI projects, with implementation notes on each project page.</p>
      </motion.div>
      <div className="projects-grid">
        {PORTFOLIO_DATA.projects.map((project, index) => (
          <motion.article {...reveal} transition={{ duration: 0.5, delay: index * 0.05 }} key={project.id} className="project-card">
            <div className="project-card-top">
              <span className="project-number font-mono">{project.number}</span>
              <span className="project-category font-mono">{project.category}</span>
            </div>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
            <ul className="project-tags" aria-label={`${project.title} technologies`}>
              {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
            </ul>
            <Link className="project-action" to={detailRoutes[project.id]}>
              View Project <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
