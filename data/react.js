const reactQuestions = {
  beginner: [
    {
      question: "What is JSX?",
      options: [
        "A syntax extension for JavaScript",
        "A templating engine",
        "A new programming language",
        "A JavaScript library",
      ],
      answer: "A syntax extension for JavaScript",
    },
    {
      question: "How do you create a React component?",
      options: [
        "A function that returns a React element",
        "A class that extends React.Component",
        "Both a and b",
        "None of the above",
      ],
      answer: "Both a and b",
    },
    {
      question: "What is the purpose of `props` in React?",
      options: [
        "To store the component's internal state",
        "To pass data from a parent component to a child component",
        "To handle events",
        "To define the component's styles",
      ],
      answer: "To pass data from a parent component to a child component",
    },
    {
      question: "What is `state` in a React component?",
      options: [
        "An object that holds information about the component's current situation",
        "A way to pass data to a component",
        "A replacement for props",
        "A global data store",
      ],
      answer: "An object that holds information about the component's current situation",
    },
    {
      question: "How do you handle events in React?",
      options: [
        "Using `addEventListener` in the DOM",
        "Using inline `on<Event>` attributes",
        "Both a and b",
        "None of the above",
      ],
      answer: "Using inline `on<Event>` attributes",
    },
    {
      question: "What is the purpose of `React.useState` hook?",
      options: [
        "To add state to a functional component",
        "To perform side effects in a functional component",
        "To create a reference to a DOM element",
        "To manage global state",
      ],
      answer: "To add state to a functional component",
    },
    {
      question: "What is a controlled component in React?",
      options: [
        "A component that renders its own state",
        "A component whose state is controlled by React",
        "A component that is controlled by the DOM",
        "A component that does not have state",
      ],
      answer: "A component whose state is controlled by React",
    },
    {
      question: "How do you pass a value from a child component to a parent component?",
      options: [
        "Using props",
        "Using a callback function passed as a prop",
        "Using state",
        "It's not possible",
      ],
      answer: "Using a callback function passed as a prop",
    },
    {
      question: "What does `render()` do in a class component?",
      options: [
        "It returns the React elements for the component",
        "It updates the component's state",
        "It handles events",
        "It performs side effects",
      ],
      answer: "It returns the React elements for the component",
    },
    {
      question: "What is the key prop and what is its purpose?",
      options: [
        "It's a special string attribute you need to include when creating lists of elements",
        "It's used to identify which items have changed, are added, or are removed",
        "Both a and b",
        "None of the above",
      ],
      answer: "Both a and b",
    },
  ],
  intermediate: [
    {
      question: "What is the `useEffect` hook used for?",
      options: [
        "To manage state in a functional component",
        "To perform side effects in a functional component",
        "To create a context",
        "To create a custom hook",
      ],
      answer: "To perform side effects in a functional component",
    },
    {
      question: "What is the difference between a functional component and a class component?",
      options: [
        "Functional components are simpler and have less boilerplate",
        "Class components have lifecycle methods, while functional components use hooks",
        "Both a and b",
        "There is no difference",
      ],
      answer: "Both a and b",
    },
    {
      question: "What is the React Context API?",
      options: [
        "A way to pass data through the component tree without having to pass props down manually at every level",
        "A way to manage local component state",
        "A replacement for Redux",
        "A way to handle routing",
      ],
      answer: "A way to pass data through the component tree without having to pass props down manually at every level",
    },
    {
      question: "What is React Router?",
      options: [
        "A library for handling routing in a React application",
        "A way to manage state",
        "A tool for testing React components",
        "A styling library",
      ],
      answer: "A library for handling routing in a React application",
    },
    {
      question: "What is a custom hook?",
      options: [
        "A JavaScript function whose name starts with 'use' and that may call other hooks",
        "A component that is not part of the React library",
        "A way to create a new component",
        "A replacement for class components",
      ],
      answer: "A JavaScript function whose name starts with 'use' and that may call other hooks",
    },
    {
      question: "What is the purpose of the `useContext` hook?",
      options: [
        "To subscribe to React context without introducing nesting",
        "To create a new context",
        "To manage state",
        "To perform side effects",
      ],
      answer: "To subscribe to React context without introducing nesting",
    },
    {
      question: "What are Higher-Order Components (HOCs)?",
      options: [
        "A function that takes a component and returns a new component",
        "A component that renders another component",
        "A custom hook",
        "A replacement for hooks",
      ],
      answer: "A function that takes a component and returns a new component",
    },
    {
      question: "How do you optimize performance in a React application?",
      options: [
        "Using `React.memo`",
        "Using `useMemo` and `useCallback`",
        "Code-splitting",
        "All of the above",
      ],
      answer: "All of the above",
    },
    {
      question: "What is the difference between `useMemo` and `useCallback`?",
      options: [
        "`useMemo` returns a memoized value, `useCallback` returns a memoized function",
        "`useCallback` returns a memoized value, `useMemo` returns a memoized function",
        "They are the same",
        "There is no `useCallback` hook",
      ],
      answer: "`useMemo` returns a memoized value, `useCallback` returns a memoized function",
    },
    {
      question: "What is lifting state up in React?",
      options: [
        "Moving state to a common ancestor of components that need it",
        "Using a global state management library",
        "Storing state in local storage",
        "Using the `useState` hook",
      ],
      answer: "Moving state to a common ancestor of components that need it",
    },
  ],
  advanced: [
    {
      question: "What is the difference between `useEffect` and `useLayoutEffect`?",
      options: [
        "`useEffect` runs asynchronously after a render is painted to the screen, `useLayoutEffect` runs synchronously before the browser paints",
        "`useLayoutEffect` runs asynchronously after a render is painted to the screen, `useEffect` runs synchronously before the browser paints",
        "They are the same",
        "There is no `useLayoutEffect` hook",
      ],
      answer: "`useEffect` runs asynchronously after a render is painted to the screen, `useLayoutEffect` runs synchronously before the browser paints",
    },
    {
      question: "What is `React.memo`?",
      options: [
        "A higher-order component that memoizes the rendered output of a component, preventing re-renders if the props are the same",
        "A hook for memoizing values",
        "A hook for memoizing functions",
        "A way to create a custom hook",
      ],
      answer: "A higher-order component that memoizes the rendered output of a component, preventing re-renders if the props are the same",
    },
    {
      question: "What are render props?",
      options: [
        "A technique for sharing code between React components using a prop whose value is a function",
        "A way to render a component",
        "A type of prop",
        "A way to handle events",
      ],
      answer: "A technique for sharing code between React components using a prop whose value is a function",
    },
    {
      question: "What is the purpose of `useReducer` hook?",
      options: [
        "An alternative to `useState` for managing complex state logic",
        "A way to reduce the number of re-renders",
        "A way to create a custom hook",
        "A way to handle routing",
      ],
      answer: "An alternative to `useState` for managing complex state logic",
    },
    {
      question: "What is reconciliation in React?",
      options: [
        "The process through which React updates the DOM",
        "A way to handle errors",
        "A way to manage state",
        "A way to create components",
      ],
      answer: "The process through which React updates the DOM",
    },
    {
      question: "What is the Virtual DOM?",
      options: [
        "A programming concept where a virtual representation of a UI is kept in memory and synced with the 'real' DOM",
        "A way to create a 3D UI",
        "A replacement for the real DOM",
        "A tool for debugging React applications",
      ],
      answer: "A programming concept where a virtual representation of a UI is kept in memory and synced with the 'real' DOM",
    },
    {
      question: "What is the difference between controlled and uncontrolled components?",
      options: [
        "Controlled components have their state controlled by React, while uncontrolled components have their state managed by the DOM itself",
        "Uncontrolled components have their state controlled by React, while controlled components have their state managed by the DOM itself",
        "There is no difference",
        "Uncontrolled components are not recommended in React",
      ],
      answer: "Controlled components have their state controlled by React, while uncontrolled components have their state managed by the DOM itself",
    },
    {
      question: "What is prop drilling?",
      options: [
        "The process of passing props down through multiple levels of nested components",
        "A way to optimize performance",
        "A way to handle events",
        "A way to create custom hooks",
      ],
      answer: "The process of passing props down through multiple levels of nested components",
    },
    {
      question: "How can you avoid prop drilling?",
      options: [
        "Using the Context API",
        "Using a state management library like Redux or MobX",
        "Component composition",
        "All of the above",
      ],
      answer: "All of the above",
    },
    {
      question: "What is code-splitting in React?",
      options: [
        "A feature that helps you split your code into smaller chunks which can then be loaded on demand",
        "A way to organize your code",
        "A way to handle errors",
        "A way to style your components",
      ],
      answer: "A feature that helps you split your code into smaller chunks which can then be loaded on demand",
    },
  ],
};

export default reactQuestions;
