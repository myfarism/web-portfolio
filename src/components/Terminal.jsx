import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '../contexts/ThemeContext';

const Terminal = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [showCursor, setShowCursor] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const inputRef = useRef(null);
  const terminalRef = useRef(null);
  const { currentTheme, changeTheme, themes, getThemesByCategory } = useTheme();

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Easter eggs
  const secretCommands = {
    sudo: () => ({
      output: ['Permission denied. Nice try though 😏'],
      type: 'error'
    }),
    hack: () => ({
      output: [
        'Initializing hack sequence...',
        'Accessing mainframe...',
        'ERROR: You need coffee.exe',
        '☕ Insert coffee and try again'
      ],
      type: 'error'
    }),
    coffee: () => ({
      output: [
        '☕ Brewing coffee...',
        '☕☕ Coffee ready!',
        'Productivity +100',
        'Bugs fixed: 0'
      ],
      type: 'success'
    }),
    matrix: () => ({
      output: [
        '01001000 01100101 01101100 01101100 01101111',
        'Wake up, Neo...',
        'The Matrix has you...',
        'Check out my projects instead 😎'
      ],
      type: 'info'
    }),
  };

  const commands = {
    // Update help command
    help: () => ({
      output: [
        'Available commands:',
        '',
        '📂 Navigation:',
        '  about        - Learn about me',
        '  projects     - View my work',
        '  skills       - See what I can do',
        '  contact      - Get in touch',
        '',
        '🎨 Themes:',
        '  theme        - List all themes',
        '  theme <name> - Change theme',
        '  theme-random - Random theme',
        '  theme-preview <name> - Preview colors',
        '',
        '🛠️ System:',
        '  whoami       - Quick intro',
        '  ls           - List sections',
        '  clear        - Clear terminal',
        '  email        - Copy my email',
        '',
        '🎮 Fun:',
        '  coffee       - Brew coffee ☕',
        '  sudo         - Be admin 😏',
        '  matrix       - Wake up, Neo',
        '  hack         - Try to hack',
        '',
        '💡 Try typing "theme" to see 25+ themes!'
      ],
      type: 'info'
    }),
    whoami: () => ({
      output: [
        'Full-stack developer from Jakarta.',
        'Building with blockchain, AI,',
        'and modern web tech.',
        '',
        'Breaking stuff to learn.'
      ],
      type: 'success'
    }),
    about: () => ({
      output: [
        'Navigating to /about...',
        'Loading readme...'
      ],
      type: 'success',
      action: 'navigate',
      to: 'about'
    }),
    projects: () => ({
      output: [
        'Fetching repositories...',
        'Loading projects...'
      ],
      type: 'success',
      action: 'navigate',
      to: 'projects'
    }),
    skills: () => ({
      output: [
        'Executing skill tree...',
      ],
      type: 'success',
      action: 'navigate',
      to: 'skills'
    }),
    contact: () => ({
      output: [
        'Opening channels...',
      ],
      type: 'success',
      action: 'navigate',
      to: 'contact'
    }),
    clear: () => ({
      output: [],
      type: 'clear'
    }),
    cls: () => ({
      output: [],
      type: 'clear'
    }),
    ls: () => ({
      output: [
        'about.md  projects/',
        'skills.json  contact.txt',
        '',
        'Use commands to navigate'
      ],
      type: 'info'
    }),
    theme: (args) => {
      const themeName = args?.[0];
      
      if (!themeName) {
        const categories = getThemesByCategory();
        const output = ['Available themes:'];
        
        Object.entries(categories).forEach(([category, themeList]) => {
          output.push('');
          output.push(`╔═══ ${category} ═══╗`);
          themeList.forEach(theme => {
            const active = currentTheme === theme.key ? ' ← active' : '';
            const glow = theme.glow ? ' ✨' : '';
            output.push(`  ${theme.key.padEnd(20)} ${theme.name}${glow}${active}`);
          });
        });
        
        output.push('');
        output.push('Usage: theme <name>');
        output.push('Example: theme catppuccin-mocha');
        
        return {
          output,
          type: 'info'
        };
      }
      
      if (themes[themeName]) {
        changeTheme(themeName);
        const theme = themes[themeName];
        return {
          output: [
            `Switching to ${theme.name}...`,
            '[████████████████████] 100%',
            `✓ Theme changed to ${theme.name}!`,
            theme.glow ? '✨ Glow effects enabled!' : '',
            '',
            'Try exploring other themes!'
          ].filter(Boolean),
          type: 'success'
        };
      } else {
        return {
          output: [
            `Theme "${themeName}" not found.`,
            'Type "theme" to see all available themes.'
          ],
          type: 'error'
        };
      }
    },

    // Add random theme command for fun
    'theme-random': () => {
      const themeKeys = Object.keys(themes);
      const randomTheme = themeKeys[Math.floor(Math.random() * themeKeys.length)];
      changeTheme(randomTheme);
      return {
        output: [
          'Rolling the dice...',
          '🎲 Random theme selected!',
          `✓ Now using: ${themes[randomTheme].name}`,
          '',
          `Don't like it? Try "theme-random" again!`
        ],
        type: 'success'
      };
    },

    // Add theme preview
    'theme-preview': (args) => {
      const themeName = args?.[0];
      
      if (!themeName || !themes[themeName]) {
        return {
          output: [
            'Usage: theme-preview <name>',
            'Example: theme-preview dracula',
            '',
            'This shows you the colors without changing theme.'
          ],
          type: 'info'
        };
      }
      
      const theme = themes[themeName];
      return {
        output: [
          `Preview: ${theme.name}`,
          '═══════════════════════',
          `Background:  ${theme.bg}`,
          `Text:        ${theme.text}`,
          `Accent:      ${theme.accent}`,
          `Secondary:   ${theme.secondary}`,
          `Success:     ${theme.success}`,
          `Error:       ${theme.error}`,
          `Glow Effect: ${theme.glow ? 'Yes ✨' : 'No'}`,
          '',
          `To apply: theme ${themeName}`
        ],
        type: 'info'
      };
    },
    email: () => {
      const email = 'your.email@example.com';
      navigator.clipboard.writeText(email);
      return {
        output: [
          `Email copied!`,
          `📧 ${email}`,
        ],
        type: 'success'
      };
    },
    ...secretCommands
  };

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    // Welcome message - shorter for mobile
    setHistory([
      { 
        type: 'system', 
        content: isMobile ? [
          '═══════════════════════════════',
          'Portfolio Terminal v2.1.0',
          'Type "help" for commands',
          '💡 Try "coffee" or "sudo"',
          '═══════════════════════════════',
          ''
        ] : [
          '╔═══════════════════════════════════════════════════╗',
          '║  Welcome to my portfolio terminal v2.1.0        ║',
          '║  Type "help" to see available commands          ║',
          '║  💡 Easter eggs hidden - try "coffee" or "sudo" ║',
          '╚═══════════════════════════════════════════════════╝',
          ''
        ]
      }
    ]);
  }, [isMobile]);

  const handleCommand = (cmd) => {
    const parts = cmd.trim().split(' ');
    const trimmedCmd = parts[0].toLowerCase();
    const args = parts.slice(1);
    
    if (!trimmedCmd) return;

    const newHistory = [
      ...history,
      { type: 'input', content: [`$ ${cmd}`] }
    ];

    if (commands[trimmedCmd]) {
      const result = commands[trimmedCmd](args);
      
      if (result.type === 'clear') {
        setHistory([]);
        return;
      }

      newHistory.push({
        type: result.type,
        content: result.output
      });

      if (result.action === 'navigate') {
        setTimeout(() => {
          const element = document.getElementById(result.to);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 300);
      }
    } else if (trimmedCmd === 'exit' || trimmedCmd === 'quit') {
      newHistory.push({
        type: 'error',
        content: ['Cannot escape this portfolio 😏']
      });
    } else {
      newHistory.push({
        type: 'error',
        content: [`Command not found: ${trimmedCmd}`, `Type "help" for commands`]
      });
    }

    setHistory(newHistory);
    setCommandHistory(prev => [...prev, cmd]);
    setHistoryIndex(-1);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleCommand(input);
      setInput('');
    } else if (e.key === 'ArrowUp' && !isMobile) {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 
          ? commandHistory.length - 1 
          : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown' && !isMobile) {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInput('');
        } else {
          setHistoryIndex(newIndex);
          setInput(commandHistory[newIndex]);
        }
      }
    } else if (e.key === 'Tab' && !isMobile) {
      e.preventDefault();
      const availableCommands = Object.keys(commands);
      const matches = availableCommands.filter(cmd => 
        cmd.startsWith(input.toLowerCase())
      );
      if (matches.length === 1) {
        setInput(matches[0]);
      }
    } else if (e.key === 'Escape') {
      setInput('');
    }
  };

  const getLineColor = (type) => {
    switch(type) {
      case 'error': return 'text-terminal-error';
      case 'success': return 'text-terminal-success';
      case 'info': return 'text-terminal-accent';
      case 'system': return 'text-terminal-secondary';
      default: return 'text-terminal-text';
    }
  };

  return (
    <div 
      className="bg-terminal-bg/80 backdrop-blur-sm border border-terminal-accent/20 p-4 sm:p-6 font-mono text-xs sm:text-sm shadow-2xl"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="flex items-center gap-2 mb-3 sm:mb-4 pb-2 sm:pb-3 border-b border-terminal-accent/20">
        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-terminal-error"></div>
        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-terminal-accent"></div>
        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-terminal-success"></div>
        <span className="ml-2 text-terminal-text/60 text-[10px] sm:text-xs">
          portfolio@terminal:~
        </span>
      </div>

      <div 
        ref={terminalRef}
        className="h-48 sm:h-56 md:h-64 overflow-y-auto mb-3 sm:mb-4 space-y-1"
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: 'rgba(245, 158, 11, 0.2) transparent'
        }}
      >
        <AnimatePresence>
          {history.map((entry, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              className={getLineColor(entry.type)}
            >
              {entry.content.map((line, lineIdx) => (
                <div key={lineIdx} className="leading-relaxed break-words">
                  {line}
                </div>
              ))}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-terminal-accent flex-shrink-0">$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent outline-none text-terminal-text caret-terminal-accent min-w-0"
          autoFocus={!isMobile}
          spellCheck={false}
          autoComplete="off"
          autoCapitalize="off"
          autoCorrect="off"
          placeholder={isMobile ? "Type here..." : ""}
        />
        <span className={`text-terminal-accent flex-shrink-0 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>
          ▊
        </span>
      </div>

      {/* Keyboard hints - conditional for mobile */}
      <div className="mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-terminal-accent/20 flex flex-wrap gap-2 sm:gap-4 text-[10px] sm:text-xs text-terminal-text/40">
        {isMobile ? (
          <>
            <span>Tap input to type</span>
            <span>ESC Clear</span>
          </>
        ) : (
          <>
            <span>↑↓ History</span>
            <span>Tab Autocomplete</span>
            <span>ESC Clear</span>
          </>
        )}
      </div>
    </div>
  );
};

export default Terminal;
