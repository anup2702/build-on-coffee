export const comprehensiveDsaPath = [
  // Foundational Level
  {
    id: "complexity-cheatsheet",
    title: "Foundations: Time & Space Complexity",
    description:
      "Understanding complexity is the most critical first step. It allows you to analyze your code's efficiency without even running it. Master these concepts before diving into problems.",
    cheatsheet: {
      title: "Big O Complexity Cheatsheet",
      complexities: [
        {
          complexity: "O(1)",
          name: "Constant",
          notes: "No change with input size. (e.g., accessing an array index)",
        },
        {
          complexity: "O(log n)",
          name: "Logarithmic",
          notes: "Halves the input size in each step. (e.g., binary search)",
        },
        {
          complexity: "O(n)",
          name: "Linear",
          notes: "Scales directly with input size. (e.g., iterating an array)",
        },
        {
          complexity: "O(n log n)",
          name: "Log-Linear",
          notes: "Efficient sorting algorithms. (e.g., merge sort, heap sort)",
        },
        {
          complexity: "O(n²)",
          name: "Quadratic",
          notes:
            "Every element is compared to every other element. (e.g., bubble sort)",
        },
        {
          complexity: "O(n³)",
          name: "Cubic",
          notes:
            "Often involves three nested loops. (e.g., 3x3 matrix operations)",
        },
        {
          complexity: "O(2ⁿ)",
          name: "Exponential",
          notes:
            "Doubles with each addition to the input. (e.g., recursive Fibonacci)",
        },
        {
          complexity: "O(n!)",
          name: "Factorial",
          notes:
            "Extremely slow; iterates through all permutations. (e.g., traveling salesman)",
        },
      ],
    },
    dataStructureComplexity: {
      title: "Common Data Structure Operations (Average Case)",
      structures: [
        {
          name: "Array",
          access: "O(1)",
          search: "O(n)",
          insertion: "O(n)",
          deletion: "O(n)",
        },
        {
          name: "Stack",
          access: "O(n)",
          search: "O(n)",
          insertion: "O(1)",
          deletion: "O(1)",
        },
        {
          name: "Queue",
          access: "O(n)",
          search: "O(n)",
          insertion: "O(1)",
          deletion: "O(1)",
        },
        {
          name: "Linked List",
          access: "O(n)",
          search: "O(n)",
          insertion: "O(1)",
          deletion: "O(1)",
        },
        {
          name: "Hash Table",
          access: "O(1)",
          search: "O(1)",
          insertion: "O(1)",
          deletion: "O(1)",
        },
        {
          name: "Binary Search Tree",
          access: "O(log n)",
          search: "O(log n)",
          insertion: "O(log n)",
          deletion: "O(log n)",
        },
        {
          name: "B-Tree",
          access: "O(log n)",
          search: "O(log n)",
          insertion: "O(log n)",
          deletion: "O(log n)",
        },
        {
          name: "Red-Black Tree",
          access: "O(log n)",
          search: "O(log n)",
          insertion: "O(log n)",
          deletion: "O(log n)",
        },
        {
          name: "AVL Tree",
          access: "O(log n)",
          search: "O(log n)",
          insertion: "O(log n)",
          deletion: "O(log n)",
        },
        {
          name: "Trie",
          access: "O(L)",
          search: "O(L)",
          insertion: "O(L)",
          deletion: "O(L)",
        },
      ],
    },
  },
  // Level 1: Array
  {
    id: "array",
    title: "Level 1: Array",
    description:
      "Arrays are the most fundamental data structure. Mastering manipulation, traversal, and subarray problems is essential.",
    problems: [
      {
        name: "Two Sum",
        link: "https://leetcode.com/problems/two-sum/",
        difficulty: "Easy",
      },
      {
        name: "Contains Duplicate",
        link: "https://leetcode.com/problems/contains-duplicate/",
        difficulty: "Easy",
      },
      {
        name: "Best Time to Buy and Sell Stock",
        link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
        difficulty: "Easy",
      },
      {
        name: "Plus One",
        link: "https://leetcode.com/problems/plus-one/",
        difficulty: "Easy",
      },
      {
        name: "Move Zeroes",
        link: "https://leetcode.com/problems/move-zeroes/",
        difficulty: "Easy",
      },
      {
        name: "Majority Element",
        link: "https://leetcode.com/problems/majority-element/",
        difficulty: "Easy",
      },
      {
        name: "Find Pivot Index",
        link: "https://leetcode.com/problems/find-pivot-index/",
        difficulty: "Easy",
      },
      {
        name: "Squares of a Sorted Array",
        link: "https://leetcode.com/problems/squares-of-a-sorted-array/",
        difficulty: "Easy",
      },
      {
        name: "Product of Array Except Self",
        link: "https://leetcode.com/problems/product-of-array-except-self/",
        difficulty: "Medium",
      },
      {
        name: "Maximum Subarray",
        link: "https://leetcode.com/problems/maximum-subarray/",
        difficulty: "Medium",
      },
      {
        name: "Maximum Product Subarray",
        link: "https://leetcode.com/problems/maximum-product-subarray/",
        difficulty: "Medium",
      },
      {
        name: "Find Minimum in Rotated Sorted Array",
        link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
        difficulty: "Medium",
      },
      {
        name: "Search in Rotated Sorted Array",
        link: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
        difficulty: "Medium",
      },
      {
        name: "3Sum",
        link: "https://leetcode.com/problems/3sum/",
        difficulty: "Medium",
      },
      {
        name: "Container With Most Water",
        link: "https://leetcode.com/problems/container-with-most-water/",
        difficulty: "Medium",
      },
      {
        name: "Rotate Array",
        link: "https://leetcode.com/problems/rotate-array/",
        difficulty: "Medium",
      },
      {
        name: "Jump Game",
        link: "https://leetcode.com/problems/jump-game/",
        difficulty: "Medium",
      },
      {
        name: "Merge Intervals",
        link: "https://leetcode.com/problems/merge-intervals/",
        difficulty: "Medium",
      },
      {
        name: "Trapping Rain Water",
        link: "https://leetcode.com/problems/trapping-rain-water/",
        difficulty: "Hard",
      },
      {
        name: "First Missing Positive",
        link: "https://leetcode.com/problems/first-missing-positive/",
        difficulty: "Hard",
      },
    ],
  },
  // Level 2: String
  {
    id: "string",
    title: "Level 2: String",
    description:
      "String problems test your ability to manipulate sequences of characters. They often overlap with arrays but have unique challenges like palindromes and anagrams.",
    problems: [
      {
        name: "Valid Anagram",
        link: "https://leetcode.com/problems/valid-anagram/",
        difficulty: "Easy",
      },
      {
        name: "Valid Palindrome",
        link: "https://leetcode.com/problems/valid-palindrome/",
        difficulty: "Easy",
      },
      {
        name: "Longest Common Prefix",
        link: "https://leetcode.com/problems/longest-common-prefix/",
        difficulty: "Easy",
      },
      {
        name: "Roman to Integer",
        link: "https://leetcode.com/problems/roman-to-integer/",
        difficulty: "Easy",
      },
      {
        name: "Implement strStr()",
        link: "https://leetcode.com/problems/implement-strstr/",
        difficulty: "Easy",
      },
      {
        name: "Add Binary",
        link: "https://leetcode.com/problems/add-binary/",
        difficulty: "Easy",
      },
      {
        name: "Reverse Words in a String",
        link: "https://leetcode.com/problems/reverse-words-in-a-string/",
        difficulty: "Medium",
      },
      {
        name: "Group Anagrams",
        link: "https://leetcode.com/problems/group-anagrams/",
        difficulty: "Medium",
      },
      {
        name: "Longest Substring Without Repeating Characters",
        link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
        difficulty: "Medium",
      },
      {
        name: "Longest Palindromic Substring",
        link: "https://leetcode.com/problems/longest-palindromic-substring/",
        difficulty: "Medium",
      },
      {
        name: "Palindromic Substrings",
        link: "https://leetcode.com/problems/palindromic-substrings/",
        difficulty: "Medium",
      },
      {
        name: "Encode and Decode Strings",
        link: "https://leetcode.com/problems/encode-and-decode-strings/",
        difficulty: "Medium",
      },
      {
        name: "Valid Parentheses",
        link: "https://leetcode.com/problems/valid-parentheses/",
        difficulty: "Easy",
      },
      {
        name: "Generate Parentheses",
        link: "https://leetcode.com/problems/generate-parentheses/",
        difficulty: "Medium",
      },
      {
        name: "Minimum Window Substring",
        link: "https://leetcode.com/problems/minimum-window-substring/",
        difficulty: "Hard",
      },
      {
        name: "Longest Repeating Character Replacement",
        link: "https://leetcode.com/problems/longest-repeating-character-replacement/",
        difficulty: "Medium",
      },
      {
        name: "Basic Calculator",
        link: "https://leetcode.com/problems/basic-calculator/",
        difficulty: "Hard",
      },
      {
        name: "Word Break",
        link: "https://leetcode.com/problems/word-break/",
        difficulty: "Medium",
      },
      {
        name: "Regular Expression Matching",
        link: "https://leetcode.com/problems/regular-expression-matching/",
        difficulty: "Hard",
      },
      {
        name: "Text Justification",
        link: "https://leetcode.com/problems/text-justification/",
        difficulty: "Hard",
      },
    ],
  },
  // Level 3: Matrix
  {
    id: "matrix",
    title: "Level 3: Matrix",
    description:
      "Matrices, or 2D arrays, are common in problems involving grids, mazes, and games. Key patterns include traversal, rotation, and dynamic programming.",
    problems: [
      {
        name: "Set Matrix Zeroes",
        link: "https://leetcode.com/problems/set-matrix-zeroes/",
        difficulty: "Medium",
      },
      {
        name: "Spiral Matrix",
        link: "https://leetcode.com/problems/spiral-matrix/",
        difficulty: "Medium",
      },
      {
        name: "Rotate Image",
        link: "https://leetcode.com/problems/rotate-image/",
        difficulty: "Medium",
      },
      {
        name: "Word Search",
        link: "https://leetcode.com/problems/word-search/",
        difficulty: "Medium",
      },
      {
        name: "Number of Islands",
        link: "https://leetcode.com/problems/number-of-islands/",
        difficulty: "Medium",
      },
      {
        name: "Pacific Atlantic Water Flow",
        link: "https://leetcode.com/problems/pacific-atlantic-water-flow/",
        difficulty: "Medium",
      },
      {
        name: "Unique Paths",
        link: "https://leetcode.com/problems/unique-paths/",
        difficulty: "Medium",
      },
      {
        name: "Minimum Path Sum",
        link: "https://leetcode.com/problems/minimum-path-sum/",
        difficulty: "Medium",
      },
      {
        name: "Rotting Oranges",
        link: "https://leetcode.com/problems/rotting-oranges/",
        difficulty: "Medium",
      },
      {
        name: "Search a 2D Matrix",
        link: "https://leetcode.com/problems/search-a-2d-matrix/",
        difficulty: "Medium",
      },
      {
        name: "Search a 2D Matrix II",
        link: "https://leetcode.com/problems/search-a-2d-matrix-ii/",
        difficulty: "Medium",
      },
      {
        name: "Maximal Square",
        link: "https://leetcode.com/problems/maximal-square/",
        difficulty: "Medium",
      },
      {
        name: "Game of Life",
        link: "https://leetcode.com/problems/game-of-life/",
        difficulty: "Medium",
      },
      {
        name: "Number of Closed Islands",
        link: "https://leetcode.com/problems/number-of-closed-islands/",
        difficulty: "Medium",
      },
      {
        name: "Count Submatrices With All Ones",
        link: "https://leetcode.com/problems/count-submatrices-with-all-ones/",
        difficulty: "Medium",
      },
      {
        name: "Longest Increasing Path in a Matrix",
        link: "https://leetcode.com/problems/longest-increasing-path-in-a-matrix/",
        difficulty: "Hard",
      },
      {
        name: "Word Search II",
        link: "https://leetcode.com/problems/word-search-ii/",
        difficulty: "Hard",
      },
      {
        name: "Maximal Rectangle",
        link: "https://leetcode.com/problems/maximal-rectangle/",
        difficulty: "Hard",
      },
      {
        name: "Sudoku Solver",
        link: "https://leetcode.com/problems/sudoku-solver/",
        difficulty: "Hard",
      },
      {
        name: "Valid Sudoku",
        link: "https://leetcode.com/problems/valid-sudoku/",
        difficulty: "Medium",
      },
    ],
  },
  // Level 4: Mathematical
  {
    id: "mathematical",
    title: "Level 4: Mathematical",
    description:
      "These problems test your knowledge of number theory, combinatorics, bit manipulation, and geometry. A strong mathematical foundation can often simplify complex-looking problems.",
    problems: [
      {
        name: "Palindrome Number",
        link: "https://leetcode.com/problems/palindrome-number/",
        difficulty: "Easy",
      },
      {
        name: "Roman to Integer",
        link: "https://leetcode.com/problems/roman-to-integer/",
        difficulty: "Easy",
      },
      {
        name: "Happy Number",
        link: "https://leetcode.com/problems/happy-number/",
        difficulty: "Easy",
      },
      {
        name: "Power of Two",
        link: "https://leetcode.com/problems/power-of-two/",
        difficulty: "Easy",
      },
      {
        name: "Add Binary",
        link: "https://leetcode.com/problems/add-binary/",
        difficulty: "Easy",
      },
      {
        name: "Excel Sheet Column Number",
        link: "https://leetcode.com/problems/excel-sheet-column-number/",
        difficulty: "Easy",
      },
      {
        name: "Factorial Trailing Zeroes",
        link: "https://leetcode.com/problems/factorial-trailing-zeroes/",
        difficulty: "Medium",
      },
      {
        name: "String to Integer (atoi)",
        link: "https://leetcode.com/problems/string-to-integer-atoi/",
        difficulty: "Medium",
      },
      {
        name: "Reverse Integer",
        link: "https://leetcode.com/problems/reverse-integer/",
        difficulty: "Medium",
      },
      {
        name: "Pow(x, n)",
        link: "https://leetcode.com/problems/powx-n/",
        difficulty: "Medium",
      },
      {
        name: "Multiply Strings",
        link: "https://leetcode.com/problems/multiply-strings/",
        difficulty: "Medium",
      },
      {
        name: "Angle Between Hands of a Clock",
        link: "https://leetcode.com/problems/angle-between-hands-of-a-clock/",
        difficulty: "Medium",
      },
      {
        name: "Integer to English Words",
        link: "https://leetcode.com/problems/integer-to-english-words/",
        difficulty: "Hard",
      },
      {
        name: "Number of 1 Bits",
        link: "https://leetcode.com/problems/number-of-1-bits/",
        difficulty: "Easy",
      },
      {
        name: "Counting Bits",
        link: "https://leetcode.com/problems/counting-bits/",
        difficulty: "Easy",
      },
      {
        name: "Single Number",
        link: "https://leetcode.com/problems/single-number/",
        difficulty: "Easy",
      },
      {
        name: "Missing Number",
        link: "https://leetcode.com/problems/missing-number/",
        difficulty: "Easy",
      },
      {
        name: "Reverse Bits",
        link: "https://leetcode.com/problems/reverse-bits/",
        difficulty: "Easy",
      },
      {
        name: "Max Points on a Line",
        link: "https://leetcode.com/problems/max-points-on-a-line/",
        difficulty: "Hard",
      },
      {
        name: "Robot Bounded In Circle",
        link: "https://leetcode.com/problems/robot-bounded-in-circle/",
        difficulty: "Medium",
      },
    ],
  },
  // Level 5: Sorting and Searching
  {
    id: "sorting-and-searching",
    title: "Level 5: Sorting and Searching",
    description:
      "Efficiently finding and arranging data is a core skill. This section focuses on binary search, custom sorting, and problems that become simple once the data is sorted.",
    problems: [
      {
        name: "Binary Search",
        link: "https://leetcode.com/problems/binary-search/",
        difficulty: "Easy",
      },
      {
        name: "First Bad Version",
        link: "https://leetcode.com/problems/first-bad-version/",
        difficulty: "Easy",
      },
      {
        name: "Search Insert Position",
        link: "https://leetcode.com/problems/search-insert-position/",
        difficulty: "Easy",
      },
      {
        name: "Merge Sorted Array",
        link: "https://leetcode.com/problems/merge-sorted-array/",
        difficulty: "Easy",
      },
      {
        name: "Sort Colors",
        link: "https://leetcode.com/problems/sort-colors/",
        difficulty: "Medium",
      },
      {
        name: "Top K Frequent Elements",
        link: "https://leetcode.com/problems/top-k-frequent-elements/",
        difficulty: "Medium",
      },
      {
        name: "Kth Largest Element in an Array",
        link: "https://leetcode.com/problems/kth-largest-element-in-an-array/",
        difficulty: "Medium",
      },
      {
        name: "Find Peak Element",
        link: "https://leetcode.com/problems/find-peak-element/",
        difficulty: "Medium",
      },
      {
        name: "Search in Rotated Sorted Array",
        link: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
        difficulty: "Medium",
      },
      {
        name: "Find Minimum in Rotated Sorted Array",
        link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
        difficulty: "Medium",
      },
      {
        name: "Search a 2D Matrix",
        link: "https://leetcode.com/problems/search-a-2d-matrix/",
        difficulty: "Medium",
      },
      {
        name: "Time Based Key-Value Store",
        link: "https://leetcode.com/problems/time-based-key-value-store/",
        difficulty: "Medium",
      },
      {
        name: "Koko Eating Bananas",
        link: "https://leetcode.com/problems/koko-eating-bananas/",
        difficulty: "Medium",
      },
      {
        name: "Largest Number",
        link: "https://leetcode.com/problems/largest-number/",
        difficulty: "Medium",
      },
      {
        name: "Meeting Rooms",
        link: "https://leetcode.com/problems/meeting-rooms/",
        difficulty: "Easy",
      },
      {
        name: "Meeting Rooms II",
        link: "https://leetcode.com/problems/meeting-rooms-ii/",
        difficulty: "Medium",
      },
      {
        name: "Wiggle Sort II",
        link: "https://leetcode.com/problems/wiggle-sort-ii/",
        difficulty: "Medium",
      },
      {
        name: "Find K Closest Elements",
        link: "https://leetcode.com/problems/find-k-closest-elements/",
        difficulty: "Medium",
      },
      {
        name: "Median of Two Sorted Arrays",
        link: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
        difficulty: "Hard",
      },
      {
        name: "Search in Rotated Sorted Array II",
        link: "https://leetcode.com/problems/search-in-rotated-sorted-array-ii/",
        difficulty: "Medium",
      },
    ],
  },
  // Level 6: Linked List
  {
    id: "linked-list",
    title: "Level 6: Linked List",
    description:
      "Linked Lists test your understanding of pointers and memory management. Key patterns include using a dummy head, fast/slow pointers, and in-place reversals.",
    problems: [
      {
        name: "Reverse Linked List",
        link: "https://leetcode.com/problems/reverse-linked-list/",
        difficulty: "Easy",
      },
      {
        name: "Merge Two Sorted Lists",
        link: "https://leetcode.com/problems/merge-two-sorted-lists/",
        difficulty: "Easy",
      },
      {
        name: "Linked List Cycle",
        link: "https://leetcode.com/problems/linked-list-cycle/",
        difficulty: "Easy",
      },
      {
        name: "Palindrome Linked List",
        link: "https://leetcode.com/problems/palindrome-linked-list/",
        difficulty: "Easy",
      },
      {
        name: "Remove Nth Node From End of List",
        link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
        difficulty: "Medium",
      },
      {
        name: "Reorder List",
        link: "https://leetcode.com/problems/reorder-list/",
        difficulty: "Medium",
      },
      {
        name: "Add Two Numbers",
        link: "https://leetcode.com/problems/add-two-numbers/",
        difficulty: "Medium",
      },
      {
        name: "Copy List with Random Pointer",
        link: "https://leetcode.com/problems/copy-list-with-random-pointer/",
        difficulty: "Medium",
      },
      {
        name: "Find the Duplicate Number",
        link: "https://leetcode.com/problems/find-the-duplicate-number/",
        difficulty: "Medium",
      },
      {
        name: "LRU Cache",
        link: "https://leetcode.com/problems/lru-cache/",
        difficulty: "Medium",
      },
      {
        name: "Swap Nodes in Pairs",
        link: "https://leetcode.com/problems/swap-nodes-in-pairs/",
        difficulty: "Medium",
      },
      {
        name: "Odd Even Linked List",
        link: "https://leetcode.com/problems/odd-even-linked-list/",
        difficulty: "Medium",
      },
      {
        name: "Intersection of Two Linked Lists",
        link: "https://leetcode.com/problems/intersection-of-two-linked-lists/",
        difficulty: "Easy",
      },
      {
        name: "Linked List Cycle II",
        link: "https://leetcode.com/problems/linked-list-cycle-ii/",
        difficulty: "Medium",
      },
      {
        name: "Rotate List",
        link: "https://leetcode.com/problems/rotate-list/",
        difficulty: "Medium",
      },
      {
        name: "Remove Duplicates from Sorted List II",
        link: "https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/",
        difficulty: "Medium",
      },
      {
        name: "Partition List",
        link: "https://leetcode.com/problems/partition-list/",
        difficulty: "Medium",
      },
      {
        name: "Sort List",
        link: "https://leetcode.com/problems/sort-list/",
        difficulty: "Medium",
      },
      {
        name: "Merge K Sorted Lists",
        link: "https://leetcode.com/problems/merge-k-sorted-lists/",
        difficulty: "Hard",
      },
      {
        name: "Reverse Nodes in k-Group",
        link: "https://leetcode.com/problems/reverse-nodes-in-k-group/",
        difficulty: "Hard",
      },
    ],
  },
  // Level 7: Stack and Queues
  {
    id: "stack-and-queues",
    title: "Level 7: Stack and Queues",
    description:
      "These LIFO/FIFO structures are essential for managing tasks and processing data. Monotonic stacks and using queues for level-order traversal are powerful patterns.",
    problems: [
      {
        name: "Valid Parentheses",
        link: "https://leetcode.com/problems/valid-parentheses/",
        difficulty: "Easy",
      },
      {
        name: "Implement Queue using Stacks",
        link: "https://leetcode.com/problems/implement-queue-using-stacks/",
        difficulty: "Easy",
      },
      {
        name: "Implement Stack using Queues",
        link: "https://leetcode.com/problems/implement-stack-using-queues/",
        difficulty: "Easy",
      },
      {
        name: "Min Stack",
        link: "https://leetcode.com/problems/min-stack/",
        difficulty: "Medium",
      },
      {
        name: "Evaluate Reverse Polish Notation",
        link: "https://leetcode.com/problems/evaluate-reverse-polish-notation/",
        difficulty: "Medium",
      },
      {
        name: "Daily Temperatures",
        link: "https://leetcode.com/problems/daily-temperatures/",
        difficulty: "Medium",
      },
      {
        name: "Generate Parentheses",
        link: "https://leetcode.com/problems/generate-parentheses/",
        difficulty: "Medium",
      },
      {
        name: "Car Fleet",
        link: "https://leetcode.com/problems/car-fleet/",
        difficulty: "Medium",
      },
      {
        name: "Next Greater Element I",
        link: "https://leetcode.com/problems/next-greater-element-i/",
        difficulty: "Easy",
      },
      {
        name: "Next Greater Element II",
        link: "https://leetcode.com/problems/next-greater-element-ii/",
        difficulty: "Medium",
      },
      {
        name: "Online Stock Span",
        link: "https://leetcode.com/problems/online-stock-span/",
        difficulty: "Medium",
      },
      {
        name: "Simplify Path",
        link: "https://leetcode.com/problems/simplify-path/",
        difficulty: "Medium",
      },
      {
        name: "Decode String",
        link: "https://leetcode.com/problems/decode-string/",
        difficulty: "Medium",
      },
      {
        name: "Asteroid Collision",
        link: "https://leetcode.com/problems/asteroid-collision/",
        difficulty: "Medium",
      },
      {
        name: "Validate Stack Sequences",
        link: "https://leetcode.com/problems/validate-stack-sequences/",
        difficulty: "Medium",
      },
      {
        name: "Design Circular Queue",
        link: "https://leetcode.com/problems/design-circular-queue/",
        difficulty: "Medium",
      },
      {
        name: "132 Pattern",
        link: "https://leetcode.com/problems/132-pattern/",
        difficulty: "Medium",
      },
      {
        name: "Remove K Digits",
        link: "https://leetcode.com/problems/remove-k-digits/",
        difficulty: "Medium",
      },
      {
        name: "Largest Rectangle in Histogram",
        link: "https://leetcode.com/problems/largest-rectangle-in-histogram/",
        difficulty: "Hard",
      },
      {
        name: "Trapping Rain Water",
        link: "https://leetcode.com/problems/trapping-rain-water/",
        difficulty: "Hard",
      },
    ],
  },
  // Level 8: Tree
  {
    id: "tree",
    title: "Level 8: Tree",
    description:
      "Trees are hierarchical data structures. Problems often involve recursion, traversals (BFS, DFS), and understanding properties of Binary Search Trees (BSTs).",
    problems: [
      {
        name: "Maximum Depth of Binary Tree",
        link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
        difficulty: "Easy",
      },
      {
        name: "Invert Binary Tree",
        link: "https://leetcode.com/problems/invert-binary-tree/",
        difficulty: "Easy",
      },
      {
        name: "Same Tree",
        link: "https://leetcode.com/problems/same-tree/",
        difficulty: "Easy",
      },
      {
        name: "Subtree of Another Tree",
        link: "https://leetcode.com/problems/subtree-of-another-tree/",
        difficulty: "Easy",
      },
      {
        name: "Balanced Binary Tree",
        link: "https://leetcode.com/problems/balanced-binary-tree/",
        difficulty: "Easy",
      },
      {
        name: "Diameter of Binary Tree",
        link: "https://leetcode.com/problems/diameter-of-binary-tree/",
        difficulty: "Easy",
      },
      {
        name: "Binary Tree Level Order Traversal",
        link: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
        difficulty: "Medium",
      },
      {
        name: "Lowest Common Ancestor of a Binary Search Tree",
        link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",
        difficulty: "Medium",
      },
      {
        name: "Lowest Common Ancestor of a Binary Tree",
        link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
        difficulty: "Medium",
      },
      {
        name: "Validate Binary Search Tree",
        link: "https://leetcode.com/problems/validate-binary-search-tree/",
        difficulty: "Medium",
      },
      {
        name: "Kth Smallest Element in a BST",
        link: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
        difficulty: "Medium",
      },
      {
        name: "Construct Binary Tree from Preorder and Inorder Traversal",
        link: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
        difficulty: "Medium",
      },
      {
        name: "Binary Tree Right Side View",
        link: "https://leetcode.com/problems/binary-tree-right-side-view/",
        difficulty: "Medium",
      },
      {
        name: "Count Good Nodes in Binary Tree",
        link: "https://leetcode.com/problems/count-good-nodes-in-binary-tree/",
        difficulty: "Medium",
      },
      {
        name: "Path Sum",
        link: "https://leetcode.com/problems/path-sum/",
        difficulty: "Easy",
      },
      {
        name: "Path Sum II",
        link: "https://leetcode.com/problems/path-sum-ii/",
        difficulty: "Medium",
      },
      {
        name: "Sum Root to Leaf Numbers",
        link: "https://leetcode.com/problems/sum-root-to-leaf-numbers/",
        difficulty: "Medium",
      },
      {
        name: "Binary Tree Maximum Path Sum",
        link: "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
        difficulty: "Hard",
      },
      {
        name: "Serialize and Deserialize Binary Tree",
        link: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
        difficulty: "Hard",
      },
      {
        name: "Validate Binary Tree Nodes",
        link: "https://leetcode.com/problems/validate-binary-tree-nodes/",
        difficulty: "Medium",
      },
    ],
  },
  // Level 9: Graph
  {
    id: "graph",
    title: "Level 9: Graph",
    description:
      "Graphs model networks and relationships. Core skills include traversals (BFS, DFS), detecting cycles, understanding connectivity, and shortest path algorithms.",
    problems: [
      {
        name: "Number of Islands",
        link: "https://leetcode.com/problems/number-of-islands/",
        difficulty: "Medium",
      },
      {
        name: "Clone Graph",
        link: "https://leetcode.com/problems/clone-graph/",
        difficulty: "Medium",
      },
      {
        name: "Max Area of Island",
        link: "https://leetcode.com/problems/max-area-of-island/",
        difficulty: "Medium",
      },
      {
        name: "Pacific Atlantic Water Flow",
        link: "https://leetcode.com/problems/pacific-atlantic-water-flow/",
        difficulty: "Medium",
      },
      {
        name: "Rotting Oranges",
        link: "https://leetcode.com/problems/rotting-oranges/",
        difficulty: "Medium",
      },
      {
        name: "Walls and Gates",
        link: "https://leetcode.com/problems/walls-and-gates/",
        difficulty: "Medium",
      },
      {
        name: "Course Schedule",
        link: "https://leetcode.com/problems/course-schedule/",
        difficulty: "Medium",
      },
      {
        name: "Course Schedule II",
        link: "https://leetcode.com/problems/course-schedule-ii/",
        difficulty: "Medium",
      },
      {
        name: "Graph Valid Tree",
        link: "https://leetcode.com/problems/graph-valid-tree/",
        difficulty: "Medium",
      },
      {
        name: "Number of Connected Components in an Undirected Graph",
        link: "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/",
        difficulty: "Medium",
      },
      {
        name: "Redundant Connection",
        link: "https://leetcode.com/problems/redundant-connection/",
        difficulty: "Medium",
      },
      {
        name: "Surrounded Regions",
        link: "https://leetcode.com/problems/surrounded-regions/",
        difficulty: "Medium",
      },
      {
        name: "Accounts Merge",
        link: "https://leetcode.com/problems/accounts-merge/",
        difficulty: "Medium",
      },
      {
        name: "Word Ladder",
        link: "https://leetcode.com/problems/word-ladder/",
        difficulty: "Hard",
      },
      {
        name: "Cheapest Flights Within K Stops",
        link: "https://leetcode.com/problems/cheapest-flights-within-k-stops/",
        difficulty: "Medium",
      },
      {
        name: "Network Delay Time",
        link: "https://leetcode.com/problems/network-delay-time/",
        difficulty: "Medium",
      },
      {
        name: "Path with Minimum Effort",
        link: "https://leetcode.com/problems/path-with-minimum-effort/",
        difficulty: "Medium",
      },
      {
        name: "Number of Provinces",
        link: "https://leetcode.com/problems/number-of-provinces/",
        difficulty: "Medium",
      },
      {
        name: "Is Graph Bipartite?",
        link: "https://leetcode.com/problems/is-graph-bipartite/",
        difficulty: "Medium",
      },
      {
        name: "Reconstruct Itinerary",
        link: "https://leetcode.com/problems/reconstruct-itinerary/",
        difficulty: "Hard",
      },
    ],
  },
  // Level 10: Trie
  {
    id: "trie",
    title: "Level 10: Trie",
    description:
      "A Trie, or prefix tree, is a specialized tree structure for efficiently storing and searching strings. It's essential for autocomplete and spell-checker features.",
    problems: [
      {
        name: "Implement Trie (Prefix Tree)",
        link: "https://leetcode.com/problems/implement-trie-prefix-tree/",
        difficulty: "Medium",
      },
      {
        name: "Design Add and Search Words Data Structure",
        link: "https://leetcode.com/problems/design-add-and-search-words-data-structure/",
        difficulty: "Medium",
      },
      {
        name: "Word Search II",
        link: "https://leetcode.com/problems/word-search-ii/",
        difficulty: "Hard",
      },
      {
        name: "Maximum XOR of Two Numbers in an Array",
        link: "https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/",
        difficulty: "Medium",
      },
      {
        name: "Word Squares",
        link: "https://leetcode.com/problems/word-squares/",
        difficulty: "Hard",
      },
      {
        name: "Concatenated Words",
        link: "https://leetcode.com/problems/concatenated-words/",
        difficulty: "Hard",
      },
      {
        name: "Replace Words",
        link: "https://leetcode.com/problems/replace-words/",
        difficulty: "Medium",
      },
      {
        name: "Palindrome Pairs",
        link: "https://leetcode.com/problems/palindrome-pairs/",
        difficulty: "Hard",
      },
      {
        name: "Search Suggestions System",
        link: "https://leetcode.com/problems/search-suggestions-system/",
        difficulty: "Medium",
      },
      {
        name: "Shortest Encoding of Words",
        link: "https://leetcode.com/problems/shortest-encoding-of-words/",
        difficulty: "Medium",
      },
      {
        name: "Word Break II",
        link: "https://leetcode.com/problems/word-break-ii/",
        difficulty: "Hard",
      },
      {
        name: "Design In-Memory File System",
        link: "https://leetcode.com/problems/design-in-memory-file-system/",
        difficulty: "Hard",
      },
      {
        name: "Top K Frequent Words",
        link: "https://leetcode.com/problems/top-k-frequent-words/",
        difficulty: "Medium",
      },
      {
        name: "Longest Word in Dictionary",
        link: "https://leetcode.com/problems/longest-word-in-dictionary/",
        difficulty: "Medium",
      },
      {
        name: "Camelcase Matching",
        link: "https://leetcode.com/problems/camelcase-matching/",
        difficulty: "Medium",
      },
      {
        name: "Maximum Genetic Difference Query",
        link: "https://leetcode.com/problems/maximum-genetic-difference-query/",
        difficulty: "Hard",
      },
      {
        name: "Count Pairs With XOR in a Range",
        link: "https://leetcode.com/problems/count-pairs-with-xor-in-a-range/",
        difficulty: "Hard",
      },
      {
        name: "Stream of Characters",
        link: "https://leetcode.com/problems/stream-of-characters/",
        difficulty: "Hard",
      },
      {
        name: "Implement Magic Dictionary",
        link: "https://leetcode.com/problems/implement-magic-dictionary/",
        difficulty: "Medium",
      },
      {
        name: "Number of Matching Subsequences",
        link: "https://leetcode.com/problems/number-of-matching-subsequences/",
        difficulty: "Medium",
      },
    ],
  },
  // Level 11: Heap (Priority Queue)
  {
    id: "heap",
    title: "Level 11: Heap (Priority Queue)",
    description:
      "Heaps excel at finding the min/max element in a changing collection. They are essential for 'Top K' problems, scheduling, and finding medians in a stream of data.",
    problems: [
      {
        name: "Kth Largest Element in a Stream",
        link: "https://leetcode.com/problems/kth-largest-element-in-a-stream/",
        difficulty: "Easy",
      },
      {
        name: "Last Stone Weight",
        link: "https://leetcode.com/problems/last-stone-weight/",
        difficulty: "Easy",
      },
      {
        name: "K Closest Points to Origin",
        link: "https://leetcode.com/problems/k-closest-points-to-origin/",
        difficulty: "Medium",
      },
      {
        name: "Kth Largest Element in an Array",
        link: "https://leetcode.com/problems/kth-largest-element-in-an-array/",
        difficulty: "Medium",
      },
      {
        name: "Top K Frequent Elements",
        link: "https://leetcode.com/problems/top-k-frequent-elements/",
        difficulty: "Medium",
      },
      {
        name: "Find Median from Data Stream",
        link: "https://leetcode.com/problems/find-median-from-data-stream/",
        difficulty: "Hard",
      },
      {
        name: "Merge K Sorted Lists",
        link: "https://leetcode.com/problems/merge-k-sorted-lists/",
        difficulty: "Hard",
      },
      {
        name: "Task Scheduler",
        link: "https://leetcode.com/problems/task-scheduler/",
        difficulty: "Medium",
      },
      {
        name: "Design Twitter",
        link: "https://leetcode.com/problems/design-twitter/",
        difficulty: "Medium",
      },
      {
        name: "Reorganize String",
        link: "https://leetcode.com/problems/reorganize-string/",
        difficulty: "Medium",
      },
      {
        name: "Meeting Rooms II",
        link: "https://leetcode.com/problems/meeting-rooms-ii/",
        difficulty: "Medium",
      },
      {
        name: "Find K Pairs with Smallest Sums",
        link: "https://leetcode.com/problems/find-k-pairs-with-smallest-sums/",
        difficulty: "Medium",
      },
      {
        name: "Single-Threaded CPU",
        link: "https://leetcode.com/problems/single-threaded-cpu/",
        difficulty: "Medium",
      },
      {
        name: "Process Tasks Using Servers",
        link: "https://leetcode.com/problems/process-tasks-using-servers/",
        difficulty: "Medium",
      },
      {
        name: "IPO",
        link: "https://leetcode.com/problems/ipo/",
        difficulty: "Hard",
      },
      {
        name: "Sliding Window Median",
        link: "https://leetcode.com/problems/sliding-window-median/",
        difficulty: "Hard",
      },
      {
        name: "Cheapest Flights Within K Stops",
        link: "https://leetcode.com/problems/cheapest-flights-within-k-stops/",
        difficulty: "Medium",
      },
      {
        name: "Network Delay Time",
        link: "https://leetcode.com/problems/network-delay-time/",
        difficulty: "Medium",
      },
      {
        name: "Swim in Rising Water",
        link: "https://leetcode.com/problems/swim-in-rising-water/",
        difficulty: "Hard",
      },
      {
        name: "Minimum Cost to Connect Sticks",
        link: "https://leetcode.com/problems/minimum-cost-to-connect-sticks/",
        difficulty: "Medium",
      },
    ],
  },
  // Level 12: Dynamic Programming
  {
    id: "dynamic-programming",
    title: "Level 12: Dynamic Programming",
    description:
      "DP solves complex problems by breaking them into simpler, overlapping subproblems. Mastering memoization and tabulation is key to tackling this essential topic.",
    problems: [
      {
        name: "Climbing Stairs",
        link: "https://leetcode.com/problems/climbing-stairs/",
        difficulty: "Easy",
      },
      {
        name: "Min Cost Climbing Stairs",
        link: "https://leetcode.com/problems/min-cost-climbing-stairs/",
        difficulty: "Easy",
      },
      {
        name: "House Robber",
        link: "https://leetcode.com/problems/house-robber/",
        difficulty: "Medium",
      },
      {
        name: "House Robber II",
        link: "https://leetcode.com/problems/house-robber-ii/",
        difficulty: "Medium",
      },
      {
        name: "Longest Palindromic Substring",
        link: "https://leetcode.com/problems/longest-palindromic-substring/",
        difficulty: "Medium",
      },
      {
        name: "Palindromic Substrings",
        link: "https://leetcode.com/problems/palindromic-substrings/",
        difficulty: "Medium",
      },
      {
        name: "Decode Ways",
        link: "https://leetcode.com/problems/decode-ways/",
        difficulty: "Medium",
      },
      {
        name: "Coin Change",
        link: "https://leetcode.com/problems/coin-change/",
        difficulty: "Medium",
      },
      {
        name: "Maximum Product Subarray",
        link: "https://leetcode.com/problems/maximum-product-subarray/",
        difficulty: "Medium",
      },
      {
        name: "Word Break",
        link: "https://leetcode.com/problems/word-break/",
        difficulty: "Medium",
      },
      {
        name: "Longest Increasing Subsequence",
        link: "https://leetcode.com/problems/longest-increasing-subsequence/",
        difficulty: "Medium",
      },
      {
        name: "Partition Equal Subset Sum",
        link: "https://leetcode.com/problems/partition-equal-subset-sum/",
        difficulty: "Medium",
      },
      {
        name: "Unique Paths",
        link: "https://leetcode.com/problems/unique-paths/",
        difficulty: "Medium",
      },
      {
        name: "Longest Common Subsequence",
        link: "https://leetcode.com/problems/longest-common-subsequence/",
        difficulty: "Medium",
      },
      {
        name: "Best Time to Buy and Sell Stock with Cooldown",
        link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/",
        difficulty: "Medium",
      },
      {
        name: "Combination Sum IV",
        link: "https://leetcode.com/problems/combination-sum-iv/",
        difficulty: "Medium",
      },
      {
        name: "Edit Distance",
        link: "https://leetcode.com/problems/edit-distance/",
        difficulty: "Medium",
      },
      {
        name: "Burst Balloons",
        link: "https://leetcode.com/problems/burst-balloons/",
        difficulty: "Hard",
      },
      {
        name: "Distinct Subsequences",
        link: "https://leetcode.com/problems/distinct-subsequences/",
        difficulty: "Hard",
      },
      {
        name: "Regular Expression Matching",
        link: "https://leetcode.com/problems/regular-expression-matching/",
        difficulty: "Hard",
      },
    ],
  },
  // Level 13: Two Pointers and Sliding Window
  {
    id: "two-pointers-and-sliding-window",
    title: "Level 13: Two Pointers and Sliding Window",
    description:
      "These techniques are essential for optimizing array and string problems, often reducing a brute-force O(n²) solution to an efficient linear O(n) one.",
    problems: [
      {
        name: "Valid Palindrome",
        link: "https://leetcode.com/problems/valid-palindrome/",
        difficulty: "Easy",
      },
      {
        name: "Two Sum II - Input Array Is Sorted",
        link: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",
        difficulty: "Medium",
      },
      {
        name: "3Sum",
        link: "https://leetcode.com/problems/3sum/",
        difficulty: "Medium",
      },
      {
        name: "Container With Most Water",
        link: "https://leetcode.com/problems/container-with-most-water/",
        difficulty: "Medium",
      },
      {
        name: "Remove Nth Node From End of List",
        link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
        difficulty: "Medium",
      },
      {
        name: "Backspace String Compare",
        link: "https://leetcode.com/problems/backspace-string-compare/",
        difficulty: "Easy",
      },
      {
        name: "Sort Colors",
        link: "https://leetcode.com/problems/sort-colors/",
        difficulty: "Medium",
      },
      {
        name: "Longest Substring Without Repeating Characters",
        link: "https://leetcode.com/problems/long-substring-without-repeating-characters/",
        difficulty: "Medium",
      },
      {
        name: "Longest Repeating Character Replacement",
        link: "https://leetcode.com/problems/longest-repeating-character-replacement/",
        difficulty: "Medium",
      },
      {
        name: "Permutation in String",
        link: "https://leetcode.com/problems/permutation-in-string/",
        difficulty: "Medium",
      },
      {
        name: "Minimum Window Substring",
        link: "https://leetcode.com/problems/minimum-window-substring/",
        difficulty: "Hard",
      },
      {
        name: "Best Time to Buy and Sell Stock",
        link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
        difficulty: "Easy",
      },
      {
        name: "Subarray Product Less Than K",
        link: "https://leetcode.com/problems/subarray-product-less-than-k/",
        difficulty: "Medium",
      },
      {
        name: "Number of Substrings Containing All Three Characters",
        link: "https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/",
        difficulty: "Medium",
      },
      {
        name: "Minimum Size Subarray Sum",
        link: "https://leetcode.com/problems/minimum-size-subarray-sum/",
        difficulty: "Medium",
      },
      {
        name: "Find All Anagrams in a String",
        link: "https://leetcode.com/problems/find-all-anagrams-in-a-string/",
        difficulty: "Medium",
      },
      {
        name: "Trapping Rain Water",
        link: "https://leetcode.com/problems/trapping-rain-water/",
        difficulty: "Hard",
      },
      {
        name: "4Sum",
        link: "https://leetcode.com/problems/4sum/",
        difficulty: "Hard",
      },
      {
        name: "Sliding Window Maximum",
        link: "https://leetcode.com/problems/sliding-window-maximum/",
        difficulty: "Hard",
      },
      {
        name: "Shortest Unsorted Continuous Subarray",
        link: "https://leetcode.com/problems/shortest-unsorted-continuous-subarray/",
        difficulty: "Medium",
      },
    ],
  },
  // Level 14: Greedy
  {
    id: "greedy",
    title: "Level 14: Greedy",
    description:
      "Greedy algorithms build a solution by always making the locally optimal choice at each step, hoping to find a global optimum. They are often intuitive but hard to prove correct.",
    problems: [
      {
        name: "Best Time to Buy and Sell Stock",
        link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
        difficulty: "Easy",
      },
      {
        name: "Best Time to Buy and Sell Stock II",
        link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/",
        difficulty: "Medium",
      },
      {
        name: "Maximum Subarray",
        link: "https://leetcode.com/problems/maximum-subarray/",
        difficulty: "Medium",
      },
      {
        name: "Jump Game",
        link: "https://leetcode.com/problems/jump-game/",
        difficulty: "Medium",
      },
      {
        name: "Jump Game II",
        link: "https://leetcode.com/problems/jump-game-ii/",
        difficulty: "Medium",
      },
      {
        name: "Gas Station",
        link: "https://leetcode.com/problems/gas-station/",
        difficulty: "Medium",
      },
      {
        name: "Merge Intervals",
        link: "https://leetcode.com/problems/merge-intervals/",
        difficulty: "Medium",
      },
      {
        name: "Non-overlapping Intervals",
        link: "https://leetcode.com/problems/non-overlapping-intervals/",
        difficulty: "Medium",
      },
      {
        name: "Insert Interval",
        link: "https://leetcode.com/problems/insert-interval/",
        difficulty: "Medium",
      },
      {
        name: "Partition Labels",
        link: "https://leetcode.com/problems/partition-labels/",
        difficulty: "Medium",
      },
      {
        name: "Valid Parenthesis String",
        link: "https://leetcode.com/problems/valid-parenthesis-string/",
        difficulty: "Medium",
      },
      {
        name: "Hand of Straights",
        link: "https://leetcode.com/problems/hand-of-straights/",
        difficulty: "Medium",
      },
      {
        name: "Reorganize String",
        link: "https://leetcode.com/problems/reorganize-string/",
        difficulty: "Medium",
      },
      {
        name: "Task Scheduler",
        link: "https://leetcode.com/problems/task-scheduler/",
        difficulty: "Medium",
      },
      {
        name: "Minimum Platforms",
        link: "https://www.geeksforgeeks.org/problems/minimum-platforms-1587115620/1",
        difficulty: "Medium",
      },
      {
        name: "N meetings in one room",
        link: "https://www.geeksforgeeks.org/problems/n-meetings-in-one-room-1587115620/1",
        difficulty: "Easy",
      },
      {
        name: "Candy",
        link: "https://leetcode.com/problems/candy/",
        difficulty: "Hard",
      },
      {
        name: "Patching Array",
        link: "https://leetcode.com/problems/patching-array/",
        difficulty: "Hard",
      },
      {
        name: "Queue Reconstruction by Height",
        link: "https://leetcode.com/problems/queue-reconstruction-by-height/",
        difficulty: "Medium",
      },
      {
        name: "Minimum Deletions to Make Character Frequencies Unique",
        link: "https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/",
        difficulty: "Medium",
      },
    ],
  },
  // Level 15: Backtracking
  {
    id: "backtracking",
    title: "Level 15: Backtracking",
    description:
      "Backtracking explores all potential solutions to a problem and prunes paths that won't work. It's the core technique for solving permutation, combination, and subset problems.",
    problems: [
      {
        name: "Subsets",
        link: "https://leetcode.com/problems/subsets/",
        difficulty: "Medium",
      },
      {
        name: "Subsets II",
        link: "https://leetcode.com/problems/subsets-ii/",
        difficulty: "Medium",
      },
      {
        name: "Combination Sum",
        link: "https://leetcode.com/problems/combination-sum/",
        difficulty: "Medium",
      },
      {
        name: "Combination Sum II",
        link: "https://leetcode.com/problems/combination-sum-ii/",
        difficulty: "Medium",
      },
      {
        name: "Permutations",
        link: "https://leetcode.com/problems/permutations/",
        difficulty: "Medium",
      },
      {
        name: "Permutations II",
        link: "https://leetcode.com/problems/permutations-ii/",
        difficulty: "Medium",
      },
      {
        name: "Letter Combinations of a Phone Number",
        link: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/",
        difficulty: "Medium",
      },
      {
        name: "Generate Parentheses",
        link: "https://leetcode.com/problems/generate-parentheses/",
        difficulty: "Medium",
      },
      {
        name: "Word Search",
        link: "https://leetcode.com/problems/word-search/",
        difficulty: "Medium",
      },
      {
        name: "N-Queens",
        link: "https://leetcode.com/problems/n-queens/",
        difficulty: "Hard",
      },
      {
        name: "Sudoku Solver",
        link: "https://leetcode.com/problems/sudoku-solver/",
        difficulty: "Hard",
      },
      {
        name: "Palindrome Partitioning",
        link: "https://leetcode.com/problems/palindrome-partitioning/",
        difficulty: "Medium",
      },
      {
        name: "Restore IP Addresses",
        link: "https://leetcode.com/problems/restore-ip-addresses/",
        difficulty: "Medium",
      },
      {
        name: "Beautiful Arrangement",
        link: "https://leetcode.com/problems/beautiful-arrangement/",
        difficulty: "Medium",
      },
      {
        name: "Word Break II",
        link: "https://leetcode.com/problems/word-break-ii/",
        difficulty: "Hard",
      },
      {
        name: "Combinations",
        link: "https://leetcode.com/problems/combinations/",
        difficulty: "Medium",
      },
      {
        name: "Target Sum",
        link: "https://leetcode.com/problems/target-sum/",
        difficulty: "Medium",
      },
      {
        name: "Matchsticks to Square",
        link: "https://leetcode.com/problems/matchsticks-to-square/",
        difficulty: "Medium",
      },
      {
        name: "Word Search II",
        link: "https://leetcode.com/problems/word-search-ii/",
        difficulty: "Hard",
      },
      {
        name: "Expression Add Operators",
        link: "https://leetcode.com/problems/expression-add-operators/",
        difficulty: "Hard",
      },
    ],
  },
  // Level 16: Segment Tree
  {
    id: "segment-tree",
    title: "Level 16: Segment Tree",
    description:
      "Segment Trees are an advanced data structure for handling range queries (like sum, min, max) and range updates efficiently, typically in O(log n) time.",
    problems: [
      {
        name: "Range Sum Query - Mutable",
        link: "https://leetcode.com/problems/range-sum-query-mutable/",
        difficulty: "Medium",
      },
      {
        name: "Range Sum Query 2D - Immutable",
        link: "https://leetcode.com/problems/range-sum-query-2d-immutable/",
        difficulty: "Medium",
      },
      {
        name: "Count of Smaller Numbers After Self",
        link: "https://leetcode.com/problems/count-of-smaller-numbers-after-self/",
        difficulty: "Hard",
      },
      {
        name: "My Calendar I",
        link: "https://leetcode.com/problems/my-calendar-i/",
        difficulty: "Medium",
      },
      {
        name: "My Calendar II",
        link: "https://leetcode.com/problems/my-calendar-ii/",
        difficulty: "Medium",
      },
      {
        name: "My Calendar III",
        link: "https://leetcode.com/problems/my-calendar-iii/",
        difficulty: "Hard",
      },
      {
        name: "Falling Squares",
        link: "https://leetcode.com/problems/falling-squares/",
        difficulty: "Hard",
      },
      {
        name: "Range Module",
        link: "https://leetcode.com/problems/range-module/",
        difficulty: "Hard",
      },
      {
        name: "Amount of New Area Painted Each Day",
        link: "https://leetcode.com/problems/amount-of-new-area-painted-each-day/",
        difficulty: "Hard",
      },
      {
        name: "Create Sorted Array through Instructions",
        link: "https://leetcode.com/problems/create-sorted-array-through-instructions/",
        difficulty: "Hard",
      },
      {
        name: "Number of Flowers in Full Bloom",
        link: "https://leetcode.com/problems/number-of-flowers-in-full-bloom/",
        difficulty: "Medium",
      },
      {
        name: "Length of the Longest Valid Substring",
        link: "https://leetcode.com/problems/length-of-the-longest-valid-substring/",
        difficulty: "Hard",
      },
      {
        name: "Count the Number of Incremovable Subarrays I",
        link: "https://leetcode.com/problems/count-the-number-of-incremovable-subarrays-i/",
        difficulty: "Easy",
      }, // Can be solved without ST
      {
        name: "Minimum Time to Finish the Race",
        link: "https://leetcode.com/problems/minimum-time-to-finish-the-race/",
        difficulty: "Hard",
      }, // DP problem, but related
      {
        name: "Number of Ways to Arrive at Destination",
        link: "https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/",
        difficulty: "Medium",
      }, // Graph problem
      {
        name: "Minimum Number of K Consecutive Bit Flips",
        link: "https://leetcode.com/problems/minimum-number-of-k-consecutive-bit-flips/",
        difficulty: "Hard",
      },
      {
        name: "The Skyline Problem",
        link: "https://leetcode.com/problems/the-skyline-problem/",
        difficulty: "Hard",
      },
      {
        name: "Count of Range Sum",
        link: "https://leetcode.com/problems/count-of-range-sum/",
        difficulty: "Hard",
      },
      {
        name: "Reverse Pairs",
        link: "https://leetcode.com/problems/reverse-pairs/",
        difficulty: "Hard",
      },
      {
        name: "Maximum Sum Queries",
        link: "https://leetcode.com/problems/maximum-sum-queries/",
        difficulty: "Hard",
      },
    ],
  },
  // Final Level
  {
    id: "final-review",
    title: "Final Review: 50 Curated Problems",
    description:
      "This is the final challenge. This list of 50 problems covers all the topics you've learned. They are different from the ones in previous levels and are designed to test your integrated problem-solving skills.",
    problems: [
      {
        name: "Median of Two Sorted Arrays",
        link: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
        difficulty: "Hard",
      },
      {
        name: "Integer to Roman",
        link: "https://leetcode.com/problems/integer-to-roman/",
        difficulty: "Medium",
      },
      {
        name: "Generate Parentheses",
        link: "https://leetcode.com/problems/generate-parentheses/",
        difficulty: "Medium",
      },
      {
        name: "Next Permutation",
        link: "https://leetcode.com/problems/next-permutation/",
        difficulty: "Medium",
      },
      {
        name: "Longest Valid Parentheses",
        link: "https://leetcode.com/problems/longest-valid-parentheses/",
        difficulty: "Hard",
      },
      {
        name: "Search in Rotated Sorted Array II",
        link: "https://leetcode.com/problems/search-in-rotated-sorted-array-ii/",
        difficulty: "Medium",
      },
      {
        name: "Permutations",
        link: "https://leetcode.com/problems/permutations/",
        difficulty: "Medium",
      },
      {
        name: "Permutations II",
        link: "https://leetcode.com/problems/permutations-ii/",
        difficulty: "Medium",
      },
      {
        name: "Anagrams in a String",
        link: "https://leetcode.com/problems/find-all-anagrams-in-a-string/",
        difficulty: "Medium",
      },
      {
        name: "Multiply Strings",
        link: "https://leetcode.com/problems/multiply-strings/",
        difficulty: "Medium",
      },
      {
        name: "Jump Game II",
        link: "https://leetcode.com/problems/jump-game-ii/",
        difficulty: "Medium",
      },
      {
        name: "Simplify Path",
        link: "https://leetcode.com/problems/simplify-path/",
        difficulty: "Medium",
      },
      {
        name: "Edit Distance",
        link: "https://leetcode.com/problems/edit-distance/",
        difficulty: "Medium",
      },
      {
        name: "Sort Colors",
        link: "https://leetcode.com/problems/sort-colors/",
        difficulty: "Medium",
      },
      {
        name: "Gas Station",
        link: "https://leetcode.com/problems/gas-station/",
        difficulty: "Medium",
      },
      {
        name: "Candy",
        link: "https://leetcode.com/problems/candy/",
        difficulty: "Hard",
      },
      {
        name: "Single Number II",
        link: "https://leetcode.com/problems/single-number-ii/",
        difficulty: "Medium",
      },
      {
        name: "LRU Cache",
        link: "https://leetcode.com/problems/lru-cache/",
        difficulty: "Medium",
      },
      {
        name: "Largest Number",
        link: "https://leetcode.com/problems/largest-number/",
        difficulty: "Medium",
      },
      {
        name: "House Robber II",
        link: "https://leetcode.com/problems/house-robber-ii/",
        difficulty: "Medium",
      },
      {
        name: "Number of 1 Bits",
        link: "https://leetcode.com/problems/number-of-1-bits/",
        difficulty: "Easy",
      },
      {
        name: "Reverse Bits",
        link: "https://leetcode.com/problems/reverse-bits/",
        difficulty: "Easy",
      },
      {
        name: "Happy Number",
        link: "https://leetcode.com/problems/happy-number/",
        difficulty: "Easy",
      },
      {
        name: "Contains Duplicate II",
        link: "https://leetcode.com/problems/contains-duplicate-ii/",
        difficulty: "Easy",
      },
      {
        name: "Implement Stack using Queues",
        link: "https://leetcode.com/problems/implement-stack-using-queues/",
        difficulty: "Easy",
      },
      {
        name: "Power of Two",
        link: "https://leetcode.com/problems/power-of-two/",
        difficulty: "Easy",
      },
      {
        name: "Palindrome Linked List",
        link: "https://leetcode.com/problems/palindrome-linked-list/",
        difficulty: "Easy",
      },
      {
        name: "Lowest Common Ancestor of a Binary Tree",
        link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
        difficulty: "Medium",
      },
      {
        name: "Product of Array Except Self",
        link: "https://leetcode.com/problems/product-of-array-except-self/",
        difficulty: "Medium",
      },
      {
        name: "Valid Anagram",
        link: "https://leetcode.com/problems/valid-anagram/",
        difficulty: "Easy",
      },
      {
        name: "Binary Tree Paths",
        link: "https://leetcode.com/problems/binary-tree-paths/",
        difficulty: "Easy",
      },
      {
        name: "Missing Number",
        link: "https://leetcode.com/problems/missing-number/",
        difficulty: "Easy",
      },
      {
        name: "Move Zeroes",
        link: "https://leetcode.com/problems/move-zeroes/",
        difficulty: "Easy",
      },
      {
        name: "Find the Duplicate Number",
        link: "https://leetcode.com/problems/find-the-duplicate-number/",
        difficulty: "Medium",
      },
      {
        name: "Coin Change",
        link: "https://leetcode.com/problems/coin-change/",
        difficulty: "Medium",
      },
      {
        name: "Counting Bits",
        link: "https://leetcode.com/problems/counting-bits/",
        difficulty: "Easy",
      },
      {
        name: "Top K Frequent Elements",
        link: "https://leetcode.com/problems/top-k-frequent-elements/",
        difficulty: "Medium",
      },
      {
        name: "Partition Equal Subset Sum",
        link: "https://leetcode.com/problems/partition-equal-subset-sum/",
        difficulty: "Medium",
      },
      {
        name: "Path Sum III",
        link: "https://leetcode.com/problems/path-sum-iii/",
        difficulty: "Medium",
      },
      {
        name: "Find All Duplicates in an Array",
        link: "https://leetcode.com/problems/find-all-duplicates-in-an-array/",
        difficulty: "Medium",
      },
      {
        name: "Subarray Sum Equals K",
        link: "https://leetcode.com/problems/subarray-sum-equals-k/",
        difficulty: "Medium",
      },
      {
        name: "Daily Temperatures",
        link: "https://leetcode.com/problems/daily-temperatures/",
        difficulty: "Medium",
      },
      {
        name: "Merge K Sorted Lists",
        link: "https://leetcode.com/problems/merge-k-sorted-lists/",
        difficulty: "Hard",
      },
      {
        name: "Largest Rectangle in Histogram",
        link: "https://leetcode.com/problems/largest-rectangle-in-histogram/",
        difficulty: "Hard",
      },
      {
        name: "Maximal Rectangle",
        link: "https://leetcode.com/problems/maximal-rectangle/",
        difficulty: "Hard",
      },
      {
        name: "Word Ladder",
        link: "https://leetcode.com/problems/word-ladder/",
        difficulty: "Hard",
      },
      {
        name: "Find Median from Data Stream",
        link: "https://leetcode.com/problems/find-median-from-data-stream/",
        difficulty: "Hard",
      },
      {
        name: "Sliding Window Maximum",
        link: "https://leetcode.com/problems/sliding-window-maximum/",
        difficulty: "Hard",
      },
      {
        name: "Burst Balloons",
        link: "https://leetcode.com/problems/burst-balloons/",
        difficulty: "Hard",
      },
      {
        name: "LFU Cache",
        link: "https://leetcode.com/problems/lfu-cache/",
        difficulty: "Hard",
      },
    ],
  },
];
