
export const databaseOptimizationAndIndexingQuiz = {
  title: "Database Optimization & Indexing Quiz",
  questions: {
    beginner: [
      {
        question: "What is the primary purpose of creating an index on a database table?",
        options: [
          "To enforce data uniqueness.",
          "To speed up data retrieval operations.",
          "To make the database larger.",
          "To slow down data insertion.",
        ],
        answer: "To speed up data retrieval operations.",
      },
      {
        question: "Which SQL statement is used to retrieve data from a database?",
        options: [
          "UPDATE",
          "INSERT",
          "SELECT",
          "DELETE",
        ],
        answer: "SELECT",
      },
      {
        question: "What does the `WHERE` clause in a `SELECT` statement do?",
        options: [
          "Specifies the columns to be returned.",
          "Filters rows based on a specified condition.",
          "Sorts the result set.",
          "Groups rows that have the same values into summary rows.",
        ],
        answer: "Filters rows based on a specified condition.",
      },
      {
        question: "What is a 'full table scan'?",
        options: [
          "A fast way to find specific data.",
          "When the database reads every row in a table to find the requested data.",
          "An operation that only reads the index.",
          "A backup of the entire table.",
        ],
        answer: "When the database reads every row in a table to find the requested data.",
      },
      {
        question: "Which of the following is a good candidate for an index?",
        options: [
          "A column with very few unique values.",
          "A column that is frequently used in `WHERE` clauses.",
          "A very large text column.",
          "A column that is updated frequently.",
        ],
        answer: "A column that is frequently used in `WHERE` clauses.",
      },
      {
        question: "What is the impact of adding too many indexes to a table?",
        options: [
          "It always improves performance.",
          "It can slow down data modification operations (INSERT, UPDATE, DELETE).",
          "It has no impact on performance.",
          "It reduces the storage space required for the database.",
        ],
        answer: "It can slow down data modification operations (INSERT, UPDATE, DELETE).",
      },
      {
        question: "What is a 'primary key'?",
        options: [
          "A key that is used for sorting data.",
          "A constraint that uniquely identifies each record in a table.",
          "A type of index that allows duplicate values.",
          "A key that is not used in queries.",
        ],
        answer: "A constraint that uniquely identifies each record in a table.",
      },
      {
        question: "How can you view the query execution plan for a SQL query?",
        options: [
          "Using the `EXECUTE` statement.",
          "Using the `EXPLAIN` or `EXPLAIN PLAN` statement.",
          "Using the `DESCRIBE` statement.",
          "It is not possible to view the execution plan.",
        ],
        answer: "Using the `EXPLAIN` or `EXPLAIN PLAN` statement.",
      },
      {
        question: "What is 'normalization' in the context of databases?",
        options: [
          "The process of making the database slower.",
          "The process of organizing columns and tables to minimize data redundancy.",
          "The process of adding as much redundant data as possible.",
          "The process of deleting all indexes.",
        ],
        answer: "The process of organizing columns and tables to minimize data redundancy.",
      },
      {
        question: "Which type of index is most commonly used for speeding up queries?",
        options: [
          "Clustered Index",
          "Non-Clustered Index (B-Tree)",
          "Full-text Index",
          "Spatial Index",
        ],
        answer: "Non-Clustered Index (B-Tree)",
      }
    ],
    intermediate: [
      {
        question: "What is a 'composite index'?",
        options: [
          "An index on a single column.",
          "An index on two or more columns.",
          "An index that is not used.",
          "An index on a view.",
        ],
        answer: "An index on two or more columns.",
      },
      {
        question: "What is 'index selectivity'?",
        options: [
          "A measure of how many rows are selected by a query.",
          "A measure of the uniqueness of data in a column. High selectivity means more unique values.",
          "A measure of the size of the index.",
          "A measure of how often an index is used.",
        ],
        answer: "A measure of the uniqueness of data in a column. High selectivity means more unique values.",
      },
      {
        question: "What is a 'covering index'?",
        options: [
          "An index that is not used by any query.",
          "An index that includes all the columns required to satisfy a query, so the table itself doesn't need to be read.",
          "An index that covers the entire table.",
          "An index that is created automatically by the database.",
        ],
        answer: "An index that includes all the columns required to satisfy a query, so the table itself doesn't need to be read.",
      },
      {
        question: "What is the difference between a 'clustered' and a 'non-clustered' index?",
        options: [
          "There is no difference.",
          "A table can have multiple clustered indexes.",
          "A clustered index determines the physical order of data in a table, while a non-clustered index has a separate structure.",
          "A non-clustered index is always faster than a clustered index.",
        ],
        answer: "A clustered index determines the physical order of data in a table, while a non-clustered index has a separate structure.",
      },
      {
        question: "What are 'query hints'?",
        options: [
          "Comments in the SQL code.",
          "Directives that force the query optimizer to use a specific execution plan.",
          "Errors in the query.",
          "Suggestions for improving the query that are ignored by the database.",
        ],
        answer: "Directives that force the query optimizer to use a specific execution plan.",
      },
      {
        question: "What is 'denormalization' and when might it be used?",
        options: [
          "The process of adding redundant data to a normalized database to improve read performance.",
          "The same as normalization.",
          "A process to make write operations faster.",
          "A process to reduce the size of the database.",
        ],
        answer: "The process of adding redundant data to a normalized database to improve read performance.",
      },
      {
        question: "What is a 'fill factor' in the context of indexes?",
        options: [
          "The percentage of space on each leaf-level page to be filled with data.",
          "The number of columns in the index.",
          "The size of the index in megabytes.",
          "The percentage of queries that use the index.",
        ],
        answer: "The percentage of space on each leaf-level page to be filled with data.",
      },
      {
        question: "What is 'index fragmentation'?",
        options: [
          "A desirable state for an index.",
          "When the logical ordering of pages in an index does not match the physical ordering on disk.",
          "When an index is not used by any query.",
          "When an index is stored in a single, contiguous block of memory.",
        ],
        answer: "When the logical ordering of pages in an index does not match the physical ordering on disk.",
      },
      {
        question: "What is a 'function-based index'?",
        options: [
          "An index that is not functional.",
          "An index that is based on the result of a function or expression.",
          "An index on a function's source code.",
          "An index that can only be used by functions.",
        ],
        answer: "An index that is based on the result of a function or expression.",
      },
      {
        question: "What is the 'N+1 query problem'?",
        options: [
          "A problem that occurs when you have too many indexes.",
          "When an application makes N+1 queries to fetch data that could have been fetched in a single query.",
          "A security vulnerability.",
          "A problem with database backups.",
        ],
        answer: "When an application makes N+1 queries to fetch data that could have been fetched in a single query.",
      }
    ],
    advanced: [
      {
        question: "What is a 'bitmap index' and in which scenarios is it most effective?",
        options: [
          "An index that uses a bitmap (a string of bits) to indicate the existence of a value for a column. It is effective for columns with low cardinality.",
          "An index for storing images.",
          "An index that is not compressed.",
          "An index that is used for full-text search.",
        ],
        answer: "An index that uses a bitmap (a string of bits) to indicate the existence of a value for a column. It is effective for columns with low cardinality.",
      },
      {
        question: "What is 'partitioning' in the context of database tables?",
        options: [
          "The process of splitting a large table into smaller, more manageable pieces.",
          "The process of combining multiple tables into one.",
          "The process of deleting a table.",
          "The process of creating a view on a table.",
        ],
        answer: "The process of splitting a large table into smaller, more manageable pieces.",
      },
      {
        question: "What is 'sharding' and how does it differ from partitioning?",
        options: [
          "Sharding is the same as partitioning.",
          "Sharding is a type of horizontal partitioning where data is spread across multiple databases or servers.",
          "Partitioning is for small tables, while sharding is for large tables.",
          "Sharding is a vertical partitioning technique.",
        ],
        answer: "Sharding is a type of horizontal partitioning where data is spread across multiple databases or servers.",
      },
      {
        question: "What are 'materialized views' and how can they help with optimization?",
        options: [
          "A view that does not store any data.",
          "A database object that contains the results of a query. It can be used to pre-compute and store expensive query results.",
          "A view that cannot be queried.",
          "A temporary table.",
        ],
        answer: "A database object that contains the results of a query. It can be used to pre-compute and store expensive query results.",
      },
      {
        question: "What is 'lock escalation'?",
        options: [
          "The process of releasing locks.",
          "The process of converting many fine-grained locks (like row locks) into a single coarse-grained lock (like a table lock).",
          "A type of security attack.",
          "A way to improve concurrency.",
        ],
        answer: "The process of converting many fine-grained locks (like row locks) into a single coarse-grained lock (like a table lock).",
      },
      {
        question: "What is the 'write-ahead logging' (WAL) protocol?",
        options: [
          "A protocol for reading data from the database.",
          "A standard method for ensuring data integrity. Changes are written to a log before they are applied to the database.",
          "A protocol for logging application-level events.",
          "A protocol that writes logs after the changes are applied.",
        ],
        answer: "A standard method for ensuring data integrity. Changes are written to a log before they are applied to the database.",
      },
      {
        question: "What is 'concurrency control' and why is it important?",
        options: [
          "A mechanism to ensure that multiple transactions can execute simultaneously without causing data inconsistency.",
          "A mechanism to prevent anyone from accessing the database.",
          "A mechanism to slow down the database.",
          "A mechanism to delete data automatically.",
        ],
        answer: "A mechanism to ensure that multiple transactions can execute simultaneously without causing data inconsistency.",
      },
      {
        question: "What is the difference between 'optimistic' and 'pessimistic' locking?",
        options: [
          "There is no difference.",
          "Optimistic locking assumes conflicts are rare and checks for them at commit time. Pessimistic locking assumes conflicts are likely and locks resources before using them.",
          "Pessimistic locking is always faster.",
          "Optimistic locking is only used for read-only transactions.",
        ],
        answer: "Optimistic locking assumes conflicts are rare and checks for them at commit time. Pessimistic locking assumes conflicts are likely and locks resources before using them.",
      },
      {
        question: "What is a 'hash index' and what are its pros and cons compared to a B-tree index?",
        options: [
          "A hash index is only good for range queries.",
          "A hash index is based on a hash table and is very fast for equality lookups, but it does not support range queries.",
          "A B-tree index is always better than a hash index.",
          "A hash index is slower than a B-tree index for equality lookups.",
        ],
        answer: "A hash index is based on a hash table and is very fast for equality lookups, but it does not support range queries.",
      },
      {
        question: "What is 'vacuuming' in the context of databases like PostgreSQL?",
        options: [
          "A process to physically delete the database files.",
          "A process to reclaim storage occupied by dead tuples (rows that have been updated or deleted).",
          "A process to backup the database.",
          "A process to create indexes.",
        ],
        answer: "A process to reclaim storage occupied by dead tuples (rows that have been updated or deleted).",
      }
    ]
  }
};
