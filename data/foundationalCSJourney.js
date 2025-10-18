/**
 * Foundational CS Journey Course
 * 
 * A comprehensive 8-week journey through essential computer science concepts
 * designed for beginners who want to build a strong foundation in CS.
 */

export const foundationalCSJourney = {
  id: "foundational-cs-journey",
  title: "Foundational CS Journey",
  description: "Master essential computer science concepts in 8 weeks with structured learning, hands-on projects, and quizzes.",
  duration: "8 weeks",
  level: "Beginner",
  category: "Core CS",
  image: "https://res.cloudinary.com/dwmpdbsej/image/upload/v1754070417/sd_xnm9zd.png",
  rating: 4.8,
  enrolledStudents: 1247,
  instructor: "Build On Coffee Team",
  
  // Main course video - Replace with actual course intro video
  youtube: "https://www.youtube.com/embed/RBSGKlAvoiM",
  
  // Course outline for the Outline tab
  syllabus: [
    "Week 1-2: Programming Fundamentals - Master variables, loops, functions, and OOP concepts",
    "Week 3-4: Data Structures - Learn arrays, linked lists, stacks, queues, and hash tables",
    "Week 5: Algorithms - Understand sorting, searching, recursion, and complexity analysis",
    "Week 6: Databases & SQL - Query databases and design efficient schemas",
    "Week 7: Networks & OS - Grasp networking fundamentals and operating system basics",
    "Week 8: Capstone Project - Build a comprehensive student management system"
  ],
  
  // Documents for the Docs tab - All real links
  docs: [
    {
      title: "Week 1-2: Python Official Tutorial",
      url: "https://docs.python.org/3/tutorial/"
    },
    {
      title: "Week 1-2: JavaScript MDN Guide",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
    },
    {
      title: "Week 3-4: Data Structures - GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/data-structures/"
    },
    {
      title: "Week 3-4: VisuAlgo - Visual Learning",
      url: "https://visualgo.net/"
    },
    {
      title: "Week 5: Big-O Cheat Sheet",
      url: "https://www.bigocheatsheet.com/"
    },
    {
      title: "Week 5: Sorting Algorithms Visualized",
      url: "https://www.toptal.com/developers/sorting-algorithms"
    },
    {
      title: "Week 6: W3Schools SQL Tutorial",
      url: "https://www.w3schools.com/sql/"
    },
    {
      title: "Week 7: Computer Networking Basics",
      url: "https://www.cloudflare.com/learning/network-layer/what-is-a-computer-network/"
    }
  ],
  
  // Labs/Exercises for the Labs tab - All real platforms
  labs: [
    {
      title: "Programming Fundamentals Practice",
      url: "https://www.hackerrank.com/domains/python"
    },
    {
      title: "Data Structures & Algorithms",
      url: "https://leetcode.com/problemset/all/"
    },
    {
      title: "Algorithm Challenges",
      url: "https://www.codewars.com/"
    },
    {
      title: "SQL Practice",
      url: "https://sqlbolt.com/"
    }
  ],
  
  // Project for the Project tab
  project: {
    title: "Student Information Management System",
    description: "Build a comprehensive student management system that integrates all concepts learned throughout the course. This capstone project will demonstrate your mastery of programming fundamentals, data structures, algorithms, databases, and system design.",
    github: "https://github.com/topics/student-management-system"
  },
  
  // Detailed weekly breakdown (for internal use or detailed view)
  weeklyContent: [
    {
      weekNumber: "1-2",
      title: "Programming Fundamentals",
      description: "Build a strong foundation in programming with variables, control flow, functions, and object-oriented concepts.",
      duration: "2 weeks",
      topics: [
        "Variables and Data Types",
        "Control Flow: Conditionals",
        "Loops and Iteration",
        "Functions and Modular Code",
        "Object-Oriented Programming Basics"
      ],
      exercises: [
        {
          title: "Temperature Converter",
          difficulty: "Easy",
          estimatedTime: "30 mins"
        },
        {
          title: "Grade Calculator",
          difficulty: "Easy",
          estimatedTime: "45 mins"
        },
        {
          title: "Simple Banking System",
          difficulty: "Medium",
          estimatedTime: "2 hours"
        }
      ],
      miniProject: {
        title: "Contact Management System",
        estimatedTime: "4-6 hours",
        description: "Build a contact management application using OOP principles"
      },
      quizId: "foundational-cs-week1",
      resources: [
        {
          title: "Python Official Tutorial",
          url: "https://docs.python.org/3/tutorial/",
          type: "documentation"
        },
        {
          title: "JavaScript MDN Guide",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
          type: "documentation"
        },
        {
          title: "OOP Concepts - GeeksforGeeks",
          url: "https://www.geeksforgeeks.org/object-oriented-programming-oops-concept-in-java/",
          type: "article"
        }
      ]
    },
    {
      weekNumber: "3-4",
      title: "Data Structures",
      description: "Learn fundamental data structures and understand when to use each one for optimal problem-solving.",
      duration: "2 weeks",
      topics: [
        "Arrays and Dynamic Arrays",
        "Linked Lists",
        "Stacks",
        "Queues",
        "Hash Tables"
      ],
      exercises: [
        {
          title: "Implement a Stack",
          difficulty: "Easy",
          estimatedTime: "45 mins"
        },
        {
          title: "Reverse a Linked List",
          difficulty: "Medium",
          estimatedTime: "1 hour"
        },
        {
          title: "Queue using Stacks",
          difficulty: "Medium",
          estimatedTime: "1.5 hours"
        }
      ],
      miniProject: {
        title: "Task Scheduler Application",
        estimatedTime: "5-7 hours",
        description: "Build a task scheduler using multiple data structures"
      },
      quizId: "foundational-cs-week3",
      resources: [
        {
          title: "VisuAlgo - Data Structure Visualizations",
          url: "https://visualgo.net/",
          type: "interactive"
        },
        {
          title: "GeeksforGeeks Data Structures",
          url: "https://www.geeksforgeeks.org/data-structures/",
          type: "documentation"
        }
      ]
    },
    {
      weekNumber: "5",
      title: "Algorithms",
      description: "Master essential algorithms including sorting, searching, and recursion with practical applications.",
      duration: "1 week",
      topics: [
        "Sorting Algorithms",
        "Searching Algorithms",
        "Recursion",
        "Time and Space Complexity"
      ],
      exercises: [
        {
          title: "Implement Quick Sort",
          difficulty: "Medium",
          estimatedTime: "1 hour"
        },
        {
          title: "Binary Search Implementation",
          difficulty: "Easy",
          estimatedTime: "45 mins"
        },
        {
          title: "Fibonacci with Recursion",
          difficulty: "Medium",
          estimatedTime: "1 hour"
        }
      ],
      miniProject: {
        title: "Search and Sort Visualizer",
        estimatedTime: "4-6 hours",
        description: "Create an interactive algorithm visualizer"
      },
      quizId: "foundational-cs-week5",
      resources: [
        {
          title: "Sorting Algorithm Animations",
          url: "https://www.toptal.com/developers/sorting-algorithms",
          type: "interactive"
        },
        {
          title: "Big-O Cheat Sheet",
          url: "https://www.bigocheatsheet.com/",
          type: "reference"
        }
      ]
    },
    {
      weekNumber: "6",
      title: "Databases & SQL Basics",
      description: "Learn database fundamentals, SQL queries, and how to design efficient database schemas.",
      duration: "1 week",
      topics: [
        "Database Fundamentals",
        "SQL Basics",
        "SQL Joins and Relationships",
        "Database Design"
      ],
      exercises: [
        {
          title: "Basic SQL Queries",
          difficulty: "Easy",
          estimatedTime: "45 mins"
        },
        {
          title: "Complex Joins",
          difficulty: "Medium",
          estimatedTime: "1 hour"
        },
        {
          title: "Database Design Project",
          difficulty: "Medium",
          estimatedTime: "2 hours"
        }
      ],
      miniProject: {
        title: "Library Management System Database",
        estimatedTime: "4-5 hours",
        description: "Design and implement a complete database schema"
      },
      quizId: "foundational-cs-week6",
      resources: [
        {
          title: "SQL Tutorial - W3Schools",
          url: "https://www.w3schools.com/sql/",
          type: "interactive"
        },
        {
          title: "Database Design Basics",
          url: "https://www.lucidchart.com/pages/database-diagram/database-design",
          type: "article"
        }
      ]
    },
    {
      weekNumber: "7",
      title: "Computer Networks & OS Basics",
      description: "Understand networking fundamentals and operating system concepts essential for every developer.",
      duration: "1 week",
      topics: [
        "Computer Networking Basics",
        "IP Addressing and Subnetting",
        "Operating System Fundamentals",
        "File Systems and I/O"
      ],
      exercises: [
        {
          title: "Network Troubleshooting",
          difficulty: "Easy",
          estimatedTime: "30 mins"
        },
        {
          title: "Process Monitoring",
          difficulty: "Easy",
          estimatedTime: "45 mins"
        },
        {
          title: "Network Simulator",
          difficulty: "Medium",
          estimatedTime: "2 hours"
        }
      ],
      miniProject: {
        title: "System Monitor Dashboard",
        estimatedTime: "5-6 hours",
        description: "Build a tool to monitor system resources"
      },
      quizId: "foundational-cs-week7",
      resources: [
        {
          title: "Computer Networks - Cloudflare Learning",
          url: "https://www.cloudflare.com/learning/network-layer/what-is-a-computer-network/",
          type: "documentation"
        },
        {
          title: "Operating Systems Basics",
          url: "https://www.tutorialspoint.com/operating_system/index.htm",
          type: "tutorial"
        }
      ]
    },
    {
      weekNumber: "8",
      title: "Capstone Mini Project",
      description: "Apply everything you've learned by building a comprehensive project that integrates all concepts.",
      duration: "1 week",
      topics: [
        "Project Planning",
        "Code Organization Best Practices",
        "Testing and Debugging"
      ],
      finalProject: {
        title: "Student Information Management System",
        description: "Build a complete student management system demonstrating all concepts learned.",
        estimatedTime: "15-20 hours",
        features: [
          "Add, edit, delete student records",
          "Search and filter students",
          "Generate reports and statistics",
          "Export data to files",
          "User login system"
        ]
      },
      quizId: "foundational-cs-week8",
      resources: [
        {
          title: "GitHub for Project Hosting",
          url: "https://github.com",
          type: "tool"
        },
        {
          title: "Project Documentation Guide",
          url: "https://www.writethedocs.org/guide/writing/beginners-guide-to-docs/",
          type: "article"
        }
      ]
    }
  ],
  
  // Course metadata
  metadata: {
    createdAt: "2025-01-20",
    lastUpdated: "2025-01-20",
    language: "English",
    certification: true,
    isPublished: true,
    isFree: true,
    totalLessons: 24,
    totalExercises: 15,
    totalProjects: 8,
    totalQuizzes: 6
  }
};

export default foundationalCSJourney;