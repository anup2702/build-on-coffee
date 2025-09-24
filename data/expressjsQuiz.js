
export const expressjsQuiz = {
  title: "Express.js Quiz",
  questions: {
    beginner: [
      {
        question: "What is Express.js?",
        options: [
          "A minimal and flexible Node.js web application framework",
          "A front-end JavaScript library for building user interfaces",
          "A database for storing and retrieving data",
          "A programming language for web development",
        ],
        answer: "A minimal and flexible Node.js web application framework",
      },
      {
        question: "How do you install Express.js?",
        options: [
          "npm install express",
          "npm install express.js",
          "npm get express",
          "npm add express",
        ],
        answer: "npm install express",
      },
      {
        question: "What is middleware in Express.js?",
        options: [
          "Functions that have access to the request and response objects",
          "A way to connect to a database",
          "A template engine for rendering views",
          "A tool for debugging Express.js applications",
        ],
        answer: "Functions that have access to the request and response objects",
      },
      {
        question: "How do you create a simple Express.js server?",
        options: [
          "const express = require('express'); const app = express(); app.listen(3000);",
          "const http = require('http'); http.createServer().listen(3000);",
          "const server = new Express(); server.start();",
          "const app = new Application(); app.run();",
        ],
        answer: "const express = require('express'); const app = express(); app.listen(3000);",
      },
      {
        question: "How do you handle a GET request in Express.js?",
        options: [
          "app.get('/', (req, res) => { res.send('Hello World!'); });",
          "app.post('/', (req, res) => { res.send('Hello World!'); });",
          "app.on('get', (req, res) => { res.send('Hello World!'); });",
          "app.handle('GET', '/', (req, res) => { res.send('Hello World!'); });",
        ],
        answer: "app.get('/', (req, res) => { res.send('Hello World!'); });",
      },
      {
        question: "How do you get the value of a route parameter in Express.js?",
        options: ["req.params", "req.query", "req.body", "req.headers"],
        answer: "req.params",
      },
      {
        question: "How do you get the value of a query string parameter in Express.js?",
        options: ["req.query", "req.params", "req.body", "req.headers"],
        answer: "req.query",
      },
      {
        question: "How do you serve static files in Express.js?",
        options: [
          "app.use(express.static('public'));",
          "app.serve('public');",
          "app.static('public');",
          "app.files('public');",
        ],
        answer: "app.use(express.static('public'));",
      },
      {
        question: "What is the purpose of the `res.send()` method in Express.js?",
        options: [
          "To send a response to the client",
          "To receive a request from the client",
          "To connect to a database",
          "To render a view",
        ],
        answer: "To send a response to the client",
      },
      {
        question: "What is the purpose of the `res.json()` method in Express.js?",
        options: [
          "To send a JSON response to the client",
          "To send an HTML response to the client",
          "To send a plain text response to the client",
          "To send a file to the client",
        ],
        answer: "To send a JSON response to the client",
      },
    ],
    intermediate: [
        {
        question: "How do you create a custom middleware in Express.js?",
        options: [
          "By creating a function that takes `req`, `res`, and `next` as arguments",
          "By using the `app.middleware()` method",
          "By creating a class that extends `express.Middleware`",
          "By using the `app.on('middleware')` event",
        ],
        answer: "By creating a function that takes `req`, `res`, and `next` as arguments",
      },
      {
        question: "What is the purpose of the `next()` function in Express.js middleware?",
        options: [
          "To pass control to the next middleware function in the stack",
          "To end the request-response cycle",
          "To send a response to the client",
          "To receive a request from the client",
        ],
        answer: "To pass control to the next middleware function in the stack",
      },
      {
        question: "How do you handle errors in Express.js?",
        options: [
          "By creating an error-handling middleware function that takes `err`, `req`, `res`, and `next` as arguments",
          "By using a `try...catch` block in every route handler",
          "By using the `app.on('error')` event",
          "By using a third-party library",
        ],
        answer: "By creating an error-handling middleware function that takes `err`, `req`, `res`, and `next` as arguments",
      },
      {
        question: "What is a template engine in Express.js?",
        options: [
          "A tool that allows you to use static template files in your application",
          "A way to connect to a database",
          "A middleware for parsing request bodies",
          "A tool for debugging Express.js applications",
        ],
        answer: "A tool that allows you to use static template files in your application",
      },
      {
        question: "How do you use a template engine like EJS in Express.js?",
        options: [
          "app.set('view engine', 'ejs');",
          "app.use(ejs());",
          "app.engine('ejs', require('ejs').__express);",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        question: "What is a RESTful API?",
        options: [
          "An architectural style for designing networked applications",
          "A specific technology for building APIs",
          "A database for storing and retrieving data",
          "A programming language for web development",
        ],
        answer: "An architectural style for designing networked applications",
      },
      {
        question: "How do you handle a POST request in Express.js?",
        options: [
          "app.post('/', (req, res) => { res.send('Hello World!'); });",
          "app.get('/', (req, res) => { res.send('Hello World!'); });",
          "app.on('post', (req, res) => { res.send('Hello World!'); });",
          "app.handle('POST', '/', (req, res) => { res.send('Hello World!'); });",
        ],
        answer: "app.post('/', (req, res) => { res.send('Hello World!'); });",
      },
      {
        question: "How do you get the data from a POST request in Express.js?",
        options: ["req.body", "req.params", "req.query", "req.headers"],
        answer: "req.body",
      },
      {
        question: "What is the purpose of the `express.Router` class?",
        options: [
          "To create a modular, mountable route handler",
          "To create a new Express.js application",
          "To connect to a database",
          "To render a view",
        ],
        answer: "To create a modular, mountable route handler",
      },
      {
        question: "How do you use the `express.Router` class?",
        options: [
          "const router = express.Router(); router.get('/', (req, res) => { res.send('Hello World!'); }); app.use(router);",
          "const router = new express.Router(); router.get('/', (req, res) => { res.send('Hello World!'); }); app.add(router);",
          "const router = express.Router.create(); router.get('/', (req, res) => { res.send('Hello World!'); }); app.mount(router);",
          "const router = express.Router.new(); router.get('/', (req, res) => { res.send('Hello World!'); }); app.addRouter(router);",
        ],
        answer: "const router = express.Router(); router.get('/', (req, res) => { res.send('Hello World!'); }); app.use(router);",
      },
    ],
    advanced: [
        {
        question: "What is the purpose of the `app.locals` object in Express.js?",
        options: [
          "To store variables that are local to the application",
          "To store variables that are local to a specific request",
          "To store variables that are local to a specific response",
          "To store variables that are local to a specific middleware",
        ],
        answer: "To store variables that are local to the application",
      },
      {
        question: "What is the purpose of the `res.locals` object in Express.js?",
        options: [
          "To store variables that are scoped to the request and therefore available only to the view(s) rendered during that request/response cycle",
          "To store variables that are local to the application",
          "To store variables that are local to a specific middleware",
          "To store variables that are local to a specific route handler",
        ],
        answer: "To store variables that are scoped to the request and therefore available only to the view(s) rendered during that request/response cycle",
      },
      {
        question: "How do you handle file uploads in Express.js?",
        options: [
          "By using a middleware library like `multer`",
          "By using the built-in `express.static()` middleware",
          "By using the `fs` module to read the file from the request body",
          "By using a third-party service for file uploads",
        ],
        answer: "By using a middleware library like `multer`",
      },
      {
        question: "How do you implement authentication in an Express.js application?",
        options: [
          "By using a library like Passport.js or JWT",
          "By building your own authentication system from scratch",
          "By using a third-party service like Auth0",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        question: "How do you implement sessions in an Express.js application?",
        options: [
          "By using a middleware library like `express-session`",
          "By using a database to store session data",
          "By using a third-party service for session management",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        question: "How do you implement caching in an Express.js application?",
        options: [
          "By setting the `Cache-Control` header in the response",
          "By using a middleware library like `apicache`",
          "By using a reverse proxy like Nginx",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        question: "How do you secure an Express.js application?",
        options: [
          "By using a library like Helmet.js to set various HTTP headers",
          "By validating user input to prevent injection attacks",
          "By using a CSRF token to prevent cross-site request forgery",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        question: "How do you test an Express.js application?",
        options: [
          "By using a library like Supertest to make HTTP requests to your application",
          "By using a library like Jest or Mocha to write unit tests for your route handlers and middleware",
          "By using a tool like Postman to manually test your API endpoints",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        question: "How do you deploy an Express.js application?",
        options: [
          "By using a platform like Heroku or AWS",
          "By using a traditional server with a process manager like PM2",
          "By using a containerization technology like Docker",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        question: "What is the purpose of the `NODE_ENV` environment variable?",
        options: [
          "To specify the environment in which the application is running (e.g., `development` or `production`)",
          "To set the port number for the application",
          "To set the database connection string",
          "To set the secret key for signing cookies",
        ],
        answer: "To specify the environment in which the application is running (e.g., `development` or `production`)",
      },
    ],
  },
};
