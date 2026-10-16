import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeSwitcher from './ThemeSwitcher';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { theme, setTheme, themes } = useTheme();
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
        backgroundColor: 'var(--nav-backdrop, var(--bg))',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--rule)',
        zIndex: 50
      }}
    >
      <div className="w-full max-w-[1100px] mx-auto px-8 py-5 flex items-center justify-between">
        {/* Left: Name */}
        <a
          href="#"
          className="uppercase tracking-widest font-mono"
          style={{ fontSize: '13px', color: 'var(--ink)' }}
        >
          Sri Charan Kurada
        </a>

        {/* Right: Desktop Links & Theme */}
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
          <div className="w-[1px] h-4" style={{ backgroundColor: 'var(--rule)' }} />
          <ThemeSwitcher />
        </div>

        {/* Mobile Header Controls */}
        <div className="flex md:hidden items-center space-x-2">
          <ThemeSwitcher />
          <button
            className="p-2 -mr-2 flex items-center justify-center focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            style={{ color: 'var(--ink)' }}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
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
                style={{ fontSize: '13px', color: 'var(--ink)' }}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}

            {/* Mobile Theme Selection Row */}
            <div className="pt-4 mt-2 border-t" style={{ borderColor: 'var(--rule)' }}>
              <div
                className="font-mono uppercase tracking-widest mb-3"
                style={{ fontSize: '10px', color: 'var(--ink-3)' }}
              >
                Select Theme
              </div>
              <div className="grid grid-cols-2 gap-2">
                {themes.map((t) => {
                  const isSelected = theme === t.id;
                  return (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setTheme(t.id)}
                      className="flex items-center gap-2.5 px-3 py-2 text-left border transition-colors"
                      style={{
                        borderColor: isSelected ? 'var(--ink)' : 'var(--rule)',
                        backgroundColor: isSelected ? 'var(--surface-hover)' : 'transparent',
                      }}
                    >
                      <span
                        className="inline-block rounded-full flex-shrink-0"
                        style={{
                          width: '12px',
                          height: '12px',
                          backgroundColor: t.color,
                          border: `1.5px solid ${t.borderColor}`,
                        }}
                      />
                      <span
                        className="font-mono text-[11px] tracking-wide"
                        style={{
                          color: 'var(--ink)',
                          fontWeight: isSelected ? 600 : 400,
                        }}
                      >
                        {t.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
