
const ciCdPipelinesQuestions = {
  beginner: [
    {
      question: "What does CI stand for in CI/CD?",
      options: [
        "Continuous Integration",
        "Continuous Implementation",
        "Constant Innovation",
        "Code Integration",
      ],
      answer: "Continuous Integration",
    },
    {
      question: "What does CD stand for in CI/CD?",
      options: [
        "Continuous Deployment",
        "Continuous Delivery",
        "Both Continuous Deployment and Continuous Delivery",
        "Code Deployment",
      ],
      answer: "Both Continuous Deployment and Continuous Delivery",
    },
    {
      question: "What is the primary goal of Continuous Integration?",
      options: [
        "To deploy code to production automatically",
        "To merge code changes frequently into a central repository",
        "To test code manually",
        "To write documentation",
      ],
      answer: "To merge code changes frequently into a central repository",
    },
    {
      question: "Which of the following is a benefit of CI/CD?",
      options: [
        "Slower feedback loops",
        "Increased manual effort",
        "Faster release cycles",
        "Reduced code quality",
      ],
      answer: "Faster release cycles",
    },
    {
      question: "What is a pipeline in CI/CD?",
      options: [
        "A single step in the software development process",
        "A series of automated steps to build, test, and deploy code",
        "A tool for writing code",
        "A database for storing code",
      ],
      answer: "A series of automated steps to build, test, and deploy code",
    },
    {
      question: "What is a common tool used for CI?",
      options: [
        "Microsoft Word",
        "Jenkins",
        "Adobe Photoshop",
        "Google Sheets",
      ],
      answer: "Jenkins",
    },
    {
      question: "What is the purpose of automated testing in a CI/CD pipeline?",
      options: [
        "To slow down the development process",
        "To find bugs early and ensure code quality",
        "To replace developers",
        "To generate reports",
      ],
      answer: "To find bugs early and ensure code quality",
    },
    {
      question: "What is a build artifact?",
      options: [
        "The source code of an application",
        "The compiled and packaged output of a build process",
        "A design document",
        "A user manual",
      ],
      answer: "The compiled and packaged output of a build process",
    },
    {
      question: "What is the difference between Continuous Delivery and Continuous Deployment?",
      options: [
        "There is no difference",
        "Continuous Delivery automatically deploys to production, while Continuous Deployment requires manual approval",
        "Continuous Deployment automatically deploys to production, while Continuous Delivery requires manual approval",
        "Continuous Delivery is for web applications, while Continuous Deployment is for mobile applications",
      ],
      answer: "Continuous Deployment automatically deploys to production, while Continuous Delivery requires manual approval",
    },
    {
      question: "What is a version control system (VCS) used for in CI/CD?",
      options: [
        "To store passwords",
        "To manage changes to source code",
        "To send emails",
        "To create presentations",
      ],
      answer: "To manage changes to source code",
    },
  ],
  intermediate: [
    {
      question: "What is a webhook in the context of CI/CD?",
      options: [
        "A type of fishing hook",
        "A mechanism for a service to notify other services about events",
        "A tool for debugging code",
        "A way to store data",
      ],
      answer: "A mechanism for a service to notify other services about events",
    },
    {
      question: "What is a blue/green deployment strategy?",
      options: [
        "Deploying a new version of an application to a separate environment and then switching traffic to it",
        "Deploying a new version of an application by gradually replacing old instances with new ones",
        "Deploying a new version of an application to a small subset of users",
        "Deploying a new version of an application to a specific region",
      ],
      answer: "Deploying a new version of an application to a separate environment and then switching traffic to it",
    },
    {
      question: "What is a canary deployment strategy?",
      options: [
        "Deploying a new version of an application to a small subset of users",
        "Deploying a new version of an application to a separate environment and then switching traffic to it",
        "Deploying a new version of an application by gradually replacing old instances with new ones",
        "Deploying a new version of an application to a specific region",
      ],
      answer: "Deploying a new version of an application to a small subset of users",
    },
    {
      question: "What is a rollback in CI/CD?",
      options: [
        "The process of deploying a new version of an application",
        "The process of reverting an application to a previous stable version",
        "The process of testing an application",
        "The process of building an application",
      ],
      answer: "The process of reverting an application to a previous stable version",
    },
    {
      question: "What is a build server?",
      options: [
        "A server that hosts the production application",
        "A server that compiles source code and creates build artifacts",
        "A server that stores user data",
        "A server that manages network traffic",
      ],
      answer: "A server that compiles source code and creates build artifacts",
    },
    {
      question: "What is a deployment environment?",
      options: [
        "The physical location of the servers",
        "A specific configuration of infrastructure and software where an application is deployed",
        "A tool for writing code",
        "A database for storing code",
      ],
      answer: "A specific configuration of infrastructure and software where an application is deployed",
    },
    {
      question: "What is a release gate?",
      options: [
        "A physical gate that controls access to a server room",
        "A point in the pipeline where certain conditions must be met before proceeding to the next stage",
        "A type of security firewall",
        "A tool for monitoring application performance",
      ],
      answer: "A point in the pipeline where certain conditions must be met before proceeding to the next stage",
    },
    {
      question: "What is a shared library in CI/CD?",
      options: [
        "A collection of reusable code that can be used across multiple pipelines",
        "A library that is shared between different applications",
        "A library that is shared between different developers",
        "A library that is shared between different programming languages",
      ],
      answer: "A collection of reusable code that can be used across multiple pipelines",
    },
    {
      question: "What is a declarative pipeline?",
      options: [
        "A pipeline defined using a scripting language",
        "A pipeline defined using a graphical user interface",
        "A pipeline defined using a domain-specific language (DSL) that describes the desired state of the pipeline",
        "A pipeline that is manually executed",
      ],
      answer: "A pipeline defined using a domain-specific language (DSL) that describes the desired state of the pipeline",
    },
    {
      question: "What is an imperative pipeline?",
      options: [
        "A pipeline defined using a scripting language that specifies the steps to be executed",
        "A pipeline defined using a graphical user interface",
        "A pipeline defined using a domain-specific language (DSL) that describes the desired state of the pipeline",
        "A pipeline that is automatically executed",
      ],
      answer: "A pipeline defined using a scripting language that specifies the steps to be executed",
    },
  ],
  advanced: [
    {
      question: "What is GitOps?",
      options: [
        "A way to manage Git repositories",
        "An operational framework that takes DevOps best practices used for application development and applies them to infrastructure automation",
        "A tool for managing Git branches",
        "A tool for managing Git pull requests",
      ],
      answer: "An operational framework that takes DevOps best practices used for application development and applies them to infrastructure automation",
    },
    {
      question: "What is a supply chain attack in CI/CD?",
      options: [
        "An attack that targets the supply chain of a physical product",
        "An attack that targets the software supply chain, compromising components used in the build or deployment process",
        "An attack that targets the network infrastructure",
        "An attack that targets the end-users of an application",
      ],
      answer: "An attack that targets the software supply chain, compromising components used in the build or deployment process",
    },
    {
      question: "What is a service mesh in the context of CI/CD?",
      options: [
        "A dedicated infrastructure layer for making service-to-service communication safe, fast, and reliable",
        "A tool for managing CI/CD pipelines",
        "A tool for deploying applications",
        "A tool for testing applications",
      ],
      answer: "A dedicated infrastructure layer for making service-to-service communication safe, fast, and reliable",
    },
    {
      question: "What is a GitFlow workflow?",
      options: [
        "A branching model for Git that defines a strict branching model designed around project release",
        "A branching model for Git that uses a single main branch",
        "A branching model for Git that uses feature branches",
        "A branching model for Git that uses release branches",
      ],
      answer: "A branching model for Git that defines a strict branching model designed around project release",
    },
    {
      question: "What is Trunk-Based Development?",
      options: [
        "A branching model where developers merge small, frequent updates to a single main branch",
        "A branching model where developers work on long-lived feature branches",
        "A branching model where developers work on release branches",
        "A branching model where developers work on hotfix branches",
      ],
      answer: "A branching model where developers merge small, frequent updates to a single main branch",
    },
    {
      question: "What is a CI/CD agent/runner?",
      options: [
        "A software component that executes jobs in a CI/CD pipeline",
        "A developer who writes CI/CD pipelines",
        "A server that hosts the CI/CD pipeline",
        "A tool for monitoring CI/CD pipelines",
      ],
      answer: "A software component that executes jobs in a CI/CD pipeline",
    },
    {
      question: "What is DORA metrics in CI/CD?",
      options: [
        "Metrics used to measure the performance of software delivery and operations",
        "Metrics used to measure the performance of developers",
        "Metrics used to measure the performance of servers",
        "Metrics used to measure the performance of networks",
      ],
      answer: "Metrics used to measure the performance of software delivery and operations",
    },
    {
      question: "What is a feature flag (or feature toggle)?",
      options: [
        "A technique that allows you to turn features on and off without deploying new code",
        "A flag that indicates a new feature has been deployed",
        "A flag that indicates a feature is complete",
        "A flag that indicates a feature is in progress",
      ],
      answer: "A technique that allows you to turn features on and off without deploying new code",
    },
    {
      question: "What is a release train?",
      options: [
        "A metaphor for a scheduled, time-boxed release cycle where multiple teams contribute features",
        "A metaphor for a continuous release process",
        "A metaphor for a single release",
        "A metaphor for a hotfix release",
      ],
      answer: "A metaphor for a scheduled, time-boxed release cycle where multiple teams contribute features",
    },
    {
      question: "What is a security scan in CI/CD?",
      options: [
        "A process of scanning code for security vulnerabilities",
        "A process of scanning servers for security vulnerabilities",
        "A process of scanning networks for security vulnerabilities",
        "A process of scanning databases for security vulnerabilities",
      ],
      answer: "A process of scanning code for security vulnerabilities",
    },
  ],
};

export default ciCdPipelinesQuestions;
