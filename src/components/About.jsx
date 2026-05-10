import { motion } from 'framer-motion';
import { useDirectionalReveal } from '../hooks/useDirectionalReveal';

const ease = [0.16, 1, 0.3, 1];

const About = () => {
  const sectionRef = useDirectionalReveal();

  return (
    <section id="about" className="py-16 text-left" ref={sectionRef}>
      <div className="w-full max-w-[1100px] mx-auto px-8">

        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-40px' }}
          transition={{ duration: 0.7, ease }}
          className="section-reveal section-label mb-4"
        >
          About
        </motion.div>

        <div className="flex flex-col lg:grid lg:[grid-template-columns:1fr_240px] lg:items-start gap-8 lg:gap-12">

          {/* Profile Image */}
          <motion.div
            className="order-first lg:order-last lg:self-start section-reveal"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '-40px' }}
            transition={{ duration: 0.7, ease, delay: 0.12 }}
            style={{ flexShrink: 0 }}
          >
            <div
              className="mx-auto lg:mx-0 w-[170px] h-[170px] sm:w-[190px] sm:h-[190px] lg:w-[240px] lg:h-[240px] rounded-full overflow-hidden"
            >
              <img
                src="/profile.png"
                alt="Sri Charan Kurada"
                className="w-full h-full"
                style={{ objectFit: 'cover', objectPosition: 'center center' }}
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="w-full section-reveal"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '-40px' }}
            transition={{ duration: 0.7, ease, delay: 0.05 }}
          >
            <h2
              className="mb-5"
              style={{ fontFamily: 'var(--font-heading)', fontSize: '42px', color: 'var(--ink)', lineHeight: 1.15 }}
            >
              I'm Sri Charan Kurada.
            </h2>

            <div
              className="flex flex-col gap-5"
              style={{ fontSize: '16px', color: 'var(--ink-2)', lineHeight: 1.7 }}
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

            {/* Quick Stats */}
            <motion.div
              className="flex gap-12 mt-8 pt-6 border-t section-reveal"
              style={{ borderColor: 'var(--rule)' }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-40px' }}
              transition={{ duration: 0.7, ease, delay: 0.18 }}
            >
              <div>
                <div className="font-mono section-label mb-1.5">Focus</div>
                <div style={{ fontSize: '14px', color: 'var(--ink)', fontWeight: 500 }}>AI Systems</div>
              </div>
              <div>
                <div className="font-mono section-label mb-1.5">Stack</div>
                <div style={{ fontSize: '14px', color: 'var(--ink)', fontWeight: 500 }}>Python, FastAPI</div>
              </div>
              <div>
                <div className="font-mono section-label mb-1.5">Location</div>
                <div style={{ fontSize: '14px', color: 'var(--ink)', fontWeight: 500 }}>India</div>
              </div>
            </motion.div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;
