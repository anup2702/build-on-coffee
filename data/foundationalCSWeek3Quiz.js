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
      explanation: "Insertion in a heap-based priority queue takes O(log n) time because the element may need to bubble up through the tree height.",
      difficulty: "advanced",
      topic: "Queues"
    },
    {
      id: "w3q28",
      question: "What is the advantage of a doubly linked list over a singly linked list?",
      options: [
        "Uses less memory",
        "Allows bidirectional traversal and easier deletion",
        "Faster insertion",
        "Better cache performance"
      ],
      correctAnswer: 1,
      explanation: "Doubly linked lists allow traversal in both directions and make deletion easier as you have access to the previous node.",
      difficulty: "advanced",
      topic: "Linked Lists"
    },
    {
      id: "w3q29",
      question: "What is a deque (double-ended queue)?",
      options: [
        "Two queues combined",
        "A queue allowing insertion and deletion at both ends",
        "A sorted queue",
        "A circular queue"
      ],
      correctAnswer: 1,
      explanation: "A deque (double-ended queue) allows insertion and deletion operations at both front and rear ends.",
      difficulty: "advanced",
      topic: "Queues"
    },
    {
      id: "w3q30",
      question: "What is the average time complexity of hash table operations (insert, delete, search)?",
      options: [
        "O(1)",
        "O(log n)",
        "O(n)",
        "O(n log n)"
      ],
      correctAnswer: 0,
      explanation: "Hash tables provide O(1) average time complexity for insert, delete, and search operations when the hash function distributes keys uniformly.",
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
    topics: [
      "Arrays",
      "Linked Lists",
      "Stacks",
      "Queues",
      "Hash Tables"
    ],
    createdAt: "2025-01-20",
    version: "1.0"
  }
};

export default foundationalCSWeek3Quiz;explanation: "An array is a data structure that stores a collection of elements (of the same type) in contiguous memory locations, accessible by index.",
      difficulty: "beginner",
      topic: "Arrays"
    },
    {
      id: "w3q2",
      question: "What is the index of the first element in most programming languages?",
      options: [
        "1",
        "0",
        "-1",
        "Depends on the language"
      ],
      correctAnswer: 1,
      explanation: "In most programming languages (C, Java, Python, JavaScript), arrays are zero-indexed, meaning the first element is at index 0.",
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
      explanation: "A linked list is a linear data structure where each element (node) contains data and a reference (link) to the next node in the sequence.",
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
      explanation: "A stack follows LIFO (Last In First Out) principle - the last element added is the first one to be removed.",
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
      explanation: "A queue follows FIFO (First In First Out) principle - the first element added is the first one to be removed.",
      difficulty: "beginner",
      topic: "Queues"
    },
    {
      id: "w3q6",
      question: "What are the two main operations of a stack?",
      options: [
        "Insert and Delete",
        "Push and Pop",
        "Enqueue and Dequeue",
        "Add and Remove"
      ],
      correctAnswer: 1,
      explanation: "The two primary stack operations are Push (add element to top) and Pop (remove element from top).",
      difficulty: "beginner",
      topic: "Stacks"
    },
    {
      id: "w3q7",
      question: "What is a hash table used for?",
      options: [
        "Sorting data",
        "Fast data lookup using key-value pairs",
        "Sequential access",
        "Stack operations"
      ],
      correctAnswer: 1,
      explanation: "A hash table stores key-value pairs and uses a hash function to compute an index for fast data retrieval, insertion, and deletion.",
      difficulty: "beginner",
      topic: "Hash Tables"
    },
    {
      id: "w3q8",
      question: "What does 'enqueue' mean in a queue?",
      options: [
        "Remove an element",
        "Add an element to the rear",
        "Check the front element",
        "Sort the queue"
      ],
      correctAnswer: 1,
      explanation: "Enqueue is the operation of adding an element to the rear (end) of a queue.",
      difficulty: "beginner",
      topic: "Queues"
    },
    {
      id: "w3q9",
      question: "What is the head of a linked list?",
      options: [
        "The last node",
        "The first node",
        "The middle node",
        "The largest node"
      ],
      correctAnswer: 1,
      explanation: "The head of a linked list is a reference to the first node in the list, serving as the entry point.",
      difficulty: "beginner",
      topic: "Linked Lists"
    },
    {
      id: "w3q10",
      question: "What operation checks the top element of a stack without removing it?",
      options: [
        "Pop",
        "Push",
        "Peek/Top",
        "Search"
      ],
      correctAnswer: 2,
      explanation: "Peek (or Top) operation returns the top element of the stack without removing it, allowing you to view it.",
      difficulty: "beginner",
      topic: "Stacks"
    },

    // Intermediate Level (10 questions)
    {
      id: "w3q11",
      question: "What is the time complexity of accessing an element in an array by index?",
      options: [
        "O(1)",
        "O(n)",
        "O(log n)",
        "O(n²)"
      ],
      correctAnswer: 0,
      explanation: "Array access by index is O(1) - constant time, as it directly calculates the memory address using the index.",
      difficulty: "intermediate",
      topic: "Arrays"
    },
    {
      id: "w3q12",
      question: "What is the main advantage of a linked list over an array?",
      options: [
        "Faster access time",
        "Dynamic size and efficient insertion/deletion",
        "Less memory usage",
        "Better cache performance"
      ],
      correctAnswer: 1,
      explanation: "Linked lists have dynamic size and allow efficient insertion/deletion at any position without shifting elements, unlike arrays.",
      difficulty: "intermediate",
      topic: "Linked Lists"
    },
    {
      id: "w3q13",
      question: "What is a collision in a hash table?",
      options: [
        "Data corruption",
        "When two keys hash to the same index",
        "Memory overflow",
        "Stack overflow"
      ],
      correctAnswer: 1,
      explanation: "A collision occurs when two different keys produce the same hash value, requiring a collision resolution strategy.",
      difficulty: "intermediate",
      topic: "Hash Tables"
    },
    {
      id: "w3q14",
      question: "What is a circular queue?",
      options: [
        "A queue sorted in circles",
        "A queue where the last position connects to the first",
        "A rotating queue",
        "A queue with circular elements"
      ],
      correctAnswer: 1,
      explanation: "A circular queue is a linear data structure where the last position is connected back to the first, making efficient use of space.",
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
      explanation: "A doubly linked list has nodes containing pointers to both the next and previous nodes, allowing bidirectional traversal.",
      difficulty: "intermediate",
      topic: "Linked Lists"
    },
    {
      id: "w3q16",
      question: "Which collision resolution technique uses additional data structures?",
      options: [
        "Linear Probing",
        "Quadratic Probing",
        "Chaining",
        "Rehashing"
      ],
      correctAnswer: 2,
      explanation: "Chaining resolves collisions by maintaining a linked list (or other structure) of all elements that hash to the same index.",
      difficulty: "intermediate",
      topic: "Hash Tables"
    },
    {
      id: "w3q17",
      question: "What is the time complexity of insertion at the beginning of a linked list?",
      options: [
        "O(1)",
        "O(n)",
        "O(log n)",
        "O(n²)"
      ],
      correctAnswer: 0,
      explanation: "Insertion at the beginning of a linked list is O(1) as it only requires updating the head pointer and the new node's next pointer.",
      difficulty: "intermediate",
      topic: "Linked Lists"
    },
    {
      id: "w3q18",
      question: "What happens when you try to pop from an empty stack?",
      options: [
        "Returns null",
        "Stack underflow error/exception",
        "Returns 0",
        "Nothing happens"
      ],
      correctAnswer: 1,
      explanation: "Attempting to pop from an empty stack results in a stack underflow condition, typically throwing an error or exception.",
      difficulty: "intermediate",
      topic: "Stacks"
    },
    {
      id: "w3q19",
      question: "What is a priority queue?",
      options: [
        "A fast queue",
        "A queue where elements are served based on priority",
        "A queue with high importance",
        "A sorted array"
      ],
      correctAnswer: 1,
      explanation: "A priority queue is a data structure where each element has a priority, and elements are dequeued based on their priority rather than insertion order.",
      difficulty: "intermediate",
      topic: "Queues"
    },
    {
      id: "w3q20",
      question: "What is the load factor in a hash table?",
      options: [
        "The weight of data",
        "The ratio of elements to table size",
        "The speed of hashing",
        "The number of collisions"
      ],
      correctAnswer: 1,
      explanation: "Load factor is the ratio of the number of stored elements to the size of the hash table, indicating how full the table is.",
      difficulty: "intermediate",
      topic: "Hash Tables"
    },

    // Advanced Level (10 questions)
    {
      id: "w3q21",
      question: "What is the time complexity of searching for an element in an unsorted array?",
      options: [
        "O(1)",
        "O(log n)",
        "O(n)",
        "O(n log n)"
      ],
      correctAnswer: 2,
      explanation: "Searching in an unsorted array requires linear search with O(n) time complexity, as we may need to check every element.",
      difficulty: "advanced",
      topic: "Arrays"
    },
    {
      id: "w3q22",
      question: "How do you detect a cycle in a linked list?",
      options: [
        "Use an array to store visited nodes",
        "Use Floyd's cycle detection (slow and fast pointers)",
        "Sort the list first",
        "It's not possible"
      ],
      correctAnswer: 1,
      explanation: "Floyd's cycle detection algorithm uses two pointers (slow moves one step, fast moves two steps) - if they meet, a cycle exists.",
      difficulty: "advanced",
      topic: "Linked Lists"
    },
    {
      id: "w3q23",
      question: "What is separate chaining in hash tables?",
      options: [
        "Using different hash functions",
        "Storing colliding elements in linked lists at each index",
        "Separating the table into sections",
        "Using multiple tables"
      ],
      correctAnswer: 1,
      explanation: "Separate chaining handles collisions by maintaining a linked list at each index, storing all elements that hash to that index.",
      difficulty: "advanced",
      topic: "Hash Tables"
    },
    {
      id: "w3q24",
      question: "What is the space complexity of a recursive implementation of reversing a linked list?",
      options: [
        "O(1)",
        "O(n)",
        "O(log n)",
        "O(n²)"
      ],
      correctAnswer: 1,
      explanation: "Recursive reversal of a linked list has O(n) space complexity due to the call stack, with n recursive calls for n nodes.",
      difficulty: "advanced",
      topic: "Linked Lists"
    },
    {
      id: "w3q25",
      question: "What is open addressing in hash tables?",
      options: [
        "Keeping the table open for access",
        "Finding alternative positions within the table when collision occurs",
        "Using public hash functions",
        "Allowing any data type"
      ],
      correctAnswer: 1,
      explanation: "Open addressing resolves collisions by probing for alternative empty positions within the hash table itself (linear, quadratic, or double hashing).",
      difficulty: "advanced",
      topic: "Hash Tables"
    },
    {
      id: "w3q26",
      question: "What is the optimal data structure for implementing an undo feature in a text editor?",
      options: [
        "Array",
        "Queue",
        "Stack",
        "Hash Table"
      ],
      correctAnswer: 2,
      explanation: "A stack is ideal for undo functionality as it follows LIFO - the most recent action (last in) should be undone first (first out).",
      difficulty: "advanced",
      topic: "Stacks"
    },
    {
      id: "w3q27",
      question: "What is the time complexity of insertion in a heap-based priority queue?",
      options: [
        "O(1)",
        "O(log n)",
        "O(n)",
        "O(n log n)"
      ],
      correctAnswer: 1,