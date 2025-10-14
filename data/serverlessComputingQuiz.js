
export const serverlessComputingQuiz = {
  title: "Serverless Computing Quiz",
  questions: {
    beginner: [
      {
        question: "What is serverless computing?",
        options: [
          "A way to run applications without managing servers",
          "A type of computer that does not have a server",
          "A programming language",
          "A database"
        ],
        answer: "A way to run applications without managing servers"
      },
      {
        question: "What is a Function as a Service (FaaS)?",
        options: [
          "A cloud computing service that allows you to run code in response to events without managing the underlying infrastructure",
          "A type of database",
          "A programming language",
          "A hardware device"
        ],
        answer: "A cloud computing service that allows you to run code in response to events without managing the underlying infrastructure"
      },
      {
        question: "What is a major benefit of serverless computing?",
        options: [
          "Pay-per-use pricing model",
          "You have to manage your own servers",
          "It is slower than traditional server-based applications",
          "It is less scalable"
        ],
        answer: "Pay-per-use pricing model"
      },
      {
        question: "What is a common use case for serverless computing?",
        options: [
          "Building web APIs and mobile backends",
          "Running a database",
          "Hosting a static website",
          "Training a machine learning model"
        ],
        answer: "Building web APIs and mobile backends"
      },
      {
        question: "What is a trigger in the context of serverless computing?",
        options: [
          "An event that invokes a serverless function",
          "A type of database",
          "A programming language",
          "A hardware device"
        ],
        answer: "An event that invokes a serverless function"
      },
      {
        question: "What is a cold start?",
        options: [
          "The delay that occurs when a serverless function is invoked for the first time or after a period of inactivity",
          "When a serverless function is running",
          "When a serverless function is being deployed",
          "When a serverless function is being deleted"
        ],
        answer: "The delay that occurs when a serverless function is invoked for the first time or after a period of inactivity"
      },
      {
        question: "What is a warm start?",
        options: [
          "When a serverless function is already running and can immediately handle a new request",
          "When a serverless function is being deployed",
          "When a serverless function is being deleted",
          "The same as a cold start"
        ],
        answer: "When a serverless function is already running and can immediately handle a new request"
      },
      {
        question: "What is a popular serverless platform?",
        options: [
          "AWS Lambda",
          "Docker",
          "Kubernetes",
          "Jenkins"
        ],
        answer: "AWS Lambda"
      },
      {
        question: "What is the execution environment for a serverless function?",
        options: [
          "A container or a microVM",
          "A physical server",
          "A virtual machine",
          "A developer's laptop"
        ],
        answer: "A container or a microVM"
      },
      {
        question: "What is the role of the cloud provider in serverless computing?",
        options: [
          "To manage the underlying infrastructure, including servers, scaling, and patching",
          "To write the application code",
          "To design the user interface",
          "To test the application"
        ],
        answer: "To manage the underlying infrastructure, including servers, scaling, and patching"
      }
    ],
    intermediate: [
      {
        question: "What is the difference between serverless and PaaS (Platform as a Service)?",
        options: [
          "Serverless is more abstract and event-driven, while PaaS provides a platform for deploying and managing applications",
          "There is no difference",
          "PaaS is more abstract than serverless",
          "Serverless is for databases, while PaaS is for applications"
        ],
        answer: "Serverless is more abstract and event-driven, while PaaS provides a platform for deploying and managing applications"
      },
      {
        question: "What is the Serverless Framework?",
        options: [
          "A tool that helps you develop, deploy, and manage serverless applications on various cloud providers",
          "A cloud provider",
          "A programming language",
          "A database"
        ],
        answer: "A tool that helps you develop, deploy, and manage serverless applications on various cloud providers"
      },
      {
        question: "What is a serverless API gateway?",
        options: [
          "A service that acts as a front door for your serverless functions, handling tasks like request routing, authentication, and rate limiting",
          "A database for storing API keys",
          "A tool for testing APIs",
          "A programming language for writing APIs"
        ],
        answer: "A service that acts as a front door for your serverless functions, handling tasks like request routing, authentication, and rate limiting"
      },
      {
        question: "What is a serverless database?",
        options: [
          "A database that is designed to work well with serverless applications, often with features like automatic scaling and pay-per-use pricing",
          "A database that does not have a server",
          "A database that is not relational",
          "A database that is not a NoSQL database"
        ],
        answer: "A database that is designed to work well with serverless applications, often with features like automatic scaling and pay-per-use pricing"
      },
      {
        question: "What is the role of an event source in a serverless architecture?",
        options: [
          "A service or resource that generates events to trigger serverless functions",
          "A database for storing events",
          "A tool for visualizing events",
          "A programming language for writing event handlers"
        ],
        answer: "A service or resource that generates events to trigger serverless functions"
      },
      {
        question: "What is a stateful serverless application?",
        options: [
          "A serverless application that needs to maintain state between invocations",
          "A serverless application that is not working correctly",
          "A serverless application that is very slow",
          "A serverless application that is very expensive"
        ],
        answer: "A serverless application that needs to maintain state between invocations"
      },
      {
        question: "What is a stateless serverless application?",
        options: [
          "A serverless application that does not need to maintain state between invocations",
          "A serverless application that is working correctly",
          "A serverless application that is very fast",
          "A serverless application that is very cheap"
        ],
        answer: "A serverless application that does not need to maintain state between invocations"
      },
      {
        question: "What is a serverless workflow?",
        options: [
          "A way to orchestrate multiple serverless functions to accomplish a complex task",
          "A tool for managing serverless projects",
          "A programming language for writing serverless functions",
          "A database for storing workflow state"
        ],
        answer: "A way to orchestrate multiple serverless functions to accomplish a complex task"
      },
      {
        question: "What is the difference between a monolith and a serverless application?",
        options: [
          "A monolith is a single, large application, while a serverless application is composed of small, independent functions",
          "There is no difference",
          "A monolith is faster than a serverless application",
          "A monolith is more scalable than a serverless application"
        ],
        answer: "A monolith is a single, large application, while a serverless application is composed of small, independent functions"
      },
      {
        question: "What is a potential security concern with serverless computing?",
        options: [
          "Event injection attacks",
          "SQL injection attacks",
          "Cross-site scripting (XSS) attacks",
          "Denial-of-service (DoS) attacks"
        ],
        answer: "Event injection attacks"
      }
    ],
    advanced: [
      {
        question: "What is the role of a sidecar in a serverless architecture?",
        options: [
          "A separate process that runs alongside a serverless function to provide additional functionality, such as logging, monitoring, or service discovery",
          "A type of database",
          "A programming language",
          "A hardware device"
        ],
        answer: "A separate process that runs alongside a serverless function to provide additional functionality, such as logging, monitoring, or service discovery"
      },
      {
        question: "What is the App-Side security model in serverless?",
        options: [
          "A security model where the application code is responsible for its own security",
          "A security model where the cloud provider is responsible for all security",
          "A security model where there is no security",
          "A security model that is not used in serverless"
        ],
        answer: "A security model where the application code is responsible for its own security"
      },
      {
        question: "What is the difference between a container and a serverless function?",
        options: [
          "A container is a more general-purpose technology that can run any application, while a serverless function is a more specialized technology for running event-driven code",
          "There is no difference",
          "A container is slower than a serverless function",
          "A container is less scalable than a serverless function"
        ],
        answer: "A container is a more general-purpose technology that can run any application, while a serverless function is a more specialized technology for running event-driven code"
      },
      {
        question: "What is a serverless framework for building applications on AWS?",
        options: [
          "AWS SAM (Serverless Application Model)",
          "Terraform",
          "Ansible",
          "Jenkins"
        ],
        answer: "AWS SAM (Serverless Application Model)"
      },
      {
        question: "What is the role of a message queue in a serverless architecture?",
        options: [
          "To decouple services and provide a buffer for events",
          "To store data",
          "To run code",
          "To monitor services"
        ],
        answer: "To decouple services and provide a buffer for events"
      },
      {
        question: "What is a serverless orchestration service on AWS?",
        options: [
          "AWS Step Functions",
          "AWS Lambda",
          "Amazon S3",
          "Amazon DynamoDB"
        ],
        answer: "AWS Step Functions"
      },
      {
        question: "What is a serverless event bus on AWS?",
        options: [
          "Amazon EventBridge",
          "Amazon SQS",
          "Amazon SNS",
          "Amazon Kinesis"
        ],
        answer: "Amazon EventBridge"
      },
      {
        question: "What is a serverless CI/CD pipeline?",
        options: [
          "A CI/CD pipeline that is built using serverless services",
          "A CI/CD pipeline that is not automated",
          "A CI/CD pipeline that is very slow",
          "A CI/CD pipeline that is very expensive"
        ],
        answer: "A CI/CD pipeline that is built using serverless services"
      },
      {
        question: "What is the future of serverless computing?",
        options: [
          "It is expected to become more popular and widely adopted",
          "It is expected to become less popular and eventually disappear",
          "It is not clear what the future of serverless computing will be",
          "It will be replaced by a new technology"
        ],
        answer: "It is expected to become more popular and widely adopted"
      },
      {
        question: "What is a challenge of debugging serverless applications?",
        options: [
          "It can be difficult to reproduce the production environment locally",
          "It is easy to debug serverless applications",
          "There are no challenges to debugging serverless applications",
          "The same as debugging monolithic applications"
        ],
        answer: "It can be difficult to reproduce the production environment locally"
      }
    ]
  }
};
