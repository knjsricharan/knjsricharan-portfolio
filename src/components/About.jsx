import { motion } from 'framer-motion';
import { useDirectionalReveal } from '../hooks/useDirectionalReveal';

const ease = [0.16, 1, 0.3, 1];

const HIGHLIGHTED_SKILLS = new Set(['Python', 'SQL', 'ServiceNow', 'Linux', 'Java']);

const SKILL_CATEGORIES = [
  {
    name: 'IT Operations & Service Management',
    skills: [
      'Application Support',
      'Incident Management',
      'Problem Management',
      'Change Management',
      'Service Desk',
      'ITSM',
      'SLA',
      'Ticketing',
      'Root Cause Analysis',
      'Knowledge Base Documentation',
    ],
  },
  {
    name: 'Infrastructure & Cloud',
    skills: [
      'Linux',
      'IT Infrastructure Fundamentals',
      'Linux Fundamentals',
      'Linux Command Line',
      'Cloud Fundamentals (Oracle OCI)',
      'Cloud Deployment (Vercel, Render, Streamlit)',
      'Monitoring & Alerting Basics',
    ],
  },
  {
    name: 'Databases & Programming',
    skills: [
      'Python',
      'SQL',
      'Java',
      'DBMS',
      'Firebase',
      'C++',
      'C',
    ],
  },
  {
    name: 'Tools & Platforms',
    skills: [
      'ServiceNow',
      'Git',
      'GitHub',
      'VS Code',
      'REST APIs',
      'Python Scripting',
      'Automation Basics',
      'FastAPI',
      'React.js',
      'Streamlit',
      'Pandas',
      'Google GenAI SDK',
      'Pydantic',
    ],
  },
];

const CERTIFICATIONS = [
  'ServiceNow CSA & CAD (2026)',
  'OCI AI Foundations Associate (2025)',
  'NDG Linux Essentials (2024)',
  'Python Essentials 1 & 2 (2024)',
];

const About = () => {
  const sectionRef = useDirectionalReveal();

  return (
    <section id="about" className="py-20 text-left" ref={sectionRef}>
      <div className="w-full max-w-[1100px] mx-auto px-8">

        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-40px' }}
          transition={{ duration: 0.7, ease }}
          className="section-reveal section-label mb-6"
        >
          About
        </motion.div>

        <div className="flex flex-col lg:grid lg:[grid-template-columns:1fr_240px] lg:items-start gap-8 lg:gap-12 mb-16">

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
              className="mx-auto lg:mx-0 w-[170px] h-[170px] sm:w-[190px] sm:h-[190px] lg:w-[240px] lg:h-[240px] rounded-full overflow-hidden border"
              style={{ borderColor: 'var(--rule)' }}
            >
              <img
                src="/profile.jpeg"
                alt="Sri Charan Kurada"
                className="w-full h-full"
                style={{ objectFit: 'cover', objectPosition: 'center center' }}
              />
            </div>
          </motion.div>

          {/* Bio & Education / Experience */}
          <motion.div
            className="w-full section-reveal"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '-40px' }}
            transition={{ duration: 0.7, ease, delay: 0.05 }}
          >
            <h2
              className="mb-6"
              style={{ fontFamily: 'var(--font-heading)', fontSize: '42px', color: 'var(--ink)', lineHeight: 1.15 }}
            >
              I'm Sri Charan Kurada.
            </h2>

            <div
              className="flex flex-col gap-4 mb-8"
              style={{ fontSize: '16px', color: 'var(--ink-2)', lineHeight: 1.7 }}
            >
              <p>
                Computer Science undergraduate (CGPA 8.70) and ServiceNow Certified System Administrator with a foundation in application support, incident management, IT infrastructure, SQL, Linux, and cloud deployment.
              </p>
              <p>
                Skilled in Python scripting and automation, with strong communication, problem-solving, and a customer-centric mindset.
              </p>
              <p>
                Open to shift-based support work, internships, full-time roles, and relocation.
              </p>
            </div>

            {/* Education & Experience Lines */}
            <div className="flex flex-col gap-3 pt-6 border-t" style={{ borderColor: 'var(--rule)' }}>
              <div className="text-[14px]" style={{ color: 'var(--ink-2)' }}>
                <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--ink-3)] mr-2">Education:</span>
                <span className="text-[var(--ink)] font-medium">B.Tech CSE, MVGR College, 2027</span>
                {' · '}
                <a
                  href="/resume.pdf"
                  className="font-mono text-[12px] underline underline-offset-4 text-[var(--ink-3)] hover:text-[var(--ink)]"
                  style={{ transition: 'color 200ms ease' }}
                >
                  Resume &rarr;
                </a>
              </div>
              <div className="text-[14px]" style={{ color: 'var(--ink-2)' }}>
                <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--ink-3)] mr-2">Experience:</span>
                <span className="text-[var(--ink)] font-medium">EdiGlobe, AI Intern; EduSkills, Virtual Intern</span>
                {' · '}
                <a
                  href="/resume.pdf"
                  className="font-mono text-[12px] underline underline-offset-4 text-[var(--ink-3)] hover:text-[var(--ink)]"
                  style={{ transition: 'color 200ms ease' }}
                >
                  Resume &rarr;
                </a>
              </div>
            </div>

          </motion.div>
        </div>

        {/* Certifications Row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-40px' }}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
          className="section-reveal mb-16 pt-8 border-t"
          style={{ borderColor: 'var(--rule)' }}
        >
          <div className="font-mono text-[11px] uppercase tracking-wider text-[var(--ink-3)] mb-4">
            Certifications
          </div>
          <div className="flex flex-wrap gap-2.5">
            {CERTIFICATIONS.map((cert) => (
              <span
                key={cert}
                className="font-mono text-[11px] sm:text-[12px] px-3 py-1.5 border border-[var(--rule)] text-[var(--ink)] tracking-tight cursor-default"
              >
                {cert}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Skills Subsection */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-40px' }}
          transition={{ duration: 0.7, ease, delay: 0.15 }}
          className="section-reveal pt-8 border-t"
          style={{ borderColor: 'var(--rule)' }}
        >
          <div className="font-mono text-[11px] uppercase tracking-wider text-[var(--ink-3)] mb-8">
            Skills
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {SKILL_CATEGORIES.map((cat) => (
              <div key={cat.name} className="flex flex-col gap-3">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--ink-2)] font-medium">
                  {cat.name}
                </span>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => {
                    const isHighlighted = HIGHLIGHTED_SKILLS.has(skill);
                    return (
                      <span
                        key={skill}
                        className={`font-mono text-[10px] px-2 py-1 border uppercase tracking-tighter cursor-default ${
                          isHighlighted
                            ? 'border-[var(--ink)] text-[var(--ink)] font-semibold'
                            : 'border-[var(--rule)] text-[var(--ink-3)] font-normal'
                        }`}
                      >
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
