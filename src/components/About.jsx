import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 text-left">
      <div className="w-full max-w-[1100px] mx-auto px-8">
        
        {/* Section Label */}
        <div 
          className="font-mono uppercase pb-3 mb-8 border-b tracking-widest"
          style={{ 
            fontSize: '12px', 
            color: 'var(--ink-3)',
            borderColor: 'var(--rule)'
          }}
        >
          About
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start gap-16">
          {/* Left Content */}
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0 }}
            viewport={{ once: false }}
          >
            <h2 
              className="mb-6"
              style={{ fontFamily: 'var(--font-heading)', fontSize: '42px', color: 'var(--ink)', lineHeight: 1.2 }}
            >
              I'm Sri Charan Kurada.
            </h2>
            <div 
              className="flex flex-col gap-5"
              style={{ fontSize: '18px', color: 'var(--ink-2)', lineHeight: 1.8 }}
            >
              <p>
                I'm a student developer from India building AI-powered systems with real backend depth. I don't just wrap APIs &mdash; I design modular pipelines, apply deterministic logic, and ship structured, explainable outputs.
              </p>
              <p>
                Currently undergoing ServiceNow training while actively building projects with coding agents and modern AI tooling.
              </p>
              <p>
                Open to internships, full-time roles, and freelance projects where I can contribute at the system level.
              </p>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div 
            className="w-[280px] h-[280px] shrink-0 rounded-full border overflow-hidden mx-auto md:mx-0"
            style={{ borderColor: 'var(--rule)' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: false }}
          >
            <img 
              src="/profile.png" 
              alt="Charan Kurada" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;
