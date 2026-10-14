import { motion } from 'framer-motion';
import { useDirectionalReveal } from '../hooks/useDirectionalReveal';

const ease = [0.16, 1, 0.3, 1];

const experienceData = [
  {
    company: 'EduSkills – AICTE National Internship Portal',
    role: 'Virtual Intern (Java Full Stack & Android Development)',
    period: 'Jun 2026 – Sep 2026',
    bullets: [
      'Completed two virtual internships covering Spring Boot, Hibernate (database persistence), Android UI, and WorkManager.'
    ]
  },
  {
    company: 'EdiGlobe',
    role: 'AI Intern',
    period: 'Jul 2025 – Sep 2025',
    bullets: [
      'Built a Python data preprocessing pipeline for missing-value handling, feature selection, and correlation analysis.',
      'Trained and benchmarked Linear Regression, Random Forest, and XGBoost models to compare performance.'
    ]
  }
];

const educationData = [
  {
    institution: 'Maharaj Vijayaram Gajapathi Raj College of Engineering',
    degree: 'Bachelor of Technology in Computer Science and Engineering',
    period: '2023 – 2027',
    score: 'CGPA: 8.70'
  },
  {
    institution: 'Tirumala Junior College',
    degree: 'Intermediate',
    period: '2021 – 2023',
    score: '96.2%'
  },
  {
    institution: 'Sri Chaitanya School',
    degree: 'Secondary School Certificate (SSC)',
    period: '2020 – 2021',
    score: '599/600 (99.83%)'
  }
];

const certifications = [
  'ServiceNow Certified System Administrator (CSA) & Certified Application Developer (CAD) — ServiceNow (2026)',
  'Oracle Cloud Infrastructure (OCI) AI Foundations Associate — Oracle Global Certification (2025)',
  'NDG Linux Essentials — Cisco Networking Academy (2024)',
  'Python Essentials 1 & 2 — Cisco Networking Academy (2024)'
];

const Experience = () => {
  const sectionRef = useDirectionalReveal();

  return (
    <section id="experience" className="py-16 text-left" ref={sectionRef}>
      <div className="w-full max-w-[1100px] mx-auto px-8">

        {/* ── Experience ───────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-40px' }}
          transition={{ duration: 0.7, ease }}
          className="section-reveal section-label mb-4"
        >
          Experience
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-40px' }}
          transition={{ duration: 0.7, ease, delay: 0.08 }}
          className="section-reveal mb-10 pb-6 border-b"
          style={{ borderColor: 'var(--rule)' }}
        >
          <h2
            style={{ fontFamily: 'var(--font-heading)', fontSize: '32px', color: 'var(--ink)', lineHeight: 1.2 }}
          >
            Internship Experience
          </h2>
        </motion.div>

        <div className="flex flex-col gap-8 mb-16">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-40px' }}
              transition={{ duration: 0.7, ease, delay: index * 0.06 }}
              className="section-reveal border-b pb-6"
              style={{ borderColor: 'var(--rule)' }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                <div>
                  <div style={{ fontSize: '16px', color: 'var(--ink)', fontWeight: 500 }}>
                    {exp.company}
                  </div>
                  <div className="font-mono" style={{ fontSize: '13px', color: 'var(--ink-2)' }}>
                    {exp.role}
                  </div>
                </div>
                <div className="font-mono section-label whitespace-nowrap mt-1 sm:mt-0">
                  {exp.period}
                </div>
              </div>
              <ul className="list-disc list-inside space-y-1" style={{ fontSize: '14px', color: 'var(--ink-2)', lineHeight: 1.7 }}>
                {exp.bullets.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* ── Education ───────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-40px' }}
          transition={{ duration: 0.7, ease }}
          className="section-reveal section-label mb-4"
        >
          Education
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-40px' }}
          transition={{ duration: 0.7, ease, delay: 0.08 }}
          className="section-reveal mb-10 pb-6 border-b"
          style={{ borderColor: 'var(--rule)' }}
        >
          <h2
            style={{ fontFamily: 'var(--font-heading)', fontSize: '32px', color: 'var(--ink)', lineHeight: 1.2 }}
          >
            Academic Background
          </h2>
        </motion.div>

        <div className="flex flex-col gap-8 mb-16">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-40px' }}
              transition={{ duration: 0.7, ease, delay: index * 0.06 }}
              className="section-reveal border-b pb-6"
              style={{ borderColor: 'var(--rule)' }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                <div>
                  <div style={{ fontSize: '16px', color: 'var(--ink)', fontWeight: 500 }}>
                    {edu.institution}
                  </div>
                  <div className="font-mono" style={{ fontSize: '13px', color: 'var(--ink-2)' }}>
                    {edu.degree}
                  </div>
                </div>
                <div className="flex flex-col items-start sm:items-end gap-0.5 mt-1 sm:mt-0">
                  <div className="font-mono section-label whitespace-nowrap">
                    {edu.period}
                  </div>
                  <div className="font-mono" style={{ fontSize: '12px', color: 'var(--ink)' }}>
                    {edu.score}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Certifications ───────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-40px' }}
          transition={{ duration: 0.7, ease }}
          className="section-reveal section-label mb-4"
        >
          Certifications
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-40px' }}
          transition={{ duration: 0.7, ease, delay: 0.08 }}
          className="section-reveal mb-10 pb-6 border-b"
          style={{ borderColor: 'var(--rule)' }}
        >
          <h2
            style={{ fontFamily: 'var(--font-heading)', fontSize: '32px', color: 'var(--ink)', lineHeight: 1.2 }}
          >
            Professional Certifications
          </h2>
        </motion.div>

        <div className="flex flex-col gap-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-40px' }}
              transition={{ duration: 0.7, ease, delay: index * 0.06 }}
              className="section-reveal flex items-start gap-3"
            >
              <span
                className="font-mono mt-0.5 flex-shrink-0"
                style={{ fontSize: '12px', color: 'var(--ink-3)' }}
              >
                ✦
              </span>
              <span style={{ fontSize: '14px', color: 'var(--ink-2)', lineHeight: 1.7 }}>
                {cert}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
