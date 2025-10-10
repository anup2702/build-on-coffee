
export const cachingQuiz = {
  title: "Caching Quiz",
  questions: {
    beginner: [
      {
        question: "What is the primary purpose of caching?",
        options: [
          "To make data persistent.",
          "To reduce latency and improve performance by storing frequently accessed data in a temporary storage.",
          "To increase database size.",
          "To secure data.",
        ],
        answer: "To reduce latency and improve performance by storing frequently accessed data in a temporary storage.",
      },
      {
        question: "Where is a cache typically located?",
        options: [
          "On a different continent.",
          "Closer to the application or user than the original data source.",
          "Only in the database.",
          "On a slow storage medium.",
        ],
        answer: "Closer to the application or user than the original data source.",
      },
      {
        question: "What is a 'cache hit'?",
        options: [
          "When the requested data is not found in the cache.",
          "When the requested data is found in the cache.",
          "When the cache is full.",
          "When the cache is empty.",
        ],
        answer: "When the requested data is found in the cache.",
      },
      {
        question: "What is a 'cache miss'?",
        options: [
          "When the requested data is found in the cache.",
          "When the requested data is not found in the cache and must be fetched from the original data source.",
          "When the cache is cleared.",
          "When the cache is updated.",
        ],
        answer: "When the requested data is not found in the cache and must be fetched from the original data source.",
      },
      {
        question: "What is a common example of a caching technology?",
        options: [
          "PostgreSQL",
          "Redis",
          "MongoDB",
          "Apache Kafka",
        ],
        answer: "Redis",
      },
      {
        question: "What is 'Time to Live' (TTL) in the context of caching?",
        options: [
          "The time it takes to write data to the cache.",
          "The time it takes to read data from the cache.",
          "A mechanism that limits the lifespan of data in a cache.",
          "The total size of the cache.",
        ],
        answer: "A mechanism that limits the lifespan of data in a cache.",
      },
      {
        question: "What is 'cache eviction'?",
        options: [
          "The process of adding data to the cache.",
          "The process of removing data from the cache when it is full.",
          "The process of reading data from the cache.",
          "The process of updating data in the cache.",
        ],
        answer: "The process of removing data from the cache when it is full.",
      },
      {
        question: "Which of the following is a simple cache eviction policy?",
        options: [
          "First-In, First-Out (FIFO)",
          "Last-In, First-Out (LIFO)",
          "Most Recently Used (MRU)",
          "Random Replacement (RR)",
        ],
        answer: "First-In, First-Out (FIFO)",
      },
      {
        question: "What is 'browser caching'?",
        options: [
          "Caching data on the web server.",
          "Caching data on the user's web browser to speed up subsequent visits to a website.",
          "A type of database cache.",
          "A cache for mobile applications.",
        ],
        answer: "Caching data on the user's web browser to speed up subsequent visits to a website.",
      },
      {
        question: "What is a 'Content Delivery Network' (CDN)?",
        options: [
          "A network of servers that are all located in the same data center.",
          "A geographically distributed network of proxy servers and their data centers, which work together to provide fast delivery of Internet content.",
          "A private network for a single organization.",
          "A type of local area network (LAN).",
        ],
        answer: "A geographically distributed network of proxy servers and their data centers, which work together to provide fast delivery of Internet content.",
      }
    ],
    intermediate: [
      {
        question: "What is the 'Least Recently Used' (LRU) cache eviction policy?",
        options: [
          "It removes the item that was added to the cache first.",
          "It removes the item that has been accessed least recently.",
          "It removes the item that has been accessed most recently.",
          "It removes a random item.",
        ],
        answer: "It removes the item that has been accessed least recently.",
      },
      {
        question: "What is 'write-through' caching?",
        options: [
          "Data is written to the cache and the backing store at the same time.",
          "Data is written only to the cache.",
          "Data is written only to the backing store.",
          "Data is written to the cache, and the write to the backing store is deferred.",
        ],
        answer: "Data is written to the cache and the backing store at the same time.",
      },
      {
        question: "What is 'write-back' (or 'write-behind') caching?",
        options: [
          "Data is written to the cache, and the write to the backing store is done later, asynchronously.",
          "Data is written directly to the backing store, bypassing the cache.",
          "Data is written to both the cache and the backing store simultaneously.",
          "Data is never written to the backing store.",
        ],
        answer: "Data is written to the cache, and the write to the backing store is done later, asynchronously.",
      },
      {
        question: "What is a 'cache stampede' (or 'dog-piling')?",
        options: [
          "When the cache is too full to accept new data.",
          "When multiple clients simultaneously request a piece of data that is not in the cache, causing them all to hit the backing store at the same time.",
          "When the cache is hit with too many requests at once.",
          "When the cache is being evicted.",
        ],
        answer: "When multiple clients simultaneously request a piece of data that is not in the cache, causing them all to hit the backing store at the same time.",
      },
      {
        question: "What is 'cache warming'?",
        options: [
          "The process of clearing the cache.",
          "The process of pre-loading a cache with data that is expected to be in high demand.",
          "The process of letting the cache fill up naturally.",
          "The process of monitoring the cache temperature.",
        ],
        answer: "The process of pre-loading a cache with data that is expected to be in high demand.",
      },
      {
        question: "What is 'distributed caching'?",
        options: [
          "A cache that is stored on a single server.",
          "A cache that is spread across multiple servers, allowing it to grow in size and capacity.",
          "A cache that is only used for distributed systems.",
          "A cache that is not connected to a network.",
        ],
        answer: "A cache that is spread across multiple servers, allowing it to grow in size and capacity.",
      },
      {
        question: "What is the 'cache-aside' pattern?",
        options: [
          "The application always writes data to the cache.",
          "The application is responsible for reading and writing from the backing store, and updating the cache.",
          "The cache is always updated automatically.",
          "The application only interacts with the cache.",
        ],
        answer: "The application is responsible for reading and writing from the backing store, and updating the cache.",
      },
      {
        question: "What is 'content-based caching'?",
        options: [
          "Caching based on the size of the content.",
          "Caching decisions are made based on the content of the data itself, not just its URL or key.",
          "Caching only text content.",
          "Caching only image content.",
        ],
        answer: "Caching decisions are made based on the content of the data itself, not just its URL or key.",
      },
      {
        question: "What is the difference between a 'cache' and a 'buffer'?",
        options: [
          "There is no difference.",
          "A cache is used to speed up data access, while a buffer is used for temporary storage during data transfer.",
          "A buffer is always larger than a cache.",
          "A cache is for writing data, while a buffer is for reading data.",
        ],
        answer: "A cache is used to speed up data access, while a buffer is used for temporary storage during data transfer.",
      },
      {
        question: "What is 'ETag' and how is it used for caching?",
        options: [
          "A tag for organizing cache entries.",
          "An HTTP response header that provides a mechanism for web cache validation. It allows a client to make conditional requests.",
          "A type of cache eviction policy.",
          "A security token for accessing the cache.",
        ],
        answer: "An HTTP response header that provides a mechanism for web cache validation. It allows a client to make conditional requests.",
      }
    ],
    advanced: [
      {
        question: "What is a 'probabilistic cache' like a Bloom filter used for?",
        options: [
          "To store the actual data in the cache.",
          "To quickly determine if an item is definitely not in a set, or if it may be in the set, with a small possibility of false positives.",
          "To guarantee that an item is in the cache.",
          "To encrypt the data in the cache.",
        ],
        answer: "To quickly determine if an item is definitely not in a set, or if it may be in the set, with a small possibility of false positives.",
      },
      {
        question: "What is 'consistent hashing' and why is it useful for distributed caching?",
        options: [
          "A hashing technique that always produces the same hash for a given input.",
          "A hashing technique that minimizes the number of keys that need to be remapped when a cache server is added or removed.",
          "A hashing technique that is not consistent.",
          "A hashing technique that is only used for single-server caches.",
        ],
        answer: "A hashing technique that minimizes the number of keys that need to be remapped when a cache server is added or removed.",
      },
      {
        question: "What is the 'Thundering Herd' problem in caching, and how can it be mitigated?",
        options: [
          "The same as a cache stampede.",
          "A problem where a large number of processes waiting for an event are awakened when that event occurs, but only one process can handle the event. It can be mitigated with techniques like promise coalescing or using a separate process to update the cache.",
          "A problem with cache eviction.",
          "A problem with cache security.",
        ],
        answer: "A problem where a large number of processes waiting for an event are awakened when that event occurs, but only one process can handle the event. It can be mitigated with techniques like promise coalescing or using a separate process to update the cache.",
      },
      {
        question: "What is 'edge caching'?",
        options: [
          "Caching data at the center of the network.",
          "Caching data closer to the end-user, at the 'edge' of the network, often within a CDN.",
          "A type of in-memory cache.",
          "A cache that is not connected to the internet.",
        ],
        answer: "Caching data closer to the end-user, at the 'edge' of the network, often within a CDN.",
      },
      {
        question: "What is the 'read-through' caching pattern?",
        options: [
          "The application is responsible for fetching data from the backing store.",
          "The cache is responsible for fetching data from the backing store on a cache miss and returning it to the application.",
          "Data is always read from the backing store.",
          "Data is never read from the backing store.",
        ],
        answer: "The cache is responsible for fetching data from the backing store on a cache miss and returning it to the application.",
      },
      {
        question: "What is 'cache poisoning'?",
        options: [
          "A type of cache eviction policy.",
          "An attack where an attacker exploits a vulnerability to insert malicious or incorrect data into a cache.",
          "The process of clearing the cache.",
          "A technique for improving cache performance.",
        ],
        answer: "An attack where an attacker exploits a vulnerability to insert malicious or incorrect data into a cache.",
      },
      {
        question: "What is the difference between 'in-memory' and 'in-process' caching?",
        options: [
          "There is no difference.",
          "In-memory caching can be shared across multiple processes, while in-process caching is specific to a single process.",
          "In-process caching is always faster.",
          "In-memory caching is only for databases.",
        ],
        answer: "In-memory caching can be shared across multiple processes, while in-process caching is specific to a single process.",
      },
      {
        question: "What is 'Time-Aware Least Recently Used' (TLRU) cache eviction policy?",
        options: [
          "A policy that evicts the most recently used items.",
          "A variant of LRU that also considers the age of the item in the cache, giving a higher priority to items that have been in the cache for a longer time.",
          "A policy that evicts items randomly.",
          "A policy that evicts items based on their size.",
        ],
        answer: "A variant of LRU that also considers the age of the item in the cache, giving a higher priority to items that have been in the cache for a longer time.",
      },
      {
        question: "What is 'object caching'?",
        options: [
          "Caching only primitive data types.",
          "Caching complex objects, such as the results of database queries or API calls, in their native format.",
          "Caching only files.",
          "Caching only images.",
        ],
        answer: "Caching complex objects, such as the results of database queries or API calls, in their native format.",
      },
      {
        question: "What is the role of the `Vary` HTTP header in caching?",
        options: [
          "It specifies the size of the cache.",
          "It tells caches which request headers to take into account when determining if a cached response can be used.",
          "It disables caching.",
          "It sets the TTL for the cached response.",
        ],
        answer: "It tells caches which request headers to take into account when determining if a cached response can be used.",
      }
    ]
  }
};
