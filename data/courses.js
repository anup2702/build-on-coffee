/**
 * Courses Data
 * 
 * Complete list of all available courses on the platform
 */

export const courses = [
  // ========================================
  // NEW: Foundational CS Journey Course
  // ========================================
  {
    slug: "foundational-cs-journey",
    name: "Foundational CS Journey",
    description: "Master essential computer science concepts in 8 weeks with structured learning, hands-on projects, and quizzes.",
    details: "A comprehensive 8-week journey through programming fundamentals, data structures, algorithms, databases, networking, and operating systems. Includes weekly quizzes, exercises, and a final capstone project.",
    link: "/courses/foundational-cs-journey",
    image: "https://res.cloudinary.com/dwmpdbsej/image/upload/v1754070417/sd_xnm9zd.png", // Replace with actual image
    youtube: "https://www.youtube.com/embed/RBSGKlAvoiM", // Replace with course intro video
    references: [
      {
        label: "Course Overview",
        url: "/courses/foundational-cs-journey",
      },
      {
        label: "CS50 - Harvard",
        url: "https://cs50.harvard.edu/",
      },
      {
        label: "The Odin Project",
        url: "https://www.theodinproject.com/",
      },
    ],
    dateAdded: "2025-01-20",
    
    // Course-specific structure
    duration: "8 weeks",
    level: "Beginner",
    enrolledStudents: 0,
    rating: 4.8,
    
    // Outline for CourseDetailPanel
    outline: [
      "Week 1-2: Programming Fundamentals - Variables, Loops, Functions, OOP Basics",
      "Week 3-4: Data Structures - Arrays, Linked Lists, Stacks, Queues, Hash Tables",
      "Week 5: Algorithms - Sorting, Searching, Recursion, Time Complexity",
      "Week 6: Databases & SQL Basics - SQL Queries, Database Design, Normalization",
      "Week 7: Computer Networks & OS Basics - OSI Model, TCP/IP, Processes, Memory",
      "Week 8: Capstone Mini Project - Integrate all learned concepts",
    ],
    
    // Documents for CourseDetailPanel
    documents: [
      {
        title: "Week 1-2: Programming Fundamentals Resources",
        url: "https://www.geeksforgeeks.org/python-programming-language/",
      },
      {
        title: "Week 3-4: Data Structures Tutorial",
        url: "https://www.geeksforgeeks.org/data-structures/",
      },
      {
        title: "Week 5: Algorithms Visualizer",
        url: "https://visualgo.net/",
      },
      {
        title: "Week 6: SQL Tutorial",
        url: "https://www.w3schools.com/sql/",
      },
      {
        title: "Week 7: Computer Networks Notes",
        url: "https://www.geeksforgeeks.org/computer-networks/computer-network-tutorials/",
      },
      {
        title: "Week 7: Operating Systems Overview",
        url: "https://www.geeksforgeeks.org/operating-systems/",
      },
      {
        title: "Final Project: GitHub Project Ideas",
        url: "https://github.com/topics/beginner-project",
      },
      {
        title: "All Quizzes Available",
        url: "/quiz",
      },
    ],
    
    // Labs/Exercises
    labs: [
      {
        title: "Week 1-2: Programming Exercises",
        url: "https://www.hackerrank.com/domains/python",
      },
      {
        title: "Week 3-4: Data Structure Problems",
        url: "https://leetcode.com/tag/data-structures/",
      },
      {
        title: "Week 5: Algorithm Practice",
        url: "https://leetcode.com/problemset/algorithms/",
      },
      {
        title: "Week 6: SQL Practice",
        url: "https://www.hackerrank.com/domains/sql",
      },
    ],
    
    // Mini Project
    miniProject: {
      title: "Student Information Management System",
      description: "Build a complete student management system that demonstrates all concepts learned throughout the 8-week course. Features: Add/edit/delete students, search functionality, database integration, user authentication, and file I/O.",
      url: "https://github.com/topics/student-management-system",
    },
  },

  // ========================================
  // Existing Courses (No Changes)
  // ========================================
  {
    slug: "data-structures",
    name: "Data Structures",
    description:
      "Learn the fundamentals of data structures used in computer science.",
    details:
      "Covers arrays, linked lists, stacks, queues, trees, graphs, and more. Essential for technical interviews and efficient programming.",
    link: "https://www.geeksforgeeks.org/data-structures/",
    image:
      "https://res.cloudinary.com/dwmpdbsej/image/upload/v1754068702/OIP__1_-removebg-preview_1_bozktc.png",
    youtube: "https://www.youtube.com/embed/RBSGKlAvoiM",
    references: [
      {
        label: "GeeksforGeeks Data Structures",
        url: "https://www.geeksforgeeks.org/data-structures/",
      },
      {
        label: "MIT 6.006",
        url: "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/",
      },
    ],
    dateAdded: "2025-07-30",
    documents: [
      {
        title: "Data Structures Overview",
        url: "https://www.geeksforgeeks.org/dsa/dsa-tutorial-learn-data-structures-and-algorithms/",
      },
      {
        title: "Data Structures in Multiple Languages-1",
        url: "https://www.tutorialspoint.com/data_structures_algorithms/index.htm",
      },
      {
        title: "Data Structures in Multiple Languages-2",
        url: "https://dev.to/khaledhosseini/data-structures-and-algorithms-for-multi-language-programmers-c-swift-python-java-c-javascript-alp",
      },
      {
        title: "Data Structures Cheat Sheet",
        url: "https://www.clear.rice.edu/comp160/data_cheat.html",
      },
    ],
  },
  {
    slug: "algorithms",
    name: "Algorithms",
    description: "Master algorithms for problem solving and coding interviews.",
    details:
      "Topics include sorting, searching, dynamic programming, greedy algorithms, and graph algorithms. Learn to analyze and implement efficient solutions.",
    link: "https://www.khanacademy.org/computing/computer-science/algorithms",
    image:
      "https://res.cloudinary.com/dwmpdbsej/image/upload/v1754069181/png-transparent-greedy-algorithm-computer-icons-algoorithm-others-miscellaneous-angle-triangle-removebg-preview_qwhtd7.png",
    youtube: "https://www.youtube.com/embed/B31LgI4Y4DQ",
    references: [
      {
        label: "Khan Academy Algorithms",
        url: "https://www.khanacademy.org/computing/computer-science/algorithms",
      },
      {
        label: "Princeton Algorithms",
        url: "https://www.coursera.org/specializations/algorithms",
      },
    ],
    dateAdded: "2025-07-31",
    documents: [
      {
        title: "Algorithms Overview",
        url: "https://www.geeksforgeeks.org/dsa/introduction-to-algorithms/",
      },
      { title: "Algorithms Visualizer", url: "https://visualgo.net/en" },
      {
        title: "Algorithms Cheat Sheet",
        url: "https://algs4.cs.princeton.edu/cheatsheet/",
      },
    ],
  },
  {
    slug: "operating-systems",
    name: "Operating Systems",
    description: "Understand the core concepts of modern operating systems.",
    details:
      "Covers processes, threads, memory management, file systems, and concurrency. Learn how OSes work under the hood.",
    link: "https://www.udacity.com/course/introduction-to-operating-systems--ud923",
    image:
      "https://res.cloudinary.com/dwmpdbsej/image/upload/v1754069383/2172894-removebg-preview_yqr4z5.png",
    youtube: "https://www.youtube.com/embed/26QPDBe-NB8",
    references: [
      {
        label: "Udacity OS Course",
        url: "https://www.udacity.com/course/introduction-to-operating-systems--ud923",
      },
      { label: "OSTEP Book", url: "https://pages.cs.wisc.edu/~remzi/OSTEP/" },
    ],
    dateAdded: "2025-07-28",
    documents: [
      {
        title: "Operating Systems Overview",
        url: "https://www.geeksforgeeks.org/operating-systems/what-is-an-operating-system/",
      },
      {
        title: "Operating Systems Notes",
        url: "https://prepinsta.com/operating-systems/",
      },
      {
        title: "Operating Systems Cheat Sheet",
        url: "operating systems cheat sheet",
      },
    ],
  },
  {
    slug: "computer-networks",
    name: "Computer Networks",
    description: "Explore the principles of computer networking.",
    details:
      "Learn about network layers, protocols, TCP/IP, routing, and security. Essential for backend, cloud, and distributed systems roles.",
    link: "https://www.coursera.org/learn/computer-networking",
    image:
      "https://png.pngtree.com/png-vector/20230318/ourmid/pngtree-computer-networking-line-icon-vector-png-image_6656306.png",
    youtube: "https://www.youtube.com/embed/qiQR5rTSshw",
    references: [
      {
        label: "Coursera Computer Networks",
        url: "https://www.coursera.org/learn/computer-networking",
      },
      {
        label: "Stanford Networking",
        url: "https://web.stanford.edu/class/cs144/",
      },
    ],
    dateAdded: "2025-07-15",
    documents: [
      {
        title: "Computer Networks Overview",
        url: "https://www.geeksforgeeks.org/computer-science-fundamentals/what-is-computer-networking/",
      },
      {
        title: "Computer Networks Notes",
        url: "https://www.geeksforgeeks.org/computer-networks/computer-network-tutorials/",
      },
      {
        title: "Computer Networks Notes PDF",
        url: "https://www.vssut.ac.in/lecture_notes/lecture1423905560.pdf",
      },
      {
        title: "Computer Networks Cheat Sheet",
        url: "https://www.geeksforgeeks.org/computer-networks/computer-network-cheat-sheet/",
      },
    ],
  },
  {
    slug: "databases",
    name: "Databases",
    description:
      "Learn about relational and NoSQL databases, SQL, and data modeling.",
    details:
      "Topics include ER modeling, normalization, transactions, indexing, and distributed databases. Practice with real-world datasets.",
    link: "https://www.coursera.org/learn/databases-intro",
    image:
      "https://toppng.com/uploads/preview/database-database-icon-11563207079binxarjjyp.png",
    youtube: "https://www.youtube.com/embed/h0nxCDiD-zg",
    references: [
      {
        label: "Coursera Databases",
        url: "https://www.coursera.org/learn/databases-intro",
      },
      {
        label: "Stanford DB Class",
        url: "https://web.stanford.edu/class/cs145/",
      },
    ],
    dateAdded: "2025-07-29",
    documents: [
      {
        title: "Databases Overview",
        url: "https://www.geeksforgeeks.org/dbms/what-is-database/",
      },
      {
        title: "DBMS Notes",
        url: "https://www.tutorialspoint.com/dbms/index.htm",
      },
      {
        title: "DBMS Cheat Sheet",
        url: "https://www.almabetter.com/bytes/cheat-sheet/dbms-cheat-sheet",
      },
      {
        title: "SQL Overview",
        url: "https://www.geeksforgeeks.org/sql/sql-tutorial/",
      },
      {
        title: "SQL Notes - 1",
        url: "https://www.w3schools.com/sql/sql_intro.asp",
      },
      {
        title: "SQL Notes - 2",
        url: "https://www.w3schools.com/sql/sql_intro.asp",
      },
      {
        title: "SQL Cheat Sheet",
        url: "https://www.geeksforgeeks.org/sql/sql-cheat-sheet/",
      },
      {
        title: "SQL Cheat Sheet PDF",
        url: "https://www.dbvis.com/wp-content/uploads/2024/04/SQL-Cheat-Sheet.pdf",
      },
      {
        title: "NoSQL Overview",
        url: "https://www.geeksforgeeks.org/dbms/introduction-to-nosql/",
      },
      {
        title: "NoSQL Notes",
        url: "https://www.mongodb.com/resources/basics/databases/nosql-explained",
      },
    ],
  },
  {
    slug: "system-design",
    name: "System Design",
    description: "Get started with system design for scalable applications.",
    details:
      "Learn about scalability, load balancing, caching, databases, and real-world architecture patterns. Great for interviews and backend roles.",
    link: "https://github.com/donnemartin/system-design-primer",
    image:
      "https://res.cloudinary.com/dwmpdbsej/image/upload/v1754070417/sd_xnm9zd.png",
    youtube: "https://www.youtube.com/embed/UzLMhqg3_Wc",
    references: [
      {
        label: "System Design Primer",
        url: "https://github.com/donnemartin/system-design-primer",
      },
      {
        label: "Grokking System Design",
        url: "https://www.educative.io/courses/grokking-the-system-design-interview",
      },
    ],
    dateAdded: "2025-07-20",
    documents: [
      {
        title: "System Design Overview",
        url: "https://www.geeksforgeeks.org/system-design/what-is-system-design-learn-system-design/",
      },
      {
        title: "System Design Notes",
        url: "https://takeuforward.org/system-design/complete-system-design-roadmap-with-videos-for-sdes",
      },
      {
        title: "System Design Cheat Sheet",
        url: "https://medium.com/@shivambhadani_/system-design-for-beginners-everything-you-need-in-one-article-c74eb702540b",
      },
    ],
  },
  {
    slug: "software-engineering",
    name: "Software Engineering",
    description: "Learn the principles and practices of software engineering.",
    details:
      "Covers software development life cycle, agile methodologies, version control, testing, and more. Essential for building robust and maintainable software.",
    link: "https://www.geeksforgeeks.org/software-engineering/",
    image:
      "https://res.cloudinary.com/dwmpdbsej/image/upload/v1754070417/sd_xnm9zd.png",
    youtube: "https://www.youtube.com/embed/uJpQlyT_CK4?si=mDoTT2Iu5TmpfqXT",
    references: [
      {
        label: "GeeksforGeeks Software Engineering",
        url: "https://www.geeksforgeeks.org/software-engineering/",
      },
      {
        label: "Coursera Software Engineering",
        url: "https://www.coursera.org/specializations/software-engineering",
      },
    ],
    dateAdded: "2025-08-26",
    documents: [
      {
        title: "Software Engineering Overview",
        url: "https://www.geeksforgeeks.org/software-engineering/software-engineering-introduction-to-software-engineering/",
      },
      {
        title: "Software Engineering Notes",
        url: "https://mrcet.com/downloads/digital_notes/CSE/III%20Year/Software%20Engineering.pdf",
      },
      {
        title: "Software Engineering Cheat Sheet",
        url: "https://github.com/ljeng/cheat-sheet",
      },
    ],
  },
  {
    slug: "computer-organization-architecture",
    name: "Computer Organization & Architecture",
    description:
      "Explore the building blocks of modern computers, from logic gates to performance tuning.",
    details:
      "A comprehensive look at CPU design, memory hierarchy, instruction set architectures (ISAs), and performance optimization techniques. Understand how software interacts with hardware.",
    link: "https://nptel.ac.in/courses/106105163",
    image: "https://cdn-icons-png.flaticon.com/512/2920/2920349.png",
    youtube: "https://www.youtube.com/embed/DsK35f8wyUw",
    references: [
      {
        label: "Patterson & Hennessy Textbook",
        url: "https://www.elsevier.com/books/computer-organization-and-design-risc-v-edition/patterson/978-0-12-820331-6",
      },
      { label: "Stanford CS107e Course", url: "https://cs107e.github.io/" },
    ],
    dateAdded: "2025-08-28",
    documents: [
      {
        title: "Module 1: Digital Logic & Circuits",
        url: "https://www.geeksforgeeks.org/digital-logic-logic-gates/",
      },
      {
        title: "Module 2: CPU Design & Pipelining",
        url: "https://www.javatpoint.com/pipelining-in-computer-architecture",
      },
      {
        title: "Module 3: Memory Hierarchy & Caches",
        url: "https://www.geeksforgeeks.org/memory-hierarchy-in-computer-architecture/",
      },
      {
        title: "Module 4: I/O Systems",
        url: "https://www.geeksforgeeks.org/input-output-organization-in-computer-architecture/",
      },
      {
        title: "Module 5: Performance Optimization",
        url: "https://www.geeksforgeeks.org/performance-analysis-in-computer-architecture/",
      },
      {
        title: "Practical: Assembly Language Examples",
        url: "https://www.tutorialspoint.com/assembly_programming/index.htm",
      },
      {
        title: "Practical: Cache Simulator Tool",
        url: "https://courses.cs.washington.edu/courses/cse378/02au/project/cache/cachesim.html",
      },
      {
        title: "Mini Project: Build a CPU Simulator",
        url: "https://github.com/topics/cpu-simulator",
      },
    ],
  },
];