import { motion, AnimatePresence } from 'motion/react';
import { X, Github, ExternalLink, Code, Zap } from 'lucide-react';
import { useEffect } from 'react';

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-terminal-bg/95 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-black/50 backdrop-blur-sm border-2 border-terminal-accent/40 font-mono"
        >
          {/* Header */}
          <div className="sticky top-0 bg-terminal-bg/95 backdrop-blur-sm border-b border-terminal-accent/20 p-4 flex items-center justify-between z-10">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-terminal-error"></div>
              <div className="w-3 h-3 rounded-full bg-terminal-accent"></div>
              <div className="w-3 h-3 rounded-full bg-terminal-success"></div>
              <span className="ml-2 text-terminal-text/60 text-xs">
                project@details:~/{project.id}
              </span>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center text-terminal-text hover:text-terminal-accent transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Title & Status */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-terminal-accent text-xs">$</span>
                <span className="text-terminal-text/60 text-xs">cat PROJECT_README.md</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-terminal-text mb-2">
                {project.name}
              </h2>
              <div className="flex items-center gap-2">
                <span className={`px-2 py-1 text-xs font-bold rounded border ${
                  project.status === 'production' 
                    ? 'text-terminal-success bg-terminal-success/10 border-terminal-success/30'
                    : 'text-terminal-accent bg-terminal-accent/10 border-terminal-accent/30'
                }`}>
                  {project.status.toUpperCase()}
                </span>
                <span className="text-terminal-text/60 text-sm">• {project.year}</span>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <div className="text-terminal-accent text-sm">## Description</div>
              <p className="text-terminal-text/80 leading-relaxed">
                {project.detailedDescription || project.description}
              </p>
            </div>

            {/* Key Features */}
            {project.features && (
              <div className="space-y-2">
                <div className="text-terminal-accent text-sm">## Key Features</div>
                <ul className="space-y-2">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-terminal-text/80">
                      <span className="text-terminal-accent mt-1">▹</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack */}
            <div className="space-y-2">
              <div className="text-terminal-accent text-sm">## Tech Stack</div>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-terminal-accent/10 text-terminal-accent text-xs rounded border border-terminal-accent/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Code Snippet */}
            {/* {project.codeSnippet && (
              <div className="space-y-2">
                <div className="text-terminal-accent text-sm">## Code Sample</div>
                <div className="bg-terminal-bg/60 border border-terminal-accent/20 p-4 rounded overflow-x-auto">
                  <pre className="text-xs text-terminal-text/80">
                    <code>{project.codeSnippet}</code>
                  </pre>
                </div>
              </div>
            )} */}

            {/* Challenges & Solutions */}
            {project.challenges && (
              <div className="space-y-2">
                <div className="text-terminal-accent text-sm">## Challenges & Solutions</div>
                <div className="space-y-3">
                  {project.challenges.map((item, idx) => (
                    <div key={idx} className="border-l-2 border-terminal-accent/40 pl-4">
                      <div className="text-terminal-text/90 font-semibold mb-1">
                        {item.challenge}
                      </div>
                      <div className="text-terminal-text/70 text-sm">
                        {item.solution}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Stats */}
            {project.stats && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {project.stats.map((stat, idx) => (
                  <div key={idx} className="bg-terminal-accent/10 border border-terminal-accent/30 p-3 rounded">
                    <div className="text-terminal-accent font-bold text-lg">{stat.value}</div>
                    <div className="text-terminal-text/60 text-xs">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Links */}
            <div className="flex flex-wrap gap-3 pt-4 border-t border-terminal-accent/20">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-terminal-bg border border-terminal-accent/40 text-terminal-text hover:text-terminal-accent hover:border-terminal-accent transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span className="text-sm">View Code</span>
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-terminal-accent text-terminal-bg border border-terminal-accent hover:bg-terminal-accent/90 transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="text-sm">Live Demo</span>
                </a>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="sticky bottom-0 bg-terminal-bg/95 backdrop-blur-sm border-t border-terminal-accent/20 p-4 text-center">
            <p className="text-terminal-text/40 text-xs">
              Press ESC or click outside to close
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
