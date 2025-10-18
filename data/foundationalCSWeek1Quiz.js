/**
 * Foundational CS Week 1-2 Quiz - Programming Fundamentals
 * Topics: Variables, Data Types, Control Flow, Loops, Functions, OOP Basics
 */

export const foundationalCSWeek1Quiz = {
  id: "foundational-cs-week1",
  title: "Foundational CS Week 1-2: Programming Fundamentals",
  description: "Test your understanding of variables, control flow, loops, functions, and object-oriented programming basics.",
  difficulty: "Beginner",
  category: "Programming Fundamentals",
  estimatedTime: "30 minutes",
  passingScore: 70,
  questions: [
    // Beginner Level (10 questions)
    {
      id: "w1q1",
      question: "What is a variable in programming?",
      options: [
        "A fixed value that never changes",
        "A container for storing data values",
        "A type of function",
        "A mathematical operator"
      ],
      correctAnswer: 1,
      explanation: "A variable is a container used to store data values that can be referenced and manipulated in a program.",
      difficulty: "beginner",
      topic: "Variables and Data Types"
    },
    {
      id: "w1q2",
      question: "Which of these is a valid variable name in most programming languages?",
      options: [
        "2myVariable",
        "my-variable",
        "myVariable",
        "my variable"
      ],
      correctAnswer: 2,
      explanation: "Variable names typically must start with a letter or underscore, and cannot contain spaces or hyphens. 'myVariable' follows camelCase convention.",
      difficulty: "beginner",
      topic: "Variables and Data Types"
    },
    {
      id: "w1q3",
      question: "What is the purpose of an if-else statement?",
      options: [
        "To repeat code multiple times",
        "To make decisions based on conditions",
        "To define functions",
        "To declare variables"
      ],
      correctAnswer: 1,
      explanation: "If-else statements allow programs to make decisions and execute different code blocks based on whether conditions are true or false.",
      difficulty: "beginner",
      topic: "Control Flow"
    },
    {
      id: "w1q4",
      question: "Which loop is guaranteed to execute at least once?",
      options: [
        "for loop",
        "while loop",
        "do-while loop",
        "None of the above"
      ],
      correctAnswer: 2,
      explanation: "A do-while loop checks the condition after executing the code block, ensuring it runs at least once.",
      difficulty: "beginner",
      topic: "Loops and Iteration"
    },
    {
      id: "w1q5",
      question: "What is a function?",
      options: [
        "A variable that stores multiple values",
        "A reusable block of code that performs a specific task",
        "A type of loop",
        "A conditional statement"
      ],
      correctAnswer: 1,
      explanation: "A function is a reusable block of code designed to perform a specific task, improving code organization and reusability.",
      difficulty: "beginner",
      topic: "Functions"
    },
    {
      id: "w1q6",
      question: "What does OOP stand for?",
      options: [
        "Object-Oriented Programming",
        "Operational Output Processing",
        "Organized Operation Protocol",
        "Online Object Platform"
      ],
      correctAnswer: 0,
      explanation: "OOP stands for Object-Oriented Programming, a programming paradigm based on the concept of objects containing data and methods.",
      difficulty: "beginner",
      topic: "OOP Basics"
    },
    {
      id: "w1q7",
      question: "What is the data type of the value 'Hello World'?",
      options: [
        "Integer",
        "String",
        "Boolean",
        "Float"
      ],
      correctAnswer: 1,
      explanation: "Text enclosed in quotes is a String data type, used to represent sequences of characters.",
      difficulty: "beginner",
      topic: "Variables and Data Types"
    },
    {
      id: "w1q8",
      question: "What is the purpose of a return statement in a function?",
      options: [
        "To end the program",
        "To send a value back to the caller",
        "To declare a variable",
        "To create a loop"
      ],
      correctAnswer: 1,
      explanation: "The return statement sends a value back from the function to the code that called it, and exits the function.",
      difficulty: "beginner",
      topic: "Functions"
    },
    {
      id: "w1q9",
      question: "Which operator is used for assignment in most programming languages?",
      options: [
        "==",
        "=",
        "===",
        ":="
      ],
      correctAnswer: 1,
      explanation: "The single equals sign (=) is the assignment operator used to assign values to variables in most programming languages.",
      difficulty: "beginner",
      topic: "Variables and Data Types"
    },
    {
      id: "w1q10",
      question: "What is a class in object-oriented programming?",
      options: [
        "A type of loop",
        "A blueprint for creating objects",
        "A conditional statement",
        "A data type"
      ],
      correctAnswer: 1,
      explanation: "A class is a blueprint or template that defines the properties and methods that objects created from it will have.",
      difficulty: "beginner",
      topic: "OOP Basics"
    },

    // Intermediate Level (10 questions)
    {
      id: "w1q11",
      question: "What is the difference between '==' and '===' in JavaScript?",
      options: [
        "No difference",
        "'==' checks value only, '===' checks value and type",
        "'===' is faster",
        "'==' is deprecated"
      ],
      correctAnswer: 1,
      explanation: "'==' performs type coercion and compares values, while '===' (strict equality) compares both value and type without coercion.",
      difficulty: "intermediate",
      topic: "Control Flow"
    },
    {
      id: "w1q12",
      question: "What is encapsulation in OOP?",
      options: [
        "Creating multiple objects",
        "Hiding internal details and exposing only necessary parts",
        "Copying code from one class to another",
        "Running code in parallel"
      ],
      correctAnswer: 1,
      explanation: "Encapsulation bundles data and methods together while hiding internal implementation details, exposing only what's necessary through a public interface.",
      difficulty: "intermediate",
      topic: "OOP Basics"
    },
    {
      id: "w1q13",
      question: "What is the scope of a variable declared inside a function?",
      options: [
        "Global scope",
        "Local scope (function scope)",
        "Block scope",
        "Module scope"
      ],
      correctAnswer: 1,
      explanation: "Variables declared inside a function have local/function scope, meaning they're only accessible within that function.",
      difficulty: "intermediate",
      topic: "Variables and Data Types"
    },
    {
      id: "w1q14",
      question: "What is a parameter in a function?",
      options: [
        "The return value",
        "A variable listed in the function definition",
        "The function name",
        "A loop counter"
      ],
      correctAnswer: 1,
      explanation: "Parameters are variables listed in the function definition that receive values (arguments) when the function is called.",
      difficulty: "intermediate",
      topic: "Functions"
    },
    {
      id: "w1q15",
      question: "What does the 'break' statement do in a loop?",
      options: [
        "Pauses the loop temporarily",
        "Exits the loop immediately",
        "Skips to the next iteration",
        "Restarts the loop"
      ],
      correctAnswer: 1,
      explanation: "The 'break' statement immediately terminates the loop and transfers control to the statement following the loop.",
      difficulty: "intermediate",
      topic: "Loops and Iteration"
    },
    {
      id: "w1q16",
      question: "What is inheritance in OOP?",
      options: [
        "Copying code between files",
        "A mechanism where a class acquires properties from another class",
        "Creating multiple instances",
        "Hiding data"
      ],
      correctAnswer: 1,
      explanation: "Inheritance allows a class (child/derived) to inherit properties and methods from another class (parent/base), promoting code reuse.",
      difficulty: "intermediate",
      topic: "OOP Basics"
    },
    {
      id: "w1q17",
      question: "What is the difference between 'break' and 'continue'?",
      options: [
        "No difference",
        "'break' exits the loop, 'continue' skips to next iteration",
        "'continue' exits the loop, 'break' skips to next iteration",
        "Both exit the loop"
      ],
      correctAnswer: 1,
      explanation: "'break' terminates the entire loop, while 'continue' skips the remaining code in the current iteration and moves to the next one.",
      difficulty: "intermediate",
      topic: "Loops and Iteration"
    },
    {
      id: "w1q18",
      question: "What is a constructor in a class?",
      options: [
        "A function that destroys objects",
        "A special method called when an object is created",
        "A variable in the class",
        "A type of loop"
      ],
      correctAnswer: 1,
      explanation: "A constructor is a special method automatically called when an object is instantiated, used to initialize the object's properties.",
      difficulty: "intermediate",
      topic: "OOP Basics"
    },
    {
      id: "w1q19",
      question: "What is the difference between parameters and arguments?",
      options: [
        "No difference - they're the same",
        "Parameters are in definition, arguments are actual values passed",
        "Arguments are in definition, parameters are values passed",
        "Parameters are for functions, arguments are for loops"
      ],
      correctAnswer: 1,
      explanation: "Parameters are variables in the function definition, while arguments are the actual values passed to the function when it's called.",
      difficulty: "intermediate",
      topic: "Functions"
    },
    {
      id: "w1q20",
      question: "What is type coercion?",
      options: [
        "Forcing a data type change",
        "Automatic conversion of values from one type to another",
        "A syntax error",
        "Variable declaration"
      ],
      correctAnswer: 1,
      explanation: "Type coercion is the automatic or implicit conversion of values from one data type to another by the programming language.",
      difficulty: "intermediate",
      topic: "Variables and Data Types"
    },

    // Advanced Level (10 questions)
    {
      id: "w1q21",
      question: "What is polymorphism in OOP?",
      options: [
        "Having multiple constructors",
        "The ability of different objects to respond to the same message in different ways",
        "Creating multiple classes",
        "Using multiple programming languages"
      ],
      correctAnswer: 1,
      explanation: "Polymorphism allows objects of different classes to be treated as objects of a common parent class, responding to the same methods in their own way.",
      difficulty: "advanced",
      topic: "OOP Basics"
    },
    {
      id: "w1q22",
      question: "What is a closure in programming?",
      options: [
        "A way to close a program",
        "A function with access to variables in its outer scope",
        "An if-else statement",
        "A type of loop"
      ],
      correctAnswer: 1,
      explanation: "A closure is a function that retains access to variables in its outer (enclosing) scope, even after the outer function has finished executing.",
      difficulty: "advanced",
      topic: "Functions"
    },
    {
      id: "w1q23",
      question: "What is method overloading?",
      options: [
        "Using too many methods",
        "Defining multiple methods with the same name but different parameters",
        "Calling methods repeatedly",
        "Inheriting too many methods"
      ],
      correctAnswer: 1,
      explanation: "Method overloading allows multiple methods with the same name but different parameter lists (number, type, or order) in the same class.",
      difficulty: "advanced",
      topic: "OOP Basics"
    },
    {
      id: "w1q24",
      question: "What is the difference between deep copy and shallow copy?",
      options: [
        "No difference",
        "Deep copy copies all nested objects, shallow copy only copies references",
        "Shallow copy is faster",
        "Deep copy is always better"
      ],
      correctAnswer: 1,
      explanation: "A shallow copy duplicates the object but references nested objects, while a deep copy recursively duplicates all nested objects.",
      difficulty: "advanced",
      topic: "Variables and Data Types"
    },
    {
      id: "w1q25",
      question: "What is abstraction in OOP?",
      options: [
        "Making code complicated",
        "Hiding complex implementation details and showing only essential features",
        "Creating abstract art",
        "Using abstract keywords"
      ],
      correctAnswer: 1,
      explanation: "Abstraction involves hiding complex implementation details and exposing only the essential features, simplifying the interface.",
      difficulty: "advanced",
      topic: "OOP Basics"
    },
    {
      id: "w1q26",
      question: "What is a higher-order function?",
      options: [
        "A function with high complexity",
        "A function that takes functions as arguments or returns a function",
        "A function at the top of the file",
        "A built-in function"
      ],
      correctAnswer: 1,
      explanation: "A higher-order function either takes one or more functions as arguments, returns a function, or both.",
      difficulty: "advanced",
      topic: "Functions"
    },
    {
      id: "w1q27",
      question: "What is the principle of 'DRY' in programming?",
      options: [
        "Don't Repeat Yourself",
        "Do Research Yearly",
        "Debug Rapidly Yearly",
        "Delete Redundant Yields"
      ],
      correctAnswer: 0,
      explanation: "DRY (Don't Repeat Yourself) is a principle aimed at reducing repetition by abstracting common functionality into reusable components.",
      difficulty: "advanced",
      topic: "Programming Principles"
    },
    {
      id: "w1q28",
      question: "What is the difference between method overriding and method overloading?",
      options: [
        "They are the same",
        "Overriding redefines parent method in child, overloading has same name different parameters",
        "Overloading is only for constructors",
        "Overriding is not allowed"
      ],
      correctAnswer: 1,
      explanation: "Overriding redefines a parent class method in a child class with the same signature. Overloading creates multiple methods with the same name but different parameters.",
      difficulty: "advanced",
      topic: "OOP Basics"
    },
    {
      id: "w1q29",
      question: "What is the 'this' keyword used for in OOP?",
      options: [
        "To create objects",
        "To refer to the current object instance",
        "To inherit from parent class",
        "To define static methods"
      ],
      correctAnswer: 1,
      explanation: "'this' is a reference to the current object instance, used to access the object's properties and methods from within the class.",
      difficulty: "advanced",
      topic: "OOP Basics"
    },
    {
      id: "w1q30",
      question: "What is hoisting in JavaScript?",
      options: [
        "Moving code to the cloud",
        "Moving variable and function declarations to the top of their scope during compilation",
        "Optimizing code performance",
        "A syntax error"
      ],
      correctAnswer: 1,
      explanation: "Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their containing scope during the compilation phase.",
      difficulty: "advanced",
      topic: "Variables and Data Types"
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
      "Variables and Data Types",
      "Control Flow",
      "Loops and Iteration",
      "Functions",
      "OOP Basics",
      "Programming Principles"
    ],
    createdAt: "2025-01-20",
    version: "1.0"
  }
};

export default foundationalCSWeek1Quiz;