import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="theme-switcher p-2 rounded-full border border-[var(--rule)] bg-[var(--surface)] text-[var(--ink)] hover:border-blue-500 transition-all duration-300"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
      aria-pressed={theme === 'dark'}
    >
      {theme === 'dark' ? (
        <Sun size={18} className="text-yellow-400" />
      ) : (
        <Moon size={18} className="text-blue-600" />
      )}
    </button>
  );
};

export default ThemeSwitcher;
