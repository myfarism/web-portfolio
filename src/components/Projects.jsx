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
    {
      id: 'tanyalangit',
      name: 'TanyaLangit',
      category: 'fullstack',
      description: 'Hyperlocal crowdsourced weather reporting app — real-time weather conditions reported by people actually at the location.',
      detailedDescription: 'Built a full-stack hyperlocal weather app where users anonymously report and request real-time weather conditions at specific map locations. The Go (Fiber) backend handles WebSocket broadcasting to nearby clients, geospatial queries via PostGIS, rate limiting, and a background cleanup job for expired reports. The Next.js frontend features an interactive Leaflet map, confidence-based clustering, animated markers, rain overlay effects, a shareable "Request Info" link optimized for WhatsApp sharing, and a warm local-themed UI with dark mode support.',
      tech: ['Go', 'Fiber', 'PostgreSQL', 'PostGIS', 'WebSocket', 'Next.js', 'TypeScript', 'React Leaflet', 'TailwindCSS', 'Framer Motion', 'Railway', 'Vercel'],
      year: '2026',
      status: 'production',
      size: 'large',
      features: [
        'Anonymous real-time weather reporting with 30-minute TTL per report',
        'WebSocket broadcast — new reports pushed only to clients within a configurable radius',
        'Geospatial clustering with confidence scoring based on report count and on-site status',
        'PostGIS-powered ST_DWithin radius queries with GIST index for performance',
        'Location request feature with shareable WhatsApp-optimized link',
        'Animated markers (pop, ripple, float) and rain overlay effect via Framer Motion',
        'IP-based rate limiting and coordinate validation (bounded to Indonesia)',
        'Background cleanup job for expired reports and requests',
        'Warm local-themed UI (Plus Jakarta Sans, earth tone palette) with dark mode'
      ],
      challenges: [
        {
          challenge: 'Crowdsourced data trust and accuracy',
          solution: 'Implemented proximity-based clustering (500m radius) with confidence scoring — markers scale with report count, on-site reporters get visual priority, and reports auto-expire after 30 minutes to keep data fresh'
        },
        {
          challenge: 'WebSocket selective broadcast at scale',
          solution: 'Built a custom Hub with RWMutex-protected client registry, broadcasting new reports only to WebSocket clients within a radius using Haversine distance calculation — avoiding global broadcast overhead'
        },
        {
          challenge: 'PostGIS not available on standard cloud PostgreSQL',
          solution: 'Migrated database to Supabase which ships with PostGIS pre-enabled, while keeping the Go backend on Railway — decoupling compute and storage for flexibility'
        },
        {
          challenge: 'Share link UX for non-technical users',
          solution: 'Designed a deep-link flow: POST /api/requests returns an ID, frontend generates /?request={id}, and recipients who open the link are auto-focused to the relevant map area with the report form pre-opened'
        }
      ],
      codeSnippet: `// Geospatial query — fetch active reports within radius using PostGIS
  func GetNearbyReports(c *fiber.Ctx) error {
    lat    := c.QueryFloat("lat", 0)
    lng    := c.QueryFloat("lng", 0)
    radius := c.QueryFloat("radius", 5)

    if radius > 20 { radius = 20 }

    reports := []models.Report{}
    err := config.DB.Select(&reports, \`
      SELECT id, condition, lat, lng, is_onsite, created_at, expires_at
      FROM reports
      WHERE expires_at > NOW()
        AND ST_DWithin(
            location,
            ST_SetSRID(ST_MakePoint($2, $1), 4326)::geography,
            $3 * 1000
        )
      ORDER BY created_at DESC
      LIMIT 200
    \`, lat, lng, radius)

    if err != nil {
      return c.Status(500).JSON(fiber.Map{"error": err.Error()})
    }
    return c.JSON(reports)
  }`,
      stats: [
        { label: 'API Endpoints', value: '6' },
        { label: 'Report TTL', value: '30 min' },
        { label: 'Broadcast Type', value: 'Geo-selective' },
        { label: 'DB Extension', value: 'PostGIS' }
      ],
      github: 'https://github.com/myfarism/tanyalangit',
      demo: 'https://tanyalangit.vercel.app'
    },
    {
      "id": "lamarr",
      "name": "Lamarr",
      "category": "fullstack",
      "description": "AI-powered job application tracker — parse job postings, calculate CV match scores, generate follow-up emails, and track your entire job search in a responsive Kanban board.",
      "detailedDescription": "Built a full-stack job application tracker with AI intelligence. The Go backend handles scraping job URLs with Colly, AI parsing via Groq (llama-3.3-70b), semantic CV matching with HuggingFace embeddings (pgvector), Asynq-powered deadline/follow-up reminders, and Firebase Auth. The Next.js frontend features a responsive Kanban board (desktop + mobile accordion), bulk actions, smart analytics with Recharts, notification bell, and a dark/light theme toggle. Every feature is production-ready with error boundaries, skeleton loaders, and proper TypeScript types.",
      "tech": [
        "Go", "Gin", "GORM", "PostgreSQL", "pgvector", "Asynq", "Redis", 
        "Next.js 15", "TypeScript", "TailwindCSS", "Shadcn/ui", 
        "Firebase Auth", "Groq API", "HuggingFace", "Railway", "Vercel"
      ],
      "year": "2026",
      "status": "production",
      "size": "large",
      "features": [
        "Responsive Kanban board dengan drag & drop (desktop) + accordion list (mobile)",
        "AI Job Parser — paste job URL, Colly scrape + Groq ekstrak structured data otomatis",
        "CV Match Score — semantic similarity menggunakan sentence-transformers + cosine similarity",
        "Gap Analyzer — Groq analisis kekuatan, kekurangan, dan peluang lolos realistis",
        "Follow-up Email Generator — draft kontekstual berdasarkan posisi dan hari sejak melamar",
        "Deadline & Follow-up Reminders — Asynq scheduler + notification bell dengan unread count",
        "Bulk actions — select multiple jobs untuk mass move/delete",
        "Smart Analytics — response rate, avg reply time, platform breakdown, ghosted graveyard",
        "Production-ready — error boundaries, skeleton loaders, empty states, dark/light mode"
      ],
      "challenges": [
        {
          "challenge": "Firebase Auth dengan email verification yang seamless",
          "solution": "Custom flow: register → auto-sign-out → verify screen → RouteGuard block unverified users → toast dengan link langsung ke settings untuk CV upload"
        },
        {
          "challenge": "Kanban board responsive yang benar di mobile tanpa horizontal scroll",
          "solution": "Desktop: fixed-height flex container dengan per-kolom scroll. Mobile: accordion list per status dengan sticky header. DnD kit tetap jalan di desktop."
        },
        {
          "challenge": "AI parsing yang robust terhadap HTML noisy dari job sites berbeda",
          "solution": "Colly scraping + Groq LLM parsing dengan structured JSON output. Retry logic untuk HuggingFace model cold start + dual format response handler."
        },
        {
          "challenge": "Monorepo deployment — Go backend + Next.js frontend",
          "solution": "Railway untuk Go (nixpacks + custom Procfile), Vercel untuk Next.js (root directory apps/web). Firebase credentials via base64 env var, CORS production-ready."
        }
      ],
      "codeSnippet": "// AI Job Parser — Colly scrape + Groq structured extraction\nconst ScrapeJob = async (url: string) => {\n  // Colly scraping\n  const scraped = await scrapeJob(url)\n  \n  // Groq LLM parsing dengan exact JSON schema\n  const prompt = `Parse dengan format JSON ini:\n  {\n    \"title\": \"job title\",\n    \"company\": \"company name\",\n    \"description\": \"summary (max 500 chars)\",\n    \"requirements\": \"comma-separated list\",\n    \"salary_min\": number or null,\n    \"salary_max\": number or null\n  }`\n  \n  const response = await groq.chat(prompt, scraped.description)\n  \n  // Robust JSON parsing dengan markdown cleanup\n  let cleaned = response.replace(/```(?:json)?/g, '').trim()\n  const parsed = JSON.parse(cleaned)\n  \n  return { ...scraped, ...parsed }\n}\n\n// Embedding CV match score\nconst matchScore = async (cvText: string, requirements: string) => {\n  const cvEmbedding = await hf.embed(cvText)\n  const jdEmbedding = await hf.embed(requirements)\n  \n  return cosineSimilarity(cvEmbedding, jdEmbedding)\n}",
      "stats": [
        { "label": "API Endpoints", "value": "12" },
        { "label": "AI Models", "value": "2 (Groq + HuggingFace)" },
        { "label": "Kanban Columns", "value": "6" }
      ],
      "github": "https://github.com/myfarism/lamarr",
      "demo": "https://lamarr.vercel.app"
    },
    {
      id: 'finance-tracker',
      name: 'Finance Tracker',
      category: 'fullstack',
      description: 'Personal finance management app with expense tracking, budgeting, and OTP-based authentication.',
      detailedDescription: 'Built a full-stack personal finance tracker with a Go (Gin) backend and React frontend. Implemented JWT-based authentication with OTP email verification via Resend API, RESTful API architecture, and PostgreSQL database hosted on Railway. The frontend is deployed on Vercel with proper SPA routing, while the backend runs in a containerized Railway environment with automated deployments from GitHub.',
      tech: ['Go', 'Gin', 'PostgreSQL', 'React', 'TypeScript', 'TailwindCSS', 'Railway', 'Vercel', 'Resend API', 'JWT'],
      year: '2026',
      status: 'production',
      size: 'medium',
      features: [
        'JWT authentication with OTP email verification',
        'RESTful API with Gin framework following best practices',
        'PostgreSQL database with GORM/raw query optimization',
        'CORS configuration for cross-origin frontend-backend communication',
        'Resend API integration replacing SMTP for cloud-compatible email delivery',
        'SPA routing on Vercel with vercel.json rewrite rules',
        'Environment-based configuration for dev and production'
      ],
      challenges: [
        {
          challenge: 'SMTP Blocked on Railway',
          solution: 'Replaced Gmail SMTP with Resend HTTP API, eliminating port 587 i/o timeout errors on Railway cloud environment'
        },
        {
          challenge: 'SPA 404 on Page Refresh',
          solution: 'Added vercel.json rewrite rule to redirect all routes to index.html, enabling client-side routing on Vercel'
        },
        {
          challenge: 'CORS on Production',
          solution: 'Configured Gin CORS middleware with explicit allowed origins, headers, and methods for secure cross-domain requests'
        }
      ],
      codeSnippet: `// OTP-based registration with Resend email delivery
    func (s *authService) Register(req dto.RegisterRequest) error {
      // Check existing user
      _, err := s.userRepo.FindByEmail(req.Email)
      if err == nil {
        return errors.New("email already registered")
      }

      // Hash password & save user
      hashed, _ := bcrypt.GenerateFromPassword([]byte(req.Password), 12)
      user := &model.User{
        Name:     req.Name,
        Email:    req.Email,
        Password: string(hashed),
      }
      s.userRepo.Create(user)

      // Send OTP via Resend API
      return s.sendOTP(req.Name, req.Email)
    }`,
      stats: [
        { label: 'API Endpoints', value: '10+' },
        { label: 'Auth Method', value: 'OTP + JWT' },
        { label: 'Deploy Time', value: '< 2min' },
        { label: 'Uptime', value: '99.9%' }
      ],
      github: 'https://github.com/myfarism/finance-tracker',
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
