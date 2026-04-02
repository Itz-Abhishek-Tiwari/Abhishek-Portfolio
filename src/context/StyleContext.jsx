import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';

const StyleContext = createContext(null);

// Each style has its own independent dark/light preference
const DEFAULT_PREFERENCES = {
  terminal: 'dark',
  cyberpunk: 'dark',
  glass: 'light',
};

export function StyleProvider({ children }) {
  const [designStyle, setDesignStyle] = useState(() => {
    return localStorage.getItem('design-style') || 'terminal';
  });

  const [themePerStyle, setThemePerStyle] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('theme-per-style')) || DEFAULT_PREFERENCES;
    } catch {
      return DEFAULT_PREFERENCES;
    }
  });

  const currentTheme = themePerStyle[designStyle] || 'dark';

  const toggleTheme = () => {
    setThemePerStyle(prev => {
      const next = { ...prev, [designStyle]: prev[designStyle] === 'dark' ? 'light' : 'dark' };
      localStorage.setItem('theme-per-style', JSON.stringify(next));
      return next;
    });
  };

  const setStyle = (style) => {
    setDesignStyle(style);
    localStorage.setItem('design-style', style);
  };

  // Apply classes to the root <html> element so that everything inherits them
  useEffect(() => {
    const root = document.documentElement;

    // Remove previous style-variant-* classes
    root.classList.remove('style-variant-terminal', 'style-variant-cyberpunk', 'style-variant-glass');
    root.classList.add(`style-variant-${designStyle}`);

    // Apply data-theme for dark/light mode
    root.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
  }, [designStyle, currentTheme]);

  return (
    <StyleContext.Provider value={{ designStyle, setStyle, currentTheme, toggleTheme }}>
      {children}
    </StyleContext.Provider>
  );
}

StyleProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export function useStyle() {
  const ctx = useContext(StyleContext);
  if (!ctx) throw new Error('useStyle must be used inside StyleProvider');
  return ctx;
}

export default StyleContext;
