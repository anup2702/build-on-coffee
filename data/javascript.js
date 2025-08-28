const javascriptQuestions = {
  beginner: [
    {
      question: "What is the result of `typeof null`?",
      options: ["'object'", "'null'", "'undefined'", "'number'"],
      answer: "'object'",
    },
    {
      question: "Which of the following is a falsy value in JavaScript?",
      options: ["'0'", "0", "[]", "{}"],
      answer: "0",
    },
    {
        question: "What does the `===` operator do?",
        options: ["Compares for equality without type conversion", "Compares for equality with type conversion", "Assigns a value to a variable", "Checks if a value is null"],
        answer: "Compares for equality without type conversion",
    },
    {
        question: "How do you declare a variable that cannot be reassigned?",
        options: ["let", "var", "const", "static"],
        answer: "const",
    },
    {
        question: "What is the correct way to write a single line comment in JavaScript?",
        options: ["// This is a comment", "<!-- This is a comment -->", "/* This is a comment */", "** This is a comment **"],
        answer: "// This is a comment",
    },
    {
        question: "Which built-in method returns the length of a string?",
        options: ["size()", "length()", "length", "count()"],
        answer: "length",
    },
    {
        question: "How do you create a function in JavaScript?",
        options: ["function:myFunction()", "function = myFunction()", "function myFunction()", "create function myFunction()"],
        answer: "function myFunction()",
    },
    {
        question: "How do you call a function named 'myFunction'?",
        options: ["call myFunction()", "myFunction()", "call function myFunction", "execute myFunction()"],
        answer: "myFunction()",
    },
    {
        question: "How to write an IF statement in JavaScript?",
        options: ["if i = 5 then", "if (i == 5)", "if i == 5", "if i = 5"],
        answer: "if (i == 5)",
    },
    {
        question: "How does a FOR loop start?",
        options: ["for (i = 0; i <= 5; i++)", "for (i <= 5; i++)", "for i = 1 to 5", "for (i = 0; i <= 5)"],
        answer: "for (i = 0; i <= 5; i++)",
    }
  ],
  intermediate: [
    {
      question: "What is a closure in JavaScript?",
      options: [
        "A function having access to the parent scope, even after the parent function has closed.",
        "A combination of a function and the lexical environment within which that function was declared.",
        "A way to create private variables.",
        "All of the above.",
      ],
      answer: "All of the above.",
    },
    {
      question: "What is the difference between `.call` and `.apply`?",
      options: [
        "They are identical.",
        "`.call` takes a list of arguments, while `.apply` takes an array of arguments.",
        "`.apply` takes a list of arguments, while `.call` takes an array of arguments.",
        "`.call` is for classes, `.apply` is for functions.",
      ],
      answer: "`.call` takes a list of arguments, while `.apply` takes an array of arguments.",
    },
    {
        question: "What does `this` refer to in an arrow function?",
        options: ["The object that called the function", "The global object (window/global)", "The lexical scope's `this`", "null"],
        answer: "The lexical scope's `this`",
    },
    {
        question: "What is prototypal inheritance?",
        options: ["A method for creating classes", "A way for objects to inherit properties from other objects", "A design pattern for creating modules", "A way to handle asynchronous operations"],
        answer: "A way for objects to inherit properties from other objects",
    },
    {
        question: "What is the event loop?",
        options: ["A loop that iterates over DOM events", "A mechanism that enables non-blocking operations by offloading operations to the system kernel whenever possible", "A way to create loops in JavaScript", "A debugging tool"],
        answer: "A mechanism that enables non-blocking operations by offloading operations to the system kernel whenever possible",
    },
    {
        question: "What is a Promise?",
        options: ["An object representing the eventual completion or failure of an asynchronous operation", "A callback function", "A type of variable", "A way to create loops"],
        answer: "An object representing the eventual completion or failure of an asynchronous operation",
    },
    {
        question: "What is the difference between `let` and `var`?",
        options: ["`let` is function-scoped, `var` is block-scoped", "`let` is block-scoped, `var` is function-scoped", "There is no difference", "`let` can be reassigned, `var` cannot"],
        answer: "`let` is block-scoped, `var` is function-scoped",
    },
    {
        question: "How do you handle errors in Promises?",
        options: ["Using `.catch()`", "Using a `try...catch` block", "Using `.error()`", "Using `.finally()`"],
        answer: "Using `.catch()`",
    },
    {
        question: "What is the purpose of the `map` method on arrays?",
        options: ["To iterate over an array and perform a side effect for each element", "To create a new array with the results of calling a provided function on every element", "To check if at least one element in the array passes a test", "To reduce the array to a single value"],
        answer: "To create a new array with the results of calling a provided function on every element",
    },
    {
        question: "What is hoisting in JavaScript?",
        options: ["A mechanism where variables and function declarations are moved to the top of their containing scope during the compile phase", "A way to lift heavy objects", "A way to make code run faster", "A way to handle events"],
        answer: "A mechanism where variables and function declarations are moved to the top of their containing scope during the compile phase",
    }
  ],
  advanced: [
    {
      question: "What is the difference between `Promise.all` and `Promise.race`?",
      options: [
        "`Promise.all` resolves when all promises resolve, `Promise.race` resolves when the first promise resolves or rejects.",
        "`Promise.race` resolves when all promises resolve, `Promise.all` resolves when the first promise resolves or rejects.",
        "They are the same.",
        "There is no `Promise.race`.",
      ],
      answer: "`Promise.all` resolves when all promises resolve, `Promise.race` resolves when the first promise resolves or rejects.",
    },
    {
      question: "What are higher-order functions?",
      options: [
        "Functions that operate on other functions, either by taking them as arguments or by returning them.",
        "Functions that are defined at the top level of a script.",
        "Functions that are asynchronous.",
        "Functions that are part of the JavaScript standard library.",
      ],
      answer: "Functions that operate on other functions, either by taking them as arguments or by returning them.",
    },
    {
        question: "What is the `async/await` syntax used for?",
        options: ["To write asynchronous code that looks synchronous", "To create classes", "To define variables", "To handle DOM events"],
        answer: "To write asynchronous code that looks synchronous",
    },
    {
        question: "What are ES6 Modules?",
        options: ["A way to organize code into reusable pieces", "A type of function", "A way to handle errors", "A way to style web pages"],
        answer: "A way to organize code into reusable pieces",
    },
    {
        question: "What is the difference between `export default` and `export`?",
        options: ["A module can have multiple named exports but only one default export", "A module can have multiple default exports but only one named export", "There is no difference", "`export default` is for classes, `export` is for functions"],
        answer: "A module can have multiple named exports but only one default export",
    },
    {
        question: "What is tree shaking?",
        options: ["A term for dead-code elimination, especially for ES6 modules", "A way to debug code", "A way to optimize images", "A way to animate DOM elements"],
        answer: "A term for dead-code elimination, especially for ES6 modules",
    },
    {
        question: "What is the `this` binding in JavaScript?",
        options: ["The object that a function is a method of", "The global object", "The object that is currently executing", "It depends on how the function is called"],
        answer: "It depends on how the function is called",
    },
    {
        question: "What is the difference between `null` and `undefined`?",
        options: ["`undefined` means a variable has been declared but has not yet been assigned a value, `null` is an assignment value", "`null` means a variable has been declared but has not yet been assigned a value, `undefined` is an assignment value", "They are the same", "There is no `null` in JavaScript"],
        answer: "`undefined` means a variable has been declared but has not yet been assigned a value, `null` is an assignment value",
    },
    {
        question: "What is a pure function?",
        options: ["A function that, given the same input, will always return the same output and has no side effects", "A function that has no parameters", "A function that only returns numbers", "A function that is part of the JavaScript standard library"],
        answer: "A function that, given the same input, will always return the same output and has no side effects",
    },
    {
        question: "What is memoization?",
        options: ["An optimization technique used to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again", "A way to handle memory leaks", "A way to write comments in code", "A way to create private variables"],
        answer: "An optimization technique used to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again",
    }
  ],
};

export default javascriptQuestions;
