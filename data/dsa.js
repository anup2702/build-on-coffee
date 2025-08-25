const dsaQuestions = {
  beginner: [
    {
      question: "What is a data structure?",
      options: [
        "A way to store and organize data",
        "A programming language",
        "A type of algorithm",
        "A computer hardware component",
      ],
      answer: "A way to store and organize data",
    },
    {
      question: "What is an array?",
      options: [
        "A collection of elements of the same type",
        "A collection of elements of different types",
        "A data structure that follows the Last-In, First-Out (LIFO) principle",
        "A data structure that follows the First-In, First-Out (FIFO) principle",
      ],
      answer: "A collection of elements of the same type",
    },
    {
      question: "What is a linked list?",
      options: [
        "A linear data structure where elements are not stored at contiguous memory locations",
        "A data structure that stores elements in a hierarchical manner",
        "A data structure that allows for efficient searching of elements",
        "A data structure that represents a network of interconnected nodes",
      ],
      answer: "A linear data structure where elements are not stored at contiguous memory locations",
    },
    {
      question: "What is a stack?",
      options: [
        "A data structure that follows the Last-In, First-Out (LIFO) principle",
        "A data structure that follows the First-In, First-Out (FIFO) principle",
        "A data structure that allows for efficient sorting of elements",
        "A data structure that represents a tree-like structure",
      ],
      answer: "A data structure that follows the Last-In, First-Out (LIFO) principle",
    },
    {
      question: "What is a queue?",
      options: [
        "A data structure that follows the First-In, First-Out (FIFO) principle",
        "A data structure that follows the Last-In, First-Out (LIFO) principle",
        "A data structure that allows for efficient searching of elements",
        "A data structure that represents a graph-like structure",
      ],
      answer: "A data structure that follows the First-In, First-Out (FIFO) principle",
    },
    {
      question: "What is the time complexity of accessing an element in an array by its index?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
      answer: "O(1)",
    },
    {
      question: "Which of the following is a linear data structure?",
      options: ["Array", "Tree", "Graph", "Heap"],
      answer: "Array",
    },
    {
      question: "Which of the following is a non-linear data structure?",
      options: ["Tree", "Stack", "Queue", "Linked List"],
      answer: "Tree",
    },
    {
      question: "What is an algorithm?",
      options: [
        "A step-by-step procedure to solve a problem",
        "A data structure",
        "A programming language",
        "A computer hardware component",
      ],
      answer: "A step-by-step procedure to solve a problem",
    },
    {
      question: "Which sorting algorithm has the best-case time complexity of O(n log n)?",
      options: ["Merge Sort", "Bubble Sort", "Insertion Sort", "Quick Sort"],
      answer: "Merge Sort",
    },
  ],
  intermediate: [
    {
      question: "What is a hash table?",
      options: [
        "A data structure that maps keys to values",
        "A data structure that stores elements in a sorted order",
        "A data structure that follows the Last-In, First-Out (LIFO) principle",
        "A data structure that represents a hierarchical structure",
      ],
      answer: "A data structure that maps keys to values",
    },
    {
      question: "What is a binary search tree (BST)?",
      options: [
        "A tree data structure in which each node has at most two children, and the left child is less than the parent, and the right child is greater than the parent",
        "A tree data structure in which each node can have any number of children",
        "A graph data structure with no cycles",
        "A data structure that stores elements in a circular manner",
      ],
      answer: "A tree data structure in which each node has at most two children, and the left child is less than the parent, and the right child is greater than the parent",
    },
    {
      question: "What is the time complexity of searching for an element in a balanced binary search tree?",
      options: ["O(log n)", "O(n)", "O(1)", "O(n^2)"],
      answer: "O(log n)",
    },
    {
      question: "What is a graph?",
      options: [
        "A data structure that consists of a set of vertices and a set of edges",
        "A linear data structure",
        "A data structure that follows the First-In, First-Out (FIFO) principle",
        "A data structure that stores key-value pairs",
      ],
      answer: "A data structure that consists of a set of vertices and a set of edges",
    },
    {
      question: "What is the difference between a directed and an undirected graph?",
      options: [
        "In a directed graph, edges have a direction, while in an undirected graph, they do not",
        "A directed graph can have cycles, while an undirected graph cannot",
        "A directed graph is always connected, while an undirected graph can be disconnected",
        "A directed graph has weighted edges, while an undirected graph does not",
      ],
      answer: "In a directed graph, edges have a direction, while in an undirected graph, they do not",
    },
    {
      question: "What is Dijkstra's algorithm used for?",
      options: [
        "Finding the shortest path between two nodes in a weighted graph",
        "Sorting an array of numbers",
        "Searching for an element in a linked list",
        "Traversing a tree data structure",
      ],
      answer: "Finding the shortest path between two nodes in a weighted graph",
    },
    {
      question: "What is a heap?",
      options: [
        "A complete binary tree that satisfies the heap property",
        "A data structure that stores elements in a random order",
        "A data structure that allows for efficient insertion and deletion of elements at both ends",
        "A data structure that represents a set of disjoint sets",
      ],
      answer: "A complete binary tree that satisfies the heap property",
    },
    {
      question: "What is the time complexity of inserting an element into a min-heap?",
      options: ["O(log n)", "O(n)", "O(1)", "O(n log n)"],
      answer: "O(log n)",
    },
    {
      question: "What is dynamic programming?",
      options: [
        "An algorithmic technique for solving complex problems by breaking them down into simpler subproblems",
        "A way to store data in a database",
        "A method for designing user interfaces",
        "A type of machine learning algorithm",
      ],
      answer: "An algorithmic technique for solving complex problems by breaking them down into simpler subproblems",
    },
    {
      question: "What is the time complexity of the merge sort algorithm?",
      options: ["O(n log n)", "O(n^2)", "O(n)", "O(log n)"],
      answer: "O(n log n)",
    },
  ],
  advanced: [
    {
      question: "What is a trie?",
      options: [
        "A tree-like data structure that stores a dynamic set of strings",
        "A self-balancing binary search tree",
        "A probabilistic data structure",
        "A data structure for representing intervals",
      ],
      answer: "A tree-like data structure that stores a dynamic set of strings",
    },
    {
      question: "What is a Fenwick tree (Binary Indexed Tree)?",
      options: [
        "A data structure that can efficiently update elements and calculate prefix sums in a table of numbers",
        "A data structure for storing and querying high-dimensional data",
        "A data structure for finding the convex hull of a set of points",
        "A data structure for representing planar graphs",
      ],
      answer: "A data structure that can efficiently update elements and calculate prefix sums in a table of numbers",
    },
    {
      question: "What is the A* search algorithm?",
      options: [
        "A pathfinding algorithm that uses a heuristic to guide its search",
        "A sorting algorithm that is based on the divide-and-conquer paradigm",
        "A data compression algorithm",
        "A cryptographic algorithm",
      ],
      answer: "A pathfinding algorithm that uses a heuristic to guide its search",
    },
    {
      question: "What is a Bloom filter?",
      options: [
        "A space-efficient probabilistic data structure that is used to test whether an element is a member of a set",
        "A data structure that guarantees constant-time insertion and deletion",
        "A data structure that is optimized for range queries",
        "A data structure that can handle an infinite number of elements",
      ],
      answer: "A space-efficient probabilistic data structure that is used to test whether an element is a member of a set",
    },
    {
      question: "What is the Knuth-Morris-Pratt (KMP) algorithm used for?",
      options: [
        "Searching for a pattern in a string",
        "Finding the shortest path in a graph",
        "Multiplying two matrices",
        "Solving the traveling salesman problem",
      ],
      answer: "Searching for a pattern in a string",
    },
    {
      question: "What is a segment tree?",
      options: [
        "A tree data structure for storing information about intervals, or segments",
        "A data structure for representing a set of points in a multi-dimensional space",
        "A data structure for performing fast Fourier transforms",
        "A data structure for solving linear programming problems",
      ],
      answer: "A tree data structure for storing information about intervals, or segments",
    },
    {
      question: "What is the time complexity of the Floyd-Warshall algorithm?",
      options: ["O(V^3)", "O(V^2)", "O(E log V)", "O(V + E)"],
      answer: "O(V^3)",
    },
    {
      question: "What is a scapegoat tree?",
      options: [
        "A self-balancing binary search tree that is easy to implement",
        "A data structure that is used for text indexing",
        "A data structure that is optimized for parallel processing",
        "A data structure that can handle non-unique keys",
      ],
      answer: "A self-balancing binary search tree that is easy to implement",
    },
    {
      question: "What is the difference between a B-tree and a B+ tree?",
      options: [
        "In a B+ tree, all data is stored in the leaf nodes, while in a B-tree, data can be stored in both internal and leaf nodes",
        "A B+ tree is a binary tree, while a B-tree is not",
        "A B+ tree is used for in-memory databases, while a B-tree is used for disk-based databases",
        "A B+ tree has a higher branching factor than a B-tree",
      ],
      answer: "In a B+ tree, all data is stored in the leaf nodes, while in a B-tree, data can be stored in both internal and leaf nodes",
    },
    {
      question: "What is the time complexity of finding the median of an unsorted array?",
      options: ["O(n)", "O(n log n)", "O(1)", "O(n^2)"],
      answer: "O(n)",
    },
  ],
};

export default dsaQuestions;