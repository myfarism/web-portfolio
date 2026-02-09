import { motion } from 'motion/react';
import { useState } from 'react';

const About = () => {
  const [selectedCommit, setSelectedCommit] = useState(null);

  const commits = [
    {
      hash: 'a3f82b1',
      date: '2024',
      branch: 'career/blockchain',
      message: 'feat: Built decentralized voting system with Hardhat',
      body: 'Implemented smart contracts in Solidity, local blockchain environment, and full-stack integration with React frontend. Focused on security and transparency.',
      impact: '+2,847 lines, -0 bugs (that I know of)',
      tech: ['Solidity', 'Hardhat', 'React', 'Web3.js']
    },
    {
      hash: '7c4e9d2',
      date: '2023-2024',
      branch: 'career/erp-systems',
      message: 'refactor: Designed and shipped ERP system from scratch',
      body: 'Full-stack ERP with complex business logic, PostgreSQL + Prisma ORM, Docker deployment. Built for real-world scalability and maintainability.',
      impact: 'Production-ready system serving multiple departments',
      tech: ['Express.js', 'PostgreSQL', 'Prisma', 'Docker', 'React']
    },
    {
      hash: 'e8b1f45',
      date: '2023',
      branch: 'experiments/iot',
      message: 'chore: Programmed ESP32 for IoT applications',
      body: 'Custom firmware development for embedded systems. Real-time data processing, sensor integration, and wireless communication protocols.',
      impact: 'Successful deployment in live environment',
      tech: ['C/C++', 'ESP32', 'IoT Protocols', 'Embedded Systems']
    },
    {
      hash: '2f9c3a8',
      date: '2022-2023',
      branch: 'learning/ai-ml',
      message: 'feat: Trained and deployed ML models for production',
      body: 'Computer vision projects including face detection, image processing. Kaggle competitions, model optimization, and real-world deployment.',
      impact: 'F1-score improvements through algorithm tuning',
      tech: ['Python', 'TensorFlow', 'PyTorch', 'OpenCV', 'Kaggle']
    },
    {
      hash: '9a5d7e3',
      date: '2022',
      branch: 'career/mobile-dev',
      message: 'init: Started mobile development with Kotlin Compose',
      body: 'Built Android apps with Jetpack Compose. Clean architecture, modern UI patterns, and cross-platform considerations.',
      impact: 'Shipped multiple Android applications',
      tech: ['Kotlin', 'Jetpack Compose', 'Android', 'Material Design']
    },
    {
      hash: 'c1a4b92',
      date: '2021-2022',
      branch: 'origin/main',
      message: 'Initial commit: Started software engineering journey',
      body: 'Began with fundamentals - algorithms, data structures, system design. Built strong foundation through coursework and side projects.',
      impact: 'The beginning of breaking things to learn how they work',
      tech: ['Java', 'Python', 'JavaScript', 'Git', 'Linux']
    }
  ];

  return (
    <section id="about" className="min-h-screen px-6 py-20 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-terminal-accent text-sm">~/about</span>
              <div className="h-px flex-1 bg-terminal-accent/20"></div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-terminal-text mb-4">
              git log --<span className="text-terminal-accent">author</span>="me"
            </h2>
            <p className="text-terminal-text/70 text-lg max-w-2xl">
              My journey in tech, tracked like a Git history. Each commit represents 
              a milestone, skill learned, or project that shaped who I am as a developer.
            </p>
          </div>

          {/* Git Log Timeline */}
          <div className="space-y-0 relative">
            {/* Vertical line */}
            <div className="absolute left-[11px] top-0 bottom-0 w-px bg-terminal-accent/30 hidden lg:block"></div>

            {commits.map((commit, idx) => (
              <motion.div
                key={commit.hash}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative"
              >
                {/* Commit Point */}
                <div className="flex gap-6 items-start pb-8">
                  {/* Timeline dot */}
                  <div className="hidden lg:flex items-center justify-center w-6 h-6 rounded-full bg-terminal-bg border-2 border-terminal-accent relative z-10 flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-terminal-accent"></div>
                  </div>

                  {/* Commit Content */}
                  <div 
                    className="flex-1 bg-terminal-bg/40 border border-terminal-accent/20 rounded-lg p-6 hover:border-terminal-accent/40 transition-all cursor-pointer group"
                    onClick={() => setSelectedCommit(selectedCommit === commit.hash ? null : commit.hash)}
                  >
                    {/* Commit header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                      <div className="flex items-center gap-3 flex-wrap">
                        <code className="text-terminal-accent font-bold text-sm">
                          {commit.hash}
                        </code>
                        <span className="px-2 py-1 bg-terminal-secondary/20 text-terminal-secondary text-xs rounded border border-terminal-secondary/30">
                          {commit.branch}
                        </span>
                        <span className="text-terminal-text/50 text-sm">
                          {commit.date}
                        </span>
                      </div>
                      <motion.div
                        animate={{ rotate: selectedCommit === commit.hash ? 180 : 0 }}
                        className="text-terminal-accent"
                      >
                        ▼
                      </motion.div>
                    </div>

                    {/* Commit message */}
                    <h3 className="text-lg font-medium text-terminal-text mb-2 group-hover:text-terminal-accent transition-colors">
                      {commit.message}
                    </h3>

                    {/* Expanded details */}
                    <motion.div
                      initial={false}
                      animate={{
                        height: selectedCommit === commit.hash ? 'auto' : 0,
                        opacity: selectedCommit === commit.hash ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 space-y-4 border-t border-terminal-accent/20 mt-4">
                        <p className="text-terminal-text/70 leading-relaxed">
                          {commit.body}
                        </p>
                        
                        <div className="flex items-center gap-2 text-sm text-terminal-success">
                          <span>+</span>
                          <span>{commit.impact}</span>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {commit.tech.map(tech => (
                            <span 
                              key={tech}
                              className="px-3 py-1 bg-terminal-accent/10 text-terminal-accent text-xs rounded border border-terminal-accent/30"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Fun Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {[
              { label: 'Commits to learning', value: '∞', color: 'text-terminal-accent' },
              { label: 'Stack overflow visits', value: '???', color: 'text-terminal-secondary' },
              { label: 'Coffee consumed', value: 'Yes', color: 'text-terminal-success' },
              { label: 'Bugs created', value: 'Redacted', color: 'text-terminal-error' }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="bg-terminal-bg/40 border border-terminal-accent/20 rounded-lg p-6 text-center"
              >
                <div className={`text-3xl font-bold mb-2 ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-terminal-text/60 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Quick Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-terminal-bg/40 border border-terminal-accent/20 rounded-lg p-8"
          >
            <h3 className="text-2xl font-bold text-terminal-text mb-4">
              <span className="text-terminal-accent">&gt;</span> More about me
            </h3>
            <div className="space-y-4 text-terminal-text/70 leading-relaxed">
              <p>
                I'm a full-stack developer based in Jakarta who loves solving complex 
                problems with code. My journey started with curiosity about how things 
                work under the hood, and that curiosity never stopped.
              </p>
              <p>
                These days I'm deep into blockchain tech, AI integrations, and building 
                systems that actually scale. I believe in writing code that's maintainable, 
                testing things thoroughly, and never stopping learning.
              </p>
              <p>
                When I'm not coding, I'm probably reading technical documentation for fun, 
                contributing to open source, or experimenting with new tech that catches my interest.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
