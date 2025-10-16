
export const monitoringAndLoggingQuiz = {
  title: "Monitoring & Logging Quiz",
  questions: {
    beginner: [
      {
        question: "What is the primary purpose of monitoring?",
        options: [
          "To collect and analyze data to track the performance and health of a system",
          "To write code",
          "To design user interfaces",
          "To deploy applications"
        ],
        answer: "To collect and analyze data to track the performance and health of a system"
      },
      {
        question: "What is a log?",
        options: [
          "A record of events that occur in a system",
          "A type of database",
          "A programming language",
          "A hardware device"
        ],
        answer: "A record of events that occur in a system"
      },
      {
        question: "What is a metric?",
        options: [
          "A quantitative measurement of a system's behavior",
          "A qualitative description of a system's behavior",
          "A log message",
          "An alert"
        ],
        answer: "A quantitative measurement of a system's behavior"
      },
      {
        question: "What is an alert?",
        options: [
          "A notification that is triggered when a predefined condition is met",
          "A log message",
          "A metric",
          "A dashboard"
        ],
        answer: "A notification that is triggered when a predefined condition is met"
      },
      {
        question: "What is a dashboard?",
        options: [
          "A visual representation of data, often including charts, graphs, and other widgets",
          "A command-line interface",
          "A database",
          "A programming language"
        ],
        answer: "A visual representation of data, often including charts, graphs, and other widgets"
      },
      {
        question: "What is the difference between logging and monitoring?",
        options: [
          "Logging is about recording events, while monitoring is about observing and checking the performance of a system over time",
          "There is no difference",
          "Logging is for errors, while monitoring is for successes",
          "Monitoring is a subset of logging"
        ],
        answer: "Logging is about recording events, while monitoring is about observing and checking the performance of a system over time"
      },
      {
        question: "What is a common tool for monitoring?",
        options: [
          "Prometheus",
          "Git",
          "Docker",
          "Kubernetes"
        ],
        answer: "Prometheus"
      },
      {
        question: "What is a common tool for logging?",
        options: [
          "ELK Stack (Elasticsearch, Logstash, Kibana)",
          "Jenkins",
          "Ansible",
          "Terraform"
        ],
        answer: "ELK Stack (Elasticsearch, Logstash, Kibana)"
      },
      {
        question: "What is a log level?",
        options: [
          "A way to categorize log messages by severity (e.g., INFO, WARN, ERROR)",
          "The size of a log file",
          "The format of a log message",
          "The location of a log file"
        ],
        answer: "A way to categorize log messages by severity (e.g., INFO, WARN, ERROR)"
      },
      {
        question: "What is uptime?",
        options: [
          "The amount of time a system is operational and available",
          "The amount of time a system is down for maintenance",
          "The time it takes to restart a system",
          "The time it takes to deploy an application"
        ],
        answer: "The amount of time a system is operational and available"
      }
    ],
    intermediate: [
      {
        question: "What is structured logging?",
        options: [
          "Logging messages in a consistent, machine-readable format (e.g., JSON)",
          "Logging messages in a human-readable format",
          "Logging only errors",
          "Logging only successes"
        ],
        answer: "Logging messages in a consistent, machine-readable format (e.g., JSON)"
      },
      {
        question: "What is a time-series database?",
        options: [
          "A database that is optimized for storing and querying time-stamped data",
          "A relational database",
          "A NoSQL database",
          "A graph database"
        ],
        answer: "A database that is optimized for storing and querying time-stamped data"
      },
      {
        question: "What is the difference between white-box and black-box monitoring?",
        options: [
          "White-box monitoring is based on metrics exposed by the internals of the system, while black-box monitoring tests the system from the outside",
          "Black-box monitoring is more detailed than white-box monitoring",
          "There is no difference",
          "White-box monitoring is for hardware, while black-box monitoring is for software"
        ],
        answer: "White-box monitoring is based on metrics exposed by the internals of the system, while black-box monitoring tests the system from the outside"
      },
      {
        question: "What is a service level agreement (SLA)?",
        options: [
          "A contract between a service provider and a customer that defines the level of service expected from the service provider",
          "A document that describes the architecture of a system",
          "A list of all the features of a system",
          "A marketing document"
        ],
        answer: "A contract between a service provider and a customer that defines the level of service expected from the service provider"
      },
      {
        question: "What is a service level objective (SLO)?",
        options: [
          "A specific, measurable target for the performance of a service",
          "A general goal for the performance of a service",
          "The same as an SLA",
          "A description of how a service works"
        ],
        answer: "A specific, measurable target for the performance of a service"
      },
      {
        question: "What is a service level indicator (SLI)?",
        options: [
          "A quantitative measure of some aspect of the level of service that is being provided",
          "A qualitative measure of the level of service that is being provided",
          "The same as an SLO",
          "The same as an SLA"
        ],
        answer: "A quantitative measure of some aspect of the level of service that is being provided"
      },
      {
        question: "What is distributed tracing?",
        options: [
          "A method of tracking the path of a request as it travels through a distributed system",
          "A way to trace the execution of a single process",
          "A way to debug code",
          "A way to monitor network traffic"
        ],
        answer: "A method of tracking the path of a request as it travels through a distributed system"
      },
      {
        question: "What is a log aggregation?",
        options: [
          "The process of collecting logs from multiple sources and storing them in a central location",
          "The process of deleting old logs",
          "The process of analyzing logs",
          "The process of writing logs to a file"
        ],
        answer: "The process of collecting logs from multiple sources and storing them in a central location"
      },
      {
        question: "What is the purpose of log rotation?",
        options: [
          "To prevent log files from growing too large by creating new log files and archiving or deleting old ones",
          "To rotate the text in a log file",
          "To encrypt log files",
          "To send log files to a remote server"
        ],
        answer: "To prevent log files from growing too large by creating new log files and archiving or deleting old ones"
      },
      {
        question: "What is a health check?",
        options: [
          "A way to determine if a service is running and able to respond to requests",
          "A way to check the health of a developer",
          "A way to check the health of a server's hardware",
          "A way to check the health of a database"
        ],
        answer: "A way to determine if a service is running and able to respond to requests"
      }
    ],
    advanced: [
      {
        question: "What is observability?",
        options: [
          "The ability to understand the internal state of a system from its external outputs",
          "The same as monitoring",
          "The same as logging",
          "The ability to see the source code of a system"
        ],
        answer: "The ability to understand the internal state of a system from its external outputs"
      },
      {
        question: "What are the three pillars of observability?",
        options: [
          "Metrics, logs, and traces",
          "Monitoring, logging, and alerting",
          "Dashboards, alerts, and reports",
          "SLIs, SLOs, and SLAs"
        ],
        answer: "Metrics, logs, and traces"
      },
      {
        question: "What is anomaly detection?",
        options: [
          "The process of identifying unexpected patterns or outliers in data",
          "The process of detecting security vulnerabilities",
          "The process of detecting network intrusions",
          "The process of detecting hardware failures"
        ],
        answer: "The process of identifying unexpected patterns or outliers in data"
      },
      {
        question: "What is root cause analysis (RCA)?",
        options: [
          "The process of identifying the fundamental cause of a problem",
          "The process of fixing a problem",
          "The process of documenting a problem",
          "The process of reporting a problem"
        ],
        answer: "The process of identifying the fundamental cause of a problem"
      },
      {
        question: "What is a chaos engineering?",
        options: [
          "The practice of experimenting on a distributed system in order to build confidence in the system's capability to withstand turbulent conditions in production",
          "The practice of randomly breaking things in production",
          "The practice of writing chaotic code",
          "The practice of not testing code"
        ],
        answer: "The practice of experimenting on a distributed system in order to build confidence in the system's capability to withstand turbulent conditions in production"
      },
      {
        question: "What is eBPF and how can it be used for monitoring?",
        options: [
          "A technology that allows running sandboxed programs in the Linux kernel without changing kernel source code or loading kernel modules. It can be used for high-performance network and performance monitoring.",
          "A new programming language for writing web applications",
          "A database for storing metrics",
          "A tool for visualizing logs"
        ],
        answer: "A technology that allows running sandboxed programs in the Linux kernel without changing kernel source code or loading kernel modules. It can be used for high-performance network and performance monitoring."
      },
      {
        question: "What is a service mesh and how does it help with observability?",
        options: [
          "A dedicated infrastructure layer for making service-to-service communication safe, fast, and reliable. It can provide detailed metrics, logs, and traces for all traffic between services.",
          "A tool for managing databases",
          "A tool for deploying applications",
          "A tool for writing code"
        ],
        answer: "A dedicated infrastructure layer for making service-to-service communication safe, fast, and reliable. It can provide detailed metrics, logs, and traces for all traffic between services."
      },
      {
        question: "What is the difference between sampling and aggregation in the context of metrics?",
        options: [
          "Sampling is the process of selecting a subset of data to represent the whole, while aggregation is the process of combining multiple data points into a single value",
          "There is no difference",
          "Sampling is for logs, while aggregation is for metrics",
          "Aggregation is a subset of sampling"
        ],
        answer: "Sampling is the process of selecting a subset of data to represent the whole, while aggregation is the process of combining multiple data points into a single value"
      },
      {
        question: "What is a burn rate in the context of SRE?",
        options: [
          "The rate at which a service is consuming its error budget",
          "The rate at which a service is consuming its budget",
          "The rate at which a service is consuming its resources",
          "The rate at which a service is consuming its time"
        ],
        answer: "The rate at which a service is consuming its error budget"
      },
      {
        question: "What is the USE method for monitoring?",
        options: [
          "A methodology for identifying performance bottlenecks by analyzing three metrics for each resource: Utilization, Saturation, and Errors",
          "A methodology for monitoring user experience",
          "A methodology for monitoring database performance",
          "A methodology for monitoring network performance"
        ],
        answer: "A methodology for identifying performance bottlenecks by analyzing three metrics for each resource: Utilization, Saturation, and Errors"
      }
    ]
  }
};
