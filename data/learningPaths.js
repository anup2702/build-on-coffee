export const learningPaths = [
  {
    slug: "frontend-developer-30-days",
    title: "Frontend Developer in 30 Days",
    duration: "30 Days",
    level: "Beginner",
    description:
      "A structured month-long plan to master HTML, CSS, JavaScript, and a modern framework with practical projects.",
    milestones: [
      { id: "w1-html-basics", label: "Week 1: HTML Foundations", link: "/roadmap/web-development" },
      { id: "w1-css-basics", label: "Week 1: CSS Basics & Flexbox", link: "/roadmap/web-development" },
      { id: "w2-css-grid", label: "Week 2: Responsive CSS & CSS Grid", link: "/roadmap/web-development" },
      { id: "w2-js-fund", label: "Week 2: JavaScript Fundamentals", link: "/roadmap/web-development" },
      { id: "w3-dom", label: "Week 3: DOM, Events, and Fetch API", link: "/roadmap/web-development" },
      { id: "w3-tooling", label: "Week 3: Tooling (Vite, NPM) & Git", link: "/roadmap/web-development" },
      { id: "w4-react", label: "Week 4: React Basics (hooks, state, props)", link: "/roadmap/web-development" },
      { id: "w4-react-router", label: "Week 4: Routing and State Management", link: "/roadmap/web-development" },
      { id: "proj-1", label: "Project: Build a Responsive Portfolio", link: "/roadmap/web-development" },
    ],
  },
  {
    slug: "backend-developer-30-days",
    title: "Backend Developer in 30 Days",
    duration: "30 Days",
    level: "Beginner",
    description:
      "A focused 30-day plan to master backend development essentials, including server-side languages, databases, and API creation.",
    milestones: [
      { id: "w1-intro-backend", label: "Week 1: Introduction to Backend & Node.js Basics", link: "/roadmap/web-development" },
      { id: "w1-express", label: "Week 1: Building REST APIs with Express.js", link: "/roadmap/web-development" },
      { id: "w2-databases", label: "Week 2: Database Fundamentals (SQL/NoSQL)", link: "/roadmap/web-development" },
      { id: "w2-orm", label: "Week 2: ORMs and Database Integration", link: "/roadmap/web-development" },
      { id: "w3-auth", label: "Week 3: Authentication & Authorization", link: "/roadmap/web-development" },
      { id: "w3-testing", label: "Week 3: API Testing & Error Handling", link: "/roadmap/web-development" },
      { id: "w4-deployment", label: "Week 4: Deployment & Cloud Basics", link: "/roadmap/devops" },
      { id: "w4-microservices", label: "Week 4: Introduction to Microservices", link: "/roadmap/system-design" },
      { id: "proj-2", label: "Project: Build a Simple E-commerce API", link: "/roadmap/web-development" },
    ],
  },
  {
  slug: "devops-cloud-learning-path",
  title: "DevOps & Cloud Learning Path",
  duration: "45 Days",
  level: "Intermediate",
  description:
    "A comprehensive and hands-on learning path covering DevOps principles, CI/CD pipelines, containerization, orchestration, Infrastructure as Code, and Cloud Computing (AWS/GCP/Azure). Designed for developers and system admins to transition into modern DevOps & Cloud roles.",
  milestones: [
    {
      id: "w1-devops-linux",
      label: "Week 1: DevOps Fundamentals & Linux Essentials",
      details: [
        "Understand DevOps culture, principles, and lifecycle.",
        "Basics of Linux commands, file systems, users & permissions.",
        "Shell scripting for automation.",
        "Hands-on: Set up a Linux VM (local or cloud)."
      ],
      link: "/roadmap/devops"
    },
    {
      id: "w2-git",
      label: "Week 2: Git & Version Control Mastery",
      details: [
        "Version control concepts (local vs remote).",
        "Branching, merging, rebasing, and conflict resolution.",
        "Git workflows (Git Flow, trunk-based development).",
        "Hands-on: Host code on GitHub/GitLab, manage PRs."
      ],
      link: "/roadmap/devops"
    },
    {
      id: "w3-docker",
      label: "Week 3: Docker & Containerization",
      details: [
        "Introduction to containers vs virtual machines.",
        "Docker architecture & commands.",
        "Building, tagging, and pushing images.",
        "Docker Compose for multi-container apps.",
        "Hands-on: Containerize a sample Node.js/React app."
      ],
      link: "/roadmap/devops"
    },
    {
      id: "w4-kubernetes",
      label: "Week 4: Kubernetes & Container Orchestration",
      details: [
        "Kubernetes architecture (Pods, Nodes, Services).",
        "YAML manifests & deployments.",
        "ConfigMaps, Secrets, and scaling applications.",
        "Monitoring and logging basics.",
        "Hands-on: Deploy Dockerized app to a local K8s cluster (Minikube/Kind)."
      ],
      link: "/roadmap/devops"
    },
    {
      id: "w5-cloud",
      label: "Week 5: Cloud Essentials (AWS/GCP/Azure)",
      details: [
        "Cloud concepts: Regions, Availability Zones, pricing.",
        "Compute (EC2/VMs), Storage (S3/Blob), Networking (VPCs, Firewalls).",
        "Identity & Access Management (IAM).",
        "Hands-on: Deploy a simple web app on a cloud provider."
      ],
      link: "/roadmap/cloud-computing"
    },
    {
      id: "w6-iac",
      label: "Week 6: Infrastructure as Code (Terraform) + CI/CD",
      details: [
        "Introduction to IaC & Terraform basics.",
        "Writing Terraform configuration files for cloud infra.",
        "CI/CD pipelines with GitHub Actions/Jenkins.",
        "Hands-on: Automate cloud infrastructure and app deployment with Terraform + CI/CD."
      ],
      link: "/roadmap/devops"
    },
    {
      id: "proj-3",
      label: "Final Project: Deploy a Containerized App to the Cloud",
      details: [
        "Build a full CI/CD pipeline for a sample app.",
        "Containerize the app with Docker.",
        "Deploy using Kubernetes on AWS/GCP/Azure.",
        "Use Terraform for infra setup.",
        "Document & present end-to-end deployment workflow."
      ],
      link: "/roadmap/devops"
    }
  ]
},
  {
  slug: "system-design-scalability-path",
  title: "System Design & Scalability",
  duration: "60 Days",
  level: "Advanced",
  description:
    "An advanced 60-day path to mastering system design, scalability, and distributed systems. This guide focuses on core principles, architectural trade-offs, and real-world case studies to prepare learners for designing resilient, scalable, and high-performance applications.",
  milestones: [
    {
      id: "w1-concepts",
      label: "Weeks 1-2: Core System Design Concepts",
      details: [
        "Understand scalability, reliability, availability, and maintainability.",
        "Learn about CAP Theorem, Consistency models, and ACID vs BASE trade-offs.",
        "Key design principles: load balancing, caching, replication, sharding, partitioning.",
        "Hands-on: Design a URL shortener (focus on fundamentals like hashing, storage, and scaling)."
      ],
      link: "/roadmap/system-design"
    },
    {
      id: "w2-design",
      label: "Weeks 3-4: High-Level System Architecture",
      details: [
        "Monoliths vs microservices vs serverless architectures.",
        "Event-driven vs request-driven systems.",
        "Messaging queues and pub/sub (Kafka, RabbitMQ, AWS SQS).",
        "API Gateways, CDN usage, and edge caching.",
        "Hands-on: Design a scalable chat system (covering message flow, persistence, and real-time delivery)."
      ],
      link: "/roadmap/system-design"
    },
    {
      id: "w3-components",
      label: "Weeks 5-6: Deep Dive into System Components",
      details: [
        "Databases: SQL vs NoSQL, NewSQL, distributed transactions.",
        "Storage systems: block, object, file storage in distributed environments.",
        "Caching strategies (LRU, LFU, write-through vs write-back).",
        "Consensus algorithms (Paxos, Raft, ZAB) and leader election.",
        "Monitoring, logging, and alerting for large-scale systems.",
        "Hands-on: Design a scalable video streaming platform (covering storage, CDN, transcoding, delivery)."
      ],
      link: "/roadmap/system-design"
    },
    {
      id: "w4-case-studies",
      label: "Weeks 7-8: Real-World Case Studies & Trade-offs",
      details: [
        "Study architectures of Google, Netflix, Uber, Amazon, and Twitter.",
        "Trade-offs between latency, throughput, cost, and complexity.",
        "Scalability bottlenecks: how to detect and resolve them.",
        "Disaster recovery & fault tolerance strategies.",
        "Hands-on: Analyze and improve the architecture of an existing system (e.g., scaling a blogging platform)."
      ],
      link: "/roadmap/system-design"
    },
    {
      id: "proj-4",
      label: "Final Project: Design a Scalable E-commerce Platform",
      details: [
        "Requirements gathering and defining non-functional requirements (scale, latency, fault-tolerance).",
        "High-level design including API gateway, catalog service, cart, payments, inventory management.",
        "Database design: relational + NoSQL hybrid model for scale.",
        "Use caching, search indexing, and load balancing for performance.",
        "Add monitoring, observability, and disaster recovery strategy.",
        "Prepare a full architectural diagram with trade-off documentation."
      ],
      link: "/roadmap/system-design"
    }
  ]
},

{
  slug: "app-development-learning-path",
  title: "App Development Learning Path",
  duration: "60 Days",
  level: "Intermediate",
  description:
    "A comprehensive 60-day structured guide to becoming a proficient app developer, covering both native and cross-platform development. This path takes you through UI/UX fundamentals, mobile frontend development, backend integration, advanced mobile features, and deployment to app stores. Designed for developers aiming to build real-world, production-ready mobile apps.",
  milestones: [
    {
      id: "w1-2-ui-ux",
      label: "Weeks 1-2: UI/UX and App Design Fundamentals",
      details: [
        "Understand the role of design in mobile applications.",
        "Learn mobile-specific UI/UX design principles (touch-friendly, responsive layouts, accessibility).",
        "Wireframing and prototyping with Figma or Sketch.",
        "User flows, navigation patterns (tab bar, drawer, stack navigation).",
        "Design systems and reusability in mobile UI.",
        "Hands-on: Create a **wireframe and prototype** for a to-do list app."
      ],
      link: "/roadmap/ui-ux-design"
    },
    {
      id: "w3-4-frontend",
      label: "Weeks 3-4: Frontend Development (Cross-Platform with React Native/Flutter)",
      details: [
        "Set up a development environment (Expo for React Native, Flutter SDK).",
        "Understand the widget/component model.",
        "Build reusable UI components and responsive layouts.",
        "Learn navigation libraries (React Navigation, Flutter Navigator).",
        "State management strategies (Redux, Context API, Riverpod, Provider).",
        "Error handling, form validation, and input management.",
        "Hands-on: Build the **frontend of the to-do list app** with navigation, forms, and local state management."
      ],
      link: "/roadmap/mobile-development"
    },
    {
      id: "w5-6-backend",
      label: "Weeks 5-6: Backend Integration and APIs",
      details: [
        "REST APIs vs GraphQL: how apps communicate with servers.",
        "Working with JSON data, parsing, and displaying results.",
        "Connecting with backend services (Firebase, Supabase, or custom Node.js/Express backend).",
        "Data persistence (SQLite, AsyncStorage, Hive).",
        "Offline-first app design: caching and sync strategies.",
        "Authentication & authorization (JWT, OAuth, Firebase Auth).",
        "Hands-on: Integrate the **to-do app with Firebase/Supabase**, including user login and real-time data sync."
      ],
      link: "/roadmap/web-development"
    },
    {
      id: "w7-8-advanced",
      label: "Weeks 7-8: Advanced Topics and Deployment",
      details: [
        "Push notifications (Firebase Cloud Messaging / OneSignal).",
        "Background tasks & app lifecycle management.",
        "Accessing native device features: camera, GPS, file system.",
        "App security best practices (secure storage, HTTPS, API keys).",
        "Testing frameworks (Jest, Detox, Flutter Test).",
        "Debugging tools and performance optimization (Flipper, DevTools).",
        "App Store and Google Play guidelines, signing & publishing apps.",
        "Hands-on: Add **push notifications + GPS feature** to the to-do app and deploy it to TestFlight/Play Store."
      ],
      link: "/roadmap/mobile-development"
    },
    {
      id: "proj-5",
      label: "Final Project: Build a Complete Mobile Application",
      details: [
        "Plan, design, and implement a **fully functional mobile app of your choice** (examples: recipe finder, personal finance tracker, mini social app).",
        "Apply learned concepts: design system, API integration, authentication, notifications, and deployment.",
        "Include full documentation and a presentation-ready project walkthrough.",
        "Optional: Add extra features like dark mode, cloud storage, or real-time chat."
      ],
      link: "/roadmap/mobile-development"
    }
  ]
} , 
 {
    id: "data-science",
    slug: "data-science-30-days",
    title: "Data Science in 30 Days",
    duration: "30 Days",
    level: "Intermediate",
    description:
      "A structured month-long plan to learn the foundations of statistics, Python for data science, and machine learning with a hands-on project and deployment.",
    milestones: [
      { id: "w1-stats", label: "Week 1: Statistics & Probability Foundations", link: "/roadmap/data-science" },
      { id: "w1-python", label: "Week 1: Python for Data Science (NumPy, Pandas)", link: "/roadmap/data-science" },
      { id: "w2-eda", label: "Week 2: Exploratory Data Analysis & Visualization", link: "/roadmap/data-science" },
      { id: "w2-sklearn", label: "Week 2: Intro to Scikit-learn", link: "/roadmap/data-science" },
      { id: "w3-ml-basics", label: "Week 3: Machine Learning Basics (Regression, Classification, Clustering)", link: "/roadmap/data-science" },
      { id: "w3-ml-metrics", label: "Week 3: Model Evaluation & Metrics", link: "/roadmap/data-science" },
      { id: "w4-ml-project", label: "Week 4: ML Project (Movie Recommender / Spam Classifier)", link: "/roadmap/data-science" },
      { id: "w4-deployment", label: "Week 4: Deploy ML Models (Flask/FastAPI + Cloud)", link: "/roadmap/data-science" },
      { id: "proj-1", label: "Capstone: End-to-End Data Science Project", link: "/roadmap/data-science" },
    ],
  },
];
