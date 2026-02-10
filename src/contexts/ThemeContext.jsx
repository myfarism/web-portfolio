import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const themes = {
  dark: {
    name: 'Dark Amber',
    bg: '#0a0e27',
    text: '#e4e4e7',
    accent: '#f59e0b',
    secondary: '#8b5cf6',
    success: '#10b981',
    error: '#ef4444',
    glow: false,
    category: 'Default'
  },
  
  // Catppuccin Themes
  'catppuccin-mocha': {
    name: 'Catppuccin Mocha',
    bg: '#1e1e2e',
    text: '#cdd6f4',
    accent: '#89b4fa',
    secondary: '#cba6f7',
    success: '#a6e3a1',
    error: '#f38ba8',
    glow: false,
    category: 'Catppuccin'
  },
  'catppuccin-macchiato': {
    name: 'Catppuccin Macchiato',
    bg: '#24273a',
    text: '#cad3f5',
    accent: '#8aadf4',
    secondary: '#c6a0f6',
    success: '#a6da95',
    error: '#ee99a0',
    glow: false,
    category: 'Catppuccin'
  },
  'catppuccin-frappe': {
    name: 'Catppuccin Frappé',
    bg: '#303446',
    text: '#c6d0f5',
    accent: '#8caaee',
    secondary: '#ca9ee6',
    success: '#a6d189',
    error: '#e78284',
    glow: false,
    category: 'Catppuccin'
  },
  'catppuccin-latte': {
    name: 'Catppuccin Latte',
    bg: '#eff1f5',
    text: '#4c4f69',
    accent: '#1e66f5',
    secondary: '#8839ef',
    success: '#40a02b',
    error: '#d20f39',
    glow: false,
    category: 'Catppuccin'
  },

  // Classic Retro
  retro: {
    name: 'Retro Green',
    bg: '#000000',
    text: '#33ff33',
    accent: '#33ff33',
    secondary: '#00ff00',
    success: '#33ff33',
    error: '#ff3333',
    glow: true,
    category: 'Retro'
  },
  'retro-amber': {
    name: 'Retro Amber',
    bg: '#000000',
    text: '#ffb000',
    accent: '#ffb000',
    secondary: '#ff8800',
    success: '#ffcc00',
    error: '#ff4400',
    glow: true,
    category: 'Retro'
  },
  'retro-blue': {
    name: 'Retro Blue',
    bg: '#000814',
    text: '#00d9ff',
    accent: '#00d9ff',
    secondary: '#0099cc',
    success: '#00ffcc',
    error: '#ff3366',
    glow: true,
    category: 'Retro'
  },

  // Modern Themes
  matrix: {
    name: 'Matrix',
    bg: '#0d0d0d',
    text: '#00ff41',
    accent: '#008f11',
    secondary: '#003b00',
    success: '#00ff41',
    error: '#ff0000',
    glow: true,
    category: 'Modern'
  },
  cyberpunk: {
    name: 'Cyberpunk',
    bg: '#0a0a1f',
    text: '#00f2ff',
    accent: '#ff00ff',
    secondary: '#ff00aa',
    success: '#00ff88',
    error: '#ff0055',
    glow: true,
    category: 'Modern'
  },
  'neon-nights': {
    name: 'Neon Nights',
    bg: '#0f0f23',
    text: '#e0e0ff',
    accent: '#ff6ec7',
    secondary: '#7c3aed',
    success: '#10f4b1',
    error: '#ff4757',
    glow: true,
    category: 'Modern'
  },

  // Popular Editor Themes
  'dracula': {
    name: 'Dracula',
    bg: '#282a36',
    text: '#f8f8f2',
    accent: '#bd93f9',
    secondary: '#ff79c6',
    success: '#50fa7b',
    error: '#ff5555',
    glow: false,
    category: 'Editor'
  },
  'nord': {
    name: 'Nord',
    bg: '#2e3440',
    text: '#d8dee9',
    accent: '#88c0d0',
    secondary: '#b48ead',
    success: '#a3be8c',
    error: '#bf616a',
    glow: false,
    category: 'Editor'
  },
  'gruvbox-dark': {
    name: 'Gruvbox Dark',
    bg: '#282828',
    text: '#ebdbb2',
    accent: '#fe8019',
    secondary: '#d3869b',
    success: '#b8bb26',
    error: '#fb4934',
    glow: false,
    category: 'Editor'
  },
  'tokyo-night': {
    name: 'Tokyo Night',
    bg: '#1a1b26',
    text: '#c0caf5',
    accent: '#7aa2f7',
    secondary: '#bb9af7',
    success: '#9ece6a',
    error: '#f7768e',
    glow: false,
    category: 'Editor'
  },
  'one-dark': {
    name: 'One Dark',
    bg: '#282c34',
    text: '#abb2bf',
    accent: '#61afef',
    secondary: '#c678dd',
    success: '#98c379',
    error: '#e06c75',
    glow: false,
    category: 'Editor'
  },
  'monokai': {
    name: 'Monokai',
    bg: '#272822',
    text: '#f8f8f2',
    accent: '#66d9ef',
    secondary: '#ae81ff',
    success: '#a6e22e',
    error: '#f92672',
    glow: false,
    category: 'Editor'
  },

  // Light Themes
  'light': {
    name: 'Light Mode',
    bg: '#ffffff',
    text: '#1a1a1a',
    accent: '#2563eb',
    secondary: '#7c3aed',
    success: '#059669',
    error: '#dc2626',
    glow: false,
    category: 'Light'
  },
  'solarized-light': {
    name: 'Solarized Light',
    bg: '#fdf6e3',
    text: '#657b83',
    accent: '#268bd2',
    secondary: '#6c71c4',
    success: '#859900',
    error: '#dc322f',
    glow: false,
    category: 'Light'
  },
  'github-light': {
    name: 'GitHub Light',
    bg: '#ffffff',
    text: '#24292f',
    accent: '#0969da',
    secondary: '#8250df',
    success: '#1a7f37',
    error: '#cf222e',
    glow: false,
    category: 'Light'
  },

  // Fun/Creative Themes
  'synthwave': {
    name: 'Synthwave',
    bg: '#2b213a',
    text: '#f8f8f2',
    accent: '#ff7edb',
    secondary: '#b893ce',
    success: '#72f1b8',
    error: '#fe4450',
    glow: true,
    category: 'Creative'
  },
  'outrun': {
    name: 'Outrun',
    bg: '#0b0b1e',
    text: '#f2f2f2',
    accent: '#ff6ec7',
    secondary: '#ff00e5',
    success: '#39d9ff',
    error: '#ff124f',
    glow: true,
    category: 'Creative'
  },
  'forest': {
    name: 'Forest',
    bg: '#1a2421',
    text: '#d4e5d4',
    accent: '#7fb069',
    secondary: '#507050',
    success: '#97cc11',
    error: '#c85250',
    glow: false,
    category: 'Creative'
  },
  'ocean': {
    name: 'Ocean',
    bg: '#0a1128',
    text: '#d4e9f7',
    accent: '#00b4d8',
    secondary: '#0077b6',
    success: '#90e0ef',
    error: '#ef476f',
    glow: false,
    category: 'Creative'
  },
  'sunset': {
    name: 'Sunset',
    bg: '#1a1423',
    text: '#f7e9d7',
    accent: '#ff6b35',
    secondary: '#f7931e',
    success: '#fbb13c',
    error: '#fe4a49',
    glow: false,
    category: 'Creative'
  },

  // Minimal Themes
  'minimal-dark': {
    name: 'Minimal Dark',
    bg: '#0d0d0d',
    text: '#d4d4d4',
    accent: '#ffffff',
    secondary: '#a3a3a3',
    success: '#d4d4d4',
    error: '#7a7a7a',
    glow: false,
    category: 'Minimal'
  },
  'minimal-light': {
    name: 'Minimal Light',
    bg: '#fafafa',
    text: '#1a1a1a',
    accent: '#000000',
    secondary: '#525252',
    success: '#1a1a1a',
    error: '#737373',
    glow: false,
    category: 'Minimal'
  },
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
      root.style.setProperty('--glow-effect', `0 0 5px ${theme.accent}, 0 0 10px ${theme.accent}, 0 0 15px ${theme.accent}`);
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

  const getThemesByCategory = () => {
    const categories = {};
    Object.entries(themes).forEach(([key, theme]) => {
      if (!categories[theme.category]) {
        categories[theme.category] = [];
      }
      categories[theme.category].push({ key, ...theme });
    });
    return categories;
  };

  return (
    <ThemeContext.Provider value={{ 
      currentTheme, 
      changeTheme, 
      themes,
      getThemesByCategory 
    }}>
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
