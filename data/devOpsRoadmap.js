export const devOpsSteps = [
  {
    title: "1. Linux & Terminal Basics",
    description:
      "Start with Linux fundamentals and terminal commands. DevOps heavily relies on Unix-based systems for server management and scripting.",
    topics: [
      "Linux File System & Permissions",
      "Basic Shell Commands",
      "Process Management",
      "Package Managers (apt, yum)",
    ],
    resources: [
      { name: "Linux Journey", link: "https://linuxjourney.com/" },
      { name: "OverTheWire Bandit", link: "https://overthewire.org/wargames/bandit/" },
    ],
    videos: [
      { name: "freeCodeCamp: Linux for Beginners", link: "https://www.youtube.com/watch?v=IVquJh3DXUA" },
      { name: "The Net Ninja: Linux Command Line", link: "https://www.youtube.com/playlist?list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp" },
    ],
  },
  {
    title: "2. Git & Version Control",
    description:
      "Git is the core of collaborative DevOps workflows. Learn version control, branching strategies, and working with GitHub.",
    topics: [
      "Git Basics (init, add, commit, push)",
      "Branching and Merging",
      "GitHub Repositories & PRs",
      "Rebasing and Git Workflows",
    ],
    resources: [
      { name: "Pro Git Book", link: "https://git-scm.com/book/en/v2" },
      { name: "Learn Git Branching", link: "https://learngitbranching.js.org/" },
    ],
    videos: [
      { name: "Git & GitHub Crash Course", link: "https://www.youtube.com/watch?v=SWYqp7iY_Tc" },
      { name: "freeCodeCamp: Git Full Course", link: "https://www.youtube.com/watch?v=RGOj5yH7evk" },
    ],
  },
  {
    title: "3. Networking & Security Basics",
    description:
      "Understand core networking concepts and basic security practices that are crucial for DevOps environments.",
    topics: [
      "TCP/IP, Ports, Subnetting",
      "Firewalls & VPNs",
      "SSH & Public Key Authentication",
      "SSL/TLS & Certificates",
    ],
    resources: [
      { name: "How HTTPS Works", link: "https://howhttps.works/" },
      { name: "SSH Essentials", link: "https://www.digitalocean.com/community/tutorials/ssh-essentials-working-with-ssh-servers-clients-and-keys" },
    ],
    videos: [
      { name: "Networking Basics", link: "https://www.youtube.com/watch?v=qiQR5rTSshw" },
      { name: "Computerphile: SSH Explained", link: "https://youtu.be/ORcvSkgdA58?si=w0hGJnUwIn4jSYwS" },
    ],
  },
  {
    title: "4. Scripting with Bash & Python",
    description:
      "Automate tasks and configure systems using scripting languages like Bash and Python.",
    topics: [
      "Shell Scripting Basics",
      "Bash Loops and Conditionals",
      "Python for Automation",
      "Parsing Logs and Files",
    ],
    resources: [
      { name: "Bash Guide for Beginners", link: "https://tldp.org/LDP/Bash-Beginners-Guide/html/" },
      { name: "Automate with Python", link: "https://automatetheboringstuff.com/" },
    ],
    videos: [
      { name: "freeCodeCamp: Bash Scripting", link: "https://youtu.be/tK9Oc6AEnR4?si=4viWVpOKWS3t5yPP" },
      { name: "Python Automation Projects", link: "https://www.youtube.com/watch?v=qbW6FRbaSl0" },
    ],
  },
  {
    title: "5. CI/CD Fundamentals",
    description:
      "Build continuous integration and deployment pipelines to streamline software delivery.",
    topics: [
      "What is CI/CD?",
      "Jenkins / GitHub Actions",
      "Pipeline as Code (YAML)",
      "Build, Test, Deploy Stages",
    ],
    resources: [
      { name: "CI/CD Guide - Atlassian", link: "https://www.atlassian.com/continuous-delivery" },
      { name: "GitHub Actions Docs", link: "https://docs.github.com/en/actions" },
    ],
    videos: [
      { name: "GitHub Actions Crash Course", link: "https://www.youtube.com/watch?v=R8_veQiYBjI" },
      { name: "Jenkins CI/CD Full Course", link: "https://youtu.be/XaSdKR2fOU4?si=jrRESHyMpREYjbMu" },
    ],
  },
  {
    title: "6. Docker & Containerization",
    description:
      "Use Docker to package applications into containers for consistency across environments.",
    topics: [
      "Docker Images & Containers",
      "Dockerfile & Compose",
      "Volumes & Networks",
      "Docker Hub & Registries",
    ],
    resources: [
      { name: "Docker Docs", link: "https://docs.docker.com/get-started/" },
      { name: "Play with Docker", link: "https://labs.play-with-docker.com/" },
    ],
    videos: [
      { name: "Docker Crash Course", link: "https://www.youtube.com/watch?v=fqMOX6JJhGo" },
      { name: "freeCodeCamp: Docker for Beginners", link: "https://www.youtube.com/watch?v=pTFZFxd4hOI" },
    ],
  },
  {
    title: "7. Kubernetes & Orchestration",
    description:
      "Deploy and manage containerized applications at scale using Kubernetes.",
    topics: [
      "Kubernetes Architecture",
      "Pods, Deployments, Services",
      "Ingress Controllers",
      "Helm Charts",
    ],
    resources: [
      { name: "Kubernetes Docs", link: "https://kubernetes.io/docs/" },
      { name: "KodeKloud Labs", link: "https://kodekloud.com/p/kubernetes-for-beginners" },
    ],
    videos: [
      { name: "Kubernetes Crash Course", link: "https://www.youtube.com/watch?v=d6WC5n9G_sM" },
      { name: "Kubernetes in 100 Seconds", link: "https://youtu.be/PziYflu8cB8?si=y6a9RmN5BV9hpj9T" },
    ],
  },
  {
    title: "8. Infrastructure as Code (IaC)",
    description:
      "Manage and provision infrastructure using code with tools like Terraform or Pulumi.",
    topics: [
      "Terraform Basics",
      "Resources, Variables, Outputs",
      "State Management",
      "Provisioning AWS EC2",
    ],
    resources: [
      { name: "Terraform Docs", link: "https://developer.hashicorp.com/terraform/docs" },
      { name: "Awesome Terraform", link: "https://github.com/shuaibiyy/awesome-terraform" },
    ],
    videos: [
      { name: "Terraform Full Course", link: "https://www.youtube.com/watch?v=7xngnjfIlK4" },
      { name: "IaC Explained", link: "https://youtu.be/zWw2wuiKd5o?si=XjLqulzgpnCaDN5Y" },
    ],
  },
  {
    title: "9. Cloud Platforms",
    description:
      "Get hands-on experience with cloud platforms. AWS is the most widely used in DevOps roles.",
    topics: [
      "EC2, S3, IAM, VPC",
      "Cloud CLI & SDK",
      "CloudFormation / CDK",
      "Cloud-native DevOps Tools (CodePipeline, CodeBuild)",
    ],
    resources: [
      { name: "AWS Free Tier", link: "https://aws.amazon.com/free/" },
      { name: "AWS Developer Center", link: "https://developer.aws/" },
    ],
    videos: [
      { name: "AWS Basics Full Course", link: "https://youtu.be/BSGcQi2WNPg?si=OA2bEmiIZRYlyZfj" },
      { name: "AWS in 100 Seconds", link: "https://www.youtube.com/watch?v=ubCNZRNjhyo" },
    ],
  },
  {
    title: "10. Monitoring & Logging",
    description:
      "Monitor applications and infrastructure using modern tools and alerting systems.",
    topics: [
      "Prometheus & Grafana",
      "Log Management (ELK stack)",
      "Health Checks & Alerts",
      "Tracing and Observability",
    ],
    resources: [
      { name: "Prometheus Docs", link: "https://prometheus.io/docs/introduction/overview/" },
      { name: "Grafana Labs Docs", link: "https://grafana.com/docs/" },
    ],
    videos: [
      { name: "Monitoring with Prometheus & Grafana", link: "https://www.youtube.com/watch?v=h4Sl21AKiDg" },
      { name: "ELK Stack Crash Course", link: "https://youtu.be/gS_nHTWZEJ8?si=yWX6ezyVIYw1DY1F" },
    ],
  },
  {
    title: "11. DevSecOps & Best Practices",
    description:
      "Integrate security into DevOps workflows and ensure compliance through automation.",
    topics: [
      "DevSecOps Principles",
      "Secrets Management (Vault)",
      "Static/Dynamic Code Analysis",
      "Container Security Tools (Trivy, Aqua)",
    ],
    resources: [
      { name: "OWASP DevSecOps", link: "https://owasp.org/www-project-devsecops-guideline/" },
      { name: "HashiCorp Vault", link: "https://developer.hashicorp.com/vault" },
    ],
    videos: [
      { name: "DevSecOps Explained", link: "https://youtu.be/nrhxNNH5lt0?si=RxxXvzhquecKXdyc" },
      { name: "Trivy for Container Security", link: "https://www.youtube.com/watch?v=8C_SCDbUJTg" },
    ],
  },
  {
    title: "12. Capstone Projects & Practice",
    description:
      "Solidify your skills by building real-world DevOps projects using the tools you've learned.",
    topics: [
      "CI/CD with GitHub Actions",
      "Dockerized App on AWS EC2",
      "Kubernetes App with Helm Charts",
      "Infrastructure with Terraform",
    ],
    resources: [
      { name: "DevOps Project Ideas", link: "https://github.com/alicodermaker/devops-projects" },
      { name: "Awesome DevOps", link: "https://github.com/ligurio/awesome-devops" },
    ],
    videos: [
      { name: "Full DevOps Project Walkthrough", link: "https://youtu.be/sSRaakd95Nk?si=bmEwMjm65qm8CA-D" },
    ],
  },
];
