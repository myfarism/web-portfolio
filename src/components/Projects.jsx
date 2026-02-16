import { motion } from 'motion/react';
import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 'blockchain-voting',
      name: 'Blockchain E-Voting System',
      category: 'blockchain',
      description: 'Android-based e-voting system implementing blockchain and cryptographic algorithms for data transparency and security.',
      detailedDescription: 'My thesis project implementing blockchain technology and advanced cryptographic algorithms in an Android-based electronic voting system. The system ensures electoral transparency through immutable blockchain records while maintaining voter privacy and security. Built with Kotlin for the Android frontend and integrated with smart contracts for vote recording.',
      tech: ['Kotlin', 'Blockchain', 'Cryptography', 'Android SDK', 'Smart Contracts'],
      year: '2025',
      status: 'development',
      size: 'large',
      features: [
        'Blockchain integration for immutable vote records',
        'Advanced cryptographic algorithms for voter privacy',
        'Real-time vote transparency without compromising anonymity',
        'Secure authentication and authorization system',
        'Audit trail for electoral integrity'
      ],
      challenges: [
        {
          challenge: 'Balancing Transparency and Privacy',
          solution: 'Implemented cryptographic techniques to ensure votes are verifiable without revealing voter identity'
        },
        {
          challenge: 'Mobile Performance with Blockchain',
          solution: 'Optimized blockchain operations and implemented efficient caching mechanisms for smooth Android performance'
        }
      ],
      codeSnippet: `// Vote encryption implementation
class VoteEncryption {
    fun encryptVote(vote: Vote): EncryptedVote {
        val publicKey = keyManager.getPublicKey()
        val encryptedData = cryptoEngine.encrypt(
            data = vote.toByteArray(),
            key = publicKey
        )
        return EncryptedVote(
            data = encryptedData,
            timestamp = System.currentTimeMillis(),
            hash = generateHash(encryptedData)
        )
    }
}`,
      stats: [
        { label: 'Security Level', value: 'High' },
        { label: 'Test Coverage', value: '85%' },
        { label: 'Thesis Grade', value: 'A-' },
        { label: 'Tech Stack', value: '5+' }
      ],
      github: 'https://github.com/myfarism',
      demo: null
    },
    {
      id: 'cat-skin-detection',
      name: 'Cat Skin Disease Detection',
      category: 'mobile',
      description: 'Bangkit Capstone: Android app detecting cat skin diseases using machine learning and image recognition.',
      detailedDescription: 'Collaborative capstone project developed during Bangkit Academy 2024. Worked with Machine Learning and Cloud Computing teams to create an Android application that detects cat skin diseases through image recognition. The app uses TensorFlow Lite for on-device inference, providing instant results without requiring internet connectivity.',
      tech: ['Kotlin', 'Jetpack Compose', 'TensorFlow Lite', 'CameraX', 'Retrofit'],
      year: '2024',
      status: 'production',
      size: 'large',
      features: [
        'Real-time skin disease detection using camera',
        'Offline-first architecture with TensorFlow Lite',
        'Disease information and treatment recommendations',
        'History tracking of scanned cats',
        'Modern UI built with Jetpack Compose'
      ],
      challenges: [
        {
          challenge: 'ML Model Integration',
          solution: 'Optimized TensorFlow Lite model to run efficiently on mid-range Android devices with fast inference time'
        },
        {
          challenge: 'Team Collaboration',
          solution: 'Implemented clear API contracts and used Git workflows to seamlessly integrate ML and CC components'
        }
      ],
      codeSnippet: `// TensorFlow Lite model inference
class DiseaseDetector(context: Context) {
    private val interpreter: Interpreter
    
    fun detectDisease(bitmap: Bitmap): DetectionResult {
        val input = preprocessImage(bitmap)
        val output = Array(1) { FloatArray(NUM_CLASSES) }
        
        interpreter.run(input, output)
        
        return DetectionResult(
            disease = getDiseaseFromOutput(output[0]),
            confidence = output[0].max() ?: 0f,
            recommendations = getRecommendations()
        )
    }
}`,
      stats: [
        { label: 'Accuracy', value: '87%' },
        { label: 'Team Size', value: '6' },
        { label: 'Detection Time', value: '<2s' },
        { label: 'Diseases', value: '5+' }
      ],
      github: 'https://github.com/myfarism',
      demo: null
    },
    {
      id: 'rest-api-asa',
      name: 'Enterprise RESTful APIs',
      category: 'backend',
      description: 'Scalable backend APIs at Asa Kreasi Interasia supporting multiple client applications.',
      detailedDescription: 'Built and optimized production-grade RESTful APIs at Asa Kreasi Interasia using Node.js. Implemented scalable backend architecture with Docker, optimized database queries for faster response times, and collaborated with a frontend team of 5 developers. The APIs support multiple internal tools and client-facing applications with high availability and performance.',
      tech: ['Node.js', 'Express', 'PostgreSQL', 'Docker', 'REST API'],
      year: '2025',
      status: 'production',
      size: 'large',
      features: [
        'RESTful API design following best practices',
        'Database query optimization with indexing strategies',
        'Docker containerization for consistent deployments',
        'API documentation with Swagger/OpenAPI',
        'Error handling and logging middleware'
      ],
      challenges: [
        {
          challenge: 'Database Performance',
          solution: 'Implemented query optimization and proper indexing, reducing response time by 40%'
        },
        {
          challenge: 'Scalability',
          solution: 'Architected stateless API design with Docker for horizontal scaling'
        }
      ],
      codeSnippet: `// Optimized query with indexing
app.get('/api/users/:id/orders', async (req, res) => {
  const { id } = req.params;
  
  // Query optimization with JOIN and indexed fields
  const orders = await db.query(\`
    SELECT o.*, p.name as product_name 
    FROM orders o
    INNER JOIN products p ON o.product_id = p.id
    WHERE o.user_id = $1
    ORDER BY o.created_at DESC
    LIMIT 20
  \`, [id]);
  
  res.json({ data: orders });
});`,
      stats: [
        { label: 'APIs Built', value: '10+' },
        { label: 'Performance', value: '+40%' },
        { label: 'Team Size', value: '5' },
        { label: 'Uptime', value: '99.5%' }
      ],
      github: null,
      demo: null
    },
//     {
//       id: 'learning-platform',
//       name: 'Learning Management System',
//       category: 'fullstack',
//       description: 'Educational platform prototype with course management, assignments, and student tracking.',
//       detailedDescription: 'A learning management system developed as a university project. Features include course creation and management, assignment submission system, student progress tracking, and interactive dashboards for teachers and students. Built with modern web technologies focusing on responsive design and user experience.',
//       tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
//       year: '2024',
//       status: 'development',
//       size: 'medium',
//       features: [
//         'Course creation and management for instructors',
//         'Assignment submission and grading system',
//         'Student progress tracking dashboard',
//         'Real-time notifications',
//         'Responsive design for mobile and desktop'
//       ],
//       codeSnippet: `// Assignment submission endpoint
// router.post('/assignments/:id/submit', 
//   authenticate, 
//   upload.single('file'),
//   async (req, res) => {
//     const submission = await Submission.create({
//       assignmentId: req.params.id,
//       studentId: req.user.id,
//       fileUrl: req.file.path,
//       submittedAt: new Date()
//     });
    
//     await notifyTeacher(submission);
//     res.json({ success: true, submission });
//   }
// );`,
//       stats: [
//         { label: 'Users', value: '50+' },
//         { label: 'Courses', value: '15+' },
//         { label: 'Assignments', value: '100+' },
//         { label: 'Stack', value: 'MERN' }
//       ],
//       github: 'https://github.com/myfarism',
//       demo: null
//     },
//     {
//       id: 'android-expense-tracker',
//       name: 'Personal Finance Tracker',
//       category: 'mobile',
//       description: 'Native Android app for tracking personal expenses with analytics and budget management.',
//       detailedDescription: 'Personal finance tracking application built with Kotlin and Jetpack Compose. Features expense categorization, budget planning, monthly analytics, and data visualization. Implements offline-first architecture using Room database with clean architecture pattern.',
//       tech: ['Kotlin', 'Jetpack Compose', 'Room DB', 'Coroutines', 'Material 3'],
//       year: '2024',
//       status: 'development',
//       size: 'small',
//       features: [
//         'Expense tracking with categories',
//         'Budget planning and alerts',
//         'Monthly and yearly analytics',
//         'Data visualization with charts',
//         'Offline-first with Room database'
//       ],
//       codeSnippet: `// Repository pattern implementation
// class ExpenseRepository(private val dao: ExpenseDao) {
    
//     val allExpenses: Flow<List<Expense>> = dao.getAllExpenses()
    
//     suspend fun addExpense(expense: Expense) {
//         withContext(Dispatchers.IO) {
//             dao.insert(expense)
//         }
//     }
    
//     fun getExpensesByMonth(month: Int): Flow<List<Expense>> {
//         return dao.getExpensesByMonth(month)
//     }
// }`,
//       stats: [
//         { label: 'Architecture', value: 'Clean' },
//         { label: 'UI', value: 'Compose' },
//         { label: 'Categories', value: '10+' },
//         { label: 'Charts', value: '5+' }
//       ],
//       github: 'https://github.com/myfarism',
//       demo: null
//     }
  ];

  const getGridClass = (size) => {
    if (size === 'large') return 'md:col-span-2';
    return '';
  };

  return (
    <section id="projects" className="min-h-screen px-6 py-20 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="font-mono text-terminal-accent mb-2">$ ls projects/</div>
          <h2 className="text-4xl md:text-5xl font-bold text-terminal-text mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-terminal-accent mb-6"></div>
          {/* <p className="text-terminal-text/70 text-lg">
            A selection of projects from blockchain voting systems to mobile applications
          </p> */}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className={getGridClass(project.size)}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div 
                onClick={() => setSelectedProject(project)}
                className="h-full bg-terminal-bg/40 border border-terminal-accent/20 p-6 hover:border-terminal-accent/40 transition-all group cursor-pointer"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="font-mono text-terminal-accent text-xs mb-2">
                      ./{project.category}/
                    </div>
                    <h3 className="text-xl font-bold text-terminal-text group-hover:text-terminal-accent transition-colors mb-2">
                      {project.name}
                    </h3>
                  </div>
                  <div className="flex gap-2">
                    <span className={`px-2 py-1 text-xs font-mono border ${
                      project.status === 'production' 
                        ? 'text-terminal-success border-terminal-success/30 bg-terminal-success/10'
                        : 'text-terminal-accent border-terminal-accent/30 bg-terminal-accent/10'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-terminal-text/70 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-2 py-1 bg-terminal-bg border border-terminal-accent/20 text-terminal-text/80 text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-terminal-accent/20">
                  <span className="text-terminal-text/60 text-xs font-mono">
                    {project.year}
                  </span>
                  <div className="flex gap-3">
                    {project.github && (
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-terminal-text/60 hover:text-terminal-accent transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.demo && (
                      <a 
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-terminal-text/60 hover:text-terminal-accent transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    <span className="text-terminal-accent text-xs">
                      Click to view →
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/myfarism"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-terminal-accent text-terminal-accent hover:bg-terminal-accent hover:text-terminal-bg transition-all font-mono text-sm"
          >
            <Github className="w-4 h-4" />
            View More on GitHub
          </a>
        </motion.div>
      </div>

      {/* Project Modal */}
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
