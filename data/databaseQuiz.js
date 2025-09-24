
export const databaseQuiz = {
  title: "Database Quiz (MongoDB & SQL)",
  questions: {
    beginner: [
      {
        question: "What does SQL stand for?",
        options: [
          "Structured Query Language",
          "Standard Question Language",
          "Simple Query Logic",
          "Sequential Query Language",
        ],
        answer: "Structured Query Language",
      },
      {
        question: "Which SQL statement is used to extract data from a database?",
        options: ["GET", "OPEN", "SELECT", "EXTRACT"],
        answer: "SELECT",
      },
      {
        question: "What is a primary key in SQL?",
        options: [
          "A field that uniquely identifies each record in a table",
          "A field that links two tables together",
          "A field that stores a large amount of text",
          "A field that stores a date and time value",
        ],
        answer: "A field that uniquely identifies each record in a table",
      },
      {
        question: "What is a collection in MongoDB?",
        options: [
          "A group of MongoDB documents",
          "A table in a relational database",
          "A type of index",
          "A database user",
        ],
        answer: "A group of MongoDB documents",
      },
      {
        question: "Which MongoDB operation is used to retrieve documents from a collection?",
        options: ["get", "find", "select", "retrieve"],
        answer: "find",
      },
      {
        question: "Which SQL keyword is used to add new rows to a table?",
        options: ["ADD", "INSERT INTO", "NEW ROW", "CREATE ROW"],
        answer: "INSERT INTO",
      },
      {
        question: "Which SQL keyword is used to modify existing data in a table?",
        options: ["MODIFY", "CHANGE", "UPDATE", "ALTER"],
        answer: "UPDATE",
      },
      {
        question: "Which SQL keyword is used to delete data from a table?",
        options: ["REMOVE", "ERASE", "DELETE FROM", "DROP"],
        answer: "DELETE FROM",
      },
      {
        question: "What is a document in MongoDB?",
        options: [
          "A record in a collection, typically a JSON-like BSON document",
          "A file in the database",
          "A type of index",
          "A database user",
        ],
        answer: "A record in a collection, typically a JSON-like BSON document",
      },
      {
        question: "What is the default port for MongoDB?",
        options: ["27017", "3306", "5432", "8080"],
        answer: "27017",
      },
    ],
    intermediate: [
        {
        question: "What is the purpose of the `JOIN` clause in SQL?",
        options: [
          "To combine rows from two or more tables based on a related column between them",
          "To insert new data into a table",
          "To modify existing data in a table",
          "To delete data from a table",
        ],
        answer: "To combine rows from two or more tables based on a related column between them",
      },
      {
        question: "What is the difference between `INNER JOIN` and `LEFT JOIN`?",
        options: [
          "`INNER JOIN` returns only the rows that have a match in both tables, while `LEFT JOIN` returns all rows from the left table, and the matching rows from the right table",
          "`LEFT JOIN` returns only the rows that have a match in both tables, while `INNER JOIN` returns all rows from the left table, and the matching rows from the right table",
          "There is no difference",
          "`INNER JOIN` is faster than `LEFT JOIN`",
        ],
        answer: "`INNER JOIN` returns only the rows that have a match in both tables, while `LEFT JOIN` returns all rows from the left table, and the matching rows from the right table",
      },
      {
        question: "What is a foreign key in SQL?",
        options: [
          "A field in one table that refers to the primary key in another table",
          "A field that uniquely identifies each record in a table",
          "A field that stores a large amount of text",
          "A field that stores a date and time value",
        ],
        answer: "A field in one table that refers to the primary key in another table",
      },
      {
        question: "How do you create an index in MongoDB?",
        options: [
          "db.collection.createIndex({ field: 1 })",
          "db.collection.addIndex({ field: 1 })",
          "db.collection.makeIndex({ field: 1 })",
          "db.collection.buildIndex({ field: 1 })",
        ],
        answer: "db.collection.createIndex({ field: 1 })",
      },
      {
        question: "What is the purpose of indexing in databases?",
        options: [
          "To speed up data retrieval operations",
          "To slow down data retrieval operations",
          "To store data in a more organized way",
          "To prevent data loss",
        ],
        answer: "To speed up data retrieval operations",
      },
      {
        question: "What is the `GROUP BY` clause in SQL used for?",
        options: [
          "To group rows that have the same values in specified columns into summary rows",
          "To filter rows based on a specified condition",
          "To sort rows in ascending or descending order",
          "To combine rows from two or more tables",
        ],
        answer: "To group rows that have the same values in specified columns into summary rows",
      },
      {
        question: "What is the `HAVING` clause in SQL used for?",
        options: [
          "To filter groups based on a specified condition",
          "To filter rows based on a specified condition",
          "To sort rows in ascending or descending order",
          "To combine rows from two or more tables",
        ],
        answer: "To filter groups based on a specified condition",
      },
      {
        question: "What is the aggregation pipeline in MongoDB?",
        options: [
          "A framework for performing advanced data transformations and analysis",
          "A tool for connecting to a database",
          "A method for creating indexes",
          "A way to store data in a more organized way",
        ],
        answer: "A framework for performing advanced data transformations and analysis",
      },
      {
        question: "Which MongoDB operation is used to update documents in a collection?",
        options: ["update", "modify", "updateOne", "change"],
        answer: "updateOne",
      },
      {
        question: "Which MongoDB operation is used to delete documents from a collection?",
        options: ["delete", "remove", "deleteOne", "erase"],
        answer: "deleteOne",
      },
    ],
    advanced: [
        {
        question: "What is a NoSQL database?",
        options: [
          "A database that provides a mechanism for storage and retrieval of data that is modeled in means other than the tabular relations used in relational databases",
          "A database that uses SQL for querying data",
          "A database that stores data in a hierarchical structure",
          "A database that stores data in a graph-like structure",
        ],
        answer: "A database that provides a mechanism for storage and retrieval of data that is modeled in means other than the tabular relations used in relational databases",
      },
      {
        question: "What is the CAP theorem?",
        options: [
          "A theorem that states that it is impossible for a distributed data store to simultaneously provide more than two out of three guarantees: Consistency, Availability, and Partition tolerance",
          "A theorem that states that it is impossible for a distributed data store to simultaneously provide all three guarantees: Consistency, Availability, and Partition tolerance",
          "A theorem that states that it is possible for a distributed data store to simultaneously provide all three guarantees: Consistency, Availability, and Partition tolerance",
          "A theorem that states that it is possible for a distributed data store to simultaneously provide more than two out of three guarantees: Consistency, Availability, and Partition tolerance",
        ],
        answer: "A theorem that states that it is impossible for a distributed data store to simultaneously provide more than two out of three guarantees: Consistency, Availability, and Partition tolerance",
      },
      {
        question: "What is sharding in MongoDB?",
        options: [
          "A method for distributing data across multiple machines",
          "A method for creating indexes",
          "A method for performing advanced data transformations and analysis",
          "A method for storing data in a more organized way",
        ],
        answer: "A method for distributing data across multiple machines",
      },
      {
        question: "What is replication in MongoDB?",
        options: [
          "A method for maintaining multiple copies of data across multiple servers",
          "A method for distributing data across multiple machines",
          "A method for creating indexes",
          "A method for performing advanced data transformations and analysis",
        ],
        answer: "A method for maintaining multiple copies of data across multiple servers",
      },
      {
        question: "What is the purpose of the `explain()` method in MongoDB?",
        options: [
          "To provide information on the execution plan of a query",
          "To create an index",
          "To update documents in a collection",
          "To delete documents from a collection",
        ],
        answer: "To provide information on the execution plan of a query",
      },
      {
        question: "What is a stored procedure in SQL?",
        options: [
          "A prepared SQL code that you can save and reuse",
          "A function that returns a single value",
          "A trigger that automatically executes when a specific event occurs",
          "A view that represents a virtual table",
        ],
        answer: "A prepared SQL code that you can save and reuse",
      },
      {
        question: "What is a trigger in SQL?",
        options: [
          "A stored procedure that automatically executes when a specific event occurs",
          "A function that returns a single value",
          "A prepared SQL code that you can save and reuse",
          "A view that represents a virtual table",
        ],
        answer: "A stored procedure that automatically executes when a specific event occurs",
      },
      {
        question: "What is a view in SQL?",
        options: [
          "A virtual table based on the result-set of an SQL statement",
          "A prepared SQL code that you can save and reuse",
          "A stored procedure that automatically executes when a specific event occurs",
          "A function that returns a single value",
        ],
        answer: "A virtual table based on the result-set of an SQL statement",
      },
      {
        question: "What is ACID in the context of databases?",
        options: [
          "Atomicity, Consistency, Isolation, Durability",
          "Availability, Consistency, Isolation, Durability",
          "Atomicity, Concurrency, Isolation, Durability",
          "Availability, Concurrency, Isolation, Durability",
        ],
        answer: "Atomicity, Consistency, Isolation, Durability",
      },
      {
        question: "What is the difference between a clustered and non-clustered index?",
        options: [
          "A clustered index determines the physical order of data in a table, while a non-clustered index does not",
          "A non-clustered index determines the physical order of data in a table, while a clustered index does not",
          "There is no difference",
          "A clustered index is faster than a non-clustered index",
        ],
        answer: "A clustered index determines the physical order of data in a table, while a non-clustered index does not",
      },
    ],
  },
};
