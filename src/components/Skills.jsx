import { motion, useReducedMotion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolio';

export default function Skills() {
  const reduceMotion = useReducedMotion();
  const reveal = reduceMotion ? {} : { initial: { opacity: 0, y: 14 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: false, amount: 0.12 } };

  return (
    <section id="skills" className="content-section section-anchor">
      <motion.div {...reveal} transition={{ duration: 0.5 }} className="section-heading-row">
        <div>
          <p className="eyebrow font-mono">CAPABILITIES</p>
          <h2 className="section-title">Skills &amp; Technologies</h2>
        </div>
        <p className="section-intro">Tools and technologies used across enterprise workflows, software, and AI projects.</p>
      </motion.div>
      <div className="skills-grid">
        {PORTFOLIO_DATA.skills.map((group, index) => (
          <motion.article {...reveal} transition={{ duration: 0.5, delay: index * 0.04 }} key={group.category} className="skill-card">
            <h3>{group.category}</h3>
            <ul className="skill-list">
              {group.items.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
