import { motion } from 'framer-motion';
import { useDirectionalReveal } from '../hooks/useDirectionalReveal';

const ease = [0.16, 1, 0.3, 1];

const skillsData = [
  {
    category: "Languages",
    skills: ["Python", "JavaScript (ES6+)", "HTML5", "CSS3"]
  },
  {
    category: "Frontend",
    skills: ["React", "Vite", "Tailwind CSS", "Axios", "Recharts"]
  },
  {
    category: "Backend",
    skills: ["FastAPI", "Pydantic", "REST API", "httpx"]
  },
  {
    category: "AI / NLP",
    skills: ["LLM Integration", "Prompt Engineering", "Structured Output", "Deterministic Scoring", "Context-Aware Chat"]
  },
  {
    category: "Data Processing",
    skills: ["pdfplumber", "python-docx", "BeautifulSoup", "PDF Parsing", "DOCX Parsing", "Regex Segmentation"]
  },
  {
    category: "System Design",
    skills: ["Modular Pipelines", "Stateless Backend", "API Abstraction", "Client-Side Persistence"]
  },
  {
    category: "Deployment & Tools",
    skills: ["Git", "GitHub", "Vercel", "Render", "VS Code", "Node.js"]
  },
  {
    category: "Additional",
    skills: ["Multi-Provider APIs", "Parallel Requests", "Cost & Latency Tracking", "Fallback Handling"]
  }
];

const Skills = () => {
  const sectionRef = useDirectionalReveal();

  return (
    <section id="skills" className="py-20 text-left" ref={sectionRef}>
      <div className="w-full max-w-[1100px] mx-auto px-8">

        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-40px' }}
          transition={{ duration: 0.7, ease }}
          className="section-reveal section-label mb-6"
        >
          Stack
        </motion.div>

        {/* Section Header */}
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
            Technologies &amp; Tools
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10 max-w-[900px]">
          {skillsData.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-40px' }}
              transition={{ duration: 0.7, ease, delay: index * 0.06 }}
              className="section-reveal"
            >
              <div className="section-label mb-4">{group.category}</div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: '12px',
                      color: 'var(--ink)',
                      border: '1px solid var(--rule)',
                      padding: '6px 12px',
                      letterSpacing: '0.02em'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
