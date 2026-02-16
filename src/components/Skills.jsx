import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Server, Code, Smartphone, Database, Package, GitBranch } from 'lucide-react';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skillCategories = [
    {
      name: 'Backend Development',
      icon: Server,
      color: 'accent',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express', level: 85 },
        { name: 'REST API', level: 90 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'MongoDB', level: 70 },
      ]
    },
    {
      name: 'Android Development',
      icon: Smartphone,
      color: 'success',
      skills: [
        { name: 'Kotlin', level: 85 },
        { name: 'Jetpack Compose', level: 75 },
        { name: 'Android SDK', level: 80 },
        { name: 'Room DB', level: 80 },
        { name: 'Coroutines', level: 75 },
      ]
    },
    {
      name: 'Programming Languages',
      icon: Code,
      color: 'secondary',
      skills: [
        { name: 'JavaScript', level: 85 },
        { name: 'Kotlin', level: 85 },
        { name: 'Python', level: 85 },
        { name: 'C++', level: 70 },
        { name: 'SQL', level: 80 },
      ]
    },
    {
      name: 'Tools & Technologies',
      icon: Package,
      color: 'accent',
      skills: [
        { name: 'Docker', level: 80 },
        { name: 'Git', level: 90 },
        { name: 'Figma', level: 70 },
        { name: 'Postman', level: 85 },
        { name: 'Linux', level: 75 },
      ]
    },
    {
      name: 'Frontend & UI',
      icon: Code,
      color: 'secondary',
      skills: [
        { name: 'React', level: 70 },
        { name: 'Tailwind CSS', level: 70 },
        { name: 'Material Design', level: 70 },
        { name: 'Responsive Design', level: 65 },
      ]
    },
    {
      name: 'Database & Cloud',
      icon: Database,
      color: 'success',
      skills: [
        { name: 'PostgreSQL', level: 75 },
        { name: 'MongoDB', level: 70 },
        { name: 'Firebase', level: 65 },
        { name: 'Database Design', level: 80 },
      ]
    },
  ];

  const softSkills = [
    'Adaptability',
    'Problem Solving',
    'Effective Communication',
    'Leadership',
    'Creativity',
    'Team Collaboration',
    'Time Management',
    'Project Management'
  ];

  const certifications = [
    {
      name: 'English Score 416 - B2 Upper Intermediate',
      issuer: 'British Council',
      year: '2025'
    },
    {
      name: 'Bangkit Academy - Android Path Graduate',
      issuer: 'Google, GoTo, Traveloka',
      year: '2024'
    },
    {
      name: 'Android Application Development - Intermediate',
      issuer: 'Dicoding Indonesia',
      year: '2024'
    },
    {
      name: 'Building Android Apps with Jetpack Compose',
      issuer: 'Dicoding Indonesia',
      year: '2024'
    }
  ];

  const getColorClass = (color) => {
    const colors = {
      accent: 'text-terminal-accent',
      success: 'text-terminal-success',
      secondary: 'text-terminal-secondary'
    };
    return colors[color] || colors.accent;
  };

  const getBarColorClass = (color) => {
    const colors = {
      accent: 'bg-terminal-accent',
      success: 'bg-terminal-success',
      secondary: 'bg-terminal-secondary'
    };
    return colors[color] || colors.accent;
  };

  return (
    <section id="skills" className="min-h-screen px-6 py-20 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="font-mono text-terminal-accent mb-2">$ cat skills.json</div>
          <h2 className="text-4xl md:text-5xl font-bold text-terminal-text mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-terminal-accent mb-6"></div>
        </motion.div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-terminal-bg/40 border border-terminal-accent/20 p-6 hover:border-terminal-accent/40 transition-all"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 border border-terminal-accent/30 flex items-center justify-center ${getColorClass(category.color)}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-terminal-text">{category.name}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, i) => (
                    <div key={i}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-terminal-text/90 text-sm">{skill.name}</span>
                        <span className="text-terminal-text/60 text-xs font-mono">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-terminal-bg/60 border border-terminal-accent/10 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: idx * 0.1 + i * 0.05 }}
                          className={`h-full ${getBarColorClass(category.color)}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-terminal-bg/40 border border-terminal-accent/20 p-6 mb-12"
        >
          <h3 className="font-bold text-terminal-text mb-4 flex items-center gap-2">
            <GitBranch className="w-5 h-5 text-terminal-accent" />
            Soft Skills
          </h3>
          <div className="flex flex-wrap gap-3">
            {softSkills.map((skill, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 + idx * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-2 bg-terminal-bg border border-terminal-accent/30 text-terminal-text/80 text-sm hover:border-terminal-accent hover:text-terminal-accent transition-all cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-terminal-bg/40 border border-terminal-accent/20 p-6"
        >
          <h3 className="font-bold text-terminal-text mb-4">
            🏆 Certifications & Achievements
          </h3>
          <div className="space-y-4">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 1 + idx * 0.1 }}
                className="flex items-start gap-4 p-4 bg-terminal-bg/60 border border-terminal-accent/10 hover:border-terminal-accent/30 transition-all"
              >
                <div className="text-terminal-accent text-2xl">✓</div>
                <div className="flex-1">
                  <h4 className="text-terminal-text font-semibold mb-1">{cert.name}</h4>
                  <div className="flex items-center gap-2 text-sm text-terminal-text/60">
                    <span>{cert.issuer}</span>
                    <span>•</span>
                    <span>{cert.year}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
