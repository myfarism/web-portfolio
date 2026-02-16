import { motion } from 'motion/react';
import Terminal from './Terminal';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `linear-gradient(to right, #f59e0b 1px, transparent 1px),
                            linear-gradient(to bottom, #f59e0b 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="max-w-6xl w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <motion.div
              className="inline-block mb-4 px-3 py-1 bg-terminal-accent/10 border border-terminal-accent/30 text-terminal-accent text-xs"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              STATUS: Open to opportunities
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 lg:mb-6 leading-tight">
              <span className="text-terminal-text">Hi, I'm</span>{' '}
              <span className="text-terminal-accent">Faris</span>
              <br />
              <span className="text-terminal-secondary">Backend</span>
              <br />
              <span className="text-terminal-text">Developer</span>
            </h1>

            <p className="text-base sm:text-lg text-terminal-text/70 mb-6 lg:mb-8 leading-relaxed">
              Informatics graduate with hands-on experience in Android 
              and Backend Development. Building scalable APIs and mobile 
              applications. Based in Jakarta, Indonesia.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 text-sm mb-8 lg:mb-12">
              <a 
                href="#projects" 
                className="px-6 py-3 bg-terminal-accent text-terminal-bg font-medium text-center hover:bg-terminal-accent/90 transition-colors"
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 border border-terminal-accent text-terminal-accent text-center hover:bg-terminal-accent/10 transition-colors"
              >
                Get In Touch
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 lg:gap-8 text-sm">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-terminal-success">500+</div>
                <div className="text-terminal-text/60 text-xs sm:text-sm">Coffee</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-terminal-accent">2+</div>
                <div className="text-terminal-text/60 text-xs sm:text-sm">Years Coding</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-terminal-secondary">5+</div>
                <div className="text-terminal-text/60 text-xs sm:text-sm">Projects</div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="order-1 lg:order-2"
          >
            <Terminal />
          </motion.div>
        </div>
      </div>

      {/* Floating elements - hidden on mobile */}
      <motion.div
        className="hidden lg:block absolute top-20 right-20 w-32 h-32 border border-terminal-secondary/20"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </section>
  );
};

export default Hero;
