/* jshint esversion: 6 */

/**
 * Foundational CS Week 8 Quiz - Comprehensive Final Assessment
 * Topics: All topics from Weeks 1-7 integrated
 */

export const foundationalCSWeek8Quiz = {
  id: "foundational-cs-week8",
  title: "Foundational CS Week 8: Final Comprehensive Assessment",
  description: "Final assessment covering all topics: Programming, Data Structures, Algorithms, Databases, Networks, and OS concepts.",
  difficulty: "Mixed",
  category: "Comprehensive",
  estimatedTime: "40 minutes",
  passingScore: 75,
  questions: [
    // Programming Fundamentals (5 questions)
    {
      id: "w8q1",
      question: "Which OOP principle allows a class to hide its internal implementation?",
      options: [
        "Inheritance",
        "Polymorphism",
        "Encapsulation",
        "Abstraction"
      ],
      correctAnswer: 2,
      explanation: "Encapsulation hides internal implementation details and exposes only necessary interfaces.",
      difficulty: "beginner",
      topic: "Programming Fundamentals"
    },
    {
      id: "w8q2",
      question: "What is the output of: for(i=0; i<3; i++) { console.log(i); }?",
      options: [
        "0 1 2",
        "1 2 3",
        "0 1 2 3",
        "1 2"
      ],
      correctAnswer: 0,
      explanation: "The loop starts at 0 and continues while i<3, printing 0, 1, 2.",
      difficulty: "beginner",
      topic: "Programming Fundamentals"
    },
    {
      id: "w8q3",
      question: "What is polymorphism in OOP?",
      options: [
        "Creating multiple objects",
        "Ability to take many forms",
        "Hiding data",
        "Code reusability"
      ],
      correctAnswer: 1,
      explanation: "Polymorphism allows objects to take many forms, enabling different behaviors through method overriding/overloading.",
      difficulty: "intermediate",
      topic: "Programming Fundamentals"
    },
    {
      id: "w8q4",
      question: "What is the difference between '==' and '===' in JavaScript?",
      options: [
        "No difference",
        "'==' checks type and value, '===' checks value only",
        "'===' checks type and value, '==' checks value only",
        "'===' is faster"
      ],
      correctAnswer: 2,
      explanation: "'===' (strict equality) checks both type and value, while '==' (loose equality) performs type coercion.",
      difficulty: "intermediate",
      topic: "Programming Fundamentals"
    },
    {
      id: "w8q5",
      question: "What is a closure in programming?",
      options: [
        "A way to close a program",
        "A function with access to its outer scope",
        "A loop termination",
        "A class destructor"
      ],
      correctAnswer: 1,
      explanation: "A closure is a function that has access to variables in its outer (enclosing) scope, even after the outer function has returned.",
      difficulty: "advanced",
      topic: "Programming Fundamentals"
    },

    // Data Structures (5 questions)
    {
      id: "w8q6",
      question: "Which data structure uses LIFO principle?",
      options: [
        "Queue",
        "Stack",
        "Array",
        "Tree"
      ],
      correctAnswer: 1,
      explanation: "Stack follows Last In First Out (LIFO) - the last element added is the first to be removed.",
      difficulty: "beginner",
      topic: "Data Structures"
    },
    {
      id: "w8q7",
      question: "What is the time complexity of accessing an element in an array by index?",
      options: [
        "O(1)",
        "O(n)",
        "O(log n)",
        "O(n²)"
      ],
      correctAnswer: 0,
      explanation: "Array access by index is O(1) - constant time, as it uses direct memory address calculation.",
      difficulty: "beginner",
      topic: "Data Structures"
    },
    {
      id: "w8q8",
      question: "What advantage does a linked list have over an array?",
      options: [
        "Faster access time",
        "Dynamic size and efficient insertion/deletion",
        "Uses less memory",
        "Better cache performance"
      ],
      correctAnswer: 1,
      explanation: "Linked lists have dynamic size and efficient insertion/deletion at any position without shifting elements.",
      difficulty: "intermediate",
      topic: "Data Structures"
    },
    {
      id: "w8q9",
      question: "In a hash table, what is a collision?",
      options: [
        "Two tables merging",
        "Two keys hashing to the same index",
        "A memory error",
        "Data corruption"
      ],
      correctAnswer: 1,
      explanation: "A collision occurs when two different keys produce the same hash value, requiring collision resolution.",
      difficulty: "intermediate",
      topic: "Data Structures"
    },
    {
      id: "w8q10",
      question: "What is the space complexity of a recursive Fibonacci implementation?",
      options: [
        "O(1)",
        "O(n)",
        "O(log n)",
        "O(2^n)"
      ],
      correctAnswer: 1,
      explanation: "The space complexity is O(n) due to the maximum recursion depth, though time complexity is O(2^n).",
      difficulty: "advanced",
      topic: "Data Structures"
    },

    // Algorithms (5 questions)
    {
      id: "w8q11",
      question: "Which sorting algorithm is NOT comparison-based?",
      options: [
        "Quick Sort",
        "Merge Sort",
        "Counting Sort",
        "Heap Sort"
      ],
      correctAnswer: 2,
      explanation: "Counting Sort is a non-comparison sorting algorithm that counts occurrences of each value.",
      difficulty: "intermediate",
      topic: "Algorithms"
    },
    {
      id: "w8q12",
      question: "What is the best case time complexity of Bubble Sort?",
      options: [
        "O(n)",
        "O(n log n)",
        "O(n²)",
        "O(1)"
      ],
      correctAnswer: 0,
      explanation: "Bubble Sort's best case is O(n) when the array is already sorted and the algorithm includes an early exit optimization.",
      difficulty: "intermediate",
      topic: "Algorithms"
    },
    {
      id: "w8q13",
      question: "Binary search can be applied to:",
      options: [
        "Any array",
        "Only sorted arrays",
        "Only linked lists",
        "Only trees"
      ],
      correctAnswer: 1,
      explanation: "Binary search requires a sorted array to work correctly by repeatedly dividing the search space.",
      difficulty: "beginner",
      topic: "Algorithms"
    },
    {
      id: "w8q14",
      question: "What is dynamic programming?",
      options: [
        "Programming languages",
        "Optimization technique using memoization",
        "Real-time programming",
        "Object-oriented programming"
      ],
      correctAnswer: 1,
      explanation: "Dynamic programming optimizes recursive algorithms by storing and reusing solutions to subproblems.",
      difficulty: "advanced",
      topic: "Algorithms"
    },
    {
      id: "w8q15",
      question: "Which algorithm uses a divide-and-conquer approach?",
      options: [
        "Bubble Sort",
        "Insertion Sort",
        "Merge Sort",
        "Selection Sort"
      ],
      correctAnswer: 2,
      explanation: "Merge Sort divides the array into halves, recursively sorts them, and merges the results.",
      difficulty: "intermediate",
      topic: "Algorithms"
    },

    // Databases & SQL (5 questions)
    {
      id: "w8q16",
      question: "What SQL command creates a new table?",
      options: [
        "NEW TABLE",
        "MAKE TABLE",
        "CREATE TABLE",
        "ADD TABLE"
      ],
      correctAnswer: 2,
      explanation: "CREATE TABLE is the SQL command to define and create a new table structure.",
      difficulty: "beginner",
      topic: "Databases"
    },
    {
      id: "w8q17",
      question: "Which normal form eliminates transitive dependencies?",
      options: [
        "1NF",
        "2NF",
        "3NF",
        "4NF"
      ],
      correctAnswer: 2,
      explanation: "Third Normal Form (3NF) eliminates transitive dependencies where non-key attributes depend on other non-key attributes.",
      difficulty: "intermediate",
      topic: "Databases"
    },
    {
      id: "w8q18",
      question: "What does the SQL DISTINCT keyword do?",
      options: [
        "Sorts results",
        "Removes duplicate rows",
        "Filters data",
        "Joins tables"
      ],
      correctAnswer: 1,
      explanation: "DISTINCT removes duplicate rows from the result set, returning only unique values.",
      difficulty: "beginner",
      topic: "Databases"
    },
    {
      id: "w8q19",
      question: "What is the purpose of an index in a database?",
      options: [
        "Store backups",
        "Improve query performance",
        "Enforce security",
        "Compress data"
      ],
      correctAnswer: 1,
      explanation: "Indexes improve query performance by creating a data structure for faster data retrieval.",
      difficulty: "intermediate",
      topic: "Databases"
    },
    {
      id: "w8q20",
      question: "What type of join returns all rows from both tables?",
      options: [
        "INNER JOIN",
        "LEFT JOIN",
        "RIGHT JOIN",
        "FULL OUTER JOIN"
      ],
      correctAnswer: 3,
      explanation: "FULL OUTER JOIN returns all rows from both tables, with NULL for non-matching rows.",
      difficulty: "intermediate",
      topic: "Databases"
    },

    // Networks & OS (5 questions)
    {
      id: "w8q21",
      question: "Which OSI layer is responsible for end-to-end communication?",
      options: [
        "Network Layer",
        "Transport Layer",
        "Session Layer",
        "Application Layer"
      ],
      correctAnswer: 1,
      explanation: "The Transport Layer (Layer 4) provides end-to-end communication services like TCP and UDP.",
      difficulty: "intermediate",
      topic: "Networks"
    },
    {
      id: "w8q22",
      question: "What is the purpose of a cache in an OS?",
      options: [
        "Long-term storage",
        "Fast access to frequently used data",
        "Backup storage",
        "Network buffer"
      ],
      correctAnswer: 1,
      explanation: "Cache provides fast access to frequently used data, reducing access time to slower storage.",
      difficulty: "beginner",
      topic: "Operating Systems"
    },
    {
      id: "w8q23",
      question: "What is a MAC address?",
      options: [
        "Apple computer address",
        "Media Access Control - hardware address",
        "Memory Access Code",
        "Master Authentication Code"
      ],
      correctAnswer: 1,
      explanation: "MAC address is a unique hardware identifier assigned to network interfaces.",
      difficulty: "beginner",
      topic: "Networks"
    },
    {
      id: "w8q24",
      question: "What scheduling algorithm gives each process equal CPU time?",
      options: [
        "First Come First Served",
        "Shortest Job First",
        "Round Robin",
        "Priority Scheduling"
      ],
      correctAnswer: 2,
      explanation: "Round Robin scheduling gives each process an equal time slice (quantum) in a cyclic manner.",
      difficulty: "intermediate",
      topic: "Operating Systems"
    },
    {
      id: "w8q25",
      question: "What is the difference between a hub and a switch?",
      options: [
        "No difference",
        "Switch is intelligent and directs data to specific ports",
        "Hub is faster",
        "Switch works wirelessly"
      ],
      correctAnswer: 1,
      explanation: "A switch intelligently forwards data to specific ports based on MAC addresses, while a hub broadcasts to all ports.",
      difficulty: "intermediate",
      topic: "Networks"
    }
  ],
  
  metadata: {
    totalQuestions: 25,
    questionsByDifficulty: {
      beginner: 8,
      intermediate: 13,
      advanced: 4
    },
    topics: [
      "Programming Fundamentals",
      "Data Structures",
      "Algorithms",
      "Databases",
      "Networks",
      "Operating Systems"
    ],
    comprehensiveAssessment: true,
    coverageByWeek: {
      "Week 1-2": 5,
      "Week 3-4": 5,
      "Week 5": 5,
      "Week 6": 5,
      "Week 7": 5
    },
    createdAt: "2025-01-20",
    version: "1.0"
  }
};

export default foundationalCSWeek8Quiz;