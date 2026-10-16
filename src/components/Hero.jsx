import { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolio';

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const intro = reduceMotion ? {} : { initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 } };

  const phrases = [
    "Building Practical Software Solutions",
    "Developing Enterprise Applications",
    "Exploring AI/ML and Software Engineering"
  ];

  const [index, setIndex] = useState(0);
  const [subtext, setSubtext] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (reduceMotion) {
      setSubtext(phrases[0]);
      return;
    }

    const currentPhrase = phrases[index];

    const timeout = setTimeout(() => {
      if (!isDeleting && subtext === currentPhrase) {
        // Pause at the end of the phrase
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && subtext === '') {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % phrases.length);
      } else {
        const nextChar = isDeleting
          ? subtext.slice(0, -1)
          : currentPhrase.slice(0, subtext.length + 1);
        setSubtext(nextChar);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [subtext, isDeleting, index, reduceMotion]);

  return (
    <section id="hero" className="hero-section section-anchor">
      <div className="hero-content">
        <motion.p {...intro} transition={{ duration: 0.65 }} className="eyebrow font-mono">
          COMPUTER SCIENCE · SERVICENOW
        </motion.p>
        <motion.h1 {...intro} transition={{ duration: 0.7, delay: 0.08 }}>
          Engineering <span className="text-blue-italic">Intelligent</span> Enterprise Systems.
        </motion.h1>
        <motion.p {...intro} transition={{ duration: 0.7, delay: 0.16 }} className="hero-description">
          {PORTFOLIO_DATA.profile.description}
        </motion.p>

        <motion.div
          {...intro}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="typewriter-container font-mono text-lg md:text-xl h-auto flex items-center justify-center pt-2 pb-8"
        >
          <span className="typewriter-text">{subtext}</span>
          <span className="typewriter-cursor">|</span>
        </motion.div>

        <motion.div {...intro} transition={{ duration: 0.7, delay: 0.24 }} className="hero-actions">
          <a className="button button-primary" href="#projects">Explore Projects</a>
          <a className="button button-secondary" href="https://github.com/knjsricharan" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
        </motion.div>
      </div>

      <style jsx>{`
        .typewriter-container {
          color: var(--accent-blue);
        }
        .typewriter-cursor {
          color: var(--accent-blue);
          animation: blink 1s step-end infinite;
          margin-left: 3px;
        }
        @keyframes blink {
          from, to { color: transparent }
          50% { color: var(--accent-blue) }
        }
      `}</style>
    </section>
  );
}
