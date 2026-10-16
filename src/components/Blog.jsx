import { motion } from 'framer-motion';

const blogPosts = [
  {
    tag: "AI · Backend",
    title: "How I built a deterministic scoring engine for resumes",
    excerpt: "Why I chose rule-based scoring over LLM-generated scores — and how it made evaluation reproducible and auditable."
  },
  {
    tag: "AI · Systems",
    title: "Using LLMs for extraction, not decision-making",
    excerpt: "The architectural decision that changed how I think about AI in production systems."
  },
  {
    tag: "Workflow · Tools",
    title: "Building with coding agents — my workflow and lessons",
    excerpt: "How I used AI coding agents to build production-grade projects and what I learned about prompting for code."
  }
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 text-left">
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
          Writing
        </div>

        <p
          className="mb-10"
          style={{ fontSize: '16px', color: 'var(--ink-2)' }}
        >
          Thoughts on AI systems, backend architecture, and building with coding agents.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              className="border p-7 flex flex-col justify-between text-left h-full"
              style={{ borderColor: 'var(--rule)', backgroundColor: 'var(--card-bg)', borderRadius: '0' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              viewport={{ once: false }}
            >
              <div className="flex flex-col">
                <div
                  className="font-mono uppercase mb-3"
                  style={{ fontSize: '10px', color: 'var(--ink-3)' }}
                >
                  {post.tag}
                </div>
                <h3
                  className="mb-3"
                  style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', color: 'var(--ink)', lineHeight: 1.3 }}
                >
                  {post.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--ink-2)', lineHeight: 1.6 }}>
                  {post.excerpt}
                </p>
              </div>

              <div
                className="pt-5 mt-5 border-t"
                style={{ borderColor: 'var(--rule)' }}
              >
                <div
                  className="font-mono"
                  style={{ fontSize: '11px', color: 'var(--ink-3)' }}
                >
                  Coming Soon
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-8 text-center font-mono"
          style={{ fontSize: '12px', color: 'var(--ink-3)' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: false }}
        >
          Blog coming soon on medium.com
        </motion.div>

      </div>
    </section>
  );
};

export default Blog;
