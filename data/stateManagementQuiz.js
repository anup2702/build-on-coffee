export const stateManagementQuiz = {
  title: "State Management Quiz",
  questions: {
    beginner: [
      {
        question: "What is state in the context of a web application?",
        options: [
          "The visual appearance of the application",
          "The data that the application needs to keep track of",
          "The server-side logic of the application",
          "The HTML structure of the application",
        ],
        answer: "The data that the application needs to keep track of",
      },
      {
        question: "Which of the following is a popular state management library for React?",
        options: [
          "jQuery",
          "Redux",
          "Lodash",
          "Moment.js",
        ],
        answer: "Redux",
      },
      {
        question: "What is the purpose of a store in Redux?",
        options: [
          "To store the application's state",
          "To handle user interactions",
          "To render the UI components",
          "To manage the application's routing",
        ],
        answer: "To store the application's state",
      },
      {
        question: "What is an action in Redux?",
        options: [
          "A function that returns a new state",
          "An object that describes a change in the state",
          "A component that displays the state",
          "A middleware that intercepts actions",
        ],
        answer: "An object that describes a change in the state",
      },
      {
        question: "What is a reducer in Redux?",
        options: [
          "A function that returns a new state based on an action",
          "A component that dispatches actions",
          "A middleware that logs actions",
          "A store that holds the state",
        ],
        answer: "A function that returns a new state based on an action",
      },
      {
        question: "What is the term for passing data from a parent component to a child component?",
        options: [
          "State lifting",
          "Props drilling",
          "State management",
          "Component composition",
        ],
        answer: "Props drilling",
      },
      {
        question: "Which React hook is used to manage local state in a functional component?",
        options: [
          "useEffect",
          "useState",
          "useContext",
          "useReducer",
        ],
        answer: "useState",
      },
      {
        question: "What is the primary benefit of using a state management library?",
        options: [
          "To make the application faster",
          "To simplify the management of application state",
          "To reduce the amount of code",
          "To improve the application's security",
        ],
        answer: "To simplify the management of application state",
      },
      {
        question: "What is a common problem with managing state in large applications?",
        options: [
          "State can become difficult to track and manage",
          "State is not accessible to all components",
          "State is not persistent",
          "State is not secure",
        ],
        answer: "State can become difficult to track and manage",
      },
      {
        question: "What is the concept of a single source of truth?",
        options: [
          "Storing all application state in a single place",
          "Using a single state management library",
          "Having a single component manage all state",
          "Storing state in the root component",
        ],
        answer: "Storing all application state in a single place",
      },
    ],
    intermediate: [
      {
        question: "What is the difference between local state and global state?",
        options: [
          "Local state is managed by a single component, while global state is shared between components",
          "Local state is stored in the browser, while global state is stored on the server",
          "Local state is synchronous, while global state is asynchronous",
          "Local state is mutable, while global state is immutable",
        ],
        answer: "Local state is managed by a single component, while global state is shared between components",
      },
      {
        question: "What is the purpose of middleware in Redux?",
        options: [
          "To handle asynchronous actions",
          "To log actions and state changes",
          "To modify actions before they reach the reducer",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        question: "What is a selector in the context of Redux?",
        options: [
          "A function that extracts a piece of state from the store",
          "A component that displays a piece of state",
          "An action that selects a piece of state",
          "A middleware that selects a piece of state",
        ],
        answer: "A function that extracts a piece of state from the store",
      },
      {
        question: "What is the purpose of the `connect` function in React Redux?",
        options: [
          "To connect a React component to the Redux store",
          "To connect a Redux store to a React component",
          "To connect a React component to another React component",
          "To connect a Redux store to another Redux store",
        ],
        answer: "To connect a React component to the Redux store",
      },
      {
        question: "What is a thunk in the context of Redux?",
        options: [
          "A function that returns another function",
          "A middleware that allows you to write action creators that return a function instead of an action",
          "A way to handle asynchronous actions in Redux",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        question: "What is the difference between `useReducer` and `useState` in React?",
        options: [
          "`useReducer` is a more powerful alternative to `useState` for managing complex state logic",
          "`useState` is a more powerful alternative to `useReducer` for managing complex state logic",
          "`useReducer` is used for managing local state, while `useState` is used for managing global state",
          "`useState` is used for managing local state, while `useReducer` is used for managing global state",
        ],
        answer: "`useReducer` is a more powerful alternative to `useState` for managing complex state logic",
      },
      {
        question: "What is the purpose of the `useContext` hook in React?",
        options: [
          "To share state between components without props drilling",
          "To manage local state in a functional component",
          "To perform side effects in a functional component",
          "To create a context object",
        ],
        answer: "To share state between components without props drilling",
      },
      {
        question: "What is a potential drawback of using the Context API for state management?",
        options: [
          "It can cause performance issues if not used carefully",
          "It is not suitable for managing complex state",
          "It is not supported in all browsers",
          "It is not compatible with Redux",
        ],
        answer: "It can cause performance issues if not used carefully",
      },
      {
        question: "What is a state management pattern?",
        options: [
          "A reusable solution to a common state management problem",
          "A library for managing state",
          "A way to structure your application's state",
          "A set of rules for managing state",
        ],
        answer: "A reusable solution to a common state management problem",
      },
      {
        question: "What is the observer pattern in the context of state management?",
        options: [
          "A pattern where an object maintains a list of its dependents and notifies them of any state changes",
          "A pattern where an object can be observed by other objects",
          "A pattern where an object can be subscribed to by other objects",
          "All of the above",
        ],
        answer: "All of the above",
      },
    ],
    advanced: [
      {
        question: "What is a side effect in the context of a pure function?",
        options: [
          "Any interaction with the outside world, such as making an API call or modifying the DOM",
          "A change in the application's state",
          "An error that occurs during the execution of the function",
          "A value that is returned by the function",
        ],
        answer: "Any interaction with the outside world, such as making an API call or modifying the DOM",
      },
      {
        question: "What is the purpose of a library like Redux Saga?",
        options: [
          "To manage side effects in a Redux application",
          "To simplify the management of complex state",
          "To improve the performance of a Redux application",
          "To provide a better developer experience for Redux",
        ],
        answer: "To manage side effects in a Redux application",
      },
      {
        question: "What is a generator function in JavaScript?",
        options: [
          "A function that can be paused and resumed",
          "A function that returns an iterator",
          "A function that can be used to create asynchronous code",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        question: "How does Redux Saga use generator functions?",
        options: [
          "To create sagas, which are long-running processes that listen for actions and dispatch new actions",
          "To create reducers, which are pure functions that return a new state",
          "To create selectors, which are functions that extract a piece of state from the store",
          "To create middleware, which are functions that intercept actions",
        ],
        answer: "To create sagas, which are long-running processes that listen for actions and dispatch new actions",
      },
      {
        question: "What is a persistent state?",
        options: [
          "State that is saved to a storage medium, such as local storage or a database",
          "State that is not lost when the application is closed",
          "State that can be rehydrated when the application is reopened",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        question: "What is a time-travel debugger?",
        options: [
          "A tool that allows you to step back and forth through the history of your application's state",
          "A tool that allows you to inspect the state of your application at any point in time",
          "A tool that allows you to replay actions and see how they affect the state",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        question: "What is a normalized state?",
        options: [
          "A state that is organized in a way that is easy to query and update",
          "A state that is free of duplication",
          "A state that is stored in a flat structure",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        question: "What is a denormalized state?",
        options: [
          "A state that is organized in a way that is easy to read",
          "A state that contains duplication",
          "A state that is stored in a nested structure",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        question: "What is a transactional state?",
        options: [
          "A state that is updated in a single, atomic operation",
          "A state that can be rolled back to a previous state",
          "A state that is consistent and reliable",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        question: "What is a distributed state?",
        options: [
          "A state that is shared between multiple applications or services",
          "A state that is stored in a distributed database",
          "A state that is synchronized between multiple clients",
          "All of the above",
        ],
        answer: "All of the above",
      },
    ],
  },
};
