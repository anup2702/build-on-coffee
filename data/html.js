const htmlQuestions = {
  beginner: [
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "Hyperlinks and Text Markup Language",
        "Home Tool Markup Language",
        "Hyperlinking Text Marking Language",
      ],
      answer: "Hyper Text Markup Language",
    },
    {
      question: "Who is making the Web standards?",
      options: [
        "The World Wide Web Consortium",
        "Google",
        "Microsoft",
        "Mozilla",
      ],
      answer: "The World Wide Web Consortium",
    },
    {
      question: "Choose the correct HTML element for the largest heading:",
      options: ["<h1>", "<h6>", "<heading>", "<head>"],
      answer: "<h1>",
    },
    {
      question: "What is the correct HTML element for inserting a line break?",
      options: ["<br>", "<lb>", "<break>", "<line>"],
      answer: "<br>",
    },
    {
      question: "What is the correct HTML for adding a background color?",
      options: [
        '<body style="background-color:yellow;">',
        "<background>yellow</background>",
        '<body bg="yellow">',
        '<body background="yellow">',
      ],
      answer: '<body style="background-color:yellow;">',
    },
    {
      question: "Choose the correct HTML element to define important text",
      options: ["<strong>", "<b>", "<important>", "<i>"],
      answer: "<strong>",
    },
    {
      question: "Choose the correct HTML element to define emphasized text",
      options: ["<em>", "<i>", "<italic>", "<emphasized>"],
      answer: "<em>",
    },
    {
      question: "What is the correct HTML for creating a hyperlink?",
      options: [
        '<a href="http://www.w3schools.com">W3Schools</a>',
        "<a>http://www.w3schools.com</a>",
        '<a url="http://www.w3schools.com">W3Schools.com</a>',
        '<a name="http://www.w3schools.com">W3Schools.com</a>',
      ],
      answer: '<a href="http://www.w3schools.com">W3Schools</a>',
    },
    {
      question: "Which character is used to indicate an end tag?",
      options: ["/", "<", "*", "^"],
      answer: "/",
    },
    {
      question: "How can you open a link in a new tab/browser window?",
      options: [
        '<a href="url" target="_blank">',
        '<a href="url" new>',
        '<a href="url" target="new">',
        '<a href="url" target="_window">',
      ],
      answer: '<a href="url" target="_blank">',
    },
  ],
  intermediate: [
    {
      question: "Which HTML element is used to specify a footer for a document or section?",
      options: ["<footer>", "<bottom>", "<section>", "<foot>"],
      answer: "<footer>",
    },
    {
      question: "In HTML, what does the <aside> element define?",
      options: [
        "Content aside from the page content",
        "A navigation list",
        "The main content of the page",
        "A header for the page",
      ],
      answer: "Content aside from the page content",
    },
    {
      question: "The HTML <canvas> element is used to:",
      options: [
        "draw graphics, on the fly, via scripting (usually JavaScript)",
        "display database content",
        "manipulate data from a database",
        "create draggable elements",
      ],
      answer: "draw graphics, on the fly, via scripting (usually JavaScript)",
    },
    {
      question: "In HTML, which attribute is used to specify that an input field must be filled out?",
      options: ["required", "placeholder", "validate", "formvalidate"],
      answer: "required",
    },
    {
      question: "Which input type defines a slider control?",
      options: ["range", "slider", "controls", "search"],
      answer: "range",
    },
    {
      question: "Which HTML element is used to display a scalar measurement within a known range?",
      options: ["<meter>", "<gauge>", "<range>", "<measure>"],
      answer: "<meter>",
    },
    {
      question: "What is the correct HTML for referring to an external style sheet?",
      options: [
        '<link rel="stylesheet" type="text/css" href="mystyle.css">',
        '<style src="mystyle.css">',
        "<stylesheet>mystyle.css</stylesheet>",
        '<link rel="stylesheet" type="text/css" src="mystyle.css">',
      ],
      answer: '<link rel="stylesheet" type="text/css" href="mystyle.css">',
    },
    {
      question: "Which HTML element is used to define a navigation link?",
      options: ["<nav>", "<navigate>", "<navigation>", "<navlink>"],
      answer: "<nav>",
    },
    {
      question: "In HTML, what does the <article> element define?",
      options: [
        "Independent, self-contained content",
        "A part of a document that is related to the main content",
        "A container for multiple documents",
        "A short quotation",
      ],
      answer: "Independent, self-contained content",
    },
    {
      question: "Which HTML element is used to define a thematic break in a page?",
      options: ["<hr>", "<br>", "<line>", "<break>"],
      answer: "<hr>",
    },
  ],
  advanced: [
    {
      question: "What is the purpose of the `defer` attribute in a `<script>` tag?",
      options: [
        "The script is executed after the document has been parsed",
        "The script is executed asynchronously",
        "The script is executed before the document is parsed",
        "The script is not executed at all",
      ],
      answer: "The script is executed after the document has been parsed",
    },
    {
      question: "What is the purpose of the `async` attribute in a `<script>` tag?",
      options: [
        "The script is executed asynchronously with the rest of the page",
        "The script is executed before the page is loaded",
        "The script is executed in a separate thread",
        "The script is executed only when the user interacts with the page",
      ],
      answer: "The script is executed asynchronously with the rest of the page",
    },
    {
      question: "What are Web Workers?",
      options: [
        "A way to run scripts in background threads",
        "A way to store data on the client-side",
        "A way to send push notifications",
        "A way to create custom HTML elements",
      ],
      answer: "A way to run scripts in background threads",
    },
    {
      question: "What is the purpose of the `srcset` attribute in an `<img>` tag?",
      options: [
        "To provide a list of different image sources for different screen sizes",
        "To specify the aspect ratio of the image",
        "To provide a fallback image for older browsers",
        "To add a caption to the image",
      ],
      answer: "To provide a list of different image sources for different screen sizes",
    },
    {
      question: "What is the difference between `localStorage` and `sessionStorage`?",
      options: [
        "`localStorage` persists across browser sessions, while `sessionStorage` is cleared when the session ends",
        "`localStorage` can store more data than `sessionStorage`",
        "`localStorage` is more secure than `sessionStorage`",
        "There is no difference",
      ],
      answer: "`localStorage` persists across browser sessions, while `sessionStorage` is cleared when the session ends",
    },
    {
      question: "What is the purpose of the `<template>` tag?",
      options: [
        "To hold HTML content that is not to be rendered immediately when a page is loaded",
        "To create a reusable component",
        "To define a new HTML element",
        "To apply a style to a group of elements",
      ],
      answer: "To hold HTML content that is not to be rendered immediately when a page is loaded",
    },
    {
      question: "What is Shadow DOM?",
      options: [
        "A way to encapsulate the internal structure and style of a web component",
        "A way to create 3D effects in HTML",
        "A way to hide elements from the user",
        "A way to improve the performance of a web page",
      ],
      answer: "A way to encapsulate the internal structure and style of a web component",
    },
    {
      question: "What is the purpose of the `rel=\"preconnect\"` attribute in a `<link>` tag?",
      options: [
        "To initiate an early connection to a domain, which can speed up the loading of resources from that domain",
        "To preload a resource that will be needed later",
        "To prefetch a resource that might be needed in the future",
        "To specify the relationship between the current document and the linked document",
      ],
      answer: "To initiate an early connection to a domain, which can speed up the loading of resources from that domain",
    },
    {
      question: "What is the difference between the `PUT` and `POST` HTTP methods?",
      options: [
        "`PUT` is idempotent, while `POST` is not",
        "`PUT` is used to create a new resource, while `POST` is used to update an existing resource",
        "`PUT` is more secure than `POST`",
        "There is no difference",
      ],
      answer: "`PUT` is idempotent, while `POST` is not",
    },
    {
      question: "What is the purpose of the `Content-Security-Policy` HTTP header?",
      options: [
        "To prevent cross-site scripting (XSS) attacks",
        "To improve the performance of a web page",
        "To specify the character encoding of a document",
        "To enable caching of a resource",
      ],
      answer: "To prevent cross-site scripting (XSS) attacks",
    },
  ],
};

export default htmlQuestions;