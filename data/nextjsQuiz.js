
export const nextjsQuiz = {
  title: "Next.js Quiz",
  questions: {
    beginner: [
      {
        question: "What is Next.js?",
        options: [
          "A React framework for building production-grade applications",
          "A CSS framework for building custom designs",
          "A database for storing and retrieving data",
          "A programming language for web development",
        ],
        answer: "A React framework for building production-grade applications",
      },
      {
        question: "What is file-based routing in Next.js?",
        options: [
          "A system where files in the `pages` directory automatically become routes",
          "A way to route between different CSS files",
          "A method for routing between different databases",
          "A technique for routing between different programming languages",
        ],
        answer: "A system where files in the `pages` directory automatically become routes",
      },
      {
        question: "What is the difference between Server-Side Rendering (SSR) and Static Site Generation (SSG)?",
        options: [
          "SSR generates the HTML for a page on each request, while SSG generates the HTML at build time",
          "SSG generates the HTML for a page on each request, while SSR generates the HTML at build time",
          "There is no difference",
          "SSR is for static sites, while SSG is for dynamic sites",
        ],
        answer: "SSR generates the HTML for a page on each request, while SSG generates the HTML at build time",
      },
      {
        question: "What is the purpose of the `getStaticProps` function in Next.js?",
        options: [
          "To fetch data at build time and pass it as props to a page",
          "To fetch data on each request and pass it as props to a page",
          "To fetch data on the client-side",
          "To create a new page",
        ],
        answer: "To fetch data at build time and pass it as props to a page",
      },
      {
        question: "What is the purpose of the `getServerSideProps` function in Next.js?",
        options: [
          "To fetch data on each request and pass it as props to a page",
          "To fetch data at build time and pass it as props to a page",
          "To fetch data on the client-side",
          "To create a new page",
        ],
        answer: "To fetch data on each request and pass it as props to a page",
      },
      {
        question: "How do you create a dynamic route in Next.js?",
        options: [
          "By creating a file with brackets in its name, like `[id].js`",
          "By using a special function in `next.config.js`",
          "By using a third-party library",
          "By using a special component from the Next.js library",
        ],
        answer: "By creating a file with brackets in its name, like `[id].js`",
      },
      {
        question: "What is the purpose of the `next/link` component?",
        options: [
          "To enable client-side navigation between pages",
          "To create a new page",
          "To fetch data from an API",
          "To style a page",
        ],
        answer: "To enable client-side navigation between pages",
      },
      {
        question: "How do you create an API route in Next.js?",
        options: [
          "By creating a file in the `pages/api` directory",
          "By using a special function in `next.config.js`",
          "By using a third-party library",
          "By using a special component from the Next.js library",
        ],
        answer: "By creating a file in the `pages/api` directory",
      },
      {
        question: "What is the purpose of the `next/image` component?",
        options: [
          "To optimize images for performance",
          "To create a new page",
          "To fetch data from an API",
          "To style a page",
        ],
        answer: "To optimize images for performance",
      },
      {
        question: "How do you deploy a Next.js application?",
        options: ["By using a platform like Vercel or Netlify", "By using a traditional server", "By using a CDN", "All of the above"],
        answer: "All of the above",
      },
    ],
    intermediate: [
        {
        question: "What is the purpose of the `getStaticPaths` function in Next.js?",
        options: [
          "To define a list of paths that should be statically generated at build time",
          "To fetch data for a dynamic route",
          "To create a new page",
          "To style a page",
        ],
        answer: "To define a list of paths that should be statically generated at build time",
      },
      {
        question: "What is Incremental Static Regeneration (ISR)?",
        options: [
          "A feature that allows you to update statically generated pages after they have been built",
          "A way to generate static pages on the client-side",
          "A method for creating dynamic routes",
          "A tool for debugging Next.js applications",
        ],
        answer: "A feature that allows you to update statically generated pages after they have been built",
      },
      {
        question: "What is the purpose of the `_app.js` file in Next.js?",
        options: [
          "To override the default App component and apply global styles and layouts",
          "To create a new page",
          "To define API routes",
          "To configure the Next.js application",
        ],
        answer: "To override the default App component and apply global styles and layouts",
      },
      {
        question: "What is the purpose of the `_document.js` file in Next.js?",
        options: [
          "To customize the `<html>` and `<body>` tags of a page",
          "To create a new page",
          "To define API routes",
          "To configure the Next.js application",
        ],
        answer: "To customize the `<html>` and `<body>` tags of a page",
      },
      {
        question: "How do you handle environment variables in Next.js?",
        options: [
          "By using a `.env.local` file and accessing them through `process.env`",
          "By hardcoding them in your code",
          "By using a third-party library",
          "By using a special component from the Next.js library",
        ],
        answer: "By using a `.env.local` file and accessing them through `process.env`",
      },
      {
        question: "What is the purpose of the `next.config.js` file?",
        options: [
          "To configure the Next.js application",
          "To create a new page",
          "To define API routes",
          "To override the default App component",
        ],
        answer: "To configure the Next.js application",
      },
      {
        question: "How do you create a custom error page in Next.js?",
        options: [
          "By creating a `pages/_error.js` file",
          "By using a special function in `next.config.js`",
          "By using a third-party library",
          "By using a special component from the Next.js library",
        ],
        answer: "By creating a `pages/_error.js` file",
      },
      {
        question: "What is the purpose of the `next/router` object?",
        options: [
          "To programmatically control routing in your application",
          "To create a new page",
          "To fetch data from an API",
          "To style a page",
        ],
        answer: "To programmatically control routing in your application",
      },
      {
        question: "How do you implement authentication in a Next.js application?",
        options: [
          "By using a library like NextAuth.js or Clerk",
          "By building your own authentication system from scratch",
          "By using a third-party service like Auth0",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        question: "What is the purpose of the `shallow` option in `next/router`?",
        options: [
          "To update the URL without running data fetching methods like `getServerSideProps` or `getStaticProps`",
          "To create a new page",
          "To fetch data from an API",
          "To style a page",
        ],
        answer: "To update the URL without running data fetching methods like `getServerSideProps` or `getStaticProps`",
      },
    ],
    advanced: [
        {
        question: "What is a custom server in Next.js?",
        options: [
          "A way to create your own server logic to handle requests instead of using the default Next.js server",
          "A server for hosting a Next.js application",
          "A server for storing and retrieving data",
          "A server for sending emails",
        ],
        answer: "A way to create your own server logic to handle requests instead of using the default Next.js server",
      },
      {
        question: "What is the purpose of the `rewrites` option in `next.config.js`?",
        options: [
          "To map an incoming request path to a different destination path",
          "To redirect an incoming request path to a different destination path",
          "To create a new page",
          "To define API routes",
        ],
        answer: "To map an incoming request path to a different destination path",
      },
      {
        question: "What is the purpose of the `redirects` option in `next.config.js`?",
        options: [
          "To redirect an incoming request path to a different destination path",
          "To map an incoming request path to a different destination path",
          "To create a new page",
          "To define API routes",
        ],
        answer: "To redirect an incoming request path to a different destination path",
      },
      {
        question: "What is the purpose of the `headers` option in `next.config.js`?",
        options: [
          "To set custom HTTP headers for an incoming request path",
          "To create a new page",
          "To define API routes",
          "To configure the Next.js application",
        ],
        answer: "To set custom HTTP headers for an incoming request path",
      },
      {
        question: "What is the purpose of the `i18n` option in `next.config.js`?",
        options: [
          "To configure internationalization (i18n) for your application",
          "To create a new page",
          "To define API routes",
          "To configure the Next.js application",
        ],
        answer: "To configure internationalization (i18n) for your application",
      },
      {
        question: "What is the purpose of the `next/dynamic` component?",
        options: [
          "To dynamically import components on the client-side",
          "To create a new page",
          "To fetch data from an API",
          "To style a page",
        ],
        answer: "To dynamically import components on the client-side",
      },
      {
        question: "What is the purpose of the `next/script` component?",
        options: [
          "To optimize the loading of third-party scripts",
          "To create a new page",
          "To fetch data from an API",
          "To style a page",
        ],
        answer: "To optimize the loading of third-party scripts",
      },
      {
        question: "What is the purpose of the `next/head` component?",
        options: [
          "To add elements to the `<head>` of a page",
          "To create a new page",
          "To fetch data from an API",
          "To style a page",
        ],
        answer: "To add elements to the `<head>` of a page",
      },
      {
        question: "What is the purpose of the `fallback` option in `getStaticPaths`?",
        options: [
          "To control how Next.js behaves when a requested path is not defined in `getStaticPaths`",
          "To create a new page",
          "To fetch data from an API",
          "To style a page",
        ],
        answer: "To control how Next.js behaves when a requested path is not defined in `getStaticPaths`",
      },
      {
        question: "What is the purpose of the `revalidate` option in `getStaticProps`?",
        options: [
          "To enable Incremental Static Regeneration (ISR) and set the revalidation interval",
          "To create a new page",
          "To fetch data from an API",
          "To style a page",
        ],
        answer: "To enable Incremental Static Regeneration (ISR) and set the revalidation interval",
      },
    ],
  },
};
