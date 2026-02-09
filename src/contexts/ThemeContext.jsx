import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const themes = {
  dark: {
    name: 'Dark (Amber)',
    bg: '#0a0e27',
    text: '#e4e4e7',
    accent: '#f59e0b',
    secondary: '#8b5cf6',
    success: '#10b981',
    error: '#ef4444',
    glow: false
  },
  retro: {
    name: 'Retro (Green)',
    bg: '#000000',
    text: '#33ff33',
    accent: '#33ff33',
    secondary: '#00ff00',
    success: '#33ff33',
    error: '#ff3333',
    glow: true
  },
  matrix: {
    name: 'Matrix',
    bg: '#0d0d0d',
    text: '#00ff41',
    accent: '#008f11',
    secondary: '#003b00',
    success: '#00ff41',
    error: '#ff0000',
    glow: true
  },
  cyberpunk: {
    name: 'Cyberpunk',
    bg: '#0a0a1f',
    text: '#00f2ff',
    accent: '#ff00ff',
    secondary: '#ff00aa',
    success: '#00ff88',
    error: '#ff0055',
    glow: true
  }
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolioTheme');
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    const theme = themes[currentTheme];
    const root = document.documentElement;
    
    root.style.setProperty('--terminal-bg', theme.bg);
    root.style.setProperty('--terminal-text', theme.text);
    root.style.setProperty('--terminal-accent', theme.accent);
    root.style.setProperty('--terminal-secondary', theme.secondary);
    root.style.setProperty('--terminal-success', theme.success);
    root.style.setProperty('--terminal-error', theme.error);
    
    if (theme.glow) {
      root.style.setProperty('--glow-effect', `0 0 10px ${theme.accent}, 0 0 20px ${theme.accent}`);
    } else {
      root.style.setProperty('--glow-effect', 'none');
    }
    
    localStorage.setItem('portfolioTheme', currentTheme);
  }, [currentTheme]);

  const changeTheme = (themeName) => {
    if (themes[themeName]) {
      setCurrentTheme(themeName);
    }
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, changeTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
