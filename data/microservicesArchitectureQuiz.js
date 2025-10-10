export const microservicesArchitectureQuiz = {
  title: "Microservices Architecture Quiz",
  questions: {
    beginner: [
      {
        question: "What is a key characteristic of a microservices architecture?",
        options: [
          "All services share a single, large database.",
          "Services are tightly coupled and deployed as a monolith.",
          "Services are independently deployable and scalable.",
          "Communication between services is always synchronous.",
        ],
        answer: "Services are independently deployable and scalable.",
      },
      {
        question: "Which communication protocol is commonly used for synchronous communication between microservices?",
        options: [
          "FTP",
          "SMTP",
          "HTTP/REST",
          "SOAP",
        ],
        answer: "HTTP/REST",
      },
      {
        question: "What is the role of an API Gateway in a microservices architecture?",
        options: [
          "To store all the data for the microservices.",
          "To act as a single entry point for all client requests.",
          "To deploy the microservices.",
          "To monitor the health of the microservices.",
        ],
        answer: "To act as a single entry point for all client requests.",
      },
      {
        question: "What does 'loose coupling' mean in the context of microservices?",
        options: [
          "Services are not related to each other.",
          "Services can be changed or replaced without affecting others.",
          "Services share the same database.",
          "Services are deployed together.",
        ],
        answer: "Services can be changed or replaced without affecting others.",
      },
      {
        question: "Which of the following is a benefit of using microservices?",
        options: [
          "Simplified debugging process.",
          "Reduced operational overhead.",
          "Improved fault isolation.",
          "Lower initial development cost.",
        ],
        answer: "Improved fault isolation.",
      },
      {
        question: "What is a common drawback of microservices architecture?",
        options: [
          "Difficulty in scaling services.",
          "Increased complexity in managing distributed systems.",
          "Slower development cycles.",
          "Lack of technology diversity.",
        ],
        answer: "Increased complexity in managing distributed systems.",
      },
      {
        question: "In a microservices architecture, what is a 'service'?",
        options: [
          "A large, monolithic application.",
          "A small, autonomous process focused on a single business capability.",
          "A shared library used by all components.",
          "A database server.",
        ],
        answer: "A small, autonomous process focused on a single business capability.",
      },
      {
        question: "How do microservices typically communicate with each other?",
        options: [
          "Direct memory access.",
          "Through a shared file system.",
          "Via well-defined APIs.",
          "By modifying a central configuration file.",
        ],
        answer: "Via well-defined APIs.",
      },
      {
        question: "What is the primary goal of decomposing a system into microservices?",
        options: [
          "To make the system more complex.",
          "To increase the size of the development team.",
          "To enable agility, scalability, and independent evolution of components.",
          "To use as many different programming languages as possible.",
        ],
        answer: "To enable agility, scalability, and independent evolution of components.",
      },
      {
        question: "What is a 'monolithic' architecture?",
        options: [
          "An architecture built with a single programming language.",
          "An architecture where the entire application is built as a single, unified unit.",
          "An architecture that uses microservices.",
          "An architecture that is deployed on a single server.",
        ],
        answer: "An architecture where the entire application is built as a single, unified unit.",
      }
    ],
    intermediate: [
      {
        question: "What is the purpose of a service registry in a microservices architecture?",
        options: [
          "To provide a central location for storing service configurations.",
          "To enable services to discover the network locations of other services.",
          "To secure communication between services.",
          "To load balance requests between service instances.",
        ],
        answer: "To enable services to discover the network locations of other services.",
      },
      {
        question: "What is the Circuit Breaker pattern used for in microservices?",
        options: [
          "To secure the communication between services.",
          "To handle failures when a service calls another service that is unavailable.",
          "To manage the deployment of services.",
          "To store distributed transactions.",
        ],
        answer: "To handle failures when a service calls another service that is unavailable.",
      },
      {
        question: "What is eventual consistency in the context of microservices?",
        options: [
          "A state where all data replicas will eventually become consistent without any specific order.",
          "A guarantee that all data is always consistent across all services.",
          "A method for deploying services in a consistent order.",
          "A pattern for managing synchronous communication.",
        ],
        answer: "A state where all data replicas will eventually become consistent without any specific order.",
      },
      {
        question: "What is 'idempotency' and why is it important in microservices?",
        options: [
          "The ability to perform an operation multiple times with the same result.",
          "The ability of a service to run on any platform.",
          "The process of encrypting all service-to-service communication.",
          "A technique for reducing service latency.",
        ],
        answer: "The ability to perform an operation multiple times with the same result.",
      },
      {
        question: "What is the role of a message broker (like RabbitMQ or Kafka) in a microservices architecture?",
        options: [
          "To provide synchronous request-response communication.",
          "To enable reliable asynchronous communication between services.",
          "To store service metadata.",
          "To serve static content.",
        ],
        answer: "To enable reliable asynchronous communication between services.",
      },
      {
        question: "What is 'containerization' and how does it benefit microservices?",
        options: [
          "A way to bundle services into a single large application.",
          "Packaging an application and its dependencies into a standardized unit for development, shipment, and deployment.",
          "A database sharding technique.",
          "A UI design pattern.",
        ],
        answer: "Packaging an application and its dependencies into a standardized unit for development, shipment, and deployment.",
      },
      {
        question: "What is the 'Database per Service' pattern?",
        options: [
          "All services share a single, centralized database.",
          "Each microservice has its own private database.",
          "A pattern where databases are not used at all.",
          "A pattern where each service has a read-only copy of a central database.",
        ],
        answer: "Each microservice has its own private database.",
      },
      {
        question: "What is 'centralized logging' in a microservices context?",
        options: [
          "Each service writes logs to its own local file.",
          "Aggregating logs from all services into a single, central location for analysis.",
          "Disabling logging to improve performance.",
          "Only logging errors and not informational messages.",
        ],
        answer: "Aggregating logs from all services into a single, central location for analysis.",
      },
      {
        question: "What is the purpose of 'health checks' in a microservices architecture?",
        options: [
          "To check for security vulnerabilities.",
          "To determine if a service instance is running and able to handle requests.",
          "To verify the correctness of the business logic.",
          "To measure the code coverage of tests.",
        ],
        answer: "To determine if a service instance is running and able to handle requests.",
      },
      {
        question: "What is 'semantic versioning' (SemVer) and why is it useful for microservices APIs?",
        options: [
          "A versioning scheme that reflects the underlying changes in the API (major, minor, patch).",
          "A way to automatically generate API documentation.",
          "A random versioning system.",
          "A versioning scheme based on the date of release.",
        ],
        answer: "A versioning scheme that reflects the underlying changes in the API (major, minor, patch).",
      }
    ],
    advanced: [
      {
        question: "What is the Saga pattern used to manage in a microservices architecture?",
        options: [
          "Synchronous communication between services.",
          "Service discovery and registration.",
          "Distributed transactions that span multiple services.",
          "Centralized logging and monitoring.",
        ],
        answer: "Distributed transactions that span multiple services.",
      },
      {
        question: "What is the role of a container orchestration platform like Kubernetes in a microservices architecture?",
        options: [
          "To write the code for the microservices.",
          "To manage the deployment, scaling, and operation of containerized microservices.",
          "To provide a single database for all microservices.",
          "To design the user interface for the application.",
        ],
        answer: "To manage the deployment, scaling, and operation of containerized microservices.",
      },
      {
        question: "What is the difference between choreography and orchestration in microservices communication?",
        options: [
          "Choreography involves a central controller, while orchestration does not.",
          "Orchestration involves a central controller that directs the interaction, while choreography involves each service working independently.",
          "There is no difference between the two.",
          "Choreography is for synchronous communication, while orchestration is for asynchronous communication.",
        ],
        answer: "Orchestration involves a central controller that directs the interaction, while choreography involves each service working independently.",
      },
      {
        question: "What is a 'service mesh' (e.g., Istio, Linkerd) and what problem does it solve?",
        options: [
          "A database management tool.",
          "A dedicated infrastructure layer for making service-to-service communication safe, fast, and reliable.",
          "A front-end framework for building user interfaces.",
          "A code generation tool.",
        ],
        answer: "A dedicated infrastructure layer for making service-to-service communication safe, fast, and reliable.",
      },
      {
        question: "What is the 'Command Query Responsibility Segregation' (CQRS) pattern?",
        options: [
          "A pattern that combines commands and queries into a single model.",
          "A pattern that separates models for reading (query) and writing (command) data.",
          "A security pattern for authenticating users.",
          "A deployment strategy.",
        ],
        answer: "A pattern that separates models for reading (query) and writing (command) data.",
      },
      {
        question: "How does 'Event Sourcing' work?",
        options: [
          "By storing only the latest state of the data.",
          "By storing a sequence of state-changing events, rather than the current state.",
          "By sourcing events from external systems only.",
          "By discarding old events to save space.",
        ],
        answer: "By storing a sequence of state-changing events, rather than the current state.",
      },
      {
        question: "What is 'Domain-Driven Design' (DDD) and how does it relate to microservices?",
        options: [
          "A design approach that focuses on the database schema first.",
          "A software development approach that focuses on modeling the software to match a domain according to input from that domain's experts.",
          "A UI-first design methodology.",
          "A specific programming language.",
        ],
        answer: "A software development approach that focuses on modeling the software to match a domain according to input from that domain's experts.",
      },
      {
        question: "In DDD, what is a 'Bounded Context'?",
        options: [
          "The physical boundary of a server.",
          "A boundary within which a particular domain model is well-defined and consistent.",
          "A security boundary for a user session.",
          "The limit of how many services can be deployed.",
        ],
        answer: "A boundary within which a particular domain model is well-defined and consistent.",
      },
      {
        question: "What is the purpose of 'distributed tracing' in a microservices architecture?",
        options: [
          "To trace the execution of code within a single service.",
          "To track a request as it flows through multiple services, helping to debug and understand performance issues.",
          "To manage database transactions.",
          "To deploy services in a specific order.",
        ],
        answer: "To track a request as it flows through multiple services, helping to debug and understand performance issues.",
      },
      {
        question: "What is the 'Strangler Fig' pattern used for?",
        options: [
          "For creating new microservices from scratch.",
          "For incrementally migrating a legacy monolithic application to a microservices architecture.",
          "For securing communication between services.",
          "For managing distributed transactions.",
        ],
        answer: "For incrementally migrating a legacy monolithic application to a microservices architecture.",
      }
    ],
  },
};
