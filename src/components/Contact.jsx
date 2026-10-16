import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const email = 'sricharan812006@gmail.com';
const linkedIn = 'https://www.linkedin.com/in/sri-charan-kurada-605638297';

export default function Contact() {
  const [status, setStatus] = useState('');
  const reduceMotion = useReducedMotion();
  const reveal = reduceMotion ? {} : { initial: { opacity: 0, y: 14 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: false, amount: 0.12 } };

  const openEmailDraft = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name');
    const sender = formData.get('email');
    const message = formData.get('message');
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`From: ${name} (${sender})\n\n${message}`);
    setStatus('Your email app should open with a draft. Send the message there to complete delivery.');
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="content-section section-anchor contact-section">
      <motion.div {...reveal} transition={{ duration: 0.5 }} className="contact-copy">
        <p className="eyebrow font-mono">CONTACT</p>
        <h2 className="section-title">Let's start a conversation.</h2>
        <p className="section-intro">Open to conversations about AI/ML opportunities, software development, ServiceNow roles, and meaningful technical collaborations.</p>
        <div className="contact-links">
          <a href={`mailto:${email}`} className="contact-link-card">
            <span className="contact-link-label font-mono">EMAIL</span>
            <span>{email}</span>
          </a>
          <a href={linkedIn} target="_blank" rel="noopener noreferrer" className="contact-link-card">
            <span className="contact-link-label font-mono">LINKEDIN</span>
            <span>Sri Charan Kurada <span aria-hidden="true">↗</span></span>
          </a>
        </div>
      </motion.div>

      <motion.form {...reveal} transition={{ duration: 0.5, delay: 0.06 }} className="contact-form" onSubmit={openEmailDraft}>
        <div className="contact-form-row">
          <label>Name<input name="name" type="text" autoComplete="name" required maxLength={100} /></label>
          <label>Email<input name="email" type="email" autoComplete="email" required maxLength={254} /></label>
        </div>
        <label>Message<textarea name="message" rows="5" required maxLength={5000} /></label>
        <button className="button button-primary" type="submit">Open email draft</button>
        <p className="form-status" aria-live="polite">{status}</p>
      </motion.form>
    </section>
  );
}
