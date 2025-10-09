export const responsiveDesignQuiz = {
  title: "Responsive Design Quiz",
  questions: {
    beginner: [
      {
        question: "What is Responsive Web Design?",
        options: [
          "A design that responds to user clicks",
          "A design that adapts to different screen sizes",
          "A design that has a fast loading time",
          "A design that is built with a specific framework",
        ],
        answer: "A design that adapts to different screen sizes",
      },
      {
        question: "Which CSS property is primarily used to make a layout flexible?",
        options: ["color", "font-size", "display: flex;", "border"],
        answer: "display: flex;",
      },
      {
        question: "What is a media query?",
        options: [
          "A CSS rule that applies styles based on device characteristics",
          "A JavaScript function for media playback",
          "An HTML tag for embedding media",
          "A way to query a database for media files",
        ],
        answer: "A CSS rule that applies styles based on device characteristics",
      },
      {
        question: "What does the `viewport` meta tag do?",
        options: [
          "It sets the background color of the page",
          "It controls the layout on mobile browsers",
          "It defines the character set of the page",
          "It loads external scripts",
        ],
        answer: "It controls the layout on mobile browsers",
      },
      {
        question: "Which unit is relative to the viewport's width?",
        options: ["px", "em", "rem", "vw"],
        answer: "vw",
      },
      {
        question: "What is the purpose of the `flex-wrap` property in Flexbox?",
        options: [
          "To wrap text around an image",
          "To allow flex items to wrap onto multiple lines",
          "To set the background color of a flex container",
          "To align items vertically",
        ],
        answer: "To allow flex items to wrap onto multiple lines",
      },
      {
        question: "In a media query, what does `min-width` refer to?",
        options: [
          "The minimum width of an element",
          "The minimum width of the browser window",
          "The minimum font size",
          "The minimum height of the viewport",
        ],
        answer: "The minimum width of the browser window",
      },
      {
        question: "What is a mobile-first approach in responsive design?",
        options: [
          "Designing for mobile devices first, then scaling up to larger screens",
          "Designing only for mobile devices",
          "Using a mobile-specific framework",
          "Prioritizing mobile app development over web development",
        ],
        answer: "Designing for mobile devices first, then scaling up to larger screens",
      },
      {
        question: "Which of the following is NOT a valid value for the `display` property?",
        options: ["block", "inline", "flex", "float"],
        answer: "float",
      },
      {
        question: "How can you hide an element for a specific screen size using media queries?",
        options: [
          "display: none;",
          "visibility: hidden;",
          "opacity: 0;",
          "All of the above",
        ],
        answer: "display: none;",
      },
    ],
    intermediate: [
      {
        question: "What is the difference between `em` and `rem` units?",
        options: [
          "`em` is relative to the parent element's font size, while `rem` is relative to the root element's font size",
          "`rem` is relative to the parent element's font size, while `em` is relative to the root element's font size",
          "There is no difference",
          "`em` is for width, and `rem` is for height",
        ],
        answer: "`em` is relative to the parent element's font size, while `rem` is relative to the root element's font size",
      },
      {
        question: "What is the `picture` element used for in responsive design?",
        options: [
          "To display a single image",
          "To provide multiple sources for an image, allowing the browser to choose the best one",
          "To create a photo gallery",
          "To apply filters to an image",
        ],
        answer: "To provide multiple sources for an image, allowing the browser to choose the best one",
      },
      {
        question: "What is the purpose of `srcset` attribute in an `<img>` tag?",
        options: [
          "To define the source of the image",
          "To provide a list of image sources with different resolutions",
          "To set the width of the image",
          "To add a caption to the image",
        ],
        answer: "To provide a list of image sources with different resolutions",
      },
      {
        question: "How does CSS Grid Layout differ from Flexbox?",
        options: [
          "Grid is for one-dimensional layouts, while Flexbox is for two-dimensional layouts",
          "Grid is for two-dimensional layouts, while Flexbox is for one-dimensional layouts",
          "They are the same",
          "Grid is only for creating grids of images",
        ],
        answer: "Grid is for two-dimensional layouts, while Flexbox is for one-dimensional layouts",
      },
      {
        question: "What is the `object-fit` property used for?",
        options: [
          "To specify how an `<img>` or `<video>` should be resized to fit its container",
          "To change the shape of an element",
          "To create a 3D effect",
          "To align text within an element",
        ],
        answer: "To specify how an `<img>` or `<video>` should be resized to fit its container",
      },
      {
        question: "What are container queries?",
        options: [
          "Media queries for containers",
          "A new CSS feature that allows styling elements based on the size of their container",
          "A way to query the DOM for container elements",
          "A JavaScript library for responsive containers",
        ],
        answer: "A new CSS feature that allows styling elements based on the size of their container",
      },
      {
        question: "What is the purpose of the `clamp()` function in CSS?",
        options: [
          "To clamp a value between an upper and lower bound",
          "To create a circular element",
          "To add a shadow to an element",
          "To animate an element",
        ],
        answer: "To clamp a value between an upper and lower bound",
      },
      {
        question: "What is the difference between `display: none;` and `visibility: hidden;`?",
        options: [
          "`display: none;` removes the element from the document flow, while `visibility: hidden;` hides it but keeps its space",
          "`visibility: hidden;` removes the element from the document flow, while `display: none;` hides it but keeps its space",
          "They are the same",
          "`display: none;` is for images, and `visibility: hidden;` is for text",
        ],
        answer: "`display: none;` removes the element from the document flow, while `visibility: hidden;` hides it but keeps its space",
      },
      {
        question: "How can you create a responsive navigation bar?",
        options: [
          "Using media queries to change the layout from horizontal to vertical",
          "Using a hamburger menu icon for smaller screens",
          "Using Flexbox or Grid to align the items",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        question: "What is the `aspect-ratio` property in CSS?",
        options: [
          "To set the aspect ratio of an element",
          "To change the color of an element",
          "To create a responsive image",
          "To add a border to an element",
        ],
        answer: "To set the aspect ratio of an element",
      },
    ],
    advanced: [
      {
        question: "How can you optimize responsive images for performance?",
        options: [
          "Using the `srcset` and `sizes` attributes",
          "Using modern image formats like WebP",
          "Lazy loading images",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        question: "What are some advanced techniques for fluid typography?",
        options: [
          "Using `clamp()` to set a minimum, preferred, and maximum font size",
          "Using `vw` units for font sizes",
          "Using media queries to adjust font sizes at different breakpoints",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        question: "What is the role of a CSS preprocessor like Sass in responsive design?",
        options: [
          "It allows you to write more maintainable and reusable CSS code",
          "It provides features like variables, mixins, and functions",
          "It can help in creating complex responsive layouts",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        question: "How can you test the responsiveness of a website?",
        options: [
          "Using browser developer tools to simulate different screen sizes",
          "Using online tools like BrowserStack or LambdaTest",
          "Testing on real devices",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        question: "What is the concept of 'intrinsic web design'?",
        options: [
          "A design that is based on the content and not a fixed layout",
          "A design that uses only intrinsic elements",
          "A design that is not responsive",
          "A design that is built with a specific framework",
        ],
        answer: "A design that is based on the content and not a fixed layout",
      },
      {
        question: "How do you handle hover effects on touch devices?",
        options: [
          "Use media queries to disable hover effects on touch devices",
          "Use JavaScript to detect touch events and toggle a class",
          "Both a and b",
          "Hover effects work the same on touch devices",
        ],
        answer: "Both a and b",
      },
      {
        question: "What is the `prefers-reduced-motion` media feature?",
        options: [
          "It allows users to reduce the amount of motion and animation on a website",
          "It is used to create animations",
          "It is a JavaScript library for motion design",
          "It is a CSS property for controlling motion",
        ],
        answer: "It allows users to reduce the amount of motion and animation on a website",
      },
      {
        question: "What are some common pitfalls to avoid in responsive design?",
        options: [
          "Hiding content on smaller screens",
          "Not testing on real devices",
          "Using large, unoptimized images",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        question: "How can you use CSS custom properties (variables) to create a more flexible responsive design?",
        options: [
          "By defining variables for colors, fonts, and spacing that can be easily changed",
          "By using variables in media queries to create dynamic breakpoints",
          "By creating a theme switcher with custom properties",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        question: "What is the future of responsive design?",
        options: [
          "More focus on user preferences and accessibility",
          "Increased use of container queries and intrinsic web design principles",
          "Greater integration of AI and machine learning to personalize user experiences",
          "All of the above",
        ],
        answer: "All of the above",
      },
    ],
  },
};
