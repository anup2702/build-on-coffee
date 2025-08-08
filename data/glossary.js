 const glossaryData = [
    // Programming Concepts
    {
    term: "Algorithm",
    definition: "A step-by-step procedure or formula for solving a problem.",
    category: "Programming Concepts"
  },
    {
    term: "Loop",
    definition: "A programming construct that repeats a block of code as long as a condition is true.",
    category: "Programming Concepts"
  },
  {
    term: "Variable",
    definition: "A storage location identified by a name that holds data which can be changed during program execution.",
    category: "Programming Concepts"
  },
  {
  term: "Function",
  definition: "A block of code designed to perform a specific task. It can be called and reused throughout a program.",
  category: "Programming Concepts"
},
{
  term: "Recursion",
  definition: "A technique where a function calls itself to solve smaller instances of a problem.",
  category: "Programming Concepts"
},
{
  term: "Conditional Statement",
  definition: "A construct that executes different code blocks based on whether a condition is true or false (e.g., if, else).",
  category: "Programming Concepts"
},
{
  term: "Array",
  definition: "A data structure that holds a collection of items, each accessed by an index or key.",
  category: "Programming Concepts"
},
{
  term: "Object",
  definition: "A collection of related data (properties) and functions (methods) that model real-world entities in object-oriented programming.",
  category: "Programming Concepts"
},
{
  term: "Class",
  definition: "A blueprint for creating objects that defines the properties and behaviors shared by all instances.",
  category: "Programming Concepts"
},
{
  term: "Inheritance",
  definition: "A feature in object-oriented programming that allows a class to inherit properties and methods from another class.",
  category: "Programming Concepts"
},
{
  term: "Polymorphism",
  definition: "The ability of different classes to be treated as instances of the same class through a shared interface.",
  category: "Programming Concepts"
},
{
  term: "Encapsulation",
  definition: "The practice of hiding the internal details of an object and only exposing what is necessary.",
  category: "Programming Concepts"
},
{
  term: "Abstraction",
  definition: "Reducing complexity by hiding irrelevant details and showing only the essential features of an object.",
  category: "Programming Concepts"
},
{
  term: "Syntax",
  definition: "The set of rules that defines the structure of valid statements in a programming language.",
  category: "Programming Concepts"
},
{
  term: "Debugging",
  definition: "The process of identifying and fixing errors or bugs in a program.",
  category: "Programming Concepts"
},
{
  term: "Compilation",
  definition: "The process of converting source code into machine code before execution.",
  category: "Programming Concepts"
},
{
  term: "Exception Handling",
  definition: "A method of responding to runtime errors, allowing a program to continue or fail gracefully.",
  category: "Programming Concepts"
},
{
  term: "Data Type",
  definition: "A classification that specifies the type of data a variable can hold (e.g., integer, string, boolean).",
  category: "Programming Concepts"
},

  // Data Structures & Algorithms
  {
  term: "Algorithm",
  definition: "A step-by-step procedure for solving a problem or performing a task, typically in a finite amount of time.",
  category: "Data Structures & Algorithms"
},
{
  term: "Array",
  definition: "A data structure that stores elements in a fixed-size, indexed, and sequential manner.",
  category: "Data Structures & Algorithms"
},
{
  term: "Linked List",
  definition: "A linear data structure where each element points to the next, allowing efficient insertions and deletions.",
  category: "Data Structures & Algorithms"
},
{
  term: "Stack",
  definition: "A linear data structure that follows the Last In, First Out (LIFO) principle. Elements are added and removed from the top.",
  category: "Data Structures & Algorithms"
},
{
  term: "Queue",
  definition: "A linear data structure that follows the First In, First Out (FIFO) principle. Elements are added at the rear and removed from the front.",
  category: "Data Structures & Algorithms"
},
{
  term: "Hash Table",
  definition: "A data structure that stores key-value pairs and allows for fast data retrieval using hash functions.",
  category: "Data Structures & Algorithms"
},
{
  term: "Binary Tree",
  definition: "A tree data structure where each node has at most two children, called the left and right child.",
  category: "Data Structures & Algorithms"
},
{
  term: "Binary Search Tree (BST)",
  definition: "A type of binary tree where each node's left child contains values less than the node, and the right child contains values greater than the node.",
  category: "Data Structures & Algorithms"
},
{
  term: "Recursion",
  definition: "A technique where a function calls itself to solve a smaller instance of the same problem.",
  category: "Data Structures & Algorithms"
},
{
  term: "Sorting Algorithm",
  definition: "An algorithm that arranges elements in a certain order, commonly ascending or descending. Examples: Bubble Sort, Merge Sort, Quick Sort.",
  category: "Data Structures & Algorithms"
},
{
  term: "Searching Algorithm",
  definition: "An algorithm for finding an item in a data structure. Examples include Linear Search and Binary Search.",
  category: "Data Structures & Algorithms"
},
{
  term: "Greedy Algorithm",
  definition: "An algorithm that makes the optimal choice at each step with the hope of finding the global optimum.",
  category: "Data Structures & Algorithms"
},
{
  term: "Dynamic Programming",
  definition: "An optimization technique that solves complex problems by breaking them down into simpler subproblems and storing their solutions.",
  category: "Data Structures & Algorithms"
},
{
  term: "Graph",
  definition: "A data structure made up of nodes (vertices) connected by edges. Useful for modeling relationships and networks.",
  category: "Data Structures & Algorithms"
},
{
  term: "Depth-First Search (DFS)",
  definition: "An algorithm for traversing or searching tree or graph data structures by exploring as far as possible along each branch before backtracking.",
  category: "Data Structures & Algorithms"
},
{
  term: "Breadth-First Search (BFS)",
  definition: "An algorithm that explores all the neighbor nodes at the present depth before moving on to nodes at the next depth level.",
  category: "Data Structures & Algorithms"
},
{
  term: "Heap",
  definition: "A special tree-based data structure that satisfies the heap property: in a max heap, parent nodes are greater than children; in a min heap, they're smaller.",
  category: "Data Structures & Algorithms"
},
{
    term: "Big-O Notation",
    definition: "Describes the upper bound of an algorithm's time or space complexity.",
    category: "Data Structures & Algorithms"
    },
// Operating Systems
    {
  term: "Operating System (OS)",
  definition: "System software that manages computer hardware, software resources, and provides common services for computer programs.",
  category: "Operating System"
},
  {
    term: "Mutex",
    definition: "A program object that prevents multiple threads from accessing shared resources simultaneously.",
    category: "Operating System"
  },
{
  term: "Process",
  definition: "A running instance of a program that performs a specific task, with its own memory space.",
  category: "Operating System"
},
{
  term: "Thread",
  definition: "The smallest sequence of programmed instructions that can be managed independently by the OS.",
  category: "Operating System"
},
{
  term: "Multitasking",
  definition: "An OS feature that allows multiple processes to run at the same time by quickly switching between them.",
  category: "Operating System"
},
{
  term: "Scheduling",
  definition: "The method by which an OS decides which process or thread should run at any given time.",
  category: "Operating System"
},
{
  term: "Deadlock",
  definition: "A situation in which two or more processes are waiting for each other to release resources, causing them to remain stuck indefinitely.",
  category: "Operating System"
},
{
  term: "Virtual Memory",
  definition: "A memory management technique that gives an application the impression it has contiguous memory, even if it's physically scattered.",
  category: "Operating System"
},
{
  term: "Paging",
  definition: "A memory management scheme where the OS retrieves data from secondary storage in fixed-size blocks called pages.",
  category: "Operating System"
},
{
  term: "Segmentation",
  definition: "A memory management technique that divides processes into different segments like code, data, and stack.",
  category: "Operating System"
},
{
  term: "File System",
  definition: "A method an OS uses to store, retrieve, and organize data on storage devices.",
  category: "Operating System"
},
{
  term: "System Call",
  definition: "A programmatic way a process requests a service from the operating system, like reading a file or allocating memory.",
  category: "Operating System"
},
{
  term: "Context Switching",
  definition: "The process of saving the state of a running process and loading the state of the next process to run.",
  category: "Operating System"
},
{
  term: "User Space",
  definition: "The memory area where application software runs. It’s separated from the kernel space for protection.",
  category: "Operating System"
},
{
  term: "Kernel Space",
  definition: "The portion of memory reserved for the OS kernel, where privileged operations are executed.",
  category: "Operating System"
},
{
  term: "Interrupt",
  definition: "A signal to the processor indicating an event that needs immediate attention, allowing the OS to respond quickly.",
  category: "Operating System"
},
// Databases
 {
  term: "Database",
  definition: "An organized collection of structured information, typically stored electronically and accessed via software.",
  category: "Databases"
},
{
  term: "SQL",
  definition: "Structured Query Language – a standard language for storing, manipulating, and retrieving data in databases.",
  category: "Databases"
},
{
  term: "NoSQL",
  definition: "A category of databases that store data in formats other than traditional relational tables (e.g., JSON, key-value).",
  category: "Databases"
},
{
  term: "Primary Key",
  definition: "A column or group of columns in a table that uniquely identifies each row.",
  category: "Databases"
},
{
  term: "Foreign Key",
  definition: "A field in one table that links to the primary key in another table to establish a relationship.",
  category: "Databases"
},
{
  term: "Index",
  definition: "A database structure that improves the speed of data retrieval operations.",
  category: "Databases"
},
{
  term: "Query",
  definition: "A request made to a database to retrieve or manipulate data.",
  category: "Databases"
},
{
  term: "Transaction",
  definition: "A sequence of database operations that are treated as a single unit to ensure consistency and integrity.",
  category: "Databases"
},
{
  term: "Normalization",
  definition: "The process of organizing data to reduce redundancy and improve data integrity.",
  category: "Databases"
},
{
  term: "Schema",
  definition: "The structure that defines how data is organized in a database, including tables, fields, and relationships.",
  category: "Databases"
},
{
  term: "CRUD Operations",
  definition: "The four basic database operations: Create, Read, Update, Delete.",
  category: "Databases"
},
{
  term: "Replication",
  definition: "The process of copying data from one database server to another for backup or scaling.",
  category: "Databases"
},
 
  // Computer Networks
  {
  term: "IP Address",
  definition: "A unique string of numbers separated by periods or colons that identifies each computer using the Internet Protocol to communicate.",
  category: "Computer Networks"
},
{
  term: "DNS",
  definition: "Domain Name System – translates human-readable domain names (like google.com) into IP addresses.",
  category: "Computer Networks"
},
{
  term: "HTTP",
  definition: "HyperText Transfer Protocol – the protocol used by the web to transfer data between clients and servers.",
  category: "Computer Networks"
},
{
  term: "HTTPS",
  definition: "HTTP Secure – a secure version of HTTP that uses encryption (SSL/TLS) to protect data.",
  category: "Computer Networks"
},
{
  term: "TCP",
  definition: "Transmission Control Protocol – ensures reliable and ordered delivery of data packets over the internet.",
  category: "Computer Networks"
},
{
  term: "UDP",
  definition: "User Datagram Protocol – a lightweight, faster alternative to TCP that doesn't guarantee delivery or order.",
  category: "Computer Networks"
},
{
  term: "Router",
  definition: "A device that forwards data packets between computer networks, routing traffic efficiently.",
  category: "Computer Networks"
},
{
  term: "Firewall",
  definition: "A security system that monitors and controls incoming and outgoing network traffic based on rules.",
  category: "Computer Networks"
},
{
  term: "Bandwidth",
  definition: "The maximum rate of data transfer across a network path.",
  category: "Computer Networks"
},
{
  term: "Latency",
  definition: "The delay between a request being sent and the response being received over a network.",
  category: "Computer Networks"
},
{
  term: "Packet",
  definition: "A small segment of data sent over a network. Large data is broken into packets for transmission.",
  category: "Computer Networks"
},
{
  term: "VPN",
  definition: "Virtual Private Network – encrypts your internet connection and hides your IP address for privacy and security.",
  category: "Computer Networks"
},
//System Design
  {
    term: "System Design",
    definition: "The process of defining the architecture, components, and data flow of a software system.",
    category: "System Design"
  },
  {
  term: "Scalability",
  definition: "The ability of a system to handle increased load without compromising performance.",
  category: "System Design"
},
{
  term: "Load Balancer",
  definition: "A device or software that distributes incoming network traffic across multiple servers to ensure no single server becomes overwhelmed.",
  category: "System Design"
},
{
  term: "Microservices",
  definition: "An architectural style where applications are composed of small, independent services that communicate via APIs.",
  category: "System Design"
},
{
  term: "Monolith",
  definition: "A software architecture in which all components are combined into a single program or service.",
  category: "System Design"
},
{
  term: "Latency",
  definition: "The time delay between a user action and the system’s response.",
  category: "System Design"
},
{
  term: "Throughput",
  definition: "The number of requests a system can handle in a given time frame.",
  category: "System Design"
},
{
  term: "Caching",
  definition: "The process of storing frequently accessed data in a fast-access location to reduce response time.",
  category: "System Design"
},
{
  term: "CDN",
  definition: "Content Delivery Network – a distributed network of servers that deliver content based on the user’s geographic location.",
  category: "System Design"
},

  // General
   {
    term: "API",
    definition: "Application Programming Interface – a set of functions and protocols that allow different software components to communicate.",
    category: "General"
  },
  {
    term: "Open Source",
    definition: "Software with source code that anyone can inspect, modify, and enhance.",
    category: "General"
  },
   {
    term: "Framework",
    definition: "A software platform that provides a foundation and structure for developing applications (e.g., React, Django).",
    category: "General"
  },
  {
  term: "Stack Overflow",
  definition: "An online Q&A platform for programming and development questions.",
  category: "General"
},
{
  term: "Stack",
  definition: "The combination of technologies used to build a web application, such as MERN (MongoDB, Express, React, Node).",
  category: "General"
},
{
  term: "Bug",
  definition: "An error or flaw in software that causes it to produce incorrect or unintended results.",
  category: "General"
},
{
  term: "IDE",
  definition: "Integrated Development Environment – a software suite that provides tools like a code editor, debugger, and compiler.",
  category: "General"
},
  // Frontend
  {
    term: "Frontend",
    definition: "The part of a website or application that users interact with directly (e.g., HTML, CSS, JavaScript).",
    category: "Frontend"
  },
  {
  term: "HTML",
  definition: "HyperText Markup Language – the standard language for creating web pages.",
  category: "Frontend"
},
{
  term: "CSS",
  definition: "Cascading Style Sheets – used to style the layout and appearance of HTML elements.",
  category: "Frontend"
},
{
  term: "JavaScript",
  definition: "A programming language that enables interactive and dynamic behavior in web browsers.",
  category: "Frontend"
},
{
  term: "Responsive Design",
  definition: "An approach to web design that ensures a site looks good on all devices and screen sizes.",
  category: "Frontend"
},
{
  term: "DOM",
  definition: "Document Object Model – a programming interface for HTML and XML documents, representing the structure as a tree.",
  category: "Frontend"
},
{
  term: "State",
  definition: "Data managed within a component that determines how the UI renders or behaves.",
  category: "Frontend"
},
 {
    term: "React",
    definition: "A JavaScript library for building user interfaces using reusable components.",
    category: "Frontend"
  },
  {
    term: "JSX",
    definition: "JavaScript XML – a syntax extension that allows mixing HTML with JavaScript in React components.",
    category: "Frontend"
  },
  {
    term: "Component",
    definition: "Reusable, independent UI elements in a frontend framework like React or Vue.",
    category: "Frontend"
  },
  {
    term: "Tailwind CSS",
    definition: "A utility-first CSS framework for rapidly building custom user interfaces.",
    category: "Frontend"
  },
  // Backend
  {
    term: "Backend",
    definition: "The server-side of an application that handles logic, database interactions, and authentication.",
    category: "Backend"
  },
  {
    term: "REST",
    definition: "Representational State Transfer – an architecture for designing networked applications using stateless HTTP requests.",
    category: "Backend"
  },
   {
    term: "Node.js",
    definition: "A JavaScript runtime built on Chrome's V8 engine used to build fast and scalable server-side applications.",
    category: "Backend"
  },
  {
  term: "Server",
  definition: "A system or device that provides data and services to other computers (clients) over a network.",
  category: "Backend"
},
{
  term: "Middleware",
  definition: "Software that connects different parts of an application or services, often used for handling requests and responses.",
  category: "Backend"
},
{
  term: "Database",
  definition: "An organized collection of data, typically accessed and managed via a database management system (DBMS).",
  category: "Backend"
},
  {
    term: "API",
    definition: "Application Programming Interface – a set of functions and protocols that allow different software components to communicate.",
    category: "Backend"
  },
  // Tools
  {
    term: "Git",
    definition: "A version control system used to track changes in source code during software development.",
    category: "Tools"
  },
  {
    term: "Version Control",
    definition: "A system that records changes to a file or set of files over time, so you can recall specific versions later.",
     category: "Tools"
  },
  {
    term: "Pull Request",
    definition: "A request to merge code changes from one branch to another in a Git-based workflow.",
    category: "Tools"
  },
  {
    term: "NPM",
    definition: "Node Package Manager – a tool used to install, manage, and share packages for JavaScript.",
    category: "Tools"
  },
  {
  term: "Webpack",
  definition: "A static module bundler for JavaScript applications that compiles modules into optimized bundles for deployment.",
  category: "Tools"
},
{
  term: "Babel",
  definition: "A JavaScript compiler that converts modern JavaScript into a version compatible with older browsers.",
  category: "Tools"
},
{
  term: "ESLint",
  definition: "A static code analysis tool used to identify and fix problems in JavaScript code.",
  category: "Tools"
},
{
  term: "Prettier",
  definition: "An opinionated code formatter that enforces a consistent style by parsing your code and re-printing it.",
  category: "Tools"
},
{
  term: "Postman",
  definition: "A collaboration platform for API development that lets you test, document, and monitor APIs.",
  category: "Tools"
},
{
  term: "Docker",
  definition: "A platform that uses containerization to package applications and their dependencies for consistent deployment.",
  category: "Tools"
},
{
  term: "VS Code",
  definition: "Visual Studio Code – a popular open-source code editor developed by Microsoft, known for its extensions and debugging tools.",
  category: "Tools"
},
{
  term: "CI/CD",
  definition: "Continuous Integration and Continuous Deployment – tools and processes that automate testing and deployment of code changes.",
  category: "Tools"
},
{
  term: "Jest",
  definition: "A JavaScript testing framework used for writing and running tests, especially in React applications.",
  category: "Tools"
},
{
  term: "Figma",
  definition: "A web-based design tool used for UI/UX design, prototyping, and collaboration.",
  category: "Tools"
},


  // DevOps
  {
    term: "DevOps",
    definition: "A set of practices that combines software development (Dev) and IT operations (Ops) to shorten the development lifecycle.",
    category: "DevOps"
  },
  {
    term: "Continuous Integration (CI)",
    definition: "The practice of merging all developer working copies to a shared mainline several times a day to detect problems early.",
    category: "DevOps"
  },
  {
    term: "Docker",
    definition: "A platform for developing, shipping, and running applications inside containers.",
    category: "DevOps"
  },
  {
  term: "Kubernetes",
  definition: "An open-source system for automating deployment, scaling, and management of containerized applications.",
  category: "DevOps"
},
{
  term: "Infrastructure as Code (IaC)",
  definition: "The practice of managing and provisioning computing infrastructure using machine-readable configuration files, rather than physical hardware.",
  category: "DevOps"
},
{
  term: "CI/CD Pipeline",
  definition: "A series of automated steps that allow software to be developed, tested, and deployed more efficiently and reliably.",
  category: "DevOps"
},
{
  term: "Monitoring",
  definition: "The process of continuously observing systems to ensure performance, availability, and reliability, often using tools like Prometheus or Grafana.",
  category: "DevOps"
},
{
  term: "Logging",
  definition: "The collection of logs from applications and infrastructure to detect and troubleshoot issues.",
  category: "DevOps"
},
{
  term: "Ansible",
  definition: "An open-source automation tool used for configuration management, application deployment, and task automation.",
  category: "DevOps"
},
{
  term: "Jenkins",
  definition: "An open-source automation server used to implement CI/CD pipelines.",
  category: "DevOps"
},
{
  term: "Terraform",
  definition: "An open-source IaC tool used to define and provision infrastructure using a declarative configuration language.",
  category: "DevOps"
},
{
  term: "Containerization",
  definition: "The process of packaging applications and their dependencies into containers to ensure consistent environments across development and production.",
  category: "DevOps"
},
{
  term: "Load Balancing",
  definition: "The distribution of incoming network traffic across multiple servers to ensure reliability and performance.",
  category: "DevOps"
},

 // Security
  {
    term: "JWT",
    definition: "JSON Web Token – a compact way to securely transmit information between parties as a JSON object.",
    category: "Security"
  },
  {
    term: "Authentication",
    definition: "The process of verifying the identity of a user or process.",
    category: "Security"
  },
  {
    term: "Authorization",
    definition: "The process of determining what resources a user or system is allowed to access.",
    category: "Security"
  },
  {
  term: "Encryption",
  definition: "The process of converting data into a coded format to prevent unauthorized access.",
  category: "Security"
},
{
  term: "HTTPS",
  definition: "HyperText Transfer Protocol Secure – an extension of HTTP that uses SSL/TLS to encrypt data between client and server.",
  category: "Security"
},
{
  term: "SSL/TLS",
  definition: "Protocols that provide secure communication over a network using encryption.",
  category: "Security"
},
{
  term: "Firewall",
  definition: "A security system that monitors and controls incoming and outgoing network traffic based on predetermined rules.",
  category: "Security"
},
{
  term: "OAuth",
  definition: "An open-standard authorization protocol that allows secure, token-based access to user data without exposing login credentials.",
  category: "Security"
},
{
  term: "Cross-Site Scripting (XSS)",
  definition: "A type of security vulnerability that allows attackers to inject malicious scripts into web pages viewed by others.",
  category: "Security"
},
{
  term: "SQL Injection",
  definition: "A code injection technique that might destroy your database by inserting malicious SQL queries into input fields.",
  category: "Security"
},
{
  term: "Two-Factor Authentication (2FA)",
  definition: "An extra layer of security that requires not only a password and username but also something only the user has on them.",
  category: "Security"
},
{
  term: "Data Breach",
  definition: "An incident where confidential or protected information is accessed or disclosed without authorization.",
  category: "Security"
},
{
  term: "Zero Trust Architecture",
  definition: "A security model that assumes no user or device should be trusted by default, even if they are inside the network perimeter.",
  category: "Security"
},
// Cloud Computing
{
  term: "Cloud Computing",
  definition: "The delivery of computing services—servers, storage, databases, networking, software—over the internet (the cloud).",
  category: "Cloud Computing"
},
{
  term: "IaaS",
  definition: "Infrastructure as a Service – cloud-based services that provide virtualized computing resources over the internet.",
  category: "Cloud Computing"
},
{
  term: "PaaS",
  definition: "Platform as a Service – a cloud service model that provides a platform for developers to build and deploy applications.",
  category: "Cloud Computing"
},
{
  term: "SaaS",
  definition: "Software as a Service – a software distribution model where applications are hosted by a provider and accessed via the internet.",
  category: "Cloud Computing"
},
{
  term: "Virtual Machine (VM)",
  definition: "A software emulation of a physical computer that runs an operating system and applications independently.",
  category: "Cloud Computing"
},
{
  term: "Containerization",
  definition: "A lightweight alternative to VMs, containers package code and dependencies together for consistent deployment.",
  category: "Cloud Computing"
},
{
  term: "Serverless Computing",
  definition: "A cloud execution model where the cloud provider automatically manages server provisioning and scaling.",
  category: "Cloud Computing"
},
{
  term: "AWS (Amazon Web Services)",
  definition: "A comprehensive cloud computing platform provided by Amazon, offering over 200 services.",
  category: "Cloud Computing"
},
{
  term: "Azure",
  definition: "Microsoft's cloud computing service offering solutions for building, testing, deploying, and managing applications.",
  category: "Cloud Computing"
},
{
  term: "Google Cloud Platform (GCP)",
  definition: "Google's suite of cloud computing services including compute, storage, and machine learning solutions.",
  category: "Cloud Computing"
},
// AI/ML
{
  term: "Artificial Intelligence (AI)",
  definition: "The simulation of human intelligence in machines that are programmed to think, learn, and make decisions.",
  category: "AI/ML"
},
{
  term: "Machine Learning (ML)",
  definition: "A subset of AI that allows systems to learn from data and improve from experience without being explicitly programmed.",
  category: "AI/ML"
},
{
  term: "Deep Learning",
  definition: "A type of machine learning based on artificial neural networks with multiple layers for complex tasks like image and speech recognition.",
  category: "AI/ML"
},
{
  term: "Neural Network",
  definition: "A series of algorithms that attempt to recognize relationships in data through a process that mimics the human brain.",
  category: "AI/ML"
},
{
  term: "Model Training",
  definition: "The process of feeding data into a machine learning algorithm so it can learn patterns and make predictions.",
  category: "AI/ML"
},
{
  term: "Supervised Learning",
  definition: "A type of ML where the model is trained on labeled data, learning to predict the output from input data.",
  category: "AI/ML"
},
{
  term: "Unsupervised Learning",
  definition: "An ML technique where models find hidden patterns or groupings in data without pre-existing labels.",
  category: "AI/ML"
},
{
  term: "Overfitting",
  definition: "A modeling error where a function fits the training data too closely and performs poorly on new data.",
  category: "AI/ML"
},
{
  term: "Natural Language Processing (NLP)",
  definition: "A field of AI focused on enabling machines to understand, interpret, and respond to human language.",
  category: "AI/ML"
},
{
  term: "Reinforcement Learning",
  definition: "An area of ML where an agent learns to make decisions by performing actions and receiving rewards or penalties.",
  category: "AI/ML"
}

];

export default glossaryData;
