/**
 * Tutedude Dynamic Course Catalog & CMS Data Store
 * Powers both the Homepage discovery engine and the Universal Course Template.
 * Fully configurable by Admin/CMS without altering UI markup.
 */

const COURSES_DATA = [
  {
    id: "mern",
    title: "Full Stack MERN Development",
    category: "Development",
    subtitle: "Master React, Node.js, Express & MongoDB by building 5 production-grade web applications.",
    description: "Go from zero to building full-stack web applications with modern industry practices. Learn frontend state management with React 19, scalable REST APIs with Node/Express, database architecture with MongoDB, real-time WebSockets, and CI/CD cloud deployment.",
    badge: "Most Popular",
    price: 699,
    originalPrice: 3499,
    discountPercent: 80,
    rating: 4.88,
    reviewCount: 4230,
    learners: "18,400+",
    durationHours: 64,
    moduleCount: 8,
    lessonCount: 46,
    projectCount: 5,
    assignmentCount: 12,
    difficulty: "Beginner to Advanced",
    language: "English & Hinglish",
    refundPeriod: "90 Days",
    refundAmount: "₹699 (100% Cashback)",
    completionRequirements: {
      minLessonProgress: "100% of recorded lessons watched",
      assignmentsPassed: "10 of 10 practical assignments scored ≥ 80%",
      capstoneProjects: "2 verified production capstone projects deployed live",
      challengeDuration: "Must satisfy criteria within 90 days of enrollment",
      payoutMethod: "Direct UPI or Bank Account NEFT within 48 hours of verification",
      postRefundAccess: "Retain 100% lifetime access to course videos & updates"
    },
    learningOutcomes: [
      "Architect and build full-stack web applications from scratch with React & Node.js",
      "Design flexible NoSQL database schemas with MongoDB & Mongoose ODM",
      "Implement secure JWT authentication, OAuth2 login, role-based access control (RBAC)",
      "Build real-time features using WebSockets (Socket.io) for live messaging & notifications",
      "Integrate Razorpay/Stripe payment gateways with webhook security",
      "Deploy scalable frontend to Vercel and backend microservices to AWS EC2 & Docker",
      "Optimize web performance, Core Web Vitals, and client-side caching",
      "Create a recruiter-ready GitHub portfolio with 5 deployed live projects"
    ],
    endOfCourseCards: [
      {
        icon: "rocket_launch",
        title: "Deploy 5 Full-Stack Apps",
        description: "Deploy production-grade applications that solve real-world problems on your own custom domain."
      },
      {
        icon: "verified_user",
        title: "Enterprise Auth & Payments",
        description: "Implement JWT, refresh tokens, Google OAuth, and production Razorpay payment flows."
      },
      {
        icon: "forum",
        title: "Real-Time Architecture",
        description: "Master event-driven programming with WebSockets for collaborative multi-user applications."
      },
      {
        icon: "work_outline",
        title: "Pass Tech Interviews",
        description: "Practice real coding challenges asked in top product startup and MNC hiring rounds."
      }
    ],
    modules: [
      {
        id: "mod-1",
        number: "01",
        title: "Modern JavaScript (ES6+) & TypeScript Foundations",
        duration: "7 Hours",
        lessonsCount: 6,
        lessons: [
          { title: "Execution Context, Event Loop & Closures", duration: "45 min", isPreview: true, type: "video" },
          { title: "Promises, Async/Await & Error Handling in Production", duration: "50 min", isPreview: true, type: "video" },
          { title: "ES6+ Destructuring, Modules & Immutability Patterns", duration: "40 min", isPreview: false, type: "video" },
          { title: "TypeScript Core: Types, Interfaces & Generics", duration: "55 min", isPreview: false, type: "video" },
          { title: "Practice: Asynchronous Data Pipeline in JS", duration: "1 Hour", isPreview: false, type: "assignment" },
          { title: "Module 1 Mastery Quiz & Coding Challenge", duration: "30 min", isPreview: false, type: "quiz" }
        ]
      },
      {
        id: "mod-2",
        number: "02",
        title: "Frontend Engineering with React 19 & Tailwind CSS",
        duration: "11 Hours",
        lessonsCount: 8,
        lessons: [
          { title: "Component Driven Architecture & Virtual DOM Deep Dive", duration: "55 min", isPreview: true, type: "video" },
          { title: "Hooks Mastery: useState, useEffect, useMemo, useCallback", duration: "1 Hour 10 min", isPreview: false, type: "video" },
          { title: "Custom Hooks & Clean Code Architecture", duration: "48 min", isPreview: false, type: "video" },
          { title: "Global State Management with Zustand & React Query", duration: "1 Hour 15 min", isPreview: false, type: "video" },
          { title: "Interactive UI with Tailwind CSS & Framer Motion", duration: "50 min", isPreview: false, type: "video" },
          { title: "Client Routing with React Router 7", duration: "45 min", isPreview: false, type: "video" },
          { title: "Assignment: Responsive SaaS Dashboard UI with Data Filtering", duration: "2 Hours", isPreview: false, type: "assignment" },
          { title: "Capstone Milestone 1: E-Commerce Storefront", duration: "3 Hours", isPreview: false, type: "project" }
        ]
      },
      {
        id: "mod-3",
        number: "03",
        title: "Backend Architecture with Node.js & Express",
        duration: "10 Hours",
        lessonsCount: 6,
        lessons: [
          { title: "Node.js Architecture: Libuv, Event Loop & Buffer Streams", duration: "50 min", isPreview: false, type: "video" },
          { title: "RESTful API Design & MVC Architecture in Express", duration: "1 Hour", isPreview: false, type: "video" },
          { title: "Middleware Engineering: Logging, CORS, Rate Limiting", duration: "45 min", isPreview: false, type: "video" },
          { title: "Error Handling & Centralized Response Wrappers", duration: "40 min", isPreview: false, type: "video" },
          { title: "Assignment: REST API with Validation & File Uploads (Multer)", duration: "2 Hours", isPreview: false, type: "assignment" },
          { title: "Unit Testing Express Endpoints with Supertest & Jest", duration: "50 min", isPreview: false, type: "video" }
        ]
      },
      {
        id: "mod-4",
        number: "04",
        title: "Database Engineering with MongoDB & Mongoose",
        duration: "8 Hours",
        lessonsCount: 5,
        lessons: [
          { title: "Document Database Concepts & Relational Comparisons", duration: "40 min", isPreview: false, type: "video" },
          { title: "Mongoose Schemas, Validations & Virtuals", duration: "50 min", isPreview: false, type: "video" },
          { title: "Complex Aggregation Pipelines & Analytics Queries", duration: "1 Hour 15 min", isPreview: false, type: "video" },
          { title: "Indexing, Performance Tuning & Query Optimization", duration: "45 min", isPreview: false, type: "video" },
          { title: "Assignment: High-Performance Database Modeling & Indexing Challenge", duration: "2 Hours", isPreview: false, type: "assignment" }
        ]
      },
      {
        id: "mod-5",
        number: "05",
        title: "Authentication, Security & Payment Integrations",
        duration: "9 Hours",
        lessonsCount: 6,
        lessons: [
          { title: "Password Hashing with Bcrypt & Salt Rounds", duration: "35 min", isPreview: false, type: "video" },
          { title: "Stateless JWT Auth, Refresh Tokens & HttpOnly Cookies", duration: "1 Hour", isPreview: false, type: "video" },
          { title: "Role-Based Access Control (RBAC) & Route Protection", duration: "45 min", isPreview: false, type: "video" },
          { title: "Razorpay Payment Gateway Integration with Webhooks", duration: "1 Hour 10 min", isPreview: false, type: "video" },
          { title: "Web Security: XSS, CSRF, Helmet & SQL/NoSQL Injection Defenses", duration: "50 min", isPreview: false, type: "video" },
          { title: "Assignment: Secure Auth & Payment Microservice with Webhook Verification", duration: "2 Hours", isPreview: false, type: "assignment" }
        ]
      },
      {
        id: "mod-6",
        number: "06",
        title: "Real-Time Collaboration with WebSockets",
        duration: "7 Hours",
        lessonsCount: 4,
        lessons: [
          { title: "HTTP Polling vs Server-Sent Events vs WebSockets", duration: "40 min", isPreview: false, type: "video" },
          { title: "Socket.io Server & Client Architecture", duration: "55 min", isPreview: false, type: "video" },
          { title: "Rooms, Namespaces & Presence Tracking", duration: "50 min", isPreview: false, type: "video" },
          { title: "Capstone Project 2: Live Collaborative Workspace & Chat App", duration: "4 Hours", isPreview: false, type: "project" }
        ]
      },
      {
        id: "mod-7",
        number: "07",
        title: "Cloud Deployment, Docker & DevOps Essentials",
        duration: "6 Hours",
        lessonsCount: 5,
        lessons: [
          { title: "Containerizing MERN Applications with Docker & Compose", duration: "55 min", isPreview: false, type: "video" },
          { title: "Deploying Frontend to Vercel & Backend to AWS EC2", duration: "1 Hour", isPreview: false, type: "video" },
          { title: "Cloud Database Hosting with MongoDB Atlas", duration: "35 min", isPreview: false, type: "video" },
          { title: "GitHub Actions CI/CD Pipeline for Automated Testing & Deployment", duration: "50 min", isPreview: false, type: "video" },
          { title: "Domain Configuration, SSL & Cloudflare CDN Setup", duration: "40 min", isPreview: false, type: "video" }
        ]
      },
      {
        id: "mod-8",
        number: "08",
        title: "Final Capstone & 100% Refund Submission Review",
        duration: "6 Hours",
        lessonsCount: 6,
        lessons: [
          { title: "Full Stack SaaS Capstone Project Architecture Overview", duration: "45 min", isPreview: false, type: "video" },
          { title: "Code Quality, Linting & Architecture Checklist", duration: "35 min", isPreview: false, type: "video" },
          { title: "Final Capstone: Production EdTech / E-Commerce Multi-Vendor App", duration: "5 Hours", isPreview: false, type: "project" },
          { title: "1:1 Mentor Code Review & Screen Share Session", duration: "45 min", isPreview: false, type: "mentorship" },
          { title: "100% Refund Claim Form & Automated Verification Portal", duration: "20 min", isPreview: false, type: "quiz" }
        ]
      }
    ],
    projects: [
      {
        title: "EdFlow: Multi-Tenant EdTech Platform",
        description: "A complete learning platform with video streaming, lesson progress tracking, interactive quizzes, Razorpay payments, and admin dashboards.",
        difficulty: "Advanced",
        skills: ["React 19", "Node.js", "MongoDB", "Razorpay", "Tailwind CSS"],
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&auto=format&fit=crop&q=80"
      },
      {
        title: "CollabBoard: Real-Time Kanban & Whiteboard",
        description: "Real-time collaborative task board with drag-and-drop mechanics, multi-user live cursors, and instant notifications via WebSockets.",
        difficulty: "Intermediate",
        skills: ["WebSockets", "Socket.io", "React", "Express", "Zustand"],
        image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=600&auto=format&fit=crop&q=80"
      },
      {
        title: "DevPulse: Developer Job & Freelance Portal",
        description: "Full-stack job marketplace with applicant tracking, resume upload with AWS S3, search filters, and recruiter chat.",
        difficulty: "Intermediate",
        skills: ["MongoDB Aggregations", "Node.js", "AWS S3", "JWT Auth"],
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=80"
      },
      {
        title: "QuickCart: High-Scale E-Commerce Store",
        description: "E-commerce platform with faceted search, cart state persistence, discount promo coupons, and invoice generation.",
        difficulty: "Advanced",
        skills: ["React", "Express", "Stripe/Razorpay", "Docker"],
        image: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?w=600&auto=format&fit=crop&q=80"
      }
    ],
    instructor: {
      name: "Aditya Verma",
      designation: "Senior Staff Engineer & Ex-Swiggy, IIT Delhi Alumni",
      avatar: "assets/student-rahul.png",
      experience: "9+ Years Industry Experience",
      specialization: "Distributed Systems, High-Scale Web & MERN",
      stats: {
        coursesTaught: 6,
        studentsMentored: "24,000+",
        instructorRating: "4.92 / 5.0"
      },
      bio: "Aditya has architected systems handling 2M+ requests per minute. He has trained thousands of Indian engineering students to land SDE roles at Microsoft, Swiggy, and top US startups."
    },
    mentorship: {
      title: "1:1 Dedicated Mentor Desk",
      format: "Unlimited screen share & 1:1 doubt clearing via live audio/video",
      avgResponseTime: "Avg response under 7 minutes",
      availability: "9:00 AM to 11:00 PM IST (7 Days a week)",
      team: "IIT / NIT Alumni & Senior Industry Developers",
      highlights: [
        "Instant screen sharing for debugging nasty code bugs",
        "Personalized resume and GitHub profile reviews",
        "1:1 mock technical interviews before your company rounds",
        "Direct guidance on capstone project architecture"
      ]
    },
    targetAudience: [
      { title: "College Students", desc: "Build real projects for placement drives instead of theoretical textbook code." },
      { title: "Early Career Devs", desc: "Level up from basic HTML/CSS to production-ready scalable MERN systems." },
      { title: "Career Switchers", desc: "Non-CS graduates looking for a structured, step-by-step roadmap to become full-stack software engineers." }
    ],
    prerequisites: [
      "Basic computer literacy and a laptop (Windows, Mac, or Linux)",
      "Zero prior programming experience required; we start from JavaScript basics",
      "Dedication to commit 4–6 hours per week towards assignments"
    ],
    tools: [
      { name: "React 19", icon: "code" },
      { name: "Node.js", icon: "terminal" },
      { name: "Express", icon: "dns" },
      { name: "MongoDB", icon: "database" },
      { name: "TypeScript", icon: "data_object" },
      { name: "Docker", icon: "deployed_code" },
      { name: "Git / GitHub", icon: "commit" },
      { name: "AWS EC2", icon: "cloud" },
      { name: "Postman", icon: "api" },
      { name: "VS Code", icon: "integration_instructions" }
    ],
    certificate: {
      title: "Verified Professional Full Stack Developer Credential",
      certIdFormat: "TD-CERT-MERN-89210",
      description: "Globally shareable verification link with QR code, ISO 9001:2015 accredited, recognized across 500+ hiring tech companies."
    },
    testimonials: [
      {
        name: "Rahul Mehra",
        role: "Frontend Dev at Cleartrip",
        avatar: "assets/student-rahul.png",
        rating: 5,
        story: "Tier-3 College to 14.5 LPA",
        quote: "Tutedude's refund model was the kick I needed. Knowing I'd get my ₹699 back if I finished the assignments kept me accountable every single evening. Got refunded in 48 hours and placed within 3 months!"
      },
      {
        name: "Ananya Deshmukh",
        role: "Software Engineer at Razorpay",
        avatar: "assets/student-priya.png",
        rating: 5,
        story: "Non-IT to Full Stack SDE",
        quote: "The 1:1 mentor support is unreal. Whenever I was stuck in React state bugs or MongoDB aggregations, a mentor hopped on a call within 6 minutes. Completed on day 78 and got 100% money back."
      },
      {
        name: "Aniket Nair",
        role: "Junior Developer at TCS Digital",
        avatar: "assets/student-aniket.png",
        rating: 5,
        story: "Final Year B.Tech Project & Placement",
        quote: "The EdFlow capstone project alone impressed my interviewers so much that they skipped live coding rounds. Tutedude proved you don't need to pay ₹40,000 for bootcamp quality."
      }
    ],
    faqs: [
      {
        question: "How does the 100% refund actually work?",
        answer: "You enroll by paying the commitment fee (₹699). You get full access to the video lectures, projects, and 1:1 mentorship. If you finish all lessons and submit the assignments meeting passing criteria within the 90-day challenge window, your eligible fee of ₹699 is credited straight to your UPI ID or Bank account. No catches."
      },
      {
        question: "Do I lose course access after getting the 100% refund?",
        answer: "No! You retain full lifetime access to all course materials, lecture videos, code repositories, and future updates even after your refund is credited."
      },
      {
        question: "What happens if I miss the 90-day challenge deadline?",
        answer: "If you don't complete the course within 90 days, you simply do not receive the cash refund. However, you do NOT lose access—you still have lifetime access to finish at your own pace and earn your verified certificate."
      },
      {
        question: "How quickly are doubts resolved by mentors?",
        answer: "Our 1:1 doubt desk operates from 9 AM to 11 PM daily with an average live response time of 7 minutes. You can request a live screen share or text chat directly inside the platform."
      },
      {
        question: "Is this course suitable for complete beginners?",
        answer: "Yes. The curriculum starts with core JavaScript fundamentals and modern ES6 syntax before gradually advancing to backend API design, database modeling, and production deployment."
      }
    ]
  },
  {
    id: "aiml",
    title: "Artificial Intelligence & Machine Learning",
    category: "AI & ML",
    subtitle: "Master Python, Deep Learning, PyTorch, LLMs, LangChain & Generative AI with hands-on labs.",
    description: "Equip yourself with practical AI engineering skills. From fundamental machine learning math (Regression, Classification, Clustering) to cutting-edge Generative AI, Retrieval-Augmented Generation (RAG), and fine-tuning Open-Source LLMs.",
    badge: "Trending in 2026",
    price: 699,
    originalPrice: 3999,
    discountPercent: 82,
    rating: 4.92,
    reviewCount: 3810,
    learners: "15,200+",
    durationHours: 72,
    moduleCount: 9,
    lessonCount: 52,
    projectCount: 6,
    assignmentCount: 14,
    difficulty: "Intermediate",
    language: "English & Hinglish",
    refundPeriod: "90 Days",
    refundAmount: "₹699 (100% Cashback)",
    completionRequirements: {
      minLessonProgress: "100% of recorded lessons watched",
      assignmentsPassed: "12 of 14 lab notebooks submitted with ≥ 80% accuracy",
      capstoneProjects: "1 end-to-end RAG AI system deployed on HuggingFace/AWS",
      challengeDuration: "Must satisfy criteria within 90 days of enrollment",
      payoutMethod: "Direct UPI or Bank Account NEFT within 48 hours",
      postRefundAccess: "Lifetime access to all Jupyter notebooks, datasets & code"
    },
    learningOutcomes: [
      "Understand supervised & unsupervised algorithms from mathematical intuition to code",
      "Perform high-performance exploratory data analysis with Pandas, NumPy & Seaborn",
      "Build, train, and evaluate Neural Networks with PyTorch and TensorFlow",
      "Implement Computer Vision pipelines with OpenCV and CNN architectures",
      "Build Natural Language Processing (NLP) models with HuggingFace Transformers",
      "Develop production RAG (Retrieval Augmented Generation) pipelines using LangChain & Pinecone",
      "Fine-tune open weights LLMs (Llama 3, Mistral) using LoRA / QLoRA techniques",
      "Deploy AI applications to cloud endpoints with FastAPI & Docker"
    ],
    endOfCourseCards: [
      {
        icon: "psychology",
        title: "Build GenAI & RAG Systems",
        description: "Create AI assistants that query proprietary enterprise documents with zero hallucinations."
      },
      {
        icon: "analytics",
        title: "Master Predictive Models",
        description: "Train XGBoost, Random Forests, and Deep Neural Nets for real-world enterprise forecasting."
      },
      {
        icon: "memory",
        title: "Fine-Tune Open LLMs",
        description: "Master parameter-efficient fine-tuning (PEFT/LoRA) for customized vertical AI models."
      },
      {
        icon: "cloud_done",
        title: "Deploy with FastAPI",
        description: "Package models into microservices with Docker, ready for production API integration."
      }
    ],
    modules: [
      {
        id: "ai-1",
        number: "01",
        title: "Mathematical Foundations & Scientific Python",
        duration: "8 Hours",
        lessonsCount: 6,
        lessons: [
          { title: "Linear Algebra & Matrix Operations for Machine Learning", duration: "55 min", isPreview: true, type: "video" },
          { title: "Calculus & Gradient Descent Intuition with Visualizations", duration: "1 Hour", isPreview: true, type: "video" },
          { title: "Probability & Bayesian Statistics in Data Decisions", duration: "45 min", isPreview: false, type: "video" },
          { title: "High Performance NumPy Array Vectorization", duration: "50 min", isPreview: false, type: "video" },
          { title: "Pandas Data Cleaning & Advanced Aggregations", duration: "1 Hour 10 min", isPreview: false, type: "video" },
          { title: "Assignment: Real-World Telecom Churn EDA Notebook", duration: "2 Hours", isPreview: false, type: "assignment" }
        ]
      },
      {
        id: "ai-2",
        number: "02",
        title: "Classical Machine Learning Algorithms",
        duration: "12 Hours",
        lessonsCount: 7,
        lessons: [
          { title: "Linear & Logistic Regression from Scratch", duration: "1 Hour", isPreview: true, type: "video" },
          { title: "Decision Trees, Random Forests & Ensemble Learning", duration: "1 Hour 15 min", isPreview: false, type: "video" },
          { title: "Gradient Boosting Mastery: XGBoost & LightGBM", duration: "1 Hour 10 min", isPreview: false, type: "video" },
          { title: "Unsupervised Learning: K-Means, PCA & Dimensionality Reduction", duration: "50 min", isPreview: false, type: "video" },
          { title: "Hyperparameter Tuning with Optuna & Cross-Validation", duration: "45 min", isPreview: false, type: "video" },
          { title: "Assignment: Credit Default Risk Prediction Model", duration: "3 Hours", isPreview: false, type: "assignment" },
          { title: "Capstone 1: Enterprise Churn Engine with Feature Importance", duration: "4 Hours", isPreview: false, type: "project" }
        ]
      },
      {
        id: "ai-3",
        number: "03",
        title: "Deep Learning & Neural Networks with PyTorch",
        duration: "14 Hours",
        lessonsCount: 6,
        lessons: [
          { title: "Perceptrons, Multilayer Perceptrons & Backpropagation", duration: "1 Hour 20 min", isPreview: false, type: "video" },
          { title: "PyTorch Tensors, Autograd & Building Custom Datasets", duration: "1 Hour 10 min", isPreview: false, type: "video" },
          { title: "Convolutional Neural Networks (CNNs) for Computer Vision", duration: "1 Hour 30 min", isPreview: false, type: "video" },
          { title: "Transfer Learning with ResNet & Vision Transformers (ViT)", duration: "1 Hour", isPreview: false, type: "video" },
          { title: "Assignment: Medical Image Classification with PyTorch", duration: "3 Hours", isPreview: false, type: "assignment" },
          { title: "Capstone 2: Real-Time Object Detection Pipeline with YOLO", duration: "4 Hours", isPreview: false, type: "project" }
        ]
      },
      {
        id: "ai-4",
        number: "04",
        title: "Generative AI, Large Language Models & RAG",
        duration: "18 Hours",
        lessonsCount: 8,
        lessons: [
          { title: "The Transformer Architecture: Self-Attention Explained", duration: "1 Hour 15 min", isPreview: true, type: "video" },
          { title: "Prompt Engineering & Structured Outputs with OpenAI/Gemini", duration: "55 min", isPreview: false, type: "video" },
          { title: "Vector Embeddings & High-Speed Vector Databases (Chroma/Pinecone)", duration: "1 Hour", isPreview: false, type: "video" },
          { title: "Building Production RAG with LangChain & LlamaIndex", duration: "1 Hour 40 min", isPreview: false, type: "video" },
          { title: "Agents, ReAct Framework & Tool Calling", duration: "1 Hour 10 min", isPreview: false, type: "video" },
          { title: "Fine-Tuning Open Source LLMs with QLoRA & HuggingFace", duration: "1 Hour 30 min", isPreview: false, type: "video" },
          { title: "Assignment: Financial Report Analyst RAG with Citations", duration: "3 Hours", isPreview: false, type: "assignment" },
          { title: "Capstone 3: Full-Stack Multi-Modal Autonomous AI Agent", duration: "5 Hours", isPreview: false, type: "project" }
        ]
      }
    ],
    projects: [
      {
        title: "Enterprise DocuBot: Production RAG AI",
        description: "Autonomous agent querying 1,000+ page enterprise PDF manuals with vector search, semantic re-ranking, and zero hallucinations.",
        difficulty: "Advanced",
        skills: ["LangChain", "Pinecone", "Llama 3", "FastAPI", "React"],
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&auto=format&fit=crop&q=80"
      },
      {
        title: "Autonomous Trading & Stock Predictor",
        description: "Time-series forecasting model combining LSTM recurrent networks and financial sentiment analysis for equity trend signals.",
        difficulty: "Advanced",
        skills: ["PyTorch", "LSTM", "Transformers", "Streamlit"],
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&auto=format&fit=crop&q=80"
      },
      {
        title: "MedVision: Automated Chest X-Ray Triage",
        description: "Deep learning vision classifier with Grad-CAM visual heatmaps highlighting affected lung regions for clinical decision support.",
        difficulty: "Intermediate",
        skills: ["PyTorch", "ResNet50", "OpenCV", "Docker"],
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&auto=format&fit=crop&q=80"
      }
    ],
    instructor: {
      name: "Dr. Sandeep Kulkarni",
      designation: "AI Research Scientist & Ex-Amazon AI, Ph.D. IIT Bombay",
      avatar: "assets/student-rahul.png",
      experience: "11+ Years in Machine Learning & GenAI",
      specialization: "Natural Language Processing & Generative Models",
      stats: {
        coursesTaught: 4,
        studentsMentored: "19,000+",
        instructorRating: "4.94 / 5.0"
      },
      bio: "Dr. Sandeep has published 14 peer-reviewed research papers in top AI venues (NeurIPS, CVPR) and previously led computer vision systems at Amazon."
    },
    mentorship: {
      title: "1:1 AI Engineer Mentorship",
      format: "Direct notebook debugging, GPU optimization assistance & code reviews",
      avgResponseTime: "Avg response under 8 minutes",
      availability: "10:00 AM to 11:00 PM IST",
      team: "PhD Researchers & Senior ML Engineers at leading AI labs",
      highlights: [
        "Debug PyTorch CUDA out-of-memory and shape mismatch errors live",
        "Assistance setting up free Google Colab & Kaggle GPU environments",
        "Deep technical review of custom RAG and LangChain pipelines",
        "Mock interviews focusing on ML system design and math theory"
      ]
    },
    targetAudience: [
      { title: "Software Developers", desc: "Transition into high-paying AI Engineer and LLM Application Developer roles." },
      { title: "Data Analysts", desc: "Level up from SQL/Excel into predictive modeling and deep learning systems." },
      { title: "STEM Students", desc: "Prepare for high-growth roles in machine learning research and enterprise AI." }
    ],
    prerequisites: [
      "Familiarity with basic programming logic (loops, functions in any language)",
      "High-school mathematics (basic linear algebra and calculus concepts)",
      "A computer with an active internet browser (cloud GPUs provided via Google Colab)"
    ],
    tools: [
      { name: "Python 3.12", icon: "code" },
      { name: "PyTorch", icon: "memory" },
      { name: "LangChain", icon: "link" },
      { name: "Hugging Face", icon: "face" },
      { name: "OpenAI API", icon: "smart_toy" },
      { name: "Pinecone", icon: "database" },
      { name: "FastAPI", icon: "api" },
      { name: "Pandas", icon: "table_chart" },
      { name: "Jupyter Labs", icon: "terminal" },
      { name: "Docker", icon: "deployed_code" }
    ],
    certificate: {
      title: "Certified Artificial Intelligence & Machine Learning Specialist",
      certIdFormat: "TD-CERT-AIML-40912",
      description: "Cryptographically verifiable credential detailing completed neural network and LLM architectures."
    },
    testimonials: [
      {
        name: "Pooja Hegde",
        role: "AI Engineer at Persistent Systems",
        avatar: "assets/student-priya.png",
        rating: 5,
        story: "Java Developer to GenAI Engineer (85% Hike)",
        quote: "The RAG and LangChain module is by far the most up-to-date in India. The mentors helped me deploy my LLM project on HuggingFace Spaces, which landed me my new AI role. Completed in 70 days and got my ₹699 fee refunded within 24 hours!"
      },
      {
        name: "Vikram Singhania",
        role: "Data Scientist at Fractal Analytics",
        avatar: "assets/student-aniket.png",
        rating: 5,
        story: "College Fresher to 12 LPA Offer",
        quote: "Most courses only teach import sklearn. Here we built neural networks from mathematical fundamentals, then built real agents. The 100% refund model kept me locked in during exam month."
      }
    ],
    faqs: [
      {
        question: "Do I need an expensive gaming laptop or GPU?",
        answer: "No! All heavy deep learning and LLM training exercises in this course run seamlessly inside free cloud environments like Google Colab and Kaggle with free GPU acceleration."
      },
      {
        question: "How do I claim the 100% refund for this AI course?",
        answer: "Complete the video lessons and submit the specified lab notebooks and capstone project within the 90-day challenge window. Once verified, ₹699 is returned directly to your UPI/Bank."
      },
      {
        question: "Is math covered or assumed?",
        answer: "We cover all necessary linear algebra, calculus, and statistics concepts from an intuitive, visual perspective before writing any code."
      }
    ]
  },
  {
    id: "datascience",
    title: "Data Science & Business Analytics",
    category: "Data Science",
    subtitle: "Turn messy raw data into executive business decisions with SQL, Power BI, Python & Tableau.",
    description: "Learn practical analytics demanded by top tech firms and consulting leaders. Master advanced SQL queries, automated ETL pipelines, statistical hypothesis testing, and executive Power BI dashboards that drive million-dollar decisions.",
    badge: "High Hiring Demand",
    price: 699,
    originalPrice: 3299,
    discountPercent: 78,
    rating: 4.85,
    reviewCount: 3410,
    learners: "12,900+",
    durationHours: 58,
    moduleCount: 7,
    lessonCount: 42,
    projectCount: 4,
    assignmentCount: 11,
    difficulty: "Beginner Friendly",
    language: "English & Hinglish",
    refundPeriod: "90 Days",
    refundAmount: "₹699 (100% Cashback)",
    completionRequirements: {
      minLessonProgress: "100% of recorded lessons watched",
      assignmentsPassed: "All 11 case study assignments completed",
      capstoneProjects: "1 interactive executive Power BI dashboard published live",
      challengeDuration: "90 Days from enrollment",
      payoutMethod: "Direct UPI or Bank Account NEFT within 48 hours",
      postRefundAccess: "Full lifetime access to datasets & templates"
    },
    learningOutcomes: [
      "Master Advanced SQL: Window Functions, CTEs, Self-Joins & Query Optimization",
      "Build dynamic, interactive executive dashboards in Power BI and Tableau",
      "Automate repetitive reporting and ETL data pipelines with Python & Pandas",
      "Conduct rigorous statistical hypothesis testing (A/B testing, ANOVA, Chi-Square)",
      "Translate ambiguous stakeholder requests into crisp quantitative metrics",
      "Deliver data storytelling presentations that resonate with CXOs and management"
    ],
    endOfCourseCards: [
      {
        icon: "table_view",
        title: "Advanced SQL Ninja",
        description: "Write complex analytical SQL queries that handle millions of transaction rows effortlessly."
      },
      {
        icon: "dashboard_customize",
        title: "Executive Dashboards",
        description: "Build interactive Power BI reports with DAX calculations and drill-down storytelling."
      },
      {
        icon: "insights",
        title: "A/B Testing & Statistics",
        description: "Design rigorous statistical experiments to test business hypotheses with confidence."
      },
      {
        icon: "auto_graph",
        title: "Predictive Analytics",
        description: "Forecast sales, churn, and supply chain trends using Scikit-Learn regression models."
      }
    ],
    modules: [
      {
        id: "ds-1",
        number: "01",
        title: "Advanced SQL & Database Analytics",
        duration: "10 Hours",
        lessonsCount: 6,
        lessons: [
          { title: "Relational Modeling, Keys & Complex Joins", duration: "1 Hour", isPreview: true, type: "video" },
          { title: "Window Functions: ROW_NUMBER, RANK, DENSE_RANK, LEAD, LAG", duration: "1 Hour 15 min", isPreview: true, type: "video" },
          { title: "Common Table Expressions (CTEs) & Subqueries", duration: "50 min", isPreview: false, type: "video" },
          { title: "Database Indexing & Query Execution Plans", duration: "45 min", isPreview: false, type: "video" },
          { title: "Assignment: Solving 15 Real LeetCode Hard SQL Challenges", duration: "2 Hours", isPreview: false, type: "assignment" },
          { title: "Capstone: E-Commerce Funnel & Cohort Retention Analysis in SQL", duration: "3 Hours", isPreview: false, type: "project" }
        ]
      },
      {
        id: "ds-2",
        number: "02",
        title: "Business Intelligence with Power BI & DAX",
        duration: "12 Hours",
        lessonsCount: 7,
        lessons: [
          { title: "Power BI Architecture & Star Schema Data Modeling", duration: "50 min", isPreview: true, type: "video" },
          { title: "Power Query: M-Code Transformations & Data Cleansing", duration: "1 Hour", isPreview: false, type: "video" },
          { title: "DAX Foundations: Calculated Columns vs Measures", duration: "1 Hour 10 min", isPreview: false, type: "video" },
          { title: "Advanced DAX: CALCULATE, Time Intelligence & FILTER Context", duration: "1 Hour 20 min", isPreview: false, type: "video" },
          { title: "UI/UX for Dashboards: Color Psychology & Visual Hierarchy", duration: "45 min", isPreview: false, type: "video" },
          { title: "Assignment: Financial Executive KPI Report in Power BI", duration: "2 Hours", isPreview: false, type: "assignment" },
          { title: "Capstone: Live Supply Chain Logistics Command Center", duration: "4 Hours", isPreview: false, type: "project" }
        ]
      },
      {
        id: "ds-3",
        number: "03",
        title: "Python for Data Analysis & Statistical Modeling",
        duration: "14 Hours",
        lessonsCount: 6,
        lessons: [
          { title: "NumPy Arrays & Vectorized Calculations", duration: "45 min", isPreview: false, type: "video" },
          { title: "Pandas DataFrames: Merging, Grouping & Reshaping", duration: "1 Hour 15 min", isPreview: false, type: "video" },
          { title: "Exploratory Visualizations with Seaborn & Matplotlib", duration: "55 min", isPreview: false, type: "video" },
          { title: "Hypothesis Testing & A/B Experiment Analysis", duration: "1 Hour", isPreview: false, type: "video" },
          { title: "Predictive Analytics with Scikit-Learn Regression & Classification", duration: "1 Hour 30 min", isPreview: false, type: "video" },
          { title: "Final Capstone: End-to-End Customer Lifetime Value Prediction", duration: "5 Hours", isPreview: false, type: "project" }
        ]
      }
    ],
    projects: [
      {
        title: "Swiggy Delivery Delay & Route Analytics",
        description: "Optimized route dispatching insights analyzing 500,000 delivery orders using SQL and Power BI dashboarding.",
        difficulty: "Intermediate",
        skills: ["SQL", "Power BI", "DAX", "Data Modeling"],
        image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=600&auto=format&fit=crop&q=80"
      },
      {
        title: "FinTech Loan Default Risk Scoring Model",
        description: "Predictive risk segmentation engine assessing default probabilities on consumer microloans.",
        difficulty: "Advanced",
        skills: ["Python", "Scikit-Learn", "Pandas", "Streamlit"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80"
      }
    ],
    instructor: {
      name: "Sneha Raman",
      designation: "Lead Data Analyst & Ex-Deloitte, IIM Calcutta Alumni",
      avatar: "assets/student-priya.png",
      experience: "8+ Years in Enterprise Analytics",
      specialization: "Business Intelligence, Advanced SQL & Data Storytelling",
      stats: {
        coursesTaught: 5,
        studentsMentored: "16,500+",
        instructorRating: "4.89 / 5.0"
      },
      bio: "Sneha has driven analytics roadmaps for Fortune 500 retail and banking clients. She focuses heavily on practical business translation and interview case studies."
    },
    mentorship: {
      title: "1:1 Data Mentorship Desk",
      format: "SQL query debugging, DAX measure assistance & dashboard design feedback",
      avgResponseTime: "Avg response under 7 minutes",
      availability: "9:00 AM to 11:00 PM IST",
      team: "Senior Business Analysts at top consulting and product firms",
      highlights: [
        "Live debugging of tricky SQL joins and syntax errors",
        "Personal feedback on portfolio dashboards before public sharing",
        "Business case study mock interviews",
        "DAX formula optimization and relationship model review"
      ]
    },
    targetAudience: [
      { title: "Commerce & MBA Graduates", desc: "Break into tech analytics roles without complex coding knowledge." },
      { title: "MIS & Operations Staff", desc: "Automate manual Excel work and step up into high-visibility BI roles." },
      { title: "Aspiring Product Analysts", desc: "Learn how modern growth teams use SQL and A/B testing to guide product bets." }
    ],
    prerequisites: [
      "No programming background required",
      "Familiarity with basic Excel (SUM, IF, VLOOKUP is helpful but taught from scratch)",
      "Windows PC or Mac (Power BI Desktop is free on Windows; cloud web version supported for Mac)"
    ],
    tools: [
      { name: "PostgreSQL", icon: "database" },
      { name: "Power BI", icon: "monitoring" },
      { name: "Python", icon: "code" },
      { name: "Pandas", icon: "table_chart" },
      { name: "Tableau", icon: "analytics" },
      { name: "Excel Advanced", icon: "grid_on" },
      { name: "Jupyter", icon: "terminal" }
    ],
    certificate: {
      title: "Certified Business Intelligence & Data Science Specialist",
      certIdFormat: "TD-CERT-DS-19208",
      description: "ISO accredited certification showcasing verified portfolio links to your interactive BI dashboards."
    },
    testimonials: [
      {
        name: "Manish Joshi",
        role: "Data Analyst at Nykaa",
        avatar: "assets/student-aniket.png",
        rating: 5,
        story: "Mechanical Eng to 9.2 LPA Data Analyst",
        quote: "The SQL and DAX projects were identical to the take-home assessment I was given during my Nykaa interview! I submitted my final dashboard on day 62 and received my ₹699 refund in 36 hours. Best decision ever."
      }
    ],
    faqs: [
      {
        question: "Can I do this if I don't know any coding?",
        answer: "Absolutely. Data Analytics focuses primarily on SQL logic, data modeling, and visualization tools like Power BI which do not require traditional software engineering."
      },
      {
        question: "How does the refund guarantee work?",
        answer: "Complete all course lessons and submit the 11 practical case studies and capstone within 90 days to receive your 100% course fee back directly into your account."
      }
    ]
  },
  {
    id: "uiux",
    title: "UI/UX Product Design Masterclass",
    category: "Design",
    subtitle: "Design modern, conversion-focused mobile apps and web SaaS with Figma, Design Systems & Prototyping.",
    description: "Learn how top design teams at Stripe, Airbnb, and CRED build intuitive products. Master user research, wireframing, typography, color harmony, auto-layout, micro-interactions, responsive design systems, and client presentation skills.",
    badge: "Creative Career",
    price: 699,
    originalPrice: 3199,
    discountPercent: 78,
    rating: 4.87,
    reviewCount: 2950,
    learners: "10,800+",
    durationHours: 52,
    moduleCount: 6,
    lessonCount: 38,
    projectCount: 4,
    assignmentCount: 10,
    difficulty: "Beginner Friendly",
    language: "English & Hinglish",
    refundPeriod: "90 Days",
    refundAmount: "₹699 (100% Cashback)",
    completionRequirements: {
      minLessonProgress: "100% of recorded lessons watched",
      assignmentsPassed: "All 10 design tasks verified by mentor",
      capstoneProjects: "2 complete case studies published to Behance/Figma",
      challengeDuration: "90 Days from enrollment",
      payoutMethod: "Direct UPI or Bank Account NEFT within 48 hours",
      postRefundAccess: "Lifetime access to Figma component kits & recordings"
    },
    learningOutcomes: [
      "Master Figma from scratch: Auto Layout, Components, Variants & Design Tokens",
      "Conduct user research, synthesize customer journey maps & create wireframes",
      "Design scalable, cohesive design systems with accessible contrast ratios",
      "Create high-fidelity interactive prototypes with smart animations & micro-interactions",
      "Package your work into recruiter-ready Behance case studies that land interviews",
      "Hand off assets to developers smoothly using inspect mode & design specs"
    ],
    endOfCourseCards: [
      {
        icon: "palette",
        title: "Figma Master",
        description: "Harness modern Figma auto-layout 5.0, variables, component properties, and token architecture."
      },
      {
        icon: "layers",
        title: "Design Systems",
        description: "Build production design systems with dark/light themes, typography scales, and modular components."
      },
      {
        icon: "animation",
        title: "Micro-Animations",
        description: "Craft buttery-smooth interactive prototypes with Smart Animate and gesture triggers."
      },
      {
        icon: "auto_stories",
        title: "Recruiter Portfolio",
        description: "Publish 2 in-depth Behance product case studies that clearly explain your UX reasoning."
      }
    ],
    modules: [
      {
        id: "ux-1",
        number: "01",
        title: "UX Fundamentals, Research & Information Architecture",
        duration: "8 Hours",
        lessonsCount: 6,
        lessons: [
          { title: "Design Thinking Framework & Double Diamond Process", duration: "45 min", isPreview: true, type: "video" },
          { title: "User Interviews, Surveys & Empathy Mapping", duration: "1 Hour", isPreview: true, type: "video" },
          { title: "Information Architecture, User Flows & Sitemap Design", duration: "50 min", isPreview: false, type: "video" },
          { title: "Low-Fidelity Paper & Digital Wireframing", duration: "55 min", isPreview: false, type: "video" },
          { title: "Assignment: User Journey & Wireframes for a FinTech App", duration: "2 Hours", isPreview: false, type: "assignment" }
        ]
      },
      {
        id: "ux-2",
        number: "02",
        title: "Figma Pro: Auto-Layout, Components & Design Systems",
        duration: "12 Hours",
        lessonsCount: 7,
        lessons: [
          { title: "Figma Interface Mastery, Shortcuts & Vector Tools", duration: "45 min", isPreview: true, type: "video" },
          { title: "Auto-Layout Deep Dive: Resizing, Constraints & Nested Frames", duration: "1 Hour 10 min", isPreview: false, type: "video" },
          { title: "Components, Variants & Component Properties", duration: "1 Hour", isPreview: false, type: "video" },
          { title: "Design Tokens: Color Styles, Fluid Typography Scales & Spacing", duration: "55 min", isPreview: false, type: "video" },
          { title: "Dark Mode Theming with Figma Variables", duration: "50 min", isPreview: false, type: "video" },
          { title: "Assignment: Building a 40-Component UI Kit from Scratch", duration: "3 Hours", isPreview: false, type: "assignment" },
          { title: "Capstone 1: Modern EdTech Mobile App Design & Prototype", duration: "4 Hours", isPreview: false, type: "project" }
        ]
      }
    ],
    projects: [
      {
        title: "VaultPay: Gen-Z Neo-Banking Mobile App",
        description: "End-to-end mobile banking application featuring split payments, investment widgets, and dark mode UI.",
        difficulty: "Intermediate",
        skills: ["Figma", "Auto Layout", "Design System", "Micro-interactions"],
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&auto=format&fit=crop&q=80"
      },
      {
        title: "Krypton: AI Cloud SaaS Analytics Platform",
        description: "Desktop web dashboard for cloud infrastructure monitoring with data visualizations and modular widgets.",
        difficulty: "Advanced",
        skills: ["Design Systems", "Web App UI", "Prototyping", "UX Research"],
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&auto=format&fit=crop&q=80"
      }
    ],
    instructor: {
      name: "Kavya Nair",
      designation: "Lead Product Designer & Ex-Zomato, NID Alumni",
      avatar: "assets/student-priya.png",
      experience: "7+ Years in Product & Brand Design",
      specialization: "Design Systems, Mobile UX & Interactive Prototyping",
      stats: {
        coursesTaught: 3,
        studentsMentored: "12,000+",
        instructorRating: "4.91 / 5.0"
      },
      bio: "Kavya has designed apps used by over 30 million monthly active users in India. She mentors budding designers to land senior product design roles."
    },
    mentorship: {
      title: "1:1 Portfolio Review Desk",
      format: "Loom video critiques and 1:1 Figma file reviews with senior designers",
      avgResponseTime: "Avg response under 10 minutes",
      availability: "10:00 AM to 10:00 PM IST",
      team: "Product Designers at unicorn tech startups",
      highlights: [
        "Live teardown of your Figma files, auto-layout, and spacing consistency",
        "Behance and Dribbble case study storytelling critique",
        "Design challenge and whiteboard interview prep"
      ]
    },
    targetAudience: [
      { title: "Visual & Graphic Designers", desc: "Transition from print/posters into high-paying digital product UI/UX." },
      { title: "Frontend Developers", desc: "Supercharge your coding skills by mastering modern design systems and Figma." },
      { title: "Creative Students", desc: "Start a lucrative design career without writing code." }
    ],
    prerequisites: [
      "No coding knowledge required",
      "A laptop with Google Chrome (Figma runs in the browser for free)",
      "An eye for visual aesthetics and enthusiasm for solving user problems"
    ],
    tools: [
      { name: "Figma", icon: "draw" },
      { name: "FigJam", icon: "edit_note" },
      { name: "Design Tokens", icon: "category" },
      { name: "Protopie", icon: "smart_display" },
      { name: "Behance", icon: "art_track" }
    ],
    certificate: {
      title: "Verified Product Designer & UX Specialist Credential",
      certIdFormat: "TD-CERT-UIUX-31980",
      description: "Recognized certification backed by verified Figma project deliverables."
    },
    testimonials: [
      {
        name: "Shreya Ghoshal",
        role: "UI/UX Designer at CredAvenue",
        avatar: "assets/student-priya.png",
        rating: 5,
        story: "Graphic Designer to 8 LPA Product Designer",
        quote: "Before Tutedude, my Figma files were a mess of ungrouped layers. Learning auto-layout and building a full design system completely changed my workflow. The 100% refund model kept me disciplined to finish in 55 days. Got my ₹699 fee back and a job offer in the same week!"
      }
    ],
    faqs: [
      {
        question: "Is Figma free to use?",
        answer: "Yes! Figma has a generous free starter tier which is completely sufficient for all projects and exercises in this masterclass."
      },
      {
        question: "How do I get my 100% refund?",
        answer: "Watch all course videos and submit your 10 design milestones and capstone case study within 90 days. Once verified, ₹699 is credited to your bank account."
      }
    ]
  },
  {
    id: "dsa",
    title: "Data Structures & Algorithms (C++ / Java / Python)",
    category: "DSA",
    subtitle: "Crack MAANG & Tier-1 product tech interviews with 350+ curated LeetCode problems.",
    description: "The definitive algorithmic problem-solving blueprint. Master arrays, strings, two pointers, sliding window, linked lists, trees, graphs, dynamic programming, and system design intuition with time & space complexity mastery.",
    badge: "Interview Guarantee",
    price: 699,
    originalPrice: 3499,
    discountPercent: 80,
    rating: 4.93,
    reviewCount: 4600,
    learners: "21,000+",
    durationHours: 68,
    moduleCount: 8,
    lessonCount: 50,
    projectCount: 4,
    assignmentCount: 16,
    difficulty: "Intermediate to Hard",
    language: "English & Hinglish",
    refundPeriod: "90 Days",
    refundAmount: "₹699 (100% Cashback)",
    completionRequirements: {
      minLessonProgress: "100% of recorded lessons watched",
      assignmentsPassed: "All 16 coding assessment suites submitted & passing",
      capstoneProjects: "Score ≥ 80% on the Final Mock Tech Interview Assessment",
      challengeDuration: "90 Days from enrollment",
      payoutMethod: "Direct UPI or Bank Account NEFT within 48 hours",
      postRefundAccess: "Lifetime access to solutions repository & interview notes"
    },
    learningOutcomes: [
      "Master asymptotic analysis: Big-O, Big-Theta, time/space complexity optimization",
      "Dominate classic patterns: Two Pointers, Sliding Window, Monotonic Stacks",
      "Tree Traversals, Binary Search Trees, Segment Trees & Trie structures",
      "Graph Algorithms: BFS, DFS, Dijkstra, Bellman-Ford, Disjoint Set Union (DSU)",
      "Dynamic Programming: 1D, 2D, DP with Bitmasking, Knapsack, and Digit DP",
      "Crack live coding rounds under intense interview pressure without panicking"
    ],
    endOfCourseCards: [
      {
        icon: "code_blocks",
        title: "350+ Curated Problems",
        description: "Curated problem lists tailored for Amazon, Google, Microsoft, and Uber interviews."
      },
      {
        icon: "account_tree",
        title: "Pattern-Based Learning",
        description: "Learn 15 core algorithmic patterns that solve over 80% of LeetCode Medium/Hard questions."
      },
      {
        icon: "speed",
        title: "Space & Time Mastery",
        description: "Optimize brute force O(N²) solutions down to blazing fast O(N log N) or O(N)."
      },
      {
        icon: "quiz",
        title: "Live Mock Rounds",
        description: "Participate in simulated 45-minute live technical coding interviews with IIT mentors."
      }
    ],
    modules: [
      {
        id: "dsa-1",
        number: "01",
        title: "Complexity Analysis & Essential Arrays",
        duration: "8 Hours",
        lessonsCount: 6,
        lessons: [
          { title: "Big-O Notation, Space Complexity & Recursion Trees", duration: "50 min", isPreview: true, type: "video" },
          { title: "Two Pointer Technique & In-Place Array Manipulations", duration: "1 Hour", isPreview: true, type: "video" },
          { title: "Sliding Window Pattern (Fixed vs Dynamic Size)", duration: "1 Hour 10 min", isPreview: false, type: "video" },
          { title: "Prefix Sum & Kadane's Algorithm for Maximum Subarray", duration: "45 min", isPreview: false, type: "video" },
          { title: "Assignment: 10 Essential Array Interview Problems", duration: "3 Hours", isPreview: false, type: "assignment" }
        ]
      },
      {
        id: "dsa-2",
        number: "02",
        title: "Dynamic Programming Masterclass",
        duration: "14 Hours",
        lessonsCount: 7,
        lessons: [
          { title: "Recursion to Memoization (Top-Down) Framework", duration: "1 Hour", isPreview: true, type: "video" },
          { title: "Tabulation (Bottom-Up) & Space Optimization", duration: "1 Hour 15 min", isPreview: false, type: "video" },
          { title: "1D DP: Climbing Stairs, Frog Jump, House Robber", duration: "1 Hour", isPreview: false, type: "video" },
          { title: "2D Grid DP & Unique Paths", duration: "50 min", isPreview: false, type: "video" },
          { title: "0/1 Knapsack & Subset Sum Variations", duration: "1 Hour 20 min", isPreview: false, type: "video" },
          { title: "Longest Common Subsequence (LCS) & String DP", duration: "1 Hour 10 min", isPreview: false, type: "video" },
          { title: "Assignment: 15 DP Hard Problems with Complete Explanations", duration: "4 Hours", isPreview: false, type: "assignment" }
        ]
      }
    ],
    projects: [
      {
        title: "Algorithmic Visualizer Web Application",
        description: "Interactive visualizer illustrating Dijkstra, A* pathfinding, and sorting algorithms step-by-step.",
        difficulty: "Advanced",
        skills: ["C++/JS", "Graph Theory", "Algorithms", "Canvas"],
        image: "https://images.unsplash.com/photo-1516116211227-bbc00e5720ad?w=600&auto=format&fit=crop&q=80"
      }
    ],
    instructor: {
      name: "Rohit Agrawal",
      designation: "ICPC Regionalist & Software Engineer at Google, IIT Roorkee",
      avatar: "assets/student-rahul.png",
      experience: "6+ Years Competitive Programming & Teaching",
      specialization: "Data Structures, Algorithms & Competitive Coding",
      stats: {
        coursesTaught: 4,
        studentsMentored: "28,000+",
        instructorRating: "4.95 / 5.0"
      },
      bio: "Rohit has solved 1,800+ problems on LeetCode and Codeforces (Candidate Master). He personally designed the algorithmic roadmap that has placed 300+ students in MAANG."
    },
    mentorship: {
      title: "1:1 Live Coding Doubt Desk",
      format: "Instant code review, dry-run debugging, and live pseudocode assistance",
      avgResponseTime: "Avg response under 6 minutes",
      availability: "9:00 AM to 11:30 PM IST",
      team: "Competitive Programmers & SDEs at Google, Amazon, and Microsoft",
      highlights: [
        "Live screen sharing to identify Time Limit Exceeded (TLE) or segmentation faults",
        "Dry run recursion trees together on a virtual whiteboard",
        "Regular live mock coding interviews"
      ]
    },
    targetAudience: [
      { title: "College Students", desc: "Clear on-campus placement coding rounds for top tech companies." },
      { title: "Service-Company Engineers", desc: "Switch from WITCH companies to high-paying Tier-1 product firms." }
    ],
    prerequisites: [
      "Basic syntax knowledge of either C++, Java, or Python",
      "Willingness to solve daily problems consistently"
    ],
    tools: [
      { name: "C++ / STL", icon: "code" },
      { name: "Java", icon: "code" },
      { name: "Python", icon: "code" },
      { name: "LeetCode", icon: "terminal" },
      { name: "VS Code", icon: "integration_instructions" }
    ],
    certificate: {
      title: "Certified Algorithmic Problem Solving & DSA Specialist",
      certIdFormat: "TD-CERT-DSA-55092",
      description: "Recognized certification awarded upon scoring ≥ 80% on our rigorous live technical assessment."
    },
    testimonials: [
      {
        name: "Tarun Bansal",
        role: "SDE-1 at Amazon",
        avatar: "assets/student-aniket.png",
        rating: 5,
        story: "Service Company to 28 LPA Amazon SDE",
        quote: "DP and Graphs were always my nightmare. Rohit's pattern-based approach made them crystal clear. The 90-day refund deadline kept me solving 4 problems a day like clockwork. Cleared all 4 rounds at Amazon and got my ₹699 fee back!"
      }
    ],
    faqs: [
      {
        question: "Can I follow this course in C++, Java, or Python?",
        answer: "Yes! All data structure explanations, logic walk-throughs, and code repositories are provided with side-by-side solutions in C++, Java, and Python."
      },
      {
        question: "What is the 100% refund requirement?",
        answer: "Complete all video lectures, submit the 16 coding assessment problem sets, and score ≥ 80% on the final comprehensive assessment within 90 days."
      }
    ]
  },
  {
    id: "devops",
    title: "DevOps & Cloud Engineering with AWS",
    category: "Cloud & DevOps",
    subtitle: "Master Docker, Kubernetes, CI/CD with GitHub Actions, Terraform & AWS Cloud Architecture.",
    description: "Automate software delivery pipelines from commit to cloud. Build production Kubernetes clusters, manage Infrastructure as Code with Terraform, set up automated CI/CD pipelines, and architect resilient, fault-tolerant cloud systems on AWS.",
    badge: "High Salary",
    price: 699,
    originalPrice: 3599,
    discountPercent: 80,
    rating: 4.89,
    reviewCount: 2780,
    learners: "9,600+",
    durationHours: 60,
    moduleCount: 7,
    lessonCount: 40,
    projectCount: 4,
    assignmentCount: 12,
    difficulty: "Intermediate",
    language: "English & Hinglish",
    refundPeriod: "90 Days",
    refundAmount: "₹699 (100% Cashback)",
    completionRequirements: {
      minLessonProgress: "100% of recorded lessons watched",
      assignmentsPassed: "All 12 cloud lab assignments submitted",
      capstoneProjects: "1 live deployed Kubernetes microservices cluster with automated CI/CD",
      challengeDuration: "90 Days from enrollment",
      payoutMethod: "Direct UPI or Bank Account NEFT within 48 hours",
      postRefundAccess: "Lifetime access to Terraform configs and Helm charts"
    },
    learningOutcomes: [
      "Master Linux system administration, shell scripting, and networking fundamentals",
      "Containerize multi-tier applications with Docker and multi-stage Dockerfiles",
      "Orchestrate resilient microservices clusters with Kubernetes (K8s) and Helm",
      "Build automated CI/CD pipelines using GitHub Actions and ArgoCD GitOps",
      "Provision reproducible cloud infrastructure on AWS using Terraform (IaC)",
      "Implement enterprise observability with Prometheus, Grafana, and Loki"
    ],
    endOfCourseCards: [
      {
        icon: "deployed_code",
        title: "Docker & Kubernetes",
        description: "Deploy and scale self-healing container pods with ingress controllers and zero downtime."
      },
      {
        icon: "cloud",
        title: "AWS Cloud Mastery",
        description: "Architect secure VPC networks, EC2 autoscaling groups, S3 buckets, and RDS databases."
      },
      {
        icon: "sync_alt",
        title: "CI/CD & GitOps",
        description: "Automate tests and continuous deployments with GitHub Actions and ArgoCD."
      },
      {
        icon: "terminal",
        title: "Terraform IaC",
        description: "Write declarative infrastructure code to spin up complete cloud environments in minutes."
      }
    ],
    modules: [
      {
        id: "dop-1",
        number: "01",
        title: "Linux, Networking & Shell Automation",
        duration: "8 Hours",
        lessonsCount: 5,
        lessons: [
          { title: "Linux File Hierarchy, Permissions & Process Management", duration: "50 min", isPreview: true, type: "video" },
          { title: "Bash Scripting for System Automation", duration: "1 Hour", isPreview: true, type: "video" },
          { title: "Networking: DNS, TCP/IP, SSH, Reverse Proxies & Nginx", duration: "1 Hour 10 min", isPreview: false, type: "video" },
          { title: "Assignment: Automated Server Hardening & Backup Script", duration: "2 Hours", isPreview: false, type: "assignment" }
        ]
      }
    ],
    projects: [
      {
        title: "GitOps Automated Microservices Deployment",
        description: "End-to-end Kubernetes cluster on AWS EKS with ArgoCD GitOps, automated rollbacks, and Prometheus alerting.",
        difficulty: "Advanced",
        skills: ["Kubernetes", "AWS EKS", "Terraform", "GitHub Actions", "Helm"],
        image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&auto=format&fit=crop&q=80"
      }
    ],
    instructor: {
      name: "Gaurav Sen",
      designation: "Principal DevOps Architect & Ex-Flipkart",
      avatar: "assets/student-rahul.png",
      experience: "10+ Years Cloud Infrastructure",
      specialization: "Kubernetes, AWS Cloud & GitOps Automation",
      stats: {
        coursesTaught: 3,
        studentsMentored: "14,000+",
        instructorRating: "4.92 / 5.0"
      },
      bio: "Gaurav has architected cloud infrastructure that scales to 50M+ users during Big Billion Day sales. He teaches real production practices, not synthetic sandbox tutorials."
    },
    mentorship: {
      title: "1:1 Cloud & DevOps Mentorship",
      format: "Live AWS architecture review, YAML debugging, and pipeline troubleshooting",
      avgResponseTime: "Avg response under 8 minutes",
      availability: "9:00 AM to 11:00 PM IST",
      team: "AWS Certified Solutions Architects & DevOps Leads",
      highlights: [
        "Live screen-share debugging of broken Kubernetes deployments and ingress rules",
        "Terraform state file and lock resolution guidance",
        "Cost-optimization strategies to avoid surprise AWS cloud bills"
      ]
    },
    targetAudience: [
      { title: "System Admins & Developers", desc: "Step up into high-paying Cloud Engineer and DevOps specialist roles." },
      { title: "Engineering Students", desc: "Stand out from peers by knowing real cloud deployment and container orchestration." }
    ],
    prerequisites: [
      "Basic understanding of computers and how the web works",
      "No prior cloud knowledge needed; AWS Free Tier account will be set up together"
    ],
    tools: [
      { name: "Docker", icon: "deployed_code" },
      { name: "Kubernetes", icon: "hub" },
      { name: "AWS", icon: "cloud" },
      { name: "Terraform", icon: "terminal" },
      { name: "GitHub Actions", icon: "sync_alt" },
      { name: "Linux", icon: "terminal" },
      { name: "Nginx", icon: "dns" },
      { name: "Grafana", icon: "monitoring" }
    ],
    certificate: {
      title: "Certified Cloud Architect & DevOps Engineer Credential",
      certIdFormat: "TD-CERT-DOP-78210",
      description: "Verifiable industry credential demonstrating mastery of production container deployment and IaC."
    },
    testimonials: [
      {
        name: "Abhishek Pandey",
        role: "DevOps Engineer at Paytm",
        avatar: "assets/student-rahul.png",
        rating: 5,
        story: "Support Engineer to 11 LPA DevOps Role",
        quote: "The AWS and Kubernetes labs are completely production-ready. The 100% refund model was pure motivation. Completed the challenge in 68 days, received my ₹699 fee back, and cracked my dream DevOps offer!"
      }
    ],
    faqs: [
      {
        question: "Will I incur high AWS cloud bills while learning?",
        answer: "No. All exercises are carefully designed to utilize AWS Free Tier resources, and we guide you on setting automated billing alarms so you never incur unexpected charges."
      },
      {
        question: "How does the refund guarantee apply here?",
        answer: "Submit all practical lab assignments and deploy the final microservices capstone project within 90 days to receive your full ₹699 enrollment fee back."
      }
    ]
  }
];

// Helper functions for easy querying across pages
function getAllCourses() {
  return COURSES_DATA;
}

function getCourseById(id) {
  if (!id) return COURSES_DATA[0];
  const course = COURSES_DATA.find(c => c.id.toLowerCase() === id.toLowerCase());
  return course || COURSES_DATA[0];
}

function getCoursesByCategory(category) {
  if (!category || category === "All") return COURSES_DATA;
  return COURSES_DATA.filter(c => c.category.toLowerCase() === category.toLowerCase());
}

function getCategories() {
  return ["All", "Development", "AI & ML", "Data Science", "Design", "DSA", "Cloud & DevOps"];
}
