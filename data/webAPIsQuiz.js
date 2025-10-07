export const webAPIsQuiz = {
  title: "Web APIs Quiz",
  questions: {
    beginner: [
      {
        question: "What does API stand for?",
        options: [
          "Application Programming Interface",
          "Application Program Interface",
          "Application Programming Instruction",
          "Application Program Instruction",
        ],
        answer: "Application Programming Interface",
      },
      {
        question: "Which of the following is a common use case for Web APIs?",
        options: [
          "Creating databases",
          "Integrating third-party services",
          "Designing user interfaces",
          "Training machine learning models",
        ],
        answer: "Integrating third-party services",
      },
      {
        question:
          "Which HTTP method is typically used to retrieve data from a server in a RESTful API?",
        options: ["POST", "GET", "PUT", "DELETE"],
        answer: "GET",
      },
      {
        question: "What is the purpose of the `fetch()` API in JavaScript?",
        options: [
          "To manipulate the DOM",
          "To make asynchronous HTTP requests",
          "To define a new class",
          "To handle file uploads",
        ],
        answer: "To make asynchronous HTTP requests",
      },
      {
        question: "Which of the following is NOT a Web API?",
        options: ["Geolocation API", "Canvas API", "CSS", "Web Storage API"],
        answer: "CSS",
      },
      {
        question: "What is the primary function of the `localStorage` API?",
        options: [
          "To store data for the current session only",
          "To store data that persists even after the browser is closed",
          "To send data to the server",
          "To manage browser history",
        ],
        answer: "To store data that persists even after the browser is closed",
      },
      {
        question:
          "Which API is used for drawing graphics, animations, and other visual images on the web?",
        options: ["WebGL API", "Canvas API", "Drag and Drop API", "History API"],
        answer: "Canvas API",
      },
      {
        question:
          "What is the purpose of the `addEventListener()` method in the DOM API?",
        options: [
          "To remove an event listener from an element",
          "To trigger an event on an element",
          "To attach an event handler to an element",
          "To check if an event listener exists",
        ],
        answer: "To attach an event handler to an element",
      },
      {
        question: "Which Web API allows you to access the user's location?",
        options: [
          "Geolocation API",
          "Notification API",
          "Fullscreen API",
          "Pointer Lock API",
        ],
        answer: "Geolocation API",
      },
      {
        question:
          "What is the main difference between `localStorage` and `sessionStorage`?",
        options: [
          "`localStorage` is faster than `sessionStorage`",
          "`localStorage` can store more data than `sessionStorage`",
          "`localStorage` data persists after the browser is closed, while `sessionStorage` data is cleared",
          "`localStorage` is more secure than `sessionStorage`",
        ],
        answer:
          "`localStorage` data persists after the browser is closed, while `sessionStorage` data is cleared",
      },
    ],
    intermediate: [
      {
        question: "What is the purpose of the `options` parameter in the `fetch()` API?",
        options: [
          "To specify the HTTP method, headers, and body of the request",
          "To handle the response from the server",
          "To parse the JSON response",
          "To set a timeout for the request",
        ],
        answer: "To specify the HTTP method, headers, and body of the request",
      },
      {
        question: "Which of the following is a valid value for the `credentials` option in a `fetch()` request?",
        options: [
          "include",
          "omit",
          "same-origin",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        question: "What is the difference between a `Promise` and a `Callback` in the context of Web APIs?",
        options: [
          "Promises can only be used for successful outcomes, while callbacks can handle both success and failure",
          "Promises are a more modern and flexible way to handle asynchronous operations",
          "Callbacks are faster than Promises",
          "Promises are only used for network requests, while callbacks can be used for any asynchronous task",
        ],
        answer: "Promises are a more modern and flexible way to handle asynchronous operations",
      },
      {
        question: "What is the purpose of the `Intersection Observer` API?",
        options: [
          "To detect when an element enters or exits the viewport",
          "To observe changes to the DOM",
          "To monitor network requests",
          "To track user interactions with an element",
        ],
        answer: "To detect when an element enters or exits the viewport",
      },
      {
        question: "Which API is used to create and manage web workers?",
        options: [
          "Worker API",
          "Service Worker API",
          "Shared Worker API",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        question: "What is the main advantage of using `Service Workers`?",
        options: [
          "They can run in the background even when the web page is closed",
          "They have access to the DOM",
          "They can block the main thread",
          "They are easier to debug than regular scripts",
        ],
        answer: "They can run in the background even when the web page is closed",
      },
      {
        question: "What is the purpose of the `Cache` API?",
        options: [
          "To store network requests and their responses",
          "To cache images and other assets",
          "To store user data",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        question: "Which of the following is a valid method of the `Cache` object?",
        options: [
          "add()",
          "addAll()",
          "put()",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        question: "What is the purpose of the `Push` API?",
        options: [
          "To send push notifications to the user",
          "To push data to the server",
          "To push updates to the web page",
          "To push files to the server",
        ],
        answer: "To send push notifications to the user",
      },
      {
        question: "What is the role of the `Notification` API?",
        options: [
          "To display notifications to the user",
          "To request permission to send notifications",
          "To handle user interactions with notifications",
          "All of the above",
        ],
        answer: "All of the above",
      },
    ],
    advanced: [
      {
        question: "What is the purpose of the `Broadcast Channel` API?",
        options: [
          "To allow communication between different browser tabs, windows, or iframes of the same origin",
          "To broadcast messages to all users of a web application",
          "To send messages to a specific user",
          "To communicate with a server",
        ],
        answer: "To allow communication between different browser tabs, windows, or iframes of the same origin",
      },
      {
        question: "What is the difference between `Shallow` and `Deep` ETag validation in the context of caching?",
        options: [
          "Shallow ETag validation only compares the ETag value, while deep ETag validation also compares the response body",
          "Shallow ETag validation is faster but less reliable than deep ETag validation",
          "Both a and b",
          "Neither a nor b",
        ],
        answer: "Both a and b",
      },
      {
        question: "What is the purpose of the `Foreign Fetch` API?",
        options: [
          "To allow a service worker to handle requests from a different origin",
          "To fetch resources from a different origin",
          "To make cross-origin requests",
          "To handle responses from a different origin",
        ],
        answer: "To allow a service worker to handle requests from a different origin",
      },
      {
        question: "What is the `Stale-While-Revalidate` caching strategy?",
        options: [
          "It serves a cached response immediately and then updates the cache in the background",
          "It serves a stale response while fetching a fresh one",
          "It revalidates the cache before serving a response",
          "It serves a fresh response and then updates the cache",
        ],
        answer: "It serves a cached response immediately and then updates the cache in the background",
      },
      {
        question: "What is the purpose of the `Payment Request` API?",
        options: [
          "To provide a seamless and secure payment experience for users",
          "To process payments",
          "To store payment information",
          "To handle recurring payments",
        ],
        answer: "To provide a seamless and secure payment experience for users",
      },
      {
        question: "What is the `Credential Management` API?",
        options: [
          "An API that allows websites to store and retrieve user credentials",
          "An API that allows users to manage their credentials",
          "An API that allows websites to authenticate users",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        question: "What is the purpose of the `Web Share` API?",
        options: [
          "To allow users to share text, links, and files with other apps on their device",
          "To share data between different web pages",
          "To share data with a server",
          "To share data with other users",
        ],
        answer: "To allow users to share text, links, and files with other apps on their device",
      },
      {
        question: "What is the `WebUSB` API?",
        options: [
          "An API that allows web applications to communicate with USB devices",
          "An API that allows users to connect USB devices to their computer",
          "An API that allows web applications to access files on USB devices",
          "An API that allows web applications to format USB devices",
        ],
        answer: "An API that allows web applications to communicate with USB devices",
      },
      {
        question: "What is the purpose of the `Web Bluetooth` API?",
        options: [
          "To allow web applications to communicate with Bluetooth devices",
          "To allow users to connect Bluetooth devices to their computer",
          "To allow web applications to access files on Bluetooth devices",
          "To allow web applications to configure Bluetooth devices",
        ],
        answer: "To allow web applications to communicate with Bluetooth devices",
      },
      {
        question: "What is the `Generic Sensor` API?",
        options: [
          "An API that provides a consistent way to access sensor data on the web",
          "An API that allows web applications to access all sensors on a device",
          "An API that allows web applications to configure sensors",
          "An API that allows web applications to simulate sensor data",
        ],
        answer: "An API that provides a consistent way to access sensor data on the web",
      },
    ],
  },
};
