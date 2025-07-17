// src/data/courses.js
export const courses = [
  {
    slug: "data-structures",
    name: "Data Structures",
    description: "Learn the fundamentals of data structures used in computer science.",
    details: "Covers arrays, linked lists, stacks, queues, trees, graphs, and more. Essential for technical interviews and efficient programming.",
    link: "https://www.geeksforgeeks.org/data-structures/",
    image: "/assets/data-structures.png",
    youtube: "https://www.youtube.com/embed/RBSGKlAvoiM",
    references: [
      { label: "GeeksforGeeks Data Structures", url: "https://www.geeksforgeeks.org/data-structures/" },
      { label: "MIT 6.006", url: "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/" }
    ]
  },
  {
    slug: "algorithms",
    name: "Algorithms",
    description: "Master algorithms for problem solving and coding interviews.",
    details: "Topics include sorting, searching, dynamic programming, greedy algorithms, and graph algorithms. Learn to analyze and implement efficient solutions.",
    link: "https://www.khanacademy.org/computing/computer-science/algorithms",
    image: "/assets/algorithms.png",
    youtube: "https://www.youtube.com/embed/B31LgI4Y4DQ",
    references: [
      { label: "Khan Academy Algorithms", url: "https://www.khanacademy.org/computing/computer-science/algorithms" },
      { label: "Princeton Algorithms", url: "https://www.coursera.org/specializations/algorithms" }
    ]
  },
  {
    slug: "operating-systems",
    name: "Operating Systems",
    description: "Understand the core concepts of modern operating systems.",
    details: "Covers processes, threads, memory management, file systems, and concurrency. Learn how OSes work under the hood.",
    link: "https://www.udacity.com/course/introduction-to-operating-systems--ud923",
    image: "/assets/os.png",
    youtube: "https://www.youtube.com/embed/26QPDBe-NB8",
    references: [
      { label: "Udacity OS Course", url: "https://www.udacity.com/course/introduction-to-operating-systems--ud923" },
      { label: "OSTEP Book", url: "https://pages.cs.wisc.edu/~remzi/OSTEP/" }
    ]
  },
  {
    slug: "computer-networks",
    name: "Computer Networks",
    description: "Explore the principles of computer networking.",
    details: "Learn about network layers, protocols, TCP/IP, routing, and security. Essential for backend, cloud, and distributed systems roles.",
    link: "https://www.coursera.org/learn/computer-networking",
    image: "/assets/networks.png",
    youtube: "https://www.youtube.com/embed/qiQR5rTSshw",
    references: [
      { label: "Coursera Computer Networks", url: "https://www.coursera.org/learn/computer-networking" },
      { label: "Stanford Networking", url: "https://web.stanford.edu/class/cs144/" }
    ]
  },
  {
    slug: "databases",
    name: "Databases",
    description: "Learn about relational and NoSQL databases, SQL, and data modeling.",
    details: "Topics include ER modeling, normalization, transactions, indexing, and distributed databases. Practice with real-world datasets.",
    link: "https://www.coursera.org/learn/databases-intro",
    image: "/assets/databases.png",
    youtube: "https://www.youtube.com/embed/h0nxCDiD-zg",
    references: [
      { label: "Coursera Databases", url: "https://www.coursera.org/learn/databases-intro" },
      { label: "Stanford DB Class", url: "https://web.stanford.edu/class/cs145/" }
    ]
  },
  {
    slug: "system-design",
    name: "System Design",
    description: "Get started with system design for scalable applications.",
    details: "Learn about scalability, load balancing, caching, databases, and real-world architecture patterns. Great for interviews and backend roles.",
    link: "https://github.com/donnemartin/system-design-primer",
    image: "/assets/system-design.png",
    youtube: "https://www.youtube.com/embed/UzLMhqg3_Wc",
    references: [
      { label: "System Design Primer", url: "https://github.com/donnemartin/system-design-primer" },
      { label: "Grokking System Design", url: "https://www.educative.io/courses/grokking-the-system-design-interview" }
    ]
  }
]; 