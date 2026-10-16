import { motion, useReducedMotion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolio';

export default function About() {
  const reduceMotion = useReducedMotion();
  const reveal = reduceMotion ? {} : { initial: { opacity: 0, y: 16 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: false, amount: 0.15 } };

  return (
    <section id="about" className="content-section section-anchor">
      <div className="about-grid">
        <motion.figure {...reveal} transition={{ duration: 0.55 }} className="portrait-frame">
          <img src="/profile.jpeg" alt="Portrait of Sri Charan Kurada" className="portrait-image" />
        </motion.figure>
        <motion.div {...reveal} transition={{ duration: 0.55, delay: 0.05 }}>
          <p className="eyebrow font-mono">ABOUT</p>
          <h2 className="section-title about-title">
            A Computer Science student driven by <span className="text-blue-italic keep-together">problem-solving.</span>
          </h2>
          <div className="prose-copy">
            {PORTFOLIO_DATA.about.content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <p className="about-education">
            <span className="meta-label font-mono">DEGREE</span>
            <span>{PORTFOLIO_DATA.profile.degree} · {PORTFOLIO_DATA.profile.college}</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
