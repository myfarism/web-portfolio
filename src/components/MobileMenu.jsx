import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { useEffect } from 'react';

const MobileMenu = ({ isOpen, onClose }) => {
  const navItems = [
    { id: 'about', label: 'about.md' },
    { id: 'projects', label: 'projects/' },
    { id: 'skills', label: 'skills.json' },
    { id: 'contact', label: 'contact.txt' },
  ];

  const handleClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      onClose();
    }
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-terminal-bg/95 backdrop-blur-sm z-50 lg:hidden"
          />

          {/* Menu */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-terminal-bg border-l-4 border-terminal-accent z-50 lg:hidden overflow-y-auto"
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="font-mono text-terminal-accent text-sm">NAVIGATION</div>
                <button
                  onClick={onClose}
                  className="w-12 h-12 flex items-center justify-center text-terminal-text hover:text-terminal-accent transition-colors active:scale-95"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Nav Items */}
              <nav className="space-y-3">
                {navItems.map((item, idx) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    onClick={() => handleClick(item.id)}
                    className="w-full text-left px-5 py-4 font-mono text-terminal-text hover:text-terminal-accent hover:bg-terminal-accent/10 border border-terminal-accent/20 hover:border-terminal-accent/40 transition-all active:scale-95"
                  >
                    <span className="text-terminal-accent">$</span> cd {item.label}
                  </motion.button>
                ))}
              </nav>

              {/* Quick Actions */}
              <div className="mt-8 pt-8 border-t border-terminal-accent/20">
                <div className="text-xs text-terminal-text/60 font-mono mb-3">QUICK ACTIONS</div>
                <div className="space-y-2">
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText('your.email@example.com');
                      onClose();
                    }}
                    className="w-full text-left px-5 py-3 font-mono text-sm text-terminal-text hover:text-terminal-success hover:bg-terminal-success/10 border border-terminal-accent/20 hover:border-terminal-success/40 transition-all active:scale-95"
                  >
                    📧 Copy Email
                  </button>
                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-left px-5 py-3 font-mono text-sm text-terminal-text hover:text-terminal-secondary hover:bg-terminal-secondary/10 border border-terminal-accent/20 hover:border-terminal-secondary/40 transition-all active:scale-95"
                  >
                    💻 GitHub Profile
                  </a>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-8 pt-8 border-t border-terminal-accent/20">
                <div className="font-mono text-xs text-terminal-text/60">
                  Press ESC or tap outside to close
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
