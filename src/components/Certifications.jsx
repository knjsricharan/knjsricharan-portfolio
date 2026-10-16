import { motion, useReducedMotion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolio';

export default function Certifications() {
  const reduceMotion = useReducedMotion();
  const reveal = reduceMotion ? {} : { initial: { opacity: 0, y: 14 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: false, amount: 0.12 } };

  return (
    <section id="certifications" className="content-section section-anchor">
      <motion.div {...reveal} transition={{ duration: 0.5 }} className="section-heading-row">
        <div>
          <p className="eyebrow font-mono">CREDENTIALS</p>
          <h2 className="section-title">Certifications</h2>
        </div>
      </motion.div>
      <div className="certification-grid">
        {PORTFOLIO_DATA.certifications.map((cert, index) => (
          <motion.article {...reveal} transition={{ duration: 0.5, delay: index * 0.04 }} key={cert.name} className={`certification-card ${cert.highlight ? 'is-highlighted' : ''}`}>
            <span className="certification-issuer font-mono">{cert.issuer}</span>
            <h3>{cert.name}</h3>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
