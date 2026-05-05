import { motion } from 'framer-motion';

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
  return (
    <section id="skills" className="py-20 text-left">
      <div className="w-full max-w-[1100px] mx-auto px-8">
        
        {/* Section Label */}
        <div 
          className="font-mono uppercase pb-3 mb-10 border-b tracking-widest"
          style={{ 
            fontSize: '12px', 
            color: 'var(--ink-3)',
            borderColor: 'var(--rule)'
          }}
        >
          Stack
        </div>

        <div className="flex flex-col gap-8 max-w-[720px]">
          {skillsData.map((group, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              viewport={{ once: false }}
            >
              <div 
                className="font-mono uppercase mb-3 tracking-widest"
                style={{ fontSize: '11px', color: 'var(--ink-3)' }}
              >
                {group.category}
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, idx) => (
                  <span 
                    key={idx}
                    className="inline-flex items-center font-mono"
                    style={{ 
                      fontSize: '12px', 
                      color: 'var(--ink)', 
                      backgroundColor: 'transparent',
                      border: '1px solid var(--rule)',
                      padding: '5px 12px',
                      borderRadius: '0'
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
