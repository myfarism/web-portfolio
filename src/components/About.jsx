import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Code, Server, Smartphone, Award } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const expertise = [
    {
      icon: Server,
      title: 'Backend Development',
      description: 'Building scalable RESTful APIs with Node.js, optimizing database queries, and implementing Docker architecture.'
    },
    {
      icon: Smartphone,
      title: 'Android Development',
      description: 'Developing native Android apps using Kotlin and Jetpack Compose with modern architecture patterns.'
    },
    {
      icon: Code,
      title: 'Blockchain Integration',
      description: 'Implementing blockchain technology and cryptographic algorithms for secure e-voting systems.'
    },
    {
      icon: Award,
      title: 'Leadership',
      description: 'Led Informatics Student Association, coordinating events and fostering collaboration between students and faculty.'
    }
  ];

  return (
    <section id="about" className="min-h-screen px-6 py-20 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="font-mono text-terminal-accent mb-2">$ cat about.md</div>
          <h2 className="text-4xl md:text-5xl font-bold text-terminal-text mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-terminal-accent mb-6"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Left - Profile Card with Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="bg-terminal-bg/40 border border-terminal-accent/20 p-6">
              {/* Photo Container */}
              <div className="mb-6">
                <div className="relative w-48 h-48 mx-auto">
                  {/* ASCII Border Effect */}
                  <div className="absolute -inset-2 border-2 border-terminal-accent/40 font-mono text-terminal-accent text-xs">
                    <div className="absolute -top-3 left-2">┌─────────┐</div>
                    <div className="absolute -bottom-3 left-2">└─────────┘</div>
                  </div>
                  
                  {/* Photo */}
                  <img 
                    src="/profile.jpg" 
                    alt="Muhammad Faris Hafizh"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                  />
                  
                  {/* Status Indicator */}
                  <div className="absolute -bottom-2 -right-2 bg-terminal-success w-6 h-6 rounded-full border-4 border-terminal-bg animate-pulse"></div>
                </div>
              </div>

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-terminal-text mb-1">
                  Muhammad Faris Hafizh
                </h3>
                <p className="text-terminal-accent text-sm mb-1">Backend Developer</p>
                <p className="text-terminal-text/60 text-sm">Jakarta, Indonesia 🇮🇩</p>
              </div>

              {/* Quick Stats */}
              <div className="space-y-3 text-sm border-t border-terminal-accent/20 pt-4">
                <div className="flex justify-between">
                  <span className="text-terminal-text/60">Education</span>
                  <span className="text-terminal-text font-medium">S1 Informatics</span>
                </div>
                {/* <div className="flex justify-between">
                  <span className="text-terminal-text/60">GPA</span>
                  <span className="text-terminal-success font-mono">3.56/4.00</span>
                </div> */}
                <div className="flex justify-between">
                  <span className="text-terminal-text/60">University</span>
                  <span className="text-terminal-text font-medium">UPJ</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-terminal-text/60">Status</span>
                  <span className="text-terminal-success font-medium flex items-center gap-1">
                    <div className="w-2 h-2 bg-terminal-success rounded-full animate-pulse"></div>
                    Available
                  </span>
                </div>
              </div>

              {/* Contact Links */}
              <div className="mt-6 pt-4 border-t border-terminal-accent/20 space-y-2 text-sm">
                <a 
                  href="mailto:farishafizh19@gmail.com"
                  className="flex items-center gap-2 text-terminal-text/80 hover:text-terminal-accent transition-colors"
                >
                  <span className="text-terminal-accent">📧</span>
                  <span className="truncate">farishafizh19@gmail.com</span>
                </a>
                <a 
                  href="https://github.com/myfarism"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-terminal-text/80 hover:text-terminal-accent transition-colors"
                >
                  <span className="text-terminal-accent">💻</span>
                  <span>github.com/myfarism</span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/muhammad-faris-hafizh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-terminal-text/80 hover:text-terminal-accent transition-colors"
                >
                  <span className="text-terminal-accent">💼</span>
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right - Bio & Expertise */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Bio */}
            <div className="bg-terminal-bg/40 border border-terminal-accent/20 p-6">
              <div className="font-mono text-terminal-accent text-sm mb-3">// Biography</div>
              <div className="space-y-4 text-terminal-text/80 leading-relaxed">
                <p>
                  I'm an <span className="text-terminal-accent font-semibold">Informatics graduate</span> from 
                  Universitas Pembangunan Jaya with a strong foundation in backend and mobile development.
                </p>
                <p>
                  Currently working as an <span className="text-terminal-accent font-semibold">Internship Developer</span> at 
                  Asa Kreasi Interasia, where I build and optimize RESTful APIs using Node.js, implement scalable 
                  architecture with Docker, and collaborate with cross-functional teams.
                </p>
                <p>
                  I completed the <span className="text-terminal-accent font-semibold">Google-backed Bangkit Academy</span> program, 
                  specializing in Android Development with Kotlin. My capstone project involved building a cat skin 
                  disease detection app using machine learning and image recognition.
                </p>
                <p>
                  Beyond coding, I served as <span className="text-terminal-accent font-semibold">President of HIMAFORKA</span> (Informatics 
                  Student Association), where I coordinated events, workshops, and represented students in faculty meetings.
                </p>
              </div>
            </div>

            {/* Expertise Grid */}
            <div className="grid md:grid-cols-2 gap-4">
              {expertise.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 + idx * 0.1 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-terminal-bg/40 border border-terminal-accent/20 p-4 hover:border-terminal-accent/40 transition-all"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-terminal-accent/10 border border-terminal-accent/30 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-terminal-accent" />
                      </div>
                      <div>
                        <h4 className="text-terminal-text font-semibold mb-1 text-sm">{item.title}</h4>
                        <p className="text-terminal-text/60 text-xs leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-terminal-bg/40 border border-terminal-accent/20 p-6"
        >
          <div className="font-mono text-terminal-accent text-sm mb-6">// Journey Timeline</div>
          <div className="space-y-6">
            {[
              { 
                year: '2026', 
                title: 'Graduated & Working', 
                desc: 'Graduated from UPJ. Currently building APIs at Asa Kreasi Interasia.',
                status: 'current'
              },
              { 
                year: '2025', 
                title: 'Backend Development', 
                desc: 'Started internship at Asa Kreasi Interasia. Built RESTful APIs with Node.js and Docker.',
                status: 'past'
              },
              { 
                year: '2024-2025', 
                title: 'Android & Leadership', 
                desc: 'Bangkit Academy (Android Path). President of HIMAFORKA Student Association.',
                status: 'past'
              },
              { 
                year: '2022', 
                title: 'Started University', 
                desc: 'Began Informatics degree at Universitas Pembangunan Jaya.',
                status: 'past'
              },
              { 
                year: '2019-2022', 
                title: 'Network Engineering', 
                desc: 'SMK Nusantara 1, Network Engineer specialization.',
                status: 'past'
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 1 + idx * 0.1 }}
                className="flex gap-6 items-start group"
              >
                <div className="flex-shrink-0 w-16 text-right">
                  <span className={`font-mono text-sm ${
                    item.status === 'current' 
                      ? 'text-terminal-accent font-bold' 
                      : 'text-terminal-text/40'
                  }`}>
                    {item.year}
                  </span>
                </div>
                <div className={`flex-shrink-0 w-3 h-3 rounded-full mt-1.5 transition-all ${
                  item.status === 'current'
                    ? 'bg-terminal-accent scale-150 animate-pulse'
                    : 'bg-terminal-text/30 group-hover:bg-terminal-accent group-hover:scale-125'
                }`}></div>
                <div className="flex-1 pb-6 border-l border-terminal-accent/10 pl-6 -ml-1.5">
                  <h4 className={`font-semibold mb-1 transition-colors ${
                    item.status === 'current'
                      ? 'text-terminal-accent'
                      : 'text-terminal-text group-hover:text-terminal-accent'
                  }`}>
                    {item.title}
                  </h4>
                  <p className="text-terminal-text/60 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
