const nodejsQuestions = {
  beginner: [
    {
      question: "What is Node.js?",
      options: [
        "A JavaScript runtime built on Chrome's V8 JavaScript engine",
        "A JavaScript library for building user interfaces",
        "A database",
        "A programming language",
      ],
      answer: "A JavaScript runtime built on Chrome's V8 JavaScript engine",
    },
    {
      question: "What is npm?",
      options: [
        "Node Package Manager",
        "Node Programming Module",
        "Node Project Manager",
        "Node Package Module",
      ],
      answer: "Node Package Manager",
    },
    {
      question: "How do you import a module in Node.js using CommonJS syntax?",
      options: [
        "const myModule = require('my-module');",
        "import myModule from 'my-module';",
        "include('my-module');",
        "using myModule = require('my-module');",
      ],
      answer: "const myModule = require('my-module');",
    },
    {
      question: "What is the purpose of the `fs` module?",
      options: [
        "To interact with the file system",
        "To handle HTTP requests",
        "To create a web server",
        "To manage packages",
      ],
      answer: "To interact with the file system",
    },
    {
      question: "What is the event loop in Node.js?",
      options: [
        "A mechanism that allows Node.js to perform non-blocking I/O operations",
        "A loop that iterates over events in the browser",
        "A way to create loops in JavaScript",
        "A debugging tool",
      ],
      answer: "A mechanism that allows Node.js to perform non-blocking I/O operations",
    },
    {
      question: "How do you create a simple web server in Node.js?",
      options: [
        "Using the `http` module",
        "Using the `fs` module",
        "Using the `npm` module",
        "Using the `path` module",
      ],
      answer: "Using the `http` module",
    },
    {
      question: "What is Express.js?",
      options: [
        "A web application framework for Node.js",
        "A database for Node.js",
        "A templating engine",
        "A testing framework",
      ],
      answer: "A web application framework for Node.js",
    },
    {
      question: "What is middleware in Express.js?",
      options: [
        "Functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle",
        "A way to connect to a database",
        "A way to render HTML pages",
        "A way to handle errors",
      ],
      answer: "Functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle",
    },
    {
      question: "How do you define a route in Express.js?",
      options: [
        "app.get('/path', (req, res) => { ... });",
        "app.route('/path').handler((req, res) => { ... });",
        "app.on('/path', (req, res) => { ... });",
        "app.listen('/path', (req, res) => { ... });",
      ],
      answer: "app.get('/path', (req, res) => { ... });",
    },
    {
      question: "What is a REST API?",
      options: [
        "An architectural style for designing networked applications",
        "A database",
        "A programming language",
        "A JavaScript framework",
      ],
      answer: "An architectural style for designing networked applications",
    },
  ],
  intermediate: [
    {
      question: "What is the difference between `require` and `import`?",
      options: [
        "`require` is used for CommonJS modules, `import` is used for ES modules",
        "`import` is used for CommonJS modules, `require` is used for ES modules",
        "They are the same",
        "`require` is synchronous, `import` is asynchronous",
      ],
      answer: "`require` is used for CommonJS modules, `import` is used for ES modules",
    },
    {
      question: "How do you handle asynchronous operations in Node.js?",
      options: [
        "Callbacks",
        "Promises",
        "Async/await",
        "All of the above",
      ],
      answer: "All of the above",
    },
    {
      question: "What are streams in Node.js?",
      options: [
        "A way to handle reading/writing files, network communications, or any kind of end-to-end information exchange in an efficient way",
        "A type of data structure",
        "A way to create a web server",
        "A way to manage packages",
      ],
      answer: "A way to handle reading/writing files, network communications, or any kind of end-to-end information exchange in an efficient way",
    },
    {
      question: "What are Buffers in Node.js?",
      options: [
        "A temporary holding spot for data being moved from one place to another",
        "A way to store images",
        "A type of variable",
        "A way to handle errors",
      ],
      answer: "A temporary holding spot for data being moved from one place to another",
    },
    {
      question: "How do you handle errors in an Express.js application?",
      options: [
        "Using error-handling middleware",
        "Using `try...catch` blocks",
        "Using `.catch()` with Promises",
        "All of the above",
      ],
      answer: "All of the above",
    },
    {
      question: "What is the purpose of `process.env`?",
      options: [
        "To access environment variables",
        "To get the current working directory",
        "To exit the current process",
        "To get the process ID",
      ],
      answer: "To access environment variables",
    },
    {
      question: "What is the `path` module used for?",
      options: [
        "To handle and transform file paths",
        "To create a web server",
        "To interact with the file system",
        "To manage packages",
      ],
      answer: "To handle and transform file paths",
    },
    {
      question: "What is the difference between `npm install` and `npm ci`?",
      options: [
        "`npm ci` is meant for continuous integration and installs dependencies from `package-lock.json`",
        "`npm install` is meant for continuous integration and installs dependencies from `package-lock.json`",
        "They are the same",
        "There is no `npm ci` command",
      ],
      answer: "`npm ci` is meant for continuous integration and installs dependencies from `package-lock.json`",
    },
    {
      question: "How do you create a custom middleware in Express.js?",
      options: [
        "By creating a function that takes `req`, `res`, and `next` as arguments",
        "By extending the `express.Middleware` class",
        "By using the `express.custom()` method",
        "It's not possible to create custom middleware",
      ],
      answer: "By creating a function that takes `req`, `res`, and `next` as arguments",
    },
    {
      question: "What is the purpose of `next()` in Express.js middleware?",
      options: [
        "To pass control to the next middleware function",
        "To end the request-response cycle",
        "To send a response to the client",
        "To throw an error",
      ],
      answer: "To pass control to the next middleware function",
    },
  ],
  advanced: [
    {
      question: "What is the difference between `fork()` and `spawn()` in the `child_process` module?",
      options: [
        "`fork()` is a special case of `spawn()` for creating a new Node.js process, `spawn()` can run any command",
        "`spawn()` is a special case of `fork()` for creating a new Node.js process, `fork()` can run any command",
        "They are the same",
        "There is no `fork()` method",
      ],
      answer: "`fork()` is a special case of `spawn()` for creating a new Node.js process, `spawn()` can run any command",
    },
    {
      question: "What is clustering in Node.js?",
      options: [
        "A way to create child processes that share server ports, allowing for load balancing over multiple CPU cores",
        "A way to group related routes",
        "A way to manage packages",
        "A way to connect to a database",
      ],
      answer: "A way to create child processes that share server ports, allowing for load balancing over multiple CPU cores",
    },
    {
      question: "What is the purpose of the `v8` module?",
      options: [
        "To provide access to V8-specific APIs",
        "To create a web server",
        "To interact with the file system",
        "To manage packages",
      ],
      answer: "To provide access to V8-specific APIs",
    },
    {
      question: "How can you prevent SQL injection in a Node.js application?",
      options: [
        "Using parameterized queries or prepared statements",
        "By validating user input",
        "By using an ORM like Sequelize or TypeORM",
        "All of the above",
      ],
      answer: "All of the above",
    },
    {
      question: "What is rate limiting?",
      options: [
        "A technique to control the amount of incoming requests to a server",
        "A way to optimize database queries",
        "A way to handle errors",
        "A way to manage packages",
      ],
      answer: "A technique to control the amount of incoming requests to a server",
    },
    {
      question: "What is input sanitization?",
      options: [
        "The process of cleaning and filtering user input to prevent security vulnerabilities",
        "A way to validate user input",
        "A way to handle errors",
        "A way to manage packages",
      ],
      answer: "The process of cleaning and filtering user input to prevent security vulnerabilities",
    },
    {
      question: "What is the `worker_threads` module used for?",
      options: [
        "To run JavaScript in parallel on multiple threads",
        "To create a web server",
        "To interact with the file system",
        "To manage packages",
      ],
      answer: "To run JavaScript in parallel on multiple threads",
    },
    {
      question: "What is the difference between `setImmediate()` and `setTimeout(() => {}, 0)`?",
      options: [
        "`setImmediate()` is designed to execute a script once the current poll phase completes, `setTimeout()` schedules a script to be run after a minimum threshold in ms has elapsed",
        "`setTimeout()` is designed to execute a script once the current poll phase completes, `setImmediate()` schedules a script to be run after a minimum threshold in ms has elapsed",
        "They are the same",
        "There is no `setImmediate()` function",
      ],
      answer: "`setImmediate()` is designed to execute a script once the current poll phase completes, `setTimeout()` schedules a script to be run after a minimum threshold in ms has elapsed",
    },
    {
      question: "What is the Node.js `assert` module used for?",
      options: [
        "For writing tests",
        "For making assertions about code",
        "Both a and b",
        "None of the above",
      ],
      answer: "Both a and b",
    },
    {
      question: "What is the `os` module used for?",
      options: [
        "To provide operating system-related utility methods and properties",
        "To create a web server",
        "To interact with the file system",
        "To manage packages",
      ],
      answer: "To provide operating system-related utility methods and properties",
    },
  ],
};

export default nodejsQuestions;
