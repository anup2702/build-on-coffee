/**
 * Foundational CS Week 5 Quiz - Algorithms
 * Topics: Sorting, Searching, Recursion, Time & Space Complexity
 */

export const foundationalCSWeek5Quiz = {
  id: "foundational-cs-week5",
  title: "Foundational CS Week 5: Algorithms",
  description: "Test your understanding of sorting algorithms, searching techniques, recursion, and complexity analysis.",
  difficulty: "Intermediate",
  category: "Algorithms",
  estimatedTime: "30 minutes",
  passingScore: 70,
  questions: [
    // Beginner Level (10 questions)
    {
      id: "w5q1",
      question: "Which sorting algorithm has the best average-case time complexity?",
      options: [
        "Bubble Sort - O(n²)",
        "Quick Sort - O(n log n)",
        "Selection Sort - O(n²)",
        "Insertion Sort - O(n²)"
      ],
      correctAnswer: 1,
      explanation: "Quick Sort has an average-case time complexity of O(n log n), making it one of the most efficient general-purpose sorting algorithms.",
      difficulty: "beginner",
      topic: "Sorting Algorithms"
    },
    {
      id: "w5q2",
      question: "What is the time complexity of binary search?",
      options: [
        "O(n)",
        "O(log n)",
        "O(n log n)",
        "O(1)"
      ],
      correctAnswer: 1,
      explanation: "Binary search has O(log n) time complexity because it divides the search space in half with each iteration.",
      difficulty: "beginner",
      topic: "Searching Algorithms"
    },
    {
      id: "w5q3",
      question: "What is a base case in recursion?",
      options: [
        "The first function call",
        "The condition that stops the recursion",
        "The recursive call itself",
        "The return statement"
      ],
      correctAnswer: 1,
      explanation: "A base case is the condition that stops recursion, preventing infinite loops and stack overflow.",
      difficulty: "beginner",
      topic: "Recursion"
    },
    {
      id: "w5q4",
      question: "Which of these is a stable sorting algorithm?",
      options: [
        "Quick Sort",
        "Heap Sort",
        "Merge Sort",
        "Selection Sort"
      ],
      correctAnswer: 2,
      explanation: "Merge Sort is stable, meaning it preserves the relative order of equal elements.",
      difficulty: "beginner",
      topic: "Sorting Algorithms"
    },
    {
      id: "w5q5",
      question: "What does Big O notation describe?",
      options: [
        "The exact runtime of an algorithm",
        "The upper bound of algorithm complexity",
        "The lower bound of algorithm complexity",
        "The memory usage only"
      ],
      correctAnswer: 1,
      explanation: "Big O notation describes the upper bound (worst-case scenario) of an algorithm's time or space complexity.",
      difficulty: "beginner",
      topic: "Complexity Analysis"
    },
    {
      id: "w5q6",
      question: "Linear search works on:",
      options: [
        "Only sorted arrays",
        "Only unsorted arrays",
        "Both sorted and unsorted arrays",
        "Only linked lists"
      ],
      correctAnswer: 2,
      explanation: "Linear search can work on both sorted and unsorted arrays by checking each element sequentially.",
      difficulty: "beginner",
      topic: "Searching Algorithms"
    },
    {
      id: "w5q7",
      question: "What is the space complexity of merge sort?",
      options: [
        "O(1)",
        "O(log n)",
        "O(n)",
        "O(n²)"
      ],
      correctAnswer: 2,
      explanation: "Merge Sort requires O(n) extra space for the temporary arrays used during merging.",
      difficulty: "beginner",
      topic: "Complexity Analysis"
    },
    {
      id: "w5q8",
      question: "Which is faster for small datasets?",
      options: [
        "Quick Sort",
        "Merge Sort",
        "Insertion Sort",
        "Heap Sort"
      ],
      correctAnswer: 2,
      explanation: "Insertion Sort is often faster for small datasets due to its low overhead and good cache performance.",
      difficulty: "beginner",
      topic: "Sorting Algorithms"
    },
    {
      id: "w5q9",
      question: "What is tail recursion?",
      options: [
        "Recursion at the end of a program",
        "When the recursive call is the last operation",
        "Recursion without a base case",
        "Multiple recursive calls"
      ],
      correctAnswer: 1,
      explanation: "Tail recursion occurs when the recursive call is the last operation in the function, allowing for optimization.",
      difficulty: "beginner",
      topic: "Recursion"
    },
    {
      id: "w5q10",
      question: "Binary search requires the array to be:",
      options: [
        "Unsorted",
        "Sorted",
        "Partially sorted",
        "Reverse sorted"
      ],
      correctAnswer: 1,
      explanation: "Binary search only works correctly on sorted arrays, as it relies on the ordering to eliminate half the search space.",
      difficulty: "beginner",
      topic: "Searching Algorithms"
    },

    // Intermediate Level (10 questions)
    {
      id: "w5q11",
      question: "What is the worst-case time complexity of Quick Sort?",
      options: [
        "O(n)",
        "O(n log n)",
        "O(n²)",
        "O(log n)"
      ],
      correctAnswer: 2,
      explanation: "Quick Sort's worst case is O(n²) when the pivot consistently results in unbalanced partitions.",
      difficulty: "intermediate",
      topic: "Sorting Algorithms"
    },
    {
      id: "w5q12",
      question: "Which sorting algorithm is best for linked lists?",
      options: [
        "Quick Sort",
        "Heap Sort",
        "Merge Sort",
        "Bubble Sort"
      ],
      correctAnswer: 2,
      explanation: "Merge Sort is ideal for linked lists because it doesn't require random access and can efficiently merge lists.",
      difficulty: "intermediate",
      topic: "Sorting Algorithms"
    },
    {
      id: "w5q13",
      question: "What problem does memoization solve in recursion?",
      options: [
        "Stack overflow",
        "Redundant calculations",
        "Base case issues",
        "Memory leaks"
      ],
      correctAnswer: 1,
      explanation: "Memoization eliminates redundant calculations by storing and reusing previously computed results.",
      difficulty: "intermediate",
      topic: "Recursion"
    },
    {
      id: "w5q14",
      question: "Which algorithm uses a divide-and-conquer strategy?",
      options: [
        "Bubble Sort",
        "Insertion Sort",
        "Merge Sort",
        "Selection Sort"
      ],
      correctAnswer: 2,
      explanation: "Merge Sort uses divide-and-conquer by dividing the array into halves, sorting them, and merging.",
      difficulty: "intermediate",
      topic: "Sorting Algorithms"
    },
    {
      id: "w5q15",
      question: "What is the time complexity of finding an element in an unsorted array?",
      options: [
        "O(1)",
        "O(log n)",
        "O(n)",
        "O(n²)"
      ],
      correctAnswer: 2,
      explanation: "Finding an element in an unsorted array requires linear search with O(n) time complexity.",
      difficulty: "intermediate",
      topic: "Searching Algorithms"
    },
    {
      id: "w5q16",
      question: "Which is true about in-place sorting algorithms?",
      options: [
        "They use O(n) extra space",
        "They use O(1) extra space",
        "They are always faster",
        "They are always stable"
      ],
      correctAnswer: 1,
      explanation: "In-place sorting algorithms use only O(1) extra space, modifying the original array directly.",
      difficulty: "intermediate",
      topic: "Sorting Algorithms"
    },
    {
      id: "w5q17",
      question: "What is the maximum depth of recursion for factorial(5)?",
      options: [
        "3",
        "4",
        "5",
        "6"
      ],
      correctAnswer: 3,
      explanation: "factorial(5) creates 6 stack frames: factorial(5), factorial(4), factorial(3), factorial(2), factorial(1), and factorial(0).",
      difficulty: "intermediate",
      topic: "Recursion"
    },
    {
      id: "w5q18",
      question: "Which complexity class is better: O(n) or O(n log n)?",
      options: [
        "O(n) is always better",
        "O(n log n) is always better",
        "They are equal",
        "It depends on n"
      ],
      correctAnswer: 0,
      explanation: "O(n) is better (faster) than O(n log n) for all positive values of n.",
      difficulty: "intermediate",
      topic: "Complexity Analysis"
    },
    {
      id: "w5q19",
      question: "What makes Quick Sort efficient in practice?",
      options: [
        "Good cache locality",
        "Simple implementation",
        "Guaranteed O(n log n)",
        "Works on linked lists"
      ],
      correctAnswer: 0,
      explanation: "Quick Sort has excellent cache locality, making it very fast in practice despite its O(n²) worst case.",
      difficulty: "intermediate",
      topic: "Sorting Algorithms"
    },
    {
      id: "w5q20",
      question: "What is the primary advantage of iterative solutions over recursive ones?",
      options: [
        "Easier to understand",
        "Less memory usage",
        "Always faster",
        "More elegant code"
      ],
      correctAnswer: 1,
      explanation: "Iterative solutions use less memory as they don't require stack frames for each function call.",
      difficulty: "intermediate",
      topic: "Recursion"
    },

    // Advanced Level (10 questions)
    {
      id: "w5q21",
      question: "What is the optimal pivot selection strategy for Quick Sort?",
      options: [
        "Always first element",
        "Always last element",
        "Random element",
        "Median-of-three"
      ],
      correctAnswer: 3,
      explanation: "Median-of-three (selecting median of first, middle, and last elements) helps avoid worst-case scenarios.",
      difficulty: "advanced",
      topic: "Sorting Algorithms"
    },
    {
      id: "w5q22",
      question: "Which sorting algorithm is best for nearly sorted data?",
      options: [
        "Quick Sort",
        "Merge Sort",
        "Insertion Sort",
        "Heap Sort"
      ],
      correctAnswer: 2,
      explanation: "Insertion Sort performs in nearly O(n) time on nearly sorted data, making it optimal for this case.",
      difficulty: "advanced",
      topic: "Sorting Algorithms"
    },
    {
      id: "w5q23",
      question: "What technique can convert recursion to iteration?",
      options: [
        "Dynamic programming",
        "Using an explicit stack",
        "Memoization",
        "Divide and conquer"
      ],
      correctAnswer: 1,
      explanation: "An explicit stack can simulate the call stack used in recursion, converting it to an iterative solution.",
      difficulty: "advanced",
      topic: "Recursion"
    },
    {
      id: "w5q24",
      question: "What is the time complexity of Heap Sort?",
      options: [
        "O(n)",
        "O(n log n) always",
        "O(n²)",
        "O(log n)"
      ],
      correctAnswer: 1,
      explanation: "Heap Sort guarantees O(n log n) time complexity in all cases (best, average, and worst).",
      difficulty: "advanced",
      topic: "Sorting Algorithms"
    },
    {
      id: "w5q25",
      question: "Which search algorithm is used in interpolation search?",
      options: [
        "Linear probing",
        "Binary search with better guessing",
        "Hash-based search",
        "Exponential search"
      ],
      correctAnswer: 1,
      explanation: "Interpolation search improves on binary search by making better guesses based on value distribution.",
      difficulty: "advanced",
      topic: "Searching Algorithms"
    },
    {
      id: "w5q26",
      question: "What is the space complexity of Quick Sort?",
      options: [
        "O(1)",
        "O(log n) average case",
        "O(n)",
        "O(n log n)"
      ],
      correctAnswer: 1,
      explanation: "Quick Sort uses O(log n) space on average for the recursion stack, but O(n) in the worst case.",
      difficulty: "advanced",
      topic: "Complexity Analysis"
    },
    {
      id: "w5q27",
      question: "Which algorithm has O(n + k) time complexity?",
      options: [
        "Quick Sort",
        "Merge Sort",
        "Counting Sort",
        "Heap Sort"
      ],
      correctAnswer: 2,
      explanation: "Counting Sort has O(n + k) time complexity, where n is the array size and k is the range of values.",
      difficulty: "advanced",
      topic: "Sorting Algorithms"
    },
    {
      id: "w5q28",
      question: "What is dynamic programming?",
      options: [
        "A type of recursion",
        "Recursion with memoization",
        "An iterative approach",
        "A sorting technique"
      ],
      correctAnswer: 1,
      explanation: "Dynamic programming combines recursion with memoization to solve problems by storing subproblem solutions.",
      difficulty: "advanced",
      topic: "Recursion"
    },
    {
      id: "w5q29",
      question: "Which statement about stable sorting is correct?",
      options: [
        "All O(n²) algorithms are stable",
        "Stability matters only for objects with multiple keys",
        "Stable sorts are always slower",
        "Quick Sort is stable"
      ],
      correctAnswer: 1,
      explanation: "Stability matters when sorting objects with multiple attributes, preserving the order of equal elements.",
      difficulty: "advanced",
      topic: "Sorting Algorithms"
    },
    {
      id: "w5q30",
      question: "What is the master theorem used for?",
      options: [
        "Analyzing iterative algorithms",
        "Analyzing divide-and-conquer recurrences",
        "Proving correctness",
        "Optimizing code"
      ],
      correctAnswer: 1,
      explanation: "The Master Theorem provides a way to analyze the time complexity of divide-and-conquer algorithms.",
      difficulty: "advanced",
      topic: "Complexity Analysis"
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
      "Sorting Algorithms",
      "Searching Algorithms",
      "Recursion",
      "Complexity Analysis"
    ],
    createdAt: "2025-01-20",
    version: "1.0"
  }
};

export default foundationalCSWeek5Quiz;