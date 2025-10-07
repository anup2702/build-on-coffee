export const designPatternsQuiz = {
  title: "Design Patterns in JavaScript & React Quiz",
  questions: {
    beginner: [
      {
        question: "What is a design pattern in software development?",
        options: [
          "A reusable solution to a commonly occurring problem",
          "A strict set of rules for writing code",
          "A specific algorithm for solving a problem",
          "A library or framework",
        ],
        answer: "A reusable solution to a commonly occurring problem",
      },
      {
        question: "Which of the following is a creational design pattern?",
        options: [
          "Observer Pattern",
          "Singleton Pattern",
          "Decorator Pattern",
          "Strategy Pattern",
        ],
        answer: "Singleton Pattern",
      },
      {
        question: "What is the main purpose of the Singleton Pattern?",
        options: [
          "To create multiple instances of an object",
          "To ensure that a class has only one instance and provide a global point of access to it",
          "To create a family of related objects",
          "To add new functionality to an object dynamically",
        ],
        answer: "To ensure that a class has only one instance and provide a global point of access to it",
      },
      {
        question: "Which design pattern is often used in React for managing state?",
        options: [
          "Provider Pattern",
          "Module Pattern",
          "Factory Pattern",
          "Mixin Pattern",
        ],
        answer: "Provider Pattern",
      },
      {
        question: "What is the Observer Pattern?",
        options: [
          "A pattern where an object, called the subject, maintains a list of its dependents, called observers, and notifies them automatically of any state changes",
          "A pattern that allows you to create objects without specifying the exact class of object that will be created",
          "A pattern that allows you to add new functionality to an object without altering its structure",
          "A pattern that allows you to define a family of algorithms, encapsulate each one, and make them interchangeable",
        ],
        answer: "A pattern where an object, called the subject, maintains a list of its dependents, called observers, and notifies them automatically of any state changes",
      },
      {
        question: "Which of the following is a structural design pattern?",
        options: [
          "Factory Pattern",
          "Decorator Pattern",
          "Command Pattern",
          "Iterator Pattern",
        ],
        answer: "Decorator Pattern",
      },
      {
        question: "What is the purpose of the Factory Pattern?",
        options: [
          "To create objects without exposing the creation logic to the client",
          "To ensure that a class has only one instance",
          "To provide a simplified interface to a complex system",
          "To add new functionality to an object dynamically",
        ],
        answer: "To create objects without exposing the creation logic to the client",
      },
      {
        question: "Which of the following is a behavioral design pattern?",
        options: [
          "Adapter Pattern",
          "Bridge Pattern",
          "Strategy Pattern",
          "Facade Pattern",
        ],
        answer: "Strategy Pattern",
      },
      {
        question: "What is the purpose of the Module Pattern in JavaScript?",
        options: [
          "To create private and public members",
          "To create multiple instances of an object",
          "To add new functionality to an object dynamically",
          "To define a family of algorithms",
        ],
        answer: "To create private and public members",
      },
      {
        question: "Which React hook is often used to implement the Observer Pattern?",
        options: ["useState", "useEffect", "useContext", "useReducer"],
        answer: "useEffect",
      },
    ],
    intermediate: [
      {
        question: "What is the difference between the Factory Pattern and the Abstract Factory Pattern?",
        options: [
          "The Factory Pattern creates a single object, while the Abstract Factory Pattern creates a family of related objects",
          "The Factory Pattern is a creational pattern, while the Abstract Factory Pattern is a structural pattern",
          "The Factory Pattern is used for simple objects, while the Abstract Factory Pattern is used for complex objects",
          "There is no difference",
        ],
        answer: "The Factory Pattern creates a single object, while the Abstract Factory Pattern creates a family of related objects",
      },
      {
        question: "What is the purpose of the Decorator Pattern?",
        options: [
          "To add new functionality to an object dynamically without altering its structure",
          "To create a simplified interface to a complex system",
          "To define a family of algorithms",
          "To create objects without exposing the creation logic to the client",
        ],
        answer: "To add new functionality to an object dynamically without altering its structure",
      },
      {
        question: "What is a Higher-Order Component (HOC) in React?",
        options: [
          "A function that takes a component and returns a new component with additional props or behavior",
          "A component that renders other components",
          "A component that is rendered at the top of the component tree",
          "A component that is used to create other components",
        ],
        answer: "A function that takes a component and returns a new component with additional props or behavior",
      },
      {
        question: "Which design pattern is often implemented using HOCs in React?",
        options: [
          "Decorator Pattern",
          "Provider Pattern",
          "Singleton Pattern",
          "Factory Pattern",
        ],
        answer: "Decorator Pattern",
      },
      {
        question: "What is the purpose of the Command Pattern?",
        options: [
          "To encapsulate a request as an object, thereby letting you parameterize clients with different requests, queue or log requests, and support undoable operations",
          "To define a family of algorithms, encapsulate each one, and make them interchangeable",
          "To create objects without exposing the creation logic to the client",
          "To add new functionality to an object dynamically",
        ],
        answer: "To encapsulate a request as an object, thereby letting you parameterize clients with different requests, queue or log requests, and support undoable operations",
      },
      {
        question: "What is the difference between the `useReducer` and `useState` hooks in React?",
        options: [
          "`useReducer` is better for managing complex state logic, while `useState` is better for simple state",
          "`useReducer` is a replacement for `useState`",
          "`useReducer` is faster than `useState`",
          "`useReducer` can only be used with Redux",
        ],
        answer: "`useReducer` is better for managing complex state logic, while `useState` is better for simple state",
      },
      {
        question: "Which design pattern is often implemented using the `useReducer` hook in React?",
        options: [
          "Command Pattern",
          "State Pattern",
          "Redux Pattern",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        question: "What is the purpose of the Revealing Module Pattern?",
        options: [
          "To reveal only a subset of a module's public API, while keeping the rest private",
          "To reveal all of a module's public API",
          "To hide all of a module's public API",
          "To create a module with no public API",
        ],
        answer: "To reveal only a subset of a module's public API, while keeping the rest private",
      },
      {
        question: "What is a Render Prop in React?",
        options: [
          "A prop on a component that is a function that returns a React element",
          "A prop that is used to render a component",
          "A prop that is used to pass data to a component",
          "A prop that is used to style a component",
        ],
        answer: "A prop on a component that is a function that returns a React element",
      },
      {
        question: "Which design pattern is often implemented using Render Props in React?",
        options: [
          "Inversion of Control (IoC)",
          "Dependency Injection (DI)",
          "Strategy Pattern",
          "All of the above",
        ],
        answer: "All of the above",
      },
    ],
    advanced: [
      {
        question: "What is the difference between the Prototype Pattern and the Factory Pattern?",
        options: [
          "The Prototype Pattern creates new objects by cloning an existing object, while the Factory Pattern creates new objects by calling a constructor",
          "The Prototype Pattern is a creational pattern, while the Factory Pattern is a structural pattern",
          "The Prototype Pattern is used for simple objects, while the Factory Pattern is used for complex objects",
          "There is no difference",
        ],
        answer: "The Prototype Pattern creates new objects by cloning an existing object, while the Factory Pattern creates new objects by calling a constructor",
      },
      {
        question: "What is the purpose of the Flyweight Pattern?",
        options: [
          "To minimize memory usage by sharing data with other similar objects",
          "To create a simplified interface to a complex system",
          "To define a family of algorithms",
          "To create objects without exposing the creation logic to the client",
        ],
        answer: "To minimize memory usage by sharing data with other similar objects",
      },
      {
        question: "What is a Compound Component in React?",
        options: [
          "A set of components that work together to provide a specific functionality",
          "A component that is composed of other components",
          "A component that is rendered at the top of the component tree",
          "A component that is used to create other components",
        ],
        answer: "A set of components that work together to provide a specific functionality",
      },
      {
        question: "Which design pattern is often implemented using Compound Components in React?",
        options: [
          "Composite Pattern",
          "State Pattern",
          "Redux Pattern",
          "All of the above",
        ],
        answer: "Composite Pattern",
      },
      {
        question: "What is the purpose of the Mediator Pattern?",
        options: [
          "To reduce coupling between components by introducing a mediator object that handles communication between them",
          "To define a family of algorithms, encapsulate each one, and make them interchangeable",
          "To create objects without exposing the creation logic to the client",
          "To add new functionality to an object dynamically",
        ],
        answer: "To reduce coupling between components by introducing a mediator object that handles communication between them",
      },
      {
        question: "What is the difference between the `useMemo` and `useCallback` hooks in React?",
        options: [
          "`useMemo` memoizes a value, while `useCallback` memoizes a function",
          "`useMemo` is a replacement for `useCallback`",
          "`useMemo` is faster than `useCallback`",
          "`useMemo` can only be used with Redux",
        ],
        answer: "`useMemo` memoizes a value, while `useCallback` memoizes a function",
      },
      {
        question: "Which design pattern is often implemented using the `useMemo` and `useCallback` hooks in React?",
        options: [
          "Memoization Pattern",
          "State Pattern",
          "Redux Pattern",
          "All of the above",
        ],
        answer: "Memoization Pattern",
      },
      {
        question: "What is the purpose of the Proxy Pattern?",
        options: [
          "To provide a surrogate or placeholder for another object to control access to it",
          "To reveal only a subset of a module's public API, while keeping the rest private",
          "To hide all of a module's public API",
          "To create a module with no public API",
        ],
        answer: "To provide a surrogate or placeholder for another object to control access to it",
      },
      {
        question: "What is a Controlled Component in React?",
        options: [
          "A component whose state is controlled by React",
          "A component whose state is controlled by the DOM",
          "A component that is controlled by another component",
          "A component that is controlled by the user",
        ],
        answer: "A component whose state is controlled by React",
      },
      {
        question: "What is an Uncontrolled Component in React?",
        options: [
          "A component whose state is controlled by the DOM",
          "A component whose state is controlled by React",
          "A component that is controlled by another component",
          "A component that is controlled by the user",
        ],
        answer: "A component whose state is controlled by the DOM",
      },
    ],
  },
};
