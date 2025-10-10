export const linuxAndShellScriptingQuiz = {
  title: "Linux & Shell Scripting Quiz",
  questions: {
    beginner: [
      {
        question: "What is Linux?",
        options: [
          "An open-source operating system",
          "A programming language",
          "A database system",
          "A web server"
        ],
        answer: "An open-source operating system"
      },
      {
        question: "What is a shell in Linux?",
        options: [
          "A program that interprets and executes commands",
          "A type of database",
          "A text editor",
          "A filesystem"
        ],
        answer: "A program that interprets and executes commands"
      },
      {
        question: "What does the 'ls' command do?",
        options: [
          "Lists files and directories in the current directory",
          "Deletes a file",
          "Creates a new directory",
          "Shows system processes"
        ],
        answer: "Lists files and directories in the current directory"
      },
      {
        question: "What does the 'cd' command do?",
        options: [
          "Changes the current working directory",
          "Copies files",
          "Displays contents of a file",
          "Removes a directory"
        ],
        answer: "Changes the current working directory"
      },
      {
        question: "What is a file permission?",
        options: [
          "Rules that determine who can read, write, or execute a file",
          "The size of a file",
          "The location of a file",
          "The owner of the file only"
        ],
        answer: "Rules that determine who can read, write, or execute a file"
      },
      {
        question: "What does the 'mkdir' command do?",
        options: [
          "Creates a new directory",
          "Deletes a directory",
          "Lists directories",
          "Changes directory permissions"
        ],
        answer: "Creates a new directory"
      },
      {
        question: "What is the command to display the contents of a file?",
        options: [
          "cat",
          "ls",
          "cd",
          "rm"
        ],
        answer: "cat"
      },
      {
        question: "What does the 'rm' command do?",
        options: [
          "Removes files or directories",
          "Renames files",
          "Reads files",
          "Runs a script"
        ],
        answer: "Removes files or directories"
      },
      {
        question: "What is the default shell in most Linux distributions?",
        options: [
          "Bash",
          "Zsh",
          "Fish",
          "Ksh"
        ],
        answer: "Bash"
      },
      {
        question: "What is a process in Linux?",
        options: [
          "An instance of a running program",
          "A file on the filesystem",
          "A network connection",
          "A user account"
        ],
        answer: "An instance of a running program"
      }
    ],
    intermediate: [
      {
        question: "What is the purpose of 'chmod'?",
        options: [
          "Changes file permissions",
          "Changes file ownership",
          "Changes file name",
          "Displays file content"
        ],
        answer: "Changes file permissions"
      },
      {
        question: "What does 'ps' command do?",
        options: [
          "Displays currently running processes",
          "Shows disk usage",
          "Displays network connections",
          "Shows system logs"
        ],
        answer: "Displays currently running processes"
      },
      {
        question: "What is the purpose of 'grep'?",
        options: [
          "Searches for patterns in files or outputs",
          "Edits files",
          "Monitors system performance",
          "Installs software packages"
        ],
        answer: "Searches for patterns in files or outputs"
      },
      {
        question: "What is piping in Linux?",
        options: [
          "Redirecting the output of one command as input to another",
          "Copying files between directories",
          "Running commands in the background",
          "Scheduling commands"
        ],
        answer: "Redirecting the output of one command as input to another"
      },
      {
        question: "What does 'cron' do?",
        options: [
          "Schedules tasks to run at specific times",
          "Monitors system logs",
          "Installs software",
          "Manages user accounts"
        ],
        answer: "Schedules tasks to run at specific times"
      },
      {
        question: "What is the difference between '>' and '>>' in shell?",
        options: [
          "'>' overwrites a file, '>>' appends to a file",
          "'>' appends to a file, '>>' overwrites a file",
          "Both overwrite files",
          "Both append to files"
        ],
        answer: "'>' overwrites a file, '>>' appends to a file"
      },
      {
        question: "What is a symbolic link?",
        options: [
          "A pointer to another file or directory",
          "A copy of a file",
          "A backup of a file",
          "An executable file"
        ],
        answer: "A pointer to another file or directory"
      },
      {
        question: "What is a shell script?",
        options: [
          "A file containing a series of shell commands to automate tasks",
          "A compiled program",
          "A configuration file",
          "A text editor"
        ],
        answer: "A file containing a series of shell commands to automate tasks"
      },
      {
        question: "What does 'top' command do?",
        options: [
          "Displays real-time system processes and resource usage",
          "Displays network configuration",
          "Displays user information",
          "Displays disk usage"
        ],
        answer: "Displays real-time system processes and resource usage"
      },
      {
        question: "What is 'awk' commonly used for?",
        options: [
          "Text processing and data extraction",
          "File compression",
          "System monitoring",
          "Process management"
        ],
        answer: "Text processing and data extraction"
      }
    ],
    advanced: [
      {
        question: "What is the difference between hard links and soft links?",
        options: [
          "Hard links point to the inode, soft links point to the file path",
          "Soft links point to the inode, hard links point to the file path",
          "Hard links are slower than soft links",
          "Soft links cannot be deleted"
        ],
        answer: "Hard links point to the inode, soft links point to the file path"
      },
      {
        question: "What is the purpose of 'strace'?",
        options: [
          "Traces system calls and signals made by a process",
          "Monitors CPU usage",
          "Analyzes memory usage",
          "Monitors network traffic"
        ],
        answer: "Traces system calls and signals made by a process"
      },
      {
        question: "What is a background job in shell?",
        options: [
          "A process that runs independently of the terminal",
          "A process that is paused",
          "A process running on another server",
          "A system service"
        ],
        answer: "A process that runs independently of the terminal"
      },
      {
        question: "What does 'sed' command do?",
        options: [
          "Stream editor for modifying text in files",
          "Displays system processes",
          "Schedules tasks",
          "Changes file permissions"
        ],
        answer: "Stream editor for modifying text in files"
      },
      {
        question: "What is environment variable?",
        options: [
          "A dynamic value that affects the behavior of processes",
          "A file that stores system logs",
          "A script that runs at startup",
          "A pointer to a directory"
        ],
        answer: "A dynamic value that affects the behavior of processes"
      },
      {
        question: "What is the difference between '$' and '#'' in shell prompts?",
        options: [
          "'$' indicates a normal user, '#' indicates the root user",
          "'$' indicates root user, '#' indicates normal user",
          "Both indicate normal users",
          "Both indicate root user"
        ],
        answer: "'$' indicates a normal user, '#' indicates the root user"
      },
      {
        question: "What is the purpose of 'netstat'?",
        options: [
          "Displays network connections and listening ports",
          "Monitors disk usage",
          "Displays running processes",
          "Checks memory usage"
        ],
        answer: "Displays network connections and listening ports"
      },
      {
        question: "What is shell expansion?",
        options: [
          "The process where the shell interprets and replaces variables, wildcards, and commands before execution",
          "Running multiple commands simultaneously",
          "Compiling a shell script",
          "Monitoring system performance"
        ],
        answer: "The process where the shell interprets and replaces variables, wildcards, and commands before execution"
      },
      {
        question: "What is the purpose of 'rsync'?",
        options: [
          "Efficiently synchronizes files and directories between locations",
          "Removes files securely",
          "Displays running processes",
          "Monitors disk usage"
        ],
        answer: "Efficiently synchronizes files and directories between locations"
      },
      {
        question: "What is the difference between 'cron' and 'at'?",
        options: [
          "'cron' schedules recurring tasks, 'at' schedules one-time tasks",
          "'at' schedules recurring tasks, 'cron' schedules one-time tasks",
          "Both schedule recurring tasks",
          "Both schedule one-time tasks"
        ],
        answer: "'cron' schedules recurring tasks, 'at' schedules one-time tasks"
      }
    ]
  }
};