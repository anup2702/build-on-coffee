export const accessibilityAndPerformanceQuiz = {
  title: "Accessibility & Web Performance Quiz",
  questions: {
    beginner: [
      {
        question: "What does WCAG stand for?",
        options: [
          "Web Content Accessibility Guidelines",
          "Web Content Animation Guidelines",
          "Web Connectivity and Graphics",
          "World Wide Web Consortium and Google",
        ],
        answer: "Web Content Accessibility Guidelines",
      },
      {
        question: "Which of the following is NOT a Core Web Vital?",
        options: [
          "Largest Contentful Paint (LCP)",
          "First Input Delay (FID)",
          "Cumulative Layout Shift (CLS)",
          "Time to First Byte (TTFB)",
        ],
        answer: "Time to First Byte (TTFB)",
      },
      {
        question: "What is the purpose of semantic HTML?",
        options: [
          "To make the HTML code look prettier",
          "To provide meaning and structure to web content",
          "To improve JavaScript performance",
          "To style web pages",
        ],
        answer: "To provide meaning and structure to web content",
      },
      {
        question: "What is lazy loading?",
        options: [
          "A technique to load all images at once",
          "A technique to defer the loading of non-critical resources",
          "A way to make websites slower",
          "A CSS property",
        ],
        answer: "A technique to defer the loading of non-critical resources",
      },
      {
        question: "What is the purpose of the alt attribute on an img tag?",
        options: [
          "To provide a title for the image",
          "To provide alternative text for screen readers",
          "To style the image",
          "To hide the image",
        ],
        answer: "To provide alternative text for screen readers",
      },
      {
        question: "Which HTML tag is used to define a hyperlink?",
        options: ["<link>", "<a>", "<href>", "<url>"],
        answer: "<a>",
      },
      {
        question: "What does the acronym ARIA stand for?",
        options: [
          "Accessible Rich Internet Applications",
          "Advanced Responsive Internet Applications",
          "Accessible Rich Interface Applications",
          "Automated Rich Internet Applications",
        ],
        answer: "Accessible Rich Internet Applications",
      },
      {
        question: "Which of the following is a good practice for web performance?",
        options: [
          "Using large, uncompressed images",
          "Minifying CSS and JavaScript files",
          "Loading all scripts in the <head> tag",
          "Avoiding browser caching",
        ],
        answer: "Minifying CSS and JavaScript files",
      },
      {
        question: "What is the purpose of a CDN?",
        options: [
          "To host a website's database",
          "To distribute content closer to users for faster delivery",
          "To provide a secure login system",
          "To create a website's design",
        ],
        answer: "To distribute content closer to users for faster delivery",
      },
      {
        question: "Which of the following status codes indicates a successful HTTP request?",
        options: ["200 OK", "404 Not Found", "500 Internal Server Error", "301 Moved Permanently"],
        answer: "200 OK",
      },
    ],
    intermediate: [
        {
        question: "What is the Critical Rendering Path?",
        options: [
          "The sequence of steps the browser takes to render a page",
          "A tool for debugging JavaScript code",
          "A CSS framework for building responsive layouts",
          "A method for optimizing images",
        ],
        answer: "The sequence of steps the browser takes to render a page",
      },
      {
        question: "What is the difference between `defer` and `async` attributes for a script tag?",
        options: [
          "`async` scripts execute as soon as they are downloaded, while `defer` scripts execute after the document has been parsed",
          "`defer` scripts execute as soon as they are downloaded, while `async` scripts execute after the document has been parsed",
          "There is no difference",
          "`async` is for external scripts, `defer` is for internal scripts",
        ],
        answer: "`async` scripts execute as soon as they are downloaded, while `defer` scripts execute after the document has been parsed",
      },
      {
        question: "What is the purpose of the `role` attribute in HTML?",
        options: [
          "To define the color of an element",
          "To specify the role of an element for accessibility",
          "To set the font size of an element",
          "To create a new HTML tag",
        ],
        answer: "To specify the role of an element for accessibility",
      },
      {
        question: "What is tree shaking?",
        options: [
          "A method for optimizing CSS",
          "A process to remove unused code from a JavaScript bundle",
          "A way to animate elements on a web page",
          "A technique for debugging HTML",
        ],
        answer: "A process to remove unused code from a JavaScript bundle",
      },
      {
        question: "What is the purpose of the `tabindex` attribute?",
        options: [
          "To set the color of a tab",
          "To control the order in which elements receive focus when navigating with the Tab key",
          "To create a new tab in the browser",
          "To hide an element from the tab order",
        ],
        answer: "To control the order in which elements receive focus when navigating with the Tab key",
      },
      {
        question: "What is a sprite sheet?",
        options: [
          "A single image file that contains multiple smaller images",
          "A CSS file for styling sprites",
          "A JavaScript library for creating animations",
          "A type of font",
        ],
        answer: "A single image file that contains multiple smaller images",
      },
      {
        question: "What is the purpose of the `prefers-reduced-motion` media query?",
        options: [
          "To increase the amount of motion on a web page",
          "To reduce or disable animations and transitions for users who are sensitive to motion",
          "To change the color scheme of a web page",
          "To set the font size of a web page",
        ],
        answer: "To reduce or disable animations and transitions for users who are sensitive to motion",
      },
      {
        question: "What is HTTP/2?",
        options: [
          "A new version of the HTTP protocol with performance improvements",
          "A new HTML tag",
          "A CSS framework",
          "A JavaScript library",
        ],
        answer: "A new version of the HTTP protocol with performance improvements",
      },
      {
        question: "What is the purpose of the `aria-live` attribute?",
        options: [
          "To make an element draggable",
          "To indicate that an element will be updated with new content, and to control how screen readers announce those updates",
          "To hide an element from screen readers",
          "To change the color of an element",
        ],
        answer: "To indicate that an element will be updated with new content, and to control how screen readers announce those updates",
      },
      {
        question: "What is Brotli?",
        options: [
          "A new image format",
          "A compression algorithm that can be used to compress files for faster delivery",
          "A JavaScript framework",
          "A CSS preprocessor",
        ],
        answer: "A compression algorithm that can be used to compress files for faster delivery",
      },
    ],
    advanced: [
      {
        question: "What is the PRPL pattern?",
        options: [
          "A pattern for organizing CSS files",
          "A pattern for structuring React components",
          "A pattern for building fast and resilient web applications",
          "A pattern for designing databases",
        ],
        answer: "A pattern for building fast and resilient web applications",
      },
      {
        question: "What is the purpose of the `content-visibility` CSS property?",
        options: [
          "To hide content from screen readers",
          "To improve rendering performance by skipping the rendering of off-screen content",
          "To change the visibility of an element on hover",
          "To create a fade-in animation",
        ],
        answer: "To improve rendering performance by skipping the rendering of off-screen content",
      },
      {
        question: "What is a Service Worker?",
        options: [
          "A script that runs in the background, separate from a web page, and provides features like push notifications and offline capabilities",
          "A CSS preprocessor",
          "A tool for debugging JavaScript",
          "A type of cookie",
        ],
        answer: "A script that runs in the background, separate from a web page, and provides features like push notifications and offline capabilities",
      },
      {
        question: "What is the purpose of the `aria-modal` attribute?",
        options: [
          "To indicate that an element is a modal dialog",
          "To change the color of a modal dialog",
          "To close a modal dialog",
          "To animate a modal dialog",
        ],
        answer: "To indicate that an element is a modal dialog",
      },
      {
        question: "What is code splitting?",
        options: [
          "A technique to split a large JavaScript bundle into smaller chunks that can be loaded on demand",
          "A way to split HTML code into multiple files",
          "A method for splitting CSS code into multiple files",
          "A tool for debugging code",
        ],
        answer: "A technique to split a large JavaScript bundle into smaller chunks that can be loaded on demand",
      },
      {
        question: "What is the purpose of the `aria-labelledby` attribute?",
        options: [
          "To provide a label for an element by referencing another element",
          "To hide an element from screen readers",
          "To change the font size of an element",
          "To create a tooltip for an element",
        ],
        answer: "To provide a label for an element by referencing another element",
      },
      {
        question: "What is server-side rendering (SSR)?",
        options: [
          "A technique to render a web page on the client-side",
          "A technique to render a web page on the server-side to improve performance and SEO",
          "A way to style a web page",
          "A method for creating animations",
        ],
        answer: "A technique to render a web page on the server-side to improve performance and SEO",
      },
      {
        question: "What is the purpose of the `aria-describedby` attribute?",
        options: [
          "To provide a description for an element by referencing another element",
          "To hide an element from screen readers",
          "To change the color of an element",
          "To create a link",
        ],
        answer: "To provide a description for an element by referencing another element",
      },
      {
        question: "What is the difference between `LCP`, `FCP`, and `TTFB`?",
        options: [
          "They are all the same",
          "LCP measures when the largest content element becomes visible, FCP measures when the first content element becomes visible, and TTFB measures the time it takes for the server to respond to a request",
          "LCP is a measure of interactivity, FCP is a measure of visual stability, and TTFB is a measure of loading performance",
          "LCP is a measure of loading performance, FCP is a measure of interactivity, and TTFB is a measure of visual stability",
        ],
        answer: "LCP measures when the largest content element becomes visible, FCP measures when the first content element becomes visible, and TTFB measures the time it takes for the server to respond to a request",
      },
      {
        question: "What is the purpose of the `role='alert'` attribute?",
        options: [
          "To make an element look like an alert",
          "To programmatically expose dynamic content changes in a way that can be announced by assistive technologies",
          "To hide an alert from screen readers",
          "To change the color of an alert",
        ],
        answer: "To programmatically expose dynamic content changes in a way that can be announced by assistive technologies",
      },
    ],
  },
};