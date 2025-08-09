export const systemDesignRoadmap = [
  {
    title: "1. Fundamentals of System Design",
    description: "Understand the basics of how systems work and the core concepts needed to design scalable applications.",
    topics: [
      "What is System Design?",
      "Scalability, Reliability, and Maintainability",
      "Latency vs. Throughput",
      "CAP Theorem",
      "Load Balancing Basics"
    ],
    resources: [
      { name: "System Design Primer", link: "https://github.com/donnemartin/system-design-primer" },
      { name: "Grokking the System Design Interview", link: "https://www.designgurus.io/course/grokking-the-system-design-interview" }
    ],
    videos: [
      { name: "System Design for Beginners Course", link: "https://www.youtube.com/watch?v=m8Icp_Cid5o" }
    ]
  },
  {
    title: "2. Networking & Communication",
    description: "Learn how systems communicate across networks and the protocols that make it possible.",
    topics: [
      "HTTP/HTTPS",
      "DNS",
      "CDNs",
      "Sockets & WebSockets",
      "gRPC & REST APIs"
    ],
    resources: [
      { name: "HTTP: The Definitive Guide", link: "https://www.oreilly.com/library/view/http-the-definitive/1565925092/" }
    ],
    videos: [
      { name: "Networking Essentials for System Design Interviews", link: "https://www.youtube.com/watch?v=SHkbPm1Wrno" }
    ]
  },
  {
    title: "3. Databases & Storage",
    description: "Choose and design data storage solutions based on the needs of the system.",
    topics: [
      "SQL vs NoSQL",
      "Database Indexing",
      "Sharding & Replication",
      "Caching Strategies",
      "Database Scaling"
    ],
    resources: [
      { name: "SQL vs NoSQL Databases", link: "https://www.mongodb.com/nosql-explained" }
    ],
    videos: [
      { name: "Database Essentials", link: "https://youtu.be/P-IY5BEl6Y4?si=KSkdwbqIoAHtE84O" }
    ]
  },
  {
    title: "4. Caching & Content Delivery",
    description: "Speed up systems with caching and content delivery networks.",
    topics: [
      "Client-Side vs Server-Side Caching",
      "Redis & Memcached",
      "Cache Invalidation",
      "CDNs and Edge Locations"
    ],
    resources: [
      { name: "Caching Strategies Guide", link: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching" }
    ],
    videos: [
      { name: "Caching Techniques and CDNs", link: "https://www.youtube.com/watch?v=m8Icp_Cid5o&t=1440s" }
    ]
  },
  {
    title: "5. Scalability & Load Handling",
    description: "Techniques to handle increasing traffic and scale your application.",
    topics: [
      "Horizontal vs Vertical Scaling",
      "Load Balancers (Nginx, HAProxy)",
      "Message Queues (Kafka, RabbitMQ)",
      "Rate Limiting & Throttling"
    ],
    resources: [
      { name: "Scalability Principles", link: "https://www.scalability.org" }
    ],
    videos: [
      { name: "Scaling Web Applications", link: "https://youtu.be/ejofP2VKu-4?si=vf-13dpu1KnxG2nM" }
    ]
  },
  {
    title: "6. Security & Reliability",
    description: "Ensure your system is secure, fault-tolerant, and highly available.",
    topics: [
      "Authentication & Authorization",
      "SSL/TLS Encryption",
      "Disaster Recovery",
      "Fault Tolerance",
      "Monitoring & Alerts"
    ],
    resources: [
      { name: "OWASP Top 10", link: "https://owasp.org/www-project-top-ten/" }
    ],
    videos: [
      { name: "10 Principles for Secure by Design", link: "https://www.youtube.com/watch?v=SHkbPm1Wrno&t=0s" }
    ]
  },
  {
    title: "7. Case Studies & Practice",
    description: "Apply your knowledge to real-world design problems.",
    topics: [
      "Designing URL Shortener",
      "Designing Chat Application",
      "Designing E-Commerce Platform",
      "Designing YouTube",
      "Designing Payment System"
    ],
    resources: [
      { name: "System Design Interview Examples", link: "https://interviewing.io/guides/system-design-interview" }
    ],
    videos: [
      { name: "URL Shortener System Design | Pastebin System Design | Grokking the System Design Interview", link: "https://www.youtube.com/watch?v=_TsJizByBvE" }
    ]
  }
];