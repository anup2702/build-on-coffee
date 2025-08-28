const gitQuestions = {
  beginner: [
    {
      question: "What is Git?",
      options: [
        "A distributed version control system",
        "A programming language",
        "A database",
        "A web server",
      ],
      answer: "A distributed version control system",
    },
    {
      question: "What is the command to initialize a new Git repository?",
      options: ["git init", "git start", "git new", "git create"],
      answer: "git init",
    },
    {
      question: "What is the command to clone a remote repository?",
      options: ["git clone", "git copy", "git duplicate", "git pull"],
      answer: "git clone",
    },
    {
      question: "What is the command to check the status of your working directory?",
      options: ["git status", "git check", "git info", "git log"],
      answer: "git status",
    },
    {
      question: "What is the command to stage changes for a commit?",
      options: ["git add", "git stage", "git commit", "git push"],
      answer: "git add",
    },
    {
      question: "What is the command to commit staged changes?",
      options: ["git commit", "git save", "git store", "git add"],
      answer: "git commit",
    },
    {
      question: "What is the command to create a new branch?",
      options: ["git branch <branch-name>", "git new-branch <branch-name>", "git create-branch <branch-name>", "git checkout -b <branch-name>"],
      answer: "git checkout -b <branch-name>",
    },
    {
      question: "What is the command to switch to an existing branch?",
      options: ["git checkout <branch-name>", "git switch <branch-name>", "Both a and b", "git go-to <branch-name>"],
      answer: "Both a and b",
    },
    {
      question: "What is the command to push changes to a remote repository?",
      options: ["git push", "git send", "git upload", "git remote-update"],
      answer: "git push",
    },
    {
      question: "What is the command to pull changes from a remote repository?",
      options: ["git pull", "git fetch", "git get", "git download"],
      answer: "git pull",
    },
  ],
  intermediate: [
    {
      question: "What is the difference between `git pull` and `git fetch`?",
      options: [
        "`git fetch` downloads remote changes but does not merge them, `git pull` downloads and merges remote changes",
        "`git pull` downloads remote changes but does not merge them, `git fetch` downloads and merges remote changes",
        "They are the same",
        "There is no `git fetch` command",
      ],
      answer: "`git fetch` downloads remote changes but does not merge them, `git pull` downloads and merges remote changes",
    },
    {
      question: "What is a merge conflict?",
      options: [
        "An event that occurs when Git is unable to automatically resolve differences in code between two commits",
        "An error in your code",
        "A bug in Git",
        "A problem with your internet connection",
      ],
      answer: "An event that occurs when Git is unable to automatically resolve differences in code between two commits",
    },
    {
      question: "What is `git stash` used for?",
      options: [
        "To temporarily store modified, tracked files in order to switch branches or perform other operations",
        "To delete changes",
        "To commit changes",
        "To push changes",
      ],
      answer: "To temporarily store modified, tracked files in order to switch branches or perform other operations",
    },
    {
      question: "What is `git cherry-pick` used for?",
      options: [
        "To apply a specific commit from one branch to another",
        "To delete a commit",
        "To merge two branches",
        "To create a new branch",
      ],
      answer: "To apply a specific commit from one branch to another",
    },
    {
      question: "What is the difference between `git rebase` and `git merge`?",
      options: [
        "`git rebase` rewrites the commit history, `git merge` creates a new merge commit",
        "`git merge` rewrites the commit history, `git rebase` creates a new merge commit",
        "They are the same",
        "There is no `git rebase` command",
      ],
      answer: "`git rebase` rewrites the commit history, `git merge` creates a new merge commit",
    },
    {
      question: "What is a Git tag?",
      options: [
        "A reference to a specific point in Git history, used for marking release points",
        "A type of branch",
        "A type of commit",
        "A way to comment on code",
      ],
      answer: "A reference to a specific point in Git history, used for marking release points",
    },
    {
      question: "What is a pull request on GitHub?",
      options: [
        "A way to propose changes to a repository",
        "A way to download a repository",
        "A way to delete a repository",
        "A way to create a new repository",
      ],
      answer: "A way to propose changes to a repository",
    },
    {
      question: "What is forking a repository on GitHub?",
      options: [
        "Creating a personal copy of someone else's repository",
        "Deleting a repository",
        "Cloning a repository",
        "Merging a repository",
      ],
      answer: "Creating a personal copy of someone else's repository",
    },
    {
      question: "What is a good practice for writing commit messages?",
      options: [
        "Keep them short and descriptive",
        "Explain the 'what' and 'why' of the change",
        "Follow a consistent style",
        "All of the above",
      ],
      answer: "All of the above",
    },
    {
      question: "What is a good branch naming convention?",
      options: [
        "Use descriptive names, like `feature/add-login-page`",
        "Use short names, like `dev`",
        "Use random names",
        "It doesn't matter",
      ],
      answer: "Use descriptive names, like `feature/add-login-page`",
    },
  ],
  advanced: [
    {
      question: "What is `git bisect` used for?",
      options: [
        "To find the commit that introduced a bug",
        "To split a commit into two",
        "To merge two commits",
        "To delete a commit",
      ],
      answer: "To find the commit that introduced a bug",
    },
    {
      question: "What is `git reflog` used for?",
      options: [
        "To view a log of all references' history, including commits that are no longer reachable by any branch",
        "To log all references to a file",
        "To delete a reference",
        "To create a new reference",
      ],
      answer: "To view a log of all references' history, including commits that are no longer reachable by any branch",
    },
    {
      question: "What is a submodule in Git?",
      options: [
        "A way to include another Git repository as a subdirectory within your own repository",
        "A small module of code",
        "A type of branch",
        "A type of commit",
      ],
      answer: "A way to include another Git repository as a subdirectory within your own repository",
    },
    {
      question: "What are Git hooks?",
      options: [
        "Scripts that run automatically every time a particular event occurs in a Git repository",
        "A way to hang your coat",
        "A type of branch",
        "A type of commit",
      ],
      answer: "Scripts that run automatically every time a particular event occurs in a Git repository",
    },
    {
      question: "What is GitHub Actions?",
      options: [
        "A CI/CD platform that allows you to automate your build, test, and deployment pipeline",
        "A way to manage your GitHub account",
        "A way to create issues on GitHub",
        "A way to comment on pull requests",
      ],
      answer: "A CI/CD platform that allows you to automate your build, test, and deployment pipeline",
    },
    {
      question: "What is the difference between `git reset --soft`, `git reset --mixed`, and `git reset --hard`?",
      options: [
        "`--soft` resets the HEAD, `--mixed` resets the HEAD and index, `--hard` resets the HEAD, index, and working directory",
        "`--hard` resets the HEAD, `--mixed` resets the HEAD and index, `--soft` resets the HEAD, index, and working directory",
        "They are all the same",
        "There is no `git reset --mixed`",
      ],
      answer: "`--soft` resets the HEAD, `--mixed` resets the HEAD and index, `--hard` resets the HEAD, index, and working directory",
    },
    {
      question: "What is `git blame` used for?",
      options: [
        "To see who last modified each line of a file",
        "To blame someone for a bug",
        "To delete a file",
        "To create a new file",
      ],
      answer: "To see who last modified each line of a file",
    },
    {
      question: "What is a detached HEAD state in Git?",
      options: [
        "When you are not on any branch, but are checked out to a specific commit",
        "When your HEAD is detached from your body",
        "When you have a merge conflict",
        "When you have a bug in your code",
      ],
      answer: "When you are not on any branch, but are checked out to a specific commit",
    },
    {
      question: "What is the purpose of a `.gitignore` file?",
      options: [
        "To specify intentionally untracked files to ignore",
        "To ignore all files",
        "To delete files",
        "To add files",
      ],
      answer: "To specify intentionally untracked files to ignore",
    },
    {
      question: "What is `git rebase -i` used for?",
      options: [
        "To interactively rebase commits, allowing you to edit, reorder, squash, and more",
        "To rebase commits non-interactively",
        "To delete commits",
        "To create new commits",
      ],
      answer: "To interactively rebase commits, allowing you to edit, reorder, squash, and more",
    },
  ],
};

export default gitQuestions;
