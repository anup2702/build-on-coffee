export const openSourceSteps = [
  {
    title: "1. Learn the Open Source Landscape",
    description:
      "Build a solid foundation by understanding the philosophy of open source, its legal frameworks, and the essential tools used across nearly every project. This initial knowledge is crucial for navigating the community and contributing effectively.",
    topics: [
      "Core Philosophy: What 'open source' means beyond free code; the principles of collaboration, transparency, and community-driven development.",
      "Key Licenses: Differentiating between permissive (MIT, Apache 2.0, BSD) and copyleft (GPL, AGPL) licenses and understanding their implications for contributors and users.",
      "Git & GitHub Fluency: Mastering the core workflow: `fork`, `clone`, `branch`, creating feature branches, `commit` with clear messages, `push`, and opening a Pull Request (PR). Understanding `merge`, `rebase`, and how to sync your fork with the upstream project.",
      "Anatomy of a Project: The purpose of key files: `README.md` (project overview), `LICENSE` (legal terms), `CONTRIBUTING.md` (contribution guide), and `CODE_OF_CONDUCT.md` (community standards).",
      "Professional Profile: Setting up your GitHub profile with a clear bio, profile README, and pinning your most relevant projects to showcase your skills and interests.",
    ],
    resources: [
      { name: "Open Source Guides by GitHub", link: "https://opensource.guide/" },
      { name: "Pro Git Book (free)", link: "https://git-scm.com/book/en/v2" },
      { name: "Choose a License", link: "https://choosealicense.com/" },
      { name: "Contributor Covenant (CoC template)", link: "https://www.contributor-covenant.org/" }
    ],
  },
  {
    title: "2. Discover & Evaluate Projects",
    description:
      "Find projects that align with your technical skills and personal interests. A critical part of this step is learning to evaluate a project's health and friendliness towards new contributors to ensure a positive first experience.",
    topics: [
      "Discovery Platforms: Using tools like GitHub Explore, Up For Grabs, CodeTriage, and aggregators like goodfirstissue.dev to find projects seeking help.",
      "Assessing Project Health: Checking for recent commit activity, the average time to close issues and PRs, and the ratio of open to closed issues.",
      "Newcomer-Friendly Signals: Looking for labels like `good-first-issue`, `help-wanted`, `documentation`, or `beginner-friendly`. A welcoming tone in discussions is a great sign.",
      "Due Diligence: Carefully reading the `CONTRIBUTING.md` file to understand the expected workflow and ensuring the project's license is compatible with your goals. Check if a Contributor License Agreement (CLA) is required.",
      "Community Vibe Check: Observing discussion forums (Discord, Slack) or issue threads to gauge the responsiveness and tone of the maintainers and community.",
    ],
    resources: [
      { name: "Up For Grabs", link: "https://up-for-grabs.net/" },
      { name: "Good First Issue", link: "https://goodfirstissue.dev/" },
      { name: "CodeTriage", link: "https://www.codetriage.com/" },
      { name: "Daily.dev beginner guide", link: "https://daily.dev/blog/how-to-start-contributing-to-open-source-projects-a-beginners-guide" }
    ],
  },
  {
    title: "3. Explore & Understand the Project",
    description:
      "Before writing a single line of code, immerse yourself in the project. Understand its goals, architecture, and conventions. This 'lurking' phase is invaluable for making contributions that are well-aligned and easily accepted.",
    topics: [
      "Deep Dive into Docs: Reading the `README` thoroughly, studying the `CONTRIBUTING.md` guidelines, and looking for a project roadmap or vision document.",
      "Local Setup: Cloning the repository, installing dependencies, and successfully running the project and its test suite locally. Debugging setup issues is a contribution in itself.",
      "Codebase Navigation: Identifying the main directories, understanding the project's architecture (e.g., frontend vs. backend, core modules vs. plugins), and how the test suites are structured.",
      "Historical Context: Reading through past issues and merged PRs to understand the project's history, decision-making processes, and communication style.",
      "Process & Workflow: Learning the project's branching strategy (e.g., GitFlow), issue triage process, and release cycle.",
    ],
    resources: [
      { name: "How to Contribute to Open Source (opensource.guide)", link: "https://opensource.guide/how-to-contribute/" },
      { name: "How to Read Code (freeCodeCamp)", link: "https://www.freecodecamp.org/news/how-to-read-code-and-why-it-s-so-important-94d7cb3b9679/" },
      { name: "CNCF Contributor Growth Framework", link: "https://contribute.cncf.io/maintainers/community/contributor-growth-framework/" }
    ],
  },
  {
    title: "4. Make Your First Contribution",
    description:
      "Start with a small, manageable task to learn the project's workflow and build confidence. Your first contribution is more about the process than the code itself.",
    topics: [
      "Identifying a Task: Pick a `good-first-issue`, fix a typo in the documentation, improve code comments, or add a missing test case. Ask to be assigned the issue before you start.",
      "The Contribution Workflow: Fork → Create a descriptive branch → Make your changes → Write clear, atomic commits → Push to your fork → Open a PR against the main project.",
      "Writing Quality Commits & PRs: Following the Conventional Commits standard for commit messages. Writing a detailed PR description that explains the 'what' and 'why' of your change, linking to the relevant issue.",
      "Responding to Feedback: Gracefully accepting and addressing feedback from reviewers. Engaging in constructive discussion and pushing updates to your branch as requested.",
      "Keeping Your Fork Synced: Learning to pull changes from the `upstream` repository into your fork to avoid merge conflicts.",
    ],
    resources: [
      { name: "First Contributions Tutorial Repo", link: "https://github.com/firstcontributions/first-contributions" },
      { name: "Conventional Commits", link: "https://www.conventionalcommits.org/" },
      { name: "How to Write a Git Commit Message", link: "https://cbea.ms/git-commit/" }
    ],
  },
  {
    title: "5. Engage & Build Community Presence",
    description:
      "Move beyond one-off commits and become a trusted member of the community. Consistent, helpful engagement is often more valuable than just writing code.",
    topics: [
      "Active Participation: Helping triage new issues by reproducing bugs or asking for more information. Reviewing PRs from other contributors with constructive suggestions.",
      "Community Support: Joining the project's chat (Discord, Slack) or forums and helping answer questions from other users and new contributors.",
      "Asking Smart Questions: When you're stuck, demonstrate that you've done your research first. Clearly explain your problem, what you've tried, and what you expected to happen.",
      "Building Trust: Consistently delivering on tasks you've claimed and communicating proactively if you're blocked or can no longer work on an issue.",
    ],
    resources: [
      { name: "How to Ask Good Questions (Stack Overflow)", link: "https://stackoverflow.com/help/how-to-ask" },
      { name: "Building Welcoming Communities (Open Source Guide)", link: "https://opensource.guide/building-community/" }
    ],
  },
  {
    title: "6. Expand Scope & Take Ownership",
    description:
      "Transition from small fixes to tackling more complex issues and features. At this stage, you start to influence the project's direction and become a go-to person for specific areas.",
    topics: [
      "Tackling Larger Issues: Taking on medium-complexity bugs or feature requests that require a deeper understanding of the codebase.",
      "Code Refactoring: Proactively improving parts of the codebase for performance, readability, or maintainability.",
      "Driving Features: Writing design proposals or RFCs (Request for Comments) for significant new features to gather feedback before implementation.",
      "Mentorship: Formally or informally mentoring new contributors, helping them navigate the codebase and contribution process.",
      "Improving Project Health: Helping to improve the CI/CD pipeline, adding better test coverage, or enhancing the project's documentation.",
    ],
    resources: [
      { name: "Google's Guide on Writing Design Docs", link: "https://www.industrialempathy.com/posts/write-design-docs/" },
      { name: "What is a Request for Comments (RFC)?", link: "https://www.techtarget.com/whatis/definition/Request-for-Comments-RFC" }
    ],
  },
  {
    title: "7. Transition to Maintainer Role",
    description:
      "Evolve into a leadership role focused on stewardship. This involves taking responsibility for the project's long-term health, direction, and the well-being of its community.",
    topics: [
      "Understanding Roles: Differentiating between an Author (creates the project), a Maintainer (drives the project), and a Committer (has write access).",
      "PR & Issue Management: Taking primary responsibility for reviewing and merging PRs, triaging issues, and guiding the overall development.",
      "Release Management: Establishing and managing release cycles, writing changelogs, and ensuring the stability of new versions.",
      "Project Governance: Formalizing the project's governance model, defining leadership roles, and ensuring a fair decision-making process.",
      "Security & Sustainability: Implementing security best practices (e.g., using OpenSSF tools), managing project finances or funding, and ensuring the project's long-term survival.",
    ],
    resources: [
      { name: "Open Source Maintainers Guide", link: "https://opensource.guide/maintaining-code/" },
      { name: "Open Source Security Foundation (OpenSSF)", link: "https://openssf.org/" },
      { name: "Project Governance Models", link: "https://posthog.com/handbook/company/governance" }
    ],
  },
];