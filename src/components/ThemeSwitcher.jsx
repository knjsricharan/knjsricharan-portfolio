import { useState, useRef, useEffect } from 'react';
import { Palette, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const ThemeSwitcher = ({ className = '' }) => {
  const { theme, setTheme, themes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div ref={containerRef} className={`relative inline-block ${className}`}>
      {/* Top Level Icon Switch Key */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Change theme"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        className="p-2 transition-transform duration-150 active:scale-95 flex items-center justify-center focus:outline-none focus-visible:ring-1"
        style={{
          color: 'var(--ink)',
          backgroundColor: isOpen ? 'var(--surface-hover)' : 'transparent',
          border: '1px solid var(--rule)',
        }}
        title="Change theme"
      >
        <Palette size={16} />
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
            role="listbox"
            aria-label="Themes"
            className="absolute right-0 mt-2 w-44 py-1.5 z-[100]"
            style={{
              backgroundColor: 'var(--surface)',
              border: '1px solid var(--rule)',
              boxShadow: 'var(--dropdown-shadow)',
            }}
          >
            {themes.map((t) => {
              const isSelected = theme === t.id;
              return (
                <button
                  key={t.id}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => {
                    setTheme(t.id);
                    setIsOpen(false);
                  }}
                  className="w-full flex items-center justify-between px-3.5 py-2 text-left transition-colors duration-150 cursor-pointer"
                  style={{
                    backgroundColor: isSelected ? 'var(--surface-hover)' : 'transparent',
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) e.currentTarget.style.backgroundColor = 'var(--surface-hover)';
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  {/* Left: Circle swatch + Name */}
                  <div className="flex items-center gap-2.5">
                    <span
                      className="inline-block rounded-full flex-shrink-0"
                      style={{
                        width: '13px',
                        height: '13px',
                        backgroundColor: t.color,
                        border: `1.5px solid ${t.borderColor}`,
                        boxShadow: '0 0 2px rgba(0,0,0,0.15)',
                      }}
                      aria-hidden="true"
                    />
                    <span
                      className="font-mono text-[12px] tracking-wide"
                      style={{
                        color: 'var(--ink)',
                        fontWeight: isSelected ? 600 : 400,
                      }}
                    >
                      {t.name}
                    </span>
                  </div>

                  {/* Right: Selected check indicator */}
                  {isSelected && (
                    <Check
                      size={13}
                      style={{ color: 'var(--ink)' }}
                      strokeWidth={2.5}
                      aria-hidden="true"
                    />
                  )}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeSwitcher;
