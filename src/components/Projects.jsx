import { motion } from "motion/react";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: "blockchain-voting",
      name: "Blockchain Voting System",
      category: "blockchain",
      description:
        "Decentralized e-voting platform with smart contracts ensuring transparency and immutability.",
      detailedDescription:
        "A comprehensive blockchain-based voting system built on Ethereum with real-time vote tallying and cryptographic verification.",
      tech: ["Solidity", "Hardhat", "React", "Web3.js", "Ethers.js"],
      stars: 47,
      forks: 12,
      status: "production",
      year: "2024",
      features: [
        "Zero-knowledge proof integration for voter privacy",
        "Gas-optimized smart contracts",
        "Real-time vote tallying",
        "Immutable audit trail",
      ],
      challenges: [
        {
          challenge: "Voter Privacy vs Transparency",
          solution:
            "Implemented zk-SNARKs to prove vote validity without revealing voter identity",
        },
      ],
      stats: [
        { label: "Smart Contracts", value: "5" },
        { label: "Test Coverage", value: "98%" },
        { label: "Users", value: "2K+" },
      ],
      github: "#",
      demo: "#",
      size: "large",
    },

    {
      id: "erp-system",
      name: "Full-Stack ERP Platform",
      category: "fullstack",
      description:
        "ERP system handling inventory, finance, and HR modules.",
      tech: ["Express.js", "PostgreSQL", "Prisma", "React", "Docker"],
      stars: 23,
      forks: 5,
      status: "production",
      size: "medium",
    },
  ];

  const getGridClass = (size) => {
    switch (size) {
      case "large":
        return "md:col-span-2";
      case "medium":
      case "small":
      default:
        return "md:col-span-1";
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "production":
        return "text-terminal-success";
      case "active":
        return "text-terminal-accent";
      case "maintenance":
        return "text-terminal-secondary";
      default:
        return "text-terminal-text/50";
    }
  };

  return (
    <section id="projects" className="min-h-screen px-6 py-20 relative">
      <div className="max-w-7xl mx-auto">
        
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
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className={getGridClass(project.size)}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => setSelectedProject(project)}
            >
              <div className="h-full bg-terminal-bg/40 border border-terminal-accent/20 rounded-lg p-6 hover:border-terminal-accent/40 transition-all group cursor-pointer">
                
                {/* Header */}
                <div className="flex items-center justify-between mb-2">
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

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech?.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-terminal-accent/10 text-terminal-accent text-xs rounded border border-terminal-accent/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-terminal-accent/20 text-sm text-terminal-text/50">
                  <span>★ {project.stars ?? "-"}</span>
                  <span>⑂ {project.forks ?? "-"}</span>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
