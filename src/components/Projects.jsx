import { motion } from 'motion/react';
import { useState } from 'react';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 'blockchain-voting',
      name: 'Decentralized Voting System',
      category: 'blockchain',
      description: 'Blockchain-based e-voting platform with smart contracts, ensuring transparency and immutability in electoral processes.',
      tech: ['Solidity', 'Hardhat', 'React', 'Web3.js', 'Ethers.js'],
      stars: 47,
      forks: 12,
      status: 'production',
      highlights: [
        'Zero-knowledge proof integration for voter privacy',
        'Gas-optimized smart contracts',
        'Real-time vote tallying with cryptographic verification'
      ],
      demoUrl: '#',
      githubUrl: '#',
      size: 'large' // Takes more space
    },
    {
      id: 'erp-system',
      name: 'Full-Stack ERP Platform',
      category: 'fullstack',
      description: 'Enterprise resource planning system handling inventory, finance, and HR modules with role-based access control.',
      tech: ['Express.js', 'PostgreSQL', 'Prisma', 'React', 'Docker'],
      stars: 23,
      forks: 5,
      status: 'production',
      highlights: [
        'Multi-tenant architecture',
        'Real-time data sync across modules',
        'Automated reporting and analytics'
      ],
      demoUrl: '#',
      githubUrl: '#',
      size: 'large'
    },
    {
      id: 'esp32-iot',
      name: 'ESP32 IoT Controller',
      category: 'embedded',
      description: 'Custom firmware for ESP32 microcontrollers with sensor integration and wireless communication.',
      tech: ['C/C++', 'ESP-IDF', 'MQTT', 'WebSocket'],
      stars: 31,
      forks: 8,
      status: 'active',
      highlights: [
        'Low-latency sensor data processing',
        'OTA firmware updates',
        'Battery optimization algorithms'
      ],
      githubUrl: '#',
      size: 'medium'
    },
    {
      id: 'face-detection-ml',
      name: 'Real-time Face Detection',
      category: 'ai',
      description: 'Computer vision model for face detection and recognition with optimized inference pipeline.',
      tech: ['Python', 'TensorFlow', 'OpenCV', 'FastAPI'],
      stars: 56,
      forks: 19,
      status: 'active',
      highlights: [
        'Custom CNN architecture',
        '98.7% accuracy on validation set',
        'Edge device deployment optimization'
      ],
      demoUrl: '#',
      githubUrl: '#',
      size: 'medium'
    },
    {
      id: 'kotlin-compose-app',
      name: 'Android Expense Tracker',
      category: 'mobile',
      description: 'Native Android app for expense tracking with Material You design and local database.',
      tech: ['Kotlin', 'Jetpack Compose', 'Room', 'Coroutines'],
      stars: 18,
      forks: 4,
      status: 'maintenance',
      highlights: [
        'Offline-first architecture',
        'Dynamic theming',
        'Data export to CSV/JSON'
      ],
      githubUrl: '#',
      size: 'small'
    },
    {
      id: 'prompt-engineering-tool',
      name: 'AI Prompt Optimizer',
      category: 'ai',
      description: 'Tool for crafting and testing AI prompts across multiple LLM platforms with version control.',
      tech: ['React', 'Node.js', 'OpenAI API', 'Anthropic API'],
      stars: 89,
      forks: 23,
      status: 'active',
      highlights: [
        'Multi-model comparison',
        'Prompt template library',
        'A/B testing framework'
      ],
      demoUrl: '#',
      githubUrl: '#',
      size: 'medium'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', icon: '*' },
    { id: 'blockchain', label: 'Blockchain', icon: '⛓' },
    { id: 'fullstack', label: 'Full-Stack', icon: '⚡' },
    { id: 'ai', label: 'AI/ML', icon: '🤖' },
    { id: 'embedded', label: 'Embedded', icon: '🔧' },
    { id: 'mobile', label: 'Mobile', icon: '📱' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const getStatusColor = (status) => {
    switch(status) {
      case 'production': return 'text-terminal-success';
      case 'active': return 'text-terminal-accent';
      case 'maintenance': return 'text-terminal-secondary';
      default: return 'text-terminal-text/50';
    }
  };

  const getGridClass = (size) => {
    switch(size) {
      case 'large': return 'md:col-span-2';
      case 'medium': return 'md:col-span-1';
      case 'small': return 'md:col-span-1';
      default: return 'md:col-span-1';
    }
  };

  return (
    <section id="projects" className="min-h-screen px-6 py-20 relative">
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
              <span className="text-terminal-accent text-sm">~/projects</span>
              <div className="h-px flex-1 bg-terminal-accent/20"></div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-terminal-text mb-4">
              git show --<span className="text-terminal-accent">projects</span>
            </h2>
            <p className="text-terminal-text/70 text-lg max-w-2xl">
              A curated collection of things I've built, broken, fixed, and shipped. 
              Each project taught me something valuable.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-4 py-2 rounded border transition-all ${
                  filter === cat.id
                    ? 'bg-terminal-accent text-terminal-bg border-terminal-accent'
                    : 'bg-terminal-bg/40 text-terminal-text/70 border-terminal-accent/20 hover:border-terminal-accent/40'
                }`}
              >
                <span className="mr-2">{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={getGridClass(project.size)}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="h-full bg-terminal-bg/40 border border-terminal-accent/20 rounded-lg p-6 hover:border-terminal-accent/40 transition-all group">
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-terminal-text group-hover:text-terminal-accent transition-colors">
                          {project.name}
                        </h3>
                        <span className={`text-xs ${getStatusColor(project.status)}`}>
                          ● {project.status}
                        </span>
                      </div>
                      <p className="text-terminal-text/60 text-sm mb-4">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Highlights */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: hoveredProject === project.id ? 'auto' : 0,
                      opacity: hoveredProject === project.id ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden mb-4"
                  >
                    <ul className="space-y-2 text-sm text-terminal-text/70">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-terminal-accent mt-1">▹</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map(tech => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-terminal-accent/10 text-terminal-accent text-xs rounded border border-terminal-accent/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-terminal-accent/20">
                    <div className="flex items-center gap-4 text-sm text-terminal-text/50">
                      <span className="flex items-center gap-1">
                        <span className="text-terminal-accent">★</span>
                        {project.stars}
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="text-terminal-secondary">⑂</span>
                        {project.forks}
                      </span>
                    </div>
                    <div className="flex gap-3">
                      {project.demoUrl && (
                        <a 
                          href={project.demoUrl}
                          className="text-terminal-accent hover:text-terminal-accent/80 text-sm transition-colors"
                        >
                          Live Demo →
                        </a>
                      )}
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl}
                          className="text-terminal-secondary hover:text-terminal-secondary/80 text-sm transition-colors"
                        >
                          Code →
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-terminal-text/60 mb-4">
              Want to see more? Check out my GitHub for additional projects and contributions.
            </p>
            <a 
              href="https://github.com/yourusername" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-terminal-accent/10 text-terminal-accent border border-terminal-accent/30 rounded hover:bg-terminal-accent/20 transition-colors"
            >
              View GitHub Profile
              <span>→</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
