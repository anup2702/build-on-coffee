/* jshint esversion: 6 */

/**
 * Foundational CS Week 7 Quiz - Computer Networks & OS
 * Topics: Networking Basics, OSI Model, IP Addressing, OS Fundamentals
 */

export const foundationalCSWeek7Quiz = {
  id: "foundational-cs-week7",
  title: "Foundational CS Week 7: Networks & Operating Systems",
  description: "Test your understanding of computer networking concepts, OSI model, IP addressing, and operating system fundamentals.",
  difficulty: "Intermediate",
  category: "Networks & OS",
  estimatedTime: "30 minutes",
  passingScore: 70,
  questions: [
    // Beginner Level (10 questions)
    {
      id: "w7q1",
      question: "What does IP stand for?",
      options: [
        "Internet Protocol",
        "Internal Processor",
        "Integrated Platform",
        "Information Package"
      ],
      correctAnswer: 0,
      explanation: "IP stands for Internet Protocol, which is responsible for addressing and routing packets across networks.",
      difficulty: "beginner",
      topic: "Networking Basics"
    },
    {
      id: "w7q2",
      question: "How many layers are in the OSI model?",
      options: [
        "5",
        "6",
        "7",
        "8"
      ],
      correctAnswer: 2,
      explanation: "The OSI (Open Systems Interconnection) model has 7 layers, from Physical to Application.",
      difficulty: "beginner",
      topic: "OSI Model"
    },
    {
      id: "w7q3",
      question: "What is an operating system?",
      options: [
        "Hardware component",
        "Software that manages hardware and software resources",
        "A type of application",
        "A programming language"
      ],
      correctAnswer: 1,
      explanation: "An operating system is system software that manages computer hardware and software resources.",
      difficulty: "beginner",
      topic: "OS Fundamentals"
    },
    {
      id: "w7q4",
      question: "Which protocol is used for secure web browsing?",
      options: [
        "HTTP",
        "HTTPS",
        "FTP",
        "SMTP"
      ],
      correctAnswer: 1,
      explanation: "HTTPS (HTTP Secure) uses encryption (SSL/TLS) to provide secure communication over the internet.",
      difficulty: "beginner",
      topic: "Networking Protocols"
    },
    {
      id: "w7q5",
      question: "What is RAM?",
      options: [
        "Read-Only Memory",
        "Random Access Memory",
        "Rapid Application Memory",
        "Remote Access Module"
      ],
      correctAnswer: 1,
      explanation: "RAM (Random Access Memory) is volatile memory used to store data and programs currently being used.",
      difficulty: "beginner",
      topic: "OS Fundamentals"
    },
    {
      id: "w7q6",
      question: "What does TCP stand for?",
      options: [
        "Transfer Control Protocol",
        "Transmission Control Protocol",
        "Technical Communication Protocol",
        "Transport Connection Protocol"
      ],
      correctAnswer: 1,
      explanation: "TCP stands for Transmission Control Protocol, providing reliable, ordered delivery of data.",
      difficulty: "beginner",
      topic: "Networking Protocols"
    },
    {
      id: "w7q7",
      question: "What is a process in an operating system?",
      options: [
        "A physical CPU core",
        "A program in execution",
        "A type of memory",
        "A network connection"
      ],
      correctAnswer: 1,
      explanation: "A process is an instance of a program in execution, with its own memory space and resources.",
      difficulty: "beginner",
      topic: "Process Management"
    },
    {
      id: "w7q8",
      question: "What is the purpose of DNS?",
      options: [
        "Data encryption",
        "Virus protection",
        "Converting domain names to IP addresses",
        "File storage"
      ],
      correctAnswer: 2,
      explanation: "DNS (Domain Name System) translates human-readable domain names into IP addresses.",
      difficulty: "beginner",
      topic: "Networking Services"
    },
    {
      id: "w7q9",
      question: "Which layer of the OSI model handles routing?",
      options: [
        "Data Link Layer",
        "Network Layer",
        "Transport Layer",
        "Physical Layer"
      ],
      correctAnswer: 1,
      explanation: "The Network Layer (Layer 3) is responsible for routing packets across networks.",
      difficulty: "beginner",
      topic: "OSI Model"
    },
    {
      id: "w7q10",
      question: "What is virtual memory?",
      options: [
        "Memory in the cloud",
        "Fake memory",
        "Disk space used as RAM",
        "Cache memory"
      ],
      correctAnswer: 2,
      explanation: "Virtual memory uses disk space to extend RAM, allowing systems to run larger programs.",
      difficulty: "beginner",
      topic: "Memory Management"
    },

    // Intermediate Level (10 questions)
    {
      id: "w7q11",
      question: "What is the difference between TCP and UDP?",
      options: [
        "No difference",
        "TCP is reliable, UDP is faster but unreliable",
        "UDP is more secure",
        "TCP is only for web browsing"
      ],
      correctAnswer: 1,
      explanation: "TCP provides reliable, ordered delivery with error checking, while UDP is faster but doesn't guarantee delivery.",
      difficulty: "intermediate",
      topic: "Networking Protocols"
    },
    {
      id: "w7q12",
      question: "What is a subnet mask used for?",
      options: [
        "Network security",
        "Dividing an IP address into network and host portions",
        "Data encryption",
        "Speed optimization"
      ],
      correctAnswer: 1,
      explanation: "A subnet mask divides an IP address into network and host portions, defining the network's structure.",
      difficulty: "intermediate",
      topic: "IP Addressing"
    },
    {
      id: "w7q13",
      question: "What is context switching?",
      options: [
        "Switching networks",
        "OS switching between processes",
        "Changing user accounts",
        "Hardware replacement"
      ],
      correctAnswer: 1,
      explanation: "Context switching is when the OS saves the state of one process and loads another, enabling multitasking.",
      difficulty: "intermediate",
      topic: "Process Management"
    },
    {
      id: "w7q14",
      question: "What is the three-way handshake?",
      options: [
        "A greeting protocol",
        "TCP connection establishment process",
        "Security authentication",
        "Data encryption method"
      ],
      correctAnswer: 1,
      explanation: "The three-way handshake (SYN, SYN-ACK, ACK) establishes a TCP connection between client and server.",
      difficulty: "intermediate",
      topic: "TCP/IP"
    },
    {
      id: "w7q15",
      question: "What is a deadlock in operating systems?",
      options: [
        "A locked file",
        "Two or more processes waiting indefinitely for resources",
        "A crashed program",
        "A security feature"
      ],
      correctAnswer: 1,
      explanation: "A deadlock occurs when processes are waiting for resources held by each other, creating a circular wait.",
      difficulty: "intermediate",
      topic: "Process Management"
    },
    {
      id: "w7q16",
      question: "What is the default subnet mask for a Class C network?",
      options: [
        "255.0.0.0",
        "255.255.0.0",
        "255.255.255.0",
        "255.255.255.255"
      ],
      correctAnswer: 2,
      explanation: "Class C networks use 255.255.255.0 as the default subnet mask, providing 254 usable host addresses.",
      difficulty: "intermediate",
      topic: "IP Addressing"
    },
    {
      id: "w7q17",
      question: "What is the purpose of ARP?",
      options: [
        "Address Resolution Protocol - maps IP to MAC addresses",
        "Application Response Protocol",
        "Automatic Routing Protocol",
        "Advanced Recovery Protocol"
      ],
      correctAnswer: 0,
      explanation: "ARP (Address Resolution Protocol) resolves IP addresses to MAC (physical) addresses on a local network.",
      difficulty: "intermediate",
      topic: "Networking Protocols"
    },
    {
      id: "w7q18",
      question: "What is paging in memory management?",
      options: [
        "Calling a person",
        "Dividing memory into fixed-size pages",
        "Sorting memory",
        "Backing up memory"
      ],
      correctAnswer: 1,
      explanation: "Paging divides physical memory into fixed-size blocks (pages) for efficient memory management.",
      difficulty: "intermediate",
      topic: "Memory Management"
    },
    {
      id: "w7q19",
      question: "Which port does HTTPS use by default?",
      options: [
        "80",
        "443",
        "8080",
        "3000"
      ],
      correctAnswer: 1,
      explanation: "HTTPS uses port 443 by default, while HTTP uses port 80.",
      difficulty: "intermediate",
      topic: "Networking Protocols"
    },
    {
      id: "w7q20",
      question: "What is a system call?",
      options: [
        "Calling tech support",
        "Interface between user program and OS kernel",
        "Remote procedure call",
        "Network request"
      ],
      correctAnswer: 1,
      explanation: "A system call is the programmatic way applications request services from the operating system kernel.",
      difficulty: "intermediate",
      topic: "OS Fundamentals"
    },

    // Advanced Level (10 questions)
    {
      id: "w7q21",
      question: "What is the difference between IPv4 and IPv6?",
      options: [
        "IPv6 is faster",
        "IPv6 uses 128-bit addresses vs 32-bit in IPv4",
        "IPv4 is more secure",
        "No significant difference"
      ],
      correctAnswer: 1,
      explanation: "IPv6 uses 128-bit addresses (vs 32-bit in IPv4), providing a vastly larger address space and improved features.",
      difficulty: "advanced",
      topic: "IP Addressing"
    },
    {
      id: "w7q22",
      question: "What is thrashing in OS?",
      options: [
        "Deleting files",
        "Excessive paging activity that slows performance",
        "Fast processing",
        "Network congestion"
      ],
      correctAnswer: 1,
      explanation: "Thrashing occurs when the system spends more time paging than executing, due to insufficient RAM.",
      difficulty: "advanced",
      topic: "Memory Management"
    },
    {
      id: "w7q23",
      question: "What is the purpose of NAT?",
      options: [
        "Network Address Translation - converts private to public IPs",
        "Network Application Tool",
        "New Address Technology",
        "Node Authentication Token"
      ],
      correctAnswer: 0,
      explanation: "NAT allows multiple devices on a private network to share a single public IP address for internet access.",
      difficulty: "advanced",
      topic: "Networking"
    },
    {
      id: "w7q24",
      question: "What is a semaphore in operating systems?",
      options: [
        "A flag signal",
        "A synchronization primitive for process coordination",
        "A memory location",
        "A network packet"
      ],
      correctAnswer: 1,
      explanation: "A semaphore is a synchronization tool that controls access to shared resources by multiple processes.",
      difficulty: "advanced",
      topic: "Process Synchronization"
    },
    {
      id: "w7q25",
      question: "What is the sliding window protocol?",
      options: [
        "GUI window management",
        "Flow control mechanism in networking",
        "Memory allocation strategy",
        "File system organization"
      ],
      correctAnswer: 1,
      explanation: "Sliding window protocol manages flow control and reliable transmission by limiting unacknowledged packets.",
      difficulty: "advanced",
      topic: "TCP/IP"
    },
    {
      id: "w7q26",
      question: "What is the purpose of a Translation Lookaside Buffer (TLB)?",
      options: [
        "Language translation",
        "Caches virtual-to-physical address translations",
        "Network routing",
        "Process scheduling"
      ],
      correctAnswer: 1,
      explanation: "TLB is a cache that stores recent virtual-to-physical address translations for faster memory access.",
      difficulty: "advanced",
      topic: "Memory Management"
    },
    {
      id: "w7q27",
      question: "What is CIDR notation?",
      options: [
        "A programming language",
        "Classless Inter-Domain Routing - flexible IP addressing",
        "A database format",
        "An encryption method"
      ],
      correctAnswer: 1,
      explanation: "CIDR notation (e.g., 192.168.1.0/24) provides flexible IP addressing by specifying network prefix length.",
      difficulty: "advanced",
      topic: "IP Addressing"
    },
    {
      id: "w7q28",
      question: "What is the difference between a thread and a process?",
      options: [
        "No difference",
        "Threads share memory space, processes have separate spaces",
        "Processes are faster",
        "Threads are more secure"
      ],
      correctAnswer: 1,
      explanation: "Threads within a process share the same memory space, while processes have separate memory spaces.",
      difficulty: "advanced",
      topic: "Process Management"
    },
    {
      id: "w7q29",
      question: "What is BGP?",
      options: [
        "Basic Gateway Protocol",
        "Border Gateway Protocol - routes between autonomous systems",
        "Binary Group Protocol",
        "Broadcast Gateway Protocol"
      ],
      correctAnswer: 1,
      explanation: "BGP (Border Gateway Protocol) is the protocol used to route data between different autonomous systems on the internet.",
      difficulty: "advanced",
      topic: "Routing Protocols"
    },
    {
      id: "w7q30",
      question: "What is the purpose of the kernel in an OS?",
      options: [
        "User interface management",
        "Core that manages system resources and hardware",
        "Application installation",
        "Network configuration"
      ],
      correctAnswer: 1,
      explanation: "The kernel is the core of the OS that directly manages system resources, hardware, and provides services to applications.",
      difficulty: "advanced",
      topic: "OS Fundamentals"
    }
  ],
  
  metadata: {
    totalQuestions: 30,
    questionsByDifficulty: {
      beginner: 10,
      intermediate: 10,
      advanced: 10
    },
    topics: [
      "Networking Basics",
      "OSI Model",
      "IP Addressing",
      "Networking Protocols",
      "TCP/IP",
      "OS Fundamentals",
      "Process Management",
      "Memory Management",
      "Process Synchronization"
    ],
    createdAt: "2025-01-20",
    version: "1.0"
  }
};

export default foundationalCSWeek7Quiz;