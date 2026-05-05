import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="py-24">
      <div className="w-full max-w-[1100px] mx-auto px-8">
      
      {/* Text Content */}
      <motion.div 
        className="max-w-[800px] text-left"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0 }}
        viewport={{ once: false }}
      >
        <div 
          className="font-mono uppercase tracking-wider mb-4"
          style={{ fontSize: '11px', color: 'var(--ink-3)' }}
        >
          AI/ML Developer · Full-Stack · Python & FastAPI
        </div>
        
        <h1 
          className="mb-6"
          style={{ 
            fontFamily: 'var(--font-heading)', 
            fontSize: 'clamp(2.5rem, 5vw, 56px)', 
            lineHeight: 1.15,
            color: 'var(--ink)' 
          }}
        >
          I build systems that think,<br className="hidden md:block" />
          not just tools that respond.
        </h1>
        
        <p 
          className="mb-8"
          style={{ fontSize: '17px', color: 'var(--ink-2)', lineHeight: 1.6 }}
        >
          Student developer shipping production-grade AI backends — from deterministic scoring engines to multi-provider platforms. Open to internships, full-time, and freelance.
        </p>
        
        <div className="flex flex-wrap items-center gap-4">
          <a 
            href="#projects"
            className="px-6 py-3 transition-transform hover:-translate-y-0.5"
            style={{ 
              backgroundColor: 'var(--ink)', 
              color: 'var(--bg)',
              fontSize: '14px',
              border: '1px solid var(--ink)'
            }}
          >
            View Projects
          </a>
          <a 
            href="https://github.com/knjsricharan"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 transition-transform hover:-translate-y-0.5"
            style={{ 
              backgroundColor: 'transparent', 
              color: 'var(--ink)',
              fontSize: '14px',
              border: '1px solid var(--ink)'
            }}
          >
            GitHub &rarr;
          </a>
          <a 
            href="/resume.pdf"
            className="px-6 py-3 transition-transform hover:-translate-y-0.5"
            style={{ 
              backgroundColor: 'transparent', 
              color: 'var(--ink)',
              fontSize: '14px',
              border: '1px solid var(--ink)'
            }}
          >
            Resume &rarr;
          </a>
        </div>
      </motion.div>
      
      </div>
    </section>
  );
};

export default Hero;
