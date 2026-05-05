import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState(null); // 'sending', 'success', 'error'

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    // Make sure the user inputs these keys before deploying
    // See https://www.emailjs.com/docs/examples/reactjs/
    emailjs.sendForm(
      'YOUR_SERVICE_ID', 
      'YOUR_TEMPLATE_ID', 
      formRef.current, 
      'YOUR_PUBLIC_KEY'
    )
    .then((result) => {
        setStatus('success');
        formRef.current.reset();
    }, (error) => {
        setStatus('error');
    });
  };

  return (
    <section id="contact" className="py-20 text-left">
      <div className="w-full max-w-[720px] mx-auto px-8">
        
        {/* Section Label */}
        <div 
          className="font-mono uppercase pb-3 mb-10 border-b tracking-widest"
          style={{ 
            fontSize: '12px', 
            color: 'var(--ink-3)',
            borderColor: 'var(--rule)'
          }}
        >
          Contact
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0 }}
          viewport={{ once: false }}
        >
          <h2 
            className="mb-4"
            style={{ fontFamily: 'var(--font-heading)', fontSize: '38px', color: 'var(--ink)', lineHeight: 1.2 }}
          >
            Let's work together.
          </h2>
          <p 
            className="mb-10"
            style={{ fontSize: '17px', color: 'var(--ink-2)', lineHeight: 1.6 }}
          >
            Open to internships, full-time roles, and freelance projects. I'll respond within 24 hours.
          </p>

          <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-4">
            <input 
              type="text" 
              name="user_name"
              placeholder="Your name" 
              required
              className="w-full bg-white focus:outline-none"
              style={{ 
                border: '1px solid var(--rule)', 
                padding: '0.85rem 1rem', 
                fontSize: '16px',
                borderRadius: '0',
                color: 'var(--ink)'
              }}
            />
            <input 
              type="email" 
              name="user_email"
              placeholder="sricharan812006@gmail.com" 
              required
              className="w-full bg-white focus:outline-none"
              style={{ 
                border: '1px solid var(--rule)', 
                padding: '0.85rem 1rem', 
                fontSize: '16px',
                borderRadius: '0',
                color: 'var(--ink)'
              }}
            />
            <textarea 
              name="message"
              placeholder="What are you working on?" 
              required
              className="w-full bg-white focus:outline-none resize-y"
              style={{ 
                height: '140px',
                border: '1px solid var(--rule)', 
                padding: '0.85rem 1rem', 
                fontSize: '16px',
                borderRadius: '0',
                color: 'var(--ink)'
              }}
            />
            <button 
              type="submit"
              disabled={status === 'sending'}
              className="w-full mt-2 font-mono uppercase tracking-wider transition-opacity hover:opacity-90 disabled:opacity-50"
              style={{ 
                backgroundColor: 'var(--ink)', 
                color: '#FFFFFF',
                fontSize: '14px',
                padding: '0.85rem 2rem',
                border: 'none',
                borderRadius: '0',
                cursor: status === 'sending' ? 'not-allowed' : 'pointer'
              }}
            >
              {status === 'sending' ? 'Sending...' : 'Send Message \u2192'}
            </button>
            
            {status === 'success' && (
              <div 
                className="font-mono mt-2"
                style={{ fontSize: '13px', color: 'var(--ink-3)' }}
              >
                Message sent. I'll get back to you soon.
              </div>
            )}
            {status === 'error' && (
              <div 
                className="font-mono mt-2"
                style={{ fontSize: '13px', color: 'red' }}
              >
                Failed to send message. Please ensure EmailJS keys are configured, or use the direct email below.
              </div>
            )}
          </form>

          {/* Divider */}
          <hr className="my-10" style={{ borderTop: '1px solid var(--rule)' }} />

          {/* Direct Links */}
          <div>
            <div 
              className="font-mono uppercase mb-4 tracking-widest"
              style={{ fontSize: '11px', color: 'var(--ink-3)' }}
            >
              Or reach me directly
            </div>
            <div className="flex flex-wrap gap-6">
              <a 
                href="mailto:sricharan812006@gmail.com" 
                className="font-mono border-b border-[var(--rule)] hover:border-[var(--ink)] transition-colors pb-[2px]"
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
                className="font-mono border-b border-[var(--rule)] hover:border-[var(--ink)] transition-colors pb-[2px]"
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
                className="font-mono border-b border-[var(--rule)] hover:border-[var(--ink)] transition-colors pb-[2px]"
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
