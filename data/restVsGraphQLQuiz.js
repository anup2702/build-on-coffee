export const restVsGraphQLQuiz = {
  questions: {
    beginner: [
      {
        question: "What is REST?",
        options: [
          "An architectural style for designing networked APIs",
          "A database query language",
          "A frontend framework",
          "A message queue protocol",
        ],
        answer: "An architectural style for designing networked APIs",
      },
      {
        question: "What is GraphQL?",
        options: [
          "A query language for APIs and a runtime for fulfilling those queries",
          "A database engine",
          "A browser rendering engine",
          "An ORM",
        ],
        answer:
          "A query language for APIs and a runtime for fulfilling those queries",
      },
      {
        question: "Which HTTP methods are commonly used in REST?",
        options: ["GET, POST, PUT, PATCH, DELETE", "SELECT, INSERT", "PUBLISH, SUBSCRIBE", "OPEN, CLOSE"],
        answer: "GET, POST, PUT, PATCH, DELETE",
      },
      {
        question: "In REST, what does a resource typically map to?",
        options: ["A URI/endpoint representing a domain entity", "A SQL table only", "A client component", "A browser tab"],
        answer: "A URI/endpoint representing a domain entity",
      },
      {
        question: "In GraphQL, what is a schema?",
        options: [
          "A type system that defines data and operations (queries/mutations)",
          "A list of REST endpoints",
          "A database migration file",
          "A server log format",
        ],
        answer:
          "A type system that defines data and operations (queries/mutations)",
      },
      {
        question: "Which statement about GraphQL requests is true?",
        options: [
          "They are typically sent to a single endpoint",
          "They require a unique endpoint per resource",
          "They cannot use HTTP",
          "They must be sent via WebSocket",
        ],
        answer: "They are typically sent to a single endpoint",
      },
      {
        question: "Which is a benefit of GraphQL over REST?",
        options: [
          "Clients can fetch exactly the data they need",
          "It requires no server implementation",
          "It replaces HTTPS",
          "It stores data automatically",
        ],
        answer: "Clients can fetch exactly the data they need",
      },
      {
        question: "What is over-fetching in REST?",
        options: [
          "Receiving more fields than needed because endpoints return fixed shapes",
          "Not receiving enough data",
          "Fetching from the wrong server",
          "Caching too many responses",
        ],
        answer:
          "Receiving more fields than needed because endpoints return fixed shapes",
      },
      {
        question: "What is a GraphQL mutation used for?",
        options: ["Modifying server data", "Reading data", "Logging", "Authentication only"],
        answer: "Modifying server data",
      },
      {
        question: "What format do REST APIs commonly use for responses?",
        options: ["JSON", "CSV", "XML only", "Binary only"],
        answer: "JSON",
      },
    ],
    intermediate: [
      {
        question: "How does GraphQL help reduce under-fetching?",
        options: [
          "Clients specify required fields in a single query",
          "By adding more REST endpoints",
          "By forcing fixed response shapes",
          "By disabling caching",
        ],
        answer: "Clients specify required fields in a single query",
      },
      {
        question: "What are GraphQL resolvers?",
        options: [
          "Functions that map schema fields to actual data fetching",
          "Database connection strings",
          "Client-side cache entries",
          "HTTP headers for auth",
        ],
        answer: "Functions that map schema fields to actual data fetching",
      },
      {
        question: "How do REST and GraphQL differ in versioning?",
        options: [
          "REST commonly uses versioned URLs; GraphQL evolves the schema without new endpoints",
          "Both require new endpoints per version",
          "GraphQL must use v1/v2 paths",
          "Neither supports changes",
        ],
        answer:
          "REST commonly uses versioned URLs; GraphQL evolves the schema without new endpoints",
      },
      {
        question: "Which HTTP method is typically used for GraphQL queries and mutations?",
        options: ["POST (and sometimes GET)", "PUT only", "DELETE only", "HEAD only"],
        answer: "POST (and sometimes GET)",
      },
      {
        question: "How are errors represented in GraphQL responses?",
        options: [
          "In an 'errors' array alongside 'data'",
          "As HTTP status text only",
          "Only via HTTP 500",
          "In cookies",
        ],
        answer: "In an 'errors' array alongside 'data'",
      },
      {
        question: "Which best describes REST endpoint granularity?",
        options: [
          "Multiple endpoints each tailored to a resource or use case",
          "A single endpoint for all needs",
          "No endpoints",
          "Endpoints only for authentication",
        ],
        answer:
          "Multiple endpoints each tailored to a resource or use case",
      },
      {
        question: "What is a N+1 query problem in GraphQL?",
        options: [
          "Inefficient data fetching where one query triggers many sub-queries per item",
          "An authentication failure",
          "A pagination error",
          "A caching miss",
        ],
        answer:
          "Inefficient data fetching where one query triggers many sub-queries per item",
      },
      {
        question: "Which tool helps solve N+1 in GraphQL servers?",
        options: ["DataLoader", "Webpack", "Babel", "Redis Streams"],
        answer: "DataLoader",
      },
      {
        question: "How does caching typically differ?",
        options: [
          "REST can leverage HTTP-level caching easily; GraphQL often needs field-level or custom caching",
          "Both only use CDN caching",
          "GraphQL caches everything by default",
          "REST cannot be cached",
        ],
        answer:
          "REST can leverage HTTP-level caching easily; GraphQL often needs field-level or custom caching",
      },
      {
        question: "What is schema stitching/federation used for?",
        options: [
          "Combining multiple GraphQL services into one unified schema",
          "Joining SQL tables",
          "Merging REST endpoints",
          "Minifying schemas for production",
        ],
        answer: "Combining multiple GraphQL services into one unified schema",
      },
    ],
    advanced: [
      {
        question: "Which is a suitable use case to prefer REST over GraphQL?",
        options: [
          "Simple, cacheable resources with strong HTTP semantics",
          "Highly relational, flexible data selection by clients",
          "Real-time subscriptions as a core requirement",
          "Single endpoint orchestration",
        ],
        answer:
          "Simple, cacheable resources with strong HTTP semantics",
      },
      {
        question: "When might GraphQL be a better fit than REST?",
        options: [
          "When clients need to shape responses and avoid multiple round-trips",
          "When only file downloads are needed",
          "When only webhooks are used",
          "When only batch jobs are run",
        ],
        answer:
          "When clients need to shape responses and avoid multiple round-trips",
      },
      {
        question: "What is persisted queries in GraphQL?",
        options: [
          "Pre-registered queries identified by a hash to improve performance and security",
          "Queries saved in the database",
          "SQL queries converted to GraphQL",
          "Browser DevTools saved queries",
        ],
        answer:
          "Pre-registered queries identified by a hash to improve performance and security",
      },
      {
        question: "How are subscriptions different in GraphQL?",
        options: [
          "They enable real-time updates over websockets or similar transports",
          "They are just HTTP GET requests",
          "They are only server-to-server",
          "They are only for file uploads",
        ],
        answer:
          "They enable real-time updates over websockets or similar transports",
      },
      {
        question: "Which security consideration applies to GraphQL?",
        options: [
          "Query depth/complexity limiting to prevent expensive operations",
          "Disable HTTPS to reduce overhead",
          "Return stack traces to clients",
          "Allow introspection in production always",
        ],
        answer:
          "Query depth/complexity limiting to prevent expensive operations",
      },
      {
        question: "How can REST handle partial responses similar to GraphQL?",
        options: [
          "Sparse fieldsets via query params (e.g., fields=) and custom endpoints",
          "It cannot",
          "Using cookies",
          "By switching to SOAP",
        ],
        answer:
          "Sparse fieldsets via query params (e.g., fields=) and custom endpoints",
      },
      {
        question: "Which pattern helps evolve REST APIs without breaking clients?",
        options: [
          "Backward-compatible changes and HATEOAS",
          "Removing fields without notice",
          "Randomizing URLs",
          "Disabling caching",
        ],
        answer: "Backward-compatible changes and HATEOAS",
      },
      {
        question: "What is a GraphQL gateway useful for?",
        options: [
          "Centralizing auth, caching, and schema composition for multiple services",
          "Hosting static files",
          "Compiling TypeScript",
          "Rendering React on the server",
        ],
        answer:
          "Centralizing auth, caching, and schema composition for multiple services",
      },
      {
        question: "Which is a downside of GraphQL compared to REST?",
        options: [
          "More complex server implementation and caching strategies",
          "No type safety",
          "No documentation",
          "It cannot handle nested data",
        ],
        answer:
          "More complex server implementation and caching strategies",
      },
      {
        question: "Which HTTP caching header is most directly useful for REST GET responses?",
        options: ["ETag", "Set-Cookie", "Upgrade-Insecure-Requests", "Link"],
        answer: "ETag",
      },
    ],
  },
};
