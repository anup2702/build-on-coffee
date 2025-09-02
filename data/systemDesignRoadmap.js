export const systemDesignRoadmap = [{
        title: "1. Fundamentals of System Design",
        description: "Understand the basics of how systems work and the core concepts needed to design scalable applications.",
        topics: [
            "System Design - What? | Why? | Where?",
            "Explore the Difference Between HLD and LLD",
            "Serverful & Serverless Architecture",
            "Monolithic & Microservices Architecture",
            "What is Logging and Monitoring?",
            "Horizontal Scaling and Vertical Scaling"
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
            "How Does Internet Work?",
            "HTTP(1/2/3)/HTTPS",
            "DNS and its Caching",
            "CDNs - Working and Real World Examples",
            "WebSockets - Working | WebRTC - Working (STUN | TURN)",
            "gRPC & REST APIs & GraphQL APIs",
            "QUIC Protocol"
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
            "Database Scaling",
            "Consistency and its Levels",
            "Isolation and its Levels",
            "CAP Theorem and How real-world Apps like WhatsApp use CAP"
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
            "Redis & Memcached and its Fallback (RDB and AOF)",
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
            "Horizontal vs Vertical Scaling - Real World Examples",
            "Stateful and Stateless",
            "Proxy Servers - Forward and Reverse",
            "Load Balancers (Nginx, HAProxy, Tor)",
            "Load Balancing Algorithms",
            "Consistent Hashing",
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
            "Monitoring & Alerts",
            "Cascading Failure",
            "Tokens and its Types - JWT token | Opaque token | OAuth token | Refresh Token",
            "SSO (Single Sign On) and ACL (Access Control List)"
        ],
        resources: [
            { name: "OWASP Top 10", link: "https://owasp.org/www-project-top-ten/" }
        ],
        videos: [
            { name: "10 Principles for Secure by Design", link: "https://www.youtube.com/watch?v=SHkbPm1Wrno&t=0s" }
        ]
    },
    {
        title: "7. Trade-offs and Case Studies",
        description: "Apply your knowledge to real-world design problems.",
        topics: [
            "Push vs Pull Architecture",
            "Consistency vs Availability",
            "Memory vs Latency",
            "Throughput vs Latency",
            "Accuracy vs Latency",
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
