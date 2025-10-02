
export const typescriptQuiz = {
  title: "TypeScript Quiz",
  questions: {
    beginner: [
      {
        question: "What is TypeScript?",
        options: [
          "A typed superset of JavaScript that compiles to plain JavaScript",
          "A CSS framework for building custom designs",
          "A database for storing and retrieving data",
          "A programming language for web development",
        ],
        answer: "A typed superset of JavaScript that compiles to plain JavaScript",
      },
      {
        question: "How do you declare a variable with a specific type in TypeScript?",
        options: ["let name: string = 'John';", "let name = 'John';", "string name = 'John';", "var name: string = 'John';"],
        answer: "let name: string = 'John';",
      },
      {
        question: "What are the basic types in TypeScript?",
        options: [
          "string, number, boolean, any, unknown",
          "string, integer, float, boolean",
          "char, int, double, bool",
          "text, numeric, logical, any",
        ],
        answer: "string, number, boolean, any, unknown",
      },
      {
        question: "How do you create an array of strings in TypeScript?",
        options: [
          "let names: string[] = ['John', 'Jane'];",
          "let names = ['John', 'Jane'];",
          "let names: Array<string> = ['John', 'Jane'];",
          "Both A and C",
        ],
        answer: "Both A and C",
      },
      {
        question: "What is a tuple in TypeScript?",
        options: [
          "An array with a fixed number of elements whose types are known",
          "A regular array with no restrictions on the types of its elements",
          "A special type of object",
          "A data structure that follows the Last-In, First-Out (LIFO) principle",
        ],
        answer: "An array with a fixed number of elements whose types are known",
      },
      {
        question: "What is an enum in TypeScript?",
        options: [
          "A way of giving more friendly names to sets of numeric values",
          "A special type of array",
          "A special type of object",
          "A data structure that follows the First-In, First-Out (FIFO) principle",
        ],
        answer: "A way of giving more friendly names to sets of numeric values",
      },
      {
        question: "How do you write a function with type annotations in TypeScript?",
        options: [
          "function add(a: number, b: number): number { return a + b; }",
          "function add(a, b) { return a + b; }",
          "function add(a: number, b: number) { return a + b; }",
          "function add(a, b): number { return a + b; }",
        ],
        answer: "function add(a: number, b: number): number { return a + b; }",
      },
      {
        question: "What is an interface in TypeScript?",
        options: [
          "A way to define the shape of an object",
          "A special type of class",
          "A special type of array",
          "A data structure that follows the Last-In, First-Out (LIFO) principle",
        ],
        answer: "A way to define the shape of an object",
      },
      {
        question: "What is a type alias in TypeScript?",
        options: [
          "A way to give a new name to a type",
          "A special type of class",
          "A special type of array",
          "A data structure that follows the Last-In, First-Out (LIFO) principle",
        ],
        answer: "A way to give a new name to a type",
      },
      {
        question: "What is the `any` type in TypeScript?",
        options: [
          "A type that can be of any type",
          "A type that can only be a string",
          "A type that can only be a number",
          "A type that can only be a boolean",
        ],
        answer: "A type that can be of any type",
      },
    ],
    intermediate: [
        {
        question: "What is a union type in TypeScript?",
        options: [
          "A type that can be one of several types",
          "A type that must be all of several types",
          "A special type of class",
          "A special type of array",
        ],
        answer: "A type that can be one of several types",
      },
      {
        question: "What is an intersection type in TypeScript?",
        options: [
          "A type that combines multiple types into one",
          "A type that can be one of several types",
          "A special type of class",
          "A special type of array",
        ],
        answer: "A type that combines multiple types into one",
      },
      {
        question: "What are generics in TypeScript?",
        options: [
          "A way to create reusable components that can work with a variety of types",
          "A special type of class",
          "A special type of array",
          "A data structure that follows the Last-In, First-Out (LIFO) principle",
        ],
        answer: "A way to create reusable components that can work with a variety of types",
      },
      {
        question: "What is a class in TypeScript?",
        options: [
          "A blueprint for creating objects",
          "A special type of function",
          "A special type of array",
          "A data structure that follows the Last-In, First-Out (LIFO) principle",
        ],
        answer: "A blueprint for creating objects",
      },
      {
        question: "What are access modifiers in TypeScript?",
        options: [
          "Keywords that control the visibility of class members (e.g., `public`, `private`, `protected`)",
          "Keywords that control the type of a variable",
          "Keywords that control the flow of a program",
          "Keywords that control the behavior of a function",
        ],
        answer: "Keywords that control the visibility of class members (e.g., `public`, `private`, `protected`)",
      },
      {
        question: "What is type inference in TypeScript?",
        options: [
          "The ability of the TypeScript compiler to infer the type of a variable based on its value",
          "The ability of the TypeScript compiler to automatically fix type errors",
          "The ability of the TypeScript compiler to generate documentation for your code",
          "The ability of the TypeScript compiler to transpile your code to JavaScript",
        ],
        answer: "The ability of the TypeScript compiler to infer the type of a variable based on its value",
      },
      {
        question: "What is a type assertion in TypeScript?",
        options: [
          "A way to tell the TypeScript compiler that you know more about the type of a value than it does",
          "A way to change the type of a variable",
          "A way to create a new type",
          "A way to delete a type",
        ],
        answer: "A way to tell the TypeScript compiler that you know more about the type of a value than it does",
      },
      {
        question: "What are utility types in TypeScript?",
        options: [
          "Types that help you manipulate other types (e.g., `Partial`, `Pick`, `Readonly`, `Record`)",
          "Types that are used for debugging purposes",
          "Types that are used for testing purposes",
          "Types that are used for documentation purposes",
        ],
        answer: "Types that help you manipulate other types (e.g., `Partial`, `Pick`, `Readonly`, `Record`)",
      },
      {
        question: "How do you use TypeScript with React?",
        options: [
          "By using a `.tsx` file extension and defining types for props and state",
          "By using a `.js` file extension and adding type annotations as comments",
          "By using a third-party library",
          "By using a special version of React that is written in TypeScript",
        ],
        answer: "By using a `.tsx` file extension and defining types for props and state",
      },
      {
        question: "What is the `unknown` type in TypeScript?",
        options: [
          "A type-safe counterpart of the `any` type",
          "A type that can only be a string",
          "A type that can only be a number",
          "A type that can only be a boolean",
        ],
        answer: "A type-safe counterpart of the `any` type",
      },
    ],
    advanced: [
        {
        question: "What are decorators in TypeScript?",
        options: [
          "A special kind of declaration that can be attached to a class declaration, method, accessor, property, or parameter",
          "A way to style your components",
          "A way to create animations",
          "A way to connect to a database",
        ],
        answer: "A special kind of declaration that can be attached to a class declaration, method, accessor, property, or parameter",
      },
      {
        question: "What are namespaces in TypeScript?",
        options: [
          "A way to organize your code into logical groups",
          "A way to create private variables",
          "A way to create static methods",
          "A way to create abstract classes",
        ],
        answer: "A way to organize your code into logical groups",
      },
      {
        question: "What are modules in TypeScript?",
        options: [
          "A way to organize your code into separate files",
          "A way to create private variables",
          "A way to create static methods",
          "A way to create abstract classes",
        ],
        answer: "A way to organize your code into separate files",
      },
      {
        question: "What is the difference between namespaces and modules in TypeScript?",
        options: [
          "Namespaces are a TypeScript-specific way to organize code, while modules are a standard JavaScript feature",
          "Modules are a TypeScript-specific way to organize code, while namespaces are a standard JavaScript feature",
          "There is no difference",
          "Namespaces are for small projects, while modules are for large projects",
        ],
        answer: "Namespaces are a TypeScript-specific way to organize code, while modules are a standard JavaScript feature",
      },
      {
        question: "What is declaration merging in TypeScript?",
        options: [
          "The ability of the TypeScript compiler to merge multiple declarations with the same name into a single declaration",
          "The ability of the TypeScript compiler to automatically fix type errors",
          "The ability of the TypeScript compiler to generate documentation for your code",
          "The ability of the TypeScript compiler to transpile your code to JavaScript",
        ],
        answer: "The ability of the TypeScript compiler to merge multiple declarations with the same name into a single declaration",
      },
      {
        question: "What is the `never` type in TypeScript?",
        options: [
          "A type that represents the type of values that never occur",
          "A type that can be of any type",
          "A type that can only be a string",
          "A type that can only be a number",
        ],
        answer: "A type that represents the type of values that never occur",
      },
      {
        question: "What is the `satisfies` operator in TypeScript?",
        options: [
          "A way to check if a value satisfies a certain type without changing its type",
          "A way to change the type of a variable",
          "A way to create a new type",
          "A way to delete a type",
        ],
        answer: "A way to check if a value satisfies a certain type without changing its type",
      },
      {
        question: "What is conditional types in TypeScript?",
        options: [
          "Types that select one of two possible types based on a condition",
          "Types that can be of any type",
          "Types that can only be a string",
          "Types that can only be a number",
        ],
        answer: "Types that select one of two possible types based on a condition",
      },
      {
        question: "What is mapped types in TypeScript?",
        options: [
          "Types that create new types by mapping over the properties of an existing type",
          "Types that can be of any type",
          "Types that can only be a string",
          "Types that can only be a number",
        ],
        answer: "Types that create new types by mapping over the properties of an existing type",
      },
      {
        question: "What is the `infer` keyword in TypeScript?",
        options: [
          "A keyword that allows you to infer the type of a generic type parameter within a conditional type",
          "A keyword that allows you to change the type of a variable",
          "A keyword that allows you to create a new type",
          "A keyword that allows you to delete a type",
        ],
        answer: "A keyword that allows you to infer the type of a generic type parameter within a conditional type",
      },
    ],
  },
};
