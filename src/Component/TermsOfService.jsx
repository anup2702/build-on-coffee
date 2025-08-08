
const TermsOfService = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12 text-gray-800 dark:text-gray-200">
      <h1 className="text-5xl font-bold mb-6 text-center">
        <span className="bg-gradient-to-r from-coffee-600 via-latte-400 to-mocha-500 bg-clip-text text-transparent">
          Terms of Service
        </span>
      </h1>

      <p className="mb-6">
                  Welcome to <strong className="bg-gradient-to-r from-coffee-600 via-latte-400 to-mocha-500 bg-clip-text text-transparent"> BuildOnCoffee</strong>. By accessing this site, you agree to the
        following terms and conditions. Please read them carefully.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Use of the Site</h2>
      <p className="mb-4">
        BuildOnCoffee provides curated tools and learning resources for developers. You agree not
        to misuse the platform or use it for unlawful purposes.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Content & Contributions</h2>
      <p className="mb-4">
        You may suggest resources or tools. By contributing, you grant us the right to review,
        modify, and display your submission publicly.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Intellectual Property</h2>
      <p className="mb-4">
        All content including design, text, and graphics are the property of BuildOnCoffee unless
        otherwise stated. You may not reuse or redistribute content without permission.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Termination</h2>
      <p className="mb-4">
        We reserve the right to suspend or terminate access to the platform if you violate these
        terms or use the platform inappropriately.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Disclaimer</h2>
      <p className="mb-4">
        All resources are provided "as is". BuildOnCoffee does not guarantee the accuracy or
        reliability of any third-party content.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to These Terms</h2>
      <p className="mb-4">
        We may update our terms of service at any time. Continued use of the site means you accept
        the updated terms.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Contact</h2>
      <p className="mb-4">
        For any questions, contact us at{" "}
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

export default TermsOfService;
