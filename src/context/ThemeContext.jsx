import { createContext, useContext, useState, useEffect } from 'react';

// Context modules intentionally export their hook and metadata alongside the provider.
// eslint-disable-next-line react-refresh/only-export-components
export const THEMES = [
  {
    id: 'light',
    name: 'Light',
    color: '#ffffff',
    borderColor: '#e5e5e5',
    description: 'Crisp & minimal'
  },
  {
    id: 'dark',
    name: 'Dark',
    color: '#050505',
    borderColor: '#262626',
    description: 'Deep obsidian'
  }
];

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [theme, setThemeState] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio-theme');
      if (saved && THEMES.some(t => t.id === saved)) {
        return saved;
      }
    }
    return 'dark';
  });

  const setTheme = (newTheme) => {
    setThemeState(newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('portfolio-theme', newTheme);
      document.documentElement.setAttribute('data-theme', newTheme);
    }
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleStorage = (e) => {
      if (e.key === 'portfolio-theme' && e.newValue) {
        if (THEMES.some(t => t.id === e.newValue)) {
          setThemeState(e.newValue);
          document.documentElement.setAttribute('data-theme', e.newValue);
        }
      }
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes: THEMES }}>
      {children}
    </ThemeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
