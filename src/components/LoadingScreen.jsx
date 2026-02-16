import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete(), 500);
          return 100;
        }
        return prev + 10;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-terminal-bg z-[100] flex items-center justify-center"
    >
      <div className="max-w-md w-full px-6">
        <div className="mb-8">
          <div className="font-mono text-terminal-accent mb-2">
            Initializing portfolio system...
          </div>
          <div className="h-2 bg-terminal-accent/20 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="h-full bg-terminal-accent"
            />
          </div>
          <div className="font-mono text-terminal-text/60 text-sm mt-2 text-right">
            {progress}%
          </div>
        </div>

        <div className="space-y-1 font-mono text-sm text-terminal-text/60">
          {[
            'Loading components...',
            'Compiling assets...',
            'Establishing connections...',
            'Ready to launch!'
          ].map((text, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              animate={{ opacity: progress > idx * 25 ? 1 : 0.3 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-terminal-accent">{'>'}</span> {text}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
