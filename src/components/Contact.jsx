import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { ArrowRight } from 'lucide-react';
import { useDirectionalReveal } from '../hooks/useDirectionalReveal';

// TODO: Replace these placeholder values with your actual EmailJS credentials.
// Get your keys at https://www.emailjs.com/
const EMAILJS_CONFIG = {
  serviceId: 'YOUR_SERVICE_ID',
  templateId: 'YOUR_TEMPLATE_ID',
  publicKey: 'YOUR_PUBLIC_KEY',
};

const ease = [0.16, 1, 0.3, 1];

const Contact = () => {
  const formRef = useRef();
  const sectionRef = useDirectionalReveal();
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      formRef.current,
      EMAILJS_CONFIG.publicKey
    )
      .then(() => {
        setStatus('success');
        formRef.current.reset();
      }, () => {
        setStatus('error');
      });
  };

  return (
    <section id="contact" className="py-20 text-left" ref={sectionRef}>
      <div className="w-full max-w-[800px] mx-auto px-8">

        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-40px' }}
          transition={{ duration: 0.7, ease }}
          className="section-reveal section-label mb-6"
        >
          Contact
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
            style={{ fontFamily: 'var(--font-heading)', fontSize: '42px', color: 'var(--ink)', lineHeight: 1.15 }}
          >
            Let's work together.
          </h2>
          <p
            className="mt-4"
            style={{ fontSize: '16px', color: 'var(--ink-2)', lineHeight: 1.65 }}
          >
            Open to internships, full-time roles, and freelance projects. I'll respond within 24 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-40px' }}
          transition={{ duration: 0.7, ease, delay: 0.12 }}
          className="section-reveal"
        >
          <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-5">
            <div>
              <label className="section-label mb-2 block">Name</label>
              <input
                type="text"
                name="user_name"
                placeholder="Your name"
                required
                className="w-full focus:outline-none"
                style={{
                  border: '1px solid var(--rule)',
                  backgroundColor: 'var(--surface)',
                  padding: '0.9rem 1rem',
                  fontSize: '15px',
                  borderRadius: '0',
                  color: 'var(--ink)',
                  transition: 'border-color 200ms ease, background-color 200ms ease, color 200ms ease'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--ink)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--rule)'}
              />
            </div>

            <div>
              <label className="section-label mb-2 block">Email</label>
              <input
                type="email"
                name="user_email"
                placeholder="sricharan812006@gmail.com"
                required
                className="w-full focus:outline-none"
                style={{
                  border: '1px solid var(--rule)',
                  backgroundColor: 'var(--surface)',
                  padding: '0.9rem 1rem',
                  fontSize: '15px',
                  borderRadius: '0',
                  color: 'var(--ink)',
                  transition: 'border-color 200ms ease, background-color 200ms ease, color 200ms ease'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--ink)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--rule)'}
              />
            </div>

            <div>
              <label className="section-label mb-2 block">Message</label>
              <textarea
                name="message"
                placeholder="What are you working on?"
                required
                className="w-full focus:outline-none resize-y"
                style={{
                  height: '150px',
                  border: '1px solid var(--rule)',
                  backgroundColor: 'var(--surface)',
                  padding: '0.9rem 1rem',
                  fontSize: '15px',
                  borderRadius: '0',
                  color: 'var(--ink)',
                  transition: 'border-color 200ms ease, background-color 200ms ease, color 200ms ease'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--ink)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--rule)'}
              />
            </div>

            <motion.button
              type="submit"
              disabled={status === 'sending'}
              className="w-max mt-2 font-mono uppercase tracking-wider flex items-center gap-3"
              style={{
                backgroundColor: 'var(--ink)',
                color: 'var(--bg)',
                fontSize: '12px',
                letterSpacing: '0.08em',
                padding: '0.9rem 2rem',
                border: 'none',
                cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                transition: 'opacity 200ms ease, background-color 200ms ease, color 200ms ease'
              }}
              whileHover={{ x: 2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
              <ArrowRight size={14} />
            </motion.button>

            {status === 'success' && (
              <div
                className="font-mono"
                style={{ fontSize: '13px', color: 'var(--ink-3)' }}
              >
                Message sent. I'll get back to you soon.
              </div>
            )}
            {status === 'error' && (
              <div
                className="font-mono"
                style={{ fontSize: '13px', color: '#c44' }}
              >
                Failed to send message. Please ensure EmailJS keys are configured, or use the direct email below.
              </div>
            )}
          </form>

          {/* Divider */}
          <div className="my-12 border-t" style={{ borderColor: 'var(--rule)' }} />

          {/* Direct Links */}
          <div>
            <div className="section-label mb-4">Or reach me directly</div>
            <div className="flex flex-wrap gap-6">
              <a
                href="mailto:sricharan812006@gmail.com"
                className="font-mono link-underline"
                style={{
                  fontSize: '13px',
                  color: 'var(--ink)',
                  textDecoration: 'none'
                }}
              >
                Email &rarr;
              </a>
              <a
                href="https://www.linkedin.com/in/sri-charan-kurada-605638297"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono link-underline"
                style={{
                  fontSize: '13px',
                  color: 'var(--ink)',
                  textDecoration: 'none'
                }}
              >
                LinkedIn &rarr;
              </a>
              <a
                href="https://github.com/knjsricharan"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono link-underline"
                style={{
                  fontSize: '13px',
                  color: 'var(--ink)',
                  textDecoration: 'none'
                }}
              >
                GitHub &rarr;
              </a>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
