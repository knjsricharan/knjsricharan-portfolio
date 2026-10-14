import { createContext, useContext, useState, useEffect } from 'react';

export const THEMES = [
  {
    id: 'light',
    name: 'Light',
    color: '#F5F5F5',
    borderColor: '#D3D1C7',
    description: 'Crisp & minimal'
  },
  {
    id: 'beige',
    name: 'Beige',
    color: '#F4EFEA',
    borderColor: '#DBD4C7',
    description: 'Warm & editorial'
  },
  {
    id: 'dark-grey',
    name: 'Dark Grey',
    color: '#1E2024',
    borderColor: '#363B43',
    description: 'Slate & anthracite'
  },
  {
    id: 'dark',
    name: 'Dark',
    color: '#0C0C0D',
    borderColor: '#252629',
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
    return 'light';
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

  // Sync across browser tabs/windows
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

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
