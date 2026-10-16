import { motion, useReducedMotion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolio';

export default function Experience() {
  const reduceMotion = useReducedMotion();
  const reveal = reduceMotion ? {} : { initial: { opacity: 0, y: 14 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: false, amount: 0.12 } };

  return (
    <section id="experience" className="content-section section-anchor">
      <motion.div {...reveal} transition={{ duration: 0.5 }} className="section-heading-row">
        <div>
          <p className="eyebrow font-mono">CAREER</p>
          <h2 className="section-title">Experience</h2>
        </div>
      </motion.div>
      <div className="experience-list">
        {PORTFOLIO_DATA.experience.map((entry, index) => (
          <motion.article {...reveal} transition={{ duration: 0.5, delay: index * 0.06 }} key={entry.company} className="experience-entry">
            <div className="experience-date font-mono">{entry.period}</div>
            <div className="experience-copy">
              <h3>{entry.role}</h3>
              <p className="experience-company">{entry.company}</p>
              {entry.description && <p>{entry.description}</p>}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
