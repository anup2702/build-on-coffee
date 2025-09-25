
const cloudNativeConceptsQuestions = {
  beginner: [
    {
      question: "What is a cloud-native application?",
      options: [
        "An application that is designed to run on a specific cloud provider",
        "An application that is designed to take full advantage of cloud computing",
        "An application that is written in a specific programming language",
        "An application that is not secure",
      ],
      answer: "An application that is designed to take full advantage of cloud computing",
    },
    {
      question: "Which of the following is a core principle of cloud-native development?",
      options: [
        "Monolithic architecture",
        "Manual scaling",
        "Microservices",
        "On-premise deployment",
      ],
      answer: "Microservices",
    },
    {
      question: "What is the role of containers in cloud-native development?",
      options: [
        "To store data",
        "To package applications and their dependencies for consistent deployment",
        "To provide a graphical user interface",
        "To manage network traffic",
      ],
      answer: "To package applications and their dependencies for consistent deployment",
    },
    {
      question: "What is a common orchestration tool for cloud-native applications?",
      options: [
        "Microsoft Word",
        "Kubernetes",
        "Adobe Photoshop",
        "Google Sheets",
      ],
      answer: "Kubernetes",
    },
    {
      question: "What is serverless computing in a cloud-native context?",
      options: [
        "A type of cloud service that requires no servers",
        "A model where the cloud provider manages the servers and you only pay for the execution time",
        "A marketing term with no real meaning",
        "A way to run applications without an internet connection",
      ],
      answer: "A model where the cloud provider manages the servers and you only pay for the execution time",
    },
    {
      question: "What is a microservice?",
      options: [
        "A large, monolithic application",
        "A small, independent service that communicates with other services",
        "A type of database",
        "A security protocol",
      ],
      answer: "A small, independent service that communicates with other services",
    },
    {
      question: "What is the benefit of using APIs in cloud-native applications?",
      options: [
        "To make applications slower",
        "To enable communication and integration between different services",
        "To store data",
        "To secure the cloud",
      ],
      answer: "To enable communication and integration between different services",
    },
    {
      question: "What is continuous delivery in cloud-native development?",
      options: [
        "Manually deploying code to production",
        "Automatically preparing code for release to production, with manual approval",
        "Automatically deploying code to production",
        "Testing code manually",
      ],
      answer: "Automatically preparing code for release to production, with manual approval",
    },
    {
      question: "What is continuous deployment in cloud-native development?",
      options: [
        "Manually deploying code to production",
        "Automatically preparing code for release to production, with manual approval",
        "Automatically deploying code to production",
        "Testing code manually",
      ],
      answer: "Automatically deploying code to production",
    },
    {
      question: "What is observability in cloud-native systems?",
      options: [
        "The ability to see what is happening inside a system by examining its external outputs",
        "The ability to control what is happening inside a system",
        "The ability to prevent errors from happening",
        "The ability to fix errors quickly",
      ],
      answer: "The ability to see what is happening inside a system by examining its external outputs",
    },
  ],
  intermediate: [
    {
      question: "What is a service mesh in cloud-native architecture?",
      options: [
        "A dedicated infrastructure layer for making service-to-service communication safe, fast, and reliable",
        "A tool for managing CI/CD pipelines",
        "A tool for deploying applications",
        "A tool for testing applications",
      ],
      answer: "A dedicated infrastructure layer for making service-to-service communication safe, fast, and reliable",
    },
    {
      question: "What is the role of an API Gateway in a microservices architecture?",
      options: [
        "To store data",
        "To act as a single entry point for all client requests, routing them to the appropriate microservice",
        "To manage network traffic",
        "To secure the cloud",
      ],
      answer: "To act as a single entry point for all client requests, routing them to the appropriate microservice",
    },
    {
      question: "What is event-driven architecture in cloud-native?",
      options: [
        "An architecture style where services communicate through asynchronous events",
        "An architecture style where services communicate through synchronous requests",
        "An architecture style where services communicate through a central database",
        "An architecture style where services communicate through a shared file system",
      ],
      answer: "An architecture style where services communicate through asynchronous events",
    },
    {
      question: "What is a distributed tracing system in cloud-native?",
      options: [
        "A system for tracking user activity",
        "A system for tracking the flow of requests through a distributed system",
        "A system for tracking network traffic",
        "A system for tracking data storage",
      ],
      answer: "A system for tracking the flow of requests through a distributed system",
    },
    {
      question: "What is chaos engineering in cloud-native?",
      options: [
        "The practice of intentionally injecting failures into a system to test its resilience",
        "The practice of preventing failures from happening",
        "The practice of fixing failures quickly",
        "The practice of monitoring system performance",
      ],
      answer: "The practice of intentionally injecting failures into a system to test its resilience",
    },
    {
      question: "What is a sidecar pattern in Kubernetes?",
      options: [
        "A container that runs alongside the main container in a pod, providing supporting functionality",
        "A container that runs before the main container in a pod",
        "A container that runs after the main container in a pod",
        "A container that runs on a different node than the main container",
      ],
      answer: "A container that runs alongside the main container in a pod, providing supporting functionality",
    },
    {
      question: "What is immutable infrastructure in cloud-native?",
      options: [
        "Infrastructure that can be modified after deployment",
        "Infrastructure that is never modified after deployment; instead, new versions are deployed",
        "Infrastructure that is difficult to change",
        "Infrastructure that is only used in certain environments",
      ],
      answer: "Infrastructure that is never modified after deployment; instead, new versions are deployed",
    },
    {
      question: "What is a declarative API in cloud-native?",
      options: [
        "An API where you tell the system how to achieve a desired state",
        "An API where you describe the desired state of the system, and the system figures out how to achieve it",
        "An API where you manually configure the system",
        "An API where you write scripts to configure the system",
      ],
      answer: "An API where you describe the desired state of the system, and the system figures out how to achieve it",
    },
    {
      question: "What is a cloud-native database?",
      options: [
        "A traditional relational database running in the cloud",
        "A database designed to run in a cloud environment, often distributed and highly scalable",
        "A database that is not secure",
        "A database that is only used for testing",
      ],
      answer: "A database designed to run in a cloud environment, often distributed and highly scalable",
    },
    {
      question: "What is a service discovery mechanism in cloud-native?",
      options: [
        "A mechanism for services to find and communicate with each other without hardcoding locations",
        "A mechanism for services to store data",
        "A mechanism for services to secure themselves",
        "A mechanism for services to monitor themselves",
      ],
      answer: "A mechanism for services to find and communicate with each other without hardcoding locations",
    },
  ],
  advanced: [
    {
      question: "What is a distributed consensus algorithm (e.g., Raft, Paxos) used for in cloud-native systems?",
      options: [
        "To ensure all nodes in a distributed system agree on a single value or state",
        "To manage network traffic",
        "To store data",
        "To secure the cloud",
      ],
      answer: "To ensure all nodes in a distributed system agree on a single value or state",
    },
    {
      question: "What is a saga pattern in microservices?",
      options: [
        "A way to manage distributed transactions across multiple microservices",
        "A way to manage local transactions within a single microservice",
        "A way to manage data storage",
        "A way to manage network communication",
      ],
      answer: "A way to manage distributed transactions across multiple microservices",
    },
    {
      question: "What is a circuit breaker pattern in microservices?",
      options: [
        "A pattern to prevent a network or service failure from cascading to other services",
        "A pattern to ensure all services are always available",
        "A pattern to increase the speed of service communication",
        "A pattern to secure service communication",
      ],
      answer: "A pattern to prevent a network or service failure from cascading to other services",
    },
    {
      question: "What is a backpressure mechanism in cloud-native?",
      options: [
        "A mechanism to apply pressure to a system to make it perform better",
        "A mechanism to prevent a system from being overwhelmed by too much load",
        "A mechanism to increase the load on a system",
        "A mechanism to monitor the load on a system",
      ],
      answer: "A mechanism to prevent a system from being overwhelmed by too much load",
    },
    {
      question: "What is a sidecar proxy (e.g., Envoy) in a service mesh?",
      options: [
        "A proxy that runs alongside each service instance, handling all inbound and outbound network traffic",
        "A proxy that runs in front of all services",
        "A proxy that runs behind all services",
        "A proxy that runs on a separate server",
      ],
      answer: "A proxy that runs alongside each service instance, handling all inbound and outbound network traffic",
    },
    {
      question: "What is a cloud-native security posture management (CSPM) solution?",
      options: [
        "A solution for managing cloud security policies and configurations",
        "A solution for managing cloud costs",
        "A solution for managing cloud resources",
        "A solution for managing cloud applications",
      ],
      answer: "A solution for managing cloud security policies and configurations",
    },
    {
      question: "What is a cloud-native application protection platform (CNAPP)?",
      options: [
        "A platform that consolidates security capabilities to protect cloud-native applications across the entire lifecycle",
        "A platform for developing cloud-native applications",
        "A platform for deploying cloud-native applications",
        "A platform for monitoring cloud-native applications",
      ],
      answer: "A platform that consolidates security capabilities to protect cloud-native applications across the entire lifecycle",
    },
    {
      question: "What is a declarative configuration management tool (e.g., Crossplane) in cloud-native?",
      options: [
        "A tool that allows you to manage and provision infrastructure and applications using Kubernetes-native APIs",
        "A tool that allows you to manage and provision infrastructure using imperative commands",
        "A tool that allows you to manage and provision applications using imperative commands",
        "A tool that allows you to manage and provision data using imperative commands",
      ],
      answer: "A tool that allows you to manage and provision infrastructure and applications using Kubernetes-native APIs",
    },
    {
      question: "What is a cloud-native data management strategy?",
      options: [
        "A strategy that focuses on traditional data management practices in the cloud",
        "A strategy that leverages cloud-native services and principles for data storage, processing, and analytics",
        "A strategy that avoids using cloud services for data management",
        "A strategy that only uses on-premise data management solutions",
      ],
      answer: "A strategy that leverages cloud-native services and principles for data storage, processing, and analytics",
    },
    {
      question: "What is the role of a cloud-native identity and access management (IAM) system?",
      options: [
        "To manage user identities and control access to cloud resources",
        "To manage network traffic",
        "To store data",
        "To secure the cloud",
      ],
      answer: "To manage user identities and control access to cloud resources",
    },
  ],
};

export default cloudNativeConceptsQuestions;
