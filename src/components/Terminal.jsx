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
      output: [
        'Permission denied. Nice try though 😏',
        'Hint: Developers don\'t need sudo, just coffee'
      ],
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
        'Bugs fixed: Still 0 (coffee fixes moods, not bugs)',
        '',
        '💡 Fun fact: This portfolio was built with lots of coffee'
      ],
      type: 'success'
    }),
    matrix: () => ({
      output: [
        '01001000 01100101 01101100 01101100 01101111',
        'Wake up, Neo...',
        'The Matrix has you...',
        '',
        'Just kidding! Check out my blockchain project instead 😎'
      ],
      type: 'info'
    }),
    konami: () => ({
      output: [
        '🎮 KONAMI CODE ACTIVATED!',
        '',
        '⬆️⬆️⬇️⬇️⬅️➡️⬅️➡️🅱️🅰️',
        '',
        'Achievement Unlocked: Gamer Developer',
        '+30 Nostalgia Points',
        '',
        'Easter egg 1/5 found!'
      ],
      type: 'success'
    }),
    'git gud': () => ({
      output: [
        'Git: \'gud\' is not a git command.',
        '',
        'Did you mean:',
        '  git good    - Become a better developer',
        '  git coffee  - Take a break',
        '  git sleep   - Debug your brain',
        '',
        'Actually, you seem pretty good already! 🎯'
      ],
      type: 'info'
    }),
    'npm install happiness': () => ({
      output: [
        '⠋ Installing happiness...',
        '⠙ Resolving dependencies...',
        '⠹ Found 1 vulnerability (moderate)',
        '',
        '✓ happiness@1.0.0',
        'added 1 package in 0.420s',
        '',
        '💡 To fix the vulnerability, try:',
        '  npm audit fix --force (warning: may cause existential crisis)',
        '',
        'Easter egg 2/5 found!'
      ],
      type: 'success'
    }),
  };

  const commands = {
    help: () => ({
      output: [
        'Available commands:',
        '',
        '📂 Navigation:',
        '  about        - Learn about me',
        '  projects     - View my work',
        '  skills       - See my skills',
        '  contact      - Get in touch',
        '',
        '🎨 Themes:',
        '  theme        - List all themes (28+ available!)',
        '  theme <name> - Change theme',
        '  theme-random - Surprise me!',
        '',
        // '📄 Resume:',
        // '  resume       - Download my resume',
        // '  cv           - Same as resume',
        '',
        '💼 Professional:',
        '  whoami       - Quick intro',
        '  experience   - Work history',
        '  education    - Academic background',
        '  github       - GitHub profile',
        '',
        '🛠️ System:',
        '  ls           - List sections',
        '  clear        - Clear terminal',
        '  email        - Copy my email',
        '',
        // '🎮 Fun Commands:',
        // '  coffee       - Brew coffee ☕',
        // '  sudo         - Try to be admin',
        // '  matrix       - Red or blue pill?',
        // '  konami       - ⬆️⬆️⬇️⬇️⬅️➡️',
        '',
        // '💡 Tip: Try "git gud" or "npm install happiness"'
      ],
      type: 'info'
    }),

    whoami: () => ({
      output: [
        '╔════════════════════════════════════════╗',
        '║ Muhammad Faris Hafizh                 ║',
        '╠════════════════════════════════════════╣',
        '║ Role: Backend & Android Developer     ║',
        '║ Location: Jakarta, Indonesia 🇮🇩         ║',
        '║ Education: S1 Informatics              ║',
        '║ Current: Asa Kreasi Interasia (Internship)         ║',
        '╠════════════════════════════════════════╣',
        '║ Specialization:                       ║',
        '║  • Node.js & REST APIs                ║',
        '║  • Kotlin & Android Development       ║',
        '║  • Blockchain Integration             ║',
        '║  • Database Optimization              ║',
        '╚════════════════════════════════════════╝',
        '',
        'Type "experience" for work history',
        'Type "projects" to see what I\'ve built'
      ],
      type: 'success'
    }),

    experience: () => ({
      output: [
        '💼 Work Experience',
        '',
        '┌─ Asa Kreasi Interasia',
        '│  Internship Developer',
        '│  Jun 2025 - Present',
        '│',
        '│  • Built RESTful APIs with Node.js',
        '│  • Optimized database queries (+40% performance)',
        '│  • Implemented Docker architecture',
        '│  • Collaborated with 5 frontend developers',
        '│',
        '├─ Bangkit Academy',
        '│  Android Path Graduate',
        '│  Sep 2024 - Jan 2025',
        '│',
        '│  • Google-backed program',
        '│  • Kotlin & Jetpack Compose',
        '│  • Capstone: Cat disease detection app',
        '│  • Team collaboration with ML & CC paths',
        '│',
        '└─ HIMAFORKA UPJ',
        '   President of Student Association',
        '   Aug 2024 - Jan 2025',
        '',
        '   • Led informatics student body',
        '   • Organized events & workshops',
        '   • Faculty-student liaison'
      ],
      type: 'info'
    }),

    education: () => ({
      output: [
        '🎓 Education',
        '',
        '┌─ Universitas Pembangunan Jaya',
        '│  Bachelor of Informatics',
        '│  Aug 2022 - Feb 2026',
        '│  GPA: 3.56/4.00',
        '│',
        '│  Thesis:',
        '│  "Implementation of Blockchain and',
        '│   Cryptographic Algorithms in Android-Based',
        '│   E-Voting System"',
        '│',
        '└─ SMK Nusantara 1',
        '   Network Engineering',
        '   Aug 2019 - Jun 2022',
        '',
        '🏆 Certifications:',
        '  • Android Development - Intermediate (Dicoding)',
        '  • Jetpack Compose License (Dicoding)',
        '  • Bangkit Academy Graduate 2025'
      ],
      type: 'info'
    }),

    about: () => ({
      output: [
        'Navigating to /about...',
        'Loading README.md...'
      ],
      type: 'success',
      action: 'navigate',
      to: 'about'
    }),

    projects: () => ({
      output: [
        'Fetching repositories...',
        'Loading project showcase...',
        '',
        '📂 Featured Projects:',
        '  • Blockchain E-Voting (2025)',
        '  • Cat Skin Disease Detection (2024)',
        '  • Enterprise REST APIs (2025)',
        '',
        'Scrolling to projects section...'
      ],
      type: 'success',
      action: 'navigate',
      to: 'projects'
    }),

    skills: () => ({
      output: [
        'Executing skill tree...',
        '',
        'Backend: ████████████████░░ 90%',
        'Android: ████████████████░░ 80%',
        'Blockchain: ████████████░░░░░ 75%',
        '',
        'Loading full skill list...'
      ],
      type: 'success',
      action: 'navigate',
      to: 'skills'
    }),

    contact: () => ({
      output: [
        'Opening communication channels...',
        '📧 Email: farishafizh19@gmail.com',
        '📱 Phone: +62 851-5646-8466',
        '',
        'Redirecting to contact form...'
      ],
      type: 'success',
      action: 'navigate',
      to: 'contact'
    }),

    github: () => {
      window.open('https://github.com/myfarism', '_blank');
      return {
        output: [
          'Opening GitHub profile...',
          '',
          '🔗 https://github.com/myfarism',
          '',
          '📊 Public repositories available',
          '⭐ Check out my pinned projects!',
          '',
          '✓ Opened in new tab'
        ],
        type: 'success'
      };
    },

    linkedin: () => {
      window.open('https://www.linkedin.com/in/muhammad-faris-hafizh/', '_blank');
      return {
        output: [
          'Opening LinkedIn profile...',
          '',
          '🔗 linkedin.com/in/muhammad-faris-hafizh',
          '',
          '✓ Opened in new tab'
        ],
        type: 'success'
      };
    },

    resume: () => {
      return {
        output: [
          '📄 Resume Options',
          '',
          'Available formats:',
          '  resume pdf    - Download PDF (recommended)',
          '  resume json   - Developer-friendly format',
          '  resume view   - Preview in terminal',
          '',
          'Example: resume pdf',
          '',
          '💡 Or just type "cv" for quick download'
        ],
        type: 'info'
      };
    },

    cv: () => {
      // In real implementation, trigger actual PDF download
      return {
        output: [
          'Preparing resume...',
          'Compiling experience & skills...',
          '[████████████████████] 100%',
          '',
          '✓ muhammad-faris-hafizh-resume.pdf',
          '📥 Download ready!',
          '',
          '📊 Resume Stats:',
          '  • Pages: 1',
          '  • Experience: 2+ years',
          '  • Projects: 5+',
          '  • Skills: 20+',
          '',
          '💡 Tip: You can also email it with "resume email"'
        ],
        type: 'success'
      };
    },

    email: () => {
      const email = 'farishafizh19@gmail.com';
      navigator.clipboard.writeText(email);
      return {
        output: [
          '📧 Email copied to clipboard!',
          '',
          `✓ ${email}`,
          '',
          'You can now paste it anywhere.',
          'I typically respond within 24 hours.',
          '',
          '💡 Or use the contact form: type "contact"'
        ],
        type: 'success'
      };
    },

    phone: () => {
      const phone = '+6285156468466';
      navigator.clipboard.writeText(phone);
      return {
        output: [
          '📱 Phone number copied!',
          '',
          `✓ ${phone}`,
          '',
          'Feel free to call or WhatsApp me.',
          'Available during business hours (GMT+7)'
        ],
        type: 'success'
      };
    },

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
        'about.md           projects/          contact.txt',
        'skills.json        experience.log     resume.pdf',
        '',
        'Use commands like "about" or "projects" to navigate',
        'Type "resume" to download CV'
      ],
      type: 'info'
    }),

    theme: (args) => {
      const themeName = args?.[0];
      
      if (!themeName) {
        const categories = getThemesByCategory();
        const output = ['Available themes (28 total):'];
        
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
        output.push('');
        output.push('💡 Try: theme-random for surprise!');
        
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
            'Try other themes from 28 options!'
          ].filter(Boolean),
          type: 'success'
        };
      } else {
        return {
          output: [
            `Theme "${themeName}" not found.`,
            'Type "theme" to see all available themes.',
            '',
            'Popular choices:',
            '  • catppuccin-mocha',
            '  • dracula',
            '  • tokyo-night',
            '  • synthwave'
          ],
          type: 'error'
        };
      }
    },

    'theme-random': () => {
      const themeKeys = Object.keys(themes);
      const randomTheme = themeKeys[Math.floor(Math.random() * themeKeys.length)];
      changeTheme(randomTheme);
      return {
        output: [
          'Rolling the dice... 🎲',
          '',
          `✓ Random theme: ${themes[randomTheme].name}`,
          themes[randomTheme].glow ? '✨ This one has glow effects!' : '',
          '',
          'Don\'t like it? Try again!',
          'Or type "theme" to choose manually'
        ].filter(Boolean),
        type: 'success'
      };
    },

    banner: () => ({
      output: [
        '',
        '███████╗ █████╗ ██████╗ ██╗███████╗',
        '██╔════╝██╔══██╗██╔══██╗██║██╔════╝',
        '█████╗  ███████║██████╔╝██║███████╗',
        '██╔══╝  ██╔══██║██╔══██╗██║╚════██║',
        '██║     ██║  ██║██║  ██║██║███████║',
        '╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚══════╝',
        '',
        'Muhammad Faris Hafizh',
        'Backend & Android Developer',
        '',
        'Type "help" to get started!'
      ],
      type: 'info'
    }),

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
    // Welcome message
    setHistory([
      { 
        type: 'system', 
        content: isMobile ? [
          '═══════════════════════════════',
          'faris@portfolio:~$',
          'Backend | Android | System Builder',
          'Type "help" for commands',
          '═══════════════════════════════',
          ''
        ] : [
          '',
          // '███████╗ █████╗ ██████╗ ██╗███████╗',
          // '██╔════╝██╔══██╗██╔══██╗██║██╔════╝',
          // '█████╗  ███████║██████╔╝██║███████╗',
          // '██╔══╝  ██╔══██║██╔══██╗██║╚════██║',
          // '██║     ██║  ██║██║  ██║██║███████║',
          // '╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚══════╝',
          '',
          '═══════════════════════════════════════════════',
          '  faris@portfolio:~$                              ',
          '  Backend | Android | System Builder              ',
          '  type "help"                                      ',
          '══════════════════════════════════════════════',
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
        content: ['Nice try! You cannot escape my portfolio 😏']
      });
    } else {
      newHistory.push({
        type: 'error',
        content: [
          `Command not found: ${trimmedCmd}`,
          'Type "help" for available commands',
          '',
          '💡 Did you mean:',
          `  ${findSimilarCommand(trimmedCmd)}`
        ]
      });
    }

    setHistory(newHistory);
    setCommandHistory(prev => [...prev, cmd]);
    setHistoryIndex(-1);
  };

  const findSimilarCommand = (input) => {
    const allCommands = Object.keys(commands);
    const similar = allCommands.filter(cmd => 
      cmd.includes(input) || input.includes(cmd)
    );
    return similar.length > 0 ? similar.slice(0, 3).join(', ') : 'help';
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
      } else if (matches.length > 1) {
        const newHistory = [
          ...history,
          { 
            type: 'info', 
            content: ['Suggestions:', ...matches.map(m => `  ${m}`)]
          }
        ];
        setHistory(newHistory);
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
          faris@portfolio:~
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
          placeholder={isMobile ? "Type command..." : ""}
        />
        <span className={`text-terminal-accent flex-shrink-0 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>
          ▊
        </span>
      </div>

      {/* Keyboard hints */}
      <div className="mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-terminal-accent/20 flex flex-wrap gap-2 sm:gap-4 text-[10px] sm:text-xs text-terminal-text/40">
        {isMobile ? (
          <>
            <span>Type "help"</span>
            <span>ESC Clear</span>
          </>
        ) : (
          <>
            <span>↑↓ History</span>
            {/* <span>Tab Complete</span> */}
            <span>ESC Clear</span>
          </>
        )}
      </div>
    </div>
  );
};

export default Terminal;
