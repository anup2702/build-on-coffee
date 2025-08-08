import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12 text-gray-800 dark:text-gray-200">
      <h1 className="text-5xl font-bold mb-6 text-center">
        <span className="bg-gradient-to-r from-coffee-600 via-latte-400 to-mocha-500 bg-clip-text text-transparent">
          Privacy Policy
        </span>
      </h1>

      <p className="mb-6">
                  At <strong className="bg-gradient-to-r from-coffee-600 via-latte-400 to-mocha-500 bg-clip-text  text-transparent">BuildOnCoffee</strong>, your privacy is important to us. We do not collect
        personal information unless explicitly provided. Our services rely solely on public
        GitHub APIs, and we do not store any user data on our servers.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
      <p className="mb-4">
        We do not collect personal data such as names, emails, or passwords. Any information
        shown (such as GitHub usernames or repositories) is publicly available via the GitHub API.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Use of Data</h2>
      <p className="mb-4">
        We use data only to display public repositories, profiles, and statistics to improve your
        experience on the platform. No tracking or analytics cookies are used.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Third-Party Services</h2>
      <p className="mb-4">
        BuildOnCoffee integrates GitHub API services. Please refer to{" "}
        <a
          href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement"
          className="text-blue-600 dark:text-blue-400 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub’s Privacy Policy
        </a>{" "}
        for more information.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to This Policy</h2>
      <p className="mb-4">
        We may update this policy periodically. All changes will be reflected on this page.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
      <p className="mb-4">
        If you have questions about this policy, email us at{" "}
        <a
          href="mailto:support@buildoncoffee.com"
          className="text-blue-600 dark:text-blue-400 underline"
        >
          support@buildoncoffee.com
        </a>.
      </p>
    </section>
  );
};

export default PrivacyPolicy;
