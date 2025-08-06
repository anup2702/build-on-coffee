export const webDevSteps = [
  {
    title: "1. Internet & Web Basics",
    description:
      "Before diving into web development, it's essential to understand how the internet works. Learn the basics of how web pages are delivered and rendered.",
    topics: [
      "How the Web Works",
      "HTTP/HTTPS Protocol",
      "DNS & Hosting",
      "Browsers and Rendering Engines",
    ],
    resources: [
      { name: "MDN - How the Web Works", link: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works" },
      { name: "What happens when you type a URL", link: "https://github.com/alex/what-happens-when" },
    ],
    videos: [
      { name: "Computerphile: How the Internet Works", link: "https://www.youtube.com/watch?v=7_LPdttKXPc" },
      { name: "How the Web Works- The Big Picture", link: "https://youtu.be/hJHvdBlSxug?si=K70n9a4ISowivCtg" },
    ],
  },
  {
    title: "2. HTML – Structure of Web",
    description:
      "HTML is the skeleton of all web pages. Learn the essential tags and semantics to structure content correctly.",
    topics: [
      "HTML Tags & Elements",
      "Semantic HTML",
      "Forms and Validation",
      "Accessibility Basics",
    ],
    resources: [
      { name: "HTML Basics (MDN)", link: "https://developer.mozilla.org/en-US/docs/Learn/HTML" },
      { name: "W3Schools HTML", link: "https://www.w3schools.com/html/" },
    ],
    videos: [
      { name: "freeCodeCamp: HTML Full Course", link: "https://www.youtube.com/watch?v=pQN-pnXPaVg" },
      { name: "Codevolution: Learn HTML", link: "https://www.youtube.com/watch?v=kUMe1FH4CHE" },
    ],
  },
  {
    title: "3. CSS – Styling the Web",
    description:
      "CSS adds style and layout to HTML. Understand selectors, the box model, and responsive design principles.",
    topics: [
      "Selectors & Specificity",
      "Box Model",
      "Flexbox & Grid",
      "Media Queries & Responsive Design",
    ],
    resources: [
      { name: "CSS Tricks", link: "https://css-tricks.com/" },
      { name: "MDN CSS Guide", link: "https://developer.mozilla.org/en-US/docs/Learn/CSS" },
    ],
    videos: [
      { name: "Kevin Powell: CSS Tutorials", link: "https://www.youtube.com/c/KevinPowell" },
      { name: "freeCodeCamp: CSS Flexbox & Grid", link: "https://www.youtube.com/watch?v=JJSoEo8JSnc" },
    ],
  },
  {
    title: "4. JavaScript – Logic of the Web",
    description:
      "JavaScript adds interactivity and logic. It's essential for handling events, manipulating DOM, and building dynamic behavior.",
    topics: [
      "Variables & Data Types",
      "Functions & Scope",
      "DOM Manipulation",
      "Events, Arrays, Loops",
    ],
    resources: [
      { name: "JavaScript.info", link: "https://javascript.info/" },
      { name: "MDN JavaScript Guide", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" },
    ],
    videos: [
      { name: "freeCodeCamp: JavaScript Full Course", link: "https://www.youtube.com/watch?v=jS4aFq5-91M" },
      { name: "Fireship: JavaScript in 100 Seconds", link: "https://www.youtube.com/watch?v=DHjqpvDnNGE" },
    ],
  },
  {
    title: "5. Version Control – Git & GitHub",
    description:
      "Version control helps you track code changes and collaborate. Learn Git fundamentals and how to host code on GitHub.",
    topics: [
      "Git Init, Add, Commit, Push",
      "Branches & Merge",
      "Pull Requests",
      "Basic GitHub Flow",
    ],
    resources: [
      { name: "Git Handbook", link: "https://guides.github.com/introduction/git-handbook/" },
      { name: "Learn Git Branching", link: "https://learngitbranching.js.org/" },
    ],
    videos: [
      { name: "Git & GitHub Crash Course", link: "https://www.youtube.com/watch?v=SWYqp7iY_Tc" },
      { name: "freeCodeCamp: Git Full Course", link: "https://www.youtube.com/watch?v=RGOj5yH7evk" },
    ],
  },
  {
    title: "6. Responsive Design & Frameworks",
    description:
      "Build interfaces that look great on all devices. Learn frameworks like Bootstrap and utility-first tools like Tailwind CSS.",
    topics: [
      "Mobile-First Design",
      "Bootstrap",
      "Tailwind CSS",
      "Responsiveness & Breakpoints",
    ],
    resources: [
      { name: "Bootstrap Docs", link: "https://getbootstrap.com/docs/" },
      { name: "Tailwind CSS Docs", link: "https://tailwindcss.com/docs" },
    ],
    videos: [
      { name: "Traversy Media: Tailwind Crash Course", link: "https://www.youtube.com/watch?v=dFgzHOX84xQ" },
      { name: "freeCodeCamp: Bootstrap Tutorial", link: "https://www.youtube.com/watch?v=-qfEOE4vtxE" },
    ],
  },
  {
    title: "7. JavaScript ES6+ & Advanced Topics",
    description:
      "Modern JavaScript features improve readability and performance. Learn arrow functions, destructuring, promises, and async/await.",
    topics: [
      "let, const, arrow functions",
      "Promises & Async/Await",
      "Destructuring & Spread",
      "Modules & Imports",
    ],
    resources: [
      { name: "ES6 Guide (MDN)", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference" },
      { name: "JavaScript Modern Cheat Sheet", link: "https://github.com/mbeaudru/modern-js-cheatsheet" },
    ],
    videos: [
      { name: "Net Ninja: ES6 Tutorial", link: "https://www.youtube.com/playlist?list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU" },
      { name: "Fireship: Async Await in 100 Seconds", link: "https://www.youtube.com/watch?v=V_Kr9OSfDeU" },
    ],
  },
  {
    title: "8. DOM Projects",
    description:
      "Build small interactive projects using HTML, CSS, and JS to master real-world problem-solving.",
    topics: [
      "DOM Selection & Events",
      "Local Storage",
      "APIs with Fetch",
    ],
    resources: [
      { name: "JavaScript30 by Wes Bos", link: "https://javascript30.com/" },
      { name: "DOM Tutorial (MDN)", link: "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model" },
    ],
    videos: [
      { name: "Codehal: Build 10 Projects", link: "https://www.youtube.com/watch?v=3PHXvlpOkf4" },
    ],
  },
  {
    title: "9. Frontend Framework – React.js",
    description:
      "React is the most popular frontend library. Learn component-based architecture, hooks, state management, and routing.",
    topics: [
      "JSX & Components",
      "State & Props",
      "React Router",
      "Hooks (useState, useEffect)",
    ],
    resources: [
      { name: "React Docs", link: "https://reactjs.org/docs/getting-started.html" },
      { name: "Beta React Docs", link: "https://beta.reactjs.org/" },
    ],
    videos: [
      { name: "freeCodeCamp: React Full Course", link: "https://www.youtube.com/watch?v=bMknfKXIFA8" },
      { name: "Codevolution: React Tutorials", link: "https://www.youtube.com/playlist?list=PLC3y8-rFHvwhuX4qG3b9v6SoTIM43zo9v" },
    ],
  },
  {
    title: "10. Backend with Node.js & Express",
    description:
      "Learn how to build servers, create APIs, and connect with databases using Node.js and Express.js.",
    topics: [
      "REST APIs",
      "Routing & Middleware",
      "CRUD with MongoDB",
      "Authentication (JWT)",
    ],
    resources: [
      { name: "Express Docs", link: "https://expressjs.com/" },
      { name: "MongoDB Docs", link: "https://www.mongodb.com/docs/" },
    ],
    videos: [
      { name: "Node & Express Crash Course", link: "https://www.youtube.com/watch?v=fBNz5xF-Kx4" },
      { name: "MongoDB Crash Course", link: "https://youtu.be/J6mDkcqU_ZE?si=aGj8BjrA384O34fq" },
    ],
  },
  {
    title: "11. Deployment & DevOps Basics",
    description:
      "Deploy your apps to production. Learn hosting, CI/CD pipelines, and environment configuration.",
    topics: [
      "Netlify, Vercel, Render",
      "GitHub Actions (CI/CD)",
      ".env & Environment Configs",
      "Basic DevOps Concepts",
    ],
    resources: [
      { name: "Netlify Docs", link: "https://docs.netlify.com/" },
      { name: "Vercel Docs", link: "https://vercel.com/docs" },
    ],
    videos: [
      { name: "Deploy MERN App on Render", link: "https://www.youtube.com/watch?v=1tRLveSyNz8" },
      { name: "GitHub Actions Crash Course", link: "https://www.youtube.com/watch?v=R8_veQiYBjI" },
    ],
  },
  {
    title: "12. Explore Full-Stack & Projects",
    description:
      "Apply your knowledge by building full-stack apps and hosting them. Explore advanced stack options.",
    topics: [
      "MERN Stack (Mongo, Express, React, Node)",
      "Next.js",
      "Authentication & Authorization",
      "API Integrations (Payment, Email)",
    ],
    resources: [
      { name: "Full Stack Open", link: "https://fullstackopen.com/en/" },
      { name: "Next.js Docs", link: "https://nextjs.org/docs" },
    ],
    videos: [
      { name: "Build MERN Blog App", link: "https://www.youtube.com/watch?v=7CqJlxBYj-M" },
      { name: "Next.js Crash Course", link: "https://www.youtube.com/watch?v=mTz0GXj8NN0" },
    ],
  },
];
