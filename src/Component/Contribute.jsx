import React from 'react';

const Contribute = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-6 text-center text-coffee-700">🤝 Contribute to BuildOnCoffee</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-coffee-600 mb-2">📌 How to Get Started</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-800">
          <li>Fork the repo → <code>https://github.com/anup2702/build-on-coffee</code></li>
          <li>Clone your fork: <code>git clone https://github.com/your-username/build-on-coffee</code></li>
          <li>Create a new branch: <code>git checkout -b feature/your-feature-name</code></li>
          <li>Make your changes, test with <code>npm run dev</code></li>
          <li>Commit and push: <code>git commit -m "your message"</code></li>
          <li>Open a Pull Request with a clear title and description</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-coffee-600 mb-2">🧑‍💻 What You Can Contribute</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-800">
          <li>New features or UI improvements</li>
          <li>Fix bugs or issues from GitHub</li>
          <li>Add useful content like tools, courses, project ideas</li>
          <li>Improve the documentation</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-coffee-600 mb-2">🧭 Code Guidelines</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-800">
          <li>Use semantic HTML, readable and modular React components</li>
          <li>Follow Tailwind or existing style conventions</li>
          <li>Run Prettier and ESLint before making a PR</li>
          <li>Write meaningful commit messages</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-coffee-600 mb-2">🎖️ Issue Levels</h2>
        <p className="text-gray-800">
          Issues are marked by difficulty to help you choose:
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-800 mt-2">
          <li><strong>Level 0:</strong> Typo fix, small doc update</li>
          <li><strong>Level 1:</strong> Simple UI task (e.g. card layout)</li>
          <li><strong>Level 2:</strong> Intermediate features like filters</li>
          <li><strong>Level 3:</strong> API integration, new page/component</li>
          <li><strong>Level 4:</strong> Full-stack or major feature overhaul</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-coffee-600 mb-2">📣 Join the Community</h2>
        <p className="text-gray-800">
          Ask questions or suggest ideas in GitHub Discussions or our community Discord.
        </p>
        <p className="text-gray-800 mt-2">
          Don't forget to star the repo ⭐ if you like the project!
        </p>
      </section>

      <div className="text-center mt-12">
        <a
          href="https://github.com/anup2702/build-on-coffee"
          className="inline-block bg-coffee-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-coffee-700 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit GitHub Repo
        </a>
      </div>
    </div>
  );
};

export default Contribute;
