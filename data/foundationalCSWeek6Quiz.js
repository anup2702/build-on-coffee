/* jshint esversion: 6 */

/**
 * Foundational CS Week 6 Quiz - Databases & SQL
 * Topics: Database Fundamentals, SQL Queries, Joins, Database Design
 */

export const foundationalCSWeek6Quiz = {
  id: "foundational-cs-week6",
  title: "Foundational CS Week 6: Databases & SQL",
  description: "Test your knowledge of database concepts, SQL operations, joins, and database design principles.",
  difficulty: "Intermediate",
  category: "Databases",
  estimatedTime: "30 minutes",
  passingScore: 70,
  questions: [
    // Beginner Level (10 questions)
    {
      id: "w6q1",
      question: "What does SQL stand for?",
      options: [
        "Structured Query Language",
        "Simple Query Language",
        "Standard Question Language",
        "System Query Logic"
      ],
      correctAnswer: 0,
      explanation: "SQL stands for Structured Query Language, used for managing and querying relational databases.",
      difficulty: "beginner",
      topic: "Database Fundamentals"
    },
    {
      id: "w6q2",
      question: "Which SQL command is used to retrieve data from a database?",
      options: [
        "GET",
        "FETCH",
        "SELECT",
        "RETRIEVE"
      ],
      correctAnswer: 2,
      explanation: "SELECT is the SQL command used to query and retrieve data from database tables.",
      difficulty: "beginner",
      topic: "SQL Basics"
    },
    {
      id: "w6q3",
      question: "What is a primary key?",
      options: [
        "The first column in a table",
        "A unique identifier for each row",
        "The most important column",
        "A column that can be null"
      ],
      correctAnswer: 1,
      explanation: "A primary key is a unique identifier for each row in a table, and it cannot contain NULL values.",
      difficulty: "beginner",
      topic: "Database Design"
    },
    {
      id: "w6q4",
      question: "Which SQL clause filters rows based on a condition?",
      options: [
        "FILTER",
        "HAVING",
        "WHERE",
        "CONDITION"
      ],
      correctAnswer: 2,
      explanation: "The WHERE clause is used to filter rows based on specified conditions in SQL queries.",
      difficulty: "beginner",
      topic: "SQL Basics"
    },
    {
      id: "w6q5",
      question: "What does DBMS stand for?",
      options: [
        "Database Management System",
        "Data Backup Management System",
        "Digital Base Management Software",
        "Database Manipulation System"
      ],
      correctAnswer: 0,
      explanation: "DBMS stands for Database Management System, software that manages database operations.",
      difficulty: "beginner",
      topic: "Database Fundamentals"
    },
    {
      id: "w6q6",
      question: "Which SQL command adds new data to a table?",
      options: [
        "ADD",
        "INSERT",
        "APPEND",
        "CREATE"
      ],
      correctAnswer: 1,
      explanation: "The INSERT command is used to add new rows of data to a database table.",
      difficulty: "beginner",
      topic: "SQL Basics"
    },
    {
      id: "w6q7",
      question: "What is a foreign key?",
      options: [
        "A key from another database",
        "A reference to a primary key in another table",
        "An encrypted key",
        "A backup key"
      ],
      correctAnswer: 1,
      explanation: "A foreign key is a column that creates a relationship by referencing the primary key of another table.",
      difficulty: "beginner",
      topic: "Database Design"
    },
    {
      id: "w6q8",
      question: "Which SQL command modifies existing data?",
      options: [
        "MODIFY",
        "CHANGE",
        "UPDATE",
        "ALTER"
      ],
      correctAnswer: 2,
      explanation: "The UPDATE command is used to modify existing rows in a database table.",
      difficulty: "beginner",
      topic: "SQL Basics"
    },
    {
      id: "w6q9",
      question: "What does 'SELECT * FROM users' do?",
      options: [
        "Deletes all users",
        "Selects all columns from the users table",
        "Creates a new users table",
        "Counts all users"
      ],
      correctAnswer: 1,
      explanation: "SELECT * retrieves all columns from the specified table (users in this case).",
      difficulty: "beginner",
      topic: "SQL Basics"
    },
    {
      id: "w6q10",
      question: "Which SQL command removes data from a table?",
      options: [
        "REMOVE",
        "DROP",
        "DELETE",
        "CLEAR"
      ],
      correctAnswer: 2,
      explanation: "The DELETE command removes rows from a table based on specified conditions.",
      difficulty: "beginner",
      topic: "SQL Basics"
    },

    // Intermediate Level (10 questions)
    {
      id: "w6q11",
      question: "What is the difference between DELETE and TRUNCATE?",
      options: [
        "No difference",
        "DELETE can be rolled back, TRUNCATE cannot",
        "TRUNCATE is faster and resets identity",
        "DELETE removes table structure"
      ],
      correctAnswer: 2,
      explanation: "TRUNCATE is faster, removes all rows, resets auto-increment, and uses less transaction log space than DELETE.",
      difficulty: "intermediate",
      topic: "SQL Operations"
    },
    {
      id: "w6q12",
      question: "Which type of JOIN returns all rows from both tables?",
      options: [
        "INNER JOIN",
        "LEFT JOIN",
        "RIGHT JOIN",
        "FULL OUTER JOIN"
      ],
      correctAnswer: 3,
      explanation: "FULL OUTER JOIN returns all rows from both tables, with NULLs for non-matching rows.",
      difficulty: "intermediate",
      topic: "SQL Joins"
    },
    {
      id: "w6q13",
      question: "What is normalization in databases?",
      options: [
        "Making all data uppercase",
        "Organizing data to reduce redundancy",
        "Creating backup copies",
        "Indexing all columns"
      ],
      correctAnswer: 1,
      explanation: "Normalization is the process of organizing data to minimize redundancy and improve data integrity.",
      difficulty: "intermediate",
      topic: "Database Design"
    },
    {
      id: "w6q14",
      question: "What does the GROUP BY clause do?",
      options: [
        "Groups similar rows together",
        "Arranges rows in groups of 10",
        "Aggregates rows based on column values",
        "Creates user groups"
      ],
      correctAnswer: 2,
      explanation: "GROUP BY groups rows with the same values in specified columns and is used with aggregate functions.",
      difficulty: "intermediate",
      topic: "SQL Queries"
    },
    {
      id: "w6q15",
      question: "What is an index in a database?",
      options: [
        "A table of contents",
        "A data structure for faster queries",
        "The first row of a table",
        "A backup mechanism"
      ],
      correctAnswer: 1,
      explanation: "An index is a data structure that improves the speed of data retrieval operations on a table.",
      difficulty: "intermediate",
      topic: "Database Performance"
    },
    {
      id: "w6q16",
      question: "What is the purpose of the HAVING clause?",
      options: [
        "Same as WHERE",
        "Filters groups after GROUP BY",
        "Creates conditions for JOIN",
        "Validates data types"
      ],
      correctAnswer: 1,
      explanation: "HAVING filters groups created by GROUP BY, while WHERE filters individual rows before grouping.",
      difficulty: "intermediate",
      topic: "SQL Queries"
    },
    {
      id: "w6q17",
      question: "What does ACID stand for in databases?",
      options: [
        "Automatic, Consistent, Isolated, Durable",
        "Atomic, Consistent, Isolated, Durable",
        "Automatic, Complete, Independent, Direct",
        "Atomic, Complete, Independent, Durable"
      ],
      correctAnswer: 1,
      explanation: "ACID represents Atomicity, Consistency, Isolation, and Durability - properties ensuring reliable transactions.",
      difficulty: "intermediate",
      topic: "Database Fundamentals"
    },
    {
      id: "w6q18",
      question: "Which JOIN returns rows only when there's a match in both tables?",
      options: [
        "OUTER JOIN",
        "LEFT JOIN",
        "INNER JOIN",
        "CROSS JOIN"
      ],
      correctAnswer: 2,
      explanation: "INNER JOIN returns only rows that have matching values in both tables being joined.",
      difficulty: "intermediate",
      topic: "SQL Joins"
    },
    {
      id: "w6q19",
      question: "What is a composite key?",
      options: [
        "A key made of metal",
        "A primary key with multiple columns",
        "A foreign key reference",
        "An encrypted key"
      ],
      correctAnswer: 1,
      explanation: "A composite key is a primary key that consists of two or more columns used together to uniquely identify a row.",
      difficulty: "intermediate",
      topic: "Database Design"
    },
    {
      id: "w6q20",
      question: "What does the ORDER BY clause do?",
      options: [
        "Orders food online",
        "Sorts query results",
        "Arranges tables",
        "Creates ordered lists"
      ],
      correctAnswer: 1,
      explanation: "ORDER BY sorts the result set of a query based on specified column(s) in ascending or descending order.",
      difficulty: "intermediate",
      topic: "SQL Queries"
    },

    // Advanced Level (10 questions)
    {
      id: "w6q21",
      question: "What is the Third Normal Form (3NF)?",
      options: [
        "No repeating groups",
        "All non-key attributes depend on the primary key",
        "No transitive dependencies",
        "All attributes are atomic"
      ],
      correctAnswer: 2,
      explanation: "3NF requires that all non-key attributes depend only on the primary key (no transitive dependencies).",
      difficulty: "advanced",
      topic: "Database Design"
    },
    {
      id: "w6q22",
      question: "What is a database transaction?",
      options: [
        "A monetary exchange",
        "A single SQL query",
        "A unit of work that succeeds or fails together",
        "A backup operation"
      ],
      correctAnswer: 2,
      explanation: "A transaction is a logical unit of work that must be completed entirely or not at all (atomicity).",
      difficulty: "advanced",
      topic: "Database Fundamentals"
    },
    {
      id: "w6q23",
      question: "What is a subquery?",
      options: [
        "A query below another",
        "A query nested within another query",
        "A partial query",
        "A query with errors"
      ],
      correctAnswer: 1,
      explanation: "A subquery is a query nested inside another query, used to retrieve data for the outer query.",
      difficulty: "advanced",
      topic: "SQL Queries"
    },
    {
      id: "w6q24",
      question: "What is database denormalization?",
      options: [
        "Removing normal forms",
        "Intentionally adding redundancy for performance",
        "Breaking a database",
        "Converting to NoSQL"
      ],
      correctAnswer: 1,
      explanation: "Denormalization intentionally introduces redundancy to improve read performance, trading off write efficiency.",
      difficulty: "advanced",
      topic: "Database Design"
    },
    {
      id: "w6q25",
      question: "What is a clustered index?",
      options: [
        "An index on multiple columns",
        "An index that determines physical row order",
        "A group of indexes",
        "An index for clustering servers"
      ],
      correctAnswer: 1,
      explanation: "A clustered index determines the physical order of data in a table; a table can have only one.",
      difficulty: "advanced",
      topic: "Database Performance"
    },
    {
      id: "w6q26",
      question: "What is referential integrity?",
      options: [
        "Data validation rules",
        "Ensuring foreign keys reference valid primary keys",
        "Backup consistency",
        "Data encryption"
      ],
      correctAnswer: 1,
      explanation: "Referential integrity ensures that relationships between tables remain consistent through foreign key constraints.",
      difficulty: "advanced",
      topic: "Database Design"
    },
    {
      id: "w6q27",
      question: "What is the difference between UNION and UNION ALL?",
      options: [
        "No difference",
        "UNION removes duplicates, UNION ALL keeps them",
        "UNION ALL is faster only",
        "UNION allows more columns"
      ],
      correctAnswer: 1,
      explanation: "UNION removes duplicate rows and is slower; UNION ALL keeps all rows including duplicates and is faster.",
      difficulty: "advanced",
      topic: "SQL Queries"
    },
    {
      id: "w6q28",
      question: "What is a stored procedure?",
      options: [
        "Saved SQL queries",
        "Precompiled SQL code stored in the database",
        "A backup procedure",
        "A data storage method"
      ],
      correctAnswer: 1,
      explanation: "A stored procedure is precompiled SQL code stored in the database for reuse, improving performance and security.",
      difficulty: "advanced",
      topic: "Advanced SQL"
    },
    {
      id: "w6q29",
      question: "What is a database view?",
      options: [
        "A window to see data",
        "A virtual table based on a query",
        "A backup snapshot",
        "A monitoring dashboard"
      ],
      correctAnswer: 1,
      explanation: "A view is a virtual table based on a SELECT query, providing a customized presentation of data.",
      difficulty: "advanced",
      topic: "Advanced SQL"
    },
    {
      id: "w6q30",
      question: "What is a deadlock in databases?",
      options: [
        "A locked database",
        "Two transactions waiting for each other",
        "A security feature",
        "A corrupted lock"
      ],
      correctAnswer: 1,
      explanation: "A deadlock occurs when two or more transactions are waiting for each other to release locks, creating a cycle.",
      difficulty: "advanced",
      topic: "Database Transactions"
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
      "Database Fundamentals",
      "SQL Basics",
      "SQL Joins",
      "Database Design",
      "SQL Queries",
      "Database Performance"
    ],
    createdAt: "2025-01-20",
    version: "1.0"
  }
};

export default foundationalCSWeek6Quiz;