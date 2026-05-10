import { motion } from 'framer-motion';
import { useDirectionalReveal } from '../hooks/useDirectionalReveal';

const ease = [0.16, 1, 0.3, 1];

const Hero = () => {
  const sectionRef = useDirectionalReveal();

  return (
    <section id="hero" className="py-32" ref={sectionRef}>
      <div className="w-full max-w-[1100px] mx-auto px-8">

      {/* Label */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: '-60px' }}
        transition={{ duration: 0.7, ease }}
        className="section-reveal section-label mb-6"
      >
        AI/ML Developer · Full-Stack · Python &amp; FastAPI
      </motion.div>

      {/* Text Content */}
      <motion.div
        className="max-w-[900px] text-left"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: '-60px' }}
        transition={{ duration: 0.7, ease, delay: 0.1 }}
      >
        <h1
          className="mb-8"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.8rem, 6vw, 64px)',
            lineHeight: 1.1,
            color: 'var(--ink)'
          }}
        >
          I build systems that think,
          <br className="hidden md:block" />
          not just tools that respond.
        </h1>

        <p
          className="mb-12 max-w-[640px]"
          style={{ fontSize: '18px', color: 'var(--ink-2)', lineHeight: 1.7 }}
        >
          Student developer shipping production-grade AI backends — from deterministic scoring engines to multi-provider platforms. Open to internships, full-time, and freelance.
        </p>

        <div className="flex flex-wrap items-center gap-5">
          <motion.a
            href="#projects"
            className="inline-flex items-center justify-center px-7 h-[46px]"
            style={{
              backgroundColor: 'var(--ink)',
              color: 'var(--bg)',
              fontSize: '13px',
              letterSpacing: '0.05em',
              lineHeight: 1,
              border: '1px solid var(--ink)',
              boxSizing: 'border-box',
              transition: 'transform 200ms cubic-bezier(0.16, 1, 0.3, 1), background-color 200ms ease'
            }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.99 }}
            transition={{ duration: 0.2 }}
          >
            View Projects
          </motion.a>
          <motion.a
            href="https://github.com/knjsricharan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-7 h-[46px]"
            style={{
              backgroundColor: 'transparent',
              color: 'var(--ink)',
              fontSize: '13px',
              letterSpacing: '0.05em',
              lineHeight: 1,
              border: '1px solid var(--rule)',
              boxSizing: 'border-box',
              transition: 'transform 200ms cubic-bezier(0.16, 1, 0.3, 1), background-color 200ms ease, border-color 200ms ease'
            }}
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.99 }}
            transition={{ duration: 0.2 }}
          >
            GitHub &rarr;
          </motion.a>
          <motion.a
            href="/resume.pdf"
            className="inline-flex items-center justify-center px-7 h-[46px]"
            style={{
              backgroundColor: 'transparent',
              color: 'var(--ink)',
              fontSize: '13px',
              letterSpacing: '0.05em',
              lineHeight: 1,
              border: '1px solid var(--rule)',
              boxSizing: 'border-box',
              transition: 'transform 200ms cubic-bezier(0.16, 1, 0.3, 1), background-color 200ms ease, border-color 200ms ease'
            }}
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.99 }}
            transition={{ duration: 0.2 }}
          >
            Resume &rarr;
          </motion.a>
        </div>
      </motion.div>

      </div>
    </section>
  );
};

export default Hero;
