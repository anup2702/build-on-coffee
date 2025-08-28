const databaseQuestions = {
  beginner: [
    {
      question: "What does SQL stand for?",
      options: [
        "Structured Query Language",
        "Strong Question Language",
        "Structured Question Language",
        "Simple Query Language",
      ],
      answer: "Structured Query Language",
    },
    {
      question: "Which of the following is a DDL command in SQL?",
      options: ["CREATE", "SELECT", "UPDATE", "INSERT"],
      answer: "CREATE",
    },
    {
      question: "Which of the following is a DML command in SQL?",
      options: ["INSERT", "CREATE", "ALTER", "DROP"],
      answer: "INSERT",
    },
    {
      question: "Which of the following is a DQL command in SQL?",
      options: ["SELECT", "CREATE", "UPDATE", "DELETE"],
      answer: "SELECT",
    },
    {
      question: "What is a primary key?",
      options: [
        "A constraint that uniquely identifies each record in a table",
        "A key to open a database",
        "A foreign key",
        "A way to sort data",
      ],
      answer: "A constraint that uniquely identifies each record in a table",
    },
    {
      question: "What is a foreign key?",
      options: [
        "A key used to link two tables together",
        "A primary key from another table",
        "A way to uniquely identify a record",
        "A way to sort data",
      ],
      answer: "A key used to link two tables together",
    },
    {
      question: "What is a NoSQL database?",
      options: [
        "A database that does not use SQL",
        "A database that is not relational",
        "Both a and b",
        "None of the above",
      ],
      answer: "Both a and b",
    },
    {
      question: "What is a document in MongoDB?",
      options: [
        "A record in a MongoDB collection",
        "A file stored in the database",
        "A collection of documents",
        "A way to query data",
      ],
      answer: "A record in a MongoDB collection",
    },
    {
      question: "What is a collection in MongoDB?",
      options: [
        "A group of MongoDB documents",
        "A table in a relational database",
        "A way to store data",
        "A way to query data",
      ],
      answer: "A group of MongoDB documents",
    },
    {
      question: "Which command is used to insert a document in MongoDB?",
      options: ["insertOne()", "addOne()", "putOne()", "saveOne()"],
      answer: "insertOne()",
    },
  ],
  intermediate: [
    {
      question: "What is a JOIN clause used for in SQL?",
      options: [
        "To combine rows from two or more tables, based on a related column between them",
        "To filter records",
        "To sort records",
        "To update records",
      ],
      answer: "To combine rows from two or more tables, based on a related column between them",
    },
    {
      question: "What is a subquery in SQL?",
      options: [
        "A query within another query",
        "A query that is not executed",
        "A query that is executed first",
        "A query that is executed last",
      ],
      answer: "A query within another query",
    },
    {
      question: "What is normalization in the context of databases?",
      options: [
        "The process of organizing columns and tables of a relational database to minimize data redundancy",
        "The process of making a database faster",
        "The process of adding more data to a database",
        "The process of deleting data from a database",
      ],
      answer: "The process of organizing columns and tables of a relational database to minimize data redundancy",
    },
    {
      question: "What is an index in a database?",
      options: [
        "A data structure that improves the speed of data retrieval operations on a database table",
        "A way to sort data",
        "A way to filter data",
        "A way to update data",
      ],
      answer: "A data structure that improves the speed of data retrieval operations on a database table",
    },
    {
      question: "What are ACID properties in a database?",
      options: [
        "Atomicity, Consistency, Isolation, Durability",
        "Atomicity, Consistency, Integrity, Durability",
        "Availability, Consistency, Isolation, Durability",
        "Atomicity, Concurrency, Isolation, Durability",
      ],
      answer: "Atomicity, Consistency, Isolation, Durability",
    },
    {
      question: "What is the aggregation framework in MongoDB?",
      options: [
        "A way to process data records and return computed results",
        "A way to query data",
        "A way to store data",
        "A way to update data",
      ],
      answer: "A way to process data records and return computed results",
    },
    {
      question: "What is the difference between SQL and NoSQL databases?",
      options: [
        "SQL databases are relational, NoSQL databases are non-relational",
        "SQL databases have a predefined schema, NoSQL databases have a dynamic schema",
        "SQL databases are vertically scalable, NoSQL databases are horizontally scalable",
        "All of the above",
      ],
      answer: "All of the above",
    },
    {
      question: "What is the `populate` method used for in Mongoose (MongoDB ODM)?",
      options: [
        "To replace specified paths in a document with document(s) from other collection(s)",
        "To add data to a collection",
        "To delete data from a collection",
        "To update data in a collection",
      ],
      answer: "To replace specified paths in a document with document(s) from other collection(s)",
    },
    {
      question: "What is the N+1 query problem?",
      options: [
        "A performance issue where an application makes N additional queries to fetch the same data that could have been retrieved in a single query",
        "A security vulnerability",
        "A type of database",
        "A way to optimize queries",
      ],
      answer: "A performance issue where an application makes N additional queries to fetch the same data that could have been retrieved in a single query",
    },
    {
      question: "What is a transaction in a database?",
      options: [
        "A sequence of operations performed as a single logical unit of work",
        "A way to query data",
        "A way to store data",
        "A way to update data",
      ],
      answer: "A sequence of operations performed as a single logical unit of work",
    },
  ],
  advanced: [
    {
      question: "What is database sharding?",
      options: [
        "A type of database partitioning that separates very large databases into smaller, faster, more easily managed parts called data shards",
        "A way to encrypt a database",
        "A way to back up a database",
        "A way to delete a database",
      ],
      answer: "A type of database partitioning that separates very large databases into smaller, faster, more easily managed parts called data shards",
    },
    {
      question: "What is database replication?",
      options: [
        "The process of storing data in more than one site or node",
        "A way to delete data",
        "A way to update data",
        "A way to query data",
      ],
      answer: "The process of storing data in more than one site or node",
    },
    {
      question: "What is the CAP theorem?",
      options: [
        "A theorem that states it is impossible for a distributed data store to simultaneously provide more than two out of the following three guarantees: Consistency, Availability, and Partition tolerance",
        "A theorem about database security",
        "A theorem about database performance",
        "A theorem about database design",
      ],
      answer: "A theorem that states it is impossible for a distributed data store to simultaneously provide more than two out of the following three guarantees: Consistency, Availability, and Partition tolerance",
    },
    {
      question: "What is a deadlock in a database?",
      options: [
        "A situation where two or more transactions are waiting for one another to give up locks",
        "A situation where a database crashes",
        "A situation where a database is very slow",
        "A situation where a database is very fast",
      ],
      answer: "A situation where two or more transactions are waiting for one another to give up locks",
    },
    {
      question: "What is query optimization?",
      options: [
        "The process of choosing the most efficient way to execute a query",
        "The process of writing a query",
        "The process of deleting a query",
        "The process of updating a query",
      ],
      answer: "The process of choosing the most efficient way to execute a query",
    },
    {
      question: "What is a covered query in MongoDB?",
      options: [
        "A query that can be satisfied entirely using an index, without having to examine any documents",
        "A query that is very fast",
        "A query that is very slow",
        "A query that is not executed",
      ],
      answer: "A query that can be satisfied entirely using an index, without having to examine any documents",
    },
    {
      question: "What is the difference between a clustered and a non-clustered index?",
      options: [
        "A clustered index determines the physical order of data in a table, a non-clustered index has a separate structure from the data rows",
        "A non-clustered index determines the physical order of data in a table, a clustered index has a separate structure from the data rows",
        "They are the same",
        "There is no such thing as a clustered index",
      ],
      answer: "A clustered index determines the physical order of data in a table, a non-clustered index has a separate structure from the data rows",
    },
    {
      question: "What is the B-tree data structure and why is it used in databases?",
      options: [
        "A self-balancing tree data structure that maintains sorted data and allows searches, sequential access, insertions, and deletions in logarithmic time. It is used in databases to store indexes.",
        "A data structure for storing images",
        "A data structure for storing videos",
        "A data structure for storing audio",
      ],
      answer: "A self-balancing tree data structure that maintains sorted data and allows searches, sequential access, insertions, and deletions in logarithmic time. It is used in databases to store indexes.",
    },
    {
      question: "What is the purpose of the `EXPLAIN` command in SQL?",
      options: [
        "To show the execution plan of a query",
        "To execute a query",
        "To delete a query",
        "To update a query",
      ],
      answer: "To show the execution plan of a query",
    },
    {
      question: "What is two-phase commit (2PC)?",
      options: [
        "A distributed algorithm that lets all nodes in a distributed system agree to commit a transaction",
        "A way to commit a transaction twice",
        "A way to rollback a transaction",
        "A way to delete a transaction",
      ],
      answer: "A distributed algorithm that lets all nodes in a distributed system agree to commit a transaction",
    },
  ],
};

export default databaseQuestions;
