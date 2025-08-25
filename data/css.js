const cssQuestions = {
  beginner: [
    {
      question: "What does CSS stand for?",
      options: [
        "Cascading Style Sheets",
        "Creative Style Sheets",
        "Computer Style Sheets",
        "Colorful Style Sheets",
      ],
      answer: "Cascading Style Sheets",
    },
    {
      question: "Which HTML attribute is used to define inline styles?",
      options: ["style", "class", "id", "styles"],
      answer: "style",
    },
    {
      question: "Which is the correct CSS syntax?",
      options: [
        "body {color: black;}",
        "{body;color:black;}",
        "body:color=black;",
        "body {color=black;}",
      ],
      answer: "body {color: black;}",
    },
    {
      question: "How do you insert a comment in a CSS file?",
      options: [
        "/* this is a comment */",
        "// this is a comment",
        "' this is a comment",
        "<!-- this is a comment -->",
      ],
      answer: "/* this is a comment */",
    },
    {
      question: "Which property is used to change the background color?",
      options: ["background-color", "color", "bgcolor", "background"],
      answer: "background-color",
    },
    {
      question: "How do you add a background color for all <h1> elements?",
      options: [
        "h1 {background-color:#FFFFFF;}",
        "all.h1 {background-color:#FFFFFF;}",
        "h1.all {background-color:#FFFFFF;}",
        "h1 {bgcolor:#FFFFFF;}",
      ],
      answer: "h1 {background-color:#FFFFFF;}",
    },
    {
      question: "Which CSS property is used to change the text color of an element?",
      options: ["color", "text-color", "font-color", "fgcolor"],
      answer: "color",
    },
    {
      question: "Which CSS property controls the text size?",
      options: ["font-size", "text-style", "text-size", "font-style"],
      answer: "font-size",
    },
    {
      question: "What is the correct CSS syntax for making all the <p> elements bold?",
      options: [
        "p {font-weight:bold;}",
        "p {text-size:bold;}",
        '<p style="font-size:bold;"> ',
        "p {font:bold;}",
      ],
      answer: "p {font-weight:bold;}",
    },
    {
      question: "How do you display hyperlinks without an underline?",
      options: [
        "a {text-decoration:none;}",
        "a {underline:none;}",
        "a {decoration:no-underline;}",
        "a {text-decoration:no-underline;}",
      ],
      answer: "a {text-decoration:none;}",
    },
  ],
  intermediate: [
    {
      question: "What is the difference between `display: none;` and `visibility: hidden;`?",
      options: [
        "`display: none;` removes the element from the document flow, while `visibility: hidden;` hides the element but it still takes up space.",
        "`visibility: hidden;` removes the element from the document flow, while `display: none;` hides the element but it still takes up space.",
        "There is no difference.",
        "`display: none;` is not a valid CSS property.",
      ],
      answer: "`display: none;` removes the element from the document flow, while `visibility: hidden;` hides the element but it still takes up space.",
    },
    {
      question: "What is the CSS box model?",
      options: [
        "A box that wraps around every HTML element, consisting of: margins, borders, padding, and the actual content.",
        "A model for creating 3D boxes in CSS.",
        "A way to organize CSS properties in a grid.",
        "A JavaScript library for creating responsive layouts.",
      ],
      answer: "A box that wraps around every HTML element, consisting of: margins, borders, padding, and the actual content.",
    },
    {
      question: "What is the difference between a `class` and an `ID` in CSS?",
      options: [
        "An `ID` is unique within a page, while a `class` can be used multiple times.",
        "A `class` is unique within a page, while an `ID` can be used multiple times.",
        "There is no difference.",
        "IDs are for styling, while classes are for scripting.",
      ],
      answer: "An `ID` is unique within a page, while a `class` can be used multiple times.",
    },
    {
      question: "What are pseudo-classes in CSS?",
      options: [
        "A keyword added to a selector that specifies a special state of the selected element(s).",
        "A way to create new HTML elements.",
        "A way to animate CSS properties.",
        "A way to select elements based on their attributes.",
      ],
      answer: "A keyword added to a selector that specifies a special state of the selected element(s).",
    },
    {
      question: "What is the `z-index` property used for?",
      options: [
        "To specify the stack order of an element.",
        "To set the zoom level of an element.",
        "To create a 3D effect.",
        "To change the opacity of an element.",
      ],
      answer: "To specify the stack order of an element.",
    },
    {
      question: "What is Flexbox?",
      options: [
        "A one-dimensional layout model that allows items in a container to be aligned and distributed space.",
        "A two-dimensional layout model.",
        "A JavaScript library for creating animations.",
        "A CSS preprocessor.",
      ],
      answer: "A one-dimensional layout model that allows items in a container to be aligned and distributed space.",
    },
    {
      question: "What is the difference between `justify-content` and `align-items` in Flexbox?",
      options: [
        "`justify-content` aligns items along the main axis, while `align-items` aligns items along the cross axis.",
        "`justify-content` aligns items along the cross axis, while `align-items` aligns items along the main axis.",
        "There is no difference.",
        "Both properties are used to create space between items.",
      ],
      answer: "`justify-content` aligns items along the main axis, while `align-items` aligns items along the cross axis.",
    },
    {
      question: "What is CSS Grid?",
      options: [
        "A two-dimensional layout system for the web.",
        "A one-dimensional layout system.",
        "A JavaScript framework for building user interfaces.",
        "A tool for debugging CSS.",
      ],
      answer: "A two-dimensional layout system for the web.",
    },
    {
      question: "What are media queries?",
      options: [
        "A way to apply different styles for different devices and screen sizes.",
        "A way to query a database using CSS.",
        "A way to animate CSS properties.",
        "A way to create custom CSS properties.",
      ],
      answer: "A way to apply different styles for different devices and screen sizes.",
    },
    {
      question: "What is the purpose of the `!important` rule in CSS?",
      options: [
        "To add more importance to a property/value than normal.",
        "To comment out a line of CSS.",
        "To import another stylesheet.",
        "To create a variable.",
      ],
      answer: "To add more importance to a property/value than normal.",
    },
  ],
  advanced: [
    {
      question: "What are CSS preprocessors?",
      options: [
        "Scripting languages that extend the default capabilities of CSS.",
        "Tools for compressing CSS files.",
        "Linters for CSS code.",
        "Frameworks for building responsive layouts.",
      ],
      answer: "Scripting languages that extend the default capabilities of CSS.",
    },
    {
      question: "What is BEM?",
      options: [
        "A methodology for writing clean, modular, and maintainable CSS.",
        "A CSS framework.",
        "A JavaScript library.",
        "A build tool.",
      ],
      answer: "A methodology for writing clean, modular, and maintainable CSS.",
    },
    {
      question: "What are CSS Custom Properties (Variables)?",
      options: [
        "Entities defined by CSS authors which contain specific values to be reused throughout a document.",
        "Variables that are defined in JavaScript and can be used in CSS.",
        "A way to create new CSS properties.",
        "A way to store data in the browser.",
      ],
      answer: "Entities defined by CSS authors which contain specific values to be reused throughout a document.",
    },
    {
      question: "What is the `will-change` property used for?",
      options: [
        "To provide a hint to the browser about what properties of an element are likely to change in the future.",
        "To prevent an element from being changed by JavaScript.",
        "To force an element to be re-rendered.",
        "To change the stacking order of an element.",
      ],
      answer: "To provide a hint to the browser about what properties of an element are likely to change in the future.",
    },
    {
      question: "What is the CSS `paint` API?",
      options: [
        "An API that allows you to programmatically generate an image where a CSS property expects an image.",
        "An API for creating custom CSS properties.",
        "An API for animating CSS properties.",
        "An API for debugging CSS.",
      ],
      answer: "An API that allows you to programmatically generate an image where a CSS property expects an image.",
    },
    {
      question: "What is the `contain` property used for?",
      options: [
        "To indicate that an element and its contents are, as much as possible, independent of the rest of the document tree.",
        "To prevent an element from overflowing its container.",
        "To specify the size of an element.",
        "To create a container for other elements.",
      ],
      answer: "To indicate that an element and its contents are, as much as possible, independent of the rest of the document tree.",
    },
    {
      question: "What is the difference between `rgb()` and `hsl()`?",
      options: [
        "`rgb()` defines a color using the Red-Green-Blue model, while `hsl()` defines a color using the Hue-Saturation-Lightness model.",
        "`rgb()` is for screen, while `hsl()` is for print.",
        "`hsl()` is not a valid CSS color function.",
        "There is no difference.",
      ],
      answer: "`rgb()` defines a color using the Red-Green-Blue model, while `hsl()` defines a color using the Hue-Saturation-Lightness model.",
    },
    {
      question: "What is the `prefers-reduced-motion` media feature used for?",
      options: [
        "To detect if the user has requested that the system minimize the amount of non-essential motion it uses.",
        "To reduce the frame rate of animations.",
        "To disable all animations.",
        "To increase the speed of animations.",
      ],
      answer: "To detect if the user has requested that the system minimize the amount of non-essential motion it uses.",
    },
    {
      question: "What is the `clip-path` property used for?",
      options: [
        "To create a clipping region that defines what part of an element is visible.",
        "To create a shadow effect.",
        "To apply a filter to an element.",
        "To transform an element in 2D or 3D space.",
      ],
      answer: "To create a clipping region that defines what part of an element is visible.",
    },
    {
      question: "What is the purpose of the `all` property?",
      options: [
        "To reset all properties of an element to their initial or inherited values.",
        "To select all elements on a page.",
        "To apply a style to all elements on a page.",
        "To create a new stacking context.",
      ],
      answer: "To reset all properties of an element to their initial or inherited values.",
    },
  ],
};

export default cssQuestions;