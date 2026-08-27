import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { AnimatePresence, motion as Motion } from 'framer-motion';
import portfolioData from '../data/portfolio.json';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const { navigation, personal } = portfolioData;
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 bg-paper text-ink ${
        isScrolled ? 'shadow-[0_1px_0_var(--line)]' : ''
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-[5.5rem]">
          <Link to="/" className="font-display text-xl sm:text-2xl tracking-tight">
            {personal.name}
          </Link>

          <div className="hidden md:flex items-center gap-9">
            {navigation.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[13px] tracking-wide transition-colors ${
                  location.pathname === link.path
                    ? 'text-ink'
                    : 'text-muted hover:text-ink'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/resume"
              className="text-[13px] tracking-wide text-muted hover:text-ink transition-colors"
            >
              Resume
            </Link>
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              className="text-muted hover:text-ink transition-colors"
            >
              {theme === 'dark' ? <Sun size={18} strokeWidth={1.6} /> : <Moon size={18} strokeWidth={1.6} />}
            </button>
          </div>

          <div className="flex md:hidden items-center gap-4">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              className="text-muted hover:text-ink transition-colors"
            >
              {theme === 'dark' ? <Sun size={18} strokeWidth={1.6} /> : <Moon size={18} strokeWidth={1.6} />}
            </button>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-ink"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={22} strokeWidth={1.6} /> : <Menu size={22} strokeWidth={1.6} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <Motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-paper border-t border-line overflow-hidden"
          >
            <div className="px-5 py-8 space-y-5">
              {navigation.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-base ${
                    location.pathname === link.path ? 'text-ink' : 'text-muted'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/resume"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-base text-muted"
              >
                Resume
              </Link>
            </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
