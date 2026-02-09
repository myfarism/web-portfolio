import { motion } from 'motion/react';
import { useState } from 'react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('backend');

  const skillTree = {
    backend: {
      title: 'Backend & APIs',
      icon: '⚙️',
      description: 'Building scalable server-side applications and APIs',
      skills: [
        { name: 'Node.js / Express', level: 'expert', years: 3, projects: 12 },
        { name: 'PostgreSQL', level: 'expert', years: 3, projects: 8 },
        { name: 'Prisma ORM', level: 'advanced', years: 2, projects: 6 },
        { name: 'Docker', level: 'advanced', years: 2, projects: 10 },
        { name: 'RESTful APIs', level: 'expert', years: 3, projects: 15 },
        { name: 'GraphQL', level: 'intermediate', years: 1, projects: 3 }
      ]
    },
    frontend: {
      title: 'Frontend & UI',
      icon: '🎨',
      description: 'Crafting responsive and interactive user interfaces',
      skills: [
        { name: 'React', level: 'expert', years: 3, projects: 15 },
        { name: 'TypeScript', level: 'advanced', years: 2, projects: 10 },
        { name: 'Tailwind CSS', level: 'expert', years: 2, projects: 12 },
        { name: 'Next.js', level: 'advanced', years: 2, projects: 5 },
        { name: 'Framer Motion', level: 'advanced', years: 1, projects: 8 },
        { name: 'ShadCN UI', level: 'advanced', years: 1, projects: 6 }
      ]
    },
    blockchain: {
      title: 'Blockchain & Web3',
      icon: '⛓️',
      description: 'Decentralized applications and smart contracts',
      skills: [
        { name: 'Solidity', level: 'advanced', years: 2, projects: 4 },
        { name: 'Hardhat', level: 'advanced', years: 2, projects: 4 },
        { name: 'Web3.js / Ethers.js', level: 'advanced', years: 2, projects: 5 },
        { name: 'Smart Contracts', level: 'advanced', years: 2, projects: 4 },
        { name: 'DApp Development', level: 'intermediate', years: 1, projects: 3 }
      ]
    },
    ai: {
      title: 'AI & Machine Learning',
      icon: '🤖',
      description: 'Training models and integrating AI capabilities',
      skills: [
        { name: 'Python', level: 'expert', years: 3, projects: 20 },
        { name: 'TensorFlow', level: 'advanced', years: 2, projects: 6 },
        { name: 'PyTorch', level: 'intermediate', years: 1, projects: 4 },
        { name: 'OpenCV', level: 'advanced', years: 2, projects: 5 },
        { name: 'LLM Integration', level: 'advanced', years: 1, projects: 8 },
        { name: 'Prompt Engineering', level: 'expert', years: 1, projects: 15 }
      ]
    },
    mobile: {
      title: 'Mobile Development',
      icon: '📱',
      description: 'Native Android applications',
      skills: [
        { name: 'Kotlin', level: 'advanced', years: 2, projects: 5 },
        { name: 'Jetpack Compose', level: 'advanced', years: 1, projects: 4 },
        { name: 'Android SDK', level: 'advanced', years: 2, projects: 5 },
        { name: 'Room Database', level: 'intermediate', years: 1, projects: 3 },
        { name: 'Coroutines', level: 'advanced', years: 1, projects: 5 }
      ]
    },
    embedded: {
      title: 'Embedded Systems',
      icon: '🔧',
      description: 'IoT and microcontroller programming',
      skills: [
        { name: 'C/C++', level: 'advanced', years: 2, projects: 6 },
        { name: 'ESP32', level: 'advanced', years: 2, projects: 5 },
        { name: 'IoT Protocols', level: 'intermediate', years: 1, projects: 4 },
        { name: 'Embedded Linux', level: 'intermediate', years: 1, projects: 2 }
      ]
    }
  };

  const getLevelColor = (level) => {
    switch(level) {
      case 'expert': return 'text-terminal-success';
      case 'advanced': return 'text-terminal-accent';
      case 'intermediate': return 'text-terminal-secondary';
      default: return 'text-terminal-text/50';
    }
  };

  const getLevelBars = (level) => {
    switch(level) {
      case 'expert': return 5;
      case 'advanced': return 4;
      case 'intermediate': return 3;
      default: return 2;
    }
  };

  return (
    <section id="skills" className="min-h-screen px-6 py-20 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-terminal-accent text-sm">~/skills</span>
              <div className="h-px flex-1 bg-terminal-accent/20"></div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-terminal-text mb-4">
              cat <span className="text-terminal-accent">tech_stack</span>.json
            </h2>
            <p className="text-terminal-text/70 text-lg max-w-2xl">
              Technologies I've worked with, organized by domain. No progress bars—
              just real experience measured in years and projects shipped.
            </p>
          </div>

          {/* Category Selector */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
            {Object.entries(skillTree).map(([key, category]) => (
              <motion.button
                key={key}
                onClick={() => setActiveCategory(key)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`p-4 rounded-lg border transition-all text-left ${
                  activeCategory === key
                    ? 'bg-terminal-accent text-terminal-bg border-terminal-accent'
                    : 'bg-terminal-bg/40 text-terminal-text/70 border-terminal-accent/20 hover:border-terminal-accent/40'
                }`}
              >
                <div className="text-2xl mb-2">{category.icon}</div>
                <div className="text-sm font-medium">{category.title}</div>
              </motion.button>
            ))}
          </div>

          {/* Active Category Display */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-terminal-bg/40 border border-terminal-accent/20 rounded-lg p-8"
          >
            {/* Category Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-4xl">{skillTree[activeCategory].icon}</span>
                <h3 className="text-3xl font-bold text-terminal-text">
                  {skillTree[activeCategory].title}
                </h3>
              </div>
              <p className="text-terminal-text/60">
                {skillTree[activeCategory].description}
              </p>
            </div>

            {/* Skills List */}
            <div className="grid md:grid-cols-2 gap-6">
              {skillTree[activeCategory].skills.map((skill, idx) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-terminal-bg/60 border border-terminal-accent/10 rounded-lg p-4 hover:border-terminal-accent/30 transition-all"
                >
                  {/* Skill Name and Level */}
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-lg font-medium text-terminal-text mb-1">
                        {skill.name}
                      </h4>
                      <span className={`text-sm font-medium ${getLevelColor(skill.level)}`}>
                        {skill.level}
                      </span>
                    </div>
                    {/* Level Indicator */}
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-8 rounded ${
                            i < getLevelBars(skill.level)
                              ? 'bg-terminal-accent'
                              : 'bg-terminal-accent/10'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex gap-6 text-sm text-terminal-text/60">
                    <div>
                      <span className="text-terminal-accent">{skill.years}</span> years
                    </div>
                    <div>
                      <span className="text-terminal-secondary">{skill.projects}</span> projects
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Additional Tools & Workflow */}
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {/* Tools */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-terminal-bg/40 border border-terminal-accent/20 rounded-lg p-6"
            >
              <h4 className="text-xl font-bold text-terminal-text mb-4 flex items-center gap-2">
                <span className="text-terminal-accent">$</span> Tools & Platforms
              </h4>
              <div className="flex flex-wrap gap-2">
                {['Git', 'GitHub', 'VS Code', 'Linux', 'Docker', 'VPS', 'Kaggle', 
                  'Colab', 'Postman', 'Figma', 'Notion'].map(tool => (
                  <span 
                    key={tool}
                    className="px-3 py-1 bg-terminal-accent/10 text-terminal-accent text-sm rounded border border-terminal-accent/30"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Currently Learning */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-terminal-bg/40 border border-terminal-secondary/20 rounded-lg p-6"
            >
              <h4 className="text-xl font-bold text-terminal-text mb-4 flex items-center gap-2">
                <span className="text-terminal-secondary">⟳</span> Currently Exploring
              </h4>
              <ul className="space-y-2 text-terminal-text/70">
                {[
                  'zk-SNARKs for privacy-preserving systems',
                  'Rust for systems programming',
                  'Advanced system architecture patterns',
                  'WebAssembly for performance-critical apps'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-terminal-secondary mt-1">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
