export const mongoDBQuiz = {
  title: "MongoDB Quiz",
  questions: {
    beginner: [
      {
        question: "What type of database is MongoDB?",
        options: [
          "NoSQL document database",
          "Relational database",
          "Graph database", 
          "Key-value store"
        ],
        answer: "NoSQL document database"
      },
      {
        question: "What format does MongoDB use to store data?",
        options: [
          "BSON (Binary JSON)",
          "XML",
          "CSV",
          "Plain text"
        ],
        answer: "BSON (Binary JSON)"
      },
      {
        question: "What is a collection in MongoDB?",
        options: [
          "A group of documents",
          "A single document",
          "A database field",
          "A connection string"
        ],
        answer: "A group of documents"
      },
      {
        question: "Which command is used to create a database in MongoDB?",
        options: [
          "use database_name",
          "create database database_name", 
          "new database database_name",
          "make database database_name"
        ],
        answer: "use database_name"
      },
      {
        question: "What is a document in MongoDB?",
        options: [
          "A record stored in BSON format",
          "A table row",
          "A database schema",
          "A connection configuration"
        ],
        answer: "A record stored in BSON format"
      },
      {
        question: "Which method is used to insert a single document?",
        options: [
          "insertOne()",
          "insert()",
          "add()",
          "create()"
        ],
        answer: "insertOne()"
      },
      {
        question: "What is the default port for MongoDB?",
        options: [
          "27017",
          "3306",
          "5432",
          "8080"
        ],
        answer: "27017"
      },
      {
        question: "Which method finds all documents in a collection?",
        options: [
          "find()",
          "findAll()",
          "getAll()",
          "select()"
        ],
        answer: "find()"
      },
      {
        question: "What does _id represent in MongoDB?",
        options: [
          "Primary key for each document",
          "Foreign key reference",
          "Index name",
          "Collection name"
        ],
        answer: "Primary key for each document"
      },
      {
        question: "Which operator is used for equality matching?",
        options: [
          "$eq",
          "$equal",
          "$match",
          "$same"
        ],
        answer: "$eq"
      }
    ],
    intermediate: [
      {
        question: "What is the aggregation pipeline in MongoDB?",
        options: [
          "A framework for data processing and transformation",
          "A method to create indexes",
          "A replication mechanism",
          "A backup strategy"
        ],
        answer: "A framework for data processing and transformation"
      },
      {
        question: "Which operator is used to match documents in aggregation?",
        options: [
          "$match",
          "$find",
          "$where",
          "$filter"
        ],
        answer: "$match"
      },
      {
        question: "What does the $group stage do in aggregation?",
        options: [
          "Groups documents by specified criteria",
          "Sorts documents",
          "Limits results",
          "Projects specific fields"
        ],
        answer: "Groups documents by specified criteria"
      },
      {
        question: "Which index type is best for text search?",
        options: [
          "Text index",
          "Compound index",
          "Sparse index",
          "Unique index"
        ],
        answer: "Text index"
      },
      {
        question: "What is a replica set in MongoDB?",
        options: [
          "A group of MongoDB servers maintaining same data",
          "A backup file",
          "A collection of indexes",
          "A query optimization tool"
        ],
        answer: "A group of MongoDB servers maintaining same data"
      },
      {
        question: "Which method updates multiple documents?",
        options: [
          "updateMany()",
          "updateAll()",
          "modifyMany()",
          "changeMany()"
        ],
        answer: "updateMany()"
      },
      {
        question: "What is sharding in MongoDB?",
        options: [
          "Horizontal scaling by distributing data across machines",
          "Vertical scaling by adding more memory",
          "Creating backup copies",
          "Indexing optimization"
        ],
        answer: "Horizontal scaling by distributing data across machines"
      },
      {
        question: "Which operator performs case-insensitive regex search?",
        options: [
          "$regex with $options: 'i'",
          "$iregex",
          "$search",
          "$like"
        ],
        answer: "$regex with $options: 'i'"
      },
      {
        question: "What is the purpose of $lookup in aggregation?",
        options: [
          "Performs left outer join with other collections",
          "Looks up index statistics",
          "Searches for documents",
          "Creates new fields"
        ],
        answer: "Performs left outer join with other collections"
      },
      {
        question: "Which write concern ensures acknowledgment from majority?",
        options: [
          "majority",
          "all",
          "acknowledged",
          "safe"
        ],
        answer: "majority"
      }
    ],
    advanced: [
      {
        question: "What is the WiredTiger storage engine optimized for?",
        options: [
          "High concurrency and compression",
          "Simple queries only",
          "Small datasets",
          "Single-threaded operations"
        ],
        answer: "High concurrency and compression"
      },
      {
        question: "Which operation provides ACID transactions across multiple documents?",
        options: [
          "Multi-document transactions",
          "Atomic operations",
          "Bulk operations",
          "Aggregation pipeline"
        ],
        answer: "Multi-document transactions"
      },
      {
        question: "What is the difference between $lookup and $graphLookup?",
        options: [
          "$graphLookup performs recursive searches, $lookup is single-level",
          "$lookup is faster than $graphLookup",
          "$graphLookup only works with arrays",
          "No difference, they are synonyms"
        ],
        answer: "$graphLookup performs recursive searches, $lookup is single-level"
      },
      {
        question: "Which aggregation stage is best for large dataset sampling?",
        options: [
          "$sample",
          "$limit",
          "$skip",
          "$random"
        ],
        answer: "$sample"
      },
      {
        question: "What is the purpose of the oplog in MongoDB?",
        options: [
          "Records all operations for replication",
          "Stores user queries",
          "Maintains index statistics",
          "Caches frequently accessed data"
        ],
        answer: "Records all operations for replication"
      },
      {
        question: "Which index strategy reduces memory usage for sparse data?",
        options: [
          "Sparse indexes",
          "Compound indexes",
          "Partial indexes",
          "Text indexes"
        ],
        answer: "Sparse indexes"
      },
      {
        question: "What is change streams used for?",
        options: [
          "Real-time monitoring of data changes",
          "Performance optimization",
          "Backup creation",
          "Index management"
        ],
        answer: "Real-time monitoring of data changes"
      },
      {
        question: "Which aggregation operator calculates moving averages?",
        options: [
          "$setWindowFields",
          "$movingAvg",
          "$rolling",
          "$window"
        ],
        answer: "$setWindowFields"
      },
      {
        question: "What is the maximum BSON document size in MongoDB?",
        options: [
          "16 MB",
          "32 MB",
          "64 MB",
          "128 MB"
        ],
        answer: "16 MB"
      },
      {
        question: "Which read preference routes queries to secondary replicas?",
        options: [
          "secondary",
          "secondaryPreferred",
          "nearest",
          "primaryPreferred"
        ],
        answer: "secondary"
      }
    ]
  }
};