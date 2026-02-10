import { motion, AnimatePresence } from 'motion/react';
import { Palette, X } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentTheme, changeTheme, getThemesByCategory } = useTheme();
  const categories = getThemesByCategory();

  return (
    <>
      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-terminal-accent rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
        aria-label="Theme Switcher"
      >
        <Palette className="w-6 h-6 text-terminal-bg" />
      </motion.button>

      {/* Theme Picker Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-terminal-bg/80 backdrop-blur-sm z-50"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-4xl md:max-h-[80vh] bg-terminal-bg border-2 border-terminal-accent/40 z-50 overflow-hidden flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-terminal-accent/20">
                <div className="flex items-center gap-3">
                  <Palette className="w-5 h-5 text-terminal-accent" />
                  <h3 className="font-mono font-bold text-terminal-text">
                    Theme Switcher
                  </h3>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 flex items-center justify-center text-terminal-text hover:text-terminal-accent transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-4 space-y-6">
                {Object.entries(categories).map(([category, themeList]) => (
                  <div key={category}>
                    <h4 className="font-mono text-sm font-bold text-terminal-accent mb-3">
                      {category}
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                      {themeList.map((theme) => (
                        <motion.button
                          key={theme.key}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => {
                            changeTheme(theme.key);
                            setIsOpen(false);
                          }}
                          className={`relative p-3 border-2 transition-all ${
                            currentTheme === theme.key
                              ? 'border-terminal-accent bg-terminal-accent/10'
                              : 'border-terminal-accent/20 hover:border-terminal-accent/40'
                          }`}
                        >
                          {/* Color Preview */}
                          <div className="flex gap-1 mb-2">
                            <div 
                              className="w-full h-6 rounded"
                              style={{ backgroundColor: theme.bg }}
                            />
                          </div>
                          <div className="flex gap-1 mb-2">
                            <div 
                              className="flex-1 h-3 rounded"
                              style={{ backgroundColor: theme.accent }}
                            />
                            <div 
                              className="flex-1 h-3 rounded"
                              style={{ backgroundColor: theme.secondary }}
                            />
                          </div>

                          {/* Name */}
                          <div className="font-mono text-xs text-terminal-text text-left">
                            {theme.name}
                          </div>

                          {/* Badges */}
                          <div className="flex gap-1 mt-2">
                            {theme.glow && (
                              <span className="text-[10px] text-terminal-accent">✨</span>
                            )}
                            {currentTheme === theme.key && (
                              <span className="text-[10px] text-terminal-success">✓</span>
                            )}
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="p-4 border-t border-terminal-accent/20 text-center">
                <p className="font-mono text-xs text-terminal-text/60">
                  You can also type "theme" in the terminal for more options
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ThemeSwitcher;
