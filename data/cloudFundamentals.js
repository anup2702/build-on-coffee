const cloudFundamentalsQuestions = {
  beginner: [
    {
      question: "What is the fundamental concept of cloud computing?",
      options: [
        "Running software on your local computer",
        "Storing data on a physical server in your office",
        "Accessing computing resources over the internet",
        "Using a private network for all your computing needs",
      ],
      answer: "Accessing computing resources over the internet",
    },
    {
      question: "Which of the following is a key benefit of cloud computing?",
      options: [
        "High upfront hardware costs",
        "Limited scalability",
        "Pay-as-you-go pricing",
        "Slow deployment times",
      ],
      answer: "Pay-as-you-go pricing",
    },
    {
      question: "What are the three main service models of cloud computing?",
      options: [
        "IaaS, PaaS, SaaS",
        "TCP, IP, HTTP",
        "CPU, RAM, SSD",
        "HTML, CSS, JavaScript",
      ],
      answer: "IaaS, PaaS, SaaS",
    },
    {
      question: "What does IaaS stand for?",
      options: [
        "Infrastructure as a Service",
        "Internet as a Service",
        "Integration as a Service",
        "Identity as a Service",
      ],
      answer: "Infrastructure as a Service",
    },
    {
      question: "Which cloud deployment model is owned and operated by a third-party cloud provider?",
      options: [
        "Private Cloud",
        "Public Cloud",
        "Hybrid Cloud",
        "Community Cloud",
      ],
      answer: "Public Cloud",
    },
    {
      question: "What is a common use case for PaaS (Platform as a Service)?",
      options: [
        "Hosting a website",
        "Developing and deploying applications",
        "Storing files",
        "Running virtual machines",
      ],
      answer: "Developing and deploying applications",
    },
    {
      question: "Which of the following is an example of a SaaS (Software as a Service) application?",
      options: [
        "Microsoft Azure",
        "Google Drive",
        "Amazon EC2",
        "Docker",
      ],
      answer: "Google Drive",
    },
    {
      question: "What is scalability in cloud computing?",
      options: [
        "The ability to access the cloud from anywhere",
        "The ability to increase or decrease resources as needed",
        "The security of the cloud",
        "The speed of the internet connection",
      ],
      answer: "The ability to increase or decrease resources as needed",
    },
    {
      question: "What is a region in the context of cloud providers like AWS, Azure, and GCP?",
      options: [
        "A specific country",
        "A single data center",
        "A geographical area with multiple data centers",
        "A continent",
      ],
      answer: "A geographical area with multiple data centers",
    },
    {
      question: "What is the primary advantage of using a Content Delivery Network (CDN)?",
      options: [
        "It increases the security of your application",
        "It reduces latency by caching content closer to users",
        "It provides a platform for developing applications",
        "It is a type of virtual machine",
      ],
      answer: "It reduces latency by caching content closer to users",
    },
  ],
  intermediate: [
    {
      question:
        "What is the difference between a public, private, and hybrid cloud?",
      options: [
        "There is no difference",
        "Public is for government, private is for individuals, hybrid is for businesses",
        "Public is shared, private is dedicated, hybrid is a mix of both",
        "Public is free, private is paid, hybrid is a trial version",
      ],
      answer: "Public is shared, private is dedicated, hybrid is a mix of both",
    },
    {
      question: "What is virtualization in the context of cloud computing?",
      options: [
        "Creating a virtual reality environment",
        "Running multiple operating systems on a single physical server",
        "A type of cloud storage",
        "A security protocol for cloud applications",
      ],
      answer: "Running multiple operating systems on a single physical server",
    },
    {
      question: "What is a hypervisor?",
      options: [
        "A type of cloud storage",
        "A tool for managing virtual machines",
        "A security protocol",
        "A physical server",
      ],
      answer: "A tool for managing virtual machines",
    },
    {
      question: "What is the role of an API in cloud computing?",
      options: [
        "To provide a graphical user interface",
        "To allow different services to communicate with each other",
        "To store data",
        "To secure the cloud",
      ],
      answer: "To allow different services to communicate with each other",
    },
    {
      question: "What is load balancing?",
      options: [
        "A way to make your application run faster",
        "A way to distribute traffic across multiple servers",
        "A type of cloud storage",
        "A security protocol",
      ],
      answer: "A way to distribute traffic across multiple servers",
    },
    {
      question: "What is the difference between horizontal and vertical scaling?",
      options: [
        "Horizontal scaling adds more resources to an existing server, while vertical scaling adds more servers",
        "Vertical scaling adds more resources to an existing server, while horizontal scaling adds more servers",
        "There is no difference",
        "Horizontal scaling is for web applications, while vertical scaling is for databases",
      ],
      answer: "Vertical scaling adds more resources to an existing server, while horizontal scaling adds more servers",
    },
    {
      question: "What is a container in cloud computing?",
      options: [
        "A type of virtual machine",
        "A lightweight, standalone, executable package of software that includes everything needed to run it",
        "A type of cloud storage",
        "A security protocol",
      ],
      answer: "A lightweight, standalone, executable package of software that includes everything needed to run it",
    },
    {
      question: "What is the purpose of a firewall in a cloud environment?",
      options: [
        "To store data",
        "To monitor and filter network traffic",
        "To run applications",
        "To manage virtual machines",
      ],
      answer: "To monitor and filter network traffic",
    },
    {
      question: "What is a VPC (Virtual Private Cloud)?",
      options: [
        "A public cloud",
        "A private cloud",
        "A logically isolated section of a public cloud",
        "A type of cloud storage",
      ],
      answer: "A logically isolated section of a public cloud",
    },
    {
      question: "What is the shared responsibility model in cloud security?",
      options: [
        "The cloud provider is responsible for all security",
        "The customer is responsible for all security",
        "The cloud provider and the customer share responsibility for security",
        "There is no such model",
      ],
      answer: "The cloud provider and the customer share responsibility for security",
    },
  ],
  advanced: [
    {
      question: "What is serverless computing?",
      options: [
        "A type of cloud service that requires no servers",
        "A model where the cloud provider manages the servers and you only pay for the execution time",
        "A marketing term with no real meaning",
        "A way to run applications without an internet connection",
      ],
      answer:
        "A model where the cloud provider manages the servers and you only pay for the execution time",
    },
    {
      question: "What is Infrastructure as Code (IaC)?",
      options: [
        "A way to write code that runs on cloud infrastructure",
        "The management of infrastructure in a descriptive model, using the same versioning as DevOps team uses for source code",
        "A type of cloud storage",
        "A security protocol",
      ],
      answer: "The management of infrastructure in a descriptive model, using the same versioning as DevOps team uses for source code",
    },
    {
      question: "What is the role of a service mesh in a microservices architecture?",
      options: [
        "To provide a graphical user interface",
        "To manage communication between microservices",
        "To store data",
        "To secure the cloud",
      ],
      answer: "To manage communication between microservices",
    },
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
      question: "What is the difference between a data lake and a data warehouse?",
      options: [
        "A data lake stores structured data, while a data warehouse stores unstructured data",
        "A data warehouse stores structured data, while a data lake stores unstructured data",
        "There is no difference",
        "A data lake is for small amounts of data, while a data warehouse is for large amounts of data",
      ],
      answer: "A data warehouse stores structured data, while a data lake stores unstructured data",
    },
    {
      question: "What is a multi-cloud strategy?",
      options: [
        "Using multiple cloud providers",
        "Using multiple services from a single cloud provider",
        "Using a private cloud",
        "Using a hybrid cloud",
      ],
      answer: "Using multiple cloud providers",
    },
    {
      question: "What is a disaster recovery plan in the context of cloud computing?",
      options: [
        "A plan to recover from a natural disaster",
        "A plan to recover from a security breach",
        "A plan to recover from a service outage",
        "All of the above",
      ],
      answer: "All of the above",
    },
    {
      question: "What is a cloud access security broker (CASB)?",
      options: [
        "A tool for managing cloud security",
        "A security policy enforcement point that is placed between cloud service consumers and cloud service providers",
        "A type of cloud storage",
        "A security protocol",
      ],
      answer: "A security policy enforcement point that is placed between cloud service consumers and cloud service providers",
    },
    {
      question: "What is a cloud service-level agreement (SLA)?",
      options: [
        "A contract between a cloud provider and a customer that defines the level of service that will be provided",
        "A document that describes the security of the cloud",
        "A document that describes the features of the cloud",
        "A document that describes the pricing of the cloud",
      ],
      answer: "A contract between a cloud provider and a customer that defines the level of service that will be provided",
    },
    {
      question: "What is vendor lock-in in the context of cloud computing?",
      options: [
        "A situation where a customer is unable to switch cloud providers because of the high cost or effort involved",
        "A situation where a customer is locked into a long-term contract with a cloud provider",
        "A situation where a customer is unable to access their data",
        "A situation where a customer is unable to use a specific service",
      ],
      answer: "A situation where a customer is unable to switch cloud providers because of the high cost or effort involved",
    },
  ],
};

export default cloudFundamentalsQuestions;