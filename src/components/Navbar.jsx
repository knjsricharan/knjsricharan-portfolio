import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const links = [
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'GitHub', href: 'https://github.com/knjsricharan' },
    { name: 'Contact', href: '#contact' },
  ];

  // Track active section via Intersection Observer
  useEffect(() => {
    const sections = ['projects', 'about', 'skills', 'contact'];
    const observers = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.3, rootMargin: '-100px 0px -50% 0px' }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const isActive = (href) => {
    if (href.startsWith('http')) return false;
    const id = href.replace('#', '');
    return activeSection === id;
  };

  return (
    <nav
      id="navbar"
      className="sticky top-0 w-full"
      style={{
        backgroundColor: 'var(--bg)',
        borderBottom: '1px solid var(--rule)',
        zIndex: 50
      }}
    >
      <div className="w-full max-w-[1100px] mx-auto px-8 py-6 flex items-center justify-between">
        {/* Left: Name */}
        <a
          href="#"
          className="uppercase tracking-widest font-mono"
          style={{ fontSize: '13px', color: 'var(--ink)' }}
        >
          Sri Charan Kurada
        </a>

        {/* Right: Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`nav-link font-mono ${isActive(link.href) ? 'active' : ''}`}
              style={{ fontSize: '12px', color: 'var(--ink)' }}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          style={{ color: 'var(--ink)' }}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div
          className="md:hidden border-t"
          style={{ borderColor: 'var(--rule)', backgroundColor: 'var(--bg)' }}
        >
          <div className="w-full max-w-[1100px] mx-auto px-8 py-4 flex flex-col space-y-4">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-mono nav-link"
                style={{ fontSize: '12px', color: 'var(--ink)' }}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
