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
}
];
