
export const tailwindQuiz = {
  title: "Tailwind CSS Quiz",
  questions: {
    beginner: [
      {
        question: "What is Tailwind CSS?",
        options: [
          "A CSS framework for building custom designs without writing custom CSS",
          "A JavaScript library for building user interfaces",
          "A database for storing and retrieving data",
          "A programming language for web development",
        ],
        answer: "A CSS framework for building custom designs without writing custom CSS",
      },
      {
        question: "How do you apply a background color in Tailwind CSS?",
        options: ["bg-blue-500", "background-color: blue;", "color: blue;", "text-blue-500"],
        answer: "bg-blue-500",
      },
      {
        question: "What is the purpose of the `tailwind.config.js` file?",
        options: [
          "To customize the default theme and add new utilities",
          "To write custom CSS rules",
          "To install Tailwind CSS",
          "To create a new React component",
        ],
        answer: "To customize the default theme and add new utilities",
      },
      {
        question: "How do you make an element responsive in Tailwind CSS?",
        options: [
          "By using responsive prefixes like `sm:`, `md:`, `lg:`, `xl:`",
          "By writing media queries in a separate CSS file",
          "By using JavaScript to change the element's class",
          "By using inline styles",
        ],
        answer: "By using responsive prefixes like `sm:`, `md:`, `lg:`, `xl:`",
      },
      {
        question: "What is the purpose of the `@apply` directive in Tailwind CSS?",
        options: [
          "To apply a set of utility classes to a custom CSS class",
          "To create a new utility class",
          "To import a CSS file",
          "To define a new color palette",
        ],
        answer: "To apply a set of utility classes to a custom CSS class",
      },
      {
        question: "How do you add a hover effect in Tailwind CSS?",
        options: ["By using the `hover:` prefix", "By using the `:hover` pseudo-class", "By using JavaScript", "By using the `onmouseover` attribute"],
        answer: "By using the `hover:` prefix",
      },
      {
        question: "What is the purpose of the `JIT` compiler in Tailwind CSS?",
        options: [
          "To generate the CSS for your project on-demand, resulting in smaller CSS files",
          "To compile JavaScript code",
          "To create a new React component",
          "To install Tailwind CSS",
        ],
        answer: "To generate the CSS for your project on-demand, resulting in smaller CSS files",
      },
      {
        question: "How do you add a dark mode to your website with Tailwind CSS?",
        options: [
          "By using the `dark:` prefix",
          "By using a separate CSS file for dark mode",
          "By using JavaScript to toggle a class on the `html` element",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        question: "How do you install Tailwind CSS?",
        options: [
          "By using a package manager like npm or yarn",
          "By downloading a CSS file from the Tailwind CSS website",
          "By using a CDN",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        question: "What is the purpose of the `group` utility in Tailwind CSS?",
        options: [
          "To style an element based on the state of a parent element",
          "To group multiple elements together",
          "To create a new utility class",
          "To apply a set of utility classes to a custom CSS class",
        ],
        answer: "To style an element based on the state of a parent element",
      },
    ],
    intermediate: [
        {
        question: "How do you create a custom utility class in Tailwind CSS?",
        options: [
          "By using the `@layer` directive in your CSS file",
          "By adding a new property to the `theme` object in `tailwind.config.js`",
          "By using the `@variants` directive in your CSS file",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        question: "What is the purpose of the `purge` option in `tailwind.config.js`?",
        options: [
          "To remove unused CSS from your production build",
          "To add new utility classes",
          "To customize the default theme",
          "To install Tailwind CSS",
        ],
        answer: "To remove unused CSS from your production build",
      },
      {
        question: "How do you create a custom color palette in Tailwind CSS?",
        options: [
          "By extending the `colors` object in `tailwind.config.js`",
          "By using the `@colors` directive in your CSS file",
          "By creating a new CSS file with your custom colors",
          "By using inline styles",
        ],
        answer: "By extending the `colors` object in `tailwind.config.js`",
      },
      {
        question: "What is the purpose of the `variants` option in `tailwind.config.js`?",
        options: [
          "To enable or disable variants for a specific utility",
          "To create new variants",
          "To customize the default theme",
          "To install Tailwind CSS",
        ],
        answer: "To enable or disable variants for a specific utility",
      },
      {
        question: "How do you create a custom font family in Tailwind CSS?",
        options: [
          "By extending the `fontFamily` object in `tailwind.config.js`",
          "By using the `@font-face` rule in your CSS file",
          "By using the `@font` directive in your CSS file",
          "By using inline styles",
        ],
        answer: "By extending the `fontFamily` object in `tailwind.config.js`",
      },
      {
        question: "What is the purpose of the `plugins` option in `tailwind.config.js`?",
        options: [
          "To add new functionality to Tailwind CSS",
          "To customize the default theme",
          "To install Tailwind CSS",
          "To create new utility classes",
        ],
        answer: "To add new functionality to Tailwind CSS",
      },
      {
        question: "How do you create a custom spacing scale in Tailwind CSS?",
        options: [
          "By extending the `spacing` object in `tailwind.config.js`",
          "By using the `@spacing` directive in your CSS file",
          "By creating a new CSS file with your custom spacing values",
          "By using inline styles",
        ],
        answer: "By extending the `spacing` object in `tailwind.config.js`",
      },
      {
        question: "What is the purpose of the `important` option in `tailwind.config.js`?",
        options: [
          "To make all utility classes `!important`",
          "To make a specific utility class `!important`",
          "To disable `!important` for all utility classes",
          "To enable `!important` for a specific utility class",
        ],
        answer: "To make all utility classes `!important`",
      },
      {
        question: "How do you create a custom screen size in Tailwind CSS?",
        options: [
          "By extending the `screens` object in `tailwind.config.js`",
          "By using the `@screens` directive in your CSS file",
          "By creating a new CSS file with your custom screen sizes",
          "By using inline styles",
        ],
        answer: "By extending the `screens` object in `tailwind.config.js`",
      },
      {
        question: "What is the purpose of the `prefix` option in `tailwind.config.js`?",
        options: [
          "To add a prefix to all utility classes",
          "To remove the prefix from all utility classes",
          "To customize the default theme",
          "To install Tailwind CSS",
        ],
        answer: "To add a prefix to all utility classes",
      },
    ],
    advanced: [
        {
        question: "How do you create a custom variant in Tailwind CSS?",
        options: [
          "By using the `addVariant` function in a plugin",
          "By using the `@variants` directive in your CSS file",
          "By adding a new property to the `variants` object in `tailwind.config.js`",
          "By using the `@custom-variant` directive in your CSS file",
        ],
        answer: "By using the `addVariant` function in a plugin",
      },
      {
        question: "What is the purpose of the `matchUtilities` function in a Tailwind CSS plugin?",
        options: [
          "To create new utility classes with dynamic values",
          "To create new static utility classes",
          "To create new variants",
          "To customize the default theme",
        ],
        answer: "To create new utility classes with dynamic values",
      },
      {
        question: "How do you create a custom component in Tailwind CSS?",
        options: [
          "By using the `@layer` directive to add custom styles to a component class",
          "By using the `addComponent` function in a plugin",
          "By using the `@apply` directive to extract component classes",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        question: "What is the purpose of the `theme` function in a Tailwind CSS plugin?",
        options: [
          "To access the user's theme configuration",
          "To create new utility classes",
          "To create new variants",
          "To customize the default theme",
        ],
        answer: "To access the user's theme configuration",
      },
      {
        question: "How do you create a custom transition in Tailwind CSS?",
        options: [
          "By extending the `transitionProperty` and `transitionTimingFunction` objects in `tailwind.config.js`",
          "By using the `@transition` directive in your CSS file",
          "By creating a new CSS file with your custom transitions",
          "By using inline styles",
        ],
        answer: "By extending the `transitionProperty` and `transitionTimingFunction` objects in `tailwind.config.js`",
      },
      {
        question: "What is the purpose of the `corePlugins` option in `tailwind.config.js`?",
        options: [
          "To disable core plugins that you don't want to use",
          "To enable core plugins that you want to use",
          "To customize the default theme",
          "To install Tailwind CSS",
        ],
        answer: "To disable core plugins that you don't want to use",
      },
      {
        question: "How do you create a custom animation in Tailwind CSS?",
        options: [
          "By extending the `keyframes` and `animation` objects in `tailwind.config.js`",
          "By using the `@keyframes` rule in your CSS file",
          "By using the `@animation` directive in your CSS file",
          "By using inline styles",
        ],
        answer: "By extending the `keyframes` and `animation` objects in `tailwind.config.js`",
      },
      {
        question: "What is the purpose of the `addComponents` function in a Tailwind CSS plugin?",
        options: [
          "To add new component classes to Tailwind's stylesheet",
          "To create new utility classes",
          "To create new variants",
          "To customize the default theme",
        ],
        answer: "To add new component classes to Tailwind's stylesheet",
      },
      {
        question: "How do you create a custom gradient in Tailwind CSS?",
        options: [
          "By extending the `backgroundImage` and `gradientColorStops` objects in `tailwind.config.js`",
          "By using the `@gradient` directive in your CSS file",
          "By creating a new CSS file with your custom gradients",
          "By using inline styles",
        ],
        answer: "By extending the `backgroundImage` and `gradientColorStops` objects in `tailwind.config.js`",
      },
      {
        question: "What is the purpose of the `addBase` function in a Tailwind CSS plugin?",
        options: [
          "To add new base styles to Tailwind's stylesheet",
          "To create new utility classes",
          "To create new variants",
          "To customize the default theme",
        ],
        answer: "To add new base styles to Tailwind's stylesheet",
      },
    ],
  },
};
