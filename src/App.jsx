import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import LoadingScreen from './components/LoadingScreen';
import MobileMenu from './components/MobileMenu';
import ThemeSwitcher from './components/ThemeSwitcher';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  const [loading, setLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
      
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const terminalInput = document.querySelector('input[type="text"]');
        if (terminalInput) terminalInput.focus();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [mobileMenuOpen]);

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="min-h-screen bg-terminal-bg transition-colors duration-300 relative">
          {/* Animated Grid Background */}
          <div className="fixed inset-0 pointer-events-none z-0">
            <div 
              className="absolute inset-0 animate-grid-move"
              style={{
                backgroundImage: 'linear-gradient(to right, var(--terminal-accent) 1px, transparent 1px), linear-gradient(to bottom, var(--terminal-accent) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
                opacity: 0.15
              }}
            />
            {/* Fade overlay */}
            <div 
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to bottom, var(--terminal-bg) 0%, transparent 10%, transparent 90%, var(--terminal-bg) 100%)'
              }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="fixed top-4 right-4 sm:top-6 sm:right-6 z-40 lg:hidden w-12 h-12 sm:w-14 sm:h-14 bg-terminal-accent/20 backdrop-blur-sm border-2 border-terminal-accent/40 flex flex-col items-center justify-center gap-1.5 hover:bg-terminal-accent/30 active:scale-95 transition-all shadow-lg"
              aria-label="Open menu"
            >
              <div className="w-5 h-0.5 bg-terminal-accent transition-transform"></div>
              <div className="w-5 h-0.5 bg-terminal-accent transition-transform"></div>
              <div className="w-5 h-0.5 bg-terminal-accent transition-transform"></div>
            </button>

            <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
            <ThemeSwitcher />

            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contact />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
