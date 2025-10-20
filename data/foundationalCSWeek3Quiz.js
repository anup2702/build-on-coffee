/* jshint esversion: 6 */

/**
 * Foundational CS Week 3-4 Quiz - Data Structures
 * Topics: Arrays, Linked Lists, Stacks, Queues, Hash Tables
 */

export const foundationalCSWeek3Quiz = {
  id: "foundational-cs-week3",
  title: "Foundational CS Week 3-4: Data Structures",
  description: "Test your knowledge of fundamental data structures including arrays, linked lists, stacks, queues, and hash tables.",
  difficulty: "Intermediate",
  category: "Data Structures",
  estimatedTime: "30 minutes",
  passingScore: 70,
  questions: [
    // Beginner Level (10 questions)
    {
      id: "w3q1",
      question: "What is an array?",
      options: [
        "A single variable",
        "A collection of elements stored at contiguous memory locations",
        "A type of loop",
        "A function"
      ],
      correctAnswer: 1,
      explanation: "An array is a data structure that stores a collection of elements (of the same type) in contiguous memory locations, accessible by index.",
      difficulty: "beginner",
      topic: "Arrays"
    },
    {
      id: "w3q2",
      question: "What is the index of the first element in most programming languages?",
      options: ["1", "0", "-1", "Depends on the language"],
      correctAnswer: 1,
      explanation: "In most programming languages, arrays are zero-indexed (first element at index 0).",
      difficulty: "beginner",
      topic: "Arrays"
    },
    {
      id: "w3q3",
      question: "What is a linked list?",
      options: [
        "An array with links",
        "A linear data structure where elements are stored in nodes",
        "A type of array",
        "A sorting algorithm"
      ],
      correctAnswer: 1,
      explanation: "A linked list is a linear data structure where each node contains data and a pointer to the next node.",
      difficulty: "beginner",
      topic: "Linked Lists"
    },
    {
      id: "w3q4",
      question: "Which principle does a stack follow?",
      options: [
        "FIFO (First In First Out)",
        "LIFO (Last In First Out)",
        "Random Access",
        "Priority Based"
      ],
      correctAnswer: 1,
      explanation: "A stack follows LIFO (Last In First Out) principle.",
      difficulty: "beginner",
      topic: "Stacks"
    },
    {
      id: "w3q5",
      question: "Which principle does a queue follow?",
      options: [
        "LIFO (Last In First Out)",
        "FIFO (First In First Out)",
        "Random Access",
        "Stack Based"
      ],
      correctAnswer: 1,
      explanation: "A queue follows FIFO (First In First Out) principle.",
      difficulty: "beginner",
      topic: "Queues"
    },
    {
      id: "w3q6",
      question: "What are the two main operations of a stack?",
      options: ["Insert and Delete", "Push and Pop", "Enqueue and Dequeue", "Add and Remove"],
      correctAnswer: 1,
      explanation: "Stack supports Push (add) and Pop (remove) operations.",
      difficulty: "beginner",
      topic: "Stacks"
    },
    {
      id: "w3q7",
      question: "What is a hash table used for?",
      options: ["Sorting data", "Fast data lookup using key-value pairs", "Sequential access", "Stack operations"],
      correctAnswer: 1,
      explanation: "Hash tables are used for efficient key-value lookups.",
      difficulty: "beginner",
      topic: "Hash Tables"
    },
    {
      id: "w3q8",
      question: "What does 'enqueue' mean in a queue?",
      options: ["Remove an element", "Add an element to the rear", "Check the front element", "Sort the queue"],
      correctAnswer: 1,
      explanation: "Enqueue means adding an element at the rear end of the queue.",
      difficulty: "beginner",
      topic: "Queues"
    },
    {
      id: "w3q9",
      question: "What is the head of a linked list?",
      options: ["The last node", "The first node", "The middle node", "The largest node"],
      correctAnswer: 1,
      explanation: "Head refers to the first node in a linked list.",
      difficulty: "beginner",
      topic: "Linked Lists"
    },
    {
      id: "w3q10",
      question: "What operation checks the top element of a stack without removing it?",
      options: ["Pop", "Push", "Peek/Top", "Search"],
      correctAnswer: 2,
      explanation: "Peek (Top) returns the top element without removing it.",
      difficulty: "beginner",
      topic: "Stacks"
    },

    // Intermediate Level (10 questions)
    {
      id: "w3q11",
      question: "What is the time complexity of accessing an element in an array by index?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
      correctAnswer: 0,
      explanation: "Array access by index is O(1) constant time.",
      difficulty: "intermediate",
      topic: "Arrays"
    },
    {
      id: "w3q12",
      question: "What is the main advantage of a linked list over an array?",
      options: ["Faster access time", "Dynamic size and efficient insertion/deletion", "Less memory usage", "Better cache performance"],
      correctAnswer: 1,
      explanation: "Linked lists have dynamic size and faster insert/delete.",
      difficulty: "intermediate",
      topic: "Linked Lists"
    },
    {
      id: "w3q13",
      question: "What is a collision in a hash table?",
      options: ["Data corruption", "When two keys hash to the same index", "Memory overflow", "Stack overflow"],
      correctAnswer: 1,
      explanation: "Collision occurs when two keys map to the same index.",
      difficulty: "intermediate",
      topic: "Hash Tables"
    },
    {
      id: "w3q14",
      question: "What is a circular queue?",
      options: [
        "A queue where the last position connects to the first",
        "A rotating queue",
        "A sorted queue",
        "A special array"
      ],
      correctAnswer: 0,
      explanation: "Circular queue connects last position back to the first.",
      difficulty: "intermediate",
      topic: "Queues"
    },
    {
      id: "w3q15",
      question: "What is a doubly linked list?",
      options: [
        "A list with two elements",
        "A list where each node has pointers to both next and previous nodes",
        "Two separate lists",
        "A list sorted in two ways"
      ],
      correctAnswer: 1,
      explanation: "Doubly linked lists allow traversal in both directions.",
      difficulty: "intermediate",
      topic: "Linked Lists"
    },
    {
      id: "w3q16",
      question: "Which collision resolution technique uses additional data structures?",
      options: ["Linear Probing", "Quadratic Probing", "Chaining", "Rehashing"],
      correctAnswer: 2,
      explanation: "Chaining uses linked lists to resolve collisions.",
      difficulty: "intermediate",
      topic: "Hash Tables"
    },
    {
      id: "w3q17",
      question: "What is the time complexity of insertion at the beginning of a linked list?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
      correctAnswer: 0,
      explanation: "Insertion at the head is O(1).",
      difficulty: "intermediate",
      topic: "Linked Lists"
    },
    {
      id: "w3q18",
      question: "What happens when you try to pop from an empty stack?",
      options: ["Returns null", "Stack underflow error", "Returns 0", "Nothing happens"],
      correctAnswer: 1,
      explanation: "Popping from empty stack causes underflow error.",
      difficulty: "intermediate",
      topic: "Stacks"
    },
    {
      id: "w3q19",
      question: "What is a priority queue?",
      options: [
        "A queue where elements are served based on priority",
        "A fast queue",
        "A sorted array",
        "A stack variant"
      ],
      correctAnswer: 0,
      explanation: "Priority queues serve elements based on priority value.",
      difficulty: "intermediate",
      topic: "Queues"
    },
    {
      id: "w3q20",
      question: "What is the load factor in a hash table?",
      options: ["Weight of data", "Ratio of elements to table size", "Speed of hashing", "Number of collisions"],
      correctAnswer: 1,
      explanation: "Load factor = number of elements / table size.",
      difficulty: "intermediate",
      topic: "Hash Tables"
    },

    // Advanced Level (10 questions)
    {
      id: "w3q21",
      question: "What is the time complexity of searching for an element in an unsorted array?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
      correctAnswer: 2,
      explanation: "Unsorted array search uses linear scan O(n).",
      difficulty: "advanced",
      topic: "Arrays"
    },
    {
      id: "w3q22",
      question: "How do you detect a cycle in a linked list?",
      options: ["Use an array", "Use Floyd's cycle detection (slow & fast pointers)", "Sort it", "Not possible"],
      correctAnswer: 1,
      explanation: "Floyd's cycle detection algorithm uses two pointers.",
      difficulty: "advanced",
      topic: "Linked Lists"
    },
    {
      id: "w3q23",
      question: "What is separate chaining in hash tables?",
      options: ["Different hash functions", "Storing colliding elements in linked lists", "Multiple tables", "Separate arrays"],
      correctAnswer: 1,
      explanation: "Separate chaining uses linked lists at each index.",
      difficulty: "advanced",
      topic: "Hash Tables"
    },
    {
      id: "w3q24",
      question: "What is the space complexity of a recursive reversal of a linked list?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
      correctAnswer: 1,
      explanation: "Recursive reversal uses O(n) call stack space.",
      difficulty: "advanced",
      topic: "Linked Lists"
    },
    {
      id: "w3q25",
      question: "What is open addressing in hash tables?",
      options: [
        "Keeping table open",
        "Finding alternative empty slots when collision occurs",
        "Using multiple tables",
        "Public hash access"
      ],
      correctAnswer: 1,
      explanation: "Open addressing probes for next empty slot.",
      difficulty: "advanced",
      topic: "Hash Tables"
    },
    {
      id: "w3q26",
      question: "Which data structure is used for undo operation in editors?",
      options: ["Array", "Queue", "Stack", "Hash Table"],
      correctAnswer: 2,
      explanation: "Undo uses stack (LIFO behavior).",
      difficulty: "advanced",
      topic: "Stacks"
    },
    {
      id: "w3q27",
      question: "What is the time complexity of insertion in a heap-based priority queue?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
      correctAnswer: 1,
      explanation: "Heap insertion takes O(log n).",
      difficulty: "advanced",
      topic: "Queues"
    },
    {
      id: "w3q28",
      question: "What is the advantage of a doubly linked list?",
      options: ["Less memory", "Bidirectional traversal and easy deletion", "Faster insert", "Better cache"],
      correctAnswer: 1,
      explanation: "Doubly linked lists support two-way traversal.",
      difficulty: "advanced",
      topic: "Linked Lists"
    },
    {
      id: "w3q29",
      question: "What is a deque (double-ended queue)?",
      options: ["Two queues", "Queue allowing insertion & deletion at both ends", "Sorted queue", "Circular queue"],
      correctAnswer: 1,
      explanation: "Deque allows operations from both ends.",
      difficulty: "advanced",
      topic: "Queues"
    },
    {
      id: "w3q30",
      question: "What is the average time complexity of hash table operations?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
      correctAnswer: 0,
      explanation: "Hash tables offer O(1) average insert/search/delete.",
      difficulty: "advanced",
      topic: "Hash Tables"
    }
  ],

  metadata: {
    totalQuestions: 30,
    questionsByDifficulty: {
      beginner: 10,
      intermediate: 10,
      advanced: 10
    },
    topics: ["Arrays", "Linked Lists", "Stacks", "Queues", "Hash Tables"],
    createdAt: "2025-01-20",
    version: "1.0"
  }
};

export default foundationalCSWeek3Quiz;
