
export const algorithmsAndProblemSolvingQuiz = {
  title: "Algorithms & Problem Solving Quiz",
  questions: {
    beginner: [
      {
        question: "What is an algorithm?",
        options: [
          "A programming language",
          "A step-by-step procedure for solving a problem or accomplishing a task",
          "A type of data structure",
          "A computer program"
        ],
        answer: "A step-by-step procedure for solving a problem or accomplishing a task"
      },
      {
        question: "Which of the following is NOT a characteristic of a good algorithm?",
        options: [
          "Finiteness (must terminate after a finite number of steps)",
          "Definiteness (each step must be precisely defined)",
          "Ambiguity (can have multiple interpretations)",
          "Effectiveness (each step must be basic enough to be done exactly)"
        ],
        answer: "Ambiguity (can have multiple interpretations)"
      },
      {
        question: "What is the purpose of a flowchart in algorithm design?",
        options: [
          "To write the code for the algorithm",
          "To visually represent the steps and decision points of an algorithm",
          "To test the algorithm",
          "To document the algorithm after it's implemented"
        ],
        answer: "To visually represent the steps and decision points of an algorithm"
      },
      {
        question: "What is pseudocode?",
        options: [
          "Actual executable code",
          "A high-level description of an algorithm that uses a mix of natural language and programming constructs",
          "A type of error in an algorithm",
          "A graphical representation of an algorithm"
        ],
        answer: "A high-level description of an algorithm that uses a mix of natural language and programming constructs"
      },
      {
        question: "Which data structure is typically used to implement a LIFO (Last-In, First-Out) behavior?",
        options: [
          "Queue",
          "Stack",
          "Array",
          "Linked List"
        ],
        answer: "Stack"
      },
      {
        question: "Which data structure is typically used to implement a FIFO (First-In, First-Out) behavior?",
        options: [
          "Stack",
          "Queue",
          "Tree",
          "Hash Table"
        ],
        answer: "Queue"
      },
      {
        question: "What is the time complexity of searching for an element in a sorted array using binary search?",
        options: [
          "O(n)",
          "O(log n)",
          "O(n^2)",
          "O(1)"
        ],
        answer: "O(log n)"
      },
      {
        question: "What is the time complexity of accessing an element by its index in an array?",
        options: [
          "O(n)",
          "O(log n)",
          "O(n^2)",
          "O(1)"
        ],
        answer: "O(1)"
      },
      {
        question: "What is the purpose of a loop in an algorithm?",
        options: [
          "To make a decision",
          "To repeat a block of code multiple times",
          "To store data",
          "To define a function"
        ],
        answer: "To repeat a block of code multiple times"
      },
      {
        question: "What is a conditional statement (e.g., if-else) used for in an algorithm?",
        options: [
          "To repeat a block of code",
          "To make decisions based on certain conditions",
          "To store data",
          "To define a function"
        ],
        answer: "To make decisions based on certain conditions"
      }
    ],
    intermediate: [
      {
        question: "What is the worst-case time complexity of Bubble Sort?",
        options: [
          "O(n)",
          "O(log n)",
          "O(n^2)",
          "O(n log n)"
        ],
        answer: "O(n^2)"
      },
      {
        question: "What is the average-case time complexity of Quick Sort?",
        options: [
          "O(n)",
          "O(log n)",
          "O(n^2)",
          "O(n log n)"
        ],
        answer: "O(n log n)"
      },
      {
        question: "What is a hash table (or hash map)?",
        options: [
          "A data structure that stores data in a sorted order",
          "A data structure that maps keys to values using a hash function for fast lookups",
          "A data structure that uses a linked list",
          "A data structure that uses a tree"
        ],
        answer: "A data structure that maps keys to values using a hash function for fast lookups"
      },
      {
        question: "What is a collision in a hash table?",
        options: [
          "When two different keys hash to the same index",
          "When a key is not found",
          "When the hash table is full",
          "When the hash function is too slow"
        ],
        answer: "When two different keys hash to the same index"
      },
      {
        question: "What is recursion?",
        options: [
          "A function that calls itself",
          "A function that calls another function",
          "A function that never terminates",
          "A function that uses a loop"
        ],
        answer: "A function that calls itself"
      },
      {
        question: "What is dynamic programming?",
        options: [
          "A programming paradigm that solves problems by breaking them down into simpler subproblems and storing the results of subproblems to avoid recomputation",
          "A programming paradigm that uses recursion",
          "A programming paradigm that uses loops",
          "A programming paradigm that uses conditional statements"
        ],
        answer: "A programming paradigm that solves problems by breaking them down into simpler subproblems and storing the results of subproblems to avoid recomputation"
      },
      {
        question: "What is a greedy algorithm?",
        options: [
          "An algorithm that always makes the locally optimal choice at each stage with the hope of finding a global optimum",
          "An algorithm that always makes the worst choice",
          "An algorithm that always makes a random choice",
          "An algorithm that always makes the same choice"
        ],
        answer: "An algorithm that always makes the locally optimal choice at each stage with the hope of finding a global optimum"
      },
      {
        question: "What is a graph data structure?",
        options: [
          "A collection of nodes (vertices) and edges (connections) that represent relationships between entities",
          "A linear data structure",
          "A hierarchical data structure",
          "A data structure that stores data in a table"
        ],
        answer: "A collection of nodes (vertices) and edges (connections) that represent relationships between entities"
      },
      {
        question: "What is Depth-First Search (DFS)?",
        options: [
          "A graph traversal algorithm that explores as far as possible along each branch before backtracking",
          "A graph traversal algorithm that explores all of the neighbor nodes at the present depth prior to moving on to the nodes at the next depth level",
          "A search algorithm for sorted arrays",
          "A search algorithm for hash tables"
        ],
        answer: "A graph traversal algorithm that explores as far as possible along each branch before backtracking"
      },
      {
        question: "What is Breadth-First Search (BFS)?",
        options: [
          "A graph traversal algorithm that explores as far as possible along each branch before backtracking",
          "A graph traversal algorithm that explores all of the neighbor nodes at the present depth prior to moving on to the nodes at the next depth level",
          "A search algorithm for sorted arrays",
          "A search algorithm for hash tables"
        ],
        answer: "A graph traversal algorithm that explores all of the neighbor nodes at the present depth prior to moving on to the nodes at the next depth level"
      }
    ],
    advanced: [
      {
        question: "What is the Master Theorem used for?",
        options: [
          "To solve recurrence relations that arise in the analysis of divide-and-conquer algorithms",
          "To analyze the space complexity of algorithms",
          "To design new algorithms",
          "To prove the correctness of algorithms"
        ],
        answer: "To solve recurrence relations that arise in the analysis of divide-and-conquer algorithms"
      },
      {
        question: "What is the difference between P and NP complexity classes?",
        options: [
          "P problems can be solved in polynomial time, while NP problems can be verified in polynomial time",
          "P problems are harder than NP problems",
          "NP problems can be solved in polynomial time, while P problems can be verified in polynomial time",
          "There is no difference"
        ],
        answer: "P problems can be solved in polynomial time, while NP problems can be verified in polynomial time"
      },
      {
        question: "What is a NP-hard problem?",
        options: [
          "A problem that is at least as hard as the hardest problems in NP",
          "A problem that can be solved in polynomial time",
          "A problem that can be verified in polynomial time",
          "A problem that is easy to solve"
        ],
        answer: "A problem that is at least as hard as the hardest problems in NP"
      },
      {
        question: "What is a NP-complete problem?",
        options: [
          "A problem that is both in NP and NP-hard",
          "A problem that can be solved in polynomial time",
          "A problem that can be verified in polynomial time",
          "A problem that is easy to solve"
        ],
        answer: "A problem that is both in NP and NP-hard"
      },
      {
        question: "What is the purpose of Dijkstra's algorithm?",
        options: [
          "To find the shortest paths between nodes in a graph, which may represent, for example, road networks",
          "To find the longest paths between nodes in a graph",
          "To find all paths between nodes in a graph",
          "To find cycles in a graph"
        ],
        answer: "To find the shortest paths between nodes in a graph, which may represent, for example, road networks"
      },
      {
        question: "What is the purpose of the A* search algorithm?",
        options: [
          "To find the shortest path between nodes in a graph, using a heuristic function to guide its search",
          "To find the longest path between nodes in a graph",
          "To find all paths between nodes in a graph",
          "To find cycles in a graph"
        ],
        answer: "To find the shortest path between nodes in a graph, using a heuristic function to guide its search"
      },
      {
        question: "What is a topological sort?",
        options: [
          "An ordering of the vertices in a directed acyclic graph (DAG) such that for every directed edge from vertex u to vertex v, u comes before v in the ordering",
          "A sorting algorithm for arrays",
          "A sorting algorithm for linked lists",
          "A sorting algorithm for trees"
        ],
        answer: "An ordering of the vertices in a directed acyclic graph (DAG) such that for every directed edge from vertex u to vertex v, u comes before v in the ordering"
      },
      {
        question: "What is the purpose of the Knuth-Morris-Pratt (KMP) algorithm?",
        options: [
          "To search for occurrences of a 'word' within a main 'text' by avoiding re-examining characters that have already been matched",
          "To sort an array",
          "To find the shortest path in a graph",
          "To compress data"
        ],
        answer: "To search for occurrences of a 'word' within a main 'text' by avoiding re-examining characters that have already been matched"
      },
      {
        question: "What is a suffix array?",
        options: [
          "A sorted array of all suffixes of a given string",
          "A data structure for storing prefixes",
          "A data structure for storing substrings",
          "A data structure for storing characters"
        ],
        answer: "A sorted array of all suffixes of a given string"
      },
      {
        question: "What is the purpose of the Fast Fourier Transform (FFT) algorithm?",
        options: [
          "To efficiently compute the discrete Fourier transform (DFT) of a sequence, or its inverse",
          "To sort an array",
          "To search for a pattern in a string",
          "To find the shortest path in a graph"
        ],
        answer: "To efficiently compute the discrete Fourier transform (DFT) of a sequence, or its inverse"
      }
    ]
  }
};
